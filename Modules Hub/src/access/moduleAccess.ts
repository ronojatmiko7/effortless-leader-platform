// STUB — no real purchase/entitlement backend exists yet (see project
// memory: funnel-launch-checklist.md, sections 4-5). Module 1 is always
// free, matching the funnel's offer (every purchase/coaching package always
// includes Module 1). Modules 2-8 default to LOCKED. Flip
// UNLOCKED_FOR_TESTING or list specific module numbers in
// MANUALLY_UNLOCKED_MODULES to preview locked modules during dev/QA.
// Real implementation later: replace this file's body with a Supabase query
// against a purchases/entitlements table, keyed by the logged-in customer.
const UNLOCKED_FOR_TESTING = true
const MANUALLY_UNLOCKED_MODULES: number[] = []

export function hasModuleAccess(moduleNumber: number): boolean {
  if (moduleNumber === 1) return true
  if (UNLOCKED_FOR_TESTING) return true
  return MANUALLY_UNLOCKED_MODULES.includes(moduleNumber)
}
