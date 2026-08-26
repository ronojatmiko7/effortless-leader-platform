// Meta Pixel event helpers. Dedicated pixel for this funnel (created Aug
// 26, 2026) — deliberately NOT the older "Effortless Leader" pixel, which
// has been living on Scalev checkout pages and carries a different
// audience (Leaderlens buyers, not people taking this free assessment).
// See meta-ads-asesmen-campaign.md project memory for why.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

function callFbq(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args)
  }
}

/** Fire a Meta standard event (e.g. 'Lead', 'ViewContent'). */
export function trackEvent(event: string, params?: Record<string, unknown>) {
  callFbq('track', event, params)
}

/** Fire a Meta custom event (funnel-specific, not a Meta standard name). */
export function trackCustomEvent(event: string, params?: Record<string, unknown>) {
  callFbq('trackCustom', event, params)
}
