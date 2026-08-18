import { PartyPopper } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

// Appended to Chapter 8's own card array in chapters.ts (product decision
// Aug 18, v2) — NOT a separate screen. Summary card bridges into the
// posttest; the posttest's result card bridges into the module's close.
export const outroCards: Card[] = [
  {
    id: 'outro-summary',
    type: 'info',
    icon: PartyPopper,
    eyebrow: 'Modul Ini Hampir Selesai',
    title: 'Anda Sudah Membangun Sistem KPI yang Lengkap',
    body: [
      'Dari Bab 1 sampai Bab 8, Anda sudah belajar membedakan KPI yang beneran mengukur kesehatan bisnis dari yang cuma bikin merasa aman, membangun kerangka cascading untuk memecah target besar jadi aksi harian per divisi dan individu lengkap dengan Lag dan Lead Metric yang saling melengkapi, dan membangun dashboard serta ritme evaluasi yang menyerang akar masalah, bukan mencari kambing hitam.',
      'Sebelum benar-benar selesai, mari lihat seberapa jauh Anda sudah bergerak sejak awal modul tadi — jawab pertanyaan yang sama seperti di awal. Sekali lagi, jawaban baru ditampilkan setelah semua pertanyaan ini selesai.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'posttest',
    'Sejauh Ini Anda Sudah Bergerak',
    'Naik atau belum, yang penting sekarang: benar-benar jalankan sistem ini di bisnis Anda, mulai dari ritme review yang sudah Anda jadwalkan di Bab 8.',
  ),
]
