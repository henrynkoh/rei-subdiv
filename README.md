# Seattle lot subdivision & infill curriculum (Next.js)

Static curriculum viewer for a **one-week Greater Seattle bootcamp** aimed at **startup solopreneurs**. Content covers:

- Satirical “dummy guide” vs. real entitlement / finance / build steps  
- NR / One Seattle / HB 1110 **context** (always verify with SDCI & King County before relying on numbers)  
- Day-by-day schedule, expert playbooks, checklists, warnings, official links  
- “Video → how-to” appendix (satire decoded)  
- **Facilitator runbook** at `/facilitator` (print-friendly)  

## Landing page (home)

- **Left sidebar**: scrollable nav with **nested jumps** to every curriculum table.
- **Scroll-spy**: the active section highlights while you read.
- **Layout**: glass-style cards, violet/fuchsia gradients, responsive hero + feature chips.
- **Mobile**: **Sections** button reveals the same sidebar.
- **GitHub**: floating button at **bottom-right** — set `NEXT_PUBLIC_GITHUB_REPO_URL` in `.env.local` ([.env.example](./.env.example)).
- **`/`** uses the immersive landing; **`/facilitator`** keeps the top site bar for quick escapes.

## GitHub Pages

1. Set `NEXT_PUBLIC_GITHUB_REPO_URL` (and optional `BASE_PATH` if the site is not at domain root).
2. For `https://<user>.github.io/<repo>/`:

   ```bash
   BASE_PATH=/<repo> STATIC_EXPORT=1 npm run build
   ```

   Upload **`out/`**, or use [.github/workflows/pages.yml](.github/workflows/pages.yml) (edit `BASE_PATH` to match the repo name).

3. Repo **Settings → Pages → Source**: GitHub Actions.

## Documentation

| Doc | Purpose |
|-----|---------|
| [**Quickstart**](./docs/QUICKSTART.md) | Run locally in 60 seconds; first content edit |
| [**Tutorial**](./docs/TUTORIAL.md) | Full walkthrough: file map, editing tables, shipping |
| [**Manual**](./docs/MANUAL.md) | Operators: routes, content model, deploy, troubleshooting |
| [**Marketing channel kit**](./docs/MARKETING_CHANNEL_KIT.md) | Ad/post copy: Facebook, Instagram, Threads, Blogger, Naver, Tistory, WordPress, newsletter, email |
| [**Docs index**](./docs/README.md) | All-of-docs table |

## Develop

```bash
npm install
npm run dev
```

- **Curriculum**: [http://localhost:3000](http://localhost:3000)  
- **Facilitator pack**: [http://localhost:3000/facilitator](http://localhost:3000/facilitator)

## Build

```bash
npm run build
npm start
```

## Source of truth

- Cohort content: `src/data/curriculum.ts`  
- Facilitator ops: `src/data/facilitator.ts`  
- UI: `src/app/page.tsx`, `src/app/facilitator/page.tsx`, `src/components/*`  

## Legal / accuracy

This site is **educational only**. Zoning, subdivision, and finance rules change—confirm with Seattle SDCI, King County, lenders, and qualified counsel before any transaction.

## Project tracking

See [`tasks/todo.md`](./tasks/todo.md) for planning notes.
