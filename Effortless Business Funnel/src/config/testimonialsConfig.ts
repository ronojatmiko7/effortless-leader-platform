// Single source of truth for the public (anon-safe) testimonials read —
// same SUPABASE_FUNCTIONS_BASE project as the Modules Hub's paymentConfig.ts
// (PerfOS, ap-northeast-1). This is the ONLY testimonials endpoint the
// funnel calls — it always filters to approved=true server-side, so an
// unapproved submission can never leak onto this page. See
// list-public-testimonials's own top-of-file comment for the full contract.
const SUPABASE_FUNCTIONS_BASE = 'https://edodmmedehuuemnnmdri.supabase.co/functions/v1'

export const LIST_PUBLIC_TESTIMONIALS_URL = `${SUPABASE_FUNCTIONS_BASE}/list-public-testimonials`
