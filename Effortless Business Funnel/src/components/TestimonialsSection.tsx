import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { LIST_PUBLIC_TESTIMONIALS_URL } from '../config/testimonialsConfig'

interface PublicTestimonial {
  id: string
  moduleNumber: number | null
  rating: number
  comment: string
  featured: boolean
  name: string
  businessName: string | null
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'fill-none text-slate-300'}`}
        />
      ))}
    </div>
  )
}

// Pulled live from the testimonials backend (see reviewStubs.ts / the
// review-request card at the end of every module) — nothing here is
// hardcoded. Only approved=true rows can ever reach this component (see
// list-public-testimonials's own comment), and Bro Rono approves/features
// them from the admin dashboard's Testimonials tab. Renders nothing at all
// until there's at least one approved testimonial, rather than showing an
// empty "no reviews yet" state.
export default function TestimonialsSection() {
  const [avgRating, setAvgRating] = useState(0)
  const [count, setCount] = useState(0)
  const [testimonials, setTestimonials] = useState<PublicTestimonial[]>([])

  useEffect(() => {
    let cancelled = false
    fetch(LIST_PUBLIC_TESTIMONIALS_URL)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return
        setAvgRating(data.avgRating ?? 0)
        setCount(data.count ?? 0)
        setTestimonials(Array.isArray(data.testimonials) ? data.testimonials : [])
      })
      .catch(() => {
        // Fails silently — the section just doesn't render. A landing page
        // shouldn't error out over a social-proof widget.
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (count === 0 || testimonials.length === 0) return null

  return (
    <section className="mb-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
        Kata Peserta Lain
      </p>
      <div className="mb-4 flex items-center gap-2">
        <StarRow rating={Math.round(avgRating)} />
        <span className="text-sm font-bold text-slate-900">{avgRating.toFixed(1)}/5</span>
        <span className="text-xs text-slate-500">dari {count} peserta</span>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible">
        {testimonials.slice(0, 6).map((t) => (
          <div
            key={t.id}
            className="w-64 shrink-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:w-auto"
          >
            <StarRow rating={t.rating} />
            <p className="mt-2 text-sm leading-relaxed text-slate-700">&ldquo;{t.comment}&rdquo;</p>
            <p className="mt-3 text-xs font-semibold text-slate-500">
              {t.name}
              {t.businessName ? ` · ${t.businessName}` : ''}
              {t.moduleNumber ? ` · Modul ${t.moduleNumber}` : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
