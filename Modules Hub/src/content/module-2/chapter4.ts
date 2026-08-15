import {
  Navigation,
  Scale,
  Link2,
  Calculator,
  Target,
  Presentation,
  PhoneCall,
  Factory,
  Search,
  CheckCircle2,
  ListChecks,
  ClipboardCheck,
  Rocket,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter4Cards: Card[] = [
  {
    id: 'c4-card-1',
    type: 'info',
    icon: Navigation,
    eyebrow: 'Bab 4 · Lead Metric',
    title: 'Setirnya, Bukan Cuma Kaca Spionnya',
    body: [
      'Di akhir Bab 3, Anda ngerasain masalah nyata: Lag Metric cuma ngasih tahu Anda SETELAH kejadian — kadang setelah kesempatan buat perbaiki udah lewat.',
      'Bab ini fixnya: Lead Metric. Aksi harian yang mendorong hasil Lag itu, dan yang paling penting — bisa Anda pantau dan kendalikan SEBELUM periodenya telat.',
    ],
  },
  {
    id: 'c4-card-2',
    type: 'info',
    icon: Scale,
    eyebrow: 'Tes Dua Bagian',
    title: 'Lead Metric Asli Harus Lolos Dua Tes Sekaligus',
    body: [
      'Bukan semua angka yang "kelihatan seperti aksi harian" itu Lead Metric asli. Lead Metric yang benar harus PREDICTIVE (benar-benar menggerakkan hasil Lag-nya) DAN CONTROLLABLE (orangnya bisa langsung bertindak atas angka itu, hari ini). Gagal salah satu, bukan Lead Metric.',
      'Gagal di controllable: cuaca, kondisi ekonomi makro, mood pasar. Semua ini bisa memprediksi hasil bisnis Anda, tapi nggak ada satu staf pun yang bisa "mengendalikan" cuaca hari ini.',
      'Gagal di predictive: jam kerja yang panjang, jumlah rapat internal, jumlah postingan media sosial tanpa strategi jelas. Semua ini 100% bisa dikendalikan, tapi belum tentu menggerakkan hasilnya — ini busywork yang pakai kostum Lead Metric. Inget Bab 1: sibuk itu nggak sama dengan terukur dengan baik.',
    ],
  },
  {
    id: 'c4-card-3',
    type: 'multiple-choice',
    question:
      'Manakah dari berikut ini yang PALING mungkin gagal di sisi PREDICTIVE (bisa dikendalikan, tapi belum tentu menggerakkan hasil)?',
    options: [
      'Jumlah rapat internal yang diadakan tim minggu ini',
      'Cuaca di kota tempat toko Anda berada',
      'Jumlah telepon closing yang benar-benar terhubung ke calon pelanggan',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Rapat internal itu 100% bisa dikendalikan tim, tapi belum tentu jumlah rapat yang banyak berarti hasilnya makin baik — itu ciri khas busywork.',
    errorFeedback:
      'Coba lagi. Yang gagal di predictive itu yang bisa dikendalikan tapi belum tentu menggerakkan hasil — itu rapat internal, bukan cuaca (gagal di controllable) atau telepon closing (biasanya lolos keduanya).',
  },
  {
    id: 'c4-card-4',
    type: 'info',
    icon: Link2,
    eyebrow: 'Satu Pertanyaan buat Semua Kandidat',
    title: "Tes Cepat: 'Kalau X Lebih Banyak, Apakah Y Pasti Lebih Baik?'",
    body: [
      'Ada satu pertanyaan simpel yang bisa Anda pakai untuk angka kandidat apa pun: kalau saya lakukan lebih banyak X hari ini, apakah saya benar-benar yakin Y akan lebih baik nanti?',
      'Kalau jawabannya nggak yakin — X itu aktivitas, bukan Lead Metric. Kalau yakin, dan X itu bisa dikendalikan langsung hari ini, baru itu Lead Metric asli.',
    ],
  },
  {
    id: 'c4-card-5',
    type: 'yes-no',
    question:
      "Coba pikirkan satu aktivitas harian yang paling sering Anda anggap 'produktif' di tim Anda sekarang. Apakah Anda benar-benar yakin aktivitas itu menggerakkan hasil akhir, atau cuma kelihatan sibuk?",
    yesLabel: 'Yakin, ada hubungan jelas ke hasil',
    noLabel: 'Sejujurnya belum yakin',
    feedbackYes:
      'Bagus — coba tetap uji ulang pakai pertanyaan tadi tiap beberapa bulan, hubungan itu bisa berubah.',
    feedbackNo:
      "Wajar, dan justru bagus Anda sadar. Banyak aktivitas 'produktif' ternyata nggak pernah benar-benar diuji hubungannya ke hasil.",
  },
  {
    id: 'c4-card-6',
    type: 'info',
    icon: Calculator,
    eyebrow: 'Skill Paling Praktis di Bab Ini',
    title: 'Menghitung Mundur dari Lag ke Lead',
    body: [
      'Sekarang bagian paling berguna: cara menghitung MUNDUR dari target Lag Anda, supaya Anda tahu angka Lead harian yang pasti, bukan cuma kira-kira.',
      'Caranya pakai rasio konversi historis Anda — data dari pengalaman sebelumnya soal berapa banyak aksi yang biasanya menghasilkan satu hasil.',
      'Kita coba dua contoh: satu di sales (kasus yang paling intuitif), satu lagi di luar sales (produksi) — biar Anda lihat metodenya bukan cuma buat divisi jualan.',
    ],
  },
  {
    id: 'c4-card-7',
    type: 'info',
    icon: Target,
    eyebrow: 'Contoh Hitung Mundur · Langkah 1',
    title: 'Mulai dari Target Lag: 10 Penjualan/Bulan',
    body: [
      'Misalnya target Lag Anda: closing 10 penjualan per bulan.',
      'Dari data historis, Anda tahu rasio closing Anda: 1 dari 5 presentasi biasanya jadi closing.',
    ],
  },
  {
    id: 'c4-card-8',
    type: 'info',
    icon: Presentation,
    eyebrow: 'Contoh Hitung Mundur · Langkah 2',
    title: 'Berapa Presentasi yang Dibutuhkan?',
    body: [
      'Kalau 1 dari 5 presentasi jadi closing, dan Anda butuh 10 closing, maka: 10 x 5 = 50 presentasi per bulan.',
      'Dari data historis lagi, Anda tahu rasio presentasi Anda: 1 dari 3 telepon biasanya berhasil jadi presentasi.',
    ],
  },
  {
    id: 'c4-card-9',
    type: 'info',
    icon: PhoneCall,
    eyebrow: 'Contoh Hitung Mundur · Langkah 3',
    title: 'Berapa Telepon yang Dibutuhkan?',
    body: [
      'Kalau 1 dari 3 telepon jadi presentasi, dan Anda butuh 50 presentasi, maka: 50 x 3 = 150 telepon per bulan.',
      'Bagi rata ke sekitar 22 hari kerja sebulan, itu sekitar 7 telepon per hari kerja. Itulah Lead Metric harian Anda — angka yang bisa staf Telesales kendalikan dan kerjakan hari ini.',
    ],
  },
  {
    id: 'c4-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau target closing 10/bulan, rasio closing 1:5 presentasi, dan rasio presentasi 1:3 telepon, maka jumlah presentasi yang dibutuhkan per bulan adalah ________ presentasi.',
    options: ['50', '10', '15', '150'],
    correctAnswer: '50',
    successFeedback: 'Tepat. 10 closing x 5 (rasio presentasi-ke-closing) = 50 presentasi per bulan.',
    errorFeedback:
      'Bukan itu. 10 closing dikali rasio 5 presentasi per closing = 50 presentasi per bulan.',
  },
  {
    id: 'c4-card-11',
    type: 'info',
    icon: Factory,
    eyebrow: 'Contoh Hitung Mundur · Bukan Cuma Sales',
    title: 'Metodenya Sama, Tapi Datanya Beda Bentuk',
    body: [
      'Biar Anda nggak mengira cara hitung mundur ini cuma buat divisi sales, mari coba satu contoh lagi di lantai produksi.',
      'Target Lag-nya: turunkan reject rate produksi dari 5% jadi maksimal 2%, dari total produksi 10.000 unit per bulan.',
    ],
  },
  {
    id: 'c4-card-12',
    type: 'info',
    icon: Search,
    eyebrow: 'Contoh Hitung Mundur · Produksi, Langkah 1',
    title: 'Cari Data yang Membedakan Shift Bagus dan Buruk',
    body: [
      'Bukan rasio funnel kali ini — datanya beda bentuk. Anda cek data historis per shift, dan ketemu pola: shift yang checklist QC-nya dijalankan penuh, reject rate-nya sekitar 1,5%. Shift yang checklist-nya dilewati atau cuma dicentang formalitas, reject rate-nya bisa sampai 6%.',
      'Pola ini yang jadi kunci: bukan soal jumlah produksi, tapi soal patuh atau nggaknya checklist itu dijalankan.',
    ],
  },
  {
    id: 'c4-card-13',
    type: 'info',
    icon: CheckCircle2,
    eyebrow: 'Contoh Hitung Mundur · Produksi, Langkah 2',
    title: 'Lead Metric-nya: Kepatuhan Checklist, Bukan Jumlah Produksi',
    body: [
      'Kalau shift yang checklist-nya penuh reject rate-nya 1,5% — di bawah target 2% — maka Lead Metric yang benar adalah kepatuhan menjalankan checklist QC penuh per shift, bukan angka produksi.',
      'Targetnya: 100% dari seluruh shift menjalankan checklist penuh, misalnya 21 dari 21 shift dalam seminggu — bukan sebagian, karena begitu ada shift yang bolong, reject rate rata-rata langsung naik.',
    ],
  },
  {
    id: 'c4-card-14',
    type: 'multiple-choice',
    question:
      "Di contoh produksi ini, kenapa Lead Metric-nya bukan 'jumlah unit yang diproduksi', melainkan 'kepatuhan checklist QC per shift'?",
    options: [
      'Karena jumlah produksi itu nggak terbukti menggerakkan reject rate, sedangkan kepatuhan checklist yang terbukti dari data historis',
      'Karena jumlah produksi lebih sulit dihitung',
      'Karena checklist kedengarannya lebih formal dan profesional',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Data historisnya nunjukin: yang membedakan reject rate tinggi dan rendah itu bukan berapa banyak yang diproduksi, tapi apakah checklist QC-nya benar-benar dijalankan penuh atau nggak.',
    errorFeedback:
      'Coba lagi. Kuncinya ada di data historis: yang benar-benar membedakan shift dengan reject rate rendah vs tinggi adalah kepatuhan checklist, bukan soal jumlah produksi atau kesan formal.',
  },
  {
    id: 'c4-card-15',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Latihan Klasifikasi',
    title: 'Sekarang Anda yang Pilah: Lolos Dua Tes atau Gagal Satu?',
    body: [
      'Bayangkan target Lag Anda: "Closing 10 penjualan bulan ini." Berikut beberapa kandidat aktivitas harian buat staf sales.',
      'Coba urutkan dari yang paling LOLOS kedua tes (predictive + controllable) ke yang paling GAGAL salah satu.',
    ],
  },
  {
    id: 'c4-card-16',
    type: 'sort-list',
    question:
      'Urutkan aktivitas ini dari yang paling lolos kedua tes (predictive + controllable) ke yang paling gagal salah satu, untuk target closing 10 penjualan/bulan.',
    items: [
      'Kondisi ekonomi nasional bulan ini',
      'Jumlah jam lembur tim sales',
      'Jumlah telepon closing ke calon pelanggan hari ini',
      'Jumlah presentasi yang berhasil dijadwalkan hari ini',
    ],
    correctAnswer: [
      'Jumlah presentasi yang berhasil dijadwalkan hari ini',
      'Jumlah telepon closing ke calon pelanggan hari ini',
      'Jumlah jam lembur tim sales',
      'Kondisi ekonomi nasional bulan ini',
    ],
    successFeedback:
      'Persis. Presentasi dan telepon closing itu dua-duanya predictive DAN controllable — beda di seberapa dekat ke closing. Jam lembur itu controllable tapi belum tentu predictive — busywork. Kondisi ekonomi nasional mungkin predictive, tapi nggak ada satu staf pun yang bisa mengendalikannya.',
    errorFeedback:
      'Belum pas. Urutan dari yang paling lolos dua tes ke yang paling gagal: presentasi terjadwal, telepon closing, jam lembur (gagal predictive), baru kondisi ekonomi nasional (gagal controllable).',
  },
  {
    id: 'c4-card-17',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Giliran Angka Anda Sendiri',
    title: 'Sekarang Hitung Mundur dari Lag Metric Anda',
    body: [
      'Ambil lagi Lag Metric yang Anda tulis di Bab 3. Coba pikirkan: aksi harian apa yang paling mungkin menggerakkan hasil itu, dan apakah Anda punya rasio konversi kasar dari pengalaman sebelumnya?',
      'Nggak perlu presisi sempurna — perkiraan kasar dari pengalaman Anda sendiri sudah cukup untuk mulai. Angka ini bisa Anda perbaiki seiring waktu setelah benar-benar dipantau.',
    ],
  },
  {
    id: 'c4-card-18',
    type: 'reflection',
    eyebrow: 'Entri Keempat · Buku Kerja KPI Anda',
    prompt: 'Tulis Lead Metric yang akan Anda pakai untuk menggerakkan Lag Metric yang Anda tulis di Bab 3.',
    fields: [
      {
        id: 'lead-metric',
        label: 'Lead Metric apa yang akan Anda pakai?',
        placeholder: 'Contoh: Jumlah telepon closing ke calon pelanggan per hari',
      },
      {
        id: 'lead-target',
        label: 'Berapa target angka hariannya (hasil hitung mundur dari Lag Metric Anda)?',
        placeholder: 'Contoh: Sekitar 7 telepon per hari kerja',
      },
    ],
  },
  {
    id: 'c4-card-19',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Selesai Bab 4',
    title: 'Sekarang Anda Punya Keduanya — Lag dan Lead',
    body: [
      'Anda sekarang bisa membedakan Lead Metric asli dari yang cuma kelihatan seperti Lead Metric, dan Anda punya cara menghitung mundur dari target Lag ke angka harian yang konkret.',
      'Sekarang Anda punya keduanya — Lag dan Lead untuk target Anda.',
      'Bab depan kita pasang semuanya jadi cascading KPI resmi per divisi, tim, dan individu.',
    ],
  },
]
