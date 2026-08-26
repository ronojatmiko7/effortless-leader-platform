// hasFullModuleAccess replaces the old all-or-nothing hasModuleAccess stub
// (see PAYMENT_GATEWAY_INTEGRATION_PLAN.md sections 2.0/2.4). Module 1 is
// always free. Modules 2-9 need a `paid` purchases row for that exact
// module OR `bundle-all` OR `coaching-package`. `purchasedProducts` is
// fetched once per session by AccessContext.tsx via the check-access Edge
// Function — this file never talks to Supabase directly, on purpose (see
// check-access/index.ts's own comment for why the browser never queries
// the purchases table itself).
//
// A `source: 'manual'` row (see grant-access/index.ts) looks identical to a
// real Xendit purchase from here — that's intentional, it's how comped
// access "just works" without any special-casing.
export function hasFullModuleAccess(moduleNumber: number, purchasedProducts: string[]): boolean {
  if (moduleNumber === 1) return true
  if (purchasedProducts.includes(`module-${moduleNumber}`)) return true
  if (purchasedProducts.includes('bundle-all')) return true
  if (purchasedProducts.includes('coaching-package')) return true
  return false
}

// A chapter previews free regardless of purchase: the intro deck and Bab 1
// of every module (confirmed by Bro Rono, Aug 24 2026 — see plan section
// 2.0). Everything else in modules 2-9 needs hasFullModuleAccess(). Module
// 1's chapters are all free anyway since hasFullModuleAccess(1, ...) is
// always true, so this function only actually matters for modules 2-9.
export function isChapterFreePreview(chapter: { kind?: 'intro' | 'chapter' | 'outro'; number: number }): boolean {
  if (chapter.kind === 'intro') return true
  if ((chapter.kind ?? 'chapter') === 'chapter' && chapter.number === 1) return true
  return false
}
