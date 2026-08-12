import { useState } from 'react'
import DeckViewer from './components/DeckViewer'
import ModuleHome from './components/ModuleHome'
import { WorkbookProvider } from './workbook/WorkbookContext'
import { ProgressProvider, useProgressStore } from './progress/ProgressContext'
import { chapters } from './content/chapters'

const chapterHref = (chapterId: string) => `#${chapterId}`

function AppShell() {
  const [activeView, setActiveView] = useState('#home')
  const { isChapterUnlocked, markChapterComplete } = useProgressStore()

  const currentChapter = chapters.find((chapter) => chapterHref(chapter.id) === activeView)
  const currentCards = currentChapter?.cards

  const handleCtaNavigate = (href: string) => {
    if (href === '#home') {
      setActiveView('#home')
      return
    }
    const isKnownChapter = chapters.some((chapter) => chapterHref(chapter.id) === href)
    if (isKnownChapter) {
      setActiveView(href)
    }
  }

  const handleSelectChapter = (chapterId: string) => {
    if (!isChapterUnlocked(chapterId)) return
    setActiveView(chapterHref(chapterId))
  }

  const handleDeckComplete = () => {
    if (currentChapter) {
      markChapterComplete(currentChapter.id)
    }
    setActiveView('#home')
  }

  if (activeView === '#home' || !currentCards) {
    return <ModuleHome onSelectChapter={handleSelectChapter} />
  }

  return (
    <DeckViewer
      key={activeView}
      cards={currentCards}
      onCtaNavigate={handleCtaNavigate}
      onDeckComplete={handleDeckComplete}
    />
  )
}

function App() {
  return (
    <WorkbookProvider>
      <ProgressProvider>
        <AppShell />
      </ProgressProvider>
    </WorkbookProvider>
  )
}

export default App
