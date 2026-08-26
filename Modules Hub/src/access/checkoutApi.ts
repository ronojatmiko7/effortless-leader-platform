// Talks to the create-checkout Edge Function to start a real Xendit
// purchase. Returns the hosted Xendit invoice URL to redirect the browser
// to; the matching xendit-webhook function is what unlocks access after
// payment (see PAYMENT_GATEWAY_INTEGRATION_PLAN.md section 2.4).
import { CREATE_CHECKOUT_URL } from '../config/paymentConfig'

export async function createCheckout(params: {
  email: string
  whatsapp?: string
  product: string
}): Promise<string> {
  const res = await fetch(CREATE_CHECKOUT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })
  const data = (await res.json().catch(() => ({}))) as { checkout_url?: string; error?: string }
  if (!res.ok || !data.checkout_url) {
    throw new Error(data.error ?? `create-checkout failed: ${res.status}`)
  }
  return data.checkout_url
}
