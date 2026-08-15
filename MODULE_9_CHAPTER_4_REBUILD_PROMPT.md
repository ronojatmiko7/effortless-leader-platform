# Build Brief: Module 9 — Chapter 4 ("Data, Keamanan, dan Kepercayaan Tim")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 9/` is an existing React micro-learning card-deck app, sibling to `Module 1/`-`Module 8/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-3 already exist (`Module 9/src/content/chapter1.ts` through `chapter3.ts`).

**Read all three existing chapters in full before writing anything** — match their register exactly, and this chapter continues directly from Chapter 3's closing line.

**This is the closing chapter of Hari 1 (Bab 1-4).** It's the last piece of foundation before the reader starts actually designing their AI workflow in Bab 5.

**Keep every mention of Claude for Business at the capability/judgment level** — what a business-grade AI account's access controls give an organization, not specific settings screens or exact feature names that will go stale. Do not invent specific compliance certifications or claims not already grounded in this brief.

**This prompt covers Chapter 4 only.**

Full 8-chapter syllabus reference: `MODULE_9_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 4 is bolded)

1. "Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain — done
2. Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi — done
3. Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan — done
4. **Data, Keamanan, dan Kepercayaan Tim** ← this chapter
5. Merancang Alur Kerja AI Pertama Anda dengan Claude for Business
6. Menjalankan & Melatih Tim Memakai AI di Lapangan
7. Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata
8. Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 4 objective

By the end of this chapter, the reader should have simple, usable answers to two questions before rolling out any AI workflow: what data is and isn't safe to put into an AI tool, and what's actually making their team hesitant or resistant to using it. Most CEOs jump straight to Chapter 5's workflow design without ever naming their own team's fear directly — this chapter forces that naming first, because an unnamed fear is what quietly kills adoption in Chapters 6-7 later.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open with concrete friction: seorang staf tanpa sadar copy-paste data pelanggan lengkap (nomor telepon, alamat, riwayat transaksi) ke akun AI pribadi gratisan buat "biar cepat," tanpa ada yang pernah bilang itu boleh atau nggak boleh; atau sebaliknya, tim jadi terlalu takut sampai nggak berani pakai AI sama sekali buat hal yang sebenarnya aman, karena nggak ada batasan jelas yang pernah dijelaskan.
- Basic, plain-language data rules (not a legal/compliance deep-dive — a working starting point): data pelanggan yang sensitif (identitas lengkap, data keuangan pribadi, data kesehatan) sebaiknya nggak dimasukkan mentah-mentah ke alat AI kecuali lewat akun bisnis yang kontrolnya jelas; data internal umum (draft dokumen, ringkasan laporan, ide konten) umumnya lebih aman dipakai; kalau ragu, tanya: "kalau data ini bocor atau disalahgunakan, seberapa besar masalahnya buat pelanggan/bisnis?" — itu jadi penanda cepat.
- Why an organization-level account (a Team/Enterprise-style Claude for Business setup) matters here versus everyone using personal free accounts: kontrol siapa boleh akses apa ada di satu tempat, bukan tersebar di puluhan akun pribadi yang nggak bisa dipantau, dan ada tanggung jawab yang jelas kalau ada yang salah pakai.
- **The most-skipped part: naming the team's real fear.** Banyak CEO langsung ke rollout tanpa pernah bertanya langsung ke tim "apa yang bikin kalian ragu soal AI ini?" Common fears to name explicitly: takut digantikan/dianggap nggak perlu lagi, takut dianggap "malas" kalau ketahuan pakai AI, takut hasilnya salah dan mereka yang disalahkan, atau sekadar nggak pede sama teknologi baru. Padahal ketakutan itu nggak hilang cuma karena nggak pernah dibahas terbuka — ketakutan yang didiamkan itu yang bikin tim diam-diam menghindari atau mensabotase alat barunya nanti.
- A direct answer CEOs can actually say to the team, adapted per fear named above: AI ini bukan pengganti orang, ini alat buat mempercepat bagian pekerjaan yang paling repetitif, supaya orangnya bisa fokus ke bagian yang butuh penilaian manusia — dan hasil AI tetap harus dicek manusia sebelum dipakai, bukan dipercaya buta.
- Reflection: reader menuliskan ketakutan terbesar yang menurut mereka akan (atau sudah) muncul dari tim mereka sendiri soal AI, dan satu kalimat jawaban jujur yang akan mereka sampaikan langsung ke tim.
- A short worksheet/checklist: reader menetapkan 1-2 batasan data sederhana untuk kasus pakai yang sudah dipilih di Bab 3 (misalnya "boleh masukkan draft teks umum, jangan masukkan data pelanggan lengkap").
- Close by tying Bab 1-4 together as one complete foundation (kuburan-awareness, peta level, kasus pakai terpilih, batasan data & kepercayaan tim) before moving into execution.
- Close with a clear turn toward Chapter 5: "Sekarang Anda sudah punya kasus pakai, batasan data, dan jawaban jujur buat tim Anda. Hari kedua kita mulai benar-benar merancang dan menjalankan alur kerjanya."

## 4. Workbook capture for this chapter

One `reflection` card — Module 9's workbook entry **"Entri Keempat."** Free-text prompt capturing: ketakutan terbesar tim yang diantisipasi, jawaban jujur yang akan disampaikan CEO ke tim, dan 1-2 batasan data sederhana untuk kasus pakai terpilih (2-3 short text inputs). Use the `reflection` card type — no new card types needed.

## 5. Voice & format

- Match `chapter1.ts` through `chapter3.ts`'s register exactly — read all three before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `worksheet`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10-20 cards total for this chapter.
- Create `Module 9/src/content/chapter4.ts` exporting `chapter4Cards: Card[]`. Register it in `Module 9/src/content/chapters.ts` (append after chapter 3, same shape).

## 6. Out of scope for this prompt

- Chapters 1-3, 5-8 content (Chapters 1-3 already exist, do not modify them)
- A full legal/compliance data policy — this chapter gives a plain-language starting point, not a legal document
- Designing the actual AI workflow — that's Chapter 5's job
- Any backend/save-to-server logic (frontend-only)
- `Module 1/`-`Module 8/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 9/src/content/chapter4.ts` has 10-20 cards covering data basics, the organization-account rationale, and explicit team-fear naming, including exactly one `reflection` card ("Entri Keempat")
- [ ] Opens with a callback to Chapter 3's closing line
- [ ] `Module 9/src/content/chapters.ts` registers Chapter 4 after Chapter 3
- [ ] Voice matches `chapter1.ts`-`chapter3.ts` — read all three for reference before writing
- [ ] `npm run dev` runs clean, no console errors
- [ ] `Module 9/src/content/chapter1.ts`-`chapter3.ts` and `Module 1/`-`Module 8/` left completely untouched
