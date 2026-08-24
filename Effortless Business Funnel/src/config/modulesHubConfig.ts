// Single source of truth for the Modules Hub URL, same pattern as
// schedulingConfig.ts's CALENDLY_DIAGNOSTIC_CALL_URL. Swap this one value if
// the Modules Hub ever moves to its own domain — nothing else in the app
// should hardcode this URL.
//
// Currently the same Vercel project that serves the funnel-independent
// Modules Hub app ("effortless-leader-platform.vercel.app", confirmed live
// and correctly configured as of Aug 19, 2026 — see project memory). Used by
// ReportScreen.tsx's "Belajar Memperbaiki Sendiri" CTA during the free beta
// review round (no auth/purchase gate yet — everything's unlocked).
export const MODULES_HUB_URL = 'https://effortless-leader-platform.vercel.app'
