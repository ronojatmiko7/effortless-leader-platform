import {
  Drama,
  FileSearch,
  MessageCircleQuestion,
  Footprints,
  FileQuestion,
  Crosshair,
  NotebookPen,
  Compass,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter6Cards: Card[] = [
  {
    id: 'c6-card-1',
    type: 'info',
    icon: Drama,
    eyebrow: 'Bab 6 · Mengumpulkan Data Audit yang Objektif',
    title: 'Tunggu Dulu — Ini Baru Dugaan, Bukan Temuan',
    body: [
      'Coba jujur: gejala di Bab 2, titik bocor di Bab 4, sumber daya yang dicurigai di Bab 5 — semua itu masih murni dari sudut pandang Anda sendiri. Belum ada satu pun yang benar-benar dicek ke lapangan.',
      "Ini masalahnya: kalau Anda cuma mengandalkan pengamatan Anda sendiri, atau cuma dengar dari satu-dua orang yang paling sering komplain di grup, Anda sebenarnya masih melakukan hal yang sama dengan Bab 1 — cuma sekarang dibungkus istilah 'audit' biar kedengaran lebih ilmiah.",
      'Insting yang pakai kostum audit, tetap saja insting.',
    ],
  },
  {
    id: 'c6-card-2',
    type: 'info',
    icon: FileSearch,
    eyebrow: 'Cara #1 · Review Dokumen',
    title: 'Mulai dari yang Sudah Tertulis',
    body: [
      'Sebelum bertanya ke siapa pun, cek dulu dokumen tertulis yang tersedia: SOP, laporan penjualan, catatan komplain pelanggan, laporan keuangan.',
      "Kelebihannya: murah, cepat, dan bebas dari bias — dokumen tidak bisa 'menjaga perasaan' atau membela diri. Kekurangannya: bisa saja sudah usang atau tidak lengkap, apalagi kalau selama ini pencatatannya asal-asalan. Nah kalau benar begini, ini sudah termasuk catatan temuan.",
    ],
  },
  {
    id: 'c6-card-3',
    type: 'yes-no',
    question:
      'Kapan terakhir kali Anda benar-benar membuka laporan tertulis — bukan cuma dengar ringkasannya dari orang lain?',
    yesLabel: 'Baru-baru ini, saya rutin cek langsung',
    noLabel: 'Sudah lama, biasanya cuma dengar laporan lisan',
    feedbackYes:
      "Bagus. Kebiasaan itu yang bikin Anda tidak gampang kena informasi yang sudah 'disaring' orang lain sebelum sampai ke Anda.",
    feedbackNo:
      'Wajar — tapi coba sadari, setiap laporan yang disampaikan lisan sudah lewat interpretasi orang itu dulu, sebelum sampai ke Anda.',
  },
  {
    id: 'c6-card-4',
    type: 'info',
    icon: MessageCircleQuestion,
    eyebrow: 'Cara #2 · Wawancara Terstruktur',
    title: 'Pertanyaan yang Menggiring vs yang Netral',
    body: [
      'Cara Anda bertanya menentukan jawaban yang Anda dapat. Pertanyaan menggiring (leading) sudah menyisipkan jawaban yang Anda inginkan; pertanyaan netral membiarkan orang cerita apa adanya.',
      "Contoh soal proses lambat: 'Kayaknya sistemnya jelek ya, makanya lambat?' (menggiring) vs. 'Ceritakan proses ini dari awal sampai selesai — bagian mana yang biasanya bikin lambat?' (netral).",
      "Contoh soal komplain pelanggan: 'Ini pasti gara-gara QC kurang teliti, kan?' (menggiring) vs. 'Menurut kamu, di titik mana produk ini paling sering ada masalah kualitasnya?' (netral).",
      "Contoh soal target meleset: 'Timnya kurang niat ya bulan ini?' (menggiring) vs. 'Apa yang beda antara bulan ini dengan bulan-bulan waktu target tercapai?' (netral).",
    ],
  },
  {
    id: 'c6-card-5',
    type: 'multiple-choice',
    question:
      'Anda mau tahu kenapa karyawan baru sering resign dalam 3 bulan pertama. Pertanyaan mana yang paling netral untuk dipakai waktu wawancara mereka?',
    options: [
      'Menurutmu, onboarding di sini kurang niat diurus ya?',
      'Ceritakan pengalaman kamu selama 3 bulan pertama di sini — bagian mana yang paling membantu, dan bagian mana yang bikin bingung?',
      'Kamu resign karena gajinya kurang, kan?',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Pertanyaan ini membiarkan mereka cerita apa adanya, tanpa Anda sudah menebak jawabannya duluan.',
    errorFeedback:
      'Coba lagi. Dua opsi lain sudah menyisipkan jawaban yang Anda mau dengar duluan — itu ciri khas pertanyaan menggiring.',
  },
  {
    id: 'c6-card-6',
    type: 'multiple-choice',
    question:
      'Dalam satu sesi wawancara ke staf gudang, Anda menanyakan tiga hal ini berturut-turut. Mana yang PALING menggiring jawabannya?',
    options: [
      'Coba ceritakan, biasanya pesanan nyangkut paling lama di langkah mana?',
      'Ini pasti gara-gara sistemnya lemot ya, makanya sering telat?',
      'Kalau dibandingkan bulan lalu, menurutmu apa yang berubah?',
    ],
    correctAnswer: 1,
    successFeedback:
      "Tepat. Pertanyaan itu sudah menyisipkan kesimpulan ('sistemnya lemot') sebelum orangnya sempat cerita apa-apa. Dua pertanyaan lain membiarkan mereka bicara duluan.",
    errorFeedback:
      'Coba lagi. Perhatikan pertanyaan yang sudah menyisipkan kesimpulan di dalamnya sebelum orangnya sempat menjawab — itu yang paling menggiring.',
  },
  {
    id: 'c6-card-7',
    type: 'info',
    icon: Footprints,
    eyebrow: 'Cara #3 · Observasi Langsung',
    title: 'Turun Langsung Lihat Kerjanya, Bukan Cuma Dengar Ceritanya',
    body: [
      'Orang menceritakan pekerjaannya beda dengan cara mereka benar-benar mengerjakannya — bukan karena mereka bohong, tapi karena manusia memang cenderung menceritakan versi yang lebih rapi dari kenyataan.',
      'Solusinya: duduk dan amati langsung satu proses dari awal sampai selesai, tanpa banyak bicara. Istilahnya gemba walk — datang ke tempat kerjanya, lihat apa yang benar-benar terjadi.',
    ],
  },
  {
    id: 'c6-card-8',
    type: 'yes-no',
    question:
      'Kapan terakhir kali Anda benar-benar duduk mengamati satu proses dari awal sampai selesai, bukan cuma dengar laporannya?',
    yesLabel: 'Belum lama ini',
    noLabel: 'Sudah lama sekali, atau tidak pernah',
    feedbackYes: 'Bagus, itu kebiasaan yang jarang dimiliki CEO kebanyakan.',
    feedbackNo:
      'Wajar — kebanyakan CEO sudah terlalu sibuk untuk duduk diam mengamati. Tapi itu artinya, selama ini Anda cuma tahu versi ceritanya, bukan kenyataannya.',
  },
  {
    id: 'c6-card-9',
    type: 'info',
    icon: FileQuestion,
    eyebrow: 'Cara #4 · Survei Singkat ke Tim',
    title: 'Dengar Suara yang Diam, Bukan Cuma yang Paling Ribut',
    body: [
      'Di setiap rapat atau obrolan tim, biasanya cuma 2-3 orang yang paling sering bicara. Suara mayoritas yang diam itu sering luput — padahal belum tentu mereka setuju, cuma tidak biasa angkat bicara.',
      'Oleh karena itu terkadang kita perlu sebar kuesioner survey singkat untuk mendapatkan gambaran yang sering tidak terdengar. Agar setiap orang berani mengemukakan jawabannya dengan jujur, maka survey ini perlu dilakukan secara anonim atau tanpa nama.',
    ],
  },
  {
    id: 'c6-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Semakin orang merasa jawabannya bisa dilacak balik ke dirinya, semakin mereka menahan diri untuk jujur. Itu sebabnya survei tim sebaiknya bersifat _________.',
    options: ['anonim', 'panjang', 'formal', 'tahunan'],
    correctAnswer: 'anonim',
    successFeedback:
      'Tepat. Kalau nama mereka bisa ketahuan, banyak yang akan menjawab versi aman, bukan versi jujur.',
    errorFeedback:
      'Bukan itu. Supaya orang berani jujur, jawabannya sebaiknya tidak bisa dilacak balik ke mereka — itu artinya survei harus anonim.',
  },
  {
    id: 'c6-card-11',
    type: 'info',
    icon: Crosshair,
    eyebrow: 'Kenapa Harus Digabung',
    title: 'Satu Sumber Saja Tidak Cukup',
    body: [
      'Keempat cara tadi masing-masing punya titik buta sendiri: dokumen bisa basi, wawancara bisa bias walau pertanyaannya netral, observasi cuma menangkap potret sesaat, dan survei kadang kurang detail.',
      'Makanya, pakai minimal 2 cara sekaligus untuk hal yang sama. Kalau dokumen dan wawancara sama-sama menunjuk ke arah yang sama, itu baru layak disebut temuan — bukan sekadar dugaan.',
    ],
  },
  {
    id: 'c6-card-12',
    type: 'multiple-choice',
    question:
      'Anda cuma mengandalkan wawancara ke 1 manajer gudang untuk menyimpulkan kenapa pengiriman sering telat. Apa risiko terbesarnya?',
    options: [
      'Tidak ada risiko, manajer pasti paling tahu situasi timnya',
      'Jawabannya bisa saja bias — entah karena dia tidak mau disalahkan, atau memang tidak melihat semua sisi ceritanya',
      'Risikonya cuma soal waktu, wawancara terlalu singkat',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Satu sumber, sehebat apa pun orangnya, tetap satu sudut pandang. Cek juga dokumennya atau amati langsung sebelum menyimpulkan.',
    errorFeedback:
      'Coba lagi. Masalahnya bukan soal waktu — satu sumber saja, walau dari orang yang paling paham sekalipun, tetap membawa sudut pandang dan kepentingannya sendiri.',
  },
  {
    id: 'c6-card-13',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Buat Rencana',
    title: 'Giliran Anda: Bikin Rencana Verifikasi',
    body: [
      'Ingat bottleneck dari Bab 4 dan sumber daya yang dicurigai dari Bab 5? Itu masih dugaan. Sekarang rencanakan cara membuktikannya.',
      'Pilih minimal 2 cara dari 4 yang baru kita bahas, lalu tulis langkah konkretnya.',
    ],
  },
  {
    id: 'c6-card-14',
    type: 'reflection',
    eyebrow: 'Entri Keenam · Buku Kerja Audit Anda',
    prompt:
      'Buat rencana verifikasi untuk bottleneck/sumber daya yang Anda curigai di Bab 4-5. Jangan biarkan itu cuma jadi dugaan.',
    fields: [
      {
        id: 'document',
        label: 'Dokumen atau catatan apa yang akan Anda cek PERTAMA KALI untuk memverifikasinya?',
        placeholder: 'Contoh: Log komplain pelanggan 3 bulan terakhir soal keterlambatan',
      },
      {
        id: 'question',
        label: 'Satu pertanyaan netral (bukan menggiring) yang akan Anda tanyakan, dan ke siapa?',
        placeholder:
          "Contoh: Ke admin gudang — 'Ceritakan langkah-langkah pas pesanan masuk sampai dikemas, bagian mana yang paling sering bikin nunggu?'",
      },
    ],
  },
  {
    id: 'c6-card-15',
    type: 'info',
    icon: Compass,
    eyebrow: 'Selesai Bab 6',
    title: 'Sekarang Data Anda Bisa Dipercaya',
    body: [
      'Anda sekarang punya 4 cara mengumpulkan data yang objektif — bukan cuma insting yang dibungkus istilah audit: review dokumen, wawancara terstruktur, observasi langsung, dan survei tim. Dan yang lebih penting, Anda tahu kenapa harus pakai minimal 2 sekaligus.',
      'Rencana verifikasi yang baru Anda tulis itu akan kita pakai lagi nanti.',
      'Bab depan: cara menilai dan memprioritaskan temuan itu, supaya Anda tahu mana yang harus dibenahi duluan.',
    ],
    cta: { label: 'Lanjut ke Bab 7', href: '#chapter-7' },
  },
]
