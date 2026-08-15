# Build Brief: Module 9 — Chapter 5 ("Merancang Alur Kerja AI Pertama Anda dengan Claude for Business")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 9/` is an existing React micro-learning card-deck app, sibling to `Module 1/`-`Module 8/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-4 already exist (`Module 9/src/content/chapter1.ts` through `chapter4.ts`).

**Read all four existing chapters in full before writing anything** — match their register exactly. In particular, re-read Chapter 3's worked examples and Chapter 4's data boundaries; this chapter is where the reader locks in the actual use case those chapters set up.

**This is the opening chapter of Hari 2.** Starting here, keep the chapter anchored to one specific, real AI use case the reader names and locks in during this chapter — not abstract AI strategy. Chapters 6-7 build directly on whatever the reader locks in here.

**Keep every mention of Claude for Business at the capability/judgment level** — chat vs. a shared workspace for recurring work (Projects-style) vs. automation across files/tasks (Cowork-style) as three different *modes* of using the same business account, not a tutorial on specific screens or buttons. Do not invent specific feature names or steps beyond what's described below.

**This prompt covers Chapter 5 only.**

Full 8-chapter syllabus reference: `MODULE_9_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 5 is bolded)

1. "Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain — done
2. Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi — done
3. Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan — done
4. Data, Keamanan, dan Kepercayaan Tim — done
5. **Merancang Alur Kerja AI Pertama Anda dengan Claude for Business** ← this chapter
6. Menjalankan & Melatih Tim Memakai AI di Lapangan
7. Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata
8. Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 5 objective

By the end of this chapter, the reader has locked in one real, named AI use case from their business (drawn from Chapter 3's candidates) and designed a concrete first workflow around it: who uses it, which mode of Claude for Business fits it best, what the human check looks like before any output gets used for real, and a simple success target. This is the chapter where the module stops being theory and becomes one specific plan.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 3's candidate list and Chapter 4's data boundary — ask the reader to commit to ONE of those candidates as their first real AI workflow, the same one they'll carry through Chapters 6-7.
- **Three modes of using Claude for Business, explained at the capability level, not a UI tutorial:**
  - **Chat biasa** — cocok untuk tugas satu-kali atau tidak terlalu berulang, konteksnya dijelaskan ulang tiap kali dipakai. Titik masuk paling sederhana.
  - **Ruang kerja bersama untuk pekerjaan berulang** (gaya Projects) — cocok kalau kasus pakainya sering diulang oleh lebih dari satu orang dan butuh konteks yang sama tiap kali (contoh: template, panduan gaya bahasa, data referensi) supaya hasilnya konsisten, bukan tiap orang menjelaskan ulang dari nol.
  - **Automasi lintas file/tugas** (gaya Cowork) — cocok kalau kasus pakainya melibatkan banyak langkah atau banyak file sekaligus (contoh: mengumpulkan beberapa laporan jadi satu ringkasan, menyusun beberapa dokumen sekaligus) yang kalau dikerjakan manual makan waktu berjam-jam.
  - Guide the reader to match their locked-in use case to the mode that fits best — most SME first use cases (like the customer-service or weekly-report examples from Chapter 3) fit chat biasa or the shared-workspace mode; automasi lintas file cocok untuk kasus yang lebih kompleks, dan boleh jadi langkah kedua, bukan wajib dari awal.
- **Designing the workflow, concretely:**
  - Siapa yang akan pakai (satu orang dulu, atau langsung beberapa orang di tim yang sama)
  - Instruksi/konteks dasar apa yang perlu disiapkan supaya hasilnya konsisten (template, contoh hasil yang bagus, batasan dari Bab 4)
  - **Langkah cek manusia** — siapa yang membaca dan menyetujui hasil AI sebelum benar-benar dipakai (dikirim ke pelanggan, dimasukkan ke laporan, dll.) — ini WAJIB ada di setiap alur kerja AI pertama, nggak boleh langsung dipakai tanpa dicek.
  - Target keberhasilan sederhana yang bisa diukur dalam 2-4 minggu (contoh: "waktu bikin draft balasan customer service turun dari 15 menit jadi 5 menit, dan minimal 80% draft dipakai tanpa perlu diedit besar-besaran").
- A worksheet capturing the full workflow design: kasus pakai terkunci, mode pemakaian, siapa pakai, konteks/instruksi dasar, langkah cek manusia, target keberhasilan.
- Close with a clear turn toward Chapter 6: "Sekarang Anda punya rancangan alur kerja lengkap di atas kertas. Bab berikutnya soal menjalankannya beneran di lapangan — dan melatih tim Anda supaya nggak asal telan hasil AI mentah-mentah."

## 4. Workbook capture for this chapter

One `reflection` card — Module 9's workbook entry **"Entri Kelima."** Capture the locked-in use case, chosen mode of use, who uses it, the human-check step, and the success target (3-4 short text inputs — a slightly larger reflection than earlier chapters, matching how Modules 4-8's chapter-5-equivalent "lock in the real case" chapters are built). Use the `reflection` card type — no new card types needed.

## 5. Voice & format

- Match `chapter1.ts` through `chapter4.ts`'s register exactly — read all four before writing.
- Reuse existing card types (`info`, `multiple-choice`, `worksheet`, `reflection`) — mix them, don't chain `info` cards back to back. A `multiple-choice` card works well for matching the use case to its best mode of use.
- Target 10-20 cards total for this chapter.
- Create `Module 9/src/content/chapter5.ts` exporting `chapter5Cards: Card[]`. Register it in `Module 9/src/content/chapters.ts` (append after chapter 4, same shape).

## 6. Out of scope for this prompt

- Chapters 1-4, 6-8 content (Chapters 1-4 already exist, do not modify them)
- Actually running the workflow in the field — that's Chapter 6's job
- Detailed product walkthroughs of specific Claude for Business features/screens — stay at the capability/mode level, per section 1
- Any backend/save-to-server logic (frontend-only)
- `Module 1/`-`Module 8/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 9/src/content/chapter5.ts` has 10-20 cards covering the three modes of use and the concrete workflow design, including exactly one `reflection` card ("Entri Kelima") capturing the locked-in use case
- [ ] Opens with a callback to Chapter 3's candidates and Chapter 4's data boundary
- [ ] The human-check step is presented as mandatory, not optional
- [ ] `Module 9/src/content/chapters.ts` registers Chapter 5 after Chapter 4
- [ ] Voice matches `chapter1.ts`-`chapter4.ts` — read all four for reference before writing
- [ ] `npm run dev` runs clean, no console errors
- [ ] `Module 9/src/content/chapter1.ts`-`chapter4.ts` and `Module 1/`-`Module 8/` left completely untouched
