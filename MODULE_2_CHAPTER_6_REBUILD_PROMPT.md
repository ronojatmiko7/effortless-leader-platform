# Build Brief: Module 2 — Chapter 6 ("Membangun Dashboard & Ritme Pemantauan yang Objektif")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–5 already exist (`Module 2/src/content/chapter1.ts` through `chapter5.ts`) — read all five before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

By the end of Chapter 5, the reader has 6 KPIs (Lag + Lead across Output, Proses, Input) each with a named owner. None of that matters yet — a KPI sitting in a workbook entry is just as useless as the vanity metrics from Chapter 1 if nobody ever looks at it on a rhythm. This chapter turns the design into a habit.

`Module 1/src/content/module2.ts` (the old flat deck) has two relevant seed cards worth reusing as tone reference: card 9 ("Jangan Jadi Pemadam Kebakaran" — checking data only when there's a crisis isn't managing, it's firefighting) and card 10 (a yes/no comparing rutin mingguan vs. meeting mendadak). **Do not reuse module2.ts card 11** (the "tujuan rapat evaluasi mingguan" content, about diagnosing without blame) — that belongs to Chapter 7, not this chapter.

**One important scope constraint: keep every recommendation low-tech.** This module's reader is an SME owner, not someone with a BI team or budget for dashboard software. "Dashboard" in this chapter should mean a whiteboard, a simple spreadsheet, or a WhatsApp group — not a tool they don't have and won't buy.

**This prompt covers Chapter 6 only.** Chapters 7–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_2_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 6 is bolded)

1. Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics) — done
2. Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework) — done
3. Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar — done
4. Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini — done
5. Merancang Cascading KPI per Divisi, Tim, dan Individu — done
6. **Membangun Dashboard & Ritme Pemantauan yang Objektif** ← this chapter
7. Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam
8. Menyusun Rencana Aksi KPI & Ritme Berkelanjutan

## 3. Chapter 6 objective

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- **Open by calling back to the end of Chapter 5** — 6 KPIs, 6 owners, all currently just sitting in a workbook entry. Useless until someone actually watches them on a schedule.
- **Lead and Lag need different rhythms — new core teaching point.** A Lead Metric needs a fast check (harian, atau beberapa kali seminggu) because it's meant to be acted on immediately, that's the whole point of it being controllable today. A Lag Metric's rhythm should match its own lag time from Chapter 3 — if it only updates monthly, checking it daily is just noise; if it updates weekly, monthly is too slow to matter. Give at least one concrete example pairing a Lead's fast rhythm against its Lag's slower rhythm for the same KPI pair.
- **The dashboard doesn't need to be software — give a menu of low-tech options with honest tradeoffs**, not a single prescribed tool:
  - Papan tulis fisik (kantor/dapur/gudang) — visible ke semua orang, gampang diupdate langsung, tapi nggak nyimpen histori.
  - Spreadsheet sederhana (Google Sheets/Excel) dengan kolom Target vs. Actual per periode — punya histori, bisa dibuka dari HP, tapi butuh satu orang yang disiplin ngisi.
  - Grup WhatsApp khusus buat angka harian — paling gampang buat tim yang udah biasa pakai WA, tapi gampang tenggelam kalau nggak disiplin di-post tiap hari.
  - The point to land: pilih yang paling mungkin BENERAN dipakai konsisten oleh tim Anda, bukan yang paling canggih atau paling kelihatan profesional (echo Chapter 1's "sibuk mengukur ≠ terukur dengan baik" — a fancy tool nobody updates is its own kind of vanity metric).
- **Structure whatever tool is chosen around the three areas from Chapter 5** — Output, Proses, Input, grouped visually, so a glance at the dashboard immediately shows which area is struggling, not a flat unsorted list of 6 numbers.
- **New: someone has to own data entry, separately from owning the outcome.** Chapter 5 assigned who's responsible for each KPI's result — this chapter adds who's responsible for literally recording the number and when. Can be the same person or someone else (e.g. admin), but if nobody's explicitly on the hook for updating it, the dashboard goes stale within a couple of weeks — say this plainly, it's a realistic warning, not a hypothetical.
- **Scenario/contrast exercise**: two versions of a small business — one only opens the numbers when something already feels wrong, one checks on a fixed rhythm — and what actually happens differently over a few weeks. Land this as a `multiple-choice` or `yes-no` self-check, not just narration.
- **Practice**: the reader designs their own monitoring rhythm before the workbook entry — which tool, when they'll check Lead numbers, when they'll check Lag numbers, who updates them.
- Close with a clear turn toward Chapter 7: "Sekarang Anda punya ritme pemantauannya. Tapi cepat atau lambat, salah satu angka Anda bakal merah. Bab depan: cara mendiagnosis KPI yang merah tanpa jadi ajang cari kambing hitam."

## 4. Workbook capture for this chapter

Add **one reflection card** (this is workbook entry #8 — Chapters 1–5 already used "Entri Pertama" through "Entri Ketujuh", so label this one **"Entri Kedelapan"**), reusing the existing `reflection` card type, with 3 short text inputs:

1. Tool apa yang akan Anda pakai (papan tulis / spreadsheet / grup WhatsApp / lainnya)?
2. Kapan Anda akan cek Lead Metric Anda (contoh: tiap pagi jam 9)?
3. Kapan Anda akan cek Lag Metric Anda, dan siapa yang bertanggung jawab update angkanya?

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts` through `chapter5.ts`'s register exactly — read all five before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The Lead-vs-Lag rhythm point and the firefighting-vs-scheduled contrast should each land through a scenario-based exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 2/src/content/chapter6.ts` exporting `chapter6Cards: Card[]`. Register it in `Module 2/src/content/chapters.ts` (append after chapter 5, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 7–8 content
- Diagnosing red KPIs or the non-blame evaluation meeting content (Chapter 7's job — including `module2.ts` card 11, don't pull it into this chapter)
- The final PDF/report export/compilation (Chapter 8's job)
- Recommending or naming any actual paid software/BI tool
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` — do not touch it

## 7. Definition of done

- [ ] `Module 2/src/content/chapter6.ts` has 10–20 cards covering Lead-vs-Lag monitoring rhythm, low-tech dashboard options structured around the 3 Chapter 5 areas, and data-entry ownership, including exactly one `reflection` card labeled "Entri Kedelapan" with the 3 inputs above
- [ ] At least one scenario-based exercise contrasting reactive vs. scheduled monitoring
- [ ] All dashboard recommendations are low-tech (whiteboard/spreadsheet/WhatsApp), no assumption of BI software or budget
- [ ] Opens with a callback to the end of Chapter 5
- [ ] `Module 2/src/content/chapters.ts` registers Chapter 6 after Chapter 5
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter5.ts` — read all five for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter5.ts` / current app behavior untouched
- [ ] `Module 1/` left completely untouched
