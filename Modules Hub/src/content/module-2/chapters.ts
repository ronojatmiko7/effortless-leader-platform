import { chapter1Cards } from './chapter1'
import { chapter2Cards } from './chapter2'
import { chapter3Cards } from './chapter3'
import { chapter4Cards } from './chapter4'
import { chapter5Cards } from './chapter5'
import { chapter6Cards } from './chapter6'
import { chapter7Cards } from './chapter7'
import { chapter8Cards } from './chapter8'
import { introCards } from './intro'
import { outroCards } from './outro'
import type { Card } from '../types/card'

export interface ChapterMeta {
  id: string
  number: number
  title: string
  description: string
  // Tags a chapter entry as the module's intro or outro block instead of a
  // regular numbered chapter (product decision Aug 18, v3): the module has
  // 10 entries total — intro, Bab 1-8, outro — each its own chapter in
  // ModuleHome's list and its own DeckViewer deck, not spliced into Bab 1's
  // or Bab 8's own cards. ModuleHome uses this to label the entry, pick its
  // badge icon, and exclude it from the "X dari 8 bab selesai" counter.
  kind?: 'intro' | 'chapter' | 'outro'
  cards: Card[]
}

export const chapters: ChapterMeta[] = [
  {
    id: 'chapter-intro',
    number: 0,
    kind: 'intro',
    title: 'Pendahuluan — Kenalan & Pretest',
    description:
      'Kenali dulu masalah yang mau kita bereskan di modul ini, apa yang akan Anda pelajari, dan jawab pretest singkat sebagai titik awal Anda.',
    cards: introCards,
  },
  {
    id: 'chapter-1',
    number: 1,
    kind: 'chapter',
    title: 'Kenapa KPI Anda Selama Ini Menipu — Jebakan KPI Basa-basi (Vanity Metrics)',
    description:
      "Kenapa terlihat 'sibuk' dan 'omzet naik' bisa menipu Anda, dan kenapa Anda butuh KPI yang benar-benar mengukur kesehatan bisnis, bukan cuma bikin ngerasa keren.",
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    kind: 'chapter',
    title: 'Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework)',
    description:
      'Peta besar cara memecah target tahunan perusahaan jadi target harian yang jelas untuk tiap divisi dan staf — dan kenapa melompati satu level di rantai ini sama bahayanya dengan KPI basa-basi.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    kind: 'chapter',
    title: 'Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar',
    description:
      'Cara membedakan Lag Metric yang benar-benar bukti dari yang cuma proxy, kenapa jeda waktu penting, dan kenapa satu angka doang nggak pernah cukup.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    kind: 'chapter',
    title: 'Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini',
    description:
      'Cara menguji Lead Metric asli lewat dua tes — predictive dan controllable — dan cara menghitung mundur dari target Lag ke angka aksi harian yang konkret.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    kind: 'chapter',
    title: 'Merancang Cascading KPI per Divisi, Tim, dan Individu',
    description:
      'Kerangka Output-Proses-Input buat nutup tiga area KPI bisnis Anda, contoh lintas industri, dan cara menempelkan satu nama pemilik yang jelas ke tiap KPI.',
    cards: chapter5Cards,
  },
  {
    id: 'chapter-6',
    number: 6,
    kind: 'chapter',
    title: 'Membangun Dashboard & Ritme Pemantauan yang Objektif',
    description:
      'Ritme cek yang beda buat Lead dan Lag, pilihan dashboard rendah-teknologi yang beneran bisa dipakai, dan siapa yang bertanggung jawab mencatat angkanya.',
    cards: chapter6Cards,
  },
  {
    id: 'chapter-7',
    number: 7,
    kind: 'chapter',
    title: 'Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam',
    description:
      'Cara membaca sinyal Lead merah vs Lag merah, cara evaluasi yang menyerang sistem bukan orang, dan teknik 5 Whys buat gali akar masalah sampai tuntas.',
    cards: chapter7Cards,
  },
  {
    id: 'chapter-8',
    number: 8,
    kind: 'chapter',
    title: 'Menyusun Rencana Aksi KPI & Ritme Berkelanjutan',
    description:
      'Struktur Apa-Siapa-Kapan buat rencana aksi, ritme review buat seluruh sistem KPI, izin buat bertahap, dan laporan lengkap perjalanan KPI Anda dari Bab 1.',
    cards: chapter8Cards,
  },
  {
    id: 'chapter-outro',
    number: 9,
    kind: 'outro',
    title: 'Penutup — Rangkuman & Posttest',
    description:
      'Rangkuman apa yang sudah Anda bangun di modul ini, plus posttest untuk melihat seberapa jauh Anda sudah bergerak.',
    cards: outroCards,
  },
]
