import {
  AlertCircle,
  Layers,
  Target,
  Users,
  Briefcase,
  Star,
  Search,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter3Cards: Card[] = [
  {
    id: 'c3-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 3 · Membangun Model Kompetensi',
    title: 'Anda Sudah Punya Satu Peran di Kepala — Sekarang Waktunya Bangun Model Kompetensinya',
    body: [
      'Di Bab 1, Anda menyebut satu peran konkret — entah yang sedang Anda rekrut, atau yang pernah bermasalah. Di Bab 2, Anda petakan bahwa Tahap 1 — model kompetensi — adalah bagian yang paling sering bolong di arsitektur jabatan bisnis SME.',
      'Sekarang saatnya mengerjakan Tahap 1 itu. Bukan teoritis — bukan "model kompetensi itu penting." Tapi konkret: cara membangunnya dari nol untuk satu peran nyata, supaya hasilnya beneran menangkap apa yang peran itu butuhkan untuk berhasil — bukan daftar generik yang enak dibaca tapi nggak bisa diuji.',
      'Bab ini kasih Anda tiga lapis model kompetensi, teknik menurunkannya dari hasil kerja nyata, dan satu contoh kerja lengkap. Setelah bab ini, Anda bisa mulai bangun model kompetensi untuk peran yang Anda bawa dari Bab 1.',
    ],
  },
  {
    id: 'c3-card-2',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Jebakan Pertama',
    title: 'Nyomot dari Template HR — dan Hasilnya Kedengarannya Bagus tapi Nggak Nyambung sama Perannya',
    body: [
      'Cara paling umum "membangun" model kompetensi di bisnis SME: buka Google, cari "daftar kompetensi [nama jabatan]," copy hasilnya, tempel di deskripsi jabatan. Atau minta divisi HR untuk pakai template yang sudah ada. Selesai dalam 20 menit.',
      'Hasilnya terlihat profesional: ada list kompetensi yang rapi — komunikasi yang efektif, kemampuan analisis, orientasi hasil, inisiatif, kerja tim. Semua kedengarannya benar. Semua juga terdengar sama untuk hampir setiap jabatan di mana pun, dari staf gudang sampai CFO.',
      'Itulah masalahnya. Kompetensi yang diturunkan dari template generik tidak pernah diturunkan dari apa yang peran itu beneran butuhkan untuk berhasil. Hasilnya: model kompetensi yang enak di kertas, tapi tidak memberi tahu Anda apa yang harus diuji di rekrutmen — karena tidak pernah nyambung sama peran nyatanya.',
    ],
  },
  {
    id: 'c3-card-3',
    type: 'yes-no',
    question:
      'Deskripsi jabatan yang Anda pakai sekarang — atau yang pernah Anda pakai — isinya kompetensi yang diturunkan dari kebutuhan nyata peran itu, atau lebih ke daftar yang terdengar standar dan bisa berlaku untuk jabatan apa pun?',
    yesLabel: 'Lebih ke standar — kedengarannya benar tapi bisa berlaku untuk jabatan apa pun',
    noLabel: 'Sudah diturunkan dari kebutuhan nyata peran spesifik itu',
    feedbackYes:
      'Jujur dan umum. Kebanyakan deskripsi jabatan di bisnis SME dimulai dari template atau dari "jabatan serupa di perusahaan lain." Bukan salah — tidak ada panduan yang jelas tentang cara menurunkannya dari peran yang nyata. Bab ini kasih Anda tekniknya.',
    feedbackNo:
      'Kalau memang sudah, Anda punya keunggulan. Di bagian selanjutnya, kita akan uji apakah teknik yang Anda pakai sudah mencakup tiga lapis yang dibutuhkan model kompetensi yang solid — dan apakah titik mulainya benar.',
  },
  {
    id: 'c3-card-4',
    type: 'info',
    icon: Target,
    eyebrow: 'Pertanyaan yang Benar',
    title: 'Bukan "Kompetensi Apa yang Biasa Dipakai" — tapi "Apa yang Harus BISA Dilakukan Orang Ini?"',
    body: [
      'Ada satu pergeseran pertanyaan yang mengubah segalanya. Pertanyaan yang salah: "kompetensi apa yang biasanya dibutuhkan untuk peran customer service?" — pertanyaan itu akan mengarahkan Anda ke template generik, karena jawabannya sudah ada di daftar kompetensi standar HR yang bisa di-Google dalam 10 detik.',
      'Pertanyaan yang benar: "apa yang harus BISA dilakukan orang ini supaya peran ini berhasil?" — dan jawabannya harus diturunkan dari hasil kerja nyata yang diharapkan dari peran itu, bukan dari template. Apa output konkretnya? Apa yang terjadi kalau orang ini beneran sukses di perannya? Itulah titik mulai yang benar.',
      'Dari hasil kerja nyata itu, baru kita tanya: "kompetensi apa yang bikin seseorang bisa menghasilkan itu secara konsisten — bukan sekali-sekali, tapi sebagai standar kerja?" Urutan itu yang memastikan model kompetensi Anda terhubung ke peran yang nyata, bukan ke daftar yang terdengar benar.',
    ],
  },
  {
    id: 'c3-card-5',
    type: 'info',
    icon: Layers,
    eyebrow: 'Tiga Lapis Model Kompetensi',
    title: 'Inti, Fungsional, dan Kepemimpinan — Masing-masing Punya Peran yang Berbeda',
    body: [
      'Model kompetensi yang solid punya tiga lapis yang bekerja bersama. Bukan tiga pilihan alternatif yang bisa dipilih salah satu — tapi tiga dimensi yang masing-masing menangkap aspek berbeda dari apa yang dibutuhkan sebuah peran. Kalau salah satu lapis tidak ada, model kompetensinya tidak lengkap.',
      'Lapis 1 — Kompetensi Inti: berlaku untuk semua orang di bisnis Anda, apa pun perannya, apa pun levelnya. Lapis 2 — Kompetensi Fungsional: spesifik untuk peran atau fungsi tertentu — ini yang paling sering hilang dari deskripsi jabatan dan paling sering jadi sumber salah rekrut. Lapis 3 — Kompetensi Kepemimpinan: hanya untuk peran yang mengelola orang lain.',
      'Cara menurunkan ketiga lapis ini berbeda satu sama lain — tapi semuanya mulai dari satu titik yang sama: hasil kerja nyata yang diharapkan dari peran itu. Kartu-kartu berikutnya bahas masing-masing lapis secara detail.',
    ],
  },
  {
    id: 'c3-card-6',
    type: 'info',
    icon: Users,
    eyebrow: 'Lapis 1',
    title: 'Kompetensi Inti: Standar yang Berlaku untuk Semua Orang, Tanpa Kecuali',
    body: [
      'Kompetensi Inti adalah kompetensi yang Anda harapkan dari setiap orang di bisnis Anda — apa pun jabatannya, apa pun levelnya. Ini bukan "nice to have" — ini standar minimum untuk bisa bekerja di bisnis Anda. Kalau seseorang tidak memenuhi standar ini, peran apa pun tidak cocok untuk mereka.',
      'Contoh kompetensi inti yang umum: integritas dan kejujuran dalam pekerjaan sehari-hari, komunikasi dasar yang jelas di konteks kerja bisnis Anda, orientasi menyelesaikan masalah tanpa harus selalu dipandu, dan kemampuan berkolaborasi dengan orang lain tanpa menimbulkan gesekan yang tidak perlu.',
      'Satu catatan penting: Kompetensi Inti sama untuk semua peran — tapi tingkat kemahirannya bisa berbeda. Kepala divisi mungkin perlu kompetensi komunikasi di level yang lebih tinggi dibanding staf pelaksana. Perbedaan tingkat kemahiran itu yang akan dibahas di Bab 4 — bukan di sini.',
    ],
  },
  {
    id: 'c3-card-7',
    type: 'info',
    icon: Briefcase,
    eyebrow: 'Lapis 2',
    title: 'Kompetensi Fungsional: Skill Spesifik yang Bikin Peran Ini Bisa Menghasilkan Apa yang Diharapkan',
    body: [
      'Kompetensi Fungsional adalah kompetensi teknis dan skill spesifik yang dibutuhkan peran itu untuk bisa menghasilkan hasil kerja yang diharapkan. Ini yang berbeda-beda tiap peran dan tiap fungsi — dan ini yang paling sering tidak tercakup di deskripsi jabatan berbasis daftar tugas.',
      'Contoh: staf customer service butuh kemampuan de-eskalasi komplain, negosiasi solusi dalam batas kewenangan, dan product knowledge yang cukup untuk menjawab pertanyaan teknis tanpa eskalasi. Staf keuangan butuh ketelitian pencatatan, kemampuan rekonsiliasi laporan, dan kepatuhan prosedur pajak. Sales butuh prospecting aktif, teknik closing yang terstruktur, dan kemampuan mengelola pipeline.',
      'Kompetensi fungsional diturunkan dari hasil kerja nyata yang diharapkan dari peran itu — bukan dari "skill yang biasanya dimiliki orang di posisi ini." Perbedaan itu yang memastikan Anda menangkap apa yang peran itu beneran butuhkan, bukan apa yang kedengarannya standar.',
    ],
  },
  {
    id: 'c3-card-8',
    type: 'info',
    icon: Star,
    eyebrow: 'Lapis 3',
    title: 'Kompetensi Kepemimpinan: Hanya untuk Peran yang Mengelola Orang Lain — dan Skalanya Naik',
    body: [
      'Kompetensi Kepemimpinan hanya relevan untuk peran yang mengelola orang lain secara langsung maupun tidak langsung. Kalau peran yang Anda modelkan adalah peran non-manajerial, lapis ini tidak perlu ada — dan memaksakannya hanya akan membebani model kompetensi dengan tuntutan yang tidak relevan.',
      'Contoh: supervisor lini pertama butuh kemampuan memberi feedback yang spesifik dan konstruktif, mendelegasikan dengan jelas, dan mengambil keputusan di situasi tekanan tanpa eskalasi berlebihan. Kepala divisi butuh kompetensi yang sama tapi di tingkat yang lebih tinggi — ditambah kemampuan membangun kapabilitas tim jangka panjang dan mengelola kinerja secara sistematis.',
      'Semakin senior perannya, semakin besar porsi Kompetensi Kepemimpinan yang relevan. Tapi untuk peran non-manajerial, ini lapis yang boleh dikosongkan sepenuhnya — dan mengosongkannya justru menjaga model kompetensinya tetap akurat dan bisa diuji secara realistis.',
    ],
  },
  {
    id: 'c3-card-9',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis membangun model kompetensi untuk posisi staf operasional — peran non-manajerial yang tidak mengelola siapa pun. Mereka memasukkan kompetensi "kemampuan memberi feedback ke anggota tim dan mengelola konflik interpersonal di dalam tim." Kompetensi ini masuk ke lapis mana — dan apakah tepat untuk peran ini?',
    options: [
      'Lapis 3 Kepemimpinan — dan tepat, karena semua orang perlu bisa bekerja sama dalam tim',
      'Lapis 3 Kepemimpinan — dan tidak tepat untuk peran non-manajerial yang tidak mengelola siapa pun',
      'Lapis 2 Fungsional — kompetensi interpersonal selalu masuk ke lapis fungsional, bukan kepemimpinan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kemampuan memberi feedback dan mengelola konflik tim adalah Kompetensi Kepemimpinan — kompetensi untuk mengelola orang lain. Untuk peran non-manajerial yang tidak punya tim yang dikelola, lapis ini tidak relevan. Memasukkannya hanya akan membebani model kompetensi dan menghasilkan standar yang tidak bisa diuji secara realistis di seleksi.',
    errorFeedback:
      'Belum tepat. Kemampuan memberi feedback dan mengelola konflik tim adalah kompetensi untuk mengelola orang lain — itu Kompetensi Kepemimpinan, bukan Fungsional, dan bukan Inti. Dan untuk staf operasional non-manajerial yang tidak punya tim yang dikelola, kompetensi ini tidak relevan sama sekali. Model kompetensinya lebih akurat kalau lapis 3 dikosongkan untuk peran ini.',
  },
  {
    id: 'c3-card-10',
    type: 'info',
    icon: Search,
    eyebrow: 'Tekniknya',
    title: 'Mulai dari Hasil Kerja Nyata — Bukan dari Daftar Kompetensi yang Sudah Jadi',
    body: [
      'Teknik yang sama berlaku untuk menurunkan ketiga lapis: mulai dari hasil kerja nyata yang diharapkan dari peran itu, lalu tanya "kompetensi apa yang bikin seseorang bisa menghasilkan itu secara konsisten?" — bukan sebaliknya.',
      'Untuk Kompetensi Inti: tanya "apa standar perilaku dasar yang harus dimiliki semua orang di bisnis saya?" Untuk Kompetensi Fungsional: tanya "untuk menghasilkan [output konkret peran ini], orang ini harus bisa melakukan apa secara spesifik — teknis dan non-teknis?" Untuk Kompetensi Kepemimpinan, kalau relevan: tanya "untuk membuat tim yang dikelola orang ini bisa menghasilkan hasil kerja yang diharapkan, orang ini harus bisa melakukan apa sebagai pemimpin?"',
      'Kalau dimulai dari daftar kompetensi yang sudah ada, ujung-ujungnya Anda akan force-fit kompetensi generik ke peran yang tidak membutuhkannya — dan melewatkan kompetensi spesifik yang beneran krusial. Mulai dari hasil kerja. Selalu.',
    ],
  },
  {
    id: 'c3-card-11',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Kerja',
    title: 'Supervisor Penjualan: Kita Bangun Model Kompetensinya dari Nol',
    body: [
      'Kita ambil satu peran konkret: Supervisor Penjualan di bisnis distribusi B2B. Peran ini mengelola tim 5 sales representative, bertanggung jawab atas pencapaian target penjualan area, dan melapor langsung ke Kepala Komersial.',
      'Langkah pertama: definisikan hasil kerja nyata yang diharapkan dari peran ini — bukan tugasnya, tapi outputnya. Untuk Supervisor Penjualan ini: (1) Tim mencapai target penjualan bulanan secara konsisten. (2) Pipeline penjualan selalu terisi dan ter-update secara akurat. (3) Sales rep yang underperform diidentifikasi dan dicoach, bukan dibiarkan. (4) Komplain pelanggan strategis di-handle langsung oleh supervisor, tidak hanya diteruskan ke atas.',
      'Dari keempat hasil kerja itu, sekarang kita turunkan tiga lapis model kompetensinya. Bukan dari template "Supervisor Sales yang bagus harus punya kompetensi apa" — tapi dari apa yang harus bisa dilakukan orang ini supaya keempat hasil kerja itu bisa terjadi secara konsisten.',
    ],
  },
  {
    id: 'c3-card-12',
    type: 'info',
    icon: Layers,
    eyebrow: 'Contoh Kerja — Tiga Lapis',
    title: 'Model Kompetensi Supervisor Penjualan: Inti, Fungsional, Kepemimpinan',
    body: [
      'Lapis 1 — Kompetensi Inti (berlaku untuk semua orang di bisnis ini): integritas dalam pelaporan angka penjualan dan pipeline, komunikasi yang jelas dan langsung ke atasan dan ke tim, dan kemampuan mengelola prioritas kerja sendiri tanpa harus dipantau terus.',
      'Lapis 2 — Kompetensi Fungsional (spesifik untuk Supervisor Penjualan): analisis pipeline — membaca data penjualan dan mengidentifikasi area berisiko sebelum akhir periode. Negosiasi akun strategis — handle langsung klien besar yang butuh eskalasi. Coaching teknik penjualan — demonstrasikan dan ajarkan teknik prospecting dan closing ke tim, bukan hanya lakukan sendiri.',
      'Lapis 3 — Kompetensi Kepemimpinan (karena peran ini mengelola tim): memberi feedback berbasis data kinerja, bukan perasaan — bukan "kamu kurang semangat" tapi "pipeline kamu kosong di segment B, kita lihat kenapa." Mendelegasikan dengan jelas dan memonitor tanpa micromanage. Mengambil keputusan realokasi target atau akun di situasi tekanan, tanpa harus eskalasi semua hal kecil ke Kepala Komersial.',
    ],
  },
  {
    id: 'c3-card-13',
    type: 'fill-in-the-blank',
    sentence:
      'Ketika menurunkan Kompetensi Fungsional untuk sebuah peran, titik mulai yang benar adalah "________" — bukan daftar kompetensi yang biasanya dipakai untuk peran sejenis.',
    options: [
      'hasil kerja nyata yang diharapkan dari peran itu',
      'template dari HR atau internet',
      'jabatan dengan nama yang sama di perusahaan lain',
      'rekomendasi dari rekruter atau konsultan',
    ],
    correctAnswer: 'hasil kerja nyata yang diharapkan dari peran itu',
    successFeedback:
      'Tepat. Titik mulai yang benar selalu hasil kerja nyata yang diharapkan dari peran itu. Dari sana baru kita tanya: "kompetensi apa yang bikin orang bisa menghasilkan itu secara konsisten?" — bukan sebaliknya. Urutan itu yang memastikan model kompetensinya nyambung sama peran nyata, bukan template.',
    errorFeedback:
      'Belum tepat. Kalau dimulai dari template, daftar kompetensi standar, atau jabatan serupa di perusahaan lain, Anda akan selalu berakhir dengan kompetensi generik yang tidak terhubung ke kebutuhan nyata peran itu. Titik mulainya adalah hasil kerja nyata yang diharapkan dari peran itu — baru dari sana tanya kompetensi apa yang dibutuhkan.',
  },
  {
    id: 'c3-card-14',
    type: 'reflection',
    eyebrow: 'Entri Ketiga · Buku Kerja Job Architecture',
    prompt:
      'Buat draf pertama model kompetensi tiga lapis untuk peran yang Anda bawa dari Bab 1. Belum harus sempurna — yang penting diturunkan dari hasil kerja nyata yang diharapkan peran itu, bukan dari template.',
    fields: [
      {
        id: 'kompetensi-inti',
        label: 'Kompetensi Inti apa yang dibutuhkan peran ini?',
        placeholder:
          'Kompetensi dasar yang berlaku untuk semua orang di bisnis Anda — dan berlaku juga untuk peran ini. Misalnya: integritas dalam pelaporan, komunikasi yang jelas, orientasi menyelesaikan masalah sendiri...',
      },
      {
        id: 'kompetensi-fungsional',
        label: 'Kompetensi Fungsional apa yang paling krusial untuk peran ini?',
        placeholder:
          'Skill teknis dan kemampuan spesifik yang dibutuhkan peran ini untuk menghasilkan hasil kerja yang diharapkan. Misalnya: analisis laporan keuangan, negosiasi pelanggan, manajemen inventory, coaching teknik penjualan...',
      },
      {
        id: 'kompetensi-kepemimpinan',
        label: 'Kalau peran ini mengelola orang lain, Kompetensi Kepemimpinan apa yang relevan? (Kalau tidak relevan, tulis "tidak relevan")',
        placeholder:
          'Misalnya: memberi feedback berbasis data kinerja, mendelegasikan dengan jelas, mengelola konflik antar anggota tim. Atau: tidak relevan — peran ini tidak mengelola orang lain.',
      },
    ],
  },
  {
    id: 'c3-card-15',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 4',
    title: 'Model Kompetensinya Sekarang Ada — Bab Berikutnya Mengubahnya Jadi Standar yang Bisa Diukur',
    body: [
      'Anda baru saja membangun draf pertama model kompetensi tiga lapis untuk peran yang Anda bawa. Itu fondasi yang tidak dimiliki kebanyakan bisnis SME — dan yang memisahkan rekrutmen berbasis kompetensi dari rekrutmen berbasis kesan.',
      'Tapi ada satu masalah yang masih tersisa: "komunikasi yang baik" masih kedengarannya kabur. "Kemampuan analisis pipeline" masih bisa berarti apa saja. Hampir semua kandidat akan klaim punya kompetensi-kompetensi itu — dan Anda belum punya cara untuk membedakan klaim dari bukti nyata.',
      'Bab berikutnya mengerjakan itu: mengubah setiap kompetensi di model Anda jadi standar kemahiran yang konkret dan bisa diukur — supaya Anda bisa benar-benar menguji apakah kandidat memilikinya, bukan hanya percaya klaim mereka.',
    ],
  },
]
