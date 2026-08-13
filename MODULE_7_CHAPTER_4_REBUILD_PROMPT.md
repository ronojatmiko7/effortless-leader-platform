# Build Brief: Module 7 — Chapter 4 ("Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 7/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 6/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–3 already exist (`Module 7/src/content/chapter1.ts`–`chapter3.ts`) — read all three before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This chapter closes out Tahap 1 (model kompetensi) and Hari 1 of the module: the competency model from Chapter 3 still needs measurable levels before it's usable in hiring or evaluation.

**This prompt covers Chapter 4 only.** Chapters 5–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_7_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 4 is bolded)

1. Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok" — done
2. Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti — done
3. Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan — done
4. **Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur** ← this chapter
5. Mendiagnosis Rekrutmen Ad-Hoc — Kenapa "Kelihatannya Cocok" Bukan Metode Seleksi
6. Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi
7. Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran
8. Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap

## 3. Chapter 4 objective

The reader has a 3-layer competency list from Chapter 3, but "komunikasi yang baik" or "problem-solving" is still subjective — two people can disagree endlessly about whether someone has it. This chapter turns each competency into a measurable scale with observable behavioral anchors, so the model is usable, not just aspirational.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 3 — reader sudah punya daftar kompetensi. Sekarang: kenapa daftar itu masih belum cukup buat dipakai menilai orang.
- The core problem: kompetensi tanpa tingkat kemahiran itu masih kabur — "komunikasi yang baik" bisa berarti apa saja tergantung siapa yang menilai. Dua orang bisa lihat kandidat yang sama dan nggak sepakat apakah dia "komunikatif," karena nggak ada standar bersama soal seperti apa bentuknya di tiap level.
- Introduce the fix: skala tingkat kemahiran dengan **anchor perilaku** — deskripsi konkret, bisa diamati, untuk tiap level, bukan cuma label seperti "bagus" atau "kurang."
- A concrete 4-level scale reusable across competencies: **Dasar** (bisa melakukan dengan panduan/pengawasan), **Berkembang** (bisa melakukan mandiri untuk situasi standar), **Mahir** (bisa melakukan mandiri untuk situasi kompleks, jadi rujukan orang lain), **Ahli** (bisa melatih/membimbing orang lain, menangani situasi paling sulit di area itu).
- Teknik menulis anchor perilaku: untuk tiap level, jawab "kalau saya lihat orang ini kerja, apa yang benar-benar akan saya lihat mereka lakukan (atau nggak lakukan) di level ini?" — bukan menulis ulang label levelnya dengan kata lain.
- A worked example: take one competency from a sample role (e.g. "komunikasi dengan pelanggan") and write out all 4 levels with concrete behavioral anchors — contrast a vague version ("komunikasi baik" vs "komunikasi kurang baik") with the anchored version to make the difference sharp.
- Note: nggak semua kompetensi butuh keempat level dipakai penuh untuk semua peran — tentukan level MINIMUM yang dibutuhkan peran itu supaya berhasil (bukan otomatis menuntut level Ahli di semua kompetensi).
- A practice exercise: given one competency and a level label, reader writes (or selects from options) the matching behavioral anchor.
- Close with a clear turn toward Chapter 5: "Sekarang Anda punya standar yang bisa diukur, bukan cuma daftar tugas kabur. Bab berikutnya mulai Hari 2 — membongkar kenapa proses rekrutmen Anda sekarang belum benar-benar menguji standar ini."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keempat."** The reader sets minimum proficiency levels for the competencies they drafted in Chapter 3. E.g. 2 short text inputs: "Untuk kompetensi paling krusial di peran ini, level minimum apa yang dibutuhkan (Dasar/Berkembang/Mahir/Ahli), dan seperti apa bentuk konkretnya di level itu?" and "Kompetensi mana yang boleh cukup di level Dasar/Berkembang saja untuk peran ini?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter3.ts`'s register exactly — read all three before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the practice exercise should land through a `multiple-choice` or `fill-in-the-blank` exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 7/src/content/chapter4.ts` exporting `chapter4Cards: Card[]`. Register it in `Module 7/src/content/chapters.ts` (append after chapter 3, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 5–8 content
- Diagnosing or fixing the recruitment process itself (Chapters 5-6's job — this chapter only makes the competency model measurable)
- Behavioral Event Interviewing or the scoring rubric (Chapter 6)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 6/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 7/src/content/chapter4.ts` has 10–20 cards covering the 4-level proficiency scale, the technique for writing behavioral anchors, and a worked example, including exactly one `reflection` card labeled Entri Keempat setting real minimum proficiency levels
- [ ] At least one practice exercise matching a competency/level to a concrete behavioral anchor
- [ ] Opens with a callback to Chapter 3
- [ ] `Module 7/src/content/chapters.ts` registers Chapter 4 after Chapter 3
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter3.ts` — read all three for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter3.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 6/` left completely untouched
