# Build Brief: Module 9 — Chapter 2 ("Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 9/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`-`Module 8/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapter 1 already exists (`Module 9/src/content/chapter1.ts`).

**Read `Module 9/src/content/chapter1.ts` in full before writing anything** — match its register exactly, and this chapter opens by directly continuing Chapter 1's closing line about mapping the three levels of AI use.

**Keep every mention of Claude for Business at the capability/judgment level** — what a business-grade AI account gives an organization (centralized admin and access control, shared team workspaces for recurring work, automation across files and tasks), not specific buttons, menus, screenshots, or exact feature names that will go stale. Do not invent pricing or capabilities beyond what's described below.

**This prompt covers Chapter 2 only.**

Full 8-chapter syllabus reference: `MODULE_9_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 2 is bolded)

1. "Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain — done
2. **Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi** ← this chapter
3. Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan
4. Data, Keamanan, dan Kepercayaan Tim
5. Merancang Alur Kerja AI Pertama Anda dengan Claude for Business
6. Menjalankan & Melatih Tim Memakai AI di Lapangan
7. Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata
8. Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 2 objective

By the end of this chapter, the reader should be able to place their business honestly on a 3-level map of AI use and see that most SME businesses are stuck at Level 1 even when a few individuals inside them are enthusiastic users — and understand what actually changes between levels (not "more AI," but more shared context, control, and consistency). They should walk away knowing which level their business is really at today, not the level a hopeful CEO would like to claim.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 1's example the reader named (a solo AI experiment, successful or abandoned) and use it as the entry point: that's almost always a Level 1 story.
- **Level 1 — Chat Individu.** Satu orang, akun pribadi (sering gratisan), pakai AI buat tugas kecil sendiri — draft email, ringkas dokumen, cari ide. Nggak ada yang tahu itu terjadi selain orangnya sendiri. Berhenti begitu orangnya lupa, sibuk, atau resign. Sebagian besar bisnis SME, kalau jujur, ada di level ini — meski mungkin ada beberapa orang berbeda melakukannya secara terpisah tanpa saling tahu.
- **Level 2 — Alur Kerja Tim.** Satu kasus pakai berulang dipakai bersama oleh lebih dari satu orang, dengan konteks/instruksi yang konsisten (bukan tiap orang nebak-nebak caranya sendiri) — misalnya seluruh tim customer service pakai template prompt yang sama buat draft balasan. Mulai ada konsistensi, tapi biasanya masih belum ada kontrol akses atau catatan siapa pakai apa dari sisi manajemen.
- **Level 3 — Organisasi.** Akun bisnis (seperti Claude Team/Enterprise) dengan admin yang mengatur siapa boleh akses apa, ruang kerja bersama untuk pekerjaan berulang lintas tim, dan kemampuan mengotomasi pekerjaan yang melibatkan banyak file/tugas sekaligus (seperti Claude Cowork) — bukan cuma chat satu-satu. Ini level yang bikin AI beneran jadi bagian dari cara bisnis berjalan, bukan kebiasaan personal segelintir orang.
- A clear point: naik level bukan soal "pakai AI lebih banyak" — itu soal geser dari eksperimen personal ke sesuatu yang punya konteks bersama, kontrol, dan konsistensi. Bisnis bisa saja punya banyak orang pakai AI tiap hari dan tetap ada di Level 1, kalau semuanya terpisah-pisah tanpa koordinasi.
- Self-assessment: reader menilai jujur bisnisnya sekarang ada di level mana, dan kenapa (bukan level yang mereka harap, tapi level yang benar-benar terjadi hari ini).
- Preview Bab 3-8: Bab 3-4 menyiapkan fondasi (memilih kasus pakai yang tepat, batasan data/kepercayaan tim) sebelum naik level; Bab 5-8 benar-benar menjalankan satu alur kerja nyata dan menginstalnya sebagai kebiasaan — jalan paling realistis dari Level 1 ke Level 2, bukan lompat langsung ke Level 3 tanpa fondasi.
- Close with a clear turn toward Chapter 3: "Sekarang Anda sudah tahu ada di level mana. Bab berikutnya bantu Anda memilih kasus pakai yang benar-benar layak jadi langkah pertama naik level — bukan sekadar yang paling menarik perhatian."

## 4. Workbook capture for this chapter

One `reflection` card — Module 9's workbook entry **"Entri Kedua."** Short free-text prompt capturing: level AI mereka sekarang (1/2/3) dan alasan singkatnya (1-2 short text inputs). Use the `reflection` card type — no new card types needed.

## 5. Voice & format

- Match `chapter1.ts`'s register exactly — read it before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `sort-list`, `reflection`) — mix them, don't chain `info` cards back to back. A `sort-list` or `multiple-choice` card works well for the 3-level self-assessment.
- Target 10-20 cards total for this chapter.
- Create `Module 9/src/content/chapter2.ts` exporting `chapter2Cards: Card[]`. Register it in `Module 9/src/content/chapters.ts` (append after chapter 1, same shape).

## 6. Out of scope for this prompt

- Chapters 1, 3-8 content (Chapter 1 already exists, do not modify it)
- Detailed product walkthroughs of specific Claude for Business features/screens — stay at the capability level
- Choosing the reader's actual first use case — that's Chapter 3's job
- Any backend/save-to-server logic (frontend-only)
- `Module 1/`-`Module 8/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 9/src/content/chapter2.ts` has 10-20 cards covering the 3-level map and honest self-assessment, including exactly one `reflection` card ("Entri Kedua")
- [ ] Opens with a callback to Chapter 1's named example
- [ ] `Module 9/src/content/chapters.ts` registers Chapter 2 after Chapter 1
- [ ] Voice matches `chapter1.ts` — read it for reference before writing
- [ ] `npm run dev` runs clean, no console errors
- [ ] `Module 9/src/content/chapter1.ts` and `Module 1/`-`Module 8/` left completely untouched
