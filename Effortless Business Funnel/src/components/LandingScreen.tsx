import { useEffect, useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  Gauge,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Workflow,
  XCircle,
} from 'lucide-react'
import Logo from './Logo'

interface LandingScreenProps {
  onStart: () => void
}

const WHAT_YOU_GET = [
  {
    icon: Gauge,
    title: 'Skor kematangan per domain',
    body: 'Output (hasil), Proses (sistem kerja), Input (bahan baku) — jadi Anda tahu domain mana yang paling rapuh, bukan cuma "bisnis Anda oke atau nggak."',
  },
  {
    icon: Target,
    title: 'Titik kebocoran spesifik',
    body: 'Bukan saran generik "perbaiki SOP Anda," tapi area persis yang keluar dari jawaban Anda sendiri.',
  },
  {
    icon: Compass,
    title: 'Rekomendasi langkah selanjutnya',
    body: 'Modul mana yang paling relevan buat titik kebocoran Anda, supaya Anda tahu mulai dari mana.',
  },
]

const FOR_YOU = [
  'Sudah punya 19-99 karyawan — dibawah atau diatas itu, masalahnya beda dan asesmen cek kebocoran bisnis ini belum relevan.',
  'Omzet tahunan sudah di atas Rp5 miliar — cukup besar untuk mulai bocor tanpa Anda sadar di mana',
  'Capek jadi satu-satunya orang yang bisa jalanin bisnis dari A sampai Z',
  'Masih mau jadi orang tua yang antar-jemput anak sendiri, bukan CEO yang cuma transfer uang jajan dari mobil ke kantor',
]

const NOT_FOR_YOU = [
  'Timnya belum sampai 19 orang — fokus dulu jualan dan cari pasar, sistem sebesar ini belum waktunya',
  'Omzetnya belum tembus Rp5 miliar setahun — masalah Anda lebih ke jualan dan cashflow, bukan sistem kerja',
  'Masih ingin kerja keras 12 jam sehari, 7 hari seminggu, dan kontrol semua aspek bisnis sendiri',
  'Cari solusi instan untuk masalah bisnis tanpa mau lihat akar masalahnya',
]

const HOW_IT_WORKS = [
  { step: '1', title: 'Jawab 13 pertanyaan', body: 'Tentang cara kerja bisnis Anda sehari-hari, bukan teori manajemen.' },
  { step: '2', title: 'Lihat laporan instan', body: 'Skor per domain, titik kebocoran, dan kenapa itu penting.' },
  { step: '3', title: 'Dapat rekomendasi', body: 'Rekomendasi solusi untuk kondisi bisnis Anda sekarang.' },
]

const DOMAINS = [
  { name: 'Output', icon: TrendingUp, pct: 38, note: 'Titik paling sering rapuh', body: 'Apakah hasil kerja tim Anda konsisten, atau tergantung siapa yang pegang hari itu.' },
  { name: 'Proses', icon: Workflow, pct: 64, note: 'Biasanya cukup, perlu dirapikan', body: 'Apakah sistem kerja Anda jelas dan bisa jalan tanpa Anda mengecek satu-satu.' },
  { name: 'Input', icon: Users, pct: 81, note: 'Biasanya sudah cukup kuat', body: 'Apakah tim Anda punya alat, informasi, dan kejelasan peran yang cukup buat kerja dengan benar sejak awal.' },
]

export default function LandingScreen({ onStart }: LandingScreenProps) {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 520)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-paper text-ink [font-family:var(--font-sans)]">
      <div className="mx-auto w-full max-w-2xl px-5 pb-28 pt-8 sm:pb-16 sm:pt-12">
        <div className="mb-8 flex justify-center">
          <Logo size="md" />
        </div>

        {/* Hero */}
        <section className="mb-10 text-center">
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
            <Clock className="h-3.5 w-3.5" />
            Gratis · 5 Menit · Hasil Instan
          </p>
          <h1 className="mb-3 [font-family:var(--font-display)] text-3xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            Asesmen <em className="text-brand-600 not-italic italic">13 Titik Kebocoran</em> Bisnis
          </h1>
          <p className="mb-4 text-base font-semibold text-ink/80 sm:text-lg">
            Bisnis Anda Jalan Terus, Tapi Cuma Kalau Anda Ada?
          </p>
          <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
            Asesmen cek kebocoran bisnis ini gratis untuk pemilik bisnis 19–99 karyawan. 13 pertanyaan, 5 menit, dan
            Anda dapat peta persis di mana titik kebocoran sistem kerja bisnis Anda — sebelum itu
            makan waktu keluarga Anda juga.
          </p>
          <button
            type="button"
            onClick={onStart}
            className="mx-auto flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Mulai Asesmen Cek Kebocoran Bisnis
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-3 text-xs text-ink/45">Tanpa bayar. Tanpa kartu kredit. Hasilnya langsung Anda lihat.</p>
        </section>

        {/* Cermin Empati */}
        <section className="mb-10 rounded-3xl border border-line bg-brand-soft px-6 py-8 text-center sm:px-10">
          <p className="[font-family:var(--font-display)] text-lg italic leading-relaxed text-ink/80 sm:text-xl">
            "Aku kerja keras ini demi keluarga… tapi kapan terakhir kali aku benar-benar ada — bukan cuma
            fisiknya doang di rumah?"
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brand-600">Anda tidak sendirian</p>
        </section>

        {/* 01 — Problem */}
        <section className="mb-10 -mx-5 bg-ink px-5 py-12 text-paper sm:mx-0 sm:rounded-3xl sm:px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">01 — Yang Anda rasakan itu nyata</p>
          <h2 className="mb-4 [font-family:var(--font-display)] text-2xl font-semibold text-paper sm:text-3xl">
            Kalau Ini Kedengeran Familiar...
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-paper/75 sm:text-base">
            Anda buka HP jam 9 malam bukan buat scroll santai — buka karena ada laporan yang cuma
            Anda yang bisa cek. Tim Anda baik, tapi tiap keputusan penting tetap balik ke Anda.
            Anda pengen ambil cuti seminggu, tapi bayangan "nanti kalau ada apa-apa gimana" bikin
            itu nggak pernah kejadian.
          </p>
          <p className="text-sm leading-relaxed text-paper/75 sm:text-base">
            Itu bukan karena tim Anda kurang bagus. Itu tanda ada bagian dari sistem kerja bisnis
            Anda yang masih bergantung sama Anda secara pribadi — dan itu bisa dipetakan lewat Cek
            Kebocoran.
          </p>
        </section>

        {/* 02 — What you get */}
        <section className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">02 — Bukan kuis umum</p>
          <h2 className="mb-5 [font-family:var(--font-display)] text-2xl font-semibold text-ink sm:text-3xl">
            Ini Peta Bisnis Anda Sendiri
          </h2>
          <div className="space-y-3">
            {WHAT_YOU_GET.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint">
                  <item.icon className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{item.title}</p>
                  <p className="mt-0.5 text-sm text-ink/65">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — For you / not for you */}
        <section className="mb-10 rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">03 — Sebelum Anda mulai</p>
          <h2 className="mb-5 [font-family:var(--font-display)] text-xl font-semibold text-ink sm:text-2xl">
            Ini Bukan Buat Semua Orang
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-600">Cocok buat Anda yang</p>
              <ul className="space-y-2">
                {FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">Bukan buat Anda yang</p>
              <ul className="space-y-2">
                {NOT_FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/50">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-ink/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-5 text-xs text-ink/45">
            Kalau Anda masuk kategori kedua, asesmen cek kebocoran bisnis ini kemungkinan besar belum relevan buat
            Anda sekarang — dan itu bukan masalah, cuma bukan waktunya.
          </p>
        </section>

        {/* 04 — How it works */}
        <section className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">04 — Cara kerjanya</p>
          <h2 className="mb-5 [font-family:var(--font-display)] text-2xl font-semibold text-ink sm:text-3xl">
            3 Langkah, 5 Menit
          </h2>
          <div className="space-y-1">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="flex gap-4 border-b border-line py-4 last:border-b-0">
                <span className="[font-family:var(--font-display)] text-4xl font-semibold leading-none text-brand-200 sm:text-5xl">
                  {item.step}
                </span>
                <div className="pt-1">
                  <p className="text-sm font-bold text-ink">{item.title}</p>
                  <p className="mt-0.5 text-sm text-ink/65">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — What's measured */}
        <section className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">05 — Yang diukur</p>
          <h2 className="mb-5 [font-family:var(--font-display)] text-2xl font-semibold text-ink sm:text-3xl">
            Asesmen Ini Mengukur 3 Area
          </h2>
          <div className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-wide text-ink/40">
              Contoh ilustrasi · skor kematangan per domain
            </p>
            <div className="space-y-5">
              {DOMAINS.map((domain) => (
                <div key={domain.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-bold text-ink">
                      <domain.icon className="h-4 w-4 text-brand-600" />
                      {domain.name}
                    </span>
                    <span className="text-xs text-ink/45">{domain.note}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-brand-tint">
                    <div className="h-full rounded-full bg-brand-500" style={{ width: `${domain.pct}%` }} />
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/60">{domain.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 — Trust */}
        <section className="mb-10 rounded-3xl border border-line bg-brand-soft p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            <div>
              <h2 className="mb-1.5 text-lg font-bold text-ink">Data Anda Aman</h2>
              <p className="text-sm leading-relaxed text-ink/65">
                Kami cuma pakai nama, WhatsApp, dan email Anda buat kirim hasil asesmen cek kebocoran bisnis — bukan
                buat spam, bukan dijual ke pihak lain. Anda bisa lihat hasilnya sekarang juga, tanpa
                perlu jadwalkan apa pun dulu.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl bg-brand-600 p-6 text-center shadow-sm sm:p-10">
          <h2 className="mx-auto mb-5 max-w-md [font-family:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
            Butuh 5 Menit Buat Asesmen Cek Kebocoran Bisnis Anda
          </h2>
          <button
            type="button"
            onClick={onStart}
            className="mx-auto flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
          >
            Mulai Asesmen Cek Kebocoran Bisnis
            <ArrowRight className="h-5 w-5" />
          </button>
        </section>
      </div>

      {/* Sticky mobile CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 backdrop-blur transition-transform duration-200 sm:hidden ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button
          type="button"
          onClick={onStart}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm"
        >
          Mulai Asesmen Cek Kebocoran Bisnis
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
