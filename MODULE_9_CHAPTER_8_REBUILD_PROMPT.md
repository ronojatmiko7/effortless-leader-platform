# Build Brief: Module 9 — Chapter 8 ("Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 9/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`-`Module 8/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-7 already exist (`Module 9/src/content/chapter1.ts` through `chapter7.ts`).

**Before writing anything, read all seven chapter files in full, plus `Module 9/src/content/chapters.ts`.** This chapter's report card (section 5) depends on the *exact* `cardId`/`fieldId` values those files actually used — don't guess or approximate them from this brief's earlier chapter prompts, since the writer of each chapter may have named fields slightly differently than suggested. Build the field map by reading the real files, the same way `Module 8/src/content/chapter8.ts`'s report card was built from Module 8's actual Chapters 1-7 (open that file for a concrete reference of the pattern, including how it handles the `finding-review` `storageKey` row).

**This is the capstone chapter.** No new card types are needed — `report` (type `'report'`) already exists in `Module 9/src/types/card.ts` and its renderer already exists at `Module 9/src/components/cards/ReportCard.tsx`, both carried over in the scaffold. It reads `useWorkbookStore` entries via the same `cardId`/`fieldId` lookup pattern `finding-review` already uses, renders them read-only in sections, and has a working print/save button (`window.print()`, styled with `print:` Tailwind variants — already built, don't rebuild it).

**This prompt covers Chapter 8 only.**

Full 8-chapter syllabus reference: `MODULE_9_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 8 is bolded)

1. "Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain — done
2. Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi — done
3. Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan — done
4. Data, Keamanan, dan Kepercayaan Tim — done
5. Merancang Alur Kerja AI Pertama Anda dengan Claude for Business — done
6. Menjalankan & Melatih Tim Memakai AI di Lapangan — done
7. Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata — done
8. **Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap** ← this chapter

## 3. Chapter 8 objective

The reader has, on paper and partly proven in the field, a complete AI adoption package for one real workflow (Chapters 3-7). This chapter makes sure the *discipline* survives past this one workflow: an ownership and evaluation rhythm that prevents backsliding, explicit permission to install it for one workflow first (not roll out AI to five processes simultaneously), an explicit tie back to Module 8's change-management discipline for readers who've done it, and a downloadable report compiling the reader's entire journey through Chapters 1-7.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by calling back to Chapter 7** — paket adopsi AI lengkap sudah ada di atas kertas dan sebagian sudah terbukti di lapangan. Sekarang: gimana caranya ini nggak cuma bertahan untuk alur kerja ini, tapi jadi kebiasaan yang dipakai lagi tiap kali bisnis mau mengadopsi AI untuk hal baru.
- **"Adopsi AI tanpa pemilik evaluasi yang eksplisit itu cuma eksperimen yang kebetulan sukses sesaat"** — tie back to Chapter 1's core "eksperimen AI acak" point, satu level lebih tinggi: bahkan alur kerja AI yang paling sukses di minggu-minggu pertama bisa diam-diam kembali ke cara manual kalau nggak ada satu orang yang eksplisit ditugaskan mengevaluasi dan menjaga kualitasnya setelah momentum awal reda.
- **Permission eksplisit untuk mulai dari satu alur kerja dulu.** Setelah 8 bab merancang metodologi adopsi AI yang lengkap, pembaca gampang tergoda untuk langsung menerapkan AI ke semua proses yang sedang berjalan sekaligus. Katakan dengan jelas: instal dulu kebiasaan ini untuk SATU alur kerja yang sudah dirancang di Bab 3-7, buktikan itu bertahan lewat ritme evaluasi di bawah, baru pakai metodologi yang sama untuk alur kerja berikutnya. Ini bukan usaha yang lebih rendah — ini cara supaya kebiasaannya beneran melekat, bukan kolaps karena terlalu banyak alur kerja AI dikelola sekaligus tanpa pengawasan yang cukup.
- **Ritme evaluasi.** Jadwal cek berkala setelah rollout awal — bukan cuma dianggap selesai begitu target keberhasilan Bab 5 tercapai sekali — untuk memastikan langkah cek manusia masih dijalankan konsisten (bukan cuma di minggu pertama), menangkap sinyal balik ke cara manual sedini mungkin (balik ke Bab 6), dan mengevaluasi apakah alur kerja ini masih menghasilkan nilai yang sepadan.
- **Menghubungkan ke Modul 8 (change management), kalau sudah dikerjakan.** Kalau reader sudah menyelesaikan Modul 8, sebutkan singkat bahwa seluruh proses adopsi AI di modul ini — dari memilih kasus pakai sampai menginstal kebiasaan — adalah penerapan langsung dari kerangka change management Modul 8 terhadap satu jenis perubahan spesifik: AI. Kalau reader belum menyelesaikan modul manapun, framing-nya tetap self-contained: cukup sarankan pemilik evaluasi ini juga jadi orang yang menjaga adopsi AI berikutnya di bisnis mereka.
- **Playbook ringkas satu alur kerja AI**: satu ringkasan — alur kerja mana yang jadi fokus, siapa pemilik evaluasinya, ritme cek berkala seperti apa, dan kapan alur kerja AI berikutnya boleh mulai dikelola dengan metodologi yang sama.
- Close by transitioning into the report: "Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai."

## 4. Workbook capture for this chapter

Two `reflection` cards plus one `yes-no` card (same pattern as `Module 8/src/content/chapter8.ts`'s reflection/yes-no/report sequence):

1. **Playbook Adopsi AI Pertama** (this is workbook entry **"Entri Kesembilan"**) — 3 short text inputs: siapa yang akan jadi pemilik dan menjaga ritme evaluasi alur kerja AI ini, seberapa sering cek berkala akan dilakukan, dan kapan alur kerja AI berikutnya boleh mulai dikelola dengan metodologi yang sama.
2. **Mulai satu alur kerja atau langsung semua** — a `yes-no` card: `yesLabel: 'Mulai dari Satu Alur Kerja Dulu'`, `noLabel: 'Saya Siap Terapkan AI ke Beberapa Alur Kerja Sekaligus'`, with an affirming `feedbackYes` for the recommended gradual path and a `feedbackNo` that gently nudges back toward starting with one workflow even if the reader picks the second option — this persists automatically under its own card id, fields `selection` and `selectionLabel` (already how `YesNoCard` works, nothing new to build).
3. **Jadwal Cek Evaluasi Berikutnya** (this is workbook entry **"Entri Kesepuluh"**) — 1 reflection card, 1 short text input capturing when they'll check whether the AI workflow is still being used correctly and delivering value, and what they'll check then.

## 5. The report card — building the field map

Build one `report` card as the second-to-last card in this chapter, `downloadButtonText` should read something like `'Cetak / Simpan Laporan Ini'`. It must read every entry below via the existing `cardId`/`fieldId` lookup pattern and degrade gracefully (omit the line or show a neutral placeholder) if any entry is empty. **Read Chapters 1-7's actual source files first and substitute the real `cardId`/`fieldId` for each row** — the descriptions below tell you which workbook entry each row maps to; do not invent values without checking the files:

| Section heading | Label | Source workbook entry (verify exact cardId/fieldId in the real file) |
|---|---|---|
| Eksperimen AI yang Pernah Dicoba | Contoh nyata & hasilnya (Bab 1) | Chapter 1's reflection card ("Entri Pertama") |
| Peta Diri di Level Pemakaian AI | Level saat ini & alasan (Bab 2) | Chapter 2's reflection card ("Entri Kedua") |
| Kasus Pakai Terpilih | Kandidat & skor filter (Bab 3) | Chapter 3's reflection card ("Entri Ketiga") |
| Batasan Data & Kepercayaan Tim | Ketakutan tim, jawaban CEO, batasan data (Bab 4) | Chapter 4's reflection card ("Entri Keempat") |
| Rancangan Alur Kerja Anda | Mode pemakaian, siapa pakai, cek manusia, target (Bab 5) | Chapter 5's reflection card ("Entri Kelima") |
| Catatan Eksekusi Lapangan | Progres, kesalahan AI & cara ditangani, sinyal bahaya (Bab 6) | Chapter 6's reflection card ("Entri Keenam") |
| Paket Adopsi AI Anda | Skor kepercayaan & justifikasi (Bab 7) | Chapter 7's `finding-review` card ("Entri Ketujuh") — use its `storageKey` as `cardId`, fields `score` and `justification`, same pattern as the change-management-package review row in `Module 8/src/content/chapter8.ts` |
| Paket Adopsi AI Anda | Ringkasan paket terintegrasi (Bab 7) | Chapter 7's reflection card ("Entri Kedelapan") |
| Playbook Instalasi Anda | Pemilik, ritme cek, mulai alur kerja berikutnya (Bab 8) | This chapter's first reflection card ("Entri Kesembilan") |
| Playbook Instalasi Anda | Pendekatan rollout | This chapter's `yes-no` card, field `selectionLabel` |
| Cek Berikutnya | Kapan & apa yang akan dicek (Bab 8) | This chapter's second reflection card ("Entri Kesepuluh") |

Match the section headings above closely (light rewording for flow is fine); the point is completeness and correct sourcing, not verbatim text.

## 6. Voice & format

- Match `chapter1.ts` through `chapter7.ts`'s register exactly — read all seven before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `reflection`) for the teaching/practice portions. Use `report` only for the compiled-summary card described in section 5.
- Target 10-20 cards total for this chapter, including the reflection cards, the yes-no card, and the report card.
- **The final closing card must NOT have a `cta` field** — established since Module 3's Chapter 1: the deck footer's "Selesai Bab Ini" button already fires `onDeckComplete`, which unconditionally returns to the module home screen. Just end with a warm, earned closing paragraph and no `cta`.
- Create `Module 9/src/content/chapter8.ts` exporting `chapter8Cards: Card[]`. Register it in `Module 9/src/content/chapters.ts` (append after chapter 7, same shape).

## 7. Out of scope for this prompt

- A module home screen or chapter-to-chapter navigation/unlocking (check `Module 9/src/components/ModuleHome.tsx` and `App.tsx` before assuming this is missing — it was carried over in the scaffold)
- A `review-request` card / testimonial capture — follow Module 1's pattern (`REVIEW_REQUEST_PROMPT.md`) as a future addendum if wanted, not part of this prompt. `review-request` does not currently exist in `Module 9/src/types/card.ts` — do not reference it.
- Dynamically recommending specific other services/modules (that logic lives in the separate funnel app)
- Restructuring `App.tsx`
- Any backend/save-to-server logic (still frontend-only)
- Wiring Module 9 into the Modules Hub registry (`Modules Hub/src/data/modules.ts`) — separate task, not part of this prompt
- `Module 1/`-`Module 8/` — do not touch any of them

## 8. Definition of done

- [ ] `Module 9/src/content/chapter8.ts` has 10-20 cards covering the playbook, gradual single-workflow rollout permission, and the rhythm-linked evaluation check, including 2 `reflection` cards ("Entri Kesembilan" and "Entri Kesepuluh"), 1 `yes-no` rollout-approach card, and exactly 1 `report` card
- [ ] The report card's field map was built by reading Chapters 1-7's actual source files, not guessed — every `cardId`/`fieldId` in section 5's table is verified against the real files, and it degrades gracefully for any empty entry
- [ ] A working print/save mechanism on the report card (reuse the existing `ReportCard.tsx` behavior — no new dependency)
- [ ] Opens with a callback to Chapter 7; closing card has no `cta` field
- [ ] `Module 9/src/content/chapters.ts` registers Chapter 8 after Chapter 7
- [ ] Voice matches `chapter1.ts`-`chapter7.ts` — read all seven for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`-`chapter7.ts` / current app behavior untouched
- [ ] `Module 1/`-`Module 8/` left completely untouched
