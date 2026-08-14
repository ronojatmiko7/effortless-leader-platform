import {
  BarChart3,
  SearchCheck,
  Rss,
  Percent,
  TrendingUp,
  Route,
  CalendarRange,
  GitCompare,
  NotebookPen,
  Compass,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter3Cards: Card[] = [
  {
    id: 'c3-card-1',
    type: 'info',
    icon: BarChart3,
    eyebrow: 'Bab 3 · Mengaudit Lapisan Output',
    title: 'Balik Lagi ke Gejala yang Anda Tulis',
    body: [
      'Di akhir Bab 2, Anda menulis satu gejala yang kelihatan di Output bisnis Anda — entah itu soal penjualan, kualitas, keterlambatan, atau yang lain.',
      'Sekarang saatnya audit yang sesungguhnya dimulai: kita cari angka yang benar-benar menunjukkan gejala itu, bukan angka yang cuma enak dilaporkan di depan tim.',
      'Karena ternyata, tidak semua angka yang Anda pantau selama ini benar-benar berguna. Sebagian cuma kelihatan penting.',
    ],
  },
  {
    id: 'c3-card-2',
    type: 'info',
    icon: SearchCheck,
    eyebrow: 'Poin Paling Penting di Bab Ini',
    title: 'Metrik Basa-basi vs Metrik Nyata',
    body: [
      'Metrik basa-basi (vanity metric) itu angka yang enak dilaporkan tapi tidak menyuruh Anda melakukan apa-apa. Dia naik, Anda senang. Dia turun, Anda bingung harus mulai dari mana.',
      'Metrik nyata itu kebalikannya: angka yang bergerak beneran kalau bisnis Anda membaik atau memburuk, dan langsung menunjuk ke satu tindakan spesifik.',
      'Masalahnya, dua-duanya sering kelihatan sama pentingnya di laporan. Bedanya baru ketahuan kalau Anda tahu cara mengetesnya.',
    ],
  },
  {
    id: 'c3-card-3',
    type: 'info',
    icon: Rss,
    eyebrow: 'Contoh Metrik Basa-basi',
    title: 'Kedengarannya Bagus, Tapi Nggak Ngasih Tahu Apa-apa',
    body: [
      'Total omzet bulanan, tanpa lihat margin. Bisa saja omzet naik tapi Anda rugi lebih besar, karena diskon gede-gedean atau biaya produksi ikut membengkak.',
      'Jumlah followers media sosial atau jumlah leads yang masuk, tanpa tahu berapa yang benar-benar closing. Angkanya bisa ramai, tapi kalau tidak ada yang beli, itu cuma keramaian.',
    ],
  },
  {
    id: 'c3-card-4',
    type: 'info',
    icon: Percent,
    eyebrow: 'Contoh Metrik Nyata',
    title: 'Angka yang Langsung Nunjuk ke Tindakan',
    body: [
      'Margin kotor per lini produk. Kalau ini turun, Anda tahu persis lini produk mana yang harus dicek — harga jualnya, biaya bahannya, atau efisiensi produksinya.',
      'Retensi pelanggan dan tingkat pengiriman tepat waktu (on-time delivery rate). Kalau ini turun, Anda tahu harus mulai dari mana: kenapa pelanggan lama pergi, atau di titik mana pengiriman sering telat.',
    ],
  },
  {
    id: 'c3-card-5',
    type: 'fill-in-the-blank',
    sentence:
      'Tesnya sederhana: kalau angka ini naik, apakah Anda tahu persis apa yang harus dilakukan besok? Kalau jawabannya tidak tahu, angka itu cuma metrik _________.',
    options: ['basa-basi', 'prediktif', 'operasional', 'bulanan'],
    correctAnswer: 'basa-basi',
    successFeedback:
      'Tepat. Metrik basa-basi itu enak dilaporkan, tapi tidak pernah benar-benar menyuruh Anda melakukan apa-apa besok paginya.',
    errorFeedback:
      'Bukan itu. Kalau angka naik tapi Anda tidak tahu harus ngapain besok, itu tandanya angka itu cuma metrik basa-basi — enak didengar, tidak berguna buat aksi.',
  },
  {
    id: 'c3-card-6',
    type: 'sort-list',
    question:
      'Urutkan keempat angka ini dari yang PALING basa-basi sampai yang PALING nyata dan bisa langsung ditindaklanjuti.',
    items: [
      'Margin kotor per lini produk',
      'Jumlah followers media sosial',
      'Total omzet bulanan (tanpa lihat margin)',
      'Jumlah leads masuk (tanpa tahu berapa yang closing)',
    ],
    correctAnswer: [
      'Jumlah followers media sosial',
      'Jumlah leads masuk (tanpa tahu berapa yang closing)',
      'Total omzet bulanan (tanpa lihat margin)',
      'Margin kotor per lini produk',
    ],
    successFeedback:
      'Pas. Makin ke kanan, makin jelas apa yang harus Anda lakukan besok kalau angkanya jelek. Followers turun? Anda tidak tahu harus ngapain. Margin lini produk turun? Anda tahu persis produk mana yang harus dibenahi.',
    errorFeedback:
      "Belum pas. Coba tanya ke tiap angka: 'kalau ini naik atau turun, saya tahu persis harus ngapain besok, tidak?' Urutkan dari yang jawabannya paling 'tidak tahu' sampai yang paling jelas.",
  },
  {
    id: 'c3-card-7',
    type: 'info',
    icon: TrendingUp,
    eyebrow: 'Kenapa Ini Penting',
    title: 'Bukan Berarti Berhenti Lihat Omzet',
    body: [
      'Bukan berarti omzet atau followers itu haram dilihat. Angka-angka itu tetap berguna sebagai gambaran umum.',
      'Tapi kalau Anda mau tahu APA yang harus dibenahi di bisnis Anda, angka itu bukan tempat mulai yang tepat. Mulailah dari metrik nyata — yang langsung menunjuk ke satu tindakan.',
    ],
  },
  {
    id: 'c3-card-8',
    type: 'info',
    icon: Route,
    eyebrow: 'Dari Target Besar ke Angka Harian',
    title: 'Target Perusahaan Tidak Berarti Apa-apa Sampai Dipecah',
    body: [
      'Punya target "omzet naik 25% tahun ini" itu bagus buat rapat direksi, tapi tidak berarti apa-apa buat staf yang kerja hari ini. Mereka butuh tahu apa yang harus dikejar HARI INI, bukan tahun ini.',
      'Ini yang disebut cascading: target besar dipecah jadi angka spesifik yang dimiliki tiap tim, bahkan tiap orang. Kalau tidak dipecah, target itu cuma jadi poster motivasi yang ditempel di dinding kantor.',
    ],
  },
  {
    id: 'c3-card-9',
    type: 'multiple-choice',
    question:
      'Target perusahaan tahun ini: retensi pelanggan naik dari 60% ke 75%. Apa target turunan yang paling berguna buat staf customer service harian?',
    options: [
      'Ikut memikirkan strategi retensi perusahaan secara keseluruhan',
      'Menghubungi kembali pelanggan yang tidak order lagi dalam 30 hari terakhir, minimal 10 pelanggan per hari',
      'Menjaga mood tetap positif saat melayani pelanggan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Angka harian yang jelas dan bisa dihitung sendiri oleh staf — itu baru target yang benar-benar bisa dikejar, bukan cuma slogan.',
    errorFeedback:
      'Coba lagi. Target turunan yang berguna itu harus berupa aksi harian yang spesifik dan bisa dihitung — bukan sekadar niat baik atau ikut mikirin strategi besar.',
  },
  {
    id: 'c3-card-10',
    type: 'info',
    icon: CalendarRange,
    eyebrow: 'Benchmarking Internal',
    title: 'Bandingkan ke Diri Sendiri dan Sesama Tim',
    body: [
      'Angka itu tidak berarti apa-apa kalau berdiri sendirian. "Omzet bulan ini 500 juta" — bagus atau jelek? Anda tidak akan tahu sampai dibandingkan.',
      'Benchmarking internal itu paling gampang: bandingkan bulan ini dengan bulan lalu, cabang A dengan cabang B, tim sales 1 dengan tim sales 2. Kalau ada satu yang jauh beda, itu petunjuk pertama ke mana harus mengaudit lebih dalam.',
    ],
  },
  {
    id: 'c3-card-11',
    type: 'info',
    icon: GitCompare,
    eyebrow: 'Benchmarking Eksternal',
    title: 'Bandingkan ke Luar, Tapi Jangan Asal Niru',
    body: [
      'Benchmarking eksternal artinya bandingkan angka Anda ke rata-rata industri atau kompetitor. Ini berguna untuk tahu apakah Anda memang tertinggal, atau justru sudah di atas rata-rata.',
      'Hati-hati satu hal: jangan asal niru angka orang tanpa tahu konteksnya. Margin 40% mungkin bagus untuk industri Anda, tapi biasa saja untuk industri lain. Bandingkan dulu apel dengan apel.',
    ],
  },
  {
    id: 'c3-card-12',
    type: 'yes-no',
    question:
      'Selama ini, angka-angka yang Anda pantau — apakah pernah dibandingkan ke sesuatu (periode lalu, cabang lain, kompetitor), atau cuma dilihat sendirian?',
    yesLabel: 'Sudah, saya biasa membandingkan',
    noLabel: 'Belum, saya cuma lihat angkanya sendiri',
    feedbackYes:
      'Bagus. Angka yang dibandingkan itu baru punya arti — Anda jadi tahu itu kabar baik atau kabar buruk.',
    feedbackNo:
      'Wajar, kebanyakan bos begitu. Tapi angka yang tidak pernah dibandingkan itu seperti nilai ujian tanpa tahu nilai rata-rata kelas — Anda tidak akan tahu itu bagus atau jelek.',
  },
  {
    id: 'c3-card-13',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Audit Angka Anda Sendiri',
    title: 'Sekarang Coba di Angka Anda Sendiri',
    body: [
      'Cukup teori. Coba pikirkan 3 angka yang paling sering Anda cek — yang paling sering muncul di laporan, di grup WhatsApp tim, atau di kepala Anda sendiri.',
      'Untuk tiap angka, tanya ke diri sendiri: ini metrik basa-basi, atau metrik nyata? Belum perlu jawaban sempurna — cukup jujur.',
    ],
  },
  {
    id: 'c3-card-14',
    type: 'reflection',
    eyebrow: 'Entri Ketiga · Buku Kerja Audit Anda',
    prompt: 'Sebutkan 3 angka yang paling sering Anda pantau di bisnis Anda saat ini.',
    fields: [
      {
        id: 'metric1',
        label: 'Angka #1',
        placeholder: 'Contoh: Total omzet bulanan',
      },
      {
        id: 'metric2',
        label: 'Angka #2',
        placeholder: 'Contoh: Jumlah leads masuk dari iklan',
      },
      {
        id: 'metric3',
        label: 'Angka #3',
        placeholder: 'Contoh: Jumlah komplain pelanggan',
      },
    ],
  },
  {
    id: 'c3-card-15',
    type: 'info',
    icon: Compass,
    eyebrow: 'Selesai Bab 3',
    title: 'Output Anda Sudah Dipetakan',
    body: [
      'Simpan baik-baik 3 angka yang baru Anda tulis. Nanti di Bab 7, kita akan menilai dan memprioritaskan mana yang paling mendesak dibenahi duluan.',
      'Sekarang Anda tahu cara membedakan metrik basa-basi dari metrik nyata, cara memecah target jadi angka harian, dan cara membandingkan angka supaya punya arti.',
      'Tapi angka yang bagus saja tidak cukup kalau sistem kerja di baliknya bocor. Sekarang kita masuk ke mesinnya: Proses.',
    ],
    cta: { label: 'Lanjut ke Bab 4', href: '#chapter-4' },
  },
]
