import type { InfoCardData } from '../../types/card'

interface InfoCardProps {
  card: InfoCardData
  onCtaClick?: (href: string) => void
}

export default function InfoCard({ card, onCtaClick }: InfoCardProps) {
  const Icon = card.icon

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
        <Icon className="h-8 w-8 text-indigo-600" />
      </div>
      {card.eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {card.eyebrow}
        </p>
      )}
      <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">{card.title}</h2>
      <div className="space-y-4 text-left text-base leading-relaxed text-slate-600 sm:text-lg">
        {card.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {card.cta && onCtaClick && (
        <button
          type="button"
          onClick={() => onCtaClick(card.cta!.href)}
          className="mx-auto mt-8 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          {card.cta.label}
        </button>
      )}
      {card.cta && !onCtaClick && (
        <a
          href={card.cta.href}
          className="mx-auto mt-8 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          {card.cta.label}
        </a>
      )}
    </div>
  )
}
