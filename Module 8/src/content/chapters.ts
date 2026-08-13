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
      'Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai"',
    description:
      'Kenapa tool, sistem, atau SOP yang sudah dibeli atau dibuat dengan baik tetap bisa mati pelan-pelan di lapangan — dan perbedaan penting antara perubahan yang beneran terpakai vs perubahan yang cuma didiamkan.',
    cards: chapter1Cards,
  },
]
