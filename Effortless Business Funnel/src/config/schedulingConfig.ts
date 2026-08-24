// Single source of truth for the diagnostic-call booking link, same pattern
// as Module 1's src/config/reviewConfig.ts (GOOGLE_REVIEW_URL). Swap this one
// value if the Calendly event type ever moves/changes slug — nothing else in
// the app should hardcode a Calendly URL.
//
// Event type: "Effortless Leader — Diagnostic Call" (60 min, Zoom, free),
// live at this slug in the connected Calendly account (Bro Rono renamed it
// himself from an earlier "Discovery Call" draft and added a real custom
// question). Copy is written to make clear this call is scoped to the
// visitor's specific flagged results, not a generic sales call — see
// ReportScreen.tsx's booking CTA.
export const CALENDLY_DIAGNOSTIC_CALL_URL =
  'https://calendly.com/performaconsulting/effortless-leader-diagnostic-call'
