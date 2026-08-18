import { Award } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const outroCards: Card[] = [
  {
    id: 'outro-summary',
    type: 'info',
    icon: Award,
    eyebrow: 'Modul Ini Hampir Selesai',
    title: 'Anda Sudah Membangun Profil Arsitektur Jabatan yang Utuh',
    body: [
      'Dari Bab 1 sampai Bab 8, Anda sudah membangun sesuatu yang jarang dimiliki bisnis SME: dimulai dari mengidentifikasi jebakan "kelihatannya cocok" di Bab 1, memetakan dua tahap arsitektur jabatan di Bab 2, membangun model kompetensi tiga lapis — Inti, Fungsional, Kepemimpinan — di Bab 3, menetapkan tingkat kemahiran dengan anchor perilaku yang bisa diamati di Bab 4, mendiagnosis di mana rekrutmen ad-hoc Anda selama ini bocor di Bab 5, merancang pertanyaan Behavioral Event Interviewing dan rubrik seleksi di Bab 6, merakit semuanya jadi satu profil arsitektur jabatan yang terintegrasi di lokakarya Bab 7, sampai menginstalnya jadi standar yang benar-benar dipakai — lengkap dengan pemilik kepatuhan, tanggal mulai, dan jadwal review — di Bab 8.',
      'Sebelum benar-benar selesai, mari lihat seberapa jauh Anda sudah bergerak sejak awal modul tadi — jawab pertanyaan yang sama seperti di awal. Sekali lagi, jawaban baru ditampilkan setelah semua pertanyaan ini selesai.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'posttest',
    'Sejauh Ini Anda Sudah Bergerak',
    'Naik atau belum, yang penting sekarang: pakai profil ini di rekrutmen berikutnya untuk peran yang sudah Anda rancang, mulai dari satu peran dulu seperti yang sudah Anda tetapkan di playbook instalasi Bab 8.',
  ),
]
