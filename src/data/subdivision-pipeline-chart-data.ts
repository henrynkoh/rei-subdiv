/**
 * Seattle single-family–oriented land reconfiguration pipeline — derived from published open data.
 *
 * **Source:** City of Seattle *Land Use Permits* on data.seattle.gov (Socrata id `ht3q-kdvx`).
 * **URL:** https://data.seattle.gov/d/ht3q-kdvx
 * **Snapshot:** counts below were computed 2026-03-20 (re-run `npm run data:pipeline` after that date).
 *
 * **Filter (text + class):** `permitclass = 'Single Family/Duplex'`,
 * `permittypemapped = 'Master Use Permit'`, and `description` contains any of:
 * short plat, boundary-between-parcel language, lot line adjustment, unit lot short, or adjust-the-boundary phrasing.
 * This approximates small-lot / short-plat–style **land use** work; it is not every Seattle subdivision,
 * excludes multifamily plats, and does **not** replace a title search.
 *
 * **Metric definitions**
 * - `applications` — records with `applieddate` in that calendar year.
 * - `permitApprovals` — records with `issueddate` in that calendar year (excludes Withdrawn/Canceled).
 * - `inConstruction` — **misnamed in legacy UI:** pre-issue / pre-issuance backlog at Dec 31 (`issueddate` null or after year-end), excluding terminal statuses and permits already completed by year-end.
 * - `soonToComplete` — LU **issued on/before** Dec 31 but not Completed and not Withdrawn/Canceled (open post-issuance work at year-end).
 * - `completed` — `statuscurrent = Completed` with completion timestamp from `decisiondate` or, if absent, `issueddate`, in that calendar year.
 *
 * **Projections (2026–2028):** ordinary least-squares line fit on 2021–2025 actuals per series—**not** official SDCI forecasts.
 */

export type PipelinePhase = "actual" | "projection";

export type PipelineYearRow = {
  yearLabel: string;
  year: number;
  phase: PipelinePhase;
  applications: number;
  permitApprovals: number;
  inConstruction: number;
  soonToComplete: number;
  completed: number;
};

export const PIPELINE_OPEN_DATA_ID = "ht3q-kdvx";
export const PIPELINE_DATA_AS_OF = "2026-03-20";

export const pipelineSeries: PipelineYearRow[] = [
  {
    yearLabel: "2021",
    year: 2021,
    phase: "actual",
    applications: 56,
    permitApprovals: 46,
    inConstruction: 69,
    soonToComplete: 59,
    completed: 43,
  },
  {
    yearLabel: "2022",
    year: 2022,
    phase: "actual",
    applications: 49,
    permitApprovals: 51,
    inConstruction: 67,
    soonToComplete: 65,
    completed: 45,
  },
  {
    yearLabel: "2023",
    year: 2023,
    phase: "actual",
    applications: 39,
    permitApprovals: 47,
    inConstruction: 57,
    soonToComplete: 74,
    completed: 38,
  },
  {
    yearLabel: "2024",
    year: 2024,
    phase: "actual",
    applications: 41,
    permitApprovals: 32,
    inConstruction: 65,
    soonToComplete: 78,
    completed: 28,
  },
  {
    yearLabel: "2025",
    year: 2025,
    phase: "actual",
    applications: 39,
    permitApprovals: 45,
    inConstruction: 57,
    soonToComplete: 78,
    completed: 45,
  },
  {
    yearLabel: "2026",
    year: 2026,
    phase: "projection",
    applications: 32,
    permitApprovals: 38,
    inConstruction: 55,
    soonToComplete: 86,
    completed: 36,
  },
  {
    yearLabel: "2027",
    year: 2027,
    phase: "projection",
    applications: 28,
    permitApprovals: 36,
    inConstruction: 53,
    soonToComplete: 91,
    completed: 35,
  },
  {
    yearLabel: "2028",
    year: 2028,
    phase: "projection",
    applications: 24,
    permitApprovals: 34,
    inConstruction: 50,
    soonToComplete: 96,
    completed: 33,
  },
];

/** @deprecated Use `pipelineSeries`; name kept for brief import churn. */
export const pipelineDemoSeries = pipelineSeries;

export const PIPELINE_CHART_DISCLAIMER =
  "Actuals 2021–2025: City of Seattle Land Use Permits open data (data.seattle.gov, id ht3q-kdvx), filtered to Single Family/Duplex Master Use Permits with short-plat / boundary-adjustment wording in the project description—see module comment for exact rules. Calendar-year counts use applieddate, issueddate, or completion dates as noted; Dec 31 figures are point-in-time stock from the same snapshot, not field surveys. 2026–2028: straight-line statistical projection from those five years—not an agency forecast. Middle-housing and building permits are out of scope for this slice.";

export function getPipelineChartNavChildren(): { id: string; label: string }[] {
  return [
    { id: "spc-trends", label: "Multi-metric trends" },
    { id: "spc-stacked", label: "Stacked pipeline" },
    { id: "spc-bars", label: "Grouped YoY" },
    { id: "spc-mix", label: "2025 stage mix" },
  ];
}
