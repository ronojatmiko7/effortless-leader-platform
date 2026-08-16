import {
  Target,
  RotateCcw,
  Gavel,
  ClipboardList,
  FileText,
  Scale,
  XCircle,
  AlertTriangle,
  NotebookPen,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter6Cards: Card[] = [
  {
    id: 'c6-card-1',
    type: 'info',
    icon: Target,
    eyebrow: 'Bab 6 · Dari Temuan ke Keputusan',
    title: 'Sudah Bisa Cari Akar Masalah. Tapi Rapatnya Masih Berhenti di Situ.',
    body: [
      'Di Bab 5, Anda sudah punya dua alat untuk membedah masalah sampai ke akarnya — 5 Whys untuk masalah satu rantai, Fishbone untuk masalah yang faktornya datang dari banyak arah. Itu pencapaian nyata.',
      'Tapi ada satu langkah yang sering gagal setelah semua itu selesai. Tim ngumpul, 5 Whys dijalankan, akar masalah ketemu. Semua orang di ruangan mengangguk — "oh, ternyata gara-gara sistem onboarding-nya yang nggak ada penanggung jawabnya." Lalu rapat bubar.',
      'Dua minggu kemudian, masalah yang sama muncul lagi di rapat berikutnya. Kali ini semua orang agak bingung — sepertinya pembahasan ini sudah pernah ada sebelumnya, tapi nggak ada yang ingat keputusan apa yang diambil. Atau memang belum pernah ada keputusan sama sekali. Capek-capek gali RCA, tapi ujungnya cuma jadi obrolan bagus yang nggak mengubah apa pun.',
    ],
  },
  {
    id: 'c6-card-2',
    type: 'yes-no',
    question:
      'Jujur: pernah nggak rapat review di bisnis Anda berakhir dengan temuan yang jelas — akar masalahnya ketemu — tapi rapat bubar tanpa ada satu keputusan konkret yang dicatat dan punya pemilik?',
    yesLabel: 'Pernah, bahkan cukup sering',
    noLabel: 'Nggak pernah, selalu ada keputusannya',
    feedbackYes:
      'Ini lebih umum dari yang Anda kira — dan bukan soal tim yang kurang serius. Ini soal nggak ada mekanisme yang memaksa diskusi berakhir jadi keputusan. Itu yang kita perbaiki di bab ini.',
    feedbackNo:
      'Kalau memang begitu, bab ini akan membantu Anda memformalisasi apa yang sudah berjalan — dan membuat mekanismenya cukup jelas untuk dijalankan siapa pun yang memimpin rapat, bukan cuma Anda.',
  },
  {
    id: 'c6-card-3',
    type: 'info',
    icon: RotateCcw,
    eyebrow: 'Fenomena yang Sering Nggak Disadari',
    title: '"Rapat tentang Rapat" — Ketika Tinjauan Cuma Jadi Ritual',
    body: [
      'Ada satu pola yang sering kejadian di bisnis tanpa mekanisme keputusan yang jelas. Panggil saja: rapat tentang rapat.',
      'Ciri pertama: masalah yang sama muncul di setiap tinjauan, bulan demi bulan, tanpa pernah ada keputusan baru yang lahir dari pembahasan itu. Tim membahas, angguk-angguk, lalu melanjutkan hidup. Bulan depan, masalah itu muncul lagi seolah baru pertama kali dibahas.',
      'Ciri kedua: keputusan sebenarnya diambil — tapi tidak pernah dicatat dan tidak pernah diikuti. Dua minggu kemudian, tidak ada yang ingat siapa yang berjanji apa. Masalah yang sama kembali ke meja di tinjauan berikutnya, dan semua orang berpura-pura ini baru pertama kalinya. Ritme tinjauan yang bagus pun percuma kalau setiap rapatnya berulang seperti ini.',
    ],
  },
  {
    id: 'c6-card-4',
    type: 'multiple-choice',
    question:
      'Tim Anda baru selesai sesi 5 Whys yang solid — akar masalah komplain kualitas teridentifikasi dengan jelas. Semua orang mengangguk setuju, lalu pemimpin rapat bilang "oke, jadi ini penyebabnya — kita perlu perbaiki ini ya" dan menutup rapat. Apa yang salah?',
    options: [
      'Nggak ada yang salah — menemukan akar masalah sudah cukup, tim pasti tahu harus ngapain',
      '"Kita perlu perbaiki ini" bukan keputusan. Nggak ada aksi spesifik, nggak ada penanggung jawab, nggak ada tenggat — jadi kemungkinan besar nggak ada yang berubah',
      'Rapatnya terlalu singkat — seharusnya dilanjutkan lebih lama sampai semua solusi dibahas tuntas',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. "Kita perlu perbaiki ini" itu pernyataan niat, bukan keputusan. Keputusan yang nyata punya satu tindakan konkret, satu orang yang bertanggung jawab, dan satu tenggat yang jelas. Tanpa ketiga itu, niat baik tidak akan jadi perubahan nyata.',
    errorFeedback:
      'Bukan itu. Menemukan akar masalah itu langkah pertama — tapi bukan satu-satunya. "Kita perlu perbaiki ini" bukan keputusan. Keputusan butuh satu aksi konkret, satu penanggung jawab, dan satu tenggat. Tanpa itu, temuan RCA-nya akan terlupakan begitu semua orang keluar dari ruangan.',
  },
  {
    id: 'c6-card-5',
    type: 'info',
    icon: Gavel,
    eyebrow: 'Alat Baru · Pertanyaan Penutup',
    title: 'Satu Pertanyaan yang Wajib Menutup Setiap Sesi RCA',
    body: [
      'Setelah akar masalah teridentifikasi — baik lewat 5 Whys maupun Fishbone — tugas pemimpin rapat belum selesai. Ada satu langkah lagi yang tidak boleh dilewati.',
      'Pertanyaan penutup wajib: "Berdasarkan akar ini, apa SATU keputusan yang kita ambil sekarang?"',
      'Bukan: "jadi kita perlu brainstorming lebih lanjut tentang ini." Bukan: "nanti kita pikirin lebih lanjut setelah rapat." Satu pertanyaan, satu jawaban, sebelum siapa pun keluar dari ruangan.',
      'Kenapa satu? Karena terlalu banyak keputusan sekaligus itu sama buruknya dengan nggak ada keputusan — semua orang sibuk, nggak ada yang tuntas. Kalau akar masalahnya memang butuh lebih dari satu langkah, pecah jadi beberapa sesi. Tapi di sesi ini: SATU.',
    ],
  },
  {
    id: 'c6-card-6',
    type: 'fill-in-the-blank',
    sentence:
      'Setelah akar masalah ditemukan lewat RCA, pemimpin rapat wajib menutup dengan pertanyaan: "Berdasarkan akar ini, apa ________ keputusan yang kita ambil sekarang?"',
    options: ['SATU', 'semua', 'terbaik', 'paling cepat'],
    correctAnswer: 'SATU',
    successFeedback:
      '"SATU" — bukan dua, bukan tiga. Fokus pada satu keputusan konkret per sesi adalah yang paling konsisten menghasilkan tindakan nyata, bukan cuma didiskusikan.',
    errorFeedback:
      'Jawabannya "SATU." Bukan karena hanya ada satu solusi yang benar — tapi karena fokus pada satu keputusan konkret per sesi adalah yang paling sering menghasilkan tindakan nyata. Terlalu banyak keputusan sekaligus biasanya berujung tidak ada yang dilaksanakan.',
  },
  {
    id: 'c6-card-7',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Alat Baru · Log Keputusan',
    title: 'Log Keputusan — Bukan Action Plan KPI, Ini Berbeda',
    body: [
      'Kalau Anda sudah ikut Modul 2: Anda kenal action plan dari KPI — daftar langkah untuk mencapai target tertentu. Log Keputusan itu berbeda. Ini bukan soal KPI-nya — ini soal disiplin rapat itu sendiri.',
      'Format dasarnya sederhana: empat kolom. Masalah apa yang dibahas. Keputusan apa yang diambil. Siapa penanggung jawabnya. Kapan tenggatnya. Satu baris per keputusan.',
      'Yang membuat Log Keputusan bekerja bukan formatnya — tapi satu kebiasaan: log ini dibawa ke setiap tinjauan berikutnya dan dijadikan item pertama yang dicek. "Keputusan minggu lalu — statusnya gimana?" Ini bukan formalitas. Ini yang memastikan keputusan yang diambil di satu rapat benar-benar diikuti, bukan dianggap selesai begitu rapatnya bubar.',
    ],
  },
  {
    id: 'c6-card-8',
    type: 'info',
    icon: FileText,
    eyebrow: 'Latihan Skenario',
    title: 'Dua Rapat, Satu Temuan — Hasilnya Beda Total',
    body: [
      'Tim distribusi makanan kemasan. Tinjauan mingguan. Akar masalah keterlambatan pengiriman sudah ketemu lewat 5 Whys: tidak ada yang ditugaskan memverifikasi jadwal kurir sebelum pukul 07.00 — semua orang asumsi orang lain yang periksa.',
      'Transkrip A — Manajer: "Oke, akar masalahnya jelas. Ini soal nggak ada yang pegang verifikasi jadwal di pagi hari. Baik, kita semua sudah tahu sekarang." Semua mengangguk. Rapat ditutup. Dua minggu kemudian, keterlambatan muncul lagi.',
      'Transkrip B — Manajer: "Oke, akarnya jelas: nggak ada yang pegang verifikasi pagi. Berdasarkan ini — satu keputusan yang kita ambil sekarang apa?" Tim: "Ditunjuk satu orang yang pegang itu tiap pagi." Manajer: "Setuju. Rudi pegang, mulai Senin. Dua minggu lagi kita cek di tinjauan berikutnya — saya catat di log." Rudi mengangguk, mencatat di catatannya.',
    ],
  },
  {
    id: 'c6-card-9',
    type: 'multiple-choice',
    question:
      'Dari dua transkrip tadi — apa elemen konkret yang ada di Transkrip B tapi tidak ada di Transkrip A?',
    options: [
      'Transkrip B lebih sopan dan pemimpinnya lebih ramah',
      'Transkrip B punya satu keputusan spesifik, satu penanggung jawab yang disebutkan namanya, tenggat yang jelas, dan dicatat di log',
      'Transkrip B membahas akar masalah lebih lama dan lebih mendalam',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Itu empat elemen yang memisahkan keputusan nyata dari sekadar kesimpulan: tindakan spesifik, nama penanggung jawab, tenggat waktu, dan dicatat. Hilangkan satu saja, dan kemungkinan besar keputusan itu tidak akan dijalankan.',
    errorFeedback:
      'Bukan itu. Perbedaannya bukan soal durasi atau gaya bahasa. Yang membuat Transkrip B menghasilkan perubahan adalah empat elemen konkret: satu tindakan spesifik, satu penanggung jawab yang disebutkan namanya, tenggat yang jelas, dan dicatat di log.',
  },
  {
    id: 'c6-card-10',
    type: 'info',
    icon: Scale,
    eyebrow: 'Dua Kesalahan yang Berlawanan',
    title: 'Pemimpin yang Terlalu Cepat — dan yang Terlalu Lambat',
    body: [
      'Ada dua cara untuk gagal memimpin diskusi setelah RCA selesai — dan keduanya berlawanan arah, tapi sama-sama menggagalkan temuan jadi aksi.',
      'Kesalahan pertama: pemimpin yang terlalu cepat kasih solusinya sendiri. Sebelum tim selesai menggali, sebelum perspektif lain disampaikan, pemimpin sudah bilang "ini penyebabnya, ini solusinya, oke kita jalan." Tim diam — bukan karena setuju, tapi karena sudah tidak merasa perlu berpendapat. Lama-lama, tim jadi pasif — tunggu diarahkan, jangan repot-repot berpikir sendiri.',
      'Kesalahan kedua: pemimpin yang membiarkan diskusi mengambang tanpa pernah menutup ke satu keputusan. Setiap orang boleh bicara, semua pendapat didengar, tapi tidak ada yang berani menyimpulkan. Diskusinya kaya, tapi rapatnya bubar tanpa keputusan. Demokrasi yang berlebihan sampai tidak produktif.',
    ],
  },
  {
    id: 'c6-card-11',
    type: 'info',
    icon: XCircle,
    eyebrow: 'Kesalahan #1 · Skenario',
    title: 'Pemimpin yang Bunuh Diskusi Sebelum Sempat Dimulai',
    body: [
      'Tim tinjauan mingguan pemasaran, enam orang. Masalah: jumlah leads bulan ini turun signifikan. Pemimpin membuka diskusi.',
      'Lima detik setelah masalah disampaikan — sebelum ada yang buka mulut — pemimpin langsung bilang: "Ini jelas gara-gara anggaran iklan kita dipotong bulan lalu. Solusinya kita naikkan lagi anggarannya bulan depan. Setuju semua?" Semua mengangguk. Rapat lanjut.',
      'Yang hilang: dua orang di ruangan itu tahu bahwa penurunan leads sudah mulai sebelum anggaran dipotong — ada masalah di kualitas landing page yang sudah lama dibicarakan di level bawah. Tapi mereka tidak buka suara. Buat apa? Pemimpinnya sudah punya jawabannya. Anggaran dinaikkan, leads tetap stagnan, dan tidak ada yang mengerti kenapa.',
    ],
  },
  {
    id: 'c6-card-12',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Kesalahan #2 · Skenario',
    title: 'Pemimpin yang Takut Menutup Diskusi',
    body: [
      'Tim tinjauan bulanan operasional. Masalah yang sama: leads turun. Kali ini diskusinya berjalan baik — semua orang berpendapat, berbagai perspektif muncul, suasana terbuka dan produktif.',
      '45 menit berlalu. Pemimpin: "Oke, banyak pandangan yang menarik ya. Gimana kalau kita lanjut bahas ini di rapat berikutnya dengan data yang lebih lengkap?" Semua setuju. Rapat ditutup.',
      'Tiga minggu kemudian, di rapat berikutnya: masalah yang sama dibuka lagi dari nol — karena tidak ada yang dicatat, tidak ada keputusan, tidak ada yang berubah. Diskusinya bagus, tapi tidak menghasilkan apa pun yang bisa dieksekusi. Rapat tentang rapat versi yang paling melelahkan: semua orang berpikir keras, tapi tidak ada yang bergerak.',
    ],
  },
  {
    id: 'c6-card-13',
    type: 'multiple-choice',
    question:
      'Dari dua skenario itu — pemimpin yang terlalu cepat kasih jawaban sendiri dan pemimpin yang terlalu lambat menutup — pola fasilitasi yang sehat itu seperti apa?',
    options: [
      'Gali dulu dengan pertanyaan terbuka biar tim bisa berpikir dan menyampaikan perspektifnya — lalu tutup tegas dengan pertanyaan penutup: "Berdasarkan ini semua, satu keputusan apa yang kita ambil sekarang?"',
      'Pemimpin yang baik harus diam sepenuhnya dan tidak boleh punya pendapat sendiri sama sekali',
      'Kasih batas waktu diskusi yang ketat — maksimal 10 menit per masalah, lalu langsung diputuskan sendiri oleh pemimpin',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Dua fase yang berbeda tujuannya: gali dulu dengan pertanyaan terbuka (beri ruang tim berpikir dan berkontribusi), lalu tutup tegas dengan pertanyaan penutup (keputusan harus keluar sebelum rapat bubar). Keduanya perlu — hanya satu dari dua itu bukan fasilitasi yang sehat.',
    errorFeedback:
      'Bukan itu. Pemimpin yang baik bukan yang diam sepenuhnya — dan bukan juga yang mendominasi atau membatasi dengan jam. Pola yang sehat: gali dulu dengan pertanyaan terbuka biar tim bisa berpikir dan berkontribusi, lalu tutup tegas dengan pertanyaan penutup yang memaksa satu keputusan keluar sebelum rapat bubar.',
  },
  {
    id: 'c6-card-14',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Sebelum Isi Buku Kerja: Siapkan Satu Log Keputusan Nyata',
    body: [
      'Sekarang waktunya bawa semua ini ke bisnis Anda sendiri. Ambil satu masalah nyata — boleh masalah yang sama yang Anda bawa di Bab 5, atau masalah baru yang lebih relevan sekarang.',
      'Bayangkan RCA-nya sudah selesai dan akar masalahnya sudah ketemu. Sekarang terapkan pertanyaan penutup: apa SATU keputusan konkret yang bisa diambil berdasarkan temuan itu? Siapa yang paling tepat menanggung jawabnya? Dan kapan batas waktunya?',
      'Tiga hal itu — keputusan, penanggung jawab, tenggat — adalah satu baris Log Keputusan. Pikirkan dulu sebelum masuk ke kartu berikutnya.',
    ],
  },
  {
    id: 'c6-card-15',
    type: 'reflection',
    eyebrow: 'Entri Ketujuh · Buku Kerja EBR Anda',
    prompt:
      'Tulis satu entri Log Keputusan dari masalah nyata di bisnis Anda — berdasarkan temuan RCA yang sudah Anda kerjakan atau bayangkan.',
    fields: [
      {
        id: 'decision-problem',
        label: 'Masalah apa yang dibahas?',
        placeholder:
          'Contoh: Komplain kualitas produk naik tiga minggu berturut-turut karena tidak ada yang enforce SOP QC saat kejar target',
      },
      {
        id: 'decision-taken',
        label: 'Keputusan apa yang diambil?',
        placeholder:
          'Contoh: Tunjuk satu orang sebagai Quality Champion per shift — bertugas memastikan SOP QC diikuti sebelum produk masuk ke packing',
      },
      {
        id: 'decision-owner',
        label: 'Siapa penanggung jawabnya?',
        placeholder: 'Contoh: Supervisor produksi shift pagi (Pak Hendra)',
      },
      {
        id: 'decision-deadline',
        label: 'Kapan tenggatnya?',
        placeholder:
          'Contoh: Implementasi mulai Senin depan, review pertama di tinjauan mingguan dua minggu dari sekarang',
      },
    ],
  },
  {
    id: 'c6-card-16',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 6',
    title: 'Sekarang Anda Tahu Cara Menutup Diskusi Jadi Keputusan',
    body: [
      'Anda sekarang sudah punya tiga hal yang mengubah tinjauan dari sekadar ritual jadi forum yang menghasilkan perubahan: pertanyaan penutup wajib yang memaksa satu keputusan keluar sebelum rapat bubar, Log Keputusan yang dibawa ke setiap tinjauan berikutnya, dan pola fasilitasi yang gali dulu lalu tutup tegas.',
      'Tapi ada satu skenario yang belum kita bahas: keputusan yang sudah diambil dengan baik — ada penanggung jawab, ada tenggat — tapi ternyata nyangkut di tengah jalan. Atau ternyata masalahnya lebih besar dari yang kelihatan, dan butuh naik ke level yang punya wewenang lebih tinggi.',
      'Bab depan: cara mengelola eskalasi dan akuntabilitas lintas level — supaya keputusan bagus di satu tinjauan benar-benar sampai ke eksekusi, bukan berhenti di kertas.',
    ],
  },
]
