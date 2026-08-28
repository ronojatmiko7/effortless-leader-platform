import { useState } from 'react'
import { ArrowRight, BookOpen, Calendar, RotateCcw, TrendingUp, Users, Workflow } from 'lucide-react'
import { CALENDLY_DIAGNOSTIC_CALL_URL } from '../config/schedulingConfig'
import { diagnosticQuestions } from '../data/diagnosticQuestions'
import { matchesIcp } from '../lib/icpMatch'
import Logo from './Logo'
import type { DiagnosticResult, DiagnosticSection } from '../types/diagnostic'
import type { Lead } from '../types/lead'

interface ReportScreenProps {
  lead: Lead
  result: DiagnosticResult
  onRestart: () => void
  onViewProgram: () => void
}

const SECTION_LABEL: Record<DiagnosticSection, string> = {
  Output: 'Output (Hasil)',
  Proses: 'Proses (Sistem Kerja)',
  Input: 'Input (Bahan Baku)',
}

// Same icon choices as LandingScreen's illustrative score-mockup card, now
// wired to the visitor's own real domainAverages instead of example numbers.
const SECTION_ICON: Record<DiagnosticSection, typeof TrendingUp> = {
  Output: TrendingUp,
  Proses: Workflow,
  Input: Users,
}

const SECTION_ORDER: DiagnosticSection[] = ['Output', 'Proses', 'Input']

// The report shows what's actually happening in the business (their
// answer) — each option's label is already a plain-language description
// (Aug 2026 simplified quiz), so this just finds the option matching
// their chosen score.
function findingDescription(questionId: number, score: number): string {
  const question = diagnosticQuestions.find((q) => q.id === questionId)
  const option = question?.options.find((o) => o.score === score)
  return option?.label ?? ''
}

// Opens the real "Effortless Leader — Diagnostic Call" Calendly event type
// (free, 60 min) in a new tab, prefilled with the lead's name/email so they
// don't retype it. Calendly's public API doesn't support prefilling custom
// question answers via a create/update call, so the specific flagged
// services aren't passed through to Calendly itself yet (a future
// enhancement, not required for this to work today).
function bookDiagnosticCall(lead: Lead) {
  const params = new URLSearchParams({ name: lead.name, email: lead.email })
  window.open(`${CALENDLY_DIAGNOSTIC_CALL_URL}?${params.toString()}`, '_blank', 'noopener,noreferrer')
}

export default function ReportScreen({ lead, result, onRestart, onViewProgram }: ReportScreenProps) {
  const [bookingClicked, setBookingClicked] = useState(false)

  const { redFlagCount, averageMaturity, domainAverages, flaggedQuestions, answers } = result
  const isSystemic = redFlagCount > 3
  const questionsAnswered = Object.keys(answers).length

  // Three-tier read on "Skala Perbaikan" — mirrors the same 0 / 1-3 / 4+
  // red-flag boundaries the verdict headline below already uses, just
  // surfaced as its own labeled stat instead of folding the 0-flag case
  // into "Terarah".
  const repairScale =
    redFlagCount === 0
      ? { label: 'Aman', description: 'Tidak ada indikasi kebocoran', color: 'text-emerald-600' }
      : redFlagCount <= 3
        ? { label: 'Hati-hati', description: 'Ada indikasi kebocoran', color: 'text-amber-600' }
        : { label: 'Bahaya', description: 'Kebocoran sistemik', color: 'text-red-600' }
  // Soft self-selection for the consultant-call CTA only — see icpMatch.ts.
  // The report and the self-serve Modules Hub CTA stay open to everyone
  // regardless of fit; only this card's message changes.
  const isIcpFit = matchesIcp(lead)

  const verdictHeadline = isSystemic
    ? 'Pola Kebocoran yang Saling Terkait'
    : redFlagCount > 0
      ? `${redFlagCount} Titik Kebocoran Spesifik Teridentifikasi`
      : 'Solid di Semua Domain'

  const verdictParagraph = isSystemic
    ? 'Beberapa bagian sistem kerja bisnis Anda bocor secara bersamaan. Ini bukan satu masalah kecil yang berdiri sendiri, melainkan pola yang saling menyeret satu sama lain.'
    : redFlagCount > 0
      ? 'Sebagian besar sistem kerja Anda sudah berjalan baik. Namun ditemukan titik-titik spesifik yang membuat operasional Anda lebih berat dari seharusnya.'
      : 'Skor Anda solid di seluruh domain yang diukur. Tidak ditemukan titik kebocoran signifikan pada asesmen ini.'

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-2xl px-5 py-8 sm:py-12">
        {/* Letterhead */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <Logo size="sm" className="mb-4" />
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Laporan Diagnosis Bisnis
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">{lead.businessName}</h1>
            <p className="mt-1 text-sm text-slate-500">
              Disiapkan untuk {lead.name} &middot; {questionsAnswered} pertanyaan dijawab
            </p>
          </div>
          <button
            type="button"
            onClick={onRestart}
            className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-slate-600"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Ulangi
          </button>
        </div>

        {/* 1. Ringkasan Eksekutif */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
            1. Ringkasan Eksekutif
          </p>
          <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">{verdictHeadline}</h2>
          <p className="text-base leading-relaxed text-slate-700">{verdictParagraph}</p>

          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">
            <div>
              <span className="block text-xs text-slate-500">Total Titik Kebocoran</span>
              <strong className="text-xl font-bold text-slate-900">{redFlagCount}</strong>
            </div>
            <div>
              <span className="block text-xs text-slate-500">Tingkat Kematangan</span>
              <strong className="text-xl font-bold text-slate-900">{averageMaturity} / 4.0</strong>
            </div>
            <div>
              <span className="block text-xs text-slate-500">Skala Perbaikan</span>
              <strong className={`text-xl font-bold ${repairScale.color}`}>{repairScale.label}</strong>
              <p className="mt-0.5 text-xs text-slate-500">{repairScale.description}</p>
            </div>
          </div>
        </section>

        {/* 2. Analisis per Domain */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
            2. Analisis per Domain
          </p>
          <h2 className="mb-5 text-lg font-bold text-slate-900">Skor Kematangan per Domain</h2>
          <div className="space-y-5">
            {SECTION_ORDER.map((section) => {
              const avg = domainAverages[section]
              const isHealthy = avg >= 2.5
              const pct = Math.max(0, Math.min(100, (avg / 4) * 100))
              const Icon = SECTION_ICON[section]
              return (
                <div key={section}>
                  <div className="mb-1.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <span className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <Icon className="h-4 w-4 text-brand-600" />
                      {SECTION_LABEL[section]}
                    </span>
                    <span className="flex items-center gap-2">
                      <strong className="text-sm font-bold text-slate-900">{avg.toFixed(1)} / 4.0</strong>
                      <span
                        className={`text-xs font-semibold ${isHealthy ? 'text-emerald-600' : 'text-amber-600'}`}
                      >
                        {isHealthy ? 'Cukup Stabil' : 'Perlu Perhatian'}
                      </span>
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full transition-[width] ${
                        isHealthy ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 3. Indikasi Kebocoran */}
        {flaggedQuestions.length > 0 && (
          <section className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-600">
              3. Indikasi Kebocoran
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {flaggedQuestions.map((flag, index) => (
                <div
                  key={flag.questionId}
                  className={`flex items-start justify-between gap-4 p-4 sm:p-5 ${
                    index !== flaggedQuestions.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {SECTION_LABEL[flag.section]} &middot; {flag.area}
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {findingDescription(flag.questionId, flag.score)}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                    Skor {flag.score}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Langkah Selanjutnya */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
            4. Langkah Selanjutnya
          </p>
          <p className="mb-5 text-sm text-slate-600">
            Dua cara untuk mulai membenahi ini. Keduanya valid — bedanya cuma siapa yang pegang
            kemudi.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col rounded-xl border border-slate-200 p-5">
              <BookOpen className="mb-3 h-6 w-6 text-brand-600" />
              <p className="mb-1 text-base font-bold text-slate-900">Belajar Memperbaiki Sendiri</p>
              <p className="mb-4 flex-1 text-sm text-slate-600">
                Akses modul pembelajaran yang relevan dengan temuan di atas. Anda yang pegang
                kendali, jalan dengan kecepatan Anda sendiri.
              </p>
              <p className="mb-3 text-xs font-semibold text-emerald-600">Modul pertama gratis.</p>
              <button
                type="button"
                onClick={onViewProgram}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                Lihat Modul Saya
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 p-5">
              <Calendar className="mb-3 h-6 w-6 text-brand-600" />
              <p className="mb-1 text-base font-bold text-slate-900">Bicara Gratis dengan Konsultan Kami</p>
              <p className="mb-4 flex-1 text-sm text-slate-600">
                {isIcpFit
                  ? 'Sesi diagnostic call gratis 60 menit, fokus ke temuan spesifik Anda di atas — bukan basa-basi jualan umum.'
                  : 'Sesi ini kami desain khusus untuk bisnis dengan tim 19-99 karyawan dan omzet di atas Rp5 miliar setahun. Kalau bisnis Anda belum di situ, modul di kiri kemungkinan lebih pas dipakai sekarang — dan tetap gratis.'}
              </p>
              {isIcpFit && isSystemic && (
                <p className="mb-3 text-xs font-semibold text-slate-500">
                  Karena polanya saling terkait, banyak yang di posisi Anda merasa lebih terbantu
                  ngobrol dulu sebelum mulai sendiri.
                </p>
              )}
              <button
                type="button"
                onClick={() => {
                  bookDiagnosticCall(lead)
                  setBookingClicked(true)
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Booking Diagnostic Call Gratis
                <ArrowRight className="h-4 w-4" />
              </button>
              {bookingClicked && (
                <p className="mt-2 text-center text-xs text-slate-400">
                  Jadwal booking terbuka di tab baru.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
