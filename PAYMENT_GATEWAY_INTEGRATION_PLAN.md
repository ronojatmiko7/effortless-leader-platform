# Payment Gateway Integration Plan — Effortless Leader Funnel

Status: **DRAFT — comparison + design only, nothing built yet.** Written Aug 24, 2026 at Bro Rono's request, following up on the "Xendit vs Scalev" open question logged in `prediagnosis-funnel-workflow.md`. Confirmed with Bro Rono: a registered business entity (PT/CV) is ready, so KYC is not a blocker.

---

## 1. Gateway comparison

| | **Xendit** | **Midtrans** | **Mayar.id** |
|---|---|---|---|
| Virtual account (bank transfer) | ~Rp4,000–9,000 flat fee per transaction, varies by bank ([pricing](https://www.xendit.co/en/pricing/)) | Not fully published; quoted per-merchant at onboarding | Rp4,000 flat (BRI/BNI/Permata/Mandiri) ([fees](https://docs.mayar.id/mor/fees)) |
| E-wallet (OVO/DANA/GoPay/ShopeePay) | 2.0%–5.5% + Rp4,000, varies by wallet | Not fully published | 1.5% (Jenius 2%) |
| QRIS | 0.7% (BI-mandated rate, inclusive of VAT) + Rp4,000 | 0.7% (same BI-mandated rate) ([docs](https://docs.midtrans.com/docs/what-is-the-applicable-transaction-fee-for-qris)) | 0.7% |
| Card | 2.9% + Rp2,000 + Rp4,000 (domestic), 3.9% Amex | Not fully published, typically comparable | 2.6% + Rp2,000 |
| **Platform/admin fee on top** | None found — just per-transaction fees | None found | **4% (Starter) / 3% (Business) / 0% (Enterprise)** on digital-content products, plus Rp2,775 per withdrawal |
| KYC for PT/CV | Director ID + NPWP, corporate NPWP, NIB (or TDP+SIUP), Deed of Latest Change, Ministry of Justice Decree, industry license if applicable ([docs](https://help.xendit.co/hc/en-us/articles/10891368765593-ID-What-are-the-legal-documents-required-to-register-to-Xendit-for-Indonesian-Merchants)) | Broadly similar corporate KYC, not fully published | Lighter — built for individual creators/UMKM too |
| Integration model | REST API, hosted **Invoice** checkout page + webhooks — build-your-own entitlement logic | REST API, similar hosted **Snap** checkout + webhooks | No-code/low-code storefront; can *also* deliver the product (handles some entitlement itself) |
| Best fit here | Matches the webhook → Supabase → unlock design already sketched in memory; no stacked admin fee | Viable alternative to Xendit, effectively a tie on paper | Attractive if you wanted to skip building a checkout/entitlement system, but the 3–4% admin fee stacks on top of the per-transaction fee — meaningfully more expensive at Rp199rb–999rb price points, and less control over the module-gating UX you already have (Hub, progress tracking, member profile) |

**Recommendation: Xendit.** With the entity already registered, KYC isn't a differentiator between Xendit and Midtrans, and Xendit's published pricing is transparent and fee-only (no extra admin cut). It also directly matches the purchase/webhook design already scoped for this project. Midtrans is a legitimate fallback if Xendit's onboarding stalls for any reason — same integration shape, so switching later wouldn't mean redesigning the flow, just re-pointing the webhook handler. Mayar.id is worth reconsidering only if you'd rather trade the 3–4% fee for *not* building/maintaining the entitlement system yourselves — not recommended given the custom Hub/progress/pricing UI already built.

Note: exact per-channel fee numbers above are scraped from current public pages and change over time — confirm final rates directly in the Xendit dashboard before going live, and this isn't financial advice.

---

## 2. Full purchase/entitlement flow (draft design — not yet built)

This extends the design already sketched in `prediagnosis-funnel-workflow.md` with the actual current file layout, confirmed by reading the live stubs.

### 2.0 Product & free-preview structure (added Aug 24, per Bro Rono)

- 9 modules total. **Module 1: entirely free**, every chapter — unchanged.
- Modules 2-9: **8 individually sellable products** (`module-2` .. `module-9`, Rp199rb each) **plus 1 bundle** (`bundle-all`, Rp999rb, covers all 8) — matches the schema in 2.3.
- **New rule**: inside each of modules 2-9, **Bab 1 is free for everyone to preview** — no purchase, no login. **Bab 2 onward is paywalled** — requires a `paid` row for that specific module, or the bundle, or a coaching-package entitlement.
- This is a real change from the current stub, which blocks entire modules 2-9 outright rather than letting anyone preview a chapter first.

**Assumption flagged for confirmation**: the "Pendahuluan" (intro) card-deck ahead of Bab 1 is treated as free too, since it's a short teaser — not stated explicitly, easy to flip. The "Penutup" (outro) is assumed paywalled along with Bab 2-8, since it's the capstone/wrap-up rather than preview material.

**What this touches in the actual code** (grounded by reading the live files, nothing changed yet):

- `Modules Hub/src/access/moduleAccess.ts` — today's `hasModuleAccess(moduleNumber)` is all-or-nothing per module. Becomes a customer-aware `hasFullModuleAccess(moduleNumber, customerId)` that gates Bab 2 onward only; module 1 stays always-true.
- `Modules Hub/src/App.tsx` — `handleSelectModule()` currently does `if (!hasModuleAccess(module.number)) return`, blocking entry into any locked module entirely. That block has to be removed so everyone can enter a module's chapter list and open Bab 1.
- `Modules Hub/src/progress/ProgressContext.tsx` — `isChapterUnlocked(chapterId)` today only checks sequential completion (chapter N needs N-1 done), with zero purchase awareness. It needs a second, combined gate: intro/Bab 1 always unlocked; Bab 2+ requires *both* the existing sequential check *and* `hasFullModuleAccess()`.
- `Modules Hub/src/components/ModuleHome.tsx` — the locked-chapter copy currently only ever says "Selesaikan {bab sebelumnya} dulu." Once a chapter can be locked for two different reasons, it needs to distinguish "finish the previous chapter" from "buy this module to continue" (with a CTA into checkout) — otherwise a ready-to-pay user hits a dead end with the wrong message.
- `Modules Hub/src/components/HubHome.tsx` — the module list's lock badge is currently tied to the same all-or-nothing `hasModuleAccess()`. Copy needs to shift toward something like "Bab 1 gratis" so it's clear a locked module can still be opened and previewed.

### 2.1 What exists today (verified by reading the actual files)

- `Modules Hub/src/access/moduleAccess.ts` — `hasModuleAccess(moduleNumber)` is a stub with no customer parameter at all. `UNLOCKED_FOR_TESTING = true` currently unlocks everything for the free beta round.
- `Effortless Business Funnel/src/lib/submitLead.ts` — `submitLead()` and `submitDiagnosticResponses()` both just `console.log` and resolve; nothing is persisted.
- `Effortless Business Funnel/src/config/modulesHubConfig.ts` — hardcodes the Hub's Vercel URL; the funnel's report screen links out to the Hub with no auth handoff.
- `Modules Hub/src/components/HubHome.tsx` — per-module pricing badge is built (`Rp499rb` struck through → `Rp199rb`), but there's no checkout button behind it yet, and no bundle-price UI (`Rp999rb`) at all.
- Two Supabase projects already exist on the account: **Leaderlens** (active) and **PerfOS** (inactive/paused). Neither is currently wired to this funnel — **open decision**: create a fresh project dedicated to Effortless Leader, or repurpose one of these. Flagging rather than assuming.

### 2.2 Customer identity — no password accounts

Reuse the Name/WhatsApp/Email already captured in `LeadCaptureForm.tsx`. After a confirmed purchase, email a unique magic-link token that identifies that browser as that customer going forward (stored in `localStorage`, similar pattern to the existing `memberProfile.ts`). No login/password system — matches the low-friction SME-funnel pattern already established.

### 2.3 Database schema (new Supabase table — project TBD per 2.1)

```
purchases
├── id                uuid, pk
├── customer_email     text
├── customer_whatsapp  text
├── product            text   -- 'module-2' .. 'module-9', 'bundle-all', 'coaching-package'
├── status              text   -- 'pending' | 'paid' | 'failed' | 'expired'
├── xendit_invoice_id   text   -- Xendit's reference, for reconciliation/support
├── amount              int    -- IDR, for records
├── created_at          timestamptz
└── paid_at             timestamptz, nullable
```

A bundle purchase writes one `bundle-all` row rather than 8 separate module rows — simpler to query and matches how it's sold.

### 2.4 Checkout flow

1. User clicks a module's or the bundle's buy button (new UI — doesn't exist yet) on `HubHome.tsx` or a future pricing surface.
2. App calls a backend endpoint (new — needs a small server function, e.g. a Vercel serverless function or Supabase Edge Function) that creates a Xendit Invoice via their API, tagged with `product` and the customer's email/WhatsApp, and returns the hosted checkout URL.
3. User is redirected to Xendit's hosted invoice page, pays via whichever channel (QRIS/VA/e-wallet/card).
4. Xendit sends a webhook (`invoice.paid`) to a new endpoint — this needs to live somewhere with a stable public URL, most naturally a Supabase Edge Function or a small Vercel API route.
5. Webhook handler verifies the callback token, writes/updates the matching `purchases` row to `status: 'paid'`, and triggers the magic-link access email (needs an email-sending piece — Resend, Supabase's built-in email, or similar; not yet chosen).
6. Real `hasFullModuleAccess(moduleNumber, customerId)` replaces the current stub: module 1 always free; otherwise true if there's a `paid` row for that exact module OR a `paid` `bundle-all`/`coaching-package` row for that customer. This gates Bab 2 onward only — Bab 1 (and the intro) render regardless, per 2.0.

### 2.5 Coaching package — manual path, not automated

Coaching sales close over Bro Rono's diagnostic call, not through self-serve checkout — no webhook trigger. MVP: Bro Rono (or Cowork on his behalf) adds a `coaching-package` row directly via Supabase's table editor after a call closes. No custom admin UI needed until volume justifies it.

### 2.6 What's genuinely new work vs. re-pointing existing stubs

- **New**: Supabase table + RLS policies, checkout-creation endpoint, webhook endpoint, magic-link email sending, bundle pricing UI, per-module "Buy" buttons, the two-reason locked-chapter UI in `ModuleHome.tsx`.
- **Re-pointed, not rebuilt**: `submitLead()`/`submitDiagnosticResponses()` (swap `console.log` for a real insert), `hasModuleAccess()` → `hasFullModuleAccess()` (swap stub for a real customer-aware query), `modulesHubConfig.ts`-style single-source-of-truth pattern (reuse for a new `paymentConfig.ts`).
- **Modified, not just re-pointed**: `App.tsx` (remove the module-entry block), `ProgressContext.tsx`'s `isChapterUnlocked()` (add the purchase gate alongside the existing sequential one), `HubHome.tsx`'s lock badge copy — see 2.0 for why each changes.

### 2.7 Open decisions before this gets built

- Which Supabase project hosts `purchases` — new project, or reuse Leaderlens/PerfOS?
- Where do the checkout-creation and webhook endpoints live — Vercel serverless functions (co-located with the funnel app, which has no deployment yet) or Supabase Edge Functions?
- Email sending service for the magic-link/access emails.
- Does ending the free beta round now, or keeping it running alongside a "buy now" option for early movers, matter to the launch sequencing?
- Bundle pricing UI — where does the Rp999rb 8-module offer actually get surfaced (Hub home banner? A dedicated pricing screen?) — flagged as unbuilt in the launch checklist, not decided yet.
- Confirm the 2.0 assumption: is the intro ("Pendahuluan") free alongside Bab 1, and is the outro ("Penutup") paywalled along with Bab 2-8?
- Buy CTA placement inside `ModuleHome.tsx` — does the paywalled-Bab-2 card link straight to checkout for that module, or back out to a pricing view?

---

*Sources for fee figures: [Xendit pricing](https://www.xendit.co/en/pricing/), [Xendit fee help article](https://help.xendit.co/hc/en-us/articles/360039086452-What-are-the-pricing-for-Xendit-products), [Xendit PT/CV document requirements](https://help.xendit.co/hc/en-us/articles/10891368765593-ID-What-are-the-legal-documents-required-to-register-to-Xendit-for-Indonesian-Merchants), [Midtrans QRIS fee docs](https://docs.midtrans.com/docs/what-is-the-applicable-transaction-fee-for-qris), [Mayar.id fees](https://docs.mayar.id/mor/fees).*
