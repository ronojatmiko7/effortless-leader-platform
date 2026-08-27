import { useEffect, useState, type ReactNode } from 'react'
import DeckViewer from './components/DeckViewer'
import ModuleHome from './components/ModuleHome'
import HubHome from './components/HubHome'
import RegisterScreen from './components/RegisterScreen'
import Logo from './components/Logo'
import { WorkbookProvider } from './workbook/WorkbookContext'
import { ProgressProvider, useProgressStore } from './progress/ProgressContext'
import { AccessProvider, useAccess } from './access/AccessContext'
import { loadMemberProfile, saveMemberProfile, type MemberProfile } from './access/memberProfile'
import { verifyMagicLink } from './access/magicLinkApi'
import { trackEvent } from './lib/pixel'
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

function GateChecking() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-slate-50 px-4">
      <Logo size="sm" />
      <p className="text-sm text-slate-400">Memeriksa link masuk...</p>
    </div>
  )
}

type GateStatus = 'checking' | 'registered' | 'unregistered'

// The whole-Hub gate (Bro Rono's Aug 26 2026 decision, later upgraded the
// same day to real magic-link verification instead of a trusted typed-in
// email): register blocks entry to everything, including the
// previously-open Module 1 — not just the paid-unlock moment. Skips
// straight through for a returning browser that already has a saved
// member profile (memberProfile.ts), so RegisterScreen only shows once
// per device — until it sees a fresh ?magic=TOKEN, which it verifies
// server-side (verify-magic-link) before saving anything locally. Lives
// inside AccessProvider (see App() below) because both the verified-link
// path and RegisterScreen's own submit path need useAccess()'s
// setCustomerEmail to also arm the purchase-lookup identity.
function RegisterGate({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<GateStatus>('checking')
  const [linkError, setLinkError] = useState<string | null>(null)
  const { setCustomerEmail } = useAccess()

  useEffect(() => {
    let cancelled = false

    async function run() {
      const params = new URLSearchParams(window.location.search)
      const token = params.get('magic')

      if (token) {
        const result = await verifyMagicLink(token)
        // One-time token either way — strip it from the URL so a refresh
        // doesn't try to replay it (it would just fail the second time,
        // but this avoids the confusing error).
        params.delete('magic')
        const query = params.toString()
        window.history.replaceState({}, '', `${window.location.pathname}${query ? `?${query}` : ''}`)

        if (cancelled) return

        if (result.ok && result.profile) {
          saveMemberProfile(result.profile)
          await setCustomerEmail(result.profile.email)
          // Fires once per actual magic-link verification (a genuine new
          // sign-in/registration moment) -- NOT on the "existing saved
          // profile found" branch below, which would refire Lead on every
          // repeat visit from an already-registered browser.
          trackEvent('Lead', { content_name: 'Modules Hub Registration' })
          setStatus('registered')
        } else {
          setLinkError('Link sudah kedaluwarsa atau sudah dipakai. Silakan minta link baru.')
          setStatus('unregistered')
        }
        return
      }

      const existing = loadMemberProfile()
      setStatus(existing.email.trim().length > 0 ? 'registered' : 'unregistered')
    }

    run()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (status === 'checking') {
    return <GateChecking />
  }

  if (status === 'unregistered') {
    return <RegisterScreen initialProfile={readQueryProfile()} errorMessage={linkError} />
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
