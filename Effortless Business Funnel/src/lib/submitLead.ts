import type { DiagnosticResult } from '../types/diagnostic'
import type { Lead } from '../types/lead'
import { SUBMIT_LEAD_URL } from '../config/leadsConfig'

// Re-pointed (again) from a direct PostgREST insert to the submit-lead
// Edge Function, so a completed diagnostic can trigger an email
// notification server-side (Bro Rono asked for this — see
// payment-gateway-plan.md). Both functions remain fire-and-forget from
// App.tsx (no `await`, no `.catch`), so failures are caught and logged
// here rather than thrown.
async function callSubmitLead(payload: Record<string, unknown>): Promise<void> {
  const res = await fetch(SUBMIT_LEAD_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(`submit-lead failed (${res.status}): ${detail}`)
  }
}

function leadPayload(lead: Lead) {
  return {
    name: lead.name,
    whatsapp: lead.whatsapp,
    email: lead.email,
    businessName: lead.businessName,
    employeeCount: lead.employeeCount,
    annualRevenue: lead.annualRevenue,
  }
}

// Called right after the lead form (name/whatsapp/email/business info) is
// submitted, before the diagnostic is scored. submit-lead intentionally
// does NOT notify on this call — see submitDiagnosticResponses below,
// which fires moments later with the full result and is the one that
// triggers the email, so Bro Rono gets one notification per person, not
// two.
export async function submitLead(lead: Lead): Promise<void> {
  try {
    await callSubmitLead(leadPayload(lead))
  } catch (err) {
    console.error('[submitLead] failed to persist lead:', err)
  }
}

export async function submitDiagnosticResponses(lead: Lead, result: DiagnosticResult): Promise<void> {
  try {
    await callSubmitLead({ ...leadPayload(lead), diagnosticResult: result })
  } catch (err) {
    console.error('[submitDiagnosticResponses] failed to persist diagnostic responses:', err)
  }
}
