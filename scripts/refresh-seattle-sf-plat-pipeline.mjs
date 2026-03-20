#!/usr/bin/env node
/**
 * Rebuilds subdivision pipeline metrics from Seattle open data (Land Use + Building permits).
 *
 * LU:  https://data.seattle.gov/d/ht3q-kdvx
 * BP:  https://data.seattle.gov/d/76t5-zqzr
 *
 * Building slice: permits with `relatedmup` ∈ LU keys from the plat-family filter, and
 * `permittypemapped = 'Building'` (excludes grading-only / demo-only rows on same LU).
 *
 * Usage: npm run data:pipeline
 */

import https from "https";

const LU_PATH = "/resource/ht3q-kdvx.json";
const BP_PATH = "/resource/76t5-zqzr.json";

const SUBDIVISION_WHERE =
  ["permitclass = 'Single Family/Duplex'", "permittypemapped = 'Master Use Permit'"].join(
    " AND ",
  ) +
  " AND (" +
  [
    "upper(description) like '%SHORT PLAT%'",
    "upper(description) like '%BOUNDARY BETWEEN%'",
    "upper(description) like '%ADJUST THE BOUNDARY%'",
    "upper(description) like '%LOT LINE ADJUSTMENT%'",
    "upper(description) like '%UNIT LOT SHORT%'",
  ].join(" OR ") +
  ")";

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(d));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

function parseDate(s) {
  if (!s) return null;
  return new Date(s.length <= 10 ? `${s}T12:00:00` : s);
}

function yearOf(d) {
  return d && !Number.isNaN(d.getTime()) ? d.getUTCFullYear() : null;
}

function endOfYear(y) {
  return new Date(Date.UTC(y, 11, 31, 23, 59, 59));
}

const TERMINAL_BAD = new Set(["Canceled", "Withdrawn"]);

function completionTsLu(r) {
  if (r.statuscurrent !== "Completed") return null;
  return parseDate(r.decisiondate) || parseDate(r.issueddate);
}

function wasLuCompleteBy(r, cutoff) {
  const ts = completionTsLu(r);
  return ts != null && !Number.isNaN(ts.getTime()) && ts <= cutoff;
}

function preIssueBacklogEOY(rows, y) {
  const cutoff = endOfYear(y);
  return rows.filter((r) => {
    if (TERMINAL_BAD.has(r.statuscurrent)) return false;
    if (wasLuCompleteBy(r, cutoff)) return false;
    const applied = parseDate(r.applieddate);
    const issued = parseDate(r.issueddate);
    const start = applied || issued || parseDate(r.decisiondate);
    if (!start || start > cutoff) return false;
    if (!r.issueddate) return true;
    const id = parseDate(r.issueddate);
    return id > cutoff;
  }).length;
}

function issuedPendingFinalEOY(rows, y) {
  const cutoff = endOfYear(y);
  return rows.filter((r) => {
    if (TERMINAL_BAD.has(r.statuscurrent)) return false;
    if (r.statuscurrent === "Completed") return false;
    const issued = parseDate(r.issueddate);
    if (!issued || issued > cutoff) return false;
    if (wasLuCompleteBy(r, cutoff)) return false;
    return true;
  }).length;
}

function countAppliedYear(rows, y) {
  return rows.filter(
    (r) => r.applieddate && yearOf(parseDate(r.applieddate)) === y,
  ).length;
}

function countLuIssuedYear(rows, y) {
  return rows.filter((r) => {
    if (!r.issueddate || TERMINAL_BAD.has(r.statuscurrent)) return false;
    return yearOf(parseDate(r.issueddate)) === y;
  }).length;
}

function countLuCompletedYear(rows, y) {
  return rows.filter((r) => {
    if (r.statuscurrent !== "Completed") return false;
    const ts = parseDate(r.decisiondate) || parseDate(r.issueddate);
    return ts && yearOf(ts) === y;
  }).length;
}

/* ---- Plat-linked building (permittype = Building only) ---- */

function filterPlatLinkedBuilding(bpRows, luPermitNums) {
  return bpRows.filter(
    (r) =>
      r.relatedmup &&
      luPermitNums.has(r.relatedmup) &&
      r.permittypemapped === "Building",
  );
}

function countBpAppliedYear(rows, y) {
  return rows.filter(
    (r) => r.applieddate && yearOf(parseDate(r.applieddate)) === y,
  ).length;
}

function countBpIssuedYear(rows, y) {
  return rows.filter((r) => {
    if (!r.issueddate || TERMINAL_BAD.has(r.statuscurrent)) return false;
    return yearOf(parseDate(r.issueddate)) === y;
  }).length;
}

function countBpCompletedByCompletedDate(rows, y) {
  return rows.filter(
    (r) =>
      r.completeddate && yearOf(parseDate(r.completeddate)) === y,
  ).length;
}

/** Issued on/before EOY, not completed by EOY (by completeddate or status), not canceled/withdrawn */
function bpActiveIssuedEOY(rows, y) {
  const cutoff = endOfYear(y);
  return rows.filter((r) => {
    if (TERMINAL_BAD.has(r.statuscurrent)) return false;
    const issued = parseDate(r.issueddate);
    if (!issued || issued > cutoff) return false;
    if (r.statuscurrent === "Completed") return false;
    const cd = parseDate(r.completeddate);
    if (cd && cd <= cutoff) return false;
    return true;
  }).length;
}

function linearProject(years, values, futureYears) {
  const n = years.length;
  let sx = 0;
  let sy = 0;
  let sxy = 0;
  let sx2 = 0;
  for (let i = 0; i < n; i++) {
    const x = years[i];
    const y = values[i];
    sx += x;
    sy += y;
    sxy += x * y;
    sx2 += x * x;
  }
  const denom = n * sx2 - sx * sx;
  const slope = denom === 0 ? 0 : (n * sxy - sx * sy) / denom;
  const intercept = (sy - slope * sx) / n;
  return futureYears.map((x) => Math.max(0, Math.round(slope * x + intercept)));
}

function emitPipelineRows(actualYears, projYears, applications, permitApprovals, pre, pend, done) {
  const pApp = linearProject(actualYears, applications, projYears);
  const pIss = linearProject(actualYears, permitApprovals, projYears);
  const pPre = linearProject(actualYears, pre, projYears);
  const pPen = linearProject(actualYears, pend, projYears);
  const pDone = linearProject(actualYears, done, projYears);

  const lines = [];
  for (let i = 0; i < actualYears.length; i++) {
    const y = actualYears[i];
    lines.push(`  {
    yearLabel: "${y}",
    year: ${y},
    phase: "actual",
    applications: ${applications[i]},
    permitApprovals: ${permitApprovals[i]},
    inConstruction: ${pre[i]},
    soonToComplete: ${pend[i]},
    completed: ${done[i]},
  },`);
  }
  for (let i = 0; i < projYears.length; i++) {
    const y = projYears[i];
    lines.push(`  {
    yearLabel: "${y}",
    year: ${y},
    phase: "projection",
    applications: ${pApp[i]},
    permitApprovals: ${pIss[i]},
    inConstruction: ${pPre[i]},
    soonToComplete: ${pPen[i]},
    completed: ${pDone[i]},
  },`);
  }
  return lines;
}

function emitBuildingRows(actualYears, projYears, bpA, bpI, bpC, bpS) {
  const pA = linearProject(actualYears, bpA, projYears);
  const pI = linearProject(actualYears, bpI, projYears);
  const pC = linearProject(actualYears, bpC, projYears);
  const pS = linearProject(actualYears, bpS, projYears);
  const lines = [];
  for (let i = 0; i < actualYears.length; i++) {
    const y = actualYears[i];
    lines.push(`  {
    yearLabel: "${y}",
    year: ${y},
    phase: "actual",
    bpApplied: ${bpA[i]},
    bpIssued: ${bpI[i]},
    bpCompleted: ${bpC[i]},
    bpActiveDec31: ${bpS[i]},
  },`);
  }
  for (let i = 0; i < projYears.length; i++) {
    const y = projYears[i];
    lines.push(`  {
    yearLabel: "${y}",
    year: ${y},
    phase: "projection",
    bpApplied: ${pA[i]},
    bpIssued: ${pI[i]},
    bpCompleted: ${pC[i]},
    bpActiveDec31: ${pS[i]},
  },`);
  }
  return lines;
}

async function main() {
  const luUrl =
    "https://data.seattle.gov" +
    LU_PATH +
    "?" +
    new URLSearchParams({
      $where: SUBDIVISION_WHERE,
      $select: "permitnum,applieddate,issueddate,decisiondate,statuscurrent",
      $limit: "10000",
    });

  const luRows = await httpsGet(luUrl);
  if (!Array.isArray(luRows)) {
    console.error("Unexpected LU API response", luRows);
    process.exit(1);
  }

  const luNums = new Set(luRows.map((r) => r.permitnum));

  const bpUrl =
    "https://data.seattle.gov" +
    BP_PATH +
    "?" +
    new URLSearchParams({
      $where: "relatedmup is not null",
      $select:
        "permitnum,relatedmup,permittypemapped,applieddate,issueddate,completeddate,statuscurrent",
      $limit: "50000",
    });

  const bpRows = await httpsGet(bpUrl);
  if (!Array.isArray(bpRows)) {
    console.error("Unexpected BP API response", bpRows);
    process.exit(1);
  }

  const platBp = filterPlatLinkedBuilding(bpRows, luNums);

  const actualYears = [2021, 2022, 2023, 2024, 2025];
  const projYears = [2026, 2027, 2028];

  const applications = actualYears.map((y) => countAppliedYear(luRows, y));
  const permitApprovals = actualYears.map((y) => countLuIssuedYear(luRows, y));
  const inConstruction = actualYears.map((y) => preIssueBacklogEOY(luRows, y));
  const soonToComplete = actualYears.map((y) => issuedPendingFinalEOY(luRows, y));
  const completed = actualYears.map((y) => countLuCompletedYear(luRows, y));

  const bpApplied = actualYears.map((y) => countBpAppliedYear(platBp, y));
  const bpIssued = actualYears.map((y) => countBpIssuedYear(platBp, y));
  const bpCompleted = actualYears.map((y) =>
    countBpCompletedByCompletedDate(platBp, y),
  );
  const bpStock = actualYears.map((y) => bpActiveIssuedEOY(platBp, y));

  const fetchedAt = new Date().toISOString().slice(0, 10);

  console.log(`// LU rows: ${luRows.length}; plat-linked Building BP rows: ${platBp.length}; generated ${fetchedAt}`);
  console.log("// Paste into src/data/subdivision-pipeline-chart-data.ts");
  console.log("");
  console.log("export const pipelineSeries: PipelineYearRow[] = [");
  console.log(
    emitPipelineRows(
      actualYears,
      projYears,
      applications,
      permitApprovals,
      inConstruction,
      soonToComplete,
      completed,
    ).join("\n"),
  );
  console.log("];");
  console.log("");
  console.log("export const platLinkedBuildingSeries: PlatLinkedBuildingYearRow[] = [");
  console.log(
    emitBuildingRows(
      actualYears,
      projYears,
      bpApplied,
      bpIssued,
      bpCompleted,
      bpStock,
    ).join("\n"),
  );
  console.log("];");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
