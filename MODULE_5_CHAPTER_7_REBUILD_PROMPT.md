# Build Brief: Module 5 — Chapter 7 ("Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 5/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 4/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–6 already exist (`Module 5/src/content/chapter1.ts`–`chapter6.ts`) — read all six before writing anything, for voice, for the `reflection` card type / `useWorkbookStore` persistence pattern, and specifically for the **exact `cardId`/`fieldId` values** Chapter 3's diagnosis entry used — don't guess them.

**No new card type is needed for this chapter.** `finding-review` (type `'finding-review'`) already exists in `Module 5/src/types/card.ts` and its renderer at `Module 5/src/components/cards/FindingReviewCard.tsx`, both ported during the Chapter 1 scaffold and already wired into `DeckViewer.tsx`. It reads back a prior `useWorkbookStore` entry as a recap, then captures a 1–4 score plus a short justification, persisted under a `storageKey`. Use it, don't rebuild it — see `Module 4/src/content/chapter7.ts` for a reference of the pattern.

**This prompt covers Chapter 7 only.** Chapter 8 is a separate, later prompt. Do not build it now.

Full 8-chapter syllabus reference: `MODULE_5_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 7 is bolded)

1. Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu — done
2. Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif — done
3. Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi? — done
4. Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan — done
5. Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder — done
6. Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif' — done
7. **Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai** ← this chapter
8. Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap

## 3. Chapter 7 objective

This is the hands-on workshop chapter. Across Chapters 3–6, the reader has diagnosed a specific SOP, redesigned its format, planned its new access location, and designed a compliance-check mechanism — but scattered across separate exercises. This chapter has them pull it all together into one concrete, ready-to-roll-out redesign for that same SOP.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapters 3–6 — reader sudah punya diagnosis, format baru, rencana akses, dan mekanisme cek buat satu SOP. Sekarang: menyatukan semuanya jadi satu rancangan ulang yang utuh dan siap dipakai.
- **Recap step**: pull back the reader's Chapter 3 diagnosis as a `finding-review` card — reader mengonfirmasi/meninjau ulang apa diagnosisnya masih akurat, lalu menilai skor kepercayaan (1–4) bahwa rancangan ulang yang sudah dibangun (dari Bab 4-6) beneran memperbaiki masalah itu, dengan alasan singkat.
- **Menyatukan jadi satu paket**: format baru (checklist/visual, dari Bab 4), lokasi akses baru (dari Bab 5), dan mekanisme kepatuhan (dari Bab 6) — untuk SOP yang sama. Sandingkan versi "sebelum" (dokumen berdebu / susah diakses / nggak pernah dicek) vs versi "sesudah" supaya bedanya kelihatan jelas dan konkret.
- **Cara memperkenalkan SOP versi baru ke tim tanpa bikin resistensi**: jangan cuma taruh SOP baru dan berharap orang otomatis pindah — ada momen memperkenalkan, jelaskan alasan kenapa berubah, dan kasih kesempatan orang lapangan kasih masukan sebelum benar-benar final. SOP yang dipaksakan tanpa penjelasan biasanya diam-diam diabaikan lagi, sama seperti SOP lama.
- A worked example: full before/after walk-through redesigning one messy SOP end to end — format lama vs baru, lokasi lama vs baru, cek kepatuhan yang sekarang ada vs yang dulu nggak ada sama sekali.
- Close with a clear turn toward Chapter 8: "Rancangan ulang SOP ini sudah utuh di atas kertas. Bab terakhir: cara menginstalnya biar beneran jalan minggu depan — bukan cuma rancangan bagus yang berakhir jadi dokumen berdebu berikutnya — dan laporan lengkap dari semua yang sudah Anda kerjakan sejak Bab 1."

## 4. Workbook capture for this chapter

Use **two** cards this chapter:

1. **finding-review** — recap the reader's Chapter 3 entry (the SOP they diagnosed, "Entri Ketiga"), pulled via its known `useWorkbookStore` field ids. Have the reader score their confidence (1–4) that the full redesign (informed by Chapters 4–6) actually fixes it, with a short justification. Storage key e.g. `chapter7-sop-redesign-review`. This is workbook entry **"Entri Ketujuh."**
2. **reflection** — the reader writes out the final redesign summary for their chosen SOP: format baru, lokasi akses baru, dan mekanisme kepatuhan barunya. This is workbook entry **"Entri Kedelapan."** 3 short text inputs, e.g. "Apa yang berubah dari format lama ke format baru?", "Di mana lokasi akses barunya?", "Apa mekanisme kepatuhannya, dan siapa yang mengecek?"

If the Chapter 3 entry is empty (reader skipped it), degrade gracefully — this should already be how `finding-review` behaves from its existing implementation; don't change that behavior.

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter6.ts`'s register exactly — read all six before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`) for the teaching/practice portions. Use `finding-review` and `reflection` only for the two moments in section 4.
- Target 10–20 cards total for this chapter.
- Create `Module 5/src/content/chapter7.ts` exporting `chapter7Cards: Card[]`. Register it in `Module 5/src/content/chapters.ts` (append after chapter 6, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapter 8 content
- Rollout/gradual-start permission and the compliance-check-rhythm link to Module 3/4 (Chapter 8's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the redesign summary is persisted so Chapter 8 can read it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 4/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 5/src/content/chapter7.ts` has 10–20 cards covering assembling the redesigned format, access, and compliance check into one package, introducing it to the team without resistance, and a worked before/after example, including exactly one `finding-review` card (Entri Ketujuh, recapping Chapter 3's entry) and one `reflection` card (Entri Kedelapan)
- [ ] The `finding-review` card's recap items use the real `cardId`/`fieldId` from Chapter 3's actual source file, verified by reading it — not guessed
- [ ] Opens with a callback to Chapters 3–6; closes previewing Chapter 8
- [ ] `Module 5/src/content/chapters.ts` registers Chapter 7 after Chapter 6
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter6.ts` — read all six for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter6.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 4/` left completely untouched
