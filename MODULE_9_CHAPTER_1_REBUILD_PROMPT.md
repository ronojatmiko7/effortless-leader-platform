# Build Brief: Module 9 — Chapter 1 ("'Suruh Tim Coba AI' Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 8/` is the most recent sibling app in this repo and the direct precedent for `Module 9/`'s stack and conventions: a React card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

**Like Module 8, `Module 9/` is scaffolded for you by a script, not by you.** `scaffold-module.ps1` was run before this prompt (`scaffold-module.ps1 -SourceModule 8 -TargetModule 9 -SourceTitle "Enterprise Change Management Rollout" -TargetTitle "AI Adoption & Claude for Business"`). It copied every shared primitive from `Module 8/src/` into `Module 9/src/` verbatim (import paths adjusted automatically) and did the module-specific string swaps. **Do not re-port, re-copy, or rewrite any of the files listed below — they already exist correctly.** Your only job this prompt is content: `chapter1.ts` and `chapters.ts`.

Confirm the following already exist in `Module 9/` before writing content (a quick read, not a rebuild):
- `types/card.ts` — all card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `worksheet`, `reflection`, `finding-review`, `report`)
- `components/cards/*` — every card renderer (`InfoCard`, `YesNoCard`, `MultipleChoiceCard`, `FillInBlankCard`, `SortCard`, `WorksheetCard`, `ReflectionCard`, `FindingReviewCard`, `ReportCard`, `OptionButton`, `FeedbackBanner`)
- `components/DeckViewer.tsx` and `components/ModuleHome.tsx`
- `workbook/WorkbookContext.tsx` — `localStorage` key already set to `prediagnosis-workbook-module-9`
- `progress/ProgressContext.tsx` — `localStorage` key already set to `prediagnosis-progress-module-9`
- `App.tsx` — same home/chapter-switching shell pattern as Module 8
- `package.json` — `"name"` already `"module-9"`
- `index.html` — `<title>` already "AI Adoption & Claude for Business | Micro-Learning"
- `ModuleHome.tsx` — header eyebrow already "Modul 9 · AI Adoption & Claude for Business"

If `node_modules/` is missing, that's expected — the chained runner script installs it once before invoking you. If anything above looks wrong or missing (the scaffold script failed partway), stop and report it rather than trying to fix it by hand.

`Module 9` is a bonus/cross-cutting module, not tied to any single question in the 13-question diagnostic the way Modules 2-8 are. It teaches SME owners to adopt AI — specifically Claude for Business (Claude Team/Enterprise plans, Claude Projects, Artifacts, and Claude Cowork for file/task automation) — deliberately instead of the ad-hoc "suruh tim coba AI" pattern, which repeats the exact same graveyard problem Module 8 already named for tools and SOPs: dibeli/dicoba sekali, dipakai sebentar oleh satu-dua orang, lalu diam-diam ditinggalkan.

**Keep every mention of Claude for Business at the capability/judgment level** — what a business-grade AI account gives an organization (centralized admin and access control, shared team workspaces for recurring work, automation across files and tasks) and what to look for when evaluating it — not specific buttons, menus, screenshots, or exact feature names that will go stale by the time a reader uses this module. Do not invent pricing or capabilities beyond what's described in this brief.

Full 8-chapter syllabus reference: `MODULE_9_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 1 is bolded)

1. **"Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain** ← this chapter
2. Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi
3. Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan
4. Data, Keamanan, dan Kepercayaan Tim
5. Merancang Alur Kerja AI Pertama Anda dengan Claude for Business
6. Menjalankan & Melatih Tim Memakai AI di Lapangan
7. Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata
8. Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap

**This prompt covers Chapter 1 content only.** Chapters 2-8 are separate, later prompts. Do not build them now.

## 3. Chapter 1 objective

By the end of this chapter, the reader should feel — not just intellectually agree — that "suruh tim coba pakai AI" is not a strategy, it's the same shortcut that already killed other tools and SOPs in their business, and that AI needs the same deliberate treatment: a chosen use case, a real owner, and a way to check the results, not a free-for-all experiment. They should walk away wanting to know exactly which one workflow in their business is worth pointing AI at first, not just another lecture on how powerful AI is.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open with concrete SME friction: seorang admin diam-diam pakai AI gratisan buat bikin draft email, tapi nggak pernah dibagikan ke tim lain jadi kebiasaan itu berhenti begitu orangnya resign atau cuti; CEO baca artikel soal AI, kirim link tool ke grup WhatsApp tim dengan pesan "coba-coba pakai ya," lalu nggak pernah ditanya lagi tiga bulan kemudian siapa yang beneran pakai dan buat apa; satu tim mencoba AI buat satu proyek sekali, hasilnya lumayan, tapi nggak pernah dijadikan kebiasaan tetap karena nggak ada yang ditugaskan menjaga itu jalan terus. Give 2-3 varied, concrete examples.
- Introduce the core idea: adopsi AI itu dua tahap — Tahap 1: memilih & menyiapkan kasus pakai yang tepat (menentukan alur kerja mana yang cocok dipasangi AI, dan menyiapkan batasan data/keamanan dasar sebelum mulai); Tahap 2: menjalankan & menginstal kebiasaan (benar-benar menjalankan alur kerja itu, melatih tim, dan menjaga itu bertahan). Kebanyakan bisnis SME melompat ke pemakaian acak tanpa pernah menyelesaikan Tahap 1 — makanya hasilnya nggak pernah lebih dari eksperimen orang per orang.
- Term: "eksperimen AI acak" — pemakaian AI yang muncul dari inisiatif satu-dua orang penasaran, tanpa kasus pakai yang dipilih sengaja, tanpa pemilik, dan tanpa cara mengecek apakah hasilnya beneran membantu bisnis — persis pola yang sama dengan tool dan SOP yang "sudah dibeli/dibuat" tapi nggak pernah benar-benar diinstal sebagai kebiasaan.
- Introduce Claude for Business briefly as the concrete tool this module uses going forward: sebuah akun AI tingkat bisnis (bukan akun pribadi tiap karyawan) yang memberi CEO kontrol siapa boleh akses apa, ruang kerja bersama untuk pekerjaan yang berulang, dan kemampuan mengotomasi pekerjaan lintas file/tugas — bedanya dengan pemakaian AI gratisan yang acak-acakan akan dibahas lebih detail di Bab 2.
- Connect to Module 8 conditionally, not assumed (mirror how earlier modules' Chapter 1 callbacks are self-contained): kalau reader sudah menyelesaikan Modul 8, mereka sudah punya kerangka change management lengkap — modul ini adalah salah satu penerapan paling konkret dari kerangka itu, khusus untuk adopsi AI; kalau belum menyelesaikan modul manapun, bab ini tetap jalan sendiri, dengan disiplin dasarnya diajarkan ulang secukupnya di sini.
- A sharp distinction: alur kerja AI yang benar-benar terpakai — dipilih sengaja, ada pemiliknya, hasilnya dicek manusia, dan terus dipakai sampai jadi kebiasaan — vs eksperimen AI yang cuma didiamkan — dicoba sekali oleh satu orang, kelihatan keren sebentar, lalu perlahan-lahan ditinggalkan tanpa ada yang benar-benar menyadari kapan persisnya itu berhenti dipakai.
- A gut-check test: kalau reader pikirkan pemakaian AI apa pun yang sudah pernah dicoba di bisnisnya (oleh reader sendiri atau tim), apakah itu masih dipakai sekarang secara konsisten — atau sudah diam-diam berhenti setelah rasa penasaran awal reda?
- Preview the 2-stage AI adoption architecture (memilih & menyiapkan kasus pakai, lalu menjalankan & menginstal kebiasaan) as the map the rest of the module will use.
- A personal reflection where the reader names one specific AI experiment their business has already tried — successful, abandoned, or never really started — and what actually happened to it (see section 4).
- Close with a clear turn toward Chapter 2: "Sekarang Anda sudah punya satu contoh nyata di kepala. Bab berikutnya kasih Anda peta lengkap tiga level pemakaian AI di bisnis, biar Anda tahu persis Anda sekarang ada di level mana."

## 4. Workbook capture for this chapter

One `reflection` card — the first entry in Module 9's own workbook, **"Entri Pertama."** Short free-text prompt, e.g. "Sebutkan satu pemakaian AI yang pernah dicoba di bisnis Anda — oleh Anda sendiri atau tim — dan apa yang akhirnya terjadi: masih dipakai, atau diam-diam ditinggalkan?" (1-2 short text inputs, not a full form). Use the `reflection` card type already ported in the scaffold — no new card types are needed for this chapter.

## 5. Voice & format

- Match `Module 8/src/content/chapter1.ts`'s register exactly — read it before writing anything (Module 9 has no content of its own yet to reference). Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before.
- Reuse the ported card types freely (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) — mix them, don't chain `info` cards back to back.
- Target 10-20 cards total for this chapter.
- Create `Module 9/src/content/chapter1.ts` exporting `chapter1Cards: Card[]`, and register it in `Module 9/src/content/chapters.ts` (this file doesn't exist yet — the scaffold script deliberately didn't create it; build it in the same shape as `Module 8/src/content/chapters.ts`, registering only Chapter 1 for now).

## 6. Out of scope for this prompt

- Any file-porting, scaffolding, or config work — already done by `scaffold-module.ps1`. If you find yourself about to `Write` a file under `components/cards/`, `workbook/`, `progress/`, or edit `package.json`/`index.html`/`vite.config.ts`, stop — that's not this prompt's job.
- Chapters 2-8 content
- Detailed product walkthroughs of specific Claude for Business features/screens — stay at the capability level, per section 1
- The final PDF/report export/compilation (Chapter 8's job, same as earlier modules' pattern)
- Any backend/save-to-server logic (frontend-only, per the original funnel brief)
- Wiring Module 9 into the main funnel app's offer/recommendation screen or the Modules Hub registry (separate task)

## 7. Definition of done

- [ ] `Module 9/` scaffold verified intact (card types, card components, `DeckViewer`, `ModuleHome`, `WorkbookContext`, `ProgressContext`, config files) — read-only check, not rebuilt
- [ ] `Module 9/src/content/chapter1.ts` has 10-20 cards covering section 3, including exactly one `reflection` card ("Entri Pertama")
- [ ] `Module 9/src/content/chapters.ts` created, registering Chapter 1
- [ ] Voice matches `Module 8/src/content/chapter1.ts` — read it for reference before writing
- [ ] `npm run dev` runs clean, no console errors
- [ ] `Module 1/` through `Module 8/` left completely untouched
