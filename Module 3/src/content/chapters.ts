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
    title: "Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme",
    description:
      'Kenapa rapat dadakan tiap ada masalah itu bukan tanda gesit, dan kenapa bisnis yang tenang itu hasil dari ritme tinjauan — bukan kebetulan.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan',
    description:
      'Peta lengkap 4 level ritme EBR — siapa yang terlibat di tiap level, kenapa altitude masalahnya berubah tiap naik level, dan kenapa melompati satu level itu bahaya.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu',
    description:
      'Format, agenda, dan siapa yang hadir di dua tier operasional paling bawah — termasuk mekanisme "parkir masalah" yang bikin huddle tetap singkat tanpa mengabaikan isu yang muncul.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis',
    description:
      'Format dan agenda dua tier strategis — bedanya bukan cuma soal frekuensi, tapi soal pertanyaan yang diajukan: "apakah kita eksekusi dengan baik" vs "apakah kita eksekusi hal yang benar."',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan',
    description:
      'Dua alat untuk menemukan akar masalah yang sesungguhnya: 5 Whys untuk masalah satu rantai, dan Fishbone untuk masalah yang faktornya datang dari banyak arah — plus cara memilih yang mana.',
    cards: chapter5Cards,
  },
  {
    id: 'chapter-6',
    number: 6,
    title: 'Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi',
    description:
      'Cara menutup sesi RCA dengan satu keputusan konkret — bukan obrolan bagus yang dilupakan: pertanyaan penutup wajib, Log Keputusan, dan dua kesalahan fasilitasi yang berlawanan.',
    cards: chapter6Cards,
  },
  {
    id: 'chapter-7',
    number: 7,
    title: 'Mengelola Eskalasi dan Akuntabilitas Lintas Level',
    description:
      'Tiga kriteria kapan masalah harus naik level, cara eskalasi yang membawa temuan RCA (bukan cuma "ada masalah"), konvensi status untuk mengawal Log Keputusan, dan framing untuk bisnis kecil.',
    cards: chapter7Cards,
  },
  {
    id: 'chapter-8',
    number: 8,
    title: 'Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap',
    description:
      'Playbook ringkas per tier (siapa pimpin, siapa hadir, agenda inti), izin eksplisit untuk mulai bertahap dari huddle harian, cadence review sistem itu sendiri setiap kuartal, dan laporan lengkap seluruh perjalanan EBR Anda dari Bab 1 sampai Bab 8.',
    cards: chapter8Cards,
  },
]
