import { useState } from 'react'
import DeckViewer from './components/DeckViewer'
import ModuleHome from './components/ModuleHome'
import HubHome from './components/HubHome'
import { WorkbookProvider } from './workbook/WorkbookContext'
import { ProgressProvider, useProgressStore } from './progress/ProgressContext'
import { modules } from './data/modules'
import { hasModuleAccess } from './access/moduleAccess'

type View =
  | { level: 'hub' }
  | { level: 'module-home'; moduleId: string }
  | { level: 'chapter'; moduleId: string; chapterId: string }

const chapterHref = (chapterId: string) => `#${chapterId}`

function ModuleShell({
  moduleId,
  view,
  onBackToHub,
  onSelectChapter,
  onDeckComplete,
}: {
  moduleId: string
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
        onCtaNavigate={handleCtaNavigate}
        onDeckComplete={handleDeckComplete}
      />
    )
  }

  return (
    <ModuleHome
      moduleTitle={module.title}
      chapters={module.chapters}
      onSelectChapter={onSelectChapter}
      onBackToHub={onBackToHub}
    />
  )
}

function App() {
  const [view, setView] = useState<View>({ level: 'hub' })

  const handleSelectModule = (moduleId: string) => {
    const module = modules.find((candidate) => candidate.id === moduleId)
    if (!module || !hasModuleAccess(module.number)) return
    setView({ level: 'module-home', moduleId })
  }

  const handleBackToHub = () => setView({ level: 'hub' })

  if (view.level === 'hub') {
    return <HubHome onSelectModule={handleSelectModule} />
  }

  const module = modules.find((candidate) => candidate.id === view.moduleId)
  if (!module || !hasModuleAccess(module.number)) {
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
      <ProgressProvider
        key={module.id}
        moduleId={module.id}
        chapterIds={module.chapters.map((chapter) => chapter.id)}
      >
        <ModuleShell
          moduleId={module.id}
          view={view}
          onBackToHub={handleBackToHub}
          onSelectChapter={handleSelectChapter}
          onDeckComplete={handleDeckComplete}
        />
      </ProgressProvider>
    </WorkbookProvider>
  )
}

export default App
