import { useState } from 'react'
import OptionButton, { type OptionState } from './OptionButton'
import FeedbackBanner from './FeedbackBanner'
import type { FillInBlankCardData } from '../../types/card'

interface FillInBlankCardProps {
  card: FillInBlankCardData
  isAnswered: boolean
  onCorrect: () => void
}

export default function FillInBlankCard({ card, isAnswered, onCorrect }: FillInBlankCardProps) {
  const [attempt, setAttempt] = useState<{ value: string; isCorrect: boolean } | null>(null)

  const handleClick = (option: string) => {
    if (isAnswered) return
    const isCorrect = option === card.correctAnswer
    setAttempt({ value: option, isCorrect })
    if (isCorrect) onCorrect()
  }

  const [before, after] = card.sentence.split('________')
  const filledWord = isAnswered ? card.correctAnswer : (attempt?.value ?? null)
  const filledIsCorrect = isAnswered ? true : (attempt?.isCorrect ?? false)

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <p className="mb-8 text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl">
        {before}
        <span
          className={`inline-block min-w-[4rem] border-b-2 px-1 text-center ${
            filledWord
              ? filledIsCorrect
                ? 'border-emerald-500 text-emerald-700'
                : 'border-amber-500 text-amber-700'
              : 'border-slate-300 text-slate-300'
          }`}
        >
          {filledWord ?? '••••'}
        </span>
        {after}
      </p>
      <div className="flex flex-wrap gap-3">
        {card.options.map((option) => {
          let state: OptionState = 'idle'
          if (isAnswered) {
            state = option === card.correctAnswer ? 'correct' : 'muted'
          } else if (attempt?.value === option) {
            state = attempt.isCorrect ? 'correct' : 'incorrect'
          }
          return (
            <OptionButton
              key={option}
              label={option}
              disabled={isAnswered}
              state={state}
              variant="pill"
              onClick={() => handleClick(option)}
            />
          )
        })}
      </div>
      {isAnswered && <FeedbackBanner variant="success" text={card.successFeedback} />}
      {!isAnswered && attempt && !attempt.isCorrect && (
        <FeedbackBanner variant="error" text={card.errorFeedback} />
      )}
    </div>
  )
}
