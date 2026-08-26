import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { ChapterMeta } from '../content/module-1/chapters'
import { hasFullModuleAccess, isChapterFreePreview } from '../access/moduleAccess'
import { useAccess } from '../access/AccessContext'

export type CompletedChapters = Record<string, true>

interface ProgressContextValue {
  isChapterComplete: (chapterId: string) => boolean
  markChapterComplete: (chapterId: string) => void
  isChapterUnlocked: (chapterId: string) => boolean
  // True only when the SOLE reason a chapter is locked is the purchase
  // gate, not sequential completion — lets ModuleHome show a "buy to
  // continue" CTA instead of "finish the previous chapter first".
  isChapterLockedByPurchase: (chapterId: string) => boolean
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
  moduleNumber,
  chapters,
  children,
}: {
  moduleId: string
  moduleNumber: number
  chapters: ChapterMeta[]
  children: ReactNode
}) {
  const storageKey = `prediagnosis-progress-${moduleId}`
  const [completed, setCompleted] = useState<CompletedChapters>(() => loadInitialProgress(storageKey))
  const { purchasedProducts } = useAccess()
  const chapterIds = chapters.map((chapter) => chapter.id)
  const fullAccess = hasFullModuleAccess(moduleNumber, purchasedProducts)

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(completed))
  }, [storageKey, completed])

  const isChapterComplete = (chapterId: string) => !!completed[chapterId]

  const markChapterComplete = (chapterId: string) => {
    setCompleted((prev) => (prev[chapterId] ? prev : { ...prev, [chapterId]: true }))
  }

  // Unchanged from before: chapter N needs chapter N-1 done. This gate
  // still applies to free-preview chapters too (you can't skip straight to
  // Bab 1 without the intro, even though both are free).
  const sequentiallyUnlocked = (chapterId: string) => {
    const index = chapterIds.indexOf(chapterId)
    if (index <= 0) return true
    const previousId = chapterIds[index - 1]
    return !!completed[previousId]
  }

  // New second gate (PAYMENT_GATEWAY_INTEGRATION_PLAN.md section 2.0):
  // intro + Bab 1 are always allowed through; everything else needs the
  // module's full purchase/entitlement.
  const purchaseUnlocked = (chapterId: string) => {
    if (fullAccess) return true
    const chapter = chapters.find((candidate) => candidate.id === chapterId)
    return chapter ? isChapterFreePreview(chapter) : false
  }

  const isChapterUnlocked = (chapterId: string) => sequentiallyUnlocked(chapterId) && purchaseUnlocked(chapterId)

  const isChapterLockedByPurchase = (chapterId: string) =>
    sequentiallyUnlocked(chapterId) && !purchaseUnlocked(chapterId)

  return (
    <ProgressContext.Provider
      value={{ isChapterComplete, markChapterComplete, isChapterUnlocked, isChapterLockedByPurchase }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgressStore() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgressStore must be used within a ProgressProvider')
  return ctx
}
