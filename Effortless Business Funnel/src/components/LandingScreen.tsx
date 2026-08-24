import { ArrowRight, CheckCircle2, Clock, MapPin, ShieldCheck, XCircle } from 'lucide-react'
import Logo from './Logo'

interface LandingScreenProps {
  onStart: () => void
}

const WHAT_YOU_GET = [
  {
    title: 'Skor kematangan per domain',
    body: 'Output (hasil), Proses (sistem kerja), Input (bahan baku) — jadi Anda tahu domain mana yang paling rapuh, bukan cuma "bisnis Anda oke atau nggak."',
  },
  {
    title: 'Titik kebocoran spesifik',
    body: 'Bukan saran generik "perbaiki SOP Anda," tapi area persis yang keluar dari jawaban Anda sendiri.',
  },
  {
    title: 'Rekomendasi langkah selanjutnya',
    body: 'Modul mana yang paling relevan buat titik kebocoran Anda, supaya Anda tahu mulai dari mana.',
  },
]

const FOR_YOU = [
  'Sudah punya 19-99 karyawan — dibawah atau diatas itu, masalahnya beda dan Cek Kebocoran ini belum relevan.',
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
  { step: '3', title: 'Dapat rekomendasi', body: 'Modul spesifik yang paling pas buat kondisi bisnis Anda sekarang.' },
]

const DOMAINS = [
  { name: 'Output', body: 'Apakah hasil kerja tim Anda konsisten, atau tergantung siapa yang pegang hari itu.' },
  { name: 'Proses', body: 'Apakah sistem kerja Anda jelas dan bisa jalan tanpa Anda mengecek satu-satu.' },
  { name: 'Input', body: 'Apakah tim Anda punya alat, informasi, dan kejelasan peran yang cukup buat kerja dengan benar sejak awal.' },
]

export default function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-2xl px-5 py-8 sm:py-12">
        <div className="mb-8 flex justify-center">
          <Logo size="md" />
        </div>

        {/* Hero */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10">
          <p className="mb-3 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
            <Clock className="h-3.5 w-3.5" />
            Gratis · 5 Menit · Hasil Instan
          </p>
          <h1 className="mb-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Asesmen 13 Titik Kebocoran Bisnis
          </h1>
          <p className="mb-4 text-base font-semibold text-slate-700 sm:text-lg">
            Bisnis Anda Jalan Terus, Tapi Cuma Kalau Anda Ada?
          </p>
          <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
            Cek Kebocoran gratis untuk pemilik bisnis 19–99 karyawan. 13 pertanyaan, 5 menit, dan
            Anda dapat peta persis di mana titik kebocoran sistem kerja bisnis Anda — sebelum itu
            makan waktu keluarga Anda juga.
          </p>
          <button
            type="button"
            onClick={onStart}
            className="mx-auto flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Mulai Cek Kebocoran
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-3 text-xs text-slate-400">Tanpa bayar. Tanpa kartu kredit. Hasilnya langsung Anda lihat.</p>
        </div>

        {/* Problem */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-3 text-lg font-bold text-slate-900">Kalau Ini Kedengeran Familiar...</h2>
          <p className="mb-3 text-sm leading-relaxed text-slate-600">
            Anda buka HP jam 9 malam bukan buat scroll santai — buka karena ada laporan yang cuma
            Anda yang bisa cek. Tim Anda baik, tapi tiap keputusan penting tetap balik ke Anda.
            Anda pengen ambil cuti seminggu, tapi bayangan "nanti kalau ada apa-apa gimana" bikin
            itu nggak pernah kejadian.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            Itu bukan karena tim Anda kurang bagus. Itu tanda ada bagian dari sistem kerja bisnis
            Anda yang masih bergantung sama Anda secara pribadi — dan itu bisa dipetakan lewat Cek
            Kebocoran.
          </p>
        </div>

        {/* What you get */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-bold text-slate-900">
            Bukan Kuis Umum. Ini Peta Bisnis Anda Sendiri.
          </h2>
          <div className="space-y-3">
            {WHAT_YOU_GET.map((item) => (
              <div key={item.title} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.title}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who this is for / not for */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold text-slate-900">Ini Bukan Buat Semua Orang</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-600">Cocok buat Anda yang</p>
              <ul className="space-y-2">
                {FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Bukan buat Anda yang</p>
              <ul className="space-y-2">
                {NOT_FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-5 text-xs text-slate-400">
            Kalau Anda masuk kategori kedua, Cek Kebocoran ini kemungkinan besar belum relevan buat
            Anda sekarang — dan itu bukan masalah, cuma bukan waktunya.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-bold text-slate-900">3 Langkah, 5 Menit</h2>
          <div className="space-y-3">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.title}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's being measured */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold text-slate-900">Cek Kebocoran Ini Mengukur 3 Hal</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {DOMAINS.map((domain) => (
              <div key={domain.name}>
                <p className="text-sm font-bold text-brand-700">{domain.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{domain.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-bold text-slate-900">Data Anda Aman</h2>
          <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            Kami cuma pakai nama, WhatsApp, dan email Anda buat kirim hasil Cek Kebocoran — bukan
            buat spam, bukan dijual ke pihak lain. Anda bisa lihat hasilnya sekarang juga, tanpa
            perlu jadwalkan apa pun dulu.
          </p>
        </div>

        {/* Final CTA */}
        <div className="rounded-2xl bg-brand-600 p-6 text-center shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">
            Butuh 5 Menit Buat Cek Kebocoran Bisnis Anda
          </h2>
          <button
            type="button"
            onClick={onStart}
            className="mx-auto flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
          >
            Mulai Cek Kebocoran
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
