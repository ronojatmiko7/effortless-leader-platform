# Build Brief: Module 1 — Chapter 2 ("Peta Audit Operasional — 3 Lapisan yang Harus Dicek")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

Module 1 is being rebuilt from one flat 15-card deck into **8 chapters** (one per session of a 2-day / 8-session in-class syllabus), each with its own 10–20 card deck. Chapter 1 (`Module 1/src/content/chapter1.ts`) already exists — read it before writing anything, both for voice and to see the `ReflectionCardData` type (`Module 1/src/types/card.ts`) and the `useWorkbookStore` persistence pattern it introduced. Reuse both; don't recreate them.

**This prompt covers Chapter 2 only.** Chapters 3–8 are separate, later prompts. Do not build them now.

## 2. The 8-chapter syllabus (for context — Chapter 2 is bolded)

1. Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting — done
2. **Peta Audit Operasional — 3 Lapisan yang Harus Dicek** ← this chapter
3. Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar
4. Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja
5. Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia
6. Teknik Mengumpulkan Data Audit yang Objektif
7. Menilai & Memprioritaskan Temuan
8. Menyusun Rencana Aksi & Ritme Audit Berkelanjutan

## 3. Chapter 2 objective

Chapter 1 made the reader feel the cost of managing by gut instinct. Chapter 2 gives them the actual map they'll audit against for the rest of the module — and, critically, teaches that the three layers aren't independent categories, they're a causal chain. A problem that shows up in one layer usually has its real root cause in another. This causal-chain idea is the one part of the old framework (`module1.ts` card 3, "Bisnis Itu Ibarat Pabrik Kue") that's missing entirely — the old version stopped at "here are 3 boxes."

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Introduce the 3 layers: **Output** (hasil — apa yang keluar dari bisnis: penjualan, kualitas, profit), **Proses** (sistem kerja — bagaimana hasil itu dibuat: SOP, alur kerja), **Input** (sumber daya — bahan baku dari sistem itu: orang, alat, material, modal). A physical-production analogy is fine as an anchor if it fits the voice, but don't stop there.
- The core teaching point: **Output problems are usually symptoms, not root causes.** Walk through at least 2 concrete SME scenarios where a visible Output problem traces back through Process to Input, e.g.:
  - Gejala di Output: penjualan turun → bisa jadi akarnya di Proses (SOP sales tidak diikuti / alur follow-up putus) atau di Input (sales rep tidak terlatih, tidak ada CRM)
  - Gejala di Output: komplain kualitas produk naik → bisa jadi akarnya di Proses (langkah QC dilewati) atau di Input (bahan baku turun kualitas, mesin tidak dirawat)
  - A third scenario of your own choosing, same pattern
- An exercise where the reader is given a symptom and has to guess which layer the real root cause is in — then the reveal is that they can't actually know without checking all three. This loops back to Chapter 1's point (don't guess) and sets up why Chapters 3–5 audit each layer separately and in order.
- Close with a clear preview: "sekarang Anda punya peta. Tiga bab berikutnya, kita bongkar satu-satu — mulai dari Output."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type: have the reader name one current problem/symptom in their own business (visible in Output — e.g. sales, quality, a specific complaint) without yet guessing the cause. This becomes their running example for Chapters 3–5, and later feeds Chapter 8's compiled report. Keep it to 1-2 short text inputs, same pattern as Chapter 1's reflection card.

Do not build any new card types or persistence logic in this prompt — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts` and `module1.ts`'s register exactly — read both before writing. Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — mix them, don't just chain `info` cards back to back. The root-cause-chain teaching point in particular should land through a scenario + quiz pairing (e.g. `info` case setup → `multiple-choice` "layer mana akarnya?" → `info` reveal), not a lecture card.
- Target 10–20 cards total for this chapter.
- Create `Module 1/src/content/chapter2.ts` exporting `chapter2Cards: Card[]`. Leave `chapter1.ts` and `module1.ts` in place — this prompt is content only, not the chapter-navigation restructure.

## 6. Out of scope for this prompt

- Chapters 3–8 content
- The final PDF/report export/compilation (Chapter 8's job)
- Any new card types or changes to `useWorkbookStore` (Chapter 1 already built what's needed)
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)

## 7. Definition of done

- [ ] `Module 1/src/content/chapter2.ts` has 10–20 cards covering the 3-layer map and the root-cause-chain teaching point, including exactly one reflection card
- [ ] At least 2 concrete symptom-to-root-cause scenarios are worked through, not just asserted
- [ ] Voice matches `chapter1.ts` / `module1.ts` — read both for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / `module1.ts` / current app behavior untouched
