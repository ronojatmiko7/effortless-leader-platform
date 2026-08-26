import { Sparkles } from 'lucide-react'
import { FREE_LAUNCH_END_DISPLAY, FREE_LAUNCH_MODE } from '../config/paymentConfig'

// Shown on HubHome and ModuleHome while the free-launch window is active
// (see paymentConfig.ts's FREE_LAUNCH_CUTOFF) — renders nothing at all
// once it passes, so there's nothing to remember to remove later.
export default function FreeLaunchBanner() {
  if (!FREE_LAUNCH_MODE) return null

  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-xs font-semibold text-amber-800 sm:text-sm">
      <Sparkles className="h-4 w-4 shrink-0" />
      <span>
        Semua modul GRATIS sampai {FREE_LAUNCH_END_DISPLAY} — mulai 1 September, Modul 2-9 berbayar.
      </span>
    </div>
  )
}
