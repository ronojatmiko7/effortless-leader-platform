# Build Brief: Module 3 — App Scaffold + Chapter 1 ("Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/` is the most recent sibling app in this repo and the direct precedent for how to scaffold a new module: a React card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. It's fully built out: 8 chapters (`src/content/chapter1.ts`–`chapter8.ts`), a home screen with sequential chapter unlock (`src/components/ModuleHome.tsx`), a deck renderer (`src/components/DeckViewer.tsx`), and two `localStorage`-backed React contexts — `src/workbook/WorkbookContext.tsx` (persists reader answers from `reflection`/`finding-review` cards) and `src/progress/ProgressContext.tsx` (persists chapter completion). Card types live in `src/types/card.ts`. `Module 2/` was itself scaffolded from `Module 1/` the same way this prompt asks you to scaffold `Module 3/` from `Module 2/` — see `MODULE_2_CHAPTER_1_REBUILD_PROMPT.md` at the repo root for that precedent if anything here is ambiguous.

Module 3 covers Service 3: Executive Business Review (EBR) Governance — teaching SME owners to stop running their business on ad hoc, reactive "meetings only when something's on fire," and instead install a structured, multi-tier cadence of business reviews (daily huddle through quarterly strategic review), do formal root cause analysis instead of guessing or assigning blame, and turn findings into tracked action so the whole system runs on its own.

There is no `Module 3/` app yet. **Module 3 is its own sibling app**, `Module 3/`, mirroring `Module 2/`'s stack, conventions, and voice — not a set of chapters bolted onto Module 1 or Module 2's app. Read `Module 2/package.json`, `Module 2/vite.config.ts`, `Module 2/tsconfig.json`, `Module 2/tsconfig.app.json`, `Module 2/tsconfig.node.json`, `Module 2/src/index.css`, and `Module 2/.oxlintrc.json` before scaffolding — match them as closely as possible (same dependency versions, same Tailwind v4 setup).

Full 8-chapter syllabus reference: `MODULE_3_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 1 is bolded)

1. **Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme** ← this chapter
2. Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan
3. Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu
4. Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis
5. Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan
6. Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi
7. Mengelola Eskalasi dan Akuntabilitas Lintas Level
8. Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap

**This prompt covers scaffolding `Module 3/` plus Chapter 1 only.** Chapters 2–8 are separate, later prompts. Do not build them now.

## 3. Scaffold `Module 3/` (first-time setup)

- Create a new top-level folder `Module 3/`, sibling to `Module 1/` and `Module 2/`, same stack: Vite + React + TS + Tailwind v4 + framer-motion + lucide-react, same dependency versions as `Module 2/package.json`.
- Port the shared, reusable primitives from `Module 2/src/` over verbatim (adapt import paths only — don't change logic or rename things gratuitously):
  - `types/card.ts` — all card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `worksheet`, `reflection`, `finding-review`, `report`)
  - `components/cards/*` — every card renderer (`InfoCard`, `YesNoCard`, `MultipleChoiceCard`, `FillInBlankCard`, `SortCard`, `WorksheetCard`, `ReflectionCard`, `FindingReviewCard`, `ReportCard`, `OptionButton`, `FeedbackBanner`)
  - `components/DeckViewer.tsx` and `components/ModuleHome.tsx`
  - `workbook/WorkbookContext.tsx` — change its `localStorage` key to a Module-3-specific one (e.g. `prediagnosis-workbook-module-3`) so it can't collide with Module 1's or Module 2's saved answers if all three apps ever run on the same origin
  - `progress/ProgressContext.tsx` — same idea, a distinct storage key (e.g. `prediagnosis-progress-module-3`)
  - `App.tsx` — same home/chapter-switching shell pattern
- Do not port `content/chapter1.ts`–`chapter8.ts` or any Module 1/Module 2 chapter content — Module 3 has none of its own yet.
- Create `Module 3/src/content/chapters.ts` in the same shape as `Module 2/src/content/chapters.ts` (an array of `{ id, title, description, cards }`), registering only Chapter 1 for now — later prompts append Chapters 2–8 to this same array.
- Verify `npm run dev` runs clean before moving on to content.

## 4. Chapter 1 objective

By the end of this chapter, the reader should feel the real cost of running their business without a structured review rhythm — recognize that they've been managing by surprise, not by system — and want an actual governance rhythm, not just nod along that "reviewing the numbers regularly" sounds sensible.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- The firefighting pattern: the owner only calls a meeting when something's already broken — a big client complaint, cash running out, a key employee quitting on the spot. Give 2–3 concrete, varied SME examples (e.g. rapat dadakan jam 9 malam gara-gara komplain klien besar; ngumpulin tim cuma pas omzet tiba-tiba anjlok; baru ngecek laporan keuangan pas tutup tahun dan kaget).
- The quiet-business contrast: a business with a real review rhythm rarely gets blindsided — problems get caught small, on schedule, before they become fires. Reactive management isn't just tiring, it's expensive (the same mistake repeats because nobody ever traced it to its root).
- Connect to Module 2 conditionally, not assumed (mirror how `module2chapter1`'s Module 1 callback was fixed to be self-contained): a business can have the right KPIs cascaded perfectly (Module 2) and still fail here if nobody looks at them on a fixed schedule — a dashboard nobody opens is just decoration.
- A sharp distinction: having meetings is not the same as having a review rhythm. Frequent meetings can still be pure status theater (everyone reports "aman-aman aja") with no structured review or root-cause digging — introduce the term EBR (Executive Business Review) as what's missing.
- A gut-check test: does this business find out it has a problem before a customer, an employee, or the bank balance tells it? If the answer is "no, kita selalu telat tahu," that's the gap this module fixes.
- A personal reflection where the reader names a real problem that blindsided them, with hindsight that the warning signs were probably there (see section 5).
- Close with a clear turn toward Chapter 2: "Sekarang Anda merasakan mahalnya jalan tanpa ritme. Bab berikutnya kasih Anda peta lengkap ritme tinjauan — dari huddle harian sampai tinjauan triwulanan — biar Anda tahu persis rapat apa yang perlu ada, dan kapan."

## 5. New: capture real input

One `reflection` card — the first entry in Module 3's own workbook. Short free-text prompt, e.g. "Tulis satu masalah besar yang belakangan bikin Anda kaget — padahal kalau dipikir-pikir lagi, tanda-tandanya sebenarnya sudah ada sebelum meledak" (1–2 short text inputs, not a full form). Use the `reflection` card type ported in section 3 — no new card types are needed for this chapter.

## 6. Voice & format

- Match `Module 2/src/content/chapter1.ts` and `Module 1/src/content/module1.ts`'s register exactly — read both before writing anything (Module 3 has no content of its own yet to reference). Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse the ported card types freely (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10–20 cards total for this chapter.
- Create `Module 3/src/content/chapter1.ts` exporting `chapter1Cards: Card[]`, and register it in `Module 3/src/content/chapters.ts`.

## 7. Out of scope for this prompt

- Chapters 2–8 content
- The final PDF/report export/compilation (Chapter 8's job, same as Module 1 and Module 2's pattern)
- Any backend/save-to-server logic (frontend-only, per the original funnel brief)
- Wiring Module 3 into the main funnel app's offer/recommendation screen (separate task)

## 8. Definition of done

- [ ] `Module 3/` exists as an independent Vite + TS + Tailwind app; `npm run dev` runs clean
- [ ] Shared primitives (card types, card components, `DeckViewer`, `ModuleHome`, `WorkbookContext`, `ProgressContext`) ported with Module-3-specific `localStorage` keys
- [ ] `Module 3/src/content/chapter1.ts` has 10–20 cards covering section 4, including exactly one `reflection` card
- [ ] `Module 3/src/content/chapters.ts` registers Chapter 1
- [ ] Voice matches Module 1/Module 2's — read `Module 2/src/content/chapter1.ts` for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] `Module 1/` and `Module 2/` left completely untouched
