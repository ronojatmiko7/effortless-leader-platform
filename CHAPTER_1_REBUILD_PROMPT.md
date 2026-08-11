# Build Brief: Module 1 — Chapter 1 Rebuild ("Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. All existing cards live in `Module 1/src/content/module1.ts` (15 cards total) and render through `Module 1/src/components/` using the types in `Module 1/src/types/card.ts`.

Module 1 covers Service 1: Enterprise Operational Audit — teaching SME business owners to audit their own business instead of running it on gut instinct. We're restructuring Module 1 from one flat 15-card deck into **8 chapters**, one per session of a 2-day / 8-session in-class training syllabus (reference list below). Each chapter gets its own 10–20 card deck. The current 15 cards, taken together, are only about as deep as 2 chapters should be — this is a rebuild, not a light edit.

**This prompt covers Chapter 1 only.** Chapters 2–8 are separate, later prompts. Do not build them now.

## 2. The 8-chapter syllabus (for context — Chapter 1 is bolded)

1. **Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting** ← this chapter
2. Peta Audit Operasional — 3 Lapisan yang Harus Dicek
3. Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar
4. Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja
5. Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia
6. Teknik Mengumpulkan Data Audit yang Objektif
7. Menilai & Memprioritaskan Temuan
8. Menyusun Rencana Aksi & Ritme Audit Berkelanjutan

## 3. Chapter 1 objective

By the end of this chapter, the reader should feel the real cost of managing by gut instinct / firefighting, and want an audit — not just intellectually agree that data is nice to have.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- The hidden cost of "manage by symptom" — real consequences of reacting to complaints/fires instead of data (money left on the table, repeated mistakes, decisions that don't stick)
- Reactive vs. preventive management — contrast a firefighting week vs. an audit-driven week
- When instinct is actually fine to use, and when it isn't — this nuance doesn't exist in the current version and should be added
- A personal reflection moment where the reader identifies their own gut-call decisions (see section 4)
- Close with a clear turn toward Chapter 2: "now that you feel the cost, here's the map we'll audit against"

## 4. New: capture real input, not just static downloads

We're moving away from the old pattern (card 14 in `module1.ts`, a link to download a blank PDF worksheet). Exercises should happen **inside the app** — the reader answers using their own business's real situation, and that answer is retained in app state so a later chapter (Chapter 8) can compile everything into one downloadable audit report at the end of the module.

For this chapter specifically, add **one reflection card**: a short free-text prompt, e.g. "Tulis 1 keputusan besar yang belakangan ini Anda ambil pakai insting, bukan data" (2-3 short text inputs, not a full form). This is the first entry in what becomes the reader's own audit workbook.

Implementation:

- Add a new card type to `Module 1/src/types/card.ts`: `ReflectionCardData` (type: `'reflection'`) — question/prompt text, one or more short text-input fields (label + placeholder), no right/wrong answer, no scoring.
- Persist answers in a simple shared store (React context + `localStorage`, keyed by card id) so the value survives a refresh and is readable by later chapters. Name it something reusable, e.g. `useWorkbookStore` — chapters 2–8 will write to the same store for their own exercises.
- Do **not** build the PDF/report export in this prompt — that's Chapter 8's job. Just make sure the data capture mechanism is generic enough that Chapter 8 can read every stored answer later.
- Leave the existing `worksheet` card type and its component alone — don't delete it. Other chapters (or the closing chapter) may still use it for a real downloadable asset (e.g. a blank workflow-map template in Chapter 4). Just don't use it for this chapter's exercise.

## 5. Voice & format

- Match `module1.ts`'s existing register exactly — read it before writing anything. Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`) freely — mix them, don't just chain `info` cards back to back.
- Target 10–20 cards total for this chapter.
- Create `Module 1/src/content/chapter1.ts` exporting `chapter1Cards: Card[]`. Leave `module1.ts` in place for now — this prompt is content plus the new card type only, not the chapter-navigation restructure.

## 6. Out of scope for this prompt

- Chapters 2–8 content
- The final PDF/report export/compilation
- Restructuring `App.tsx` navigation to move between chapters (a single-chapter deck is fine for now)
- Any backend/save-to-server logic (still frontend-only, per the original funnel brief)

## 7. Definition of done

- [ ] `Module 1/src/types/card.ts` has a new `reflection` card type
- [ ] A minimal `useWorkbookStore` (or equivalent) persists reflection answers to `localStorage`
- [ ] `Module 1/src/content/chapter1.ts` has 10–20 cards covering section 3's content, including exactly one reflection card
- [ ] Voice matches `module1.ts` — read it for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `module1.ts` / current app behavior untouched
