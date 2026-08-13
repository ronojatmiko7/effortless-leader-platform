# Build Brief: Module 7 — Chapter 7 ("Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 7/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 6/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–6 already exist (`Module 7/src/content/chapter1.ts`–`chapter6.ts`) — read all six before writing anything, for voice, for the `reflection` card type / `useWorkbookStore` persistence pattern, and specifically for the **exact `cardId`/`fieldId` values** Chapter 5's diagnosis entry used — don't guess them.

**No new card type is needed for this chapter.** `finding-review` (type `'finding-review'`) already exists in `Module 7/src/types/card.ts` and its renderer at `Module 7/src/components/cards/FindingReviewCard.tsx`, both carried over in the scaffold and already wired into `DeckViewer.tsx`. It reads back a prior `useWorkbookStore` entry as a recap, then captures a 1–4 score plus a short justification, persisted under a `storageKey`. Use it, don't rebuild it — see `Module 6/src/content/chapter7.ts` for a reference of the pattern.

**This prompt covers Chapter 7 only.** Chapter 8 is a separate, later prompt. Do not build it now.

Full 8-chapter syllabus reference: `MODULE_7_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 7 is bolded)

1. Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok" — done
2. Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti — done
3. Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan — done
4. Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur — done
5. Mendiagnosis Rekrutmen Ad-Hoc — Kenapa "Kelihatannya Cocok" Bukan Metode Seleksi — done
6. Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi — done
7. **Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran** ← this chapter
8. Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap

## 3. Chapter 7 objective

This is the hands-on workshop chapter. Across Chapters 3–6, the reader has built a competency model, proficiency levels, a recruitment diagnosis, and BEI questions/rubric — but scattered across separate exercises. This chapter has them pull it all together into one concrete, ready-to-use job architecture profile for one real role.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapters 3–6 — reader sudah punya model kompetensi, tingkat kemahiran, diagnosis, dan alat seleksi. Sekarang: menyatukan semuanya jadi satu profil arsitektur jabatan yang utuh.
- **Recap step**: pull back the reader's Chapter 5 entry as a `finding-review` card — reader mengonfirmasi/meninjau ulang apa diagnosisnya masih akurat, lalu menilai skor kepercayaan (1–4) bahwa alat seleksi yang sudah dirancang (Bab 6) beneran cocok buat menguji peran itu, dengan alasan singkat.
- **Menyatukan jadi satu profil**: model kompetensi (Bab 3), tingkat kemahiran (Bab 4), dan alat seleksi BEI + rubrik (Bab 6), untuk satu peran yang sama (bisa yang sama dari bab-bab sebelumnya, atau digeneralisasi ke peran serupa lain kalau reader mau).
- **Sandingkan versi "sebelum" vs "sesudah"**: proses lama (deskripsi jabatan cuma daftar tugas, wawancara mengandalkan chemistry) vs proses baru (model kompetensi dengan tingkat kemahiran jelas, alat seleksi yang menguji langsung ke situ).
- **Cara memperkenalkan profil baru ke orang lain yang ikut proses rekrutmen** (co-interviewer, atasan langsung, atau siapa pun yang ikut memutuskan) **tanpa berasa birokrasi berlebihan.** Framing yang tepat: ini bikin keputusan hiring lebih cepat convergence-nya dan lebih adil untuk kandidat (semua dinilai dengan standar yang sama), bukan tambahan kerjaan admin yang memperlambat proses.
- A worked example: full walkthrough for one role showing the complete profile end-to-end — kompetensi, tingkat kemahiran, pertanyaan BEI, dan rubrik skornya.
- Close with a clear turn toward Chapter 8: "Profil arsitektur jabatannya sekarang utuh di atas kertas. Bab terakhir: cara menginstalnya biar beneran dipakai tiap kali ada rekrutmen — bukan cuma dokumen bagus yang berakhir dilupakan — dan laporan lengkap dari semua yang sudah Anda kerjakan sejak Bab 1."

## 4. Workbook capture for this chapter

Use **two** cards this chapter:

1. **finding-review** — recap the reader's Chapter 5 entry (the recruitment diagnosis, "Entri Kelima"), pulled via its known `useWorkbookStore` field ids. Have the reader score their confidence (1–4) that the screening tool (informed by Chapter 6) actually fits the diagnosed role, with a short justification. Storage key e.g. `chapter7-selection-tool-review`. This is workbook entry **"Entri Ketujuh."**
2. **reflection** — the reader writes out the final integrated profile summary for their chosen role: kompetensi kunci, tingkat kemahiran minimum, dan gambaran alat seleksinya. This is workbook entry **"Entri Kedelapan."** 3 short text inputs, e.g. "Peran mana yang jadi fokus profil ini?", "Apa kompetensi kunci dan tingkat kemahiran minimumnya?", "Seperti apa gambaran alat seleksi (pertanyaan BEI + rubrik) yang akan dipakai?"

If the Chapter 5 entry is empty (reader skipped it), degrade gracefully — this should already be how `finding-review` behaves from its existing implementation; don't change that behavior.

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter6.ts`'s register exactly — read all six before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`) for the teaching/practice portions. Use `finding-review` and `reflection` only for the two moments in section 4.
- Target 10–20 cards total for this chapter.
- Create `Module 7/src/content/chapter7.ts` exporting `chapter7Cards: Card[]`. Register it in `Module 7/src/content/chapters.ts` (append after chapter 6, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapter 8 content
- Rollout/gradual-start permission and the rhythm link to Module 6 (Chapter 8's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the integrated profile summary is persisted so Chapter 8 can read it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 6/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 7/src/content/chapter7.ts` has 10–20 cards covering assembling the competency model, proficiency levels, and screening tool into one profile, introducing it without triggering "bureaucracy" pushback, and a worked example, including exactly one `finding-review` card (Entri Ketujuh, recapping Chapter 5's entry) and one `reflection` card (Entri Kedelapan)
- [ ] The `finding-review` card's recap items use the real `cardId`/`fieldId` from Chapter 5's actual source file, verified by reading it — not guessed
- [ ] Opens with a callback to Chapters 3–6; closes previewing Chapter 8
- [ ] `Module 7/src/content/chapters.ts` registers Chapter 7 after Chapter 6
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter6.ts` — read all six for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter6.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 6/` left completely untouched
