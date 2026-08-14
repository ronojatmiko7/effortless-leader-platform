import { CheckCircle2, ChevronRight, Lock } from 'lucide-react'
import { modules, type ModuleMeta } from '../data/modules'
import { hasModuleAccess } from '../access/moduleAccess'
import type { CompletedChapters } from '../progress/ProgressContext'

interface HubHomeProps {
  onSelectModule: (moduleId: string) => void
}

function readCompletedCount(module: ModuleMeta): number {
  try {
    const raw = window.localStorage.getItem(`prediagnosis-progress-${module.id}`)
    if (!raw) return 0
    const completed = JSON.parse(raw) as CompletedChapters
    return module.chapters.filter((chapter) => completed[chapter.id]).length
  } catch {
    return 0
  }
}

export default function HubHome({ onSelectModule }: HubHomeProps) {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Prediagnosis Modules</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">Semua Modul Anda</h1>
          <p className="mt-2 text-sm text-slate-500">Pilih modul untuk lanjut belajar.</p>
        </header>

        <div className="flex flex-col gap-3">
          {modules.map((module) => {
            const unlocked = hasModuleAccess(module.number)
            const completedCount = readCompletedCount(module)

            return (
              <button
                key={module.id}
                type="button"
                disabled={!unlocked}
                onClick={() => unlocked && onSelectModule(module.id)}
                className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${
                  unlocked
                    ? 'cursor-pointer border-slate-200 bg-white shadow-sm hover:border-indigo-300 hover:bg-indigo-50'
                    : 'cursor-not-allowed border-slate-100 bg-slate-100 opacity-60'
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    unlocked ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {unlocked ? module.number : <Lock className="h-4 w-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Modul {module.number}
                  </p>
                  <h2
                    className={`text-base font-bold sm:text-lg ${unlocked ? 'text-slate-900' : 'text-slate-500'}`}
                  >
                    {module.title}
                  </h2>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${unlocked ? 'text-slate-600' : 'text-slate-400'}`}
                  >
                    {module.description}
                  </p>
                  <p className="mt-2 text-xs font-semibold">
                    {unlocked ? (
                      <span className="flex items-center gap-1 text-indigo-600">
                        {completedCount === module.chapters.length && completedCount > 0 && (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        )}
                        {completedCount}/{module.chapters.length} bab selesai
                      </span>
                    ) : (
                      <span className="text-slate-400">Beli buat buka</span>
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
