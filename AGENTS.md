# Agent Instructions — agentic-astro

## Overview

- `agentic-astro` is a minimal Astro starter for AI-assisted development.
- Keep it opinionated, small, and easy for agents to understand.

## Stack

- Astro 5
- Tailwind CSS v4
- TypeScript strict mode
- Bun

## Commands

- Install deps: `bun install`
- Dev server: `bun run dev`
- Quality gate: `bun run verify`
- Individual steps: `bun run type-check`, `bun run lint`, `bun run format:check`, `bun run test`, `bun run build`

## Project Map

- `src/layouts/Layout.astro`: base layout
- `src/pages/`: routed pages
- `src/styles/global.css`: global styling and theme tokens
- `src/test/setup.ts`: Vitest setup

## Hard Rules

- Use the `@/` path alias for `src` imports.
- Prefer small, obvious patterns over framework-heavy abstractions.
- Keep the starter generic unless the user wants this repo specialized.

## Git And CI

- Branch from the latest `main` before starting changes.
- Never commit directly to `main`.
- Commit and PR titles must use Conventional Commits: `feat`, `fix`, `docs`, `refactor`, `chore`, `test`, `ci`.
- Before push, run `bun run verify`.
- `pre-commit` runs `lint-staged`, `commit-msg` runs `commitlint`, and `pre-push` runs `bun run verify`.
- CI enforces `quality` and `pr-title` checks on pull requests.
- Squash merge is the expected merge strategy.
