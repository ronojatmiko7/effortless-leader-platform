import { chapter1Cards } from './chapter1'
import { chapter2Cards } from './chapter2'
import { chapter3Cards } from './chapter3'
import { chapter4Cards } from './chapter4'
import { chapter5Cards } from './chapter5'
import { chapter6Cards } from './chapter6'
import { chapter7Cards } from './chapter7'
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
    title: 'Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu',
    description:
      'Kenapa SOP yang sudah ditulis, dicetak, bahkan ditempel di dinding tetap tidak dipakai — dan perbedaan penting antara SOP yang eksis di dokumen vs SOP yang benar-benar membentuk cara kerja sehari-hari.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif',
    description:
      'Skala 4 level untuk mengukur di mana posisi bisnis Anda sekarang — dari SOP yang nyaris tidak ada sampai kepatuhan yang diverifikasi aktif — dan ke mana harus menuju.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi?',
    description:
      'Cara mendiagnosis akar masalah spesifik di balik SOP yang tidak dipakai — tiga lensa (format, akses, relevansi) dan tiga pertanyaan diagnostik untuk menemukan apa yang perlu dibenahi, bukan asal ganti semua.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan',
    description:
      'Empat prinsip dan satu teknik konversi untuk mengubah SOP naratif yang tidak pernah dibuka jadi checklist ringkas yang bisa diikuti langsung di titik kerja.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder',
    description:
      'Prinsip lokasi, pilihan media fisik vs digital, struktur folder yang bisa ditemukan dalam satu menit, dan cara menetapkan pemilik SOP agar tidak diam-diam jadi dokumen berdebu lagi.',
    cards: chapter5Cards,
  },
  {
    id: 'chapter-6',
    number: 6,
    title: 'Merancang Pengecekan Kepatuhan Rutin — Dari \'Diikuti Sebagian\' ke \'Diverifikasi Aktif\'',
    description:
      'Tiga teknik verifikasi kepatuhan (spot check terjadwal, self-audit checklist, sinyal tidak langsung), cara menyambungkannya ke ritme yang sudah ada, dan cara merespons ketidakpatuhan yang ditemukan.',
    cards: chapter6Cards,
  },
  {
    id: 'chapter-7',
    number: 7,
    title: 'Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai',
    description:
      'Lokakarya menyatukan diagnosis (Bab 3), format baru (Bab 4), akses di titik kerja (Bab 5), dan mekanisme kepatuhan (Bab 6) jadi satu rancangan ulang yang utuh — termasuk cara memperkenalkan SOP baru ke tim tanpa resistensi.',
    cards: chapter7Cards,
  },
]
