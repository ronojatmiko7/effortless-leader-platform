import {
  RotateCcw,
  ShieldCheck,
  Hourglass,
  EyeOff,
  History,
  ListChecks,
  ClipboardCheck,
  Milestone,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter3Cards: Card[] = [
  {
    id: 'c3-card-1',
    type: 'info',
    icon: RotateCcw,
    eyebrow: 'Bab 3 · Lag Metric',
    title: 'Balik ke Target yang Anda Tulis di Bab 2',
    body: [
      'Inget target yang Anda tulis di akhir Bab 2? Itu bukan cuma latihan menulis — itu contoh kasus yang kita pakai mulai sekarang.',
      'Sekarang pertanyaannya: angka apa yang bisa benar-benar membuktikan target itu tercapai — bukan angka yang cuma kelihatan seperti bukti?',
      'Itu yang kita bongkar di bab ini: cara pilih Lag Metric yang benar-benar layak dipercaya.',
    ],
  },
  {
    id: 'c3-card-2',
    type: 'info',
    icon: ShieldCheck,
    eyebrow: 'Bukan Semua Lag Metric Setara',
    title: 'Ada yang Bukti, Ada yang Cuma Kelihatan Kayak Bukti',
    body: [
      'Di Bab 2 Anda sudah kenal Lag Metric: angka hasil yang sudah terjadi, kaca spion bisnis Anda. Tapi nggak semua kaca spion sama jujurnya.',
      'Ada Lag Metric yang benar-benar BUKTI hasilnya tercapai — profit bersih, kas di rekening, jumlah pelanggan yang bertahan. Ada juga yang cuma PROXY — kelihatan berhubungan, tapi bisa bergerak ke arah "bagus" sementara hasil aslinya nggak ikut bagus.',
      'Contoh: omzet kotor naik, tapi margin turun — Anda jual lebih banyak, tapi untung bersihnya menyusut karena diskon atau biaya produksi naik.',
      'Contoh lain: jumlah closing naik, tapi retensi anjlok — pelanggan baru masuk terus, sementara pelanggan lama pergi diam-diam. Kalau cuma pantau closing, Anda nggak akan lihat kebocorannya.',
      'Satu lagi: skor kepuasan pelanggan naik, tapi surveinya cuma diisi segelintir orang yang memang udah puas dari awal — angkanya bagus di atas kertas, tapi nggak mewakili mayoritas pelanggan Anda.',
    ],
  },
  {
    id: 'c3-card-3',
    type: 'multiple-choice',
    question:
      'Toko Anda: omzet kotor naik 20% bulan ini, tapi margin (untung bersih per transaksi) malah turun. Mana yang Lag Metric BUKTI kesehatan bisnis, dan mana yang PROXY yang menipu di sini?',
    options: [
      'Omzet kotor itu bukti, margin itu proxy',
      'Margin itu bukti, omzet kotor itu proxy',
      'Keduanya sama-sama bukti',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Margin lebih dekat ke pertanyaan sebenarnya — apakah bisnis ini benar-benar untung. Omzet kotor bisa naik sekalipun bisnisnya diam-diam rugi lebih banyak per transaksi.',
    errorFeedback:
      'Coba lagi. Omzet kotor bisa naik walau bisnisnya sebenarnya makin nggak untung per transaksi — itu tandanya dia proxy, bukan bukti. Margin yang lebih dekat ke bukti kesehatan sebenarnya.',
  },
  {
    id: 'c3-card-4',
    type: 'info',
    icon: Hourglass,
    eyebrow: 'Konsep Baru · Jeda Waktu',
    title: 'Bukan Cuma Angkanya, Tapi Berapa Lama Anda Harus Nunggu',
    body: [
      'Setiap Lag Metric punya jeda waktu sebelum kelihatan. Ada yang cepat — penjualan harian kelihatan besok paginya juga. Ada yang lambat banget — retensi pelanggan tahunan, atau customer lifetime value, baru kelihatan hasilnya setelah setahun berjalan.',
      'Masalahnya: kalau Anda pilih Lag Metric yang jedanya kepanjangan, Anda baru tahu gagal SETELAH periodenya lewat dan udah nggak bisa dikejar lagi. Setahun nunggu, baru sadar targetnya meleset — telat.',
    ],
  },
  {
    id: 'c3-card-5',
    type: 'yes-no',
    question:
      'Coba pikirkan Lag Metric yang paling sering Anda pantau sekarang. Kalau angka itu ternyata jelek, apakah Anda masih punya cukup waktu di periode itu untuk memperbaikinya?',
    yesLabel: 'Masih ada waktu untuk perbaiki',
    noLabel: 'Nggak, keburu periodenya habis',
    feedbackYes: 'Bagus — itu tandanya jeda waktunya cukup pendek untuk Anda bereaksi.',
    feedbackNo:
      'Nah, ini masalah nyata. Tenang, ini bukan sesuatu yang harus Anda pecahkan sekarang juga — justru ini alasan Bab 4 ada: Lead Metric yang bisa Anda pantau sebelum Lag Metric itu sempat telat.',
  },
  {
    id: 'c3-card-6',
    type: 'info',
    icon: EyeOff,
    eyebrow: 'Jebakan Satu Angka',
    title: 'Cuma Pantau Omzet? Anda Buta di Dimensi Lain',
    body: [
      'Banyak CEO cuma pantau satu Lag Metric — biasanya omzet. Masalahnya, omzet nggak bisa cerita apa-apa soal margin, retensi, atau kualitas.',
      'Bisnis bisa omzetnya naik terus, sementara marginnya menipis, pelanggan lama diam-diam pergi, dan komplain kualitas naik — dan Anda nggak akan lihat satu pun dari itu kalau cuma nempel di angka omzet.',
      'Solusinya bukan pantau semua angka yang ada — inget Bab 1, dashboard penuh angka yang nggak dipakai itu sama percumanya. Solusinya: pilih segelintir Lag Metric yang disengaja — bukan 1, bukan 20 — yang bareng-bareng mewakili dimensi yang benar-benar penting buat target itu.',
    ],
  },
  {
    id: 'c3-card-7',
    type: 'fill-in-the-blank',
    sentence:
      'Cuma memantau satu Lag Metric seperti omzet itu bahaya, karena dia buta terhadap dimensi lain. Solusinya bukan pantau semua angka, tapi pilih ________ Lag Metric yang disengaja untuk mewakili dimensi yang penting.',
    options: ['segelintir', 'sebanyak-banyaknya', 'satu saja', 'acak'],
    correctAnswer: 'segelintir',
    successFeedback:
      'Tepat. Segelintir yang disengaja — cukup untuk melihat dimensi yang penting, tanpa jadi dashboard yang nggak pernah benar-benar dipakai.',
    errorFeedback:
      'Bukan itu. Solusinya bukan memantau sebanyak-banyaknya atau cuma satu, tapi segelintir Lag Metric yang disengaja.',
  },
  {
    id: 'c3-card-8',
    type: 'info',
    icon: History,
    eyebrow: 'Cara Mengecek Baik-Buruknya',
    title: 'Bandingkan ke Diri Sendiri Dulu, Baru ke Luar',
    body: [
      'Gimana Anda tahu satu angka Lag Metric itu "bagus" atau "jelek"? Cara paling aman: bandingkan ke periode sebelumnya. Margin bulan ini dibanding margin bulan lalu, retensi tahun ini dibanding tahun lalu.',
      'Boleh juga bandingkan ke luar — angka industri atau kompetitor — tapi hati-hati. Jangan asal jiplak angka orang lain tanpa tahu konteksnya: skala bisnisnya beda, model bisnisnya beda, angka "normal" buat mereka bisa jadi nggak relevan buat Anda.',
    ],
  },
  {
    id: 'c3-card-9',
    type: 'yes-no',
    question:
      'Waktu Anda dengar angka kompetitor atau rata-rata industri, apakah Anda biasanya cek dulu apakah konteks bisnis mereka mirip dengan bisnis Anda?',
    yesLabel: 'Ya, saya cek konteksnya dulu',
    noLabel: 'Jarang, saya langsung bandingkan angkanya',
    feedbackYes: 'Bagus, itu kebiasaan yang tepat — angka tanpa konteks bisa menyesatkan.',
    feedbackNo:
      'Hati-hati. Angka kompetitor tanpa konteks yang sama bisa bikin Anda mengejar target yang salah.',
  },
  {
    id: 'c3-card-10',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Latihan Klasifikasi',
    title: 'Sekarang Anda yang Pilah: Bukti atau Proxy?',
    body: [
      'Bayangkan target Anda: "Bisnis saya harus lebih sehat secara finansial tahun ini." Berikut beberapa kandidat Lag Metric untuk target itu.',
      'Coba urutkan dari yang paling BUKTI (paling langsung membuktikan target) ke yang paling PROXY (paling gampang menipu).',
    ],
  },
  {
    id: 'c3-card-11',
    type: 'sort-list',
    question:
      'Urutkan kandidat Lag Metric ini dari yang paling BUKTI langsung ke yang paling PROXY, untuk target "bisnis lebih sehat secara finansial".',
    items: [
      'Jumlah followers media sosial',
      'Kas bersih di rekening di akhir bulan',
      'Omzet kotor bulanan',
      'Profit bersih setelah semua biaya',
    ],
    correctAnswer: [
      'Profit bersih setelah semua biaya',
      'Kas bersih di rekening di akhir bulan',
      'Omzet kotor bulanan',
      'Jumlah followers media sosial',
    ],
    successFeedback:
      'Persis. Profit bersih dan kas di rekening itu paling dekat ke bukti langsung kesehatan finansial. Omzet kotor gampang naik walau nggak sehat. Followers malah nggak ada hubungan langsung sama sekali — vanity metric dari Bab 1, nyelip di sini buat nge-tes Anda.',
    errorFeedback:
      'Belum pas. Urutan dari paling bukti ke paling proxy: profit bersih, kas di rekening, omzet kotor, baru followers media sosial — yang paling nggak ada hubungan langsung ke kesehatan finansial.',
  },
  {
    id: 'c3-card-12',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Giliran Angka Anda Sendiri',
    title: 'Sekarang Balik ke Target Anda dari Bab 2',
    body: [
      'Ambil lagi target yang Anda tulis di Bab 2. Sebelum menulis di buku kerja, coba tes dulu di kepala Anda satu kandidat Lag Metric yang kepikiran buat target itu.',
      'Tanya ke diri sendiri: apakah angka ini benar-benar MEMBUKTIKAN target tercapai, atau cuma proxy yang kelihatan berhubungan? Berapa lama jeda waktunya sampai angka ini kelihatan? Dan apakah ini bakal jadi satu-satunya angka yang Anda pantau, atau bagian dari segelintir angka yang saling melengkapi?',
    ],
  },
  {
    id: 'c3-card-13',
    type: 'reflection',
    eyebrow: 'Entri Ketiga · Buku Kerja KPI Anda',
    prompt: 'Tulis Lag Metric yang akan Anda pakai untuk melacak target yang Anda tulis di Bab 2.',
    fields: [
      {
        id: 'lag-metric',
        label: 'Lag Metric apa yang akan Anda pakai?',
        placeholder: 'Contoh: Profit bersih bulanan',
      },
      {
        id: 'lag-time',
        label: 'Berapa lama jeda waktunya sampai angka ini kelihatan (harian/mingguan/bulanan/tahunan)?',
        placeholder: 'Contoh: Bulanan, baru kelihatan di akhir bulan',
      },
    ],
  },
  {
    id: 'c3-card-14',
    type: 'info',
    icon: Milestone,
    eyebrow: 'Selesai Bab 3',
    title: 'Sekarang Anda Tahu Cara Pilih Lag Metric yang Benar',
    body: [
      'Anda sekarang bisa membedakan Lag Metric yang benar-benar bukti dari yang cuma proxy, ngerti kenapa jeda waktu penting, dan kenapa satu angka doang nggak pernah cukup.',
      'Tapi Lag Metric doang nggak cukup — dia cuma kasih tahu Anda SETELAH kejadian, saat semuanya udah kejadian dan susah diubah.',
      'Bab depan kita cari setirnya: Lead Metric yang bisa Anda kendalikan sekarang juga, sebelum Lag Metric-nya sempat telat.',
    ],
  },
]
