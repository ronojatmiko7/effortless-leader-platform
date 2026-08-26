import { useState, type FormEvent } from 'react'
import { ShieldCheck } from 'lucide-react'
import Logo from './Logo'
import { useAccess } from '../access/AccessContext'
import { saveMemberProfile, type MemberProfile } from '../access/memberProfile'
import { registerMember } from '../access/registerApi'

interface RegisterScreenProps {
  initialProfile: MemberProfile
  onRegistered: () => void
}

// The front door of the Hub (App.tsx's RegisterGate renders this before
// anything else until a member profile is saved locally — Bro Rono's
// Aug 26 2026 decision: gate the whole Hub, not just the paid-unlock
// moment). Pre-filled from the funnel's ProgramScreen via URL query
// params when someone arrives through "Buka Modules Hub" (see
// ProgramScreen.tsx's openModulesHub) — most people just confirm instead
// of retyping what they already told the funnel's lead form. A direct or
// bookmarked visit arrives with empty params and gets a blank form.
export default function RegisterScreen({ initialProfile, onRegistered }: RegisterScreenProps) {
  const [draft, setDraft] = useState<MemberProfile>(initialProfile)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setCustomerEmail } = useAccess()

  const canSubmit = draft.name.trim().length > 0 && draft.email.trim().length > 3

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!canSubmit || isSubmitting) return
    setIsSubmitting(true)
    const profile: MemberProfile = {
      name: draft.name.trim(),
      email: draft.email.trim(),
      whatsapp: draft.whatsapp.trim(),
    }
    saveMemberProfile(profile)
    await setCustomerEmail(profile.email)
    void registerMember(profile)
    onRegistered()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <Logo size="sm" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-600">Effortless System</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">Selamat Datang</h1>
          <p className="mt-2 text-sm text-slate-500">
            Isi data di bawah untuk masuk ke Modules Hub — dipakai untuk menyimpan progres belajar Anda dan
            mengecek modul yang sudah dibeli.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
            Nama
            <input
              type="text"
              required
              value={draft.name}
              onChange={(event) => setDraft((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Nama Anda"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal text-slate-700 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
            Email
            <input
              type="email"
              required
              value={draft.email}
              onChange={(event) => setDraft((prev) => ({ ...prev, email: event.target.value }))}
              placeholder="nama@email.com"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal text-slate-700 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
            WhatsApp
            <input
              type="tel"
              value={draft.whatsapp}
              onChange={(event) => setDraft((prev) => ({ ...prev, whatsapp: event.target.value }))}
              placeholder="08xxxxxxxxxx"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal text-slate-700 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="mt-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Memproses...' : 'Masuk ke Modules Hub'}
          </button>

          <p className="flex items-start gap-1.5 text-[11px] leading-snug text-slate-400">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Data Anda hanya dipakai untuk pengalaman belajar di Modules Hub, bukan untuk hal lain.
          </p>
        </form>
      </div>
    </div>
  )
}
