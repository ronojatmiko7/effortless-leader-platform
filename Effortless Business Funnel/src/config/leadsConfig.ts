// Single source of truth for the leads-capture backend — same pattern as
// modulesHubConfig.ts / schedulingConfig.ts. Backend project: PerfOS
// (Supabase, ap-northeast-1) — same project the Modules Hub's
// entitlement backend uses (see that app's src/config/paymentConfig.ts).
//
// Lead capture goes through the submit-lead Edge Function rather than a
// direct table insert, so a completed diagnostic can trigger an email
// notification server-side (the client can't safely hold RESEND_API_KEY).
export const SUBMIT_LEAD_URL = 'https://edodmmedehuuemnnmdri.supabase.co/functions/v1/submit-lead'
