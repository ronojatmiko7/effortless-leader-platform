import { Hand, AlertTriangle, Target } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

// Prepended to Chapter 1's own card array in chapters.ts (product decision
// Aug 18, v2) — NOT a separate screen. Order is deliberate: greet, then the
// reader's own likely problem, then what this module is — each card's body
// ends with an explicit bridging sentence into the next.
export const introCards: Card[] = [
  {
    id: 'intro-greeting',
    type: 'info',
    icon: Hand,
    eyebrow: 'Halo, Sebelum Kita Mulai',
    title: 'Selamat Datang di Modul KPI Anda',
    body: [
      'Senang Anda sampai di modul ini. Modul ini akan mengubah cara Anda memantau bisnis — dari sekadar "kelihatannya baik-baik saja" jadi benar-benar tahu persis di mana posisi bisnis Anda hari ini.',
      'Tapi sebelum masuk ke sistemnya, coba jujur dulu soal satu hal yang mungkin sedang terjadi di bisnis Anda sekarang ini.',
    ],
  },
  {
    id: 'intro-problem',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Masalah yang Sering Terjadi',
    title: 'Omzet Naik, Tim Kelihatan Sibuk — Tapi Kok Rasanya Bisnis Jalan di Tempat?',
    body: [
      'Bulan lalu omzet naik. Tim kelihatan sibuk terus dari pagi sampai malam. Di atas kertas semua kelihatan baik-baik saja — tapi entah kenapa Anda tetap merasa was-was, seperti ada sesuatu yang tidak beres tapi Anda tidak bisa tunjuk persis di mana.',
      'Ini bukan cuma perasaan Anda saja. Banyak pemilik bisnis mengalami hal yang sama: angka yang dipantau kelihatan bagus, tapi angka itu ternyata tidak pernah benar-benar menunjukkan kesehatan bisnis yang sesungguhnya. Kas bisa tetap tipis meski omzet naik. Tim bisa sibuk tanpa hasil yang bertambah.',
      'Itu sebabnya Anda perlu modul ini — supaya Anda berhenti menebak dari angka yang menipu, dan mulai memantau angka yang benar-benar menuntun keputusan.',
    ],
  },
  {
    id: 'intro-what',
    type: 'info',
    icon: Target,
    eyebrow: 'Apa yang Akan Anda Pelajari',
    title: 'Sistem KPI Lengkap — Dari Angka Basa-basi sampai Ritme Evaluasi',
    body: [
      'Di modul ini, Anda akan belajar membedakan metrik yang beneran mengukur kesehatan bisnis dari yang cuma bikin Anda merasa aman (vanity metrics), memecah target besar perusahaan jadi target harian yang jelas untuk tiap divisi dan individu, membedakan Lag Metric (kaca spion) dari Lead Metric (setir) yang bisa Anda kendalikan hari ini, dan membangun dashboard sederhana plus ritme evaluasi yang menyerang akar masalah — bukan mencari kambing hitam.',
      'Supaya nanti di akhir modul Anda bisa lihat sendiri seberapa jauh sudah bergerak, jawab dulu beberapa pertanyaan berikut. Ini bukan ujian — jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai, jadi jawab saja sesuai yang Anda tahu sekarang.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'pretest',
    'Ini Titik Awal Anda',
    'Skor ini bukan buat dinilai — ini cuma potret titik awal Anda sebelum masuk modul. Sekarang mari masuk ke Bab 1, supaya Anda tahu persis kenapa angka-angka yang selama ini bikin bangga justru bisa menipu.',
  ),
]
