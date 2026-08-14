import {
  Search,
  Users,
  Stamp,
  Hourglass,
  HelpCircle,
  Stethoscope,
  NotebookPen,
  ScanSearch,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter4Cards: Card[] = [
  {
    id: 'c4-card-1',
    type: 'info',
    icon: Search,
    eyebrow: 'Bab 4 · Membedah Titik Silo',
    title: 'Nggak Semua Titik Serah Terima Rusaknya Sama',
    body: [
      'Di Bab 3, Anda menandai titik-titik serah terima di peta proses Anda. Tapi nggak semua titik itu beneran rusak — dan yang rusak pun rusaknya nggak selalu karena hal yang sama.',
      'Bab ini kasih Anda cara membedakan tiga penyakit yang beda tapi sering ketuker: silo fungsional, approval berlapis, dan bottleneck biasa. Ketiganya kelihatan mirip dari luar — sama-sama bikin proses lambat — tapi obatnya beda total.',
    ],
  },
  {
    id: 'c4-card-2',
    type: 'info',
    icon: Users,
    eyebrow: 'Penyakit #1',
    title: 'Gejala Silo Fungsional',
    body: [
      'Silo fungsional kelihatan dari: informasi atau barang macet di satu meja tanpa ada yang merasa itu tanggung jawabnya. Staf nunggu instruksi dari departemen lain tanpa ada kesepakatan waktu (SLA) yang jelas.',
      'Ciri paling khas: begitu terjadi error, semua orang saling lempar tanggung jawab — "itu bukan bagian saya", "saya kira udah dikoordinasikan sama tim sebelah." Nggak ada yang secara eksplisit ditugaskan menjaga titik itu.',
    ],
  },
  {
    id: 'c4-card-3',
    type: 'info',
    icon: Stamp,
    eyebrow: 'Penyakit #2',
    title: 'Gejala Approval Berlapis (Redundant Approval)',
    body: [
      'Approval berlapis kelihatan dari: satu keputusan kecil butuh tanda tangan/persetujuan dari tiga orang atau lebih, dan nggak jelas masing-masing menambah nilai apa ke keputusan itu.',
      'Alasannya biasanya "dari dulu emang gitu" — bukan risiko nyata yang memang perlu dicek berlapis. Penting: approval itu sendiri nggak selalu salah. Yang salah adalah approval yang sudah kehilangan alasan jelasnya tapi tetap dijalankan karena kebiasaan.',
    ],
  },
  {
    id: 'c4-card-4',
    type: 'info',
    icon: Hourglass,
    eyebrow: 'Penyakit #3',
    title: 'Gejala Bottleneck Biasa',
    body: [
      'Bottleneck biasa kelihatan dari: titik yang memang makan waktu karena kapasitasnya terbatas — misalnya cuma ada satu mesin, atau cuma satu orang yang punya keahlian tertentu.',
      'Ini beda dari dua penyakit sebelumnya karena penyebabnya kapasitas, bukan tata kelola atau koordinasi yang berantakan. Penting dibedakan, karena solusinya juga beda total — tambah kapasitas atau atur ulang jadwal, bukan merombak alur kerja atau memangkas approval.',
    ],
  },
  {
    id: 'c4-card-5',
    type: 'multiple-choice',
    question:
      'PO senilai kecil harus disetujui 4 orang berbeda, dan nggak ada satu pun dari mereka yang bisa jelasin kenapa perlu 4 tanda tangan untuk nominal sekecil itu. Ini gejala penyakit yang mana?',
    options: ['Silo fungsional', 'Approval berlapis', 'Bottleneck biasa'],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini approval berlapis — banyak lapisan persetujuan tanpa alasan risiko yang jelas, biasanya cuma warisan kebiasaan lama.',
    errorFeedback:
      'Coba lagi. Ini bukan soal saling lempar tanggung jawab (silo) atau kapasitas terbatas (bottleneck) — ini soal banyaknya lapisan approval yang nggak jelas alasannya. Itu approval berlapis.',
  },
  {
    id: 'c4-card-6',
    type: 'multiple-choice',
    question:
      'Semua pengecatan produk harus lewat satu orang, karena cuma dia yang bisa mengoperasikan mesin cat yang ada. Antrean produk yang menunggu dicat selalu panjang. Ini gejala penyakit yang mana?',
    options: ['Silo fungsional', 'Approval berlapis', 'Bottleneck biasa'],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Ini bottleneck biasa — penyebabnya kapasitas (satu mesin, satu orang terampil), bukan tata kelola yang berantakan. Solusinya: tambah kapasitas atau atur ulang jadwal, bukan redesain alur.',
    errorFeedback:
      'Coba lagi. Nggak ada yang saling lempar tanggung jawab di sini, dan nggak ada approval berlapis. Ini soal kapasitas terbatas — satu mesin, satu orang. Itu bottleneck biasa.',
  },
  {
    id: 'c4-card-7',
    type: 'info',
    icon: ScanSearch,
    eyebrow: 'Alatnya',
    title: 'Teknik Diagnosis: Tiga Pertanyaan untuk Tiap Titik Serah Terima',
    body: [
      'Untuk tiap titik serah terima yang sudah Anda tandai di Bab 3, ajukan tiga pertanyaan ini:',
      '1) Berapa lama rata-rata pekerjaan macet di titik ini sebelum lanjut? 2) Siapa yang sebenarnya menunggu siapa — dan apakah jelas siapa yang harus bertindak duluan? 3) Apa yang terjadi kalau orang yang biasa pegang titik ini tiba-tiba nggak ada (cuti, sakit, keluar)?',
      'Jawaban atas ketiga pertanyaan ini biasanya langsung menunjukkan gejala mana yang paling dominan — nggak jelas siapa bertindak = silo, macetnya karena harus muter ke banyak orang tanpa alasan jelas = approval berlapis, macetnya karena satu titik memang terbatas kapasitasnya = bottleneck.',
    ],
  },
  {
    id: 'c4-card-8',
    type: 'info',
    icon: Stethoscope,
    eyebrow: 'Contoh Diagnosis',
    title: 'Contoh: Mendiagnosis Titik "PO Nyangkut 3 Hari"',
    body: [
      'Ambil contoh dari Bab 1: PO yang nyangkut berhari-hari karena butuh tiga tanda tangan. Terapkan tiga pertanyaan tadi.',
      'Pertanyaan 1 — berapa lama macet? Rata-rata 3 hari. Pertanyaan 2 — siapa nunggu siapa? Staf pembelian nunggu tiga approver, dan salah satu dari mereka sering nggak tahu PO itu ada di mejanya sampai ditagih. Pertanyaan 3 — kalau salah satu approver nggak ada? Prosesnya benar-benar berhenti total, nggak ada pengganti.',
      'Dari tiga jawaban ini kelihatan jelas: ini bukan soal kapasitas (bottleneck) — ini approval berlapis, karena nggak jelas kenapa perlu tiga orang, dan sistemnya rapuh begitu satu orang nggak ada.',
    ],
  },
  {
    id: 'c4-card-9',
    type: 'multiple-choice',
    question:
      'Dari contoh "PO Nyangkut 3 Hari" tadi, apa yang membuat itu terdiagnosis sebagai approval berlapis dan bukan silo fungsional?',
    options: [
      'Karena tidak ada yang menunggu — semua orang tahu tugasnya',
      'Karena macetnya karena harus muter ke banyak approver tanpa alasan risiko yang jelas, bukan karena tidak ada yang merasa bertanggung jawab',
      'Karena hanya butuh satu mesin khusus',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Bedanya dari silo: di sini justru terlalu banyak orang yang "harus" terlibat (approval), bukan terlalu sedikit yang merasa bertanggung jawab.',
    errorFeedback:
      'Coba lagi. Ada yang menunggu (staf pembelian menunggu tiga approver), dan ini bukan soal mesin. Kuncinya: macet karena muter ke banyak approver tanpa alasan risiko jelas — itu approval berlapis.',
  },
  {
    id: 'c4-card-10',
    type: 'yes-no',
    question:
      'Coba pikirkan titik serah terima paling parah di peta Anda dari Bab 3: kalau orang yang biasa pegang titik itu tiba-tiba nggak ada seminggu, apakah prosesnya tetap bisa jalan?',
    yesLabel: 'Ya, ada yang bisa gantikan',
    noLabel: 'Tidak, prosesnya akan berhenti',
    feedbackYes:
      'Bagus — itu tanda titik itu nggak terlalu rapuh. Tapi tetap lanjut diagnosis, karena "bisa jalan" beda dari "jalan dengan cepat dan jelas."',
    feedbackNo:
      'Ini sinyal kuat — kemungkinan besar titik itu silo fungsional atau approval berlapis, karena keduanya sama-sama bikin proses rapuh begitu satu orang nggak ada. Bab 7 akan bantu Anda merombaknya.',
  },
  {
    id: 'c4-card-11',
    type: 'fill-in-the-blank',
    sentence:
      'Bedanya bottleneck biasa dari silo fungsional dan approval berlapis: penyebabnya adalah keterbatasan ________ , bukan tata kelola atau koordinasi yang berantakan.',
    options: ['kapasitas', 'komunikasi', 'anggaran pemasaran', 'jam kerja kantor'],
    correctAnswer: 'kapasitas',
    successFeedback:
      'Tepat. Bottleneck murni soal kapasitas terbatas (satu mesin, satu orang ahli) — solusinya nambah kapasitas, bukan merombak alur koordinasi.',
    errorFeedback:
      'Bukan itu. Bottleneck biasa disebabkan oleh keterbatasan kapasitas (mesin, orang ahli) — beda dari silo/approval berlapis yang soal tata kelola dan koordinasi.',
  },
  {
    id: 'c4-card-12',
    type: 'info',
    icon: HelpCircle,
    eyebrow: 'Kenapa Ini Penting',
    title: 'Salah Diagnosis = Salah Obat',
    body: [
      'Kalau Anda mendiagnosis bottleneck sebagai silo, Anda mungkin sibuk menetapkan "siapa pemiliknya" padahal masalahnya cuma butuh mesin kedua. Kalau Anda mendiagnosis silo sebagai bottleneck, Anda mungkin sibuk menambah orang padahal yang dibutuhkan cuma kejelasan siapa yang bertanggung jawab.',
      'Itulah kenapa tiga pertanyaan diagnosis tadi penting dilakukan dengan jujur, bukan diasumsikan dari kursi kantor.',
    ],
  },
  {
    id: 'c4-card-13',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Diagnosis Titik Serah Terima Terburuk Anda',
    body: [
      'Ambil titik serah terima paling parah dari peta Anda di Bab 3 (Entri Ketiga). Jalankan tiga pertanyaan diagnosis tadi terhadapnya, dan tentukan: ini kemungkinan besar silo fungsional, approval berlapis, atau bottleneck biasa?',
    ],
  },
  {
    id: 'c4-card-14',
    type: 'reflection',
    eyebrow: 'Entri Keempat · Buku Kerja Proses Anda',
    prompt:
      'Diagnosis titik serah terima paling parah dari peta Anda di Bab 3, menggunakan tiga pertanyaan diagnosis.',
    fields: [
      {
        id: 'worst-handoff',
        label: 'Dari titik-titik serah terima yang Anda catat di Bab 3, mana yang paling parah?',
        placeholder: 'Contoh: PO dari Sales ke Gudang, sering nyangkut 2-3 hari',
      },
      {
        id: 'diagnosis',
        label:
          'Berdasarkan tiga pertanyaan tadi, ini kemungkinan besar: silo fungsional, approval berlapis, atau bottleneck biasa — dan kenapa?',
        placeholder: 'Contoh: Approval berlapis — butuh 3 tanda tangan yang nggak jelas alasannya, dan berhenti total kalau satu orang nggak ada',
      },
    ],
  },
  {
    id: 'c4-card-15',
    type: 'info',
    icon: Search,
    eyebrow: 'Selesai Bab 4',
    title: 'Sekarang Anda Tahu Persis Titik Mana yang Rusak — dan Kenapa',
    body: [
      'Anda sekarang bisa membedakan tiga penyakit proses yang paling umum, dan sudah mendiagnosis satu titik nyata di bisnis Anda sendiri.',
      'Bab depan: cara menyusun instruksi kerja yang jelas dan bisa langsung dijalankan, biar titik-titik itu nggak lagi mengandalkan improvisasi atau ingatan orang.',
    ],
  },
]
