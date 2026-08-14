import { useState } from 'react'
import QuizScreen from './components/QuizScreen'
import ReportScreen from './components/ReportScreen'
import { computeDiagnosticResult } from './lib/scoring'
import { submitDiagnosticResponses, submitLead } from './lib/submitLead'
import type { DiagnosticResult } from './types/diagnostic'
import type { Lead } from './types/lead'

type Screen = 'quiz' | 'report'

function App() {
  const [screen, setScreen] = useState<Screen>('quiz')
  const [lead, setLead] = useState<Lead | null>(null)
  const [result, setResult] = useState<DiagnosticResult | null>(null)

  const handleLeadCaptured = (capturedLead: Lead) => {
    setLead(capturedLead)
    submitLead(capturedLead)
  }

  const handleQuizComplete = (answers: Record<number, number>) => {
    const computed = computeDiagnosticResult(answers)
    setResult(computed)
    if (lead) submitDiagnosticResponses(lead, computed)
    setScreen('report')
    window.scrollTo({ top: 0 })
  }

  const handleRestart = () => {
    setScreen('quiz')
    setResult(null)
    window.scrollTo({ top: 0 })
  }

  if (screen === 'report' && lead && result) {
    return <ReportScreen lead={lead} result={result} onRestart={handleRestart} />
  }

  return <QuizScreen onLeadCaptured={handleLeadCaptured} onComplete={handleQuizComplete} />
}

export default App
