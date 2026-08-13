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
    title:
      'Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai"',
    description:
      'Kenapa tool, sistem, atau SOP yang sudah dibeli atau dibuat dengan baik tetap bisa mati pelan-pelan di lapangan — dan perbedaan penting antara perubahan yang beneran terpakai vs perubahan yang cuma didiamkan.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan',
    description:
      'Peta lengkap dua tahap change management — Kesiapan & Buy-In, dan Eksekusi & Penguatan — kenapa kebanyakan bisnis SME melompat langsung ke tahap kedua, dan di mana persisnya bisnis Anda paling bolong.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan',
    description:
      'Empat lensa buat mendiagnosis akar penyebab resistensi tim secara spesifik — takut nggak kompeten, nggak jelas untungnya, trauma proyek sesaat, atau belum pernah dilatih — plus teknik diagnosis dan latihan klasifikasi kasus.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    title:
      'Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa',
    description:
      'Mengubah diagnosis resistensi dari Bab 3 jadi dua artefak konkret: kasus perubahan yang menjawab langsung lensa resistensi yang terdiagnosis, dan peta stakeholder untuk memprioritaskan siapa perlu diyakinkan duluan.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win',
    description:
      'Mengunci satu perubahan nyata dan merancang rencana rollout konkretnya dalam tiga bagian: rencana komunikasi, rencana pelatihan, dan quick win di awal — semuanya menjawab langsung diagnosis resistensi dan kasus perubahan dari Bab 3-4.',
    cards: chapter5Cards,
  },
]
