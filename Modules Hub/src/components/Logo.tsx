interface LogoProps {
  /** Show the "self · system · team · family" subline (the wife-approved lockup). */
  showSubline?: boolean
  /** Text size of the wordmark itself; subline scales with it automatically. */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZE_CLASSES: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'text-lg sm:text-xl',
  md: 'text-2xl sm:text-3xl',
  lg: 'text-3xl sm:text-4xl',
}

/**
 * Shared Effortless Leader wordmark — "Effortless" in brand orange, "Leader" in
 * charcoal, no space between them, matching the chosen logo direction (Aug 18).
 * Pure typography, no image asset needed — swap to an <img> here if a raster/SVG
 * file is ever dropped into src/assets instead.
 */
export default function Logo({ showSubline = false, size = 'md', className = '' }: LogoProps) {
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className={`font-extrabold leading-none tracking-tight ${SIZE_CLASSES[size]}`}>
        <span className="text-brand-500">Effortless</span>
        <span className="text-neutral-900">Leader</span>
      </div>
      {showSubline && (
        <div className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:text-[11px]">
          self &middot; system &middot; team &middot; family
        </div>
      )}
    </div>
  )
}
