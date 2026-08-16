import {
  Flame,
  TrendingDown,
  Siren,
  ClipboardCheck,
  Scale,
  AlertTriangle,
  NotebookPen,
  BookMarked,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter1Cards: Card[] = [
  {
    id: 'c1-card-1',
    type: 'info',
    icon: Flame,
    eyebrow: 'Bab 1 · Kenapa Bisnis Anda Perlu Diaudit Secara Rutin',
    title: 'Anda CEO atau Pemadam Kebakaran?',
    body: [
      "Coba jujur: berapa kali dalam minggu ini Anda 'turun tangan langsung' menyelesaikan masalah di bisnis Anda — apakah itu pelanggan komplain, ada pengiriman barang telat, atau ada karyawan salah kirim invoice?",
      'Ketika Anda berhasil menyelesaikan masalah-masalah tersebut, rasanya produktif sekali. Tapi coba cek dulu: masalah-masalah itu, apakah baru pertama kali terjadi? Atau ini sudah ketiga kalinya terjadi di bulan ini?',
      'Kalau Anda cuma memadamkan api yang sama berulang-ulang, Anda bukan CEO tapi petugas damkar (pemadam kebakaran).',
    ],
  },
  {
    id: 'c1-card-2',
    type: 'yes-no',
    question:
      'Coba ingat-ingat dalam sebulan terakhir: apakah ada masalah operasional yang muncul berulang kali?',
    yesLabel: 'Ya, ada yang berulang',
    noLabel: 'Tidak ada, semuanya kasus baru',
    feedbackYes:
      'Nah, itu adalah tandanya. Jika ada masalah yang terus berulang, berarti akar masalahnya tidak pernah diselesaikan — cuma dipadamkan sementara.',
    feedbackNo:
      'Kalau memang begitu, bagus. Tapi coba jujur sekali lagi: itu karena betul tidak ada yang berulang, atau memang karena tidak dicatat aja?',
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: TrendingDown,
    eyebrow: 'Kebocoran yang Tidak Terasa',
    title: 'Sibuk Itu adalah Biaya Yang Tidak Kasat Mata',
    body: [
      'Setiap kali Anda sebagai CEO sibuk memadamkan api, ada tiga biaya yang tidak terasa: (1) Kualitas produk / jasa yang dikeluarkan bisnis Anda pasti terganggu, dan ini akan dirasakan oleh pelanggan Anda, dampaknya adalah kepuasan pelanggan  (2) Waktu Anda lebih banyak digunakan untuk hal operasional dibandingkan dengan hal strategis, bisnis Anda nggak akan maju (3) Anda mungkin benar-benar keluar uang untuk menyelesaikan masalah jangka pendek.',
      'Oleh karena itu, Anda perlu melakukan audit bisnis secara rutin. Dengan begitu, masalah akan dapat dicegah sebelum parah, dan solusi yang dihasilkan sifatnya lebih permanen dibandingkan hanya tambal sulam.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau ada masalah yang terus berulang, itu bukan berarti Anda lagi sial. Itu tandanya ada akar permasalahan yang tidak pernah _________.',
    options: ['diperbaiki', 'dipadamkan', 'dilupakan', 'disalahkan'],
    correctAnswer: 'diperbaiki',
    successFeedback:
      'Tepat. Dipadamkan dan diperbaiki itu dua hal beda — yang satu bikin apinya mati sebentar, yang satu bikin apinya nggak nyala lagi.',
    errorFeedback:
      'Bukan itu. Masalah berulang itu tandanya akar permasalahannya tidak pernah diperbaiki, tapi cuma dipadamkan sementara.',
  },
  {
    id: 'c1-card-5',
    type: 'info',
    icon: Siren,
    eyebrow: 'Dua Gaya Mengelola Bisnis',
    title: 'Gaya Damkar',
    body: [
      'Senin: pelanggan komplain, Anda turun tangan sendiri. Rabu: karyawan kunci resign mendadak, Anda ambil alih kerjaannya. Jumat: supplier telat kirim, Anda yang telepon cari solusi.',
      'Di akhir minggu Anda kelelahan. Tapi coba cek penggunaan waktu Anda: berapa jam yang benar-benar terpakai untuk memikirkan strategi bisnis — yang bukan cuma memadamkan kebakaran?',
    ],
  },
  {
    id: 'c1-card-6',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Dua Gaya Mengelola Bisnis',
    title: 'Gaya Audit Rutin',
    body: [
      'Bandingkan dengan bisnis yang rutin diaudit. Senin pagi, Anda luangkan waktu 30 menit untuk cek KPI kunci — ketemu potensi masalah kecil di gudang sebelum menjadi keterlambatan pengiriman.',
      'Rabu, Anda cek proses onboarding karyawan baru, supaya operasional tidak bergantung ke satu orang saja kalau tiba-tiba ada yang resign.',
      'Sama-sama sibuk? Tidak juga. Bedanya: yang satu reaktif, yang satu preventif. Yang satu makin lelah tiap minggu, yang satu kerjaannya makin ringan.',
    ],
  },
  {
    id: 'c1-card-7',
    type: 'multiple-choice',
    question:
      'Manakah dari berikut ini yang jadi tanda paling jelas bahwa bisnis Anda dikelola secara REAKTIF, dan bukan preventif?',
    options: [
      'Anda sudah tahu ada masalah sebelum pelanggan sempat komplain',
      'Anda baru tahu ada masalah setelah pelanggan marah-marah duluan',
      'Anda punya jadwal rutin buat cek KPI operasional',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kalau Anda baru tau ada masalah setelah mendapat keluhan pelanggan, itu artinya Anda sudah telat satu langkah.',
    errorFeedback:
      'Coba lagi. Tanda paling jelas gaya reaktif itu justru saat Anda BARU tahu ada masalah setelah ada pelanggan yang komplain duluan.',
  },
  {
    id: 'c1-card-8',
    type: 'sort-list',
    question: 'Urutkan bagaimana satu masalah kecil biasanya naik kelas jadi krisis kalau tidak pernah diaudit.',
    items: [
      'Pelanggan mulai komplain',
      'Jadi krisis yang harus Anda tangani sendiri',
      'Masalah kecil muncul tapi tidak tercatat',
      'Muncul lagi, dianggap kebetulan',
    ],
    correctAnswer: [
      'Masalah kecil muncul tapi tidak tercatat',
      'Muncul lagi, dianggap kebetulan',
      'Pelanggan mulai komplain',
      'Jadi krisis yang harus Anda tangani sendiri',
    ],
    successFeedback:
      'Ini adalah penyebab masalah kecil berkembang jadi kebakaran berulang. Dengan audit rutin, Anda sudah bisa menyelesaikan masalah dari langkah 1 atau maksimal 2, sebelum menjadi masalah yang lebih parah.',
    errorFeedback:
      "Belum pas. Sebuah masalah kecil biasanya dibiarkan, tapi lama-lama jadi masalah besar yang dirasakan langsung oleh pelanggan.",
  },
  {
    id: 'c1-card-9',
    type: 'info',
    icon: Scale,
    eyebrow: 'Apakah Insting Selalu Salah?',
    title: 'Apakah boleh menjalankan bisnis mengandalkan insting?',
    body: [
      'Biar adil: insting itu belum tentu jahat. Kalau Anda sudah bertahun-tahun di industri ini, biasanya pengalaman tersebut akan terakumulasi menjadi sebuah insting. Yaitu respon cepat untuk menyelesaikan suatu masalah yang sering dilihat.',
      'Insting lebih cocok dipakai untuk hal-hal kecil dan gampang diperbaiki kalau salah: pilih vendor mana yang lebih enak diajak kerja sama, atau desain mana yang kelihatannya lebih menarik pelanggan.',
    ],
  },
  {
    id: 'c1-card-10',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Apakah Insting Selalu Salah?',
    title: 'Tapi Berisiko Untuk Keputusan Besar',
    body: [
      "Masalahnya, insting jadi berisiko kalau dipakai untuk keputusan besar, mahal, dan sulit diperbaiki: memecat orang hanya karena 'kayaknya gak kompeten', ganti seluruh sistem kerja karena 'kayaknya lebih modern', atau berhenti berinovasi karena 'insting saya bilang pelanggan nggak butuh'.",
      'Aturan sederhana: semakin besar risiko yang diambil, maka pengambilan keputusan harus semakin pakai data dan bukan insting semata.',
    ],
  },
  {
    id: 'c1-card-11',
    type: 'multiple-choice',
    question:
      'Anda mau memutuskan siapa yang harus dipecat karena dianggap kinerjanya buruk. Ini jenis keputusan yang...',
    options: [
      'Kecil dan gampang diperbaiki — insting saja cukup',
      'Besar dan susah diperbaiki — butuh data dulu, bukan cuma perasaan',
      'Tidak penting-penting amat, boleh diabaikan',
    ],
    correctAnswer: 1,
    successFeedback:
      "Tepat. Memecat orang itu keputusan mahal dan susah diperbaiki — jangan modal 'kayaknya' saja.",
    errorFeedback:
      'Coba lagi. Memecat orang itu keputusan besar dan susah diperbaiki, itu butuh data — bukan cuma insting.',
  },
  {
    id: 'c1-card-12',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Jujur ke Diri Sendiri',
    title: 'Giliran Anda: Bongkar Satu Keputusan',
    body: [
      'Sebelum lanjut, coba jujur sebentar. Bukan buat kami — tapi buat bisnis Anda sendiri.',
      'Pikirkan satu keputusan besar yang Anda ambil belakangan ini. Bukan yang kecil kayak pilih vendor katering buat snack rapat. Tapi keputusan besar: soal rekrutmen karyawan, soal investasi modal, atau soal strategi bisnis.',
    ],
  },
  {
    id: 'c1-card-13',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja Audit Anda',
    prompt: 'Tulis 1 keputusan besar yang belakangan ini Anda ambil pakai insting, bukan data.',
    fields: [
      {
        id: 'decision',
        label: 'Keputusan apa yang Anda ambil?',
        placeholder: 'Contoh: Menaikkan target sales tim 30% tanpa lihat data kapasitas mereka',
      },
      {
        id: 'reason',
        label: 'Kenapa waktu itu Anda yakin itu keputusan yang benar?',
        placeholder: 'Contoh: Kelihatannya tim kurang effort aja',
      },
      {
        id: 'result',
        label: 'Apa yang sebenarnya terjadi setelah keputusan itu?',
        placeholder: 'Contoh: Target meleset, tim malah demotivasi',
      },
    ],
  },
  {
    id: 'c1-card-14',
    type: 'info',
    icon: BookMarked,
    eyebrow: 'Catatan Tersimpan',
    title: 'Ini Bukan untuk Menyalahkan Anda',
    body: [
      'Tenang, ini bukan sesi menyalahkan diri sendiri. Setiap CEO pasti pernah ambil keputusan pakai insting — termasuk yang paling berpengalaman sekalipun.',
      'Bedanya dengan CEO yang bisnisnya berkembang: mereka sadar akan hal itu, kemudian membangun sistem supaya keputusan besar berikutnya nggak lagi cuma modal insting.',
      'Jawaban Anda tadi baru saja jadi entri pertama di buku kerja audit Anda sendiri. Di bab-bab berikutnya, kita isi terus sampai jadi laporan audit yang lengkap.',
    ],
  },
  {
    id: 'c1-card-15',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 1',
    title: 'Sekarang Anda Sudah Merasakan Biayanya',
    body: [
      'Anda sekarang tahu: sibuk belum tentu sukses, dan insting cuma aman untuk keputusan kecil.',
      'Pertanyaannya sekarang: kalau bukan pakai insting, lalu data apa yang harus dicek di bisnis Anda?',
      'Di Bab 2, kita bahas petanya: 3 Level yang harus Anda audit di bisnis Anda, supaya Anda tahu apa yang harus diperbaiki.',
    ],
    cta: { label: 'Lanjut ke Bab 2', href: '#chapter-2' },
  },
]
