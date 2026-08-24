import { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Lock, Sparkles } from 'lucide-react'
import { MODULES_HUB_URL } from '../config/modulesHubConfig'
import { allModules, module1 } from '../data/moduleMapping'
import Logo from './Logo'
import type { DiagnosticResult } from '../types/diagnostic'
import type { Lead } from '../types/lead'

interface ProgramScreenProps {
  lead: Lead
  result: DiagnosticResult
  onBack: () => void
}

// Routes into the (currently free, unlocked-for-beta) Modules Hub. This is
// the only place in the funnel that opens the Hub now — the report's
// "Belajar Memperbaiki Sendiri" card sends people here first instead of
// straight out to the Hub, so the 9-module catalog and pricing get a fair
// look before anyone leaves the funnel.
function openModulesHub() {
  window.open(MODULES_HUB_URL, '_blank', 'noopener,noreferrer')
}

const PAID_MODULE_PRICE = 'Rp199rb'
const PAID_MODULE_ORIGINAL_PRICE = 'Rp499rb'
const BUNDLE_PRICE = 'Rp999rb'
const BUNDLE_ORIGINAL_PRICE = 'Rp3.992rb'

export default function ProgramScreen({ lead, result, onBack }: ProgramScreenProps) {
  const [hubClicked, setHubClicked] = useState(false)

  const recommendedModules = allModules.filter((mod) => result.recommendedModules.includes(mod.module))
  const otherModules = allModules.filter((mod) => !result.recommendedModules.includes(mod.module))

  const handleOpenHub = () => {
    openModulesHub()
    setHubClicked(true)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-2xl px-5 py-8 sm:py-12">
        {/* Letterhead */}
        <div className="mb-8 flex items-start justify-between">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onBack}
            className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-slate-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Kembali ke Laporan
          </button>
        </div>

        {/* Hero */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
            <Sparkles className="h-3.5 w-3.5" />
            Effortless System
          </p>
          <h1 className="mb-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            {recommendedModules.length} Modul Ini Langsung Menjawab Temuan di Laporan {lead.businessName}
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Effortless System adalah 9 modul micro-learning yang jalan dari titik kebocoran yang sama
            dengan yang baru Anda lihat di laporan — bukan kursus umum yang mulai dari nol.
          </p>
        </div>

        {/* Recommended modules */}
        {recommendedModules.length > 0 && (
          <section className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Direkomendasikan dari Laporan Anda
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {recommendedModules.map((mod, index) => (
                <div
                  key={mod.module}
                  className={`flex items-center gap-4 p-4 sm:p-5 ${
                    index !== recommendedModules.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {mod.module}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">{mod.moduleName}</p>
                  </div>
                  <div className="shrink-0 text-xs font-bold text-brand-600">
                    {mod.module === module1.module ? 'Gratis' : PAID_MODULE_PRICE}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Full catalog */}
        <section className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-600">
            Semua 9 Modul Effortless System
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {allModules.map((mod) => {
              const isRecommended = result.recommendedModules.includes(mod.module)
              const isFree = mod.module === module1.module
              return (
                <div
                  key={mod.module}
                  className={`flex items-start gap-3 rounded-xl border p-4 ${
                    isRecommended ? 'border-brand-200 bg-brand-50' : 'border-slate-200 bg-white'
                  }`}
                >
                  {isFree ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  ) : (
                    <Lock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  )}
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-400">Modul {mod.module}</p>
                    <p className="text-sm font-semibold text-slate-900">{mod.moduleName}</p>
                  </div>
                </div>
              )
            })}
          </div>
          {otherModules.length > 0 && recommendedModules.length > 0 && (
            <p className="mt-3 text-xs text-slate-400">
              Modul lain di luar temuan spesifik Anda tetap terbuka — banyak yang pakai untuk
              masalah yang belum muncul di asesmen ini.
            </p>
          )}
        </section>

        {/* Pricing / CTA */}
        <div className="rounded-2xl bg-brand-600 p-6 text-center shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-100">
            Modul 1 Gratis Selamanya
          </p>
          <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">
            8 Modul Lainnya, Satu Harga Bundel
          </h2>
          <div className="mb-5 flex items-baseline justify-center gap-2">
            <span className="text-sm text-brand-200 line-through">{BUNDLE_ORIGINAL_PRICE}</span>
            <span className="text-3xl font-bold text-white">{BUNDLE_PRICE}</span>
          </div>
          <p className="mb-6 text-sm text-brand-100">
            Atau {PAID_MODULE_PRICE} per modul (dari {PAID_MODULE_ORIGINAL_PRICE}) kalau cuma mau ambil
            yang paling relevan dulu. Harga dan pembelian ada di dalam Modules Hub.
          </p>
          <button
            type="button"
            onClick={handleOpenHub}
            className="mx-auto flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
          >
            Buka Modules Hub
            <ArrowRight className="h-5 w-5" />
          </button>
          {hubClicked && (
            <p className="mt-3 text-xs text-brand-100">Modules Hub terbuka di tab baru.</p>
          )}
        </div>
      </div>
    </div>
  )
}
