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
    title: 'Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics)',
    description:
      "Kenapa 'sibuk' dan 'omzet naik' bisa menipu Anda, dan kenapa Anda butuh KPI yang benar-benar mengukur kesehatan bisnis, bukan cuma bikin ngerasa aman.",
    cards: chapter1Cards,
  },
]
