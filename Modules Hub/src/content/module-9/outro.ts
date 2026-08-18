import { PartyPopper } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const outroCards: Card[] = [
  {
    id: 'outro-summary',
    type: 'info',
    icon: PartyPopper,
    eyebrow: 'Modul Ini Hampir Selesai',
    title: 'Anda Baru Saja Membangun Sesuatu yang Kebanyakan Bisnis SME Belum Pernah Punya',
    body: [
      'Dari satu pemakaian AI yang diam-diam ditinggalkan atau baru mau dicoba di Bab 1, sampai paket adopsi AI yang utuh — kasus pakai yang dipilih sengaja, batasan data yang jelas, rancangan alur kerja yang teruji di lapangan, dan sekarang ritme evaluasi dengan pemilik yang jelas — Anda sudah membangun cara mengadopsi AI yang dirancang supaya bertahan, bukan cuma kelihatan keren di minggu pertama.',
      'Admin yang berhenti pakai AI begitu resign, link WhatsApp yang nggak pernah ditanya lagi, proyek yang hasilnya lumayan tapi nggak pernah diulang — tiga contoh yang mulai kita bicarakan di Bab 1 bukan nasib yang harus terjadi lagi di bisnis Anda. Sekarang Anda tahu persis cara mencegahnya.',
      'Sebelum benar-benar selesai, mari lihat seberapa jauh Anda sudah bergerak sejak awal modul tadi — jawab pertanyaan yang sama seperti di awal. Sekali lagi, jawaban baru ditampilkan setelah semua pertanyaan ini selesai.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'posttest',
    'Sejauh Ini Anda Sudah Bergerak',
    'Naik atau belum, yang penting sekarang: jalani ritme evaluasi yang sudah Anda tetapkan di Bab 8 sampai alur kerja pertama ini beneran jadi kebiasaan otomatis tim — baru pakai metodologi yang sama untuk alur kerja AI berikutnya.',
  ),
]
