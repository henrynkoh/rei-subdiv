/**
 * Publicly referenceable projects (land use / housing) in Greater Seattle.
 * Status, budgets, and schedules change—always confirm on the linked agency or sponsor portals.
 */

export type CostCategoryId = "undisclosed-private" | "mixed-public-private" | "budget-publicized-major";
export type PeriodCategoryId = "review-pre-2025" | "active-multiyear-review" | "delivery-2025-2028";
export type SizeCategoryId = "under-80-du" | "80-to-250-du" | "250-to-400-du" | "over-400-du";

export type RegisteredProject = {
  anchorId: string;
  navLabel: string;
  name: string;
  jurisdiction: string;
  agency: string;
  recordLabel: string;
  recordUrl: string;
  addressOrArea: string;
  costCategory: CostCategoryId;
  periodCategory: PeriodCategoryId;
  sizeCategory: SizeCategoryId;
  /** Plain-language for the card */
  costNote: string;
  periodNote: string;
  sizeNote: string;
  summary: string;
  verifyNote: string;
};

/** Short labels for filter dropdowns */
export const costCategoryShort: Record<CostCategoryId, string> = {
  "undisclosed-private": "Private / undisclosed (typical market LU)",
  "mixed-public-private": "Mixed public + private funding disclosed",
  "budget-publicized-major": "Large budget publicized (~$100M class)",
};

export const periodCategoryShort: Record<PeriodCategoryId, string> = {
  "review-pre-2025": "2022–2024 milestones (verify portal)",
  "active-multiyear-review": "Multi-year design / land use review",
  "delivery-2025-2028": "Delivery 2025–2028 (construction / lease-up)",
};

export const sizeCategoryShort: Record<SizeCategoryId, string> = {
  "under-80-du": "Under ~80 dwelling units",
  "80-to-250-du": "~80–250 dwelling units",
  "250-to-400-du": "~250–400 dwelling units",
  "over-400-du": "400+ dwelling units",
};

export const costCategoryLabels: Record<CostCategoryId, string> = {
  "undisclosed-private":
    "Private pro forma (typical market-rate LU — total cost not on Shaping Seattle)",
  "mixed-public-private": "Major public / philanthropic layers disclosed in sponsor or agency announcements",
  "budget-publicized-major": "Large capital stack publicly summarized ($100M-class disclosed range)",
};

export const periodCategoryLabels: Record<PeriodCategoryId, string> = {
  "review-pre-2025": "Key land-use milestones in 2022–2024 window (check portal for updates)",
  "active-multiyear-review": "Long-horizon design / land use review spanning multiple years",
  "delivery-2025-2028": "Groundbreak or lease-up targeted in 2025–2028 (construction / occupancy phase)",
};

export const sizeCategoryLabels: Record<SizeCategoryId, string> = {
  "under-80-du": "Under ~80 dwelling units (small multifamily / neighborhood scale)",
  "80-to-250-du": "About 80–250 dwelling units (mid-size multifamily)",
  "250-to-400-du": "About 250–400 dwelling units (large multifamily)",
  "over-400-du": "400+ dwelling units (very large multifamily)",
};

export const registeredProjects: RegisteredProject[] = [
  {
    anchorId: "reg-3036244-41st-sw",
    navLabel: "6314 41st Ave SW (LU)",
    name: "Three-building multifamily — Morgan Junction",
    jurisdiction: "Seattle — Morgan Junction Residential Urban Village",
    agency: "Seattle SDCI (Land Use)",
    recordLabel: "3036244-LU",
    recordUrl: "https://web.seattle.gov/sdci/ShapingSeattle/buildings/Details/3036244-LU",
    addressOrArea: "6314 41st Ave SW",
    costCategory: "undisclosed-private",
    periodCategory: "review-pre-2025",
    sizeCategory: "under-80-du",
    costNote: "Master-use economics typically private; use Shaping Seattle + design packet for scale, not developer budget.",
    periodNote: "Public land-use decision activity reported in 2024; confirm current milestone on SDCI portal.",
    sizeNote: "Public materials describe a ~34-unit, three-building layout (count may vary by revision).",
    summary:
      "West Seattle infill framed in publicly posted land-use records—useful classroom contrast to viral ‘one-house lot split’ memes because it shows full multifamily entitlement packaging in an urban village.",
    verifyNote: "Open the Shaping Seattle detail page for the latest status, drawings links, and any superseding decisions.",
  },
  {
    anchorId: "reg-3039268-10th-e",
    navLabel: "112 10th Ave E (LU)",
    name: "Capitol Hill multifamily tower (eight stories)",
    jurisdiction: "Seattle — Capitol Hill / First Hill context",
    agency: "Seattle SDCI (Land Use)",
    recordLabel: "3039268-LU",
    recordUrl: "https://web.seattle.gov/sdci/ShapingSeattle/buildings/Details/3039268-LU",
    addressOrArea: "112 10th Ave E",
    costCategory: "undisclosed-private",
    periodCategory: "review-pre-2025",
    sizeCategory: "250-to-400-du",
    costNote: "Private capital stack; Shaping Seattle documents scale (units, parking) rather than dollars.",
    periodNote: "Early design guidance and land-use phases reported around 2022–2023 era in public index cards.",
    sizeNote: "On the order of ~293 dwelling units in published summaries (subject to plan revisions).",
    summary:
      "High-visibility example of how large Seattle multifamily projects move through documented design guidance and land-use review—not a backyard short plat, but the same SDCI universe your cohort will learn to search.",
    verifyNote: "Re-read parking, amenity, and unit counts on the live LU page before citing in a pro forma.",
  },
  {
    anchorId: "reg-3038399-45th-ne",
    navLabel: "1107 NE 45th St (LU)",
    name: "U District high-rise multifamily",
    jurisdiction: "Seattle — University District Urban Center",
    agency: "Seattle SDCI (Land Use)",
    recordLabel: "3038399-LU",
    recordUrl: "https://web.seattle.gov/sdci/ShapingSeattle/buildings/Details/3038399-LU",
    addressOrArea: "1107 NE 45th St",
    costCategory: "undisclosed-private",
    periodCategory: "active-multiyear-review",
    sizeCategory: "250-to-400-du",
    costNote: "Budget confidential; public record emphasizes height, intensity, and urban-design response.",
    periodNote: "Long-running land use / design review cadence in SDCI trackers—good teaching example of ‘years, not weeks.’",
    sizeNote: "Published summaries on the order of ~336 units (confirm on portal).",
    summary:
      "Illustrates how station-area intensity plays out in permit narratives—pair with your HB 1110 / NR contrast readings so founders don’t confuse urban-center LUs with neighborhood residential infill.",
    verifyNote: "Urban center zoning differs from NR; use this to train ‘read the overlay + map first.’",
  },
  {
    anchorId: "reg-3040352-spruce",
    navLabel: "1203 E Spruce St (LU)",
    name: "Central Area tall mixed-use residential",
    jurisdiction: "Seattle — Central Area / First Hill–Capitol Hill center",
    agency: "Seattle SDCI (Land Use + Design Review)",
    recordLabel: "3040352-LU",
    recordUrl: "https://web.seattle.gov/sdci/ShapingSeattle/buildings/Details/3040352-LU",
    addressOrArea: "1203 E Spruce St",
    costCategory: "undisclosed-private",
    periodCategory: "review-pre-2025",
    sizeCategory: "over-400-du",
    costNote: "Financial detail proprietary; agency files show program size and public benefits discussion.",
    periodNote: "Design Review board materials circulated in 2024 per public agendas—verify follow-up decisions online.",
    sizeNote: "Public narratives describe a ~394-unit, 9-story class project (subject to amendment).",
    summary:
      "Shows how tallest projects bundle housing, design review, and neighborhood comment in *documented* channels—exactly where amateur ‘insider hack’ stories skip.",
    verifyNote: "Cross-check any ‘final’ unit count against the latest posted decision attachments.",
  },
  {
    anchorId: "reg-kent-multicultural-village",
    navLabel: "Kent Multicultural Village",
    name: "Kent Multicultural Village — TOD affordable housing campus",
    jurisdiction: "City of Kent (Sound Transit TOD corridor)",
    agency: "City of Kent permits + WA Housing Trust Fund / partner stack",
    recordLabel: "Press + public funding announcements (search Kent permit portal for issued permits)",
    recordUrl:
      "https://www.mercyhousing.org/2026/03/partnership-highlight-open-doors-for-multicultural-families/",
    addressOrArea: "Pacific Hwy S / Kent Des Moines Link station area",
    costCategory: "budget-publicized-major",
    periodCategory: "delivery-2025-2028",
    sizeCategory: "80-to-250-du",
    costNote: "Regional media and sponsors cite a ~$173–187M all-in range; treat as reported capital stack, not audited GAAP.",
    periodNote: "Groundbreaking reported 2026 with completion toward 2028 in regional coverage—confirm with City of Kent + sponsor.",
    sizeNote: "233 affordable homes reported in groundbreaking coverage.",
    summary:
      "Legitimate mega-project pattern outside Seattle municipal limits—jurisdiction, funding, and schedule discipline differ from SDCI-only homework.",
    verifyNote: "Pull current permit numbers from Kent’s citizen portal; news links go stale.",
  },
  {
    anchorId: "reg-seatac-angle-lake",
    navLabel: "Mercy Angle Lake (SeaTac)",
    name: "Mercy Angle Lake Family Housing",
    jurisdiction: "City of SeaTac — Angle Lake Link station area",
    agency: "Mercy Housing Northwest + King County / Sound Transit / WA HTF partners",
    recordLabel: "Sponsor + funder public disclosures (search SeaTac building permits)",
    recordUrl: "https://www.mercyhousing.org/2024/02/breaking-ground-angle-lake/",
    addressOrArea: "Angle Lake station walkshed (project addresses on sponsor site)",
    costCategory: "mixed-public-private",
    periodCategory: "delivery-2025-2028",
    sizeCategory: "80-to-250-du",
    costNote: "Amazon Housing Equity Fund reported a $17M loan + $2M grant alongside other public layers—still not a full private pro forma.",
    periodNote: "Groundbreaking Dec 2023; sponsor materials cite target opening ~May 2025—verify operational status.",
    sizeNote: "~130 affordable homes + an ~11,000 SF nonprofit HQ component in sponsor narratives.",
    summary:
      "Registered in the sense of heavily papered TOD affordable housing with multi-agency funding—great foil to ‘wrap everything in one bank loan’ satire.",
    verifyNote: "Cross-link sponsor pages with SeaTac permit search before treating timelines as current.",
  },
];

export function getRegisteredProjectNavChildren(): { id: string; label: string }[] {
  return registeredProjects.map((p) => ({ id: p.anchorId, label: p.navLabel }));
}
