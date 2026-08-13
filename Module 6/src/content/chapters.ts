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
    title: 'Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah',
    description:
      'Kenapa bisnis yang sudah punya KPI dan review tahunan tetap punya tim yang underperform — dan perbedaan penting antara satu titik evaluasi vs siklus kinerja utuh yang jalan sepanjang tahun.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif',
    description:
      'Tiga tahap siklus PMS yang harus berputar terus — penetapan tujuan, coaching rutin, tindakan korektif — kenapa bisnis SME hampir selalu hanya menjalankan satu, dan di mana tahap yang paling bolong di bisnis Anda.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas',
    description:
      'Empat prinsip yang membedakan tujuan yang beneran dimiliki karyawan dari tujuan yang cuma ada di dokumen — plus teknik percakapan cascading tiga langkah untuk menurunkan tujuan tim jadi tujuan individu yang spesifik, terukur, dan disepakati bersama.',
    cards: chapter3Cards,
  },
]
