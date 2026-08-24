import { diagnosticQuestions } from '../data/diagnosticQuestions'
import { module1, serviceModuleMappings } from '../data/moduleMapping'
import type { DiagnosticResult, DiagnosticSection, FlaggedQuestion } from '../types/diagnostic'

const SECTIONS: DiagnosticSection[] = ['Output', 'Proses', 'Input']

function mappingForQuestion(questionId: number) {
  return serviceModuleMappings.find((mapping) => mapping.questionIds.includes(questionId))
}

// Mirrors generateReport() in organizational_prediagnostic_tool_id.html:
// same 1-4 scale, red flag at score <= 2, same domain-average math.
export function computeDiagnosticResult(answers: Record<number, number>): DiagnosticResult {
  let totalScore = 0
  const domainSums: Record<DiagnosticSection, { sum: number; count: number }> = {
    Output: { sum: 0, count: 0 },
    Proses: { sum: 0, count: 0 },
    Input: { sum: 0, count: 0 },
  }
  const flaggedQuestions: FlaggedQuestion[] = []

  for (const item of diagnosticQuestions) {
    const score = answers[item.id] ?? 2
    totalScore += score
    domainSums[item.section].sum += score
    domainSums[item.section].count += 1

    if (score <= 2) {
      const mapping = mappingForQuestion(item.id)
      flaggedQuestions.push({
        questionId: item.id,
        section: item.section,
        area: item.area,
        question: item.question,
        score,
        service: mapping?.service ?? module1.service,
        module: mapping?.module ?? module1.module,
        moduleName: mapping?.moduleName ?? module1.moduleName,
      })
    }
  }

  const domainAverages = Object.fromEntries(
    SECTIONS.map((section) => [
      section,
      Math.round((domainSums[section].sum / domainSums[section].count) * 10) / 10,
    ]),
  ) as Record<DiagnosticSection, number>

  const recommendedModules = Array.from(
    new Set([module1.module, ...flaggedQuestions.map((flag) => flag.module)]),
  ).sort((a, b) => a - b)

  return {
    answers,
    totalScore,
    averageMaturity: Math.round((totalScore / diagnosticQuestions.length) * 10) / 10,
    domainAverages,
    redFlagCount: flaggedQuestions.length,
    flaggedQuestions,
    recommendedModules,
  }
}
