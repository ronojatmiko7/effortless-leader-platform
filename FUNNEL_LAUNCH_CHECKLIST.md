# Effortless Leader — Prediagnosis Funnel Launch Checklist

Status as of Aug 19, 2026.

## 1. Diagnostic engine
- [x] 13-question / 3-domain (Output/Proses/Input) diagnostic content, verbatim source
- [x] 1–4 BARS scoring, red-flag logic at score ≤2
- [x] Question → Service → Module mapping table (Services 1–8 = Modules 1–8; Services 9–10 are not modules)
- [x] Ported into the EL-branded self-serve app (`Effortless Leader Funnel/`)
- [x] Q2 terminology updated to KPI Hasil/KPI Usaha
- [x] **Named** — product name is now **"Asesmen 13 Titik Kebocoran Bisnis"**, shorthand **"Cek Kebocoran"** used in CTAs/casual reference

## 2. Microlearning content (Modules 1–9)
- [x] Modules 1–8 built and consolidated into `Modules Hub/` (one app, purchase-gated by design, currently all unlocked for the beta round)
- [x] **Module 9 — AI Adoption & Claude for Business — built and wired into the Hub.** Confirmed directly (not from stale notes): full 8-chapter content plus intro/outro pretest-posttest wrapper, registered in `Modules Hub/src/data/modules.ts` as module 9.
- [x] Modules Hub click-tested Aug 14 (Chrome extension against `npm run dev`) — lock states, chapter unlock, cross-module progress isolation all confirmed working
- [ ] Module 2 terminology update ("Lead/Lag Metric" → "KPI Usaha/KPI Hasil") — brief + runner ready (`run-module2-terminology-update.ps1`), not yet run
- [ ] Review-request (Google review/testimonial) card — only exists on Module 1, and even there the external Google-review button was never wired. User decision: leave as-is for now, not extending to Modules 2–9
- [x] `Micro Learning App/` (old, empty) moved to `_to_delete/`

## 3. EL self-serve funnel app — Quiz → Report → Offer
`Effortless Leader Funnel/` exists at repo root, orange brand palette, EL logo live.
- [x] Lead capture screen: Name, WhatsApp, Email, business name, team size
- [x] Quiz screen: 13 questions ported, EL brand styling
- [x] Instant report screen: domain averages, flagged questions, mapped Service/Module list, EL-voice summary
- [ ] Offer screen still stubbed — `purchaseModules()` just console.logs, no real checkout. Deprioritized (not needed for the free beta round, see section 4)
- [ ] Review the 3 TODO-tagged reworded questions
- [ ] **Landing/hero page — copy drafted (v2), not yet built into code.** Right now cold visitors land directly on the contact form with zero context; drafted a screen to go before it. Headline is the product name, hook line underneath, 3-step how-it-works, no fabricated social proof (placeholder left for after the beta round's real testimonials). Next step: turn into a real `LandingScreen.tsx`, wired into `QuizScreen.tsx`'s phase state before `LeadCaptureForm`.
- [ ] No social proof/testimonials anywhere yet — same placeholder-until-real-feedback approach as the landing page
- [ ] Calendly booking form only has Calendly's generic default question — real questions need adding by hand in the dashboard
- [ ] Mobile-device QA pass

## 4. Backend & data — paused for the beta round
- [ ] Supabase schema for leads, quiz responses, purchases — still stubs, **deliberately on hold**. Near-term plan is a free, no-login beta review round sharing all 9 modules with a handful of people for WhatsApp feedback — no accounts, no payment, so no backend is actually needed yet. `hasModuleAccess()` is already `UNLOCKED_FOR_TESTING = true` (everything open), which is the correct state for this round, not a bug.
- [ ] Checked Supabase account — no project exists for this app (only two unrelated inactive ones under org "Trizi"). Design for the real per-customer entitlement system is written but deferred until the actual paid launch.

## 5. Payments — deprioritized for the beta round
- [x] Pricing model set: Rp199,000/module or Rp999,000 bundle (all 8)
- [ ] Gateway decision (Xendit recommended over Scalev) — still pending, not needed until after the beta round
- [ ] Real checkout wiring — not needed until after the beta round

## 6. Scheduling — DONE
- [x] Live Calendly event "Effortless Leader — Diagnostic Call" (free, 60 min), wired into the funnel app

## 7. Deployment & hosting
- [x] **Modules Hub is live and correctly configured.** The existing Vercel project ("effortless-leader-platform") was previously misconfigured to build the old standalone Module 1 — confirmed via a fresh build log check that this is now fixed: latest deployment builds `modules-hub@0.0.0` correctly. Live at `effortless-leader-platform.vercel.app`, includes Module 9.
- [ ] **The funnel app (13-question quiz) has no Vercel deployment at all yet.** No project exists for `Effortless Leader Funnel/`. Tried creating one via the Vercel connector — blocked by the same `403 "You don't have permission to create the project"` error hit before; the connector can manage existing projects but not create new ones. **Needs a manual import**: vercel.com/new → import `ronojatmiko7/effortless-leader-platform` → set Root Directory to `Effortless Leader Funnel` → deploy. This is the critical remaining blocker before the funnel can go live anywhere.
- [ ] Domain purchase, custom email, MX/TXT, analytics — all still open

## 8. Beta review round (near-term plan, separate from the full paid launch)
- [x] Decision made: share all 9 modules free with a handful of people, no login, feedback collected manually via WhatsApp (not an in-app system)
- [x] Module 9 registered in the Hub — no longer a blocker
- [x] Modules Hub deployment fixed — reviewers can already be sent `effortless-leader-platform.vercel.app` today
- [ ] Confirm the Aug 18–19 Modules Hub changes (Module 9 wiring) are actually committed/pushed to GitHub — last check was inconclusive since the device bridge shell was down; re-run `git status` from the repo root to confirm

## 9. Ads campaign
- [ ] Targeting: entrepreneurs 20–99 employees, seed list, test tiers, creative, pixel — all open, not needed until after the beta round

## 10. Final QA
- [ ] Full click-through, mobile + desktop — Modules Hub done via Chrome extension Aug 14, funnel app still open
- [ ] Soft-launch to a warm audience before opening ad spend — the beta review round is effectively this, informally
