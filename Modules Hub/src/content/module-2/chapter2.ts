import {
  HelpCircle,
  Layers,
  AlertCircle,
  AlertTriangle,
  Split,
  Building2,
  PhoneCall,
  Lightbulb,
  NotebookPen,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter2Cards: Card[] = [
  {
    id: 'c2-card-1',
    type: 'info',
    icon: HelpCircle,
    eyebrow: 'Bab 2 · Peta KPI',
    title: 'Sekarang Anda Butuh Peta, Bukan Cuma Kecurigaan',
    body: [
      'Di Bab 1 Anda baru sadar: angka yang Anda banggakan mungkin nggak berarti apa-apa. Bagus — sekarang Anda curiga sama angka. Tapi curiga doang belum cukup.',
      'Pertanyaan yang harus dijawab sekarang: kalau bukan angka kebanggaan, KPI seperti apa yang benar? Dan gimana caranya target tahunan perusahaan bisa nyampe jadi kerjaan harian staf paling bawah, tanpa berubah jadi omong kosong di tengah jalan?',
      'Itu yang kita bongkar di bab ini: peta cascading-nya.',
    ],
  },
  {
    id: 'c2-card-2',
    type: 'info',
    icon: Layers,
    eyebrow: 'Peta Besarnya',
    title: 'Tiga Level, Bukan Satu Lompatan',
    body: [
      'Target bisnis Anda itu nggak turun dalam satu lompatan dari "target tahunan" ke "kerjaan harian karyawan". Ada 3 level di antaranya, dan di tiap level, angkanya harus GANTI BENTUK, bukan cuma mengecil.',
      'Level 1: Target Tahunan Perusahaan — misalnya omzet Rp 10 miliar tahun ini. Angka besar, punya Anda sebagai CEO.',
      'Level 2: Target Divisi/Tim — target besar itu dipecah jadi potongan yang relevan buat kerjaan tim masing-masing. Divisi sales dapat potongan dalam bentuk closing bulanan, bukan dalam bentuk "omzet perusahaan".',
      'Level 3: Aksi Harian Individu — potongan tim itu diterjemahkan lagi jadi satu tindakan konkret yang bisa dikerjakan satu staf, hari ini, dan benar-benar dia kendalikan.',
    ],
  },
  {
    id: 'c2-card-3',
    type: 'multiple-choice',
    question:
      'Yang berubah dari Level 1 ke Level 3 di rantai cascading itu bukan cuma angkanya mengecil. Yang paling penting berubah adalah...',
    options: [
      'Warna laporannya',
      'Bentuk angkanya — dari hasil besar jadi tindakan spesifik yang bisa dikontrol',
      'Nama orang yang tanda tangan laporan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Omzet Rp 10 miliar itu nggak bisa langsung jadi "tugas hari ini" siapa pun — harus diterjemahkan ulang jadi tindakan yang benar-benar bisa dikontrol satu orang.',
    errorFeedback:
      'Coba lagi. Yang penting bukan angkanya mengecil doang, tapi bentuknya berubah — dari hasil besar jadi tindakan harian yang bisa dikontrol.',
  },
  {
    id: 'c2-card-4',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Skenario',
    title: 'Coba Bayangkan Ini Terjadi di Bisnis Anda',
    body: [
      'Seorang CEO punya target tahunan omzet Rp 10 miliar. Alih-alih diterjemahkan, dia langsung kumpulkan semua staf dan bilang: "Target kita tahun ini Rp 10 miliar. Ayo kerja yang bener." Selesai, tanpa penerjemahan apa pun.',
      'Minggu berikutnya, staf gudang, staf admin, dan staf sales semuanya "punya" angka Rp 10 miliar yang sama di kepala mereka. Tapi coba tanya salah satu dari mereka: apa yang harus saya kerjakan HARI INI supaya angka itu tercapai?',
    ],
  },
  {
    id: 'c2-card-5',
    type: 'multiple-choice',
    question:
      'Kalau target Rp 10 miliar itu disodorkan mentah-mentah ke tiap staf tanpa diterjemahkan dulu, apa yang sebenarnya terjadi ke staf itu?',
    options: [
      'Mereka jadi lebih termotivasi karena tahu target besarnya',
      "Mereka 'punya' angka, tapi angka itu nggak bisa mereka apa-apakan sendirian — sama kayak disuruh 'kerja keras' tanpa angka spesifik",
      'Tidak masalah, karena semua staf pasti otomatis tahu cara mengejarnya',
    ],
    correctAnswer: 1,
    successFeedback:
      "Tepat. Ingat staf yang cuma disuruh 'kerja keras' tanpa angka spesifik di Bab 1? Ini persis pola yang sama — cuma bajunya beda, angka besar perusahaan dijejalkan mentah-mentah tanpa diterjemahkan jadi sesuatu yang bisa mereka kendalikan.",
    errorFeedback:
      'Coba lagi. Target sebesar itu, kalau disodorkan mentah-mentah, nggak memberi staf itu satu pun tindakan konkret yang bisa mereka kendalikan hari ini.',
  },
  {
    id: 'c2-card-6',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Poin Paling Penting di Bab Ini',
    title: 'Melompati Satu Level Itu Sama Bahayanya dengan KPI Basa-basi',
    body: [
      "Ingat staf yang cuma disuruh 'kerja keras' tanpa angka spesifik di Bab 1? Itulah yang terjadi kalau target perusahaan langsung ditempel ke staf tanpa lewat proses penerjemahan cascading.",
      'Angka yang nggak bisa dikendalikan oleh orang yang disuruh mengejarnya itu sama percumanya dengan follower yang nggak nyambung ke closing. Bedanya cuma kelihatan lebih "serius", karena angkanya gede dan berbau target resmi perusahaan.',
      'Jadi aturannya sederhana: setiap level cascading harus benar-benar diterjemahkan, bukan cuma diteruskan mentah-mentah ke bawah.',
    ],
  },
  {
    id: 'c2-card-7',
    type: 'yes-no',
    question:
      'Coba jujur: apakah target yang selama ini Anda kasih ke staf itu sudah diterjemahkan jadi aksi harian, atau masih dalam bentuk angka besar perusahaan yang cuma Anda tempel ke mereka?',
    yesLabel: 'Sudah diterjemahkan jadi aksi harian',
    noLabel: 'Masih angka besar yang saya tempel begitu saja',
    feedbackYes:
      'Bagus, itu tandanya Anda sudah setengah jalan menuju sistem cascading yang benar.',
    feedbackNo:
      'Wajar — ini justru kesalahan paling umum. Sisa bab ini kita bongkar cara menerjemahkannya.',
  },
  {
    id: 'c2-card-8',
    type: 'info',
    icon: Split,
    eyebrow: 'Dua Istilah yang Akan Sering Muncul',
    title: 'Kenalan Dulu: Lag dan Lead',
    body: [
      'Di tiap level cascading, ada dua jenis angka yang harus Anda pisahkan: Lag Metric dan Lead Metric.',
      'Lag Metric itu hasil yang sudah terjadi — misalnya omzet bulan lalu, atau jumlah closing bulan ini. Angka ini kaca spion: penting, tapi Anda cuma bisa lihat sesudahnya.',
      'Lead Metric itu aksi hari ini yang mendorong hasil itu — misalnya jumlah telepon ke prospek hari ini. Angka ini setir: bisa Anda kendalikan sekarang juga.',
      'Belum usah pusing membedakan keduanya secara detail — itu tugas Bab 3 dan 4. Di sini cukup kenal dulu istilahnya, karena akan terus muncul di contoh-contoh berikutnya.',
    ],
  },
  {
    id: 'c2-card-9',
    type: 'fill-in-the-blank',
    sentence:
      'Angka hasil yang sudah terjadi dan cuma bisa dilihat sesudahnya itu namanya ________ Metric.',
    options: ['Lag', 'Lead', 'Vanity', 'Basa-basi'],
    correctAnswer: 'Lag',
    successFeedback: 'Tepat. Lag itu kaca spion — hasil yang sudah kejadian.',
    errorFeedback:
      'Bukan itu. Angka hasil yang sudah terjadi dan cuma kelihatan sesudahnya itu Lag Metric.',
  },
  {
    id: 'c2-card-10',
    type: 'info',
    icon: Building2,
    eyebrow: 'Contoh Lengkap · Fungsi Sales',
    title: 'Level 1 ke Level 2: Dari Omzet Perusahaan ke Target Divisi',
    body: [
      'Biar nggak abstrak, mari ikuti satu angka nyata turun tiga level, di divisi Sales.',
      'Level 1 — Target Tahunan Perusahaan: omzet Rp 10 miliar tahun ini. Angka ini punya Anda sebagai CEO, dan masih terlalu besar untuk dikerjakan siapa pun secara langsung.',
      'Level 2 — Target Divisi Sales: Rp 10 miliar itu dipecah antar divisi. Sales, misalnya, dapat potongan closing Rp 800 juta per bulan. Bentuknya sudah beda — bukan lagi "omzet perusahaan setahun", tapi "closing bulanan divisi ini".',
    ],
  },
  {
    id: 'c2-card-11',
    type: 'info',
    icon: PhoneCall,
    eyebrow: 'Contoh Lengkap · Level 3',
    title: 'Level 3: Dari Target Divisi ke Aksi Harian Staf',
    body: [
      'Rp 800 juta/bulan itu diterjemahkan lagi jadi aksi harian tiap staf Telesales: telepon 50 prospek per hari.',
      'Sekarang bentuknya benar-benar berubah — dari angka rupiah, jadi jumlah tindakan yang bisa staf itu kendalikan 100% hari ini, tanpa nunggu closing kejadian dulu.',
      'Ini yang dimaksud "ganti bentuk, bukan cuma mengecil". Rp 10 miliar tidak mungkin diperintahkan langsung ke satu staf. Tapi "telepon 50 prospek hari ini" bisa.',
    ],
  },
  {
    id: 'c2-card-12',
    type: 'multiple-choice',
    question:
      'Dari contoh Rp 10 miliar → Rp 800 juta/bulan → 50 telepon/hari, kenapa angka di Level 3 sudah beda BENTUK dari Level 1, bukan cuma beda besar?',
    options: [
      'Karena Level 3 itu jumlah tindakan yang bisa dikendalikan langsung, bukan hasil rupiah',
      'Karena Level 3 dihitung oleh orang yang berbeda',
      'Karena Level 3 memang seharusnya angkanya lebih kecil saja',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Level 3 bukan cuma versi kecil dari Level 1 — bentuknya berubah total, dari hasil rupiah jadi tindakan yang bisa dikendalikan langsung hari ini.',
    errorFeedback:
      'Coba lagi. Yang penting bukan siapa yang menghitung atau seberapa kecil angkanya, tapi bentuknya berubah dari hasil rupiah jadi tindakan yang bisa dikendalikan langsung.',
  },
  {
    id: 'c2-card-13',
    type: 'info',
    icon: Lightbulb,
    eyebrow: 'Sekarang Coba Tebak Sendiri',
    title: 'Latihan: Tebak Bentuknya, Baru Lihat Jawaban',
    body: [
      'Sekarang giliran Anda melatih intuisi ini. Bayangkan target tahunan perusahaan Anda: "Menurunkan komplain pelanggan sebesar 50% tahun ini".',
      'Sebelum lanjut ke kartu berikutnya, coba tebak dulu di kepala Anda: kalau target ini diturunkan ke tim Customer Service, kira-kira bentuknya jadi apa? Dan kalau diturunkan lagi ke aksi harian satu staf CS, jadi apa?',
      'Ini bukan ujian buat menjatuhkan mental seperti insting yang salah di Bab 1 — ini cuma latihan menebak bentuk, sebelum kita cocokkan jawabannya.',
    ],
  },
  {
    id: 'c2-card-14',
    type: 'multiple-choice',
    question:
      "Kira-kira, bentuk aksi harian yang paling masuk akal untuk staf CS dari target 'komplain turun 50%' itu apa?",
    options: [
      'Membalas dan menyelesaikan komplain masuk dalam waktu maksimal 2 jam, tiap hari',
      'Berdoa supaya pelanggan tidak komplain',
      'Menunggu laporan komplain bulanan dari atasan',
    ],
    correctAnswer: 0,
    successFeedback:
      "Persis begitu polanya. Target tahunan 'komplain turun 50%' → target tim CS jadi 'rata-rata waktu respons di bawah 2 jam' → aksi harian staf jadi 'selesaikan tiap komplain dalam maksimal 2 jam'. Tindakan ini yang benar-benar bisa staf kendalikan tiap hari.",
    errorFeedback:
      'Coba lagi. Aksi harian yang benar itu harus sesuatu yang bisa staf kendalikan dan kerjakan tiap hari — bukan menunggu atau berharap.',
  },
  {
    id: 'c2-card-15',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Isi Buku Kerja',
    title: 'Sekarang Angka Anda Sendiri',
    body: [
      'Latihan tadi pakai contoh orang lain. Sekarang giliran angka Anda sendiri yang akan kita pakai terus sampai Bab 5 nanti — buat dicascade lewat Lag, Lead, sampai ke level divisi dan individu.',
      'Tulis satu target tahunan atau bulanan terbesar yang benar-benar sedang Anda kejar sekarang.',
    ],
  },
  {
    id: 'c2-card-16',
    type: 'reflection',
    eyebrow: 'Entri Kedua · Buku Kerja KPI Anda',
    prompt: 'Tulis 1 target tahunan/bulanan terbesar yang sedang Anda kejar di bisnis Anda sekarang.',
    fields: [
      {
        id: 'target-number',
        label: 'Berapa angkanya, dan satuannya apa?',
        placeholder: 'Contoh: Omzet Rp 5 miliar tahun ini, atau 200 pelanggan baru tahun ini',
      },
      {
        id: 'target-why',
        label: 'Kenapa angka ini yang Anda kejar sekarang?',
        placeholder: 'Contoh: Supaya bisa buka cabang kedua tahun depan',
      },
    ],
  },
  {
    id: 'c2-card-17',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 2',
    title: 'Sekarang Anda Sudah Punya Peta Cascading-nya',
    body: [
      'Target yang baru Anda tulis itu akan jadi contoh kasus yang kita pakai terus sampai Bab 5 — simpan baik-baik.',
      'Anda sekarang tahu: target itu harus ganti bentuk di tiap level, bukan cuma mengecil, dan melompati satu level sama bahayanya dengan KPI basa-basi.',
      'Sekarang Anda sudah punya peta cascading-nya. Bab berikutnya kita bedah elemen pertama dari peta ini: Lag Metric — angka hasil yang jadi kaca spion bisnis Anda.',
    ],
  },
]
