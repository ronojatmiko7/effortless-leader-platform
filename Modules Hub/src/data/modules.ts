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
    description: 'Pelajari bagaimana caranya menemukan titik-titik kebocoran tersembunyi dalam bisnis Anda.',
    chapters: module1Chapters,
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Bagaimana menyusun KPI untuk bisnis Anda',
    description:
      'Pelajarai bagaimana cara menyusun KPI yang benar-benar mengukur kesehatan bisnis Anda.',
    chapters: module2Chapters,
  },
  {
    id: 'module-3',
    number: 3,
    title: 'Bagaimana memonitor kesehatan bisnis Anda',
    description:
      'Pelajari bagaimana caranya mencegah masalah kecil sebelum mereka berkembang menjadi masalah besar.',
    chapters: module3Chapters,
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Bagaimana merancang proses bisnis Anda',
    description:
      'Pelajari bagaimana cara membongkar silo dan memperbaiki kebocoran dalam bisnis Anda.',
    chapters: module4Chapters,
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Bagaimana membuat SOP yang ditaati tim Anda',
    description: 'Pelajari bagaimana cara membuat SOP yang benar-benar dipakai dan ditaati oleh tim Anda.',
    chapters: module5Chapters,
  },
  {
    id: 'module-6',
    number: 6,
    title: 'Bagaimana membangun manajemen kinerja tim Anda',
    description:
      'Pelajari bagaimana cara membangun sistem manajemen kinerja yang efektif untuk tim Anda.',
    chapters: module6Chapters,
  },
  {
    id: 'module-7',
    number: 7,
    title: "Bagaimana menyusun standar kompetensi karyawan Anda",
    description:
      "Pelajari bagaimana cara menyusun standar kompetensi yang relevan dan merekrut karyawan yang tepat.",
    chapters: module7Chapters,
  },
  {
    id: 'module-8',
    number: 8,
    title: 'Bagaimana mengelola perubahan di bisnis Anda',
    description:
      'Pelajari bagaimana cara mengelola perubahan di bisnis Anda secara efektif.',
    chapters: module8Chapters,
  },
  {
    id: 'module-9',
    number: 9,
    title: 'Bagaimana menggunakan AI untuk efisiensi bisnis Anda',
    description:
      'Pelajari bagaimana AI dapat digunakan untuk meningkatkan efisiensi bisnis Anda.',
    chapters: module9Chapters,
  },
]
