import {
  Layers,
  AlertCircle,
  Target,
  BarChart2,
  Eye,
  Search,
  BookOpen,
  Star,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter4Cards: Card[] = [
  {
    id: 'c4-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 4 · Tingkat Kemahiran',
    title: 'Anda Sudah Punya Daftar Kompetensi — Sekarang Masalahnya Ada di Satu Kata: "Bagus"',
    body: [
      'Di Bab 3, Anda membangun draf pertama model kompetensi tiga lapis — Inti, Fungsional, dan Kepemimpinan — untuk peran yang Anda bawa dari Bab 1. Itu langkah yang tidak dimiliki kebanyakan bisnis SME.',
      'Tapi ada satu masalah yang tersisa. Anda punya kompetensi-kompetensi itu — tapi belum ada definisi tentang di tingkat kemahiran berapa kompetensi itu dibutuhkan. "Komunikasi yang baik" ada di model Anda, tapi "baik" itu apa? Bagi Anda, mungkin berarti bisa menjelaskan situasi kompleks ke pelanggan tanpa salah paham. Bagi kolega Anda, cukup kalau bisa balas email tanpa typo.',
      'Keduanya bisa sama-sama yakin bahwa kandidat yang sama "komunikatif" atau "tidak komunikatif" — karena keduanya menggunakan definisi yang berbeda dalam kepala masing-masing. Bab ini mengunci definisi itu jadi standar bersama yang bisa dipakai oleh siapa pun yang menilai.',
    ],
  },
  {
    id: 'c4-card-2',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Masalahnya',
    title: 'Kompetensi Tanpa Tingkat Kemahiran Itu Masih Seperti Peta Tanpa Skala — Ada, tapi Tidak Bisa Dipakai',
    body: [
      'Bayangkan dua manajer menilai kandidat yang sama untuk posisi staff customer service. Manajer A keluar dari wawancara dengan kesimpulan: "komunikasinya bagus — lancar, antusias, jelas." Manajer B dari wawancara yang sama: "menurut saya kurang — jawabannya terlalu umum, tidak ada yang spesifik tentang cara dia handle situasi sulit."',
      'Siapa yang salah? Tidak ada. Dua orang itu menggunakan standar yang berbeda karena tidak ada standar bersama yang disepakati sebelumnya. "Komunikasi yang baik" cukup fleksibel untuk mendukung kedua kesimpulan itu sekaligus.',
      'Inilah yang membuat kompetensi tanpa tingkat kemahiran tidak bisa diandalkan di seleksi. Hasilnya bergantung pada standar internal masing-masing penilai — bukan pada standar yang dibutuhkan perannya. Dan selisih persepsi itu tidak akan ketahuan sampai kandidat yang terpilih sudah mulai kerja.',
    ],
  },
  {
    id: 'c4-card-3',
    type: 'yes-no',
    question:
      'Pernah ada situasi di mana Anda dan orang lain — rekan kerja, HR, atau anggota tim — tidak sepakat apakah seorang kandidat "punya" kompetensi tertentu, padahal kalian berdua mewawancarai orang yang sama?',
    yesLabel: 'Pernah — kami sering punya penilaian yang berbeda untuk kandidat yang sama',
    noLabel: 'Belum pernah — kami selalu sepakat dalam menilai kandidat',
    feedbackYes:
      'Itu tanda yang jelas bahwa kompetensi yang dinilai belum punya standar kemahiran yang konkret. Ketika dua penilai tidak sepakat, masalahnya bukan di kandidatnya — masalahnya di standar penilaian yang tidak pernah disepakati sebelumnya. Itulah yang tingkat kemahiran dengan anchor perilaku akan perbaiki.',
    feedbackNo:
      'Kalau memang begitu, ada dua kemungkinan: standar kemahiran Anda sudah cukup eksplisit sehingga semua penilai berangkat dari definisi yang sama — atau keputusan seleksinya selalu diambil oleh satu orang dan tidak pernah dibandingkan. Bab ini akan memastikan standar itu cukup konkret untuk bisa dibagikan ke siapa pun yang terlibat di seleksi.',
  },
  {
    id: 'c4-card-4',
    type: 'info',
    icon: Target,
    eyebrow: 'Solusinya',
    title: 'Skala Kemahiran dengan Anchor Perilaku — Bukan Label, tapi Deskripsi yang Bisa Diamati',
    body: [
      'Solusinya bukan mengganti kata "baik" dengan kata lain yang juga bisa berarti apa saja. Solusinya adalah menambahkan satu lapis di bawah nama kompetensi: deskripsi konkret tentang apa yang benar-benar terlihat di tiap level kemahiran — perilaku yang bisa diamati, bukan sifat abstrak.',
      'Inilah yang disebut anchor perilaku. Bukan "komunikasi yang baik" vs "komunikasi yang buruk." Tapi: "di level ini, orang ini bisa melakukan [tindakan spesifik yang bisa diamati] dalam [situasi konkret]." Standar itu tidak bergantung pada interpretasi penilai — karena sudah cukup konkret untuk diamati oleh siapa pun.',
      'Dengan anchor perilaku, dua manajer yang menilai kandidat yang sama berangkat dari definisi yang sama. Dan ketika mereka tidak sepakat, perbedaannya bisa diperdebatkan dengan merujuk ke anchor — bukan ke intuisi masing-masing.',
    ],
  },
  {
    id: 'c4-card-5',
    type: 'info',
    icon: BarChart2,
    eyebrow: 'Skala Kemahiran',
    title: 'Empat Level yang Bisa Dipakai untuk Semua Kompetensi — Dasar, Berkembang, Mahir, Ahli',
    body: [
      'Empat level ini berlaku untuk kompetensi apa pun di model Anda — fungsional, inti, maupun kepemimpinan. Bukan label nilai dari jelek ke bagus, tapi deskripsi kemampuan yang bisa Anda amati langsung di tempat kerja.',
      'Dasar: bisa melakukan dengan panduan atau pengawasan. Perlu arahan, template, atau dampingan untuk menghasilkan output yang acceptable. Berkembang: bisa melakukan secara mandiri untuk situasi standar — situasi yang familiar, tidak ada variasi besar, hasilnya konsisten tanpa perlu dipantau.',
      'Mahir: bisa melakukan secara mandiri untuk situasi kompleks atau tidak familiar, dan jadi rujukan orang lain ketika mereka menghadapi situasi serupa. Ahli: bisa melatih atau membimbing orang lain di area ini, menangani situasi paling sulit di konteks bisnis Anda, dan mengembangkan cara kerja di area itu — bukan hanya menjalankannya.',
    ],
  },
  {
    id: 'c4-card-6',
    type: 'info',
    icon: Eye,
    eyebrow: 'Tekniknya',
    title: 'Satu Pertanyaan yang Memisahkan Anchor Perilaku dari Label yang Cuma Pakai Nama Level Lain',
    body: [
      'Ada jebakan umum ketika menulis anchor perilaku: menuliskan ulang label levelnya dengan kata-kata berbeda. Contoh yang terlihat seperti anchor tapi bukan: "Level Mahir: komunikasinya mahir, penjelasannya jelas dan terstruktur, responsif terhadap pelanggan." Itu bukan anchor — itu deskripsi sifat, yang artinya masih sama subjektifnya dengan label awal.',
      'Pertanyaan yang memisahkan anchor dari label: "Kalau saya melihat orang ini kerja di hari biasa, apa yang benar-benar akan saya lihat mereka lakukan — atau tidak lakukan — di level ini?" Jawab dengan tindakan yang spesifik, situasi yang konkret, dan output yang bisa diobservasi.',
      'Anchor yang bisa dipakai: "Di level Mahir: mampu menjelaskan prosedur komplain yang kompleks ke pelanggan tanpa perlu membaca panduan, menyesuaikan penjelasannya berdasarkan reaksi pelanggan, dan menyelesaikan kasus tanpa eskalasi ke atasan bahkan untuk situasi yang tidak ada di skrip." Ini bisa Anda amati. Ini tidak bergantung pada intuisi penilai.',
    ],
  },
  {
    id: 'c4-card-7',
    type: 'info',
    icon: Search,
    eyebrow: 'Contoh Kerja — Versi Kabur',
    title: '"Komunikasi dengan Pelanggan" Tanpa Anchor: Bisa Dibaca Siapa Pun, Tidak Berguna untuk Siapa pun',
    body: [
      'Kita ambil satu kompetensi konkret: "komunikasi dengan pelanggan" untuk staff customer service. Ini versi yang sering ada di deskripsi jabatan — ada label level, tapi tanpa anchor perilaku.',
      'Level rendah: "Komunikasi dengan pelanggan kurang baik — belum bisa handle pelanggan dengan optimal." Level tinggi: "Komunikasi dengan pelanggan baik — mampu berkomunikasi secara efektif dan memberikan pelayanan yang memuaskan."',
      'Sekarang tanya: kalau Anda mewawancarai kandidat dengan deskripsi ini di tangan, pertanyaan apa yang akan Anda tanyakan untuk tahu kandidatnya ada di level mana? Kemungkinan besar Anda tidak bisa menjawab — karena deskripsi itu tidak cukup konkret untuk jadi dasar pertanyaan apa pun. Kalau dua pewawancara yang berbeda mencoba menggunakannya, mereka akan berakhir di kesimpulan yang berbeda.',
    ],
  },
  {
    id: 'c4-card-8',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Kerja — Versi Anchor Perilaku',
    title: '"Komunikasi dengan Pelanggan" dengan Anchor: Empat Level yang Bisa Langsung Dipakai',
    body: [
      'Kompetensi yang sama, tapi dengan anchor perilaku yang bisa diamati. Dasar: menjawab pertanyaan pelanggan yang familiar menggunakan skrip atau panduan yang tersedia. Perlu konfirmasi atasan sebelum memberi keputusan yang tidak ada di skrip. Belum bisa de-eskalasi ketika pelanggan mulai emosi tanpa bantuan. Berkembang: menangani pertanyaan dan komplain standar secara mandiri tanpa perlu panduan. Memberi keputusan dalam batas kewenangan tanpa eskalasi. Mulai tenang ketika pelanggan emosi, tapi masih bergantung pada framing yang sudah dipelajari.',
      'Mahir: menangani komplain kompleks yang tidak ada di skrip secara mandiri — menyesuaikan pendekatan berdasarkan tipe pelanggan dan situasi. Mampu de-eskalasi bahkan ketika pelanggan sangat emosi. Jadi rujukan rekan kerja untuk kasus-kasus sulit.',
      'Ahli: melatih rekan lain dalam teknik komunikasi dan de-eskalasi. Menangani kasus eskalasi tertinggi yang tidak bisa diselesaikan oleh siapa pun di tim. Mengidentifikasi pola keluhan yang berulang dan mengusulkan perubahan prosedur berdasarkan pengamatan langsung.',
    ],
  },
  {
    id: 'c4-card-9',
    type: 'multiple-choice',
    question:
      'Seorang staff customer service ditugaskan menangani komplain pelanggan besar yang marah karena pengiriman terlambat tiga kali berturut-turut. Dia menanganinya sendiri tanpa eskalasi, menyesuaikan penjelasannya ketika pelanggan semakin emosi, dan berhasil meyakinkan pelanggan untuk tidak membatalkan kontrak. Rekan kerja sering minta sarannya untuk kasus serupa yang sulit. Di skala kemahiran "komunikasi dengan pelanggan", dia ada di level mana?',
    options: [
      'Dasar — bisa menangani pertanyaan pelanggan dengan panduan atau skrip',
      'Berkembang — menangani kasus standar secara mandiri tanpa eskalasi',
      'Mahir — menangani situasi kompleks secara mandiri dan jadi rujukan tim',
      'Ahli — melatih orang lain dan menangani kasus tertinggi di tim',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Kemampuan menangani situasi kompleks yang tidak ada di skrip secara mandiri — dan menjadi rujukan rekan lain untuk kasus sulit — adalah anchor level Mahir. Bukan Ahli, karena tidak ada informasi bahwa dia melatih orang lain atau mengusulkan perubahan prosedur. Bukan Berkembang, karena situasi yang dihadapi jauh melampaui kasus standar.',
    errorFeedback:
      'Belum tepat. Perhatikan dua anchor kuncinya: (1) menangani situasi kompleks yang tidak ada di skrip secara mandiri, dan (2) menjadi rujukan rekan kerja untuk kasus-kasus sulit. Keduanya adalah anchor level Mahir. Level Ahli baru berlaku kalau ada bukti dia melatih orang lain atau menangani eskalasi tertinggi yang tidak bisa diselesaikan siapa pun di tim.',
  },
  {
    id: 'c4-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Pertanyaan kunci untuk menulis anchor perilaku yang konkret — bukan sekadar label level dengan kata lain — adalah: "Kalau saya melihat orang ini kerja, apa yang benar-benar akan saya lihat mereka ________ di level ini?"',
    options: [
      'lakukan atau tidak lakukan',
      'katakan atau ucapkan',
      'pikirkan atau rasakan',
      'rencanakan atau targetkan',
    ],
    correctAnswer: 'lakukan atau tidak lakukan',
    successFeedback:
      'Tepat. "Lakukan atau tidak lakukan" — bukan pikirkan, bukan rasakan, bukan rencanakan. Anchor perilaku hanya berguna kalau berbasis tindakan yang bisa diamati langsung. Itulah yang membuatnya bisa dipakai oleh dua penilai yang berbeda dan tetap menghasilkan penilaian yang konsisten.',
    errorFeedback:
      'Belum tepat. Anchor perilaku harus berbasis tindakan yang bisa diamati langsung — "lakukan atau tidak lakukan." Kalau harus menyimpulkan kondisi internal kandidat untuk menilai levelnya — apa yang dia pikirkan, rasakan, atau rencanakan — anchor itu belum konkret dan masih bergantung pada interpretasi penilai.',
  },
  {
    id: 'c4-card-11',
    type: 'info',
    icon: Star,
    eyebrow: 'Catatan Penting',
    title: 'Tidak Semua Kompetensi Butuh Level Ahli — Tentukan Minimum yang Dibutuhkan Perannya',
    body: [
      'Satu kesalahan umum setelah membaca tentang skala kemahiran: langsung menetapkan "harus Ahli" untuk semua kompetensi di semua peran. Itu tidak realistis — dan justru akan menyempitkan pool kandidat sampai tidak ada yang lolos.',
      'Untuk tiap kompetensi di model Anda, tanyakan: "level minimum berapa yang dibutuhkan peran ini supaya bisa berjalan dengan baik?" — bukan "level tertinggi apa yang bagus kalau dimiliki?" Untuk posisi staff customer service baru, "komunikasi dengan pelanggan" di level Berkembang mungkin sudah cukup untuk mulai bekerja produktif. Level Mahir bisa jadi ekspektasi setelah 6–12 bulan.',
      'Beberapa kompetensi boleh cukup di level Dasar untuk peran tertentu — misalnya kompetensi pelaporan keuangan untuk supervisor operasional yang punya staf admin sendiri. Yang penting bukan semua kompetensi di level tinggi, tapi setiap kompetensi ada di level yang cukup untuk peran itu menghasilkan output yang diharapkan.',
    ],
  },
  {
    id: 'c4-card-12',
    type: 'yes-no',
    question:
      'Untuk peran yang sedang Anda pikirkan, apakah ada kecenderungan menetapkan standar kemahiran tertinggi — Mahir atau Ahli — untuk hampir semua kompetensi, bukan karena perannya membutuhkan itu, tapi karena terasa "lebih aman" kalau kandidatnya semakin bagus?',
    yesLabel: 'Ada kecenderungan itu — selalu lebih baik kalau kandidatnya lebih capable',
    noLabel: 'Tidak ada — saya menetapkan standar berdasarkan apa yang peran itu benar-benar butuhkan',
    feedbackYes:
      'Logika itu terasa benar — tapi ada konsekuensi praktisnya. Kalau semua kompetensi di-set ke level Mahir atau Ahli, pool kandidat yang lolos screening jadi sangat sempit, waktu rekrutmen lebih panjang, dan ekspektasi yang dipasang tidak mencerminkan apa yang peran itu beneran butuhkan di hari pertama. Level minimum bukan standar rendah — itu standar yang realistis dan bisa diverifikasi.',
    feedbackNo:
      'Bagus. Menetapkan level minimum berdasarkan kebutuhan nyata perannya adalah cara yang benar. Di kartu workbook berikutnya, Anda akan menuliskannya secara eksplisit untuk kompetensi-kompetensi yang paling krusial di peran Anda.',
  },
  {
    id: 'c4-card-13',
    type: 'reflection',
    eyebrow: 'Entri Keempat · Buku Kerja Job Architecture',
    prompt:
      'Sekarang model kompetensi Anda punya standar kemahiran — bukan hanya nama kompetensi. Tetapkan level minimum untuk peran yang Anda bawa dari Bab 1.',
    fields: [
      {
        id: 'level-krusial',
        label:
          'Untuk kompetensi paling krusial di peran ini, level minimum apa yang dibutuhkan (Dasar/Berkembang/Mahir/Ahli) — dan seperti apa bentuk konkretnya di level itu?',
        placeholder:
          'Misalnya: kompetensi analisis pipeline di level Mahir — bisa membaca data penjualan dan mengidentifikasi area berisiko secara mandiri tanpa perlu dipandu. Atau: komunikasi pelanggan di level Berkembang — menangani komplain standar tanpa eskalasi...',
      },
      {
        id: 'level-cukup-dasar',
        label:
          'Kompetensi mana yang boleh cukup di level Dasar atau Berkembang saja untuk peran ini — dan kenapa?',
        placeholder:
          'Misalnya: pelaporan keuangan cukup di level Dasar karena ada staf admin yang handle itu, supervisor ini hanya memeriksa output-nya. Atau: semua kompetensi di peran ini dibutuhkan minimal di level Berkembang karena bekerja mandiri dari hari pertama...',
      },
    ],
  },
  {
    id: 'c4-card-14',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 5',
    title: 'Sekarang Anda Punya Standar yang Bisa Diukur — Bab Berikutnya Mulai Hari 2',
    body: [
      'Model kompetensi Anda sekarang punya dua lapisan: nama kompetensi dan level minimum yang dibutuhkan, dengan anchor perilaku yang bisa diobservasi. Itu mengubah "komunikasi yang baik" dari sifat abstrak jadi standar yang bisa diuji oleh siapa pun yang terlibat di seleksi.',
      'Bab 1 sampai 4 adalah Tahap 1 — model kompetensi. Anda selesaikan hari ini. Bab berikutnya mulai Hari 2: membongkar kenapa proses rekrutmen Anda sekarang kemungkinan besar belum benar-benar menguji standar ini — meskipun sudah berjalan dengan serius dan terasa terstruktur.',
    ],
  },
]
