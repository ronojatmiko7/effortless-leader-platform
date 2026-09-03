// Everything is free -- a manual switch now, not a date-based one (the
// original hardcoded 31 Aug 2026 cutoff already passed and started
// silently locking the Hub with no working checkout behind it -- caught
// and fixed Sep 2026). Independent copy of the same constant in
// Modules Hub/src/config/paymentConfig.ts (same duplication pattern as
// schedulingConfig.ts -- funnel and Hub are separate deployed apps). Keep
// both in sync by hand. Flip to `false` once there's enough social proof
// (testimonials) to justify turning paywalls back on -- Bro Rono's call,
// no cutoff to maintain.
export const FREE_LAUNCH_MODE = true
