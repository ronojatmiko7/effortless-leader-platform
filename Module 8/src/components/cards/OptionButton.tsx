export type OptionState = 'idle' | 'correct' | 'incorrect' | 'selected' | 'muted'

interface OptionButtonProps {
  label: string
  onClick: () => void
  disabled: boolean
  state: OptionState
  variant?: 'block' | 'pill'
}

const stateClasses: Record<OptionState, string> = {
  idle: 'border-slate-200 bg-white text-slate-800 hover:border-indigo-300 hover:bg-indigo-50',
  correct: 'border-emerald-400 bg-emerald-50 text-emerald-900',
  incorrect: 'border-amber-400 bg-amber-50 text-amber-900',
  selected: 'border-indigo-400 bg-indigo-50 text-indigo-900',
  muted: 'border-slate-100 bg-white text-slate-400',
}

export default function OptionButton({
  label,
  onClick,
  disabled,
  state,
  variant = 'block',
}: OptionButtonProps) {
  const shape =
    variant === 'pill'
      ? 'rounded-full px-5 py-2.5 text-sm'
      : 'w-full rounded-xl px-5 py-4 text-left text-base'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`border-2 font-medium transition-colors disabled:cursor-default ${shape} ${stateClasses[state]}`}
    >
      {label}
    </button>
  )
}
