# Build Brief: Module 5 — Chapter 3 ("Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi?")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 5/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 4/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–2 already exist (`Module 5/src/content/chapter1.ts`–`chapter2.ts`) — read both before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

**This prompt covers Chapter 3 only.** Chapters 4–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_5_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 3 is bolded)

1. Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu — done
2. Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif — done
3. **Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi?** ← this chapter
4. Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan
5. Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder
6. Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif'
7. Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai
8. Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap

## 3. Chapter 3 objective

The reader knows their maturity level (Chapter 2) but not yet *why* a specific SOP sits there. This chapter gives a real diagnostic method — three distinct lenses — so Chapters 4–6 fix the right thing for the right SOP instead of guessing or reformatting everything blindly.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 2 — reader tahu levelnya. Sekarang: cara mendiagnosis akar masalah spesifik di balik level itu, biar perbaikannya tepat sasaran.
- **Lensa 1 — Masalah Format.** SOP ditulis kayak dokumen hukum: paragraf panjang, nggak ada gambar/checklist, susah dipindai cepat pas lagi kerja — orang di lapangan males baca sampai selesai.
- **Lensa 2 — Masalah Akses.** SOP-nya sebenarnya jelas dan lengkap, tapi entah di mana — tersimpan di laptop satu orang, folder yang nggak pernah dibuka, atau binder yang ketinggalan di kantor pas dibutuhkan di lapangan.
- **Lensa 3 — Masalah Relevansi.** SOP-nya jelas dan gampang diakses, tapi isinya sudah nggak sesuai cara kerja sekarang (alat berubah, proses berubah, tapi SOP nggak pernah diupdate) — orang sengaja nggak ikutin karena SOP-nya sendiri yang sudah salah.
- **Teknik diagnosis tiga pertanyaan** untuk tiap SOP: (1) kalau orang baca SOP ini sekarang, apa mereka ngerti langkahnya tanpa nanya? (menunjuk ke masalah format), (2) kalau lagi butuh SOP ini pas kerja, apa mereka tahu persis di mana carinya, dan berapa lama? (menunjuk ke masalah akses), (3) kapan terakhir SOP ini dicek/diupdate, dan apa isinya masih persis sama dengan cara kerja sekarang? (menunjuk ke masalah relevansi).
- Catat: bisa lebih dari satu lensa berlaku sekaligus buat SOP yang sama — kenali kombinasinya biar perbaikannya juga tepat. Format dan akses dibenahi di Bab 4-5; kalau masalahnya relevansi karena prosesnya sendiri sudah berubah total, itu mungkin butuh peninjauan ulang proses (callback ke Modul 4 kalau reader sudah ikut) bukan cuma SOP-nya yang direvisi.
- A worked example diagnosing one SOP step by step through the three questions, landing on which lens (or combination) is dominant.
- A classification/scenario exercise: given several problem descriptions, reader classifies each as masalah format, akses, atau relevansi.
- Close with a clear turn toward Chapter 4: "Sekarang Anda tahu persis kenapa SOP itu diabaikan. Bab 4 masuk ke cara benerin masalah formatnya — dari dokumen panjang jadi checklist yang beneran dipakai di lapangan."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Ketiga"**. The reader picks the SOP flagged in Chapter 1/2 and diagnoses it using the three-lens method. E.g. 2 short text inputs: "SOP mana yang Anda diagnosis di bab ini?" and "Lensa mana yang paling dominan — format, akses, atau relevansi — dan kenapa?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter2.ts`'s register exactly — read both before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the three-lens classification should land through a `multiple-choice` scenario exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 5/src/content/chapter3.ts` exporting `chapter3Cards: Card[]`. Register it in `Module 5/src/content/chapters.ts` (append after chapter 2, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 4–8 content
- Fixing/redesigning the diagnosed SOP's format (Chapter 4's job — this chapter is diagnosis only)
- Access/distribution redesign (Chapter 5's job) or compliance-check design (Chapter 6's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the diagnosis is persisted so Chapter 7 can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 4/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 5/src/content/chapter3.ts` has 10–20 cards covering the three diagnostic lenses (format, akses, relevansi), the three-question diagnostic method, and a worked example, including exactly one `reflection` card labeled Entri Ketiga
- [ ] At least one classification/scenario exercise distinguishing the three lenses
- [ ] Opens with a callback to Chapter 2
- [ ] `Module 5/src/content/chapters.ts` registers Chapter 3 after Chapter 2
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter2.ts` — read both for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter2.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 4/` left completely untouched
