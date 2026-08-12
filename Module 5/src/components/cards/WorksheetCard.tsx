import { FileDown } from 'lucide-react'
import type { WorksheetCardData } from '../../types/card'

interface WorksheetCardProps {
  card: WorksheetCardData
}

export default function WorksheetCard({ card }: WorksheetCardProps) {
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
      <a
        href={card.downloadUrl}
        download
        className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
      >
        <FileDown className="h-5 w-5" />
        {card.buttonText}
      </a>
    </div>
  )
}
