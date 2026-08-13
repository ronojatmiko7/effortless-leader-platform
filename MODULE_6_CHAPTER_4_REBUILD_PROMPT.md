# Build Brief: Module 6 — Chapter 4 ("Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 6/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 5/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–3 already exist (`Module 6/src/content/chapter1.ts`–`chapter3.ts`) — read all three before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

**This prompt covers Chapter 4 only.** Chapters 5–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_6_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 4 is bolded)

1. Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah — done
2. Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif — done
3. Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas — done
4. **Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin** ← this chapter
5. Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas?
6. Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal
7. Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran
8. Menginstal Siklus PMS — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 4 objective

The reader has a clear, cascaded goal for one team member (Chapter 3), but a goal set once and never discussed again goes stale. This chapter gives concrete principles and a repeatable format for a short, routine 1-on-1 coaching cadence that actually gets kept, replacing "we'll talk about it at the annual review" with ongoing feedback.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 3 — tujuannya udah jelas dan disepakati bareng. Sekarang: gimana caranya tujuan itu tetap hidup sepanjang periode, bukan cuma dibahas sekali lalu dilupakan.
- Kenapa review tahunan doang gagal jadi feedback loop yang berguna: terlalu jarang buat benerin masalah pas masih kecil, terlalu banyak yang harus dibahas sekaligus jadi dangkal, dan orangnya (manajer maupun karyawan) udah lupa detail kejadian dari bulan-bulan sebelumnya.
- **Prinsip frekuensi.** 1-on-1 yang singkat tapi rutin (misalnya mingguan atau dwi-mingguan, 15-30 menit) jauh lebih efektif daripada satu sesi panjang setahun sekali — masalah kecil bisa langsung dibahas dan dibenerin sebelum membesar.
- **Format/agenda sederhana yang bisa diulang tiap sesi** — bukan ngobrol bebas tanpa arah: progress kerja vs tujuan yang disepakati (callback ke Bab 3), hambatan apa yang lagi dihadapi, feedback dua arah, dan satu action item konkret buat sesi berikutnya.
- **Feedback yang membangun vs feedback kosong.** Feedback yang berguna itu spesifik dan tentang perilaku/hasil konkret ("laporan minggu ini telat dua hari dari deadline yang kita sepakati"), bukan penilaian karakter yang kabur ("kamu kurang niat").
- **Kenapa harus dua arah.** Coaching yang sehat juga kasih ruang karyawan menyampaikan hambatan atau masukan balik ke manajer/sistem kerja — bukan cuma manajer menilai searah dari atas.
- **Cara menjaga sesi ini beneran rutin dijalankan**, bukan collapse jadi "nanti-nanti aja kalau sempat": jadwalkan di kalender berulang, perlakukan seserius meeting dengan klien, jangan gampang di-cancel begitu ada yang "lebih penting".
- A worked example: satu agenda 1-on-1 singkat yang lengkap, dari pembukaan sampai action item penutup.
- A hands-on exercise: reader designs their own 1-on-1 cadence — frekuensi, durasi, dan agenda — for their team or the person from Chapter 3.
- Close with a clear turn toward Chapter 5: "Ritme coaching-nya sekarang ada. Tapi kadang, meski tujuan sudah jelas dan feedback sudah rutin, tetap ada orang yang underperform. Bab 5 masuk ke cara mendiagnosis kenapa, sebelum Anda ambil tindakan apa pun."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keempat"**. E.g. 2 short text inputs: "Berapa sering dan berapa lama sesi 1-on-1 yang akan Anda jalankan buat tim Anda?" and "Apa saja poin agenda tetap yang akan Anda bahas tiap sesi?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter3.ts`'s register exactly — read all three before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — distinguishing constructive vs empty feedback could land well through a `multiple-choice` scenario exercise.
- Target 10–20 cards total for this chapter.
- Create `Module 6/src/content/chapter4.ts` exporting `chapter4Cards: Card[]`. Register it in `Module 6/src/content/chapters.ts` (append after chapter 3, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 5–8 content
- Diagnosing or fixing underperformance (Chapters 5-6's job)
- Re-teaching goal-setting mechanics (Chapter 3's job, already done)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the cadence design is persisted so later chapters can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 5/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 6/src/content/chapter4.ts` has 10–20 cards covering the frequency principle, the repeatable 1-on-1 agenda format, constructive vs empty feedback, and how to keep the cadence from collapsing, including exactly one `reflection` card labeled Entri Keempat
- [ ] At least one worked example of a complete 1-on-1 agenda
- [ ] Opens with a callback to Chapter 3
- [ ] `Module 6/src/content/chapters.ts` registers Chapter 4 after Chapter 3
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter3.ts` — read all three for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter3.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 5/` left completely untouched
