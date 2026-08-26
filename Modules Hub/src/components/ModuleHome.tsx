import { ArrowLeft, Award, CheckCircle2, ChevronRight, Lock } from 'lucide-react'
import type { ChapterMeta } from '../content/module-1/chapters'
import { useProgressStore } from '../progress/ProgressContext'
import BuyButton from './BuyButton'
import ConsultantStickyBar from './ConsultantStickyBar'
import FreeLaunchBanner from './FreeLaunchBanner'
import { MODULE_PRICE_DISCOUNTED_IDR, MODULE_PRICE_ORIGINAL_IDR } from '../config/paymentConfig'

interface ModuleHomeProps {
  moduleTitle: string
  moduleNumber: number
  coverImage: string
  chapters: ChapterMeta[]
  onSelectChapter: (chapterId: string) => void
  onBackToHub: () => void
}

// Short list label for a chapter entry — used both for its own eyebrow text
// and to name "what you still need to finish" in the locked message below.
function chapterLabel(chapter: ChapterMeta) {
  if (chapter.kind === 'intro') return 'Pendahuluan'
  if (chapter.kind === 'outro') return 'Penutup'
  return `Bab ${chapter.number}`
}

export default function ModuleHome({
  moduleTitle,
  moduleNumber,
  coverImage,
  chapters,
  onSelectChapter,
  onBackToHub,
}: ModuleHomeProps) {
  const { isChapterComplete, isChapterUnlocked, isChapterLockedByPurchase } = useProgressStore()

  // The intro/outro entries are real chapters in the list (10 total: intro,
  // Bab 1-8, outro) but deliberately don't count toward the "X dari 8 bab
  // selesai" summary — that counter is about the 8 numbered chapters only
  // (product decision Aug 18, v3).
  const realChapters = chapters.filter((chapter) => (chapter.kind ?? 'chapter') === 'chapter')
  const completedCount = realChapters.filter((chapter) => isChapterComplete(chapter.id)).length

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-28 pt-8 sm:pb-32 sm:pt-12">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
        <button
          type="button"
          onClick={onBackToHub}
          className="flex items-center gap-1.5 self-start text-xs font-semibold text-slate-500 transition hover:text-brand-600"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Kembali ke semua modul
        </button>

        <img
          src={coverImage}
          alt={moduleTitle}
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
        />

        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{moduleTitle}</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">Ringkasan Modul</h1>
          <p className="mt-2 text-sm text-slate-500">
            {completedCount} dari {realChapters.length} bab selesai
          </p>
          <div className="mx-auto mt-3 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-brand-600 transition-all duration-300"
              style={{ width: `${(completedCount / realChapters.length) * 100}%` }}
            />
          </div>
        </header>

        <FreeLaunchBanner />

        <div className="flex flex-col gap-3">
          {chapters.map((chapter, index) => {
            const completed = isChapterComplete(chapter.id)
            const unlocked = isChapterUnlocked(chapter.id)
            const lockedByPurchase = isChapterLockedByPurchase(chapter.id)
            const previousChapter = index > 0 ? chapters[index - 1] : null

            return (
              <div
                key={chapter.id}
                className={`flex flex-col gap-3 rounded-2xl border p-4 text-left transition sm:p-5 ${
                  completed
                    ? 'border-emerald-200 bg-emerald-50'
                    : unlocked
                      ? 'border-slate-200 bg-white shadow-sm'
                      : lockedByPurchase
                        ? 'border-brand-200 bg-brand-50/40'
                        : 'border-slate-100 bg-slate-100 opacity-60'
                }`}
              >
                <button
                  type="button"
                  disabled={!unlocked}
                  onClick={() => unlocked && onSelectChapter(chapter.id)}
                  className={`flex items-start gap-4 text-left ${
                    unlocked ? 'cursor-pointer' : 'cursor-not-allowed'
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      completed
                        ? 'bg-emerald-600 text-white'
                        : unlocked
                          ? 'bg-brand-100 text-brand-700'
                          : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    {completed ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : unlocked ? (
                      chapter.kind === 'intro' ? (
                        <Award className="h-4 w-4" />
                      ) : chapter.kind === 'outro' ? (
                        <Award className="h-4 w-4" />
                      ) : (
                        chapter.number
                      )
                    ) : (
                      <Lock className="h-4 w-4" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {chapterLabel(chapter)}
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
                        <span className="text-brand-600">Terbuka · Lanjutkan</span>
                      ) : lockedByPurchase ? (
                        <span className="text-brand-600">Beli modul ini untuk melanjutkan</span>
                      ) : (
                        <span className="text-slate-400">
                          Selesaikan {previousChapter ? chapterLabel(previousChapter) : 'bab sebelumnya'} dulu
                        </span>
                      )}
                    </p>
                  </div>
                  {unlocked && <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-slate-300" />}
                </button>

                {/* Purchase-gated (not sequentially-gated) chapter: offer the
                    buy CTA right here instead of a dead end. */}
                {lockedByPurchase && (
                  <BuyButton
                    product={`module-${moduleNumber}`}
                    label={moduleTitle}
                    amountIdr={MODULE_PRICE_DISCOUNTED_IDR}
                    originalAmountIdr={MODULE_PRICE_ORIGINAL_IDR}
                    className="border-t border-brand-100 pt-3"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
      <ConsultantStickyBar />
    </div>
  )
}
