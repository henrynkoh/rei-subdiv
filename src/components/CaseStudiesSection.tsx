import { caseStudies } from "@/data/case-studies";

const card =
  "rounded-3xl border border-violet-200/40 bg-white/75 p-6 shadow-xl shadow-violet-500/[0.07] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-fuchsia-900/10";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="mb-12 scroll-mt-24 space-y-6 md:scroll-mt-20">
      <div
        className={`border border-emerald-200/40 bg-gradient-to-br from-emerald-500/10 via-white/70 to-violet-500/10 dark:border-emerald-900/40 dark:from-emerald-950/30 dark:via-zinc-900/60 dark:to-violet-950/20 ${card}`}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
          Applied curriculum
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Top 3 case studies
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Hypothetical composites—use in cohort breakouts to connect satire vs. SDCI, county
          routing, utilities, and construction underwriting. Not real parcels or outcomes.
        </p>
      </div>

      {caseStudies.map((cs, i) => (
        <article
          key={cs.anchorId}
          id={cs.anchorId}
          className={`scroll-mt-24 border-l-4 border-violet-500/70 pl-4 md:scroll-mt-20 ${card}`}
        >
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="rounded-lg bg-violet-600/15 px-2 py-0.5 font-mono text-xs font-semibold text-violet-800 dark:text-violet-200">
              Case {i + 1}
            </span>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{cs.headline}</h3>
          </div>
          <p className="mt-1 text-sm font-medium text-fuchsia-700 dark:text-fuchsia-300">
            {cs.shortTitle}
          </p>

          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Where / jurisdiction
              </dt>
              <dd className="mt-0.5 text-zinc-800 dark:text-zinc-200">{cs.meta.where}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Product arc
              </dt>
              <dd className="mt-0.5 text-zinc-800 dark:text-zinc-200">{cs.meta.product}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Core lesson
              </dt>
              <dd className="mt-0.5 text-zinc-800 dark:text-zinc-200">{cs.meta.lessonArc}</dd>
            </div>
          </dl>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              <strong className="text-zinc-900 dark:text-white">Situation. </strong>
              {cs.situation}
            </p>
            <p>
              <strong className="text-zinc-900 dark:text-white">Pivot. </strong>
              {cs.pivot}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Maps to bootcamp content
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              {cs.curriculumMap.map((line, j) => (
                <li key={`${cs.anchorId}-map-${j}`}>{line}</li>
              ))}
            </ul>
          </div>

          <p className="mt-5 rounded-xl border border-amber-200/50 bg-amber-50/60 p-3 text-sm font-medium text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/25 dark:text-amber-100">
            <span className="font-bold">Takeaway. </span>
            {cs.takeaway}
          </p>
        </article>
      ))}
    </section>
  );
}
