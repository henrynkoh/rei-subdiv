#!/usr/bin/env node
/**
 * Rebuilds yearly pipeline metrics from City of Seattle Open Data (Land Use Permits).
 * Dataset: https://data.seattle.gov/d/ht3q-kdvx (resource id ht3q-kdvx)
 *
 * Filter: Single Family/Duplex Master Use Permits whose free-text description matches
 * common short-plat / lot-line adjustment phrases (see SUBDIVISION_WHERE in output).
 *
 * Usage: node scripts/refresh-seattle-sf-plat-pipeline.mjs
 * Prints TS snippet to stdout; use heredoc or paste into subdivision-pipeline-chart-data.ts
 */

import https from "https";

const DATASET_PATH = "/resource/ht3q-kdvx.json";

const SUBDIVISION_WHERE = [
  "permitclass = 'Single Family/Duplex'",
  "permittypemapped = 'Master Use Permit'",
].join(" AND ") +
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

function completionTs(r) {
  if (r.statuscurrent !== "Completed") return null;
  return parseDate(r.decisiondate) || parseDate(r.issueddate);
}

function wasCompleteBy(r, cutoff) {
  const ts = completionTs(r);
  return ts != null && !Number.isNaN(ts.getTime()) && ts <= cutoff;
}

function preIssueBacklogEOY(rows, y) {
  const cutoff = endOfYear(y);
  return rows.filter((r) => {
    if (TERMINAL_BAD.has(r.statuscurrent)) return false;
    if (wasCompleteBy(r, cutoff)) return false;
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
    if (wasCompleteBy(r, cutoff)) return false;
    return true;
  }).length;
}

function countAppliedYear(rows, y) {
  return rows.filter(
    (r) => r.applieddate && yearOf(parseDate(r.applieddate)) === y,
  ).length;
}

function countIssuedYear(rows, y) {
  return rows.filter((r) => {
    if (!r.issueddate || TERMINAL_BAD.has(r.statuscurrent)) return false;
    return yearOf(parseDate(r.issueddate)) === y;
  }).length;
}

function countCompletedYear(rows, y) {
  return rows.filter((r) => {
    if (r.statuscurrent !== "Completed") return false;
    const ts = parseDate(r.decisiondate) || parseDate(r.issueddate);
    return ts && yearOf(ts) === y;
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

async function main() {
  const url =
    "https://data.seattle.gov" +
    DATASET_PATH +
    "?" +
    new URLSearchParams({
      $where: SUBDIVISION_WHERE,
      $select: "permitnum,applieddate,issueddate,decisiondate,statuscurrent",
      $limit: "10000",
    });

  const rows = await httpsGet(url);
  if (!Array.isArray(rows)) {
    console.error("Unexpected API response", rows);
    process.exit(1);
  }

  const actualYears = [2021, 2022, 2023, 2024, 2025];
  const projYears = [2026, 2027, 2028];

  const applications = actualYears.map((y) => countAppliedYear(rows, y));
  const permitApprovals = actualYears.map((y) => countIssuedYear(rows, y));
  const inConstruction = actualYears.map((y) => preIssueBacklogEOY(rows, y));
  const soonToComplete = actualYears.map((y) => issuedPendingFinalEOY(rows, y));
  const completed = actualYears.map((y) => countCompletedYear(rows, y));

  const pApp = linearProject(actualYears, applications, projYears);
  const pIss = linearProject(actualYears, permitApprovals, projYears);
  const pPre = linearProject(actualYears, inConstruction, projYears);
  const pPen = linearProject(actualYears, soonToComplete, projYears);
  const pDone = linearProject(actualYears, completed, projYears);

  const fetchedAt = new Date().toISOString().slice(0, 10);

  const out = [];
  for (let i = 0; i < actualYears.length; i++) {
    const y = actualYears[i];
    out.push(`  {
    yearLabel: "${y}",
    year: ${y},
    phase: "actual",
    applications: ${applications[i]},
    permitApprovals: ${permitApprovals[i]},
    inConstruction: ${inConstruction[i]},
    soonToComplete: ${soonToComplete[i]},
    completed: ${completed[i]},
  },`);
  }
  for (let i = 0; i < projYears.length; i++) {
    const y = projYears[i];
    out.push(`  {
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

  console.log(`// Fetched ${rows.length} rows; generated ${fetchedAt}`);
  console.log("// Replace pipelineSeries array in subdivision-pipeline-chart-data.ts");
  console.log("");
  console.log("export const pipelineSeries: PipelineYearRow[] = [");
  console.log(out.join("\n"));
  console.log("];");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
