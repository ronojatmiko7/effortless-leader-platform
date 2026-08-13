# Build Brief: Module 8 — Chapter 7 ("Lokakarya Change Rollout: Merancang Paket Change Management Lengkap untuk Satu Perubahan Nyata")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 8/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 7/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-6 already exist (`Module 8/src/content/chapter1.ts`-`chapter6.ts`) — read all six before writing anything, for voice, for the `reflection` card type / `useWorkbookStore` persistence pattern, and specifically for the **exact `cardId`/`fieldId` values** Chapter 5's locked-in change entry used — don't guess them.

**No new card type is needed for this chapter.** `finding-review` (type `'finding-review'`) already exists in `Module 8/src/types/card.ts` and its renderer at `Module 8/src/components/cards/FindingReviewCard.tsx`, both carried over in the scaffold and already wired into `DeckViewer.tsx`. It reads back a prior `useWorkbookStore` entry as a recap, then captures a 1-4 score plus a short justification, persisted under a `storageKey`. Use it, don't rebuild it — see `Module 7/src/content/chapter7.ts` for a reference of the pattern.

**This prompt covers Chapter 7 only.** Chapter 8 is a separate, later prompt. Do not build it now.

Full 8-chapter syllabus reference: `MODULE_8_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 7 is bolded)

1. Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai" — done
2. Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan — done
3. Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan — done
4. Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa — done
5. Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win — done
6. Menjalankan Rollout dan Mengatasi Resistensi di Lapangan — done
7. **Lokakarya Change Rollout: Merancang Paket Change Management Lengkap untuk Satu Perubahan Nyata** ← this chapter
8. Menginstal Kebiasaan Change Management — Ritme Penguatan, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 7 objective

This is the hands-on workshop chapter. Across Chapters 3-6, the reader has built a resistance diagnosis, a case for change and stakeholder map, a rollout plan, and field execution technique — but scattered across separate exercises, all anchored to one real change. This chapter has them pull it all together into one concrete, ready-to-use change management package.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapters 3-6 — reader sudah punya diagnosis resistensi, kasus perubahan, peta stakeholder, rencana rollout, dan pengalaman menjalankannya di lapangan. Sekarang: menyatukan semuanya jadi satu paket change management yang utuh untuk perubahan nyata mereka.
- **Recap step**: pull back the reader's Chapter 5 entry (the locked-in change and rollout plan) as a `finding-review` card — reader mengonfirmasi/meninjau ulang apakah rencananya masih relevan dengan apa yang sudah terjadi di lapangan (Bab 6), lalu menilai skor kepercayaan (1-4) bahwa paket change management ini beneran siap dipakai penuh, dengan alasan singkat.
- **Menyatukan jadi satu paket**: diagnosis resistensi (Bab 3), kasus perubahan & peta stakeholder (Bab 4), rencana rollout (Bab 5), dan catatan eksekusi lapangan (Bab 6), untuk perubahan yang sama.
- **Sandingkan versi "sebelum" vs "sesudah"**: pendekatan lama (mengumumkan perubahan sekali lalu berharap semuanya beres sendiri) vs pendekatan baru (diagnosis resistensi dulu, kasus perubahan yang menjawabnya, rollout terencana, dan penanganan resistensi yang aktif di lapangan).
- **Cara memperkenalkan paket ini ke orang lain yang ikut menjalankan perubahan** (co-founder, manajer, atau siapa pun yang ikut memimpin rollout) **tanpa berasa proses birokrasi berlebihan.** Framing yang tepat: ini bikin peluang perubahan beneran melekat jauh lebih besar dibanding cara lama, bukan tambahan kerjaan admin yang memperlambat.
- A worked example: full walkthrough for one change showing the complete package end-to-end — diagnosis, kasus perubahan, peta stakeholder, rencana rollout, dan catatan penanganan lapangan.
- Close with a clear turn toward Chapter 8: "Paket change management-nya sekarang utuh di atas kertas dan sudah terbukti sebagian di lapangan. Bab terakhir: cara menginstal kebiasaan ini biar beneran dipakai tiap kali ada perubahan baru — bukan cuma sekali pakai untuk perubahan ini saja — dan laporan lengkap dari semua yang sudah Anda kerjakan sejak Bab 1."

## 4. Workbook capture for this chapter

Use **two** cards this chapter:

1. **finding-review** — recap the reader's Chapter 5 entry (the locked-in change and rollout plan, "Entri Kelima"), pulled via its known `useWorkbookStore` field ids. Have the reader score their confidence (1-4) that the complete package is ready to fully rely on, informed by what actually happened in Chapter 6, with a short justification. Storage key e.g. `chapter7-rollout-package-review`. This is workbook entry **"Entri Ketujuh."**
2. **reflection** — the reader writes out the final integrated package summary for their chosen change: kasus perubahan singkat, stakeholder kunci, dan elemen rollout paling penting. This is workbook entry **"Entri Kedelapan."** 3 short text inputs, e.g. "Perubahan mana yang jadi fokus paket ini?", "Apa kasus perubahan dan stakeholder kuncinya?", "Apa elemen rollout (komunikasi/pelatihan/quick win) yang paling menentukan keberhasilannya?"

If the Chapter 5 entry is empty (reader skipped it), degrade gracefully — this should already be how `finding-review` behaves from its existing implementation; don't change that behavior.

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`-`chapter6.ts`'s register exactly — read all six before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`) for the teaching/practice portions. Use `finding-review` and `reflection` only for the two moments in section 4.
- Target 10-20 cards total for this chapter.
- Create `Module 8/src/content/chapter7.ts` exporting `chapter7Cards: Card[]`. Register it in `Module 8/src/content/chapters.ts` (append after chapter 6, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapter 8 content
- Reinforcement rhythm, ownership, and gradual-rollout permission (Chapter 8's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the integrated package summary is persisted so Chapter 8 can read it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 7/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 8/src/content/chapter7.ts` has 10-20 cards covering assembling the diagnosis, case for change, stakeholder map, rollout plan, and field execution notes into one package, introducing it without triggering "bureaucracy" pushback, and a worked example, including exactly one `finding-review` card (Entri Ketujuh, recapping Chapter 5's entry) and one `reflection` card (Entri Kedelapan)
- [ ] The `finding-review` card's recap items use the real `cardId`/`fieldId` from Chapter 5's actual source file, verified by reading it — not guessed
- [ ] Opens with a callback to Chapters 3-6; closes previewing Chapter 8
- [ ] `Module 8/src/content/chapters.ts` registers Chapter 7 after Chapter 6
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`-`chapter6.ts` — read all six for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`-`chapter6.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 7/` left completely untouched
