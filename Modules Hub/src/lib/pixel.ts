// Meta Pixel event helpers. Reuses the funnel's dedicated pixel
// (1377499773961301, created Aug 26 2026 for the "Asesmen 13 Titik
// Kebocoran Bisnis" campaign — see meta-ads-asesmen-campaign.md) rather
// than a new one, so both the quiz-first funnel and this direct-to-app
// campaign (see meta-ads-direct-app-campaign.md) share one Events
// Manager view / audience pool. Mirrors the funnel app's own
// src/lib/pixel.ts exactly — keep them in sync if this pattern changes.

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

/** Fire a Meta custom event (app-specific, not a Meta standard name). */
export function trackCustomEvent(event: string, params?: Record<string, unknown>) {
  callFbq('trackCustom', event, params)
}
