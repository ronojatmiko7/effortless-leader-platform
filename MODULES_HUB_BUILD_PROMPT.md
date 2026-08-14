# Build Brief: Modules Hub — Consolidate Modules 1–8 Into One App

Paste this whole file as your prompt to Claude Code, or run it via
`run-modules-hub.ps1` (repo root). Requires `scaffold-modules-hub.ps1` to
have already run (the runner does this for you automatically).

## 1. Context

Modules 1–8 currently exist as 8 fully separate, standalone Vite/React apps
(`Module 1/` through `Module 8/`), each with its own `package.json`, each a
self-contained card-deck micro-learning experience with its own 8 chapters.
There's no unified place a customer goes to see and navigate between the
modules they've unlocked — each module is its own isolated deployment.

`scaffold-modules-hub.ps1` has already mechanically ported everything into a
new `Modules Hub/` folder:
- Shared, already module-agnostic primitives (confirmed by direct
  investigation before this brief was written): `src/components/DeckViewer.tsx`,
  everything under `src/components/cards/`, `src/types/card.ts`,
  `src/main.tsx`, `src/index.css`, `vite.config.ts`, `tsconfig*.json`,
  `.oxlintrc.json`, `package.json` (renamed to `"modules-hub"`), `index.html`
  (title renamed to a generic hub title) — all copied verbatim from Module 8
  (the most recently built, most polished module). **You should not need to
  touch these at all except where this brief says otherwise.**
- Each module's own content, straight-copied and untouched:
  `src/content/module-1/chapter1.ts..chapter8.ts` + `chapters.ts`, through
  `src/content/module-8/...`. **Do not edit any chapter content file** — the
  actual learning content is already correct; this brief is purely about the
  shell/wiring around it.
- `src/components/ModuleHome.tsx`, `src/App.tsx`, `src/progress/ProgressContext.tsx`,
  `src/workbook/WorkbookContext.tsx` were also copied from Module 8 as
  **starting points only** — they still have Module 8's hardcoded,
  single-module logic (hardcoded title, hardcoded chapter-id order,
  hardcoded storage keys, static single-chapters-array import). Rewriting
  these four files for the multi-module hub is your main job below.

Sequencing note: if `run-module2-terminology-update.ps1` was run before this
scaffold, `src/content/module-2/chapter3.ts` will already say "KPI Hasil"
instead of "Lag Metric" — nothing extra to do. If it wasn't run yet, Module
2's content just ports with its current wording; that's a separate, optional
follow-up, not something to fix as part of this brief.

## 2. What you're building

A three-level navigation: **Hub Home** (lists all 8 modules, shows
locked/unlocked state) → **Module Home** (lists that module's 8 chapters,
existing per-chapter sequential lock/unlock — this logic already exists in
`ProgressContext.tsx`, just needs to become module-scoped) → **DeckViewer**
(renders the active chapter, needs zero changes — already fully
module-agnostic, confirmed).

### 2.1 `src/data/modules.ts` (new) — top-level module registry

One level up from each module's own `chapters.ts`. Import each module's
`chapters` array from `content/module-N/chapters.ts` (aliased on import to
avoid name collisions, e.g. `import { chapters as module1Chapters } from '../content/module-1/chapters'`)
and wrap with module-level metadata. Use this exact title list (from the
funnel's authoritative Service → Module mapping — do not invent different
names):

| Module | Title |
|---|---|
| 1 | Enterprise Operational Audit |
| 2 | KPI Architecture & Strategic Cascading |
| 3 | Executive Business Review (EBR) Governance |
| 4 | Business Process Re-engineering (Silo-Breaking) |
| 5 | SOP Optimization & Usability Redesign |
| 6 | Performance Management System Overhaul |
| 7 | Job Architecture & Competency Modeling |
| 8 | Enterprise Change Management Rollout |

Write one short (one-sentence) description per module in the same casual
Bahasa Indonesia voice as the chapter descriptions already inside each
module's `chapters.ts` — read a couple of those first to match register.

```ts
export interface ModuleMeta {
  id: string          // 'module-1' .. 'module-8'
  number: number       // 1..8
  title: string
  description: string
  chapters: ChapterMeta[]  // re-export the type from wherever ChapterMeta already lives
}

export const modules: ModuleMeta[] = [ /* 8 entries, in order */ ]
```

### 2.2 `src/access/moduleAccess.ts` (new) — purchase-access stub

There's no backend/purchase system yet (see `funnel-launch-checklist.md` in
project memory, section 4/5 — still open). This is a clearly-stubbed
drop-in point, same convention as `submitLead()` in the funnel app: obvious,
commented, easy to find and replace once real Supabase-backed entitlements
exist.

```ts
// STUB — no real purchase/entitlement backend exists yet (see project
// memory: funnel-launch-checklist.md, sections 4-5). Module 1 is always
// free, matching the funnel's offer (every purchase/coaching package always
// includes Module 1). Modules 2-8 default to LOCKED. Flip
// UNLOCKED_FOR_TESTING or list specific module numbers in
// MANUALLY_UNLOCKED_MODULES to preview locked modules during dev/QA.
// Real implementation later: replace this file's body with a Supabase query
// against a purchases/entitlements table, keyed by the logged-in customer.
const UNLOCKED_FOR_TESTING = false
const MANUALLY_UNLOCKED_MODULES: number[] = []

export function hasModuleAccess(moduleNumber: number): boolean {
  if (moduleNumber === 1) return true
  if (UNLOCKED_FOR_TESTING) return true
  return MANUALLY_UNLOCKED_MODULES.includes(moduleNumber)
}
```

### 2.3 `src/components/HubHome.tsx` (new) — top-level module list

Same visual language as the existing `ModuleHome.tsx` (rounded cards,
indigo accent, slate neutrals, lock icon for inaccessible items) but one
level up: lists all 8 modules from `modules.ts`, each showing
locked/unlocked via `hasModuleAccess()`. Unlocked modules are clickable and
call an `onSelectModule(moduleId: string)` prop. Locked modules are
disabled/non-clickable with a short "Beli buat buka" or similar EL-voice
label (don't invent a real purchase link here — this just needs to look
correct; wiring it to the funnel app's offer screen is a separate future
task, out of scope for this brief). Show each module's own chapter-completion
progress too (X/8 chapters done), reusing the same completed-count pattern
`ModuleHome.tsx` already has, just computed per-module.

### 2.4 `src/components/ModuleHome.tsx` (rewrite) — parameterize

Currently hardcodes `"Modul 8 · Enterprise Change Management Rollout"` and
statically imports `chapters` from `../content/chapters`. Change its props
to:

```ts
interface ModuleHomeProps {
  moduleTitle: string
  chapters: ChapterMeta[]
  onSelectChapter: (chapterId: string) => void
  onBackToHub: () => void   // new — a way back to Hub Home
}
```

Replace the hardcoded eyebrow string with `moduleTitle`, replace the static
`chapters` import with the prop, add a back-to-hub affordance (small link/
button near the header, doesn't need to be elaborate).

### 2.5 `src/progress/ProgressContext.tsx` and `src/workbook/WorkbookContext.tsx` (rewrite) — parameterize by module

Both currently hardcode a single `STORAGE_KEY` string
(`'prediagnosis-progress-module-8'` / `'prediagnosis-workbook-module-8'`) and
`ProgressContext.tsx` additionally hardcodes a `CHAPTER_ORDER` array
duplicating chapter ids. Change both providers to accept a `moduleId: string`
prop (e.g. `'module-3'`) and derive `STORAGE_KEY` from it
(`` `prediagnosis-progress-${moduleId}` ``, `` `prediagnosis-workbook-${moduleId}` ``
— **keep this exact naming scheme**, it matches what the original 8
standalone modules already used, so any real user's existing localStorage
data stays compatible if they'd used a standalone module before). Derive
`CHAPTER_ORDER` from a `chapterIds: string[]` prop (passed the ids from that
module's own `chapters` array) instead of a hardcoded array, removing the
duplication.

In `App.tsx` (below), wrap the active module's subtree with
`<ProgressProvider moduleId={activeModuleId} chapterIds={...}>` and
`<WorkbookProvider moduleId={activeModuleId}>`, keyed by `activeModuleId` so
switching modules cleanly remounts fresh state scoped to that module — don't
let one module's provider tree leak into another's.

### 2.6 `src/App.tsx` (rewrite) — three-level routing

Replace the current single-module `AppShell` with routing across:
`hub` → `module-home` (for a specific module) → `chapter` (for a specific
module + chapter). Simple local state is fine, same spirit as the existing
`useState` string-based `activeView` pattern — no routing library needed.
Rough shape (adapt as needed, this is guidance not a mandate):

```ts
type View =
  | { level: 'hub' }
  | { level: 'module-home'; moduleId: string }
  | { level: 'chapter'; moduleId: string; chapterId: string }
```

- Hub Home → selecting an unlocked module → that module's Module Home
  (reading its `chapters` from `modules.ts`, guarded by `hasModuleAccess`
  even though HubHome already gates the click — belt and suspenders, don't
  trust only the UI layer).
- Module Home → selecting an unlocked chapter (existing `isChapterUnlocked`
  logic from the now-parameterized `ProgressContext`) → DeckViewer.
- DeckViewer completing a chapter → `markChapterComplete` → back to that
  module's Module Home (not the Hub Home — same behavior as today, don't
  change this).
- A way back to Hub Home from Module Home (the `onBackToHub` prop from 2.4).

## 3. Guardrails

- Do not edit any file under `src/content/module-*/` — chapter content is
  already correct, untouched by the scaffold, and shouldn't be touched here
  either.
- Do not rename any card `id` or workbook field `id` anywhere — several
  modules' final chapters (e.g. `chapter8.ts`'s report card) read earlier
  chapters' saved fields by id; this consolidation is purely about the
  shell/routing/storage layer around the content, not the content's internal
  structure.
- `DeckViewer.tsx` and everything under `components/cards/` should need
  **zero changes** — they're already fully module-agnostic. If you find
  yourself wanting to edit one of these files, stop and reconsider; the
  issue is more likely in how `App.tsx` is calling it.
- Keep the exact `prediagnosis-progress-${moduleId}` / `prediagnosis-workbook-${moduleId}`
  storage-key naming scheme described in 2.5 — don't invent a different
  format.

## 4. Definition of done

- [ ] `src/data/modules.ts` exists with all 8 modules registered, correct
      titles (per the table in 2.1), one-sentence EL-voice descriptions
- [ ] `src/access/moduleAccess.ts` stub exists per 2.2, Module 1 always
      unlocked, Modules 2–8 locked by default
- [ ] `src/components/HubHome.tsx` exists, lists all 8 modules with correct
      locked/unlocked visual state and per-module chapter-completion progress
- [ ] `ModuleHome.tsx` parameterized (no hardcoded title, no static chapters
      import), has a working back-to-hub affordance
- [ ] `ProgressContext.tsx` / `WorkbookContext.tsx` parameterized by
      `moduleId`, `CHAPTER_ORDER` derived from a passed-in chapter-id list
      instead of hardcoded
- [ ] `App.tsx` correctly routes Hub Home → Module Home → DeckViewer → back
      to that module's Home on completion, with a path back to Hub Home
- [ ] Switching between modules doesn't leak one module's progress/workbook
      data into another's (verify by completing a chapter in Module 1, then
      checking Module 2's Module Home shows 0/8 complete)
- [ ] `DeckViewer.tsx` and `components/cards/*` untouched
- [ ] No content file under `src/content/module-*/` touched
- [ ] No card/field `id` values changed anywhere
- [ ] Runs via `npm run build` with no errors
