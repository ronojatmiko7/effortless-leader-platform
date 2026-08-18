import { HeartHandshake, CalendarX2, Compass } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const introCards: Card[] = [
  {
    id: 'intro-greeting',
    type: 'info',
    icon: HeartHandshake,
    eyebrow: 'Halo, Sebelum Kita Mulai',
    title: 'Selamat Datang di Modul Manajemen Kinerja Anda',
    body: [
      'Senang Anda sampai di modul ini. Modul ini akan mengubah cara Anda mengelola kinerja tim — dari sekadar menunggu review tahunan dan berharap semuanya baik-baik saja, jadi punya siklus kinerja yang beneran berjalan sepanjang tahun.',
      'Tapi sebelum masuk ke sistemnya, coba jujur dulu soal satu hal yang mungkin sedang terjadi di tim Anda sekarang ini.',
    ],
  },
  {
    id: 'intro-problem',
    type: 'info',
    icon: CalendarX2,
    eyebrow: 'Masalah yang Sering Terjadi',
    title: 'Karyawan Kaget Pas Review — Padahal Masalahnya Sudah Ada Sejak Berbulan-bulan Lalu',
    body: [
      'Bayangkan seorang manajer duduk dengan salah satu stafnya untuk review tahunan. Stafnya kaget — nilainya jauh di bawah ekspektasi, padahal selama ini dia merasa bekerja normal. Yang nggak pernah dikomunikasikan: manajernya sudah melihat ada yang bermasalah sejak berbulan-bulan sebelumnya, tapi nggak pernah dibahas sampai semuanya dikeluarkan sekaligus di akhir tahun.',
      'Ini bukan kejadian langka. Banyak bisnis punya titik awal yang jelas (karyawan direkrut, dikasih tahu jabatannya) dan titik akhir yang jelas (dipecat kalau sudah terlalu parah, atau resign karena bosan) — tapi tidak ada apa pun yang sistematis di antara keduanya. Tidak ada tujuan kinerja yang jelas per periode, tidak ada feedback rutin, tidak ada proses formal sebelum keputusan besar diambil.',
      'Itu yang disebut jebakan kosong di tengah — dan itu sebabnya Anda perlu modul ini, supaya feedback berhenti jadi kejutan tahunan dan mulai jadi percakapan yang rutin dan bisa ditindaklanjuti.',
    ],
  },
  {
    id: 'intro-what',
    type: 'info',
    icon: Compass,
    eyebrow: 'Apa yang Akan Anda Pelajari',
    title: 'Siklus Kinerja Lengkap — Dari Penetapan Tujuan sampai Jalur Tindakan Korektif',
    body: [
      'Di modul ini, Anda akan belajar peta lengkap siklus manajemen kinerja yang punya tiga tahap: menetapkan tujuan kinerja yang kolaboratif dan diturunkan jelas dari target bisnis, merancang ritme coaching 1-on-1 yang realistis untuk bisnis SME sekaligus mendiagnosis underperformance lewat tiga lensa — skill gap, will gap, atau ekspektasi yang tidak pernah jelas, dan membangun jalur tindakan korektif yang formal dan berjenjang (coaching tertarget, pelatihan, PIP) sebelum keputusan besar diambil. Semuanya ditutup dengan lokakarya perancangan siklus utuh dan cara menginstalnya jadi rutinitas bisnis yang berjalan sendiri.',
      'Supaya nanti di akhir modul Anda bisa lihat sendiri seberapa jauh sudah bergerak, jawab dulu beberapa pertanyaan berikut. Ini bukan ujian — jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai, jadi jawab saja sesuai yang Anda tahu sekarang.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'pretest',
    'Ini Titik Awal Anda',
    'Skor ini bukan buat dinilai — ini cuma potret titik awal Anda sebelum masuk modul. Sekarang mari masuk ke Bab 1, supaya Anda tahu persis kenapa review tahunan saja selalu gagal dan apa itu jebakan kosong di tengah yang mungkin sedang aktif berjalan di tim Anda.',
  ),
]
