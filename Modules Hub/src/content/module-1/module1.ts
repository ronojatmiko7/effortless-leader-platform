import {
  Flame,
  Factory,
  Target,
  ListChecks,
  Layers,
  ClipboardList,
  Trash2,
  FileDown,
  Rocket,
} from 'lucide-react'
import type { Card } from '../types/card'

export const module1Cards: Card[] = [
  {
    id: 'm1-card-1',
    type: 'info',
    icon: Flame,
    eyebrow: 'Modul 1 · Diagnosis Reality Check',
    title: 'Bos Gaya Dukun',
    body: [
      "Banyak bos mengelola bisnis pakai gaya dukun. Saat untung menipis, mereka menatap atap dan berkata, 'Insting saya bilang tim sales lagi malas.'",
      "Mari kita luruskan: 'Insting' itu bukan alat ukur bisnis. Itu cuma cara halus untuk bilang Anda tidak tahu apa yang rusak.",
    ],
  },
  {
    id: 'm1-card-2',
    type: 'yes-no',
    question:
      'Apakah Anda tahu pasti, dengan data angka, di tim mana kerjaan nyangkut dan mandek minggu lalu?',
    yesLabel: 'Ya, saya punya datanya',
    noLabel: 'Tidak, nunggu laporan bulanan',
    feedbackYes: 'Hebat, Anda di jalur yang benar. Tapi mari kita uji seberapa dalam data Anda.',
    feedbackNo:
      'Jujur itu langkah pertama yang baik. Tapi menyetir bisnis cuma pakai keluhan karyawan itu seperti menyetir mobil dengan mata tertutup.',
  },
  {
    id: 'm1-card-3',
    type: 'info',
    icon: Factory,
    eyebrow: 'Kerangka berpikir',
    title: 'Bisnis Itu Ibarat Pabrik Kue',
    body: [
      'Untuk berhenti menebak-nebak, kita gunakan kerangka IPO.',
      'Bisnis itu ibarat pabrik pembuat kue. Ada bahan baku (Input), resep dan oven (Process), dan hasil kuenya (Output).',
      'Kalau kuenya bantat, jangan cuma memarahi kokinya. Cek resep dan ovennya!',
    ],
  },
  {
    id: 'm1-card-4',
    type: 'info',
    icon: Target,
    eyebrow: 'Bongkar · Output (Hasil Akhir)',
    title: 'Mulai dari Ujung Pabrik',
    body: [
      'Mari kita mulai dari ujung pabrik: OUTPUT (Hasil Akhir).',
      'Ini bukan sekadar mengecek berapa total profit Anda di akhir bulan.',
    ],
  },
  {
    id: 'm1-card-5',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Output · Dasar-Dasar Target',
    title: 'Pecah Targetnya, Jangan Cuma Disimpan di Kepala',
    body: [
      'Apakah Anda mengukur apa yang seharusnya diukur? Punya target perusahaan itu bagus, tapi kalau karyawan di bawah tidak tahu apa target spesifik harian mereka, percuma.',
      'Target besar harus dipecah dan dibagikan ke setiap orang.',
    ],
  },
  {
    id: 'm1-card-6',
    type: 'multiple-choice',
    question:
      'Jika target besar perusahaan tidak diturunkan (di-cascade) menjadi target spesifik untuk setiap karyawan, maka target itu hanya akan menjadi...',
    options: ['Panduan kerja harian', 'Pajangan dan angan-angan belaka', 'Standar operasional'],
    correctAnswer: 1,
    successFeedback:
      'Tepat sekali! Karyawan yang tidak tahu targetnya hanya akan bekerja menebak-nebak.',
    errorFeedback: 'Bukan. Tanpa target spesifik per orang, karyawan tidak punya panduan.',
  },
  {
    id: 'm1-card-7',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bongkar · Process (Sistem Kerja)',
    title: 'Jangan Andalkan Hafalan Karyawan Lama',
    body: [
      'Sekarang Anda paham pentingnya Output. Mari kita mundur satu langkah ke mesin pabriknya: PROCESS (Sistem Kerja).',
      'Apakah tim Anda bekerja pakai panduan tertulis?',
      'Kalau bisnis Anda jalan cuma mengandalkan hafalan karyawan lama, bisnis Anda sangat rapuh.',
    ],
  },
  {
    id: 'm1-card-8',
    type: 'multiple-choice',
    question: 'Tim Anda salah kirim pesanan lagi ke klien. Apa yang pertama kali Anda lakukan?',
    options: ['Marah di grup WhatsApp', 'Bikin acara motivasi', 'Cek panduan kerja (SOP) mereka'],
    correctAnswer: 2,
    successFeedback:
      'Benar! 80% kesalahan terjadi karena sistem kerjanya yang berantakan, bukan sikap karyawannya.',
    errorFeedback: 'Reaksi emosional tidak memperbaiki sistem. Coba pilih pendekatan sistematis.',
  },
  {
    id: 'm1-card-9',
    type: 'sort-list',
    question: 'Mari kita urutkan panduan kerja dari yang paling luas sampai yang paling detail.',
    items: [
      'Langkah Kerja Tim',
      'Instruksi Kerja Detail (SOP)',
      'Kebijakan Umum Perusahaan',
      'Peta Alur Antar Tim',
    ],
    correctAnswer: [
      'Kebijakan Umum Perusahaan',
      'Peta Alur Antar Tim',
      'Langkah Kerja Tim',
      'Instruksi Kerja Detail (SOP)',
    ],
    successFeedback: 'Sempurna! Beginilah cara arsitek menyusun dokumentasi proses.',
    errorFeedback: 'Urutannya belum tepat. Mulai dari yang paling umum ke yang paling teknis.',
  },
  {
    id: 'm1-card-10',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Bongkar · Input (Bahan Baku)',
    title: 'Bahan Baku Itu Bukan Cuma Soal Rekrutmen',
    body: [
      'Mesin dan resep (Process) sudah beres. Terakhir, kita cek bahan bakunya: INPUT.',
      'Input bukan cuma soal rekrutmen. Ini adalah semua modal dasar Anda: material, alat kerja (software/mesin), dan yang paling penting, manusianya.',
    ],
  },
  {
    id: 'm1-card-11',
    type: 'info',
    icon: Trash2,
    eyebrow: 'Prinsip penting',
    title: 'Sampah Masuk, Sampah Keluar',
    body: [
      "Prinsipnya sederhana: 'Garbage in, garbage out' (Sampah masuk, sampah keluar).",
      'Jika Anda memasukkan telur busuk (Input jelek) ke dalam oven terbaik (Process bagus), hasil kuenya (Output) tetap akan beracun.',
    ],
  },
  {
    id: 'm1-card-12',
    type: 'multiple-choice',
    question:
      'Anda membeli software mahal, tapi staf Anda tidak tahu cara memakainya sehingga kerjaan malah lambat. Ini adalah kegagalan di area mana?',
    options: ['Output', 'Process', 'Input'],
    correctAnswer: 2,
    successFeedback:
      'Benar! Alat kerja (software) dan kompetensi staf adalah bahan baku (Input) yang belum siap.',
    errorFeedback: 'Bukan. Ini bukan masalah hasil akhir atau langkah kerjanya.',
  },
  {
    id: 'm1-card-13',
    type: 'yes-no',
    question:
      "Saat merekrut karyawan baru, apakah Anda punya daftar syarat keahlian yang pasti, atau sekadar merasa 'kayaknya orangnya asyik diajak ngobrol'?",
    yesLabel: 'Punya daftar pasti',
    noLabel: 'Cuma insting dan ngobrol',
    feedbackYes: 'Bagus, Anda sudah meminimalisir masuknya bahan baku yang salah.',
    feedbackNo:
      'Hati-hati, merekrut berdasarkan sekadar kecocokan ngobrol adalah jalan pintas menuju kekacauan sistem.',
  },
  {
    id: 'm1-card-14',
    type: 'worksheet',
    icon: FileDown,
    eyebrow: 'Alat bantu praktis',
    title: 'Lembar Cek Kesehatan Bisnis (Diagnosis IPO)',
    body: [
      'Berhenti menebak. Unduh lembar kerja ini.',
      'Isinya pertanyaan sederhana untuk menemukan di mana kebocoran operasional Anda yang sebenarnya.',
    ],
    downloadUrl: '/downloads/cek-kesehatan-bisnis-ipo.pdf',
    buttonText: 'Unduh PDF - Cek Kesehatan Bisnis',
  },
  {
    id: 'm1-card-15',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Selesai sudah',
    title: 'Anda Baru Saja Berhenti Jadi Dukun',
    body: [
      'Selesai! Anda sudah paham dasar arsitektur bisnis. Di modul selanjutnya, kita akan membedah bagaimana merancang metrik yang benar agar Anda tidak tertipu oleh angka palsu.',
    ],
    cta: { label: 'Lanjut ke Modul 2', href: '#module-2' },
  },
]
