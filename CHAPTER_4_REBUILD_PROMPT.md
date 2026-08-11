# Build Brief: Module 1 — Chapter 4 ("Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

Module 1 is being rebuilt from one flat 15-card deck into **8 chapters** (one per session of a 2-day / 8-session in-class syllabus), each with its own 10–20 card deck. Chapters 1–3 already exist (`Module 1/src/content/chapter1.ts`, `chapter2.ts`, `chapter3.ts`) — read all three before writing anything, for voice and for the `ReflectionCardData` type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

This is the second of three back-to-back chapters (3, 4, 5) that each audit one layer of the map from Chapter 2 — Output (done), now Process, then Input.

**This prompt covers Chapter 4 only.** Chapters 5–8 are separate, later prompts. Do not build them now.

## 2. The 8-chapter syllabus (for context — Chapter 4 is bolded)

1. Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting — done
2. Peta Audit Operasional — 3 Lapisan yang Harus Dicek — done
3. Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar — done
4. **Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja** ← this chapter
5. Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia
6. Teknik Mengumpulkan Data Audit yang Objektif
7. Menilai & Memprioritaskan Temuan
8. Menyusun Rencana Aksi & Ritme Audit Berkelanjutan

## 3. Chapter 4 objective

Chapter 3 audited what the business produces (Output). This chapter goes one level deeper into the machine that produces it — Process: the actual workflow and SOPs, not what's written on paper but what really happens day to day.

`module1.ts` cards 7–9 already cover a thin slice of this (why relying on tenured employees' memory is fragile, a "check the SOP first" scenario, and a sort-list ordering SOP documents from general to detailed) — reusable as reference for tone and as a seed, especially card 9's document-hierarchy exercise. What's missing, and what makes this an actual audit chapter rather than an SOP pep talk, is teaching two concrete skills: mapping a workflow as it actually runs, and spotting where it leaks.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- **Open by calling back to Chapter 3** — Output is mapped, now audit the machine behind it.
- **Why tenured-employee memory is fragile** (expand from `module1.ts` card 7) — a process that only exists in one person's head isn't a process, it's a single point of failure.
- **The SOP document hierarchy** (expand from `module1.ts` card 9): kebijakan umum → peta alur antar tim → langkah kerja tim → instruksi kerja detail. Reframe this explicitly as an audit checklist — for any given process, which of these 4 levels actually exist in writing, and which only exist as tribal knowledge?
- **"As-is" process mapping** — new, core teaching point. Teach a simple, no-software method: list every step from trigger to completion, in the order it actually happens (not the order the SOP says it should happen — audit the reality, not the document). Emphasize marking every handoff between people/teams, since that's where things usually go wrong.
- **Bottleneck-detection heuristics** — new, core teaching point. Give the reader concrete signals to look for, not just "find the slow part": steps where work visibly piles up and waits, steps that get redone often (rework), handoffs between people or departments (highest-risk points), and steps that depend entirely on one specific person. Use at least 2 concrete SME examples (e.g. proses terima pesanan sampai kirim, proses onboarding karyawan baru).
- **Scenario exercise** reusing the spirit of `module1.ts` card 8 (react to a mistake by checking the process, not blaming the person) — but add a second scenario specifically testing the bottleneck-spotting skill above, not just the "check the SOP" reflex.
- Close with a preview to Chapter 5: "Proses Anda sudah dipetakan dan titik bocornya sudah ditandai. Sekarang kita cek bahan bakunya — Input."

## 4. Workbook capture for this chapter

Add **one reflection card** (reuse the existing `reflection` card type) as the hands-on workshop moment — this chapter's version of "peserta gambar 1 alur kerja mereka sendiri":

- First input: the reader writes out one real workflow in their business step by step, from trigger to completion (e.g. "Tulis alur kerja [nama proses pilihan Anda] langkah demi langkah, dari awal sampai selesai").
- Second input: which step they suspect is the biggest bottleneck, in their own words.

Don't build a formal scoring/severity mechanism — that's Chapter 7's job. This chapter is about the reader naming a real process and a real suspected leak point, same pattern as Chapter 3's metric self-audit.

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts`, `chapter2.ts`, `chapter3.ts`, and `module1.ts`'s register exactly — read all four before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The SOP-hierarchy content should reuse a `sort-list` exercise in the spirit of `module1.ts` card 9; the bottleneck-detection content should land through at least one scenario-based `multiple-choice`, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 1/src/content/chapter4.ts` exporting `chapter4Cards: Card[]`. Leave `chapter1.ts`, `chapter2.ts`, `chapter3.ts`, and `module1.ts` in place — this prompt is content only, not the chapter-navigation restructure.

## 6. Out of scope for this prompt

- Chapters 5–8 content
- The final PDF/report export/compilation (Chapter 8's job)
- Scoring or prioritizing the reader's identified bottleneck (Chapter 7's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)

## 7. Definition of done

- [ ] `Module 1/src/content/chapter4.ts` has 10–20 cards covering the SOP hierarchy, as-is process mapping, and bottleneck-detection heuristics, including exactly one reflection card with both inputs described above
- [ ] At least one scenario-based exercise testing bottleneck-spotting specifically, not just "check the SOP"
- [ ] Opens with a callback to Chapter 3
- [ ] Voice matches `chapter1.ts` / `chapter2.ts` / `chapter3.ts` / `module1.ts` — read all four before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / `chapter2.ts` / `chapter3.ts` / `module1.ts` / current app behavior untouched
