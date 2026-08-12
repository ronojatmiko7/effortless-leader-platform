# Build Brief: Module 2 — Chapter 3 ("Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1 and 2 already exist (`Module 2/src/content/chapter1.ts`, `chapter2.ts`) — read both before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

This is the first of two back-to-back chapters (3, 4) that each deep-dive one half of the Lag/Lead pair previewed in Chapter 2's cascading map — Lag first, then Lead in Chapter 4. Chapter 5 then applies both to build the reader's actual per-division/per-individual cascade.

**This prompt covers Chapter 3 only.** Chapters 4–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_2_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 3 is bolded)

1. Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics) — done
2. Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework) — done
3. **Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar** ← this chapter
4. Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini
5. Merancang Cascading KPI per Divisi, Tim, dan Individu
6. Membangun Dashboard & Ritme Pemantauan yang Objektif
7. Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam
8. Menyusun Rencana Aksi KPI & Ritme Berkelanjutan

## 3. Chapter 3 objective

The reader now has the cascading map and a real target of their own (their Chapter 2 workbook entry). This chapter goes one level deeper than Chapter 2's brief Lag/Lead introduction: not every "result number" is an equally good Lag Metric. Some genuinely prove whether the target happened; others just look like proof.

`chapter2.ts` card 8 already defines Lag Metric at a glance ("kaca spion, hasil yang sudah terjadi") — that's the seed, not the destination. This chapter covers three things that are entirely new:

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- **Open by calling back to the reader's Chapter 2 workbook entry** (the target tahunan/bulanan they wrote down). Frame this chapter as: sekarang kita cari angka yang benar-benar membuktikan target itu tercapai — bukan angka yang cuma kelihatan seperti bukti.
- **Not all Lag Metrics are equal — some are proof, some are proxies.** A true Lag Metric is definitive proof of the result (profit bersih, kas di rekening, jumlah pelanggan yang bertahan). A proxy Lag Metric looks related but can move in a "good" direction while the real result doesn't (omzet kotor naik tapi margin turun, jumlah closing naik tapi retensi anjlok, skor kepuasan dari survei yang jarang diisi). Use at least 2–3 concrete SME examples pairing a proxy metric with the true metric it can mislead you about.
- **Lag time matters, not just the number itself.** New concept: every Lag Metric has a delay before it's visible — some come back fast (penjualan harian), some painfully slow (retensi pelanggan tahunan, customer lifetime value). Picking a Lag Metric with too long a delay means you only find out you failed after the period is already unrecoverable. Don't resolve this tension here (that's exactly why Chapter 4 exists — Lead Metrics are the fix) — just make the reader feel the problem.
- **The single-lag-metric trap.** Watching only one Lag Metric (biasanya cuma omzet) hides problems in every other dimension — margin, retensi, kualitas. Introduce the idea of a small, deliberate set of Lag Metrics per target (not 1, not 20) — this echoes Chapter 1's "3–4 angka yang benar-benar dipakai" point, but now applied specifically to choosing which result numbers to track for one target.
- **A simple verification habit**: how do you know if a Lag number is actually good or bad? Compare it against itself over time (periode ini vs periode lalu) and, cautiously, against an external benchmark (industri/kompetitor) — with an explicit warning not to blindly copy someone else's number without knowing their context.
- **Classification exercise**: given a target and a handful of candidate Lag Metrics, the reader sorts or picks which ones are true proof vs proxy (mirrors the vanity/real distinction from Chapter 1, but scoped specifically to Lag Metric selection).
- **Practice**: the reader picks one candidate Lag Metric for their own Chapter 2 target and self-tests it (does it actually prove the result? what's its lag time? is it the only number they'd watch, or part of a set?) before the workbook entry.
- Close with a clear turn toward Chapter 4: "Sekarang Anda tahu cara pilih Lag Metric yang benar. Tapi Lag Metric doang nggak cukup — dia cuma kasih tahu Anda SETELAH kejadian. Bab depan kita cari setirnya: Lead Metric yang bisa Anda kendalikan sekarang juga."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type: the reader writes down the specific Lag Metric they'll use to track the target they named in Chapter 2 — building directly on that running example. Keep it to 1–2 short text inputs, e.g. "Lag Metric apa yang akan Anda pakai?" and "Berapa lama jeda waktunya sampai angka ini kelihatan (harian/mingguan/bulanan/tahunan)?". Don't build a scoring/prioritization mechanism yet — that's Chapter 7's job.

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts` and `chapter2.ts`'s register exactly — read both before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The proof-vs-proxy distinction should land through a classification exercise (`sort-list` or `multiple-choice` sorting example metrics), not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 2/src/content/chapter3.ts` exporting `chapter3Cards: Card[]`. Register it in `Module 2/src/content/chapters.ts` (append after chapter 2, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 4–8 content
- Lead Metric content (Chapter 4's job — mention it only as a forward pointer)
- The final PDF/report export/compilation (Chapter 8's job)
- Scoring or prioritizing the reader's metrics (Chapter 7's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` — do not touch it

## 7. Definition of done

- [ ] `Module 2/src/content/chapter3.ts` has 10–20 cards covering proof-vs-proxy Lag Metrics, lag time, the single-lag-metric trap, and verification, including exactly one `reflection` card
- [ ] At least one classification exercise (proof vs. proxy) with concrete example metrics, not just an explanation
- [ ] Opens with a callback to the reader's Chapter 2 workbook target
- [ ] `Module 2/src/content/chapters.ts` registers Chapter 3 after Chapter 2
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` / `chapter2.ts` — read both for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / `chapter2.ts` / current app behavior untouched
- [ ] `Module 1/` left completely untouched
