import {
  FileStack,
  Gauge,
  ListChecks,
  Repeat,
  Search,
  Grid2x2,
  Target,
  Flag,
  Compass,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter7Cards: Card[] = [
  {
    id: 'c7-card-1',
    type: 'info',
    icon: FileStack,
    eyebrow: 'Bab 7 · Menilai & Memprioritaskan Temuan',
    title: 'Tumpukan Temuan Bukan Rencana',
    body: [
      'Sejak Bab 2, Anda sudah menulis banyak hal: gejala, titik bocor, sumber daya yang dicurigai, sampai rencana verifikasi. Itu semua bagus, tapi belum jadi apa-apa.',
      'Daftar temuan tersebut belum bisa memberikan jawaban dengan jelas apa yang harus Anda perbaiki. Tanpa sistem penilaian, Anda cuma akan membenahi yang paling baru diomongin orang, atau yang paling bikin Anda kesal hari itu.',
      'Bab ini kasih Anda sistemnya: cara menilai temuan secara konsisten, melacak sampai akar sesungguhnya, dan mengurutkan mana yang harus dibenahi duluan.',
    ],
  },
  {
    id: 'c7-card-2',
    type: 'info',
    icon: Gauge,
    eyebrow: 'Skala Penilaian',
    title: 'Satu Skala yang Sama untuk Semua Temuan',
    body: [
      'Mulai sekarang, nilai setiap temuan pakai skala yang sama: 1 sampai 4, berdasarkan kondisi nyata di lapangan — bukan feeling seberapa kesal Anda soal itu.',
      'Skor 1 artinya parah atau tidak ada sama sekali. Skor 2 artinya ada tapi belum dilaksanakan dengan baik. Skor 3 artinya sudah baik tapi masih ada kesalahan. Skor 4 artinya sudah optimal, berjalan rapi tanpa hambatan.',
      'Satu aturan penting: skor 2 ke bawah otomatis jadi red flag — inilah yang harus Anda prioritaskan',
    ],
  },
  {
    id: 'c7-card-3',
    type: 'multiple-choice',
    question:
      'Toko Anda: SOP kasir sepenuhnya cuma ada di kepala satu karyawan senior, tidak ada satu pun yang tertulis. Skor berapa yang paling tepat?',
    options: [
      'Skor 1 — tidak ada dokumentasi sama sekali, semuanya cuma ada di kepala orang',
      'Skor 2 — sudah ada sedikit catatan, meski jauh dari lengkap',
      'Skor 4 — sudah terdokumentasi rapi dan gampang diakses semua orang',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Kalau semuanya cuma ada di kepala satu orang dan tidak ada satu pun yang tertulis, itu kondisi paling parah — otomatis red flag.',
    errorFeedback:
      'Coba lagi. Kalau tidak ada dokumentasi tertulis sama sekali dan cuma mengandalkan ingatan satu orang, itu kondisi paling parah yang bisa terjadi — skor 1.',
  },
  {
    id: 'c7-card-4',
    type: 'multiple-choice',
    question:
      'Rekrutmen sales baru di perusahaan Anda: sudah ada panduan wawancara terstruktur dan checklist skill dasar, tapi belum pernah divalidasi ketat terhadap hasil kerja nyata mereka. Skor berapa yang paling tepat?',
    options: [
      'Skor 2 — cuma penyaringan CV dasar dengan wawancara bebas',
      'Skor 3 — sudah terstruktur, tapi belum ada validasi ketat',
      'Skor 4 — sudah pakai scorecard ketat dan tervalidasi penuh',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini sudah jauh lebih baik dari sekadar feeling, tapi belum di titik tertinggi karena belum ada validasi ketat terhadap hasilnya. Pas di tengah — skor 3.',
    errorFeedback:
      'Coba lagi. Ini sudah lebih maju dari sekadar wawancara bebas (skor 2), tapi belum di titik tertinggi karena belum tervalidasi ketat (skor 4). Yang paling pas: skor 3.',
  },
  {
    id: 'c7-card-5',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Waktunya Nilai Milik Anda Sendiri',
    title: 'Giliran Anda: Nilai Rantai Temuan Anda Sendiri',
    body: [
      'Anda sudah membangun satu rantai penuh sejak Bab 2: gejala, titik bocor, sumber daya yang dicurigai, sampai rencana verifikasi di Bab 6.',
      'Sekarang beri skor 1-4 untuk keseluruhan rantai itu, dan jelaskan alasannya singkat.',
    ],
  },
  {
    id: 'c7-card-6',
    type: 'finding-review',
    eyebrow: 'Penilaian Pertama · Rantai Temuan Anda',
    title: 'Nilai Rantai Temuan Anda',
    recap: [
      { label: 'Gejala (Bab 2)', cardId: 'c2-card-16', fieldId: 'symptom' },
      { label: 'Titik bocor yang diduga (Bab 4)', cardId: 'c4-card-14', fieldId: 'bottleneck' },
      { label: 'Sumber daya yang dicurigai (Bab 5)', cardId: 'c5-card-15', fieldId: 'resource' },
      { label: 'Rencana verifikasi (Bab 6)', cardId: 'c6-card-14', fieldId: 'document' },
    ],
    scorePrompt: 'Seberapa parah kondisi rantai temuan ini menurut Anda sekarang?',
    justificationLabel: 'Kenapa Anda beri skor segitu?',
    justificationPlaceholder:
      'Contoh: Sudah berulang 3 bulan dan belum ada yang benar-benar dicek ke lapangan',
    storageKey: 'chapter7-chain-score',
  },
  {
    id: 'c7-card-7',
    type: 'info',
    icon: Repeat,
    eyebrow: 'Teknik Baru · 5 Whys',
    title: 'Jangan Berhenti di Jawaban Pertama',
    body: [
      'Jawaban pertama untuk "kenapa ini terjadi" biasanya masih di permukaan. Teknik 5 Whys: tanya "kenapa" berulang-ulang — biasanya sekitar 5 kali — sampai Anda sampai ke sesuatu yang benar-benar bisa dibenahi.',
      'Berhenti terlalu cepat, Anda cuma akan membenahi gejalanya. Terus digali, Anda akan sampai ke akar yang sebenarnya.',
    ],
  },
  {
    id: 'c7-card-8',
    type: 'info',
    icon: Search,
    eyebrow: 'Contoh Lengkap',
    title: 'Dari "Penjualan Turun" Sampai Akar Sebenarnya',
    body: [
      'Gejala: penjualan turun bulan ini. Why 1 — kenapa? Karena closing rate tim sales menurun.',
      'Why 2 — kenapa closing rate menurun? Karena follow-up ke calon pelanggan sering telat atau malah lupa.',
      'Why 3 — kenapa follow-up sering telat? Karena semua leads masih dicatat manual di buku, tidak ada pengingat otomatis.',
      'Why 4 — kenapa masih dicatat manual? Karena tim sales tidak pernah diajari memakai CRM yang sebenarnya sudah ada.',
      'Akar masalahnya: karena sales tidak pernah dilatih memakai CRM untuk follow-up — bukan soal "kurang niat" seperti tuduhan yang biasa dilontarkan.',
    ],
  },
  {
    id: 'c7-card-9',
    type: 'multiple-choice',
    question:
      "Sekarang giliran Anda. Gejala: komplain kualitas produk naik bulan ini. Why 1 — kenapa komplain naik? Karena beberapa produk yang dikirim ternyata cacat produksi. Why 2 — kenapa ada produk cacat lolos? Karena langkah pengecekan kualitas (QC) terakhir sering dilewati. Why 3 — kenapa QC sering dilewati? Pilih jawaban yang paling layak jadi Why berikutnya.",
    options: [
      'Karena tim QC-nya memang malas',
      'Karena tim produksi dikejar deadline, dan QC dianggap boleh dilewati kalau lagi buru-buru',
      'Karena produknya memang sulit dicek kualitasnya',
    ],
    correctAnswer: 1,
    successFeedback:
      "Tepat. Ini baru jawaban yang bisa ditindaklanjuti — Why berikutnya bisa jadi 'kenapa QC dianggap boleh dilewati kalau buru-buru?'. 'Tim QC-nya malas' itu tuduhan sikap, bukan alasan yang bisa dibenahi.",
    errorFeedback:
      "Coba lagi. Cari jawaban yang mengarah ke sesuatu yang bisa dibenahi di sistem kerja, bukan tuduhan ke sikap orang ('malas') atau jawaban yang menyerah begitu saja ('memang sulit').",
  },
  {
    id: 'c7-card-10',
    type: 'info',
    icon: Grid2x2,
    eyebrow: 'Teknik Baru · Matriks Dampak vs Usaha',
    title: 'Empat Kotak untuk Menentukan Urutan Kerja',
    body: [
      'Setelah tahu akar masalahnya, tiap perbaikan yang mungkin Anda lakukan bisa dipetakan ke 4 kotak: dampak besar & usaha kecil (quick win — kerjakan duluan), dampak besar & usaha besar (proyek besar — rencanakan), dampak kecil & usaha kecil (boleh, kalau sempat), dan dampak kecil & usaha besar (hindari, buang-buang tenaga).',
      'Ini yang mencegah Anda menghabiskan berminggu-minggu untuk perbaikan yang kelihatannya keren tapi dampaknya nyaris nol.',
    ],
  },
  {
    id: 'c7-card-11',
    type: 'sort-list',
    question: 'Urutkan keempat rencana perbaikan ini dari yang paling layak dikerjakan duluan.',
    items: [
      'Bangun sistem CRM custom yang terintegrasi penuh ke semua channel penjualan',
      'Ganti tema warna halaman admin supaya lebih enak dilihat',
      'Ganti label kemasan supaya nomor WA CS lebih kelihatan, langsung mengurangi komplain "tidak nemu kontak"',
      'Bikin acara gathering tahunan besar-besaran yang makan waktu berbulan-bulan persiapan, padahal dampaknya ke operasional nyaris nol',
    ],
    correctAnswer: [
      'Ganti label kemasan supaya nomor WA CS lebih kelihatan, langsung mengurangi komplain "tidak nemu kontak"',
      'Bangun sistem CRM custom yang terintegrasi penuh ke semua channel penjualan',
      'Ganti tema warna halaman admin supaya lebih enak dilihat',
      'Bikin acara gathering tahunan besar-besaran yang makan waktu berbulan-bulan persiapan, padahal dampaknya ke operasional nyaris nol',
    ],
    successFeedback:
      'Pas. Kerjakan yang dampaknya besar dan gampang duluan (quick win), rencanakan yang dampaknya besar tapi berat, selipkan yang ringan kalau ada waktu, dan lupakan yang beratnya besar tapi dampaknya nyaris nol.',
    errorFeedback:
      'Belum pas. Ingat urutannya: dampak besar + usaha kecil dulu, baru dampak besar + usaha besar (tetap dikerjakan, cuma direncanakan), baru dampak kecil + usaha kecil (kalau sempat), dan dampak kecil + usaha besar itu yang paling belakang.',
  },
  {
    id: 'c7-card-12',
    type: 'info',
    icon: Target,
    eyebrow: 'Kenapa Urutannya Begitu',
    title: 'Bukan Soal yang Termudah, Tapi yang Paling Masuk Akal',
    body: [
      'Quick win didahulukan bukan karena paling gampang, tapi karena rasio dampak-per-usahanya paling tinggi — hasil cepat kelihatan, modal usaha kecil.',
      'Proyek besar tetap masuk rencana karena dampaknya nyata, cuma butuh waktu dan sumber daya lebih. Yang benar-benar dihindari cuma yang usahanya besar tapi dampaknya kecil — itu tempat energi Anda paling sering terbuang percuma.',
    ],
  },
  {
    id: 'c7-card-13',
    type: 'info',
    icon: Flag,
    eyebrow: 'Waktunya Memilih',
    title: 'Kalau Cuma Boleh Benahi Satu Duluan, Yang Mana?',
    body: [
      'Anda sudah punya skor untuk rantai temuan Anda, dan sudah paham cara mengurutkan berdasarkan dampak vs usaha.',
      'Sekarang, dari semua yang sudah Anda tulis sejak Bab 2, pilih SATU temuan spesifik yang akan Anda benahi lebih dulu.',
    ],
  },
  {
    id: 'c7-card-14',
    type: 'finding-review',
    eyebrow: 'Penilaian Kedua · Prioritas Utama Anda',
    title: 'Tandai Prioritas Utama Anda',
    recap: [
      { label: 'Skor rantai temuan Anda (barusan)', cardId: 'chapter7-chain-score', fieldId: 'score' },
      { label: 'Sumber daya yang dicurigai (Bab 5)', cardId: 'c5-card-15', fieldId: 'resource' },
    ],
    scorePrompt: 'Seberapa mendesak temuan ini untuk dibenahi duluan? (1 = bisa nanti, 4 = harus sekarang)',
    justificationLabel: 'Sebutkan temuan spesifik yang akan Anda prioritaskan duluan, dan alasannya',
    justificationPlaceholder:
      'Contoh: Melatih admin gudang pakai sistem stok baru — karena ini akar dari keterlambatan pengiriman yang sudah berulang 3 bulan',
    storageKey: 'chapter7-priority-pick',
  },
  {
    id: 'c7-card-15',
    type: 'info',
    icon: Compass,
    eyebrow: 'Selesai Bab 7',
    title: 'Anda Sekarang Sudah Punya Daftar Prioritas yang Masuk Akal',
    body: [
      'Anda sudah tahu cara menilai temuan pakai skala yang konsisten, melacak akarnya lewat 5 Whys, dan mengurutkan perbaikan lewat matriks dampak vs usaha.',
      'Prioritas yang baru Anda tandai itu akan jadi titik awal di bab terakhir.',
      'Bab terakhir: ubah ini jadi rencana aksi 90 hari, bangun kebiasaan audit rutin, dan unduh laporan audit lengkap Anda.',
    ],
    cta: { label: 'Lanjut ke Bab 8', href: '#chapter-8' },
  },
]
