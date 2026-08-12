# Build Brief: Module 2 — Chapter 1 Content Fixes

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/src/content/chapter1.ts` already exists (built from `MODULE_2_CHAPTER_1_REBUILD_PROMPT.md`). Two content issues came up on review. Both are scoped to this one file — no other chapters, no app shell, no `Module 1/` changes.

## 2. Fix 1 — Card 6's Module 1 callback isn't self-contained

`c1-card-6` ("Ini Insting Versi Baru, Cuma Pakai Baju Data") opens with "Ingat soal bahaya mengelola bisnis pakai insting?" — this assumes the reader already went through `Module 1/`. Module 1 and Module 2 are sold as separate products, so a reader who only bought Module 2 would hit an assumed reference they never saw.

Fix the body so the Module 1 reference is explicitly conditional, not assumed:

- Sentence 1: a conditional nod to Module 1 for readers who've done it ("Kalau Anda sudah ikut Modul 1: ...") — a bonus reinforcement, not required knowledge.
- Sentence 2: state plainly and self-contained *why* vanity metrics are more dangerous than raw gut instinct, so the card reads complete even without Module 1 context.
- Keep the existing third body paragraph (the "data-driven karena cek followers" point) as-is.

## 3. Fix 2 — Card 5's sort-list order doesn't match real cash-flow behavior

`c1-card-5` (sort-list, "urutkan bagaimana biasanya angka basa-basi bikin bos kaget di akhir...") currently orders the sequence: omzet naik → belanja naik → uangnya nyangkut di stok/tagihan → kaget kas tipis. This is causally backwards — an owner who already knows their money is stuck in stock/receivables wouldn't then be surprised to find cash is thin. The realistic order is: the owner checks the bank balance and is shocked first, then investigates and discovers why (money's tied up in unsold stock or unpaid invoices).

Fix:

- Reorder `correctAnswer` to: omzet naik → belanja naik → kaget kas tipis → baru sadar uangnya nyangkut di stok/tagihan.
- Reword `question` to drop "di akhir" — it only made sense under the old order, since "kaget" is no longer the final beat (e.g. "Urutkan bagaimana biasanya cerita angka basa-basi ini terjadi, dari yang duluan sampai yang belakangan disadari").
- Update `errorFeedback` to describe the new correct order instead of the old one.
- `successFeedback` and `items` (the shuffled list itself) don't need to change.

## 4. Out of scope

- Any other card in `chapter1.ts`
- Card types, components, or the app shell
- `Module 1/`

## 5. Definition of done

- [ ] Card 6's body opens with a conditional (not assumed) Module 1 reference and reads as complete on its own without it
- [ ] Card 5's `correctAnswer` order is omzet → belanja → kaget → nyangkut
- [ ] Card 5's `question` no longer implies "kaget" is the last step
- [ ] Card 5's `errorFeedback` matches the new order
- [ ] Runs via `npm run dev` with no console errors
