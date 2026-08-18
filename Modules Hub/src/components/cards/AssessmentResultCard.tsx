import { CheckCircle2, XCircle, Sparkles } from 'lucide-react'
import type { AssessmentResultCardData } from '../../types/card'

interface AssessmentResultDetail {
  question: string
  options: string[]
  correctAnswer: number
  selected: number | undefined
}

interface AssessmentResultCardProps {
  card: AssessmentResultCardData
  score: { correct: number; total: number }
  details: AssessmentResultDetail[]
}

/**
 * Trailing card of a pretest/posttest block. DeckViewer hands this the
 * computed score and a per-question breakdown (question, learner's
 * selection, correct answer) — this is the FIRST point in the deck where
 * any right/wrong information is shown, by design.
 */
export default function AssessmentResultCard({ card, score, details }: AssessmentResultCardProps) {
  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
        <Sparkles className="h-8 w-8 text-indigo-600" />
      </div>
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-indigo-600">
        Hasil
      </p>
      <h2 className="mb-2 text-center text-2xl font-bold text-slate-900 sm:text-3xl">{card.title}</h2>
      <p className="mb-6 text-center text-4xl font-bold text-indigo-600">
        {score.correct}/{score.total}
      </p>
      <p className="mb-6 text-base leading-relaxed text-slate-600">{card.resultIntro}</p>
      <div className="space-y-3">
        {details.map((detail, index) => {
          const isCorrect = detail.selected === detail.correctAnswer
          const Icon = isCorrect ? CheckCircle2 : XCircle
          return (
            <div
              key={index}
              className={`rounded-xl border p-4 text-sm leading-relaxed ${
                isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'
              }`}
            >
              <div className="mb-1 flex items-start gap-2">
                <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${isCorrect ? 'text-emerald-600' : 'text-amber-600'}`} />
                <p className="font-semibold text-slate-800">
                  {index + 1}. {detail.question}
                </p>
              </div>
              <p className={isCorrect ? 'text-emerald-800' : 'text-amber-800'}>
                Jawaban Anda: {detail.selected !== undefined ? detail.options[detail.selected] : '(belum dijawab)'}
              </p>
              {!isCorrect && (
                <p className="mt-1 text-emerald-800">Jawaban tepat: {detail.options[detail.correctAnswer]}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
