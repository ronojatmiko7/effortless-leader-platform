import {
  Wrench,
  FileX,
  Package,
  Layers,
  AlertCircle,
  BookOpen,
  Eye,
  Target,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter1Cards: Card[] = [
  {
    id: 'c1-card-1',
    type: 'info',
    icon: Wrench,
    eyebrow: 'Bab 1 · Yang Kelihatan Selesai, Padahal Belum',
    title: 'Software-nya Sudah Dibeli Mahal-Mahal — Tiga Bulan Kemudian Tim Balik Pakai Spreadsheet Lama',
    body: [
      'Sebuah bisnis beli software buat tracking inventory dan sales. Sudah setup, sudah training sekali waktu launching, sudah diumumkan di grup WhatsApp tim. Bulan pertama kelihatan jalan.',
      'Tiga bulan kemudian, pemilik cek: separuh tim diam-diam balik pakai spreadsheet lama. Alasannya sama semua — "ribet," "loading lama," "gue lupa caranya, jadi balik ke yang biasa aja." Software-nya masih ada, masih dibayar langganannya. Yang hilang: orang yang beneran pakai.',
      'Uangnya sudah keluar. Sistemnya sudah ada. Tapi kalau dilihat dari hasil, ini sama aja kayak nggak pernah beli apa-apa — cuma sekarang ada biaya bulanan buat sesuatu yang nganggur.',
    ],
  },
  {
    id: 'c1-card-2',
    type: 'info',
    icon: FileX,
    eyebrow: 'Pola Kedua',
    title: 'SOP-nya Sudah Dicetak Rapi dan Ditempel di Dinding Gudang — Tapi Nggak Ada yang Beneran Ngikutin',
    body: [
      'Prosedur baru buat gudang sudah dirancang, sudah dicetak, sudah dilaminating malah, ditempel persis di depan area kerja. Rapi. Kelihatan profesional.',
      'Tapi kalau diperhatikan cara kerja tim sehari-hari — mereka tetap pakai cara lama. Bukan karena bandel. Karena nggak ada yang pernah duduk jelasin kenapa caranya harus berubah, apa yang salah dari cara lama, atau apa untungnya buat mereka kalau ikut yang baru. Kertas di dinding cuma informasi. Bukan alasan buat berubah.',
      'Tim baca sekilas hari pertama, lalu tubuh mereka kembali ke gerakan yang sudah otomatis bertahun-tahun. Kertasnya tetap di sana. Perilakunya nggak pernah ikut pindah.',
    ],
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: Package,
    eyebrow: 'Pola Ketiga',
    title: 'Mesin Baru Dipakai Seminggu-Dua Minggu, Lalu Diam di Pojokan',
    body: [
      'Alat kerja atau mesin baru dibeli buat mempercepat satu proses produksi. Minggu pertama rame — semua penasaran, coba-coba pakai. Minggu kedua mulai sepi. Minggu ketiga, mesinnya nganggur di pojok, dan tim balik ke cara manual yang lebih lambat tapi sudah mereka kuasai.',
      'Kenapa? Karena nggak ada yang benar-benar dilatih sampai lancar. Ada yang ditunjukin sekali, terus dilepas sendiri. Begitu nemu masalah kecil — nggak tahu setting yang benar, hasilnya beda dari yang diharapkan — mereka nggak punya tempat bertanya, jadi mereka berhenti coba.',
      'Ini pola yang sama persis dengan dua contoh sebelumnya, cuma beda bentuk barangnya. Tool, SOP, mesin — hasil akhirnya sama: dibeli atau dibuat dengan niat baik, lalu mati pelan-pelan di lapangan.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'yes-no',
    question:
      'Dari tiga contoh tadi — software yang ditinggalkan, SOP yang ditempel tapi nggak diikuti, atau alat yang dipakai sebentar lalu nganggur — ada yang mirip dengan sesuatu yang pernah terjadi di bisnis Anda?',
    yesLabel: 'Ada, salah satu atau lebih pernah terjadi di bisnis saya',
    noLabel: 'Nggak ada, semua perubahan yang kami jalankan sejauh ini terpakai dengan baik',
    feedbackYes:
      'Anda bukan satu-satunya. Ini pola paling umum di bisnis SME manapun — bukan karena pemiliknya nggak niat, tapi karena energi habis di tahap "beli/buat" dan nggak ada yang tersisa buat tahap yang sebenarnya jauh lebih penting: bikin orang beneran pakai. Itu yang bab ini akan bongkar.',
    feedbackNo:
      'Kalau memang begitu, Anda sudah di posisi yang jarang. Tapi baca terus — bab ini akan kasih Anda cara mengecek apakah perubahan yang Anda jalankan benar-benar tertanam jadi kebiasaan, atau baru terlihat jalan karena belum cukup lama sejak diluncurkan.',
  },
  {
    id: 'c1-card-5',
    type: 'info',
    icon: Layers,
    eyebrow: 'Ide Utama',
    title: 'Change Management Itu Dua Tahap — dan Kebanyakan Bisnis Melompat Langsung ke Tahap Kedua',
    body: [
      'Tahap 1: kesiapan dan buy-in. Ini kerjaan sebelum perubahan dijalankan — menyiapkan tim secara mental dan praktis: kenapa ini berubah, apa untungnya buat mereka, apa yang berbeda dari cara kerja sekarang, dan memastikan mereka nggak kaget atau ngerasa dipaksa.',
      'Tahap 2: eksekusi dan penguatan. Ini kerjaan menjalankan perubahannya — lalu, yang jauh lebih sering dilupakan, menjaganya tetap dipakai setelah semangat awal launching reda dan rutinitas harian mulai menarik semua orang balik ke kebiasaan lama.',
      'Kebanyakan bisnis SME langsung lompat ke Tahap 2 — atau bahkan cuma mengumumkan sekali lalu berharap semuanya beres sendiri — tanpa pernah menyelesaikan Tahap 1. Itu kenapa perubahan yang bagus di atas kertas selalu terasa rapuh begitu sampai di lapangan.',
    ],
  },
  {
    id: 'c1-card-6',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Istilahnya',
    title: 'Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai"',
    body: [
      'Ini jebakan paling umum yang bikin change management berantakan: anggapan bahwa begitu tool sudah dibeli, sistem sudah dirancang, atau SOP sudah ditulis dan dibagikan ke tim, pekerjaan perubahan itu otomatis selesai.',
      'Padahal momen itu — tool sudah di tangan, SOP sudah dicetak, sistem sudah diinstal — baru garis start. Bukan garis finish. Pekerjaan yang sebenarnya, yaitu bikin orang beneran pakai sampai jadi kebiasaan, baru dimulai persis di titik itu.',
      'Kenapa jebakan ini gampang banget dijatuhi? Karena beli atau buat sesuatu itu kelihatan seperti kemajuan nyata — ada uang keluar, ada dokumen jadi, ada barang di tangan. Rasanya seperti "pekerjaan besar sudah kelar." Padahal bagian yang paling menentukan hasilnya belum disentuh sama sekali.',
    ],
  },
  {
    id: 'c1-card-7',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis membeli sistem POS baru, melatih kasir sekali di hari peluncuran, lalu mengumumkan "mulai besok semua transaksi pakai sistem baru." Dua minggu kemudian beberapa kasir diam-diam balik mencatat manual karena "belum hafal." Apa akar masalah utamanya?',
    options: [
      'Sistem POS-nya kurang bagus, harus ganti vendor lain',
      'Tahap kesiapan dan buy-in dilewati — pelatihan sekali dan pengumuman bukan persiapan yang cukup untuk perubahan bertahan',
      'Kasirnya kurang niat belajar hal baru',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Sistemnya bisa saja bagus dan kasirnya bisa saja niat — masalahnya ada di prosesnya. Pelatihan sekali di hari H dan pengumuman sepihak itu bukan kesiapan, itu baru pemberitahuan. Tanpa Tahap 1 yang selesai, perubahan sebagus apapun akan goyah begitu tekanan kerja harian kembali normal.',
    errorFeedback:
      'Belum tepat. Sistemnya belum tentu salah, dan menyalahkan niat kasir juga nggak menyelesaikan apa-apa. Yang bolong adalah Tahap 1 — kesiapan dan buy-in. Pelatihan satu kali plus pengumuman bukan persiapan yang cukup buat perubahan yang mau bertahan.',
  },
  {
    id: 'c1-card-8',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Kalau Anda Sudah Ikut Salah Satu Modul 2–7',
    title: 'Anda Sudah Punya Perubahan yang Dirancang Baik di Atas Kertas — Ini Langkah yang Bikin Itu Beneran Dipakai',
    body: [
      'Kalau Anda sudah menyelesaikan salah satu dari Modul 2 sampai 7 — entah itu SOP delegasi, sistem penjadwalan, model kompetensi, atau apapun outputnya — sekarang Anda punya minimal satu perubahan yang sudah dirancang dengan baik di atas kertas. Modul ini adalah langkah berikutnya: bikin perubahan itu beneran dipakai di lapangan, bukan cuma tersimpan rapi.',
      'Kalau belum menyelesaikan modul manapun, tidak masalah — bab ini tetap jalan penuh untuk perubahan apa pun yang sedang atau akan Anda jalankan, dari sumber mana pun. Tool yang baru dibeli, SOP yang baru ditulis sendiri, kebijakan baru dari hasil rapat tim — semuanya masuk kategori yang sama.',
    ],
  },
  {
    id: 'c1-card-9',
    type: 'info',
    icon: Eye,
    eyebrow: 'Perbedaan yang Tajam',
    title: 'Perubahan yang Beneran Dipakai vs Perubahan yang Cuma Didiamkan',
    body: [
      'Perubahan yang beneran terpakai: tim tahu persis kenapa ini berubah, sudah dilatih sampai lancar, dan terus dipakai konsisten sampai jadi kebiasaan otomatis — nggak perlu diingatkan lagi tiap minggu.',
      'Perubahan yang cuma didiamkan: diumumkan sekali, mungkin ditempel di dinding atau diinstal di komputer, lalu perlahan-lahan ditinggalkan. Yang paling khas dari pola ini — nggak ada satu momen jelas di mana itu "resmi berhenti." Orang cuma pelan-pelan balik ke cara lama, dan nggak ada yang benar-benar sadar persis kapan itu terjadi.',
      'Bedanya bukan soal seberapa bagus perubahannya dirancang. Sistem POS yang canggih bisa saja masuk kategori kedua. SOP satu halaman yang sederhana bisa saja masuk kategori pertama. Bedanya ada di apa yang terjadi setelah peluncuran — bukan di kualitas rancangannya.',
    ],
  },
  {
    id: 'c1-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Anggapan bahwa begitu tool sudah dibeli, sistem sudah dirancang, atau SOP sudah ditulis dan dibagikan, pekerjaan perubahan itu otomatis selesai — padahal itu baru garis start — disebut jebakan "sudah dibeli/dibuat = ________."',
    options: ['sudah selesai', 'sudah bagus', 'sudah dicoba', 'sudah disosialisasikan'],
    correctAnswer: 'sudah selesai',
    successFeedback:
      'Tepat. "Sudah dibeli/dibuat = sudah selesai" — jebakan yang bikin pemilik bisnis berhenti di titik yang seharusnya baru jadi titik awal. Beli atau buat sesuatu terasa seperti kemajuan besar, padahal pekerjaan yang menentukan hasilnya belum dimulai.',
    errorFeedback:
      'Belum tepat. Istilahnya "sudah selesai" — jebakan ini terjadi ketika beli tool, bangun sistem, atau menulis SOP dianggap sebagai akhir dari pekerjaan perubahan, padahal itu baru garis start.',
  },
  {
    id: 'c1-card-11',
    type: 'yes-no',
    question:
      'Coba pikirkan satu perubahan — tool, sistem, atau SOP — yang pernah Anda coba jalankan dalam setahun terakhir. Apakah itu masih dipakai sekarang, persis seperti yang Anda maksudkan waktu pertama kali diluncurkan?',
    yesLabel: 'Masih dipakai persis seperti yang dimaksudkan',
    noLabel: 'Sudah diam-diam ditinggalkan atau berubah bentuk dari rencana awal',
    feedbackYes:
      'Bagus — itu berarti minimal satu perubahan Anda sudah lolos dari jebakan yang paling umum ini. Sepanjang modul kita akan bedah kenapa itu bisa bertahan, biar polanya bisa Anda ulang di perubahan berikutnya.',
    feedbackNo:
      'Ini jawaban paling jujur dan paling umum di kalangan pemilik SME. Bagusnya, itu berarti Anda sudah punya contoh nyata buat dibongkar sepanjang modul ini — bukan cuma teori abstrak.',
  },
  {
    id: 'c1-card-12',
    type: 'sort-list',
    question: 'Urutkan dua tahap change management dari yang harus diselesaikan lebih dulu:',
    items: [
      'Eksekusi dan penguatan — menjalankan perubahannya dan menjaganya bertahan setelah semangat awal reda',
      'Kesiapan dan buy-in — menyiapkan tim secara mental dan praktis sebelum perubahan dijalankan',
    ],
    correctAnswer: [
      'Kesiapan dan buy-in — menyiapkan tim secara mental dan praktis sebelum perubahan dijalankan',
      'Eksekusi dan penguatan — menjalankan perubahannya dan menjaganya bertahan setelah semangat awal reda',
    ],
    successFeedback:
      'Tepat. Kesiapan dan buy-in dulu — baru eksekusi dan penguatan bisa punya fondasi buat berdiri. Tanpa Tahap 1 selesai, Tahap 2 cuma pengumuman sepihak yang nunggu waktu buat ditinggalkan.',
    errorFeedback:
      'Belum tepat. Tahap 1 adalah kesiapan dan buy-in — tanpa ini, eksekusi cuma jadi perintah sepihak yang nggak punya fondasi. Kebanyakan bisnis membalikkan urutannya, langsung eksekusi tanpa menyiapkan tim dulu — dan itu kenapa perubahannya cepat mati.',
  },
  {
    id: 'c1-card-13',
    type: 'info',
    icon: Target,
    eyebrow: 'Peta Modul Ini',
    title: 'Dua Tahap yang Akan Jadi Peta Kita Sepanjang Modul',
    body: [
      'Modul ini membangun kemampuan mengelola sisi manusia dari perubahan apa pun, dari dua tahap yang sudah kita kenalkan.',
      'Tahap 1 — Kesiapan & Buy-In: bab-bab berikutnya akan memetakan arsitektur change management penuh, mendiagnosis kenapa tim diam-diam menolak perubahan, membangun kasus perubahan dan peta stakeholder — siapa yang perlu diyakinkan dan dengan cara apa.',
      'Tahap 2 — Eksekusi & Penguatan: setelah itu kita rancang rencana rollout lengkap dengan komunikasi, pelatihan, dan quick win, lalu jalankan rollout-nya sambil mengatasi resistensi di lapangan, sampai akhirnya menginstal ritme penguatan yang bikin perubahan bertahan jadi kebiasaan permanen — bukan proyek yang pelan-pelan dilupakan.',
    ],
  },
  {
    id: 'c1-card-14',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Konkret',
    title: 'Sebutkan Satu Perubahan — yang Sedang Berjalan, atau yang Pernah Diam-Diam Mati',
    body: [
      'Modul ini paling berguna kalau ada satu perubahan konkret yang Anda bawa sepanjang perjalanan — satu kasus nyata yang jadi titik uji dari semua yang akan dibangun di sini.',
      'Bisa perubahan yang sedang atau akan Anda jalankan sekarang — tool baru yang baru dibeli, SOP yang baru ditulis, sistem yang baru mau diluncurkan. Atau bisa perubahan yang pernah Anda coba jalankan tapi diam-diam ditinggalkan tim, di mana Anda tahu ada yang nggak beres tapi belum pernah membongkarnya sampai tuntas.',
      'Di kartu berikutnya, tuliskan satu perubahan konkret. Itu yang akan menjadi titik referensi Anda sepanjang modul ini.',
    ],
  },
  {
    id: 'c1-card-15',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja Change Management',
    prompt:
      'Sebutkan satu perubahan di bisnis Anda — tool, sistem, atau SOP yang sedang/akan Anda jalankan, atau yang pernah diam-diam ditinggalkan tim — dan apa tanda-tanda itu nggak beneran terpakai.',
    fields: [
      {
        id: 'change-name',
        label: 'Perubahan apa yang ada di pikiran Anda?',
        placeholder:
          'Misalnya: software tracking inventory baru, SOP gudang yang direvisi, mesin produksi yang baru dibeli...',
      },
      {
        id: 'usage-signal',
        label: 'Apa tanda-tandanya itu nggak beneran terpakai — atau kenapa Anda khawatir itu akan terjadi?',
        placeholder:
          'Misalnya: tim balik ke cara lama setelah dua minggu, atau saya belum yakin gimana cara memastikan tim beneran ikut setelah diluncurkan...',
      },
    ],
  },
  {
    id: 'c1-card-16',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 2',
    title: 'Sekarang Anda Sudah Punya Satu Perubahan Konkret di Kepala',
    body: [
      'Anda baru saja mengidentifikasi satu perubahan yang akan jadi titik uji sepanjang modul ini. Itu lebih bermakna dari sekadar setuju bahwa change management itu penting.',
      'Sekarang Anda sudah punya satu perubahan konkret di kepala. Bab berikutnya kasih Anda peta lengkap dua tahap change management, biar Anda tahu persis bagian mana yang bolong.',
    ],
  },
]
