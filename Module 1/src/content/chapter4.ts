import {
  Workflow,
  Brain,
  UserX,
  ClipboardCheck,
  Map,
  Radar,
  UserPlus,
  NotebookPen,
  Compass,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter4Cards: Card[] = [
  {
    id: 'c4-card-1',
    type: 'info',
    icon: Workflow,
    eyebrow: 'Bab 4 · Mengaudit Lapisan Proses',
    title: 'Output Sudah Dipetakan, Sekarang Bongkar Mesinnya',
    body: [
      'Di Bab 3, Anda belajar membedakan angka yang benar-benar berguna dari yang cuma basa-basi, lalu menulis 3 metrik yang paling sering Anda pantau.',
      'Angka itu cuma hasil akhir. Sekarang kita masuk ke bagian yang menghasilkan angka itu: Proses — alur kerja dan SOP yang benar-benar berjalan sehari-hari, bukan yang tertulis rapi di dokumen yang tidak pernah dibuka lagi.',
    ],
  },
  {
    id: 'c4-card-2',
    type: 'info',
    icon: Brain,
    eyebrow: 'Risiko yang Sering Diabaikan',
    title: 'Kalau Cuma Ada di Kepala Satu Orang, Itu Bukan Proses',
    body: [
      'Banyak bisnis kelihatan jalan lancar bertahun-tahun, padahal sebenarnya cuma mengandalkan satu-dua orang senior yang hafal semuanya di luar kepala.',
      'Itu bukan proses. Itu single point of failure — satu titik rapuh yang, kalau goyah, bisa merobohkan seluruh operasional.',
    ],
  },
  {
    id: 'c4-card-3',
    type: 'yes-no',
    question:
      'Coba pikirkan: apakah ada satu proses penting di bisnis Anda yang cuma benar-benar dikuasai oleh satu orang tertentu?',
    yesLabel: 'Ada, dan itu bikin saya was-was',
    noLabel: 'Rasanya tidak ada',
    feedbackYes:
      'Wajar was-was. Itu tandanya Anda sudah sadar risikonya — langkah pertama sebelum benar-benar membenahinya.',
    feedbackNo:
      'Bagus kalau memang begitu. Tapi coba tanya lagi: itu karena semuanya sudah tertulis rapi, atau karena Anda belum pernah coba minta orang lain menggantikannya sehari saja?',
  },
  {
    id: 'c4-card-4',
    type: 'info',
    icon: UserX,
    eyebrow: 'Biar Kebayang',
    title: 'Pak Budi Cuti Dua Minggu',
    body: [
      'Bayangkan Pak Budi, satu-satunya yang tahu cara mengatur ulang mesin produksi kalau ada masalah, tiba-tiba harus cuti dua minggu karena keluarganya sakit.',
      'Dalam skenario yang sehat, siapa pun bisa buka SOP dan tetap jalan. Dalam skenario yang rapuh, seluruh lini produksi berhenti sampai Pak Budi kembali — atau lebih parah lagi, sampai Pak Budi resign untuk selamanya.',
    ],
  },
  {
    id: 'c4-card-5',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Checklist Audit Proses',
    title: 'Empat Level yang Harus Anda Cek Satu-satu',
    body: [
      'Untuk proses mana pun di bisnis Anda, ada 4 level dokumentasi yang idealnya ada: kebijakan umum perusahaan, peta alur antar tim, langkah kerja tim, dan instruksi kerja detail.',
      'Audit yang sesungguhnya bukan cuma bertanya "SOP-nya ada, tidak?". Tapi: dari 4 level ini, mana yang benar-benar tertulis, dan mana yang cuma hidup di kepala satu-dua orang seperti Pak Budi tadi?',
    ],
  },
  {
    id: 'c4-card-6',
    type: 'sort-list',
    question: 'Urutkan 4 level dokumentasi proses ini dari yang paling umum sampai yang paling detail.',
    items: [
      'Langkah Kerja Tim',
      'Instruksi Kerja Detail',
      'Kebijakan Umum Perusahaan',
      'Peta Alur Antar Tim',
    ],
    correctAnswer: [
      'Kebijakan Umum Perusahaan',
      'Peta Alur Antar Tim',
      'Langkah Kerja Tim',
      'Instruksi Kerja Detail',
    ],
    successFeedback:
      'Pas. Ini urutan yang harus Anda cek satu-satu waktu audit — dari aturan besar perusahaan, sampai instruksi paling detail yang benar-benar dipegang orang di lapangan.',
    errorFeedback:
      'Belum pas. Ingat: makin ke bawah levelnya, makin detail dan makin dekat ke pekerjaan sehari-hari.',
  },
  {
    id: 'c4-card-7',
    type: 'info',
    icon: Map,
    eyebrow: 'Skill Baru · Pemetaan "As-Is"',
    title: 'Petakan yang Benar-benar Terjadi, Bukan yang Seharusnya Terjadi',
    body: [
      'Caranya sederhana, tidak butuh software mahal: ambil satu proses, lalu tulis SETIAP langkahnya dari pemicu awal sampai selesai, sesuai urutan yang BENERAN terjadi di lapangan — bukan urutan yang tertulis rapi di SOP.',
      'Ini yang disebut pemetaan "as-is" (apa adanya), lawan dari "to-be" (idealnya). Kalau kenyataan di lapangan beda dari dokumennya, yang Anda audit adalah kenyataannya.',
      'Satu hal yang wajib ditandai di setiap peta: titik-titik handoff, yaitu saat pekerjaan pindah tangan dari satu orang atau tim ke orang/tim lain. Di situlah paling sering terjadi bocor.',
    ],
  },
  {
    id: 'c4-card-8',
    type: 'sort-list',
    question:
      'Coba petakan proses "terima pesanan sampai kirim" ini sesuai urutan yang BENERAN terjadi di lapangan.',
    items: [
      'Kurir menjemput barang untuk dikirim',
      'Pesanan masuk dari marketplace atau WhatsApp',
      'Barang dikemas dan diberi label',
      'Admin mengecek dan mengonfirmasi stok',
    ],
    correctAnswer: [
      'Pesanan masuk dari marketplace atau WhatsApp',
      'Admin mengecek dan mengonfirmasi stok',
      'Barang dikemas dan diberi label',
      'Kurir menjemput barang untuk dikirim',
    ],
    successFeedback:
      'Pas. Sekarang perhatikan: di setiap panah antar langkah ada perpindahan tangan — dari pelanggan ke admin, dari admin ke gudang, dari gudang ke kurir. Titik-titik pindah tangan itu yang paling sering jadi titik bocor.',
    errorFeedback:
      'Belum pas. Coba urutkan berdasarkan apa yang benar-benar terjadi di lapangan — pesanan harus masuk dan dicek dulu sebelum bisa dikemas dan dikirim.',
  },
  {
    id: 'c4-card-9',
    type: 'info',
    icon: Radar,
    eyebrow: 'Skill Baru · Deteksi Titik Bocor',
    title: 'Empat Tanda Ada yang Bocor',
    body: [
      'Setelah peta "as-is" Anda jadi, cari 4 tanda ini di sepanjang alurnya: (1) pekerjaan yang menumpuk dan menunggu di satu titik, (2) langkah yang sering harus diulang karena hasilnya salah (rework), (3) titik handoff antar orang atau tim — ini yang paling berisiko, dan (4) langkah yang sepenuhnya bergantung pada satu orang tertentu.',
      'Anda tidak perlu mencari "yang paling lambat". Cari yang menumpuk, yang diulang-ulang, yang pindah tangan, dan yang cuma bisa dikerjakan satu orang. Biasanya salah satunya sudah jadi jawaban.',
    ],
  },
  {
    id: 'c4-card-10',
    type: 'info',
    icon: UserPlus,
    eyebrow: 'Contoh · Proses Onboarding Karyawan Baru',
    title: 'Coba Terapkan ke Proses Onboarding',
    body: [
      'Karyawan baru diterima, tapi akun email dan akses sistemnya baru dibuatkan tiga hari kemudian karena harus menunggu satu admin IT yang juga merangkap banyak tugas lain — itu tanda #1 (menumpuk dan menunggu) sekaligus tanda #4 (bergantung satu orang).',
      'Materi training diajarkan ulang dari nol tiap ada karyawan baru karena tidak ada modul tertulis, dan setiap trainer mengajarkan versi yang sedikit berbeda — itu tanda #2 (rework), karena hasilnya tidak konsisten dan sering harus dikoreksi belakangan.',
    ],
  },
  {
    id: 'c4-card-11',
    type: 'multiple-choice',
    question:
      'Proses retur barang di toko Anda: pelanggan komplain, lalu barang harus disetujui dulu oleh supervisor toko sebelum bisa diproses — padahal supervisor sering keluar kota dan baru cek pesan sore hari. Ini tanda titik bocor yang mana?',
    options: [
      'Rework — barangnya harus dikemas ulang',
      'Handoff yang bergantung pada satu orang yang sering tidak ada di tempat',
      'Bukan titik bocor, ini memang prosedur yang wajar',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini kombinasi handoff (harus pindah tangan ke supervisor) dan ketergantungan ke satu orang yang susah dijangkau — kombinasi paling klasik penyebab proses macet berhari-hari.',
    errorFeedback:
      'Coba lagi. Perhatikan: barang harus menunggu approval dari satu orang spesifik yang seringkali tidak ada di tempat. Itu persis tanda titik bocor yang kita bahas — handoff yang bergantung pada satu orang.',
  },
  {
    id: 'c4-card-12',
    type: 'multiple-choice',
    question:
      'Tim Anda mengirim barang yang salah ukuran ke pelanggan untuk ketiga kalinya bulan ini. Langkah pertama yang paling tepat?',
    options: [
      'Panggil staf yang mengemas, tegur supaya lebih teliti',
      'Buka peta alur pengemasan, cek di langkah mana pengecekan ukuran seharusnya terjadi',
      'Ganti seluruh tim gudang dengan orang baru',
    ],
    correctAnswer: 1,
    successFeedback:
      'Benar. Kesalahan yang berulang tiga kali itu jarang soal orangnya — itu tanda ada langkah pengecekan yang hilang atau terlewat di alurnya. Cek prosesnya dulu, baru orangnya.',
    errorFeedback:
      'Coba lagi. Kesalahan yang terus berulang biasanya bukan soal ketelitian satu orang — itu tanda ada langkah di prosesnya yang bolong. Cek petanya dulu sebelum menegur siapa pun.',
  },
  {
    id: 'c4-card-13',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Praktik Langsung',
    title: 'Giliran Anda: Petakan Satu Proses Nyata',
    body: [
      'Pilih satu proses di bisnis Anda yang sering bikin pusing — bisa proses terima pesanan, onboarding karyawan, retur barang, atau apa pun yang Anda mau.',
      'Tulis langkah-langkahnya sesuai kenyataan di lapangan, dari pemicu awal sampai selesai. Lalu tebak: di langkah mana kemungkinan titik bocornya?',
    ],
  },
  {
    id: 'c4-card-14',
    type: 'reflection',
    eyebrow: 'Entri Keempat · Buku Kerja Audit Anda',
    prompt: 'Petakan satu alur kerja nyata di bisnis Anda, dari awal sampai selesai.',
    fields: [
      {
        id: 'workflow',
        label: 'Tulis alur kerjanya langkah demi langkah, sesuai kenyataan di lapangan',
        placeholder:
          'Contoh: 1) Pesanan masuk di WA, 2) admin cek stok manual, 3) tunggu ACC owner, 4) baru dikemas...',
      },
      {
        id: 'bottleneck',
        label: 'Menurut dugaan Anda, langkah mana yang paling jadi titik bocor?',
        placeholder: 'Contoh: Langkah tunggu ACC owner, karena owner sering baru balas sore hari',
      },
    ],
  },
  {
    id: 'c4-card-15',
    type: 'info',
    icon: Compass,
    eyebrow: 'Selesai Bab 4',
    title: 'Proses Anda Sudah Dipetakan',
    body: [
      'Simpan baik-baik peta dan dugaan titik bocor yang baru Anda tulis. Sama seperti gejala Output di Bab 2 dan metrik di Bab 3, ini akan kita pakai lagi nanti di Bab 7.',
      'Sekarang Anda tahu cara mengecek dokumentasi proses, memetakan alur kerja apa adanya, dan mengenali 4 tanda titik bocor — bukan cuma menebak dari "kelihatannya lambat di sini".',
      'Tapi proses yang bagus pun bisa bocor kalau bahan bakunya bermasalah. Sekarang kita cek bahan bakunya: Input.',
    ],
    cta: { label: 'Lanjut ke Bab 5', href: '#chapter-5' },
  },
]
