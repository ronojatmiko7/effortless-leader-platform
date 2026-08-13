import { chapter1Cards } from './chapter1'
import { chapter2Cards } from './chapter2'
import { chapter3Cards } from './chapter3'
import { chapter4Cards } from './chapter4'
import { chapter5Cards } from './chapter5'
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
  {
    id: 'chapter-4',
    number: 4,
    title: 'Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin',
    description:
      'Kenapa review tahunan gagal sebagai feedback loop, prinsip frekuensi coaching yang efektif, format agenda 1-on-1 yang bisa diulang tiap sesi, cara membedakan feedback yang berguna dari feedback kosong, dan tiga hal yang bikin ritme coaching beneran konsisten dijalankan.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas?',
    description:
      'Tiga lensa untuk mendiagnosis akar underperformance sebelum mengambil tindakan — skill gap (kemampuan belum ada), will gap (motivasi bermasalah), atau ekspektasi yang tidak pernah jelas — plus teknik tiga pertanyaan untuk membedakannya secara sistematis.',
    cards: chapter5Cards,
  },
]
