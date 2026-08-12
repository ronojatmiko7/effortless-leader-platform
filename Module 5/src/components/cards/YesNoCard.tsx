import OptionButton, { type OptionState } from './OptionButton'
import FeedbackBanner from './FeedbackBanner'
import { useWorkbookStore } from '../../workbook/WorkbookContext'
import type { YesNoCardData } from '../../types/card'

interface YesNoCardProps {
  card: YesNoCardData
  selected: 'yes' | 'no' | undefined
  onSelect: (value: 'yes' | 'no') => void
}

export default function YesNoCard({ card, selected, onSelect }: YesNoCardProps) {
  const { setFieldValue } = useWorkbookStore()

  const options: { value: 'yes' | 'no'; label: string }[] = [
    { value: 'yes', label: card.yesLabel ?? 'Ya' },
    { value: 'no', label: card.noLabel ?? 'Tidak' },
  ]

  const handleClick = (value: 'yes' | 'no') => {
    if (selected) return
    const label = options.find((option) => option.value === value)!.label
    setFieldValue(card.id, 'selection', value)
    setFieldValue(card.id, 'selectionLabel', label)
    onSelect(value)
  }

  const feedbackText =
    selected === 'yes' ? card.feedbackYes : selected === 'no' ? card.feedbackNo : null

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <h2 className="mb-6 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {card.question}
      </h2>
      <div className="space-y-3">
        {options.map((option) => {
          const state: OptionState = selected
            ? option.value === selected
              ? 'selected'
              : 'muted'
            : 'idle'
          return (
            <OptionButton
              key={option.value}
              label={option.label}
              disabled={!!selected}
              state={state}
              onClick={() => handleClick(option.value)}
            />
          )
        })}
      </div>
      {feedbackText && <FeedbackBanner variant="neutral" text={feedbackText} />}
    </div>
  )
}
