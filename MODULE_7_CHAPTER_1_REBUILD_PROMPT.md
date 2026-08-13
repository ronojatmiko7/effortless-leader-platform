# Build Brief: Module 7 — Chapter 1 ("Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan 'Kelihatannya Cocok'")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 6/` is the most recent sibling app in this repo and the direct precedent for `Module 7/`'s stack and conventions: a React card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

**Unlike Modules 2–6, `Module 7/` has already been scaffolded for you — by a script, not by you.** `scaffold-module.ps1` was run before this prompt (`scaffold-module.ps1 -SourceModule 6 -TargetModule 7 -SourceTitle "Performance Management System Overhaul" -TargetTitle "Job Architecture & Competency Modeling"`). It copied every shared primitive from `Module 6/src/` into `Module 7/src/` verbatim (import paths adjusted automatically) and did the module-specific string swaps. **Do not re-port, re-copy, or rewrite any of the files listed below — they already exist correctly.** Your only job this prompt is content: `chapter1.ts` and `chapters.ts`.

Confirm the following already exist in `Module 7/` before writing content (a quick read, not a rebuild):
- `types/card.ts` — all card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `worksheet`, `reflection`, `finding-review`, `report`)
- `components/cards/*` — every card renderer (`InfoCard`, `YesNoCard`, `MultipleChoiceCard`, `FillInBlankCard`, `SortCard`, `WorksheetCard`, `ReflectionCard`, `FindingReviewCard`, `ReportCard`, `OptionButton`, `FeedbackBanner`)
- `components/DeckViewer.tsx` and `components/ModuleHome.tsx`
- `workbook/WorkbookContext.tsx` — `localStorage` key already set to `prediagnosis-workbook-module-7`
- `progress/ProgressContext.tsx` — `localStorage` key already set to `prediagnosis-progress-module-7`
- `App.tsx` — same home/chapter-switching shell pattern as Module 6
- `package.json` — `"name"` already `"module-7"`
- `index.html` — `<title>` already "Job Architecture & Competency Modeling | Micro-Learning"
- `ModuleHome.tsx` — header eyebrow already "Modul 7 · Job Architecture & Competency Modeling"

If `node_modules/` is missing, that's expected — the chained runner script installs it once before invoking you. If anything above looks wrong or missing (the scaffold script failed partway), stop and report it rather than trying to fix it by hand.

`Module 7` covers Service 7: Job Architecture & Competency Modeling — teaching SME owners that a job description which is just a task list, paired with a hiring process that runs on "orangnya kelihatan cocok," is why bad hires keep happening even when everyone involved tried hard in the interview. This module builds a real competency model (Kompetensi Inti/Fungsional/Kepemimpinan, with defined proficiency levels) that job descriptions can actually be built on, then rebuilds recruitment around structured, competency-based screening — Behavioral Event Interviewing and a scoring rubric — instead of gut feel.

Full 8-chapter syllabus reference: `MODULE_7_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 1 is bolded)

1. **Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok"** ← this chapter
2. Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti
3. Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan
4. Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur
5. Mendiagnosis Rekrutmen Ad-Hoc — Kenapa "Kelihatannya Cocok" Bukan Metode Seleksi
6. Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi
7. Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran
8. Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap

**This prompt covers Chapter 1 content only.** Chapters 2–8 are separate, later prompts. Do not build them now.

## 3. Chapter 1 objective

By the end of this chapter, the reader should feel — not just intellectually agree — that a job description listing tasks ("jawab telepon, susun laporan, follow up klien") tells a candidate what they'll do but says nothing about what it actually takes to do it well, and that hiring off "orangnya kelihatan cocok" is why bad hires keep slipping through even from people who interview carefully. They should walk away wanting to know exactly what's missing between their job descriptions and their hiring process, not just another lecture on why good hiring matters.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open with concrete SME friction: karyawan baru yang keliatan oke banget di interview — ngobrolnya enak, chemistry-nya nyambung — tapi tiga bulan kemudian ternyata nggak punya skill teknis dasar yang dibutuhkan perannya; deskripsi jabatan yang isinya cuma daftar tugas ("input data, balas email, handle komplain") tanpa pernah bilang seberapa mahir orangnya harus di tiap hal itu; promosi yang diputuskan karena "udah lama di sini" atau "orangnya rajin," bukan karena benar-benar punya kompetensi buat peran yang lebih tinggi, dan berujung orang itu struggling di posisi barunya. Give 2–3 varied, concrete examples.
- Introduce the core idea: arsitektur jabatan itu dua tahap — Tahap 1: model kompetensi yang mendefinisikan apa artinya "bagus" untuk sebuah peran (bukan cuma daftar tugas); Tahap 2: proses rekrutmen yang benar-benar menguji kompetensi itu secara terstruktur, bukan menebak dari chemistry di ruang interview. Kebanyakan bisnis SME melompat langsung ke rekrutmen tanpa pernah menyelesaikan Tahap 1 — jadi Tahap 2-nya nggak punya apa-apa yang solid buat diuji.
- Term: "jebakan kelihatannya cocok" — keputusan rekrutmen atau promosi yang diambil berdasarkan kesan umum yang enak (komunikatif, sopan, chemistry nyambung) tanpa pernah benar-benar mengonfirmasi orang itu punya kompetensi spesifik yang dibutuhkan perannya.
- Connect to Module 6 conditionally, not assumed (mirror how earlier modules' Chapter 1 callbacks are self-contained): kalau reader sudah ikut Modul 6, mereka sekarang punya siklus penetapan tujuan dan coaching yang jelas — tapi itu semua mengasumsikan sudah ada standar yang jelas soal apa yang diharapkan dari sebuah peran; kalau belum ikut Modul 6, bab ini tetap jalan dengan deskripsi jabatan apa pun yang sudah ada di bisnis mereka sekarang, seformal atau seinformal apa pun bentuknya.
- A sharp distinction: peran yang punya standar kompetensi jelas — orang yang direkrut/dipromosikan tahu persis apa yang dinilai dan kenapa mereka lolos — vs peran yang cuma punya judul dan daftar tugas, di mana siapa pun yang "kelihatannya oke" bisa masuk tanpa pernah benar-benar diuji.
- A gut-check test: kalau reader ambil satu deskripsi jabatan yang sedang dipakai sekarang, apakah di situ ada kompetensi spesifik dengan tingkat kemahiran yang jelas — atau isinya cuma daftar tugas tanpa standar seberapa bagus harus dikerjakan?
- Preview the 2-stage job architecture (competency model, then structured recruitment) as the map the rest of the module will use.
- A personal reflection where the reader names one specific role — either one they're hiring for soon, or one where a past hire turned out to be a mismatch (see section 4).
- Close with a clear turn toward Chapter 2: "Sekarang Anda punya satu peran konkret di kepala. Bab berikutnya kasih Anda peta lengkap dua tahap arsitektur jabatan, biar Anda tahu persis bagian mana yang bolong."

## 4. Workbook capture for this chapter

One `reflection` card — the first entry in Module 7's own workbook, **"Entri Pertama."** Short free-text prompt, e.g. "Sebutkan satu peran di bisnis Anda — yang sedang Anda rekrut, atau yang pernah salah rekrut/salah promosi — dan gimana Anda tahu ada yang nggak pas" (1–2 short text inputs, not a full form). Use the `reflection` card type already ported in the scaffold — no new card types are needed for this chapter.

## 5. Voice & format

- Match `Module 6/src/content/chapter1.ts`'s register exactly — read it before writing anything (Module 7 has no content of its own yet to reference). Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse the ported card types freely (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10–20 cards total for this chapter.
- Create `Module 7/src/content/chapter1.ts` exporting `chapter1Cards: Card[]`, and register it in `Module 7/src/content/chapters.ts` (this file doesn't exist yet — the scaffold script deliberately didn't create it; build it in the same shape as `Module 6/src/content/chapters.ts`, registering only Chapter 1 for now).

## 6. Out of scope for this prompt

- Any file-porting, scaffolding, or config work — already done by `scaffold-module.ps1`. If you find yourself about to `Write` a file under `components/cards/`, `workbook/`, `progress/`, or edit `package.json`/`index.html`/`vite.config.ts`, stop — that's not this prompt's job.
- Chapters 2–8 content
- The final PDF/report export/compilation (Chapter 8's job, same as earlier modules' pattern)
- Any backend/save-to-server logic (frontend-only, per the original funnel brief)
- Wiring Module 7 into the main funnel app's offer/recommendation screen (separate task)

## 7. Definition of done

- [ ] `Module 7/` scaffold verified intact (card types, card components, `DeckViewer`, `ModuleHome`, `WorkbookContext`, `ProgressContext`, config files) — read-only check, not rebuilt
- [ ] `Module 7/src/content/chapter1.ts` has 10–20 cards covering section 3, including exactly one `reflection` card ("Entri Pertama")
- [ ] `Module 7/src/content/chapters.ts` created, registering Chapter 1
- [ ] Voice matches `Module 6/src/content/chapter1.ts` — read it for reference before writing
- [ ] `npm run dev` runs clean, no console errors
- [ ] `Module 1/`, `Module 2/`, `Module 3/`, `Module 4/`, `Module 5/`, and `Module 6/` left completely untouched
