# Build Brief: Module 3 — Chapter 8 ("Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 3/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/` and `Module 2/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–7 already exist (`Module 3/src/content/chapter1.ts` through `chapter7.ts`).

**Before writing anything, read all seven chapter files in full, plus `Module 3/src/content/chapters.ts`.** This chapter's report card (section 5) depends on the *exact* `cardId`/`fieldId` values those files actually used — don't guess or approximate them from this brief's earlier chapter prompts, since the writer of each chapter may have named fields slightly differently than suggested. Build the field map by reading the real files, the same way `Module 2/src/content/chapter8.ts`'s report card was built from Module 2's actual Chapters 1–7 (open that file for a concrete reference of the pattern, including how it handles the two `finding-review` `storageKey` rows).

**This is the capstone chapter.** No new card types are needed — `report` (type `'report'`) already exists in `Module 3/src/types/card.ts` and its renderer already exists at `Module 3/src/components/cards/ReportCard.tsx`, both ported during the Chapter 1 scaffold. It reads `useWorkbookStore` entries via the same `cardId`/`fieldId` lookup pattern `finding-review` already uses, renders them read-only in sections, and has a working print/save button (`window.print()`, styled with `print:` Tailwind variants — already built, don't rebuild it).

**This prompt covers Chapter 8 only.**

Full 8-chapter syllabus reference: `MODULE_3_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 8 is bolded)

1. Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme — done
2. Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan — done
3. Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu — done
4. Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis — done
5. Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan — done
6. Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi — done
7. Mengelola Eskalasi dan Akuntabilitas Lintas Level — done
8. **Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap** ← this chapter

## 3. Chapter 8 objective

The reader has, on paper, a complete EBR system: a 4-tier cadence (Chapters 2–4), a way to diagnose problems (Chapter 5), a way to turn findings into decisions (Chapter 6), and a way to escalate and keep decisions accountable (Chapter 7). This chapter makes sure it actually survives contact with a busy week: a concrete rollout plan, explicit permission to start small, a cadence for reviewing the *system* itself (distinct from reviewing individual decisions), and a downloadable report compiling the reader's entire journey through Chapters 1–7.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by calling back to Chapter 7** — sistem lengkap sudah ada di atas kertas. Sekarang: gimana caranya ini beneran jalan minggu depan, bulan depan, tanpa Anda harus dorong terus?
- **"Ritme tanpa jadwal itu cuma niat"** — tie back to Chapter 1's core cost-of-no-rhythm point, one level up: bahkan sistem yang sudah dirancang lengkap bisa mati kalau nggak eksplisit dijadwalkan siapa pimpin tiap tier dan kapan.
- **Playbook structure**: satu ringkasan per tier (huddle harian, tinjauan mingguan, bulanan, triwulanan) — jadwal, siapa pimpin, siapa wajib hadir, pertanyaan/agenda inti, dan link balik ke Log Keputusan (Bab 6) dan protokol eskalasi (Bab 7).
- **New: permission eksplisit untuk mulai bertahap.** Setelah 8 bab merancang sistem 4-tier lengkap, pembaca pemula gampang merasa harus menjalankan semua tier sekaligus mulai minggu depan. Katakan dengan jelas: mulai dari huddle harian dulu (paling murah, paling cepat kelihatan hasilnya), baru tambah tinjauan mingguan, baru bulanan, baru triwulanan di siklus-siklus berikutnya. Ini bukan usaha yang lebih rendah — ini cara sistemnya beneran bertahan, bukan kolaps minggu kedua.
- **Review-the-system-itself cadence** — new and distinct from Chapter 6/7's per-decision accountability: apakah 4 tier ini masih pas formatnya, apakah orang yang hadir masih tepat, apakah kriteria eskalasi Bab 7 masih relevan. Cek ini di siklus triwulanan saja (bukan lebih sering — mengubah struktur ritme yang baru jalan sebentar-sebentar juga bikin nggak stabil, beda dari mengecek status keputusan individual yang memang harus tiap tinjauan).
- Close by transitioning into the report: "Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai."

## 4. Workbook capture for this chapter

Two `reflection` cards plus one `yes-no` card (same pattern as `Module 2/src/content/chapter8.ts`, cards using its reflection/yes-no/report sequence):

1. **Playbook Ringkas** (this is workbook entry **"Entri Kesembilan"**) — 3 short text inputs: tier mana yang akan mereka mulai duluan (sesuai permission bertahap di atas), siapa pimpinnya, dan jadwalnya (hari/jam atau frekuensinya).
2. **Mulai bertahap atau langsung semua** — a `yes-no` card: `yesLabel: 'Mulai dari Huddle Harian Dulu'`, `noLabel: 'Saya Siap Jalankan Semua Tier Sekaligus'`, with an affirming `feedbackYes` for the recommended gradual path and a `feedbackNo` that gently nudges back toward starting small even if the reader picks the second option — this persists automatically under its own card id, fields `selection` and `selectionLabel` (already how `YesNoCard` works, nothing new to build).
3. **Jadwal Review Sistem Berikutnya** (this is workbook entry **"Entri Kesepuluh"**) — 1 reflection card, 1 short text input capturing an actual next quarterly system-review date and what they'll check then, not "nanti."

## 5. The report card — building the field map

Build one `report` card as the second-to-last card in this chapter, `downloadButtonText` should read something like `'Cetak / Simpan Laporan Ini'`. It must read every entry below via the existing `cardId`/`fieldId` lookup pattern and degrade gracefully (omit the line or show a neutral placeholder) if any entry is empty. **Read Chapters 1–7's actual source files first and substitute the real `cardId`/`fieldId` for each row** — the descriptions below tell you which workbook entry each row maps to; do not invent values without checking the files:

| Section heading | Label | Source workbook entry (verify exact cardId/fieldId in the real file) |
|---|---|---|
| Masalah yang Membutakan Anda | Masalah yang blindside (Bab 1) | Chapter 1's reflection card ("Entri Pertama") |
| Masalah yang Membutakan Anda | Tanda-tanda yang terlewat (Bab 1) | Chapter 1's reflection card, second field if present |
| Audit Ritme Anda | Tier yang sudah ada (Bab 2) | Chapter 2's reflection card ("Entri Kedua") |
| Audit Ritme Anda | Tier paling kosong (Bab 2) | Chapter 2's reflection card, second field |
| Huddle Harian Anda | Jadwal, 3 pertanyaan, siapa hadir (Bab 3) | Chapter 3's reflection card ("Entri Ketiga") |
| Tinjauan Bulanan & Triwulanan Anda | Siapa hadir & pertanyaan inti (Bab 4) | Chapter 4's reflection card ("Entri Keempat") |
| Diagnosis Akar Masalah | Skor kepercayaan 5 Whys & akar (Bab 5) | Chapter 5's `finding-review` card ("Entri Kelima") — use its `storageKey` as `cardId`, fields `score` and `justification`, same pattern as the `chapter7-*` rows in `Module 2/src/content/chapter8.ts` |
| Diagnosis Akar Masalah | Masalah & faktor Fishbone (Bab 5) | Chapter 5's reflection card ("Entri Keenam") |
| Log Keputusan Anda | Masalah, keputusan, siapa, kapan (Bab 6) | Chapter 6's reflection card ("Entri Ketujuh") |
| Protokol Eskalasi & Status | Kriteria naik level & status keputusan (Bab 7) | Chapter 7's reflection card ("Entri Kedelapan") |
| Playbook Ritme EBR Anda | Tier duluan, pemimpin, jadwal (Bab 8) | This chapter's first reflection card ("Entri Kesembilan") |
| Playbook Ritme EBR Anda | Pendekatan rollout | This chapter's `yes-no` card, field `selectionLabel` |
| Review Sistem Berikutnya | Tanggal & yang akan dicek | This chapter's second reflection card ("Entri Kesepuluh") |

Match the section headings above closely (light rewording for flow is fine); the point is completeness and correct sourcing, not verbatim text.

## 6. Voice & format

- Match `chapter1.ts` through `chapter7.ts`'s register exactly — read all seven before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `reflection`) for the teaching/practice portions. Use `report` only for the compiled-summary card described in section 5.
- Target 10–20 cards total for this chapter, including the reflection cards, the yes-no card, and the report card.
- **The final closing card must NOT have a `cta` field** — established since Module 3's Chapter 1: the deck footer's "Selesai Bab Ini" button already fires `onDeckComplete`, which unconditionally returns to the module home screen. Just end with a warm, earned closing paragraph and no `cta`.
- Create `Module 3/src/content/chapter8.ts` exporting `chapter8Cards: Card[]`. Register it in `Module 3/src/content/chapters.ts` (append after chapter 7, same shape).

## 7. Out of scope for this prompt

- A module home screen or chapter-to-chapter navigation/unlocking (check `Module 3/src/components/ModuleHome.tsx` and `App.tsx` before assuming this is missing — it was ported during the Chapter 1 scaffold)
- A `review-request` card / testimonial capture — follow Module 1's pattern (`REVIEW_REQUEST_PROMPT.md`) as a future addendum if wanted, not part of this prompt. `review-request` does not currently exist in `Module 3/src/types/card.ts` — do not reference it.
- Dynamically recommending specific other services/modules (that logic lives in the separate funnel app)
- Restructuring `App.tsx`
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` and `Module 2/` — do not touch either

## 8. Definition of done

- [ ] `Module 3/src/content/chapter8.ts` has 10–20 cards covering the playbook structure, gradual-rollout permission, and the system-review cadence, including 2 `reflection` cards ("Entri Kesembilan" and "Entri Kesepuluh"), 1 `yes-no` rollout-approach card, and exactly 1 `report` card
- [ ] The report card's field map was built by reading Chapters 1–7's actual source files, not guessed — every `cardId`/`fieldId` in section 5's table is verified against the real files, and it degrades gracefully for any empty entry
- [ ] A working print/save mechanism on the report card (reuse the existing `ReportCard.tsx` behavior — no new dependency)
- [ ] Opens with a callback to Chapter 7; closing card has no `cta` field
- [ ] `Module 3/src/content/chapters.ts` registers Chapter 8 after Chapter 7
- [ ] Voice matches `chapter1.ts`–`chapter7.ts` — read all seven for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter7.ts` / current app behavior untouched
- [ ] `Module 1/` and `Module 2/` left completely untouched
