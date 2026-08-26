import { useState } from 'react'
import LandingScreen from './components/LandingScreen'
import QuizScreen from './components/QuizScreen'
import ReportScreen from './components/ReportScreen'
import ProgramScreen from './components/ProgramScreen'
import { computeDiagnosticResult } from './lib/scoring'
import { submitDiagnosticResponses, submitLead } from './lib/submitLead'
import { trackEvent, trackCustomEvent } from './lib/pixel'
import type { DiagnosticResult } from './types/diagnostic'
import type { Lead } from './types/lead'

type Screen = 'landing' | 'quiz' | 'report' | 'program'

function App() {
  const [screen, setScreen] = useState<Screen>('landing')
  const [lead, setLead] = useState<Lead | null>(null)
  const [result, setResult] = useState<DiagnosticResult | null>(null)

  const handleStart = () => {
    trackCustomEvent('QuizStarted')
    setScreen('quiz')
    window.scrollTo({ top: 0 })
  }

  const handleLeadCaptured = (capturedLead: Lead) => {
    setLead(capturedLead)
    submitLead(capturedLead)
    trackEvent('Lead', { content_name: 'Asesmen 13 Titik Kebocoran Bisnis' })
  }

  const handleQuizComplete = (answers: Record<number, number>) => {
    const computed = computeDiagnosticResult(answers)
    setResult(computed)
    if (lead) submitDiagnosticResponses(lead, computed)
    trackCustomEvent('QuizCompleted', { averageMaturity: computed.averageMaturity })
    setScreen('report')
    window.scrollTo({ top: 0 })
  }

  const handleRestart = () => {
    setScreen('landing')
    setResult(null)
    window.scrollTo({ top: 0 })
  }

  const handleViewProgram = () => {
    setScreen('program')
    window.scrollTo({ top: 0 })
  }

  const handleBackToReport = () => {
    setScreen('report')
    window.scrollTo({ top: 0 })
  }

  if (screen === 'program' && lead && result) {
    return <ProgramScreen lead={lead} result={result} onBack={handleBackToReport} />
  }

  if (screen === 'report' && lead && result) {
    return (
      <ReportScreen lead={lead} result={result} onRestart={handleRestart} onViewProgram={handleViewProgram} />
    )
  }

  if (screen === 'quiz') {
    return <QuizScreen onLeadCaptured={handleLeadCaptured} onComplete={handleQuizComplete} />
  }

  return <LandingScreen onStart={handleStart} />
}

export default App
