import {
  Layers,
  BellRing,
  UtensilsCrossed,
  Truck,
  ShoppingCart,
  BookOpen,
  PackageCheck,
  ClipboardList,
  UserCheck,
  Users,
  Flag,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter5Cards: Card[] = [
  {
    id: 'c5-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 5 · Cascading KPI Tiga Area',
    title: 'Ternyata KPI Anda Cuma Nutup 1 dari 3 Area',
    body: [
      'Di akhir Bab 4, Anda udah punya satu KPI set yang lengkap: target, Lag Metric yang bukti, dan Lead Metric yang predictive dan controllable. Kelihatannya udah selesai, kan?',
      'Belum. Itu cuma nutup SATU dari tiga area yang bisnis Anda butuh KPI-nya.',
      'Kalau Anda sudah ikut Modul 1: inget kerangka Output-Proses-Input buat audit bisnis? Nah, sekarang kita pakai kerangka yang sama, tapi buat merancang KPI.',
      'Buat yang belum: Output — angka hasil akhir bisnis (penjualan, kualitas yang sampai ke pelanggan, profit) — ini area yang KPI-nya udah Anda bangun sepanjang Bab 2-4. Proses — seberapa lancar dan konsisten alur kerja yang menghasilkan Output itu (SOP, alur kerja, handoff antar orang atau tim). Input — kesiapan sumber daya yang jadi bahan bakar Proses itu (orang, alat kerja, material, modal).',
    ],
  },
  {
    id: 'c5-card-2',
    type: 'info',
    icon: BellRing,
    eyebrow: 'Kenapa Bukan Cuma Output',
    title: 'Proses dan Input Itu Alarm Dini, Bukan Cuma Pelengkap',
    body: [
      'Kalau Anda cuma pantau KPI Output, Anda kena jebakan yang sama dengan Bab 3 — cuma versi yang lebih besar. Di Bab 3 itu satu angka doang yang bikin Anda buta ke dimensi lain. Di sini, satu AREA doang yang bikin Anda buta ke dua area lain.',
      'Lebih tajam lagi: KPI Proses dan Input itu alarm dini buat masalah Output yang belum kelihatan di angkanya. Staf yang kurang terlatih, bahan baku yang mutunya turun, SOP yang mulai dilewati — semua ini biasanya kejadian DULU, jauh sebelum Output-nya ikut jelek.',
      'Begitu Anda baru sadar lewat angka Output, itu keterlambatan yang sama seperti Lag Metric dengan jeda waktu kepanjangan di Bab 3 — sudah kejadian, dan sering udah nggak bisa dicegah, cuma bisa dibersihkan.',
    ],
  },
  {
    id: 'c5-card-3',
    type: 'multiple-choice',
    question: "Kenapa KPI Proses dan Input disebut 'alarm dini' buat masalah Output?",
    options: [
      'Karena mereka biasanya kelihatan bermasalah lebih dulu, sebelum Output-nya ikut jelek',
      'Karena mereka lebih mudah dihitung daripada Output',
      'Karena Output nggak penting dibandingkan Proses dan Input',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Masalah di Proses atau Input biasanya kejadian duluan — kalau Anda cuma nunggu sampai kelihatan di Output, Anda udah kehilangan waktu buat mencegahnya.',
    errorFeedback:
      'Coba lagi. Alarm dini artinya mereka kelihatan bermasalah SEBELUM Output ikut jelek — bukan soal gampang dihitung atau soal Output nggak penting.',
  },
  {
    id: 'c5-card-4',
    type: 'info',
    icon: UtensilsCrossed,
    eyebrow: 'Contoh Lintas Industri · F&B',
    title: 'Kalau Bisnis Anda Resto atau Kafe',
    body: [
      'Output: food cost % (persentase biaya bahan baku dibanding harga jual), atau rata-rata nilai transaksi per pelanggan.',
      'Proses: waktu dari order masuk sampai makanan di meja pelanggan, kepatuhan resep standar antar shift.',
      'Input: kesegaran bahan baku yang masuk, kehadiran staf dapur sesuai jadwal.',
    ],
  },
  {
    id: 'c5-card-5',
    type: 'info',
    icon: Truck,
    eyebrow: 'Contoh Lintas Industri · Trading/Distribusi',
    title: 'Kalau Bisnis Anda Trading atau Distribusi',
    body: [
      'Output: sell-through rate (persentase stok yang benar-benar terjual), margin per kategori produk.',
      'Proses: OTIF — on-time-in-full delivery, seberapa sering kiriman sampai tepat waktu dan lengkap; lead time dari gudang ke toko.',
      'Input: ketersediaan stok dari supplier, kondisi armada pengiriman.',
    ],
  },
  {
    id: 'c5-card-6',
    type: 'info',
    icon: ShoppingCart,
    eyebrow: 'Contoh Lintas Industri · Ecommerce',
    title: 'Kalau Bisnis Anda Jualan Online',
    body: [
      'Output: conversion rate, retensi pelanggan (seberapa banyak yang belanja lagi).',
      'Proses: waktu proses pesanan sampai dikirim, tingkat retur.',
      'Input: kualitas foto dan listing produk, kecepatan website atau platform jualan Anda.',
    ],
  },
  {
    id: 'c5-card-7',
    type: 'multiple-choice',
    question:
      'Sebuah toko elektronik online mendapati banyak pembeli membatalkan pesanan karena foto produk di listing beda jauh dari barang aslinya. Ini masalah paling mendasar ada di area mana?',
    options: [
      'Output — karena pembatalan itu bagian dari hasil akhir',
      'Proses — karena masalahnya ada di cara pesanan diproses',
      'Input — karena foto dan listing produk adalah bahan yang harus disiapkan sebelum penjualan terjadi',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Foto dan listing produk itu bahan yang harus disiapkan SEBELUM transaksi terjadi — itu Input. Pembatalan pesanan yang muncul belakangan cuma gejala di Output.',
    errorFeedback:
      'Coba lagi. Foto/listing produk itu bahan yang disiapkan sebelum penjualan terjadi — itu Input, bukan Output (hasil akhirnya) atau Proses (alur kerjanya).',
  },
  {
    id: 'c5-card-7b',
    type: 'worksheet',
    icon: BookOpen,
    eyebrow: 'Referensi Tambahan',
    title: 'Bisnis Anda Bukan Salah Satu dari 3 Contoh Tadi?',
    body: [
      'Tiga contoh tadi cuma cuplikan. Kalau bisnis Anda bukan F&B, trading/distribusi, atau ecommerce — atau Anda cuma butuh lebih banyak pilihan — unduh referensi lengkapnya.',
      'Isinya 10 jenis bisnis, masing-masing dengan beberapa kandidat KPI di area Output, Proses, dan Input. Bukan daftar wajib pakai semua — ambil 1-2 yang paling relevan, lalu uji pakai cara dari Bab 3 dan Bab 4 (bukti bukan proxy, predictive dan controllable).',
    ],
    downloadUrl: '/downloads/kamus-kpi-lintas-industri.pdf',
    buttonText: 'Unduh PDF - Kamus KPI Lintas Industri',
  },
  {
    id: 'c5-card-8',
    type: 'info',
    icon: PackageCheck,
    eyebrow: 'Terapkan Cepat · Proses (Distribusi/Gudang)',
    title: 'Lag: OTIF. Lead: Pesanan Di-pack H-1',
    body: [
      'Anda udah tahu caranya dari Bab 3-4 — pilih Lag yang bukti, hitung mundur Lead yang predictive dan controllable. Sekarang kita pakai lagi, lebih cepat, buat area Proses.',
      'Target Lag: naikkan OTIF (on-time-in-full delivery) dari 80% jadi minimal 95% bulan ini.',
      'Data historis gudang Anda kasih pola jelas: pesanan yang di-pack H-1 (sehari sebelum jadwal kirim) OTIF-nya 95%. Pesanan yang baru di-pack di hari H yang sama, OTIF-nya cuma 70% karena keburu-buru dan sering ada barang yang ketinggalan.',
      'Lead Metric-nya: persentase pesanan yang berhasil di-pack H-1, targetnya 100% dari seluruh pesanan — bukan soal jumlah yang dikirim, tapi soal kapan proses packing-nya selesai.',
    ],
  },
  {
    id: 'c5-card-9',
    type: 'multiple-choice',
    question:
      "Di contoh gudang ini, kenapa 'persentase pesanan yang di-pack H-1' jadi Lead Metric yang lebih tepat dibanding 'jumlah pesanan yang dikirim hari ini'?",
    options: [
      'Karena data historis nunjukin waktu packing (H-1 vs H) yang benar-benar membedakan OTIF tinggi dan rendah',
      'Karena jumlah pesanan yang dikirim itu angkanya lebih besar',
      'Karena packing H-1 kedengarannya lebih rapi',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Sama seperti contoh checklist QC di Bab 4 — yang menentukan bukan volume kerjanya, tapi kapan atau bagaimana prosesnya dijalankan, dan itu yang terbukti dari data historis.',
    errorFeedback:
      'Coba lagi. Kuncinya di data historis: waktu packing (H-1 vs H) yang benar-benar membedakan OTIF tinggi dan rendah, bukan soal volume atau kesan rapi.',
  },
  {
    id: 'c5-card-10',
    type: 'reflection',
    eyebrow: 'Entri Kelima · Buku Kerja KPI Anda',
    prompt: 'Pikirkan satu masalah di area Proses bisnis Anda sekarang. Tulis Lag Metric dan Lead Metric yang bisa Anda pakai.',
    fields: [
      {
        id: 'proses-lag',
        label: 'Lag Metric apa yang membuktikan masalah Proses ini?',
        placeholder: 'Contoh: OTIF pengiriman bulanan',
      },
      {
        id: 'proses-lead',
        label: 'Lead Metric apa yang bisa menggerakkannya?',
        placeholder: 'Contoh: Persentase pesanan yang di-pack H-1',
      },
    ],
  },
  {
    id: 'c5-card-11',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Terapkan Cepat · Input (F&B)',
    title: 'Lag: Bahan Baku Terbuang. Lead: Checklist Kedatangan Barang',
    body: [
      'Sekarang giliran area Input, contoh dari dapur.',
      'Target Lag: turunkan persentase bahan baku yang terbuang karena rusak atau kadaluarsa, dari 8% jadi maksimal 3% dari total belanja bahan baku per minggu.',
      'Data historis dapur Anda nunjukin: minggu yang checklist cek suhu dan tanggal kedatangan barang dijalankan penuh saat barang masuk, bahan baku terbuangnya sekitar 3%. Minggu yang checklist-nya dilewati, bisa sampai 10%.',
      'Lead Metric-nya: kepatuhan menjalankan checklist cek kesegaran dan FIFO (first in, first out) setiap kali barang datang, targetnya 100% dari setiap kedatangan barang — bukan soal seberapa banyak belanja bahan baku.',
    ],
  },
  {
    id: 'c5-card-12',
    type: 'multiple-choice',
    question:
      'Di contoh dapur ini, apa yang membuat checklist kedatangan barang jadi Lead Metric yang predictive DAN controllable?',
    options: [
      'Data historis membuktikan hubungannya ke bahan baku terbuang, dan staf dapur bisa langsung menjalankannya tiap kedatangan barang',
      'Karena checklist itu wajib menurut aturan pemerintah',
      'Karena checklist lebih murah daripada membeli kulkas baru',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Dua-duanya kepenuhi: predictive (terbukti dari data historis) dan controllable (staf dapur bisa langsung menjalankannya hari ini, setiap kedatangan barang).',
    errorFeedback:
      'Coba lagi. Yang penting itu dua tes dari Bab 4: predictive (terbukti dari data) dan controllable (bisa langsung dijalankan staf) — bukan soal aturan atau harga alat.',
  },
  {
    id: 'c5-card-13',
    type: 'reflection',
    eyebrow: 'Entri Keenam · Buku Kerja KPI Anda',
    prompt: 'Pikirkan satu masalah di area Input bisnis Anda sekarang. Tulis Lag Metric dan Lead Metric yang bisa Anda pakai.',
    fields: [
      {
        id: 'input-lag',
        label: 'Lag Metric apa yang membuktikan masalah Input ini?',
        placeholder: 'Contoh: Persentase bahan baku terbuang per minggu',
      },
      {
        id: 'input-lead',
        label: 'Lead Metric apa yang bisa menggerakkannya?',
        placeholder: 'Contoh: Kepatuhan checklist kedatangan barang',
      },
    ],
  },
  {
    id: 'c5-card-14',
    type: 'info',
    icon: UserCheck,
    eyebrow: 'Sekarang Pasang Nama',
    title: 'Enam KPI, Tapi Siapa yang Pegang?',
    body: [
      'Sekarang Anda sudah punya 6 KPI — Lag dan Lead di tiga area: Output, Proses, Input. Tapi angka doang, tanpa nama yang jelas pegang tanggung jawabnya, bakal berakhir sama seperti Bab 2: target yang nggak pernah benar-benar diterjemahkan jadi aksi siapa pun.',
      "Ini bagian 'per Divisi, Tim, dan Individu' yang sebenarnya — bukan soal punya struktur organisasi yang rapi, tapi soal: setiap KPI, ada SATU nama yang jelas tanggung jawabnya.",
    ],
  },
  {
    id: 'c5-card-15',
    type: 'info',
    icon: Users,
    eyebrow: 'Realistis buat Bisnis Kecil',
    title: 'Satu Orang Boleh Pegang Lebih dari Satu Area',
    body: [
      "Kebanyakan pembaca Effortless Leader nggak punya struktur organisasi formal dengan divisi-divisi terpisah. Itu nggak masalah — aturannya bukan 'harus punya struktur rapi', tapi 'setiap KPI ada satu nama yang jelas'.",
      'Bisnis kecil (CEO + 2-3 staf): CEO sendiri pegang KPI Output (dia yang paling paham angka penjualan dan profit), satu staf senior pegang KPI Proses DAN Input sekaligus (karena dia yang paling sering ada di lapangan). Satu orang, dua area — itu sah, selama jelas.',
      'Bisnis yang lebih besar dengan divisi nyata: KPI Output dipegang manajer sales, KPI Proses dipegang supervisor operasional, KPI Input dipegang manajer gudang atau HR. Beda nama per area, tapi prinsipnya sama: satu KPI, satu nama.',
    ],
  },
  {
    id: 'c5-card-16',
    type: 'reflection',
    eyebrow: 'Entri Ketujuh · Buku Kerja KPI Anda',
    prompt:
      'Tulis siapa yang memegang tanggung jawab di tiap area KPI bisnis Anda sekarang. Boleh nama yang sama muncul lebih dari sekali.',
    fields: [
      {
        id: 'owner-output',
        label: 'Siapa yang pegang KPI Output?',
        placeholder: 'Contoh: Saya sendiri (pemilik)',
      },
      {
        id: 'owner-proses',
        label: 'Siapa yang pegang KPI Proses?',
        placeholder: 'Contoh: Rina, supervisor operasional',
      },
      {
        id: 'owner-input',
        label: 'Siapa yang pegang KPI Input?',
        placeholder: 'Contoh: Rina juga, sekaligus urus gudang',
      },
    ],
  },
  {
    id: 'c5-card-17',
    type: 'info',
    icon: Flag,
    eyebrow: 'Selesai Bab 5',
    title: 'Sekarang Anda Sudah Punya Cascading KPI Lengkap',
    body: [
      'Anda sekarang sudah punya cascading KPI lengkap — 3 area, dengan pemilik jelas di tiap level.',
      'Tapi KPI yang cuma nangkring di buku kerja nggak ada gunanya kalau nggak pernah dipantau.',
      'Bab depan: cara bikin ritme pemantauan yang beneran jalan.',
    ],
  },
]
