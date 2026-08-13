# Build Brief: Module 7 — Chapter 2 ("Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 7/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 6/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapter 1 already exists (`Module 7/src/content/chapter1.ts`) — read it before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse it; don't recreate it.

**This prompt covers Chapter 2 only.** Chapters 3–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_7_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 2 is bolded)

1. Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok" — done
2. **Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti** ← this chapter
3. Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan
4. Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur
5. Mendiagnosis Rekrutmen Ad-Hoc — Kenapa "Kelihatannya Cocok" Bukan Metode Seleksi
6. Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi
7. Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran
8. Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap

## 3. Chapter 2 objective

The reader ended Chapter 1 having named one role with an unclear standard or a past mismatch, but without a map of the full architecture or a sense of where it typically breaks. This chapter gives the 2-stage job architecture so the reader can place their business precisely and see the destination the rest of the module builds toward.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 1 — reader sudah punya satu peran konkret. Sekarang: peta lengkap buat melihat arsitekturnya bolong di mana.
- **Tahap 1 — Model Kompetensi.** Mendefinisikan apa artinya "bagus" untuk sebuah peran lewat tiga lapis kompetensi (Inti, Fungsional, Kepemimpinan) plus tingkat kemahiran yang bisa diukur — bukan cuma daftar tugas.
- **Tahap 2 — Rekrutmen Berbasis Bukti.** Alat penyaringan (Behavioral Event Interviewing, rubrik skor) yang diturunkan langsung dari model kompetensi Tahap 1, dipakai konsisten untuk menguji dan membandingkan kandidat.
- Kenapa kebanyakan bisnis SME melompat langsung ke Tahap 2 (atau bahkan langsung wawancara tanpa alat apa pun) tanpa pernah menyelesaikan Tahap 1 — posisi kosong kerasa mendesak, sementara bangun model kompetensi kerasa kayak proyek HR besar yang gampang ditunda "nanti aja."
- Kedua tahap saling menyambung, bukan berdiri sendiri: kalau Tahap 1 (model kompetensi) nggak ada, Tahap 2 nggak punya apa pun yang solid buat diuji — interview-nya bisa kelihatan terstruktur (banyak pertanyaan, checklist rapi) tapi ujung-ujungnya tetap balik ke gut feel karena nggak ada kriteria yang jelas dari awal.
- Preview struktur sisa modul mengikuti dua tahap ini: Bab 3 fokus Tahap 1 bagian model kompetensi, Bab 4 fokus Tahap 1 bagian tingkat kemahiran, Bab 5-6 fokus Tahap 2 (diagnosis lalu alat seleksi), Bab 7 menyatukan keduanya jadi satu paket arsitektur jabatan untuk satu peran nyata.
- A self-assessment exercise: reader menilai bisnisnya di tiap dua tahap — ada dan dipakai konsisten, ada tapi nggak konsisten, atau nggak ada sama sekali.
- A short scenario-matching exercise: given several short hiring/promotion scenarios, reader classifies each as masalah Tahap 1 atau Tahap 2.
- Close with a clear turn toward Chapter 3: "Sekarang Anda tahu tahap mana yang paling bolong. Bab 3 mulai dari Tahap 1 — cara membangun model kompetensi yang beneran menangkap apa yang dibutuhkan peran Anda untuk berhasil."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kedua."** The reader records their overall self-assessment across the 2-stage architecture and which stage feels most urgent to fix. E.g. 2 short text inputs: "Dari dua tahap — model kompetensi dan rekrutmen berbasis bukti — mana yang paling nggak jalan di bisnis Anda sekarang, dan kenapa?" and "Kalau Anda bisa benerin satu tahap dulu, mana yang paling mendesak?"

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1's scaffold.

## 5. Voice & format

- Match `Module 7/src/content/chapter1.ts`'s register exactly — read it before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the scenario-matching exercise should land through a `multiple-choice` or `sort-list` exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 7/src/content/chapter2.ts` exporting `chapter2Cards: Card[]`. Register it in `Module 7/src/content/chapters.ts` (append after chapter 1, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 3–8 content
- Actually teaching how to build a competency model (Chapter 3's job — this chapter only introduces the 2-stage map and has the reader do a light self-assessment)
- Designing tingkat kemahiran (Chapter 4) or the BEI/rubrik alat seleksi (Chapters 5-6)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 6/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 7/src/content/chapter2.ts` has 10–20 cards covering the 2-stage job architecture, why most SMEs skip Tahap 1, and a scenario-matching exercise, including exactly one `reflection` card labeled Entri Kedua
- [ ] At least one classification/scenario exercise mapping situations to one of the 2 stages
- [ ] Opens with a callback to Chapter 1
- [ ] `Module 7/src/content/chapters.ts` registers Chapter 2 after Chapter 1
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` — read it for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 6/` left completely untouched
