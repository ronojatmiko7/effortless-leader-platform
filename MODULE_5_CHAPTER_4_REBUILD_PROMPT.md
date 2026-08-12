# Build Brief: Module 5 — Chapter 4 ("Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 5/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 4/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–3 already exist (`Module 5/src/content/chapter1.ts`–`chapter3.ts`) — read all three before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This is the first of two back-to-back fix chapters (4, 5): Chapter 3 diagnosed which lens (format, akses, relevansi) is dominant for the reader's flagged SOP; this chapter fixes the format lens specifically.

**This prompt covers Chapter 4 only.** Chapters 5–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_5_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 4 is bolded)

1. Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu — done
2. Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif — done
3. Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi? — done
4. **Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan** ← this chapter
5. Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder
6. Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif'
7. Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai
8. Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap

## 3. Chapter 4 objective

The reader has diagnosed why their SOP gets ignored (Chapter 3). If format is (part of) the problem, this chapter gives concrete, actionable principles to turn a dense, paragraph-heavy document into something people actually reach for and follow at the point of work.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 3 — kalau SOP reader didiagnosis bermasalah di format, sekarang caranya benerin.
- **Prinsip #1 — Actionable, bukan deskriptif.** Tiap baris harus jadi instruksi langsung yang bisa dikerjakan ("Putar kran A ke kanan sampai mentok"), bukan penjelasan umum yang nggak jelas siapa ngapain ("Pastikan aliran diatur dengan benar").
- **Prinsip #2 — Visual, bukan cuma teks.** Foto, diagram, atau ikon di tiap langkah kritis, terutama buat SOP yang dipakai di lapangan/lantai produksi — orang butuh lihat, bukan cuma baca.
- **Prinsip #3 — Satu halaman kalau bisa.** Checklist/format satu halaman yang bisa dilihat sekali pandang jauh lebih mungkin beneran dipakai daripada dokumen berlembar-lembar yang bikin orang males buka.
- **Prinsip #4 — Bahasa orang lapangan, bukan bahasa kantor.** Pakai istilah yang beneran dipakai staf sehari-hari, bukan istilah formal manajemen yang terdengar asing di lantai kerja.
- **Teknik konversi langkah demi langkah**: ambil SOP naratif panjang → pecah jadi langkah bernomor pendek → tambahkan checkpoint visual/foto di tiap langkah kritis → susun jadi format checklist yang bisa dicentang.
- A worked before/after example: satu paragraf SOP panjang diubah jadi checklist format baru, disandingkan langsung supaya bedanya kelihatan jelas.
- A hands-on exercise: reader applies the principles to rewrite one real snippet of their own SOP into checklist form.
- Close with a clear turn toward Chapter 5: "Formatnya sekarang jauh lebih gampang dipakai. Tapi kalau SOP bagus itu tersimpan di tempat yang susah dicari, tetap aja nggak kepake. Bab 5 benerin itu."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keempat"**. The reader rewrites one real section of their SOP into the new checklist format. E.g. 1–2 short text inputs: "Ambil satu bagian SOP Anda yang tadinya bertele-tele — tulis ulang versi checklist/langkah pendeknya di sini" and "Apa yang paling banyak dipangkas dari versi lama ke versi baru?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter3.ts`'s register exactly — read all three before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the before/after conversion should land through a worked example, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 5/src/content/chapter4.ts` exporting `chapter4Cards: Card[]`. Register it in `Module 5/src/content/chapters.ts` (append after chapter 3, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 5–8 content
- Access/distribution (Chapter 5's job) or compliance-check design (Chapter 6's job)
- Re-diagnosing SOPs (Chapter 3's job, already done)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the reformatted snippet is persisted so Chapter 7 can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 4/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 5/src/content/chapter4.ts` has 10–20 cards covering the four format principles, the narrative-to-checklist conversion technique, and a worked before/after example, including exactly one `reflection` card labeled Entri Keempat
- [ ] At least one hands-on exercise where the reader rewrites a real SOP snippet
- [ ] Opens with a callback to Chapter 3
- [ ] `Module 5/src/content/chapters.ts` registers Chapter 4 after Chapter 3
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter3.ts` — read all three for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter3.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 4/` left completely untouched
