import { Sparkles, FileWarning, ListChecks } from 'lucide-react'
import type { Card } from '../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const introCards: Card[] = [
  {
    id: 'intro-greeting',
    type: 'info',
    icon: Sparkles,
    eyebrow: 'Halo, Sebelum Kita Mulai',
    title: 'Selamat Datang di Modul Optimasi dan Kegunaan SOP',
    body: [
      'Senang Anda sampai di modul ini. Modul ini bukan soal menulis SOP dari nol — modul ini soal mengubah SOP yang sudah ada, tapi diam-diam diabaikan, jadi SOP yang benar-benar dipakai orang saat kerja setiap hari.',
      'Tapi sebelum masuk ke caranya, coba jujur dulu soal satu hal yang mungkin sedang terjadi persis di lantai kerja Anda sekarang ini.',
    ],
  },
  {
    id: 'intro-problem',
    type: 'info',
    icon: FileWarning,
    eyebrow: 'Masalah yang Sering Terjadi',
    title: 'SOP Sudah Dicetak, Sudah Ditempel di Dinding — Tapi Tim Tetap Kerja Pakai Cara Sendiri',
    body: [
      'Di lantai produksi, SOP-nya sudah dicetak rapi, sudah dilaminating, sudah ditempel di dinding tepat di samping mesin. Siapapun yang lewat bisa baca. Tapi kalau Anda perhatikan cara kerja operatornya, mereka pakai urutan yang "udah biasa" — bukan urutan yang ada di kertas.',
      'Kalau ditanya kenapa, jawabannya hampir selalu sama: "Nggak tau, dari dulu emang gitu. Yang di kertas itu kayaknya versi lama." SOP-nya ada. Bahkan ditempel di tempat paling strategis sekalipun. Tapi nggak ada yang benar-benar pakai.',
      'Ini bukan cuma soal satu SOP di satu dinding. Itu sebabnya Anda perlu modul ini — supaya Anda berhenti menganggap "SOP sudah ditulis" sebagai pekerjaan yang selesai, dan mulai membangun SOP yang benar-benar membentuk cara kerja sehari-hari.',
    ],
  },
  {
    id: 'intro-what',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Apa yang Akan Anda Pelajari',
    title: 'Dari Dokumen Berdebu ke Checklist yang Benar-benar Dipakai di Titik Kerja',
    body: [
      'Di modul ini, Anda akan belajar skala kematangan kepatuhan SOP untuk mengukur di mana posisi bisnis Anda sekarang (Bab 2), cara mendiagnosis apakah akar masalahnya ada di format, akses, atau relevansi SOP (Bab 3), dan teknik mengubah SOP naratif panjang jadi checklist ringkas yang bisa diikuti langsung di lapangan (Bab 4).',
      'Setelah itu, Anda akan belajar membangun akses SOP di titik kerja supaya tidak terkubur di folder (Bab 5), merancang mekanisme pengecekan kepatuhan yang aktif tanpa terasa seperti diawasi (Bab 6), lalu menyatukan semuanya lewat lokakarya merombak satu SOP bermasalah secara utuh (Bab 7), dan menginstalnya dengan pemilik kepatuhan yang jelas serta ritme verifikasi yang benar-benar jalan (Bab 8).',
      'Supaya nanti di akhir modul Anda bisa lihat sendiri seberapa jauh sudah bergerak, jawab dulu beberapa pertanyaan berikut. Ini bukan ujian — jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai, jadi jawab saja sesuai yang Anda tahu sekarang.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'pretest',
    'Ini Titik Awal Anda',
    'Skor ini bukan buat dinilai — ini cuma potret titik awal Anda sebelum masuk modul. Sekarang mari masuk ke Bab 1, supaya Anda tahu persis kenapa SOP yang sudah dicetak dan ditempel di dinding sekalipun bisa tetap didiamkan begitu saja.',
  ),
]
