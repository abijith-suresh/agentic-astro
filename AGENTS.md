# agentic-astro — agent brief

A minimal Astro starter template that other repos scaffold from — pre-wired so an AI coding agent hits the ground running instead of relearning conventions on every clone.

## The Project

Core promise: a small, unopinionated starter where the agent brief, quality gate, formatting, git hooks, releases, and CI are already wired — clone it and start shipping.
Non-goals: project-specific features, framework-heavy abstractions, or opinions a downstream repo should own.
Status: template / maintenance — kept working and current, not actively developed.

## How I Work Here

- This is a template first: keep every change generic, small, and safe to inherit. If a change only serves one downstream project, it does not belong here.
- Verification is on you for what you touch; `bun run verify` is the handoff gate. The template intentionally ships no tests, so a green run proves nothing about behavior — add focused tests when you add behavior worth protecting.
- Commits: Conventional Commits; branch from `main` and never commit to it. Squash merges. PR titles follow the same convention.
- Releases belong to release-please — don't hand-edit `CHANGELOG.md` or the version in `package.json`.
- Biome is the settled lint/format toolchain; don't reintroduce ESLint or Prettier.
- Keep the documentation surface minimal: README and this brief. Don't add a docs/ tree or PR template files.

## Sources of Truth

| Fact | Where |
|---|---|
| Product intent | § The Project (this file) |
| Runtime behavior | code + tests |
| Commands & deps | package.json |
| Commit rules | commitlint.config.ts |
| Lint/format rules | biome.json |

Code and tests are the authority; this file never overrides executable truth.
