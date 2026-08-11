# Build Brief: Module 1 — Chapter 8 ("Menyusun Rencana Aksi & Ritme Audit Berkelanjutan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

Module 1 is being rebuilt from one flat 15-card deck into **8 chapters**, each with its own 10–20 card deck. Chapters 1–7 already exist (`Module 1/src/content/chapter1.ts` through `chapter7.ts`) — read all seven before writing anything, for voice and for the `ReflectionCardData` and `FindingReviewCardData` types plus the `useWorkbookStore` persistence pattern (`Module 1/src/workbook/WorkbookContext.tsx`).

**This is the capstone chapter.** Every prior chapter has been deliberately deferring something to this point: the reader has a symptom (Ch2), a bottleneck (Ch4), a root-cause resource (Ch5), a verification plan (Ch6), and two scored findings with red-flag status (Ch7, via `finding-review` cards). This chapter turns that into an actual action plan, establishes an ongoing audit habit, and compiles everything into one downloadable report.

Note: a separate later prompt will build a module home screen listing all 8 chapters with sequential unlock (finish Chapter N to unlock N+1). This prompt is content-only — don't build navigation between chapters or a home screen here.

**This prompt covers Chapter 8 only.**

## 2. The 8-chapter syllabus (for context — Chapter 8 is bolded)

1. Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting — done
2. Peta Audit Operasional — 3 Lapisan yang Harus Dicek — done
3. Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar — done
4. Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja — done
5. Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia — done
6. Teknik Mengumpulkan Data Audit yang Objektif — done
7. Menilai & Memprioritaskan Temuan — done
8. **Menyusun Rencana Aksi & Ritme Audit Berkelanjutan** ← this chapter

## 3. Chapter 8 objective

The reader now has a prioritized, scored finding. This chapter makes sure they leave with something they'll actually use: a concrete action plan for their top priority, a recurring audit habit so this doesn't stay a one-time exercise, and a downloadable report that compiles their entire journey through Chapters 1–7.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by calling back to Chapter 7** — they have a prioritized, scored finding. Now what?
- **Why a plan without a schedule is just a wish** — ties back to Chapter 1's original point: good intentions with no follow-through is the same trap as managing by instinct, just with extra steps.
- **A simple action-plan structure**: Apa (tindakan konkret dan spesifik) — Siapa (siapa yang bertanggung jawab) — Kapan (tenggat waktu yang jelas). Explain why vague action items ("perbaiki proses onboarding") fail and specific ones ("buat SOP onboarding 1-halaman, ditulis HR, selesai akhir bulan ini") work.
- **Audit isn't a one-time event** — new core teaching point. The business keeps changing, so a red flag fixed today doesn't mean the business stays healthy forever. Introduce the idea of a recurring audit cadence (bulanan for fast-moving areas, kuartalan for a fuller re-check) as the actual finish line of this training — not "you're done," but "you now have a habit."
- Close by transitioning into the report: "Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai."

## 4. Workbook capture for this chapter

Two `reflection` cards (reuse the existing type — no new capture card types needed beyond the report card in section 5):

1. **Rencana Aksi** — three short text inputs: Apa (tindakan konkret), Siapa (penanggung jawab), Kapan (tenggat). Prompt should explicitly reference their #1 priority finding from Chapter 7 in the copy (the reader should be recalling it, even though this card doesn't render it back automatically).
2. **Jadwal Audit Berikutnya** — capture their chosen cadence and a specific next-audit commitment. Suggest reusing the `yes-no` card type for the cadence choice itself (e.g. `yesLabel: 'Audit Bulanan'`, `noLabel: 'Audit Kuartalan'`, with an affirming `feedbackYes`/`feedbackNo` for each), paired with a `reflection` card capturing the actual next-audit date as free text.

## 5. New: the report card

This is the other new card type needed, and it's the payoff for every reflection and finding-review card since Chapter 1. Add to `Module 1/src/types/card.ts`:

```ts
interface ReportSection {
  heading: string
  items: { label: string; cardId: string; fieldId: string }[]
}

interface ReportCardData extends BaseCard {
  type: 'report'
  eyebrow?: string
  title: string
  intro: string[]
  sections: ReportSection[]
  downloadButtonText: string
}
```

Build one `report` card as the second-to-last card in this chapter. It should read every relevant entry out of `useWorkbookStore` (via the same `cardId`/`fieldId` lookup pattern `FindingReviewCard` already uses) and render a compiled, read-only summary organized into sections, at minimum:

- Titik Awal (Chapter 2 symptom)
- Proses & Titik Bocor (Chapter 4 bottleneck)
- Akar Masalah (Chapter 5 resource)
- Rencana Verifikasi (Chapter 6)
- Temuan Terprioritas & Skor (both Chapter 7 `finding-review` entries, including red-flag status)
- Rencana Aksi (this chapter's Apa/Siapa/Kapan)
- Jadwal Audit Berikutnya (this chapter's cadence + date)

If any referenced entry is empty (reader skipped an earlier chapter's card), degrade gracefully — omit that line or show a neutral placeholder, don't crash.

Include a download/print button. Default to a print-based approach (a print-friendly layout plus `window.print()`, styled with a print media query) rather than adding a new PDF-generation dependency — simplest and most reliable for an MVP. If you judge a real one-click file download is worth the added dependency (e.g. a small client-side library), that's an acceptable alternative — your call, just don't overbuild this.

## 6. Voice & format

- Match `chapter1.ts` through `chapter7.ts` and `module1.ts`'s register exactly — read all eight before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) for the teaching/practice portions. Use the new `report` type only for the compiled-summary card described in section 5.
- Target 10–20 cards total for this chapter, including the two reflection cards and the report card.
- The final card should be a warm, earned closing — the reader actually built something real over 8 chapters, not just learned a concept. Give it a `cta: { label: 'Kembali ke Ringkasan Modul', href: '#home' }` — wiring `#home` to an actual destination is out of scope for this prompt (a separate module-home prompt handles that); it's fine if the href doesn't resolve to anything yet.
- Create `Module 1/src/content/chapter8.ts` exporting `chapter8Cards: Card[]`. Leave `chapter1.ts` through `chapter7.ts` and `module1.ts` in place.

## 7. Out of scope for this prompt

- A module home screen or chapter-to-chapter navigation/unlocking (separate prompt)
- Dynamically recommending specific other services/modules based on flagged findings (that logic lives in the separate funnel app, not here)
- Restructuring `App.tsx`
- Any backend/save-to-server logic (still frontend-only)

## 8. Definition of done

- [ ] `Module 1/src/types/card.ts` has a new `report` card type per the shape in section 5
- [ ] `Module 1/src/content/chapter8.ts` has 10–20 cards covering the action-plan structure, audit cadence, and the compiled report, including both reflection cards and exactly one report card
- [ ] The report card reads and displays all 7 sections listed in section 5, degrading gracefully for missing entries
- [ ] A working download or print mechanism on the report card
- [ ] Opens with a callback to Chapter 7; closing card has a `cta` pointing at `#home`
- [ ] Voice matches `chapter1.ts` through `chapter7.ts` / `module1.ts` — read all eight before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` through `chapter7.ts` / `module1.ts` / current app behavior untouched
