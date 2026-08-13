# Build Brief: Module 7 — Chapter 8 ("Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 7/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 6/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–7 already exist (`Module 7/src/content/chapter1.ts` through `chapter7.ts`).

**Before writing anything, read all seven chapter files in full, plus `Module 7/src/content/chapters.ts`.** This chapter's report card (section 5) depends on the *exact* `cardId`/`fieldId` values those files actually used — don't guess or approximate them from this brief's earlier chapter prompts, since the writer of each chapter may have named fields slightly differently than suggested. Build the field map by reading the real files, the same way `Module 6/src/content/chapter8.ts`'s report card was built from Module 6's actual Chapters 1–7 (open that file for a concrete reference of the pattern, including how it handles the `finding-review` `storageKey` row).

**This is the capstone chapter.** No new card types are needed — `report` (type `'report'`) already exists in `Module 7/src/types/card.ts` and its renderer already exists at `Module 7/src/components/cards/ReportCard.tsx`, both carried over in the scaffold. It reads `useWorkbookStore` entries via the same `cardId`/`fieldId` lookup pattern `finding-review` already uses, renders them read-only in sections, and has a working print/save button (`window.print()`, styled with `print:` Tailwind variants — already built, don't rebuild it).

**This prompt covers Chapter 8 only.**

Full 8-chapter syllabus reference: `MODULE_7_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 8 is bolded)

1. Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok" — done
2. Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti — done
3. Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan — done
4. Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur — done
5. Mendiagnosis Rekrutmen Ad-Hoc — Kenapa "Kelihatannya Cocok" Bukan Metode Seleksi — done
6. Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi — done
7. Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran — done
8. **Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap** ← this chapter

## 3. Chapter 8 objective

The reader has, on paper, a complete job architecture profile: a competency model, proficiency levels, and a BEI/rubric screening tool (Chapters 3–7). This chapter makes sure it survives contact with the next actual hire: explicit permission to install it for one role first (not rewrite every job description at once), a link between the architecture's update rhythm and whatever performance system already exists (Module 6), and a downloadable report compiling the reader's entire journey through Chapters 1–7.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by calling back to Chapter 7** — profil arsitektur jabatan lengkap sudah ada di atas kertas: model kompetensi, tingkat kemahiran, alat seleksi. Sekarang: gimana caranya ini beneran dipakai di rekrutmen berikutnya, bukan cuma dokumen bagus yang didiamkan.
- **"Arsitektur jabatan tanpa pemilik kepatuhan yang eksplisit itu cuma dokumen HR yang didiamkan"** — tie back to Chapter 1's core "jebakan kelihatannya cocok" point, satu level lebih tinggi: bahkan profil paling rapi bisa diam-diam nggak pernah dipakai lagi kalau nggak ada satu orang yang eksplisit ditugaskan menjaga profil itu tetap dipakai tiap kali ada rekrutmen atau evaluasi peran.
- **New: permission eksplisit untuk mulai dari satu peran dulu.** Setelah 8 bab merancang metodologi lengkap (model kompetensi, tingkat kemahiran, diagnosis, alat seleksi), pembaca gampang tergoda untuk langsung menulis ulang deskripsi jabatan seluruh perusahaan sekaligus. Katakan dengan jelas: instal dulu profil ini untuk SATU peran yang sudah dirancang di Bab 3-7, pakai di rekrutmen berikutnya untuk peran itu, biarkan terbukti jalan, baru pakai metodologi yang sama untuk peran berikutnya. Ini bukan usaha yang lebih rendah — ini cara supaya arsitektur ini beneran melekat, bukan kolaps karena terlalu banyak peran diubah sekaligus.
- **Menghubungkan ke sistem yang sudah ada (Modul 6).** Profil arsitektur jabatan yang baru dirancang jadi lebih tajam kalau disambungkan ke siklus manajemen kinerja yang sudah ada — kompetensi dan tingkat kemahirannya bisa jadi bahasa yang lebih presisi buat penetapan tujuan dan PIP (bukan lagi "kinerja kurang baik" yang kabur, tapi "belum mencapai tingkat Mahir di kompetensi X yang dibutuhkan peran ini") — kalau reader sudah ikut Modul 6. Kalau reader belum ikut Modul 6, framing-nya tetap self-contained: cukup sarankan pemilik arsitektur jabatan ini juga jadi orang yang menjaga hubungannya dengan sistem evaluasi kinerja apa pun yang sudah ada, bukan mengasumsikan Modul 6 sudah diikuti.
- **Playbook ringkas satu profil**: satu ringkasan — peran mana yang jadi fokus, siapa pemilik arsitekturnya, kapan mulai dipakai di rekrutmen berikutnya, dan kapan profilnya direview lagi (misalnya setelah beberapa siklus hiring, atau saat perannya berubah signifikan).
- Close by transitioning into the report: "Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai."

## 4. Workbook capture for this chapter

Two `reflection` cards plus one `yes-no` card (same pattern as `Module 6/src/content/chapter8.ts`'s reflection/yes-no/report sequence):

1. **Playbook Arsitektur Jabatan Pertama** (this is workbook entry **"Entri Kesembilan"**) — 3 short text inputs: siapa yang akan jadi pemilik dan menjaga profil arsitektur jabatan ini tetap dipakai, kapan mulai dipakai di rekrutmen berikutnya, dan kapan profilnya akan direview ulang.
2. **Mulai satu peran atau langsung semua** — a `yes-no` card: `yesLabel: 'Mulai dari Satu Peran Dulu'`, `noLabel: 'Saya Siap Rombak Semua Deskripsi Jabatan Sekaligus'`, with an affirming `feedbackYes` for the recommended gradual path and a `feedbackNo` that gently nudges back toward starting with one role even if the reader picks the second option — this persists automatically under its own card id, fields `selection` and `selectionLabel` (already how `YesNoCard` works, nothing new to build).
3. **Jadwal Cek Arsitektur Berikutnya** (this is workbook entry **"Entri Kesepuluh"**) — 1 reflection card, 1 short text input capturing when they'll check whether the new job architecture is actually being used at the next hire, and what they'll check then.

## 5. The report card — building the field map

Build one `report` card as the second-to-last card in this chapter, `downloadButtonText` should read something like `'Cetak / Simpan Laporan Ini'`. It must read every entry below via the existing `cardId`/`fieldId` lookup pattern and degrade gracefully (omit the line or show a neutral placeholder) if any entry is empty. **Read Chapters 1–7's actual source files first and substitute the real `cardId`/`fieldId` for each row** — the descriptions below tell you which workbook entry each row maps to; do not invent values without checking the files:

| Section heading | Label | Source workbook entry (verify exact cardId/fieldId in the real file) |
|---|---|---|
| Peran yang Diperhatikan | Nama peran & tanda masalah (Bab 1) | Chapter 1's reflection card ("Entri Pertama") |
| Peta Diri di Arsitektur Jabatan | Self-assessment 2 tahap (Bab 2) | Chapter 2's reflection card ("Entri Kedua") |
| Model Kompetensi Anda | Kompetensi inti/fungsional/kepemimpinan (Bab 3) | Chapter 3's reflection card ("Entri Ketiga") |
| Tingkat Kemahiran Anda | Standar terukur per kompetensi (Bab 4) | Chapter 4's reflection card ("Entri Keempat") |
| Diagnosis Rekrutmen | Lensa dominan & alasan (Bab 5) | Chapter 5's reflection card ("Entri Kelima") |
| Alat Seleksi Anda | Pertanyaan BEI & kriteria skor (Bab 6) | Chapter 6's reflection card ("Entri Keenam") |
| Profil Arsitektur Jabatan Anda | Skor kepercayaan & alasan (Bab 7) | Chapter 7's `finding-review` card ("Entri Ketujuh") — use its `storageKey` as `cardId`, fields `score` and `justification`, same pattern as the corrective-action-review row in `Module 6/src/content/chapter8.ts` |
| Profil Arsitektur Jabatan Anda | Ringkasan profil terintegrasi (Bab 7) | Chapter 7's reflection card ("Entri Kedelapan") |
| Playbook Instalasi Anda | Pemilik, mulai dipakai, jadwal review (Bab 8) | This chapter's first reflection card ("Entri Kesembilan") |
| Playbook Instalasi Anda | Pendekatan rollout | This chapter's `yes-no` card, field `selectionLabel` |
| Cek Berikutnya | Kapan & apa yang akan dicek (Bab 8) | This chapter's second reflection card ("Entri Kesepuluh") |

Match the section headings above closely (light rewording for flow is fine); the point is completeness and correct sourcing, not verbatim text.

## 6. Voice & format

- Match `chapter1.ts` through `chapter7.ts`'s register exactly — read all seven before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `reflection`) for the teaching/practice portions. Use `report` only for the compiled-summary card described in section 5.
- Target 10–20 cards total for this chapter, including the reflection cards, the yes-no card, and the report card.
- **The final closing card must NOT have a `cta` field** — established since Module 3's Chapter 1: the deck footer's "Selesai Bab Ini" button already fires `onDeckComplete`, which unconditionally returns to the module home screen. Just end with a warm, earned closing paragraph and no `cta`.
- Create `Module 7/src/content/chapter8.ts` exporting `chapter8Cards: Card[]`. Register it in `Module 7/src/content/chapters.ts` (append after chapter 7, same shape).

## 7. Out of scope for this prompt

- A module home screen or chapter-to-chapter navigation/unlocking (check `Module 7/src/components/ModuleHome.tsx` and `App.tsx` before assuming this is missing — it was carried over in the scaffold)
- A `review-request` card / testimonial capture — follow Module 1's pattern (`REVIEW_REQUEST_PROMPT.md`) as a future addendum if wanted, not part of this prompt. `review-request` does not currently exist in `Module 7/src/types/card.ts` — do not reference it.
- Dynamically recommending specific other services/modules (that logic lives in the separate funnel app)
- Restructuring `App.tsx`
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 6/` — do not touch any of them

## 8. Definition of done

- [ ] `Module 7/src/content/chapter8.ts` has 10–20 cards covering the playbook, gradual single-role rollout permission, and the rhythm-linked next check, including 2 `reflection` cards ("Entri Kesembilan" and "Entri Kesepuluh"), 1 `yes-no` rollout-approach card, and exactly 1 `report` card
- [ ] The report card's field map was built by reading Chapters 1–7's actual source files, not guessed — every `cardId`/`fieldId` in section 5's table is verified against the real files, and it degrades gracefully for any empty entry
- [ ] A working print/save mechanism on the report card (reuse the existing `ReportCard.tsx` behavior — no new dependency)
- [ ] Opens with a callback to Chapter 7; closing card has no `cta` field
- [ ] `Module 7/src/content/chapters.ts` registers Chapter 8 after Chapter 7
- [ ] Voice matches `chapter1.ts`–`chapter7.ts` — read all seven for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter7.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 6/` left completely untouched
