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
  kind?: 'intro' | 'chapter' | 'outro'
  cards: Card[]
}

export const chapters: ChapterMeta[] = [
  {
    id: 'chapter-intro',
    number: 0,
    kind: 'intro',
    title: 'Pendahuluan — Kenalan & Pretest',
    description: 'Kenali dulu jebakan kosong di tengah yang mau kita bereskan di modul ini, apa yang akan Anda pelajari, dan jawab pretest singkat sebagai titik awal Anda.',
    cards: introCards,
  },
  {
    id: 'chapter-1',
    number: 1,
    kind: 'chapter',
    title: 'Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah',
    description: 'Kenapa bisnis yang sudah punya KPI dan review tahunan tetap punya tim yang underperform — dan perbedaan penting antara satu titik evaluasi vs siklus kinerja utuh yang jalan sepanjang tahun.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    kind: 'chapter',
    title: 'Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif',
    description: 'Tiga tahap siklus PMS yang harus berputar terus — penetapan tujuan, coaching rutin, tindakan korektif — kenapa bisnis SME hampir selalu hanya menjalankan satu, dan di mana tahap yang paling bolong di bisnis Anda.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    kind: 'chapter',
    title: 'Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas',
    description: 'Empat prinsip yang membedakan tujuan yang beneran dimiliki karyawan dari tujuan yang cuma ada di dokumen — plus teknik percakapan cascading tiga langkah untuk menurunkan tujuan tim jadi tujuan individu yang spesifik, terukur, dan disepakati bersama.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    kind: 'chapter',
    title: 'Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin',
    description: 'Kenapa review tahunan gagal sebagai feedback loop, prinsip frekuensi coaching yang efektif, format agenda 1-on-1 yang bisa diulang tiap sesi, cara membedakan feedback yang berguna dari feedback kosong, dan tiga hal yang bikin ritme coaching beneran konsisten dijalankan.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    kind: 'chapter',
    title: 'Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas?',
    description: 'Tiga lensa untuk mendiagnosis akar underperformance sebelum mengambil tindakan — skill gap (kemampuan belum ada), will gap (motivasi bermasalah), atau ekspektasi yang tidak pernah jelas — plus teknik tiga pertanyaan untuk membedakannya secara sistematis.',
    cards: chapter5Cards,
  },
  {
    id: 'chapter-6',
    number: 6,
    kind: 'chapter',
    title: 'Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal',
    description: 'Tiga ruas tangga tindakan korektif yang formal dan berjenjang — coaching tertarget, pelatihan, dan PIP — cara memetakan lensa diagnosis Bab 5 ke ruas yang paling relevan, kapan eskalasi tepat vs kapan perlu lebih banyak waktu di satu ruas, dan bagaimana merancang jalur lengkap untuk satu kasus nyata.',
    cards: chapter6Cards,
  },
  {
    id: 'chapter-7',
    number: 7,
    kind: 'chapter',
    title: 'Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran',
    description: 'Lokakarya menyatukan penetapan tujuan (Bab 3), ritme coaching (Bab 4), dan jalur tindakan korektif (Bab 5–6) menjadi satu siklus manajemen kinerja yang utuh untuk satu tim atau peran nyata — termasuk cara memperkenalkannya ke tim tanpa memicu defensivitas.',
    cards: chapter7Cards,
  },
  {
    id: 'chapter-8',
    number: 8,
    kind: 'chapter',
    title: 'Menginstal Siklus PMS — Kepemilikan, Ritme, dan Laporan Lengkap',
    description: 'Cara menginstal siklus PMS yang sudah dirancang biar beneran jalan — menetapkan pemilik kepatuhan yang eksplisit, izin untuk mulai dari satu tim dulu, menghubungkan ke sistem yang sudah ada, playbook instalasi singkat, dan laporan lengkap perjalanan dari Bab 1 sampai Bab 8.',
    cards: chapter8Cards,
  },
  {
    id: 'chapter-outro',
    number: 9,
    kind: 'outro',
    title: 'Penutup — Rangkuman & Posttest',
    description: 'Rangkuman siklus manajemen kinerja yang sudah Anda bangun di modul ini, plus posttest untuk melihat seberapa jauh Anda sudah bergerak.',
    cards: outroCards,
  },
]
