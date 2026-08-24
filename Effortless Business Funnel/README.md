# Effortless Leader — Free Prediagnostic Funnel

Self-serve **Quiz → Instant Report → Offer** funnel for Effortless Leader (EL),
Performa Consulting's DIY coaching brand for Indonesian SME owners. Frontend
only — see `EFFORTLESS_LEADER_FUNNEL_PROMPT.md` at the repo root for the full
build brief this app was built against.

Stack: Vite + React 19 + TypeScript + Tailwind v4 + framer-motion +
lucide-react, mirroring `Module 1/`'s conventions so this can share a design
system with the modules later.

## Diagnostic logic

The 13 questions, section groupings, and 1–4 BARS anchor text are sourced
verbatim from `organizational_prediagnostic_tool_id.html`'s `diagnosticData`
array (see `src/data/diagnosticQuestions.ts`). Three questions have lightly
reworded phrasing for SME readability (corporate/HR jargon an SME owner
likely won't recognize) — each is marked `// TODO: review wording — Bro
Rono` in that file and needs a copy review pass. What each question measures
is unchanged.

Scoring (`src/lib/scoring.ts`) mirrors `generateReport()` from the source
tool: score 1–4 per question, red flag at score ≤ 2, domain averages for
Output/Proses/Input. The Question → Service → Module mapping
(`src/data/moduleMapping.ts`) is transcribed from the brief's authoritative
table — Services 9 and 10 are intentionally absent since they're not
micro-learning modules and must never be recommended.

## What's stubbed for the backend phase

Everything below currently only logs to the console or lives in React
state — nothing is persisted, no real money moves, no real booking happens.

- **Lead capture** — `src/lib/submitLead.ts` exports `submitLead()` and
  `submitDiagnosticResponses()`, both one-line stubs. Swap the `console.log`
  for a real Supabase insert once the leads/responses tables exist.
- **Module purchase** — `purchaseModules()` in `src/components/ReportScreen.tsx`
  is a placeholder; the "Beli Modul …" button shows a "checkout belum aktif"
  message instead of processing payment. No Midtrans/Xendit wiring yet.
- **Diagnostic call booking** — `bookDiagnosticCall()` in
  `src/components/ReportScreen.tsx` is real, not a stub: it opens the
  "Effortless Leader — Diagnostic Call" Calendly event type (free, 60 min) in
  a new tab, prefilled with the lead's name/email. URL lives in
  `src/config/schedulingConfig.ts` (`CALENDLY_DIAGNOSTIC_CALL_URL`).
- **Modules 2–8 content** — only referenced by module number/name in the
  recommendation output. The modules themselves aren't wired here.

## Brand palette

No real EL logo/colors exist yet. The placeholder palette (warm orange,
distinct from Performa's navy/blue) lives in exactly two places that must be
kept in sync: the `@theme` block in `src/index.css` and `src/theme.ts`. Swap
both when the real brand assets arrive.

## Running locally

```bash
npm install
npm run dev
```
