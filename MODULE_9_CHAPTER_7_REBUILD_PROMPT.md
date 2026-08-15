# Build Brief: Module 9 — Chapter 7 ("Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 9/` is an existing React micro-learning card-deck app, sibling to `Module 1/`-`Module 8/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-6 already exist (`Module 9/src/content/chapter1.ts` through `chapter6.ts`).

**Read all six existing chapters in full before writing anything, especially Chapters 5 and 6** — this chapter compiles the use case, workflow design, and field-execution notes from those two chapters into one finished package, so you need their exact content and field structure to reference correctly. Mirror how `Module 7/src/content/chapter7.ts` and `Module 8/src/content/chapter7.ts` build their workshop chapters as a compilation of the two chapters before them, using `finding-review` for the confidence/quality score.

**This prompt covers Chapter 7 only.**

Full 8-chapter syllabus reference: `MODULE_9_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 7 is bolded)

1. "Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain — done
2. Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi — done
3. Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan — done
4. Data, Keamanan, dan Kepercayaan Tim — done
5. Merancang Alur Kerja AI Pertama Anda dengan Claude for Business — done
6. Menjalankan & Melatih Tim Memakai AI di Lapangan — done
7. **Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata** ← this chapter
8. Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 7 objective

This is a workshop/practice session, not new teaching content. The reader takes everything from Chapters 3-6 — the chosen use case, the data boundary, the workflow design, and the real field-execution experience — and assembles it into one complete, coherent AI adoption package for that single workflow: ready to keep running as-is, or to hand to someone else in the business to own.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by calling back to Chapters 3-6** — the reader has all the pieces already scattered across four chapters; this session's job is putting them together into one package, not creating anything new.
- **Guided recap/assembly, piece by piece:** kasus pakai terpilih dan alasannya (Bab 3), batasan data yang berlaku (Bab 4), rancangan alur kerja — mode pemakaian, siapa pakai, instruksi dasar, langkah cek manusia, target keberhasilan (Bab 5), dan progres nyata di lapangan — apa yang berjalan baik, kesalahan yang ditemukan dan ditangani, sinyal bahaya kalau ada (Bab 6).
- **A confidence/quality score** via a `finding-review`-style card: reader menilai seberapa yakin mereka paket adopsi AI ini sudah cukup matang untuk terus dijalankan tanpa pengawasan ketat mereka sendiri (skala sederhana), plus justifikasi singkat kenapa.
- **A short gap-check**: apa satu hal yang masih paling lemah atau belum jelas di paket ini (misalnya: langkah cek manusia belum konsisten dijalankan, atau target keberhasilan belum benar-benar diukur) — dijawab jujur, bukan basa-basi.
- A reflection compiling the finished package into one integrated summary in the reader's own words — nama kasus pakai, cara kerja alur AI-nya hari ini, dan satu hal yang paling perlu dijaga ke depan.
- Close with a clear turn toward Chapter 8: "Sekarang Anda sudah punya paket adopsi AI yang lengkap untuk satu alur kerja nyata. Bab terakhir soal menjaga ini bertahan jadi kebiasaan — dan kapan Anda boleh mulai memperluas ke alur kerja lain."

## 4. Workbook capture for this chapter

Two entries (same pattern as `Module 7/src/content/chapter7.ts` and `Module 8/src/content/chapter7.ts`'s workshop chapters):

1. A `finding-review`-style card — this is workbook entry **"Entri Ketujuh."** Reader scores their confidence in the assembled AI adoption package (simple scale) plus a short justification field. Use the existing `finding-review` card type/pattern exactly as earlier modules use it — no new card type needed.
2. One `reflection` card — this is workbook entry **"Entri Kedelapan."** Free-text prompt capturing the integrated package summary described above (2-3 short text inputs, including the one weakest/least-clear point from the gap-check).

## 5. Voice & format

- Match `chapter1.ts` through `chapter6.ts`'s register exactly — read all six before writing.
- Reuse existing card types (`info`, `finding-review`, `reflection`) for this workshop chapter — no new card types.
- Target 10-20 cards total for this chapter.
- Create `Module 9/src/content/chapter7.ts` exporting `chapter7Cards: Card[]`. Register it in `Module 9/src/content/chapters.ts` (append after chapter 6, same shape).

## 6. Out of scope for this prompt

- Chapters 1-6, 8 content (Chapters 1-6 already exist, do not modify them)
- New teaching content not already covered in Chapters 3-6 — this chapter compiles, it doesn't introduce new material
- The final downloadable report — that's Chapter 8's `report` card
- Any backend/save-to-server logic (frontend-only)
- `Module 1/`-`Module 8/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 9/src/content/chapter7.ts` has 10-20 cards compiling Chapters 3-6 into one package, including exactly one `finding-review` card ("Entri Ketujuh") and one `reflection` card ("Entri Kedelapan")
- [ ] Opens with a callback to Chapters 3-6, introduces no genuinely new teaching content
- [ ] `Module 9/src/content/chapters.ts` registers Chapter 7 after Chapter 6
- [ ] Voice matches `chapter1.ts`-`chapter6.ts` — read all six for reference before writing
- [ ] `npm run dev` runs clean, no console errors
- [ ] `Module 9/src/content/chapter1.ts`-`chapter6.ts` and `Module 1/`-`Module 8/` left completely untouched
