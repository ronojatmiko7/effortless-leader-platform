# Build Brief: Module 1 — Chapter 6 ("Teknik Mengumpulkan Data Audit yang Objektif")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react) built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon.

Module 1 is being rebuilt from one flat 15-card deck into **8 chapters** (one per session of a 2-day / 8-session in-class syllabus), each with its own 10–20 card deck. Chapters 1–5 already exist (`Module 1/src/content/chapter1.ts` through `chapter5.ts`) — read all five before writing anything, for voice and for the `ReflectionCardData` type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

**Unlike Chapters 1–5, there is no seed content in `module1.ts` for this chapter at all.** The old 15-card deck never covered data-collection methodology — this is genuinely new content, built from the syllabus alone plus the established voice.

**This prompt covers Chapter 6 only.** Chapters 7–8 are separate, later prompts. Do not build them now.

## 2. The 8-chapter syllabus (for context — Chapter 6 is bolded)

1. Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting — done
2. Peta Audit Operasional — 3 Lapisan yang Harus Dicek — done
3. Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar — done
4. Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja — done
5. Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia — done
6. **Teknik Mengumpulkan Data Audit yang Objektif** ← this chapter
7. Menilai & Memprioritaskan Temuan
8. Menyusun Rencana Aksi & Ritme Audit Berkelanjutan

## 3. Chapter 6 objective

Chapters 2–5 had the reader build a chain of hypotheses entirely from their own perception: a symptom (Ch2), a suspected bottleneck (Ch4), a suspected root-cause resource (Ch5). None of that has been verified with real data yet — it's still the reader's own read of their business. This chapter's whole point is: **that's still a form of the same "insting" trap from Chapter 1**, just dressed up as an audit. If they only ever ask the loudest person in the room, or trust their own read of the situation, they haven't actually audited anything.

Content to cover (expand each into multiple cards — don't compress into one bullet per card):

- **Open by naming the trap directly**: everything captured so far is a hypothesis, not a finding. Relying only on your own perception, or only on whoever complains loudest, is instinct wearing an audit costume.
- **Review dokumen** — before asking anyone anything, check what's already written down: SOPs, sales reports, complaint logs, financial records. Cheap, and free of interpersonal bias, but can be outdated or incomplete.
- **Wawancara terstruktur** — the difference between a leading question ("kayaknya sistemnya jelek ya?") and a neutral, open one ("ceritakan proses ini dari awal sampai selesai — bagian mana yang biasanya bikin lambat?"). Give at least 3 example question pairs (leading vs. neutral) covering different scenarios.
- **Observasi langsung (gemba walk)** — go watch the actual work happen. People describe their process differently than they actually run it, often without meaning to mislead — this is the check that catches that gap.
- **Survei singkat ke tim** — a short, ideally anonymous survey to hear from the quiet majority, not just the two or three people who always speak up in meetings.
- **Why triangulate** — each method has its own blind spot (docs go stale, interviews carry bias, observation is time-limited, surveys lack nuance). Using at least two together is what makes a finding trustworthy instead of anecdotal.
- **Practice**: since this is a solo, self-paced app, adapt the syllabus's "role-play wawancara" into a solo exercise — e.g. present a short interview snippet full of leading questions and have the reader spot/rewrite the worst offender, or have them draft their own opening question for a real conversation they need to have (see section 4).
- Close with a preview to Chapter 7: "Sekarang Anda tahu cara mengumpulkan data yang bisa dipercaya. Bab depan: cara menilai dan memprioritaskan temuan itu, supaya Anda tahu mana yang harus dibenahi duluan."

## 4. Workbook capture for this chapter

Add **one reflection card** (reuse the existing `reflection` card type). The reader should pull forward the bottleneck/resource they flagged in Chapters 4–5 and draft an actual verification plan for it:

- First input: one document or record they'd check first to verify it.
- Second input: one non-leading question they'd ask a specific person on their team to verify it.

This is the moment their audit stops being self-reported and starts being something they can actually go test. Don't build a scoring mechanism — that's Chapter 7's job.

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts` through `chapter5.ts` and `module1.ts`'s register exactly — read all six before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The leading-vs-neutral-question point should land through at least one `multiple-choice` "spot the leading question" exercise with real example pairs, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 1/src/content/chapter6.ts` exporting `chapter6Cards: Card[]`. Leave `chapter1.ts` through `chapter5.ts` and `module1.ts` in place — this prompt is content only, not the chapter-navigation restructure.

## 6. Out of scope for this prompt

- Chapters 7–8 content
- The final PDF/report export/compilation (Chapter 8's job)
- Scoring or prioritizing findings (Chapter 7's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)

## 7. Definition of done

- [ ] `Module 1/src/content/chapter6.ts` has 10–20 cards covering document review, structured interviews, direct observation, and team surveys, plus why triangulation matters, including exactly one reflection card with both inputs described above
- [ ] At least one "spot the leading question" exercise with real example pairs
- [ ] Opens by naming the self-perception trap directly, ties back to Chapter 1's core point
- [ ] Voice matches `chapter1.ts` through `chapter5.ts` / `module1.ts` — read all six before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` through `chapter5.ts` / `module1.ts` / current app behavior untouched
