import { chapter1Cards } from './chapter1'
import type { Card } from '../types/card'

export interface ChapterMeta {
  id: string
  number: number
  title: string
  description: string
  cards: Card[]
}

export const chapters: ChapterMeta[] = [
  {
    id: 'chapter-1',
    number: 1,
    title:
      '"Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain',
    description:
      'Kenapa pemakaian AI yang muncul dari inisiatif satu-dua orang, tanpa kasus pakai yang dipilih sengaja, tanpa pemilik, dan tanpa cara mengecek hasilnya, berakhir persis seperti tool dan SOP yang dibeli/dibuat tapi nggak pernah benar-benar diinstal jadi kebiasaan.',
    cards: chapter1Cards,
  },
]
