# Build Brief: Module 8 — Chapter 8 ("Menginstal Kebiasaan Change Management — Ritme Penguatan, Kepemilikan, dan Laporan Lengkap")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 8/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 7/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-7 already exist (`Module 8/src/content/chapter1.ts` through `chapter7.ts`).

**Before writing anything, read all seven chapter files in full, plus `Module 8/src/content/chapters.ts`.** This chapter's report card (section 5) depends on the *exact* `cardId`/`fieldId` values those files actually used — don't guess or approximate them from this brief's earlier chapter prompts, since the writer of each chapter may have named fields slightly differently than suggested. Build the field map by reading the real files, the same way `Module 7/src/content/chapter8.ts`'s report card was built from Module 7's actual Chapters 1-7 (open that file for a concrete reference of the pattern, including how it handles the `finding-review` `storageKey` row).

**This is the capstone chapter.** No new card types are needed — `report` (type `'report'`) already exists in `Module 8/src/types/card.ts` and its renderer already exists at `Module 8/src/components/cards/ReportCard.tsx`, both carried over in the scaffold. It reads `useWorkbookStore` entries via the same `cardId`/`fieldId` lookup pattern `finding-review` already uses, renders them read-only in sections, and has a working print/save button (`window.print()`, styled with `print:` Tailwind variants — already built, don't rebuild it).

**This prompt covers Chapter 8 only.**

Full 8-chapter syllabus reference: `MODULE_8_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 8 is bolded)

1. Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai" — done
2. Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan — done
3. Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan — done
4. Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa — done
5. Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win — done
6. Menjalankan Rollout dan Mengatasi Resistensi di Lapangan — done
7. Lokakarya Change Rollout: Merancang Paket Change Management Lengkap untuk Satu Perubahan Nyata — done
8. **Menginstal Kebiasaan Change Management — Ritme Penguatan, Kepemilikan, dan Laporan Lengkap** ← this chapter

## 3. Chapter 8 objective

The reader has, on paper and partly proven in the field, a complete change management package for one real change (Chapters 3-7). This chapter makes sure the *skill* survives past this one change: explicit permission to install it for one change first (not run five change initiatives simultaneously), an ownership and reinforcement rhythm that prevents backsliding, an optional connection to whichever earlier modules produced the change being rolled out, and a downloadable report compiling the reader's entire journey through Chapters 1-7.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by calling back to Chapter 7** — paket change management lengkap sudah ada di atas kertas dan sebagian sudah terbukti di lapangan. Sekarang: gimana caranya ini nggak cuma dipakai sekali untuk perubahan ini, tapi jadi kebiasaan yang dipakai lagi tiap kali ada perubahan baru.
- **"Perubahan tanpa pemilik reinforcement yang eksplisit itu cuma kemenangan sesaat"** — tie back to Chapter 1's core "jebakan sudah dibeli/dibuat = sudah selesai" point, satu level lebih tinggi: bahkan rollout yang paling sukses di minggu-minggu pertama bisa diam-diam kembali ke cara lama kalau nggak ada satu orang yang eksplisit ditugaskan menjaga kebiasaan barunya bertahan setelah momentum awal reda.
- **New: permission eksplisit untuk mulai dari satu perubahan dulu.** Setelah 8 bab merancang metodologi lengkap change management, pembaca gampang tergoda untuk langsung menerapkan proses lengkap ini ke semua perubahan yang sedang berjalan sekaligus. Katakan dengan jelas: instal dulu kebiasaan ini untuk SATU perubahan yang sudah dirancang di Bab 3-7, buktikan itu bertahan lewat ritme penguatan di bawah, baru pakai metodologi yang sama untuk perubahan berikutnya. Ini bukan usaha yang lebih rendah — ini cara supaya kebiasaannya beneran melekat, bukan kolaps karena terlalu banyak perubahan dikelola sekaligus.
- **Ritme penguatan (reinforcement).** Jadwal cek berkala setelah rollout awal — bukan cuma dianggap selesai begitu quick win tercapai — untuk memastikan perubahan masih dipakai persis seperti yang dimaksudkan, menangkap sinyal balik ke cara lama sedini mungkin (balik ke Bab 6), dan merayakan lagi kemajuan yang sudah bertahan.
- **Menghubungkan ke modul lain yang sudah dikerjakan (Modul 2-7).** Kalau perubahan yang baru saja di-rollout adalah hasil salah satu Modul 2-7 (arsitektur KPI, governance EBR, SOP baru, sistem manajemen kinerja, arsitektur jabatan, dst.), sebutkan singkat bahwa kebiasaan change management ini adalah langkah terakhir yang bikin modul itu beneran terpakai, bukan cuma dokumen bagus. Kalau reader belum menyelesaikan modul manapun, framing-nya tetap self-contained: cukup sarankan pemilik reinforcement ini juga jadi orang yang menjaga perubahan-perubahan berikutnya, dari sumber mana pun.
- **Playbook ringkas satu perubahan**: satu ringkasan — perubahan mana yang jadi fokus, siapa pemilik reinforcement-nya, ritme cek berkala seperti apa, dan kapan perubahan berikutnya boleh mulai dikelola dengan metodologi yang sama.
- Close by transitioning into the report: "Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai."

## 4. Workbook capture for this chapter

Two `reflection` cards plus one `yes-no` card (same pattern as `Module 7/src/content/chapter8.ts`'s reflection/yes-no/report sequence):

1. **Playbook Change Management Pertama** (this is workbook entry **"Entri Kesembilan"**) — 3 short text inputs: siapa yang akan jadi pemilik dan menjaga ritme penguatan perubahan ini, seberapa sering cek berkala akan dilakukan, dan kapan perubahan berikutnya boleh mulai dikelola dengan metodologi yang sama.
2. **Mulai satu perubahan atau langsung semua** — a `yes-no` card: `yesLabel: 'Mulai dari Satu Perubahan Dulu'`, `noLabel: 'Saya Siap Jalankan Beberapa Perubahan Sekaligus'`, with an affirming `feedbackYes` for the recommended gradual path and a `feedbackNo` that gently nudges back toward starting with one change even if the reader picks the second option — this persists automatically under its own card id, fields `selection` and `selectionLabel` (already how `YesNoCard` works, nothing new to build).
3. **Jadwal Cek Reinforcement Berikutnya** (this is workbook entry **"Entri Kesepuluh"**) — 1 reflection card, 1 short text input capturing when they'll check whether the change is still actually being used as intended, and what they'll check then.

## 5. The report card — building the field map

Build one `report` card as the second-to-last card in this chapter, `downloadButtonText` should read something like `'Cetak / Simpan Laporan Ini'`. It must read every entry below via the existing `cardId`/`fieldId` lookup pattern and degrade gracefully (omit the line or show a neutral placeholder) if any entry is empty. **Read Chapters 1-7's actual source files first and substitute the real `cardId`/`fieldId` for each row** — the descriptions below tell you which workbook entry each row maps to; do not invent values without checking the files:

| Section heading | Label | Source workbook entry (verify exact cardId/fieldId in the real file) |
|---|---|---|
| Perubahan yang Diperhatikan | Nama perubahan & tanda masalah (Bab 1) | Chapter 1's reflection card ("Entri Pertama") |
| Peta Diri di Change Management | Self-assessment 2 tahap (Bab 2) | Chapter 2's reflection card ("Entri Kedua") |
| Diagnosis Resistensi Anda | Lensa dominan & tanda-tanda (Bab 3) | Chapter 3's reflection card ("Entri Ketiga") |
| Kasus Perubahan & Stakeholder | Kasus perubahan & daftar stakeholder (Bab 4) | Chapter 4's reflection card ("Entri Keempat") |
| Rencana Rollout Anda | Perubahan terkunci & rencana komunikasi/pelatihan/quick win (Bab 5) | Chapter 5's reflection card ("Entri Kelima") |
| Catatan Eksekusi Lapangan | Progres rollout & penanganan resistensi (Bab 6) | Chapter 6's reflection card ("Entri Keenam") |
| Paket Change Management Anda | Skor kepercayaan & alasan (Bab 7) | Chapter 7's `finding-review` card ("Entri Ketujuh") — use its `storageKey` as `cardId`, fields `score` and `justification`, same pattern as the job-architecture-profile review row in `Module 7/src/content/chapter8.ts` |
| Paket Change Management Anda | Ringkasan paket terintegrasi (Bab 7) | Chapter 7's reflection card ("Entri Kedelapan") |
| Playbook Instalasi Anda | Pemilik, ritme cek, mulai perubahan berikutnya (Bab 8) | This chapter's first reflection card ("Entri Kesembilan") |
| Playbook Instalasi Anda | Pendekatan rollout | This chapter's `yes-no` card, field `selectionLabel` |
| Cek Berikutnya | Kapan & apa yang akan dicek (Bab 8) | This chapter's second reflection card ("Entri Kesepuluh") |

Match the section headings above closely (light rewording for flow is fine); the point is completeness and correct sourcing, not verbatim text.

## 6. Voice & format

- Match `chapter1.ts` through `chapter7.ts`'s register exactly — read all seven before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `reflection`) for the teaching/practice portions. Use `report` only for the compiled-summary card described in section 5.
- Target 10-20 cards total for this chapter, including the reflection cards, the yes-no card, and the report card.
- **The final closing card must NOT have a `cta` field** — established since Module 3's Chapter 1: the deck footer's "Selesai Bab Ini" button already fires `onDeckComplete`, which unconditionally returns to the module home screen. Just end with a warm, earned closing paragraph and no `cta`.
- Create `Module 8/src/content/chapter8.ts` exporting `chapter8Cards: Card[]`. Register it in `Module 8/src/content/chapters.ts` (append after chapter 7, same shape).

## 7. Out of scope for this prompt

- A module home screen or chapter-to-chapter navigation/unlocking (check `Module 8/src/components/ModuleHome.tsx` and `App.tsx` before assuming this is missing — it was carried over in the scaffold)
- A `review-request` card / testimonial capture — follow Module 1's pattern (`REVIEW_REQUEST_PROMPT.md`) as a future addendum if wanted, not part of this prompt. `review-request` does not currently exist in `Module 8/src/types/card.ts` — do not reference it.
- Dynamically recommending specific other services/modules (that logic lives in the separate funnel app)
- Restructuring `App.tsx`
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 7/` — do not touch any of them

## 8. Definition of done

- [ ] `Module 8/src/content/chapter8.ts` has 10-20 cards covering the playbook, gradual single-change rollout permission, and the rhythm-linked reinforcement check, including 2 `reflection` cards ("Entri Kesembilan" and "Entri Kesepuluh"), 1 `yes-no` rollout-approach card, and exactly 1 `report` card
- [ ] The report card's field map was built by reading Chapters 1-7's actual source files, not guessed — every `cardId`/`fieldId` in section 5's table is verified against the real files, and it degrades gracefully for any empty entry
- [ ] A working print/save mechanism on the report card (reuse the existing `ReportCard.tsx` behavior — no new dependency)
- [ ] Opens with a callback to Chapter 7; closing card has no `cta` field
- [ ] `Module 8/src/content/chapters.ts` registers Chapter 8 after Chapter 7
- [ ] Voice matches `chapter1.ts`-`chapter7.ts` — read all seven for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`-`chapter7.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 7/` left completely untouched
