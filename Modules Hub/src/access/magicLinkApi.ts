import { REQUEST_MAGIC_LINK_URL, VERIFY_MAGIC_LINK_URL } from '../config/registerConfig'
import type { MemberProfile } from './memberProfile'

// Step 1 of the magic-link register gate: sends the email, does not admit
// anyone yet. Called from RegisterScreen.tsx's submit. The email itself
// is fire-once (not fire-and-forget like registerMember used to be —
// this one's success/failure genuinely matters, since it's the only way
// in), so callers should surface a failure and let the person retry.
export async function requestMagicLink(profile: MemberProfile): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(REQUEST_MAGIC_LINK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) return { ok: false, error: data?.error ?? 'request_failed' }
    return { ok: true }
  } catch {
    return { ok: false, error: 'network_error' }
  }
}

// Step 2: called by App.tsx's RegisterGate when the URL carries
// ?magic=TOKEN (i.e. the visitor clicked the emailed link). Returns the
// verified profile on success — the caller (RegisterGate) is what
// actually saves it locally and admits the visitor into the Hub.
export async function verifyMagicLink(
  token: string,
): Promise<{ ok: boolean; profile?: MemberProfile; error?: string }> {
  try {
    const res = await fetch(VERIFY_MAGIC_LINK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.ok) return { ok: false, error: data?.error ?? 'verify_failed' }
    return { ok: true, profile: { name: data.name ?? '', email: data.email, whatsapp: data.whatsapp ?? '' } }
  } catch {
    return { ok: false, error: 'network_error' }
  }
}
