import { Hand, Flame, Compass } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const introCards: Card[] = [
  {
    id: 'intro-greeting',
    type: 'info',
    icon: Hand,
    eyebrow: 'Halo, Sebelum Kita Mulai',
    title: 'Selamat Datang di Modul Executive Business Review (EBR)',
    body: [
      'Senang Anda sampai di modul ini. Modul ini akan mengubah cara bisnis Anda menemukan masalah — dari selalu kaget belakangan, jadi tahu duluan sebelum masalahnya sempat membesar.',
      'Tapi sebelum masuk ke sistemnya, coba jujur dulu soal satu pola yang mungkin sedang terjadi di bisnis Anda sekarang ini.',
    ],
  },
  {
    id: 'intro-problem',
    type: 'info',
    icon: Flame,
    eyebrow: 'Masalah yang Sering Terjadi',
    title: 'Bisnis Anda Cuma Rapat Serius Kalau Sudah Kebakaran',
    body: [
      'Jam 9 malam, HP Anda bunyi. Klien besar komplain, ancam putus kontrak. Anda buru-buru bikin grup WA darurat, manggil semua orang yang relevan, rapat dadakan sampai larut — persis seperti yang mungkin sudah Anda alami sendiri belakangan ini.',
      'Itu bukan kepemimpinan gesit. Itu tanda bisnis Anda cuma punya satu mode: bereaksi setelah api sudah membesar — dan sialnya, ini bukan cuma soal komplain pelanggan. Karyawan kunci resign mendadak, saldo rekening tiba-tiba tipis, angka keuangan baru kelihatan buruk pas tutup buku — semuanya gejala yang sama.',
      'Itu sebabnya Anda perlu modul ini — supaya Anda berhenti menunggu dikabari oleh kejadian buruk, dan mulai memasang ritme tinjauan yang kasih tahu Anda duluan.',
    ],
  },
  {
    id: 'intro-what',
    type: 'info',
    icon: Compass,
    eyebrow: 'Apa yang Akan Anda Pelajari',
    title: 'Sistem EBR Lengkap — Dari Ritme Harian sampai Playbook yang Bertahan Lama',
    body: [
      'Di modul ini, Anda akan belajar merancang arsitektur ritme tinjauan 4 tier — huddle harian, tinjauan mingguan, bulanan, sampai triwulanan — dan kenapa melompati satu level itu bahaya. Anda juga akan belajar dua alat root cause analysis (5 Whys dan Fishbone) untuk membedah masalah tanpa tebak-tebakan, cara menutup diskusi jadi keputusan konkret lewat Log Keputusan, cara mengelola eskalasi lintas level, sampai playbook rollout bertahap yang benar-benar bertahan — bukan sistem yang bagus di kertas tapi mati di minggu kedua.',
      'Supaya nanti di akhir modul Anda bisa lihat sendiri seberapa jauh sudah bergerak, jawab dulu beberapa pertanyaan berikut. Ini bukan ujian — jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai, jadi jawab saja sesuai yang Anda tahu sekarang.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'pretest',
    'Ini Titik Awal Anda',
    'Skor ini bukan buat dinilai — ini cuma potret titik awal Anda sebelum masuk modul. Sekarang mari masuk ke Bab 1, supaya Anda merasakan sendiri kenapa bisnis yang cuma rapat waktu kebakaran itu pola yang mahal, dan gimana bisnis yang tenang justru dibangun dari ritme.',
  ),
]
