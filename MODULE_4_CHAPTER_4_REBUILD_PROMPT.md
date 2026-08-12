# Build Brief: Module 4 — Chapter 4 ("Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 4/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 3/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–3 already exist (`Module 4/src/content/chapter1.ts`–`chapter3.ts`) — read all three before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This is the second of two back-to-back chapters (3, 4): Chapter 3 drew the map and marked handoff points; this chapter diagnoses which of those handoffs are actually broken, and why.

**This prompt covers Chapter 4 only.** Chapters 5–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_4_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 4 is bolded)

1. Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo — done
2. Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja — done
3. Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End — done
4. **Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis** ← this chapter
5. Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi
6. Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan
7. Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo
8. Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 4 objective

The reader has a map with handoff points marked (Chapter 3), but not every handoff is actually broken, and not every broken one is broken for the same reason. This chapter gives a real diagnostic method to tell apart three distinct failure modes — functional silo, redundant approval, and ordinary bottleneck — so Chapters 5–7 fix the right thing instead of guessing.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 3 — reader punya peta dan titik-titik serah terima. Tapi belum semua titik itu beneran rusak, dan yang rusak pun rusaknya nggak selalu karena hal yang sama.
- **Gejala silo fungsional**: informasi/barang macet di satu meja tanpa ada yang merasa itu tanggung jawabnya; staf nunggu instruksi dari departemen lain tanpa ada kesepakatan waktu (SLA); saat terjadi error, semua orang saling lempar tanggung jawab ("itu bukan bagian saya").
- **Gejala approval berlapis (redundant approval)**: satu keputusan kecil butuh tanda tangan/persetujuan dari tiga orang atau lebih yang nggak jelas menambah nilai apa; alasan approval itu ada cuma "dari dulu emang gitu", bukan risiko nyata yang perlu dicek. Bedakan dari approval yang memang perlu (nilai transaksi besar, risiko hukum/keselamatan) — approval nggak selalu salah, yang salah itu approval yang nggak lagi punya alasan jelas.
- **Gejala bottleneck biasa**: titik yang memang makan waktu karena kapasitasnya terbatas (mis. satu mesin, satu orang ahli) — ini beda dari silo/approval berlebih karena penyebabnya kapasitas, bukan tata kelola/koordinasi yang berantakan. Penting dibedakan karena solusinya beda total (tambah kapasitas/atur ulang jadwal, bukan redesain alur).
- **Teknik diagnosis tiga pertanyaan** untuk tiap titik serah terima di peta Bab 3: (1) berapa lama rata-rata macet di sini, (2) siapa yang sebenarnya nunggu siapa, (3) apa yang terjadi kalau orang yang biasa pegang titik ini tiba-tiba nggak ada (cuti/sakit/keluar) — jawaban atas ketiga pertanyaan ini biasanya langsung menunjukkan gejala mana yang paling dominan di titik itu.
- A worked example diagnosing one handoff step by step through the three questions, landing on which of the three failure modes it is.
- A classification/scenario exercise: given several handoff descriptions, reader classifies each as silo fungsional, approval berlapis, or bottleneck biasa.
- Close with a clear turn toward Chapter 5: "Sekarang Anda tahu persis titik mana yang rusak dan kenapa. Bab depan: cara menyusun instruksi kerja yang jelas dan bisa langsung dijalankan, biar titik-titik itu nggak lagi mengandalkan improvisasi atau ingatan orang."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keempat"**. The reader picks their single worst handoff point from Chapter 3's entry and diagnoses it using the three-question method. E.g. 2 short text inputs: "Dari titik-titik serah terima yang Anda catat di Bab 3, mana yang paling parah?" and "Berdasarkan tiga pertanyaan tadi, ini kemungkinan besar: silo fungsional, approval berlapis, atau bottleneck biasa — dan kenapa?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter3.ts`'s register exactly — read all three before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the three-failure-mode classification should land through a `multiple-choice` scenario exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 4/src/content/chapter4.ts` exporting `chapter4Cards: Card[]`. Register it in `Module 4/src/content/chapters.ts` (append after chapter 3, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 5–8 content
- Fixing/redesigning the diagnosed handoff (Chapter 7's job — this chapter is diagnosis only)
- L3-L4 procedures/work instructions (Chapter 5's job)
- QMS/prevention checkpoints (Chapter 6's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the diagnosis is persisted so Chapter 7 can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 3/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 4/src/content/chapter4.ts` has 10–20 cards covering the three failure modes (silo fungsional, approval berlapis, bottleneck biasa), the three-question diagnostic method, and a worked example, including exactly one `reflection` card labeled Entri Keempat
- [ ] At least one classification/scenario exercise distinguishing the three failure modes
- [ ] Opens with a callback to Chapter 3
- [ ] `Module 4/src/content/chapters.ts` registers Chapter 4 after Chapter 3
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter3.ts` — read all three for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter3.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 3/` left completely untouched
