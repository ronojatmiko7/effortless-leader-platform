import { Handshake, UserX, Map } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const introCards: Card[] = [
  {
    id: 'intro-greeting',
    type: 'info',
    icon: Handshake,
    eyebrow: 'Halo, Sebelum Kita Mulai',
    title: 'Selamat Datang di Modul Arsitektur Jabatan & Model Kompetensi',
    body: [
      'Senang Anda sampai di modul ini. Modul ini akan mengubah cara Anda merekrut dan mempromosikan orang — dari sekadar "orangnya kelihatan cocok" jadi benar-benar tahu, dengan bukti konkret, apakah kompetensi yang dibutuhkan perannya sudah ada atau belum.',
      'Tapi sebelum masuk ke sistemnya, coba jujur dulu soal satu hal yang mungkin pernah terjadi di proses rekrutmen atau promosi Anda sendiri.',
    ],
  },
  {
    id: 'intro-problem',
    type: 'info',
    icon: UserX,
    eyebrow: 'Masalah yang Sering Terjadi',
    title: 'Orangnya Lolos Wawancara dengan Lancar — Tiga Bulan Kemudian Baru Ketahuan Nggak Bisa Kerjanya',
    body: [
      'Sebuah bisnis butuh staff admin-keuangan. Prosesnya serius — tiga tahap wawancara, semua kandidat dites. Yang dipilih: orang yang komunikatif banget, jawabannya lancar, chemistry-nya nyambung sama seluruh tim.',
      'Tiga bulan kemudian ketahuan: dia tidak bisa membuat laporan arus kas dari nol. Bisa input angka kalau template sudah ada, tapi begitu harus merancang laporan sendiri atau menjelaskan angkanya ke pemilik — berhenti. Wawancaranya tidak pernah menguji skill itu secara spesifik. Yang diuji cuma kecocokan dan kesan umum.',
      'Itu sebabnya Anda butuh modul ini — supaya rekrutmen dan promosi Anda berhenti bergantung pada kesan yang enak, dan mulai berdiri di atas kompetensi yang benar-benar diverifikasi.',
    ],
  },
  {
    id: 'intro-what',
    type: 'info',
    icon: Map,
    eyebrow: 'Apa yang Akan Anda Pelajari',
    title: 'Dua Tahap Arsitektur Jabatan — Dari Model Kompetensi sampai Alat Seleksi yang Benar-benar Menguji',
    body: [
      'Di modul ini, Anda akan membangun arsitektur jabatan lengkap dalam dua tahap. Tahap 1 — Model Kompetensi: Anda akan memetakan dua tahap arsitektur jabatan secara utuh, membangun model kompetensi tiga lapis (Inti, Fungsional, Kepemimpinan) untuk satu peran nyata, lalu menetapkan tingkat kemahiran yang konkret dengan anchor perilaku yang bisa diamati. Tahap 2 — Rekrutmen Berbasis Kompetensi: Anda akan mendiagnosis kenapa rekrutmen ad-hoc selalu bermasalah, merancang pertanyaan Behavioral Event Interviewing plus rubrik seleksi, merakit semuanya jadi satu profil arsitektur jabatan yang utuh di lokakarya Bab 7, lalu menginstalnya jadi sistem yang benar-benar dipakai dengan pemilik kepatuhan yang eksplisit di Bab 8.',
      'Supaya nanti di akhir modul Anda bisa lihat sendiri seberapa jauh sudah bergerak, jawab dulu beberapa pertanyaan berikut. Ini bukan ujian — jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai, jadi jawab saja sesuai yang Anda tahu sekarang.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'pretest',
    'Ini Titik Awal Anda',
    'Skor ini bukan buat dinilai — ini cuma potret titik awal Anda sebelum masuk modul. Sekarang mari masuk ke Bab 1, supaya Anda tahu persis kenapa wawancara yang berjalan lancar bisa tetap berujung salah rekrut tiga bulan kemudian.',
  ),
]
