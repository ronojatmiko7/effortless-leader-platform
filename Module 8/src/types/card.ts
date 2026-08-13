import type { LucideIcon } from 'lucide-react'

export type CardType =
  | 'info'
  | 'yes-no'
  | 'multiple-choice'
  | 'fill-in-the-blank'
  | 'sort-list'
  | 'worksheet'
  | 'reflection'
  | 'finding-review'
  | 'report'

interface BaseCard {
  id: string
  type: CardType
}

export interface InfoCardData extends BaseCard {
  type: 'info'
  icon: LucideIcon
  eyebrow?: string
  title: string
  body: string[]
  cta?: { label: string; href: string }
}

export interface YesNoCardData extends BaseCard {
  type: 'yes-no'
  question: string
  yesLabel?: string
  noLabel?: string
  feedbackYes: string
  feedbackNo: string
}

export interface MultipleChoiceCardData extends BaseCard {
  type: 'multiple-choice'
  question: string
  options: string[]
  correctAnswer: number
  successFeedback: string
  errorFeedback: string
}

export interface FillInBlankCardData extends BaseCard {
  type: 'fill-in-the-blank'
  sentence: string
  options: string[]
  correctAnswer: string
  successFeedback: string
  errorFeedback: string
}

export interface SortListCardData extends BaseCard {
  type: 'sort-list'
  question: string
  items: string[]
  correctAnswer: string[]
  successFeedback: string
  errorFeedback: string
}

export interface WorksheetCardData extends BaseCard {
  type: 'worksheet'
  icon: LucideIcon
  eyebrow?: string
  title: string
  body: string[]
  downloadUrl: string
  buttonText: string
}

export interface ReflectionField {
  id: string
  label: string
  placeholder?: string
}

export interface ReflectionCardData extends BaseCard {
  type: 'reflection'
  eyebrow?: string
  prompt: string
  fields: ReflectionField[]
}

export interface FindingReviewRecapItem {
  label: string
  cardId: string
  fieldId: string
}

export interface FindingReviewCardData extends BaseCard {
  type: 'finding-review'
  eyebrow?: string
  title: string
  recap: FindingReviewRecapItem[]
  scorePrompt: string
  justificationLabel: string
  justificationPlaceholder?: string
  storageKey: string
}

export interface ReportSectionItem {
  label: string
  cardId: string
  fieldId: string
}

export interface ReportSection {
  heading: string
  items: ReportSectionItem[]
}

export interface ReportCardData extends BaseCard {
  type: 'report'
  eyebrow?: string
  title: string
  intro: string[]
  sections: ReportSection[]
  downloadButtonText: string
}

export type Card =
  | InfoCardData
  | YesNoCardData
  | MultipleChoiceCardData
  | FillInBlankCardData
  | SortListCardData
  | WorksheetCardData
  | ReflectionCardData
  | FindingReviewCardData
  | ReportCardData
