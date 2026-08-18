import { Trophy } from 'lucide-react'
import type { Card } from '../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const outroCards: Card[] = [
  {
    id: 'outro-summary',
    type: 'info',
    icon: Trophy,
    eyebrow: 'Modul Ini Hampir Selesai',
    title: 'Anda Sudah Membangun Rantai Audit Operasional yang Lengkap',
    body: [
      'Dari Bab 1 sampai Bab 8, Anda sudah menulis gejala yang ditemukan, titik bocor di alur kerja, sumber daya yang dicurigai jadi akar masalah, rencana verifikasi dengan pertanyaan netral, dua penilaian temuan lengkap dengan skor, rencana aksi yang jelas Apa-Siapa-Kapannya, sampai jadwal audit berikutnya yang sudah Anda tandai di kalender.',
      'Kebanyakan orang berhenti di "saya tahu masalahnya". Anda sudah selangkah lebih jauh — Anda tahu masalahnya, tahu akarnya, dan tahu apa yang harus dikerjakan besok.',
      'Sebelum benar-benar selesai, mari lihat seberapa jauh Anda sudah bergerak sejak awal modul tadi — jawab pertanyaan yang sama seperti di awal. Sekali lagi, jawaban baru ditampilkan setelah semua pertanyaan ini selesai.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'posttest',
    'Sejauh Ini Anda Sudah Bergerak',
    'Naik atau belum, yang penting sekarang: benar-benar jalankan rencana aksi ini di bisnis Anda, mulai dari tanggal audit berikutnya yang sudah Anda tandai di Bab 8.',
  ),
]
