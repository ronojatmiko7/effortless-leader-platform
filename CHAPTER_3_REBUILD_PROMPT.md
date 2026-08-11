# Build Brief: Module 1 — Chapter 3 ("Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

Module 1 is being rebuilt from one flat 15-card deck into **8 chapters** (one per session of a 2-day / 8-session in-class syllabus), each with its own 10–20 card deck. Chapters 1 and 2 already exist (`Module 1/src/content/chapter1.ts`, `chapter2.ts`) — read both before writing anything, for voice and for the `ReflectionCardData` type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

This is the first of three back-to-back chapters (3, 4, 5) that each audit one layer of the map introduced in Chapter 2 — Output, then Process, then Input, in that order.

**This prompt covers Chapter 3 only.** Chapters 4–8 are separate, later prompts. Do not build them now.

## 2. The 8-chapter syllabus (for context — Chapter 3 is bolded)

1. Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting — done
2. Peta Audit Operasional — 3 Lapisan yang Harus Dicek — done
3. **Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar** ← this chapter
4. Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja
5. Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia
6. Teknik Mengumpulkan Data Audit yang Objektif
7. Menilai & Memprioritaskan Temuan
8. Menyusun Rencana Aksi & Ritme Audit Berkelanjutan

## 3. Chapter 3 objective

The reader now has the map. This chapter is the first real audit pass — on the Output layer specifically: the numbers that show what the business actually produced (sales, quality, profit, retention), as opposed to Process or Input which come in Chapters 4–5.

`module1.ts` cards 4–6 already cover a thin slice of this (Output intro, cascading targets, a cascading quiz) — reusable as reference for tone and as a seed, but they don't cover the two things that matter most for an actual audit: telling a real metric from a vanity metric, and benchmarking. Both are new.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- **Open by calling back to the reader's own Chapter 2 reflection** (the symptom they named). Frame this chapter as: now let's find the actual number that shows that symptom.
- **Vanity metrics vs. real metrics** — the core new teaching point. A vanity metric looks good to report but doesn't tell you what to do next (e.g. total omzet without margin, follower count, jumlah leads masuk tanpa conversion rate). A real metric is actionable — it moves when the business genuinely improves and points at a specific fix (e.g. gross margin per lini produk, retensi pelanggan, on-time delivery rate). Use at least 2 concrete SME examples per side.
- **How to tell the difference** — a simple test the reader can reuse ("kalau angka ini naik, apakah Anda tahu persis apa yang harus dilakukan besok? Kalau tidak, itu vanity metric").
- **Cascading targets** (expand from `module1.ts` cards 5–6) — a company-level target means nothing if it isn't broken down to what each team/person owns daily.
- **Benchmarking** — internal (bandingkan angka sekarang vs periode lalu, cabang vs cabang, tim vs tim) and external (bandingkan ke rata-rata industri/kompetitor, dengan catatan: jangan asal niru angka orang tanpa tahu konteksnya). New content, not in the old version at all.
- **Practice exercise**: the reader lists the 3 metrics they currently track most closely, then self-audits each one against the vanity/real test above.
- Close with a preview to Chapter 4: "Output Anda sudah dipetakan. Sekarang kita masuk ke mesinnya — Proses."

## 4. Workbook capture for this chapter

Add **one reflection card** (reuse the existing `reflection` card type): the reader lists their current top 3 metrics (short text inputs, one per metric). Don't build a classification/scoring mechanism yet — this chapter is about building the habit of naming your metrics and asking the vanity-vs-real question themselves, not about a scored audit. The scoring/prioritization logic comes later, in Chapter 7.

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts`, `chapter2.ts`, and `module1.ts`'s register exactly — read all three before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The vanity-vs-real distinction should land through a classification exercise (e.g. `sort-list` or `multiple-choice` sorting a handful of example metrics into vanity/real), not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 1/src/content/chapter3.ts` exporting `chapter3Cards: Card[]`. Leave `chapter1.ts`, `chapter2.ts`, and `module1.ts` in place — this prompt is content only, not the chapter-navigation restructure.

## 6. Out of scope for this prompt

- Chapters 4–8 content
- The final PDF/report export/compilation (Chapter 8's job)
- Scoring or prioritizing the reader's metrics (Chapter 7's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)

## 7. Definition of done

- [ ] `Module 1/src/content/chapter3.ts` has 10–20 cards covering vanity-vs-real metrics, cascading targets, and benchmarking, including exactly one reflection card
- [ ] At least one classification exercise (vanity vs. real) with concrete example metrics, not just an explanation
- [ ] Opens with a callback to the reader's Chapter 2 reflection
- [ ] Voice matches `chapter1.ts` / `chapter2.ts` / `module1.ts` — read all three before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / `chapter2.ts` / `module1.ts` / current app behavior untouched
