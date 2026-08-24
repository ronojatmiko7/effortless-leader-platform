import { useState } from 'react'
import LandingScreen from './components/LandingScreen'
import QuizScreen from './components/QuizScreen'
import ReportScreen from './components/ReportScreen'
import { computeDiagnosticResult } from './lib/scoring'
import { submitDiagnosticResponses, submitLead } from './lib/submitLead'
import type { DiagnosticResult } from './types/diagnostic'
import type { Lead } from './types/lead'

type Screen = 'landing' | 'quiz' | 'report'

function App() {
  const [screen, setScreen] = useState<Screen>('landing')
  const [lead, setLead] = useState<Lead | null>(null)
  const [result, setResult] = useState<DiagnosticResult | null>(null)

  const handleStart = () => {
    setScreen('quiz')
    window.scrollTo({ top: 0 })
  }

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
    setScreen('landing')
    setResult(null)
    window.scrollTo({ top: 0 })
  }

  if (screen === 'report' && lead && result) {
    return <ReportScreen lead={lead} result={result} onRestart={handleRestart} />
  }

  if (screen === 'quiz') {
    return <QuizScreen onLeadCaptured={handleLeadCaptured} onComplete={handleQuizComplete} />
  }

  return <LandingScreen onStart={handleStart} />
}

export default App
