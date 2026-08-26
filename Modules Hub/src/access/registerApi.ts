import { REGISTER_MEMBER_URL } from '../config/registerConfig'
import type { MemberProfile } from './memberProfile'

// Fire-and-mostly-forget: records the registration server-side (into
// hub_members — see project memory) so Bro Rono has a real "who has
// actually entered the Hub" list, distinct from the funnel's raw leads
// dump. Never blocks entry into the Hub on this succeeding — a network
// hiccup here shouldn't lock someone out of content they're entitled to
// see. The local save (memberProfile.ts / customerIdentity.ts, done by
// the caller before this) is what actually gates the UI.
export async function registerMember(profile: MemberProfile): Promise<void> {
  try {
    await fetch(REGISTER_MEMBER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    })
  } catch {
    // Best-effort — see comment above.
  }
}
