import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { diagnosticQuestions } from '../data/diagnosticQuestions'
import LeadCaptureForm from './LeadCaptureForm'
import QuestionCard from './QuestionCard'
import Logo from './Logo'
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

// Auto-advance delay after tapping an option: long enough to see the
// selection highlight (so it reads as "confirmed, moving on" instead of
// the card yanking away instantly), short enough to not feel laggy.
const AUTO_ADVANCE_DELAY_MS = 300

// Lead capture happens AFTER the 13 questions, not before — visitors start
// answering immediately (no upfront ask), then unlock their personalized
// result by handing over contact info once they've already invested the
// time. See EL_LANDING_PAGE_DRAFT.md / project memory for the reasoning.
//
// Aug 2026: questions now have 2 options and auto-advance on tap (no
// separate "Lanjut" button) — see project memory (meta-ads-asesmen-campaign)
// for why: cold ad traffic was producing real clicks but zero completed
// leads, and cutting every question to one decisive tap was the fix aimed
// at that. "Kembali" stays as a manual back affordance since a binary
// option means a mis-tap fully flips the answer instead of just nudging it.
export default function QuizScreen({ onLeadCaptured, onComplete }: QuizScreenProps) {
  const [phase, setPhase] = useState<'questions' | 'lead'>('questions')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const advanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const totalQuestions = diagnosticQuestions.length
  const currentQuestion = diagnosticQuestions[questionIndex]
  const isLastQuestion = questionIndex === totalQuestions - 1
  const isFirstQuestion = questionIndex === 0

  useEffect(() => {
    return () => {
      if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current)
    }
  }, [])

  const handleLeadSubmit = (lead: Lead) => {
    onLeadCaptured(lead)
    onComplete(answers)
  }

  const handleSelect = (score: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: score }))

    // Re-selecting (e.g. after using "Kembali" to change an earlier
    // answer) should still auto-advance forward from wherever this
    // question is, using isLastQuestion/questionIndex captured now.
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current)
    advanceTimeoutRef.current = setTimeout(() => {
      setDirection(1)
      if (isLastQuestion) {
        setPhase('lead')
      } else {
        setQuestionIndex((i) => i + 1)
      }
    }, AUTO_ADVANCE_DELAY_MS)
  }

  const goBack = () => {
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current)
    if (phase === 'lead') {
      setDirection(-1)
      setPhase('questions')
      return
    }
    if (isFirstQuestion) return
    setDirection(-1)
    setQuestionIndex((i) => i - 1)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="mx-auto w-full max-w-lg px-5 pt-6">
        <div className="mb-4 flex justify-center">
          <Logo size="sm" />
        </div>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>
            {phase === 'lead'
              ? 'Semua pertanyaan terjawab'
              : `Pertanyaan ${questionIndex + 1} dari ${totalQuestions}`}
          </span>
          <span className="flex items-center gap-1 font-medium text-brand-600">
            <Sparkles className="h-4 w-4" />
            {phase === 'lead' ? totalQuestions : Object.keys(answers).length}/{totalQuestions} terjawab
          </span>
        </div>
        <div className="mt-2 flex gap-1.5">
          {diagnosticQuestions.map((q, i) => (
            <div
              key={q.id}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                phase === 'lead' || i <= questionIndex ? 'bg-brand-600' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
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

      {phase === 'questions' && !isFirstQuestion && (
        <footer className="mx-auto w-full max-w-lg px-5 pb-8 pt-2">
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
          >
            <ArrowLeft className="h-5 w-5" />
            Kembali
          </button>
        </footer>
      )}

      {phase === 'lead' && (
        <footer className="mx-auto w-full max-w-lg px-5 pb-8 pt-2">
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
          >
            <ArrowLeft className="h-5 w-5" />
            Kembali ke pertanyaan terakhir
          </button>
        </footer>
      )}
    </div>
  )
}
