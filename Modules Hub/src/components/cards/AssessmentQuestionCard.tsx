import OptionButton, { type OptionState } from './OptionButton'
import type { AssessmentQuestionCardData } from '../../types/card'

interface AssessmentQuestionCardProps {
  card: AssessmentQuestionCardData
  selected: number | undefined
  onSelect: (index: number) => void
}

/**
 * Pretest/posttest question card — deliberately has NO immediate
 * correct/incorrect feedback (product decision Aug 18, v2). It only records
 * a selection; the answer is revealed later, together with every other
 * question in the same block, on AssessmentResultCard.
 */
export default function AssessmentQuestionCard({ card, selected, onSelect }: AssessmentQuestionCardProps) {
  const handleClick = (index: number) => {
    if (selected !== undefined) return
    onSelect(index)
  }

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
        Pertanyaan {card.questionNumber} dari {card.totalQuestions}
      </p>
      <h2 className="mb-6 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">{card.question}</h2>
      <div className="space-y-3">
        {card.options.map((option, index) => {
          const state: OptionState =
            selected === undefined ? 'idle' : index === selected ? 'selected' : 'muted'
          return (
            <OptionButton
              key={option}
              label={option}
              disabled={selected !== undefined}
              state={state}
              onClick={() => handleClick(index)}
            />
          )
        })}
      </div>
      <p className="mt-5 text-sm italic text-slate-400">
        Jawaban belum dinilai sekarang — hasilnya baru muncul setelah Anda menjawab semua pertanyaan di
        bagian ini. Jawab saja sesuai insting pertama Anda.
      </p>
    </div>
  )
}
