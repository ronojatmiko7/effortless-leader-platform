import { CheckCircle2, ChevronRight, Lock } from 'lucide-react'
import { chapters } from '../content/chapters'
import { useProgressStore } from '../progress/ProgressContext'

interface ModuleHomeProps {
  onSelectChapter: (chapterId: string) => void
}

export default function ModuleHome({ onSelectChapter }: ModuleHomeProps) {
  const { isChapterComplete, isChapterUnlocked } = useProgressStore()

  const completedCount = chapters.filter((chapter) => isChapterComplete(chapter.id)).length

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Modul 5 · SOP Optimization & Usability Redesign
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">Ringkasan Modul</h1>
          <p className="mt-2 text-sm text-slate-500">
            {completedCount} dari {chapters.length} bab selesai
          </p>
          <div className="mx-auto mt-3 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${(completedCount / chapters.length) * 100}%` }}
            />
          </div>
        </header>

        <div className="flex flex-col gap-3">
          {chapters.map((chapter) => {
            const completed = isChapterComplete(chapter.id)
            const unlocked = isChapterUnlocked(chapter.id)

            return (
              <button
                key={chapter.id}
                type="button"
                disabled={!unlocked}
                onClick={() => unlocked && onSelectChapter(chapter.id)}
                className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${
                  completed
                    ? 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100'
                    : unlocked
                      ? 'cursor-pointer border-slate-200 bg-white shadow-sm hover:border-indigo-300 hover:bg-indigo-50'
                      : 'cursor-not-allowed border-slate-100 bg-slate-100 opacity-60'
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    completed
                      ? 'bg-emerald-600 text-white'
                      : unlocked
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {completed ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : unlocked ? (
                    chapter.number
                  ) : (
                    <Lock className="h-4 w-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Bab {chapter.number}
                  </p>
                  <h2
                    className={`text-base font-bold sm:text-lg ${unlocked ? 'text-slate-900' : 'text-slate-500'}`}
                  >
                    {chapter.title}
                  </h2>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${unlocked ? 'text-slate-600' : 'text-slate-400'}`}
                  >
                    {chapter.description}
                  </p>
                  <p className="mt-2 text-xs font-semibold">
                    {completed ? (
                      <span className="text-emerald-700">Selesai — klik untuk membuka lagi</span>
                    ) : unlocked ? (
                      <span className="text-indigo-600">Terbuka · Lanjutkan</span>
                    ) : (
                      <span className="text-slate-400">Selesaikan Bab {chapter.number - 1} dulu</span>
                    )}
                  </p>
                </div>
                {unlocked && <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-slate-300" />}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
