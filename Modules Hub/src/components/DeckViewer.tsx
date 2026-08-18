import { useState } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import type { AssessmentQuestionCardData, Card } from '../types/card'
import { useWorkbookStore } from '../workbook/WorkbookContext'
import InfoCard from './cards/InfoCard'
import YesNoCard from './cards/YesNoCard'
import MultipleChoiceCard from './cards/MultipleChoiceCard'
import FillInBlankCard from './cards/FillInBlankCard'
import SortCard from './cards/SortCard'
import WorksheetCard from './cards/WorksheetCard'
import ReflectionCard from './cards/ReflectionCard'
import FindingReviewCard from './cards/FindingReviewCard'
import ReportCard from './cards/ReportCard'
import ReviewRequestCard from './cards/ReviewRequestCard'
import AssessmentQuestionCard from './cards/AssessmentQuestionCard'
import AssessmentResultCard from './cards/AssessmentResultCard'

const SWIPE_THRESHOLD = 80

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
}

interface RenderCtx {
  isCorrectlyAnswered: boolean
  onCorrect: () => void
  yesNoSelection: 'yes' | 'no' | undefined
  onYesNoSelect: (value: 'yes' | 'no') => void
  onCtaClick: ((href: string) => void) | undefined
  assessmentSelection: number | undefined
  onAssessmentSelect: (index: number) => void
  assessmentResult?: {
    score: { correct: number; total: number }
    details: { question: string; options: string[]; correctAnswer: number; selected: number | undefined }[]
  }
}

function renderCard(card: Card, ctx: RenderCtx) {
  switch (card.type) {
    case 'info':
      return <InfoCard card={card} onCtaClick={ctx.onCtaClick} />
    case 'yes-no':
      return <YesNoCard card={card} selected={ctx.yesNoSelection} onSelect={ctx.onYesNoSelect} />
    case 'multiple-choice':
      return <MultipleChoiceCard card={card} isAnswered={ctx.isCorrectlyAnswered} onCorrect={ctx.onCorrect} />
    case 'fill-in-the-blank':
      return <FillInBlankCard card={card} isAnswered={ctx.isCorrectlyAnswered} onCorrect={ctx.onCorrect} />
    case 'sort-list':
      return <SortCard card={card} isAnswered={ctx.isCorrectlyAnswered} onCorrect={ctx.onCorrect} />
    case 'worksheet':
      return <WorksheetCard card={card} />
    case 'reflection':
      return <ReflectionCard card={card} />
    case 'finding-review':
      return <FindingReviewCard card={card} />
    case 'report':
      return <ReportCard card={card} />
    case 'review-request':
      return <ReviewRequestCard card={card} />
    case 'assessment-question':
      return (
        <AssessmentQuestionCard card={card} selected={ctx.assessmentSelection} onSelect={ctx.onAssessmentSelect} />
      )
    case 'assessment-result':
      return (
        <AssessmentResultCard
          card={card}
          score={ctx.assessmentResult!.score}
          details={ctx.assessmentResult!.details}
        />
      )
  }
}

interface DeckViewerProps {
  cards: Card[]
  onCtaNavigate?: (href: string) => void
  onDeckComplete?: () => void
}

export default function DeckViewer({ cards, onCtaNavigate, onDeckComplete }: DeckViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [correctlyAnsweredIds, setCorrectlyAnsweredIds] = useState<Set<string>>(new Set())
  const [yesNoSelections, setYesNoSelections] = useState<Record<string, 'yes' | 'no'>>({})
  const [assessmentSelections, setAssessmentSelections] = useState<Record<string, number>>({})
  const { getFieldValue } = useWorkbookStore()

  const card = cards[currentIndex]
  const isFirst = currentIndex === 0
  const isLast = currentIndex === cards.length - 1
  const yesNoSelection = yesNoSelections[card.id]
  const assessmentSelection = assessmentSelections[card.id]

  const isComplete =
    card.type === 'info' ||
    card.type === 'worksheet' ||
    card.type === 'report' ||
    card.type === 'review-request' ||
    card.type === 'assessment-result'
      ? true
      : card.type === 'yes-no'
        ? yesNoSelection !== undefined
        : card.type === 'reflection'
          ? card.fields.some((field) => getFieldValue(card.id, field.id).trim().length > 0)
          : card.type === 'finding-review'
            ? getFieldValue(card.storageKey, 'score').trim().length > 0
            : card.type === 'assessment-question'
              ? assessmentSelection !== undefined
              : correctlyAnsweredIds.has(card.id)

  const totalQuizCards = cards.filter(
    (c) => c.type === 'multiple-choice' || c.type === 'fill-in-the-blank' || c.type === 'sort-list',
  ).length
  const score = correctlyAnsweredIds.size

  // Only computed for the card actually being rendered when it's an
  // assessment-result card — pulls every assessment-question sharing this
  // result card's assessmentId, pairs each with the learner's in-deck
  // selection, and tallies the score. This is what makes pretest/posttest
  // feedback deferred: nothing about correctness exists anywhere until this
  // runs, on the last card of the block.
  const assessmentResult =
    card.type === 'assessment-result'
      ? (() => {
          const questions = cards.filter(
            (c): c is AssessmentQuestionCardData =>
              c.type === 'assessment-question' && c.assessmentId === card.assessmentId,
          )
          const details = questions.map((q) => ({
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            selected: assessmentSelections[q.id],
          }))
          const correct = details.filter((d) => d.selected === d.correctAnswer).length
          return { score: { correct, total: details.length }, details }
        })()
      : undefined

  const goNext = () => {
    if (!isComplete || isLast) return
    setDirection(1)
    setCurrentIndex((i) => i + 1)
  }

  const goPrevious = () => {
    if (isFirst) return
    setDirection(-1)
    setCurrentIndex((i) => i - 1)
  }

  const handleCorrect = () => {
    setCorrectlyAnsweredIds((prev) => new Set(prev).add(card.id))
  }

  const handleYesNoSelect = (value: 'yes' | 'no') => {
    setYesNoSelections((prev) => ({ ...prev, [card.id]: value }))
  }

  const handleAssessmentSelect = (index: number) => {
    setAssessmentSelections((prev) => ({ ...prev, [card.id]: index }))
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goNext()
    else if (info.offset.x > SWIPE_THRESHOLD) goPrevious()
  }

  const handleFinish = () => {
    onDeckComplete?.()
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 print:block print:min-h-0 print:bg-white">
      <header className="mx-auto w-full max-w-lg px-5 pt-6 print:hidden">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>
            Kartu {currentIndex + 1} dari {cards.length}
          </span>
          {totalQuizCards > 0 && (
            <span className="flex items-center gap-1 font-medium text-indigo-600">
              <Sparkles className="h-4 w-4" />
              Skor {score}/{totalQuizCards}
            </span>
          )}
        </div>
        <div className="mt-2 flex gap-1.5">
          {cards.map((c, i) => (
            <div
              key={c.id}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= currentIndex ? 'bg-indigo-600' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-lg flex-1 items-stretch overflow-hidden px-5 py-4 print:block print:w-full print:max-w-none print:overflow-visible print:p-0">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={card.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            drag={card.type === 'sort-list' ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 print:rounded-none print:border-0 print:p-0 print:shadow-none"
          >
            {renderCard(card, {
              isCorrectlyAnswered: correctlyAnsweredIds.has(card.id),
              onCorrect: handleCorrect,
              yesNoSelection,
              onYesNoSelect: handleYesNoSelect,
              onCtaClick: onCtaNavigate,
              assessmentSelection,
              onAssessmentSelect: handleAssessmentSelect,
              assessmentResult,
            })}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mx-auto w-full max-w-lg px-5 pb-8 pt-2 print:hidden">
        <div className="flex items-center gap-3">
          {!isFirst && (
            <button
              type="button"
              onClick={goPrevious}
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
            >
              <ArrowLeft className="h-5 w-5" />
              Kembali
            </button>
          )}
          <AnimatePresence mode="wait">
            {isComplete && isLast && (
              <motion.button
                key="finish"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                type="button"
                onClick={handleFinish}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Selesai Bab Ini
                <CheckCircle2 className="h-5 w-5" />
              </motion.button>
            )}
            {isComplete && !isLast && (
              <motion.button
                key="next"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                type="button"
                onClick={goNext}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                Lanjut
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </footer>
    </div>
  )
}
