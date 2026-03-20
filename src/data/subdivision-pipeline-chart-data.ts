/**
 * Seattle single-family–oriented land reconfiguration pipeline — derived from published open data.
 *
 * **Land use:** City of Seattle *Land Use Permits* — https://data.seattle.gov/d/ht3q-kdvx (`ht3q-kdvx`).
 * **Plat-linked building:** *Building Permits* — https://data.seattle.gov/d/76t5-zqzr (`76t5-zqzr`), rows where
 * `relatedmup` matches a LU permit number from the plat-family filter **and**
 * `permittypemapped = 'Building'` (construction package; excludes standalone demo/grading-only siblings when typed differently).
 *
 * **Snapshot:** `PIPELINE_DATA_AS_OF` — refresh via `npm run data:pipeline`.
 *
 * **LU filter:** `Single Family/Duplex` + `Master Use Permit` + description keywords (short plat, boundary adjustment, lot line, unit lot short).
 *
 * **LU metrics:** `applications`, `permitApprovals` (LU issued), `completed` (LU completion) = calendar-year;
 * `inConstruction` = pre-issue LU backlog Dec 31; `soonToComplete` = LU issued, still open Dec 31.
 *
 * **Building metrics (plat-linked only):** `bpApplied` / `bpIssued` / `bpCompleted` (by `completeddate`) = calendar-year;
 * `bpActiveDec31` = issued by year-end, not Completed, completion not recorded by year-end.
 *
 * **2026–2028:** OLS on 2021–2025 per series — not SDCI forecasts.
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

export type PlatLinkedBuildingYearRow = {
  yearLabel: string;
  year: number;
  phase: PipelinePhase;
  bpApplied: number;
  bpIssued: number;
  bpCompleted: number;
  bpActiveDec31: number;
};

export const PIPELINE_OPEN_DATA_ID = "ht3q-kdvx";
export const BUILDING_OPEN_DATA_ID = "76t5-zqzr";
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

export const platLinkedBuildingSeries: PlatLinkedBuildingYearRow[] = [
  {
    yearLabel: "2021",
    year: 2021,
    phase: "actual",
    bpApplied: 20,
    bpIssued: 12,
    bpCompleted: 17,
    bpActiveDec31: 30,
  },
  {
    yearLabel: "2022",
    year: 2022,
    phase: "actual",
    bpApplied: 24,
    bpIssued: 21,
    bpCompleted: 15,
    bpActiveDec31: 33,
  },
  {
    yearLabel: "2023",
    year: 2023,
    phase: "actual",
    bpApplied: 21,
    bpIssued: 24,
    bpCompleted: 17,
    bpActiveDec31: 36,
  },
  {
    yearLabel: "2024",
    year: 2024,
    phase: "actual",
    bpApplied: 17,
    bpIssued: 16,
    bpCompleted: 26,
    bpActiveDec31: 41,
  },
  {
    yearLabel: "2025",
    year: 2025,
    phase: "actual",
    bpApplied: 9,
    bpIssued: 18,
    bpCompleted: 14,
    bpActiveDec31: 55,
  },
  {
    yearLabel: "2026",
    year: 2026,
    phase: "projection",
    bpApplied: 10,
    bpIssued: 20,
    bpCompleted: 19,
    bpActiveDec31: 56,
  },
  {
    yearLabel: "2027",
    year: 2027,
    phase: "projection",
    bpApplied: 7,
    bpIssued: 21,
    bpCompleted: 20,
    bpActiveDec31: 62,
  },
  {
    yearLabel: "2028",
    year: 2028,
    phase: "projection",
    bpApplied: 4,
    bpIssued: 22,
    bpCompleted: 20,
    bpActiveDec31: 68,
  },
];

/** @deprecated Use `pipelineSeries`. */
export const pipelineDemoSeries = pipelineSeries;

export const PIPELINE_CHART_DISCLAIMER =
  "Land use: data.seattle.gov `ht3q-kdvx` (SF/Duplex MUPs, plat/boundary keywords). Plat-linked building: `76t5-zqzr` with `relatedmup` on that LU set and `permittypemapped = 'Building'`. LU completion ≠ building `completeddate`. Dec 31 counts = snapshot inventory from the export, not field verified. Shaded years: OLS on 2021–2025, not SDCI forecasts.";

export function getPipelineChartNavChildren(): { id: string; label: string }[] {
  return [
    { id: "spc-trends", label: "LU · Trends" },
    { id: "spc-stacked", label: "LU · Stacked" },
    { id: "spc-bars", label: "LU · Bars" },
    { id: "spc-plat-bp", label: "Plat-linked BP" },
    { id: "spc-mix", label: "2025 mix" },
  ];
}
