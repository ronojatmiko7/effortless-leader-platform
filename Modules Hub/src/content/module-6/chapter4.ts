import {
  Clock,
  MessageSquare,
  Users,
  Target,
  BookOpen,
  ArrowRight,
  Layers,
  CalendarCheck,
  RefreshCw,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter4Cards: Card[] = [
  {
    id: 'c4-card-1',
    type: 'info',
    icon: Target,
    eyebrow: 'Bab 4 · Ritme Coaching 1-on-1',
    title: 'Tujuannya Sudah Jelas dan Disepakati Bareng — Sekarang Gimana Caranya Tujuan Itu Tetap Hidup?',
    body: [
      'Di Bab 3, Anda sudah menetapkan tujuan kinerja yang kolaboratif, diturunkan jelas dari tujuan bisnis, spesifik dan terukur, dan disepakati di awal siklus. Itu pekerjaan yang nyata — dan banyak manajer tidak pernah sampai sejauh itu.',
      'Tapi ada masalah yang datang setelahnya: tujuan yang hanya dibahas sekali di awal lalu tidak pernah disentuh lagi sampai review akhir tahun — itu hampir sama tidak bergunanya dengan tidak punya tujuan sama sekali.',
      'Pertanyaan Bab 4: gimana caranya tujuan yang sudah disepakati itu tetap hidup dan bekerja sepanjang periode — bukan cuma ada di dokumen, tapi benar-benar mengarahkan kerja sehari-hari?',
    ],
  },
  {
    id: 'c4-card-2',
    type: 'info',
    icon: Clock,
    eyebrow: 'Kenapa Review Tahunan Gagal',
    title: 'Tiga Alasan Review Tahunan Nggak Bisa Jadi Feedback Loop yang Berguna',
    body: [
      'Review tahunan gagal bukan karena niatnya buruk — tapi karena strukturnya memang tidak didesain untuk jadi mekanisme feedback yang efektif. Ada tiga alasan mendasar.',
      'Pertama: terlalu jarang untuk membenahi masalah yang masih kecil. Masalah yang baru muncul di Maret baru dibahas di Desember — sembilan bulan terlambat. Pada saat itu, masalahnya sudah mengakar, atau kesempatannya sudah lewat.',
      'Kedua: terlalu banyak yang harus dibahas sekaligus. Satu sesi mencoba merangkum dua belas bulan — hasilnya dangkal. Tidak ada satu pun topik yang bisa dibahas sampai tuntas.',
      'Ketiga: memorinya sudah kabur. Manajer tidak ingat detail kejadian dari bulan Februari. Karyawan tidak ingat konteks kenapa sesuatu terjadi. Yang tersisa hanya kesan umum — dan kesan umum itu mudah bias.',
    ],
  },
  {
    id: 'c4-card-3',
    type: 'yes-no',
    question:
      'Pernah nggak Anda mengalami situasi ini: di sesi review akhir tahun, karyawan terlihat kaget atau defensif — padahal masalah yang disampaikan sebetulnya sudah Anda lihat sejak lama, hanya tidak pernah dibahas lebih awal?',
    yesLabel: 'Pernah — dan reaksi karyawannya membuat sesi itu jadi tidak nyaman atau tidak produktif',
    noLabel: 'Belum pernah, atau saya selalu sempat bahas masalah sebelum review tahunan tiba',
    feedbackYes:
      'Itulah harga yang dibayar kalau feedback hanya datang di akhir tahun. Karyawan merasa dihakimi, bukan dibantu — karena mereka tidak punya kesempatan membenahi sesuatu yang tidak pernah mereka tahu jadi masalah. Ritme coaching yang rutin mencegah kejutan semacam itu.',
    feedbackNo:
      'Bagus. Tapi perhatikan: "belum pernah" bisa juga berarti Anda memang sudah punya ritme percakapan yang rutin — atau bisa juga berarti masalahnya tidak pernah disampaikan sama sekali, hanya ditahan sampai keputusan besar diambil. Bab ini akan bantu Anda bedakan keduanya.',
  },
  {
    id: 'c4-card-4',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Prinsip Frekuensi',
    title: 'Sesi Singkat tapi Rutin Jauh Lebih Efektif daripada Satu Sesi Panjang Setahun Sekali',
    body: [
      'Prinsip frekuensi dalam coaching bukan soal lebih banyak rapat. Ini soal loop umpan balik yang cukup pendek untuk bisa berguna.',
      '1-on-1 mingguan atau dwi-mingguan 15-30 menit membuat masalah bisa dibahas dan dibenerin ketika masih kecil. Hambatan yang muncul minggu ini bisa diidentifikasi dan diselesaikan minggu ini — bukan bulan depan atau tahun depan.',
      'Satu sesi dua jam setahun sekali tidak bisa menggantikan dua belas sesi kecil yang terdistribusi sepanjang tahun. Bukan soal jumlah jam totalnya — tapi soal kapan feedbacknya datang. Feedback yang datang terlambat tidak bisa mengubah apa yang sudah terjadi.',
    ],
  },
  {
    id: 'c4-card-5',
    type: 'multiple-choice',
    question:
      'Seorang manajer punya dua pilihan untuk review kinerja seorang stafnya: (A) satu sesi review tahunan dua jam yang membahas semua hal dalam setahun, atau (B) sesi 1-on-1 dua mingguan 20 menit yang fokus pada progres tujuan, hambatan, dan satu action item konkret. Asumsi total waktunya hampir sama. Mana yang lebih efektif sebagai mekanisme coaching?',
    options: [
      'Pilihan A — satu sesi panjang lebih efisien karena semua hal bisa dibahas tuntas dalam satu waktu',
      'Pilihan B — sesi pendek tapi rutin memungkinkan masalah dibahas dan dibenerin saat masih kecil, bukan setelah menumpuk setahun',
      'Sama saja — yang penting totalnya cukup dan manajer punya niat yang baik',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kuncinya bukan total jam — tapi frekuensi loop umpan balik. Masalah yang teridentifikasi di sesi dua mingguan bisa langsung dibenerin. Masalah yang baru dibahas setelah setahun menumpuk sudah terlalu berat untuk diperbaiki dengan cepat.',
    errorFeedback:
      'Belum tepat. Sesi panjang setahun sekali tidak bisa menggantikan ritme yang rutin. Feedback yang datang terlambat tidak bisa mengubah apa yang sudah terjadi — dan menumpuk dua belas bulan ke dalam satu sesi membuat semuanya jadi dangkal. Pilihan B yang lebih efektif.',
  },
  {
    id: 'c4-card-6',
    type: 'info',
    icon: Layers,
    eyebrow: 'Format Agenda',
    title: 'Empat Elemen Agenda yang Bisa Diulang Tiap Sesi — Bukan Ngobrol Bebas Tanpa Arah',
    body: [
      '1-on-1 yang efektif bukan sekadar "ngobrol bareng" atau laporan kerja biasa. Perlu ada agenda yang cukup terstruktur supaya waktunya tidak terbuang, tapi cukup fleksibel untuk masalah yang muncul mendadak.',
      'Elemen 1 — Progres vs tujuan yang disepakati: Di mana posisi orang ini terhadap target yang sudah disepakati di Bab 3? Ini yang menjaga agar tujuannya tetap relevan dan tidak dilupakan.',
      'Elemen 2 — Hambatan yang sedang dihadapi: Apa yang sedang bikin macet? Apa yang butuh dukungan atau keputusan dari manajer? Ini bukan laporan keluhan — ini identifikasi yang bisa langsung ditindaklanjuti.',
      'Elemen 3 — Feedback dua arah: Manajer kasih feedback spesifik ke karyawan. Karyawan kasih masukan atau hambatan yang perlu diketahui manajer. Dua arah — bukan monolog penilaian dari atas.',
      'Elemen 4 — Satu action item konkret untuk sesi berikutnya: Bukan daftar panjang yang tidak akan selesai. Satu hal yang paling penting untuk dikerjakan atau diselesaikan sebelum sesi berikutnya.',
    ],
  },
  {
    id: 'c4-card-7',
    type: 'sort-list',
    question: 'Urutkan empat elemen agenda 1-on-1 dari yang paling awal dibahas di tiap sesi:',
    items: [
      'Satu action item konkret untuk sesi berikutnya',
      'Hambatan yang sedang dihadapi',
      'Feedback dua arah',
      'Progres vs tujuan yang disepakati',
    ],
    correctAnswer: [
      'Progres vs tujuan yang disepakati',
      'Hambatan yang sedang dihadapi',
      'Feedback dua arah',
      'Satu action item konkret untuk sesi berikutnya',
    ],
    successFeedback:
      'Tepat. Mulai dari di mana posisi sekarang (progres), identifikasi apa yang menghalangi (hambatan), tukar perspektif (feedback dua arah), lalu tutup dengan komitmen konkret (action item). Urutan ini yang membuat sesi punya alur yang logis dan produktif.',
    errorFeedback:
      'Belum tepat. Alur yang paling masuk akal: mulai dengan progres (untuk tahu di mana posisi sekarang), lanjut ke hambatan (yang muncul dari gap progres tersebut), feedback dua arah (berdasarkan apa yang baru saja dibahas), dan tutup dengan satu action item yang konkret untuk sesi berikutnya.',
  },
  {
    id: 'c4-card-8',
    type: 'info',
    icon: MessageSquare,
    eyebrow: 'Feedback yang Berguna',
    title: 'Feedback Spesifik Tentang Perilaku dan Hasil — Bukan Penilaian Karakter yang Kabur',
    body: [
      'Feedback yang berguna bukan soal gaya bicara yang halus atau keras. Perbedaan yang paling menentukan: apakah feedback itu tentang perilaku dan hasil yang konkret, atau tentang karakter orang?',
      'Feedback yang berguna: "Laporan progres minggu ini terlambat dua hari dari deadline Rabu yang sudah kita sepakati — ini sudah tiga kali berturut-turut. Apa yang terjadi, dan apa yang perlu diubah?" — spesifik, tentang kejadian nyata, membuka ruang untuk penjelasan.',
      'Feedback kosong: "Kamu kurang niat belakangan ini" atau "Kamu harus lebih bertanggung jawab." — tidak bisa diverifikasi, tidak bisa direspons secara konkret, dan seringkali terasa seperti serangan personal.',
      'Feedback yang tidak spesifik tidak bisa dipakai untuk berubah. Karyawan tidak tahu apa yang harus dilakukan berbeda. Yang ada hanya rasa defensif — atau anggukan yang tidak diikuti perubahan apa pun.',
    ],
  },
  {
    id: 'c4-card-9',
    type: 'multiple-choice',
    question:
      'Seorang staf admin sering terlambat merespons pertanyaan dari tim lain. Mana dari pernyataan berikut yang merupakan feedback yang berguna dan bisa langsung dipakai untuk berubah?',
    options: [
      '"Kamu kurang responsif dan nggak terlalu peduli sama tim lain yang butuh bantuan kamu."',
      '"Tiga kali minggu ini, tim sales nunggu lebih dari empat jam untuk konfirmasi data yang mereka butuhkan. Standar yang kita sepakati adalah dua jam. Apa yang bikin ini susah diikuti, dan apa yang perlu kita ubah?"',
      '"Ke depannya, coba lebih perhatian sama kebutuhan tim lain ya — ini penting untuk kolaborasi yang baik."',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Opsi kedua punya semua elemen feedback yang berguna: kejadian spesifik (tiga kali minggu ini), angka yang bisa dicek (lebih dari empat jam vs standar dua jam), dan pertanyaan yang membuka ruang untuk penjelasan dan solusi. Dua opsi lainnya adalah penilaian karakter atau imbauan kabur yang tidak bisa ditindaklanjuti secara konkret.',
    errorFeedback:
      'Belum tepat. Cari yang punya kejadian spesifik, angka yang bisa dicek, dan membuka ruang untuk respons konkret. "Kurang responsif" dan "lebih perhatian" terdengar seperti feedback tapi tidak bisa dipakai untuk berubah — tidak ada yang tahu standar mana yang dilanggar atau seberapa besar. Yang benar adalah opsi kedua.',
  },
  {
    id: 'c4-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Feedback yang berguna itu spesifik dan tentang ________ atau hasil yang konkret — bukan penilaian karakter yang kabur yang tidak bisa direspons secara nyata.',
    options: ['perilaku', 'kepribadian', 'potensi', 'motivasi'],
    correctAnswer: 'perilaku',
    successFeedback:
      'Tepat. Perilaku yang bisa diamati dan hasil yang bisa diukur — itulah yang bisa dibahas secara objektif dan bisa diubah. Penilaian karakter ("kurang niat", "tidak bertanggung jawab") tidak bisa diverifikasi dan tidak memberi petunjuk apa yang harus dilakukan berbeda.',
    errorFeedback:
      'Belum tepat. Jawabannya: perilaku. Feedback yang berguna selalu berangkat dari perilaku atau tindakan spesifik yang bisa diamati, bukan dari asumsi tentang karakter atau motivasi orang tersebut. Itu yang membuat feedback bisa dipakai — bukan terasa seperti serangan.',
  },
  {
    id: 'c4-card-11',
    type: 'info',
    icon: Users,
    eyebrow: 'Dua Arah',
    title: 'Coaching yang Sehat Kasih Ruang Karyawan Bicara — Bukan Hanya Manajer yang Menilai Searah',
    body: [
      'Kesalahan paling umum dalam sesi 1-on-1: manajer berbicara, karyawan mendengarkan. Itu bukan coaching — itu briefing. Dan dari sisi karyawan, itu terasa seperti sidang.',
      'Coaching yang efektif punya arah yang berlawanan juga: karyawan punya ruang untuk menyampaikan hambatan yang mereka hadapi, masalah di sistem atau proses kerja yang bikin mereka stuck, atau masukan tentang dukungan apa yang mereka butuhkan dari manajer.',
      'Ini bukan sekadar formalitas "ada yang mau ditanyakan?" di akhir sesi. Ini ruang aktif yang didesain dalam agenda — misalnya: "Apa hambatan yang lagi paling berat buat kamu minggu ini?" atau "Ada yang perlu saya putuskan atau saya bantu agar kamu bisa gerak lebih cepat?"',
      'Manajer yang mendengar hambatan dari karyawannya dapat informasi yang tidak bisa didapat dari laporan manapun. Dan karyawan yang merasa suaranya didengar lebih komit ke proses coaching-nya.',
    ],
  },
  {
    id: 'c4-card-12',
    type: 'yes-no',
    question:
      'Dalam percakapan 1-on-1 yang biasa Anda lakukan sekarang — apakah ada ruang yang nyata buat karyawan menyampaikan hambatan atau masukan ke Anda, atau sesinya cenderung Anda yang berbicara dan mereka yang menjawab?',
    yesLabel: 'Ada — dan karyawan memang sering menyampaikan hambatan atau masukan yang berguna',
    noLabel: 'Jujur, saya yang lebih banyak bicara — karyawan lebih banyak menjawab atau melaporkan',
    feedbackYes:
      'Bagus. Itu salah satu tanda bahwa sesi coaching Anda sudah berjalan dua arah. Yang perlu dijaga: pastikan ruang itu sistematis, bukan hanya muncul kebetulan — artinya masuk ke dalam agenda yang diulang setiap sesi.',
    feedbackNo:
      'Jujur. Dan itu sangat umum — terutama kalau waktunya singkat atau ada tekanan untuk menyelesaikan agenda. Tapi sesi yang hanya satu arah melewatkan informasi terpenting: hambatan nyata yang sedang dialami karyawan yang mungkin tidak pernah Anda tahu kalau tidak ditanya secara eksplisit.',
  },
  {
    id: 'c4-card-13',
    type: 'info',
    icon: CalendarCheck,
    eyebrow: 'Supaya Nggak Collapse',
    title: 'Tiga Hal yang Bikin Sesi 1-on-1 Beneran Dijalankan — Bukan Cuma Ada di Kalender',
    body: [
      'Ritme coaching yang baik di teori tapi tidak pernah konsisten dijalankan di praktik — itu lebih umum dari yang Anda kira. Biasanya bukan karena niatnya buruk, tapi karena tidak ada struktur yang memaksa sesi itu tetap jalan.',
      'Satu: jadwalkan sebagai kalender berulang, bukan "nanti kalau sempat." Sesi yang tidak punya slot tetap di kalender akan selalu kalah dengan hal-hal yang "lebih mendesak." Jadwalkan sekarang, bukan setelah kondisi lebih tenang — kondisi tidak akan pernah lebih tenang.',
      'Dua: perlakukan seserius rapat dengan pelanggan penting. Kalau rapat dengan pelanggan tidak gampang dicancel, kenapa sesi coaching dengan anggota tim bisa? Komitmen ke tim adalah komitmen ke output bisnis — bukan hal yang bisa ditunda semau hati.',
      'Tiga: jangan gampang di-reschedule karena ada yang "lebih penting." Sekali sesi rutin dicancel tanpa diganti, siklus itu mulai rapuh. Kalau harus digeser, ganti di hari yang sama atau paling lambat hari berikutnya — bukan "minggu depan aja."',
    ],
  },
  {
    id: 'c4-card-14',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Nyata',
    title: 'Agenda 1-on-1 Singkat yang Lengkap — dari Pembukaan sampai Action Item Penutup',
    body: [
      'Durasi: 20 menit. Peserta: manajer operasional (Budi) dan koordinator logistik (Sari). Tujuan yang sudah disepakati: tingkatkan ketepatan pengiriman ke 95% per bulan.',
      'Pembukaan (2 menit): "Sari, selamat datang. Kita mulai dari progres dulu — dari data minggu ini, ketepatan pengiriman kita di angka 88%. Kita masih di bawah target 95%. Apa yang sudah jalan baik minggu ini?"',
      'Hambatan (5 menit): "Apa yang paling menghambat kita untuk mencapai 95% sekarang? Ada yang perlu saya bantu putuskan atau selesaikan?" — Sari menyebutkan: pengiriman ke dua area sering kena antrian di ekspedisi. Budi mencatat dan berjanji cek opsi ekspedisi alternatif.',
      'Feedback dua arah (8 menit): Budi memberi feedback spesifik — "Rabu lalu laporan progres terlambat 3 jam dari jadwal yang kita sepakati, ini sudah dua kali. Apa yang terjadi?" Sari menjelaskan bottleneck di sistem pelaporan dan meminta akses langsung ke dashboard. Budi setuju diproses hari ini.',
      'Action item penutup (5 menit): Satu komitmen masing-masing. Sari: kirim rekapitulasi area bermasalah sebelum Kamis. Budi: konfirmasi akses dashboard sebelum besok siang. Sesi berikutnya: Senin pukul 10.00.',
    ],
  },
  {
    id: 'c4-card-15',
    type: 'reflection',
    eyebrow: 'Entri Keempat · Buku Kerja PMS Anda',
    prompt:
      'Sekarang giliran Anda. Rancang ritme 1-on-1 yang akan Anda jalankan — untuk tim Anda atau untuk orang yang sudah Anda pilih di bab-bab sebelumnya.',
    fields: [
      {
        id: 'cadence-frequency',
        label: 'Berapa sering dan berapa lama sesi 1-on-1 yang akan Anda jalankan buat tim Anda?',
        placeholder:
          'Misalnya: mingguan 20 menit setiap Senin pagi, atau dwi-mingguan 30 menit setiap Rabu siang — dan alasan kenapa frekuensi itu masuk akal untuk kondisi tim Anda sekarang...',
      },
      {
        id: 'agenda-items',
        label: 'Apa saja poin agenda tetap yang akan Anda bahas tiap sesi?',
        placeholder:
          'Misalnya: (1) progres vs target minggu ini, (2) hambatan yang butuh dukungan, (3) feedback spesifik dari saya, (4) ruang karyawan menyampaikan masukan, (5) satu action item untuk sesi berikutnya...',
      },
    ],
  },
  {
    id: 'c4-card-16',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 4',
    title: 'Ritme Coaching Sudah Ada — Tapi Apa yang Harus Dilakukan Kalau Ada yang Tetap Underperform?',
    body: [
      'Anda sekarang punya ritme coaching yang jelas: frekuensi yang cukup pendek untuk berguna, agenda yang cukup terstruktur untuk terarah, feedback yang spesifik dan bisa dipakai, dan sesi yang dirancang untuk beneran rutin dijalankan.',
      'Ritme coaching-nya sekarang ada. Tapi kadang, meski tujuan sudah jelas dan feedback sudah rutin, tetap ada orang yang underperform. Bab 5 masuk ke cara mendiagnosis kenapa, sebelum Anda ambil tindakan apa pun.',
    ],
  },
]
