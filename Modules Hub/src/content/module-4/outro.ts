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
    title: 'Anda Sudah Membangun Proses yang Dirancang dengan Sengaja, Bukan Cuma "Jalan Aja Dulu"',
    body: [
      'Dari Bab 1 sampai Bab 8, Anda sudah membangun sesuatu yang kebanyakan pemilik bisnis nggak pernah sempat bikin. Dari serah terima yang berantakan yang Anda catat sendiri di Bab 1, Anda memetakan arsitektur proses 4 tingkat untuk bisnis Anda, mendiagnosis titik silo yang paling parah, menulis instruksi kerja dan titik pencegahan kualitas, sampai merombak satu proses lengkap dengan pemilik, SLA, dan playbook instalasinya.',
      'Peta proses ada. Diagnosis ada. Instruksi kerja ada. Titik pencegahan ada. Rancangan ulang dengan pemilik dan SLA ada. Silo yang bikin bisnis Anda bocor itu ternyata bukan kebetulan — dan sekarang Anda tahu persis cara membongkarnya.',
      'Sebelum benar-benar selesai, mari lihat seberapa jauh Anda sudah bergerak sejak awal modul tadi — jawab pertanyaan yang sama seperti di awal. Sekali lagi, jawaban baru ditampilkan setelah semua pertanyaan ini selesai.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'posttest',
    'Sejauh Ini Anda Sudah Bergerak',
    'Naik atau belum, yang penting sekarang: benar-benar instal satu proses yang sudah Anda rombak, jaga lewat forum pemantauan yang sudah Anda tetapkan di Bab 8, baru lanjut ke proses berikutnya.',
  ),
]
