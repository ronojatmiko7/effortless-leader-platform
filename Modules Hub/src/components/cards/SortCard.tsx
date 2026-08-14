import { useState } from 'react'
import { Reorder } from 'framer-motion'
import { GripVertical, Check } from 'lucide-react'
import FeedbackBanner from './FeedbackBanner'
import type { SortListCardData } from '../../types/card'

interface SortCardProps {
  card: SortListCardData
  isAnswered: boolean
  onCorrect: () => void
}

export default function SortCard({ card, isAnswered, onCorrect }: SortCardProps) {
  const [order, setOrder] = useState<string[]>(card.items)
  const [lastCheckWasCorrect, setLastCheckWasCorrect] = useState<boolean | null>(null)

  const handleCheck = () => {
    const isCorrect = order.every((item, index) => item === card.correctAnswer[index])
    setLastCheckWasCorrect(isCorrect)
    if (isCorrect) onCorrect()
  }

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <h2 className="mb-1 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {card.question}
      </h2>
      <p className="mb-5 text-sm text-slate-500">Seret untuk mengurutkan.</p>

      <Reorder.Group
        as="ul"
        axis="y"
        values={order}
        onReorder={setOrder}
        className="space-y-3"
      >
        {order.map((item, index) => {
          const isRight = isAnswered && item === card.correctAnswer[index]
          return (
            <Reorder.Item
              key={item}
              value={item}
              drag={!isAnswered}
              className={`flex items-center gap-3 rounded-xl border-2 bg-white px-4 py-3.5 shadow-sm ${
                isAnswered
                  ? isRight
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-amber-400 bg-amber-50'
                  : 'border-slate-200'
              }`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                {index + 1}
              </span>
              <span className="flex-1 text-sm font-medium text-slate-800 sm:text-base">
                {item}
              </span>
              {isAnswered ? (
                isRight && <Check className="h-5 w-5 shrink-0 text-emerald-600" />
              ) : (
                <GripVertical className="h-5 w-5 shrink-0 text-slate-300" />
              )}
            </Reorder.Item>
          )
        })}
      </Reorder.Group>

      {!isAnswered && (
        <button
          type="button"
          onClick={handleCheck}
          className="mt-6 w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          Cek Urutan
        </button>
      )}

      {isAnswered && <FeedbackBanner variant="success" text={card.successFeedback} />}
      {!isAnswered && lastCheckWasCorrect === false && (
        <FeedbackBanner variant="error" text={card.errorFeedback} />
      )}
    </div>
  )
}
