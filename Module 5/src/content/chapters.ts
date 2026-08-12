import { chapter1Cards } from './chapter1'
import { chapter2Cards } from './chapter2'
import { chapter3Cards } from './chapter3'
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
]
