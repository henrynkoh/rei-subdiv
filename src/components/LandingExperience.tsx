"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GitHubFab } from "@/components/GitHubFab";
import { LandingActionsProvider } from "@/context/LandingActionsContext";
import type { NavItem } from "@/data/site-nav";
import { flattenNavIds } from "@/data/site-nav";

type Props = {
  nav: NavItem[];
  /** First major curriculum section id (e.g. `program`) — used by “Scroll-spy” hero button */
  scrollSpyDemoSectionId: string;
  children: React.ReactNode;
};

export function LandingExperience({ nav, scrollSpyDemoSectionId, children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarHot, setSidebarHot] = useState(false);
  const [activeId, setActiveId] = useState("overview");
  const flatIds = useMemo(() => flattenNavIds(nav), [nav]);

  useEffect(() => {
    const elements = flatIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [flatIds]);

  const scrollToId = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  }, []);

  const focusSidebar = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
      setMobileOpen(true);
    }
    setSidebarHot(true);
    window.setTimeout(() => setSidebarHot(false), 2600);
  }, []);

  const demoScrollSpy = useCallback(() => {
    setMobileOpen(false);
    document
      .getElementById(scrollSpyDemoSectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [scrollSpyDemoSectionId]);

  const landingActions = useMemo(
    () => ({ focusSidebar, demoScrollSpy }),
    [focusSidebar, demoScrollSpy]
  );

  return (
    <LandingActionsProvider value={landingActions}>
    <div className="landing-root flex min-h-screen scroll-smooth">
      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setMobileOpen((o) => !o)}
        className="no-print fixed left-4 top-4 z-[90] flex h-11 items-center gap-2 rounded-xl border border-white/30 bg-zinc-900/85 px-3 text-sm font-medium text-white shadow-lg backdrop-blur-md md:hidden"
        aria-expanded={mobileOpen}
        aria-controls="section-nav"
      >
        <span className="text-lg leading-none" aria-hidden>
          ☰
        </span>
        Sections
      </button>

      {/* Overlay */}
      {mobileOpen ? (
        <button
          type="button"
          className="no-print fixed inset-0 z-[80] bg-zinc-950/50 backdrop-blur-sm md:hidden"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      {/* Left sidebar */}
      <aside
        id="section-nav"
        className={`no-print fixed left-0 top-0 z-[85] flex h-full w-[min(18.5rem,92vw)] flex-col border-r border-white/20 bg-zinc-950/75 shadow-2xl backdrop-blur-xl transition-[transform,box-shadow] duration-300 dark:bg-zinc-950/85 md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${
          sidebarHot
            ? "z-[86] ring-2 ring-violet-400/90 ring-offset-2 ring-offset-zinc-950 shadow-[0_0_32px_rgba(139,92,246,0.45)] md:ring-offset-2"
            : ""
        }`}
      >
        <div className="border-b border-white/10 px-4 py-5">
          <p className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent">
            Infill bootcamp
          </p>
          <p className="mt-1 text-sm font-semibold leading-snug text-white">Greater Seattle</p>
          <div className="mt-3 flex flex-col gap-1.5 text-xs">
            <Link
              href="/facilitator"
              className="rounded-lg px-2 py-1.5 font-medium text-violet-200 transition hover:bg-white/10 hover:text-white"
            >
              → Facilitator pack
            </Link>
          </div>
        </div>

        <nav
          aria-label="Page sections"
          className="scrollbar-thin flex flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain px-2 py-4 pb-24"
        >
          {nav.map((item) => {
            const childActive = item.children?.some((c) => c.id === activeId) ?? false;
            const sectionActive = activeId === item.id || childActive;
            return (
            <div key={item.id}>
              <button
                type="button"
                onClick={() => scrollToId(item.id)}
                className={`flex w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                  sectionActive
                    ? "bg-gradient-to-r from-violet-600/40 to-fuchsia-600/30 text-white shadow-inner"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="md:hidden">{item.shortLabel ?? item.label}</span>
                <span className="hidden md:inline">{item.label}</span>
              </button>
              {item.children?.length ? (
                <ul className="ml-2 mt-0.5 flex flex-col gap-0.5 border-l border-white/10 pl-2">
                  {item.children.map((c) => (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => scrollToId(c.id)}
                        className={`w-full rounded-md px-2 py-1.5 text-left text-xs leading-snug transition ${
                          activeId === c.id
                            ? "bg-white/15 font-medium text-violet-200"
                            : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                        }`}
                      >
                        {c.label}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            );
          })}
        </nav>
      </aside>

      {/* Main column */}
      <div className="relative flex min-h-screen flex-1 flex-col md:pl-[18.5rem]">
        <a
          href="#overview"
          className="skip-link rounded-md bg-violet-600 px-3 py-2 text-sm font-medium text-white no-print"
        >
          Skip to overview
        </a>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(139,92,246,0.28),transparent),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(217,70,239,0.12),transparent),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(251,191,36,0.08),transparent)] dark:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(139,92,246,0.18),transparent),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(217,70,246,0.1),transparent)]" />
        {children}
      </div>

      <GitHubFab />
    </div>
    </LandingActionsProvider>
  );
}
