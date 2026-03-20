/**
 * “Subdivision library” — chaptered stats & reference figures for Greater Seattle.
 * Many agency dashboards roll subdivisions into broader land-use or housing categories;
 * where a lone “subdivision permit count” is not published, we say so and point to the real feed.
 */

export type LibraryStat = {
  headline: string;
  figure: string;
  context: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

export type LibraryChapter = {
  anchorId: string;
  navLabel: string;
  title: string;
  subtitle: string;
  intro: string;
  stats: LibraryStat[];
};

export const subdivisionLibraryChapters: LibraryChapter[] = [
  {
    anchorId: "sub-lib-policy",
    navLabel: "1 · Policy & law",
    title: "Policy spine — why infill & lot reconfiguration matter",
    subtitle: "State targets and middle-housing floors set the outer envelope",
    intro:
      "Subdivision economics in Greater Seattle sit inside statewide housing law and each city’s comprehensive plan. These figures frame demand for denser lots—not a guarantee any one parcel will redivide.",
    stats: [
      {
        headline: "Washington long-range housing need (state projection)",
        figure: "~1.1M additional homes by 2044",
        context:
          "Department of Commerce summarizes statewide housing need projections used in planning debates—parcel-level feasibility is still local.",
        sourceLabel: "WA Commerce (state housing need publication)",
        sourceUrl:
          "https://www.commerce.wa.gov/news/washington-state-will-need-more-than-1-million-homes-in-next-20-years/",
      },
      {
        headline: "Largest cities — middle housing minimum (illustrative tier)",
        figure: "4 dwelling units / lot floor (Tier 1 framing)",
        context:
          "HB 1110 created population-tier rules; Seattle’s local code stack (NR / One Seattle era) defines how that shows up on the ground—always read the city’s adopted text.",
        sourceLabel: "WA Law (bill digest / statute navigation)",
        sourceUrl: "https://wa-law.org/bill/2023-24/hb/1110/1/",
      },
      {
        headline: "Transit / affordability uplifts (tier concept)",
        figure: "Up to 6 units / lot (when triggers met)",
        context:
          "Quarter-mile transit proximity and income-restricted unit commitments can change the entitlement story; map the stop + recorded affordability covenants.",
        sourceLabel: "WACities HB 1110 FAQ (interpretive)",
        sourceUrl:
          "https://wacities.org/docs/default-source/legislative/073123hb1110interpretationfaqs.pdf",
      },
      {
        headline: "Middle housing forms (statutory bucket)",
        figure: "Duplex → sixplex + townhouses, stacked flats, cottages…",
        context:
          "Subdivision is only one tool—lot-line adjustments, unit lot short plats, and condo regimes sit in adjacent chapters of practice.",
        sourceLabel: "RCW navigation / local ordinance cross-walk",
        sourceUrl: "https://app.leg.wa.gov/rcw/",
      },
    ],
  },
  {
    anchorId: "sub-lib-jurisdiction",
    navLabel: "2 · Jurisdiction",
    title: "Greater Seattle — many counters, one region",
    subtitle: "Seattle SDCI ≠ King County DPER for parcel homework",
    intro:
      "A subdivision library has to start with *who* reviews the map. Mixing counters produces imaginary timelines.",
    stats: [
      {
        headline: "City of Seattle — primary land use / building shop",
        figure: "SDCI (Shaping Seattle + Services Portal)",
        context:
          "Seattle parcels use SDCI trackers for land use, environmental scoping, and building permits; fees publish on Fee Subtitle schedules.",
        sourceLabel: "SDCI resources hub",
        sourceUrl: "https://www.seattle.gov/sdci",
      },
      {
        headline: "Unincorporated King County",
        figure: "County permitting + long-range plans",
        context:
          "UGA boundaries, rural buffers, and road standards differ materially from Seattle NR homework—swap checklists when the pin drops outside city limits.",
        sourceLabel: "King County permitting",
        sourceUrl: "https://kingcounty.gov/depts/permitting.aspx",
      },
      {
        headline: "Embedded cities (east / south lake)",
        figure: "Bellevue, Redmond, Renton, Kent, SeaTac…",
        context:
          "Each maintains its own code, impact fees, and portal—there is no single “Seattle metro subdivision API” for founders to memorize.",
        sourceLabel: "Use each city’s permit portal",
        sourceUrl: "https://kingcounty.gov/",
      },
      {
        headline: "Title + survey reality",
        figure: "1 recorded plat can reflect decades of easements",
        context:
          "Statistically, most delays we teach are *not* zoning color—they’re easements, access, and utility letters that a map screenshot won’t resolve.",
        sourceLabel: "Pair with King County Recorder / title insurer",
        sourceUrl: "https://kingcounty.gov/depts/recordings-records.aspx",
      },
    ],
  },
  {
    anchorId: "sub-lib-pathways",
    navLabel: "3 · Pathways",
    title: "Subdivision spectrum — from line moves to plats",
    subtitle: "Pick the instrument before you pick the spreadsheet row",
    intro:
      "These are process archetypes your cohort maps to the satire video: “split” is not a single button.",
    stats: [
      {
        headline: "Short subdivision (conceptual ceiling — verify locally)",
        figure: "Often ≤ 9 parcels (state pattern; Seattle administers via MUP plat family)",
        context:
          "Exact caps, exceptions, and unit-lot tools appear in SDCI Tips 213A/213B family—download the current PDF before advising sellers.",
        sourceLabel: "Seattle SDCI CAM / plat tips",
        sourceUrl: "https://www.seattle.gov/sdci/permits/permits-we-issue-(a-z)/land-use-/-master-use-permit---plat",
      },
      {
        headline: "Full / long plat",
        figure: "Larger tract reconfiguration",
        context:
          "Bonding, phased improvements, and public review scale up; timelines stretch well past small infill.",
        sourceLabel: "SDCI plat permit page (overview)",
        sourceUrl: "https://www.seattle.gov/sdci/permits/permits-we-issue-(a-z)/land-use-/-master-use-permit---plat",
      },
      {
        headline: "Stay on one tax parcel",
        figure: "ADU / DADU / cottage / attached multifamily",
        context:
          "Sometimes wins on speed and lender narrative even when policy allows more aggressive splits.",
        sourceLabel: "One Seattle zoning hub (NR context)",
        sourceUrl:
          "https://one-seattle-plan-zoning-implementation-seattlecitygis.hub.arcgis.com/",
      },
      {
        headline: "Boundary-line adjustment",
        figure: "Lot-line surgery without new streets",
        context:
          "Useful when two owners cooperate; still needs survey + title and *may* interact with short plat rules depending on facts.",
        sourceLabel: "Always confirm latest SDCI & title counsel",
        sourceUrl: "https://www.seattle.gov/sdci",
      },
    ],
  },
  {
    anchorId: "sub-lib-entitlements",
    navLabel: "4 · Entitlements & time",
    title: "Clock speed — from sketch to shovel",
    subtitle: "What “6 months” vs. “3 years” teaches solopreneurs",
    intro:
      "We publish planning ranges informed by practitioner norms—the only clock that matters is on your specific PAR, SEPA path, and staff loads.",
    stats: [
      {
        headline: "Small infill — planning band",
        figure: "≈ 6–24+ months (entitlements + permits)",
        context:
          "SDCI publishes *median* targets for some steps, but stacked reviews (SEPA, design review, utilities) blow bands regularly.",
        sourceLabel: "Cross-check SDCI customer service + pre-app times",
        sourceUrl: "https://www.seattle.gov/sdci",
      },
      {
        headline: "Design Review (when triggered)",
        figure: "Adds multi-meeting arcs",
        context:
          "Large multifamily in urban centers shows up in Shaping Seattle with EDG/Board cycles—use those as calendar literacy, not yardstick for NR lot splits.",
        sourceLabel: "Shaping Seattle project search",
        sourceUrl: "https://web.seattle.gov/sdci/ShapingSeattle/",
      },
      {
        headline: "Pre-application meetings",
        figure: "High ROI hours",
        context:
          "Statistically the cheapest way to learn whether staff see a fatal flaw—budget them before non-refundable LOI money.",
        sourceLabel: "SDCI pre-app guidance",
        sourceUrl: "https://www.seattle.gov/sdci",
      },
      {
        headline: "Correction loops",
        figure: "1–3+ plan cycles (typical stress case)",
        context:
          "Model *at least one* full resubmittal in interest reserves; lenders ask anyway.",
        sourceLabel: "Internal bootcamp pro forma module",
        sourceUrl: "",
      },
    ],
  },
  {
    anchorId: "sub-lib-environment",
    navLabel: "5 · Environment & utilities",
    title: "Invisible statistics — capacity & critical areas",
    subtitle: "Where spreadsheets hit geology and pipes",
    intro:
      "Subdivision libraries must count *risk events*, not just dwelling math.",
    stats: [
      {
        headline: "SEPA pathways",
        figure: "Checklist vs. full review splits",
        context:
          "A project can change SEPA class mid-stream when new impacts surface—your library shelf should include environmental counsel on speed dial.",
        sourceLabel: "WA Ecology SEPA overview",
        sourceUrl: "https://ecology.wa.gov/regulations-air-water-waste/spermits-certifications/environmental-review-sepa",
      },
      {
        headline: "Critical areas & shorelines",
        figure: "Buffers alter buildable area",
        context:
          "King County and Seattle both maintain GIS overlays; acres “on paper” shrink quickly near streams, steep slopes, or shorelines.",
        sourceLabel: "Map overlays + critical areas codes",
        sourceUrl: "https://kingcounty.gov/services/gis.aspx",
      },
      {
        headline: "Utility letters",
        figure: "Binary on/off for feasibility",
        context:
          "Capacity and main extension quotes routinely move IRR more than a 5% change in rent/sf assumptions.",
        sourceLabel: "Utility provider correspondence (project-specific)",
        sourceUrl: "",
      },
      {
        headline: "Stormwater modernization",
        figure: "Civil drives schedule post-2020 codes",
        context:
          "Expect ATLAS / construction stormwater compliance to interact with any lot reconfiguration that adds impervious cover.",
        sourceLabel: "Seattle stormwater rules (verify current edition)",
        sourceUrl: "https://www.seattle.gov/sdci/codes-rules",
      },
    ],
  },
  {
    anchorId: "sub-lib-economics",
    navLabel: "6 · Economics",
    title: "Dollars — soft costs & vertical risk",
    subtitle: "Numbers founders must model before “split optimism”",
    intro:
      "These bands come from the bootcamp’s planning heuristics—replace with bids before IOIs.",
    stats: [
      {
        headline: "Soft cost burn (small infill)",
        figure: "$50k–$200k+ before shovel",
        context:
          "Survey, civil, legal, carrying costs, monthly SDCI billings—your library treats this as *non-optional* narrative.",
        sourceLabel: "Curriculum warnings table",
        sourceUrl: "",
      },
      {
        headline: "Horizontal + taps",
        figure: "Highly parcel-specific (0 ≠ realistic)",
        context:
          "If the horizontal line in your sources & uses is blank, the model is still in satire mode.",
        sourceLabel: "Utility + civil estimates",
        sourceUrl: "",
      },
      {
        headline: "Hard construction (planning talk)",
        figure: "~$300–$500 / SF (Seattle-area planning bands)",
        context:
          "GC bids and code cycle move this faster than zoning headlines—refresh quarterly.",
        sourceLabel: "Use live GC pricing — not blog rollups",
        sourceUrl: "",
      },
      {
        headline: "Land equity ≠ unlimited leverage",
        figure: "LTV / LTC still bites",
        context:
          "Appraisals, completion guarantees, and interest reserves appear in nearly every construction file we teach.",
        sourceLabel: "Construction lending practitioner norms",
        sourceUrl: "",
      },
    ],
  },
  {
    anchorId: "sub-lib-data-feeds",
    navLabel: "7 · Data feeds & baselines",
    title: "Performance monitors — what’s actually counted",
    subtitle: "Build your own rolling stats, don’t trust vibe metrics",
    intro:
      "Greater Seattle publishes housing permit time series and LU trackers—use them for *market temperature*, not for automatic deal approval.",
    stats: [
      {
        headline: "Issued building permit statistics",
        figure: "Monthly / annual SDCI rollups",
        context:
          "Download Excel summaries to see macro issuance trends; slice by land use when available.",
        sourceLabel: "SDCI issued permit stats",
        sourceUrl: "https://www.seattle.gov/sdci/about-us/reports-and-resources/issued-building-permit-stats",
      },
      {
        headline: "Residential permits — open data",
        figure: "Longitudinal citywide table (download + API)",
        context:
          "Good classroom exercise: chart ADU vs. multifamily counts over time; subdivision-specific tagging may still require manual filtering.",
        sourceLabel: "data.seattle.gov",
        sourceUrl: "https://data.seattle.gov/Housing-Residential-Development/Residential-Building-Permits-Issued-and-Fin/rs98-eyib",
      },
      {
        headline: "Shaping Seattle — land use performance art",
        figure: "Project-level LU records",
        context:
          "Forward pipeline visibility for large LU applications; pair with building permit searches once MUP issues.",
        sourceLabel: "Shaping Seattle map",
        sourceUrl: "https://web.seattle.gov/sdci/ShapingSeattle/",
      },
      {
        headline: "What *isn’t* published neatly",
        figure: "Citywide “short plats per quarter” single line (often)",
        context:
          "Expect to blend plat searches, LU types, and consultant pulls—this library flags the gap honestly.",
        sourceLabel: "Build custom PowerBI / Sheets from exports",
        sourceUrl: "",
      },
    ],
  },
  {
    anchorId: "sub-lib-forward",
    navLabel: "8 · Forward look",
    title: "Future permits & strategic posture",
    subtitle: "How to read the next 24–48 months without prophecy",
    intro:
      "We don’t forecast magic permit numbers—we show how working teams watch the same public feeds you just bookmarked.",
    stats: [
      {
        headline: "Comprehensive plan waves",
        figure: "Cyclic code refreshes (check OPCD calendars)",
        context:
          "Every plan cycle re-sorts permissible density; subdivision strategies need a council-tracking tab, not a set-and-forget memo.",
        sourceLabel: "Seattle OPCD",
        sourceUrl: "https://www.seattle.gov/opcd",
      },
      {
        headline: "Transit opening cadence",
        figure: "Link openings re-price walkshed parcels",
        context:
          "Angle Lake, Kent-Des Moines, and future ST3 segments shift *transit trigger* analytics for HB 1110-tier thinking.",
        sourceLabel: "Sound Transit project pulse",
        sourceUrl: "https://www.soundtransit.org/",
      },
      {
        headline: "Institutional pipeline (TOD + affordable)",
        figure: "High visibility, different capital stack",
        context:
          "Watch Mercy / housing authority / Amazon fund announcements—these are leading indicators for trades and subs, not flip templates.",
        sourceLabel: "Sponsor press + Commerce grants",
        sourceUrl: "https://www.commerce.wa.gov/",
      },
      {
        headline: "Your private dashboard",
        figure: "Saved searches + parcel alerts",
        context:
          "The professional stat is *response time to new information*; train cohorts to update quarterly, not annually.",
        sourceLabel: "Bootcamp homework: rolling CSV",
        sourceUrl: "",
      },
    ],
  },
];

export function getSubdivisionLibraryNavChildren(): { id: string; label: string }[] {
  return subdivisionLibraryChapters.map((c) => ({ id: c.anchorId, label: c.navLabel }));
}
