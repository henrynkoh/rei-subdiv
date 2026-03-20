import type { Metadata } from "next";
import { CurriculumTableBlock } from "@/components/CurriculumTableBlock";
import {
  clockTemplate,
  facilitatorMeta,
  guestFallback,
  psychologyHooks,
  roomSetup,
  suppliesChecklist,
} from "@/data/facilitator";

export const metadata: Metadata = {
  title: "Facilitator pack",
  description:
    "Run-of-show templates, room setup, and contingency scripts for the Seattle infill bootcamp.",
};

export default function FacilitatorPage() {
  return (
    <div className="min-h-full bg-zinc-50 text-foreground dark:bg-black">
      <header className="border-b border-zinc-200/80 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Staff-only · print friendly
          </p>
          <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight">
            {facilitatorMeta.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{facilitatorMeta.subtitle}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Designed for cohorts of about {facilitatorMeta.cohortSize} with{" "}
            {facilitatorMeta.dailyHours}. Pair with the public curriculum page; this pack hides zero
            operational truth—speakers cancel, spreadsheets break, founders bring bravado.
          </p>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <CurriculumTableBlock
          categoryId="facilitator"
          table={{
            title: "Room & AV setup",
            columns: roomSetup.columns,
            rows: roomSetup.rows,
          }}
        />
        <CurriculumTableBlock
          categoryId="facilitator"
          table={{
            title: "Supplies checklist",
            columns: suppliesChecklist.columns,
            rows: suppliesChecklist.rows,
          }}
        />
        <CurriculumTableBlock
          categoryId="facilitator"
          table={{
            title: "Daily clock template (3–4 hour block)",
            description: "Stretch breaks live between Teach and Tool lab if block hits four hours.",
            columns: clockTemplate.columns,
            rows: clockTemplate.rows,
          }}
        />
        <CurriculumTableBlock
          categoryId="facilitator"
          table={{
            title: "Guest speaker fallback playbook",
            columns: guestFallback.columns,
            rows: guestFallback.rows,
          }}
        />
        <CurriculumTableBlock
          categoryId="facilitator"
          table={{
            title: "Cohort psychology (keep founders honest)",
            columns: psychologyHooks.columns,
            rows: psychologyHooks.rows,
          }}
        />

        <footer className="mt-12 border-t border-zinc-200 pt-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <p>
            After the week, archive this printout with dated SDCI fee schedules—the curriculum drifts
            when council passes cleanup ordinances.
          </p>
        </footer>
      </main>
    </div>
  );
}
