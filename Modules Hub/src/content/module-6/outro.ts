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
    title: 'Anda Sudah Membangun Sistem yang Kebanyakan Bisnis SME Belum Pernah Punya',
    body: [
      'Dari Bab 1 sampai Bab 8, Anda sudah membangun sesuatu yang konkret: satu anggota tim yang diidentifikasi di Bab 1, peta kondisi siklus PMS di bisnis Anda di Bab 2, tujuan kinerja yang kolaboratif di Bab 3, ritme coaching yang dirancang di Bab 4, diagnosis underperformance di Bab 5, jalur tindakan korektif di Bab 6, siklus utuh yang dirakit di Bab 7, dan playbook instalasi lengkap dengan pemilik, forum pemantau, tanggal mulai, serta jadwal tinjauan pertama dari Bab 8.',
      'Ini bukan cuma delapan bab yang Anda baca. Ini satu siklus manajemen kinerja yang dirancang dengan sengaja untuk beneran dipakai, bukan cuma ada di dokumen — dan "jebakan kosong di tengah" yang kita mulai bicarakan di Bab 1 sekarang punya jawaban yang jelas.',
      'Sebelum benar-benar selesai, mari lihat seberapa jauh Anda sudah bergerak sejak awal modul tadi — jawab pertanyaan yang sama seperti di awal. Sekali lagi, jawaban baru ditampilkan setelah semua pertanyaan ini selesai.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'posttest',
    'Sejauh Ini Anda Sudah Bergerak',
    'Naik atau belum, yang penting sekarang: benar-benar jalankan siklus ini di tim yang sudah Anda pilih, mulai dari tanggal mulai resmi dan tinjauan pertama yang sudah Anda tetapkan di Bab 8.',
  ),
]
