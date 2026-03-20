import Link from "next/link";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { RegisteredProjectsSection } from "@/components/RegisteredProjectsSection";
import { CurriculumTableBlock } from "@/components/CurriculumTableBlock";
import { HeroFeaturePills } from "@/components/HeroFeaturePills";
import { LandingExperience } from "@/components/LandingExperience";
import {
  categories,
  curatedLinks,
  researchNotes,
  videoHowToSummary,
  videoRef,
} from "@/data/curriculum";
import { getLandingNavItems } from "@/data/site-nav";

const card =
  "rounded-3xl border border-violet-200/40 bg-white/75 p-6 shadow-xl shadow-violet-500/[0.07] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-fuchsia-900/10";

export default function Home() {
  const nav = getLandingNavItems();

  return (
    <LandingExperience nav={nav} scrollSpyDemoSectionId={categories[0].id}>
      <header
        id="overview"
        className="scroll-mt-24 border-b border-white/10 bg-gradient-to-b from-white/50 to-transparent px-4 pb-12 pt-16 dark:from-zinc-950/80 md:scroll-mt-8 md:pb-14 md:pt-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-violet-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-violet-800 dark:border-violet-400/30 dark:bg-violet-500/15 dark:text-violet-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-500" aria-hidden />
            Greater Seattle · solopreneur track
          </p>
          <h1 className="mt-6 text-balance bg-gradient-to-br from-zinc-900 via-violet-900 to-fuchsia-800 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:via-violet-200 dark:to-fuchsia-200 sm:text-4xl md:text-5xl">
            Seattle Lot Subdivision &amp; Infill Bootcamp
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            One-week, table-driven curriculum—satirical shortcuts vs. real SDCI, utilities, and
            construction finance.{" "}
            <a
              href={videoRef.url}
              className="font-semibold text-violet-700 underline decoration-violet-400/40 underline-offset-4 hover:text-fuchsia-700 dark:text-violet-300"
              target="_blank"
              rel="noreferrer"
            >
              Watch the reference Short
            </a>
            , then scroll the full syllabus using the left navigator.
          </p>
          <div
            className={`mx-auto mt-8 max-w-xl ${card} text-left text-sm text-amber-950 dark:text-amber-100`}
          >
            <strong className="font-semibold text-amber-900 dark:text-amber-50">Disclaimer:</strong>{" "}
            education only—not legal, tax, securities, or investment advice. Confirm rules with
            professionals before deals.
          </div>
          <HeroFeaturePills />
        </div>
      </header>

      <main id="main" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <CaseStudiesSection />

        <RegisteredProjectsSection />

        <section id="links" className={`mb-10 scroll-mt-24 border border-indigo-200/50 md:scroll-mt-20 ${card}`}>
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg text-white shadow-md"
              aria-hidden
            >
              🔗
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                High-signal bookmarks
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Short list for homework blocks—pair with official resource tables below.
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {curatedLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-violet-700 underline decoration-violet-400/40 underline-offset-4 hover:text-fuchsia-700 dark:text-violet-300"
                    >
                      {item.label}
                    </a>
                    <span className="text-zinc-600 dark:text-zinc-400"> — {item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="research" className={`mb-10 scroll-mt-24 md:scroll-mt-20 ${card}`}>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
            Deep research synthesis
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {researchNotes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{videoRef.note}</p>
        </section>

        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="mb-12 scroll-mt-24 md:scroll-mt-20">
            <div className={`${card} mb-6`}>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {cat.name}
              </h2>
              {cat.subtitle ? (
                <p className="mt-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-sm font-semibold text-transparent dark:from-violet-400 dark:to-fuchsia-400">
                  {cat.subtitle}
                </p>
              ) : null}
              {cat.intro ? (
                <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {cat.intro}
                </p>
              ) : null}
            </div>
            {cat.tables.map((t) => (
              <CurriculumTableBlock key={t.title} categoryId={cat.id} table={t} />
            ))}
          </section>
        ))}

        <section
          id="video-howto"
          className={`scroll-mt-24 border border-fuchsia-200/50 md:scroll-mt-20 ${card}`}
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Video → how-to (satire decoded)
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Implied steps from the Short&rsquo;s oversimplified narrative, rewritten as Seattle-area
            reality checks.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-violet-200/40 bg-white/90 dark:border-white/10 dark:bg-zinc-950/80">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gradient-to-r from-violet-600/90 to-fuchsia-600/85 text-xs font-semibold uppercase tracking-wide text-white">
                <tr>
                  <th className="px-4 py-3">Beat</th>
                  <th className="px-4 py-3">Satirical &ldquo;how to&rdquo;</th>
                  <th className="px-4 py-3">Do this instead</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-violet-100 dark:divide-zinc-800">
                {videoHowToSummary.map((row) => (
                  <tr key={row.beat} className="odd:bg-white/80 even:bg-violet-50/40 dark:odd:bg-transparent dark:even:bg-zinc-900/40">
                    <th className="whitespace-nowrap px-4 py-3 align-top font-medium text-zinc-900 dark:text-zinc-100">
                      {row.beat}
                    </th>
                    <td className="px-4 py-3 align-top text-zinc-700 dark:text-zinc-300">
                      {row.satiricalHowTo}
                    </td>
                    <td className="px-4 py-3 align-top text-zinc-700 dark:text-zinc-300">
                      {row.realWorldTranslation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer
          id="site-footer"
          className="no-print mt-14 scroll-mt-24 border-t border-white/20 pt-10 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 md:scroll-mt-20"
        >
          <p>
            Built with{" "}
            <Link
              className="font-semibold text-violet-700 hover:underline dark:text-violet-300"
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
            >
              Next.js
            </Link>
            . Zoning rows drift—refresh from SDCI when councils update code.
          </p>
        </footer>
      </main>
    </LandingExperience>
  );
}
