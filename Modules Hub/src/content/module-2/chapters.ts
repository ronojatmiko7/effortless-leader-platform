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
    title: 'Kenapa KPI Anda Selama Ini Menipu — Jebakan KPI Basa-basi (Vanity Metrics)',
    description:
      "Kenapa terlihat 'sibuk' dan 'omzet naik' bisa menipu Anda, dan kenapa Anda butuh KPI yang benar-benar mengukur kesehatan bisnis, bukan cuma bikin ngerasa keren.",
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework)',
    description:
      'Peta besar cara memecah target tahunan perusahaan jadi target harian yang jelas untuk tiap divisi dan staf — dan kenapa melompati satu level di rantai ini sama bahayanya dengan KPI basa-basi.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar',
    description:
      'Cara membedakan Lag Metric yang benar-benar bukti dari yang cuma proxy, kenapa jeda waktu penting, dan kenapa satu angka doang nggak pernah cukup.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini',
    description:
      'Cara menguji Lead Metric asli lewat dua tes — predictive dan controllable — dan cara menghitung mundur dari target Lag ke angka aksi harian yang konkret.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Merancang Cascading KPI per Divisi, Tim, dan Individu',
    description:
      'Kerangka Output-Proses-Input buat nutup tiga area KPI bisnis Anda, contoh lintas industri, dan cara menempelkan satu nama pemilik yang jelas ke tiap KPI.',
    cards: chapter5Cards,
  },
  {
    id: 'chapter-6',
    number: 6,
    title: 'Membangun Dashboard & Ritme Pemantauan yang Objektif',
    description:
      'Ritme cek yang beda buat Lead dan Lag, pilihan dashboard rendah-teknologi yang beneran bisa dipakai, dan siapa yang bertanggung jawab mencatat angkanya.',
    cards: chapter6Cards,
  },
  {
    id: 'chapter-7',
    number: 7,
    title: 'Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam',
    description:
      'Cara membaca sinyal Lead merah vs Lag merah, cara evaluasi yang menyerang sistem bukan orang, dan teknik 5 Whys buat gali akar masalah sampai tuntas.',
    cards: chapter7Cards,
  },
  {
    id: 'chapter-8',
    number: 8,
    title: 'Menyusun Rencana Aksi KPI & Ritme Berkelanjutan',
    description:
      'Struktur Apa-Siapa-Kapan buat rencana aksi, ritme review buat seluruh sistem KPI, izin buat bertahap, dan laporan lengkap perjalanan KPI Anda dari Bab 1.',
    cards: chapter8Cards,
  },
]
