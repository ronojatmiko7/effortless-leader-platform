# Effortless Leader — Prediagnosis Funnel Launch Checklist

Status as of Aug 14, 2026.

## 1. Diagnostic engine
- [x] 13-question / 3-domain (Output/Process/Input) diagnostic content, verbatim source
- [x] 1–4 BARS scoring, red-flag logic at score ≤2
- [x] Question → Service → Module mapping table (Services 1–8 = Modules 1–8; Services 9–10 are not modules)
- [x] Ported into the EL-branded self-serve app — done via `run-funnel-app.ps1` (see section 3)

## 2. Microlearning content (Modules 1–8)
- [x] Module 1 — Enterprise Operational Audit
- [x] Module 2 — KPI Architecture & Strategic Cascading
- [x] Module 3 — Executive Business Review Governance
- [x] Module 4 — Business Process Re-engineering
- [x] Module 5 — SOP Optimization & Usability Redesign
- [x] Module 6 — Performance Management System Overhaul
- [x] Module 7 — Job Architecture & Competency Modeling
- [x] Module 8 — Enterprise Change Management Rollout
- [x] Module 1 post-completion review-request card (Google review + testimonial capture)
- [ ] Confirm whether the review-request pattern should roll out to Modules 2–8 too, or stay Module-1-only
- [x] Deleted the empty `Micro Learning App/` folder (moved to `_to_delete/` — empty that folder yourself whenever)
- [ ] Push local repo to remote (nothing pushed yet — needs to happen from this machine)

## 3. EL self-serve funnel app — Quiz → Report → Offer — BUILT
`Effortless Leader Funnel/` now exists at repo root. `npm install` + `npm run build` clean, dev server verified serving. Orange brand palette, single swap point in `src/index.css` `@theme` + `src/theme.ts`.
- [x] Lead capture screen: Name, WhatsApp, Email, business name, team size
- [x] Quiz screen: 13 questions ported verbatim; 3 questions lightly reworded for SME readability, each flagged with a `// TODO: review wording — Bro Rono` comment
- [x] Instant report screen: domain averages, flagged questions, mapped Service/Module list, EL-voice summary
- [x] Offer screen: "Beli Modul [X,Y,Z]" + "Booking Discovery Call" CTAs — still placeholder/stubbed (no real checkout, no real Calendly link yet)
- [x] EL brand palette dropped into the theme swap point (orange)
- [ ] **You still need to: `npm run dev` and eyeball it, and specifically review/approve the 3 TODO-tagged reworded questions before this goes live**
- [ ] Explicit mobile-device QA pass (built mobile-first per brief, not yet eyeballed on an actual phone)

## 4. Backend & data
- [ ] Decide on Supabase schema for leads, quiz responses, purchases (currently console.log/React state stubs)
- [ ] Wire `submitLead()` stub to real database
- [ ] Wire `submitTestimonial()` / `submitPrivateFeedback()` stubs to real database
- [ ] Basic admin view or export so you can actually see incoming leads

## 5. Payments
- [ ] Decide payment processor (Midtrans/Xendit are the common Indonesia-market picks — worth a quick comparison before building)
- [ ] Wire real checkout for module purchase (currently placeholder button, no processing)
- [ ] Decide how "coaching package = free access to all microlearnings" gets provisioned (manual unlock vs automated)

## 6. Scheduling
- [ ] Replace placeholder "Booking Discovery Call" button with real Calendly embed (Calendly connector is already live in this workspace — this one's low-effort to unblock)
- [ ] Set up a discovery-call event type in Calendly scoped to prediagnosis leads

## 7. Deployment & hosting
- [ ] Confirm hosting plan (Vercel connector is live in this workspace) for both the funnel app and Modules 1–8
- [ ] Buy the domain — either through Vercel directly (one dashboard for domain+DNS+hosting) or via Cloudflare (at-cost pricing, more registrar flexibility); both work fine with Vercel hosting
- [ ] Domain/subdomain decision (e.g. funnel on main domain, modules on subdomain or path)
- [ ] Set up custom email on the same domain — no conflict with hosting, since email uses separate MX/TXT records from the site's A/CNAME records. Leaning Google Workspace Business Starter (~$6/user/month) for the Gmail-familiar interface and because it plugs into the Gmail/Calendar/Calendly connectors already in use, over Zoho Mail's cheaper-but-less-integrated option
- [ ] Add MX/TXT (SPF/DKIM/DMARC) records for the chosen email provider once domain is live — Vercel has one-click DNS presets for Google Workspace if using Vercel DNS
- [ ] Basic analytics wired (conversion from ad click → quiz start → quiz complete → purchase/booking)

## 8. Ads campaign
- [ ] Confirm targeting: entrepreneurs, 20–99 employees — reasonable ICP band, but note Meta Ads has no direct employee-count targeting (that's a LinkedIn Campaign Manager feature); Meta will need proxy targeting (job-title interests: business owner/direktur/founder) or lookalike audiences
- [ ] Build a seed list (past clients, email list, CRM export) for lookalike audience — will outperform interest-stacking
- [ ] Decide whether to split into two test tiers (20–49 vs 50–99 employees) given likely differences in budget/pain points
- [ ] Ad creative pointing straight at the free self-assessment (not at the coaching package directly)
- [ ] Pixel/conversion event set up on the funnel app before spend starts

## 9. Final QA
- [ ] Full click-through: ad → quiz → report → offer → purchase or booking, on both mobile and desktop
- [ ] Confirm no dead ends now that backend/payment/Calendly are wired (currently intentionally stubbed)
- [ ] Soft-launch to a small warm audience before opening ad spend
