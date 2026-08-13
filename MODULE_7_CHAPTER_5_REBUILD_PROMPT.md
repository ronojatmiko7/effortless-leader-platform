# Build Brief: Module 7 — Chapter 5 ("Mendiagnosis Rekrutmen Ad-Hoc — Kenapa 'Kelihatannya Cocok' Bukan Metode Seleksi")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 7/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 6/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–4 already exist (`Module 7/src/content/chapter1.ts`–`chapter4.ts`) — read all four before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This chapter opens Module 7's second act (Hari 2). Chapters 1-4 built Tahap 1 of the job architecture (model kompetensi, tingkat kemahiran). This chapter and the next two turn to Tahap 2 (rekrutmen berbasis bukti) — starting with diagnosis, since designing a screening tool before diagnosing what's actually broken in the current process risks fixing the wrong thing.

**This prompt covers Chapter 5 only.** Chapters 6–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_7_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 5 is bolded)

1. Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok" — done
2. Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti — done
3. Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan — done
4. Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur — done
5. **Mendiagnosis Rekrutmen Ad-Hoc — Kenapa "Kelihatannya Cocok" Bukan Metode Seleksi** ← this chapter
6. Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi
7. Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran
8. Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap

## 3. Chapter 5 objective

Even with a clear competency model and proficiency levels (Chapters 3-4), the recruitment process itself can still be the broken piece. This chapter gives a real diagnostic method — three distinct lenses — so Chapter 6 designs the right screening tool instead of just adding more interview questions on top of the same ad-hoc process.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 1 (and Chapters 3-4 conditionally) — reader mungkin sudah punya model kompetensi dan tingkat kemahiran yang jelas, tapi proses rekrutmennya sendiri belum tentu menguji itu; kalau reader belum sempat membangun model kompetensi lengkap dari Bab 3-4, bab ini tetap jalan untuk posisi apa pun yang sedang atau akan direkrut reader sekarang.
- Kesalahan umum: begitu satu hire ternyata salah, langsung menyalahkan kandidatnya ("orangnya emang kurang bagus" atau "wawancaranya bohong") tanpa pernah mendiagnosis prosesnya sendiri dulu.
- **Lensa 1 — Kriteria Nggak Pernah Didefinisikan.** Nggak ada kompetensi atau kriteria spesifik yang disepakati sebelum interview dimulai — kalau ini akar masalahnya, balik ke Bab 3-4: belum ada standar yang jelas buat diuji sama sekali.
- **Lensa 2 — Interview Nggak Menguji Kriteria yang Ada.** Kriteria udah ada di kertas, tapi pertanyaan interview-nya generik ("ceritakan tentang diri Anda," "kenapa mau kerja di sini," "apa kelebihan dan kekurangan Anda") yang nggak benar-benar menggali bukti bahwa kandidat punya kompetensi yang dibutuhkan.
- **Lensa 3 — Penilaian Nggak Konsisten Dibanding-bandingkan.** Pertanyaannya udah relevan, tapi tiap interviewer punya standar penilaian sendiri-sendiri, nggak ada scoring yang bisa dibandingkan apple-to-apple antar kandidat — keputusan akhir tetap balik ke "vibe check" atau diskusi informal, meski proses di depannya kelihatan terstruktur.
- **Teknik diagnosis tiga pertanyaan** untuk tiap kasus rekrutmen: (1) ada kriteria kompetensi spesifik yang disepakati sebelum interview dimulai? (menunjuk Lensa 1 kalau nggak ada), (2) kalau ada, pertanyaan interview-nya benar-benar menggali bukti perilaku nyata terkait kriteria itu, atau masih pertanyaan generik? (menunjuk Lensa 2 kalau generik), (3) kalau pertanyaannya udah relevan, ada rubrik/skor yang dipakai konsisten untuk membandingkan kandidat, atau keputusan akhirnya tetap diskusi bebas? (menunjuk Lensa 3 kalau nggak konsisten).
- Catat: bisa lebih dari satu lensa berlaku sekaligus untuk kasus yang sama — kenali kombinasinya biar alat seleksi yang dirancang di Bab 6 tepat sasaran.
- A worked example diagnosing one hiring case step by step through the three questions, landing on which lens (or combination) is dominant.
- A classification/scenario exercise: given several short hiring-process scenarios, reader classifies each as masalah Lensa 1, 2, atau 3.
- Close with a clear turn toward Chapter 6: "Sekarang Anda tahu persis akar masalahnya. Bab 6 masuk ke cara merancang alat penyaringan berbasis kompetensi yang beneran menguji apa yang dibutuhkan — bukan checklist pertanyaan lagi."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kelima."** The reader names one specific role or hiring case and diagnoses the root cause — this becomes the anchor case for Chapters 6-7. E.g. 2 short text inputs: "Sebutkan satu posisi yang sedang atau baru saja direkrut, dan gambarkan singkat masalahnya (kalau ada)" and "Lensa mana yang paling dominan — kriteria nggak ada, interview nggak menguji kriteria, atau penilaian nggak konsisten — dan kenapa?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter4.ts`'s register exactly — read all four before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the three-lens classification should land through a `multiple-choice` scenario exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 7/src/content/chapter5.ts` exporting `chapter5Cards: Card[]`. Register it in `Module 7/src/content/chapters.ts` (append after chapter 4, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 6–8 content
- Designing the actual BEI questions or scoring rubric (Chapter 6's job — this chapter is diagnosis only)
- Combining diagnosis with the competency model into one unified profile (Chapter 7's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the diagnosis is persisted so Chapters 6-7 can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 6/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 7/src/content/chapter5.ts` has 10–20 cards covering the three diagnostic lenses (kriteria, interview, penilaian), the three-question diagnostic technique, and a worked example, including exactly one `reflection` card labeled Entri Kelima naming a real hiring case
- [ ] At least one classification/scenario exercise distinguishing the three lenses
- [ ] Opens with a callback to Chapter 1 (and conditionally Chapters 3-4)
- [ ] `Module 7/src/content/chapters.ts` registers Chapter 5 after Chapter 4
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter4.ts` — read all four for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter4.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 6/` left completely untouched
