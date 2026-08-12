# Build Brief: Module 3 — Chapter 5 ("Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 3/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/` and `Module 2/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–4 already exist (`Module 3/src/content/chapter1.ts` through `chapter4.ts`) — read all four before writing anything, for voice and for the `reflection` / `finding-review` card types and `useWorkbookStore` persistence pattern.

**No new card type is needed for this chapter.** `finding-review` (type `'finding-review'`) already exists in `Module 3/src/types/card.ts` and its renderer already exists at `Module 3/src/components/cards/FindingReviewCard.tsx` — both were ported during the Chapter 1 scaffold and are already wired into `DeckViewer.tsx`. It reads back a prior `useWorkbookStore` entry as a recap, then captures a 1–4 score plus a short justification, persisted under a `storageKey`. Use it, don't rebuild it.

Note: `Module 2/src/content/chapter7.ts` also teaches 5 Whys, scoped to diagnosing red KPIs. Module 3 is sold standalone, so this chapter must be self-contained and not assume the reader took Module 2 — but it should feel like a natural extension for readers who did, not a flat repeat. This chapter's RCA content is scoped to messier, multi-cause business/meeting problems (not KPI numbers specifically), and adds a second tool (Fishbone) that Module 2 doesn't cover.

**This prompt covers Chapter 5 only.** Chapters 6–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_3_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 5 is bolded)

1. Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme — done
2. Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan — done
3. Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu — done
4. Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis — done
5. **Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan** ← this chapter
6. Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi
7. Mengelola Eskalasi dan Akuntabilitas Lintas Level
8. Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap

## 3. Chapter 5 objective

The reader now has a full 4-tier rhythm (Chapters 2–4), but a rhythm that's rapi doesn't automatically produce a correct diagnosis when something goes wrong. This chapter gives the actual toolkit for finding a real root cause instead of a confident guess.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to the end of Chapter 4 — reader punya 4 level ritme lengkap. Tapi ritme yang rapi belum tentu menghasilkan diagnosis yang benar kalau tiap kali ketemu masalah, jawabannya cuma "kayaknya karena...".
- **5 Whys, self-contained.** Conditional callback, same pattern as Chapter 1 card handling Module 1/2 references: one line acknowledging Module 2 graduates already know this tool from a KPI context ("Kalau Anda sudah ikut Modul 2..."), then a complete, standalone explanation for everyone else. Walk through **one full worked example** end to end, scoped to a review-meeting problem (not a KPI number, to keep this distinct from Module 2's checklist-QC example) — e.g. "target closing sales meleset 3 bulan berturut-turut" → why → why → why → why → akar: proses onboarding sales baru nggak pernah mengajarkan cara closing, staf baru cuma dilepas belajar sendiri.
- **New: when 5 Whys isn't enough.** 5 Whys memaksa satu rantai sebab-akibat lurus. Sebagian masalah penyebabnya beberapa faktor sekaligus — bukan satu rantai. Introduce **Fishbone / Diagram Tulang Ikan** as the tool for this case, with four practical categories: Manusia, Proses, Alat/Sistem, Eksternal. Walk through **one full worked Fishbone example** end to end — e.g. kualitas produk turun: Manusia — staf baru belum terlatih; Proses — SOP QC dilewati pas lagi sibuk; Alat/Sistem — mesin belum diservis rutin; Eksternal — supplier bahan baku ganti tanpa pemberitahuan.
- **Simple rule of thumb for choosing the tool**: kalau masalahnya kelihatan satu rantai sebab-akibat yang lurus, pakai 5 Whys — cepat. Kalau masalahnya kelihatan banyak faktor sekaligus, atau tim udah mentok nemu satu penyebab yang kelihatannya nggak cukup menjelaskan semuanya, pakai Fishbone.
- **Common traps**: berhenti terlalu dini (satu "why" langsung dianggap akar, padahal masih gejala), dan berhenti di "siapa"-nya bukan di sistemnya. Land this briefly — a short echo, not a re-teach, since the meeting dynamics of blame-vs-system belongs to how a review is *led* (Chapter 6's job), not to the analysis method itself.
- Classification/practice exercise: kasih reader deskripsi masalah yang agak berantakan, minta mereka memilih tool mana yang lebih pas (5 Whys vs Fishbone) sebelum masuk ke latihan terbimbing.
- Close dengan transisi jelas ke Bab 6: "Sekarang Anda punya alat buat nemuin akar masalah. Tapi nemuin akar aja nggak cukup kalau rapatnya nggak pernah berujung keputusan. Bab depan: cara memimpin diskusi biar temuan RCA beneran jadi aksi, bukan cuma obrolan panjang."

## 4. Workbook capture for this chapter

Use **two** cards this chapter:

1. **finding-review** — recap the reader's Chapter 1 entry (the blindside problem they named, "Entri Pertama"), pulled via its known `useWorkbookStore` field ids. Have the reader do a short 5-Whys pass on that exact problem, then score their own confidence in having found the real root (1–4) with a short justification. Storage key e.g. `chapter5-five-whys-practice`. This is workbook entry **"Entri Kelima."**
2. **reflection** — the reader picks a different problem that feels like it has "many factors" and lists which Fishbone categories (at least 2 of Manusia/Proses/Alat-Sistem/Eksternal) are likely involved, with one line each. This is workbook entry **"Entri Keenam."**

If the Chapter 1 entry is empty (reader skipped it), degrade gracefully — this should already be how `finding-review` behaves from its existing implementation; don't change that behavior.

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts` through `chapter4.ts`'s register exactly — read all four before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`) for the teaching/practice portions. Use `finding-review` and `reflection` only for the two moments in section 4.
- The 5-Whys and Fishbone worked examples should each be a short sequence of `info` cards building step by step, followed by a `multiple-choice` or `fill-in-the-blank` checking the reader followed it.
- Target 10–20 cards total for this chapter; given two full worked examples plus a classification exercise, running toward the upper end is fine.
- Create `Module 3/src/content/chapter5.ts` exporting `chapter5Cards: Card[]`. Register it in `Module 3/src/content/chapters.ts` (append after chapter 4, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 6–8 content
- Meeting facilitation / turning findings into decisions (Chapter 6's job — this chapter is the analysis method only)
- Blame-vs-system meeting dynamics in depth (brief echo only; Chapter 6's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure scores are persisted so Chapter 8 can read them)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` and `Module 2/` — do not touch either

## 7. Definition of done

- [ ] `Module 3/src/content/chapter5.ts` has 10–20 cards covering self-contained 5 Whys, Fishbone, and the rule of thumb for choosing between them, including exactly one `finding-review` card (Entri Kelima, recapping Chapter 1's entry) and one `reflection` card (Entri Keenam)
- [ ] At least one fully-worked 5 Whys example and one fully-worked Fishbone example, both scoped to non-KPI business/meeting problems
- [ ] At least one classification exercise choosing between the two tools
- [ ] Opens with a callback to the end of Chapter 4; closes previewing Chapter 6
- [ ] `Module 3/src/content/chapters.ts` registers Chapter 5 after Chapter 4
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter4.ts` — read all four for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter4.ts` / current app behavior untouched
- [ ] `Module 1/` and `Module 2/` left completely untouched
