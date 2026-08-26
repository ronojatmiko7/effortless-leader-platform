import { useState } from 'react'
import { Loader2, ShoppingBag } from 'lucide-react'
import { createCheckout } from '../access/checkoutApi'
import { useAccess } from '../access/AccessContext'
import { FREE_LAUNCH_MODE, formatIdr } from '../config/paymentConfig'

interface BuyButtonProps {
  product: string // 'module-2'..'module-9' | 'bundle-all'
  label: string // e.g. "Modul 4" or "Bundle 8 Modul"
  amountIdr: number
  originalAmountIdr?: number
  className?: string
}

// Shared buy CTA — used both inline on a paywalled chapter (ModuleHome.tsx)
// and as the bundle promo on HubHome.tsx. Collects an email only if we
// don't already have one saved (see customerIdentity.ts), then hands off
// to Xendit's hosted checkout page. There's no order confirmation screen
// here yet — after payment, the customer has to come back and their email
// re-checks access (see AccessContext.tsx's refresh()).
export default function BuyButton({ product, label, amountIdr, originalAmountIdr, className }: BuyButtonProps) {
  const { customerEmail, setCustomerEmail } = useAccess()

  // Free launch: nothing to buy right now (see paymentConfig.ts). Show a
  // badge instead of a real checkout CTA — no email prompt, no Xendit
  // call. Swap back automatically once FREE_LAUNCH_MODE flips to false.
  if (FREE_LAUNCH_MODE) {
    return (
      <div
        className={`flex items-center justify-center gap-1.5 rounded-full bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-700 ${className ?? ''}`}
      >
        🎉 {label} — Gratis Selama Peluncuran
      </div>
    )
  }

  const [emailDraft, setEmailDraft] = useState(customerEmail ?? '')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleBuy = async () => {
    const email = emailDraft.trim()
    if (!email) {
      setErrorMessage('Masukkan email dulu ya, untuk kirim akses setelah bayar.')
      return
    }
    setIsSubmitting(true)
    setErrorMessage(null)
    try {
      await setCustomerEmail(email)
      const checkoutUrl = await createCheckout({ email, product })
      window.location.href = checkoutUrl
    } catch {
      setErrorMessage('Gagal membuat pembayaran. Coba lagi sebentar lagi.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`}>
      {!customerEmail && (
        <input
          type="email"
          value={emailDraft}
          onChange={(event) => setEmailDraft(event.target.value)}
          placeholder="Email untuk menerima akses"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
        />
      )}
      <button
        type="button"
        onClick={handleBuy}
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <ShoppingBag className="h-3.5 w-3.5" />}
        Beli {label}
        {' · '}
        {originalAmountIdr && <span className="line-through opacity-60">{formatIdr(originalAmountIdr)}</span>}{' '}
        {formatIdr(amountIdr)}
      </button>
      {errorMessage && <p className="text-xs font-semibold text-red-600">{errorMessage}</p>}
    </div>
  )
}
