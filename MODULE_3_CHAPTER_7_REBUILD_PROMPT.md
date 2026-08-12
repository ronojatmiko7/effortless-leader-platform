# Build Brief: Module 3 — Chapter 7 ("Mengelola Eskalasi dan Akuntabilitas Lintas Level")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 3/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/` and `Module 2/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–6 already exist (`Module 3/src/content/chapter1.ts` through `chapter6.ts`) — read all six before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This chapter closes the loop opened in Chapter 2 (the 4-tier map and the term "eskalasi," introduced but not taught) and in Chapter 6 (the Log Keputusan). Two problems remain unsolved: (1) some problems are genuinely too big to resolve at the tier they surfaced in — when should they move up? (2) even logged decisions routinely die quietly after the meeting ends — who makes sure they don't?

**This prompt covers Chapter 7 only.** Chapter 8 is a separate, later prompt. Do not build it now.

Full 8-chapter syllabus reference: `MODULE_3_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 7 is bolded)

1. Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme — done
2. Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan — done
3. Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu — done
4. Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis — done
5. Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan — done
6. Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi — done
7. **Mengelola Eskalasi dan Akuntabilitas Lintas Level** ← this chapter
8. Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap

## 3. Chapter 7 objective

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 6 — reader punya Log Keputusan. Tapi dua masalah baru: (1) sebagian masalah ternyata terlalu besar untuk diputuskan di level huddle/mingguan tempat masalah itu pertama kali muncul — kapan itu harus naik? (2) bahkan keputusan yang sudah dicatat sering nggak beneran dikerjakan — siapa yang mastiin?
- **Kriteria eskalasi (kapan naik level)**: (a) masalah butuh sumber daya di luar wewenang level itu (uang, orang, waktu besar); (b) masalah yang sama muncul berulang di level bawah tanpa pernah tuntas selesai — tanda akarnya lebih dalam dari kelihatannya (callback eksplisit ke worked example Chapter 2 soal keluhan kualitas berulang); (c) dampaknya lintas tim/departemen, bukan cuma satu tim. Beri 2–3 skenario contoh yang jelas butuh naik vs yang seharusnya selesai di levelnya sendiri — tegaskan: nggak semua masalah perlu dieskalasi, kalau semua dieskalasi, pemilik jadi micromanage semua level dan capek sendiri.
- **New: eskalasi bukan "lempar dan lupa."** Level yang lebih rendah tetap harus membawa hasil RCA-nya (bukan cuma "ada masalah, tolong selesain") ke level atas, supaya level atas nggak mulai analisis dari nol lagi. Ini menyatukan Bab 5 (RCA) dan Bab 7 (eskalasi) secara eksplisit.
- **Akuntabilitas — closing the loop.** Setiap keputusan di Log (dari Bab 6) harus muncul lagi di tinjauan berikutnya sebagai item pertama yang dicek: "keputusan minggu/bulan lalu ini, statusnya gimana?" Kalau nggak pernah dicek ulang, Log Keputusan cuma jadi dokumen mati — sama seperti dashboard yang nggak pernah dibuka. Tegaskan ini secara eksplisit sebagai bentuk baru dari pola "rapat tanpa ritme" yang sudah dibongkar di Bab 1 — bukan masalah baru, versi baru dari masalah lama.
- **Status convention sederhana** untuk tracking cepat: Belum Mulai / Jalan / Macet-Butuh-Bantuan / Selesai. Tujuannya supaya cek ulang di tinjauan berikutnya cepat (baca status, bukan diskusi ulang dari nol), kecuali statusnya Macet — itu yang baru didiskusikan.
- **Realistic framing untuk bisnis kecil**: kalau bisnisnya kecil, "eskalasi" mungkin cuma dari "saya sebagai staf pelaksana" ke "saya juga sebagai pemilik yang lagi mikir strategis" — satu orang, dua topi. Tetap valid; yang penting keputusan besar sadar diangkat ke mode berpikir yang lebih strategis, bukan diputuskan buru-buru di sela kerjaan operasional harian.
- Scenario/classification exercise: daftar situasi, reader menandai masing-masing "naik level" atau "selesai di level itu sendiri," memakai tiga kriteria di atas.
- Practice: reader menuliskan protokol eskalasi versi mereka sendiri (kriteria naik level + ke siapa naiknya) plus status terkini dari keputusan yang mereka tulis di Bab 6, sebelum masuk workbook entry.
- Close dengan transisi jelas ke Bab 8: "Sekarang sistem EBR Anda lengkap — 4 level ritme, cara diagnosis, cara memutuskan, cara eskalasi dan mengawal. Bab terakhir: menyatukan semuanya jadi playbook yang bisa jalan sendiri, dan unduh laporan lengkap perjalanan Anda dari Bab 1."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kedelapan."** The reader writes their own escalation protocol and the current status of their Chapter 6 decision: 2–3 short text inputs, e.g. "Kriteria naik level versi Anda, dan naiknya ke siapa?" and "Status keputusan dari Bab 6 Anda sekarang (Belum Mulai / Jalan / Macet / Selesai)?".

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts` through `chapter6.ts`'s register exactly — read all six before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The escalation criteria should land through a classification exercise with concrete scenarios, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 3/src/content/chapter7.ts` exporting `chapter7Cards: Card[]`. Register it in `Module 3/src/content/chapters.ts` (append after chapter 6, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapter 8 content
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure entries are persisted so Chapter 8 can read them)
- Building a full report/summary view of all workbook entries (Chapter 8's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` and `Module 2/` — do not touch either

## 7. Definition of done

- [ ] `Module 3/src/content/chapter7.ts` has 10–20 cards covering escalation criteria, "eskalasi bukan lempar dan lupa," closing-the-loop accountability, and the status convention, including exactly one `reflection` card labeled Entri Kedelapan
- [ ] At least one classification exercise sorting scenarios into "naik level" vs "selesai di level sendiri"
- [ ] Opens with a callback to Chapter 6; closes previewing Chapter 8
- [ ] `Module 3/src/content/chapters.ts` registers Chapter 7 after Chapter 6
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter6.ts` — read all six for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter6.ts` / current app behavior untouched
- [ ] `Module 1/` and `Module 2/` left completely untouched
