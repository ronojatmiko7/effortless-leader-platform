import { PartyPopper } from 'lucide-react'
import type { Card } from '../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const outroCards: Card[] = [
  {
    id: 'outro-summary',
    type: 'info',
    icon: PartyPopper,
    eyebrow: 'Modul Ini Hampir Selesai',
    title: 'Anda Baru Saja Membangun Sistem yang Kebanyakan Bisnis Belum Pernah Punya',
    body: [
      'Dari Bab 1 sampai Bab 8, Anda sudah bergerak jauh: mulai dari mengidentifikasi satu SOP yang Anda tahu sering diabaikan, mengukur separah apa dengan skala kematangan, mendiagnosis apakah akar masalahnya di format, akses, atau relevansi, sampai merombak SOP itu jadi checklist yang bisa diikuti langsung di titik kerja.',
      'Rombakan itu sekarang punya lokasi akses yang jelas di lapangan, mekanisme verifikasi kepatuhan yang aktif mengecek, pemilik kepatuhan dengan nama yang bisa disebut, dan tanggal mulai berlaku yang konkret — bukan lagi sekadar niat baik yang gampang luntur begitu minggu sibuk datang.',
      'Sebelum benar-benar selesai, mari lihat seberapa jauh Anda sudah bergerak sejak awal modul tadi — jawab pertanyaan yang sama seperti di awal. Sekali lagi, jawaban baru ditampilkan setelah semua pertanyaan ini selesai.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'posttest',
    'Sejauh Ini Anda Sudah Bergerak',
    'Naik atau belum, yang penting sekarang: benar-benar jalankan SOP pertama yang sudah Anda rombak, biarkan stabil beberapa minggu dengan pemilik dan ritme cek yang sudah Anda tetapkan di Bab 8, baru pakai metodologi yang sama untuk SOP berikutnya.',
  ),
]
