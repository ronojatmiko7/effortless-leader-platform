# Build Brief: Module 6 — Chapter 6 ("Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 6/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 5/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–5 already exist (`Module 6/src/content/chapter1.ts`–`chapter5.ts`) — read all five before writing anything, for voice, for the `reflection` card type / `useWorkbookStore` persistence pattern, and specifically for the **exact `cardId`/`fieldId` values** Chapter 5's diagnosis entry used — don't guess them, Chapter 7's recap depends on them being right.

**This prompt covers Chapter 6 only.** Chapters 7–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_6_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 6 is bolded)

1. Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah — done
2. Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif — done
3. Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas — done
4. Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin — done
5. Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas? — done
6. **Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal** ← this chapter
7. Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran
8. Menginstal Siklus PMS — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 6 objective

The reader has diagnosed why their team member is underperforming (Chapter 5). This chapter builds the formal corrective-action ladder — targeted coaching, training, then a Performance Improvement Plan (PIP) — matched to that diagnosis, so a real process exists before any formal appraisal or big decision, instead of the reader jumping straight from "noticing a problem" to "letting it go" or "firing someone."

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 5 — diagnosis buat kasus reader udah ada. Sekarang: jalur formal buat menindaklanjutinya.
- Kenapa "tangga," bukan langsung lompat ke hukuman atau pemecatan: proses formal bertahap itu lebih adil buat karyawan (kasih kesempatan nyata buat benerin diri), dan lebih aman buat bisnis (ada jejak dokumentasi kalau akhirnya harus ambil keputusan besar).
- **Tangga #1 — Coaching Tertarget.** Percakapan eksplisit yang menamai masalahnya, standar yang diharapkan, dan rencana konkret jangka pendek — cocok terutama buat will gap atau masalah ekspektasi ringan.
- **Tangga #2 — Pelatihan.** Kalau akar masalahnya jelas skill gap, sediakan pelatihan atau mentoring spesifik yang menutup gap itu — bukan cuma bilang "coba lebih keras" ke orang yang memang belum punya kemampuannya.
- **Tangga #3 — Performance Improvement Plan (PIP).** Kalau coaching dan pelatihan belum cukup, PIP formal: target spesifik, tenggat waktu jelas, jadwal check-in, dan konsekuensi yang eksplisit kalau target nggak tercapai — didokumentasikan tertulis, bukan cuma diomongin lisan.
- **Memetakan lensa Bab 5 ke tangga yang paling relevan**: skill gap biasanya mulai dari pelatihan; will gap biasanya mulai dari coaching tertarget; masalah ekspektasi mungkin cukup diselesaikan lewat klarifikasi ulang tujuan (balik ke Bab 3) plus coaching, sebelum eskalasi lebih jauh — tapi tetap boleh naik tangga kalau langkah awal belum berhasil.
- Kapan harus terus naik tangga vs kapan sebaiknya berhenti dulu dan kasih kesempatan lebih lama di satu tangga sebelum eskalasi.
- A worked example: merancang tangga lengkap (tangga mana yang dipakai, seperti apa bentuknya, timeline-nya) untuk satu kasus underperformance.
- A hands-on exercise: reader designs the corrective-action pathway for the team member diagnosed in Chapter 5 — tangga mana yang relevan, seperti apa rencananya, dan timeline check-in-nya.
- Close with a clear turn toward Chapter 7: "Semua bagiannya sudah ada — tujuan yang jelas, ritme coaching, diagnosis, dan jalur tindakan korektif. Bab 7 lokakarya: satukan semuanya jadi satu siklus manajemen kinerja utuh buat satu tim atau peran nyata di bisnis Anda."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keenam"**. The reader designs the corrective-action pathway for the person diagnosed in Chapter 5. E.g. 2 short text inputs: "Tangga mana yang relevan buat kasus ini — coaching tertarget, pelatihan, PIP, atau kombinasi — dan kenapa?" and "Seperti apa rencananya, dan kapan check-in pertama dilakukan?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter5.ts`'s register exactly — read all five before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely.
- Target 10–20 cards total for this chapter.
- Create `Module 6/src/content/chapter6.ts` exporting `chapter6Cards: Card[]`. Register it in `Module 6/src/content/chapters.ts` (append after chapter 5, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 7–8 content
- Combining the goal-setting/coaching/diagnosis/corrective-action work into one unified cycle (Chapter 7's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the corrective-action plan is persisted so Chapter 7 can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 5/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 6/src/content/chapter6.ts` has 10–20 cards covering the three-rung corrective-action ladder, how to match rungs to Chapter 5's diagnosis, and when to escalate vs hold, including exactly one `reflection` card labeled Entri Keenam
- [ ] At least one worked example of designing a corrective-action pathway
- [ ] Opens with a callback to Chapter 5
- [ ] `Module 6/src/content/chapters.ts` registers Chapter 6 after Chapter 5
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter5.ts` — read all five for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter5.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 5/` left completely untouched
