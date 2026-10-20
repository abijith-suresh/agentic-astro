# Contributing

This repo is a template: every change must stay generic, small, and safe to inherit.

## Working agreements

- Quality gate: run `bun run verify` before handoff. The template ships no tests, so a green run proves nothing about behavior — add focused tests when you add behavior worth protecting.
- Commits: Conventional Commits; branch from `main`, never commit to it, and squash merge. PR titles follow the same convention.
- Releases belong to release-please — don't hand-edit `CHANGELOG.md` or the version in `package.json`.
- Biome is the settled lint/format toolchain; don't reintroduce ESLint or Prettier.
- Keep the documentation surface minimal: `README.md`, `AGENTS.md`, and this file. Don't add a `docs/` tree or PR template files.
