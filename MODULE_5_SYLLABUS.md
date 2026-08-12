# Module 5 — 2-Day / 8-Session Training Syllabus (SOP Optimization & Usability Redesign)

## 1. Context

Module 5 covers Service 5: SOP Optimization & Usability Redesign — mapped from Q5 in the diagnostic ("Apakah SOP L3/L4 jelas, terkini, mudah diakses, dan benar-benar diikuti oleh karyawan dalam operasional sehari-hari?"). It picks up directly where Module 4 (Business Process Re-engineering — Silo-Breaking) leaves off: Module 4 builds the process architecture and gets L3/L4 procedures and work instructions written; Module 5 solves a different problem entirely — those documents existing doesn't mean anyone actually follows them. This module diagnoses why SOPs get ignored (usang, sulit diakses, atau formatnya nggak actionable), redesigns them into a format people actually use at the point of work, and installs the routine compliance checks that move a business from "SOP diikuti kalau lagi diawasi" toward "kerja standar diverifikasi secara aktif" — the top of the diagnostic's own 1-4 scale.

Same as Modules 2–4, this is an 8-chapter build, one per session of a 2-day / 8-session in-class training, matching the established format exactly (`Module 4/src/content/chapter1.ts` through `chapter8.ts`, `Module 4/src/types/card.ts`, its progress store).

Voice and mechanics carry over unchanged: casual, blunt, direct Bahasa Indonesia; reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`, `finding-review`, `worksheet`) freely; capture exercises in-app via `reflection` cards tied to the module's own workbook store, not static PDF downloads; target 10–20 cards per chapter; close with Chapter 8 compiling everything into one downloadable report via the `report` card type.

## 2. The 8-chapter syllabus

**Hari 1 — Mendiagnosis Kenapa SOP Anda Didiamkan**

1. **Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu** — Kenapa punya SOP tertulis (apalagi hasil kerja keras di Modul 4) ternyata belum menjamin dipakai; memperkenalkan bedanya "SOP ada" dari "SOP dipakai" dan skala kematangan kepatuhan sebagai peta bab-bab berikutnya.
2. **Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif** — Empat level kematangan kepatuhan SOP (dokumen usang → sulit diakses/adopsi rendah → diikuti sebagian dengan cek sesekali → diverifikasi aktif secara rutin), dan self-assessment posisi bisnis reader di skala ini — dibongkar satu-satu di Bab 3-6.
3. **Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi?** — Teknik mendiagnosis akar masalah tiap SOP yang diabaikan lewat tiga lensa: format yang nggak actionable, akses yang sulit di titik kerja, atau isi yang sudah usang.
4. **Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan** — Prinsip menulis SOP yang benar-benar dipakai — visual, ringkas, sesuai konteks kerja nyata — dan teknik mengubah dokumen teks panjang jadi checklist/format langkah-per-langkah.

**Hari 2 — Menginstal Akses dan Verifikasi Kepatuhan**

5. **Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder** — Sistem distribusi dan akses supaya SOP yang sudah dirancang ulang benar-benar mudah ditemukan saat dibutuhkan, plus mekanisme menjaganya tetap up to date.
6. **Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif'** — Membangun mekanisme pengecekan kepatuhan rutin (spot check, walk-through, self-audit) yang memverifikasi kerja standar benar-benar dijalankan, bukan cuma diasumsikan.
7. **Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai** — Sesi praktik merancang ulang satu SOP yang paling sering diabaikan — format baru, akses baru, dan mekanisme pengecekan kepatuhannya, disatukan jadi satu paket.
8. **Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap** — Menetapkan pemilik pengecekan kepatuhan, menghubungkan ritmenya ke sistem tinjauan/QMS yang sudah ada (Modul 3/4), dan mengunduh laporan lengkap dari Bab 1-7.

## 3. Notes for chapter build prompts

- Each chapter above becomes its own `MODULE_5_CHAPTER_N_REBUILD_PROMPT.md`, following the exact section structure of the prior modules' `CHAPTER_N_REBUILD_PROMPT.md` files (Context → syllabus list with target chapter bolded → chapter objective → workbook capture → voice & format → out of scope → definition of done).
- Module 5 is its own sibling app, `Module 5/`, scaffolded from `Module 4/`'s conventions.
- No new card types should be required — `reflection`, `finding-review`-style scoring, and `report` already exist and should be reused rather than rebuilt.
- Keep Module 5 scoped to *SOP compliance and usability* (why existing SOPs get ignored, redesigning their format, installing access and routine verification) — building the 4-tier process architecture itself (L1-L4 mapping) is Module 4's job, not Module 5's; don't let chapters drift into re-mapping processes from scratch. If the reader hasn't done Module 4, frame the target as whatever work instructions/SOPs already exist in their business, formal or informal — keep each chapter self-contained.
- Chapter 8's closing card should carry no `cta` field — since Module 3's Chapter 1, the deck footer's "Selesai Bab Ini" button already handles returning to the module home screen; the same convention Module 3 and Module 4's Chapter 8 follow.
