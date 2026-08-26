import { SUBMIT_TESTIMONIAL_URL } from '../config/paymentConfig'

type SetFieldValue = (cardId: string, fieldId: string, value: string) => void

export interface TestimonialData {
  rating: number
  comment: string
}

export interface PrivateFeedbackData {
  comment: string
}

// Posts to the real submit-testimonial Edge Function (PerfOS Supabase —
// see paymentConfig.ts). Positive-sentiment submissions land in the
// `testimonials` table unapproved, waiting for Bro Rono to approve/feature
// them in the admin dashboard before they can ever show up publicly (see
// list-public-testimonials). Also mirrors the value into the visitor's own
// workbook (useWorkbookStore), same as before, purely for in-session UI
// state — that was never the actual delivery mechanism.
//
// Fire-and-forget on failure: a flaky network shouldn't block the visitor
// from seeing the thank-you screen. Errors are logged, not surfaced.
export async function submitTestimonial(
  cardId: string,
  data: TestimonialData,
  setFieldValue: SetFieldValue,
  context: { email: string | null; moduleNumber: number },
) {
  setFieldValue(cardId, 'rating', String(data.rating))
  setFieldValue(cardId, 'comment', data.comment)

  if (!context.email) {
    console.error('[submitTestimonial] no customer email on file — submission not sent')
    return
  }

  try {
    await fetch(SUBMIT_TESTIMONIAL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: context.email,
        moduleNumber: context.moduleNumber,
        sentiment: 'positive',
        rating: data.rating,
        comment: data.comment,
      }),
    })
  } catch (err) {
    console.error('[submitTestimonial] failed to reach backend:', err)
  }
}

// Same shape as submitTestimonial but lands in `private_feedback` — never
// shown publicly, only visible via the admin dashboard.
export async function submitPrivateFeedback(
  cardId: string,
  data: PrivateFeedbackData,
  setFieldValue: SetFieldValue,
  context: { email: string | null; moduleNumber: number },
) {
  setFieldValue(cardId, 'comment', data.comment)

  if (!context.email) {
    console.error('[submitPrivateFeedback] no customer email on file — submission not sent')
    return
  }

  try {
    await fetch(SUBMIT_TESTIMONIAL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: context.email,
        moduleNumber: context.moduleNumber,
        sentiment: 'negative',
        comment: data.comment,
      }),
    })
  } catch (err) {
    console.error('[submitPrivateFeedback] failed to reach backend:', err)
  }
}
