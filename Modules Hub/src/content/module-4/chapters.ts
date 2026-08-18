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
    title: 'Pendahuluan — Sebelum Membongkar Proses Anda',
    description: 'Kenali dulu kenapa KPI yang jelas dan rapat yang rutin saja belum cukup, apa yang akan Anda pelajari, dan jawab pretest singkat sebagai titik awal Anda.',
    cards: introCards,
  },
  {
    id: 'chapter-1',
    number: 1,
    title: 'Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo',
    description: 'Kenapa eksekusi tetap berantakan meski KPI sudah jelas dan ritme tinjauan sudah jalan — dan kenapa akarnya sering ada di titik serah terima antar tim yang tidak ada pemiliknya.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja',
    description: 'Peta besar L1 (peta bisnis end-to-end) sampai L4 (instruksi kerja/SOP), dan kenapa silo biasanya bersembunyi di celah antar level, bukan di dalam satu level.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End',
    description: 'Menggambar alur proses makro lintas departemen dan menandai setiap titik serah terima di sepanjang rantai — praktik langsung, bukan cuma teori.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis',
    description: 'Teknik mendiagnosis tiga penyakit proses yang berbeda — silo fungsional, approval berlapis, dan bottleneck biasa — lewat tiga pertanyaan sederhana.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi',
    description: 'Menulis prosedur (L3) dan instruksi kerja (L4) yang konkret dan bisa langsung dijalankan, biar proses tidak lagi bergantung ke ingatan satu orang.',
    cards: chapter5Cards,
  },
  {
    id: 'chapter-6',
    number: 6,
    title: 'Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan',
    description: 'Beda QC (menangkap cacat setelah kejadian) dan QA (mencegah sebelum kejadian) — dan merancang satu titik cek pencegahan nyata di proses Anda.',
    cards: chapter6Cards,
  },
  {
    id: 'chapter-7',
    number: 7,
    title: 'Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo',
    description: 'Sesi praktik menyatukan semua yang sudah dipelajari — memangkas approval berlebih, menetapkan pemilik proses, dan memasang SLA — jadi satu rancangan ulang yang utuh.',
    cards: chapter7Cards,
  },
  {
    id: 'chapter-8',
    number: 8,
    title: 'Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap',
    description: 'Izin eksplisit untuk mulai dari satu proses dulu, menghubungkan pemantauannya ke ritme tinjauan yang ada, dan laporan lengkap seluruh perjalanan rekayasa ulang proses Anda dari Bab 1 sampai Bab 8.',
    cards: chapter8Cards,
  },
  {
    id: 'chapter-outro',
    number: 9,
    kind: 'outro',
    title: 'Penutup — Proses Baru, Siap Dijalankan',
    description: 'Rangkuman rancangan ulang proses yang sudah Anda bangun di modul ini, plus posttest untuk melihat seberapa jauh Anda sudah bergerak.',
    cards: outroCards,
  },
]
