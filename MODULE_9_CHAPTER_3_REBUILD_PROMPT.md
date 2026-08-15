# Build Brief: Module 9 — Chapter 3 ("Memilih Kasus Pakai yang Tepat — Kenapa 'AI untuk Semua Hal' Gagal Duluan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 9/` is an existing React micro-learning card-deck app, sibling to `Module 1/`-`Module 8/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-2 already exist (`Module 9/src/content/chapter1.ts`, `chapter2.ts`).

**Read both existing chapters in full before writing anything** — match their register exactly, and this chapter continues directly from Chapter 2's closing line about choosing a first use case.

**This prompt covers Chapter 3 only.**

Full 8-chapter syllabus reference: `MODULE_9_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 3 is bolded)

1. "Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain — done
2. Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi — done
3. **Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan** ← this chapter
4. Data, Keamanan, dan Kepercayaan Tim
5. Merancang Alur Kerja AI Pertama Anda dengan Claude for Business
6. Menjalankan & Melatih Tim Memakai AI di Lapangan
7. Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata
8. Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 3 objective

By the end of this chapter, the reader should have a working filter for judging any candidate AI use case in their business, and 2-3 real candidates from their own operations scored against it — not a hypothetical exercise, but named real workflows. They should walk away understanding why trying to apply AI everywhere at once, or starting with the highest-stakes/hardest-to-verify decision in the business, both fail before they start.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open with the "AI untuk semua hal" trap: setelah tim atau CEO kepincut sama demo AI yang keren, godaan langsungnya adalah "pasang AI ke semua proses sekaligus" — hasilnya justru semua alur kerja dapat sedikit AI setengah-setengah, nggak ada satupun yang benar-benar matang, dan sulit menunjukkan hasil konkret ke siapapun.
- A second trap, sama bahayanya: memilih kasus pakai yang paling high-stakes duluan — misalnya keputusan finansial besar atau komunikasi ke pelanggan penting — padahal itu justru yang paling susah diverifikasi hasilnya dan paling mahal kalau AI-nya salah. Kasus pakai pertama harus yang murah untuk dicoba dan murah untuk salah, bukan yang paling dramatis.
- Introduce the 3-question filter for a candidate use case: (1) **Seberapa sering berulang** — sekali setahun nggak sepadan disiapkan alur kerja AI-nya, tapi harian/mingguan sangat sepadan; (2) **Seberapa mahal/lama kalau dikerjakan manual** — waktu, tenaga, atau biaya yang terbuang tiap kali pekerjaan itu dilakukan secara manual; (3) **Seberapa mudah hasilnya dicek benar-salah oleh manusia** — kasus pakai bagus punya cara jelas seseorang bisa membaca hasil AI dan langsung tahu itu benar/salah/perlu diperbaiki, bukan hasil yang butuh riset ulang penuh untuk diverifikasi.
- Give 4-6 concrete example use cases and score them briefly against the filter as worked examples: draft balasan customer service (sering, lumayan mahal manual, gampang dicek), ringkasan laporan mingguan (sering, memakan waktu, gampang dicek terhadap data asli), draft dokumentasi/SOP awal (jarang tapi mahal manual, gampang dicek oleh yang paham prosesnya), riset kompetitor awal (sedang, mahal manual, perlu verifikasi tambahan — beri catatan ini butuh kehati-hatian ekstra), draft konten marketing (sering, lumayan mahal manual, gampang dicek oleh yang paham brand), keputusan finansial besar (jarang tapi sangat mahal kalau salah, susah diverifikasi cepat — beri catatan ini BUKAN kandidat bagus untuk kasus pakai pertama).
- A worksheet/reflection exercise: reader menuliskan 2-3 kasus pakai nyata dari bisnisnya sendiri dan menilai masing-masing terhadap tiga pertanyaan filter di atas.
- Close by asking the reader to circle (mentally or via the reflection) the single strongest candidate among what they listed — this becomes the anchor case for Chapters 5-7.
- Close with a clear turn toward Chapter 4: "Sekarang Anda sudah punya kandidat kasus pakai pertama. Sebelum kita rancang alur kerjanya, ada satu hal yang harus beres dulu: data apa yang boleh masuk ke AI, dan bagaimana caranya tim Anda nggak takut sama alat ini."

## 4. Workbook capture for this chapter

One `reflection` card — Module 9's workbook entry **"Entri Ketiga."** Free-text prompt capturing the reader's 2-3 candidate use cases and their filter scores, and which one stood out as strongest (2-3 short text inputs — not a full form). Use the `reflection` card type — no new card types needed.

## 5. Voice & format

- Match `chapter1.ts` and `chapter2.ts`'s register exactly — read both before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `sort-list`, `worksheet`, `reflection`) — mix them, don't chain `info` cards back to back. A `sort-list` card works well for ranking the worked examples by strength as a first use case.
- Target 10-20 cards total for this chapter.
- Create `Module 9/src/content/chapter3.ts` exporting `chapter3Cards: Card[]`. Register it in `Module 9/src/content/chapters.ts` (append after chapter 2, same shape).

## 6. Out of scope for this prompt

- Chapters 1-2, 4-8 content (Chapters 1-2 already exist, do not modify them)
- Data/security policy detail and team trust-building — that's Chapter 4's job
- Designing the actual workflow around the chosen use case — that's Chapter 5's job
- Any backend/save-to-server logic (frontend-only)
- `Module 1/`-`Module 8/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 9/src/content/chapter3.ts` has 10-20 cards covering the two traps, the 3-question filter, and 4-6 worked examples, including exactly one `reflection` card ("Entri Ketiga")
- [ ] Opens with a callback to Chapter 2's closing line about choosing a first use case
- [ ] `Module 9/src/content/chapters.ts` registers Chapter 3 after Chapter 2
- [ ] Voice matches `chapter1.ts`/`chapter2.ts` — read both for reference before writing
- [ ] `npm run dev` runs clean, no console errors
- [ ] `Module 9/src/content/chapter1.ts`/`chapter2.ts` and `Module 1/`-`Module 8/` left completely untouched
