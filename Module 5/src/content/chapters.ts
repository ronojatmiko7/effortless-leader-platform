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
    title: 'Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu',
    description:
      'Kenapa SOP yang sudah ditulis, dicetak, bahkan ditempel di dinding tetap tidak dipakai — dan perbedaan penting antara SOP yang eksis di dokumen vs SOP yang benar-benar membentuk cara kerja sehari-hari.',
    cards: chapter1Cards,
  },
]
