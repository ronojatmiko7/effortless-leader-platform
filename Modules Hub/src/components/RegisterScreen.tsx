import { useState, type FormEvent } from 'react'
import { Mail, ShieldCheck, Check } from 'lucide-react'
import Logo from './Logo'
import FreeLaunchBanner from './FreeLaunchBanner'
import type { MemberProfile } from '../access/memberProfile'
import { requestMagicLink } from '../access/magicLinkApi'
import { modules } from '../data/modules'
import { FREE_LAUNCH_END_DISPLAY } from '../config/paymentConfig'

interface RegisterScreenProps {
  initialProfile: MemberProfile
  errorMessage?: string | null
}

type Stage = 'form' | 'sent'

// Maps request-magic-link's error codes to something a non-technical
// visitor (and Bro Rono, debugging) can actually act on, instead of one
// flat "gagal mengirim link" for every failure mode. See
// access/magicLinkApi.ts / the Edge Function itself for what each code
// means.
function describeError(code: string | undefined): string {
  switch (code) {
    case 'email_required':
      return 'Email tidak valid. Coba periksa lagi.'
    case 'email_not_configured':
      return 'Pengiriman email belum aktif di sisi server (RESEND_API_KEY belum diset). Ini bukan kesalahan Anda — hubungi admin.'
    case 'db_error':
      return 'Ada masalah di server saat menyimpan permintaan Anda. Coba lagi sebentar lagi.'
    case 'network_error':
      return 'Tidak bisa terhubung ke server. Periksa koneksi internet Anda dan coba lagi.'
    default:
      return 'Gagal mengirim link. Coba lagi sebentar lagi.'
  }
}

// The front door of the Hub (App.tsx's RegisterGate renders this until a
// magic-link click verifies a browser — Bro Rono's Aug 26 2026 decision:
// real email verification, not just a trusted typed-in email, gates the
// whole Hub including the previously-open Module 1). Name and WhatsApp
// are no longer asked here — they're carried silently from
// initialProfile (the funnel's ProgramScreen handoff via URL query
// params, already captured by LeadCaptureForm) since asking again would
// just be re-collecting what we already have. Only email is shown/
// editable, since that's the one thing the magic link actually needs.
//
// Aug 27 2026: rewritten from a bare "enter your email" utility screen
// into an actual landing pitch, because this is now also the direct
// destination for a new Meta campaign that skips the diagnostic quiz
// entirely (see meta-ads-asesmen-campaign / funnel-launch-checklist
// project memory) — cold ad traffic landing here previously saw zero
// reason to hand over an email. Full hub stays open (Bro Rono's call,
// not narrowed to Module 1 only); urgency carries the load instead via
// the reused FreeLaunchBanner + an explicit deadline line under the CTA.
//
// Submitting sends a magic-link email (request-magic-link Edge Function)
// and stops here — it does NOT admit anyone. RegisterGate is what
// actually admits someone, on the follow-up page load when they click
// the link in their inbox (?magic=TOKEN).
export default function RegisterScreen({ initialProfile, errorMessage }: RegisterScreenProps) {
  const [email, setEmail] = useState(initialProfile.email)
  const [stage, setStage] = useState<Stage>('form')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const canSubmit = email.trim().length > 3

  const sendLink = async () => {
    if (!canSubmit || isSubmitting) return
    setIsSubmitting(true)
    setSubmitError(null)
    const profile: MemberProfile = {
      name: initialProfile.name,
      email: email.trim(),
      whatsapp: initialProfile.whatsapp,
    }
    const result = await requestMagicLink(profile)
    setIsSubmitting(false)
    if (result.ok) {
      setStage('sent')
    } else {
      setSubmitError(describeError(result.error))
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    void sendLink()
  }

  if (stage === 'sent') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-10">
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
            <Mail className="h-6 w-6" />
          </div>
          <h1 className="mt-4 text-lg font-bold text-slate-900">Cek Email Anda</h1>
          <p className="mt-2 text-sm text-slate-500">
            Kami sudah kirim link masuk ke <span className="font-semibold text-slate-700">{email}</span>. Klik link
            di email itu untuk masuk ke Modules Hub. Link berlaku 30 menit dan hanya bisa dipakai sekali.
          </p>
          <p className="mt-3 text-xs font-semibold text-amber-700">
            Jangan tunggu terlalu lama — semua modul gratis hanya sampai {FREE_LAUNCH_END_DISPLAY}.
          </p>
          <button
            type="button"
            onClick={() => setStage('form')}
            className="mt-4 text-xs font-bold text-brand-600 hover:underline"
          >
            Salah email? Ubah &amp; kirim ulang
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <Logo size="md" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-600">Effortless System</p>
          <h1 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
            Bisnis Jalan Terus, Tanpa Anda Harus Selalu Turun Tangan
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            9 modul praktis untuk membangun sistem, KPI, SOP, dan tim yang benar-benar berjalan — supaya Anda bisa
            pulang tepat waktu tanpa bisnis ikut berantakan.
          </p>
        </div>

        <div className="mt-5">
          <FreeLaunchBanner />
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Yang Anda dapatkan, gratis</p>
          <ul className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
            {modules.map((module) => (
              <li key={module.id} className="flex items-start gap-2 text-left text-xs text-slate-600 sm:text-sm">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                <span>{module.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {(errorMessage || submitError) && (
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800">
            {submitError ?? errorMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="nama@email.com"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal text-slate-700 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="mt-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Mengirim...' : 'Klaim Akses Gratis Sekarang'}
          </button>

          <p className="text-center text-[11px] font-semibold text-amber-700">
            Gratis hanya sampai {FREE_LAUNCH_END_DISPLAY} — setelah itu Modul 2-9 berbayar.
          </p>

          <p className="flex items-start gap-1.5 text-[11px] leading-snug text-slate-400">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Tanpa password. Email Anda hanya dipakai untuk masuk ke Modules Hub, bukan untuk hal lain.
          </p>
        </form>
      </div>
    </div>
  )
}
