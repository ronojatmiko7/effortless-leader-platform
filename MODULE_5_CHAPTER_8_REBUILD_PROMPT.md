# Build Brief: Module 5 — Chapter 8 ("Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 5/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 4/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–7 already exist (`Module 5/src/content/chapter1.ts` through `chapter7.ts`).

**Before writing anything, read all seven chapter files in full, plus `Module 5/src/content/chapters.ts`.** This chapter's report card (section 5) depends on the *exact* `cardId`/`fieldId` values those files actually used — don't guess or approximate them from this brief's earlier chapter prompts, since the writer of each chapter may have named fields slightly differently than suggested. Build the field map by reading the real files, the same way `Module 4/src/content/chapter8.ts`'s report card was built from Module 4's actual Chapters 1–7 (open that file for a concrete reference of the pattern, including how it handles the `finding-review` `storageKey` row).

**This is the capstone chapter.** No new card types are needed — `report` (type `'report'`) already exists in `Module 5/src/types/card.ts` and its renderer already exists at `Module 5/src/components/cards/ReportCard.tsx`, both ported during the Chapter 1 scaffold. It reads `useWorkbookStore` entries via the same `cardId`/`fieldId` lookup pattern `finding-review` already uses, renders them read-only in sections, and has a working print/save button (`window.print()`, styled with `print:` Tailwind variants — already built, don't rebuild it).

**This prompt covers Chapter 8 only.**

Full 8-chapter syllabus reference: `MODULE_5_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 8 is bolded)

1. Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu — done
2. Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif — done
3. Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi? — done
4. Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan — done
5. Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder — done
6. Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif' — done
7. Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai — done
8. **Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap** ← this chapter

## 3. Chapter 8 objective

The reader has, on paper, a complete redesign: a diagnosed SOP, a usable new format, a real access location, and a compliance-check mechanism (Chapters 3–7). This chapter makes sure it survives contact with a busy week: explicit permission to roll out one SOP at a time (not overhaul every SOP in the business at once), a link between the new SOP's compliance checking and whatever review rhythm already exists (Module 3's EBR or Module 4's QMS), and a downloadable report compiling the reader's entire journey through Chapters 1–7.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by calling back to Chapter 7** — rancangan ulang sudah ada di atas kertas: format baru, akses baru, mekanisme cek baru. Sekarang: gimana caranya ini beneran jalan minggu depan, bukan cuma rancangan bagus yang didiamkan.
- **"SOP baru tanpa pemilik kepatuhan yang eksplisit itu cuma niat baik"** — tie back to Chapter 1's core "dokumen berdebu" point, one level up: bahkan rancangan ulang yang paling rapi bisa diam-diam jadi dokumen berdebu berikutnya kalau nggak ada satu orang yang eksplisit ditugaskan menjaga kepatuhannya tetap dicek.
- **New: permission eksplisit untuk mulai dari satu SOP dulu.** Setelah 8 bab merancang metodologi lengkap (skala kematangan, diagnosis tiga lensa, format, akses, kepatuhan), pembaca gampang tergoda untuk langsung merombak semua SOP di bisnisnya sekaligus. Katakan dengan jelas: instal dulu SATU SOP yang sudah dirombak di Bab 7, biarkan jalan dan stabil beberapa minggu, baru pakai metodologi yang sama untuk SOP berikutnya. Ini bukan usaha yang lebih rendah — ini cara supaya rombakan ini beneran melekat, bukan kolaps karena terlalu banyak perubahan sekaligus.
- **Menghubungkan ke ritme yang sudah ada (Modul 3/4).** Pengecekan kepatuhan SOP yang baru dirombak butuh dipantau — bukan cuma dirancang lalu dilupakan. Sambungkan pemantauannya ke salah satu tier EBR yang relevan (Modul 3) atau titik pencegahan QMS yang sudah ada (Modul 4) — kalau reader belum ikut modul-modul itu, framing-nya tetap self-contained: cukup sarankan ada forum rutin (apa pun bentuknya) yang mengecek kepatuhan SOP ini, bukan mengasumsikan Modul 3/4 sudah diikuti.
- **Playbook ringkas satu SOP**: satu ringkasan — SOP apa yang dirombak, format barunya seperti apa, lokasi aksesnya di mana, mekanisme cek kepatuhannya apa, dan forum/jadwal mana yang memantaunya.
- Close by transitioning into the report: "Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai."

## 4. Workbook capture for this chapter

Two `reflection` cards plus one `yes-no` card (same pattern as `Module 4/src/content/chapter8.ts`'s reflection/yes-no/report sequence):

1. **Playbook SOP Pertama** (this is workbook entry **"Entri Kesembilan"**) — 3 short text inputs: forum/jadwal mana yang akan memantau kepatuhan SOP baru ini, siapa yang memimpin pemantauan itu, dan kapan SOP barunya mulai berlaku resmi.
2. **Mulai satu SOP atau langsung semua** — a `yes-no` card: `yesLabel: 'Mulai dari Satu SOP Dulu'`, `noLabel: 'Saya Siap Rombak Semua SOP Sekaligus'`, with an affirming `feedbackYes` for the recommended gradual path and a `feedbackNo` that gently nudges back toward starting with one SOP even if the reader picks the second option — this persists automatically under its own card id, fields `selection` and `selectionLabel` (already how `YesNoCard` works, nothing new to build).
3. **Jadwal Cek SOP Berikutnya** (this is workbook entry **"Entri Kesepuluh"**) — 1 reflection card, 1 short text input capturing when they'll check whether the redesigned SOP is actually holding up, and what they'll check then.

## 5. The report card — building the field map

Build one `report` card as the second-to-last card in this chapter, `downloadButtonText` should read something like `'Cetak / Simpan Laporan Ini'`. It must read every entry below via the existing `cardId`/`fieldId` lookup pattern and degrade gracefully (omit the line or show a neutral placeholder) if any entry is empty. **Read Chapters 1–7's actual source files first and substitute the real `cardId`/`fieldId` for each row** — the descriptions below tell you which workbook entry each row maps to; do not invent values without checking the files:

| Section heading | Label | Source workbook entry (verify exact cardId/fieldId in the real file) |
|---|---|---|
| SOP yang Anda Diabaikan | SOP yang diabaikan & tandanya (Bab 1) | Chapter 1's reflection card ("Entri Pertama") |
| Level Kematangan Anda | Level self-assessment & SOP prioritas (Bab 2) | Chapter 2's reflection card ("Entri Kedua") |
| Diagnosis Akar Masalah | Lensa dominan — format/akses/relevansi (Bab 3) | Chapter 3's reflection card ("Entri Ketiga") |
| Format Baru Anda | Checklist/langkah baru (Bab 4) | Chapter 4's reflection card ("Entri Keempat") |
| Rencana Akses Baru | Lokasi & pemilik update (Bab 5) | Chapter 5's reflection card ("Entri Kelima") |
| Mekanisme Kepatuhan | Cara & jadwal cek (Bab 6) | Chapter 6's reflection card ("Entri Keenam") |
| Rancangan Ulang SOP Anda | Skor kepercayaan redesain & alasannya (Bab 7) | Chapter 7's `finding-review` card ("Entri Ketujuh") — use its `storageKey` as `cardId`, fields `score` and `justification`, same pattern as the `chapter5-five-whys-practice` row in `Module 3/src/content/chapter8.ts` |
| Rancangan Ulang SOP Anda | Format, akses, dan mekanisme kepatuhan baru (Bab 7) | Chapter 7's reflection card ("Entri Kedelapan") |
| Playbook Instalasi Anda | Forum pemantau, pemimpin, tanggal mulai (Bab 8) | This chapter's first reflection card ("Entri Kesembilan") |
| Playbook Instalasi Anda | Pendekatan rollout | This chapter's `yes-no` card, field `selectionLabel` |
| Cek Berikutnya | Kapan & apa yang akan dicek (Bab 8) | This chapter's second reflection card ("Entri Kesepuluh") |

Match the section headings above closely (light rewording for flow is fine); the point is completeness and correct sourcing, not verbatim text.

## 6. Voice & format

- Match `chapter1.ts` through `chapter7.ts`'s register exactly — read all seven before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `reflection`) for the teaching/practice portions. Use `report` only for the compiled-summary card described in section 5.
- Target 10–20 cards total for this chapter, including the reflection cards, the yes-no card, and the report card.
- **The final closing card must NOT have a `cta` field** — established since Module 3's Chapter 1: the deck footer's "Selesai Bab Ini" button already fires `onDeckComplete`, which unconditionally returns to the module home screen. Just end with a warm, earned closing paragraph and no `cta`.
- Create `Module 5/src/content/chapter8.ts` exporting `chapter8Cards: Card[]`. Register it in `Module 5/src/content/chapters.ts` (append after chapter 7, same shape).

## 7. Out of scope for this prompt

- A module home screen or chapter-to-chapter navigation/unlocking (check `Module 5/src/components/ModuleHome.tsx` and `App.tsx` before assuming this is missing — it was ported during the Chapter 1 scaffold)
- A `review-request` card / testimonial capture — follow Module 1's pattern (`REVIEW_REQUEST_PROMPT.md`) as a future addendum if wanted, not part of this prompt. `review-request` does not currently exist in `Module 5/src/types/card.ts` — do not reference it.
- Dynamically recommending specific other services/modules (that logic lives in the separate funnel app)
- Restructuring `App.tsx`
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 4/` — do not touch any of them

## 8. Definition of done

- [ ] `Module 5/src/content/chapter8.ts` has 10–20 cards covering the playbook, gradual single-SOP rollout permission, and the review-rhythm-linked check cadence, including 2 `reflection` cards ("Entri Kesembilan" and "Entri Kesepuluh"), 1 `yes-no` rollout-approach card, and exactly 1 `report` card
- [ ] The report card's field map was built by reading Chapters 1–7's actual source files, not guessed — every `cardId`/`fieldId` in section 5's table is verified against the real files, and it degrades gracefully for any empty entry
- [ ] A working print/save mechanism on the report card (reuse the existing `ReportCard.tsx` behavior — no new dependency)
- [ ] Opens with a callback to Chapter 7; closing card has no `cta` field
- [ ] `Module 5/src/content/chapters.ts` registers Chapter 8 after Chapter 7
- [ ] Voice matches `chapter1.ts`–`chapter7.ts` — read all seven for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter7.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 4/` left completely untouched
