import {
  Hammer,
  ScissorsLineDashed,
  UserCheck,
  Timer,
  ArrowRightLeft,
  Sparkles,
  NotebookPen,
  ClipboardCheck,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter7Cards: Card[] = [
  {
    id: 'c7-card-1',
    type: 'info',
    icon: Hammer,
    eyebrow: 'Bab 7 · Lokakarya Rekayasa Ulang',
    title: 'Saatnya Menyatukan Semuanya Jadi Satu Rancangan',
    body: [
      'Sejak Bab 3, Anda sudah mengumpulkan bahan: peta proses, diagnosis titik silo (Bab 4), instruksi kerja (Bab 5), dan titik pencegahan kualitas (Bab 6). Tapi selama ini itu masih tersebar jadi latihan-latihan terpisah.',
      'Bab ini adalah lokakaryanya — sesi praktik menyatukan semua itu jadi SATU rancangan ulang yang utuh untuk titik serah terima Anda yang paling parah: lebih sedikit approval, pemilik yang jelas, dan batas waktu yang jelas.',
    ],
  },
  {
    id: 'c7-card-2',
    type: 'info',
    icon: ScissorsLineDashed,
    eyebrow: 'Langkah 1',
    title: 'Memangkas Approval Berlebih',
    body: [
      'Kalau titik Anda didiagnosis approval berlapis (Bab 4): untuk tiap orang yang harus approve, tanya — "kalau orang ini dihilangkan dari alur approval, risiko konkret apa yang muncul?"',
      'Kalau jawabannya nggak jelas, atau cuma "nanti dia complain karena biasanya dilibatkan", itu kandidat kuat untuk dipangkas — atau diturunkan jadi FYI (dikasih tahu setelahnya, bukan harus approve duluan sebelum lanjut).',
      'Yang tetap perlu dipertahankan: approval yang memang punya alasan risiko nyata (nilai transaksi besar, risiko hukum, keselamatan). Yang dipangkas hanya yang alasannya sekadar kebiasaan.',
    ],
  },
  {
    id: 'c7-card-3',
    type: 'info',
    icon: UserCheck,
    eyebrow: 'Langkah 2',
    title: 'Menetapkan Pemilik Proses yang Jelas',
    body: [
      'Kalau titik Anda didiagnosis silo fungsional (Bab 4): tetapkan satu nama/peran yang jadi pemilik titik serah terima itu. Bukan "tim Produksi secara umum" — tapi orang atau peran spesifik yang bertanggung jawab kalau ada yang macet di situ.',
      'Pemilik ini nggak harus mengerjakan semuanya sendiri — tugasnya adalah memastikan titik itu nggak pernah "tidak ada yang pegang" lagi.',
    ],
  },
  {
    id: 'c7-card-4',
    type: 'info',
    icon: Timer,
    eyebrow: 'Langkah 3',
    title: 'Menetapkan SLA (Batas Waktu) per Tahap',
    body: [
      'Kalau titik Anda didiagnosis bottleneck atau nggak ada kejelasan waktu: tentukan batas waktu maksimal yang wajar untuk tahap itu (SLA), dan apa yang terjadi kalau lewat — siapa yang harus dihubungi (eskalasi).',
      'Kalau Anda sudah ikut Modul 3: SLA yang dilanggar bisa jadi bahan bahasan di ritme EBR — misalnya tinjauan mingguan mengecek berapa kali SLA titik ini dilanggar bulan ini. Kalau belum ikut Modul 3, cukup ingat: SLA tanpa forum yang mengecek kepatuhannya lama-lama akan diabaikan begitu saja.',
    ],
  },
  {
    id: 'c7-card-5',
    type: 'info',
    icon: ArrowRightLeft,
    eyebrow: 'Contoh Rombakan Lengkap',
    title: 'Contoh: Merombak "PO Nyangkut 3 Hari" dari Awal sampai Akhir',
    body: [
      'Alur lama: PO diisi Staf Pembelian → butuh tanda tangan fisik dari 3 manajer berbeda → rata-rata nyangkut 3 hari → nggak jelas siapa yang bertanggung jawab kalau lambat.',
      'Langkah 1, pangkas approval: dari 3 approver jadi 1 approver (manajer terkait langsung) — dua approver lain diturunkan jadi FYI otomatis lewat notifikasi. Langkah 2, tetapkan pemilik: Manajer Pembelian jadi pemilik resmi titik ini, bertanggung jawab kalau ada yang macet. Langkah 3, tetapkan SLA: approval harus selesai maksimal 1x24 jam lewat sistem — kalau lewat, otomatis eskalasi ke atasan manajer tersebut.',
      'Alur baru: PO diisi lengkap dengan justifikasi (instruksi kerja dari Bab 5) → 1 approval dalam 1x24 jam, dicek pakai kriteria konkret (Bab 5) → kalau lolos kriteria, lanjut; kalau lewat SLA, eskalasi otomatis. Dari 3 hari nyangkut jadi maksimal 1 hari, dan jelas siapa pemiliknya.',
    ],
  },
  {
    id: 'c7-card-6',
    type: 'multiple-choice',
    question:
      'Dalam contoh rombakan "PO Nyangkut 3 Hari" di atas, apa yang membuat alur barunya jauh lebih ringkas dibanding alur lama?',
    options: [
      'Karena stafnya diganti dengan yang lebih cepat kerja',
      'Karena approval dipangkas ke yang benar-benar perlu, ada pemilik yang jelas, dan ada SLA dengan eskalasi otomatis',
      'Karena prosesnya dipindah ke luar jam kerja',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Tiga perubahan itu — memangkas approval, menetapkan pemilik, dan memasang SLA — adalah inti dari rekayasa ulang proses, bukan soal mengganti orang atau jam kerja.',
    errorFeedback:
      'Coba lagi. Bukan soal mengganti staf atau jam kerja — perubahan intinya ada tiga: approval dipangkas, ada pemilik jelas, dan ada SLA dengan jalur eskalasi.',
  },
  {
    id: 'c7-card-7',
    type: 'sort-list',
    question:
      'Urutkan tiga langkah rekayasa ulang proses ini sesuai urutan yang sudah Anda pelajari di bab ini.',
    items: [
      'Menetapkan batas waktu (SLA) dan jalur eskalasi per tahap',
      'Memangkas approval yang tidak lagi jelas alasan risikonya',
      'Menetapkan satu pemilik proses yang jelas untuk titik itu',
    ],
    correctAnswer: [
      'Memangkas approval yang tidak lagi jelas alasan risikonya',
      'Menetapkan satu pemilik proses yang jelas untuk titik itu',
      'Menetapkan batas waktu (SLA) dan jalur eskalasi per tahap',
    ],
    successFeedback:
      'Tepat. Pangkas dulu yang tidak perlu, baru tetapkan siapa pemiliknya, baru pasang batas waktu dan jalur eskalasinya.',
    errorFeedback:
      'Belum pas. Urutan yang dipakai di bab ini: pangkas approval berlebih dulu, baru tetapkan pemilik proses, baru pasang SLA dan jalur eskalasi.',
  },
  {
    id: 'c7-card-8',
    type: 'yes-no',
    question:
      'Kalau Anda menerapkan tiga langkah tadi (pangkas approval, tetapkan pemilik, pasang SLA) ke titik serah terima Anda sendiri — apakah Anda cukup yakin itu akan benar-benar mengurangi kemacetan yang selama ini terjadi?',
    yesLabel: 'Ya, cukup yakin',
    noLabel: 'Belum terlalu yakin',
    feedbackYes:
      'Bagus — tuliskan rancangannya di entri berikutnya biar konkret, bukan cuma keyakinan di kepala.',
    feedbackNo:
      'Wajar di percobaan pertama. Kartu berikutnya akan bantu Anda menuliskan rancangannya secara eksplisit, biar lebih mudah dites dan diperbaiki.',
  },
  {
    id: 'c7-card-9',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Sebelum Menulis Rancangan',
    title: 'Cek Ulang Diagnosis Anda dari Bab 4',
    body: [
      'Sebelum Anda menuliskan rancangan ulang, mari cek ulang diagnosis yang Anda buat di Bab 4 — biar rancangan yang Anda susun benar-benar menjawab masalah yang tadi Anda temukan, bukan masalah yang berbeda.',
    ],
  },
  {
    id: 'c7-card-10',
    type: 'finding-review',
    eyebrow: 'Entri Ketujuh · Buku Kerja Proses Anda',
    title: 'Seberapa Yakin Rancangan Ulang Ini Akan Memperbaiki Titik yang Anda Diagnosis?',
    recap: [
      { label: 'Titik serah terima paling parah (Bab 4)', cardId: 'c4-card-14', fieldId: 'worst-handoff' },
      { label: 'Diagnosis Anda (Bab 4)', cardId: 'c4-card-14', fieldId: 'diagnosis' },
    ],
    scorePrompt:
      'Setelah menerapkan tiga langkah rekayasa ulang (pangkas approval, tetapkan pemilik, pasang SLA), seberapa yakin Anda ini akan benar-benar memperbaiki titik di atas?',
    justificationLabel: 'Kenapa Anda yakin — atau belum terlalu yakin?',
    justificationPlaceholder:
      'Contoh: Yakin, karena approval yang dipangkas memang tidak pernah jelas alasannya, dan sekarang ada pemilik yang bisa ditagih',
    storageKey: 'chapter7-redesign-review',
  },
  {
    id: 'c7-card-11',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Tuliskan Rancangan Ulang Anda Secara Lengkap',
    body: [
      'Sekarang tuliskan rancangan ulang Anda secara konkret: apa yang berubah dari alur lama ke alur baru, siapa pemilik barunya, dan berapa SLA barunya — persis seperti contoh "PO Nyangkut 3 Hari" tadi, tapi versi bisnis Anda sendiri.',
    ],
  },
  {
    id: 'c7-card-12',
    type: 'reflection',
    eyebrow: 'Entri Kedelapan · Buku Kerja Proses Anda',
    prompt: 'Tuliskan rancangan ulang lengkap untuk titik serah terima Anda.',
    fields: [
      {
        id: 'old-vs-new',
        label: 'Apa yang berubah dari alur lama ke alur baru?',
        placeholder: 'Contoh: Dari 3 approval fisik jadi 1 approval via sistem dengan kriteria yang jelas',
      },
      {
        id: 'new-owner',
        label: 'Siapa pemilik baru titik ini?',
        placeholder: 'Contoh: Manajer Pembelian',
      },
      {
        id: 'new-sla',
        label: 'Berapa SLA/batas waktu barunya, dan ke mana eskalasinya kalau lewat?',
        placeholder: 'Contoh: Maksimal 1x24 jam, eskalasi otomatis ke atasan Manajer Pembelian kalau lewat',
      },
    ],
  },
  {
    id: 'c7-card-13',
    type: 'info',
    icon: Sparkles,
    eyebrow: 'Selesai Bab 7',
    title: 'Rancangan Ulang Anda Sudah Ada di Atas Kertas',
    body: [
      'Anda baru saja menyelesaikan lokakarya penuh: dari diagnosis, instruksi kerja, pencegahan kualitas, sampai rancangan ulang lengkap dengan pemilik dan SLA yang jelas.',
      'Bab terakhir: cara menginstalnya biar beneran jalan — bukan cuma rancangan bagus yang nggak pernah dieksekusi — dan laporan lengkap dari semua yang sudah Anda kerjakan dari Bab 1.',
    ],
  },
]
