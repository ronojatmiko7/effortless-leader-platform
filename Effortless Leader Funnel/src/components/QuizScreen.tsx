import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { diagnosticQuestions } from '../data/diagnosticQuestions'
import LeadCaptureForm from './LeadCaptureForm'
import QuestionCard from './QuestionCard'
import type { Lead } from '../types/lead'

interface QuizScreenProps {
  onLeadCaptured: (lead: Lead) => void
  onComplete: (answers: Record<number, number>) => void
}

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
}

export default function QuizScreen({ onLeadCaptured, onComplete }: QuizScreenProps) {
  const [phase, setPhase] = useState<'lead' | 'questions'>('lead')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const totalQuestions = diagnosticQuestions.length
  const currentQuestion = diagnosticQuestions[questionIndex]
  const isLastQuestion = questionIndex === totalQuestions - 1
  const hasAnswered = answers[currentQuestion?.id] !== undefined

  const handleLeadSubmit = (lead: Lead) => {
    onLeadCaptured(lead)
    setDirection(1)
    setPhase('questions')
  }

  const handleSelect = (score: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: score }))
  }

  const goNext = () => {
    if (!hasAnswered) return
    if (isLastQuestion) {
      onComplete(answers)
      return
    }
    setDirection(1)
    setQuestionIndex((i) => i + 1)
  }

  const goBack = () => {
    if (questionIndex === 0) {
      setDirection(-1)
      setPhase('lead')
      return
    }
    setDirection(-1)
    setQuestionIndex((i) => i - 1)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="mx-auto w-full max-w-lg px-5 pt-6">
        {phase === 'questions' && (
          <>
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>
                Pertanyaan {questionIndex + 1} dari {totalQuestions}
              </span>
              <span className="flex items-center gap-1 font-medium text-brand-600">
                <Sparkles className="h-4 w-4" />
                {Object.keys(answers).length}/{totalQuestions} terjawab
              </span>
            </div>
            <div className="mt-2 flex gap-1.5">
              {diagnosticQuestions.map((q, i) => (
                <div
                  key={q.id}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= questionIndex ? 'bg-brand-600' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </header>

      <main className="relative mx-auto flex w-full max-w-lg flex-1 items-stretch overflow-hidden px-5 py-4">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={phase === 'lead' ? 'lead' : currentQuestion.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            {phase === 'lead' ? (
              <LeadCaptureForm onSubmit={handleLeadSubmit} />
            ) : (
              <QuestionCard
                question={currentQuestion}
                questionNumber={questionIndex + 1}
                totalQuestions={totalQuestions}
                selectedScore={answers[currentQuestion.id]}
                onSelect={handleSelect}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {phase === 'questions' && (
        <footer className="mx-auto w-full max-w-lg px-5 pb-8 pt-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goBack}
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
            >
              <ArrowLeft className="h-5 w-5" />
              Kembali
            </button>
            <AnimatePresence mode="wait">
              {hasAnswered && (
                <motion.button
                  key={isLastQuestion ? 'finish' : 'next'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  type="button"
                  onClick={goNext}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
                >
                  {isLastQuestion ? 'Lihat Hasil Diagnosis' : 'Lanjut'}
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </footer>
      )}
    </div>
  )
}
