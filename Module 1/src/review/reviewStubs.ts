type SetFieldValue = (cardId: string, fieldId: string, value: string) => void

export interface TestimonialData {
  rating: number
  comment: string
}

export interface PrivateFeedbackData {
  comment: string
}

/**
 * Drop-in point for a future backend call (e.g. an API that emails the
 * business owner or writes to a CRM). There is no backend today — this only
 * logs to the console and persists to the visitor's own browser via
 * useWorkbookStore. The business owner never actually sees this data until
 * a real implementation replaces this stub.
 */
export function submitTestimonial(cardId: string, data: TestimonialData, setFieldValue: SetFieldValue) {
  console.log('[submitTestimonial] stub — replace with a real backend call:', data)
  setFieldValue(cardId, 'rating', String(data.rating))
  setFieldValue(cardId, 'comment', data.comment)
}

/**
 * Drop-in point for a future backend call. Same caveat as submitTestimonial:
 * today this data never reaches the business owner, it only lives in
 * localStorage on the visitor's device.
 */
export function submitPrivateFeedback(
  cardId: string,
  data: PrivateFeedbackData,
  setFieldValue: SetFieldValue,
) {
  console.log('[submitPrivateFeedback] stub — replace with a real backend call:', data)
  setFieldValue(cardId, 'comment', data.comment)
}
