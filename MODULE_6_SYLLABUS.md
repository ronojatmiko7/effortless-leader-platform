# Module 6 — 2-Day / 8-Session Training Syllabus (Performance Management System Overhaul)

## 1. Context

Module 6 covers Service 6: Performance Management System Overhaul — mapped from Q7, Q8, and Q9 in the diagnostic ("Apakah tujuan kinerja individu dan tim ditetapkan secara kolaboratif dan diturunkan secara jelas di awal setiap siklus?", "Apakah manajer melakukan sesi umpan balik kinerja 1-on-1 yang terstruktur dan rutin, alih-alih hanya mengandalkan tinjauan tahunan?", "Apakah underperformance ditangani secara formal melalui coaching, pelatihan, atau Performance Improvement Plan (PIP) sebelum penilaian formal diberikan?"). It shifts the funnel onto a different axis than Modules 2–5: those modules build and enforce business *systems* — KPI architecture, review rhythm, process architecture, SOP compliance. Module 6 builds the *people* layer underneath all of it: even a business with clean KPIs, a working EBR rhythm, silo-free processes, and SOPs people actually follow can still fail if the individuals running it don't have clear goals, never get real feedback beyond an annual review, and have underperformance either ignored indefinitely or jumped straight to termination with nothing formal in between. This module installs the full performance cycle — collaborative goal-setting at the start of each period, a structured coaching rhythm throughout, and a formal corrective-action ladder for underperformance — so people management stops running on gut feel and starts running on a system, same as the rest of the business.

Same as Modules 2–5, this is an 8-chapter build, one per session of a 2-day / 8-session in-class training, matching the established format exactly (`Module 5/src/content/chapter1.ts` through `chapter8.ts`, `Module 5/src/types/card.ts`, its progress store).

Voice and mechanics carry over unchanged: casual, blunt, direct Bahasa Indonesia; reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`, `finding-review`, `worksheet`) freely; capture exercises in-app via `reflection` cards tied to the module's own workbook store, not static PDF downloads; target 10–20 cards per chapter; close with Chapter 8 compiling everything into one downloadable report via the `report` card type.

## 2. The 8-chapter syllabus

**Hari 1 — Menetapkan Tujuan dan Membangun Ritme Coaching**

1. **Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah** — Kenapa sistem manajemen kinerja yang cuma mengandalkan review tahunan (atau nggak punya sistem sama sekali) selalu gagal; memperkenalkan siklus PMS lengkap — penetapan tujuan, coaching rutin, tindakan korektif — sebagai peta bab-bab berikutnya.
2. **Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif** — Peta besar tiga tahap siklus PMS dan kenapa kebanyakan bisnis SME cuma pernah bangun satu tahap (biasanya review tahunan) sambil melewatkan dua lainnya, plus self-assessment posisi bisnis reader di tiap tahap — dibongkar satu-satu di Bab 3-6.
3. **Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas** — Prinsip dan teknik menetapkan tujuan individu/tim secara kolaboratif (bukan didikte top-down) dan menurunkannya dengan jelas dari tujuan tim/bisnis di awal siklus.
4. **Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin** — Format, frekuensi, dan agenda sesi 1-on-1 terstruktur yang beneran dijalankan rutin, bukan cuma niat baik yang collapse balik ke "nanti pas review tahunan aja."

**Hari 2 — Menangani Underperformance dan Menginstal Sistem**

5. **Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas?** — Teknik mendiagnosis akar masalah underperformance sebelum bertindak: apakah orangnya nggak bisa (skill gap), nggak mau (will gap), atau sebenarnya nggak pernah dikasih tahu ekspektasi yang jelas dari awal (balik ke Bab 3).
6. **Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal** — Membangun tangga tindakan korektif formal — coaching tertarget, pelatihan, lalu Performance Improvement Plan (PIP) — sebagai proses yang harus dilalui sebelum penilaian formal/keputusan besar diambil, bukan lompat langsung ke sana.
7. **Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran** — Sesi praktik menyatukan penetapan tujuan, ritme coaching, dan (kalau relevan) jalur tindakan korektif jadi satu siklus manajemen kinerja utuh untuk satu tim atau peran nyata di bisnis reader.
8. **Menginstal Siklus PMS — Kepemilikan, Ritme, dan Laporan Lengkap** — Menetapkan pemilik tiap bagian siklus, menghubungkan ritmenya ke sistem yang sudah ada (Modul 2/3), dan mengunduh laporan lengkap dari Bab 1-7.

## 3. Notes for chapter build prompts

- Each chapter above becomes its own `MODULE_6_CHAPTER_N_REBUILD_PROMPT.md`, following the exact section structure of the prior modules' `CHAPTER_N_REBUILD_PROMPT.md` files (Context → syllabus list with target chapter bolded → chapter objective → workbook capture → voice & format → out of scope → definition of done).
- Module 6 is its own sibling app, `Module 6/`, scaffolded from `Module 5/`'s conventions.
- No new card types should be required — `reflection`, `finding-review`-style scoring, and `report` already exist and should be reused rather than rebuilt.
- Keep Module 6 scoped to *individual/team performance management* (goal-setting, coaching, corrective action) — this is a different axis than the business-systems modules (KPI architecture is Module 2's job, review rhythm is Module 3's, process/SOP is Modules 4-5's); reference them as optional connective tissue (e.g. cascading individual goals from Module 2's KPI system, syncing coaching cadence with Module 3's review rhythm) but never assume the reader has done them — keep each chapter self-contained for a reader who hasn't touched Modules 2-5 at all.
- Chapters 5-7 should stay anchored to one specific, real underperforming team member the reader names in Chapter 5 — don't let the corrective-action design in Chapter 6 or the integration workshop in Chapter 7 drift into abstract policy-writing disconnected from that one real case, the same way Modules 4-5 keep their fix chapters anchored to one real process/SOP.
- Chapter 8's closing card should carry no `cta` field — since Module 3's Chapter 1, the deck footer's "Selesai Bab Ini" button already handles returning to the module home screen; the same convention Modules 3-5's Chapter 8 follow.
