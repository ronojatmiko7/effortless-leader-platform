# Build Brief: Module 4 — Chapter 6 ("Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 4/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 3/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–5 already exist (`Module 4/src/content/chapter1.ts`–`chapter5.ts`) — read all five before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

**This prompt covers Chapter 6 only.** Chapters 7–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_4_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 6 is bolded)

1. Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo — done
2. Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja — done
3. Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End — done
4. Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis — done
5. Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi — done
6. **Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan** ← this chapter
7. Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo
8. Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 6 objective

The reader now has clear instructions (Chapter 5), but clear instructions alone don't stop mistakes — people still skip steps under pressure. This chapter teaches the difference between catching defects after the fact and preventing them before they happen, and has the reader design one real prevention checkpoint.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 5 — reader punya instruksi kerja yang jelas. Tapi instruksi yang jelas aja nggak menjamin orang nggak lewatin langkah pas lagi buru-buru atau capek.
- **QC vs QA — beda yang sering ketuker.** QC (Quality Control): mendeteksi cacat SETELAH terjadi, biasanya di ujung proses (mis. inspeksi barang jadi sebelum kirim). Bagus buat menangkap masalah sebelum sampai ke pelanggan, tapi nggak mencegah kesalahannya terjadi — biaya rework/buang tetap keluar. QA (Quality Assurance): mencegah cacat SEBELUM terjadi, dibangun ke DALAM proses itu sendiri (mis. checklist wajib di tengah proses, desain yang bikin kesalahan susah dilakukan). Sistem Manajemen Mutu (QMS) yang bagus punya keduanya, tapi porsi QA yang bikin biaya kesalahan turun drastis — bukan sekadar QC lebih rajin.
- **Konsep sederhana "mistake-proofing"** (tanpa jargon Jepang yang berat) — desain titik kerja supaya kesalahan gampang ketahuan atau bahkan nggak mungkin dilakukan, bukan mengandalkan orang untuk selalu ingat dan teliti. Contoh sederhana: checklist wajib dicentang sebelum barang boleh lanjut ke tahap berikut, form yang nggak bisa disubmit kalau ada kolom wajib kosong, warna/label yang bikin item salah langsung kelihatan beda.
- **Standar kualitas yang jelas di tiap titik rawan** — bukan cuma "kerjakan dengan baik" tapi kriteria konkret "selesai dengan benar itu artinya apa" (echo dari L4 instruksi kerja di Bab 5, sekarang dipasangkan dengan titik cek). Sambungkan langsung ke titik-titik serah terima dari Bab 3-4: titik paling rawan biasanya justru di serah terima, karena itu titik terakhir kesalahan bisa ketahuan sebelum berpindah tanggung jawab.
- **Kesalahan umum**: QMS yang isinya cuma inspeksi akhir (QC doang, nggak ada pencegahan), dan sebaliknya — sistem yang kelewat rumit dengan terlalu banyak titik cek sehingga malah bikin proses lambat tanpa nambah value. Cari keseimbangan: titik cek yang paling murah dan paling awal mendeteksi masalah, bukan titik cek di mana-mana.
- A worked example: pick one handoff/step and show a QC-only approach vs a QA-built-in approach side by side, making the cost difference concrete (barang cacat yang ketahuan di akhir vs dicegah di tengah).
- A practice/classification exercise: given several quality-control examples, reader classifies each as QC (menangkap) or QA (mencegah).
- Close with a clear turn toward Chapter 7: "Sekarang Anda punya semua bahannya: peta proses, diagnosis silo, instruksi kerja, dan titik pencegahan kualitas. Bab depan: lokakarya penuh — merombak satu proses Anda dari awal sampai akhir, pakai semua yang sudah dipelajari."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keenam"**. The reader designs one concrete prevention checkpoint (QA, not QC) for the process/handoff they've been working on since Chapter 4. E.g. 2 short text inputs: "Di titik mana kesalahan paling sering/paling mahal terjadi di proses Anda?" and "Rancang satu titik cek pencegahan (bukan cuma inspeksi di akhir) — apa kriterianya dan siapa yang mengeceknya?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter5.ts`'s register exactly — read all five before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the QC-vs-QA distinction should land through a classification exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 4/src/content/chapter6.ts` exporting `chapter6Cards: Card[]`. Register it in `Module 4/src/content/chapters.ts` (append after chapter 5, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 7–8 content
- The full process redesign workshop (Chapter 7's job — this chapter only designs one prevention checkpoint, not the whole process)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the checkpoint design is persisted so later chapters can reference it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 3/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 4/src/content/chapter6.ts` has 10–20 cards covering QC vs QA, mistake-proofing, standar kualitas di titik serah terima, and a worked before/after example, including exactly one `reflection` card labeled Entri Keenam
- [ ] At least one classification exercise distinguishing QC (catching) from QA (preventing)
- [ ] Opens with a callback to Chapter 5
- [ ] `Module 4/src/content/chapters.ts` registers Chapter 6 after Chapter 5
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter5.ts` — read all five for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter5.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 3/` left completely untouched
