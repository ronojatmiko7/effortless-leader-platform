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
    title: 'Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok"',
    description:
      'Kenapa proses rekrutmen yang sudah serius pun tetap bisa menghasilkan salah rekrut — dan perbedaan penting antara keputusan berbasis kesan vs keputusan berbasis kompetensi yang benar-benar diverifikasi.',
    cards: chapter1Cards,
  },
]
