import { Flag } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const outroCards: Card[] = [
  {
    id: 'outro-summary',
    type: 'info',
    icon: Flag,
    eyebrow: 'Modul Ini Hampir Selesai',
    title: 'Anda Sudah Membangun Paket Change Management yang Utuh dan Playbook Instalasinya',
    body: [
      'Dari Bab 1 sampai Bab 8, Anda sudah bergerak jauh: dari satu perubahan yang diam-diam ditinggalkan atau baru mau dijalankan, sampai diagnosis resistensi yang spesifik lewat empat lensa, kasus perubahan yang menjawab akar resistensi itu, peta stakeholder yang tahu siapa diyakinkan duluan, rencana rollout yang teruji di lapangan dengan komunikasi, pelatihan, dan quick win, dan sekarang ritme penguatan dengan pemilik yang jelas.',
      'Software yang ditinggalkan, SOP yang ditempel tapi nggak diikuti, mesin yang nganggur di pojokan — tiga contoh yang kita mulai bicarakan di awal modul ini bukan nasib yang harus terjadi lagi buat perubahan Anda. Sebelum benar-benar selesai, mari lihat seberapa jauh Anda sudah bergerak sejak awal modul tadi — jawab pertanyaan yang sama seperti di awal. Sekali lagi, jawaban baru ditampilkan setelah semua pertanyaan ini selesai.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'posttest',
    'Sejauh Ini Anda Sudah Bergerak',
    'Naik atau belum, yang penting sekarang: jalani ritme penguatan yang sudah Anda tetapkan di Bab 8, sampai perubahan pertama ini beneran jadi kebiasaan otomatis tim — baru pakai metodologi yang sama untuk perubahan berikutnya.',
  ),
]
