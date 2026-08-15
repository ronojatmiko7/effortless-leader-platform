# Build Brief: Module 2 (inside Modules Hub) — Rename Lead/Lag Metric to KPI Usaha / KPI Hasil

Paste this whole file as your prompt to Claude Code, or run it via
`run-module2-terminology-update.ps1` (repo root). Everything it needs is
either in this brief or already in the repo.

**UPDATED Aug 14 — retargeted to Modules Hub.** This brief originally
targeted the standalone `Module 2/` app. Since then, Modules 1–8 were
consolidated into one app, `Modules Hub/`, which is now the live app going
forward (`Modules Hub/src/content/module-2/` is the copy that actually
ships). This version edits that copy instead. The old standalone
`Module 2/` folder is left untouched — it's kept only as backup/reference,
not part of the live product, so there's no value in updating it too.

## 1. Context

`Modules Hub/src/content/module-2/` ("KPI Architecture & Strategic
Cascading") holds Module 2's 8 chapters inside the consolidated Modules Hub
app. Its core teaching, spanning Chapters 3 through 8, is the classic
predictive-vs-result KPI distinction, currently taught under the
English-loanword labels **"Lag Metric"** and **"Lead Metric"**:

- **"Lag Metric"** is formally introduced in
  `Modules Hub/src/content/module-2/chapter3.ts`, starting at card
  `c3-card-1` (eyebrow: `"Bab 3 · Lag Metric"`) — the result number that's
  already happened, the rearview mirror.
- **"Lead Metric"** is formally introduced in
  `Modules Hub/src/content/module-2/chapter4.ts`, starting at card
  `c4-card-1` (eyebrow: `"Bab 4 · Lead Metric"`) — the daily action that's
  predictive and controllable, the steering wheel.

Both terms then recur throughout Chapters 5, 6, 7, and 8 — in card bodies,
quiz question stems, worksheet field labels, eyebrows, and closing recaps.
Confirmed via grep (against the original standalone `Module 2/`, before the
consolidation copy was made — the wording is identical): `chapter3.ts`,
`chapter4.ts`, `chapter5.ts`, `chapter6.ts`, `chapter7.ts`, `chapter8.ts`
all reference "Lead" and/or "Lag" repeatedly. Chapters 1 and 2 don't use
these exact labels (they set up the underlying idea informally first —
chapter3 card `c3-card-2` even says "Di Bab 2 Anda sudah kenal Lag Metric",
referring back to that informal setup).

## 2. What Bro Rono wants

He finds "Lead Metric" / "Lag Metric" harder to say/remember than a plain
Indonesian nickname, and wants:

- **"Lead Metric" → "KPI Usaha"** (the effort-side KPI — what you do)
- **"Lag Metric" → "KPI Hasil"** (the results-side KPI — what happens because of it)

His suggested framing, to adapt (not quote robotically) at each term's first
introduction: *"Lead measure, atau lebih mudahnya kita sebut sebagai KPI
Usaha. Dan Lag Measure, yang lebih mudahnya kita sebut sebagai KPI Hasil."*

This same swap was already applied to the funnel app's own Q2
(`Effortless Leader Funnel/src/data/diagnosticQuestions.ts`) — this brief
brings Module 2's actual teaching content in line with that.

## 3. Task

Work inside `Modules Hub/src/content/module-2/` only. Do not touch
`Module 2/` (the old standalone app) or any other module's content folder.

1. **At `c3-card-1`/`c3-card-2` in `chapter3.ts`** (wherever "Lag Metric" is
   first formally named), add a sentence in Module 2's existing casual
   Bahasa Indonesia voice that introduces "KPI Hasil" as the easier nickname
   for "Lag Metric" — adapt Bro Rono's framing above, don't paste it verbatim
   if it doesn't flow naturally with the surrounding copy.
2. **At `c4-card-1` in `chapter4.ts`**, do the same for "Lead Metric" → "KPI
   Usaha".
3. **After each term is introduced with its nickname, "KPI Usaha" / "KPI
   Hasil" becomes the PRIMARY term used going forward** — read through
   `chapter3.ts` through `chapter8.ts` with Grep/Read and replace body copy,
   quiz question stems, worksheet field *labels* (not field *ids*, see
   guardrail below), eyebrows, titles, and closing recaps accordingly. Keep
   an occasional parenthetical like `KPI Usaha (Lead Metric)` where it reads
   naturally the first time a chapter reintroduces the concept, so a reader
   who's seen "Lead/Lag Metric" elsewhere isn't lost — but don't keep both
   terms fighting for space throughout; the nickname should dominate.
4. Chapter eyebrows like `"Bab 3 · Lag Metric"` / `"Bab 4 · Lead Metric"`
   should become their KPI Hasil / KPI Usaha equivalents.
5. Re-flow surrounding sentence grammar where a straight find-replace would
   read awkwardly (e.g. "Lag Metric yang benar-benar bukti" needs different
   word order than a mechanical swap would produce) — use judgment, this is
   a copy edit, not a mechanical substitution.
6. Sweep `MODULE_2_SYLLABUS.md` at the repo root too, if it references these
   terms, for consistency with the planning doc.

## 4. Guardrail — do not touch identifiers, only human-facing copy

`chapter8.ts` has a report card that reads specific `cardId`/`fieldId`
values out of Chapters 1–7's real source files (this is the same pattern
documented for other modules — see `MODULE_8_CHAPTER_8_REBUILD_PROMPT.md`
section 5 for how seriously this is taken elsewhere in the repo). Concretely,
`chapter3.ts` card `c3-card-13` has field `id: 'lag-metric'` and `id:
'lag-time'` — **do not rename these `id` values**, only the human-reader
`label`/`title`/`body`/`prompt` strings around them. Same rule for every
other card `id` and field `id` across all six chapter files: identifiers
stay exactly as-is, only copy changes. If you're not sure whether a string
is an identifier or display copy, check whether it's a TypeScript object key
(`id:`, not `title:`/`body:`/`label:`/`prompt:`) — identifiers are camelCase
or kebab-case keys, display copy is always a string value.

Also do not touch anything outside `src/content/module-2/` in `Modules
Hub/` — no shell/routing files, no other module's content, nothing in
`src/data/modules.ts` or `src/access/moduleAccess.ts`. This brief is a
content-only copy edit scoped to one module's chapters.

## 5. Definition of done

- [ ] "KPI Hasil" introduced with its adapted framing sentence at the point
      "Lag Metric" is first named in `Modules Hub/src/content/module-2/chapter3.ts`
- [ ] "KPI Usaha" introduced with its adapted framing sentence at the point
      "Lead Metric" is first named in `Modules Hub/src/content/module-2/chapter4.ts`
- [ ] "KPI Usaha" / "KPI Hasil" are the dominant terms used in Chapters 3–8's
      body copy, quiz stems, worksheet labels, eyebrows, and recaps from that
      point forward, with only occasional parenthetical references to the
      English terms
- [ ] No card `id` or field `id` values changed anywhere
- [ ] `MODULE_2_SYLLABUS.md` swept for consistency if it uses these terms
- [ ] Chapters 1–2 untouched (they don't use these labels)
- [ ] Nothing outside `Modules Hub/src/content/module-2/` touched (no other
      module's content, no shell/routing/registry files)
- [ ] Old standalone `Module 2/` folder untouched
- [ ] Runs via `npm run build` with no errors inside `Modules Hub/`
