/**
 * Set NEXT_PUBLIC_GITHUB_REPO_URL in .env.local (e.g. https://github.com/you/rei-subdiv)
 * for the floating GitHub button on the landing page.
 */
export const githubRepoUrl =
  process.env.NEXT_PUBLIC_GITHUB_REPO_URL ?? "https://github.com";
