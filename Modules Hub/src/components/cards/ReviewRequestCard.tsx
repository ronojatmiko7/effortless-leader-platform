import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useWorkbookStore } from '../../workbook/WorkbookContext'
import { useAccess } from '../../access/AccessContext'
import { submitTestimonial, submitPrivateFeedback } from '../../review/reviewStubs'
import StarRating from './StarRating'
import type { ReviewRequestCardData } from '../../types/card'

interface ReviewRequestCardProps {
  card: ReviewRequestCardData
  moduleNumber: number
}

type Sentiment = 'positive' | 'negative'

// customerEmail (from AccessContext / member profile) is how a submission
// gets attributed to a name/business on the public testimonials display —
// see list-public-testimonials's join against `leads`. Most visitors will
// already have it saved by the time they reach chapter 8, but a chapter
// can be reached directly via a link, so this still asks if it's missing
// rather than silently dropping the submission.
export default function ReviewRequestCard({ card, moduleNumber }: ReviewRequestCardProps) {
  const { setFieldValue } = useWorkbookStore()
  const { customerEmail, setCustomerEmail } = useAccess()
  const [sentiment, setSentiment] = useState<Sentiment | null>(null)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [emailDraft, setEmailDraft] = useState(customerEmail ?? '')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const resolveEmail = async (): Promise<string | null> => {
    if (customerEmail) return customerEmail
    const trimmed = emailDraft.trim()
    if (!trimmed) {
      setErrorMessage('Masukkan email dulu ya.')
      return null
    }
    await setCustomerEmail(trimmed)
    return trimmed
  }

  const handleSubmitTestimonial = async () => {
    setErrorMessage(null)
    const email = await resolveEmail()
    if (!email) return
    setIsSubmitting(true)
    await submitTestimonial(card.id, { rating, comment }, setFieldValue, { email, moduleNumber })
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleSubmitPrivateFeedback = async () => {
    setErrorMessage(null)
    const email = await resolveEmail()
    if (!email) return
    setIsSubmitting(true)
    await submitPrivateFeedback(card.id, { comment }, setFieldValue, { email, moduleNumber })
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-1 py-4 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-7 w-7 text-emerald-600" />
        </div>
        <p className="text-base font-medium text-slate-800">
          {sentiment === 'positive' ? card.thanksMessagePositive : card.thanksMessageNegative}
        </p>
      </div>
    )
  }

  if (sentiment === null) {
    return (
      <div className="flex h-full flex-col justify-center px-1 py-4">
        {card.eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
            {card.eyebrow}
          </p>
        )}
        <h2 className="mb-4 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
          {card.title}
        </h2>
        <p className="mb-6 text-base text-slate-600">{card.sentimentPrompt}</p>
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setSentiment('positive')}
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-5 py-4 text-left text-base font-medium text-slate-800 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            {card.positiveLabel}
          </button>
          <button
            type="button"
            onClick={() => setSentiment('negative')}
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-5 py-4 text-left text-base font-medium text-slate-800 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            {card.negativeLabel}
          </button>
        </div>
      </div>
    )
  }

  const emailField = !customerEmail && (
    <input
      type="email"
      value={emailDraft}
      onChange={(event) => setEmailDraft(event.target.value)}
      placeholder="Email Anda"
      className="mb-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
    />
  )

  if (sentiment === 'positive') {
    return (
      <div className="flex h-full flex-col justify-center px-1 py-4">
        <h2 className="mb-4 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
          {card.testimonialPromptLabel}
        </h2>
        <div className="mb-4">
          <StarRating value={rating} onChange={setRating} />
        </div>
        {emailField}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={card.testimonialPlaceholder}
          rows={3}
          className="w-full resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400"
        />
        <p className="mt-2 text-xs text-slate-400">
          Dengan mengirim, testimoni ini mungkin kami tampilkan di halaman kami (dengan nama depan Anda saja) setelah kami tinjau.
        </p>
        {errorMessage && <p className="mt-2 text-xs font-semibold text-red-600">{errorMessage}</p>}
        <button
          type="button"
          onClick={handleSubmitTestimonial}
          disabled={rating === 0 || isSubmitting}
          className="mt-4 self-start rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Kirim
        </button>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col justify-center px-1 py-4">
      <h2 className="mb-2 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {card.privateFeedbackPrompt}
      </h2>
      <p className="mb-4 text-sm text-slate-500">
        Ini cuma masuk ke tim kami secara pribadi, tidak dipublikasikan ke mana pun.
      </p>
      {emailField}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder={card.privateFeedbackPlaceholder}
        rows={4}
        className="w-full resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400"
      />
      {errorMessage && <p className="mt-2 text-xs font-semibold text-red-600">{errorMessage}</p>}
      <button
        type="button"
        onClick={handleSubmitPrivateFeedback}
        disabled={comment.trim().length === 0 || isSubmitting}
        className="mt-4 self-start rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Kirim
      </button>
    </div>
  )
}
