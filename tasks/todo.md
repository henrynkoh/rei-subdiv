# Task log — rei-subdiv curriculum site

## Plan

- Scaffold Next.js (App Router, TS, Tailwind).
- Encode consolidated curriculum + research notes + video “how-to” addendum in data module.
- Render category navigation and responsive tables on home page.
- Run lint/build.

## Review

- **What shipped**: Expert playbook category (jurisdiction router, strategy matrix, diligence stack, lending heartbeat, pro forma skeleton, kill-list, feasibility memo rubric); expanded research + finance vocabulary; clickable URL cells; curated bookmark panel; facilitator pack route (`/facilitator`) with ops tables; global nav + skip link + print CSS; video appendix extended to 7 beats.
- **Follow-ups**: optional password gate for `/facilitator` if hosted publicly; CMS only if non-devs edit weekly.
- **Docs shipped**: `docs/QUICKSTART.md`, `docs/TUTORIAL.md`, `docs/MANUAL.md`, `docs/MARKETING_CHANNEL_KIT.md` (FB/IG/Threads/Blogger/Naver/Tistory/WordPress/newsletter/email), `docs/README.md`; root `README.md` links all of them.
- **Landing**: `LandingExperience` + left scroll-spy sidebar + `GitHubFab`; `ConditionalChrome` hides top nav on `/`; static export + `BASE_PATH` for GitHub Pages; workflow `.github/workflows/pages.yml`; `.env.example`.
- **Pipeline charts (Seattle open data)**: 2021–2025 actuals from data.seattle.gov Land Use Permits `ht3q-kdvx`, filtered to Single Family/Duplex MUPs with short-plat / boundary-adjustment wording; Dec 31 stock vs calendar-year flow defined in module comment; 2026–2028 = OLS on those five years (not SDCI forecast). Refresh: `npm run data:pipeline`. Library policy stat cites WA Commerce housing-need piece (~1.1M by 2044).
