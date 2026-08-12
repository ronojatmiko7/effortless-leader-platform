# Build Brief: Module 5 — Chapter 5 ("Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 5/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 4/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–4 already exist (`Module 5/src/content/chapter1.ts`–`chapter4.ts`) — read all four before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This is the second of two back-to-back fix chapters (4, 5): Chapter 4 fixed the format lens; this chapter fixes the access lens (and touches on the relevance lens through ownership of updates).

**This prompt covers Chapter 5 only.** Chapters 6–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_5_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 5 is bolded)

1. Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu — done
2. Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif — done
3. Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi? — done
4. Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan — done
5. **Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder** ← this chapter
6. Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif'
7. Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai
8. Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap

## 3. Chapter 5 objective

A well-formatted SOP (Chapter 4) still fails if it's stored somewhere nobody thinks to look when they actually need it. This chapter gives the reader concrete principles for where SOPs should physically or digitally live, and who's responsible for keeping them current so they don't quietly slide back into "dokumen berdebu" territory.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 4 — formatnya udah oke, sekarang harus sampai ke tangan orang yang butuh, PAS mereka butuh, bukan tersimpan rapi tapi nggak kejangkau.
- **Prinsip lokasi**: SOP harus ada di titik kerja itu sendiri, bukan cuma di kantor admin — ditempel di dinding dekat mesin, kartu laminating di meja kerja, QR code yang nempel di alat dan langsung buka SOP-nya di HP.
- **Digital vs fisik — kapan pakai yang mana**: fisik cocok buat lokasi kerja tanpa akses gawai/internet stabil (lantai produksi, gudang); digital (shared folder yang terstruktur, bukan tumpukan file random) cocok buat kerja yang sudah dekat komputer/HP dan butuh update sering.
- **Struktur penamaan dan folder yang bikin orang bisa nemuin SOP dalam kurang dari satu menit** — bukan folder bernama "Dokumen 2023 Final Fix v2" yang cuma dimengerti orang yang bikinnya.
- **Menjaga tetap terkini (menyambung ke lensa relevansi dari Bab 3)**: siapa yang bertanggung jawab meng-update SOP kalau proses berubah, dan pemicu kapan review dilakukan — jangan nunggu sampai ada masalah baru sadar SOP-nya usang; tentukan jadwal atau trigger review yang jelas (mis. tiap kali ada perubahan alat/proses, atau review berkala tiap X bulan).
- A worked example: satu SOP dipindah dari "terkubur di laptop admin" ke lokasi akses baru yang jauh lebih dekat titik kerja, dengan alasan kenapa lokasi itu dipilih.
- A hands-on exercise: reader designs the access location and assigns an update-owner for the SOP they've been working through since Chapter 3.
- Close with a clear turn toward Chapter 6: "Sekarang SOP-nya gampang ditemukan dan ada yang jaga tetap update. Tapi ketemu nggak sama dengan dipatuhi. Bab 6 masuk ke cara memverifikasi kepatuhannya secara rutin."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kelima"**. E.g. 2 short text inputs: "Di mana lokasi akses baru buat SOP ini (fisik/digital, sebutkan spesifik)?" and "Siapa yang bertanggung jawab menjaganya tetap up to date, dan kapan/apa pemicu reviewnya?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter4.ts`'s register exactly — read all four before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the digital-vs-physical decision could land well through a `multiple-choice` scenario exercise.
- Target 10–20 cards total for this chapter.
- Create `Module 5/src/content/chapter5.ts` exporting `chapter5Cards: Card[]`. Register it in `Module 5/src/content/chapters.ts` (append after chapter 4, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 6–8 content
- Compliance-check design (Chapter 6's job)
- Re-diagnosing or reformatting SOPs (Chapters 3–4's job, already done)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the access plan is persisted so Chapter 7 can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 4/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 5/src/content/chapter5.ts` has 10–20 cards covering location principles, digital-vs-physical placement, findable naming/structure, and update ownership, including exactly one `reflection` card labeled Entri Kelima
- [ ] At least one worked example or scenario exercise around choosing an access location
- [ ] Opens with a callback to Chapter 4
- [ ] `Module 5/src/content/chapters.ts` registers Chapter 5 after Chapter 4
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter4.ts` — read all four for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter4.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 4/` left completely untouched
