import type { ChapterMeta } from '../content/module-1/chapters'
import { chapters as module1Chapters } from '../content/module-1/chapters'
import { chapters as module2Chapters } from '../content/module-2/chapters'
import { chapters as module3Chapters } from '../content/module-3/chapters'
import { chapters as module4Chapters } from '../content/module-4/chapters'
import { chapters as module5Chapters } from '../content/module-5/chapters'
import { chapters as module6Chapters } from '../content/module-6/chapters'
import { chapters as module7Chapters } from '../content/module-7/chapters'
import { chapters as module8Chapters } from '../content/module-8/chapters'

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
    title: 'Enterprise Operational Audit',
    description: 'Audit rutin 3 lapisan bisnis Anda biar keputusan nggak lagi cuma tebak-tebakan.',
    chapters: module1Chapters,
  },
  {
    id: 'module-2',
    number: 2,
    title: 'KPI Architecture & Strategic Cascading',
    description:
      'Menurunkan target besar perusahaan jadi KPI harian yang jelas pemiliknya, dari Lag sampai Lead Metric.',
    chapters: module2Chapters,
  },
  {
    id: 'module-3',
    number: 3,
    title: 'Executive Business Review (EBR) Governance',
    description:
      'Memasang ritme tinjauan berjenjang biar bisnis Anda tenang, bukan kebakaran tiap ada masalah.',
    chapters: module3Chapters,
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Business Process Re-engineering (Silo-Breaking)',
    description:
      'Memetakan proses end-to-end dan membongkar titik silo yang bikin serah terima antar tim macet.',
    chapters: module4Chapters,
  },
  {
    id: 'module-5',
    number: 5,
    title: 'SOP Optimization & Usability Redesign',
    description: 'Merombak SOP berdebu jadi checklist yang beneran dipakai di titik kerja.',
    chapters: module5Chapters,
  },
  {
    id: 'module-6',
    number: 6,
    title: 'Performance Management System Overhaul',
    description:
      'Membangun siklus kinerja utuh — tujuan, coaching, tindakan korektif — biar review tahunan nggak lagi kerja sendirian.',
    chapters: module6Chapters,
  },
  {
    id: 'module-7',
    number: 7,
    title: 'Job Architecture & Competency Modeling',
    description:
      "Merancang model kompetensi dan alat seleksi berbasis bukti biar rekrutmen nggak lagi cuma modal 'kelihatannya cocok'.",
    chapters: module7Chapters,
  },
  {
    id: 'module-8',
    number: 8,
    title: 'Enterprise Change Management Rollout',
    description:
      'Merancang rollout perubahan yang diagnosis resistensinya dulu, biar nggak mati pelan-pelan di lapangan.',
    chapters: module8Chapters,
  },
]
