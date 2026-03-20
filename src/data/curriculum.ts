/**
 * Seattle Lot Subdivision & Infill — curriculum tables for solopreneur founders.
 * Sources: user brief, public policy summaries (One Seattle / HB 1110), SDCI process patterns.
 * Always verify current code, fees, and maps with SDCI before acting.
 */

export type CurriculumTable = {
  title: string;
  description?: string;
  columns: string[];
  rows: string[][];
};

export type Category = {
  id: string;
  name: string;
  subtitle?: string;
  intro?: string;
  tables: CurriculumTable[];
};

export const videoRef = {
  label: "Reference Short (satirical)",
  url: "https://youtube.com/shorts/C0yCM9QkUK4",
  note:
    "Public automated transcript for this Short was not retrievable during site build. The “Video → how-to” section encodes the implied satirical storyline (oversimplified flip/subdivide playbook) so you can contrast it with Seattle’s real process.",
};

export const researchNotes: string[] = [
  "Washington HB 1110 (middle housing) shaped what cities must allow on former single-family land; Seattle implements through its comprehensive plan update (“One Seattle Plan”) and SDCI codes—confirm latest council adoptions and effective dates.",
  "Neighborhood Residential (NR1 / NR2 / NR3) replaced older “single-family” labels in many discussions; minimum lot sizes, FAR, ADU/DADU rules, and subdivision feasibility still depend on the specific lot, zone, overlays, and title covenants.",
  "Density math in policy materials often references minimum units per lot and transit/affordability tiers (e.g., higher allowances near frequent transit or with income-restricted units)—your entitlement path may be infill on one lot, lot split/short plat, or other—verify per property.",
  "Timelines: insider subdivisions and permits routinely run many months to years; a one-week bootcamp teaches decision-making, not completion of entitlements.",
  "Jurisdiction first: Seattle parcels route through SDCI; unincorporated King County uses DPER/Long Range Planning processes; Bellevue, Kirkland, Renton, etc. each maintain their own codes—‘Greater Seattle’ is not one entitlement machine.",
  "Subdivision is not one thing: internal density on one tax parcel vs. short plat vs. long plat vs. boundary-line adjustment vs. condo-style divisions each changes title, lending, and tax treatment—pick the path with counsel, not vibes.",
  "Environmental review (State SEPA): checklist vs. EIS trajectory can dominate schedule; trees, shorelines/critical areas, steep slopes, and noise corridors can require paid consultants before you know if the project pencils.",
  "Utility capacity letters & frontage improvements can silently consume margin—model ‘worst reasonable’ extension costs, not only stick-build $/SF.",
  "Fair Housing and local tenant protections matter for marketing and lease-up; irreverent ‘get-rich’ positioning creates reputational and legal exposure.",
];

export const categories: Category[] = [
  {
    id: "program",
    name: "Program blueprint",
    subtitle: "Who it’s for, how the week runs, what “done” means",
    intro:
      "Small cohort (about 5–10) of Greater Seattle startup solopreneurs with business sense and limited real-estate development experience. Hybrid Seattle + virtual; mornings or afternoons about 3–4 hours plus homework.",
    tables: [
      {
        title: "Outcomes & guardrails",
        columns: ["Element", "What participants get", "Reality check"],
        rows: [
          [
            "Capstone",
            "Personalized feasibility sketch for a target lot + next-step action plan.",
            "Not a guaranteed project; professionals must validate before offers and construction.",
          ],
          [
            "Mindset",
            "Map the satirical video to real steps and costs.",
            "“No money down” is mostly myth; expect equity, experience, guarantees, or partners.",
          ],
          [
            "Ethics",
            "Frame projects in housing need & neighbor impacts.",
            "Avoid predatory narratives; consider affordability where viable.",
          ],
        ],
      },
      {
        title: "Daily rhythm template",
        columns: ["Block", "Purpose", "Facilitation tips"],
        rows: [
          [
            "Open (10 min)",
            "Learning objective + safety/legal disclaimer.",
            "State: not legal, tax, or investment advice.",
          ],
          [
            "Teach (60–90 min)",
            "Concepts + live tool demo (maps, spreadsheets).",
            "Screen-share SDCI resources; slow down on jargon.",
          ],
          [
            "Apply (45–60 min)",
            "Worksheet, memo draft, or spreadsheet row entry.",
            "Float helpers for Excel/Google Sheets basics.",
          ],
          [
            "Reflect (15 min)",
            "Risks, questions, parking lot topics.",
            "Capture follow-ups for office hours.",
          ],
        ],
      },
    ],
  },
  {
    id: "concepts",
    name: "Key ideas & concepts",
    subtitle: "Single reference table tying the video meme to real development physics",
    intro:
      "These ideas combine the user-provided analysis with public-policy context: middle-housing mandates, Seattle’s NR framework, subdivision types, construction finance, and diligence layers that the satire skips.",
    tables: [
      {
        title: "From satire to operating reality",
        description:
          "Video premise: buy a large-lot house, subdivide, borrow against land value, hire a builder, sell—while “rolling” costs into the loan. Below maps each beat to what actually breaks deals in Seattle/King County.",
        columns: ["Concept", "What the joke implies", "What practitioners must handle"],
        rows: [
          [
            "Zoning & entitlement",
            "A generic residential zone “allows” splits.",
            "NR1/2/3 (post–One Seattle era) + overlays, setbacks, lot coverage, tree/critical-area rules, historic districts, and recorded covenants may block or reshape splits.",
          ],
          [
            "Subdivision type",
            "Split equals instant new lots.",
            "Short subdivision / platting / address splits have different thresholds, notices, and utilities triggers than informal sketches.",
          ],
          [
            "Time",
            "Fast flip cycle.",
            "6–24+ months for diligence + entitlements is common; market can move.",
          ],
          [
            "Capital stack",
            "Loan wraps everything; no cash needed.",
            "Lenders underwrite experience, credit, LTV, builder contracts; soft costs (survey, civil, permits, carrying costs) hit cash flow even when interest capitalizes.",
          ],
          [
            "Construction",
            "Hire “Bob the Builder” and proceed.",
            "Seattle requires licensed, insured GCs familiar with stormwater, energy code, inspections; change orders erode modeled margin.",
          ],
          [
            "Exit",
            "Sell finished units at modeled prices.",
            "Absorption, rates, comps, and tax treatment can shrink projected 20%+ margins.",
          ],
        ],
      },
      {
        title: "Regulatory & market context (research synthesis)",
        columns: ["Topic", "Plain-language takeaway", "Follow-up action"],
        rows: [
          [
            "HB 1110",
            "State middle-housing law pushed cities to allow more units on residential land; Seattle codified through comprehensive plan / NR updates.",
            "Read city “implementing HB 1110” PDFs + watch council adoption dates.",
          ],
          [
            "One Seattle Plan / NR zones",
            "NR tiers bundle density, form, ADU allowances, and lot standards different from legacy RS labels.",
            "Plot subject parcels on official zoning layers; save PDF snapshots dated for your file.",
          ],
          [
            "Lot splitting tension",
            "Higher unit counts don’t automatically equal profitable lot splits; new-lot minimums and infrastructure can cap feasible layouts.",
            "Run a civil sketch with surveyor before acquisition promises.",
          ],
          [
            "Seattle 2025–2026 market",
            "Macro: user brief cites more inventory and stabilizing rates; infill still policy-favored.",
            "Stress-test pro formas with slower sales velocity and +10–15% cost escalation bands.",
          ],
        ],
      },
      {
        title: "Money & risk vocabulary",
        columns: ["Term", "Definition for founders", "Typical Seattle-facing nuance"],
        rows: [
          [
            "Land equity",
            "Value of owned (or cheaply controlled) dirt counted toward borrower contribution.",
            "Appraisal must support; option contracts and seller financing change the story.",
          ],
          [
            "LTV / LTC",
            "Loan-to-value or loan-to-cost caps.",
            "High leverage needs strong sponsors; expect haircuts after stress tests.",
          ],
          [
            "Capitalized interest",
            "Interest accrues and is funded by loan draws during construction.",
            "Still need liquidity for insurance, delays, and covenant tests.",
          ],
          [
            "Hard money / JV",
            "Shorter, expensive debt or equity partners.",
            "Legal fees, promote structures, and recourse deserve counsel.",
          ],
          [
            "Pro forma",
            "Spreadsheet story: sources & uses, revenue, margin.",
            "Use ranges, not point estimates, until GC bids exist.",
          ],
          [
            "Recourse / guaranty",
            "Personal or entity guarantees that let lenders pursue sponsors beyond the collateral.",
            "Construction lenders often require completion guarantees and liquidity covenants.",
          ],
          [
            "Front-end / back-end DSCR",
            "Debt-service coverage tests before (stabilized refi) and after (operations).",
            "Spec for-sale product focuses more on exit comps; build-to-rent shifts to DSCR lending.",
          ],
          [
            "Retainage / lien waivers",
            "Holdback from draws; waivers prove subcontractors paid.",
            "Mishandling waivers can freeze draws—train your admin early.",
          ],
        ],
      },
    ],
  },
  {
    id: "expert",
    name: "Expert playbooks (Greater Seattle)",
    subtitle: "How practitioners actually route deals—without pretending zoning is a meme",
    intro:
      "Use these tables when coaching founders off LinkedIn wisdom. Numbers stay directional; every line item needs a local quote or SDCI/King County fee schedule printout with a date stamp.",
    tables: [
      {
        title: "Jurisdiction router (where entitlements actually live)",
        columns: ["If the parcel is in…", "Primary permit/land-use shop", "Practical habit"],
        rows: [
          [
            "City of Seattle",
            "SDCI (planning, building, zoning enforcement stack).",
            "Start with archived GIS + permit history; pre-application before LOI hard money.",
          ],
          [
            "Unincorporated King County",
            "King County permitting / long-range planning interfaces (not SDCI).",
            "Confirm UGA, critical areas, and fire district early—different rhythm than Seattle.",
          ],
          [
            "Other embedded cities (examples: Bellevue, Renton, Shoreline)",
            "That city’s DPD-equivalent department.",
            "Do not assume NR parity; middle-housing overlays differ materially.",
          ],
        ],
      },
      {
        title: "Lot strategy matrix (pick ONE primary hypothesis before lawyers eat your retainer)",
        description:
          "Parallel paths can be explored, but sponsors should declare a ‘lead story’ for budgeting.",
        columns: ["Strategy", "When it wins", "Watchouts"],
        rows: [
          [
            "Stay on one tax parcel; maximize units/ADUs",
            "Simplest title story; fastest to small-balance private lenders on rehab/addition paths.",
            "Tree code + lot coverage + stormwater may cap massing; parking rules sting on tight sites.",
          ],
          [
            "Short subdivision / plat family (city/county specific)",
            "Clean resale lots or fee-simple separation unlocks separate buyers/builders.",
            "Utility extensions, bonding, frontage improvements, and recorded restrictions add months.",
          ],
          [
            "Scrape + horizontal infill (new structures on old footprint concepts)",
            "Great when existing improvements are negative value.",
            "Demo hazards (lead/asbestos), noise, and neighbor politics spike; budget holdbacks.",
          ],
        ],
      },
      {
        title: "Due diligence stack (minimum respectable order)",
        columns: ["Stage", "Work product", "Why founders skip it (and regret it)"],
        rows: [
          [
            "Cheap screen (before PSA deposit)",
            "Assessor card, GIS overlays, street-view slope judgment, rough unit math.",
            "Skipping produces Instagramable ‘deals’ that die in survey.",
          ],
          [
            "Title + certificate of title review",
            "CC&Rs, easements, equitable servitudes, party-wall rights.",
            "Covenants banning multifamily are not ‘solved’ by zeal.",
          ],
          [
            "Boundary / topo survey",
            "Monumented lines + features; base for civil.",
            "\"I can see the backyard\" is not a legal description.",
          ],
          [
            "Civil + utility coordination",
            "Conceptual stormwater strategy, water/sewer inquiry letters.",
            "Assumed ‘tap rights’ blow up budgets when mains are full.",
          ],
        ],
      },
      {
        title: "Construction lending heartbeat (what credit officers secretly score)",
        columns: ["Artifact", "What good looks like", "Failure mode"],
        rows: [
          [
            "Sponsor narrative",
            "Relevant past projects or deeply expert GC + hired owner’s rep.",
            "First-time sponsor + first-time GC + spec product = ‘call us later’.",
          ],
          [
            "Budget + schedule",
            "Line items tied to plans; months of carry explicit.",
            "‘Per SF times size’ without bids reads as toy model.",
          ],
          [
            "Builder risk / course of construction insurance",
            "Named insureds aligned to lender’s Collateral Assignment.",
            "Coverage gaps freeze draws at the worst moment.",
          ],
          [
            "Draw cadence",
            "Monthly inspections; lien releases; retainage policy understood.",
            "Subs unpaid → title curative stall → default spiral.",
          ],
        ],
      },
      {
        title: "Pro forma skeleton (use every time, even when embarrassed by uncertainty)",
        columns: ["Section", "Include", "Sanity check"],
        rows: [
          [
            "Acquisition",
            "Price, closing costs, commissions, transfer tax if applicable.",
            "Can you still win if acquisition price rises 5%?",
          ],
          [
            "Soft costs",
            "Architecture, civil, geotech, permits, legal, finance fees, marketing reserves.",
            "Double whatever first-time model says for legal+survey.",
          ],
          [
            "Horizontal + utility",
            "Sewer/water upgrades, storm facilities, street dedications if required.",
            "If row is $0, you have not finished the pro forma.",
          ],
          [
            "Vertical construction",
            "GC price + owner upgrades + contingency (10–20% depending on risk).",
            "Sensitize labor escalation separately from materials.",
          ],
          [
            "Debt",
            "Interest reserve, fees, extension option costs.",
            "Model at least one 90-day schedule slip.",
          ],
          [
            "Exit",
            "Broker fees, staging, price cuts, capital gains/settlement costs narrative.",
            "Stress 5–10% haircut on exit price for small-batch spec.",
          ],
        ],
      },
      {
        title: "Instant kill-list (train participants to say these out loud)",
        columns: ["Red flag", "What to do before bidding"],
        rows: [
          [
            "Unsurveyed ‘extra land’ claimed by seller",
            "Get ALTA/boundary clarity; tax records ≠ possessory reality.",
          ],
          [
            "‘Utilities already at the street’ without letter",
            "Written availability + capacity; photo of a cap stub is not due diligence.",
          ],
          [
            "\"NR means automatic sixplex\" marketing to investors",
            "Print code sections + talk to planner; record the answer.",
          ],
          [
            "Neighborhood verbal promises",
            "Politics ≠ entitlements; written land-use controls only.",
          ],
        ],
      },
      {
        title: "One-page feasibility memo rubric (scored cold-read in 120 seconds)",
        columns: ["Block", "Must answer in ≤2 sentences"],
        rows: [
          ["Identity", "Address/APN, jurisdiction (city vs. county), current use, purchase thesis."],
          ["Zoning snapshot", "NR tier or equivalent, overlays called out by name, link/screenshot dated."],
          ["Massing hypothesis", "Unit count path A/B + rough FAR/lot coverage call (even if ‘needs architect’)."],
          ["Utilities & civil", "Known constraints; ‘unknown’ explicitly listed as risks, not blanks."],
          ["Soft-cost + time", "Range estimate + longest pole in tent (e.g., SEPA vs. civil)."],
          ["Financing", "Sponsor gap; land equity math; why a lender would pick up the phone."],
          ["Kill criteria", "Two deal-breakers that would make you walk after new info."],
        ],
      },
    ],
  },
  {
    id: "week",
    name: "Seven-day curriculum (tables)",
    subtitle: "Day-by-day execution path for the cohort",
    intro:
      "Each day lists sessions, content, and homework so facilitators can run a bootcamp without improvising structure. Adjust timing if guests cancel.",
    tables: [
      {
        title: "Days 1–2 — Foundations & diligence kickoff",
        columns: ["Day", "Theme", "Core activities", "Homework / artifact"],
        rows: [
          [
            "1",
            "Foundations & market reality",
            "Watch & deconstruct the Short; contrast satire vs. entitlement timelines; macro Seattle infill overview; NR basics + split vs. ADU path.",
            "List 3–5 large-lot candidate parcels with size, price, suspected zone.",
          ],
          [
            "2",
            "Sourcing & zoning DD",
            "Criteria filters; SDCI map walkthrough; min lot + coverage exercise; 1-page feasibility memo template.",
            "Deliver memo draft + red flags for each candidate; prep questions for planner guest.",
          ],
        ],
      },
      {
        title: "Days 3–5 — Process, finance, delivery",
        columns: ["Day", "Theme", "Core activities", "Homework / artifact"],
        rows: [
          [
            "3",
            "Subdivision mechanics",
            "Short vs. full plat concepts; SEPA triggers; pre-app meetings; survey/civil roles; mock checklist exercise.",
            "Draft question list for SDCI pre-application; refine memo with process costs.",
          ],
          [
            "4",
            "Financing reality",
            "Construction & C-to-P products; equity expectations; capitalized interest; pro forma workshop; guest lender Q&A.",
            "Build rough sources & uses + financing gap slide.",
          ],
          [
            "5",
            "Execution & risk",
            "GC selection, contracts, insurance; title/easements; holding costs; environmental + market risk mitigations; 5-minute feasibility pitch.",
            "Update risk register; network list of AE team candidates.",
          ],
        ],
      },
      {
        title: "Days 6–7 — Scale, integrate, graduate",
        columns: ["Day", "Theme", "Core activities", "Homework / artifact"],
        rows: [
          [
            "6",
            "Advanced & scaling paths",
            "ADU/DADU as lighter entry; partnerships / syndication basics; proptech monitoring stack; 90-day milestone roadmap.",
            "Choose primary path (split vs. ADU vs. partner) with rationale.",
          ],
          [
            "7",
            "Showcase + toolkit",
            "Final pitches with feedback; curated SDCI + King County links; templates; certificates.",
            "Commit to two professional consults (legal + survey or lender) within 30 days.",
          ],
        ],
      },
      {
        title: "Guest speakers & cohort operations",
        columns: ["Role", "Why invite", "Prep materials to send"],
        rows: [
          [
            "Residential broker / land specialist",
            "Deal flow realism, negotiation, off-market patterns.",
            "Three anonymized parcels + your memo template.",
          ],
          [
            "City planner / zoning consultant",
            "Interpret code layers; pre-app expectations.",
            "Assessor screenshots + specific code questions.",
          ],
          [
            "Construction lender / mortgage banker",
            "Leverage limits, draws, personal guarantees.",
            "Draft budget + sponsor bios.",
          ],
        ],
      },
    ],
  },
  {
    id: "step-by-step",
    name: "Follow-up instruction manual",
    subtitle: "Procedures grouped by category (non-redundant checklist)",
    intro:
      "Use this after the week to sequence tasks. Parallel paths marked where teams can split work.",
    tables: [
      {
        title: "A. Strategy & team formation",
        columns: ["Step", "Action", "Done when"],
        rows: [
          [
            "A1",
            "Define thesis: lot split, scrape & build, ADU-led, or partnership.",
            "One-page written thesis with success metrics.",
          ],
          [
            "A2",
            "Pick accountable executive + external coach (optional).",
            "RACI chart filed in shared drive.",
          ],
          [
            "A3",
            "Set legal entity & banking basics with CPA/tax counsel input.",
            "Operating agreement skeleton + EIN (if applicable).",
          ],
        ],
      },
      {
        title: "B. Market & site selection",
        columns: ["Step", "Action", "Done when"],
        rows: [
          [
            "B1",
            "Filter for lot area, width, slope, utilities visibility, comp paths.",
            "Short ranked list (≤10) with map pins.",
          ],
          [
            "B2",
            "Title + covenant screen before deeper spends.",
            "Prelim title ordered or seller disclosure reviewed.",
          ],
          [
            "B3",
            "Letter-of-intent / PSA with feasibility & financing contingencies.",
            "Executed contract or passed with lessons logged.",
          ],
        ],
      },
      {
        title: "C. Entitlements & design",
        columns: ["Step", "Action", "Done when"],
        rows: [
          [
            "C1",
            "SDCI pre-application + documented answers.",
            "Meeting notes + action list.",
          ],
          [
            "C2",
            "Survey + conceptual site plan from civil engineer.",
            "PDF showing lot lines, easements, utility assumptions.",
          ],
          [
            "C3",
            "Architectural massing aligned to NR rules & builder feedback.",
            "Schematic package for early bids.",
          ],
        ],
      },
      {
        title: "D. Finance & underwriting",
        columns: ["Step", "Action", "Done when"],
        rows: [
          [
            "D1",
            "Builder budget class C → B as drawings mature.",
            "Three-bid comparison for major trades or GC turnkey.",
          ],
          [
            "D2",
            "Lender submission: plans, budget, schedule, sales evidence.",
            "Term sheet or decline with reasons.",
          ],
          [
            "D3",
            "Contingency & interest reserve sized (not zero).",
            "Spreadsheet scenarios for 90/180-day delays.",
          ],
        ],
      },
      {
        title: "E. Construction & exit",
        columns: ["Step", "Action", "Done when"],
        rows: [
          [
            "E1",
            "Permit set filed; track SDCI reviewer comments.",
            "Issued permit + posted fees paid.",
          ],
          [
            "E2",
            "Construction admin: draws, lien releases, insurance certificates.",
            "Monthly lender draw package current.",
          ],
          [
            "E3",
            "Marketing + disposition (listing or direct sales).",
            "Closed sale or lease-up per business plan.",
          ],
        ],
      },
    ],
  },
  {
    id: "warnings",
    name: "Budget, warnings & resources",
    subtitle: "Consolidated cautions + official links",
    intro:
          "This section merges cost heuristics from the user brief with facilitator guidance—treat numbers as order-of-magnitude until bids exist.",
    tables: [
      {
        title: "Cost & margin heuristics (planning only)",
        columns: ["Line item", "Typical planning range (Seattle-area)", "Notes"],
        rows: [
          [
            "Soft costs before shovel",
            "Roughly $50k–$200k+ can burn quickly on studies, fees, carrying costs.",
            "Smaller than assumed in viral videos; still fatal if under-budgeted.",
          ],
          [
            "Surveys & civil",
            "Often $10k+ combined for meaningful work product.",
            "Complex slopes or shorelines accelerate spend.",
          ],
          [
            "Tap / utility surprises",
            "Highly site-specific; can dominate feasibility.",
            "Early utility letter or county correspondence matters.",
          ],
          [
            "Hard construction",
            "User brief cites ~$300–$500/sf for planning talks (verify with bids).",
            "Density and quality swing totals more than zone label.",
          ],
          [
            "Target margin",
            "Models often aim ~20%+ before financing and promo splits.",
            "Sensitize for selling expenses and closing costs.",
          ],
        ],
      },
      {
        title: "Non-negotiable professional calls",
        columns: ["Discipline", "Why early engagement", "What they deliver"],
        rows: [
          [
            "Land-use / real estate attorney",
            "PSA clauses, entity, covenants, easements.",
            "Title objection strategy + risk memo.",
          ],
          [
            "Survey + civil",
            "Defensible geometry and utility planning.",
            "Plottable exhibit for applications.",
          ],
          [
            "Tax / CPA",
            "Holding period, capital gains, GST exposure topics.",
            "Structure memo aligned to strategy.",
          ],
          [
            "Lender + broker",
            "Reality-check leverage.",
            "Feedback on sponsor gaps before LOI deposits at risk.",
          ],
        ],
      },
      {
        title: "Official & learning links",
        columns: ["Resource", "Use in bootcamp", "URL"],
        rows: [
          [
            "SDCI hub",
            "Permits, tips, code interpretations.",
            "https://www.seattle.gov/sdci",
          ],
          [
            "One Seattle zoning hub (ArcGIS)",
            "NR layer explanations & maps.",
            "https://one-seattle-plan-zoning-implementation-seattlecitygis.hub.arcgis.com/",
          ],
          [
            "HB 1110 tracker (WA Law)",
            "Statutory text awareness.",
            "https://wa-law.org/bill/2023-24/hb/1110/1/",
          ],
          [
            "Seattle Agent Magazine explainer",
            "Broker-facing middle housing notes.",
            "https://seattleagentmagazine.com/2025/07/16/hb-1110-middle-housing-washington-what-brokers-need-to-know",
          ],
          [
            "King County Permitting (unincorporated)",
            "When parcel is not inside Seattle—different portal, fees, reviews.",
            "https://kingcounty.gov/depts/permitting.aspx",
          ],
          [
            "Seattle GIS / Map Seattle",
            "Parcel overlays, historical zoning notes; pair with SDCI property portal.",
            "https://mapping.seattle.gov/",
          ],
        ],
      },
    ],
  },
];

/** Curated external links rendered as a compact link panel on the homepage. */
export const curatedLinks: { label: string; href: string; note: string }[] = [
  {
    label: "SDCI property & permit history",
    href: "https://www.seattle.gov/sdci",
    note: "Bookmark the property detail pages you rely on—screenshots date-stamp your diligence.",
  },
  {
    label: "One Seattle zoning hub",
    href: "https://one-seattle-plan-zoning-implementation-seattlecitygis.hub.arcgis.com/",
    note: "Use the official layers, not third-party heatmaps, when debating with partners.",
  },
  {
    label: "RCW / HB 1110 text (WA Law)",
    href: "https://wa-law.org/bill/2023-24/hb/1110/1/",
    note: "Statute sets the floor; city ordinance sets the local ceiling and process.",
  },
];

export type VideoHowToRow = {
  beat: string;
  satiricalHowTo: string;
  realWorldTranslation: string;
};

export const videoHowToSummary: VideoHowToRow[] = [
  {
    beat: "1. Acquire",
    satiricalHowTo:
      "Buy an under-cherished single-family house on a big chunk of land because “that’s where the money is.”",
    realWorldTranslation:
      "Underwrite land basis AFTER utility, covenant, and slope reality; use contingent PSAs; broker cooperation optional but common.",
  },
  {
    beat: "2. Entitle / split",
    satiricalHowTo: "Subdivide because local rules supposedly make extra lots “free.”",
    realWorldTranslation:
      "Decide between infill on one lot vs. short plat / formal subdivision; budget environmental + neighbor processes.",
  },
  {
    beat: "3. Finance",
    satiricalHowTo:
      "Tell the bank the land is gold; borrow so costs magically disappear into the note.",
    realWorldTranslation:
      "Sponsor strength + appraisal + builder contract drive LTV; model capitalized interest AND cash contingencies.",
  },
  {
    beat: "4. Build",
    satiricalHowTo: "Hand wave at hiring a builder (friendly stereotype).",
    realWorldTranslation:
      "Pre-qualify GCs on Seattle code experience, safety record, references, and insurance.",
  },
  {
    beat: "5. Exit",
    satiricalHowTo: "Sell shiny new product to eager buyers; profit implied.",
    realWorldTranslation:
      "Validate absorption + price tension with resale + new-construction comps; plan tax + closing costs.",
  },
  {
    beat: "6. Neighbors & politics",
    satiricalHowTo: "Ignore neighbors because numbers ‘obviously’ work.",
    realWorldTranslation:
      "Stage outreach, document noticing requirements, and separate rumor from legally relevant comment—bad faith burns schedule even when entitlement is ‘by right’ on paper.",
  },
  {
    beat: "7. Ops & insurance",
    satiricalHowTo: "Skip boring paperwork until someone asks.",
    realWorldTranslation:
      "Course-of-construction coverage, builder’s risk, workers’ comp certificates, and lender collateral assignment must be aligned before you swing hammers; treat ops as part of product.",
  },
];
