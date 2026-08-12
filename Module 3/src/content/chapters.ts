import { chapter1Cards } from './chapter1'
import { chapter2Cards } from './chapter2'
import { chapter3Cards } from './chapter3'
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
    title: "Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme",
    description:
      'Kenapa rapat dadakan tiap ada masalah itu bukan tanda gesit, dan kenapa bisnis yang tenang itu hasil dari ritme tinjauan — bukan kebetulan.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan',
    description:
      'Peta lengkap 4 level ritme EBR — siapa yang terlibat di tiap level, kenapa altitude masalahnya berubah tiap naik level, dan kenapa melompati satu level itu bahaya.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu',
    description:
      'Format, agenda, dan siapa yang hadir di dua tier operasional paling bawah — termasuk mekanisme "parkir masalah" yang bikin huddle tetap singkat tanpa mengabaikan isu yang muncul.',
    cards: chapter3Cards,
  },
]
