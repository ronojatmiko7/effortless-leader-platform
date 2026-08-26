import { useRef, useState } from 'react'
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
  // Bug fix (Aug 26): handleLeadCaptured and handleQuizComplete fire
  // back-to-back synchronously (QuizScreen's handleLeadSubmit calls
  // onLeadCaptured then onComplete in the same event). setLead()'s update
  // isn't visible yet when handleQuizComplete's closure reads `lead`, so
  // `if (lead)` was always false and submitDiagnosticResponses never ran —
  // for anyone. A ref updates synchronously, so leadRef.current is always
  // current by the time handleQuizComplete reads it. `lead` state is kept
  // as-is for rendering (ReportScreen/ProgramScreen), since by the time
  // those render the state update has flushed.
  const leadRef = useRef<Lead | null>(null)

  const handleStart = () => {
    trackCustomEvent('QuizStarted')
    setScreen('quiz')
    window.scrollTo({ top: 0 })
  }

  const handleLeadCaptured = (capturedLead: Lead) => {
    leadRef.current = capturedLead
    setLead(capturedLead)
    submitLead(capturedLead)
    trackEvent('Lead', { content_name: 'Asesmen 13 Titik Kebocoran Bisnis' })
  }

  const handleQuizComplete = (answers: Record<number, number>) => {
    const computed = computeDiagnosticResult(answers)
    setResult(computed)
    if (leadRef.current) submitDiagnosticResponses(leadRef.current, computed)
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
