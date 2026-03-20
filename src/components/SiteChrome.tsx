import Link from "next/link";

const linkClass =
  "text-sm font-medium text-zinc-700 transition hover:text-indigo-700 dark:text-zinc-300 dark:hover:text-indigo-300";

export function SiteChrome() {
  return (
    <>
      <a
        href="#main"
        className="skip-link rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white no-print"
      >
        Skip to curriculum
      </a>
      <header className="no-print border-b border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-950/90">
        <nav
          aria-label="Site"
          className="mx-auto flex max-w-4xl flex-wrap items-center gap-4 px-4 py-3 sm:px-6"
        >
          <Link href="/" className={linkClass}>
            Curriculum
          </Link>
          <Link href="/facilitator" className={linkClass}>
            Facilitator pack
          </Link>
          <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-500">
            Print via browser (tables span page)
          </span>
        </nav>
      </header>
    </>
  );
}
