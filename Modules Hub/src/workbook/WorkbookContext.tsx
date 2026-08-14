import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type WorkbookAnswers = Record<string, Record<string, string>>

interface WorkbookContextValue {
  answers: WorkbookAnswers
  setFieldValue: (cardId: string, fieldId: string, value: string) => void
  getFieldValue: (cardId: string, fieldId: string) => string
}

const WorkbookContext = createContext<WorkbookContextValue | null>(null)

function loadInitialAnswers(storageKey: string): WorkbookAnswers {
  try {
    const raw = window.localStorage.getItem(storageKey)
    return raw ? (JSON.parse(raw) as WorkbookAnswers) : {}
  } catch {
    return {}
  }
}

export function WorkbookProvider({ moduleId, children }: { moduleId: string; children: ReactNode }) {
  const storageKey = `prediagnosis-workbook-${moduleId}`
  const [answers, setAnswers] = useState<WorkbookAnswers>(() => loadInitialAnswers(storageKey))

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(answers))
  }, [storageKey, answers])

  const setFieldValue = (cardId: string, fieldId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [cardId]: { ...prev[cardId], [fieldId]: value },
    }))
  }

  const getFieldValue = (cardId: string, fieldId: string) => answers[cardId]?.[fieldId] ?? ''

  return (
    <WorkbookContext.Provider value={{ answers, setFieldValue, getFieldValue }}>
      {children}
    </WorkbookContext.Provider>
  )
}

export function useWorkbookStore() {
  const ctx = useContext(WorkbookContext)
  if (!ctx) throw new Error('useWorkbookStore must be used within a WorkbookProvider')
  return ctx
}
