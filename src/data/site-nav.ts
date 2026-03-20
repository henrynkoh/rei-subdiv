import { getCaseStudyNavChildren } from "@/data/case-studies";
import { categories } from "@/data/curriculum";
import { getRegisteredProjectNavChildren } from "@/data/registered-projects";
import { getSubdivisionLibraryNavChildren } from "@/data/subdivision-library";
import { tableAnchorId } from "@/lib/slug";

export type NavItem = {
  id: string;
  label: string;
  /** Short label for mobile / cramped UI */
  shortLabel?: string;
  children?: { id: string; label: string }[];
};

export function getLandingNavItems(): NavItem[] {
  return [
    { id: "overview", label: "Overview", shortLabel: "Start" },
    {
      id: "case-studies",
      label: "Case studies (top 3)",
      shortLabel: "Cases",
      children: getCaseStudyNavChildren(),
    },
    {
      id: "registered-projects",
      label: "Registered projects (6)",
      shortLabel: "Reg.",
      children: getRegisteredProjectNavChildren(),
    },
    {
      id: "subdivision-library",
      label: "Subdivision library",
      shortLabel: "Library",
      children: getSubdivisionLibraryNavChildren(),
    },
    { id: "links", label: "Bookmarks & links", shortLabel: "Links" },
    { id: "research", label: "Research synthesis", shortLabel: "Research" },
    ...categories.map((cat) => ({
      id: cat.id,
      label: cat.name,
      shortLabel: cat.name.split(" ")[0],
      children: cat.tables.map((t) => ({
        id: tableAnchorId(cat.id, t.title),
        label: t.title,
      })),
    })),
    { id: "video-howto", label: "Video → how-to", shortLabel: "Video" },
    { id: "site-footer", label: "Colophon", shortLabel: "End" },
  ];
}

/** Flat list of all ids for scroll-spy */
export function flattenNavIds(items: NavItem[]): string[] {
  const out: string[] = [];
  for (const item of items) {
    out.push(item.id);
    if (item.children) {
      for (const c of item.children) out.push(c.id);
    }
  }
  return out;
}
