/**
 * Facilitator runbook: logistics, timing buffers, and classroom ops.
 * Print-friendly companion to the public curriculum.
 */

export const facilitatorMeta = {
  title: "Facilitator runbook",
  subtitle: "Seattle Lot Subdivision & Infill Bootcamp — operations",
  cohortSize: "5–10",
  dailyHours: "3–4 contact hours + 1–2 homework",
};

export const roomSetup = {
  columns: ["Item", "Why it matters"],
  rows: [
    ["Wall clock + visible agenda", "Keeps satire deconstruction from eating the finance block."],
    [
      "Two screens (or tablet + projector)",
      "Screen-share GIS/zoning on one; spreadsheet pro forma on the other.",
    ],
    [
      "Signed AV waiver for recording",
      "Guest lenders/planners often decline being recorded—confirm upfront.",
    ],
    ["Sticky notes + markers", "Risk-register clustering at end of Day 5."],
    ["Nametables w/ discipline tags", "Speed-networking for pseudo co-GP teams on Day 1."],
  ],
};

export const suppliesChecklist = {
  columns: ["Supply", "Quantity / note"],
  rows: [
    ["Printed one-pager: feasibility memo skeleton", "1 per participant"],
    ["USB or shared drive link", "Blank pro forma workbook (Google Sheet preferred)"],
    ["City map handout (NR layer legend)", "Optional; digital is usually enough"],
    ["Index cards", "3×5 for ‘kill the deal’ exercise—participants write one red flag"],
    ["Certificate template (PDF)", "Mail merge with participant names"],
  ],
};

export const clockTemplate = {
  columns: ["Segment", "Minutes", "Facilitator cue"],
  rows: [
    ["Arrival / tech check", "10", "Share Wi‑Fi; confirm SDCI site loads."],
    ["Learning objective + disclaimer", "5", "Not legal/tax advice; no deal pitching to staff."],
    ["Teach", "60–75", "Stop every 15m for 1 question max—parking lot on board."],
    ["Tool lab", "30–45", "Pairs: one drives map, one scribes memo bullets."],
    ["Debrief", "10", "‘What would you pay for this dirt after today’s lens?’"],
  ],
};

export const guestFallback = {
  columns: ["If speaker cancels", "Substitute experience"],
  rows: [
    [
      "Planner / zoning consultant",
      "Assign teams to draft 10 emailed questions to SDCI; peer-review before send.",
    ],
    [
      "Construction lender",
      "Use anonymized term sheet redaction exercise + recorded lender webinar excerpt (verify license to play).",
    ],
    ["Broker", "MLS data pull demo using facilitator account; emphasize Fair Housing caution."],
  ],
};

export const psychologyHooks = {
  columns: ["Cohort moment", "Facilitation move"],
  rows: [
    [
      "Overconfidence after Day 1",
      "Force each team to name 3 reasons the city could say ‘no’ before any praise.",
    ],
    [
      "Spreadsheet fatigue Day 4",
      "Switch to narrative: tell a story of one real delay (permit rework) tied to dollars.",
    ],
    [
      "Founder solo shame",
      "Normalize JV + advisor stacks; solopreneurs still externalize law/survey/lender.",
    ],
  ],
};
