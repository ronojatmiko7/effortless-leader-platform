# Module 3 — 2-Day / 8-Session Training Syllabus (Executive Business Review Governance)

Reference doc — mirrors the role `CHAPTER_1_REBUILD_PROMPT.md` through `CHAPTER_8_REBUILD_PROMPT.md` play for Module 1, and `MODULE_2_SYLLABUS.md` plays for Module 2. Use this as the syllabus section (section 2) each time a `MODULE_3_CHAPTER_N_REBUILD_PROMPT.md` gets written.

## 1. Context

Module 3 covers Service 3: Executive Business Review (EBR) Governance — mapped from Q3 in the diagnostic ("Apakah terdapat frekuensi terstruktur untuk meninjau KPI, dan apakah deviasi kinerja ditangani dengan analisis akar masalah formal?"). It picks up directly where Module 2 (KPI Architecture & Strategic Cascading) leaves off: Module 2 builds the KPI system and one evaluation meeting (Chapter 7); Module 3 builds the full multi-tier review rhythm across the whole business — daily huddle through quarterly strategic review — formal root cause analysis, and a governance system that runs on its own instead of collapsing back into ad hoc firefighting.

Same as Module 2, this is an 8-chapter build, one per session of a 2-day / 8-session in-class training, matching Module 1 and Module 2's format exactly (`Module 2/src/content/chapter1.ts` through `chapter8.ts`, `Module 2/src/types/card.ts`, `useWorkbookStore`/`ProgressContext`).

Voice and mechanics carry over unchanged: casual, blunt, direct Bahasa Indonesia; reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`, `finding-review`, `worksheet`) freely; capture exercises in-app via `reflection` cards tied to the module's own workbook store, not static PDF downloads; target 10–20 cards per chapter; close with Chapter 8 compiling everything into one downloadable report via the `report` card type.

## 2. The 8-chapter syllabus

**Hari 1 — Membangun Ritme Tinjauan Bisnis**

1. **Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme** — Kenapa tanpa ritme tinjauan terstruktur, pemilik bisnis selalu jadi pemadam kebakaran; memperkenalkan konsep EBR (Executive Business Review) sebagai lawan dari rapat dadakan yang reaktif.
2. **Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan** — Peta besar cascading cadence — huddle harian, tinjauan operasional mingguan, tinjauan bisnis bulanan, tinjauan strategis triwulanan — dan siapa yang perlu hadir di tiap level, dibongkar satu-satu di Bab 3-4.
3. **Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu** — Format, durasi, dan agenda standar untuk rapat level operasional supaya singkat, disiplin, dan langsung ke masalah nyata.
4. **Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis** — Bedanya tinjauan level eksekutif dari rapat operasional harian/mingguan; siapa yang duduk di meja, dan pertanyaan strategis apa yang harus dijawab tiap siklus.

**Hari 2 — Menjalankan dan Merawat Sistem EBR**

5. **Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan** — Metode analisis akar masalah formal (mis. 5 Whys, fishbone) supaya tinjauan berhenti menebak-nebak atau melompat ke solusi sebelum tahu akar masalahnya.
6. **Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi** — Cara memimpin diskusi tinjauan supaya tidak berakhir jadi "rapat tentang rapat"; mengubah temuan RCA jadi keputusan dan pemilik aksi yang jelas.
7. **Mengelola Eskalasi dan Akuntabilitas Lintas Level** — Protokol kapan masalah harus naik dari huddle harian ke tinjauan bulanan/triwulanan, dan cara memastikan aksi yang disepakati benar-benar dikawal sampai selesai.
8. **Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap** — Menyusun playbook ritme tinjauan yang bisa jalan sendiri tanpa Anda harus mendorong terus, dan mengunduh laporan lengkap dari Bab 1-7.

## 3. Notes for chapter build prompts

- Each chapter above becomes its own `MODULE_3_CHAPTER_N_REBUILD_PROMPT.md`, following the exact section structure of Module 1/2's `CHAPTER_N_REBUILD_PROMPT.md` files (Context → syllabus list with target chapter bolded → chapter objective → workbook capture → voice & format → out of scope → definition of done).
- Module 3 is its own sibling app, `Module 3/`, built the same way `Module 2/` was scaffolded from `Module 1/`'s conventions — see `MODULE_2_CHAPTER_1_REBUILD_PROMPT.md` section 3 for the scaffolding precedent.
- No new card types should be required — `reflection`, `finding-review`-style scoring, and `report` already exist and should be reused rather than rebuilt.
- Chapter 8 here closes the loop back to the funnel: its `cta` should point at whichever navigation pattern the module-home screen ends up using (see `MODULE_HOME_NAVIGATION_PROMPT.md`), the same way Module 1 and Module 2's Chapter 8 do.
