# agentic-astro — agent brief

A minimal Astro starter template that other repos scaffold from — pre-wired so an AI coding agent hits the ground running.

## The Project

Core promise: a small, opinionated Astro + Tailwind CSS v4 + TypeScript-strict starter with agent conventions, lint/format, tests, git hooks, release automation, and CI wired up on first clone.
Non-goals: framework-heavy abstractions, product features, or repo-specific opinions — the template stays generic.
Status: template / maintenance — kept working and current, not actively developed.

## How I Work Here

- Quality gate: `bun run verify` — type-check, lint, format check, tests, then build. Run it before handoff; the `pre-push` hook runs it too.
- Commits: Conventional Commits; the allowed types live in `commitlint.config.ts`. Squash merges; branch from `main` and never commit to it directly.
- This repo is a **starter template**: keep everything generic and unopinionated, small, and easy for an agent to understand. Do not fold project-specific behavior into it.
- The package manager and runner is **Bun** (`bun install`, `bun run <script>`, `bunx`); toolchain versions are pinned in `.bun-version` / `.node-version`.
- Import `src` through the `@/` alias, wired in `astro.config.ts` (Vite) and `tsconfig.json`; avoid relative `../../` climbs.
- Linting and formatting are **Biome** (`biome.json`) — there is no ESLint or Prettier. `pre-commit` runs `lint-staged`, which applies `biome check --write` to staged files.
- The template ships **no test files**, so `bun run test` passes trivially (`passWithNoTests` in `vitest.config.ts`). Vitest runs in jsdom with globals and jest-dom matchers.
- Releases are automated by release-please: never hand-edit `CHANGELOG.md` or the `version` in `package.json`.
- CI requires the `quality` and `pr-title` checks on pull requests — thin wrappers over the shared `abijith-suresh/workflows` reusable workflows.

## Sources of Truth

| Fact | Where |
|---|---|
| Product intent | § The Project (this file) |
| Runtime behavior | code + tests |
| Commands & deps | package.json |
| Commit rules | commitlint.config.ts |

Code and tests are the authority; this file never overrides executable truth.

## Getting Around

- `src/pages/` — routed pages; `index.astro` is the demo landing page.
- `src/layouts/Layout.astro` — base HTML shell with meta/OG/canonical tags.
- `src/components/` — `Button.astro` and `Counter.astro` (a vanilla-JS interactive island).
- `src/styles/global.css` — Tailwind entry, Geist font faces, and `@theme` tokens.
- `src/test/setup.ts` — Vitest setup (jest-dom matchers).
- `astro.config.ts`, `tsconfig.json`, `biome.json`, `vitest.config.ts` — tooling config.
- `.github/workflows/` — CI and PR-title checks; `.husky/` — git hooks.
- `.devcontainer/` — reproducible dev environment; `vercel.json` — deploy target (GitHub Pages is a documented alternative).
