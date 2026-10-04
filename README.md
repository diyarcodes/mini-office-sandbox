# mini-office-sandbox

A tiny TypeScript utility library. This repository is the workplace of the
**Mini Office** AI team (PM, Developer, QA agents).

## Conventions (agents: follow these)

- Pure TypeScript, zero runtime dependencies. ESM only.
- Utilities live in `src/lib/<topic>-utils.ts`; each module exports small,
  pure, documented functions.
- Every function has vitest tests in `tests/`. `npm test` must stay green.
- Conventional commit subjects, e.g. `feat: add slugify (#12)`.
- No new dependencies without an explicit issue requirement.

## Scripts

- `npm test` — run vitest
- `npm run typecheck` — `tsc --noEmit`
