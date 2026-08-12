# Build Brief: Module 5 — App Scaffold + Chapter 1 ("Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 4/` is the most recent sibling app in this repo and the direct precedent for how to scaffold a new module: a React card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. It's fully built out: 8 chapters (`src/content/chapter1.ts`–`chapter8.ts`), a home screen with sequential chapter unlock (`src/components/ModuleHome.tsx`), a deck renderer (`src/components/DeckViewer.tsx`), and two `localStorage`-backed React contexts — `src/workbook/WorkbookContext.tsx` (persists reader answers) and `src/progress/ProgressContext.tsx` (persists chapter completion). Card types live in `src/types/card.ts`. `Module 4/` was itself scaffolded from `Module 3/` the same way this prompt asks you to scaffold `Module 5/` from `Module 4/` — see `MODULE_4_CHAPTER_1_REBUILD_PROMPT.md` at the repo root for that precedent if anything here is ambiguous.

Module 5 covers Service 5: SOP Optimization & Usability Redesign — teaching SME owners that a written SOP (even one built the right way, per Module 4's L3/L4 work) doesn't fix anything by itself if nobody actually follows it. This module diagnoses why SOPs get ignored — usang, sulit diakses, atau formatnya nggak actionable — redesigns them into a format people actually use at the point of work, and installs the routine compliance checks that move a business from "SOP diikuti kalau lagi diawasi" toward "kerja standar diverifikasi secara aktif."

There is no `Module 5/` app yet. **Module 5 is its own sibling app**, `Module 5/`, mirroring `Module 4/`'s stack, conventions, and voice — not a set of chapters bolted onto an earlier module's app. Read `Module 4/package.json`, `Module 4/vite.config.ts`, `Module 4/tsconfig.json`, `Module 4/tsconfig.app.json`, `Module 4/tsconfig.node.json`, `Module 4/src/index.css`, and `Module 4/.oxlintrc.json` before scaffolding — match them as closely as possible (same dependency versions, same Tailwind v4 setup).

Full 8-chapter syllabus reference: `MODULE_5_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 1 is bolded)

1. **Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu** ← this chapter
2. Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif
3. Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi?
4. Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan
5. Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder
6. Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif'
7. Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai
8. Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap

**This prompt covers scaffolding `Module 5/` plus Chapter 1 only.** Chapters 2–8 are separate, later prompts. Do not build them now.

## 3. Scaffold `Module 5/` (first-time setup)

- Create a new top-level folder `Module 5/`, sibling to `Module 1/`–`Module 4/`, same stack: Vite + React + TS + Tailwind v4 + framer-motion + lucide-react, same dependency versions as `Module 4/package.json` (just rename `"name"` to `"module-5"`).
- Port the shared, reusable primitives from `Module 4/src/` over verbatim (adapt import paths only — don't change logic or rename things gratuitously):
  - `types/card.ts` — all card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `worksheet`, `reflection`, `finding-review`, `report`)
  - `components/cards/*` — every card renderer (`InfoCard`, `YesNoCard`, `MultipleChoiceCard`, `FillInBlankCard`, `SortCard`, `WorksheetCard`, `ReflectionCard`, `FindingReviewCard`, `ReportCard`, `OptionButton`, `FeedbackBanner`)
  - `components/DeckViewer.tsx` and `components/ModuleHome.tsx`
  - `workbook/WorkbookContext.tsx` — change its `localStorage` key to `prediagnosis-workbook-module-5`
  - `progress/ProgressContext.tsx` — change its `localStorage` key to `prediagnosis-progress-module-5`
  - `App.tsx` — same home/chapter-switching shell pattern
- Update `index.html`'s `<title>` to something like "SOP Optimization & Usability Redesign | Micro-Learning" and `ModuleHome.tsx`'s header eyebrow to "Modul 5 · SOP Optimization & Usability Redesign".
- Do not port `content/chapter1.ts`–`chapter8.ts` or any earlier module's chapter content — Module 5 has none of its own yet.
- Create `Module 5/src/content/chapters.ts` in the same shape as `Module 4/src/content/chapters.ts` (an array of `{ id, number, title, description, cards }`), registering only Chapter 1 for now — later prompts append Chapters 2–8 to this same array.
- Verify `npm run dev` runs clean before moving on to content.

## 4. Chapter 1 objective

By the end of this chapter, the reader should feel — not just intellectually agree — that having an SOP on paper (even a beautifully mapped L1-L4 process from Module 4) is worthless the moment employees stop actually reading it. They should walk away wanting to know exactly why their own SOPs get ignored, not just another lecture on why documentation matters.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open with concrete SME friction around ignored SOPs: SOP produksi udah dicetak dan ditempel di dinding tapi operator tetap kerja pakai cara sendiri yang "udah biasa"; SOP onboarding karyawan baru ada di Google Drive tapi nggak pernah dibuka — staf baru belajar dari nanya senior, bukan dari dokumen; SOP dibuat rame-rame pas training, semua orang ngangguk, terus sebulan kemudian nggak ada yang inget isinya. Give 2–3 varied, concrete examples.
- Introduce the core idea: "SOP ada" dan "SOP dipakai" itu dua hal yang beda total — dan kebanyakan bisnis cuma pernah menyelesaikan yang pertama.
- Term: "dokumen berdebu" — SOP yang ditulis sekali, disimpan, terus nggak pernah disentuh lagi sampai isinya nggak sesuai lagi sama cara kerja yang sebenarnya di lapangan.
- Connect to Module 4 conditionally, not assumed (mirror how earlier modules' Chapter 1 callbacks are self-contained): kalau reader sudah ikut Modul 4, mereka sekarang punya L3 (prosedur) dan L4 (instruksi kerja) yang jelas — tapi itu belum menjamin dipakai; kalau belum ikut Modul 4, bab ini tetap jalan dengan SOP apa pun yang sudah ada di bisnis mereka, sekasar apa pun bentuknya (bahkan cuma catatan informal atau kebiasaan turun-temurun).
- A sharp distinction: SOP yang benar-benar hidup — dibaca, dipakai, jadi rujukan nyata pas kerja — vs SOP yang cuma jadi bukti formalitas buat audit/sertifikasi tapi nggak pernah benar-benar membentuk cara kerja sehari-hari.
- A gut-check test: kalau karyawan baru masuk hari ini dan disuruh baca SOP yang ada, apakah mereka bisa langsung kerja dengan benar tanpa nanya-nanya — atau SOP itu cuma dokumen yang "ada tapi nggak dipakai buat apa-apa"?
- Preview the 4-level compliance maturity scale as the map the rest of the module will use.
- A personal reflection where the reader names one specific SOP in their business that everyone quietly ignores (see section 5).
- Close with a clear turn toward Chapter 2: "Sekarang Anda tahu SOP mana yang paling sering didiamkan. Bab berikutnya kasih Anda skala lengkap buat mengukur separah apa masalahnya, dan ke mana harus menuju."

## 5. New: capture real input

One `reflection` card — the first entry in Module 5's own workbook. Short free-text prompt, e.g. "Sebutkan satu SOP (formal atau cuma kebiasaan tak tertulis) di bisnis Anda yang Anda tahu sering diabaikan atau nggak diikuti dengan benar — dan gimana Anda tahu itu diabaikan" (1–2 short text inputs, not a full form). Use the `reflection` card type ported in section 3 — no new card types are needed for this chapter.

## 6. Voice & format

- Match `Module 4/src/content/chapter1.ts`'s register exactly — read it before writing anything (Module 5 has no content of its own yet to reference). Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse the ported card types freely (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10–20 cards total for this chapter.
- Create `Module 5/src/content/chapter1.ts` exporting `chapter1Cards: Card[]`, and register it in `Module 5/src/content/chapters.ts`.

## 7. Out of scope for this prompt

- Chapters 2–8 content
- The final PDF/report export/compilation (Chapter 8's job, same as earlier modules' pattern)
- Any backend/save-to-server logic (frontend-only, per the original funnel brief)
- Wiring Module 5 into the main funnel app's offer/recommendation screen (separate task)

## 8. Definition of done

- [ ] `Module 5/` exists as an independent Vite + TS + Tailwind app; `npm run dev` runs clean
- [ ] Shared primitives (card types, card components, `DeckViewer`, `ModuleHome`, `WorkbookContext`, `ProgressContext`) ported with Module-5-specific `localStorage` keys
- [ ] `Module 5/src/content/chapter1.ts` has 10–20 cards covering section 4, including exactly one `reflection` card
- [ ] `Module 5/src/content/chapters.ts` registers Chapter 1
- [ ] Voice matches earlier modules' — read `Module 4/src/content/chapter1.ts` for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] `Module 1/`, `Module 2/`, `Module 3/`, and `Module 4/` left completely untouched
