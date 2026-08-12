# Build Brief: Module 4 — App Scaffold + Chapter 1 ("Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 3/` is the most recent sibling app in this repo and the direct precedent for how to scaffold a new module: a React card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. It's fully built out: 8 chapters (`src/content/chapter1.ts`–`chapter8.ts`), a home screen with sequential chapter unlock (`src/components/ModuleHome.tsx`), a deck renderer (`src/components/DeckViewer.tsx`), and two `localStorage`-backed React contexts — `src/workbook/WorkbookContext.tsx` (persists reader answers) and `src/progress/ProgressContext.tsx` (persists chapter completion). Card types live in `src/types/card.ts`. `Module 3/` was itself scaffolded from `Module 2/` the same way this prompt asks you to scaffold `Module 4/` from `Module 3/` — see `MODULE_3_CHAPTER_1_REBUILD_PROMPT.md` at the repo root for that precedent if anything here is ambiguous.

Module 4 covers Service 4: Business Process Re-engineering (Silo-Breaking) — teaching SME owners that having good KPIs (Module 2) and a disciplined review rhythm (Module 3) still isn't enough if the underlying process is bersilo: work gets stuck at handoffs between departments, approvals pile up without adding value, and nobody actually owns the gaps between boxes on an org chart. This module teaches a 4-tier process architecture (L1 macro map down to L4 work instructions), diagnosing and redesigning broken handoffs, and installing a quality system that prevents errors instead of catching them after the fact.

There is no `Module 4/` app yet. **Module 4 is its own sibling app**, `Module 4/`, mirroring `Module 3/`'s stack, conventions, and voice — not a set of chapters bolted onto an earlier module's app. Read `Module 3/package.json`, `Module 3/vite.config.ts`, `Module 3/tsconfig.json`, `Module 3/tsconfig.app.json`, `Module 3/tsconfig.node.json`, `Module 3/src/index.css`, and `Module 3/.oxlintrc.json` before scaffolding — match them as closely as possible (same dependency versions, same Tailwind v4 setup).

Full 8-chapter syllabus reference: `MODULE_4_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 1 is bolded)

1. **Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo** ← this chapter
2. Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja
3. Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End
4. Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis
5. Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi
6. Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan
7. Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo
8. Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap

**This prompt covers scaffolding `Module 4/` plus Chapter 1 only.** Chapters 2–8 are separate, later prompts. Do not build them now.

## 3. Scaffold `Module 4/` (first-time setup)

- Create a new top-level folder `Module 4/`, sibling to `Module 1/`–`Module 3/`, same stack: Vite + React + TS + Tailwind v4 + framer-motion + lucide-react, same dependency versions as `Module 3/package.json` (just rename `"name"` to `"module-4"`).
- Port the shared, reusable primitives from `Module 3/src/` over verbatim (adapt import paths only — don't change logic or rename things gratuitously):
  - `types/card.ts` — all card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `worksheet`, `reflection`, `finding-review`, `report`)
  - `components/cards/*` — every card renderer (`InfoCard`, `YesNoCard`, `MultipleChoiceCard`, `FillInBlankCard`, `SortCard`, `WorksheetCard`, `ReflectionCard`, `FindingReviewCard`, `ReportCard`, `OptionButton`, `FeedbackBanner`)
  - `components/DeckViewer.tsx` and `components/ModuleHome.tsx`
  - `workbook/WorkbookContext.tsx` — change its `localStorage` key to `prediagnosis-workbook-module-4`
  - `progress/ProgressContext.tsx` — change its `localStorage` key to `prediagnosis-progress-module-4`
  - `App.tsx` — same home/chapter-switching shell pattern
- Update `index.html`'s `<title>` to something like "Business Process Re-engineering (Silo-Breaking) | Micro-Learning" and `ModuleHome.tsx`'s header eyebrow to "Modul 4 · Business Process Re-engineering (Silo-Breaking)".
- Do not port `content/chapter1.ts`–`chapter8.ts` or any earlier module's chapter content — Module 4 has none of its own yet.
- Create `Module 4/src/content/chapters.ts` in the same shape as `Module 3/src/content/chapters.ts` (an array of `{ id, number, title, description, cards }`), registering only Chapter 1 for now — later prompts append Chapters 2–8 to this same array.
- Verify `npm run dev` runs clean before moving on to content.

## 4. Chapter 1 objective

By the end of this chapter, the reader should feel — not just intellectually agree — that a great KPI system and a disciplined review rhythm can still leave a business bleeding at the seams: the points where work crosses from one department to another. They should walk away wanting a real map of their process, not just another framework to nod along to.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open with concrete SME friction at handoffs: sales janji promo ke pelanggan tapi tim produksi nggak pernah dikasih tahu; PO nyangkut berhari-hari nunggu tanda tangan tiga orang yang nggak jelas kenapa perlu tiga-tiganya; komplain pelanggan yang ditangani CS nggak pernah nyampe ke tim yang bisa benerin akar masalahnya. Give 2–3 varied, concrete examples.
- Introduce the core idea: masalah ini nggak hidup DI DALAM satu departemen — masalahnya hidup DI ANTARA departemen, di titik serah terima yang nggak ada pemiliknya.
- Term: "silo fungsional" — tiap departemen optimal buat dirinya sendiri (target sendiri, cara kerja sendiri), tapi nggak ada yang bertanggung jawab menjaga alur kerja tetap lancar begitu keluar dari batas departemennya.
- Connect to Module 2 and Module 3 conditionally, not assumed (mirror how `Module 3/src/content/chapter1.ts`'s Module 2 callback is self-contained): KPI yang bagus (Modul 2) dan ritme tinjauan yang disiplin (Modul 3) itu penting — tapi kalau prosesnya sendiri bersilo, EBR cuma akan menemukan masalah yang sama berulang-ulang tiap tinjauan, tanpa pernah membenahi akar prosesnya, karena akarnya bukan di angka — akarnya di cara kerja lintas departemen yang nggak pernah didesain dengan sengaja.
- A sharp distinction: proses yang terdokumentasi jelas dan disepakati lintas fungsi, vs proses yang cuma hidup di kepala orang atau diwariskan turun-temurun ("dari dulu juga gini caranya") tanpa siapa pun benar-benar merancangnya.
- A gut-check test: kalau ada yang salah di tengah proses, apakah jelas siapa yang tanggung jawab menyelesaikannya — atau semua orang saling lempar dan bilang "itu bukan bagian saya"?
- Preview arsitektur proses 4 tingkat sebagai peta yang akan memperbaiki ini.
- A personal reflection where the reader names a real handoff moment that broke down (see section 5).
- Close with a clear turn toward Chapter 2: "Sekarang Anda ngerasain sendiri di mana bocornya. Bab berikutnya kasih Anda peta lengkap arsitektur proses 4 tingkat, biar Anda tahu persis di level mana masalah itu perlu dibenahi."

## 5. New: capture real input

One `reflection` card — the first entry in Module 4's own workbook. Short free-text prompt, e.g. "Ceritakan satu momen serah terima antar tim/departemen yang belakangan berantakan — barang, informasi, atau tanggung jawab yang macet atau hilang di tengah jalan" (1–2 short text inputs, not a full form). Use the `reflection` card type ported in section 3 — no new card types are needed for this chapter.

## 6. Voice & format

- Match `Module 3/src/content/chapter1.ts`'s register exactly — read it before writing anything (Module 4 has no content of its own yet to reference). Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse the ported card types freely (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10–20 cards total for this chapter.
- Create `Module 4/src/content/chapter1.ts` exporting `chapter1Cards: Card[]`, and register it in `Module 4/src/content/chapters.ts`.

## 7. Out of scope for this prompt

- Chapters 2–8 content
- The final PDF/report export/compilation (Chapter 8's job, same as earlier modules' pattern)
- Any backend/save-to-server logic (frontend-only, per the original funnel brief)
- Wiring Module 4 into the main funnel app's offer/recommendation screen (separate task)

## 8. Definition of done

- [ ] `Module 4/` exists as an independent Vite + TS + Tailwind app; `npm run dev` runs clean
- [ ] Shared primitives (card types, card components, `DeckViewer`, `ModuleHome`, `WorkbookContext`, `ProgressContext`) ported with Module-4-specific `localStorage` keys
- [ ] `Module 4/src/content/chapter1.ts` has 10–20 cards covering section 4, including exactly one `reflection` card
- [ ] `Module 4/src/content/chapters.ts` registers Chapter 1
- [ ] Voice matches earlier modules' — read `Module 3/src/content/chapter1.ts` for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] `Module 1/`, `Module 2/`, and `Module 3/` left completely untouched
