# Build Brief: Module 5 — Chapter 2 ("Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 5/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 4/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapter 1 already exists (`Module 5/src/content/chapter1.ts`) — read it before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse it; don't recreate it.

**This prompt covers Chapter 2 only.** Chapters 3–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_5_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 2 is bolded)

1. Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu — done
2. **Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif** ← this chapter
3. Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi?
4. Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan
5. Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder
6. Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif'
7. Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai
8. Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap

## 3. Chapter 2 objective

The reader ended Chapter 1 having named one ignored SOP, but without a way to measure how bad the problem is overall or where the module is heading. This chapter gives the 4-level compliance maturity scale — pulled straight from the diagnostic's own anchors — so the reader can place their business precisely and see the destination the rest of the module builds toward.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 1 — reader sudah punya satu contoh SOP yang diabaikan. Sekarang: skala lengkap buat melihat separah apa masalahnya dan mau ke mana.
- **Level 1 — Dokumen Berdebu.** SOP formal nyaris nggak ada, atau ada tapi jadi arsip usang; solusi informal ("tanya aja ke Pak Budi") mendominasi cara kerja sehari-hari.
- **Level 2 — Ada Tapi Susah Dipakai.** SOP tertulis ada, tapi terlalu rumit, kepanjangan, atau susah ditemukan pas dibutuhkan — jadi adopsinya rendah meskipun dokumennya sebenarnya ada.
- **Level 3 — Diikuti Sebagian, Diawasi Sesekali.** SOP diikuti sebagian besar waktu, tapi kepatuhannya bergantung ada-nggaknya supervisor yang mengecek — begitu nggak diawasi, orang balik ke cara lama.
- **Level 4 — Diverifikasi Aktif.** Kerja standar dicek secara rutin dan sistematis (bukan sesekali/kebetulan) — kepatuhan itu sendiri jadi sesuatu yang dipantau, bukan diasumsikan.
- Kenapa kebanyakan bisnis SME nyangkut di Level 2 atau 3, bukan turun ke Level 1 atau naik ke Level 4 — cukup usaha buat nulis SOP sekali, tapi jarang cukup usaha buat bikin orang beneran makai atau mengeceknya rutin.
- Preview struktur sisa modul mengikuti skala ini: Bab 3 mendiagnosis kenapa SOP spesifik nyangkut di level rendah (format/akses/relevansi), Bab 4-5 naikkan levelnya lewat format dan akses yang lebih baik, Bab 6 instal mekanisme verifikasi buat sampai ke Level 4.
- A self-assessment exercise: reader menilai 3-4 SOP kunci di bisnisnya sendiri (atau area kerja kalau belum punya SOP formal) ke salah satu dari 4 level, plus posisi keseluruhan bisnis mereka di skala ini.
- A short scenario-matching exercise: given several short SOP descriptions, reader classifies each into one of the 4 levels.
- Close with a clear turn toward Chapter 3: "Sekarang Anda tahu ada di level berapa. Bab 3 kasih Anda cara mendiagnosis kenapa persisnya SOP Anda nyangkut di situ — biar bab-bab berikutnya benerin akar masalahnya, bukan asal ganti format."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kedua"**. The reader records their overall self-assessed maturity level (1-4) across the business and which specific SOP feels most urgent to fix. E.g. 2 short text inputs: "Secara keseluruhan, SOP di bisnis Anda ada di level berapa (1-4) — dan kenapa?" and "SOP mana yang paling mendesak buat dibenahi duluan?"

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1's scaffold.

## 5. Voice & format

- Match `Module 5/src/content/chapter1.ts`'s register exactly — read it before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the 4-level scenario-matching exercise should land through a `multiple-choice` or `sort-list` exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 5/src/content/chapter2.ts` exporting `chapter2Cards: Card[]`. Register it in `Module 5/src/content/chapters.ts` (append after chapter 1, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 3–8 content
- Actually diagnosing the root cause of any specific SOP (Chapter 3's job — this chapter only introduces the scale and has the reader do a light self-assessment)
- Redesigning format (Chapter 4), access (Chapter 5), or compliance checks (Chapter 6)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 4/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 5/src/content/chapter2.ts` has 10–20 cards covering the 4-level maturity scale, why most SMEs get stuck at Level 2-3, and a scenario-matching exercise, including exactly one `reflection` card labeled Entri Kedua
- [ ] At least one classification/scenario exercise mapping SOP descriptions to one of the 4 levels
- [ ] Opens with a callback to Chapter 1
- [ ] `Module 5/src/content/chapters.ts` registers Chapter 2 after Chapter 1
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` — read it for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 4/` left completely untouched
