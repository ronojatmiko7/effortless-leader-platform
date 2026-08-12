# Build Brief: Module 4 — Chapter 2 ("Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 4/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 3/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapter 1 already exists (`Module 4/src/content/chapter1.ts`) — read it before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse it; don't recreate it.

**This prompt covers Chapter 2 only.** Chapters 3–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_4_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 2 is bolded)

1. Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo — done
2. **Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja** ← this chapter
3. Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End
4. Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis
5. Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi
6. Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan
7. Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo
8. Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 2 objective

The reader ended Chapter 1 feeling the cost of silos but without a map. This chapter gives the big-picture architecture — the 4-tier process documentation hierarchy (L1–L4) — so the reader knows exactly which altitude a problem lives at before Chapters 3–5 dig into building each level.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 1 — reader sudah ngerasain sakitnya silo. Sekarang: peta lengkap biar tahu persis di level mana harus dibenahi.
- **L1 — Peta Proses Bisnis (macro map).** Alur end-to-end dari pelanggan minta sampai pelanggan puas, lintas semua departemen, digambar dalam satu halaman. Ini yang biasanya nggak pernah ada di kepala siapa pun secara utuh — tiap orang cuma tahu potongan yang dia kerjakan.
- **L2 — Sub-Proses per Fungsi.** Tiap kotak besar di L1 dipecah jadi alur kerja di dalam satu departemen/fungsi (mis. "Proses Produksi" di L1 pecah jadi sub-langkah produksi di L2).
- **L3 — Prosedur.** Urutan langkah konkret dan siapa yang mengerjakan tiap langkah, di dalam satu sub-proses.
- **L4 — Instruksi Kerja / SOP.** Detail teknis paling granular per tugas — cara persis mengerjakan satu langkah, sampai ke level yang bisa diikuti staf baru tanpa nanya-nanya.
- **Kenapa silo bersembunyi di celah antar level, bukan di dalam satu level**: sebuah departemen bisa saja punya L3/L4 yang rapi buat kerjaannya sendiri, tapi kalau L1/L2-nya nggak pernah digambar lintas departemen, nggak ada yang bisa lihat di mana proses itu nyambung — atau nggak nyambung — ke departemen lain. Silo hidup di sambungan antar kotak, bukan di dalam kotak.
- A concrete worked mini-example spanning all 4 levels for one simple end-to-end process (e.g. "dari order pelanggan masuk sampai barang dikirim") — show what L1 looks like for it, then L2, then L3, then L4, so the abstraction lands as something tangible.
- A sorting/classification exercise: given a list of process artifacts (a one-page company-wide flow, a checklist step-by-step buat satu mesin, alur kerja dalam satu departemen, urutan langkah satu prosedur), reader classifies each into L1/L2/L3/L4.
- Close with a clear turn toward Chapter 3: "Sekarang Anda punya peta besarnya. Bab 3 dan 4 masuk ke L1-L2 — menggambar rantai nilai bisnis Anda sendiri dan menemukan di mana titik silonya."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kedua"**. The reader audits which of the 4 levels already exist (even informally) in their business, and which level feels most empty/nonexistent. E.g. 2 short text inputs: "Level mana yang sudah ada di bisnis Anda, walau informal?" and "Level mana yang paling kosong — dan kemungkinan besar itu sumber masalahnya?"

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1's scaffold.

## 5. Voice & format

- Match `Module 4/src/content/chapter1.ts`'s register exactly — read it before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the 4-level classification should land through a sorting/matching exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 4/src/content/chapter2.ts` exporting `chapter2Cards: Card[]`. Register it in `Module 4/src/content/chapters.ts` (append after chapter 1, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 3–8 content
- Actually drawing the reader's own L1-L2 map in detail (Chapter 3's job — this chapter only introduces the concept and has the reader do a light self-audit)
- Diagnosing specific silo points (Chapter 4's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 3/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 4/src/content/chapter2.ts` has 10–20 cards covering the 4-tier architecture, the worked mini-example spanning all 4 levels, and why silos hide between levels, including exactly one `reflection` card labeled Entri Kedua
- [ ] At least one classification/sorting exercise mapping artifacts to L1/L2/L3/L4
- [ ] Opens with a callback to Chapter 1
- [ ] `Module 4/src/content/chapters.ts` registers Chapter 2 after Chapter 1
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` — read it for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 3/` left completely untouched
