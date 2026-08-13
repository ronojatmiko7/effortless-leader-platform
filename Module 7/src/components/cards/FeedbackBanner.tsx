import { CheckCircle2, XCircle, Info, type LucideIcon } from 'lucide-react'

export type FeedbackVariant = 'success' | 'error' | 'neutral'

interface FeedbackBannerProps {
  variant: FeedbackVariant
  text: string
}

const styles: Record<FeedbackVariant, { icon: LucideIcon; container: string; iconColor: string }> = {
  success: {
    icon: CheckCircle2,
    container: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    iconColor: 'text-emerald-600',
  },
  error: {
    icon: XCircle,
    container: 'border-amber-200 bg-amber-50 text-amber-900',
    iconColor: 'text-amber-600',
  },
  neutral: {
    icon: Info,
    container: 'border-indigo-200 bg-indigo-50 text-indigo-900',
    iconColor: 'text-indigo-600',
  },
}

export default function FeedbackBanner({ variant, text }: FeedbackBannerProps) {
  const { icon: Icon, container, iconColor } = styles[variant]

  return (
    <div className={`mt-5 flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${container}`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
      <p>{text}</p>
    </div>
  )
}
