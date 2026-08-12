# Build Brief: Module 2 — Chapter 5 Addendum ("Kamus KPI Lintas Industri" worksheet card)

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/src/content/chapter5.ts` already exists and is built. Chapter 5 shows three industry examples of Output/Proses/Input KPIs (F&B, trading/distribusi, ecommerce — cards `c5-card-4` through `c5-card-6`), then a scenario quiz (`c5-card-7`), then moves into applying the Lag/Lead method to Proses (`c5-card-8` onward).

A downloadable reference PDF already exists at `Module 2/public/downloads/kamus-kpi-lintas-industri.pdf` — a "Kamus KPI Lintas Industri" covering 10 industries (the 3 already in the chapter, plus retail fisik, jasa, manufaktur/produksi, konstruksi/kontraktor, klinik/kesehatan, pendidikan/kursus, dan agency/kreatif), each with 2–3 candidate KPIs per Output/Proses/Input area. **Do not regenerate or edit this PDF — it already exists and is final.** This prompt only wires it into the chapter as a `worksheet` card.

The `worksheet` card type already exists in `Module 2/src/types/card.ts` (ported from Module 1) and its renderer already exists at `Module 2/src/components/cards/WorksheetCard.tsx` — both are already wired into `Module 2/src/components/DeckViewer.tsx`. This is the first chapter to actually use the `worksheet` type in the new chapter-based content (it was previously only used in the old legacy flat decks) — don't build anything new, just add a card of this existing type.

## 2. What to add

Insert exactly **one new `worksheet` card** into `Module 2/src/content/chapter5.ts`, positioned right after `c5-card-7` (the ecommerce scenario quiz) and before the current `c5-card-8` (the Proses re-application section) — i.e. right after the three industry examples wrap up, before the reader moves into applying the method. Renumber subsequent card ids/indices only if the file's convention requires strictly sequential numbering; otherwise just insert it in the array at that position.

The card:

```ts
{
  id: 'c5-card-7b', // or renumber sequentially if that's this file's convention
  type: 'worksheet',
  icon: /* pick a fitting lucide-react icon, e.g. BookOpen or Library — not already used in this file */,
  eyebrow: 'Referensi Tambahan',
  title: 'Bisnis Anda Bukan Salah Satu dari 3 Contoh Tadi?',
  body: [
    'Tiga contoh tadi cuma cuplikan. Kalau bisnis Anda bukan F&B, trading/distribusi, atau ecommerce — atau Anda cuma butuh lebih banyak pilihan — unduh referensi lengkapnya.',
    'Isinya 10 jenis bisnis, masing-masing dengan beberapa kandidat KPI di area Output, Proses, dan Input. Bukan daftar wajib pakai semua — ambil 1-2 yang paling relevan, lalu uji pakai cara dari Bab 3 dan Bab 4 (bukti bukan proxy, predictive dan controllable).',
  ],
  downloadUrl: '/downloads/kamus-kpi-lintas-industri.pdf',
  buttonText: 'Unduh PDF - Kamus KPI Lintas Industri',
}
```

Match the exact wording above (it's already been written and reviewed) — adjust only the `icon` choice and `id`/array position to fit the file's existing conventions.

## 3. Out of scope

- Do not modify the PDF file itself
- Do not touch any other card in `chapter5.ts`
- Do not modify `chapters.ts`, other chapters, or any Module 1 file
- No changes to card types or components — everything needed already exists

## 4. Definition of done

- [ ] `Module 2/src/content/chapter5.ts` has exactly one new `worksheet` card, positioned right after the industry-examples/quiz section and before the Proses re-application section
- [ ] `downloadUrl` points to `/downloads/kamus-kpi-lintas-industri.pdf` and the file exists at `Module 2/public/downloads/kamus-kpi-lintas-industri.pdf`
- [ ] No other card in the chapter is modified
- [ ] Runs via `npm run dev` with no console errors, and the download button actually serves the PDF
- [ ] `Module 1/` left completely untouched
