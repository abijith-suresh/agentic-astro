# agentic-astro — agent brief

A minimal Astro starter template that other repos scaffold from — pre-wired so an AI coding agent hits the ground running instead of relearning conventions on every clone.

## The Project

Core promise: a small, unopinionated starter where the agent brief, quality gate, formatting, git hooks, releases, and CI are already wired — clone it and start shipping.
What makes it special: it is a template first. Every change must stay generic, small, and safe to inherit; a change that only serves one downstream project does not belong here.
Non-goals: project-specific features, framework-heavy abstractions, opinions a downstream repo should own, and a docs tree.
Status: template / maintenance — kept working and current, not actively developed.

## Sources of Truth

| Fact | Where |
|---|---|
| Product intent | § The Project (this file) |
| Runtime behavior | code + tests |
| Commands & deps | package.json |
| How to work here | CONTRIBUTING.md |
| Lint/format rules | biome.json |

Code and tests are the authority; this file never overrides executable truth.
