import { Trophy } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const outroCards: Card[] = [
  {
    id: 'outro-summary',
    type: 'info',
    icon: Trophy,
    eyebrow: 'Modul Ini Hampir Selesai',
    title: 'Anda Sudah Membangun Ritme EBR yang Nyata',
    body: [
      'Dari Bab 1 sampai Bab 8, Anda sudah bergerak dari kaget belakangan ke tahu duluan: merancang arsitektur ritme 4 tier, mendesain huddle harian dan tinjauan mingguan yang tidak buang waktu, membedah masalah sampai ke akarnya lewat 5 Whys dan Fishbone, menutup diskusi jadi keputusan konkret di Log Keputusan, mengelola eskalasi lintas level, sampai menyusun playbook rollout bertahap dan jadwal review sistem yang jelas — bukan sistem yang bagus di kertas tapi mati di minggu kedua.',
      'Sebelum benar-benar selesai, mari lihat seberapa jauh Anda sudah bergerak sejak awal modul tadi — jawab pertanyaan yang sama seperti di awal. Sekali lagi, jawaban baru ditampilkan setelah semua pertanyaan ini selesai.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'posttest',
    'Sejauh Ini Anda Sudah Bergerak',
    'Naik atau belum, yang penting sekarang: benar-benar jalankan playbook tier pertama yang sudah Anda rancang di Bab 8, mulai dari huddle harian minggu depan.',
  ),
]
