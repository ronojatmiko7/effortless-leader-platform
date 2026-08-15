# Build Brief: Module 9 — Chapter 6 ("Menjalankan & Melatih Tim Memakai AI di Lapangan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 9/` is an existing React micro-learning card-deck app, sibling to `Module 1/`-`Module 8/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-5 already exist (`Module 9/src/content/chapter1.ts` through `chapter5.ts`).

**Read all five existing chapters in full before writing anything** — match their register exactly, and stay anchored to the same one real use case the reader locked in during Chapter 5 (read Chapter 5's field descriptions to understand exactly what workflow shape you're writing field-execution guidance for).

**This prompt covers Chapter 6 only.**

Full 8-chapter syllabus reference: `MODULE_9_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 6 is bolded)

1. "Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain — done
2. Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi — done
3. Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan — done
4. Data, Keamanan, dan Kepercayaan Tim — done
5. Merancang Alur Kerja AI Pertama Anda dengan Claude for Business — done
6. **Menjalankan & Melatih Tim Memakai AI di Lapangan** ← this chapter
7. Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata
8. Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 6 objective

By the end of this chapter, the reader should know how to actually get their locked-in workflow running well in the field for the first 2-4 weeks: how to give AI clear instructions instead of vague ones, how to verify output before it's used (not blind trust, not paranoid distrust either), how to handle the inevitable "AI-nya salah" moment constructively, and how to catch early signs the team is quietly sliding back to fully manual work.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 5's locked-in workflow — sekarang saatnya benar-benar dijalankan, bukan cuma di atas kertas.
- **Instruksi jelas vs. ambigu.** Contrast a vague instruction ("bikinin balasan buat pelanggan ini") against a clear one that includes context, tone, and what "good" looks like ("bikinin draft balasan buat pelanggan yang komplain soal keterlambatan pengiriman, nada minta maaf tapi tetap profesional, sertakan solusi konkret, panjang maksimal 3 paragraf"). Instruksi yang jelas hampir selalu menghasilkan output yang jauh lebih dekat ke yang dibutuhkan di percobaan pertama. Give 2-3 before/after style pairs relevant to common SME use cases.
- **Verifikasi, bukan telan mentah-mentah, bukan juga curiga berlebihan.** Reinforce the mandatory human-check step from Chapter 5: siapa yang baca dulu, apa yang mereka cek (fakta benar, nada sesuai, nggak ada informasi yang dikarang/salah), dan bahwa AI bisa terlihat sangat percaya diri sekalipun salah — jadi kepercayaan diri hasilnya bukan jaminan kebenarannya.
- **Menangani momen "AI-nya salah" secara konstruktif.** Ini pasti akan terjadi, dan bagaimana CEO/tim meresponnya menentukan apakah tim terus pakai AI atau diam-diam berhenti karena takut disalahkan. Jangan menghukum orang yang melaporkan kesalahan AI — itu justru sinyal bagus bahwa langkah verifikasi berjalan. Gunakan tiap kesalahan sebagai bahan memperbaiki instruksi/konteks yang diberikan ke AI, bukan alasan berhenti pakai sama sekali.
- **Sinyal bahaya balik ke cara manual sepenuhnya** (echo Module 8's field-execution chapter, AI-specific): orang mulai "lupa" pakai alur AI-nya, hasil AI dipakai tapi nggak pernah benar-benar dicek lagi (kebalikan dari verifikasi yang sehat), atau alur kerja itu cuma dipakai kalau ditanya langsung oleh atasan. Semua ini tanda momentum mulai hilang dan perlu direspons segera, bukan didiamkan sampai alurnya benar-benar berhenti dipakai.
- **Merayakan kemenangan kecil secara terbuka.** Begitu target sederhana dari Bab 5 mulai tercapai (waktu lebih cepat, hasil lebih konsisten), sebutkan itu secara terbuka ke tim — bukan cuma disimpan CEO sendiri. Ini yang bikin momentum awal bertahan, bukan cuma hilang begitu rasa penasaran awal reda.
- A reflection: reader menuliskan progres nyata alur kerjanya sejauh ini — apa yang sudah berjalan baik, kesalahan AI apa yang sudah ditemukan dan bagaimana ditangani, dan sinyal bahaya (kalau ada) yang mulai terlihat.
- Close with a clear turn toward Chapter 7: "Sekarang Anda sudah punya pengalaman nyata menjalankan alur kerja ini di lapangan. Bab berikutnya kita satukan semuanya jadi satu paket adopsi AI yang lengkap dan siap dipakai terus."

## 4. Workbook capture for this chapter

One `reflection` card — Module 9's workbook entry **"Entri Keenam."** Free-text prompt capturing: progres nyata alur kerja sejauh ini, kesalahan AI yang ditemukan dan cara ditangani, dan sinyal bahaya (kalau ada) (2-3 short text inputs). Use the `reflection` card type — no new card types needed.

## 5. Voice & format

- Match `chapter1.ts` through `chapter5.ts`'s register exactly — read all five before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10-20 cards total for this chapter.
- Create `Module 9/src/content/chapter6.ts` exporting `chapter6Cards: Card[]`. Register it in `Module 9/src/content/chapters.ts` (append after chapter 5, same shape).

## 6. Out of scope for this prompt

- Chapters 1-5, 7-8 content (Chapters 1-5 already exist, do not modify them)
- Compiling everything into one package — that's Chapter 7's job
- Any backend/save-to-server logic (frontend-only)
- `Module 1/`-`Module 8/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 9/src/content/chapter6.ts` has 10-20 cards covering clear instructions, verification, handling AI mistakes constructively, and backslide warning signs, including exactly one `reflection` card ("Entri Keenam")
- [ ] Stays anchored to the exact use case locked in Chapter 5 — no drift into abstract AI-strategy talk
- [ ] Opens with a callback to Chapter 5's locked-in workflow
- [ ] `Module 9/src/content/chapters.ts` registers Chapter 6 after Chapter 5
- [ ] Voice matches `chapter1.ts`-`chapter5.ts` — read all five for reference before writing
- [ ] `npm run dev` runs clean, no console errors
- [ ] `Module 9/src/content/chapter1.ts`-`chapter5.ts` and `Module 1/`-`Module 8/` left completely untouched
