"use client";

import { useMemo, useState } from "react";
import {
  costCategoryLabels,
  costCategoryShort,
  periodCategoryLabels,
  periodCategoryShort,
  registeredProjects,
  sizeCategoryLabels,
  sizeCategoryShort,
  type CostCategoryId,
  type PeriodCategoryId,
  type SizeCategoryId,
} from "@/data/registered-projects";

const card =
  "rounded-3xl border border-violet-200/40 bg-white/75 p-6 shadow-xl shadow-violet-500/[0.07] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-fuchsia-900/10";

const allLabel = "All";

export function RegisteredProjectsSection() {
  const [cost, setCost] = useState<CostCategoryId | "all">("all");
  const [period, setPeriod] = useState<PeriodCategoryId | "all">("all");
  const [size, setSize] = useState<SizeCategoryId | "all">("all");

  const filtered = useMemo(() => {
    return registeredProjects.filter((p) => {
      if (cost !== "all" && p.costCategory !== cost) return false;
      if (period !== "all" && p.periodCategory !== period) return false;
      if (size !== "all" && p.sizeCategory !== size) return false;
      return true;
    });
  }, [cost, period, size]);

  return (
    <section
      id="registered-projects"
      className="mb-12 scroll-mt-24 space-y-6 md:scroll-mt-20"
    >
      <div
        className={`border border-sky-200/50 bg-gradient-to-br from-sky-500/10 via-white/75 to-violet-500/10 dark:border-sky-900/40 dark:from-sky-950/35 dark:via-zinc-900/60 dark:to-violet-950/20 ${card}`}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-sky-800 dark:text-sky-300">
          Agency-linked references
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Six registered / documented projects (searchable)
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Four Seattle projects use **SDCI Shaping Seattle** land-use record URLs. Two are
          multi-agency affordable / TOD projects with sponsor + partner disclosures—cross-check
          permits in SeaTac and Kent before relying on budget or schedule. Filters below slice the
          same six entries by **cost disclosure pattern**, **project period band**, and **size band**.
        </p>
      </div>

      <div
        className={`grid gap-4 border border-zinc-200/60 dark:border-zinc-700/60 sm:grid-cols-3 ${card}`}
      >
        <FilterBlock
          title="Costs (category)"
          ariaLabel="Filter by cost category"
          value={cost}
          onChange={setCost}
          options={[
            { value: "all", label: allLabel },
            ...(Object.keys(costCategoryShort) as CostCategoryId[]).map((value) => ({
              value,
              label: costCategoryShort[value],
            })),
          ]}
        />
        <FilterBlock
          title="Project period"
          ariaLabel="Filter by project period band"
          value={period}
          onChange={setPeriod}
          options={[
            { value: "all", label: allLabel },
            ...(Object.keys(periodCategoryShort) as PeriodCategoryId[]).map((value) => ({
              value,
              label: periodCategoryShort[value],
            })),
          ]}
        />
        <FilterBlock
          title="Project size"
          ariaLabel="Filter by project size band"
          value={size}
          onChange={setSize}
          options={[
            { value: "all", label: allLabel },
            ...(Object.keys(sizeCategoryShort) as SizeCategoryId[]).map((value) => ({
              value,
              label: sizeCategoryShort[value],
            })),
          ]}
        />
      </div>

      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        Showing{" "}
        <strong className="text-zinc-800 dark:text-zinc-200">{filtered.length}</strong> of{" "}
        {registeredProjects.length} projects
        {(cost !== "all" || period !== "all" || size !== "all") && (
          <button
            type="button"
            className="ml-2 font-semibold text-violet-700 underline decoration-violet-400/40 underline-offset-2 hover:text-fuchsia-700 dark:text-violet-300"
            onClick={() => {
              setCost("all");
              setPeriod("all");
              setSize("all");
            }}
          >
            Reset filters
          </button>
        )}
      </p>

      <div className="space-y-6">
        {filtered.length === 0 ? (
          <p
            className={`text-center text-sm text-zinc-600 dark:text-zinc-400 ${card} border-dashed border-zinc-300 dark:border-zinc-600`}
          >
            No projects match that combination—reset a filter or widen the categories.
          </p>
        ) : (
          filtered.map((p) => (
            <article
              key={p.anchorId}
              id={p.anchorId}
              className={`scroll-mt-24 border-l-4 border-sky-500/80 pl-4 md:scroll-mt-20 ${card}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{p.name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.addressOrArea}</p>
                </div>
                <a
                  href={p.recordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-xl bg-zinc-900 px-3 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-zinc-800 dark:bg-violet-700 dark:hover:bg-violet-600"
                >
                  Open record →
                </a>
              </div>

              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Jurisdiction &amp; agency
                  </dt>
                  <dd className="mt-0.5 text-zinc-800 dark:text-zinc-200">
                    {p.jurisdiction}
                    <br />
                    <span className="text-zinc-600 dark:text-zinc-400">{p.agency}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Public record tag
                  </dt>
                  <dd className="mt-0.5 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                    {p.recordLabel}
                  </dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-2">
                <Tag label="Costs" text={costCategoryLabels[p.costCategory]} />
                <Tag label="Period" text={periodCategoryLabels[p.periodCategory]} />
                <Tag label="Size" text={sizeCategoryLabels[p.sizeCategory]} />
              </div>

              <div className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p>
                  <strong className="text-zinc-900 dark:text-white">Cost note. </strong>
                  {p.costNote}
                </p>
                <p>
                  <strong className="text-zinc-900 dark:text-white">Period note. </strong>
                  {p.periodNote}
                </p>
                <p>
                  <strong className="text-zinc-900 dark:text-white">Size note. </strong>
                  {p.sizeNote}
                </p>
                <p>{p.summary}</p>
                <p className="rounded-lg border border-amber-200/60 bg-amber-50/70 p-2 text-xs text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100">
                  <strong>Verify. </strong>
                  {p.verifyNote}
                </p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

function Tag({ label, text }: { label: string; text: string }) {
  return (
    <span className="inline-flex max-w-full flex-col rounded-lg border border-violet-200/50 bg-violet-500/10 px-2 py-1 text-left text-xs dark:border-violet-800/50 dark:bg-violet-950/40">
      <span className="font-bold uppercase tracking-wide text-violet-800 dark:text-violet-200">
        {label}
      </span>
      <span className="text-zinc-700 dark:text-zinc-300">{text}</span>
    </span>
  );
}

type Opt<T extends string> = { value: T | "all"; label: string };

function FilterBlock<T extends string>({
  title,
  ariaLabel,
  value,
  onChange,
  options,
}: {
  title: string;
  ariaLabel: string;
  value: T | "all";
  onChange: (v: T | "all") => void;
  options: Opt<T>[];
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {title}
      </p>
      <label className="sr-only" htmlFor={`filter-${title}`}>
        {ariaLabel}
      </label>
      <select
        id={`filter-${title}`}
        className="mt-2 w-full rounded-xl border border-zinc-200 bg-white/90 px-3 py-2.5 text-sm font-medium text-zinc-900 shadow-sm focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/30 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-100"
        value={value}
        onChange={(e) => onChange(e.target.value as T | "all")}
        aria-label={ariaLabel}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
