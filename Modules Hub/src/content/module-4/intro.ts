import { Sparkles, Link2Off, Route } from 'lucide-react'
import type { Card } from '../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const introCards: Card[] = [
  {
    id: 'intro-greeting',
    type: 'info',
    icon: Sparkles,
    eyebrow: 'Halo, Sebelum Kita Mulai',
    title: 'Selamat Datang di Modul Rekayasa Ulang Proses Anda',
    body: [
      'Senang Anda sampai di modul ini. Modul ini akan mengubah cara Anda melihat bisnis Anda sendiri — dari sekadar "tim sales sibuk, tim produksi sibuk, semua kelihatan jalan" jadi benar-benar bisa menunjuk persis di mana pekerjaan macet dan kenapa.',
      'Tapi sebelum masuk ke petanya, coba jujur dulu soal satu hal yang mungkin sedang terjadi di bisnis Anda sekarang ini.',
    ],
  },
  {
    id: 'intro-problem',
    type: 'info',
    icon: Link2Off,
    eyebrow: 'Masalah yang Sering Terjadi',
    title: 'KPI Sudah Jelas, Rapat Sudah Rutin — Tapi Masalah yang Sama Terus Balik Lagi',
    body: [
      'Tim sales janji promo khusus ke pelanggan besar. Tim produksi nggak pernah dikasih tahu — barangnya nggak siap, pelanggan komplain, dan sales cuma bisa bilang "lho, saya kira udah dikoordinasikan." PO yang cuma butuh satu tanda tangan malah nyangkut berhari-hari, muter dari meja ke meja, disetujui tiga orang yang nggak ada yang jelas kenapa perlu tiga-tiganya.',
      'Kalau Anda sudah punya KPI yang jelas dan ritme tinjauan yang disiplin, ini mungkin terasa aneh — kok masalahnya tetap balik lagi padahal semua sudah dipantau? Ini bukan cuma perasaan Anda saja. Banyak pemilik bisnis mengalami hal yang sama: KPI-nya sehat, rapatnya rutin, tapi akar masalahnya nggak pernah beneran dibenahi.',
      'Itu sebabnya Anda perlu modul ini — supaya Anda berhenti menambal gejala yang sama tiap bulan, dan mulai membenahi titik serah terima antar tim tempat masalah itu sebenarnya lahir.',
    ],
  },
  {
    id: 'intro-what',
    type: 'info',
    icon: Route,
    eyebrow: 'Apa yang Akan Anda Pelajari',
    title: 'Dari Peta Proses 4 Tingkat sampai Rancangan Ulang yang Siap Dijalankan',
    body: [
      'Di modul ini, Anda akan belajar kenapa masalah proses paling mahal hampir selalu hidup di titik serah terima antar tim, bukan di dalam satu tim (Bab 1). Anda akan kenal arsitektur proses 4 tingkat — dari peta besar L1 sampai instruksi kerja L4 — dan memetakannya sendiri untuk bisnis Anda (Bab 2-3). Anda akan belajar membedakan tiga penyakit proses yang beda: silo fungsional, approval berlapis, dan bottleneck biasa (Bab 4), lalu menulis prosedur dan instruksi kerja yang bisa langsung dieksekusi tim Anda (Bab 5).',
      'Anda juga akan merancang sistem mutu yang mencegah kesalahan sebelum terjadi, bukan cuma menangkapnya setelah kejadian (Bab 6), lalu mempraktikkan semua itu jadi satu rancangan ulang nyata untuk satu proses di bisnis Anda — lengkap dengan pemilik, SLA, dan playbook instalasinya (Bab 7-8).',
      'Supaya nanti di akhir modul Anda bisa lihat sendiri seberapa jauh sudah bergerak, jawab dulu beberapa pertanyaan berikut. Ini bukan ujian — jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai, jadi jawab saja sesuai yang Anda tahu sekarang.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'pretest',
    'Ini Titik Awal Anda',
    'Skor ini bukan buat dinilai — ini cuma potret titik awal Anda sebelum masuk modul. Sekarang mari masuk ke Bab 1, supaya Anda tahu persis kenapa KPI yang sudah jelas dan rapat yang sudah rutin saja masih belum cukup membereskan masalah yang terus balik lagi itu.',
  ),
]
