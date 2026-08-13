# Build Brief: Module 6 — App Scaffold + Chapter 1 ("Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 5/` is the most recent sibling app in this repo and the direct precedent for how to scaffold a new module: a React card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. It's fully built out: 8 chapters (`src/content/chapter1.ts`–`chapter8.ts`), a home screen with sequential chapter unlock (`src/components/ModuleHome.tsx`), a deck renderer (`src/components/DeckViewer.tsx`), and two `localStorage`-backed React contexts — `src/workbook/WorkbookContext.tsx` (persists reader answers) and `src/progress/ProgressContext.tsx` (persists chapter completion). Card types live in `src/types/card.ts`. `Module 5/` was itself scaffolded from `Module 4/` the same way this prompt asks you to scaffold `Module 6/` from `Module 5/` — see `MODULE_5_CHAPTER_1_REBUILD_PROMPT.md` at the repo root for that precedent if anything here is ambiguous.

Module 6 covers Service 6: Performance Management System Overhaul — teaching SME owners that even a business with good KPIs, a working review rhythm, and clean processes (Modules 2-5) can still fail on execution if the people running it don't have clear goals, never get real feedback beyond an annual review, and have underperformance either ignored forever or jumped straight to firing with nothing formal in between. This module builds the full performance cycle: collaborative goal-setting at the start of each period, a structured coaching rhythm throughout, and a formal corrective-action ladder for when someone underperforms.

There is no `Module 6/` app yet. **Module 6 is its own sibling app**, `Module 6/`, mirroring `Module 5/`'s stack, conventions, and voice — not a set of chapters bolted onto an earlier module's app. Read `Module 5/package.json`, `Module 5/vite.config.ts`, `Module 5/tsconfig.json`, `Module 5/tsconfig.app.json`, `Module 5/tsconfig.node.json`, `Module 5/src/index.css`, and `Module 5/.oxlintrc.json` before scaffolding — match them as closely as possible (same dependency versions, same Tailwind v4 setup).

Full 8-chapter syllabus reference: `MODULE_6_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 1 is bolded)

1. **Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah** ← this chapter
2. Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif
3. Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas
4. Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin
5. Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas?
6. Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal
7. Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran
8. Menginstal Siklus PMS — Kepemilikan, Ritme, dan Laporan Lengkap

**This prompt covers scaffolding `Module 6/` plus Chapter 1 only.** Chapters 2–8 are separate, later prompts. Do not build them now.

## 3. Scaffold `Module 6/` (first-time setup)

- Create a new top-level folder `Module 6/`, sibling to `Module 1/`–`Module 5/`, same stack: Vite + React + TS + Tailwind v4 + framer-motion + lucide-react, same dependency versions as `Module 5/package.json` (just rename `"name"` to `"module-6"`).
- Port the shared, reusable primitives from `Module 5/src/` over verbatim (adapt import paths only — don't change logic or rename things gratuitously):
  - `types/card.ts` — all card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `worksheet`, `reflection`, `finding-review`, `report`)
  - `components/cards/*` — every card renderer (`InfoCard`, `YesNoCard`, `MultipleChoiceCard`, `FillInBlankCard`, `SortCard`, `WorksheetCard`, `ReflectionCard`, `FindingReviewCard`, `ReportCard`, `OptionButton`, `FeedbackBanner`)
  - `components/DeckViewer.tsx` and `components/ModuleHome.tsx`
  - `workbook/WorkbookContext.tsx` — change its `localStorage` key to `prediagnosis-workbook-module-6`
  - `progress/ProgressContext.tsx` — change its `localStorage` key to `prediagnosis-progress-module-6`
  - `App.tsx` — same home/chapter-switching shell pattern
- Update `index.html`'s `<title>` to something like "Performance Management System Overhaul | Micro-Learning" and `ModuleHome.tsx`'s header eyebrow to "Modul 6 · Performance Management System Overhaul".
- Do not port `content/chapter1.ts`–`chapter8.ts` or any earlier module's chapter content — Module 6 has none of its own yet.
- Create `Module 6/src/content/chapters.ts` in the same shape as `Module 5/src/content/chapters.ts` (an array of `{ id, number, title, description, cards }`), registering only Chapter 1 for now — later prompts append Chapters 2–8 to this same array.
- Verify `npm run dev` runs clean before moving on to content.

## 4. Chapter 1 objective

By the end of this chapter, the reader should feel — not just intellectually agree — that "we do a review once a year" is not a performance management system, it's the absence of one. They should walk away wanting to know exactly which piece of the full cycle their business is missing, not just another lecture on why feedback matters.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open with concrete SME friction: karyawan yang nggak pernah dikasih tahu jelas apa yang diharapkan dari mereka di awal tahun, terus pas review akhir tahun kaget kenapa dinilai jelek; manajer yang cuma ngobrol soal kinerja setahun sekali, jadi feedback-nya basi — masalah yang harusnya dibenerin bulan Maret baru dibahas bulan Desember; karyawan underperform yang dibiarkan bertahun-tahun sampai akhirnya "cape sendiri" terus dipecat mendadak tanpa proses yang jelas, bikin sisa tim ketakutan bukan termotivasi. Give 2–3 varied, concrete examples.
- Introduce the core idea: manajemen kinerja itu bukan satu titik (review tahunan), tapi tiga tahap yang harus jalan terus — tujuan yang jelas di awal, feedback yang rutin di tengah, dan tindakan korektif yang formal kalau ada yang meleset. Kebanyakan bisnis SME cuma punya satu titik itu (dan seringnya bahkan itu pun nggak konsisten dijalankan).
- Term: "jebakan kosong di tengah" — bisnis yang punya titik awal (orang direkrut/dikasih tahu jabatannya) dan titik akhir (dipecat kalau kelewat parah), tapi nggak ada apa-apa yang sistematis di antaranya — nggak ada tujuan yang jelas, nggak ada feedback rutin, nggak ada proses sebelum keputusan besar diambil.
- Connect to Modules 2-5 conditionally, not assumed (mirror how earlier modules' Chapter 1 callbacks are self-contained): kalau reader sudah ikut modul-modul sebelumnya, mereka sekarang punya KPI yang jelas (Modul 2), ritme review bisnis (Modul 3), proses yang lebih efisien (Modul 4), dan SOP yang dipatuhi (Modul 5) — tapi itu semua level bisnis/sistem, bukan level orang per orang; kalau belum ikut modul-modul itu, bab ini tetap jalan dengan cara kerja apa pun yang sudah ada di bisnis mereka sekarang.
- A sharp distinction: tim yang tahu persis apa yang diharapkan dari mereka, dapat feedback rutin, dan tahu ada proses yang adil kalau mereka struggling — vs tim yang cuma tahu mereka "kerja aja" sampai suatu saat dipanggil ke ruangan bos.
- A gut-check test: kalau reader tanya ke 3 karyawan mereka sekarang "apa tujuan kinerja Anda periode ini, dan siapa yang terakhir kasih Anda feedback soal itu, dan kapan?" — apa mereka bisa jawab dengan jelas dan cepat, atau bakal bingung?
- Preview the 3-stage PMS cycle (goal-setting, coaching, corrective action) as the map the rest of the module will use.
- A personal reflection where the reader names one specific team member whose goals are unclear to them, or who hasn't gotten real feedback in a while (see section 5).
- Close with a clear turn toward Chapter 2: "Sekarang Anda punya satu nama konkret di kepala. Bab berikutnya kasih Anda peta lengkap siklus manajemen kinerja, biar Anda tahu persis bagian mana yang bolong."

## 5. New: capture real input

One `reflection` card — the first entry in Module 6's own workbook. Short free-text prompt, e.g. "Sebutkan satu anggota tim Anda yang tujuannya nggak jelas, atau yang udah lama nggak dapat feedback kinerja yang jelas dari Anda — dan gimana Anda tahu itu jadi masalah" (1–2 short text inputs, not a full form). Use the `reflection` card type ported in section 3 — no new card types are needed for this chapter.

## 6. Voice & format

- Match `Module 5/src/content/chapter1.ts`'s register exactly — read it before writing anything (Module 6 has no content of its own yet to reference). Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse the ported card types freely (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10–20 cards total for this chapter.
- Create `Module 6/src/content/chapter1.ts` exporting `chapter1Cards: Card[]`, and register it in `Module 6/src/content/chapters.ts`.

## 7. Out of scope for this prompt

- Chapters 2–8 content
- The final PDF/report export/compilation (Chapter 8's job, same as earlier modules' pattern)
- Any backend/save-to-server logic (frontend-only, per the original funnel brief)
- Wiring Module 6 into the main funnel app's offer/recommendation screen (separate task)

## 8. Definition of done

- [ ] `Module 6/` exists as an independent Vite + TS + Tailwind app; `npm run dev` runs clean
- [ ] Shared primitives (card types, card components, `DeckViewer`, `ModuleHome`, `WorkbookContext`, `ProgressContext`) ported with Module-6-specific `localStorage` keys
- [ ] `Module 6/src/content/chapter1.ts` has 10–20 cards covering section 4, including exactly one `reflection` card
- [ ] `Module 6/src/content/chapters.ts` registers Chapter 1
- [ ] Voice matches earlier modules' — read `Module 5/src/content/chapter1.ts` for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] `Module 1/`, `Module 2/`, `Module 3/`, `Module 4/`, and `Module 5/` left completely untouched
