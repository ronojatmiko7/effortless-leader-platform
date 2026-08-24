import { useState, type FormEvent } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import type { Lead } from '../types/lead'

interface LeadCaptureFormProps {
  onSubmit: (lead: Lead) => void
}

export default function LeadCaptureForm({ onSubmit }: LeadCaptureFormProps) {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [employeeCount, setEmployeeCount] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim(),
      businessName: businessName.trim(),
      employeeCount,
    })
  }

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
        Satu langkah lagi
      </p>
      <h2 className="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl">
        Hasil Cek Kebocoran Anda Sudah Siap
      </h2>
      <p className="mb-6 text-base leading-relaxed text-slate-600">
        Masukkan data Anda buat lihat laporan lengkapnya — kami kirim juga ke WhatsApp/email Anda
        supaya tidak hilang.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="lead-name" className="mb-1 block text-sm font-semibold text-slate-700">
            Nama Anda
          </label>
          <input
            id="lead-name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="misalnya, Budi Santoso"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <div>
          <label htmlFor="lead-whatsapp" className="mb-1 block text-sm font-semibold text-slate-700">
            Nomor WhatsApp
          </label>
          <input
            id="lead-whatsapp"
            type="tel"
            required
            inputMode="tel"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            placeholder="0812xxxxxxx"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <div>
          <label htmlFor="lead-email" className="mb-1 block text-sm font-semibold text-slate-700">
            Email
          </label>
          <input
            id="lead-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="budi@usahamaju.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <div>
          <label htmlFor="lead-business" className="mb-1 block text-sm font-semibold text-slate-700">
            Nama Bisnis
          </label>
          <input
            id="lead-business"
            type="text"
            required
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
            placeholder="misalnya, UD Maju Sejahtera"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <div>
          <label htmlFor="lead-employee-count" className="mb-1 block text-sm font-semibold text-slate-700">
            Jumlah Karyawan
          </label>
          <input
            id="lead-employee-count"
            type="number"
            required
            min={1}
            inputMode="numeric"
            value={employeeCount}
            onChange={(event) => setEmployeeCount(event.target.value)}
            placeholder="misalnya, 35"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          Lihat Hasil Saya
          <ArrowRight className="h-5 w-5" />
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
          <ShieldCheck className="h-3.5 w-3.5" />
          Data Anda aman, cuma dipakai untuk kirim hasil Cek Kebocoran.
        </p>
      </form>
    </div>
  )
}
