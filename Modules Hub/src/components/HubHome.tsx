import { useState, type FormEvent } from 'react'
import {
  CheckCircle2,
  ChevronRight,
  Lock,
  Pencil,
  PlayCircle,
  Search,
  ShoppingBag,
  User,
  X,
} from 'lucide-react'
import { modules, type ModuleMeta } from '../data/modules'
import { useAccess } from '../access/AccessContext'
import { loadMemberProfile, saveMemberProfile, type MemberProfile } from '../access/memberProfile'
import type { CompletedChapters } from '../progress/ProgressContext'
import Logo from './Logo'
import BuyButton from './BuyButton'
import {
  BUNDLE_PRICE_DISCOUNTED_IDR,
  BUNDLE_PRICE_ORIGINAL_IDR,
  FREE_LAUNCH_MODE,
  MODULE_PRICE_DISCOUNTED_IDR,
  MODULE_PRICE_ORIGINAL_IDR,
  formatIdr,
} from '../config/paymentConfig'

interface HubHomeProps {
  onSelectModule: (moduleId: string) => void
}

// Groups modules into a learning-path narrative for the hub page only.
// Doesn't touch chapter unlock order, access rules, or module content.
const PATH_SECTIONS: { name: string; moduleNumbers: number[] }[] = [
  { name: 'Fondasi', moduleNumbers: [1, 2, 3] },
  { name: 'Sistem & Proses', moduleNumbers: [4, 5] },
  { name: 'Tim & Kepemimpinan', moduleNumbers: [6, 7, 8] },
  { name: 'AI & Masa Depan', moduleNumbers: [9] },
]

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

interface ModuleProgress {
  module: ModuleMeta
  fullAccess: boolean
  completed: number
  total: number
  pct: number
}

// Bab 1 of every module previews free (see moduleAccess.ts), so a module
// card is ALWAYS enterable now — `fullAccess` only controls the badge/cover
// styling, not whether clicking works. See PAYMENT_GATEWAY_INTEGRATION_PLAN.md
// section 2.0.
function buildProgress(hasFullModuleAccess: (moduleNumber: number) => boolean): ModuleProgress[] {
  return modules.map((module) => {
    const fullAccess = hasFullModuleAccess(module.number)
    const completed = readCompletedCount(module)
    const total = realChapters(module).length
    return { module, fullAccess, completed, total, pct: total > 0 ? Math.round((completed / total) * 100) : 0 }
  })
}

// Continue-learning target: first module that's genuinely partway through
// (started but not finished) — regardless of full-access, since Bab 1 alone
// can put a module "in progress" now. Returns null when nothing is in
// progress — the card is meant to resume a module, not prompt a fresh
// start.
function findContinueTarget(items: ModuleProgress[]): ModuleProgress | null {
  return items.find((item) => item.completed > 0 && item.completed < item.total) ?? null
}

export default function HubHome({ onSelectModule }: HubHomeProps) {
  const [query, setQuery] = useState('')
  const [member, setMember] = useState<MemberProfile>(() => loadMemberProfile())
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileDraft, setProfileDraft] = useState<MemberProfile>(member)
  const { hasFullModuleAccess, purchasedProducts, setCustomerEmail } = useAccess()
  const items = buildProgress(hasFullModuleAccess)
  const ownedCount = items.filter((item) => item.fullAccess).length
  const displayName = member.name.trim().length > 0 ? member.name : 'Member Area'
  const hasBundleOrCoaching =
    purchasedProducts.includes('bundle-all') || purchasedProducts.includes('coaching-package')

  const openProfileEdit = () => {
    setProfileDraft(member)
    setIsEditingProfile(true)
  }

  const closeProfileEdit = () => setIsEditingProfile(false)

  const handleSaveProfile = (event: FormEvent) => {
    event.preventDefault()
    saveMemberProfile(profileDraft)
    setMember(profileDraft)
    setIsEditingProfile(false)
    // The member profile's email doubles as the purchase-lookup identity
    // (see access/customerIdentity.ts) — saving it here also re-checks
    // access, so someone who already paid sees their modules unlock the
    // moment they fill this in, with no separate "login" step.
    if (profileDraft.email.trim().length > 0) {
      setCustomerEmail(profileDraft.email)
    }
  }
  const totalCompleted = items.reduce((sum, item) => sum + item.completed, 0)
  const totalChapters = items.reduce((sum, item) => sum + item.total, 0)
  const overallPct = totalChapters > 0 ? Math.round((totalCompleted / totalChapters) * 100) : 0
  const continueTarget = findContinueTarget(items)
  const allDone = totalChapters > 0 && totalCompleted === totalChapters

  const normalizedQuery = query.trim().toLowerCase()
  const matchesQuery = (item: ModuleProgress) =>
    normalizedQuery.length === 0 ||
    item.module.title.toLowerCase().includes(normalizedQuery) ||
    item.module.description.toLowerCase().includes(normalizedQuery)

  const sections = PATH_SECTIONS.map((section) => ({
    ...section,
    items: items.filter((item) => section.moduleNumbers.includes(item.module.number) && matchesQuery(item)),
  })).filter((section) => section.items.length > 0)
  const noResults = normalizedQuery.length > 0 && sections.length === 0

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <header className="flex flex-col items-center text-center">
          <Logo size="sm" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-600">Effortless System</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">Semua Modul Anda</h1>
          <p className="mt-2 text-sm text-slate-500">Pilih modul untuk lanjut belajar.</p>
        </header>

        {/* Member area — name/email/WhatsApp are saved locally in the
            browser (see access/memberProfile.ts). Email is also what
            unlocks purchased modules (see access/customerIdentity.ts) —
            there's still no password, "logging in" is just typing the
            email you paid with. */}
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <User className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-slate-900">{displayName}</p>
              <p className="text-xs text-slate-500">
                {ownedCount} dari {items.length} modul dimiliki
              </p>
            </div>
            <button
              type="button"
              onClick={() => (isEditingProfile ? closeProfileEdit() : openProfileEdit())}
              className="shrink-0 rounded-full border border-slate-200 p-2 text-slate-400 transition hover:border-brand-300 hover:text-brand-600"
              aria-label={isEditingProfile ? 'Batalkan edit profil' : 'Edit profil'}
            >
              {isEditingProfile ? <X className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
            </button>
          </div>

          {isEditingProfile && (
            <form onSubmit={handleSaveProfile} className="flex flex-col gap-2.5 border-t border-slate-100 pt-3">
              <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
                Nama
                <input
                  type="text"
                  value={profileDraft.name}
                  onChange={(event) => setProfileDraft((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="Nama Anda"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal text-slate-700 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
                Email {'(dipakai untuk mengecek modul yang sudah dibeli)'}
                <input
                  type="email"
                  value={profileDraft.email}
                  onChange={(event) => setProfileDraft((prev) => ({ ...prev, email: event.target.value }))}
                  placeholder="nama@email.com"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal text-slate-700 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
                WhatsApp
                <input
                  type="tel"
                  value={profileDraft.whatsapp}
                  onChange={(event) => setProfileDraft((prev) => ({ ...prev, whatsapp: event.target.value }))}
                  placeholder="08xxxxxxxxxx"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal text-slate-700 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                />
              </label>
              <div className="mt-1 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeProfileEdit}
                  className="rounded-full px-4 py-2 text-xs font-bold text-slate-500 transition hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-brand-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brand-600"
                >
                  Simpan
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bundle promo — hidden once the customer already owns everything
            (bundle or a coaching-package entitlement). Individual-module
            buying happens inline on ModuleHome once someone hits a
            paywalled chapter; this is the "just buy it all" shortcut. */}
        {!hasBundleOrCoaching && (
          <div className="flex flex-col gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                {FREE_LAUNCH_MODE ? 'Peluncuran terbatas' : 'Hemat paling banyak'}
              </p>
              <h2 className="text-base font-bold text-slate-900 sm:text-lg">Bundle 8 Modul (Modul 2-9)</h2>
              <p className="mt-1 text-xs text-slate-500">
                {FREE_LAUNCH_MODE ? (
                  'Semua modul terbuka gratis untuk semua peserta selama masa peluncuran ini.'
                ) : (
                  <>
                    Buka semua modul sekaligus, hemat{' '}
                    {formatIdr(MODULE_PRICE_DISCOUNTED_IDR * 8 - BUNDLE_PRICE_DISCOUNTED_IDR)} dibanding beli satuan.
                  </>
                )}
              </p>
            </div>
            <BuyButton
              product="bundle-all"
              label="Bundle 8 Modul"
              amountIdr={BUNDLE_PRICE_DISCOUNTED_IDR}
              originalAmountIdr={BUNDLE_PRICE_ORIGINAL_IDR}
              className="sm:w-64"
            />
          </div>
        )}

        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari modul..."
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 shadow-sm outline-none placeholder:text-slate-400 focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
          />
        </div>

        {/* Overall progress across the whole curriculum */}
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(var(--color-brand-500) ${overallPct}%, var(--color-brand-100) ${overallPct}% 100%)`,
            }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xs font-bold text-brand-700">
              {overallPct}%
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-slate-900">Progres Keseluruhan</p>
            <p className="text-xs text-slate-500">
              {totalCompleted} dari {totalChapters} bab selesai di seluruh modul
            </p>
          </div>
        </div>

        {/* Continue / start learning */}
        {continueTarget && !allDone && (
          <button
            type="button"
            onClick={() => onSelectModule(continueTarget.module.id)}
            className="flex items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-left shadow-sm transition hover:border-brand-300 hover:bg-brand-100/60 sm:p-5"
          >
            <PlayCircle className="h-9 w-9 shrink-0 text-brand-500" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Lanjutkan Belajar</p>
              <h2 className="text-base font-bold text-slate-900 sm:text-lg">{continueTarget.module.title}</h2>
              <p className="mt-1 text-xs font-semibold text-brand-600">
                {continueTarget.completed}/{continueTarget.total} bab selesai
              </p>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-brand-400" />
          </button>
        )}

        {allDone && (
          <div className="flex items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-4 shadow-sm sm:p-5">
            <CheckCircle2 className="h-8 w-8 shrink-0 text-brand-500" />
            <div>
              <p className="text-sm font-bold text-slate-900">Semua modul selesai!</p>
              <p className="text-xs text-slate-500">Anda sudah menyelesaikan seluruh kurikulum Effortless System.</p>
            </div>
          </div>
        )}

        {/* Learning path, grouped into sections */}
        {noResults ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center text-sm text-slate-400">
            Tidak ada modul yang cocok dengan &ldquo;{query}&rdquo;.
          </div>
        ) : (
          <div className="flex flex-col gap-7">
            {sections.map((section) => (
              <section key={section.name} className="flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">{section.name}</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <ModuleCard
                      key={item.module.id}
                      item={item}
                      sectionName={section.name}
                      onSelectModule={onSelectModule}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ModuleCard({
  item,
  sectionName,
  onSelectModule,
}: {
  item: ModuleProgress
  sectionName: string
  onSelectModule: (moduleId: string) => void
}) {
  const { module, fullAccess, completed, total, pct } = item
  const isComplete = fullAccess && total > 0 && completed === total

  return (
    <button
      type="button"
      onClick={() => onSelectModule(module.id)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      {/* Cover art — sized to the image's own 4:3 ratio (1448x1086) so the
          full branded title-card (logo, MODUL N pill, title, illustration)
          shows uncropped at any card width, instead of being forced into a
          fixed h-32/h-36 slot. Grayscale/lock badge now just signals
          "not fully unlocked yet" — the card is still clickable, since
          Bab 1 always previews free. */}
      <div className={`relative aspect-[4/3] w-full overflow-hidden ${fullAccess ? '' : 'grayscale'}`}>
        <img src={module.coverImage} alt={module.title} className="h-full w-full object-cover" />

        {!fullAccess && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40">
            <Lock className="h-6 w-6 text-white" />
          </div>
        )}
        {isComplete && (
          <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-600">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2.5 p-4 sm:p-5">
        <div>
          <p className="text-[11px] font-semibold italic text-slate-400">
            {sectionName} &middot; Modul {module.number}
          </p>
          <h2 className={`mt-0.5 text-base font-bold sm:text-lg ${fullAccess ? 'text-slate-900' : 'text-slate-700'}`}>
            {module.title}
          </h2>
          <p className={`mt-1 line-clamp-2 text-sm leading-relaxed ${fullAccess ? 'text-slate-600' : 'text-slate-500'}`}>
            {module.description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          {(fullAccess || completed > 0) && (
            <div className="flex flex-col gap-1">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${pct}%` }} />
              </div>
              <p className="text-xs font-semibold text-slate-500">
                {completed}/{total} bab selesai
              </p>
            </div>
          )}

          <span
            className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold ${
              !fullAccess ? 'bg-brand-500 text-white shadow-sm' : isComplete ? 'bg-brand-50 text-brand-700' : 'bg-slate-900 text-white'
            }`}
          >
            {!fullAccess ? (
              <>
                <ShoppingBag className="h-3.5 w-3.5" />
                Bab 1 gratis &middot;{' '}
                <span className="line-through opacity-60">{formatIdr(MODULE_PRICE_ORIGINAL_IDR)}</span>{' '}
                {formatIdr(MODULE_PRICE_DISCOUNTED_IDR)}
              </>
            ) : isComplete ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5" />
                Selesai &middot; Tinjau Kembali
              </>
            ) : completed > 0 ? (
              <>
                Lanjutkan Belajar
                <ChevronRight className="h-3.5 w-3.5" />
              </>
            ) : (
              <>
                Mulai Belajar
                <ChevronRight className="h-3.5 w-3.5" />
              </>
            )}
          </span>
        </div>
      </div>
    </button>
  )
}
