# Build Brief: Module 1 — Chapter 7 ("Menilai & Memprioritaskan Temuan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

Module 1 is being rebuilt from one flat 15-card deck into **8 chapters** (one per session of a 2-day / 8-session in-class syllabus), each with its own 10–20 card deck. Chapters 1–6 already exist (`Module 1/src/content/chapter1.ts` through `chapter6.ts`) — read all six before writing anything, for voice and for the `ReflectionCardData` type / `useWorkbookStore` persistence pattern.

Like Chapter 6, **there is no seed content in `module1.ts` for this chapter** — this is new content built from the syllabus alone.

Every chapter since Chapter 2 has deliberately deferred scoring. The reader has been accumulating raw workbook entries: a symptom (Chapter 2), a suspected bottleneck (Chapter 4), a suspected root-cause resource (Chapter 5), and a verification plan (Chapter 6). **This is the chapter where all of that finally gets scored and prioritized.** It's the payoff chapter for everything captured so far, and it feeds directly into Chapter 8, which turns the prioritized list into an action plan and a downloadable report.

**This prompt covers Chapter 7 only.** Chapter 8 is a separate, later prompt. Do not build it now.

## 2. The 8-chapter syllabus (for context — Chapter 7 is bolded)

1. Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting — done
2. Peta Audit Operasional — 3 Lapisan yang Harus Dicek — done
3. Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar — done
4. Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja — done
5. Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia — done
6. Teknik Mengumpulkan Data Audit yang Objektif — done
7. **Menilai & Memprioritaskan Temuan** ← this chapter
8. Menyusun Rencana Aksi & Ritme Audit Berkelanjutan

## 3. Chapter 7 objective

A pile of undifferentiated findings is overwhelming and doesn't tell the reader what to fix first. This chapter teaches them to score findings consistently, trace surface symptoms to real root causes, and sort the result into what to do now versus what to defer.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by naming the problem**: they now have real findings (thanks to Chapter 6's method), but "a list of things that are wrong" isn't actionable on its own — it needs a system to turn into a priority.
- **Scoring rubric** — a consistent 1–4 severity scale per finding (1 = parah/tidak ada sama sekali, 4 = sudah optimal), with a **red-flag threshold at score ≤2**. Note for the builder: this deliberately mirrors the scoring language already used in the free diagnostic quiz (`organizational_prediagnostic_tool_id.html`'s 1–4 BARS scoring, red flag = score ≤2) — check that file briefly for the exact phrasing so the vocabulary feels consistent across the Effortless Leader ecosystem, not just internally consistent within this module.
- **Practice scoring** with 2–3 generic example findings (not the reader's own yet) before they touch their own data — same "practice on examples first" pattern used in Chapter 3 (vanity vs. real metrics) and Chapter 6 (spot the leading question).
- **5 Whys** — new core technique. Don't stop at the first plausible answer; ask "why" repeatedly until you hit something you can actually act on. Walk through one full worked example end to end using an SME scenario (e.g. penjualan turun → why → why → why → why → akar: sales rep tidak pernah dilatih pakai CRM untuk follow-up). Then give the reader a partially-worked scenario and have them supply the next "why" themselves.
- **Impact vs. effort matrix** — new core technique. Four quadrants: high impact/low effort (quick win, do first), high impact/high effort (major project, plan it), low impact/low effort (nice to have), low impact/high effort (avoid). Give a classification exercise sorting a handful of example findings into the right quadrant.
- Close with a preview to Chapter 8: "Anda sekarang punya daftar prioritas yang masuk akal. Bab terakhir: ubah ini jadi rencana aksi 90 hari, bangun kebiasaan audit rutin, dan unduh laporan audit lengkap Anda."

## 4. Workbook capture for this chapter — new card type needed

This is the one chapter so far where a new card type is warranted, because it's the first chapter that actually needs to **read back** what the reader wrote in earlier chapters, not just collect something new.

Add a new card type to `Module 1/src/types/card.ts`, e.g. `FindingReviewCardData` (type: `'finding-review'`):

- Displays one or more of the reader's own prior `useWorkbookStore` entries read-only (e.g. their Chapter 2 symptom, Chapter 4 bottleneck, Chapter 5 resource, Chapter 6 verification plan) as a short recap.
- Below the recap, captures: a 1–4 severity score, and a short free-text justification.
- Persists the score back to `useWorkbookStore` under a clearly named key (e.g. `chapter4-bottleneck-score`) so Chapter 8 can read it later.
- If a referenced prior entry is empty (reader skipped that chapter's reflection card), degrade gracefully — don't crash, just skip that recap line or show a neutral placeholder.

Use this new card type at least twice in this chapter:

1. Once to have the reader score the chain they've built (symptom → bottleneck → resource), with the recap pulling in the relevant prior entries.
2. Once to have them flag which single finding they'll prioritize first — this becomes the seed for Chapter 8's action plan.

## 5. Voice & format

- Match `chapter1.ts` through `chapter6.ts` and `module1.ts`'s register exactly — read all seven before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) for the teaching/practice portions. Use the new `finding-review` type only for the two moments described in section 4.
- The 5 Whys and impact/effort matrix should each land through a worked example plus a hands-on exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 1/src/content/chapter7.ts` exporting `chapter7Cards: Card[]`. Leave `chapter1.ts` through `chapter6.ts` and `module1.ts` in place — this prompt is content plus the one new card type, not the chapter-navigation restructure.

## 6. Out of scope for this prompt

- Chapter 8 content
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure scores are persisted so Chapter 8 can read them)
- Building a full report/summary view of all workbook entries (Chapter 8's job)
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)

## 7. Definition of done

- [ ] `Module 1/src/types/card.ts` has a new `finding-review` card type that reads prior `useWorkbookStore` entries and captures a 1–4 score plus justification
- [ ] `Module 1/src/content/chapter7.ts` has 10–20 cards covering the scoring rubric, 5 Whys, and impact/effort matrix, including at least two `finding-review` cards as described in section 4
- [ ] Scoring rubric language matches (or is checked against) `organizational_prediagnostic_tool_id.html`'s existing 1–4 / red-flag-≤2 convention
- [ ] At least one fully-worked 5 Whys example plus one hands-on continuation exercise
- [ ] Opens by naming why raw findings aren't actionable on their own; closes previewing Chapter 8
- [ ] Voice matches `chapter1.ts` through `chapter6.ts` / `module1.ts` — read all seven before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` through `chapter6.ts` / `module1.ts` / current app behavior untouched
