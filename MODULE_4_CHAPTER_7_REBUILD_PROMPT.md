# Build Brief: Module 4 — Chapter 7 ("Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 4/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 3/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–6 already exist (`Module 4/src/content/chapter1.ts`–`chapter6.ts`) — read all six before writing anything, for voice, for the `reflection` card type / `useWorkbookStore` persistence pattern, and specifically for the **exact `cardId`/`fieldId` values** Chapter 4's diagnosis entry used — don't guess them.

**No new card type is needed for this chapter.** `finding-review` (type `'finding-review'`) already exists in `Module 4/src/types/card.ts` and its renderer at `Module 4/src/components/cards/FindingReviewCard.tsx`, both ported during the Chapter 1 scaffold and already wired into `DeckViewer.tsx`. It reads back a prior `useWorkbookStore` entry as a recap, then captures a 1–4 score plus a short justification, persisted under a `storageKey`. Use it, don't rebuild it — see `Module 3/src/content/chapter5.ts` for a reference of the pattern.

**This prompt covers Chapter 7 only.** Chapter 8 is a separate, later prompt. Do not build it now.

Full 8-chapter syllabus reference: `MODULE_4_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 7 is bolded)

1. Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo — done
2. Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja — done
3. Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End — done
4. Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis — done
5. Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi — done
6. Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan — done
7. **Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo** ← this chapter
8. Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 7 objective

This is the hands-on workshop chapter. The reader has, across Chapters 3–6, mapped a process, diagnosed a broken handoff, written an instruction for it, and designed a prevention checkpoint — but scattered across separate exercises. This chapter has them pull it all together into one concrete redesign: fewer approvals, a clear owner, and a defined turnaround time for the specific handoff they've been working on.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapters 4–6 — reader sudah punya diagnosis, instruksi kerja, dan titik pencegahan untuk satu titik serah terima. Sekarang: menyatukan semuanya jadi satu rancangan ulang yang utuh.
- **Memangkas approval berlebih.** Untuk titik yang didiagnosis approval berlapis (Bab 4): tanya untuk tiap orang yang harus approve, "kalau orang ini dihilangkan dari alur approval, risiko konkret apa yang muncul?" — kalau jawabannya nggak jelas atau cuma "nanti dia complain", itu kandidat kuat buat dipangkas atau diturunkan jadi FYI (dikasih tahu, bukan harus approve).
- **Menetapkan pemilik proses yang jelas.** Untuk titik yang didiagnosis silo fungsional: tetapkan satu nama/peran yang jadi pemilik titik serah terima itu — bukan "tim X secara umum" tapi orang/peran spesifik yang bertanggung jawab kalau ada yang macet di situ.
- **Menetapkan SLA (batas waktu) per tahap.** Untuk titik yang didiagnosis bottleneck atau nggak ada kejelasan waktu: tentukan batas waktu maksimal yang wajar untuk tahap itu, dan apa yang terjadi kalau lewat (eskalasi ke siapa) — ini bisa terhubung ke ritme EBR dari Modul 3 sebagai forum yang memantau kalau SLA ini dilanggar.
- **Bawa semuanya jadi satu rancangan**: alur lama (proses yang bermasalah, dari Bab 3-4) vs alur baru (setelah dipangkas approvalnya, dikasih pemilik, dikasih SLA, dan dikasih titik pencegahan dari Bab 6) — sandingkan keduanya supaya bedanya kelihatan jelas dan konkret.
- A worked example redesign: take a messy example handoff (banyak approval, nggak jelas pemiliknya) and walk through the redesign step by step — cutting approvals, assigning an owner, setting an SLA, adding one QA checkpoint — landing on a visibly leaner "alur baru."
- Close with a clear turn toward Chapter 8: "Rancangan ulang Anda sudah ada di atas kertas. Bab terakhir: cara menginstalnya biar beneran jalan — bukan cuma rancangan bagus yang nggak pernah dieksekusi — dan laporan lengkap dari semua yang sudah Anda kerjakan dari Bab 1."

## 4. Workbook capture for this chapter

Use **two** cards this chapter:

1. **finding-review** — recap the reader's Chapter 4 entry (the worst handoff they diagnosed, "Entri Keempat"), pulled via its known `useWorkbookStore` field ids. Have the reader score their confidence (1–4) that their redesign (informed by this chapter) actually fixes that handoff, with a short justification. Storage key e.g. `chapter7-redesign-review`. This is workbook entry **"Entri Ketujuh."**
2. **reflection** — the reader writes out the final redesign summary for their chosen handoff: alur lama vs alur baru, pemilik baru, dan SLA baru. This is workbook entry **"Entri Kedelapan."** 3 short text inputs, e.g. "Apa yang berubah dari alur lama ke alur baru?", "Siapa pemilik baru titik ini?", "Berapa SLA/batas waktu barunya?"

If the Chapter 4 entry is empty (reader skipped it), degrade gracefully — this should already be how `finding-review` behaves from its existing implementation; don't change that behavior.

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter6.ts`'s register exactly — read all six before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`) for the teaching/practice portions. Use `finding-review` and `reflection` only for the two moments in section 4.
- Target 10–20 cards total for this chapter.
- Create `Module 4/src/content/chapter7.ts` exporting `chapter7Cards: Card[]`. Register it in `Module 4/src/content/chapters.ts` (append after chapter 6, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapter 8 content
- Rollout/gradual-start permission and the review-rhythm link to Module 3's EBR tiers (Chapter 8's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the redesign summary is persisted so Chapter 8 can read it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 3/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 4/src/content/chapter7.ts` has 10–20 cards covering cutting redundant approvals, assigning a clear process owner, setting an SLA per stage, and a worked before/after redesign example, including exactly one `finding-review` card (Entri Ketujuh, recapping Chapter 4's entry) and one `reflection` card (Entri Kedelapan)
- [ ] The `finding-review` card's recap items use the real `cardId`/`fieldId` from Chapter 4's actual source file, verified by reading it — not guessed
- [ ] Opens with a callback to Chapters 4–6; closes previewing Chapter 8
- [ ] `Module 4/src/content/chapters.ts` registers Chapter 7 after Chapter 6
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter6.ts` — read all six for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter6.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 3/` left completely untouched
