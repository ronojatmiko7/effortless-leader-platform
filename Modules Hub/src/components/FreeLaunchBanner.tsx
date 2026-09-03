import { Sparkles } from 'lucide-react'
import { FREE_LAUNCH_MODE } from '../config/paymentConfig'

// Shown on HubHome and ModuleHome while free access is on (see
// paymentConfig.ts's FREE_LAUNCH_MODE — a manual switch, not date-based)
// — renders nothing once it's flipped off, so there's nothing to remember
// to remove later.
export default function FreeLaunchBanner() {
  if (!FREE_LAUNCH_MODE) return null

  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-xs font-semibold text-amber-800 sm:text-sm">
      <Sparkles className="h-4 w-4 shrink-0" />
      <span>Semua modul GRATIS untuk semua peserta saat ini.</span>
    </div>
  )
}
