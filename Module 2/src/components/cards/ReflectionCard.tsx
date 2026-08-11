import { NotebookPen } from 'lucide-react'
import { useWorkbookStore } from '../../workbook/WorkbookContext'
import type { ReflectionCardData } from '../../types/card'

interface ReflectionCardProps {
  card: ReflectionCardData
}

export default function ReflectionCard({ card }: ReflectionCardProps) {
  const { getFieldValue, setFieldValue } = useWorkbookStore()

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <div className="mb-4 flex items-center gap-2 text-indigo-600">
        <NotebookPen className="h-5 w-5" />
        {card.eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider">{card.eyebrow}</p>
        )}
      </div>
      <h2 className="mb-6 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {card.prompt}
      </h2>
      <div className="space-y-4">
        {card.fields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={`${card.id}-${field.id}`}
              className="mb-1.5 block text-sm font-medium text-slate-600"
            >
              {field.label}
            </label>
            <textarea
              id={`${card.id}-${field.id}`}
              value={getFieldValue(card.id, field.id)}
              onChange={(e) => setFieldValue(card.id, field.id, e.target.value)}
              placeholder={field.placeholder}
              rows={2}
              className="w-full resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400"
            />
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-slate-400">
        Jawaban Anda otomatis tersimpan di perangkat ini, buat dipakai lagi nanti.
      </p>
    </div>
  )
}
