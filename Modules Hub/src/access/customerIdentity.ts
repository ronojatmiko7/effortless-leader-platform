// Stand-in customer identity until the real magic-link email flow exists
// (see PAYMENT_GATEWAY_INTEGRATION_PLAN.md section 2.2 — "no password
// accounts," a magic link is meant to identify the browser as a customer
// going forward). No email-sending service is wired up yet (open decision,
// section 2.7), so for now the "magic link" is simply: the customer types
// the same email they paid with into the unlock box (see BuyButton.tsx /
// HubHome.tsx's member area), we save it here, and every access check
// (AccessContext.tsx) uses that saved email. This is a deliberate
// shortcut for scaffolding, not the final design — swap this file's
// storage for a real verified-token flow once an email service is chosen
// and xendit-webhook actually sends something.
//
// Same localStorage-per-device pattern as memberProfile.ts: it won't sync
// across devices, and isn't meant to be secure — knowing someone's email
// isn't a secret, it just happens to be how purchases are keyed right now.
const STORAGE_KEY = 'prediagnosis-customer-email'

export function loadCustomerEmail(): string | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value && value.trim().length > 0 ? value : null
  } catch {
    return null
  }
}

export function saveCustomerEmail(email: string): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, email.trim())
  } catch {
    // localStorage unavailable (private mode, etc.) — access check just
    // stays unauthenticated for this session, which is a safe failure.
  }
}

export function clearCustomerEmail(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // no-op
  }
}
