# Build Brief: Module 7 — Chapter 6 ("Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 7/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 6/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–5 already exist (`Module 7/src/content/chapter1.ts`–`chapter5.ts`) — read all five before writing anything, for voice, for the `reflection` card type / `useWorkbookStore` persistence pattern, and specifically for the reader's Chapter 5 diagnosis and Chapters 3-4's competency model / proficiency levels, which this chapter builds directly on.

**This prompt covers Chapter 6 only.** Chapters 7–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_7_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 6 is bolded)

1. Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok" — done
2. Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti — done
3. Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan — done
4. Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur — done
5. Mendiagnosis Rekrutmen Ad-Hoc — Kenapa "Kelihatannya Cocok" Bukan Metode Seleksi — done
6. **Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi** ← this chapter
7. Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran
8. Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap

## 3. Chapter 6 objective

The reader now knows exactly which lens explains their ad-hoc recruitment (Chapter 5). This chapter gives the actual tool: Behavioral Event Interviewing questions and a scoring rubric, both derived directly from the competency model and proficiency levels built in Chapters 3-4 — so the fix is specific to their diagnosis, not a generic "ask better interview questions" lecture.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 5 — reader tahu lensa mana yang dominan di kasus rekrutmen mereka. Sekarang: alat konkret buat memperbaikinya.
- Introduce **Behavioral Event Interviewing (BEI)**: menggali contoh perilaku nyata di masa lalu, bukan jawaban hipotetis ("apa yang akan Anda lakukan kalau...") atau pertanyaan generik ("apa kelebihan Anda"). Premisnya: perilaku nyata di masa lalu adalah prediktor terbaik perilaku di masa depan, karena kandidat nggak bisa mengarang pengalaman yang belum pernah mereka jalani.
- Struktur pertanyaan BEI: minta kandidat cerita satu situasi nyata terkait kompetensi tertentu, lalu gali dengan pertanyaan lanjutan sampai dapat gambaran lengkap — situasi apa yang dihadapi, apa yang kandidat lakukan secara spesifik (bukan "tim kami melakukan..."), dan apa hasilnya. Kalau jawabannya masih umum atau hipotetis, gali ulang: "boleh cerita contoh nyata yang benar-benar Anda alami?"
- Teknik menyusun pertanyaan BEI dari model kompetensi (Bab 3): untuk tiap kompetensi kunci, rancang satu pertanyaan pembuka yang minta contoh nyata, plus 1-2 pertanyaan lanjutan buat menggali detail.
- **Rubrik seleksi**: skor 1-4 untuk tiap kompetensi, dipetakan langsung ke tingkat kemahiran dari Bab 4 (skor 1 = di bawah level Dasar yang dibutuhkan, skor 4 = mencapai atau melampaui level yang dibutuhkan) — dengan itu, penilaian antar kandidat jadi bisa dibandingkan apple-to-apple (langsung membereskan Lensa 3 dari Bab 5 kalau itu yang dominan).
- Praktik panel: tiap interviewer menilai sendiri-sendiri dengan rubrik yang sama SEBELUM berdiskusi bareng — supaya nggak ada satu suara dominan yang menggeser penilaian orang lain sebelum semua orang benar-benar menilai independen.
- A worked example: build a small BEI question bank (2-3 questions with follow-up probes) plus a scoring rubric for the anchor role from Chapter 5, tied directly to that role's competencies and proficiency levels.
- Close with a clear turn toward Chapter 7: "Alat seleksinya sekarang ada. Bab berikutnya menyatukan semuanya — model kompetensi, tingkat kemahiran, dan alat seleksi ini — jadi satu paket arsitektur jabatan yang lengkap untuk peran Anda."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keenam."** The reader drafts BEI questions and scoring criteria for their anchor role's key competencies. E.g. 2 short text inputs: "Tulis satu pertanyaan BEI (minta contoh nyata) untuk kompetensi paling krusial di peran ini" and "Seperti apa jawaban yang akan dapat skor 4 (di atas standar) vs skor 1 (jauh di bawah standar) untuk kompetensi itu?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter5.ts`'s register exactly — read all five before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely.
- Target 10–20 cards total for this chapter.
- Create `Module 7/src/content/chapter6.ts` exporting `chapter6Cards: Card[]`. Register it in `Module 7/src/content/chapters.ts` (append after chapter 5, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 7–8 content
- Combining the screening tool with the full competency model into one integrated profile (Chapter 7's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the BEI/rubric draft is persisted so Chapter 7 can build on it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 6/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 7/src/content/chapter6.ts` has 10–20 cards covering Behavioral Event Interviewing, how to derive BEI questions from the competency model, the 1-4 scoring rubric tied to proficiency levels, panel-scoring practice, and a worked example, including exactly one `reflection` card labeled Entri Keenam drafting real BEI questions and scoring criteria
- [ ] Opens with a callback to Chapter 5
- [ ] `Module 7/src/content/chapters.ts` registers Chapter 6 after Chapter 5
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter5.ts` — read all five for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter5.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 6/` left completely untouched
