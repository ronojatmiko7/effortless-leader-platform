import { useState } from 'react'
import OptionButton, { type OptionState } from './OptionButton'
import FeedbackBanner from './FeedbackBanner'
import type { MultipleChoiceCardData } from '../../types/card'

interface MultipleChoiceCardProps {
  card: MultipleChoiceCardData
  isAnswered: boolean
  onCorrect: () => void
}

export default function MultipleChoiceCard({ card, isAnswered, onCorrect }: MultipleChoiceCardProps) {
  const [attempt, setAttempt] = useState<{ index: number; isCorrect: boolean } | null>(null)

  const handleClick = (index: number) => {
    if (isAnswered) return
    const isCorrect = index === card.correctAnswer
    setAttempt({ index, isCorrect })
    if (isCorrect) onCorrect()
  }

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <h2 className="mb-6 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {card.question}
      </h2>
      <div className="space-y-3">
        {card.options.map((option, index) => {
          let state: OptionState = 'idle'
          if (isAnswered) {
            state = index === card.correctAnswer ? 'correct' : 'muted'
          } else if (attempt?.index === index) {
            state = attempt.isCorrect ? 'correct' : 'incorrect'
          }
          return (
            <OptionButton
              key={option}
              label={option}
              disabled={isAnswered}
              state={state}
              onClick={() => handleClick(index)}
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
