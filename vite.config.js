import { defineConfig } from "vite";

// Served from https://rickymwethera.github.io/elvaso-react/ on GitHub Pages
export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/elvaso-react/" : "/",
  // Use React's automatic JSX runtime so files don't need `import React`.
  esbuild: { jsx: "automatic" },
});
