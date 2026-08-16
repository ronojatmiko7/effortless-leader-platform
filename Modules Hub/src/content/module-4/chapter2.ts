import {
  Map,
  Layers,
  ListChecks,
  FileText,
  Puzzle,
  GitMerge,
  NotebookPen,
  Compass,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter2Cards: Card[] = [
  {
    id: 'c2-card-1',
    type: 'info',
    icon: Map,
    eyebrow: 'Bab 2 · Peta Arsitektur Proses',
    title: 'Sebelum Membenahi, Anda Butuh Peta Dulu',
    body: [
      'Di Bab 1, Anda ngerasain sendiri di mana biasanya masalah proses bersembunyi: di titik serah terima antar tim yang nggak ada pemiliknya. Tapi "ngerasa ada masalah" beda dengan "tahu persis di level mana harus dibenahi."',
      'Bab ini kasih Anda peta itu: arsitektur proses 4 tingkat, dari gambaran paling besar sampai instruksi teknis paling kecil. Setelah bab ini, Anda akan tahu persis di level mana suatu masalah sebenarnya hidup.',
    ],
  },
  {
    id: 'c2-card-2',
    type: 'info',
    icon: Layers,
    eyebrow: 'Level 1',
    title: 'L1 — Peta Proses Bisnis: Gambaran Besar dalam Satu Halaman',
    body: [
      'L1 adalah alur end-to-end dari pelanggan minta sampai pelanggan puas, lintas SEMUA departemen, digambar dalam satu halaman. Bukan detail teknis — cuma kotak-kotak besar dan panah yang menunjukkan alurnya.',
      'Ini yang biasanya nggak pernah ada secara utuh di kepala siapa pun. Tim sales tahu bagiannya, tim produksi tahu bagiannya, tim pengiriman tahu bagiannya — tapi jarang ada satu gambar yang menyatukan semuanya jadi satu alur yang bisa dilihat sekaligus.',
    ],
  },
  {
    id: 'c2-card-3',
    type: 'info',
    icon: Puzzle,
    eyebrow: 'Level 2',
    title: 'L2 — Sub-Proses per Fungsi: Memecah Tiap Kotak Besar',
    body: [
      'Tiap kotak besar di peta L1 (misalnya "Proses Produksi") itu sebenarnya isinya banyak langkah kecil di dalamnya. L2 memecah satu kotak L1 jadi alur kerja yang lebih rinci, tapi masih di dalam satu departemen/fungsi.',
      'Kalau L1 itu peta kota, L2 itu peta satu kompleks di dalam kota itu — masih belum sampai ke alamat rumah persis, tapi sudah lebih jelas dari sekadar nama kota.',
    ],
  },
  {
    id: 'c2-card-4',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Level 3',
    title: 'L3 — Prosedur: Urutan Langkah dan Siapa yang Mengerjakan',
    body: [
      'L3 masuk ke urutan langkah konkret di dalam satu sub-proses — apa yang terjadi, dalam urutan apa, dan siapa (peran/jabatan, bukan cuma nama) yang mengerjakan tiap langkah.',
      'Di level ini, sebuah proses mulai bisa diikuti orang yang belum pernah mengerjakannya — tapi belum sampai ke detail teknis paling kecil.',
    ],
  },
  {
    id: 'c2-card-5',
    type: 'info',
    icon: FileText,
    eyebrow: 'Level 4',
    title: 'L4 — Instruksi Kerja (SOP): Detail Teknis Paling Granular',
    body: [
      'L4 adalah detail teknis paling rinci per tugas — cara persis mengerjakan satu langkah, sampai ke level yang bisa diikuti staf baru tanpa harus nanya-nanya ke siapa pun.',
      'Kalau L1 itu peta kota dan L2 peta kompleks, L4 itu instruksi "belok kiri di pertigaan ini, rumah ketiga dari kanan, pagar warna hijau." Nggak ada ruang buat tebak-tebakan.',
    ],
  },
  {
    id: 'c2-card-6',
    type: 'sort-list',
    question:
      'Urutkan keempat level ini dari yang PALING BESAR (gambaran umum) ke yang PALING KECIL (detail teknis).',
    items: [
      'L3 — Prosedur (urutan langkah dan siapa mengerjakan)',
      'L1 — Peta Proses Bisnis (gambaran end-to-end satu halaman)',
      'L4 — Instruksi Kerja (detail teknis paling granular)',
      'L2 — Sub-Proses per Fungsi (satu kotak L1 dipecah lebih rinci)',
    ],
    correctAnswer: [
      'L1 — Peta Proses Bisnis (gambaran end-to-end satu halaman)',
      'L2 — Sub-Proses per Fungsi (satu kotak L1 dipecah lebih rinci)',
      'L3 — Prosedur (urutan langkah dan siapa mengerjakan)',
      'L4 — Instruksi Kerja (detail teknis paling granular)',
    ],
    successFeedback:
      'Tepat. L1 paling besar (peta kota), turun ke L2 (peta kompleks), L3 (urutan langkah), sampai L4 (instruksi paling teknis).',
    errorFeedback:
      'Belum pas. Urutannya dari besar ke kecil: L1 (peta bisnis end-to-end), L2 (sub-proses per fungsi), L3 (prosedur/urutan langkah), L4 (instruksi kerja paling teknis).',
  },
  {
    id: 'c2-card-7',
    type: 'info',
    icon: Map,
    eyebrow: 'Contoh Lengkap',
    title: 'Satu Proses, Dilihat di Keempat Level',
    body: [
      'Ambil contoh sederhana: "dari order pelanggan masuk sampai barang terkirim." Di L1, ini cuma satu rangkaian kotak: Order Masuk → Konfirmasi Stok → Produksi/Siapkan Barang → Kirim → Tagih & Bayar.',
      'Turun ke L2 untuk kotak "Produksi/Siapkan Barang": pecah jadi Cek Bahan Baku → Proses Produksi → Quality Check → Kemas. Ini masih di dalam satu fungsi (produksi), tapi sudah lebih rinci dari L1.',
      'Turun lagi ke L3 untuk sub-langkah "Quality Check": langkah 1 — staf QC mengambil sampel; langkah 2 — staf QC mencocokkan dengan standar; langkah 3 — staf QC memberi label lolos/tidak lolos. Jelas siapa mengerjakan apa, dalam urutan apa.',
      'Dan di L4 untuk langkah "staf QC mencocokkan dengan standar": instruksi teknis persis — ukur dengan alat X, standar toleransinya Y, kalau di luar toleransi lakukan Z. Ini yang bikin staf baru bisa langsung kerja dengan benar tanpa nanya-nanya senior.',
    ],
  },
  {
    id: 'c2-card-8',
    type: 'multiple-choice',
    question:
      'Sebuah dokumen isinya: "Langkah 1: Staf Gudang mengecek stok. Langkah 2: Staf Gudang mengonfirmasi ke Sales. Langkah 3: Sales mengonfirmasi ke pelanggan." Ini contoh dokumen di level mana?',
    options: [
      'L1 — Peta Proses Bisnis',
      'L3 — Prosedur',
      'L4 — Instruksi Kerja',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini urutan langkah dan siapa mengerjakan apa — persis definisi L3, prosedur. Belum sampai ke detail teknis (L4), tapi juga sudah lebih rinci dari peta besar (L1).',
    errorFeedback:
      'Coba lagi. Dokumen ini punya urutan langkah dan menyebutkan siapa mengerjakan tiap langkah — itu ciri L3 (prosedur), bukan peta besar (L1) atau detail teknis super rinci (L4).',
  },
  {
    id: 'c2-card-9',
    type: 'info',
    icon: GitMerge,
    eyebrow: 'Kenapa Ini Penting',
    title: 'Silo Bersembunyi di CELAH Antar Level, Bukan di DALAM Satu Level',
    body: [
      'Ini bagian paling penting dari bab ini: sebuah departemen bisa saja punya L3 dan L4 yang rapi buat kerjaannya sendiri — instruksi kerja jelas, semua staf paham tugasnya masing-masing.',
      'Tapi kalau L1 dan L2-nya nggak pernah digambar LINTAS departemen, nggak ada yang bisa lihat di mana proses satu departemen itu benar-benar nyambung — atau nggak nyambung — ke departemen lain.',
      'Dengan kata lain: silo hidup di sambungan antar kotak, bukan di dalam kotak. Departemen yang masing-masing rapi secara internal tetap bisa menghasilkan kekacauan besar kalau L1/L2 lintas fungsinya nggak pernah ada.',
    ],
  },
  {
    id: 'c2-card-10',
    type: 'yes-no',
    question:
      'Coba pikirkan: apakah ada satu gambar/dokumen di bisnis Anda yang menunjukkan alur KESELURUHAN dari pelanggan minta sampai pelanggan puas, lintas semua tim yang terlibat?',
    yesLabel: 'Ada, dan semua tim tahu itu',
    noLabel: 'Nggak ada — tiap tim cuma tahu bagiannya sendiri',
    feedbackYes:
      'Itu modal besar — banyak bisnis SME nggak punya ini sama sekali. Bab 3 akan bantu Anda memastikan peta itu juga menandai titik serah terimanya secara eksplisit.',
    feedbackNo:
      'Ini sangat umum, dan itu justru yang bab-bab berikutnya akan bereskan. Tanpa peta L1 lintas fungsi, silo nggak akan pernah kelihatan sampai sudah bikin masalah.',
  },
  {
    id: 'c2-card-11',
    type: 'fill-in-the-blank',
    sentence:
      'Sebuah departemen bisa punya instruksi kerja (L4) yang rapi, tapi silo tetap bisa terjadi kalau peta ________ lintas departemennya (L1/L2) nggak pernah digambar.',
    options: ['alur kerja', 'gaji', 'jadwal cuti', 'anggaran'],
    correctAnswer: 'alur kerja',
    successFeedback:
      'Tepat. Rapi di dalam departemen (L3/L4) nggak otomatis berarti nyambung dengan baik ke departemen lain — itu perlu peta L1/L2 lintas fungsi.',
    errorFeedback:
      'Bukan itu. Yang perlu digambar lintas fungsi supaya silo kelihatan adalah peta alur kerja (L1/L2) — bukan gaji, cuti, atau anggaran.',
  },
  {
    id: 'c2-card-12',
    type: 'info',
    icon: Compass,
    eyebrow: 'Menuju Praktik',
    title: 'Bab Depan: Anda yang Menggambar Peta Anda Sendiri',
    body: [
      'Sekarang Anda paham keempat levelnya secara konsep. Tapi peta yang berguna itu bukan peta contoh punya bisnis orang lain — itu peta proses bisnis ANDA sendiri, digambar dengan tangan Anda dan tim Anda.',
      'Bab 3 dan 4 akan bawa Anda praktik langsung: menggambar rantai nilai L1-L2 bisnis Anda, menandai titik serah terimanya, lalu mendiagnosis mana yang beneran bermasalah.',
    ],
  },
  {
    id: 'c2-card-13',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Sebelum Lanjut',
    title: 'Audit Cepat: Level Mana yang Sudah Ada di Bisnis Anda?',
    body: [
      'Sebelum masuk ke praktik menggambar di Bab 3, coba lakukan audit cepat dulu: dari keempat level tadi, mana yang sudah ada di bisnis Anda — walau cuma informal, belum tertulis rapi — dan mana yang paling kosong sama sekali.',
      'Level yang paling kosong itu biasanya juga sumber masalah yang paling besar, karena di situlah nggak ada satu pun peta yang bisa dipegang kalau ada yang salah.',
    ],
  },
  {
    id: 'c2-card-14',
    type: 'reflection',
    eyebrow: 'Entri Kedua · Buku Kerja Proses Anda',
    prompt:
      'Audit cepat 4 level arsitektur proses di bisnis Anda — mana yang sudah ada, mana yang paling kosong.',
    fields: [
      {
        id: 'existing-tier',
        label: 'Level mana yang sudah ada di bisnis Anda, walau informal?',
        placeholder: 'Contoh: L4 sudah ada untuk produksi, tapi cuma di kepala supervisor',
      },
      {
        id: 'empty-tier',
        label: 'Level mana yang paling kosong — dan kemungkinan besar itu sumber masalahnya?',
        placeholder: 'Contoh: L1 — nggak ada satu pun peta yang lintas semua tim',
      },
    ],
  },
  {
    id: 'c2-card-15',
    type: 'info',
    icon: Layers,
    eyebrow: 'Selesai Bab 2',
    title: 'Sekarang Anda Sudah Punya Peta Besarnya',
    body: [
      'Anda sekarang tahu keempat level arsitektur proses — dari peta bisnis paling besar (L1) sampai instruksi teknis paling kecil (L4) — dan kenapa silo biasanya bersembunyi di celah antar level, bukan di dalam satu level.',
      'Bab 3 dan 4 masuk ke L1-L2 secara praktik: menggambar rantai nilai bisnis Anda sendiri dan menemukan persis di mana titik silonya.',
    ],
  },
]
