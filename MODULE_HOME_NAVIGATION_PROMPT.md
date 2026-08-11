# Build Brief: Module 1 — Home Screen & Sequential Chapter Unlock

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is a React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react). It now has 8 chapter content files (`Module 1/src/content/chapter1.ts` through `chapter8.ts`, each exporting `chapterNCards: Card[]`), plus the legacy `module1.ts` and `module2.ts` (leave both alone — not part of this task).

Read the current `Module 1/src/App.tsx`, `Module 1/src/components/DeckViewer.tsx`, and `Module 1/src/workbook/WorkbookContext.tsx` before making changes — this prompt modifies all three, unlike the content-only chapter prompts before it.

Currently `App.tsx` hardcodes a single active deck (`activeModule`, presently defaulted to `'#chapter-7'` as a dev convenience) and switches decks only when a card's `cta.href` matches a key in a flat `modules` dictionary. There is no home screen, no listing of all chapters, and no concept of chapter completion or locking — every chapter is equally reachable at any time via a matching href. **This prompt replaces that with a proper home screen and sequential gating.**

## 2. What to build

**a) A module home screen** (`Module 1/src/components/ModuleHome.tsx` or similar) listing all 8 chapters as a vertical list/grid of cards, each showing: chapter number, title, a one-line description, and a status. Suggested titles + descriptions (refine wording to match the established voice if needed, read `chapter1.ts` through `chapter8.ts` for reference):

1. Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting — "Kenapa keputusan berdasar insting itu mahal, dan kenapa Anda butuh audit rutin."
2. Peta Audit Operasional — 3 Lapisan yang Harus Dicek — "Peta 3 lapisan bisnis Anda, dan kenapa masalah di satu lapisan sering akarnya di lapisan lain."
3. Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar — "Membedakan metrik yang benar-benar berguna dari metrik yang cuma bikin ngerasa aman."
4. Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja — "Memetakan alur kerja nyata dan menemukan titik yang paling boros."
5. Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia — "Menilai kesiapan tim, alat, dan bahan baku sebagai akar masalah."
6. Teknik Mengumpulkan Data Audit yang Objektif — "Cara menggali data lapangan tanpa bias, biar audit Anda bukan cuma insting versi baru."
7. Menilai & Memprioritaskan Temuan — "Mengubah tumpukan temuan jadi daftar prioritas yang masuk akal."
8. Menyusun Rencana Aksi & Ritme Audit Berkelanjutan — "Menyusun rencana aksi 90 hari dan mengunduh laporan audit lengkap Anda."

Each chapter card has one of three states:

- **Selesai** (completed) — checkmark, still clickable to revisit.
- **Terbuka / Lanjutkan** (unlocked, not yet complete — or the next chapter up) — clickable, opens the chapter's deck.
- **Terkunci** (locked) — visually muted/grayed, not clickable, short microcopy explaining why (e.g. "Selesaikan Bab 3 dulu").

**b) Sequential unlock logic.** Chapter 1 is always unlocked. Chapter N is unlocked only once Chapter N-1 is marked complete.

**c) A completion signal from `DeckViewer`.** Right now, reaching the last card of a deck is a dead end — the footer shows a "Lanjut" button only when `!isLast`, so there's no explicit finishing action at all once the reader completes the last card. Fix this: when `isLast && isComplete`, show a finishing button (e.g. "Selesai Bab Ini") instead of nothing. Add an optional `onDeckComplete?: () => void` prop to `DeckViewer` and call it once when that button is pressed (not on every render — this should fire exactly once per visit to the last card).

**d) A progress store.** Add a new store to persist which chapters are complete — either extend `Module 1/src/workbook/WorkbookContext.tsx` or add a sibling (e.g. `Module 1/src/progress/ProgressContext.tsx`) following the same pattern: React context + `localStorage`, a distinct storage key from the workbook (e.g. `prediagnosis-progress`), exposing something like `isChapterComplete(chapterId)`, `markChapterComplete(chapterId)`, and `isChapterUnlocked(chapterId)` (chapter 1 always true; chapter N true iff chapter N-1 complete). Wrap it around the app the same way `WorkbookProvider` already is.

**e) Wire it together in `App.tsx`.** Default view is the home screen, not a hardcoded chapter. Clicking an unlocked chapter card renders `DeckViewer` with that chapter's cards. `DeckViewer`'s `onDeckComplete` should mark the chapter complete in the progress store and return to the home screen. Make sure `#home` (used by Chapter 8's closing card `cta.href`, see `chapter8.ts`) resolves to showing the home screen — keep the existing `handleCtaNavigate` pattern working for that and for any other existing hrefs (e.g. `#module-1`, `#module-2`) so nothing currently working breaks.

## 3. Voice & format

- Match the existing chapters' register for all home-screen copy (titles are already given above; write the locked-state microcopy and any header/intro copy in the same casual, direct Bahasa Indonesia).
- Keep the visual language consistent with `DeckViewer`'s existing Tailwind styling (rounded cards, indigo accent, slate neutrals) rather than introducing a new visual system.
- Don't touch `chapter1.ts` through `chapter8.ts`, `module1.ts`, or `module2.ts` content.

## 4. Out of scope for this prompt

- Any changes to individual chapters' card content
- The report/download logic inside Chapter 8 (already built)
- Any backend/save-to-server logic (still frontend-only) — progress and workbook data both stay in `localStorage`
- A "reset progress" / admin control (not needed yet — skip unless trivial)

## 5. Definition of done

- [ ] A home screen component lists all 8 chapters with the titles/descriptions above, each showing Selesai / Terbuka / Terkunci status correctly
- [ ] Chapter 1 always unlocked; Chapter N unlocked only once Chapter N-1 is marked complete
- [ ] `DeckViewer` has a working finishing action on the last card (previously a dead end) and an `onDeckComplete` callback fired exactly once per completion
- [ ] A new progress store persists completed chapters to `localStorage` independently of the workbook store
- [ ] `App.tsx` defaults to the home screen, routes into/out of chapters correctly, and `#home` from Chapter 8's closing CTA works
- [ ] Existing workbook data, chapter content, and legacy `module1.ts`/`module2.ts` behavior untouched
- [ ] Runs via `npm run dev` with no console errors
