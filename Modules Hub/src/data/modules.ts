import type { ChapterMeta } from '../content/module-1/chapters'
import { chapters as module1Chapters } from '../content/module-1/chapters'
import { chapters as module2Chapters } from '../content/module-2/chapters'
import { chapters as module3Chapters } from '../content/module-3/chapters'
import { chapters as module4Chapters } from '../content/module-4/chapters'
import { chapters as module5Chapters } from '../content/module-5/chapters'
import { chapters as module6Chapters } from '../content/module-6/chapters'
import { chapters as module7Chapters } from '../content/module-7/chapters'
import { chapters as module8Chapters } from '../content/module-8/chapters'
import { chapters as module9Chapters } from '../content/module-9/chapters'

export interface ModuleMeta {
  id: string
  number: number
  title: string
  description: string
  chapters: ChapterMeta[]
}

export const modules: ModuleMeta[] = [
  {
    id: 'module-1',
    number: 1,
    title: 'Bagaimana Mengaudit Bisnis Anda Sendiri',
    description: 'Audit rutin 3 Level bisnis Anda biar keputusan nggak lagi cuma tebak-tebakan.',
    chapters: module1Chapters,
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Bagaimana Menurunkan Target Besar Jadi KPI Harian yang Jelas',
    description:
      'Menurunkan target besar perusahaan jadi KPI harian yang jelas pemiliknya, dari Lag sampai Lead Metric.',
    chapters: module2Chapters,
  },
  {
    id: 'module-3',
    number: 3,
    title: 'Bagaimana Memasang Ritme Tinjauan Biar Bisnis Anda Nggak Kebakaran Terus',
    description:
      'Memasang ritme tinjauan berjenjang biar bisnis Anda tenang, bukan kebakaran tiap ada masalah.',
    chapters: module3Chapters,
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Bagaimana Membongkar Silo yang Bikin Serah Terima Antar Tim Macet',
    description:
      'Memetakan proses end-to-end dan membongkar titik silo yang bikin serah terima antar tim macet.',
    chapters: module4Chapters,
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Bagaimana Merombak SOP Berdebu Jadi Checklist yang Beneran Dipakai',
    description: 'Merombak SOP berdebu jadi checklist yang beneran dipakai di titik kerja.',
    chapters: module5Chapters,
  },
  {
    id: 'module-6',
    number: 6,
    title: 'Bagaimana Membangun Siklus Kinerja Biar Review Tahunan Nggak Kerja Sendirian',
    description:
      'Membangun siklus kinerja utuh — tujuan, coaching, tindakan korektif — biar review tahunan nggak lagi kerja sendirian.',
    chapters: module6Chapters,
  },
  {
    id: 'module-7',
    number: 7,
    title: "Bagaimana Merekrut Tanpa Modal 'Kelihatannya Cocok'",
    description:
      "Merancang model kompetensi dan alat seleksi berbasis bukti biar rekrutmen nggak lagi cuma modal 'kelihatannya cocok'.",
    chapters: module7Chapters,
  },
  {
    id: 'module-8',
    number: 8,
    title: 'Bagaimana Menjalankan Perubahan Biar Nggak Mati Pelan-Pelan di Lapangan',
    description:
      'Merancang rollout perubahan yang diagnosis resistensinya dulu, biar nggak mati pelan-pelan di lapangan.',
    chapters: module8Chapters,
  },
  {
    id: 'module-9',
    number: 9,
    title: 'Bagaimana Mengadopsi AI Biar Nggak Berakhir Ditinggalkan Kayak Tool Lain',
    description:
      'Memilih satu kasus pakai AI yang nyata dan menjalankannya sampai jadi kebiasaan tim — bukan eksperimen acak yang berakhir ditinggalkan seperti tool-tool lain.',
    chapters: module9Chapters,
  },
]
