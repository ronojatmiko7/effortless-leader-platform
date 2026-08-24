export type DiagnosticSection = 'Output' | 'Proses' | 'Input'

export interface DiagnosticQuestion {
  id: number
  section: DiagnosticSection
  area: string
  question: string
  /** Score 1-4 BARS anchor text, verbatim from the source diagnostic tool. */
  anchors: [string, string, string, string]
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
