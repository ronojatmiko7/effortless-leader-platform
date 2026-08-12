# Module 4 — 2-Day / 8-Session Training Syllabus (Business Process Re-engineering — Silo-Breaking)

## 1. Context

Module 4 covers Service 4: Business Process Re-engineering (Silo-Breaking) — mapped from Q4, Q6, and Q10 in the diagnostic ("Apakah organisasi memelihara arsitektur dokumentasi proses bisnis 4 tingkat...", "Apakah serah terima antar departemen berjalan mulus, atau silo fungsional...", "Apakah terdapat Sistem Manajemen Mutu (QMS/QA/QC) yang formal..."). It picks up directly where Module 3 (EBR Governance) leaves off: Module 3 builds the review rhythm that catches problems; Module 4 fixes the process machinery that keeps causing them — building a proper 4-tier process architecture (L1 macro map down to L4 work instructions), redesigning the handoffs where functional silos and redundant approvals actually live, and installing a quality system that prevents errors instead of just catching them after the fact.

Same as Modules 2 and 3, this is an 8-chapter build, one per session of a 2-day / 8-session in-class training, matching the established format exactly (`Module 3/src/content/chapter1.ts` through `chapter8.ts`, `Module 3/src/types/card.ts`, its progress store).

Voice and mechanics carry over unchanged: casual, blunt, direct Bahasa Indonesia; reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`, `finding-review`, `worksheet`) freely; capture exercises in-app via `reflection` cards tied to the module's own workbook store, not static PDF downloads; target 10–20 cards per chapter; close with Chapter 8 compiling everything into one downloadable report via the `report` card type.

## 2. The 8-chapter syllabus

**Hari 1 — Memetakan dan Mendiagnosis Proses Bisnis Anda**

1. **Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo** — Kenapa eksekusi tetap berantakan meski KPI sudah jelas (Modul 2) dan ritme tinjauan sudah jalan (Modul 3); memperkenalkan akar masalahnya — proses yang bersilo — dan arsitektur proses 4 tingkat sebagai jalan keluarnya.
2. **Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja** — Peta besar L1 (peta bisnis end-to-end) sampai L4 (instruksi kerja/SOP), dan kenapa silo biasanya bersembunyi di celah antar level — dibongkar satu-satu di Bab 3-5.
3. **Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End** — Menggambar alur proses makro lintas departemen dan menandai setiap titik serah terima di sepanjang rantai.
4. **Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis** — Teknik mendiagnosis silo fungsional, approval berlapis, dan bottleneck di titik serah terima antar departemen.

**Hari 2 — Merancang Ulang dan Menginstal Sistem Baru**

5. **Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi** — Memecah alur makro jadi prosedur dan instruksi kerja level staf yang jelas dan bisa langsung dijalankan — fondasi yang nanti dirawat kepatuhannya di Modul 5.
6. **Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan** — Membangun titik kontrol kualitas dan standar pencegahan formal, bukan sekadar quality control yang menangkap cacat setelah kejadian.
7. **Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo** — Sesi praktik merancang ulang satu proses lintas departemen yang benar-benar bermasalah — memangkas approval berlebih, memperbaiki serah terima, menetapkan pemilik proses.
8. **Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap** — Menetapkan pemilik di tiap titik serah terima, menghubungkan tinjauannya ke ritme EBR yang sudah ada (Modul 3), dan mengunduh laporan lengkap dari Bab 1-7.

## 3. Notes for chapter build prompts

- Each chapter above becomes its own `MODULE_4_CHAPTER_N_REBUILD_PROMPT.md`, following the exact section structure of the prior modules' `CHAPTER_N_REBUILD_PROMPT.md` files (Context → syllabus list with target chapter bolded → chapter objective → workbook capture → voice & format → out of scope → definition of done).
- Module 4 is its own sibling app, `Module 4/`, scaffolded from `Module 3/`'s conventions.
- No new card types should be required — `reflection`, `finding-review`-style scoring, and `report` already exist and should be reused rather than rebuilt.
- Keep Module 4 scoped to *building the process architecture and QMS* (L1-L4 design, silo-breaking redesign, error-prevention standards) — SOP *compliance and usability* once those L3/L4 documents exist is Module 5's job, not Module 4's; don't let chapters drift into that territory.
- Chapter 8 here closes the loop back to the funnel: its `cta` should point at whichever navigation pattern the module-home screen uses (see `MODULE_HOME_NAVIGATION_PROMPT.md`), the same way Modules 1-3's Chapter 8 do.
