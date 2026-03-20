# Manual — Seattle Lot Subdivision & Infill curriculum site

**Product**: Static Next.js viewer for a 7-day Greater Seattle bootcamp (startup solopreneurs).  
**Disclaimer**: This repository and site are **educational only**. Not legal, tax, investment, or brokerage advice.

---

## 1. Audiences & responsibilities

| Role | Uses | Primary artifacts |
|------|------|-------------------|
| **Participant** | `/` curriculum tables, bookmarks, video appendix | Browser; optional printouts |
| **Facilitator** | `/facilitator` runbook + live `/` during sessions | Print kit; guest-prep emails |
| **Content owner** | Edits `src/data/*.ts` | Pull requests; changelog |
| **Developer** | Build, deploy, a11y, auth (optional) | CI, hosting config |

---

## 2. Routes

| URL | Purpose | Print |
|-----|---------|--------|
| `/` | **Landing**: full curriculum with left scroll-spy sidebar, gradients, GitHub FAB; top `SiteChrome` hidden | Sidebar + FAB use `.no-print` |
| `/facilitator` | Ops: room, supplies, clock, guest fallbacks, psychology hooks | Yes — top nav visible |

---

## 3. Global chrome

- **Conditional top bar**: `src/components/ConditionalChrome.tsx` — renders `SiteChrome` on every route **except** `/` so the landing stays full-bleed.
- **Landing shell**: `src/components/LandingExperience.tsx` — sidebar nav from `src/data/site-nav.ts`, mobile sheet, scroll-spy, skip link.
- **GitHub button**: `src/components/GitHubFab.tsx` — URL from `NEXT_PUBLIC_GITHUB_REPO_URL` (`src/config/site.ts`).
- **Print**: `src/app/globals.css` — `.no-print` hides sidebar, mobile toggle, and GitHub FAB on paper.

---

## 4. Content model

### 4.1 `src/data/curriculum.ts`

- **`categories`**: Array of sections, each with `id` (HTML anchor), `name`, optional `subtitle`/`intro`, and `tables`.
- **`CurriculumTable`**: `title`, optional `description`, `columns[]`, `rows[][]`.
- **`researchNotes`**: Bullets above the fold on the home page.
- **`curatedLinks`**: Short list rendered as “High-signal bookmarks.”
- **`videoRef` / `videoHowToSummary`**: Satire decode appendix.

**Row/column contract**: Each row length should match `columns.length`. URLs in cells may be rendered as `<a>`.

### 4.2 `src/data/facilitator.ts`

Plain `{ columns, rows }` objects consumed by `src/app/facilitator/page.tsx`.

---

## 5. Editing workflow (content owner)

1. Create a branch.
2. Edit tables in `curriculum.ts` / `facilitator.ts`.
3. `npm run lint && npm run build`.
4. PR with 1–2 sentence summary (“Updated Day 4 financing guest prep”, etc.).

---

## 6. Deployment

- **Build**: `npm run build`
- **Start**: `npm start` (Node server). Or use a host that runs Next.js (e.g. Vercel) with defaults.
- **Environment**: No secrets required for the static curriculum unless you add analytics or auth.

### 6.1 Facilitator pack visibility

`/facilitator` is **public** in the default app. If you publish to the open web:

- **Option A**: Accept public ops docs (no secret data).
- **Option B**: Middleware / edge auth / Vercel password protection.
- **Option C**: Delete or rename the route for public builds.

---

## 7. Accessibility & quality

- Tables are semantic `<table>` with `<th scope="row">` for first column.
- Prefer short cell copy; wrap long policy text in `description` under the table title.
- Keep link text meaningful; bare URLs in cells are still human-readable (scheme stripped in display).

---

## 8. Troubleshooting

| Symptom | Likely cause | Fix |
|---------|----------------|------|
| Build fails TS | Missing import or malformed `categories` | Read error line; fix `curriculum.ts` |
| Row looks empty | Fewer cells than columns | Pad row or fix data |
| Link not clickable | Cell must be *only* URL string | Trim whitespace; use `https://` |
| Print shows dark mode | Browser prints dark theme | Print CSS forces light `body`; check browser “Background graphics” |

---

## 9. Related documents

- [QUICKSTART.md](./QUICKSTART.md)
- [TUTORIAL.md](./TUTORIAL.md)
- [MARKETING_CHANNEL_KIT.md](./MARKETING_CHANNEL_KIT.md)
- Repository root [README.md](../README.md)
