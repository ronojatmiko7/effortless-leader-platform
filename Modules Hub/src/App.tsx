import { useState, type ReactNode } from 'react'
import DeckViewer from './components/DeckViewer'
import ModuleHome from './components/ModuleHome'
import HubHome from './components/HubHome'
import RegisterScreen from './components/RegisterScreen'
import { WorkbookProvider } from './workbook/WorkbookContext'
import { ProgressProvider, useProgressStore } from './progress/ProgressContext'
import { AccessProvider } from './access/AccessContext'
import { loadMemberProfile, type MemberProfile } from './access/memberProfile'
import { modules } from './data/modules'

type View =
  | { level: 'hub' }
  | { level: 'module-home'; moduleId: string }
  | { level: 'chapter'; moduleId: string; chapterId: string }

const chapterHref = (chapterId: string) => `#${chapterId}`

function ModuleShell({
  moduleId,
  moduleNumber,
  view,
  onBackToHub,
  onSelectChapter,
  onDeckComplete,
}: {
  moduleId: string
  moduleNumber: number
  view: View
  onBackToHub: () => void
  onSelectChapter: (chapterId: string) => void
  onDeckComplete: (chapterId: string) => void
}) {
  const module = modules.find((candidate) => candidate.id === moduleId)
  const { isChapterUnlocked, markChapterComplete } = useProgressStore()

  if (!module) return null

  if (view.level === 'chapter') {
    const currentChapter = module.chapters.find((chapter) => chapter.id === view.chapterId)
    if (!currentChapter || !isChapterUnlocked(currentChapter.id)) {
      return (
        <ModuleHome
          moduleTitle={module.title}
          moduleNumber={moduleNumber}
          coverImage={module.coverImage}
          chapters={module.chapters}
          onSelectChapter={onSelectChapter}
          onBackToHub={onBackToHub}
        />
      )
    }

    const handleDeckComplete = () => {
      markChapterComplete(currentChapter.id)
      onDeckComplete(currentChapter.id)
    }

    const handleCtaNavigate = (href: string) => {
      if (href === '#home') {
        handleDeckComplete()
        return
      }
      const isKnownChapter = module.chapters.some((chapter) => chapterHref(chapter.id) === href)
      if (isKnownChapter) {
        markChapterComplete(currentChapter.id)
        onSelectChapter(href.slice(1))
      }
    }

    return (
      <DeckViewer
        key={currentChapter.id}
        cards={currentChapter.cards}
        moduleNumber={moduleNumber}
        onCtaNavigate={handleCtaNavigate}
        onDeckComplete={handleDeckComplete}
      />
    )
  }

  return (
    <ModuleHome
      moduleTitle={module.title}
      moduleNumber={moduleNumber}
      coverImage={module.coverImage}
      chapters={module.chapters}
      onSelectChapter={onSelectChapter}
      onBackToHub={onBackToHub}
    />
  )
}

// Reads the funnel handoff (ProgramScreen.tsx's openModulesHub appends
// ?name=&email=&whatsapp= when it opens the Hub) so RegisterScreen can be
// pre-filled instead of asking someone to retype what they already told
// the funnel's lead form. Empty on a direct/bookmarked visit.
function readQueryProfile(): MemberProfile {
  try {
    const params = new URLSearchParams(window.location.search)
    return {
      name: params.get('name') ?? '',
      email: params.get('email') ?? '',
      whatsapp: params.get('whatsapp') ?? '',
    }
  } catch {
    return { name: '', email: '', whatsapp: '' }
  }
}

// The whole-Hub gate (Bro Rono's Aug 26 2026 decision: register blocks
// entry to everything, including the previously-open Module 1 — not just
// the paid-unlock moment). Skips straight through for a returning
// browser that already has a saved member profile (memberProfile.ts),
// so this only shows once per device. Lives inside AccessProvider (see
// App() below) because RegisterScreen needs useAccess()'s
// setCustomerEmail to also arm the purchase-lookup identity on submit.
function RegisterGate({ children }: { children: ReactNode }) {
  const [isRegistered, setIsRegistered] = useState(() => loadMemberProfile().email.trim().length > 0)

  if (!isRegistered) {
    return <RegisterScreen initialProfile={readQueryProfile()} onRegistered={() => setIsRegistered(true)} />
  }

  return <>{children}</>
}

function AppShell() {
  const [view, setView] = useState<View>({ level: 'hub' })

  // Entry into a module is no longer gated at all — Bab 1 (and the intro)
  // preview free for everyone, so the only reason to bail here is an
  // unknown module id. The actual paywall lives per-chapter now, inside
  // ProgressContext's isChapterUnlocked/isChapterLockedByPurchase (see
  // PAYMENT_GATEWAY_INTEGRATION_PLAN.md section 2.0).
  const handleSelectModule = (moduleId: string) => {
    const module = modules.find((candidate) => candidate.id === moduleId)
    if (!module) return
    setView({ level: 'module-home', moduleId })
  }

  const handleBackToHub = () => setView({ level: 'hub' })

  if (view.level === 'hub') {
    return <HubHome onSelectModule={handleSelectModule} />
  }

  const module = modules.find((candidate) => candidate.id === view.moduleId)
  if (!module) {
    return <HubHome onSelectModule={handleSelectModule} />
  }

  const handleSelectChapter = (chapterId: string) => {
    setView({ level: 'chapter', moduleId: module.id, chapterId })
  }

  const handleDeckComplete = () => {
    setView({ level: 'module-home', moduleId: module.id })
  }

  return (
    <WorkbookProvider key={module.id} moduleId={module.id}>
      <ProgressProvider key={module.id} moduleId={module.id} moduleNumber={module.number} chapters={module.chapters}>
        <ModuleShell
          moduleId={module.id}
          moduleNumber={module.number}
          view={view}
          onBackToHub={handleBackToHub}
          onSelectChapter={handleSelectChapter}
          onDeckComplete={handleDeckComplete}
        />
      </ProgressProvider>
    </WorkbookProvider>
  )
}

function App() {
  return (
    <AccessProvider>
      <RegisterGate>
        <AppShell />
      </RegisterGate>
    </AccessProvider>
  )
}

export default App
