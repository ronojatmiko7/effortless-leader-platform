import { Calendar } from 'lucide-react'
import { CALENDLY_DIAGNOSTIC_CALL_URL } from '../config/schedulingConfig'
import { loadMemberProfile } from '../access/memberProfile'

// Sticky footer bar offering a real "book a call" path alongside self-serve
// learning. Bro Rono doesn't have 24/7 support staff, so this always opens
// Calendly (a scheduled call) instead of a live chat widget -- same
// reasoning as the funnel's ReportScreen.tsx bookDiagnosticCall(). Prefills
// name/email from the locally-saved member profile when available (see
// access/memberProfile.ts), so it isn't a cold, blank booking form for
// anyone who's already filled in the member card on HubHome.
//
// Deliberately mounted on HubHome and ModuleHome only (not mid-chapter in
// DeckViewer) so it doesn't interrupt the reading flow -- see
// [[prediagnosis-funnel-workflow]] project memory for the "consultant CTA"
// design discussion this came out of.
function openConsultantBooking() {
  const profile = loadMemberProfile()
  const params = new URLSearchParams()
  if (profile.name) params.set('name', profile.name)
  if (profile.email) params.set('email', profile.email)
  const query = params.toString()
  const url = query ? `${CALENDLY_DIAGNOSTIC_CALL_URL}?${query}` : CALENDLY_DIAGNOSTIC_CALL_URL
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function ConsultantStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/80 sm:px-6">
      <div className="mx-auto flex w-full max-w-4xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-slate-900">Butuh arahan langsung?</p>
          <p className="truncate text-xs text-slate-500">Booking panggilan gratis dengan konsultan.</p>
        </div>
        <button
          type="button"
          onClick={openConsultantBooking}
          className="flex shrink-0 items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600"
        >
          <Calendar className="h-4 w-4" />
          Booking Call
        </button>
      </div>
    </div>
  )
}
