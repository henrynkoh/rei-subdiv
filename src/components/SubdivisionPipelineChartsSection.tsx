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
  PIPELINE_CHART_DISCLAIMER,
  type PipelineYearRow,
  pipelineDemoSeries,
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

const seriesMeta: { key: keyof Pick<
  PipelineYearRow,
  "applications" | "permitApprovals" | "inConstruction" | "soonToComplete" | "completed"
>; label: string }[] = [
  { key: "applications", label: "Applications" },
  { key: "permitApprovals", label: "Permit approvals" },
  { key: "inConstruction", label: "In construction" },
  { key: "soonToComplete", label: "Soon to complete" },
  { key: "completed", label: "Completed" },
];

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
  const row = pipelineDemoSeries.find((r) => r.yearLabel === label);
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
    pipelineDemoSeries.filter((r) => r.phase === "actual").at(-1) ?? pipelineDemoFallback();
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
          Stats charts: 5-year actuals + 3-year projections
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {PIPELINE_CHART_DISCLAIMER}
        </p>
      </header>

      <article id="spc-trends" className={`scroll-mt-24 md:scroll-mt-20 ${chartCard}`}>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Multi-metric trend lines</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Gradient line chart with shaded projection window (2026–2028).
        </p>
        <div className="mt-4 h-[340px] w-full min-w-0 min-h-[280px]">
          {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={280}>
            <LineChart data={pipelineDemoSeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Stacked pipeline areas</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Shows cumulative weight of modeled stages—emphasizes how “work in flight” stacks.
        </p>
        <div className="mt-4 h-[360px] w-full min-w-0 min-h-[280px]">
          {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={280}>
            <AreaChart data={pipelineDemoSeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Grouped bars · year-over-year</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Neon-tinted columns for side-by-side comparison of each modeled stage.
        </p>
        <div className="mt-4 h-[380px] w-full min-w-0 min-h-[280px]">
          {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={280}>
            <BarChart data={pipelineDemoSeries} margin={{ top: 8, right: 8, left: 0, bottom: 24 }}>
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

      <article id="spc-mix" className={`scroll-mt-24 md:scroll-mt-20 ${chartCard}`}>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
          Stage mix · last actual year ({lastActualYear.yearLabel})
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Donut shows share of each modeled count vs. the five-metric total for that year (
          {Math.round(totalMix)} indexed units — illustrative only).
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

function pipelineDemoFallback(): PipelineYearRow {
  return pipelineDemoSeries[0];
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
