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

const OPTION_LETTER = ['A', 'B']

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

      <h2 className="mb-8 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {question.question}
      </h2>

      {/* Only 2 options now — tap targets are large since auto-advance
          means there's no separate "confirm" step, so the tap itself
          needs to feel decisive and easy to hit correctly. */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedScore === option.score
          return (
            <button
              key={option.score}
              type="button"
              onClick={() => onSelect(option.score)}
              className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${
                isSelected
                  ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-200'
                  : 'border-slate-200 hover:border-brand-300 hover:bg-brand-50/40 active:bg-brand-50/60'
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {OPTION_LETTER[index]}
              </span>
              <span className="text-base font-medium leading-snug text-slate-800">{option.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
