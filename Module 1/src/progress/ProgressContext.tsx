import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'prediagnosis-progress'

const CHAPTER_ORDER = [
  'chapter-1',
  'chapter-2',
  'chapter-3',
  'chapter-4',
  'chapter-5',
  'chapter-6',
  'chapter-7',
  'chapter-8',
]

export type CompletedChapters = Record<string, true>

interface ProgressContextValue {
  isChapterComplete: (chapterId: string) => boolean
  markChapterComplete: (chapterId: string) => void
  isChapterUnlocked: (chapterId: string) => boolean
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

function loadInitialProgress(): CompletedChapters {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CompletedChapters) : {}
  } catch {
    return {}
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<CompletedChapters>(loadInitialProgress)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completed))
  }, [completed])

  const isChapterComplete = (chapterId: string) => !!completed[chapterId]

  const markChapterComplete = (chapterId: string) => {
    setCompleted((prev) => (prev[chapterId] ? prev : { ...prev, [chapterId]: true }))
  }

  const isChapterUnlocked = (chapterId: string) => {
    const index = CHAPTER_ORDER.indexOf(chapterId)
    if (index <= 0) return true
    const previousId = CHAPTER_ORDER[index - 1]
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
