// Single source of truth for the payment/entitlement backend's Edge
// Function URLs — same single-source-of-truth pattern as the funnel app's
// modulesHubConfig.ts. Backend project: PerfOS (Supabase, ap-northeast-1),
// chosen Aug 24 2026 at Bro Rono's direction (repurposing an existing
// inactive project rather than provisioning a new one). Swap
// SUPABASE_FUNCTIONS_BASE if the backend ever moves to a different project.
const SUPABASE_FUNCTIONS_BASE = 'https://edodmmedehuuemnnmdri.supabase.co/functions/v1'

// TEMPORARY: everything is free while the Xendit business account is
// still in verification (submitted Aug 26 2026, ~14-day review). While
// true, AccessContext.tsx short-circuits every module to unlocked without
// calling check-access, and BuyButton.tsx shows a "free during launch"
// badge instead of a real checkout CTA. Flip to false once Xendit is
// approved AND the 3 Supabase secrets (XENDIT_SECRET_KEY,
// XENDIT_WEBHOOK_TOKEN, ADMIN_GRANT_SECRET) are set — the real
// create-checkout/xendit-webhook/check-access flow is already built and
// takes over automatically.
export const FREE_LAUNCH_MODE = true

export const CREATE_CHECKOUT_URL = `${SUPABASE_FUNCTIONS_BASE}/create-checkout`
export const CHECK_ACCESS_URL = `${SUPABASE_FUNCTIONS_BASE}/check-access`

// Scalev checkout pages, one per sellable product. Each is a static URL
// built in the Scalev dashboard (Sales Page -> Checkout Page, per
// dev.scalev.com/docs/sell-one-time-software-with-scalev) -- NOT created
// dynamically by this app, unlike the old Xendit create-checkout flow.
// Scalev's own checkout page collects the customer's email; our side only
// needs to know where to send them. The payment webhook
// (Edge Function scalev-webhook) is what actually grants access afterward.
//
// Fill each in once its Scalev checkout page exists. BuyButton shows a
// "Segera hadir" disabled state for any product still mapped to ''.
export const SCALEV_CHECKOUT_URLS: Record<string, string> = {
  'module-2': '',
  'module-3': '',
  'module-4': '',
  'module-5': '',
  'module-6': '',
  'module-7': '',
  'module-8': '',
  'module-9': '',
  'bundle-all': '',
  'coaching-package': '',
}
export const SUBMIT_TESTIMONIAL_URL = `${SUPABASE_FUNCTIONS_BASE}/submit-testimonial`
export const LIST_PUBLIC_TESTIMONIALS_URL = `${SUPABASE_FUNCTIONS_BASE}/list-public-testimonials`

// Display-only pricing for Buy buttons. The backend (create-checkout's own
// PRODUCTS map) is the real source of truth for what's actually charged —
// keep these two in sync by hand until there's a single shared config.
// Rp199rb/module, Rp999rb bundle, Module 1 free — confirmed by Bro Rono,
// see funnel-launch-checklist.md section 5.
export const MODULE_PRICE_ORIGINAL_IDR = 499_000
export const MODULE_PRICE_DISCOUNTED_IDR = 199_000
export const BUNDLE_PRICE_ORIGINAL_IDR = 3_992_000
export const BUNDLE_PRICE_DISCOUNTED_IDR = 999_000

export function formatIdr(amountIdr: number): string {
  return `Rp${Math.round(amountIdr / 1000)}rb`
}
