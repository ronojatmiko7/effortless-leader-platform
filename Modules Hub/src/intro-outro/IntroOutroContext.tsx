import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

/**
 * UNUSED as of Aug 18 (v2 redesign) — left in place only because this repo
 * is edited via a device bridge that can delete files but this particular
 * change was authored during a stretch where deletion wasn't available.
 * Nothing in the app imports this anymore: App.tsx no longer wraps modules
 * in <IntroOutroProvider>, and ModuleMeta no longer has intro/outro fields.
 *
 * Why it's dead: intro/pretest and outro/posttest content is no longer a
 * separate screen that needs its own completion tracking. It's spliced
 * directly into Chapter 1's and Chapter 8's own `cards` arrays (see
 * content/module-2/chapters.ts) and rides on the existing chapter-complete
 * flow in ProgressContext instead. Safe to delete this file entirely next
 * time this repo is opened somewhere that can delete files.
 */

interface AssessmentScore {
  correct: number
  total: number
}

interface IntroOutroState {
  introCompleted: boolean
  outroCompleted: boolean
  pretestScore: AssessmentScore | null
  posttestScore: AssessmentScore | null
}

interface IntroOutroContextValue extends IntroOutroState {
  markIntroComplete: (score?: AssessmentScore) => void
  markOutroComplete: (score?: AssessmentScore) => void
}

const IntroOutroContext = createContext<IntroOutroContextValue | null>(null)

function loadState(storageKey: string): IntroOutroState {
  const fallback: IntroOutroState = {
    introCompleted: false,
    outroCompleted: false,
    pretestScore: null,
    posttestScore: null,
  }
  try {
    const raw = window.localStorage.getItem(storageKey)
    return raw ? { ...fallback, ...(JSON.parse(raw) as Partial<IntroOutroState>) } : fallback
  } catch {
    return fallback
  }
}

export function IntroOutroProvider({ moduleId, children }: { moduleId: string; children: ReactNode }) {
  const storageKey = `prediagnosis-intro-outro-${moduleId}`
  const [state, setState] = useState<IntroOutroState>(() => loadState(storageKey))

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state))
  }, [storageKey, state])

  const markIntroComplete = (score?: AssessmentScore) =>
    setState((prev) => ({ ...prev, introCompleted: true, pretestScore: score ?? prev.pretestScore }))

  const markOutroComplete = (score?: AssessmentScore) =>
    setState((prev) => ({ ...prev, outroCompleted: true, posttestScore: score ?? prev.posttestScore }))

  return (
    <IntroOutroContext.Provider value={{ ...state, markIntroComplete, markOutroComplete }}>
      {children}
    </IntroOutroContext.Provider>
  )
}

export function useIntroOutroStore() {
  const ctx = useContext(IntroOutroContext)
  if (!ctx) throw new Error('useIntroOutroStore must be used within an IntroOutroProvider')
  return ctx
}
