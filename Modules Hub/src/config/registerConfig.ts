// Single source of truth for the register-gate backend URL — same pattern
// as paymentConfig.ts's other Edge Function URLs, split into its own file
// since registration isn't a payment concern, just identity capture.
const SUPABASE_FUNCTIONS_BASE = 'https://edodmmedehuuemnnmdri.supabase.co/functions/v1'

export const REGISTER_MEMBER_URL = `${SUPABASE_FUNCTIONS_BASE}/register-member`
