import {
  AlertCircle,
  Clock,
  Users,
  Layers,
  BookOpen,
  Eye,
  Target,
  NotebookPen,
  ArrowRight,
  TrendingDown,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter1Cards: Card[] = [
  {
    id: 'c1-card-1',
    type: 'info',
    icon: Users,
    eyebrow: 'Bab 1 · Jebakan Kelihatannya Cocok',
    title: 'Orangnya Enak Diajak Ngobrol — Tapi Tiga Bulan Kemudian Baru Ketahuan Nggak Bisa Kerjanya',
    body: [
      'Seorang pemilik bisnis butuh staff admin-keuangan. Proses seleksinya serius — ada tiga tahap wawancara, semua kandidat dites. Yang dipilih: seseorang yang komunikatif banget, jawab semua pertanyaan dengan lancar, chemistry-nya nyambung sama seluruh tim.',
      'Tiga bulan kemudian ketahuan: dia tidak bisa membuat laporan arus kas dari nol. Bisa input angka kalau template sudah ada. Tapi kalau harus merancang laporan sendiri, catch error di spreadsheet, atau explain angka ke pemilik — berhenti.',
      'Siapa yang salah? Bukan dia. Wawancaranya tidak pernah menguji skill itu secara spesifik. Yang diuji: kecocokan, komunikasi, kesan umum. Dia lulus di semua yang diuji — dan gagal di semua yang tidak pernah diuji.',
    ],
  },
  {
    id: 'c1-card-2',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Pola Kedua',
    title: 'Deskripsi Jabatan yang Isinya Cuma "Input Data, Balas Email, Handle Komplain"',
    body: [
      'Ambil deskripsi jabatan yang Anda pakai sekarang. Kemungkinan besar isinya daftar tugas: "bertanggung jawab atas laporan penjualan," "menangani komunikasi dengan klien," "koordinasi dengan tim produksi."',
      'Yang tidak ada: seberapa bagus standar yang diharapkan di tiap tugas itu. Apakah "handle komplain" berarti cukup jawab dengan sopan, atau harus bisa resolve 90% kasus tanpa eskalasi? Apakah "laporan penjualan" berarti isi template yang sudah jadi, atau harus bisa analisis tren dan kasih rekomendasi?',
      'Deskripsi jabatan sebagai daftar tugas hanya menjawab "kerjanya apa" — tidak pernah menjawab "seberapa bagus harus bisa kerjanya." Itu celah yang mengundang salah rekrut masuk tanpa pernah ketahuan di awal.',
    ],
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: TrendingDown,
    eyebrow: 'Pola Ketiga',
    title: 'Dipromosikan karena "Udah Lama dan Rajin" — Bukan karena Benar-benar Siap',
    body: [
      'Staff operasional sudah empat tahun di bisnis. Rajin, tidak pernah bermasalah, semua orang suka. Pemilik memutuskan dia layak jadi supervisor. Wajar kelihatannya.',
      'Enam bulan setelah promosi: dia struggling. Bisa kerjakan tugasnya sendiri, tapi tidak bisa lead tim — tidak bisa kasih feedback, tidak bisa handle konflik antar anggota, tidak bisa prioritaskan pekerjaan tim di situasi tekanan. Skill yang dibutuhkan peran baru sama sekali berbeda dari skill yang dia buktikan selama empat tahun.',
      'Promosi itu bukan hukuman — tapi keputusannya diambil tanpa pernah memeriksa apakah kompetensi yang dibutuhkan peran supervisor sudah ada. "Sudah lama dan rajin" bukan standar kompetensi. Itu alasan yang terasa cukup, tapi tidak pernah cukup.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'yes-no',
    question:
      'Dari tiga pola tadi — interview yang lancar tapi skill spesifiknya tidak pernah diuji, deskripsi jabatan yang isinya cuma daftar tugas, atau promosi karena "sudah lama dan rajin" — ada yang terasa familiar di bisnis Anda?',
    yesLabel: 'Ada, salah satu atau lebih pernah terjadi di bisnis saya',
    noLabel: 'Nggak ada, rekrutmen dan promosi kami sudah berbasis kompetensi yang jelas',
    feedbackYes:
      'Wajar. Ini bukan soal Anda tidak serius dalam rekrutmen — justru sebaliknya. Masalahnya bukan niatnya. Masalahnya adalah proses yang dipakai tidak pernah dirancang untuk menguji hal yang benar. Itulah yang modul ini akan perbaiki.',
    feedbackNo:
      'Kalau memang begitu, Anda sudah jauh di depan kebanyakan bisnis SME. Tapi baca terus — bab ini akan kasih Anda cara memverifikasi apakah sistem yang Anda percaya sudah berjalan itu benar-benar berbasis kompetensi, atau hanya terasa seperti itu.',
  },
  {
    id: 'c1-card-5',
    type: 'info',
    icon: Layers,
    eyebrow: 'Ide Utama',
    title: 'Arsitektur Jabatan Itu Dua Tahap — dan Kebanyakan Bisnis Melewatkan Tahap Pertama',
    body: [
      'Ada dua hal yang harus ada sebelum rekrutmen bisa berjalan dengan benar. Tahap 1: model kompetensi — definisi konkret tentang apa artinya "bagus" untuk sebuah peran, bukan hanya daftar tugasnya. Kompetensi apa yang dibutuhkan? Seberapa mahir? Bagaimana kita tahu seseorang sudah mencapai standar itu?',
      'Tahap 2: proses rekrutmen berbasis kompetensi — screening yang benar-benar menguji kompetensi itu secara terstruktur, bukan mengandalkan kesan interview. Bukan "apakah orangnya kelihatan cocok?" tapi "apakah ada bukti nyata bahwa dia punya kompetensi yang dibutuhkan peran ini?"',
      'Kebanyakan bisnis SME langsung lompat ke Tahap 2 tanpa pernah menyelesaikan Tahap 1. Jadi proses rekrutmennya tidak punya fondasi yang solid untuk diuji — dan hasilnya bergantung pada intuisi, bukan data.',
    ],
  },
  {
    id: 'c1-card-6',
    type: 'info',
    icon: Eye,
    eyebrow: 'Istilahnya',
    title: '"Jebakan Kelihatannya Cocok": Keputusan yang Berasa Benar tapi Tidak Pernah Diverifikasi',
    body: [
      '"Jebakan kelihatannya cocok" adalah keputusan rekrutmen atau promosi yang diambil berdasarkan kesan umum yang enak — orangnya komunikatif, attitude-nya positif, chemistry-nya nyambung sama tim — tanpa pernah benar-benar mengonfirmasi apakah kompetensi spesifik yang dibutuhkan perannya sudah ada.',
      'Bahayanya bukan karena kesan itu salah. Bahayanya adalah kesan itu menggantikan verifikasi. Kandidatnya enak diajak ngobrol → kita asumsikan dia bisa kerja dengan baik. Orangnya sopan dan antusias → kita asumsikan dia punya judgment yang dibutuhkan perannya. Tapi keduanya adalah lompatan logika — bukan bukti.',
      'Bisnis yang jatuh ke jebakan ini bukan karena tidak hati-hati. Justru sebaliknya — mereka sering merasa sudah melakukan seleksi dengan serius. Masalahnya: yang diseleksi bukan yang seharusnya.',
    ],
  },
  {
    id: 'c1-card-7',
    type: 'multiple-choice',
    question:
      'Seorang manajer melakukan tiga putaran wawancara untuk kandidat kepala divisi. Semuanya berjalan lancar — kandidatnya pintar, jawabannya terstruktur, semua pewawancara setuju "orangnya pas banget." Tidak ada uji kasus atau simulasi kerja. Proses ini masuk kategori apa?',
    options: [
      'Proses yang sudah baik — tiga putaran wawancara sudah menunjukkan keseriusan seleksi',
      'Jebakan kelihatannya cocok — kemampuan presentasi di wawancara dikonfirmasi, kompetensi jabatannya tidak',
      'Tidak bisa dinilai tanpa tahu isi pertanyaan wawancaranya',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Jumlah putaran wawancara bukan ukuran kualitas seleksi. Yang diuji di tiga putaran itu tetap kesan dan kemampuan presentasi — bukan kompetensi jabatan yang spesifik. Tanpa simulasi kerja atau uji kasus terstruktur, yang dikonfirmasi hanya bahwa kandidatnya pintar di wawancara.',
    errorFeedback:
      'Belum tepat. Banyak putaran wawancara tidak otomatis berarti kompetensinya sudah diverifikasi — itu hanya berarti lebih banyak kesan yang dikumpulkan. Yang dibutuhkan adalah alat seleksi yang benar-benar menguji kompetensi spesifik perannya, bukan seberapa bagus kandidat menjawab pertanyaan wawancara.',
  },
  {
    id: 'c1-card-8',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Kalau Anda Sudah Ikut Modul 6',
    title: 'Siklus Coaching dan Tujuan Kinerja Anda Sudah Ada — tapi Itu Mengasumsikan Standar yang Jelas',
    body: [
      'Kalau Anda sudah ikut Modul 6: sekarang Anda mungkin punya siklus penetapan tujuan kinerja, ritme coaching 1-on-1, dan jalur tindakan korektif yang terstruktur. Itu fondasi yang kuat.',
      'Tapi semua sistem itu bekerja dengan asumsi bahwa Anda sudah tahu standar yang jelas untuk sebuah peran — kompetensi apa yang diharapkan, di level kemahiran seperti apa. Kalau standar itu belum pernah didefinisikan secara eksplisit, coaching Anda hanya bermain di permukaan.',
      'Kalau belum ikut Modul 6, tidak masalah — bab ini jalan dengan deskripsi jabatan apa pun yang sudah ada di bisnis Anda, seformal atau seinformal apa pun bentuknya. Yang penting: model kompetensi adalah fondasi yang harus dikerjakan sebelum rekrutmen atau manajemen kinerja bisa punya tolok ukur yang solid.',
    ],
  },
  {
    id: 'c1-card-9',
    type: 'info',
    icon: Clock,
    eyebrow: 'Dua Jenis Peran',
    title: 'Peran yang Punya Standar Kompetensi — vs Peran yang Cuma Punya Judul dan Daftar Tugas',
    body: [
      'Ada dua jenis peran yang hasilnya sangat berbeda, dan perbedaannya bukan soal seberapa keras karyawannya bekerja.',
      'Peran dengan standar kompetensi: orang yang direkrut atau dipromosikan tahu persis apa yang dinilai — kompetensi apa, di tingkat kemahiran seperti apa, dengan bukti seperti apa. Proses seleksinya menguji itu secara terstruktur. Siapa pun yang lolos, lolos karena alasan yang bisa dijelaskan.',
      'Peran tanpa standar kompetensi: siapa pun yang "kelihatannya oke" bisa masuk tanpa pernah benar-benar diuji. Rekrutmen bergantung pada feeling pewawancara. Promosi bergantung pada seberapa disukai orang itu. Dan ketika ada yang tidak perform, tidak ada tolok ukur untuk mendiagnosis masalahnya.',
    ],
  },
  {
    id: 'c1-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Keputusan rekrutmen yang diambil berdasarkan kesan umum yang enak — komunikatif, chemistry nyambung, attitude positif — tanpa pernah mengonfirmasi kompetensi spesifik yang dibutuhkan perannya, disebut jebakan "________."',
    options: ['kelihatannya cocok', 'proses panjang', 'wawancara baik', 'terlalu selektif'],
    correctAnswer: 'kelihatannya cocok',
    successFeedback:
      'Tepat. "Jebakan kelihatannya cocok" — keputusan yang terasa benar karena berdasarkan kesan yang nyaman, tapi tidak pernah diverifikasi dengan pengujian kompetensi yang spesifik. Kebanyakan proses rekrutmen SME berjalan di sini.',
    errorFeedback:
      'Belum tepat. Istilahnya "kelihatannya cocok" — jebakan yang terjadi ketika keputusan rekrutmen atau promosi bergantung pada kesan umum yang enak, tanpa pengujian kompetensi yang konkret dan terstruktur.',
  },
  {
    id: 'c1-card-11',
    type: 'yes-no',
    question:
      'Ambil satu deskripsi jabatan yang sedang Anda pakai sekarang. Di dalamnya, apakah ada kompetensi spesifik dengan tingkat kemahiran yang jelas — atau isinya daftar tugas tanpa standar seberapa bagus harus dikerjakan?',
    yesLabel: 'Ada kompetensi spesifik dengan tingkat kemahiran yang jelas',
    noLabel: 'Isinya daftar tugas — tanpa standar kemahiran yang konkret',
    feedbackYes:
      'Kalau memang ada, Anda sudah punya fondasi. Di bab-bab berikutnya kita akan verifikasi apakah model kompetensi itu sudah mencakup tiga dimensi — inti, fungsional, dan kepemimpinan — dan apakah tingkat kemahirannya cukup spesifik untuk bisa diuji di seleksi.',
    feedbackNo:
      'Itu jawaban yang jujur — dan itu jawaban mayoritas bisnis SME. Daftar tugas menjawab "kerjanya apa" tapi tidak pernah menjawab "seberapa bagus harus bisa kerjanya." Itulah yang akan kita bangun di modul ini.',
  },
  {
    id: 'c1-card-12',
    type: 'sort-list',
    question: 'Urutkan dua tahap arsitektur jabatan dari yang harus dikerjakan pertama:',
    items: [
      'Proses rekrutmen berbasis kompetensi — screening terstruktur yang menguji kompetensi secara konkret',
      'Model kompetensi — definisi konkret tentang apa artinya "bagus" untuk sebuah peran',
    ],
    correctAnswer: [
      'Model kompetensi — definisi konkret tentang apa artinya "bagus" untuk sebuah peran',
      'Proses rekrutmen berbasis kompetensi — screening terstruktur yang menguji kompetensi secara konkret',
    ],
    successFeedback:
      'Tepat. Model kompetensi dulu — baru ada sesuatu yang konkret untuk diuji di rekrutmen. Tanpa Tahap 1, Tahap 2 tidak punya fondasi. Itu kenapa kebanyakan rekrutmen SME berakhir di jebakan kelihatannya cocok — mereka langsung lompat ke Tahap 2 tanpa pernah selesaikan Tahap 1.',
    errorFeedback:
      'Belum tepat. Tahap 1 adalah model kompetensi — tanpa ini, tidak ada yang bisa diuji di rekrutmen. Tahap 2 baru bisa efektif kalau ada standar yang jelas dari Tahap 1. Kebanyakan bisnis membalikkan urutannya — dan hasilnya bergantung pada feeling, bukan bukti.',
  },
  {
    id: 'c1-card-13',
    type: 'info',
    icon: Target,
    eyebrow: 'Peta Modul Ini',
    title: 'Dua Tahap, Delapan Bab — Ini Peta yang Akan Kita Gunakan',
    body: [
      'Modul ini membangun arsitektur jabatan lengkap dari dua sisi: model kompetensi yang solid, dan rekrutmen yang benar-benar menguji kompetensi itu.',
      'Tahap 1 — Model Kompetensi: Bab 2 kasih Anda peta penuh arsitektur jabatan. Bab 3 bangun model kompetensi — Kompetensi Inti, Fungsional, dan Kepemimpinan. Bab 4 tetapkan tingkat kemahiran yang konkret dan bisa diukur.',
      'Tahap 2 — Rekrutmen Berbasis Kompetensi: Bab 5 diagnosa kenapa rekrutmen ad-hoc selalu bermasalah. Bab 6 rancang alat screening berbasis kompetensi — Behavioral Event Interviewing dan rubrik seleksi. Bab 7 adalah lokakarya merancang profil kompetensi dan alat seleksi untuk satu peran nyata. Bab 8 instal arsitektur itu jadi sistem yang berjalan.',
    ],
  },
  {
    id: 'c1-card-14',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Konkret',
    title: 'Sebutkan Satu Peran — yang Sedang Anda Rekrut, atau yang Pernah Salah Rekrut',
    body: [
      'Modul ini paling berguna kalau ada satu peran konkret yang Anda bawa sepanjang perjalanan — satu peran yang jadi titik uji dari semua yang akan dibangun di sini.',
      'Bisa peran yang sedang Anda rekrut sekarang — lowongan yang terbuka, atau kebutuhan yang sudah Anda tunda. Atau bisa peran yang pernah salah rekrut atau salah promosi — di mana Anda tahu ada yang tidak pas, meski prosesnya sudah dijalankan dengan serius.',
      'Di kartu berikutnya, tuliskan satu peran konkret. Itu yang akan menjadi titik referensi Anda di modul ini.',
    ],
  },
  {
    id: 'c1-card-15',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja Job Architecture',
    prompt:
      'Sebutkan satu peran di bisnis Anda — yang sedang Anda rekrut, atau yang pernah salah rekrut atau salah promosi — dan gimana Anda tahu ada yang nggak pas.',
    fields: [
      {
        id: 'role-name',
        label: 'Peran apa yang ada di pikiran Anda?',
        placeholder:
          'Misalnya: staff admin-keuangan, kepala operasional, supervisor produksi, sales regional...',
      },
      {
        id: 'mismatch-signal',
        label: 'Gimana Anda tahu ada yang nggak pas — atau kenapa peran ini jadi titik uji yang tepat?',
        placeholder:
          'Misalnya: waktu interview semua oke tapi skill teknisnya tidak ada, atau saya sedang rekrut sekarang dan belum yakin cara menguji kandidatnya...',
      },
    ],
  },
  {
    id: 'c1-card-16',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 2',
    title: 'Sekarang Anda Punya Satu Peran Konkret di Kepala',
    body: [
      'Anda baru saja mengidentifikasi satu peran yang akan jadi titik uji sepanjang modul ini. Itu lebih bermakna dari sekadar setuju bahwa rekrutmen berbasis kompetensi itu penting.',
      'Sekarang Anda punya satu peran konkret di kepala. Bab berikutnya kasih Anda peta lengkap dua tahap arsitektur jabatan, biar Anda tahu persis bagian mana yang bolong.',
    ],
  },
]
