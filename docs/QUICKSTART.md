# Quickstart

## 60 seconds — run locally

```bash
git clone <your-repo-url> && cd rei-subdiv
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_GITHUB_REPO_URL for the GitHub button
npm run dev
```

- **Curriculum (cohort)**: [http://localhost:3000](http://localhost:3000)  
- **Facilitator pack (print-friendly)**: [http://localhost:3000/facilitator](http://localhost:3000/facilitator)

## 5 minutes — first content edit

1. Open `src/data/curriculum.ts`.
2. Find the `categories` array; pick a table `rows` entry and change one cell string.
3. Save; the dev server hot-reloads.
4. Refresh the browser and jump to the section via in-page anchors.

## 5 minutes — production build check

```bash
npm run build
npm start
```

Visit the same two URLs on port **3000** (default for `next start`).

## Where to read next

| Need | Doc |
|------|-----|
| Full operations & roles | [MANUAL.md](./MANUAL.md) |
| Step-by-step learning path | [TUTORIAL.md](./TUTORIAL.md) |
| Promoting the bootcamp | [MARKETING_CHANNEL_KIT.md](./MARKETING_CHANNEL_KIT.md) |

## Deploy (typical)

This is a static-friendly Next app (`next build`). Deploy on [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any Node host running `npm run build && npm start`. Set build command `npm run build` and output/start per host docs.

**Facilitator pack** is public by default at `/facilitator`. If you need it private, add auth at the edge or remove the route—see [MANUAL.md](./MANUAL.md).
