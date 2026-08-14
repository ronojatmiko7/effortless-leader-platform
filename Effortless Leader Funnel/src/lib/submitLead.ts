import type { DiagnosticResult } from '../types/diagnostic'
import type { Lead } from '../types/lead'

// TODO(backend): wire to Supabase once the table exists. Kept as a single
// call site so swapping console.log for a real insert is a one-line change.
export function submitLead(lead: Lead): Promise<void> {
  console.log('[submitLead] stub — lead captured (not persisted):', lead)
  return Promise.resolve()
}

// TODO(backend): wire to Supabase once the table exists.
export function submitDiagnosticResponses(lead: Lead, result: DiagnosticResult): Promise<void> {
  console.log('[submitDiagnosticResponses] stub — responses captured (not persisted):', {
    lead,
    result,
  })
  return Promise.resolve()
}
