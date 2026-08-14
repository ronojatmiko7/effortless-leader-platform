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
    title: 'Kenapa Deskripsi Jabatan yang Cuma Daftar Tugas Selalu Berujung Salah Rekrut — Jebakan "Kelihatannya Cocok"',
    description:
      'Kenapa proses rekrutmen yang sudah serius pun tetap bisa menghasilkan salah rekrut — dan perbedaan penting antara keputusan berbasis kesan vs keputusan berbasis kompetensi yang benar-benar diverifikasi.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Peta Arsitektur Jabatan: Dari Model Kompetensi ke Rekrutmen Berbasis Bukti',
    description:
      'Dua tahap arsitektur jabatan yang harus ada sebelum rekrutmen bisa berjalan dengan benar — model kompetensi dan rekrutmen berbasis bukti — dan kenapa kebanyakan bisnis SME melewatkan yang pertama.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Membangun Model Kompetensi: Kompetensi Inti, Fungsional, dan Kepemimpinan',
    description:
      'Tiga lapis model kompetensi — Inti, Fungsional, dan Kepemimpinan — dan teknik menurunkannya dari hasil kerja nyata yang diharapkan peran itu, bukan dari template generik.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'Menetapkan Tingkat Kemahiran — Dari Deskripsi Jabatan ke Standar yang Bisa Diukur',
    description:
      'Cara mengubah kompetensi yang masih abstrak jadi skala kemahiran dengan anchor perilaku yang bisa diamati — sehingga dua penilai yang berbeda bisa menggunakan standar yang sama.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Mendiagnosis Rekrutmen Ad-Hoc — Kenapa "Kelihatannya Cocok" Bukan Metode Seleksi',
    description:
      'Tiga lensa untuk mendiagnosis di mana proses rekrutmen yang ada sekarang rusak — kriteria tidak ada, interview tidak menguji kriteria, atau penilaian tidak konsisten — sebelum merancang alat screening di Bab 6.',
    cards: chapter5Cards,
  },
  {
    id: 'chapter-6',
    number: 6,
    title: 'Merancang Alat Penyaringan Berbasis Kompetensi: Behavioral Event Interviewing dan Rubrik Seleksi',
    description:
      'Cara merancang pertanyaan BEI yang diturunkan langsung dari model kompetensi, rubrik seleksi skor 1–4 yang dipetakan ke tingkat kemahiran, dan praktik panel scoring yang membuat penilaian konsisten antar pewawancara.',
    cards: chapter6Cards,
  },
  {
    id: 'chapter-7',
    number: 7,
    title: 'Lokakarya Arsitektur Jabatan: Merancang Profil Kompetensi dan Alat Seleksi untuk Satu Peran',
    description:
      'Lokakarya menyatukan model kompetensi, tingkat kemahiran, dan alat seleksi BEI + rubrik jadi satu profil arsitektur jabatan yang utuh untuk satu peran nyata — lengkap dengan cara memperkenalkannya tanpa terasa birokrasi berlebihan.',
    cards: chapter7Cards,
  },
  {
    id: 'chapter-8',
    number: 8,
    title: 'Menginstal Arsitektur Jabatan — Kepemilikan, Ritme Update, dan Laporan Lengkap',
    description:
      'Cara menginstal profil arsitektur jabatan jadi standar yang beneran dipakai tiap rekrutmen — bukan dokumen bagus yang dilupakan — dengan pemilik kepatuhan yang eksplisit, playbook instalasi ringkas, dan laporan lengkap dari seluruh perjalanan Bab 1–8.',
    cards: chapter8Cards,
  },
]
