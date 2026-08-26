import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock,
  Gauge,
  Layers,
  Lock,
  PenLine,
  Sparkles,
  Target,
  Wallet,
  XCircle,
} from 'lucide-react'
import { MODULES_HUB_URL } from '../config/modulesHubConfig'
import { allModules, module1 } from '../data/moduleMapping'
import { diagnosticQuestions } from '../data/diagnosticQuestions'
import masterCover from '../assets/covers/master-cover.png'
import Logo from './Logo'
import TestimonialsSection from './TestimonialsSection'
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

// Straight from Strategy Docs/ICP-Value-Proposition-Canvas.docx, section 2
// "Keyakinan yang Membatasi (False Beliefs)" — the self-talk that stops an
// owner from even considering a fix, researched separately from product
// doubts/objections (that's a different section of the same doc, used on
// the report/consultant side instead). Kept close to the source wording:
// the myth is deliberately first-person self-talk ("saya..."), the fact is
// the doc's own reframe. Not every belief maps to one module (some are
// brand-level), so `module` is optional and the tag only renders when set.
const BELIEF_SHIFTS: { myth: string; fact: string; module?: number }[] = [
  {
    myth: 'Sukses itu emang harus bayar mahal. Waktu sama keluarga adalah harga yang emang harus saya bayar.',
    fact: 'Ini keyakinan yang paling ingin dipatahkan lewat semua yang dibangun di sini, bukan lewat slogan. Lewat sistem yang beneran bikin bisnis jalan tanpa harus Anda pegang kendali tiap jam.',
  },
  {
    myth: 'Kalau saya kasih tanggung jawab ke orang lain, kualitasnya pasti turun.',
    fact: 'Sistem yang didesain benar, proses jelas plus SOP yang benar-benar dipakai, justru bikin kualitas lebih konsisten daripada semua tergantung Anda sendirian. Ini bukan kompromi, ini upgrade.',
    module: 4,
  },
  {
    myth: 'Karyawan di sini nggak bisa dipercaya pegang keputusan penting.',
    fact: 'Kepercayaan itu dibangun bertahap lewat standar kompetensi yang jelas, bukan diserahkan sekaligus dalam satu lompatan. Begitu standarnya ada, Anda tahu persis siapa yang siap pegang keputusan apa.',
    module: 7,
  },
  {
    myth: 'Anak buah saya kerja karena butuh duit doang, ngapain saya investasi sistem yang mereka pakai.',
    fact: 'Sistem kompetensi dan penilaian kinerja yang jelas justru yang bikin karyawan biasa punya rasa memiliki terhadap pekerjaannya, bukan sebaliknya.',
    module: 6,
  },
  {
    myth: 'Saya udah coba banyak cara, kayaknya emang bisnis saya yang susah disistemin, bukan caranya yang salah.',
    fact: 'Coba cek lagi: biasanya bukan bisnisnya yang tidak bisa disistemin, tapi SOP yang dulu dibuat lalu ditinggal begitu saja tanpa ada yang mengawal adopsinya di tim. Itu persis yang coba dijawab di sini.',
    module: 8,
  },
  {
    myth: 'Kalau saya nggak pegang kendali penuh, ini bukan bisnis saya lagi.',
    fact: '"Effortless" di sini bukan berarti bisnis lepas kendali. Ini soal lepas dari kerja otot dan heroik pribadi sehari-hari. Kendali strategis tetap di tangan Anda.',
  },
]

// Fitur / Kelebihan / Manfaat for the app itself, distinct from BELIEF_SHIFTS
// (which handles mindset) and the module catalog below (which handles
// content). Each entry grounded in a real, already-built product feature:
// the card-deck chapter format, WorkbookContext's per-business exercises,
// the diagnostic-driven recommendedModules already used elsewhere on this
// screen, HubHome's progress ring/continue-learning card, the pricing
// constants above, and the self-paced (no fixed-schedule) access model.
const FEATURE_HIGHLIGHTS: {
  icon: typeof Layers
  feature: string
  advantage: string
  benefit: string
}[] = [
  {
    icon: Layers,
    feature: 'Tiap modul dipecah jadi kartu-kartu ringkas per bab, bukan video panjang atau bab buku yang harus ditamatkan sekali duduk.',
    advantage: 'Bisa dibuka dan ditutup kapan saja tanpa kehilangan alur, cocok buat waktu yang sering terpotong rapat atau telepon.',
    benefit: 'Anda tetap belajar konsisten tanpa harus korbankan jam kerja atau waktu keluarga buat "duduk khusus belajar".',
  },
  {
    icon: PenLine,
    feature: 'Tiap bab disertai latihan kerja yang Anda isi pakai data dan kondisi bisnis Anda sendiri.',
    advantage: 'Bukan studi kasus bisnis orang lain yang masih harus diterjemahkan dulu ke situasi Anda.',
    benefit: 'Begitu satu bab selesai, Anda sudah punya draft nyata yang siap dipakai, bukan sekadar catatan teori.',
  },
  {
    icon: Target,
    feature: 'Modul yang disarankan langsung diambil dari titik kebocoran spesifik di laporan Cek Kebocoran Anda.',
    advantage: 'Anda tidak perlu menebak dari 9 modul, mana yang harus dibuka duluan.',
    benefit: 'Waktu belajar Anda langsung ke masalah yang paling terasa sekarang, bukan habis di modul yang belum relevan.',
  },
  {
    icon: Gauge,
    feature: 'Dashboard menyimpan progres tiap modul dan menandai persis di bab mana Anda terakhir berhenti.',
    advantage: 'Tidak perlu mengingat-ingat atau mencari ulang bab yang belum selesai tiap kali buka aplikasi.',
    benefit: 'Momentum belajar tetap jalan walau Anda cuma sempat buka aplikasi 10 menit di sela kerja.',
  },
  {
    icon: Wallet,
    feature: 'Modul 1 gratis selamanya, modul 2-9 Rp199rb per modul (dari Rp499rb) atau Rp999rb sekaligus untuk 8 modul.',
    advantage: 'Anda bisa mencoba dulu sebelum mengeluarkan uang, dan harga modul lanjutan jauh di bawah training atau seminar sejenis.',
    benefit: 'Risiko keuangan buat mulai membenahi bisnis jadi kecil, bahkan bisa dicicil per modul sesuai prioritas.',
  },
  {
    icon: CalendarClock,
    feature: 'Tidak ada jadwal kelas atau webinar yang mengikat, akses modul kapan saja begitu dibuka.',
    advantage: 'Tidak perlu menyesuaikan waktu belajar dengan jadwal orang lain.',
    benefit: 'Anda yang tetap pegang kendali atas waktu, bukan aplikasi ini yang menentukan jadwal Anda.',
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
          <div className="p-6 pb-0 text-center sm:p-8 sm:pb-0">
            <p className="mb-2 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
              <Sparkles className="h-3.5 w-3.5" />
              Effortless System
            </p>
            <h1 className="mb-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Perbaiki Titik Kebocoran Bisnis Anda, Tanpa Nonton Video Berjam-Jam atau Baca Buku Setebal
              Bata
            </h1>
            <p className="mb-0 flex items-start justify-center gap-1.5 text-sm font-semibold text-brand-700 sm:text-base">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              Tiap modul didesain kelar sekitar 15 menit, cukup untuk menangkap inti masalah dan tahu
              persis langkah pertama yang harus diambil.
            </p>
          </div>

          {/* Master cover — the app's official hero image (src/assets/covers/master-cover.png).
              Reuse this same asset for other screens' hero art instead of
              generating a new cover; it's meant to be the one canonical
              "Effortless System Learning App" cover across the funnel. */}
          <img
            src={masterCover}
            alt="Effortless Business — Effortless System Learning App"
            className="mt-6 w-full h-auto"
          />

          <div className="p-6 pt-6 sm:p-8 sm:pt-6">
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

        {/* 6. Fitur, Kelebihan & Manfaat (Features / Advantages / Benefits) */}
        <section className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
            Fitur, Kelebihan &amp; Manfaat
          </p>
          <h2 className="mb-4 text-lg font-bold text-slate-900">
            Bukan Cuma Aplikasi Belajar, Ini yang Bikin Bedanya buat Anda
          </h2>
          <div className="space-y-3">
            {FEATURE_HIGHLIGHTS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.feature} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <div className="mb-2 flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <p className="text-sm font-semibold text-slate-800">{item.feature}</p>
                  </div>
                  <div className="space-y-1 pl-6 text-xs leading-relaxed text-slate-500">
                    <p>
                      <span className="font-semibold text-slate-600">Kelebihannya:</span> {item.advantage}
                    </p>
                    <p>
                      <span className="font-semibold text-brand-600">Artinya buat Anda:</span> {item.benefit}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 7. Full catalog */}
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

        {/* 8. Recommended modules as the solution to their findings */}
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
                      <div className="shrink-0 text-right">
                        {mod.module === module1.module ? (
                          <span className="text-xs font-bold text-brand-600">Gratis</span>
                        ) : (
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xs text-slate-400 line-through">
                              {PAID_MODULE_ORIGINAL_PRICE}
                            </span>
                            <span className="text-xs font-bold text-brand-600">{PAID_MODULE_PRICE}</span>
                          </div>
                        )}
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

        {/* 8.5. Testimonials — renders nothing until there's at least one
            approved testimonial, see TestimonialsSection.tsx */}
        <TestimonialsSection />

        {/* 9. Pricing / CTA */}
        <div className="rounded-2xl bg-brand-600 p-6 text-center shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-100">
            Modul 1 Gratis Selamanya
          </p>
          <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">
            Mau Lebih Hemat? Beli Bundling 8 Modul Sekaligus
          </h2>
          <div className="mb-2 flex items-baseline justify-center gap-2">
            <span className="text-sm text-brand-200 line-through">{BUNDLE_ORIGINAL_PRICE}</span>
            <span className="text-3xl font-bold text-white">{BUNDLE_PRICE}</span>
          </div>
          <p className="mb-5 text-xs font-semibold text-brand-100">
            Hemat {BUNDLE_SAVINGS_LABEL} dibanding beli satuan
          </p>
          <p className="mb-6 text-sm text-brand-100">
            Dari total {BUNDLE_ORIGINAL_PRICE} kalau dibeli satuan, jadi cukup {BUNDLE_PRICE} lewat
            bundel. Atau {PAID_MODULE_PRICE} per modul (dari {PAID_MODULE_ORIGINAL_PRICE}) kalau cuma
            mau ambil yang paling relevan dulu. Harga dan pembelian ada di dalam Modules Hub.
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
