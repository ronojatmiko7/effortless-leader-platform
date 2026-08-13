import { chapter1Cards } from './chapter1'
import { chapter2Cards } from './chapter2'
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
  {
    id: 'chapter-2',
    number: 2,
    title: 'Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti',
    description:
      'Dua tahap arsitektur jabatan yang harus ada sebelum rekrutmen bisa berjalan dengan benar — model kompetensi dan rekrutmen berbasis bukti — dan kenapa kebanyakan bisnis SME melewatkan yang pertama.',
    cards: chapter2Cards,
  },
]
