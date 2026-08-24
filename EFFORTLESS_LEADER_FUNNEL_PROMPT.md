# Build Brief: Effortless Leader — Free Prediagnostic Funnel (Frontend Only)

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in this repo.

## 1. Context

This repo (`Prediagnosis Funnel/`) contains two related businesses:

- **Performa Consulting** — enterprise-tier management consulting, done-for-you delivery. Reference: `organizational_prediagnostic_tool_id.html` (and its English twin `organizational_prediagnostic_tool.html`). This is a consultant-administered intake tool: formal tone, PT/industry/headcount fields, auto-generates a formal Rp35–95jt Phase 1 proposal. **Do not copy its tone or its consultant-facing fields** — only its diagnostic question content and scoring logic are reusable.
- **Effortless Leader (EL)** — the brand this task is for. DIY business coaching for Indonesian SME owners. Instead of a consulting team executing the fix for the client, the SME owner does the work themselves using self-paced micro-learning modules, with founder-led coaching layered on top, scoped to whatever their diagnosis flags.

Reference for EL's voice: `Module 1/src/content/module1.ts`. This is a React micro-learning card deck (Vite + TS + Tailwind v4 + framer-motion + lucide-react) already built in EL's voice — casual, blunt, direct Bahasa Indonesia. Example lines from it:

> "Banyak bos mengelola bisnis pakai gaya dukun. Saat untung menipis, mereka menatap atap dan berkata, 'Insting saya bilang tim sales lagi malas.'"
>
> "'Insting' itu bukan alat ukur bisnis. Itu cuma cara halus untuk bilang Anda tidak tahu apa yang rusak."

Match this register throughout — direct, a little confrontational, no corporate jargon, talks to the owner like a peer who's seen the pattern before. Also review `Module 1/src/types/card.ts` and the components in `Module 1/src/components/` to understand the existing component/card conventions, since this new app should feel like it belongs to the same family.

## 2. Business logic (authoritative — do not deviate)

EL reuses Performa's exact 13-question / 3-domain (Output / Process / Input) diagnostic and its 1–4 BARS scoring — **pull the 13 questions, section groupings, and anchor text verbatim from `organizational_prediagnostic_tool_id.html`** (the `diagnosticData` array and the scoring logic in `generateReport()`). Do not retype or paraphrase the diagnostic questions themselves — read the file and reuse them. A score of 1 or 2 on a question = "flagged" / red flag, same as the existing tool.

Those 13 questions map to 10 consulting services. Services 1–8 each correspond to one micro-learning module (Module 1 already exists; Modules 2–8 do not exist yet and are NOT part of this task — just the mapping/recommendation logic that would point to them). Services 9 and 10 are NOT modules (recorded e-courses at scale, and premium live facilitation) and must never appear as a recommended module.

Authoritative mapping table:

| Question(s) | Diagnostic Area | Service | Module |
|---|---|---|---|
| (n/a — everyone gets this) | Why real diagnosis beats gut instinct | Service 1: Enterprise Operational Audit | Module 1 |
| Q1, Q2 | KPI availability & quality | Service 2: KPI Architecture & Strategic Cascading | Module 2 |
| Q3 | Monitoring & governance | Service 3: Executive Business Review (EBR) Governance | Module 3 |
| Q4, Q6, Q10 | Process hierarchy, process efficiency, QMS | Service 4: Business Process Re-engineering (Silo-Breaking) | Module 4 |
| Q5 | SOP compliance & usability | Service 5: SOP Optimization & Usability Redesign | Module 5 |
| Q7, Q8, Q9 | Goal-setting, coaching, corrective action (PMS) | Service 6: Performance Management System Overhaul | Module 6 |
| Q11, Q12 | Competency modeling & recruitment | Service 7: Job Architecture & Competency Modeling | Module 7 |
| Q13 | Resources & operational tools | Service 8: Enterprise Change Management Rollout | Module 8 |

Q numbers above refer to the order in `diagnosticData` in `organizational_prediagnostic_tool_id.html` (Q1–Q3 = Output section, Q4–Q10 = Proses section, Q11–Q13 = Input section).

## 3. Scope of THIS task

Build a new, self-serve, EL-branded web app with three states: **Quiz → Instant Report → Offer**. This is frontend-only.

**Explicitly out of scope — stub these, don't build them:**
- No database/backend (Supabase will be wired in a later task — isolate any "save lead" / "save responses" logic into clearly named, single-purpose functions so it's a clean drop-in point later, e.g. a `submitLead()` stub that currently just logs to console / keeps it in React state)
- No real payment processing for module purchase
- No real Calendly/booking embed — a styled button/link placeholder is enough
- No backend for Modules 2–8 content — they don't exist yet; only reference them by name in the recommendation output

### 3.1 Quiz screen
- Lightweight lead capture before or after the questions (your choice of flow, but capture: Name, WhatsApp number, Email, Business name, optional rough team size). No "Industri" dropdown, no formal PT/headcount fields like Performa's version.
- The 13 questions, sourced verbatim from `organizational_prediagnostic_tool_id.html`, same 1–4 BARS scoring UI pattern.
- All UI copy (headers, intro, button labels) in EL's casual Bahasa Indonesia voice — not Performa's formal tone. You may lightly simplify the *question wording* for SME readability if genuinely necessary, but do not change what's being measured, and clearly mark any reworded question text with a `// TODO: review wording — Bro Rono` comment so it gets a copy review pass.

### 3.2 Instant report screen
- Compute per-question score, the 3 domain averages (Output/Process/Input), and total red-flag count (score ≤ 2) — same math as the existing tool.
- List the flagged questions, each showing: the diagnostic area, and which Service + Module it maps to (per the table above).
- Replace Performa's corporate "Sintesis Eksekutif" report language with a direct, plain-spoken summary in EL's voice — something that reads like a peer leveling with the owner, not a consulting deliverable.
- Visually group the recommended modules (always Module 1 + whichever of Modules 2–8 have at least one flagged question feeding into them) so it's obvious what to do next.

### 3.3 Offer screen (can be the bottom section of the report, your call)
Two CTAs, both personalized to the specific flagged modules/services from step 3.2:
1. **"Beli Modul [X, Y, Z]"** — buy the specific recommended micro-learning module(s), always including Module 1. Placeholder button/link, no real checkout.
2. **"Booking Discovery Call"** — placeholder booking CTA. Copy should make clear the coaching call will focus specifically on their flagged services, not a generic sales call.

## 4. Tech & architecture

- New Vite + React + TypeScript + Tailwind app, mirroring `Module 1/`'s stack and conventions (component structure, card-based patterns) so this can share a design system with the modules later.
- New top-level folder: `Effortless Business Funnel/` — sibling to `Module 1/`, do not modify `Module 1/` or either Performa HTML file, only read them for reference.
- Simple React state (`useState`/`useReducer`) for quiz answers and flow state — no routing library needed for 3 screens, keep it simple.
- Bahasa Indonesia throughout, mobile-first (assume most traffic is from mobile ad campaigns).
- No existing EL brand colors/logo in this repo — pick a distinct, friendly palette that doesn't reuse Performa's navy/blue corporate look, and leave an obvious single spot (e.g. a `theme.ts` or CSS variables) where a real logo/palette can be dropped in later.

## 5. Definition of done

- [ ] All 13 questions present, scored 1–4, flagged at ≤2 — matches the source tool's logic
- [ ] Output/Process/Input domain averages computed correctly
- [ ] Flagged questions correctly resolve to Service + Module per the mapping table — never show Service 9 or 10, never show a module number above 8
- [ ] Offer screen dynamically lists only Module 1 plus whichever of Modules 2–8 are actually triggered by this user's flags
- [ ] Lead capture fields exist and are clearly stubbed for future backend wiring (no dead ends, no crashes)
- [ ] Fully responsive, Bahasa Indonesia, tone matches `Module 1/src/content/module1.ts`
- [ ] Runs via `npm run dev` with no console errors
- [ ] Short README noting what's stubbed/TODO for the backend phase
