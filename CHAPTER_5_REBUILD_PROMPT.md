# Build Brief: Module 1 — Chapter 5 ("Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

Module 1 is being rebuilt from one flat 15-card deck into **8 chapters** (one per session of a 2-day / 8-session in-class syllabus), each with its own 10–20 card deck. Chapters 1–4 already exist (`Module 1/src/content/chapter1.ts` through `chapter4.ts`) — read all four before writing anything, for voice and for the `ReflectionCardData` type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

This is the third and last of three back-to-back chapters (3, 4, 5) that each audit one layer of the map from Chapter 2 — Output (done), Process (done), now Input. Chapter 6 then pivots from "what to audit" to "how to audit well" (data collection method), so this chapter should close out the 3-layer arc, not just add another layer and move on.

**This prompt covers Chapter 5 only.** Chapters 6–8 are separate, later prompts. Do not build them now.

## 2. The 8-chapter syllabus (for context — Chapter 5 is bolded)

1. Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting — done
2. Peta Audit Operasional — 3 Lapisan yang Harus Dicek — done
3. Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar — done
4. Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja — done
5. **Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia** ← this chapter
6. Teknik Mengumpulkan Data Audit yang Objektif
7. Menilai & Memprioritaskan Temuan
8. Menyusun Rencana Aksi & Ritme Audit Berkelanjutan

## 3. Chapter 5 objective

Chapter 4 mapped a process and named a suspected bottleneck. This chapter teaches the reader to trace that bottleneck back one more level — to the raw materials feeding the process: people, tools, and material/capital. Goal: the reader can assess whether their team, tools, and material are the actual root cause, instead of defaulting to blaming the person.

`module1.ts` cards 10–13 already cover this layer reasonably well (Input isn't just recruitment; garbage-in-garbage-out; an expensive-software-nobody-uses scenario; a recruitment-checklist question) — this is the strongest existing section of the old deck and should be used as real seed material, not just a tone reference. What's missing is turning each of these into an actual audit technique the reader can run themselves, not just a concept they nod along to.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- **Open by calling back to Chapter 4** — the reader named a suspected bottleneck; this chapter is where they check whether its root cause is in Input.
- **Input isn't just recruitment** (expand from `module1.ts` card 10) — three sub-areas to audit: manusia (kompetensi tim), alat (tools/mesin/software), material/modal (bahan baku, kualitas, kecukupan modal kerja).
- **Garbage in, garbage out** (expand from `module1.ts` card 11) — the best process in the world produces bad output if what feeds it is bad.
- **Auditing team competency** — new, core teaching point. A simple technique: compare the skills a role actually requires against the skills the person in it actually has, rather than judging attitude or effort. Give a concrete SME example of a competency gap that looks like a "bad attitude" problem but is really a training/hiring gap.
- **Auditing tool utilization** (expand from `module1.ts` card 12's software example) — new depth: buying a tool isn't the same as using it well. Teach the reader to check adoption (is the team actually using it day to day?) and fit (does it solve the real bottleneck, or just add another system to manage?).
- **Auditing material/capital quality** — new, core teaching point. Consistency of raw material or supplier quality, and whether working capital is actually sufficient for the process to run as designed — not just "do we have money," but "do we have enough of the right resource at the right time."
- **Recruitment as prevention** (expand from `module1.ts` card 13) — having a clear, non-negotiable skills checklist before hiring is how bad Input gets kept out in the first place, not just fixed after the fact.
- Close by explicitly wrapping the 3-layer arc: "Anda sudah memetakan ketiga lapisan — Output, Proses, Input. Tapi peta ini cuma berguna kalau datanya benar. Bab depan: cara mengumpulkan data audit yang objektif, bukan asumsi."

## 4. Workbook capture for this chapter

Add **one reflection card** (reuse the existing `reflection` card type) as this chapter's practice exercise — the syllabus calls this "audit 1 sumber daya bermasalah":

- First input: reader names one specific resource (a person's skillset, a specific tool, or a specific material/capital constraint) they suspect is the actual root cause behind the bottleneck they named in Chapter 4.
- Second input: why they suspect this resource specifically, in their own words.

This directly continues the causal chain the reader has been building since Chapter 2 (symptom → bottleneck → resource). Don't build a formal scoring/severity mechanism yet — that's Chapter 7's job.

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts` through `chapter4.ts` and `module1.ts`'s register exactly — read all five before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The competency-gap and tool-utilization content should each land through a scenario-based exercise (e.g. `multiple-choice` or `yes-no`), not just an explanation — `module1.ts` cards 12 and 13 are good models for this.
- Target 10–20 cards total for this chapter.
- Create `Module 1/src/content/chapter5.ts` exporting `chapter5Cards: Card[]`. Leave `chapter1.ts` through `chapter4.ts` and `module1.ts` in place — this prompt is content only, not the chapter-navigation restructure.

## 6. Out of scope for this prompt

- Chapters 6–8 content
- The final PDF/report export/compilation (Chapter 8's job)
- Scoring or prioritizing the reader's identified root-cause resource (Chapter 7's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)

## 7. Definition of done

- [ ] `Module 1/src/content/chapter5.ts` has 10–20 cards covering team-competency audit, tool-utilization audit, and material/capital audit, including exactly one reflection card with both inputs described above
- [ ] At least one scenario-based exercise for the competency-gap point and one for the tool-utilization point
- [ ] Opens with a callback to Chapter 4, closes by explicitly wrapping up the 3-layer arc and previewing Chapter 6
- [ ] Voice matches `chapter1.ts` through `chapter4.ts` / `module1.ts` — read all five before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` through `chapter4.ts` / `module1.ts` / current app behavior untouched
