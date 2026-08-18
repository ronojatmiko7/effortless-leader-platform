# Build Brief: Per-Module Intro + Outro (Pretest/Posttest) — v3

## 0. Which module

The module number for THIS run is given in the instruction text that invoked you (look for "TARGET MODULE: Module N" right before this brief was read). Everything below refers to that module — call it Module N.

## 1. Context — read this even if you saw v1 or v2 of this brief before

Each module in Modules Hub (`Modules Hub/src/`) has 10 chapters total, not 8: an intro chapter (greeting → problem → what-you'll-learn → pretest), Chapters 1 through 8 unchanged, and an outro chapter (summary → posttest). Intro and outro are their OWN entries in that module's `chapters` array — first and last — each with its own `id`, `title`, `description`, and `cards`, exactly like Chapters 1-8 are. They are NOT spliced into Chapter 1's or Chapter 8's own `cards` array (an earlier same-day version of this brief, v2, did that — it's wrong, don't do it).

Because intro/outro are just two more entries in the same `chapters` array, they automatically inherit everything ModuleHome and the chapter-unlock logic already do for every other chapter: they show up as their own cards in the module's chapter list, in order (before Bab 1, after Bab 8), each gated behind finishing the one before it, with zero new code required anywhere.

The architecture is already built and already works end-to-end for Module 2 as the reference implementation. This brief is about adding the same thing to Module N's content — NOT about changing how any of the shared code works.

Read these files FIRST, in full, before writing anything — they are the actual working pattern you're copying:

- `Modules Hub/src/content/module-2/assessmentQuestions.ts`
- `Modules Hub/src/content/module-2/intro.ts`
- `Modules Hub/src/content/module-2/outro.ts`
- `Modules Hub/src/content/module-2/chapters.ts` — this is the key file. Note `chapter-intro` is the FIRST entry in the array (`kind: 'intro'`, `cards: introCards`) and `chapter-outro` is the LAST entry (`kind: 'outro'`, `cards: outroCards`). Chapters 1-8 in between are completely unchanged — still just `cards: chapter1Cards` etc., nothing spliced into them.
- `Modules Hub/src/intro-outro/buildAssessmentCards.ts` — read the doc comments; note the question shape has NO successFeedback/errorFeedback fields, and `buildAssessmentCards` takes a `resultTitle` and `resultIntro` string as its 3rd/4th arguments.
- `Modules Hub/src/content/module-N/chapters.ts`'s own `ChapterMeta` interface — it already has an optional `kind?: 'intro' | 'chapter' | 'outro'` field (added ahead of time for every module, so you don't need to touch the interface itself, only add two new objects that use it).

## 2. What "gates Chapter 1" means now (do not build anything for this)

Nothing to build here. `chapter-intro` is simply the first entry in the array, so `ProgressContext`'s existing "chapter N+1 unlocks once chapter N is complete" logic gates Chapter 1 behind it automatically — same mechanism that already gates every other chapter. Do not touch `App.tsx`, `ProgressContext.tsx`, or `ModuleHome.tsx`; there is nothing to add to any of them.

## 3. Research Module N's real content before writing anything

Read `Modules Hub/src/content/module-N/chapters.ts` and all 8 `Modules Hub/src/content/module-N/chapterX.ts` files (substitute the real module number for N). Do not invent the module's themes from the title alone — ground everything in what the chapters actually teach, the way Module 2's content is grounded in Module 2's actual chapters 1-8 (vanity metrics, cascading, Lag/Lead metric, root-cause evaluation), not guessed.

Pay special attention to:
- Chapter 1's opening hook — that's usually the sharpest, most specific angle for the intro's "problem" card (Module 2's problem card leans on "omzet naik dan tim sibuk bisa menipu," which is lifted almost directly from Chapter 1's own opening line).
- Chapter 8's closing note — useful for keeping the outro's tone and claims consistent with how the module already describes what the reader accomplished.

## 4. Files to create

Create exactly three new files, following Module 2's files as the structural template.

### `Modules Hub/src/content/module-N/assessmentQuestions.ts`

5 to 10 multiple-choice questions (`AssessmentQuestionBase[]`, imported type from `../../intro-outro/buildAssessmentCards`) testing baseline understanding of Module N's core distinctions — the kind of "which of these is the real trap vs. the common misconception" question Module 2 uses, not trivia. Pick the count based on how many distinct core ideas the module actually teaches — a module with 3-4 major concepts across its 8 chapters should land around 5-6 questions; a module covering more ground can go up to 10. Each question needs only `question`, `options` (4 choices), `correctAnswer` (index) — NO `successFeedback`/`errorFeedback` fields, pretest/posttest never reveal answers per-question.

### `Modules Hub/src/content/module-N/intro.ts`

Exports `introCards: Card[]`, in this exact order — this order is a product requirement, not a suggestion:

1. An `info` card, id `intro-greeting` — a warm, brief greeting that welcomes the reader to this specific module. End its body with a sentence that bridges into the next card (e.g. "Tapi sebelum masuk ke sistemnya, coba jujur dulu soal satu hal yang mungkin sedang terjadi di bisnis Anda sekarang ini.").
2. An `info` card, id `intro-problem` — a relatable, concrete pain the target business owner (small/mid business, 19-99 employees, anti-hustle, family-first — see project memory for the full audience profile) typically has around this module's subject. Ground this in Chapter 1's real hook, don't invent a generic pain. End with an explicit bridging sentence into why they need this module (e.g. "Itu sebabnya Anda perlu modul ini — supaya...").
3. An `info` card, id `intro-what` — what the 8 chapters actually cover, written from what you read in step 3 above, not generic. End with a bridging sentence into the pretest that also tells the reader answers are deferred (e.g. "...jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai").
4. `...buildAssessmentCards(assessmentQuestions, 'pretest', resultTitle, resultIntro)` — write a `resultTitle` (short, e.g. "Ini Titik Awal Anda") and a `resultIntro` that bridges from the pretest score into Chapter 1's actual opening (reference Chapter 1's real title/hook so the transition reads as one continuous narrative — the reader will land on the module's chapter list next and choose Chapter 1 themselves, so this sentence should make them want to click it, not assume they're already there).

Pick a distinct `LucideIcon` per info card (import from `lucide-react`) that fits the card's theme — don't reuse Module 2's exact icon choices verbatim unless they genuinely fit Module N too.

Every `info` card's `body` array must end on a sentence that explicitly transitions into the next card — "itu sebabnya...", "makanya...", "supaya...", "sebelum itu..." — this is a hard requirement, not a style preference. A reviewer should be able to read all the intro cards' bodies back to back and hear one continuous voice talking, not four disconnected slides.

### `Modules Hub/src/content/module-N/outro.ts`

Exports `outroCards: Card[]`:

1. One `info` card, id `outro-summary` — summarizes what the reader actually built/learned across all 8 chapters (ground this in Chapter 8's real closing content, not generic). End with a bridging sentence into the posttest that also notes answers are deferred, same as the intro's pretest bridge.
2. `...buildAssessmentCards(assessmentQuestions, 'posttest', resultTitle, resultIntro)` — the `resultIntro` here is the module's true closing note: no more chapters follow it, so make it a genuine send-off (e.g. pointing back at a concrete commitment the reader made in the module, if the chapters' reflection/workbook fields make that possible to reference).

## 5. Wire it into `Modules Hub/src/content/module-N/chapters.ts`

This is the one content file you ARE allowed to touch:

- Add two new imports: `import { introCards } from './intro'` and `import { outroCards } from './outro'`.
- Add a new object as the FIRST entry of the `chapters` array: `{ id: 'chapter-intro', number: 0, kind: 'intro', title: 'Pendahuluan — ...', description: '...', cards: introCards }`. The title MUST start with "Pendahuluan — " (ModuleHome shows a separate "Pendahuluan" eyebrow badge above this title, so the title itself should read as a continuation of that, e.g. "Pendahuluan — Kenalan & Pretest" from Module 2) — write the rest specific to this module, don't copy Module 2's verbatim.
- Add a new object as the LAST entry of the `chapters` array: `{ id: 'chapter-outro', number: 9, kind: 'outro', title: 'Penutup — ...', description: '...', cards: outroCards }`. Same rule — title MUST start with "Penutup — ", rest specific to this module.
- Every existing `chapter-1` through `chapter-8` entry stays exactly as it is — same `cards` values, untouched.
- Do not touch `chapter1.ts`, `chapter8.ts`, or any other `chapterX.ts` file's own content.
- Do not touch the `ChapterMeta` interface at the top of the file — the `kind?` field is already there.

## 6. Guardrails

- Do not touch any module other than Module N — not its content, not its `data/modules.ts` entry (that file has no `intro`/`outro` fields — don't add any).
- Do not touch `App.tsx`, `ProgressContext.tsx`, `ModuleHome.tsx`, `DeckViewer.tsx`, `buildAssessmentCards.ts`, `types/card.ts`, `intro-outro/IntroOutroContext.tsx` (unused, ignore it), or Module 2's own files.
- Do not rename any existing card ids anywhere in the repo, including inside `chapter1.ts`/`chapter8.ts`.
- Write all Bahasa Indonesia copy in the same voice as the module's existing chapters — warm, direct, second-person "Anda," no corporate-consulting jargon. If in doubt about tone, re-read a card or two from the module's own `chapter1.ts` before writing.

## 7. Definition of done

- [ ] `assessmentQuestions.ts` (5-10 questions, no feedback fields), `intro.ts` (greeting → problem → what, each ending in a bridging sentence, then the pretest block), `outro.ts` (summary + bridging sentence, then the posttest block) created under `Modules Hub/src/content/module-N/`.
- [ ] `Modules Hub/src/content/module-N/chapters.ts` updated: two new imports, one new `chapter-intro` entry prepended, one new `chapter-outro` entry appended — every `chapter-1` through `chapter-8` entry untouched.
- [ ] `Modules Hub/src/data/modules.ts` NOT touched.
- [ ] `npm run build` inside `Modules Hub/` succeeds (the runner script checks this after you finish — make sure your TypeScript is valid before finishing).
- [ ] No other module, and no shared infrastructure file, was touched.
