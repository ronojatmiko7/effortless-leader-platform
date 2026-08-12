# Build Brief: Module 2 — Chapter 7 ("Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–6 already exist (`Module 2/src/content/chapter1.ts` through `chapter6.ts`) — read all six before writing anything, for voice and for the `reflection` / `finding-review` card types and `useWorkbookStore` persistence pattern.

**No new card type is needed for this chapter.** `finding-review` (type `'finding-review'`) already exists in `Module 2/src/types/card.ts` and its renderer already exists at `Module 2/src/components/cards/FindingReviewCard.tsx` — both were ported from Module 1 during the Chapter 1 scaffold and are already wired into `DeckViewer.tsx`. It reads back prior `useWorkbookStore` entries as a recap, then captures a 1–4 score plus a short justification, persisted under a `storageKey`. Use it, don't rebuild it.

`Module 1/src/content/module2.ts` (the old flat deck) has one relevant seed card worth reusing as tone reference: card 11 (the "tujuan rapat evaluasi mingguan yang sehat" multiple-choice — correct answer is "melihat metrik dan mencari letak kerusakan sistem," not hunting for who to blame). This chapter is where that content finally belongs — Chapter 6 explicitly deferred it here.

By the end of Chapter 6, the reader has 6 KPIs (Lag + Lead across Output, Proses, Input), each with an owner, a data-entry responsible person, and a monitoring rhythm. Sooner or later, one of those numbers goes red. Without a repeatable diagnosis process, that turns into either paralysis or a blame-hunt — this chapter is that process.

**This prompt covers Chapter 7 only.** Chapter 8 is a separate, later prompt. Do not build it now.

Full 8-chapter syllabus reference: `MODULE_2_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 7 is bolded)

1. Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics) — done
2. Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework) — done
3. Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar — done
4. Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini — done
5. Merancang Cascading KPI per Divisi, Tim, dan Individu — done
6. Membangun Dashboard & Ritme Pemantauan yang Objektif — done
7. **Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam** ← this chapter
8. Menyusun Rencana Aksi KPI & Ritme Berkelanjutan

## 3. Chapter 7 objective

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- **Open by naming the problem** — the reader now has a monitoring rhythm (Chapter 6), so sooner or later a number will actually come in red. A red number without a diagnosis process turns into either panic or a hunt for someone to blame. This chapter is the process.
- **Define "merah" simply**: actual di bawah target. Don't overbuild this — one short card is enough, it's intuitive given everything already set up.
- **New core teaching point: which metric goes red tells you where to look.** This is the module's payoff insight, tying Lag/Lead back together:
  - If a **Lead Metric** goes red, that's actually caught early — the whole point of a Lead Metric is exactly this. The fix is usually direct: do the action more, or figure out what's blocking it.
  - If a **Lag Metric** goes red **despite the Lead Metric hitting target**, that's a deeper signal — either the conversion/causal link assumed back in Chapter 3–4 has shifted (rasio yang dulu 1:5 sekarang jadi 1:8, misalnya), or something outside the KPI system entirely changed. This needs real investigation, not a quick fix.
- **Evaluasi tanpa kambing hitam** — reuse and extend `module2.ts` card 11's point: the goal of a red-KPI review is finding what broke in the *system*, not who to blame. Attacking the person makes the next problem get hidden instead of surfaced, not fixed faster. Land this through a contrast exercise: given a red-KPI scenario, the reader picks the system-focused diagnostic question over the blame-focused one (same pattern as Chapter 6's Module 1 counterpart — leading vs. neutral questions — but applied to red-KPI review questions here).
- **5 Whys** — walk through one full worked example end to end using a KPI scenario (e.g. Lead Metric "kepatuhan checklist QC" turns red → why → why → why → why → akar: staf baru nggak pernah dilatih cara isi checklist dengan benar, cuma dikasih contoh formulir kosong). Then give the reader a partially-worked scenario and have them supply the next "why" themselves.
- **Scoring convention**: reuse the same 1–4 BARS scale and ≤2 red-flag convention already used elsewhere in the Effortless Leader ecosystem — briefly check `organizational_prediagnostic_tool_id.html` for the exact phrasing so the vocabulary stays consistent, not just internally consistent within this module.
- Close with a clear turn toward Chapter 8: "Sekarang Anda tahu cara mendiagnosis KPI merah tanpa jadi ajang cari kambing hitam. Bab terakhir: ubah semua ini jadi rencana aksi konkret, dan unduh laporan KPI lengkap Anda."

## 4. Workbook capture for this chapter

Use the existing `finding-review` card type **at least twice**:

1. **Diagnosis rehearsal**: recap the reader's own Output-area KPI set from earlier chapters (their Chapter 2 target, Chapter 3 Lag Metric, Chapter 4 Lead Metric — pull these via their known `useWorkbookStore` field ids). Have the reader do a short 5-Whys style diagnosis of "kalau angka ini merah minggu depan, apa yang paling mungkin jadi akarnya?", then score their own readiness to diagnose it properly (1–4) with a short justification. Storage key e.g. `chapter7-diagnosis-readiness`.
2. **Priority flag**: given all 6 KPIs the reader has now designed (Output/Proses/Input × Lag/Lead), have them flag which single one they think is most at risk of going red first, and why. This becomes the seed for Chapter 8's action plan. Storage key e.g. `chapter7-priority-kpi`.

If a referenced prior entry is empty (reader skipped an earlier reflection card), degrade gracefully — don't crash, just skip that recap line or show a neutral placeholder. This should already be how `finding-review` behaves from Module 1's implementation; don't change that behavior.

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts` through `chapter6.ts`'s register exactly — read all six before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) for the teaching/practice portions. Use `finding-review` only for the two moments in section 4.
- The 5 Whys and system-vs-blame distinction should each land through a worked example plus a hands-on exercise, not just an explanation.
- Target 10–20 cards total for this chapter; given the two `finding-review` cards and the worked 5-Whys example, running toward the upper end is fine.
- Create `Module 2/src/content/chapter7.ts` exporting `chapter7Cards: Card[]`. Register it in `Module 2/src/content/chapters.ts` (append after chapter 6, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapter 8 content
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure scores are persisted so Chapter 8 can read them)
- Building a full report/summary view of all workbook entries (Chapter 8's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` — do not touch it

## 7. Definition of done

- [ ] `Module 2/src/content/chapter7.ts` has 10–20 cards covering the "merah" threshold, the Lead-red-vs-Lag-red diagnostic insight, evaluasi tanpa kambing hitam, and 5 Whys, including exactly two `finding-review` cards as described in section 4
- [ ] Scoring convention matches (or is checked against) `organizational_prediagnostic_tool_id.html`'s existing 1–4 / red-flag-≤2 convention
- [ ] At least one fully-worked 5 Whys example plus one hands-on continuation exercise
- [ ] At least one system-vs-blame contrast exercise
- [ ] Opens by naming why a red KPI needs a process, not panic or blame; closes previewing Chapter 8
- [ ] `Module 2/src/content/chapters.ts` registers Chapter 7 after Chapter 6
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter6.ts` — read all six for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter6.ts` / current app behavior untouched
- [ ] `Module 1/` left completely untouched
