export type DiagnosticSection = 'Output' | 'Proses' | 'Input'

export interface DiagnosticOption {
  /** Plain-language description of the situation this option represents. */
  label: string
  /** 1-4 scale, same convention as the old BARS anchors: <=2 trips the red-flag threshold in scoring.ts. */
  score: number
}

export interface DiagnosticQuestion {
  id: number
  section: DiagnosticSection
  area: string
  question: string
  /** Exactly 2 options (simplified from the original 4-option BARS scale, Aug 2026). */
  options: [DiagnosticOption, DiagnosticOption]
}

export interface ServiceModuleMapping {
  service: number
  module: number
  moduleName: string
  questionIds: number[]
}

export interface FlaggedQuestion {
  questionId: number
  section: DiagnosticSection
  area: string
  question: string
  score: number
  service: number
  module: number
  moduleName: string
}

export interface DiagnosticResult {
  answers: Record<number, number>
  totalScore: number
  averageMaturity: number
  domainAverages: Record<DiagnosticSection, number>
  redFlagCount: number
  flaggedQuestions: FlaggedQuestion[]
  /** Module 1 is always included; sorted ascending. */
  recommendedModules: number[]
}
