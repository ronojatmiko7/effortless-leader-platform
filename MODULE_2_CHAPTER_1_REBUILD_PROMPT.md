# Build Brief: Module 2 — App Scaffold + Chapter 1 ("Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is the reference implementation for this repo's micro-learning products: a React card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. It's fully built out: 8 chapters (`src/content/chapter1.ts`–`chapter8.ts`), a home screen with sequential chapter unlock (`src/components/ModuleHome.tsx`), a deck renderer (`src/components/DeckViewer.tsx`), and two `localStorage`-backed React contexts — `src/workbook/WorkbookContext.tsx` (persists reader answers from `reflection`/`finding-review` cards) and `src/progress/ProgressContext.tsx` (persists chapter completion). Card types live in `src/types/card.ts`.

Module 2 covers Service 2: KPI Architecture & Strategic Cascading — teaching SME owners to stop tracking vanity numbers and build a real KPI system: lag vs. lead metrics, cascading targets from the company goal down to daily individual action, an objective monitoring rhythm, and diagnosing red KPIs without a blame hunt.

There is no `Module 2/` app yet. `Module 1/src/content/module2.ts` is an old flat 13-card deck (still reachable via a legacy `#module-2` href in `Module 1/src/App.tsx`) — useful only as raw topic material to mine ideas from. Do not reuse its card-by-card structure, and do not modify that file or anything else inside `Module 1/`.

**Module 2 is its own sibling app**, `Module 2/`, mirroring `Module 1/`'s stack, conventions, and voice — not a set of chapters bolted onto Module 1's app (this repo's precedent for standalone products is `Effortless Business Funnel/`, built the same way as a sibling to `Module 1/`). Read `Module 1/package.json`, `Module 1/vite.config.ts`, `Module 1/tsconfig.json`, `Module 1/tsconfig.app.json`, `Module 1/tsconfig.node.json`, `Module 1/src/index.css`, and `Module 1/.oxlintrc.json` before scaffolding — match them as closely as possible (same dependency versions, same Tailwind v4 setup).

Full 8-chapter syllabus reference: `MODULE_2_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 1 is bolded)

1. **Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics)** ← this chapter
2. Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework)
3. Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar
4. Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini
5. Merancang Cascading KPI per Divisi, Tim, dan Individu
6. Membangun Dashboard & Ritme Pemantauan yang Objektif
7. Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam
8. Menyusun Rencana Aksi KPI & Ritme Berkelanjutan

**This prompt covers scaffolding `Module 2/` plus Chapter 1 only.** Chapters 2–8 are separate, later prompts. Do not build them now.

## 3. Scaffold `Module 2/` (first-time setup)

- Create a new top-level folder `Module 2/`, sibling to `Module 1/`, same stack: Vite + React + TS + Tailwind v4 + framer-motion + lucide-react, same dependency versions as `Module 1/package.json`.
- Port the shared, reusable primitives from `Module 1/src/` over verbatim (adapt import paths only — don't change logic or rename things gratuitously):
  - `types/card.ts` — all 9 card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `worksheet`, `reflection`, `finding-review`, `report`)
  - `components/cards/*` — every card renderer (`InfoCard`, `YesNoCard`, `MultipleChoiceCard`, `FillInBlankCard`, `SortCard`, `WorksheetCard`, `ReflectionCard`, `FindingReviewCard`, `ReportCard`, `OptionButton`, `FeedbackBanner`)
  - `components/DeckViewer.tsx` and `components/ModuleHome.tsx`
  - `workbook/WorkbookContext.tsx` — change its `localStorage` key to a Module-2-specific one (e.g. `prediagnosis-workbook-module-2`) so it can't collide with Module 1's saved answers if both apps ever run on the same origin
  - `progress/ProgressContext.tsx` — same idea, a distinct storage key (e.g. `prediagnosis-progress-module-2`)
  - `App.tsx` — same home/chapter-switching shell pattern, but drop the `legacyModules` dict entirely (Module 2 has no legacy flat deck to preserve)
- Do not port `content/module1.ts`, `content/module2.ts`, or any Module 1 chapter content.
- Create `Module 2/src/content/chapters.ts` in the same shape as `Module 1/src/content/chapters.ts` (an array of `{ id, title, description, cards }`), registering only Chapter 1 for now — later prompts append Chapters 2–8 to this same array.
- Verify `npm run dev` runs clean before moving on to content.

## 4. Chapter 1 objective

By the end of this chapter, the reader should feel a little exposed — like a number they've been proud of might actually be meaningless — and want to know what a real KPI looks like, not just nod along that "data is good."

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- The vanity metric trap: numbers that feel good but don't predict survival. Use `module2.ts` card 1 ("omzet naik tapi kas kosong") as a seed idea, then go further with 2–3 concrete, varied SME examples (e.g. followers/likes yang ramai tapi penjualan datar, toko yang "rame pengunjung" tapi konversi rendah, tim yang "sibuk lembur" tapi output stagnan).
- The real cost of running on vanity metrics — this is Module 1 Chapter 1's "managing by gut instinct" trap wearing a disguise: it looks like data-driven management, but the number being watched doesn't actually predict anything real.
- A practical test for telling a real KPI from a vanity number: does it change what someone does tomorrow morning? (build on `module2.ts` card 2's idea — do your staff know exactly what number defines success today, or just "kerja keras")
- A contrast moment: a business tracking a handful of the right numbers vs. one drowning in dashboards full of numbers that don't move any decision — busy tracking ≠ well measured.
- A personal reflection where the reader names their own vanity metric (see section 5).
- Close with a clear turn toward Chapter 2: "Sekarang Anda tahu jebakannya. Bab berikutnya kasih Anda peta lengkap untuk bangun KPI yang benar, dari target besar perusahaan sampai ke aksi harian di lantai kerja."

## 5. New: capture real input

One `reflection` card — the first entry in Module 2's own workbook. Short free-text prompt, e.g. "Tulis 1 angka yang selama ini Anda banggakan di bisnis Anda — padahal Anda belum yakin itu benar-benar ukuran sehat atau tidaknya bisnis" (1–2 short text inputs, not a full form). Use the `reflection` card type ported in section 3 — no new card types are needed for this chapter.

## 6. Voice & format

- Match `Module 1/src/content/chapter1.ts` and `module1.ts`'s register exactly — read both before writing anything (Module 2 has no content of its own yet to reference). Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse the ported card types freely (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10–20 cards total for this chapter.
- Create `Module 2/src/content/chapter1.ts` exporting `chapter1Cards: Card[]`, and register it in `Module 2/src/content/chapters.ts`.

## 7. Out of scope for this prompt

- Chapters 2–8 content
- The final PDF/report export/compilation (Chapter 8's job, same as Module 1's pattern)
- Any backend/save-to-server logic (frontend-only, per the original funnel brief)
- Wiring Module 2 into the main funnel app's offer/recommendation screen (separate task)

## 8. Definition of done

- [ ] `Module 2/` exists as an independent Vite + TS + Tailwind app; `npm run dev` runs clean
- [ ] Shared primitives (card types, card components, `DeckViewer`, `ModuleHome`, `WorkbookContext`, `ProgressContext`) ported with Module-2-specific `localStorage` keys
- [ ] `Module 2/src/content/chapter1.ts` has 10–20 cards covering section 4, including exactly one `reflection` card
- [ ] `Module 2/src/content/chapters.ts` registers Chapter 1
- [ ] Voice matches Module 1's — read `chapter1.ts`/`module1.ts` for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] `Module 1/` left completely untouched
