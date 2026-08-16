# Build Brief: Apply Bro Rono's Confirmed Writing-Style Patterns Across All Modules (Modules Hub)

Paste this whole file as your prompt to Claude Code, or run it via
`run-writing-style-update.ps1` (repo root), which runs it once per module.
Everything it needs is either in this brief or already in the repo — this
brief is self-contained and does not depend on any external memory.

## 1. Context

Bro Rono manually edited Module 1's copy in a Google Doc (a full pass across
all 8 chapters) and Module 2's Chapter 1 (partial), as a continuation of an
AI-drafted doc. Diffing his real edits against the AI draft — word for word —
surfaced a consistent personal voice: specific terminology preferences and
recurring grammatical/discourse moves. `Modules Hub/src/content/module-1/`
Chapters 1 and 2 already reflect this voice (already patched into source).
Treat those two files as REFERENCE examples of the target voice, not as
something that needs rework — skim them if you want a feel for the voice,
but the real work is everywhere else.

He's now confirmed it's safe to generalize this voice to all modules and all
chapters. This brief distills that voice into two tiers you apply
differently, plus a hard scope boundary on a third tier you must NOT
generalize.

## 2. Tier 1 — Terminology swaps: apply everywhere, mechanically, no judgment needed

These are 100% consistent replacements confirmed across his real edits. Grep
for each across every chapter file in scope and replace in human-facing copy
(never in identifiers — see Section 5 guardrail):

- `bos` → `CEO`
- `klien` → `pelanggan`
- `metrik` → `KPI` — but ONLY the generic "metric" concept. Do not touch
  places where "metrik" is part of an already-specific established term in
  that module (e.g. if a module already uses a defined compound term built
  on "metrik" for a reason). When in doubt, prefer the swap unless it breaks
  a defined term the chapter explicitly sets up.
- `Lapisan` / `lapisan` → `Level` — but ONLY when it refers to the
  Output/Proses/Input framework specifically (capitalize "Level" in that
  case). **Do NOT blanket-replace.** A real false positive already happened:
  an unrelated generic layering concept (e.g. "4 level dokumentasi",
  documentation tiers) is NOT the Output/Proses/Input framework and must be
  left alone. Read the sentence around every match before replacing.

## 3. Tier 2 — Grammatical / discourse patterns: apply with judgment, not blind regex

These are real, recurring moves in his voice. Only apply them where a
sentence genuinely parallels one of these confirmed patterns — don't invent
new instances wholesale, and don't force a pattern onto a sentence where it
doesn't fit naturally.

- **"Sudah" insertion**, especially in the chapter-closing title formula
  "Sekarang Anda [Sudah] Punya X" (e.g. "Sekarang Anda Punya Peta" →
  "Sekarang Anda Sudah Punya Peta Audit Bisnis Anda"). When a chapter's
  closing card echoes its own title inside the body text (a deliberate
  repetition device already used throughout these modules), apply the same
  "sudah" to the echoed body sentence too, for consistency.
- **Explicit-subject insertion**: Indonesian casual writing drops subjects
  freely (e.g. "gampang ngerasa harus..."); his edits sometimes make the
  subject explicit ("Anda gampang ngerasa harus...").
- **terlihat / seolah hedges**: softening a claim by framing it as
  appearance rather than fact.
- **baru-emphasis**: using "baru" to mark a threshold/timing shift.
- **Padahal**: used as a mid-sentence contrastive conjunction, not just a
  sentence-opener.
- **Semua → Banyak**: softening absolute claims (e.g. "Semua bos..." →
  "Banyak bos...").

## 4. Tier 3 — Do NOT generalize this

Some of his real edits were one-off thematic rewordings for one specific
sentence (e.g. a single rephrase like "menuntun keputusan" → "menunjukkan
kesehatan bisnis" in its original exact context). That is a one-off wording
choice, not a reusable pattern. Do not propagate any such specific rewording
you might infer from Module 1/Module 2 into other modules' unrelated
sentences. If you're not confident a change is Tier 1 or a genuine Tier 2
parallel, leave the sentence as-is rather than guessing.

## 5. Guardrail — do not touch identifiers, only human-facing copy

Never change any `id:`, `cardId:`, `fieldId:`, `type:`, `href:`, `icon:`,
`storageKey:`, or `downloadUrl:` value anywhere. Only edit human-facing
string values: `title`, `body`, `intro`, `label`, `prompt`, `eyebrow`,
`options` text, `items` text, `sections[].heading`, worksheet field
`label`s, quiz question stems, and closing recaps. If unsure whether a
string is an identifier or display copy, check whether it's a TypeScript
object key (`id:` = identifier) versus a string value assigned to a
display-copy key (`title:`, `body:`, `label:`, `prompt:` = copy).

**Critical downstream check — do this after ANY terminology or wording
swap in a chapter file:** `sort-list` cards have a `correctAnswer` array
that is matched by *exact text* against that card's `items` array, not by
index. If you rename an item's display text inside `items` (e.g. `Bos` →
`CEO`), you MUST also update the matching string inside `correctAnswer` to
the exact same new text, or the quiz scoring silently breaks. `correctAnswer`
is easy to miss because it's not something you'd normally think of as
"display copy." After finishing each chapter file, grep that file for
`correctAnswer` and manually verify every string inside it still
exact-matches its corresponding `items` (or `options`, for fill-in-the-blank)
array after your edits. Fix any mismatch you find.

## 6. Scope — work ONLY inside the assigned module's content folder

You will be told which single module to work on for this run (see the
"Target for this run" line the runner script appends below this brief, or —
if run manually — work through all of `Modules Hub/src/content/module-N/`
for the module number you were given).

For that module, edit ONLY:
- `Modules Hub/src/content/module-N/chapter1.ts` through `chapter8.ts`
- `Modules Hub/src/content/module-N/chapters.ts` (chapter title/description
  teasers — genuine human-facing copy too)

Do NOT touch:
- Any other module's content folder
- `Modules Hub/src/content/types/card.ts`
- `Modules Hub/src/data/modules.ts` or `Modules Hub/src/access/moduleAccess.ts`
- Any shell/routing files (`App.tsx`, `ModuleHome.tsx`, `DeckViewer.tsx`,
  `components/cards/*`, context files, etc.)
- The old standalone `Module N/` folders at the repo root — they are no
  longer live (Modules Hub is the shipped app); editing them wastes effort
  with no user-facing benefit
- `Effortless Leader Funnel/` (the separate ad-facing funnel app) — out of
  scope for this brief
- `Module 9/` and any Module 9 content — it's a different, newer module not
  yet wired into Modules Hub, and out of scope for this brief

## 7. Process

1. Read every in-scope file for this module first, so you have the whole
   module's voice and structure in mind before editing (don't edit
   chapter-by-chapter blind — a Tier 2 pattern in Chapter 3 might parallel
   something you need to check in Chapter 6 too).
2. Apply Tier 1 swaps everywhere they genuinely apply (Section 2).
3. Apply Tier 2 patterns only where a genuine sentence-level parallel exists
   (Section 3) — read the actual sentence, don't keyword-match.
4. Do NOT apply Tier 3 one-off rewordings (Section 4).
5. Respect the identifier guardrail (Section 5) and run the `correctAnswer`
   cross-check on every chapter file you touched.
6. After all edits for this module, re-grep the whole module folder for
   leftover instances of `bos`, `klien`, ` metrik` (word boundary — don't
   flag "metrik" inside an unrelated word), and `Lapisan`/`lapisan` to make
   sure nothing was missed, and re-check each match's context per Section 2
   before leaving it unswapped or before swapping it.

## 8. Definition of done (for the assigned module)

- [ ] All Tier 1 terminology swaps applied across `chapter1.ts`–`chapter8.ts`
      and `chapters.ts`, with the "Lapisan/lapisan → Level" swap applied
      ONLY where it means the Output/Proses/Input framework
- [ ] Tier 2 grammatical patterns applied only where a genuine, well-grounded
      parallel exists — no invented instances
- [ ] No Tier 3 one-off rewordings propagated from Module 1/Module 2 into
      this module's unrelated sentences
- [ ] No card `id`, `cardId`, `fieldId`, `type`, `href`, `icon`,
      `storageKey`, or `downloadUrl` value changed anywhere
- [ ] Every `correctAnswer` array in this module's chapter files verified to
      still exact-match its corresponding `items`/`options` array after
      edits (fixed if not)
- [ ] Nothing outside this module's `Modules Hub/src/content/module-N/`
      folder touched
- [ ] Old standalone `Module N/` folder untouched
- [ ] Runs via `npm run build` with no errors inside `Modules Hub/`
