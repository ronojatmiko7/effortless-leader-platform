import type { DiagnosticQuestion } from '../types/diagnostic'

interface QuestionCardProps {
  question: DiagnosticQuestion
  questionNumber: number
  totalQuestions: number
  selectedScore: number | undefined
  onSelect: (score: number) => void
}

const SECTION_LABEL: Record<DiagnosticQuestion['section'], string> = {
  Output: 'Domain Output (Hasil)',
  Proses: 'Domain Proses (Sistem Kerja)',
  Input: 'Domain Input (Bahan Baku)',
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedScore,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
          {SECTION_LABEL[question.section]}
        </span>
        <span className="text-xs font-medium text-slate-400">
          P{questionNumber} dari {totalQuestions} · {question.area}
        </span>
      </div>

      <h2 className="mb-6 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {question.question}
      </h2>

      <div className="space-y-2.5">
        {question.anchors.map((anchor, index) => {
          const score = index + 1
          const isSelected = selectedScore === score
          return (
            <button
              key={score}
              type="button"
              onClick={() => onSelect(score)}
              className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition ${
                isSelected
                  ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-200'
                  : 'border-slate-200 hover:border-brand-300 hover:bg-brand-50/40'
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {score}
              </span>
              <span className="text-sm leading-snug text-slate-700">{anchor.replace(/^\d\s*=\s*/, '')}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
