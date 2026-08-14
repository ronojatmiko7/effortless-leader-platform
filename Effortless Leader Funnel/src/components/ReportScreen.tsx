import { useState } from 'react'
import { AlertTriangle, Calendar, RotateCcw, ShoppingCart } from 'lucide-react'
import { allModules } from '../data/moduleMapping'
import type { DiagnosticResult, DiagnosticSection } from '../types/diagnostic'
import type { Lead } from '../types/lead'

interface ReportScreenProps {
  lead: Lead
  result: DiagnosticResult
  onRestart: () => void
}

const SECTION_LABEL: Record<DiagnosticSection, string> = {
  Output: 'Output (Hasil)',
  Proses: 'Proses (Sistem Kerja)',
  Input: 'Input (Bahan Baku)',
}

const SECTION_ORDER: DiagnosticSection[] = ['Output', 'Proses', 'Input']

function firstName(fullName: string) {
  return fullName.trim().split(/\s+/)[0] || fullName
}

// TODO(payments): wire to a real checkout (Midtrans/Xendit) once picked.
function purchaseModules(moduleNumbers: number[]) {
  console.log('[purchaseModules] stub — no real checkout wired yet:', moduleNumbers)
}

// TODO(scheduling): swap for a real Calendly embed once the discovery-call event type exists.
function bookDiscoveryCall(flaggedServiceNames: string[]) {
  console.log('[bookDiscoveryCall] stub — no real booking wired yet:', flaggedServiceNames)
}

export default function ReportScreen({ lead, result, onRestart }: ReportScreenProps) {
  const [purchaseClicked, setPurchaseClicked] = useState(false)
  const [bookingClicked, setBookingClicked] = useState(false)

  const { redFlagCount, averageMaturity, domainAverages, flaggedQuestions, recommendedModules } = result
  const isSystemic = redFlagCount > 3

  const recommendedModuleDetails = recommendedModules.map((moduleNumber) => {
    const info = allModules.find((m) => m.module === moduleNumber)
    const flags = flaggedQuestions.filter((flag) => flag.module === moduleNumber)
    return {
      module: moduleNumber,
      moduleName: info?.moduleName ?? '',
      isAlwaysIncluded: moduleNumber === 1,
      flags,
    }
  })

  const summaryText = isSystemic
    ? `${lead.businessName} punya ${redFlagCount} titik bocor operasional yang saling terkait. Ini bukan satu masalah kecil — ini pola. Beberapa bagian dari sistem kerja Anda perlu dibenahi bareng-bareng, bukan ditambal satu-satu.`
    : redFlagCount > 0
      ? `${lead.businessName} secara umum masih jalan, tapi ada ${redFlagCount} titik spesifik yang bocor dan bikin Anda kerja lebih keras dari seharusnya. Kabar baiknya: ini bisa dibenahi terarah, tidak perlu bongkar semuanya.`
      : `${lead.businessName} skornya solid di semua domain. Tidak ada red flag berat — pertahankan, dan pakai Modul 1 untuk mengunci kebiasaan diagnosis rutin supaya tetap begini.`

  const purchaseLabel = `Beli Modul ${recommendedModules.join(', ')}`
  const flaggedModuleNames = recommendedModuleDetails
    .filter((m) => !m.isAlwaysIncluded)
    .map((m) => m.moduleName)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-2xl px-5 py-8 sm:py-12">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Hasil Diagnosis Anda
          </span>
          <button
            type="button"
            onClick={onRestart}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-slate-600"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Ulangi diagnosis
          </button>
        </div>

        <h1 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          Ini kondisi {lead.businessName} sekarang, {firstName(lead.name)}
        </h1>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-base leading-relaxed text-slate-700">{summaryText}</p>

          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">
            <div>
              <span className="block text-xs text-slate-500">Total Red Flag</span>
              <strong className="text-xl font-bold text-red-600">{redFlagCount}</strong>
            </div>
            <div>
              <span className="block text-xs text-slate-500">Tingkat Kematangan</span>
              <strong className="text-xl font-bold text-slate-900">{averageMaturity} / 4.0</strong>
            </div>
            <div>
              <span className="block text-xs text-slate-500">Skala Perbaikan</span>
              <strong className="text-xl font-bold text-brand-600">
                {isSystemic ? 'Sistemik' : 'Terarah'}
              </strong>
            </div>
          </div>
        </div>

        <h2 className="mb-3 text-lg font-bold text-slate-900">Rincian per Domain</h2>
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {SECTION_ORDER.map((section) => {
            const avg = domainAverages[section]
            const isHealthy = avg >= 2.5
            return (
              <div key={section} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">{SECTION_LABEL[section]}</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">{avg.toFixed(1)}</p>
                <p
                  className={`mt-1 text-xs font-semibold ${
                    isHealthy ? 'text-emerald-600' : 'text-red-600'
                  }`}
                >
                  {isHealthy ? 'Cukup Stabil' : 'Perlu Perhatian'}
                </p>
              </div>
            )
          })}
        </div>

        {flaggedQuestions.length > 0 && (
          <>
            <h2 className="mb-3 text-lg font-bold text-slate-900">Titik Bocor yang Ketahuan</h2>
            <div className="mb-8 space-y-3">
              {flaggedQuestions.map((flag) => (
                <div
                  key={flag.questionId}
                  className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600">
                    <AlertTriangle className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-red-900">
                      [{SECTION_LABEL[flag.section]}] {flag.area}
                    </p>
                    <p className="mt-0.5 text-xs text-red-800">{flag.question}</p>
                    <p className="mt-1.5 text-xs font-semibold text-red-700">
                      Skor {flag.score} → Modul {flag.module}: {flag.moduleName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <h2 className="mb-3 text-lg font-bold text-slate-900">Modul yang Kami Rekomendasikan</h2>
        <div className="mb-8 space-y-3">
          {recommendedModuleDetails.map((m) => (
            <div key={m.module} className="rounded-xl border border-brand-200 bg-brand-50 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-brand-900">
                  Modul {m.module}: {m.moduleName}
                </p>
                {m.isAlwaysIncluded && (
                  <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                    Wajib
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-brand-800">
                {m.isAlwaysIncluded
                  ? 'Fondasi cara berpikir diagnosis — semua orang mulai dari sini.'
                  : `Direkomendasikan karena: ${m.flags.map((f) => f.area).join(', ')}.`}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-1 text-lg font-bold text-slate-900">Langkah Selanjutnya</h2>
          <p className="mb-5 text-sm text-slate-600">
            Dua pilihan — kerjakan sendiri pakai modulnya, atau ngobrol dulu sama kami soal titik
            bocor Anda secara spesifik.
          </p>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => {
                purchaseModules(recommendedModules)
                setPurchaseClicked(true)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              <ShoppingCart className="h-5 w-5" />
              {purchaseLabel}
            </button>
            {purchaseClicked && (
              <p className="text-center text-xs text-slate-500">
                Checkout belum aktif — ini masih placeholder. Tim kami akan hubungi Anda begitu
                pembayaran sudah bisa diproses.
              </p>
            )}

            <button
              type="button"
              onClick={() => {
                bookDiscoveryCall(flaggedModuleNames)
                setBookingClicked(true)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              <Calendar className="h-5 w-5" />
              Booking Discovery Call
            </button>
            {bookingClicked && (
              <p className="text-center text-xs text-slate-500">
                Booking belum aktif — ini masih placeholder. Saat aktif, sesi ini akan langsung
                fokus ke {flaggedModuleNames.length > 0 ? flaggedModuleNames.join(', ') : 'titik bocor Anda'},
                bukan basa-basi jualan umum.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
