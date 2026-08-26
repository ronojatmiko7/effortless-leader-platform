// Free-launch window, hardcoded to end 31 August 2026 (WIB / Asia-Jakarta)
// -- confirmed by Bro Rono Aug 26 2026. Independent copy of the same
// constants in Modules Hub/src/config/paymentConfig.ts (same duplication
// pattern as schedulingConfig.ts -- funnel and Hub are separate deployed
// apps). Keep both in sync by hand if the date ever changes.
//
// FREE_LAUNCH_MODE is computed from the current time, not a hand-flipped
// boolean, so it turns itself off automatically the moment the cutoff
// passes -- no redeploy needed. Re-evaluated fresh on every page load.
export const FREE_LAUNCH_CUTOFF = new Date('2026-09-01T00:00:00+07:00')
export const FREE_LAUNCH_END_DISPLAY = 'Senin, 31 Agustus 2026'
export const FREE_LAUNCH_MODE = Date.now() < FREE_LAUNCH_CUTOFF.getTime()
