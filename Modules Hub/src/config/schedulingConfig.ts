// Single source of truth for the "talk to a consultant" booking link inside
// the Modules Hub -- mirrors the funnel app's own
// `Effortless Business Funnel/src/config/schedulingConfig.ts` file. Kept as
// a separate copy (not a shared package) because the Hub and the funnel are
// two independently deployed apps; if the Calendly event type ever
// moves/changes slug, update BOTH copies.
//
// Event type: "Effortless Leader -- Diagnostic Call" (60 min, Zoom, free),
// live at this slug in the connected Calendly account. Bro Rono doesn't
// have 24/7 live support staff, so every "talk to a consultant" CTA in this
// app books a scheduled call instead of opening a live chat widget.
export const CALENDLY_DIAGNOSTIC_CALL_URL =
  'https://calendly.com/performaconsulting/effortless-leader-diagnostic-call'
