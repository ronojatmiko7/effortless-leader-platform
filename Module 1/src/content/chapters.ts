import { chapter1Cards } from './chapter1'
import { chapter2Cards } from './chapter2'
import { chapter3Cards } from './chapter3'
import { chapter4Cards } from './chapter4'
import { chapter5Cards } from './chapter5'
import { chapter6Cards } from './chapter6'
import { chapter7Cards } from './chapter7'
import { chapter8Cards } from './chapter8'
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
    title: 'Kenapa Bisnis Butuh Audit Rutin, Bukan Firefighting',
    description: 'Kenapa keputusan berdasar insting itu mahal, dan kenapa Anda butuh audit rutin.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Peta Audit Operasional — 3 Lapisan yang Harus Dicek',
    description:
      'Peta 3 lapisan bisnis Anda, dan kenapa masalah di satu lapisan sering akarnya di lapisan lain.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Mengaudit Lapisan Output — Apakah Anda Mengukur yang Benar',
    description:
      'Membedakan metrik yang benar-benar berguna dari metrik yang cuma bikin ngerasa aman.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'Mengaudit Lapisan Proses — Menemukan Titik Bocor di Alur Kerja',
    description: 'Memetakan alur kerja nyata dan menemukan titik yang paling boros.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Mengaudit Lapisan Input — Sumber Daya, Alat, dan Manusia',
    description: 'Menilai kesiapan tim, alat, dan bahan baku sebagai akar masalah.',
    cards: chapter5Cards,
  },
  {
    id: 'chapter-6',
    number: 6,
    title: 'Teknik Mengumpulkan Data Audit yang Objektif',
    description:
      'Cara menggali data lapangan tanpa bias, biar audit Anda bukan cuma insting versi baru.',
    cards: chapter6Cards,
  },
  {
    id: 'chapter-7',
    number: 7,
    title: 'Menilai & Memprioritaskan Temuan',
    description: 'Mengubah tumpukan temuan jadi daftar prioritas yang masuk akal.',
    cards: chapter7Cards,
  },
  {
    id: 'chapter-8',
    number: 8,
    title: 'Menyusun Rencana Aksi & Ritme Audit Berkelanjutan',
    description: 'Menyusun rencana aksi 90 hari dan mengunduh laporan audit lengkap Anda.',
    cards: chapter8Cards,
  },
]
