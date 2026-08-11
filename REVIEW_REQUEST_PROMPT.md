# Build Brief: Module 1 — Post-Completion Review Request

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 1/` is a React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react). By the time this prompt is run, Chapter 8 (`Module 1/src/content/chapter8.ts`) should already exist, including its `report` card (see `Module 1/src/types/card.ts` — `ReportCardData`) which compiles the reader's Chapters 1–7 workbook entries into a downloadable summary. Read `chapter8.ts` and `Module 1/src/workbook/WorkbookContext.tsx` before writing anything.

**This prompt adds a review-request moment right after that report** — the point where the reader has just seen/downloaded tangible proof of what they built, which is the highest-converting moment to ask for a review. Don't ask earlier in the module, and don't make it a passive banner somewhere — it should be an actual card in the flow, right after the report card, before the module's final closing card.

## 2. Behavior

This needs to branch based on the reader's sentiment, so build it as **one self-contained card type that manages its own internal steps**, rather than multiple separate cards or changes to `DeckViewer`'s linear navigation.

**Step 1 — private sentiment check.** Ask a simple either/or question (reuse the same pattern as the `yes-no` card, e.g. "Senang, worth it!" vs "Kurang greget"). This is never shown publicly and doesn't gate progress through the deck — the reader can click past this card at any time without answering.

**Step 2a — if positive:** show two things together, not sequentially:
- A "Beri Review 5 Bintang di Google" button that opens the Google Business review link in a new tab (`target="_blank" rel="noopener noreferrer"`).
- An in-app testimonial form: a 1–5 star selector (new small UI component — clickable stars, no existing one in this app to reuse) plus a short comment textarea, with a submit button. This captures a testimonial for marketing use even if the reader doesn't follow through on the external Google review.

**Step 2b — if negative:** show a private feedback textarea only (no star rating, no Google review prompt) with copy that makes clear this goes to the team privately, not published anywhere. Submitting shows a brief thank-you, same as the positive path.

Either path should end with a short thank-you state, and the reader can then proceed to the final card via the normal "Lanjut" button — **this card should never block progress**; treat it as always-complete in `DeckViewer`'s completion check, the same bucket as `info`/`worksheet` cards.

## 3. New card type

Add to `Module 1/src/types/card.ts`:

```ts
interface ReviewRequestCardData extends BaseCard {
  type: 'review-request'
  eyebrow?: string
  title: string
  sentimentPrompt: string
  positiveLabel: string
  negativeLabel: string
  googleReviewButtonText: string
  testimonialPromptLabel: string
  testimonialPlaceholder?: string
  privateFeedbackPrompt: string
  privateFeedbackPlaceholder?: string
  thanksMessagePositive: string
  thanksMessageNegative: string
}
```

Wire it into `DeckViewer`'s render switch and completion check like the other card types.

## 4. Google review link — placeholder, not hardcoded inline

Add a small config file, e.g. `Module 1/src/config/reviewConfig.ts`, exporting `GOOGLE_REVIEW_URL`. Set it to an obvious placeholder (e.g. `'https://g.page/r/REPLACE_WITH_YOUR_GOOGLE_REVIEW_LINK/review'`) with a comment marking it as the one thing to swap in before launch — same pattern as the original funnel brief's placeholder-palette approach. The review-request card reads from this config rather than a hardcoded URL in content.

## 5. Stub the data capture — no backend yet

This app is still frontend-only. Add two clearly named stub functions (e.g. in `Module 1/src/review/reviewStubs.ts`): `submitTestimonial(data)` and `submitPrivateFeedback(data)`. For now, both should just persist to `useWorkbookStore` (so the data isn't lost on refresh) and `console.log` what would be sent. Comment clearly that these are the drop-in points for a future backend call — mirroring the `submitLead()` stub convention from the original Effortless Leader funnel brief. Be upfront in the comment that today, this data never actually reaches the business owner — it only lives in the visitor's own browser.

## 6. Voice & format

- Match `chapter8.ts` and the rest of the module's register — read it before writing copy. Casual, direct Bahasa Indonesia, no corporate survey-speak ("Bagaimana pengalaman Anda menyelesaikan modul ini?" not "Kami menghargai masukan Anda...").
- Keep the visual language consistent with existing cards (rounded, indigo accent, slate neutrals).
- Insert this as a new card in `Module 1/src/content/chapter8.ts`, positioned after the `report` card and before the module's final closing card. Don't touch chapters 1–7.

## 7. Out of scope for this prompt

- Actually wiring a real Google Business review link (placeholder only — Bro Rono drops in the real one)
- Any backend/save-to-server logic beyond the stub functions
- Showing testimonials anywhere else in the app or on the marketing funnel (that's a future, separate task)
- A follow-up reminder on the module home screen for readers who skip this card

## 8. Definition of done

- [ ] `Module 1/src/types/card.ts` has the new `review-request` type per section 3
- [ ] The card is wired into `DeckViewer` and never blocks progress
- [ ] Positive path shows both the Google review button (using the placeholder config) and an in-app 1–5 star + comment testimonial form
- [ ] Negative path shows a private-only feedback textarea, clearly labeled as such
- [ ] `submitTestimonial` / `submitPrivateFeedback` stubs exist, persist to the workbook store, and are clearly commented as future backend drop-in points
- [ ] `GOOGLE_REVIEW_URL` lives in one obvious config file, not hardcoded inline
- [ ] Card is placed correctly in `chapter8.ts`, after the report card, before the closing card
- [ ] Voice matches the rest of the module
- [ ] Runs via `npm run dev` with no console errors
- [ ] Chapters 1–7 and existing chapter 8 content untouched otherwise
