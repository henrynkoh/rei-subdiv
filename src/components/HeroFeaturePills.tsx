"use client";

import { useLandingActions } from "@/context/LandingActionsContext";

const baseBtn =
  "rounded-2xl border px-4 py-2 text-xs font-medium shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer active:scale-[0.98] dark:ring-offset-zinc-950";

export function HeroFeaturePills() {
  const { focusSidebar, demoScrollSpy } = useLandingActions();

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <button
        type="button"
        className={`${baseBtn} border-violet-200/60 bg-white/80 text-violet-900 hover:bg-violet-100/90 focus-visible:ring-violet-500 dark:border-white/10 dark:bg-zinc-800/80 dark:text-violet-200 dark:hover:bg-violet-950/50`}
        onClick={focusSidebar}
        aria-label="Open section navigator and highlight sidebar"
      >
        Interactive sidebar navigation
      </button>
      <button
        type="button"
        className={`${baseBtn} border-fuchsia-200/60 bg-white/80 text-fuchsia-900 hover:bg-fuchsia-100/90 focus-visible:ring-fuchsia-500 dark:border-white/10 dark:bg-zinc-800/80 dark:text-fuchsia-200 dark:hover:bg-fuchsia-950/50`}
        onClick={demoScrollSpy}
        aria-label="Jump to first curriculum section to show scroll-spy highlighting"
      >
        Scroll-spy section highlight
      </button>
      <button
        type="button"
        className={`${baseBtn} border-amber-200/60 bg-white/80 text-amber-950 hover:bg-amber-100/90 focus-visible:ring-amber-500 dark:border-white/10 dark:bg-zinc-800/80 dark:text-amber-100 dark:hover:bg-amber-950/40`}
        onClick={() => window.print()}
        aria-label="Open print dialog for tables"
      >
        Print-friendly tables
      </button>
    </div>
  );
}
