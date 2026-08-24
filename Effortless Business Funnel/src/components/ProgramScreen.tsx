import { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Lock, Sparkles, XCircle } from 'lucide-react'
import { MODULES_HUB_URL } from '../config/modulesHubConfig'
import { allModules, module1 } from '../data/moduleMapping'
import { diagnosticQuestions } from '../data/diagnosticQuestions'
import masterCover from '../assets/covers/master-cover.png'
import Logo from './Logo'
import type { DiagnosticResult, FlaggedQuestion } from '../types/diagnostic'
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

// Same convention as ReportScreen.tsx's findingDescription: anchor strings
// are stored as "N = <description>" (verbatim from the source BARS scale),
// strip the leading "N = " since the score is shown separately elsewhere.
function findingDescription(questionId: number, score: number): string {
  const question = diagnosticQuestions.find((q) => q.id === questionId)
  const anchor = question?.anchors[score - 1]
  return anchor ? anchor.replace(/^\d+\s*=\s*/, '') : ''
}

const PAID_MODULE_PRICE = 'Rp199rb'
const PAID_MODULE_ORIGINAL_PRICE = 'Rp499rb'
const BUNDLE_PRICE = 'Rp999rb'
const BUNDLE_ORIGINAL_PRICE = 'Rp3.992rb'

// Bundle covers modules 2-9 (8 modules); module 1 is free and not part of
// the math. Computed instead of hardcoded so the savings line can never
// drift out of sync with the two price constants above.
const PAID_MODULE_ORIGINAL_NUM = 499
const BUNDLE_PRICE_NUM = 999
const BUNDLE_MODULE_COUNT = 8
const BUNDLE_SAVINGS = PAID_MODULE_ORIGINAL_NUM * BUNDLE_MODULE_COUNT - BUNDLE_PRICE_NUM
const BUNDLE_SAVINGS_LABEL = `Rp${BUNDLE_SAVINGS.toLocaleString('id-ID')}rb`

// Common false beliefs that keep business owners sitting on the exact
// symptoms the 13-question diagnostic flags. Each one points at the module
// that actually addresses it (module numbers match moduleMapping.ts), so
// this section doubles as a preview of what's inside instead of a generic
// motivational list.
const BELIEF_SHIFTS: { myth: string; fact: string; module: number }[] = [
  {
    myth: 'Bisnis 19-99 karyawan belum butuh KPI yang rapi, feeling pemilik masih cukup buat jalanin semuanya.',
    fact: 'Feeling pemilik itu justru yang bikin tim nggak tahu ukuran suksesnya apa. KPI yang jelas bukan menambah beban administrasi, tapi membuat semua orang bergerak ke arah yang sama tanpa Anda harus menjelaskan ulang tiap minggu.',
    module: 2,
  },
  {
    myth: 'SOP cukup dibuat sekali, sisanya tinggal dijalankan tim selamanya.',
    fact: 'SOP yang tidak pernah direview lama-lama ditinggalkan, walau dokumennya rapi di folder. SOP yang benar-benar jalan itu yang hidup: dicek ulang, diperbarui, dan gampang diakses saat tim kerja beneran.',
    module: 5,
  },
  {
    myth: 'Serah terima kerja antar departemen itu urusan operasional, bukan urusan pemilik bisnis.',
    fact: 'Proses yang macet antar tim biasanya tetap balik ke meja Anda juga, cuma lebih telat dan lebih mahal. Proses yang dirancang jelas dari awal justru yang bikin Anda tidak perlu turun tangan tiap ada gesekan.',
    module: 4,
  },
  {
    myth: 'Review kinerja tim setahun sekali itu standar di mana-mana, jadi tidak perlu diubah.',
    fact: 'Setahun sekali terlalu jarang untuk menangkap masalah saat masih kecil. Feedback rutin tiap bulan yang membuat masalah kinerja ketahuan sebelum berubah jadi krisis, atau resign yang datang tiba-tiba.',
    module: 6,
  },
  {
    myth: 'Kalau mau ubah cara kerja tim, tinggal umumkan sekali di grup, selesai.',
    fact: 'Perubahan yang cuma diumumkan tanpa dikawal biasanya kembali ke kebiasaan lama dalam hitungan minggu. Perubahan yang benar-benar melekat itu yang dikelola pelan-pelan, bukan yang diumumkan sekali lalu ditinggal.',
    module: 8,
  },
  {
    myth: 'AI itu urusan perusahaan besar, bisnis seukuran ini belum waktunya.',
    fact: 'Bisnis seukuran ini yang justru paling terasa untungnya. Satu proses yang biasanya menyita waktu tim seharian bisa dipangkas jauh lebih cepat, asal tahu cara memakainya dengan benar.',
    module: 9,
  },
]

export default function ProgramScreen({ lead, result, onBack }: ProgramScreenProps) {
  const [hubClicked, setHubClicked] = useState(false)

  const recommendedModules = allModules.filter((mod) => result.recommendedModules.includes(mod.module))

  const handleOpenHub = () => {
    openModulesHub()
    setHubClicked(true)
  }

  const findingsForModule = (moduleNumber: number): FlaggedQuestion[] =>
    result.flaggedQuestions.filter((flag) => flag.module === moduleNumber)

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

        {/* 1-4. Hero: headline, subheadline, cover, app description */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Master cover — the app's official hero image (src/assets/covers/master-cover.png).
              Reuse this same asset for other screens' hero art instead of
              generating a new cover; it's meant to be the one canonical
              "Effortless System Learning App" cover across the funnel. */}
          <img
            src={masterCover}
            alt="Effortless Business — Effortless System Learning App"
            className="w-full h-auto"
          />

          <div className="p-6 sm:p-8">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
              <Sparkles className="h-3.5 w-3.5" />
              Effortless System
            </p>
            <h1 className="mb-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Perbaiki Titik Kebocoran Bisnis Anda, Tanpa Nonton Video Berjam-Jam atau Baca Buku Setebal
              Bata
            </h1>
            <p className="mb-4 flex items-start gap-1.5 text-sm font-semibold text-brand-700 sm:text-base">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              Tiap modul didesain kelar sekitar 15 menit, cukup untuk menangkap inti masalah dan tahu
              persis langkah pertama yang harus diambil.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Effortless System Learning App bukan kursus video atau tumpukan e-book yang harus
              ditamatkan dulu sebelum bisa action. Ini aplikasi microlearning interaktif yang didesain
              khusus untuk entrepreneur yang waktunya sudah habis untuk operasional harian: tiap modul
              dipecah jadi kartu-kartu ringkas plus latihan kerja yang langsung Anda isi untuk bisnis
              Anda sendiri, bukan studi kasus bisnis orang lain.
            </p>
          </div>
        </div>

        {/* 5. Belief shifting */}
        <section className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
            Anggapan yang Sering Bikin Kebocoran Dibiarkan
          </p>
          <h2 className="mb-4 text-lg font-bold text-slate-900">
            Kalau Anda Percaya Salah Satu Ini, Itu Sebabnya Belum Diperbaiki
          </h2>
          <div className="space-y-3">
            {BELIEF_SHIFTS.map((item) => {
              const mod = allModules.find((m) => m.module === item.module)
              return (
                <div key={item.myth} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <p className="mb-2 flex items-start gap-2 text-sm text-slate-400">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                    <span>{item.myth}</span>
                  </p>
                  <p className="flex items-start gap-2 text-sm font-medium text-slate-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item.fact}</span>
                  </p>
                  {mod && (
                    <p className="mt-3 text-xs font-semibold text-brand-600">
                      Dibahas di Modul {mod.module}: {mod.moduleName}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* 6. Full catalog */}
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
        </section>

        {/* 7. Recommended modules as the solution to their findings */}
        {recommendedModules.length > 0 && (
          <section className="mb-8">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Direkomendasikan dari Laporan Anda
            </p>
            <h2 className="mb-3 text-lg font-bold text-slate-900">
              {recommendedModules.length} Modul Ini Langsung Menjawab Temuan di Laporan {lead.businessName}
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {recommendedModules.map((mod, index) => {
                const findings = findingsForModule(mod.module)
                return (
                  <div
                    key={mod.module}
                    className={`p-4 sm:p-5 ${
                      index !== recommendedModules.length - 1 ? 'border-b border-slate-100' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
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
                    {findings.length > 0 && (
                      <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
                        {findings.map((flag) => (
                          <p key={flag.questionId} className="text-xs leading-relaxed text-slate-500">
                            <span className="font-semibold text-slate-600">{flag.area}:</span>{' '}
                            {findingDescription(flag.questionId, flag.score)}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* 8. Pricing / CTA */}
        <div className="rounded-2xl bg-brand-600 p-6 text-center shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-100">
            Modul 1 Gratis Selamanya
          </p>
          <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">
            8 Modul Lainnya, Satu Harga Bundel
          </h2>
          <div className="mb-2 flex items-baseline justify-center gap-2">
            <span className="text-sm text-brand-200 line-through">{BUNDLE_ORIGINAL_PRICE}</span>
            <span className="text-3xl font-bold text-white">{BUNDLE_PRICE}</span>
          </div>
          <p className="mb-5 text-xs font-semibold text-brand-100">
            Hemat {BUNDLE_SAVINGS_LABEL} dibanding beli satuan
          </p>
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
