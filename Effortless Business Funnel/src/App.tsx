import { useRef, useState } from 'react'
import LandingScreen from './components/LandingScreen'
import QuizScreen from './components/QuizScreen'
import ReportScreen from './components/ReportScreen'
import { computeDiagnosticResult } from './lib/scoring'
import { submitDiagnosticResponses, submitLead } from './lib/submitLead'
import { trackEvent, trackCustomEvent } from './lib/pixel'
import type { DiagnosticResult } from './types/diagnostic'
import type { Lead } from './types/lead'

// Sep 2026: the 'program' screen (ProgramScreen.tsx — a pitch/catalog page
// that used to sit between the report and the real Modules Hub) was
// deleted. ReportScreen's "Belajar Memperbaiki Sendiri" card now opens the
// Hub directly (see openModulesHub() in ReportScreen.tsx) — see project
// memory for why.
type Screen = 'landing' | 'quiz' | 'report'

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
  // as-is for rendering (ReportScreen), since by the time that renders the
  // state update has flushed.
  const leadRef = useRef<Lead | null>(null)
  // Bug fix (Aug 27): submitLead() and submitDiagnosticResponses() both hit
  // the same submit-lead Edge Function. Firing them in the same tick (as
  // above) meant two concurrent cold starts of that function — observed in
  // Supabase logs as one request's internal `leads` insert getting a 401
  // from PostgREST while the other got 201, i.e. one of the two rows
  // silently failing to write (confirmed via query_logs: the newest test's
  // row had diagnostic_result: null despite the client-side flow completing
  // fine). Sequencing the second call to wait for the first to settle
  // avoids the concurrent-boot race without blocking the UI (setScreen
  // still happens immediately below).
  const leadSubmitRef = useRef<Promise<void> | null>(null)

  const handleStart = () => {
    trackCustomEvent('QuizStarted')
    setScreen('quiz')
    window.scrollTo({ top: 0 })
  }

  const handleLeadCaptured = (capturedLead: Lead) => {
    leadRef.current = capturedLead
    setLead(capturedLead)
    leadSubmitRef.current = submitLead(capturedLead)
    trackEvent('Lead', { content_name: 'Asesmen 13 Titik Kebocoran Bisnis' })
  }

  const handleQuizComplete = (answers: Record<number, number>) => {
    const computed = computeDiagnosticResult(answers)
    setResult(computed)
    if (leadRef.current) {
      const capturedLead = leadRef.current
      const priorSubmit = leadSubmitRef.current
      void (async () => {
        if (priorSubmit) await priorSubmit
        await submitDiagnosticResponses(capturedLead, computed)
      })()
    }
    trackCustomEvent('QuizCompleted', { averageMaturity: computed.averageMaturity })
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
