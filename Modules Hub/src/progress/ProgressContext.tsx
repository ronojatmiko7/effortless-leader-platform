import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type CompletedChapters = Record<string, true>

interface ProgressContextValue {
  isChapterComplete: (chapterId: string) => boolean
  markChapterComplete: (chapterId: string) => void
  isChapterUnlocked: (chapterId: string) => boolean
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

function loadInitialProgress(storageKey: string): CompletedChapters {
  try {
    const raw = window.localStorage.getItem(storageKey)
    return raw ? (JSON.parse(raw) as CompletedChapters) : {}
  } catch {
    return {}
  }
}

export function ProgressProvider({
  moduleId,
  chapterIds,
  children,
}: {
  moduleId: string
  chapterIds: string[]
  children: ReactNode
}) {
  const storageKey = `prediagnosis-progress-${moduleId}`
  const [completed, setCompleted] = useState<CompletedChapters>(() => loadInitialProgress(storageKey))

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(completed))
  }, [storageKey, completed])

  const isChapterComplete = (chapterId: string) => !!completed[chapterId]

  const markChapterComplete = (chapterId: string) => {
    setCompleted((prev) => (prev[chapterId] ? prev : { ...prev, [chapterId]: true }))
  }

  const isChapterUnlocked = (chapterId: string) => {
    const index = chapterIds.indexOf(chapterId)
    if (index <= 0) return true
    const previousId = chapterIds[index - 1]
    return !!completed[previousId]
  }

  return (
    <ProgressContext.Provider value={{ isChapterComplete, markChapterComplete, isChapterUnlocked }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgressStore() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgressStore must be used within a ProgressProvider')
  return ctx
}
