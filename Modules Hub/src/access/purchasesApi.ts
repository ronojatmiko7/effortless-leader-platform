// Talks to the check-access Edge Function — the ONLY place the Modules Hub
// client asks "what has this email paid for?" The purchases table itself
// is never queried directly from the browser (see check-access/index.ts
// and moduleAccess.ts's comment for why).
import { CHECK_ACCESS_URL } from '../config/paymentConfig'

export async function fetchPurchasedProducts(email: string): Promise<string[]> {
  const res = await fetch(CHECK_ACCESS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  if (!res.ok) {
    throw new Error(`check-access failed: ${res.status}`)
  }
  const data = (await res.json()) as { products?: string[] }
  return data.products ?? []
}
