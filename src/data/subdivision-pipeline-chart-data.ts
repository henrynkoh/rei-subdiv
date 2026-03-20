/**
 * Illustrative time series for teaching chart literacy — NOT official SDCI / King County statistics.
 * Greater Seattle does not publish a unified 8-year “single-family subdivision pipeline” cube in this shape.
 * Replace this module with your own ETL from plat searches, LU types, and permit APIs.
 */

export type PipelinePhase = "actual" | "projection";

export type PipelineYearRow = {
  yearLabel: string;
  year: number;
  phase: PipelinePhase;
  /** New preliminary applications (e.g. short plat / unit lot pre-apps — modeled conceptually) */
  applications: number;
  /** Master use / plat decisions deemed approvable */
  permitApprovals: number;
  /** Active building permits / construction tracked against subdivided lots */
  inConstruction: number;
  /** CO / TCO expected within ~12 months */
  soonToComplete: number;
  /** Recorded plat / certificates of occupancy closed in year */
  completed: number;
};

/** Last 5 completed fiscal-years style + next 3 illustrative projection years (as of curriculum vintage). */
export const pipelineDemoSeries: PipelineYearRow[] = [
  {
    yearLabel: "2021",
    year: 2021,
    phase: "actual",
    applications: 52,
    permitApprovals: 44,
    inConstruction: 36,
    soonToComplete: 14,
    completed: 29,
  },
  {
    yearLabel: "2022",
    year: 2022,
    phase: "actual",
    applications: 58,
    permitApprovals: 49,
    inConstruction: 41,
    soonToComplete: 18,
    completed: 34,
  },
  {
    yearLabel: "2023",
    year: 2023,
    phase: "actual",
    applications: 54,
    permitApprovals: 48,
    inConstruction: 46,
    soonToComplete: 21,
    completed: 38,
  },
  {
    yearLabel: "2024",
    year: 2024,
    phase: "actual",
    applications: 61,
    permitApprovals: 53,
    inConstruction: 49,
    soonToComplete: 24,
    completed: 41,
  },
  {
    yearLabel: "2025",
    year: 2025,
    phase: "actual",
    applications: 63,
    permitApprovals: 55,
    inConstruction: 51,
    soonToComplete: 26,
    completed: 45,
  },
  {
    yearLabel: "2026",
    year: 2026,
    phase: "projection",
    applications: 68,
    permitApprovals: 59,
    inConstruction: 56,
    soonToComplete: 30,
    completed: 49,
  },
  {
    yearLabel: "2027",
    year: 2027,
    phase: "projection",
    applications: 72,
    permitApprovals: 62,
    inConstruction: 59,
    soonToComplete: 34,
    completed: 54,
  },
  {
    yearLabel: "2028",
    year: 2028,
    phase: "projection",
    applications: 76,
    permitApprovals: 66,
    inConstruction: 62,
    soonToComplete: 38,
    completed: 58,
  },
];

export const PIPELINE_CHART_DISCLAIMER =
  "Demonstration data only. These curves illustrate how a subdivision-style pipeline might be visualized (applications → approvals → construction → completion). They are not extracted from a live Seattle or King County “single-family subdivision” dashboard—build your charts from exported permit / plat tables and counsel-approved definitions.";

export function getPipelineChartNavChildren(): { id: string; label: string }[] {
  return [
    { id: "spc-trends", label: "Multi-metric trends" },
    { id: "spc-stacked", label: "Stacked pipeline" },
    { id: "spc-bars", label: "Grouped YoY" },
    { id: "spc-mix", label: "2025 stage mix" },
  ];
}
