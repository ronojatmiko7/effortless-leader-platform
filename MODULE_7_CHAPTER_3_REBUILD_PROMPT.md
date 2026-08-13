# Build Brief: Module 7 — Chapter 3 ("Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 7/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 6/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–2 already exist (`Module 7/src/content/chapter1.ts`–`chapter2.ts`) — read both before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This chapter opens Tahap 1 of the job architecture in earnest: building the actual competency model.

**This prompt covers Chapter 3 only.** Chapters 4–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_7_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 3 is bolded)

1. Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok" — done
2. Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti — done
3. **Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan** ← this chapter
4. Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur
5. Mendiagnosis Rekrutmen Ad-Hoc — Kenapa "Kelihatannya Cocok" Bukan Metode Seleksi
6. Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi
7. Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran
8. Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap

## 3. Chapter 3 objective

The reader now knows Tahap 1 (model kompetensi) is where their architecture is thinnest. This chapter teaches them to actually build one — three layers, derived from what the role genuinely needs to succeed, not copy-pasted from a generic HR template.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapters 1–2 — reader sudah punya satu peran dan tahu Tahap 1 yang mau dibangun. Sekarang: cara membangunnya.
- Common mistake: nyomot daftar kompetensi generik dari internet atau template HR dan ditempel begitu saja tanpa disesuaikan — hasilnya kompetensi yang kedengaran bagus di kertas tapi nggak nyambung sama apa yang peran itu beneran butuhkan.
- The starting question that actually works: bukan "kompetensi apa yang biasa dipakai buat peran ini," tapi **"apa yang harus BISA dilakukan orang ini supaya peran ini berhasil?"** — diturunkan dari hasil nyata yang diharapkan peran itu, bukan dari template.
- **Lapis 1 — Kompetensi Inti.** Kompetensi yang dibutuhkan semua peran di bisnis, apa pun levelnya atau fungsinya — misalnya integritas, komunikasi dasar, kemampuan menyelesaikan masalah sehari-hari. Sama untuk semua orang, tapi tingkat kemahirannya bisa beda (dibahas Bab 4).
- **Lapis 2 — Kompetensi Fungsional.** Kompetensi teknis/spesifik yang dibutuhkan peran tertentu untuk berhasil — misalnya customer service butuh negosiasi dan product knowledge, staf keuangan butuh ketelitian pencatatan dan kepatuhan pajak, sales butuh prospecting dan closing. Beda-beda tiap fungsi/peran.
- **Lapis 3 — Kompetensi Kepemimpinan.** Hanya relevan untuk peran yang mengelola orang lain (langsung atau tidak langsung) — delegasi, memberi umpan balik, pengambilan keputusan di bawah tekanan. Skalanya naik sesuai seniority peran; peran non-manajerial boleh nggak punya lapis ini sama sekali.
- Teknik menurunkan tiap lapis: mulai dari hasil kerja nyata yang diharapkan peran itu, lalu tanya "kompetensi apa yang bikin orang bisa menghasilkan itu secara konsisten?" — bukan mulai dari daftar kompetensi lalu dipaksa-paskan ke peran.
- A worked example: build a full 3-layer competency model (Inti/Fungsional/Kepemimpinan) for one sample role, step by step from its real expected outcomes.
- Close with a clear turn toward Chapter 4: "Model kompetensinya sekarang ada. Tapi 'komunikasi yang baik' masih kedengaran kabur — bab berikutnya mengubahnya jadi standar yang bisa diukur."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Ketiga."** The reader drafts a first-pass 3-layer competency model for the role they named in Chapter 1. E.g. 3 short text inputs: "Kompetensi Inti apa yang dibutuhkan peran ini?", "Kompetensi Fungsional apa yang paling krusial untuk peran ini?", "Kalau peran ini mengelola orang lain, Kompetensi Kepemimpinan apa yang relevan? (kalau nggak relevan, tulis 'tidak relevan')."

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter2.ts`'s register exactly — read both before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely.
- Target 10–20 cards total for this chapter.
- Create `Module 7/src/content/chapter3.ts` exporting `chapter3Cards: Card[]`. Register it in `Module 7/src/content/chapters.ts` (append after chapter 2, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 4–8 content
- Tingkat kemahiran / proficiency levels (Chapter 4's job — this chapter only builds the three layers of competency, not the measurable levels within each)
- Diagnosing or fixing recruitment (Chapters 5-6)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 6/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 7/src/content/chapter3.ts` has 10–20 cards covering the 3-layer competency model (Inti/Fungsional/Kepemimpinan), the technique for deriving competencies from real role outcomes, and a worked example, including exactly one `reflection` card labeled Entri Ketiga drafting a real 3-layer competency model
- [ ] Opens with a callback to Chapters 1–2
- [ ] `Module 7/src/content/chapters.ts` registers Chapter 3 after Chapter 2
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter2.ts` — read both for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter2.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 6/` left completely untouched
