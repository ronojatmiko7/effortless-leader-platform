import { Trophy, Split, History, Gauge, Siren, FileDown, Rocket } from 'lucide-react'
import type { Card } from '../types/card'

export const module2Cards: Card[] = [
  {
    id: 'm2-card-1',
    type: 'info',
    icon: Trophy,
    eyebrow: 'Modul 2 · Escaping the Vanity Metric Trap',
    title: 'Piala Emas yang Menipu',
    body: [
      'Selamat datang di jebakan Metrik Basa-basi (Vanity Metrics).',
      "Banyak bos bangga perusahaannya 'sibuk luar biasa' atau 'omzet naik', tapi di akhir bulan kas perusahaan tetap kosong.",
      'Sibuk tidak sama dengan sukses. Mari kita perbaiki cara Anda mengukur Hasil Akhir (Output).',
    ],
  },
  {
    id: 'm2-card-2',
    type: 'yes-no',
    question:
      "Coba bayangkan Anda bertanya ke staf admin atau staf gudang Anda. Apakah mereka tahu persis dengan 'angka' apa target sukses mereka hari ini?",
    yesLabel: 'Ya, mereka punya angka spesifik',
    noLabel: 'Tidak, mereka cuma tahu harus kerja keras',
    feedbackYes: 'Luar biasa. Bisnis Anda sudah selangkah lebih maju dari kebanyakan perusahaan.',
    feedbackNo:
      'Jangan salahkan mereka kalau sering salah prioritas. Karyawan yang tidak punya target harian hanya akan bekerja menebak-nebak.',
  },
  {
    id: 'm2-card-3',
    type: 'info',
    icon: Split,
    eyebrow: 'Bongkar · Cascading Target',
    title: 'Pecah Target Besar Jadi Aksi Harian',
    body: [
      "Punya target besar seperti 'Tahun ini omzet harus 10 Miliar' itu bagus untuk Anda (Bos).",
      'Tapi angka itu tidak ada artinya untuk staf di bawah.',
      'Target besar ini harus dipecah (di-cascade) menjadi target aksi harian untuk tiap divisi.',
    ],
  },
  {
    id: 'm2-card-4',
    type: 'multiple-choice',
    question:
      'Jika target besar perusahaan adalah menaikkan penjualan 20%, apa target spesifik yang paling masuk akal untuk seorang staf Telesales?',
    options: [
      'Menaikkan profit perusahaan 20%',
      'Menelpon 50 calon klien potensial per hari',
      'Menjaga semangat kerja tetap positif',
    ],
    correctAnswer: 1,
    successFeedback:
      'Benar! Menelpon 50 orang adalah aksi harian yang jelas dan bisa dihitung, bukan sekadar angan-angan.',
    errorFeedback:
      'Salah. Target staf harus berupa aksi spesifik yang 100% bisa mereka kontrol setiap hari.',
  },
  {
    id: 'm2-card-5',
    type: 'info',
    icon: History,
    eyebrow: 'Dua Jenis Metrik · Lag',
    title: 'Lag Metric: Kaca Spion Bisnis Anda',
    body: [
      'Sekarang targetnya sudah spesifik. Tapi, ada dua jenis metrik (angka ukur).',
      'Pertama adalah Lag Metric. Ini ibarat kaca spion. Contoh: Angka profit, total penjualan bulan lalu, atau jumlah komplain.',
      'Angka ini bagus dilihat, tapi saat Anda melihatnya, semua sudah terjadi dan tidak bisa diubah.',
    ],
  },
  {
    id: 'm2-card-6',
    type: 'info',
    icon: Gauge,
    eyebrow: 'Dua Jenis Metrik · Lead',
    title: 'Lead Metric: Setir dan Kaca Depan',
    body: [
      'Kedua adalah Lead Metric. Ini ibarat setir dan kaca depan mobil Anda.',
      'Ini adalah tindakan hari ini yang memprediksi hasil besok. Contoh: Jumlah prospek yang dihubungi hari ini, atau berapa kali mesin diservis minggu ini.',
      'Ini adalah metrik yang bisa Anda kontrol SEKARANG.',
    ],
  },
  {
    id: 'm2-card-7',
    type: 'fill-in-the-blank',
    sentence:
      "Jika 'Total Pendapatan Akhir Bulan' adalah Lag metric (kaca spion), maka 'Jumlah proposal penawaran yang dikirim ke klien hari ini' adalah _________ metric.",
    options: ['Lead', 'Lag', 'Spion', 'Vanity'],
    correctAnswer: 'Lead',
    successFeedback:
      'Tepat sekali! Proposal yang dikirim hari ini (Lead) akan memprediksi pendapatan akhir bulan (Lag).',
    errorFeedback: 'Bukan itu. Metrik ini memimpin atau mendahului hasil akhir.',
  },
  {
    id: 'm2-card-8',
    type: 'sort-list',
    question:
      'Mari kita urutkan aktivitas jualan ini dari tindakan awal (Lead) hingga ke hasil akhir (Lag).',
    items: [
      'Lakukan 3 Presentasi',
      'Closing 1 Penjualan',
      'Sebar 100 Brosur',
      'Dapat 10 Nomor WA Calon Klien',
    ],
    correctAnswer: [
      'Sebar 100 Brosur',
      'Dapat 10 Nomor WA Calon Klien',
      'Lakukan 3 Presentasi',
      'Closing 1 Penjualan',
    ],
    successFeedback: 'Sempurna! Jika Anda memantau langkah-langkah awalnya, Anda bisa memprediksi closingnya.',
    errorFeedback: 'Urutannya salah. Susun dari aktivitas pertama sampai ke hasil akhirnya.',
  },
  {
    id: 'm2-card-9',
    type: 'info',
    icon: Siren,
    eyebrow: 'Bongkar · Ritual Evaluasi',
    title: 'Jangan Jadi Pemadam Kebakaran',
    body: [
      'Anda sudah punya angkanya (Lead dan Lag). Pertanyaannya: Kapan Anda melihat angka tersebut?',
      'Kalau Anda cuma mengecek data saat ada masalah besar atau klien marah-marah, Anda bukan sedang mengelola bisnis.',
      'Anda sedang menjadi Pemadam Kebakaran.',
    ],
  },
  {
    id: 'm2-card-10',
    type: 'yes-no',
    question: 'Bagaimana gaya evaluasi (meeting) di perusahaan Anda saat ini?',
    yesLabel: 'Rutin mingguan mengecek angka',
    noLabel: 'Meeting mendadak kalau ada krisis',
    feedbackYes: 'Keren. Rutinitas adalah kunci dari sistem yang berjalan otomatis.',
    feedbackNo:
      'Ini sangat melelahkan. Anda harus mulai membangun ritual evaluasi rutin agar tidak jantungan setiap ada krisis.',
  },
  {
    id: 'm2-card-11',
    type: 'multiple-choice',
    question: 'Apa tujuan utama dari rapat evaluasi mingguan yang sehat?',
    options: [
      'Mencari siapa karyawan yang pantas disalahkan',
      'Ajang adu argumen antar manajer',
      'Melihat metrik dan mencari letak kerusakan sistem',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat! Pemimpin sejati menyerang masalah pada sistemnya, bukan menyerang manusianya.',
    errorFeedback:
      'Salah. Rapat yang hanya mencari kambing hitam akan membuat tim Anda takut berinovasi.',
  },
  {
    id: 'm2-card-12',
    type: 'worksheet',
    icon: FileDown,
    eyebrow: 'Alat bantu praktis',
    title: 'Lembar Pembuat Target (KPI Cascading)',
    body: [
      'Berhenti memakai metrik basa-basi. Unduh lembar kerja ini untuk memecah target besar bisnis Anda menjadi aktivitas harian yang jelas (Lead metrics) untuk tim Anda.',
    ],
    downloadUrl: '/downloads/kpi-cascading-template.pdf',
    buttonText: 'Unduh PDF - Template KPI',
  },
  {
    id: 'm2-card-13',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Selesai sudah',
    title: 'Output Bisnis Anda Kini Terukur',
    body: [
      'Selamat! Output bisnis Anda kini bisa diukur dengan benar. Di modul selanjutnya, kita akan turun ke ruang mesin: Membedah bagaimana cara menyusun Proses Kerja (SOP) agar tidak sekadar jadi pajangan di lemari.',
    ],
    cta: { label: 'Lanjut ke Modul 3', href: '#module-3' },
  },
]
