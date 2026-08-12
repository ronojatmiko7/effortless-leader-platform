import {
  Wallet,
  Eye,
  ShieldAlert,
  Compass,
  Gauge,
  NotebookPen,
  BookMarked,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter1Cards: Card[] = [
  {
    id: 'c1-card-1',
    type: 'info',
    icon: Wallet,
    eyebrow: 'Bab 1 · Kenapa KPI Anda Menipu',
    title: 'Angka yang Bikin Anda Bangga, Padahal Kosong',
    body: [
      'Coba jujur: bulan lalu omzet Anda naik. Anda posting di grup WA keluarga, senyum-senyum baca laporannya. Tapi coba cek satu hal lagi: kas di rekening, naik juga atau malah makin tipis?',
      'Banyak bos kaget waktu sadar dua hal itu nggak selalu jalan bareng. Omzet naik, tapi uangnya nyangkut di stok yang belum terjual atau di tagihan klien yang belum dibayar.',
      "Itu baru contoh pertama dari yang namanya metrik basa-basi — angka yang kelihatan bagus di laporan, tapi nggak ngomong apa-apa soal apakah bisnis Anda benar-benar sehat.",
    ],
  },
  {
    id: 'c1-card-2',
    type: 'yes-no',
    question:
      "Coba cek diri sendiri: ada nggak satu angka yang selama ini Anda pamerkan ke tim atau ke keluarga sebagai tanda bisnis 'lagi bagus' — followers, jumlah pengunjung toko, omzet kotor?",
    yesLabel: 'Ada, saya sering pamerkan angka itu',
    noLabel: 'Tidak, saya nggak terlalu peduli angka semacam itu',
    feedbackYes:
      'Nah, itu titik awal yang bagus buat kita bongkar di bab ini — apakah angka itu benar-benar berarti, atau cuma enak didengar.',
    feedbackNo:
      "Bagus kalau memang begitu. Tapi terus perhatikan diri sendiri di bab ini — kadang kita memamerkan angka semacam itu tanpa sadar, misalnya waktu bilang 'toko rame terus kok' ke orang lain.",
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: Eye,
    eyebrow: 'Contoh yang Sering Ketuker',
    title: 'Ramai Bukan Berarti Untung',
    body: [
      'Follower Instagram toko Anda 20 ribu, komentar rame. Tapi waktu dicek laporan kasir, penjualan bulan ini sama saja dengan bulan lalu. Follower naik, omzet diam.',
      'Toko fisik Anda rame pengunjung tiap sore, parkiran penuh. Tapi dari 100 orang yang masuk, cuma 8 yang beli. Rame pengunjung, konversi rendah.',
      'Tim Anda lembur tiap hari, kelihatan sibuk banget dari luar. Tapi output kerjaan bulan ini — jumlah pesanan yang selesai, laporan yang kelar — sama saja dengan bulan yang timnya nggak lembur.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'multiple-choice',
    question:
      'Toko Anda pengunjungnya naik 3x lipat bulan ini, tapi jumlah transaksi yang benar-benar closing cuma naik sedikit. Angka mana yang lebih layak dicurigai sebagai metrik basa-basi di sini?',
    options: [
      'Jumlah pengunjung toko',
      'Jumlah transaksi yang closing',
      'Keduanya sama pentingnya',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Pengunjung ramai itu enak dilihat, tapi kalau nggak nyambung ke closing, angka itu cuma bikin Anda ngerasa aman — bukan menunjukkan bisnis sehat.',
    errorFeedback:
      'Coba lagi. Pengunjung yang ramai tapi nggak nyambung ke closing itu justru contoh klasik metrik yang menipu.',
  },
  {
    id: 'c1-card-5',
    type: 'sort-list',
    question:
      'Urutkan bagaimana biasanya cerita angka basa-basi ini terjadi, dari yang duluan sampai yang belakangan disadari.',
    items: [
      'Kaget kas ternyata tipis atau minus',
      'Omzet kelihatan naik terus dipamerkan',
      'Bos makin pede menambah belanja atau stok',
      'Ternyata uangnya nyangkut di stok atau tagihan yang belum cair',
    ],
    correctAnswer: [
      'Omzet kelihatan naik terus dipamerkan',
      'Bos makin pede menambah belanja atau stok',
      'Kaget kas ternyata tipis atau minus',
      'Ternyata uangnya nyangkut di stok atau tagihan yang belum cair',
    ],
    successFeedback:
      'Persis begini caranya angka basa-basi bikin bos kaget belakangan. Kalau dari awal ikut cek kas, bukan cuma omzet, kejutan ini bisa dicegah.',
    errorFeedback:
      'Belum pas. Urutan yang biasa terjadi: omzet naik dulu, bos makin pede belanja, baru kaget pas kas tipis-tipisnya kelihatan, dan baru belakangan sadar uangnya nyangkut di stok atau tagihan.',
  },
  {
    id: 'c1-card-6',
    type: 'info',
    icon: ShieldAlert,
    eyebrow: 'Kenapa Ini Berbahaya',
    title: 'Ini Insting Versi Baru, Cuma Pakai Baju Data',
    body: [
      'Kalau Anda sudah ikut Modul 1: inget soal bahaya mengelola bisnis pakai insting? Nah, metrik basa-basi ini versi yang lebih berbahaya dari itu.',
      'Kenapa lebih berbahaya? Karena kelihatannya Anda sudah pakai data, padahal angkanya nggak menjawab pertanyaan yang benar-benar penting.',
      "Anda mikir Anda sudah data-driven karena tiap pagi cek jumlah followers atau jumlah pengunjung. Tapi kalau angka itu nggak pernah bikin Anda mengubah keputusan, Anda cuma pindah dari nebak pakai perasaan, ke nebak pakai angka yang salah.",
    ],
  },
  {
    id: 'c1-card-7',
    type: 'fill-in-the-blank',
    sentence:
      'Metrik basa-basi itu bahaya justru karena kelihatannya Anda sudah ________, padahal angkanya nggak pernah benar-benar menuntun keputusan Anda.',
    options: ['data-driven', 'santai', 'jujur', 'hemat'],
    correctAnswer: 'data-driven',
    successFeedback:
      'Tepat. Itu yang bikin metrik basa-basi lebih berbahaya dari sekadar nggak punya data sama sekali — Anda ngerasa aman padahal belum tentu benar.',
    errorFeedback:
      'Bukan itu. Metrik basa-basi berbahaya karena kelihatan bikin Anda data-driven, padahal angkanya nggak menuntun keputusan apa pun.',
  },
  {
    id: 'c1-card-8',
    type: 'info',
    icon: Compass,
    eyebrow: 'Cara Mudah Mengecek',
    title: 'Satu Pertanyaan untuk Membedakan KPI Asli dari Basa-basi',
    body: [
      'Ada satu tes simpel yang bisa Anda pakai untuk angka apa pun di bisnis Anda: kalau angka ini naik atau turun besok, apakah ada orang di tim Anda yang benar-benar mengubah apa yang dia kerjakan?',
      'Kalau jawabannya tidak — kalau naik-turunnya angka itu cuma bikin Anda seneng atau kecewa sebentar tanpa ada yang berubah — itu tanda kuat angka itu basa-basi.',
      'KPI yang benar itu sebaliknya: begitu angkanya merah, ada orang yang tahu persis harus ngapain besok pagi.',
    ],
  },
  {
    id: 'c1-card-9',
    type: 'yes-no',
    question:
      'Coba bayangkan Anda tanya ke staf admin atau staf gudang Anda sekarang juga. Apakah mereka tahu persis angka apa yang jadi ukuran sukses mereka hari ini?',
    yesLabel: 'Ya, mereka punya angka spesifik',
    noLabel: "Tidak, mereka cuma tahu harus 'kerja keras'",
    feedbackYes:
      'Bagus. Itu tanda target Anda sudah turun jadi sesuatu yang nyata, bukan cuma angan-angan di kepala Anda sendiri.',
    feedbackNo:
      "Jangan salahkan mereka. Karyawan yang cuma disuruh 'kerja keras' tanpa angka spesifik akan bekerja menebak-nebak — dan Anda yang akan kecewa duluan waktu hasilnya nggak sesuai harapan.",
  },
  {
    id: 'c1-card-10',
    type: 'info',
    icon: Gauge,
    eyebrow: 'Sibuk Mengukur ≠ Terukur dengan Baik',
    title: 'Dashboard Penuh Angka, Tapi Nggak Ada yang Dipakai',
    body: [
      'Ada bisnis yang cuma pantau segelintir angka — mungkin cuma 3 atau 4 — tapi tiap angka itu benar-benar dipakai buat mutuskan sesuatu tiap minggu.',
      'Ada juga bisnis yang punya dashboard canggih, penuh grafik, puluhan angka berkedip-kedip. Kelihatan keren. Tapi coba tanya: dari puluhan angka itu, berapa yang benar-benar pernah mengubah keputusan bulan ini?',
      'Sibuk mengukur itu bukan sama dengan terukur dengan baik. Yang satu bikin Anda ngerasa canggih, yang satu bikin Anda benar-benar tahu ke mana harus melangkah.',
    ],
  },
  {
    id: 'c1-card-11',
    type: 'multiple-choice',
    question: "Mana yang lebih menunjukkan bisnis yang benar-benar 'terukur dengan baik'?",
    options: [
      'Dashboard dengan 40 angka yang jarang dilihat siapa-siapa',
      'Tiga angka yang tiap minggu benar-benar dipakai buat mutuskan sesuatu',
      'Laporan bulanan setebal 50 halaman',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Jumlah angka yang Anda pantau nggak penting-penting amat — yang penting angka itu benar-benar dipakai buat mutuskan sesuatu.',
    errorFeedback:
      'Coba lagi. Yang menentukan bukan banyaknya angka atau tebalnya laporan, tapi apakah angka itu benar-benar dipakai.',
  },
  {
    id: 'c1-card-12',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Jujur ke Diri Sendiri',
    title: 'Giliran Anda: Bongkar Satu Angka Kebanggaan',
    body: [
      'Sebelum lanjut, coba jujur sebentar — bukan buat kami, buat Anda sendiri.',
      "Pikirkan satu angka yang selama ini Anda banggakan di bisnis Anda. Yang sering Anda sebut waktu ditanya 'gimana bisnisnya?'",
    ],
  },
  {
    id: 'c1-card-13',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja KPI Anda',
    prompt:
      'Tulis 1 angka yang selama ini Anda banggakan di bisnis Anda — padahal Anda belum yakin itu benar-benar ukuran sehat atau tidaknya bisnis.',
    fields: [
      {
        id: 'metric',
        label: 'Angka apa yang Anda banggakan?',
        placeholder: 'Contoh: Jumlah follower Instagram toko saya',
      },
      {
        id: 'doubt',
        label: 'Kenapa sebenarnya Anda ragu angka itu benar-benar penting?',
        placeholder: 'Contoh: Follower naik terus, tapi penjualan bulan ini biasa saja',
      },
    ],
  },
  {
    id: 'c1-card-14',
    type: 'info',
    icon: BookMarked,
    eyebrow: 'Catatan Tersimpan',
    title: 'Semua Bos Pernah Kejebak — Termasuk yang Sukses',
    body: [
      'Tenang, ini bukan sesi menyalahkan diri sendiri. Hampir semua bos pernah bangga sama angka yang ternyata nggak berarti apa-apa — termasuk yang bisnisnya sekarang besar.',
      'Bedanya, bos yang bisnisnya terus berkembang berhenti pura-pura angka itu penting, terus mulai cari angka yang benar-benar menuntun keputusan.',
      'Jawaban Anda tadi baru saja jadi entri pertama di buku kerja KPI Anda sendiri. Nanti kita isi terus sampai jadi peta KPI yang lengkap.',
    ],
  },
  {
    id: 'c1-card-15',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 1',
    title: 'Sekarang Anda Tahu Jebakannya',
    body: [
      'Anda sekarang tahu: ramai, sibuk, dan angka yang naik itu belum tentu tanda bisnis sehat — kalau angka itu nggak pernah menuntun keputusan apa pun.',
      'Pertanyaannya sekarang: kalau bukan angka yang bikin bangga, KPI seperti apa yang benar-benar layak dipantau, dan gimana caranya menyambungkan dari target besar perusahaan sampai ke kerjaan harian staf paling bawah?',
      'Bab berikutnya kasih Anda peta lengkapnya — dari mana KPI yang benar itu harus mulai dirancang.',
    ],
  },
]
