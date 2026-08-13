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
    title: 'Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah',
    description:
      'Kenapa bisnis yang sudah punya KPI dan review tahunan tetap punya tim yang underperform — dan perbedaan penting antara satu titik evaluasi vs siklus kinerja utuh yang jalan sepanjang tahun.',
    cards: chapter1Cards,
  },
]
