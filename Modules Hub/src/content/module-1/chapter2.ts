import {
  Map,
  Package,
  Workflow,
  Boxes,
  Link,
  Search,
  TrendingDown,
  MessageSquareWarning,
  Truck,
  Compass,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter2Cards: Card[] = [
  {
    id: 'c2-card-1',
    type: 'info',
    icon: Map,
    eyebrow: 'Bab 2 · Peta Audit Operasional',
    title: 'Ini Dia Petanya',
    body: [
      'Di Bab 1 Anda sudah merasakan capeknya jadi pemadam kebakaran. Sekarang saatnya Anda cari akar penyebabnya.',
      'Bisnis Anda, seberapa pun ributnya, sebenarnya cuma punya 3 Level yang perlu dicek: Output, Proses, dan Input.',
      'Kelihatannya simpel. Tapi kebanyakan orang ga paham bagaimana menemukan titik permasalahannya.',
    ],
  },
  {
    id: 'c2-card-2',
    type: 'info',
    icon: Package,
    eyebrow: 'Level 1',
    title: 'Output — Apa HASIL dari Bisnis Anda',
    body: [
      'Output itu hasil akhirnya: angka penjualan, kualitas produk yang sampai ke pelanggan, profit di akhir bulan.',
      'Output adalah indikator kesehatan bisnis Anda. Kalau Output bisnis Anda buruk, maka perlu dicari akar permasalahannya pada Level-Level sebelumnya.',
    ],
  },
  {
    id: 'c2-card-3',
    type: 'info',
    icon: Workflow,
    eyebrow: 'Level 2',
    title: 'Proses — Bagaimana PROSES KERJA Bisnis Anda',
    body: [
      'Proses itu sistem kerjanya: SOP, alur kerja, siapa mengerjakan apa dan dalam urutan seperti apa.',
      'Untuk menghasilkan output berkualitas baik secara konsisten, sebuah bisnis perlu memiliki proses bisnis yang terdokumentasikan dengan baik, dilatihkan kepada seluruh karyawan, dan dimonitor secara rutin.',
    ],
  },
  {
    id: 'c2-card-4',
    type: 'info',
    icon: Boxes,
    eyebrow: 'Level 3',
    title: 'Input — Kualitas SUMBER DAYA yang Digunakan oleh Bisnis Anda',
    body: [
      'Input itu bahan mentahnya: orang (karyawan), alat kerja, material, dan modal. Semua yang harus ada SEBELUM Proses bisa jalan.',
      'Kualitas Proses dan Output, sangat ditentukan oleh Kualitas Input. Jika kualitas Sumber Daya yang digunakan jelek, maka sebagus apapun Prosesnya, maka Output akan jelek.',
    ],
  },
  {
    id: 'c2-card-5',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau Output itu hasil akhir dan Proses itu cara kerjanya, maka Input itu ibarat _________ yang harus masuk duluan sebelum semua itu bisa terjadi.',
    options: ['bahan mentah', 'hasil akhir', 'keluhan pelanggan', 'rapat evaluasi'],
    correctAnswer: 'bahan mentah',
    successFeedback:
      'Tepat. Tanpa bahan yang masuk duluan, tidak ada proses yang bisa jalan, apalagi hasil yang bisa keluar.',
    errorFeedback:
      'Bukan itu. Input itu bahan mentah yang masuk duluan — orang, alat, material, modal — sebelum Proses bisa jalan dan Output bisa keluar.',
  },
  {
    id: 'c2-card-6',
    type: 'info',
    icon: Link,
    eyebrow: 'Poin Paling Penting di Bab Ini',
    title: 'Ini Bukan Tiga Hal Terpisah, Tapi Rantai Sebab-Akibat',
    body: [
      'Kesalahan paling umum: menganggap Output, Proses, dan Input itu tiga kotak yang berdiri sendiri-sendiri. Padahal ketiganya satu rantai — Input menggerakkan Proses, Proses menghasilkan Output.',
      'Konsekuensinya: masalah yang Anda LIHAT hampir selalu muncul di Output — penjualan turun, komplain naik, target meleset. Tapi akar masalahnya nyaris tidak pernah ada di situ. Akarnya bersembunyi lebih dalam, di Proses atau di Input.',
      'Jadi kalau Anda cuma menatap masalah yang ada di Output dan langsung menebak solusinya, Anda menebak di Level yang paling gampang dilihat, bukan di Level yang paling mungkin jadi sumber masalahnya.',
    ],
  },
  {
    id: 'c2-card-7',
    type: 'info',
    icon: TrendingDown,
    eyebrow: 'Contoh 1 · Gejala di Output',
    title: 'Penjualan Turun Tiga Bulan Berturut-turut',
    body: [
      'Bayangkan angka penjualan bulan ini turun, dan ini bulan ketiga berturut-turut. Reaksi paling umum: "tim sales-nya kurang niat" atau "kurang kerja keras".',
      'Sebelum menyimpulkan, coba tahan dulu. Ini gejala di Output. Pertanyaannya: akarnya di mana?',
    ],
  },
  {
    id: 'c2-card-8',
    type: 'multiple-choice',
    question:
      'Untuk gejala "penjualan turun" ini, kemungkinan besar akar masalahnya ada di mana?',
    options: [
      'Proses — SOP follow-up ke calon pelanggan putus di tengah jalan',
      'Input — Karyawan sales baru belum pernah ditraining, dan tidak ada CRM untuk melacak leads',
      'Bisa dua-duanya — Proses maupun Input sama-sama mungkin jadi akarnya',
    ],
    correctAnswer: 2,
    successFeedback:
      'Betul. Makanya percuma cuma menebak "ini pasti gara-gara tim sales-nya males". Bisa jadi SOP follow-up-nya yang bolong, bisa jadi rep-nya memang belum dibekali alat dan pelatihan yang benar.',
    errorFeedback:
      'Coba lagi — jangan buru-buru pilih satu. Gejala penjualan turun ini bisa lahir dari SOP follow-up yang bolong (Proses) ATAU dari rep yang belum dilatih dan tidak punya CRM (Input). Bisa dua-duanya.',
  },
  {
    id: 'c2-card-9',
    type: 'info',
    icon: Search,
    eyebrow: 'Contoh 1 · Bongkar Akarnya',
    title: 'Gejalanya Sama, Akarnya Bisa Beda',
    body: [
      'Kalau akarnya di Proses: leads masuk, tapi tidak ada aturan jelas kapan harus di-follow-up, jadi banyak prospek yang keburu dingin dan pindah ke kompetitor.',
      'Kalau akarnya di Input: Sales-nya baru, tidak pernah dilatih teknik selling, dan tidak punya alat (CRM) untuk tahu leads mana yang harus dikejar duluan.',
      'Solusinya beda total tergantung akarnya di mana. Itu sebabnya menebak dari Output saja bisa bikin Anda memperbaiki hal yang salah.',
    ],
  },
  {
    id: 'c2-card-10',
    type: 'info',
    icon: MessageSquareWarning,
    eyebrow: 'Contoh 2 · Gejala di Output',
    title: 'Komplain Kualitas Produk Naik',
    body: [
      'Sekarang bayangkan jumlah komplain soal kualitas produk naik dua kali lipat bulan ini. Reaksi paling umum: "tim produksinya ceroboh".',
      'Ini juga gejala di Output. Sebelum menyalahkan orangnya, coba telusuri dulu ke dalam.',
    ],
  },
  {
    id: 'c2-card-11',
    type: 'multiple-choice',
    question: 'Untuk gejala "komplain kualitas naik" ini, kemungkinan besar akar masalahnya ada di mana?',
    options: [
      'Proses — langkah quality control dilewati demi mengejar target waktu produksi',
      'Input — kualitas bahan baku dari supplier turun, atau mesin produksi jarang diservis',
      'Bisa dua-duanya — Proses maupun Input sama-sama mungkin jadi akarnya',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. QC yang dilewati (Proses) dan bahan baku atau mesin yang bermasalah (Input) sama-sama bisa menghasilkan gejala yang persis sama: komplain kualitas naik.',
    errorFeedback:
      'Coba lagi. QC yang dilewati (Proses) dan bahan baku atau mesin yang bermasalah (Input) sama-sama bisa menghasilkan gejala yang persis sama. Bisa dua-duanya.',
  },
  {
    id: 'c2-card-12',
    type: 'info',
    icon: Search,
    eyebrow: 'Contoh 2 · Bongkar Akarnya',
    title: 'Sama-sama "Kualitas Turun", Beda Obatnya',
    body: [
      'Kalau akarnya di Proses: QC sebenarnya ada di SOP, tapi dilewati diam-diam karena tim dikejar target dan dianggap "nanti-nanti saja dicek".',
      'Kalau akarnya di Input: bahan baku dari supplier memang sudah turun mutunya, atau mesin sudah lama tidak pernah diservis sehingga hasilnya tidak konsisten.',
      'Kalau Anda cuma menegur tim produksi tanpa tahu ini yang mana, Anda menghukum orang untuk masalah yang mungkin bukan salah mereka.',
    ],
  },
  {
    id: 'c2-card-13',
    type: 'info',
    icon: Truck,
    eyebrow: 'Contoh 3 · Coba Sendiri',
    title: 'Pengiriman ke Pelanggan Makin Sering Telat',
    body: [
      'Satu lagi, giliran Anda yang menebak. Beberapa bulan terakhir, pengiriman ke pelanggan makin sering telat dari jadwal yang dijanjikan.',
      'Sebelum lanjut ke kartu berikutnya, coba tebak dulu di kepala Anda: menurut Anda, akarnya paling mungkin di Level mana?',
    ],
  },
  {
    id: 'c2-card-14',
    type: 'multiple-choice',
    question: 'Kalau cuma dari gejala ini saja — pengiriman sering telat — di layer mana Anda yakin akar masalahnya?',
    options: [
      'Proses — pasti alur pengemasan atau rute pengiriman yang berantakan',
      'Input — pasti armada atau kurir kurang, atau stok sering kosong',
      'Output itu sendiri — target waktu kirim yang dipasang memang kurang realistis',
      'Tidak bisa dipastikan hanya dari gejalanya — harus dicek ketiganya dulu',
    ],
    correctAnswer: 3,
    successFeedback:
      'Persis. Ini poin pentingnya: gejala yang sama bisa lahir dari akar yang beda-beda. Anda baru bisa tahu setelah benar-benar dicek, bukan ditebak dari gejalanya doang.',
    errorFeedback:
      'Kedengarannya masuk akal, tapi itu masih tebakan. Gejala yang sama bisa punya akar yang beda-beda — Anda baru bisa yakin setelah benar-benar mengecek ketiga Level, bukan menebak dari gejala saja.',
  },
  {
    id: 'c2-card-15',
    type: 'info',
    icon: Search,
    eyebrow: 'Balik ke Bab 1',
    title: 'Sama Persis Kayak "Insting" — Kedengaran Yakin, Belum Tentu Benar',
    body: [
      'Inget Bab 1? Insting itu cuma aman untuk keputusan kecil yang gampang diperbaiki. Menebak akar masalah dari gejala doang itu sama persis — kedengarannya yakin, tapi belum tentu benar.',
      'Itu sebabnya di 3 bab berikutnya kita tidak langsung loncat ke solusi. Kita akan belajar untuk audit Level Output, Proses, dan Input satu per satu, secara berurutan — supaya Anda bisa mendapatkan data yang tepat.',
    ],
  },
  {
    id: 'c2-card-16',
    type: 'reflection',
    eyebrow: 'Entri Kedua · Buku Kerja Audit Anda',
    prompt:
      'Sebutkan 1 masalah yang sedang terlihat di Output bisnis Anda sekarang. Tidak usah menebak akarnya dulu — itu tugas 3 bab berikutnya.',
    fields: [
      {
        id: 'symptom',
        label: 'Gejala apa yang Anda lihat di Output?',
        placeholder: 'Contoh: Komplain pelanggan soal keterlambatan naik dua kali lipat bulan ini',
      },
      {
        id: 'evidence',
        label: 'Dari mana Anda tahu ini benar-benar terjadi (data, laporan, atau keluhan)?',
        placeholder: 'Contoh: Rekap komplain di WhatsApp admin, belum pernah dihitung resmi',
      },
    ],
  },
  {
    id: 'c2-card-17',
    type: 'info',
    icon: Compass,
    eyebrow: 'Selesai Bab 2',
    title: 'Sekarang Anda Sudah Punya Peta Audit Bisnis Anda',
    body: [
      'Gejala yang baru Anda tulis itu adalah contoh kasus yang akan kita pakai terus sepanjang 3 bab berikutnya — jadi simpan baik-baik, kita akan balik lagi ke situ.',
      'Anda sekarang tahu bedanya Output, Proses, dan Input, dan yang lebih penting: Anda tahu ketiganya satu rantai, bukan tiga kotak terpisah.',
      'Tiga bab berikutnya, kita bongkar satu-satu — mulai dari Level yang paling gampang dilihat tapi paling sering salah ditebak: Output.',
    ],
    cta: { label: 'Lanjut ke Bab 3', href: '#chapter-3' },
  },
]
