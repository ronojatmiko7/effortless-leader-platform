import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'prediagnosis-workbook'

export type WorkbookAnswers = Record<string, Record<string, string>>

interface WorkbookContextValue {
  answers: WorkbookAnswers
  setFieldValue: (cardId: string, fieldId: string, value: string) => void
  getFieldValue: (cardId: string, fieldId: string) => string
}

const WorkbookContext = createContext<WorkbookContextValue | null>(null)

function loadInitialAnswers(): WorkbookAnswers {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as WorkbookAnswers) : {}
  } catch {
    return {}
  }
}

export function WorkbookProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<WorkbookAnswers>(loadInitialAnswers)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
  }, [answers])

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
