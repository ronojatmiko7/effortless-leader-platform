import { Download, AlertTriangle } from 'lucide-react'
import { useWorkbookStore } from '../../workbook/WorkbookContext'
import type { ReportCardData } from '../../types/card'

interface ReportCardProps {
  card: ReportCardData
}

export default function ReportCard({ card }: ReportCardProps) {
  const { getFieldValue } = useWorkbookStore()

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex h-full flex-col px-1 py-4">
      {card.eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {card.eyebrow}
        </p>
      )}
      <h2 className="mb-4 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {card.title}
      </h2>
      <div className="mb-6 space-y-3 text-sm leading-relaxed text-slate-600">
        {card.intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="space-y-4">
        {card.sections.map((section) => (
          <div
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 print:break-inside-avoid"
          >
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
              {section.heading}
            </h3>
            <div className="space-y-1.5">
              {section.items.map((item) => {
                const value = getFieldValue(item.cardId, item.fieldId)
                const isRedFlag =
                  item.fieldId === 'score' && value.trim() !== '' && Number(value) <= 2
                return (
                  <div key={`${item.cardId}-${item.fieldId}`} className="text-sm leading-relaxed">
                    <span className="font-semibold text-slate-500">{item.label}: </span>
                    <span className="text-slate-800">
                      {value.trim() ? (
                        value
                      ) : (
                        <span className="italic text-slate-400">(belum diisi)</span>
                      )}
                    </span>
                    {isRedFlag && (
                      <span className="ml-1.5 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                        <AlertTriangle className="h-3 w-3" />
                        Red flag
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handlePrint}
        className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 print:hidden"
      >
        <Download className="h-5 w-5" />
        {card.downloadButtonText}
      </button>
    </div>
  )
}
