// Single source of truth for the payment/entitlement backend's Edge
// Function URLs — same single-source-of-truth pattern as the funnel app's
// modulesHubConfig.ts. Backend project: PerfOS (Supabase, ap-northeast-1),
// chosen Aug 24 2026 at Bro Rono's direction (repurposing an existing
// inactive project rather than provisioning a new one). Swap
// SUPABASE_FUNCTIONS_BASE if the backend ever moves to a different project.
const SUPABASE_FUNCTIONS_BASE = 'https://edodmmedehuuemnnmdri.supabase.co/functions/v1'

// TEMPORARY: everything is free during the launch window, hardcoded to end
// 31 August 2026 (WIB / Asia-Jakarta) -- confirmed by Bro Rono Aug 26 2026.
// FREE_LAUNCH_MODE is computed from the current time, not a hand-flipped
// boolean, so it turns itself off automatically the moment the cutoff
// passes -- no redeploy needed. It's re-evaluated fresh every time this
// module loads (page load / navigation), so a browser tab already open
// when the cutoff passes will pick it up on its next reload, not live.
//
// While true, AccessContext.tsx short-circuits every module to unlocked
// without calling check-access, and BuyButton.tsx shows a "free during
// launch" badge instead of a real checkout CTA. Once it flips to false,
// BuyButton switches to the Scalev checkout links in SCALEV_CHECKOUT_URLS
// below -- if those aren't filled in yet by the cutoff, modules will show
// as locked with no way to buy (a "Segera Hadir" badge), not an error, but
// worth having Scalev ready before this date. See scalev-payment-
// integration.md (project memory) for the Scalev setup checklist.
export const FREE_LAUNCH_CUTOFF = new Date('2026-09-01T00:00:00+07:00')
export const FREE_LAUNCH_END_DISPLAY = 'Senin, 31 Agustus 2026'
export const FREE_LAUNCH_MODE = Date.now() < FREE_LAUNCH_CUTOFF.getTime()

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

// Display-only pricing for Buy buttons. The real source of truth for what's
// actually charged is whatever's configured in the Scalev dashboard for
// each checkout page — keep these two in sync by hand until there's a
// single shared config.
// Rp199rb/module, Rp999rb bundle, Module 1 free — confirmed by Bro Rono,
// see funnel-launch-checklist.md section 5.
export const MODULE_PRICE_ORIGINAL_IDR = 499_000
export const MODULE_PRICE_DISCOUNTED_IDR = 199_000
export const BUNDLE_PRICE_ORIGINAL_IDR = 3_992_000
export const BUNDLE_PRICE_DISCOUNTED_IDR = 999_000

export function formatIdr(amountIdr: number): string {
  return `Rp${Math.round(amountIdr / 1000)}rb`
}
