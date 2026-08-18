import { Handshake, Siren, Compass } from 'lucide-react'
import type { Card } from '../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const introCards: Card[] = [
  {
    id: 'intro-greeting',
    type: 'info',
    icon: Handshake,
    eyebrow: 'Halo, Sebelum Kita Mulai',
    title: 'Selamat Datang di Modul Audit Operasional Anda',
    body: [
      'Senang Anda sampai di modul ini. Modul ini akan mengubah cara Anda menjalankan bisnis — dari yang tadinya sibuk memadamkan masalah yang sama berulang-ulang, jadi tahu persis di titik mana sebenarnya bisnis Anda bocor, sebelum jadi krisis.',
      'Tapi sebelum masuk ke cara auditnya, coba jujur dulu soal satu kebiasaan yang mungkin sedang terjadi di bisnis Anda sekarang ini.',
    ],
  },
  {
    id: 'intro-problem',
    type: 'info',
    icon: Siren,
    eyebrow: 'Masalah yang Sering Terjadi',
    title: 'Anda CEO, atau Petugas Damkar Bisnis Sendiri?',
    body: [
      'Coba ingat minggu ini saja: berapa kali Anda turun tangan langsung menyelesaikan masalah — pelanggan komplain, pengiriman telat, karyawan salah kirim invoice? Rasanya produktif setiap kali berhasil menyelesaikannya.',
      'Tapi masalah yang sama itu, apakah benar baru pertama kali terjadi? Atau sebenarnya ini sudah yang ketiga kalinya bulan ini, cuma dianggap "ya udah, kejadian lagi aja"? Kalau bisnis Anda terus-menerus memadamkan api yang sama, itu bukan tanda sial — itu tanda ada akar masalah yang tidak pernah benar-benar dibereskan, cuma ditambal sementara.',
      'Itu sebabnya Anda butuh cara mengaudit yang jelas — supaya Anda berhenti menebak-nebak, dan mulai tahu persis di Level mana masalahnya bersembunyi.',
    ],
  },
  {
    id: 'intro-what',
    type: 'info',
    icon: Compass,
    eyebrow: 'Apa yang Akan Anda Pelajari',
    title: 'Peta Audit 3 Level — Output, Proses, Input',
    body: [
      'Di modul ini, Anda akan belajar peta audit 3 Level bisnis Anda: Level Output (apakah Anda mengukur hal yang benar-benar penting, bukan cuma yang kelihatan keren), Level Proses (di mana alur kerja Anda paling banyak boros waktu dan biaya), dan Level Input (apakah tim, alat, dan bahan baku Anda benar-benar siap). Anda juga akan belajar mengumpulkan data lapangan tanpa bias, menilai dan memprioritaskan temuan, sampai menyusun rencana aksi yang jelas Apa-Siapa-Kapannya dan ritme audit yang bisa terus Anda jalankan — lengkap dengan laporan audit yang bisa Anda unduh di akhir modul.',
      'Supaya nanti di akhir modul Anda bisa lihat sendiri seberapa jauh sudah bergerak, jawab dulu beberapa pertanyaan berikut. Ini bukan ujian — jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai, jadi jawab saja sesuai yang Anda tahu sekarang.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'pretest',
    'Ini Titik Awal Anda',
    'Skor ini bukan buat dinilai — ini cuma potret titik awal Anda sebelum masuk modul. Sekarang mari masuk ke Bab 1, supaya Anda tahu jawabannya: sebenarnya selama ini Anda menjalankan bisnis sebagai CEO, atau cuma jadi petugas pemadam kebakaran untuk masalah yang itu-itu saja?',
  ),
]
