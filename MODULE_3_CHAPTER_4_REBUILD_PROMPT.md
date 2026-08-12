# Build Brief: Module 3 — Chapter 4 ("Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 3/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/` and `Module 2/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–3 already exist (`Module 3/src/content/chapter1.ts` through `chapter3.ts`) — read all three before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

This is the second of two back-to-back chapters (3, 4) that design the 4-tier cadence map from Chapter 2 — the two operational tiers (done in Chapter 3), now the two strategic tiers (bulanan, triwulanan).

**This prompt covers Chapter 4 only.** Chapters 5–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_3_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 4 is bolded)

1. Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme — done
2. Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan — done
3. Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu — done
4. **Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis** ← this chapter
5. Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan
6. Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi
7. Mengelola Eskalasi dan Akuntabilitas Lintas Level
8. Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap

## 3. Chapter 4 objective

The two operational tiers are rapi (Chapter 3). This chapter covers the two tiers where the *kind* of question changes completely — not "apa yang terjadi minggu ini" tapi "apakah arah kita masih benar." The most common owner mistake this chapter has to prevent: dragging operational detail into strategic time, or treating strategic reviews as a rubber-stamp status report.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 3 — dua tier operasional sudah rapi. Sekarang naik ke level yang isinya beda total, bukan cuma lebih jarang.
- **Tinjauan bulanan.** Level pemilik/manajemen. Review tren sebulan (bukan snapshot harian/mingguan). Pertanyaan inti: apakah kita on-track ke target bulanan, dan kalau nggak, kenapa — sudah mulai masuk level akar masalah, tapi belum deep-dive penuh (deep-dive itu tugas Bab 5).
- **Tinjauan triwulanan.** Level paling strategis. Isinya bukan cuma angka tapi arah: apakah target/prioritas masih relevan, apakah ada perubahan pasar/kompetitor yang perlu direspons, apakah sumber daya (orang, alat, modal) masih cukup buat target berikutnya.
- **Beda fundamental bulanan vs triwulanan** — bulanan tanya "apakah kita eksekusi dengan baik," triwulanan tanya "apakah kita eksekusi hal yang benar." Ini poin inti bab ini — pastikan ada card yang menegaskan bedanya secara eksplisit, bukan cuma tersirat dari daftar pertanyaan.
- **Kesalahan paling umum**: owner bawa detail operasional ke rapat triwulanan (ributin siapa telat submit laporan harian — itu levelnya huddle, bukan triwulanan). Kebalikannya juga gagal: rapat bulanan yang isinya cuma "semua aman, lanjut" tanpa data konkret — itu rubber-stamp, bukan tinjauan beneran. Beri contoh nyata untuk keduanya.
- **Siapa hadir**: bulanan = pemilik + kepala tim/departemen; triwulanan = bisa menambah orang kunci di luar tim inti (mentor, penasihat bisnis, bahkan klien besar tertentu kalau relevan) karena keputusannya lebih besar dari operasional harian.
- **Agenda standar masing-masing**: bulanan — tren KPI/hasil sebulan → indikasi awal akar masalah untuk yang meleset → keputusan sumber daya → preview bulan depan. Triwulanan — apakah target masih relevan → perubahan eksternal yang perlu direspons → keputusan strategis besar → set ulang prioritas kalau perlu.
- Scenario/sorting exercise: kasih daftar topik diskusi, reader mengklasifikasikan masing-masing masuk bulanan, triwulanan, atau sebenarnya levelnya huddle/mingguan dan nggak seharusnya ada di sini sama sekali.
- Practice: reader merancang rangka tinjauan bulanan dan triwulanan versi mereka (siapa hadir, 2 pertanyaan inti masing-masing) sebelum masuk workbook entry.
- Close dengan transisi jelas ke Bab 5: "Sekarang Anda punya 4 level ritme lengkap. Tapi ritme yang rapi aja nggak cukup kalau begitu ketemu masalah, jawabannya cuma tebak-tebakan. Bab depan: cara membedah masalah sampai ke akar — bukan asumsi, bukan tebak-tebakan."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keempat"**. The reader drafts who attends and the top 1–2 questions for their own monthly review, and the same for quarterly. Keep it to 2–4 short text inputs, e.g. "Siapa hadir di tinjauan bulanan Anda, dan apa pertanyaan intinya?" and "Siapa (tambahan) hadir di tinjauan triwulanan Anda, dan apa pertanyaan intinya?".

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts` through `chapter3.ts`'s register exactly — read all three before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The bulanan-vs-triwulanan distinction and the "wrong level" mistake should each land through a classification exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 3/src/content/chapter4.ts` exporting `chapter4Cards: Card[]`. Register it in `Module 3/src/content/chapters.ts` (append after chapter 3, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 5–8 content
- Root cause analysis method (Chapter 5's job — this chapter only gestures at "indikasi awal akar masalah," not the method itself)
- The final PDF/report export/compilation (Chapter 8's job)
- Escalation criteria between tiers (Chapter 7's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` and `Module 2/` — do not touch either

## 7. Definition of done

- [ ] `Module 3/src/content/chapter4.ts` has 10–20 cards covering the bulanan/triwulanan formats, the "eksekusi dengan baik vs eksekusi hal yang benar" distinction, and the wrong-level mistake, including exactly one `reflection` card labeled Entri Keempat
- [ ] At least one classification exercise sorting discussion topics by correct tier
- [ ] Opens with a callback to Chapter 3
- [ ] `Module 3/src/content/chapters.ts` registers Chapter 4 after Chapter 3
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter3.ts` — read all three for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter3.ts` / current app behavior untouched
- [ ] `Module 1/` and `Module 2/` left completely untouched
