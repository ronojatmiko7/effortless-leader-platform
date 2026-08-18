import type { AssessmentQuestionCardData, AssessmentResultCardData, Card } from '../types/card'

/**
 * A single quiz question, authored once per module and reused for BOTH the
 * pretest (intro) and posttest (outro) — same questions before and after is
 * what makes the before/after comparison meaningful. See
 * content/module-2/assessmentQuestions.ts for the reference implementation.
 *
 * No successFeedback/errorFeedback here on purpose (product decision Aug 18,
 * v2): pretest/posttest answers are not revealed per-question — they're all
 * shown together, after every question in the block is answered, on the
 * trailing assessment-result card this function appends. See
 * AssessmentResultCard.tsx for where the correct-answer text is actually
 * shown to the learner.
 */
export interface AssessmentQuestionBase {
  question: string
  options: string[]
  correctAnswer: number
}

/**
 * Turns a shared question bank into a deferred-feedback assessment block:
 * N `assessment-question` cards (no immediate right/wrong reveal) followed
 * by one `assessment-result` card that DeckViewer scores and renders with a
 * per-question breakdown once the learner reaches it.
 *
 * resultTitle/resultIntro are supplied per call (not per question) so the
 * pretest and posttest can each end with their own bridging sentence into
 * whatever comes next in the deck — pretest's result bridges into Chapter 1,
 * posttest's result bridges into the module's closing note.
 */
export function buildAssessmentCards(
  questions: AssessmentQuestionBase[],
  assessmentId: 'pretest' | 'posttest',
  resultTitle: string,
  resultIntro: string,
): Card[] {
  const questionCards: AssessmentQuestionCardData[] = questions.map((q, i) => ({
    id: `${assessmentId}-q${i + 1}`,
    type: 'assessment-question',
    assessmentId,
    questionNumber: i + 1,
    totalQuestions: questions.length,
    ...q,
  }))

  const resultCard: AssessmentResultCardData = {
    id: `${assessmentId}-result`,
    type: 'assessment-result',
    assessmentId,
    title: resultTitle,
    resultIntro,
  }

  return [...questionCards, resultCard]
}
