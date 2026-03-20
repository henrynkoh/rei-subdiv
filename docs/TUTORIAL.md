# Tutorial — from clone to customized bootcamp site

This tutorial assumes basic familiarity with a terminal and a code editor. Goal: you can **run**, **edit curriculum tables**, and **ship** a small Next.js site.

---

## Part 1 — Run the app

1. **Install dependencies** (Node 18+ recommended):

   ```bash
   npm install
   ```

2. **Start development**:

   ```bash
   npm run dev
   ```

3. Open **Curriculum** at `/` and **Facilitator pack** at `/facilitator`. Use the top nav or direct URLs.

4. **Print test**: In the browser, Print Preview (`Ctrl/Cmd + P`). Section shortcut pills hide on print; tables should remain readable.

---

## Part 2 — Understand the file map

| Path | Role |
|------|------|
| `src/data/curriculum.ts` | All cohort-facing tables, research notes, bookmarks, video appendix |
| `src/data/facilitator.ts` | Facilitator runbook tables (room, supplies, clock, fallbacks) |
| `src/app/page.tsx` | Home page layout: bookmarks panel, categories, video section |
| `src/app/facilitator/page.tsx` | Facilitator page assembly |
| `src/components/CurriculumTableBlock.tsx` | Renders tables; requires `categoryId` for anchor ids; auto-linkifies bare `http(s)` cells |
| `src/data/site-nav.ts` | Sidebar structure + table anchors (must match `tableAnchorId` in code) |
| `src/components/LandingExperience.tsx` | Landing layout: sidebar, scroll-spy, mobile menu |
| `src/components/SiteChrome.tsx` | Global nav + skip link |
| `src/app/globals.css` | Includes **print** rules (`.no-print`) |

---

## Part 3 — Edit a curriculum table

`CurriculumTableBlock` is invoked as `<CurriculumTableBlock categoryId={cat.id} table={t} />`. If you add tables, ensure each has a unique `title` per category (anchors are `tbl-{categoryId}-{slug(title)}`).

1. Open `src/data/curriculum.ts`.
2. Locate `export const categories`.
3. Each category has `tables: [{ title, columns?, description?, rows }]`.
4. `rows` is `string[][]`: each inner array must have **one value per column** (same length as `columns`).

**Example** — add a row to an existing table:

```ts
rows: [
  // ...existing rows
  ["New row label", "Cell 2", "Cell 3"],
],
```

5. If the last column is a URL starting with `https://`, the UI renders it as a clickable link.

6. Run `npm run lint` before commit.

---

## Part 4 — Add a new bookmark (homepage)

In `curriculum.ts`, append to `curatedLinks`:

```ts
export const curatedLinks = [
  // ...
  {
    label: "Your link title",
    href: "https://example.com",
    note: "One line why it matters.",
  },
];
```

---

## Part 5 — Facilitator runbook tweaks

Edit `src/data/facilitator.ts` (`roomSetup`, `suppliesChecklist`, etc.). The facilitator page reads those objects and passes them to the same table component as the curriculum.

---

## Part 6 — Ship with confidence

```bash
npm run lint
npm run build
```

Fix any TypeScript or ESLint errors. Common mistake: **row length** not matching **column count**—the table renderer pads missing cells with blanks, but you should keep lengths aligned for clarity.

---

## Part 7 — After you change “legal” facts

Zoning, fees, and HB 1110 implementation **drift**. When you update numbers or policies:

1. Add a **date note** in the table description or in `researchNotes`.
2. Re-export PDFs from SDCI / King County and replace links if URLs move.
3. Tell cohorts: *this site is educational; confirm with professionals.*

---

## Next steps

- Read [MANUAL.md](./MANUAL.md) for roles, printing, and deployment caution.
- Read [MARKETING_CHANNEL_KIT.md](./MARKETING_CHANNEL_KIT.md) if you are promoting the bootcamp.
