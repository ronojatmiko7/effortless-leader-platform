# Module 2 — 2-Day / 8-Session Training Syllabus (KPI Architecture & Strategic Cascading)

Reference doc — mirrors the role `CHAPTER_1_REBUILD_PROMPT.md` through `CHAPTER_8_REBUILD_PROMPT.md` play for Module 1. Use this as the syllabus section (section 2) each time a `MODULE_2_CHAPTER_N_REBUILD_PROMPT.md` gets written.

## 1. Context

`Module 1/src/content/module2.ts` is the existing flat 13-card deck for Service 2: KPI Architecture & Strategic Cascading — teaching SME owners to stop measuring "busy" and start measuring what actually predicts results, then cascade that down to daily team-level action. Same as Module 1's old 15-card deck, these 13 cards are only as deep as roughly 2 chapters should be — this syllabus restructures Module 2 into **8 chapters**, one per session of a 2-day / 8-session in-class training, matching Module 1's format exactly (`Module 1/src/content/chapter1.ts` through `chapter8.ts`, `Module 1/src/types/card.ts`, `useWorkbookStore`).

Voice and mechanics carry over unchanged from Module 1: casual, blunt, direct Bahasa Indonesia; reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`, `worksheet`) freely; capture exercises in-app via `reflection` cards tied to `useWorkbookStore`, not static PDF downloads; target 10–20 cards per chapter; close with Chapter 8 compiling everything into one downloadable report via the `report` card type.

## 2. The 8-chapter syllabus

**Hari 1 — Dari Angka Basa-basi ke Peta KPI yang Nyata**

1. **Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics)** — Kenapa "sibuk" dan "omzet naik" bisa menipu Anda, dan kenapa Anda butuh KPI yang benar-benar mengukur kesehatan bisnis, bukan cuma bikin ngerasa aman.
2. **Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework)** — Peta besar cara memecah target tahunan perusahaan jadi target harian yang jelas untuk tiap divisi dan staf — kerangka yang dibongkar satu-satu di Bab 3-5.
3. **Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar** — Memahami metrik hasil akhir, kenapa penting tapi selalu terlambat, dan kesalahan umum memakainya sebagai satu-satunya alat kemudi.
4. **Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini** — Menemukan tindakan harian yang benar-benar memprediksi dan mengungkit hasil akhir, dibedakan tegas dari aktivitas yang cuma terasa sibuk.

**Hari 2 — Menjalankan dan Merawat Sistem KPI**

5. **Merancang Cascading KPI per Divisi, Tim, dan Individu** — Memecah target besar jadi KPI spesifik per level (siapa pemilik, angka target apa), termasuk kapan Lag vs Lead metric dipakai di tiap level.
6. **Membangun Dashboard & Ritme Pemantauan yang Objektif** — Cara mengumpulkan dan menampilkan data KPI secara rutin dan tanpa bias, biar Anda berhenti jadi pemadam kebakaran yang cuma lihat angka saat ada masalah.
7. **Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam** — Memimpin rapat evaluasi KPI yang menyerang akar masalah di sistem, bukan menyalahkan orang, dan mengubah temuan jadi prioritas yang masuk akal.
8. **Menyusun Rencana Aksi KPI & Ritme Berkelanjutan** — Menyusun rencana aksi konkret (Apa-Siapa-Kapan) untuk KPI bermasalah, menetapkan ritme evaluasi yang bertahan lama, dan mengunduh laporan KPI lengkap dari Bab 1-7.

## 3. Notes for chapter build prompts

- Each chapter above becomes its own `MODULE_2_CHAPTER_N_REBUILD_PROMPT.md`, following the exact section structure of Module 1's `CHAPTER_N_REBUILD_PROMPT.md` files (Context → syllabus list with target chapter bolded → chapter objective → workbook capture → voice & format → out of scope → definition of done).
- Chapter content lives in a new `Module 1/src/content/module2chapter1.ts` … `module2chapter8.ts` (or a parallel `Module 2/` app, if Module 2 gets split into its own project the way `Effortless Leader Funnel/` was) — decide the folder structure in the Chapter 1 prompt, since it wasn't needed for Module 1.
- No new card types should be required — `reflection`, `finding-review`-style scoring, and `report` already exist from Module 1 and should be reused rather than rebuilt.
- Chapter 8 here closes the loop back to the funnel: its `cta` should point at whichever navigation pattern the module-home screen ends up using (see `MODULE_HOME_NAVIGATION_PROMPT.md`), the same way Module 1's Chapter 8 does.
