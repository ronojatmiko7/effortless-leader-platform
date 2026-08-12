# Build Brief: Module 4 — Chapter 8 ("Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 4/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 3/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–7 already exist (`Module 4/src/content/chapter1.ts` through `chapter7.ts`).

**Before writing anything, read all seven chapter files in full, plus `Module 4/src/content/chapters.ts`.** This chapter's report card (section 5) depends on the *exact* `cardId`/`fieldId` values those files actually used — don't guess or approximate them from this brief's earlier chapter prompts, since the writer of each chapter may have named fields slightly differently than suggested. Build the field map by reading the real files, the same way `Module 3/src/content/chapter8.ts`'s report card was built from Module 3's actual Chapters 1–7 (open that file for a concrete reference of the pattern, including how it handles the `finding-review` `storageKey` row).

**This is the capstone chapter.** No new card types are needed — `report` (type `'report'`) already exists in `Module 4/src/types/card.ts` and its renderer already exists at `Module 4/src/components/cards/ReportCard.tsx`, both ported during the Chapter 1 scaffold. It reads `useWorkbookStore` entries via the same `cardId`/`fieldId` lookup pattern `finding-review` already uses, renders them read-only in sections, and has a working print/save button (`window.print()`, styled with `print:` Tailwind variants — already built, don't rebuild it).

**This prompt covers Chapter 8 only.**

Full 8-chapter syllabus reference: `MODULE_4_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 8 is bolded)

1. Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo — done
2. Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja — done
3. Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End — done
4. Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis — done
5. Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi — done
6. Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan — done
7. Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo — done
8. **Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap** ← this chapter

## 3. Chapter 8 objective

The reader has, on paper, a complete redesign: a mapped process, a diagnosed handoff, a written instruction, a prevention checkpoint, and a leaner redesign with an owner and an SLA (Chapters 3–7). This chapter makes sure it survives contact with a busy week: explicit permission to roll out one process at a time (not rebuild the whole business at once), a link between the new process's health and the EBR review rhythm already built in Module 3, and a downloadable report compiling the reader's entire journey through Chapters 1–7.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by calling back to Chapter 7** — rancangan ulang sudah ada di atas kertas: alur baru, pemilik baru, SLA baru. Sekarang: gimana caranya ini beneran jalan minggu depan, bukan cuma rancangan bagus yang didiamkan.
- **"Proses baru tanpa pemilik yang eksplisit itu cuma niat"** — tie back to Chapter 1's core cost-of-silos point, one level up: bahkan rancangan ulang yang paling rapi bisa mati kalau nggak ada satu orang yang eksplisit ditugaskan menjaga titik itu tetap berjalan sesuai desain barunya.
- **New: permission eksplisit untuk mulai dari satu proses dulu.** Setelah 8 bab merancang metodologi lengkap (peta 4 level, diagnosis, instruksi kerja, QMS, redesain), pembaca gampang tergoda untuk langsung merombak semua proses di bisnisnya sekaligus. Katakan dengan jelas: instal dulu SATU proses yang sudah dirombak di Bab 7, biarkan jalan dan stabil beberapa minggu, baru pakai metodologi yang sama untuk proses berikutnya. Ini bukan usaha yang lebih rendah — ini cara supaya rombakan ini beneran melekat, bukan kolaps karena terlalu banyak perubahan sekaligus.
- **Menghubungkan ke ritme EBR (Modul 3).** Proses yang baru dirombak butuh dipantau — bukan cuma diinstal lalu dilupakan. Sambungkan pemantauan kepatuhan SLA dan kesehatan titik serah terima baru ini ke salah satu tier EBR yang relevan (biasanya tinjauan mingguan untuk cek SLA harian/mingguan, atau huddle harian kalau proses itu dijalankan tiap hari) — kalau reader belum ikut Modul 3, framing-nya tetap self-contained: cukup sarankan ada forum rutin (apa pun bentuknya) yang mengecek proses baru ini, bukan mengasumsikan Modul 3 sudah diikuti.
- **Playbook ringkas satu proses**: satu ringkasan — proses/titik apa yang dirombak, siapa pemiliknya, SLA-nya berapa, titik pencegahan QA-nya apa, dan forum/jadwal mana yang memantaunya.
- Close by transitioning into the report: "Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai."

## 4. Workbook capture for this chapter

Two `reflection` cards plus one `yes-no` card (same pattern as `Module 3/src/content/chapter8.ts`'s reflection/yes-no/report sequence):

1. **Playbook Proses Pertama** (this is workbook entry **"Entri Kesembilan"**) — 3 short text inputs: forum/jadwal mana yang akan memantau proses baru ini, siapa yang memimpin pemantauan itu, dan kapan proses barunya mulai berjalan resmi.
2. **Mulai satu proses atau langsung semua** — a `yes-no` card: `yesLabel: 'Mulai dari Satu Proses Dulu'`, `noLabel: 'Saya Siap Rombak Semua Proses Sekaligus'`, with an affirming `feedbackYes` for the recommended gradual path and a `feedbackNo` that gently nudges back toward starting with one process even if the reader picks the second option — this persists automatically under its own card id, fields `selection` and `selectionLabel` (already how `YesNoCard` works, nothing new to build).
3. **Jadwal Cek Proses Berikutnya** (this is workbook entry **"Entri Kesepuluh"**) — 1 reflection card, 1 short text input capturing when they'll check whether the redesigned process is actually holding up, and what they'll check then.

## 5. The report card — building the field map

Build one `report` card as the second-to-last card in this chapter, `downloadButtonText` should read something like `'Cetak / Simpan Laporan Ini'`. It must read every entry below via the existing `cardId`/`fieldId` lookup pattern and degrade gracefully (omit the line or show a neutral placeholder) if any entry is empty. **Read Chapters 1–7's actual source files first and substitute the real `cardId`/`fieldId` for each row** — the descriptions below tell you which workbook entry each row maps to; do not invent values without checking the files:

| Section heading | Label | Source workbook entry (verify exact cardId/fieldId in the real file) |
|---|---|---|
| Titik Silo yang Anda Temukan | Momen serah terima yang berantakan (Bab 1) | Chapter 1's reflection card ("Entri Pertama") |
| Audit Arsitektur Proses Anda | Level yang sudah ada & level paling kosong (Bab 2) | Chapter 2's reflection card ("Entri Kedua") |
| Peta Rantai Nilai Anda | Proses utama, departemen terlibat, titik serah terima (Bab 3) | Chapter 3's reflection card ("Entri Ketiga") |
| Diagnosis Titik Silo | Titik paling parah & jenis masalahnya (Bab 4) | Chapter 4's reflection card ("Entri Keempat") |
| Instruksi Kerja Baru Anda | Prosedur (L3) & instruksi kerja (L4) (Bab 5) | Chapter 5's reflection card ("Entri Kelima") |
| Sistem Pencegahan Kualitas | Titik cek pencegahan yang dirancang (Bab 6) | Chapter 6's reflection card ("Entri Keenam") |
| Rancangan Ulang Proses Anda | Skor kepercayaan redesain & alasannya (Bab 7) | Chapter 7's `finding-review` card ("Entri Ketujuh") — use its `storageKey` as `cardId`, fields `score` and `justification`, same pattern as the `chapter5-five-whys-practice` row in `Module 3/src/content/chapter8.ts` |
| Rancangan Ulang Proses Anda | Alur lama vs baru, pemilik, SLA (Bab 7) | Chapter 7's reflection card ("Entri Kedelapan") |
| Playbook Instalasi Anda | Forum pemantau, pemimpin, tanggal mulai (Bab 8) | This chapter's first reflection card ("Entri Kesembilan") |
| Playbook Instalasi Anda | Pendekatan rollout | This chapter's `yes-no` card, field `selectionLabel` |
| Cek Berikutnya | Kapan & apa yang akan dicek (Bab 8) | This chapter's second reflection card ("Entri Kesepuluh") |

Match the section headings above closely (light rewording for flow is fine); the point is completeness and correct sourcing, not verbatim text.

## 6. Voice & format

- Match `chapter1.ts` through `chapter7.ts`'s register exactly — read all seven before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `reflection`) for the teaching/practice portions. Use `report` only for the compiled-summary card described in section 5.
- Target 10–20 cards total for this chapter, including the reflection cards, the yes-no card, and the report card.
- **The final closing card must NOT have a `cta` field** — established since Module 3's Chapter 1: the deck footer's "Selesai Bab Ini" button already fires `onDeckComplete`, which unconditionally returns to the module home screen. Just end with a warm, earned closing paragraph and no `cta`.
- Create `Module 4/src/content/chapter8.ts` exporting `chapter8Cards: Card[]`. Register it in `Module 4/src/content/chapters.ts` (append after chapter 7, same shape).

## 7. Out of scope for this prompt

- A module home screen or chapter-to-chapter navigation/unlocking (check `Module 4/src/components/ModuleHome.tsx` and `App.tsx` before assuming this is missing — it was ported during the Chapter 1 scaffold)
- A `review-request` card / testimonial capture — follow Module 1's pattern (`REVIEW_REQUEST_PROMPT.md`) as a future addendum if wanted, not part of this prompt. `review-request` does not currently exist in `Module 4/src/types/card.ts` — do not reference it.
- Dynamically recommending specific other services/modules (that logic lives in the separate funnel app)
- Restructuring `App.tsx`
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 3/` — do not touch any of them

## 8. Definition of done

- [ ] `Module 4/src/content/chapter8.ts` has 10–20 cards covering the playbook, gradual single-process rollout permission, and the EBR-linked check cadence, including 2 `reflection` cards ("Entri Kesembilan" and "Entri Kesepuluh"), 1 `yes-no` rollout-approach card, and exactly 1 `report` card
- [ ] The report card's field map was built by reading Chapters 1–7's actual source files, not guessed — every `cardId`/`fieldId` in section 5's table is verified against the real files, and it degrades gracefully for any empty entry
- [ ] A working print/save mechanism on the report card (reuse the existing `ReportCard.tsx` behavior — no new dependency)
- [ ] Opens with a callback to Chapter 7; closing card has no `cta` field
- [ ] `Module 4/src/content/chapters.ts` registers Chapter 8 after Chapter 7
- [ ] Voice matches `chapter1.ts`–`chapter7.ts` — read all seven for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter7.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 3/` left completely untouched
