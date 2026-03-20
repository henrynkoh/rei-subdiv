"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  BUILDING_OPEN_DATA_ID,
  PIPELINE_CHART_DISCLAIMER,
  PIPELINE_DATA_AS_OF,
  PIPELINE_OPEN_DATA_ID,
  type PipelineYearRow,
  type PlatLinkedBuildingYearRow,
  pipelineSeries,
  platLinkedBuildingSeries,
} from "@/data/subdivision-pipeline-chart-data";

const chartCard =
  "rounded-3xl border border-fuchsia-200/40 bg-white/80 p-4 shadow-xl backdrop-blur-xl dark:border-fuchsia-900/35 dark:bg-zinc-900/65 sm:p-6";

const colors = {
  applications: "#8b5cf6",
  permitApprovals: "#06b6d4",
  inConstruction: "#f59e0b",
  soonToComplete: "#ec4899",
  completed: "#10b981",
};

const buildingColors = {
  bpApplied: "#14b8a6",
  bpIssued: "#0ea5e9",
  bpCompleted: "#22c55e",
  bpActiveDec31: "#f97316",
};

const buildingSeriesMeta: {
  key: keyof Pick<
    PlatLinkedBuildingYearRow,
    "bpApplied" | "bpIssued" | "bpCompleted" | "bpActiveDec31"
  >;
  label: string;
}[] = [
  { key: "bpApplied", label: "BP applied (year)" },
  { key: "bpIssued", label: "BP issued (year)" },
  { key: "bpCompleted", label: "BP completed (year)" },
  { key: "bpActiveDec31", label: "BP in flight (Dec 31)" },
];

const seriesMeta: { key: keyof Pick<
  PipelineYearRow,
  "applications" | "permitApprovals" | "inConstruction" | "soonToComplete" | "completed"
>; label: string }[] = [
  { key: "applications", label: "Applications (year)" },
  { key: "permitApprovals", label: "LU issued (year)" },
  { key: "inConstruction", label: "Pre-issue backlog (Dec 31)" },
  { key: "soonToComplete", label: "Issued, open (Dec 31)" },
  { key: "completed", label: "LU completed (year)" },
];

function PlatLinkedTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  const row = platLinkedBuildingSeries.find((r) => r.yearLabel === label);
  return (
    <div className="rounded-xl border border-zinc-200/80 bg-white/95 px-3 py-2 text-xs shadow-lg dark:border-zinc-600 dark:bg-zinc-900/95">
      <p className="font-bold text-zinc-900 dark:text-white">
        {label}{" "}
        <span
          className={
            row?.phase === "projection"
              ? "text-fuchsia-600 dark:text-fuchsia-400"
              : "text-teal-600 dark:text-teal-400"
          }
        >
          ({row?.phase === "projection" ? "projection" : "actual"})
        </span>
      </p>
      <ul className="mt-1 space-y-0.5">
        {payload.map((p) => (
          <li key={p.name} className="flex justify-between gap-4">
            <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
              {p.name}
            </span>
            <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">{p.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PipelineTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  const row = pipelineSeries.find((r) => r.yearLabel === label);
  return (
    <div className="rounded-xl border border-zinc-200/80 bg-white/95 px-3 py-2 text-xs shadow-lg dark:border-zinc-600 dark:bg-zinc-900/95">
      <p className="font-bold text-zinc-900 dark:text-white">
        {label}{" "}
        <span
          className={
            row?.phase === "projection"
              ? "text-fuchsia-600 dark:text-fuchsia-400"
              : "text-teal-600 dark:text-teal-400"
          }
        >
          ({row?.phase === "projection" ? "projection" : "actual"})
        </span>
      </p>
      <ul className="mt-1 space-y-0.5">
        {payload.map((p) => (
          <li key={p.name} className="flex justify-between gap-4">
            <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
              {p.name}
            </span>
            <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">{p.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SubdivisionPipelineChartsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const lastActualYear =
    pipelineSeries.filter((r) => r.phase === "actual").at(-1) ?? pipelineSeriesFallback();
  const mixData = seriesMeta.map((m) => ({
    name: m.label,
    value: lastActualYear[m.key],
    key: m.key,
  }));
  const totalMix = mixData.reduce((s, d) => s + d.value, 0);

  return (
    <section
      id="subdivision-pipeline-charts"
      className="mb-12 scroll-mt-24 space-y-8 md:scroll-mt-20"
    >
      <header
        className={`border border-fuchsia-300/50 bg-gradient-to-br from-fuchsia-500/12 via-white/80 to-violet-500/10 dark:border-fuchsia-900/45 dark:from-fuchsia-950/45 dark:via-zinc-900/70 dark:to-violet-950/30 ${chartCard}`}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-800 dark:text-fuchsia-300">
          Single-family land subdivision · pipeline viz
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          Stats charts: Seattle land use + plat-linked building permits
        </h2>
        <p className="mt-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          Snapshot {PIPELINE_DATA_AS_OF} · LU{" "}
          <a
            className="text-fuchsia-700 underline decoration-fuchsia-400/60 underline-offset-2 hover:text-fuchsia-900 dark:text-fuchsia-300 dark:hover:text-fuchsia-200"
            href={`https://data.seattle.gov/d/${PIPELINE_OPEN_DATA_ID}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {PIPELINE_OPEN_DATA_ID}
          </a>
          {" · "}
          Building{" "}
          <a
            className="text-fuchsia-700 underline decoration-fuchsia-400/60 underline-offset-2 hover:text-fuchsia-900 dark:text-fuchsia-300 dark:hover:text-fuchsia-200"
            href={`https://data.seattle.gov/d/${BUILDING_OPEN_DATA_ID}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {BUILDING_OPEN_DATA_ID}
          </a>
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {PIPELINE_CHART_DISCLAIMER}
        </p>
      </header>

      <article id="spc-trends" className={`scroll-mt-24 md:scroll-mt-20 ${chartCard}`}>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Land use · Multi-metric trend lines</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Gradient line chart with shaded projection window (2026–2028).
        </p>
        <div className="mt-4 h-[340px] w-full min-w-0 min-h-[280px]">
          {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={280}>
            <LineChart data={pipelineSeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30 dark:opacity-20" stroke="#64748b" />
              <ReferenceArea
                x1="2026"
                x2="2028"
                fill="#d946ef"
                fillOpacity={0.06}
                strokeOpacity={0}
              />
              <XAxis
                dataKey="yearLabel"
                tick={{ fill: "#64748b", fontSize: 11 }}
                axisLine={{ stroke: "#64748b" }}
              />
              <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={{ stroke: "#64748b" }} />
              <Tooltip content={<PipelineTooltip />} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              {seriesMeta.map((m) => (
                <Line
                  key={m.key}
                  type="monotone"
                  dataKey={m.key}
                  name={m.label}
                  stroke={colors[m.key]}
                  strokeWidth={2.5}
                  dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
          ) : (
            <SkeletonChart />
          )}
        </div>
      </article>

      <article id="spc-stacked" className={`scroll-mt-24 md:scroll-mt-20 ${chartCard}`}>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Land use · Stacked pipeline areas</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Cumulative weight of the five series—note calendar-year flows stack with Dec 31 inventory in the same view.
        </p>
        <div className="mt-4 h-[360px] w-full min-w-0 min-h-[280px]">
          {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={280}>
            <AreaChart data={pipelineSeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <defs>
                {seriesMeta.map((m) => (
                  <linearGradient key={m.key} id={`ar-${m.key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors[m.key]} stopOpacity={0.95} />
                    <stop offset="95%" stopColor={colors[m.key]} stopOpacity={0.12} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30 dark:opacity-20" stroke="#64748b" />
              <ReferenceArea x1="2026" x2="2028" fill="#a855f7" fillOpacity={0.05} />
              <XAxis dataKey="yearLabel" tick={{ fill: "#64748b", fontSize: 11 }} />
              <YAxis tick={{ fill: "#64748b", fontSize: 11 }} />
              <Tooltip content={<PipelineTooltip />} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              {seriesMeta.map((m) => (
                <Area
                  key={m.key}
                  type="monotone"
                  dataKey={m.key}
                  name={m.label}
                  stackId="1"
                  stroke={colors[m.key]}
                  fill={`url(#ar-${m.key})`}
                  strokeWidth={1}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
          ) : (
            <SkeletonChart />
          )}
        </div>
      </article>

      <article id="spc-bars" className={`scroll-mt-24 md:scroll-mt-20 ${chartCard}`}>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Land use · Grouped bars · year-over-year</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Side-by-side YoY comparison; legend labels encode flow vs. year-end stock (see section header disclaimer).
        </p>
        <div className="mt-4 h-[380px] w-full min-w-0 min-h-[280px]">
          {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={280}>
            <BarChart data={pipelineSeries} margin={{ top: 8, right: 8, left: 0, bottom: 24 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30 dark:opacity-20" stroke="#64748b" />
              <ReferenceArea x1="2026" x2="2028" fill="#ec4899" fillOpacity={0.04} />
              <XAxis dataKey="yearLabel" tick={{ fill: "#64748b", fontSize: 11 }} />
              <YAxis tick={{ fill: "#64748b", fontSize: 11 }} />
              <Tooltip content={<PipelineTooltip />} />
              <Legend wrapperStyle={{ fontSize: "11px" }} />
              {seriesMeta.map((m) => (
                <Bar
                  key={m.key}
                  dataKey={m.key}
                  name={m.label}
                  fill={colors[m.key]}
                  radius={[6, 6, 0, 0]}
                  maxBarSize={32}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
          ) : (
            <SkeletonChart />
          )}
        </div>
      </article>

      <article id="spc-plat-bp" className={`scroll-mt-24 md:scroll-mt-20 ${chartCard}`}>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Plat-linked building permits</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="font-medium text-zinc-800 dark:text-zinc-200">permittypemapped = Building</span>{" "}
          only; <span className="font-medium text-zinc-800 dark:text-zinc-200">relatedmup</span> must match a
          land-use record in the plat-family slice above—this is the closest open-data link from entitlement to
          construction, not every single-family start citywide.
        </p>
        <div className="mt-4 h-[340px] w-full min-w-0 min-h-[280px]">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%" minWidth={280}>
              <LineChart
                data={platLinkedBuildingSeries}
                margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="opacity-30 dark:opacity-20" stroke="#64748b" />
                <ReferenceArea
                  x1="2026"
                  x2="2028"
                  fill="#0ea5e9"
                  fillOpacity={0.06}
                  strokeOpacity={0}
                />
                <XAxis
                  dataKey="yearLabel"
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={{ stroke: "#64748b" }}
                />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={{ stroke: "#64748b" }} />
                <Tooltip content={<PlatLinkedTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                {buildingSeriesMeta.map((m) => (
                  <Line
                    key={m.key}
                    type="monotone"
                    dataKey={m.key}
                    name={m.label}
                    stroke={buildingColors[m.key]}
                    strokeWidth={2.5}
                    dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
                    activeDot={{ r: 6 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <SkeletonChart />
          )}
        </div>
      </article>

      <article id="spc-mix" className={`scroll-mt-24 md:scroll-mt-20 ${chartCard}`}>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
          Land use · Stage mix · last actual year ({lastActualYear.yearLabel})
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Donut mixes{" "}
          <span className="font-medium text-zinc-800 dark:text-zinc-200">calendar-year flows</span>{" "}
          with <span className="font-medium text-zinc-800 dark:text-zinc-200">Dec 31 stock</span>{" "}
          counts—use it for rough composition only; read the line charts for like-vs-like trends (
          {Math.round(totalMix)} combined index).
        </p>
        <div className="mt-2 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center">
          <div className="h-[300px] w-full max-w-md min-h-[260px]">
            {mounted ? (
            <ResponsiveContainer width="100%" height="100%" minWidth={260}>
              <PieChart>
                <Pie
                  data={mixData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={72}
                  outerRadius={110}
                  paddingAngle={2}
                >
                  {mixData.map((entry) => (
                    <Cell
                      key={entry.key}
                      fill={colors[entry.key as keyof typeof colors]}
                      stroke="rgba(15,23,42,0.15)"
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value ?? ""}`, String(name ?? "")]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid rgba(100,116,139,0.3)",
                    fontSize: "12px",
                  }}
                />
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ fontSize: "11px", paddingTop: "12px" }}
                />
              </PieChart>
            </ResponsiveContainer>
            ) : (
              <SkeletonChart short />
            )}
          </div>
          <ul className="w-full max-w-sm space-y-2 text-sm lg:text-right">
            {mixData.map((d) => {
              const pct = totalMix ? Math.round((d.value / totalMix) * 1000) / 10 : 0;
              return (
                <li
                  key={d.key}
                  className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200/60 bg-white/60 px-3 py-2 dark:border-zinc-700/60 dark:bg-zinc-950/40"
                >
                  <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ background: colors[d.key as keyof typeof colors] }}
                    />
                    {d.name}
                  </span>
                  <span className="font-mono text-zinc-900 dark:text-white">
                    {d.value}{" "}
                    <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">({pct}%)</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}

function pipelineSeriesFallback(): PipelineYearRow {
  return pipelineSeries[0];
}

function SkeletonChart({ short }: { short?: boolean }) {
  return (
    <div
      className={`flex h-full w-full animate-pulse items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-zinc-200/40 to-violet-500/10 dark:from-fuchsia-950/30 dark:via-zinc-800/40 dark:to-violet-950/20 ${short ? "min-h-[260px]" : ""}`}
      aria-hidden
    >
      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Loading chart…</span>
    </div>
  );
}
