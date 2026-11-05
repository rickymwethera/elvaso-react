import { defineConfig } from "vite";

// On GitHub Pages the site is served from https://<owner>.github.io/<repo>/.
// The repo name comes from GITHUB_REPOSITORY (set automatically in GitHub
// Actions), so the build keeps working if the repository is renamed.
const repo = (process.env.GITHUB_REPOSITORY || "").split("/")[1] || "elvasoglassware";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? `/${repo}/` : "/",
  // Use React's automatic JSX runtime so files don't need `import React`.
  esbuild: { jsx: "automatic" },
});
