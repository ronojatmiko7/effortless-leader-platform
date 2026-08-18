import { Handshake, PackageX, Compass } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const introCards: Card[] = [
  {
    id: 'intro-greeting',
    type: 'info',
    icon: Handshake,
    eyebrow: 'Halo, Sebelum Kita Mulai',
    title: 'Selamat Datang di Modul Change Management Anda',
    body: [
      'Senang Anda sampai di modul ini. Modul ini akan mengubah cara Anda menjalankan perubahan di bisnis — dari sekadar berharap tim ikut, jadi punya sistem yang bikin perubahan beneran dipakai sampai jadi kebiasaan.',
      'Tapi sebelum masuk ke sistemnya, coba jujur dulu soal satu hal yang mungkin sedang atau pernah terjadi di bisnis Anda.',
    ],
  },
  {
    id: 'intro-problem',
    type: 'info',
    icon: PackageX,
    eyebrow: 'Masalah yang Sering Terjadi',
    title: 'Software Sudah Dibeli, SOP Sudah Ditempel — Tiga Bulan Kemudian Semua Balik ke Cara Lama',
    body: [
      'Sebuah bisnis pernah beli software tracking mahal-mahal, setup rapi, training sekali waktu launching. Tiga bulan kemudian, separuh tim diam-diam balik pakai spreadsheet lama — alasannya sama semua: "ribet," "lupa caranya, jadi balik ke yang biasa aja." Uangnya sudah keluar, sistemnya masih ada, tapi yang hilang adalah orang yang beneran pakai.',
      'Ini bukan cuma soal software. SOP yang dicetak rapi dan ditempel di dinding gudang bisa bernasib sama — dibaca sekilas hari pertama, lalu tim kembali ke gerakan lama yang sudah otomatis bertahun-tahun. Mesin baru yang dibeli buat mempercepat kerja bisa berakhir nganggur di pojokan setelah dua minggu, karena nggak ada yang benar-benar dilatih sampai lancar.',
      'Polanya selalu sama: dibeli atau dibuat dengan niat baik, lalu mati pelan-pelan di lapangan — bukan karena timnya nggak niat, tapi karena energi habis di tahap "beli/buat" dan nggak ada yang tersisa buat tahap yang sebenarnya menentukan: bikin orang beneran pakai. Itu sebabnya Anda perlu modul ini — supaya perubahan yang Anda jalankan nggak jadi cerita yang sama lagi.',
    ],
  },
  {
    id: 'intro-what',
    type: 'info',
    icon: Compass,
    eyebrow: 'Apa yang Akan Anda Pelajari',
    title: 'Dari Diagnosis Resistensi sampai Ritme Penguatan yang Bikin Perubahan Bertahan',
    body: [
      'Di modul ini, Anda akan belajar peta lengkap dua tahap change management — kesiapan & buy-in, dan eksekusi & penguatan — plus di mana persisnya bisnis Anda paling bolong. Anda akan belajar mendiagnosis akar resistensi tim lewat empat lensa: takut nggak kompeten, nggak jelas untungnya, trauma proyek sesaat, atau belum pernah dilatih.',
      'Dari situ, Anda akan membangun kasus perubahan dan peta stakeholder, merancang rencana rollout lengkap dengan komunikasi, pelatihan, dan quick win, lalu menjalankan rollout-nya sambil menangani resistensi di lapangan — tahu kapan harus fleksibel dan kapan harus tetap tegas. Semuanya berujung pada ritme penguatan dengan pemilik yang jelas, supaya perubahan yang sudah Anda bangun nggak diam-diam ditinggalkan setelah momentum awal reda.',
      'Supaya nanti di akhir modul Anda bisa lihat sendiri seberapa jauh sudah bergerak, jawab dulu beberapa pertanyaan berikut. Ini bukan ujian — jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai, jadi jawab saja sesuai yang Anda tahu sekarang.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'pretest',
    'Ini Titik Awal Anda',
    'Skor ini bukan buat dinilai — ini cuma potret titik awal Anda sebelum masuk modul. Sekarang mari masuk ke Bab 1, supaya Anda tahu persis kenapa software yang sudah dibeli mahal-mahal atau SOP yang sudah dicetak rapi masih bisa mati pelan-pelan di lapangan.',
  ),
]
