import { ShoppingBag } from 'lucide-react'
import { FREE_LAUNCH_MODE, SCALEV_CHECKOUT_URLS, formatIdr } from '../config/paymentConfig'

interface BuyButtonProps {
  product: string // 'module-2'..'module-9' | 'bundle-all' | 'coaching-package'
  label: string // e.g. "Modul 4" or "Bundle 8 Modul"
  amountIdr: number
  originalAmountIdr?: number
  className?: string
}

// Shared buy CTA — used both inline on a paywalled chapter (ModuleHome.tsx)
// and as the bundle promo on HubHome.tsx.
//
// Checkout now happens on Scalev's own hosted checkout page (see
// SCALEV_CHECKOUT_URLS in paymentConfig.ts and the scalev-webhook Edge
// Function) rather than through a create-checkout API call — Scalev's
// checkout page collects the customer's email itself, so this component
// doesn't need to. After payment, scalev-webhook grants the entitlement in
// the background; the customer just needs to come back to the Hub and
// (re-)save their email in the member profile to see it unlock (same
// AccessContext.refresh() flow as before).
export default function BuyButton({ product, label, amountIdr, originalAmountIdr, className }: BuyButtonProps) {
  // Free launch: nothing to buy right now (see paymentConfig.ts). Show a
  // badge instead of a real checkout CTA. Swap back automatically once
  // FREE_LAUNCH_MODE flips to false.
  if (FREE_LAUNCH_MODE) {
    return (
      <div
        className={`flex items-center justify-center gap-1.5 rounded-full bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-700 ${className ?? ''}`}
      >
        🎉 {label} — Gratis Selama Peluncuran
      </div>
    )
  }

  const checkoutUrl = SCALEV_CHECKOUT_URLS[product]

  // The Scalev checkout page for this product hasn't been built/wired in
  // yet (see paymentConfig.ts) — fail safe with a disabled state instead
  // of a dead link.
  if (!checkoutUrl) {
    return (
      <div
        className={`flex items-center justify-center gap-1.5 rounded-full bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-400 ${className ?? ''}`}
      >
        {label} — Segera Hadir
      </div>
    )
  }

  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`}>
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-brand-700"
      >
        <ShoppingBag className="h-3.5 w-3.5" />
        Beli {label}
        {' · '}
        {originalAmountIdr && <span className="line-through opacity-60">{formatIdr(originalAmountIdr)}</span>}{' '}
        {formatIdr(amountIdr)}
      </a>
    </div>
  )
}
