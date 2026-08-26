// Single source of truth for the magic-link register-gate backend URLs —
// same pattern as paymentConfig.ts's other Edge Function URLs, split into
// its own file since this isn't a payment concern, just identity
// verification. Replaced the old instant-register (register-member) flow
// Aug 26 2026 — see project memory funnel-launch-checklist.md.
const SUPABASE_FUNCTIONS_BASE = 'https://edodmmedehuuemnnmdri.supabase.co/functions/v1'

export const REQUEST_MAGIC_LINK_URL = `${SUPABASE_FUNCTIONS_BASE}/request-magic-link`
export const VERIFY_MAGIC_LINK_URL = `${SUPABASE_FUNCTIONS_BASE}/verify-magic-link`
