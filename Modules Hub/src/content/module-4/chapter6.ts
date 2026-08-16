import {
  ShieldAlert,
  SearchCheck,
  ShieldCheck,
  ListChecks,
  Scale,
  Sparkles,
  NotebookPen,
  Workflow,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter6Cards: Card[] = [
  {
    id: 'c6-card-1',
    type: 'info',
    icon: ShieldAlert,
    eyebrow: 'Bab 6 · Sistem yang Mencegah',
    title: 'Instruksi yang Jelas Aja Nggak Menjamin Bebas Kesalahan',
    body: [
      'Di Bab 5, Anda menulis instruksi kerja yang jelas dan konkret. Tapi kenyataannya, orang tetap bisa lewatin langkah pas lagi buru-buru, capek, atau ada tekanan waktu — walau instruksinya sudah ditulis sejelas apa pun.',
      'Bab ini kasih Anda cara berpikir yang beda: bukan cuma menulis apa yang harus dilakukan, tapi merancang sistem yang membuat kesalahan lebih susah terjadi, atau ketahuan lebih cepat, sebelum sampai merugikan pelanggan.',
    ],
  },
  {
    id: 'c6-card-2',
    type: 'info',
    icon: SearchCheck,
    eyebrow: 'Istilah #1',
    title: 'QC (Quality Control): Menangkap Cacat SETELAH Terjadi',
    body: [
      'Quality Control (QC) adalah mendeteksi cacat SETELAH terjadi — biasanya lewat inspeksi di ujung proses, misalnya cek barang jadi sebelum dikirim ke pelanggan.',
      'QC itu berguna — lebih baik cacat ketahuan sebelum sampai ke pelanggan daripada nggak ketahuan sama sekali. Tapi QC nggak mencegah kesalahannya terjadi. Biaya rework, bahan yang terbuang, waktu yang hilang — itu semua sudah keluar duluan sebelum QC menangkapnya.',
    ],
  },
  {
    id: 'c6-card-3',
    type: 'info',
    icon: ShieldCheck,
    eyebrow: 'Istilah #2',
    title: 'QA (Quality Assurance): Mencegah Cacat SEBELUM Terjadi',
    body: [
      'Quality Assurance (QA) adalah mencegah cacat SEBELUM terjadi — dibangun ke DALAM proses itu sendiri, bukan cuma dicek di akhir. Contohnya: checklist wajib di tengah proses, atau desain kerja yang membuat kesalahan susah dilakukan.',
      'Sistem Manajemen Mutu (QMS) yang bagus punya keduanya — QC tetap perlu sebagai jaring pengaman terakhir. Tapi porsi QA yang benar-benar menurunkan biaya kesalahan secara drastis, karena mencegah masalahnya terjadi dari awal, bukan cuma menangkapnya belakangan.',
    ],
  },
  {
    id: 'c6-card-4',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis konveksi cuma punya satu titik cek: staf QC memeriksa semua baju jadi sebelum dikemas dan dikirim. Ini contoh pendekatan yang mana?',
    options: ['QA murni', 'QC murni', 'Campuran QA dan QC yang seimbang'],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini QC murni — semua deteksi terjadi di ujung proses, setelah kesalahan sudah terjadi dan biayanya (bahan, waktu jahit) sudah keluar duluan.',
    errorFeedback:
      'Coba lagi. Karena pemeriksaannya cuma di akhir (setelah baju jadi), ini QC murni — mendeteksi setelah kejadian, bukan mencegah dari awal.',
  },
  {
    id: 'c6-card-5',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Konsepnya',
    title: 'Mistake-Proofing: Desain yang Bikin Kesalahan Susah Terjadi',
    body: [
      'Konsep sederhana di balik QA: desain titik kerja supaya kesalahan gampang ketahuan, atau bahkan nggak mungkin dilakukan — bukan mengandalkan orang untuk selalu ingat dan teliti setiap saat.',
      'Contoh sederhana: checklist wajib dicentang sebelum barang boleh lanjut ke tahap berikutnya (bukan cuma diingatkan lisan). Form yang nggak bisa disubmit kalau ada kolom wajib kosong. Warna atau label yang bikin item yang salah langsung kelihatan beda dari yang benar.',
      'Ini bukan soal mesin canggih — kebanyakan mistake-proofing di bisnis SME bisa dibangun dengan checklist, form sederhana, atau label warna yang murah dan cepat dipasang.',
    ],
  },
  {
    id: 'c6-card-6',
    type: 'info',
    icon: Scale,
    eyebrow: 'Menyambung ke Bab 5',
    title: 'Titik Paling Rawan Biasanya di Serah Terima',
    body: [
      'Standar kualitas yang jelas (echo dari instruksi kerja L4 di Bab 5) sekarang dipasangkan dengan titik cek — bukan cuma "kerjakan dengan baik", tapi kriteria konkret "selesai dengan benar itu artinya apa" yang dicek sebelum lanjut.',
      'Titik paling rawan untuk dipasangi checkpoint QA biasanya justru di titik serah terima yang sudah Anda petakan di Bab 3-4 — karena itu titik TERAKHIR kesalahan bisa ketahuan sebelum tanggung jawabnya berpindah ke tim lain, dan sesudahnya jadi lebih mahal dan ribet untuk dilacak siapa yang salah.',
    ],
  },
  {
    id: 'c6-card-7',
    type: 'fill-in-the-blank',
    sentence:
      'Titik cek pencegahan (QA) paling efektif dipasang di titik ________, karena itu kesempatan terakhir kesalahan ketahuan sebelum tanggung jawab berpindah ke tim lain.',
    options: ['serah terima', 'gaji', 'rekrutmen', 'pemasaran'],
    correctAnswer: 'serah terima',
    successFeedback:
      'Tepat. Titik serah terima itu kesempatan terakhir mencegat kesalahan sebelum jadi masalah tim lain — dan sesudahnya jadi jauh lebih mahal dilacak.',
    errorFeedback:
      'Bukan itu. Titik cek pencegahan paling efektif dipasang di titik serah terima — kesempatan terakhir sebelum tanggung jawab berpindah.',
  },
  {
    id: 'c6-card-8',
    type: 'info',
    icon: ShieldAlert,
    eyebrow: 'Kesalahan Umum',
    title: 'Dua Jebakan: Cuma QC, atau Titik Cek di Mana-mana',
    body: [
      'Jebakan pertama: QMS yang isinya cuma inspeksi akhir (QC doang, nggak ada pencegahan) — bisnis akhirnya jago menangkap cacat, tapi biaya membuat cacatnya tetap tinggi terus-menerus.',
      'Jebakan kedua, sebaliknya: sistem yang kelewat rumit dengan titik cek di mana-mana, sehingga proses jadi lambat tanpa menambah nilai yang sepadan. Ingat Bab 4 — approval/titik cek berlebih itu sendiri bisa jadi penyakit baru kalau nggak hati-hati.',
      'Cari keseimbangan: pasang titik cek yang paling murah dan paling AWAL mendeteksi masalah — bukan titik cek di setiap langkah tanpa pandang bulu.',
    ],
  },
  {
    id: 'c6-card-9',
    type: 'info',
    icon: Sparkles,
    eyebrow: 'Contoh Bandingan',
    title: 'QC-Saja vs QA-Terbangun: Bandingkan Biayanya',
    body: [
      'Bayangkan konveksi yang salah ukuran kain di awal potong. Pendekatan QC-saja: kesalahan baru ketahuan saat inspeksi akhir, setelah baju sudah selesai dijahit — bahan, waktu jahit, dan tenaga sudah terbuang semua.',
      'Pendekatan QA-terbangun: ada checklist wajib "ukur dan cocokkan dengan pola sebelum mulai potong" yang harus dicentang staf sebelum mesin potong boleh dijalankan. Kesalahan ukuran ketahuan SEBELUM bahan dipotong — biaya yang hilang cuma waktu cek beberapa menit, bukan satu baju jadi yang gagal total.',
      'Bedanya bukan soal siapa yang lebih rajin. Bedanya soal DI MANA titik cek dipasang — di akhir (mahal) atau di awal/tengah proses (murah).',
    ],
  },
  {
    id: 'c6-card-10',
    type: 'multiple-choice',
    question:
      'Kenapa checklist "ukur dan cocokkan dengan pola sebelum potong" lebih baik daripada inspeksi baju jadi di akhir?',
    options: [
      'Karena checklist selalu lebih murah dibuat',
      'Karena mendeteksi kesalahan lebih awal, sebelum bahan dan waktu jahit sudah terbuang',
      'Karena tidak membutuhkan staf yang teliti',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Semakin awal kesalahan terdeteksi, semakin kecil biaya yang sudah terlanjur keluar — itu inti dari QA dibanding QC.',
    errorFeedback:
      'Coba lagi. Ini bukan soal biaya pembuatan checklist atau ketelitian staf — intinya soal KAPAN kesalahan terdeteksi. Semakin awal, semakin murah biayanya.',
  },
  {
    id: 'c6-card-11',
    type: 'yes-no',
    question:
      'Di titik serah terima yang sudah Anda kerjakan sejak Bab 4-5, apakah sudah ada satu titik cek yang mencegah kesalahan SEBELUM sampai ke tahap berikutnya — bukan cuma diperiksa di akhir semua proses?',
    yesLabel: 'Sudah ada titik cek pencegahan',
    noLabel: 'Belum, kalau ada cuma cek di akhir',
    feedbackYes:
      'Bagus, itu modal QA yang nyata. Kartu berikutnya akan bantu Anda menuliskannya lebih eksplisit.',
    feedbackNo:
      'Ini yang bab ini bantu Anda bangun. Merancang satu titik cek pencegahan di titik yang tepat bisa langsung menurunkan biaya kesalahan yang selama ini terus berulang.',
  },
  {
    id: 'c6-card-12',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Rancang Satu Titik Cek Pencegahan',
    body: [
      'Untuk titik serah terima yang sudah Anda kerjakan dari Bab 4-5, rancang satu titik cek pencegahan (QA) — bukan sekadar inspeksi di akhir. Apa kriteria konkretnya, dan siapa yang mengecek sebelum boleh lanjut ke tahap berikutnya?',
    ],
  },
  {
    id: 'c6-card-13',
    type: 'reflection',
    eyebrow: 'Entri Keenam · Buku Kerja Proses Anda',
    prompt: 'Rancang satu titik cek pencegahan (QA) untuk proses Anda.',
    fields: [
      {
        id: 'risk-point',
        label: 'Di titik mana kesalahan paling sering/paling mahal terjadi di proses Anda?',
        placeholder: 'Contoh: Salah ukuran/warna yang baru ketahuan setelah barang jadi',
      },
      {
        id: 'prevention-checkpoint',
        label:
          'Rancang satu titik cek pencegahan (bukan cuma inspeksi di akhir) — apa kriterianya dan siapa yang mengeceknya?',
        placeholder: 'Contoh: Checklist ukur & cocokkan pola sebelum potong, dicek staf potong sendiri sebelum mesin dijalankan',
      },
    ],
  },
  {
    id: 'c6-card-14',
    type: 'info',
    icon: Workflow,
    eyebrow: 'Selesai Bab 6',
    title: 'Sekarang Anda Sudah Punya Semua Bahannya',
    body: [
      'Anda sekarang sudah punya peta proses, diagnosis titik silo, instruksi kerja yang jelas, dan titik pencegahan kualitas. Empat potongan ini adalah bahan mentah untuk satu hal terakhir: benar-benar merombak prosesnya.',
      'Bab depan: lokakarya penuh — merombak satu proses Anda dari awal sampai akhir, pakai semua yang sudah dipelajari.',
    ],
  },
]
