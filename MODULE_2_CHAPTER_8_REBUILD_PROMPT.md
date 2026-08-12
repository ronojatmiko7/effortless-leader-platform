# Build Brief: Module 2 — Chapter 8 ("Menyusun Rencana Aksi KPI & Ritme Berkelanjutan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–7 already exist (`Module 2/src/content/chapter1.ts` through `chapter7.ts`) — read all seven before writing anything, for voice and for the exact `useWorkbookStore` field ids used so far (listed in section 5 below — get these exactly right, the report card in this chapter depends on them).

**This is the capstone chapter.** No new card types are needed — `report` (type `'report'`) already exists in `Module 2/src/types/card.ts` and its renderer already exists at `Module 2/src/components/cards/ReportCard.tsx`, both ported from Module 1 during the Chapter 1 scaffold. It reads `useWorkbookStore` entries via the same `cardId`/`fieldId` lookup pattern `finding-review` already uses, renders them read-only in sections, and has a working print/save button (`window.print()`, styled with `print:` Tailwind variants — this is already built, don't rebuild it).

**This prompt covers Chapter 8 only.**

Full 8-chapter syllabus reference: `MODULE_2_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 8 is bolded)

1. Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics) — done
2. Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework) — done
3. Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar — done
4. Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini — done
5. Merancang Cascading KPI per Divisi, Tim, dan Individu — done
6. Membangun Dashboard & Ritme Pemantauan yang Objektif — done
7. Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam — done
8. **Menyusun Rencana Aksi KPI & Ritme Berkelanjutan** ← this chapter

## 3. Chapter 8 objective

The reader flagged a priority KPI and a diagnosis readiness score in Chapter 7. This chapter makes sure they leave with something they'll actually use: a concrete action plan for that priority, a recurring review habit for the whole KPI system (not just red-flag firefighting), explicit permission to roll it out gradually instead of all at once, and a downloadable report compiling their entire journey through Chapters 1–7.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by calling back to Chapter 7** — they flagged which KPI is most at risk of going red first, with a readiness score. Now what?
- **A plan without a schedule is just a wish** — tie this back to Chapter 6's own point, not Module 1's: a KPI nobody watches is as useless as a vanity metric (Chapter 1); a plan nobody schedules is exactly the same trap, one level up. "Nanti saya benahi" itu bukan rencana.
- **The action-plan structure**: Apa (tindakan konkret dan spesifik) — Siapa (siapa yang bertanggung jawab) — Kapan (tenggat waktu yang jelas). Give 2 practice multiple-choice exercises contrasting a vague KPI-related action item against a specific one (new examples, KPI-flavored — not reused from Module 1's audit-flavored ones), same "vague vs. specific" device Module 1 used, different content.
- **New core teaching point: the KPI system itself needs periodic review, not just red-flag diagnosis.** This is distinct from Chapter 7 (which is about diagnosing one specific red number when it happens) — this is about stepping back periodically and asking whether the 6 KPIs designed in Chapters 2–5 are still the right ones. Targets get hit and need raising, some KPIs stop being useful and need retiring, new blind spots emerge as the business changes.
- **New: explicit permission to roll out gradually.** After 8 chapters of building a 3-domain, multi-level KPI system, a first-timer can easily feel like they need to instrument Output, Proses, and Input simultaneously starting Monday. Say plainly: start with the one area you already have the most traction on (usually Output, since that's what Chapters 2–4 walked them through in the most depth), get the rhythm working there first, then add Proses and Input in the next review cycle if they're not already live. This isn't a lesser effort, it's how the habit actually survives contact with a busy week.
- **Review cadence**: bulanan untuk area yang cepat berubah, kuartalan untuk tinjauan menyeluruh ke ketiga area sekaligus (echo the same bulanan/kuartalan split used in `Module 1/src/content/chapter8.ts` card 8, but for KPI relevance review, not audit).
- Close by transitioning into the report: "Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai."

## 4. Workbook capture for this chapter

Two `reflection` cards plus one `yes-no` card (same pattern as `Module 1/src/content/chapter8.ts`, cards 6/9/10):

1. **Rencana Aksi** (this is workbook entry **"Entri Kesembilan"**, continuing the numbering from Chapters 1–6) — 3 short text inputs: Apa, Siapa, Kapan. Prompt should explicitly reference their priority-risk KPI from Chapter 7's `chapter7-priority-kpi` justification (the reader should be recalling it, even though this card doesn't render it back automatically — that's what the report card is for).
2. **Ritme review cadence** — a `yes-no` card: `yesLabel: 'Review Bulanan'`, `noLabel: 'Review Kuartalan'`, with an affirming `feedbackYes`/`feedbackNo` for each (this persists automatically under its own card id, fields `selection` and `selectionLabel` — already how `YesNoCard` works, nothing new to build).
3. **Jadwal review berikutnya** (this is workbook entry **"Entri Kesepuluh"**) — 1 reflection card, 1 short text input capturing an actual next-review date and what they'll check then, not "nanti."

## 5. The report card — exact field map (get this precise)

Build one `report` card as the second-to-last card in this chapter, `downloadButtonText` should read something like `'Cetak / Simpan Laporan Ini'`. It must read every entry below via the existing `cardId`/`fieldId` lookup pattern and degrade gracefully (omit the line or show a neutral placeholder) if any entry is empty:

| Section heading | Label | cardId | fieldId |
|---|---|---|---|
| Angka yang Dulu Anda Banggakan | Angka yang dulu dibanggakan (Bab 1) | `c1-card-13` | `metric` |
| Angka yang Dulu Anda Banggakan | Kenapa diragukan (Bab 1) | `c1-card-13` | `doubt` |
| Target Anda | Target tahunan/bulanan (Bab 2) | `c2-card-16` | `target-number` |
| Target Anda | Kenapa target ini (Bab 2) | `c2-card-16` | `target-why` |
| KPI Output Anda | Lag Metric (Bab 3) | `c3-card-13` | `lag-metric` |
| KPI Output Anda | Jeda waktu Lag (Bab 3) | `c3-card-13` | `lag-time` |
| KPI Output Anda | Lead Metric (Bab 4) | `c4-card-18` | `lead-metric` |
| KPI Output Anda | Target harian Lead (Bab 4) | `c4-card-18` | `lead-target` |
| KPI Proses Anda | Lag Metric Proses (Bab 5) | `c5-card-10` | `proses-lag` |
| KPI Proses Anda | Lead Metric Proses (Bab 5) | `c5-card-10` | `proses-lead` |
| KPI Input Anda | Lag Metric Input (Bab 5) | `c5-card-13` | `input-lag` |
| KPI Input Anda | Lead Metric Input (Bab 5) | `c5-card-13` | `input-lead` |
| Pemilik Tiap KPI | Pemilik Output (Bab 5) | `c5-card-16` | `owner-output` |
| Pemilik Tiap KPI | Pemilik Proses (Bab 5) | `c5-card-16` | `owner-proses` |
| Pemilik Tiap KPI | Pemilik Input (Bab 5) | `c5-card-16` | `owner-input` |
| Ritme Pemantauan | Tool yang dipakai (Bab 6) | `c6-card-15` | `tool` |
| Ritme Pemantauan | Jadwal cek Lead (Bab 6) | `c6-card-15` | `lead-schedule` |
| Ritme Pemantauan | Jadwal cek Lag (Bab 6) | `c6-card-15` | `lag-schedule` |
| Kesiapan Diagnosis | Skor kesiapan (Bab 7) | `chapter7-diagnosis-readiness` | `score` |
| Kesiapan Diagnosis | Dugaan akar & pertanyaan (Bab 7) | `chapter7-diagnosis-readiness` | `justification` |
| Prioritas Risiko | Skor keyakinan (Bab 7) | `chapter7-priority-kpi` | `score` |
| Prioritas Risiko | KPI paling berisiko (Bab 7) | `chapter7-priority-kpi` | `justification` |
| Rencana Aksi | Apa | *(this chapter's reflection card id)* | `apa` |
| Rencana Aksi | Siapa | *(this chapter's reflection card id)* | `siapa` |
| Rencana Aksi | Kapan | *(this chapter's reflection card id)* | `kapan` |
| Jadwal Review Berikutnya | Ritme yang dipilih | *(this chapter's yes-no card id)* | `selectionLabel` |
| Jadwal Review Berikutnya | Review berikutnya | *(this chapter's next-date reflection card id)* | *(that field's id)* |

Note the two `chapter7-*` rows use the finding-review `storageKey` as `cardId` — that's correct, it's the same pattern `FindingReviewCard` itself uses internally (`getFieldValue(card.storageKey, 'score')`), not a typo.

## 6. Voice & format

- Match `chapter1.ts` through `chapter7.ts`'s register exactly — read all seven before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `reflection`) for the teaching/practice portions. Use `report` only for the compiled-summary card described in section 5.
- Target 10–20 cards total for this chapter, including the reflection cards, the yes-no card, and the report card.
- **The final closing card must NOT have a `cta` field.** This diverges from `Module 1/src/content/chapter8.ts` (which does put `cta: { label: 'Kembali ke Ringkasan Modul', href: '#home' }` on its last card) — don't copy that. Established in Module 2 since Chapter 1: the deck footer's "Selesai Bab Ini" button already fires `onDeckComplete`, which unconditionally returns to the module home screen — an inline `cta` button duplicates that and can bypass the completion-marking logic. Just end with a warm, earned closing paragraph and no `cta`.
- Create `Module 2/src/content/chapter8.ts` exporting `chapter8Cards: Card[]`. Register it in `Module 2/src/content/chapters.ts` (append after chapter 7, same shape).

## 7. Out of scope for this prompt

- A module home screen or chapter-to-chapter navigation/unlocking (a separate prompt, if it doesn't already exist for Module 2 — check `Module 2/src/components/ModuleHome.tsx` and `App.tsx` before assuming this is missing)
- A `review-request` card / testimonial capture — Module 1 added this later via a separate standalone prompt (`REVIEW_REQUEST_PROMPT.md`), not as part of its original Chapter 8. Follow the same pattern for Module 2 if wanted — that's a future addendum, not this prompt. `review-request` does not currently exist in `Module 2/src/types/card.ts` — do not reference it.
- Dynamically recommending specific other services/modules (that logic lives in the separate funnel app)
- Restructuring `App.tsx`
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` — do not touch it

## 8. Definition of done

- [ ] `Module 2/src/content/chapter8.ts` has 10–20 cards covering the action-plan structure, the KPI-system review cadence, and the gradual-rollout permission, including 2 `reflection` cards ("Entri Kesembilan" and "Entri Kesepuluh"), 1 `yes-no` cadence card, and exactly 1 `report` card
- [ ] The report card matches the exact field map in section 5, degrading gracefully for any empty entry
- [ ] A working print/save mechanism on the report card (reuse the existing `ReportCard.tsx` behavior — no new dependency)
- [ ] Opens with a callback to Chapter 7; closing card has no `cta` field
- [ ] `Module 2/src/content/chapters.ts` registers Chapter 8 after Chapter 7
- [ ] Voice matches `chapter1.ts`–`chapter7.ts` — read all seven for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter7.ts` / current app behavior untouched
- [ ] `Module 1/` left completely untouched
