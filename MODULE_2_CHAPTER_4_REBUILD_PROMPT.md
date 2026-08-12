# Build Brief: Module 2 — Chapter 4 ("Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–3 already exist (`Module 2/src/content/chapter1.ts`, `chapter2.ts`, `chapter3.ts`) — read all three before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

This is the second of two back-to-back chapters (3, 4) that each deep-dive one half of the Lag/Lead pair from Chapter 2's cascading map — Lag (done), now Lead. Chapter 5 then applies both to build the reader's actual per-division/per-individual cascade.

**This prompt covers Chapter 4 only.** Chapters 5–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_2_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 4 is bolded)

1. Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics) — done
2. Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework) — done
3. Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar — done
4. **Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini** ← this chapter
5. Merancang Cascading KPI per Divisi, Tim, dan Individu
6. Membangun Dashboard & Ritme Pemantauan yang Objektif
7. Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam
8. Menyusun Rencana Aksi KPI & Ritme Berkelanjutan

## 3. Chapter 4 objective

Chapter 3 ended on a real problem: the reader's Lag Metric only tells them the truth after the period is already unrecoverable. This chapter is the fix — Lead Metrics, the daily actions that predict and drive the Lag result, found early enough to still act on.

`chapter2.ts` card 8 already defines Lead Metric at a glance ("setir, aksi hari ini yang mendorong hasil") — that's the seed, not the destination. This chapter covers three things that are entirely new:

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- **Open by calling back to Chapter 3's ending** — the reader felt the lag-time problem. This chapter finds the number that lets them react before it's too late.
- **The two-part test for a real Lead Metric** — the core new teaching point. A real Lead Metric must be both **predictive** (it genuinely moves the Lag result) and **controllable** (the person can act on it directly, today). Most "Lead-looking" numbers fail one of the two:
  - Fails *controllable*: things that predict the result but nobody can act on directly — cuaca, kondisi ekonomi makro, mood pasar. Interesting to know, useless as a Lead Metric to assign to someone.
  - Fails *predictive*: things that are fully controllable and feel productive, but don't actually move the Lag result — jam kerja yang panjang, jumlah rapat internal, jumlah postingan media sosial tanpa strategi jelas. This is busywork wearing a Lead Metric costume — tie this explicitly back to Chapter 1's "sibuk ≠ terukur dengan baik."
- **The causal-chain question** the reader can reuse on any candidate: "kalau saya lakukan lebih banyak X hari ini, apakah saya benar-benar yakin Y akan lebih baik nanti? Kalau nggak yakin, X itu aktivitas, bukan Lead Metric."
- **Reverse-engineering a Lead target from a Lag target** — new, concrete, and the most practically useful skill in this chapter. Teach the ratio/conversion method: if the reader knows their historical conversion rates, they can calculate backward from a Lag target to the exact daily Lead activity needed. Walk through **two full worked numeric examples end to end**, not just one — sales is the easy case, but this method has to work outside sales too:
  1. **Sales** (the intuitive case): target closing 10 penjualan/bulan → closing rate 1:5 presentasi → presentasi rate 1:3 telepon → berarti butuh ~50 presentasi/bulan, ~150 telepon/bulan, sekitar 7 telepon/hari kerja.
  2. **Produksi/F&B** (a non-sales case, so the reader sees this method isn't sales-only): target Lag turunkan reject rate produksi dari 5% jadi maksimal 2% (misal dari total produksi 10.000 unit/bulan). Data historis menunjukkan: shift yang checklist QC-nya dijalankan penuh, reject rate-nya sekitar 1,5%; shift yang checklist-nya dilewati atau cuma dicentang formalitas, reject rate-nya bisa sampai 6%. Jadi Lead Metric-nya bukan "jumlah produksi" tapi **kepatuhan menjalankan checklist QC penuh per shift** — targetnya 100% dari seluruh shift dalam seminggu (misal 21 shift), bukan sebagian.
- **Classification/scenario exercise**: given a handful of candidate daily activities for a business scenario, the reader sorts or picks which ones pass both tests (predictive + controllable) vs. which fail one — mirrors Chapter 3's proof-vs-proxy exercise, but for the predictive/controllable pair instead.
- **Practice**: the reader applies the reverse-engineering method to their own Chapter 3 Lag Metric, arriving at a candidate Lead Metric and a rough daily target number, before the workbook entry.
- Close with a clear turn toward Chapter 5: "Sekarang Anda punya keduanya — Lag dan Lead untuk target Anda. Bab depan kita pasang semuanya jadi cascading KPI resmi per divisi, tim, dan individu."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type: the reader writes down the Lead Metric they'll use to drive the Lag Metric they named in Chapter 3, plus a rough daily target number derived using the reverse-engineering method. Keep it to 1–2 short text inputs, e.g. "Lead Metric apa yang akan Anda pakai?" and "Berapa target angka hariannya (hasil hitung mundur dari Lag Metric Anda)?". Don't build a scoring/prioritization mechanism yet — that's Chapter 7's job.

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts`, `chapter2.ts`, and `chapter3.ts`'s register exactly — read all three before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The predictive-vs-controllable distinction should land through a classification exercise (`sort-list` or `multiple-choice`), not just an explanation. The reverse-engineering worked example works well as a short sequence of `info` cards building up the math step by step, followed by a `multiple-choice` or `fill-in-the-blank` checking the reader followed it.
- Target 10–20 cards total for this chapter. With two full worked examples plus a classification exercise, this chapter will likely run toward the upper end of that range — that's fine, don't compress the second worked example into a couple of throwaway lines just to stay under 20.
- Create `Module 2/src/content/chapter4.ts` exporting `chapter4Cards: Card[]`. Register it in `Module 2/src/content/chapters.ts` (append after chapter 3, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 5–8 content
- Building the actual per-division/per-individual cascade (Chapter 5's job — this chapter works with the reader's own single target only)
- The final PDF/report export/compilation (Chapter 8's job)
- Scoring or prioritizing the reader's metrics (Chapter 7's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` — do not touch it

## 7. Definition of done

- [ ] `Module 2/src/content/chapter4.ts` has 10–20 cards covering the predictive/controllable test and the reverse-engineering method, including exactly one `reflection` card
- [ ] At least one classification exercise (predictive+controllable vs. failing one) with concrete example activities
- [ ] Two full worked numeric examples of reverse-engineering a Lead target from a Lag target — one sales, one produksi/F&B (or another non-sales function)
- [ ] Opens with a callback to Chapter 3's ending (the lag-time problem)
- [ ] `Module 2/src/content/chapters.ts` registers Chapter 4 after Chapter 3
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` / `chapter2.ts` / `chapter3.ts` — read all three for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / `chapter2.ts` / `chapter3.ts` / current app behavior untouched
- [ ] `Module 1/` left completely untouched
