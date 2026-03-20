import { subdivisionLibraryChapters } from "@/data/subdivision-library";

const shell = "rounded-3xl border border-teal-200/40 bg-white/75 p-6 shadow-xl backdrop-blur-xl dark:border-teal-900/35 dark:bg-zinc-900/60 dark:shadow-teal-950/20";

export function SubdivisionLibrarySection() {
  return (
    <section
      id="subdivision-library"
      className="mb-12 scroll-mt-24 space-y-8 md:scroll-mt-20"
    >
      <header
        className={`border border-teal-300/45 bg-gradient-to-br from-teal-500/12 via-white/80 to-cyan-500/10 dark:border-teal-800/40 dark:from-teal-950/40 dark:via-zinc-900/70 dark:to-cyan-950/25 ${shell}`}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-teal-800 dark:text-teal-300">
          Subdivision library · start → finish
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          Land subdivision intelligence for Greater Seattle
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          A structured shelf of <strong className="text-zinc-900 dark:text-white">titles and subtitles</strong>{" "}
          spanning policy, jurisdiction, pathways, timelines, environment, economics, open-data
          monitors, and forward posture. Figures mix citeable public anchors (statutes, portals)
          with bootcamp planning bands—always replace bands with parcel-specific quotes before offers.
        </p>
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-2xl border border-teal-200/50 bg-white/70 p-4 dark:border-teal-900/50 dark:bg-zinc-950/50">
            <dt className="text-xs font-bold uppercase tracking-wide text-teal-700 dark:text-teal-400">
              Past performance
            </dt>
            <dd className="mt-1 text-zinc-800 dark:text-zinc-200">
              Pull <strong className="text-zinc-900 dark:text-white">SDCI</strong> /{" "}
              <strong className="text-zinc-900 dark:text-white">data.seattle.gov</strong> time series
              to graph how housing permitting moved through market cycles—subdivision-specific tallies
              may need manual tagging.
            </dd>
          </div>
          <div className="rounded-2xl border border-cyan-200/50 bg-white/70 p-4 dark:border-cyan-900/50 dark:bg-zinc-950/50">
            <dt className="text-xs font-bold uppercase tracking-wide text-cyan-800 dark:text-cyan-300">
              Current status
            </dt>
            <dd className="mt-1 text-zinc-800 dark:text-zinc-200">
              Treat <strong className="text-zinc-900 dark:text-white">Shaping Seattle</strong> +{" "}
              <strong className="text-zinc-900 dark:text-white">Services Portal</strong> searches as
              live EKG lines for big land use; pair with title + utility correspondence for small lot
              work.
            </dd>
          </div>
          <div className="rounded-2xl border border-emerald-200/50 bg-white/70 p-4 dark:border-emerald-900/50 dark:bg-zinc-950/50">
            <dt className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
              Future permits
            </dt>
            <dd className="mt-1 text-zinc-800 dark:text-zinc-200">
              Watch <strong className="text-zinc-900 dark:text-white">comp plan updates</strong>,{" "}
              <strong className="text-zinc-900 dark:text-white">transit openings</strong>, and{" "}
              <strong className="text-zinc-900 dark:text-white">institutional TOD</strong>{" "}
              announcements—signals for where the next plat wave tries to land, not promises of margin.
            </dd>
          </div>
        </dl>
      </header>

      <div className="space-y-10">
        {subdivisionLibraryChapters.map((ch, i) => (
          <article
            key={ch.anchorId}
            id={ch.anchorId}
            className={`scroll-mt-24 border-l-4 border-teal-500/80 pl-4 md:scroll-mt-20 ${shell}`}
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 text-sm font-bold text-white shadow-lg">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{ch.title}</h3>
                <p className="text-sm font-semibold text-teal-800 dark:text-teal-300">{ch.subtitle}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{ch.intro}</p>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {ch.stats.map((s) => (
                <li
                  key={s.headline}
                  className="rounded-2xl border border-zinc-200/70 bg-gradient-to-b from-white/90 to-zinc-50/80 p-4 dark:border-zinc-700/60 dark:from-zinc-950/80 dark:to-zinc-900/50"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    {s.headline}
                  </p>
                  <p className="mt-2 font-mono text-base font-semibold text-zinc-900 dark:text-white">
                    {s.figure}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {s.context}
                  </p>
                  {s.sourceUrl ? (
                    <p className="mt-3 text-xs">
                      <a
                        href={s.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-teal-700 underline decoration-teal-400/40 underline-offset-2 hover:text-cyan-700 dark:text-teal-400"
                      >
                        {s.sourceLabel ?? "Source"}
                      </a>
                    </p>
                  ) : s.sourceLabel ? (
                    <p className="mt-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {s.sourceLabel}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
