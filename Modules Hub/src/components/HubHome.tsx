import { CheckCircle2, ChevronRight, Lock, ShoppingBag } from 'lucide-react'
import { modules, type ModuleMeta } from '../data/modules'
import { hasModuleAccess } from '../access/moduleAccess'
import type { CompletedChapters } from '../progress/ProgressContext'
import Logo from './Logo'

interface HubHomeProps {
  onSelectModule: (moduleId: string) => void
}

// TODO: replace with real per-module pricing once the entitlement/purchase
// backend lands (see funnel-launch-checklist.md section 4-5). Module 1 is
// always free; every other module is Rp199rb standalone / Rp999rb bundle.
const MODULE_PRICE_LABEL = 'Rp199rb'

// Excludes intro/outro chapters from both the numerator and denominator —
// same "X dari 8 bab selesai" rule as ModuleHome.tsx (product decision
// Aug 18): intro/outro are real chapters in the list but don't count toward
// this summary, now that every module has 10 chapters total (intro,
// Bab 1-8, outro) instead of 8.
function realChapters(module: ModuleMeta) {
  return module.chapters.filter((chapter) => (chapter.kind ?? 'chapter') === 'chapter')
}

function readCompletedCount(module: ModuleMeta): number {
  try {
    const raw = window.localStorage.getItem(`prediagnosis-progress-${module.id}`)
    if (!raw) return 0
    const completed = JSON.parse(raw) as CompletedChapters
    return realChapters(module).filter((chapter) => completed[chapter.id]).length
  } catch {
    return 0
  }
}

export default function HubHome({ onSelectModule }: HubHomeProps) {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
        <header className="flex flex-col items-center text-center">
          <Logo size="sm" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-600">Effortless System</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">Semua Modul Anda</h1>
          <p className="mt-2 text-sm text-slate-500">Pilih modul untuk lanjut belajar.</p>
        </header>

        <div className="flex flex-col gap-3">
          {modules.map((module) => {
            const unlocked = hasModuleAccess(module.number)
            const completedCount = readCompletedCount(module)
            const totalRealChapters = realChapters(module).length

            return (
              <button
                key={module.id}
                type="button"
                disabled={!unlocked}
                onClick={() => unlocked && onSelectModule(module.id)}
                className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${
                  unlocked
                    ? 'cursor-pointer border-slate-200 bg-white shadow-sm hover:border-brand-300 hover:bg-brand-50'
                    : 'cursor-not-allowed border-brand-100 bg-brand-50/40'
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    unlocked ? 'bg-brand-100 text-brand-700' : 'bg-brand-100 text-brand-400'
                  }`}
                >
                  {unlocked ? module.number : <Lock className="h-4 w-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Modul {module.number}
                  </p>
                  <h2
                    className={`text-base font-bold sm:text-lg ${unlocked ? 'text-slate-900' : 'text-slate-700'}`}
                  >
                    {module.title}
                  </h2>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${unlocked ? 'text-slate-600' : 'text-slate-500'}`}
                  >
                    {module.description}
                  </p>
                  <p className="mt-2.5 text-xs font-semibold">
                    {unlocked ? (
                      <span className="flex items-center gap-1 text-brand-600">
                        {completedCount === totalRealChapters && completedCount > 0 && (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        )}
                        {completedCount}/{totalRealChapters} bab selesai
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold text-white shadow-sm">
                        <ShoppingBag className="h-3 w-3" />
                        Buka modul ini &middot; {MODULE_PRICE_LABEL}
                      </span>
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
