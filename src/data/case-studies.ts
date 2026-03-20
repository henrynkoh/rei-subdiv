/**
 * Hypothetical composite case studies for cohort discussion—tie to curriculum modules, not real parcels.
 */

export type CaseStudy = {
  anchorId: string;
  shortTitle: string;
  headline: string;
  meta: { where: string; product: string; lessonArc: string };
  situation: string;
  pivot: string;
  curriculumMap: string[];
  takeaway: string;
};

export const caseStudies: CaseStudy[] = [
  {
    anchorId: "cs-ballard-nr-pivot",
    shortTitle: "Ballard NR — plat dream, ADU pivot",
    headline: "When the “extra lot” dies in utilities, density stays on one tax parcel",
    meta: {
      where: "Seattle (NR-tier lot, hypothetical Ballard-style infill context)",
      product: "Started as 2-lot mental model → delivered DADU + retained house strategy",
      lessonArc: "Zoning ≠ civil feasibility",
    },
    situation:
      "A founder underwrote an ~11k SF corner-ish parcel with a dated bungalow: back-of-napkin math said “split, sell dirt, or scrape two aisles.” Pre-app was sunny on unit counts in the abstract, but the utility letter showed sewer capacity and storm routing assumptions that made a clean short-plat line expensive—and the timeline to a sellable second lot crossed a soft rate window.",
    pivot:
      "Team killed the standalone second-lot story, kept one legal lot, and reframed to primary + DADU (with architecture hugging setbacks/FAR). Land equity still helped a construction conversation, but the lender stress-tested carrying costs on a *single-parcel* story with fewer entitlements risk.",
    curriculumMap: [
      "Expert playbook: jurisdiction router (SDCI-first, not generic “residential”).",
      "Due diligence stack: utility letter before LOI hardness.",
      "Lot strategy matrix: “stay on one tax parcel” path vs. plat family.",
      "Financing heartbeat: appraisal + budget tied to one clear exit narrative.",
    ],
    takeaway:
      "The satire video skips the letter that turns “split” into six figures of civil and months of rework—your bootcamp memo should name that letter explicitly.",
  },
  {
    anchorId: "cs-king-county-jurisdiction",
    shortTitle: "King County — wrong city playbook",
    headline: "Unincorporated parcel: SDCI mental models send you to the wrong counter",
    meta: {
      where: "Unincorporated King County (hypothetical UGA-adjacent residential)",
      product: "Small multi-unit infill, not a true Seattle NR clone",
      lessonArc: "Jurisdiction first",
    },
    situation:
      "A solopreneur reused Seattle NR talking points from podcasts—fourplex vibes, middle-housing memes—on a parcel that wasn’t in city limits. The sketch plat concepts and even provider names (survey, fire, health) diverged from “just call SDCI.” SEPA touchpoints and road standards didn’t match the founder’s Seattle checklist PDFs.",
    pivot:
      "They rebooted diligence with county portals, adjusted soft-cost ranges (longer upfront), and reframed partner conversations: “this is a King County schedule,” not a Seattle infill sprint. Title review surfaced rural-mailbox-era easements that a city infill lawyer hadn’t seen lately.",
    curriculumMap: [
      "Jurisdiction router table: SDCI vs DPER / county permitting.",
      "Research synthesis: HB 1110 floor + local ceiling differ by city *and* unincorporated service areas.",
      "Instant kill-list: “I assumed tap rights from the street photo.”",
      "Pro forma skeleton: horizontal + utility line is never $0—worse when county frontage gets involved.",
    ],
    takeaway:
      "Greater Seattle is a region of *different* machines; your sidebar “Cases” exist to immunize teams against copy-paste zoning culture.",
  },
  {
    anchorId: "cs-capitol-hill-sponsor-gap",
    shortTitle: "Capitol Hill — sponsor & carry reality",
    headline: "Land equity helped—but didn’t erase the human underwrite",
    meta: {
      where: "Seattle (dense multifamily-adjacent residential context, hypothetical)",
      product: "Scrape + two-unit for-sale spec (education-only composite)",
      lessonArc: "Construction lending ≠ optimism",
    },
    situation:
      "Strong social proof on the operating business, weak *development* track record. A rosy pro forma assumed permit issuance on the aggressive side and pinned hard costs to a blog’s $/SF. The construction lender wanted a completion guarantor story, liquidity covenants, and a builder contract that didn’t read like a selfie with allowances.",
    pivot:
      "They brought a GC into bid-grade early, widened contingency, and paired with a small equity partner for true completion capacity in the stack. Interest reserve and a modeled 90-day slip turned the file from “cute spreadsheet” to “underwritable narrative”—still painful dilution vs. the viral Short.",
    curriculumMap: [
      "Money vocabulary: recourse, retainage, lien waiver hygiene.",
      "Construction lending heartbeat table.",
      "Day 4 financing reality: capitalized interest ≠ zero cash need.",
      "Video → how-to beat #3 (finance) vs. real sponsor packaging.",
    ],
    takeaway:
      "If your cohort can’t explain *who* completes the job and *where* liquidity sits when draws hiccup, you’re still in satire mode.",
  },
];

export function getCaseStudyNavChildren(): { id: string; label: string }[] {
  return caseStudies.map((cs) => ({ id: cs.anchorId, label: cs.shortTitle }));
}
