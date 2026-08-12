import { AlertTriangle } from 'lucide-react'
import { useWorkbookStore } from '../../workbook/WorkbookContext'
import type { FindingReviewCardData } from '../../types/card'

interface FindingReviewCardProps {
  card: FindingReviewCardData
}

const SCORE_LABELS: Record<number, string> = {
  1: 'Parah / tidak ada',
  2: 'Masih lemah',
  3: 'Cukup baik',
  4: 'Sudah optimal',
}

export default function FindingReviewCard({ card }: FindingReviewCardProps) {
  const { getFieldValue, setFieldValue } = useWorkbookStore()

  const scoreValue = getFieldValue(card.storageKey, 'score')
  const score = scoreValue ? Number(scoreValue) : null
  const justification = getFieldValue(card.storageKey, 'justification')

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      {card.eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {card.eyebrow}
        </p>
      )}
      <h2 className="mb-4 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {card.title}
      </h2>

      <div className="mb-5 space-y-2.5 rounded-xl border border-slate-200 bg-slate-50 p-4">
        {card.recap.map((item) => {
          const value = getFieldValue(item.cardId, item.fieldId)
          return (
            <div key={`${item.cardId}-${item.fieldId}`} className="text-sm leading-relaxed">
              <span className="font-semibold text-slate-500">{item.label}: </span>
              <span className="text-slate-800">
                {value.trim() ? (
                  value
                ) : (
                  <span className="italic text-slate-400">(belum diisi di bab sebelumnya)</span>
                )}
              </span>
            </div>
          )
        })}
      </div>

      <p className="mb-2 text-sm font-medium text-slate-700">{card.scorePrompt}</p>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFieldValue(card.storageKey, 'score', String(value))}
            className={`rounded-xl border-2 px-2 py-3 text-center transition ${
              score === value
                ? value <= 2
                  ? 'border-amber-400 bg-amber-50 text-amber-900'
                  : 'border-indigo-400 bg-indigo-50 text-indigo-900'
                : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300'
            }`}
          >
            <span className="block text-lg font-bold">{value}</span>
            <span className="block text-[11px] leading-tight">{SCORE_LABELS[value]}</span>
          </button>
        ))}
      </div>
      {score !== null && score <= 2 && (
        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-amber-700">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
          Red flag — skor 2 ke bawah artinya ini layak jadi prioritas.
        </p>
      )}

      <label
        htmlFor={`${card.id}-justification`}
        className="mb-1.5 mt-5 block text-sm font-medium text-slate-600"
      >
        {card.justificationLabel}
      </label>
      <textarea
        id={`${card.id}-justification`}
        value={justification}
        onChange={(e) => setFieldValue(card.storageKey, 'justification', e.target.value)}
        placeholder={card.justificationPlaceholder}
        rows={2}
        className="w-full resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400"
      />
    </div>
  )
}
