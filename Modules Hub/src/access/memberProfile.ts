// Local-only member profile — no real accounts/auth exist yet (see project
// memory: funnel-launch-checklist.md sections 4-5, and moduleAccess.ts for
// the matching entitlement stub). Saved to the browser via localStorage,
// the same pattern chapter progress already uses in ProgressContext.tsx:
// it's a per-device preference, not a real account. It won't sync across
// devices, and there's no password field on purpose — there's nothing yet
// for a password to protect. Swap this file's body for a real profile
// query (e.g. Supabase) once real login lands; keep the MemberProfile
// shape and every caller (HubHome.tsx) keeps working as-is.
const STORAGE_KEY = 'prediagnosis-member-profile'

export interface MemberProfile {
  name: string
  email: string
  whatsapp: string
}

const EMPTY_PROFILE: MemberProfile = { name: '', email: '', whatsapp: '' }

export function loadMemberProfile(): MemberProfile {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY_PROFILE
    return { ...EMPTY_PROFILE, ...(JSON.parse(raw) as Partial<MemberProfile>) }
  } catch {
    return EMPTY_PROFILE
  }
}

export function saveMemberProfile(profile: MemberProfile): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
}
