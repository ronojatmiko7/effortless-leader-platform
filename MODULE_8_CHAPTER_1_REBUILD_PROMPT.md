# Build Brief: Module 8 — Chapter 1 ("Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan 'Sudah Dibeli/Dibuat = Sudah Selesai'")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 7/` is the most recent sibling app in this repo and the direct precedent for `Module 8/`'s stack and conventions: a React card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

**Like Module 7, `Module 8/` is scaffolded for you by a script, not by you.** `scaffold-module.ps1` was run before this prompt (`scaffold-module.ps1 -SourceModule 7 -TargetModule 8 -SourceTitle "Job Architecture & Competency Modeling" -TargetTitle "Enterprise Change Management Rollout"`). It copied every shared primitive from `Module 7/src/` into `Module 8/src/` verbatim (import paths adjusted automatically) and did the module-specific string swaps. **Do not re-port, re-copy, or rewrite any of the files listed below — they already exist correctly.** Your only job this prompt is content: `chapter1.ts` and `chapters.ts`.

Confirm the following already exist in `Module 8/` before writing content (a quick read, not a rebuild):
- `types/card.ts` — all card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `worksheet`, `reflection`, `finding-review`, `report`)
- `components/cards/*` — every card renderer (`InfoCard`, `YesNoCard`, `MultipleChoiceCard`, `FillInBlankCard`, `SortCard`, `WorksheetCard`, `ReflectionCard`, `FindingReviewCard`, `ReportCard`, `OptionButton`, `FeedbackBanner`)
- `components/DeckViewer.tsx` and `components/ModuleHome.tsx`
- `workbook/WorkbookContext.tsx` — `localStorage` key already set to `prediagnosis-workbook-module-8`
- `progress/ProgressContext.tsx` — `localStorage` key already set to `prediagnosis-progress-module-8`
- `App.tsx` — same home/chapter-switching shell pattern as Module 7
- `package.json` — `"name"` already `"module-8"`
- `index.html` — `<title>` already "Enterprise Change Management Rollout | Micro-Learning"
- `ModuleHome.tsx` — header eyebrow already "Modul 8 · Enterprise Change Management Rollout"

If `node_modules/` is missing, that's expected — the chained runner script installs it once before invoking you. If anything above looks wrong or missing (the scaffold script failed partway), stop and report it rather than trying to fix it by hand.

`Module 8` covers Service 8: Enterprise Change Management Rollout — teaching SME owners that a tool, system, or SOP that's been bought or built well doesn't automatically get used; without deliberate change management (readiness, buy-in, training, reinforcement), even a well-designed change quietly dies at the frontline within weeks. This module builds the skill of managing the human side of any organizational change — from readiness and stakeholder buy-in through rollout execution and lasting reinforcement.

Full 8-chapter syllabus reference: `MODULE_8_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 1 is bolded)

1. **Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai"** ← this chapter
2. Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan
3. Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan
4. Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa
5. Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win
6. Menjalankan Rollout dan Mengatasi Resistensi di Lapangan
7. Lokakarya Change Rollout: Merancang Paket Change Management Lengkap untuk Satu Perubahan Nyata
8. Menginstal Kebiasaan Change Management — Ritme Penguatan, Kepemilikan, dan Laporan Lengkap

**This prompt covers Chapter 1 content only.** Chapters 2-8 are separate, later prompts. Do not build them now.

## 3. Chapter 1 objective

By the end of this chapter, the reader should feel — not just intellectually agree — that buying a tool, building a system, or writing a new SOP is the easy part, and that the real work (the part almost every SME skips) is making sure people actually use it once the initial announcement excitement fades. They should walk away wanting to know exactly what's missing between "kami sudah punya sistem/tool/SOP barunya" and "tim beneran pakai itu tiap hari," not just another lecture on why change is hard.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open with concrete SME friction: software baru yang dibeli mahal-mahal buat tracking inventory/sales, tapi tiga bulan kemudian tim balik pakai spreadsheet lama karena "ribet"; SOP baru yang sudah dicetak rapi dan ditempel di dinding gudang, tapi nggak ada yang benar-benar ngikutin karena nggak pernah dijelaskan kenapa caranya harus berubah; mesin atau alat kerja baru yang sudah dibeli tapi cuma dipakai satu-dua minggu pertama lalu diam di pojokan karena nggak ada yang dilatih pakai dengan benar. Give 2-3 varied, concrete examples.
- Introduce the core idea: change management itu dua tahap — Tahap 1: kesiapan & buy-in (menyiapkan tim secara mental dan praktis sebelum perubahan dijalankan); Tahap 2: eksekusi & penguatan (menjalankan perubahannya dan menjaganya bertahan setelah semangat awal reda). Kebanyakan bisnis SME melompat langsung ke Tahap 2 — atau bahkan cuma mengumumkan lalu berharap semuanya beres sendiri — tanpa pernah menyelesaikan Tahap 1.
- Term: "jebakan sudah dibeli/dibuat = sudah selesai" — anggapan bahwa begitu tool sudah dibeli, sistem sudah dirancang, atau SOP sudah ditulis dan dibagikan, pekerjaan perubahan itu otomatis selesai — padahal itu baru garis start, bukan garis finish.
- Connect to Modules 2-7 conditionally, not assumed (mirror how earlier modules' Chapter 1 callbacks are self-contained): kalau reader sudah menyelesaikan salah satu Modul 2-7, mereka sekarang punya minimal satu perubahan yang sudah dirancang dengan baik di atas kertas — modul ini adalah langkah berikutnya yang bikin perubahan itu beneran dipakai; kalau belum menyelesaikan modul manapun, bab ini tetap jalan untuk perubahan apa pun yang sedang atau akan dijalankan reader, dari sumber mana pun.
- A sharp distinction: perubahan yang benar-benar terpakai — tim tahu kenapa berubah, sudah dilatih, dan terus dipakai sampai jadi kebiasaan — vs perubahan yang cuma didiamkan — diumumkan sekali, mungkin ditempel di dinding atau dipasang di komputer, lalu perlahan-lahan ditinggalkan tanpa ada yang benar-benar menyadari kapan persisnya itu berhenti dipakai.
- A gut-check test: kalau reader pikirkan satu perubahan (tool, sistem, atau SOP) yang pernah mereka coba jalankan dalam setahun terakhir, apakah itu masih dipakai sekarang persis seperti yang dimaksudkan — atau sudah diam-diam ditinggalkan?
- Preview the 2-stage change management architecture (kesiapan & buy-in, lalu eksekusi & penguatan) as the map the rest of the module will use.
- A personal reflection where the reader names one specific change — either one they're about to roll out, or one that quietly died after being introduced (see section 4).
- Close with a clear turn toward Chapter 2: "Sekarang Anda punya satu perubahan konkret di kepala. Bab berikutnya kasih Anda peta lengkap dua tahap change management, biar Anda tahu persis bagian mana yang bolong."

## 4. Workbook capture for this chapter

One `reflection` card — the first entry in Module 8's own workbook, **"Entri Pertama."** Short free-text prompt, e.g. "Sebutkan satu perubahan di bisnis Anda — tool, sistem, atau SOP yang sedang/akan Anda jalankan, atau yang pernah diam-diam ditinggalkan tim — dan apa tanda-tanda itu nggak beneran terpakai" (1-2 short text inputs, not a full form). Use the `reflection` card type already ported in the scaffold — no new card types are needed for this chapter.

## 5. Voice & format

- Match `Module 7/src/content/chapter1.ts`'s register exactly — read it before writing anything (Module 8 has no content of its own yet to reference). Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse the ported card types freely (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10-20 cards total for this chapter.
- Create `Module 8/src/content/chapter1.ts` exporting `chapter1Cards: Card[]`, and register it in `Module 8/src/content/chapters.ts` (this file doesn't exist yet — the scaffold script deliberately didn't create it; build it in the same shape as `Module 7/src/content/chapters.ts`, registering only Chapter 1 for now).

## 6. Out of scope for this prompt

- Any file-porting, scaffolding, or config work — already done by `scaffold-module.ps1`. If you find yourself about to `Write` a file under `components/cards/`, `workbook/`, `progress/`, or edit `package.json`/`index.html`/`vite.config.ts`, stop — that's not this prompt's job.
- Chapters 2-8 content
- The final PDF/report export/compilation (Chapter 8's job, same as earlier modules' pattern)
- Any backend/save-to-server logic (frontend-only, per the original funnel brief)
- Wiring Module 8 into the main funnel app's offer/recommendation screen (separate task)

## 7. Definition of done

- [ ] `Module 8/` scaffold verified intact (card types, card components, `DeckViewer`, `ModuleHome`, `WorkbookContext`, `ProgressContext`, config files) — read-only check, not rebuilt
- [ ] `Module 8/src/content/chapter1.ts` has 10-20 cards covering section 3, including exactly one `reflection` card ("Entri Pertama")
- [ ] `Module 8/src/content/chapters.ts` created, registering Chapter 1
- [ ] Voice matches `Module 7/src/content/chapter1.ts` — read it for reference before writing
- [ ] `npm run dev` runs clean, no console errors
- [ ] `Module 1/` through `Module 7/` left completely untouched
