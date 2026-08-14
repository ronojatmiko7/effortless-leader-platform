import { Star } from 'lucide-react'

interface StarRatingProps {
  value: number
  onChange: (value: number) => void
}

export default function StarRating({ value, onChange }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          aria-label={`${star} bintang`}
          className="p-0.5"
        >
          <Star
            className={`h-8 w-8 transition-colors ${
              star <= value ? 'fill-amber-400 text-amber-400' : 'fill-none text-slate-300'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
