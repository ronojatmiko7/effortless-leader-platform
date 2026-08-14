import {
  Map,
  Layers,
  Target,
  BarChart2,
  Search,
  Link2,
  Clock,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter2Cards: Card[] = [
  {
    id: 'c2-card-1',
    type: 'info',
    icon: Map,
    eyebrow: 'Bab 2 · Peta Arsitektur Jabatan',
    title: 'Anda Sudah Punya Satu Peran di Kepala — Sekarang Saatnya Lihat Petanya',
    body: [
      'Di Bab 1, Anda menyebut satu peran konkret — entah yang sedang Anda rekrut sekarang, atau yang pernah bermasalah. Mungkin sudah bisa Anda gambarin signal-nya: interview yang berjalan lancar tapi skill spesifiknya tidak pernah diuji, deskripsi jabatan yang isinya cuma daftar tugas, atau promosi yang berujung struggling enam bulan kemudian.',
      'Itu titik mulai yang benar. Tapi satu peran konkret tanpa peta arsitekturnya seperti punya alamat tujuan tanpa tahu di mana jalannya putus.',
      'Bab ini kasih Anda petanya. Setelah bab ini, Anda akan tahu persis dua tahap yang harus ada di setiap arsitektur jabatan yang solid — dan bisa petakan bisnis Anda sekarang ada di mana di peta itu.',
    ],
  },
  {
    id: 'c2-card-2',
    type: 'info',
    icon: Layers,
    eyebrow: 'Arsitektur Jabatan',
    title: 'Dua Tahap, Satu Sistem — dan Keduanya Harus Ada',
    body: [
      'Arsitektur jabatan yang berfungsi punya dua tahap yang saling menyambung. Bukan dua pilihan yang bisa dipilih salah satu, bukan dua pendekatan yang sama-sama valid — dua tahap yang keduanya harus ada dan harus dikerjakan dengan urutan yang benar.',
      'Tahap 1: Model Kompetensi. Definisi konkret tentang apa artinya "bagus" untuk sebuah peran — kompetensi apa yang dibutuhkan, di tingkat kemahiran seperti apa, dengan bukti seperti apa.',
      'Tahap 2: Rekrutmen Berbasis Bukti. Alat seleksi yang diturunkan langsung dari model kompetensi di Tahap 1 — cara menguji dan membandingkan kandidat berdasarkan kompetensi yang sudah didefinisikan, bukan berdasarkan kesan wawancara.',
    ],
  },
  {
    id: 'c2-card-3',
    type: 'info',
    icon: Target,
    eyebrow: 'Tahap 1',
    title: 'Model Kompetensi: Jawaban untuk Pertanyaan yang Jarang Benar-benar Dijawab',
    body: [
      'Model kompetensi menjawab satu pertanyaan yang terdengar sederhana tapi jarang benar-benar dijawab: "Karyawan seperti apa yang benar-benar sukses di peran ini — dan bagaimana kita tahu mereka sudah mencapai standar itu?"',
      'Ini bukan daftar tugas. "Mengelola laporan keuangan" itu tugas. Kompetensi adalah: kemampuan menganalisis arus kas dan mengidentifikasi anomali tanpa dipandu, di tingkat yang bisa dikerjakan mandiri tanpa eskalasi. Perbedaan itu kelihatan kecil tapi menentukan apakah Anda bisa menguji kandidat dengan benar atau tidak.',
      'Kalau tidak ada model kompetensi yang eksplisit, siapa pun yang "kelihatannya bisa" bisa masuk — karena tidak ada standar yang jelas untuk diuji.',
    ],
  },
  {
    id: 'c2-card-4',
    type: 'info',
    icon: Layers,
    eyebrow: 'Tahap 1 — Tiga Lapis',
    title: 'Tiga Dimensi Kompetensi: Inti, Fungsional, dan Kepemimpinan',
    body: [
      'Model kompetensi yang solid mencakup tiga lapis. Kompetensi Inti: hal-hal yang berlaku untuk semua orang di bisnis Anda — integritas, orientasi hasil, kemampuan berkomunikasi di konteks bisnis Anda. Ini fondasi yang tidak bisa dikompromikan, peran apa pun.',
      'Kompetensi Fungsional: skill teknis dan kemampuan spesifik yang dibutuhkan peran itu — berbeda untuk staff keuangan, staff operasional, atau kepala divisi. Ini yang paling sering hilang dari deskripsi jabatan dan paling sering jadi sumber salah rekrut.',
      'Kompetensi Kepemimpinan: untuk peran yang memimpin orang lain — kemampuan mengelola kinerja, memberi feedback yang konstruktif, mengambil keputusan di situasi ambigu, membangun tim yang berfungsi. Tanpa lapisan ini, promosi ke peran manajerial sering menghasilkan individual performer yang bagus tapi gagal sebagai pemimpin.',
    ],
  },
  {
    id: 'c2-card-5',
    type: 'info',
    icon: BarChart2,
    eyebrow: 'Tahap 1 — Tingkat Kemahiran',
    title: 'Kompetensi Saja Tidak Cukup — Harus Ada Tingkat Kemahiran yang Bisa Diukur',
    body: [
      'Mengatakan "kandidat harus punya kompetensi analisis data" itu lebih baik dari daftar tugas — tapi belum cukup. Di tingkat kemahiran berapa? Bisa pakai Excel dengan formula dasar, atau harus bisa bangun model dari raw data? Bisa baca laporan yang sudah jadi, atau harus bisa analisis tren dan kasih rekomendasi tanpa dipandu?',
      'Tingkat kemahiran yang tidak didefinisikan membuat kompetensi tidak bisa diuji — karena hampir semua kandidat bisa klaim punya kompetensinya. Yang dibutuhkan adalah standar yang konkret: kompetensi X di level Y, dibuktikan dengan kemampuan melakukan Z.',
      'Model kompetensi yang berfungsi bukan hanya daftar kompetensi, tapi kompetensi dengan tingkat kemahiran yang cukup spesifik untuk bisa jadi dasar pengujian nyata di proses seleksi.',
    ],
  },
  {
    id: 'c2-card-6',
    type: 'info',
    icon: Search,
    eyebrow: 'Tahap 2',
    title: 'Rekrutmen Berbasis Bukti: Alat Seleksi yang Diturunkan dari Model Kompetensi',
    body: [
      'Tahap 2 adalah cara Anda menguji dan membandingkan kandidat — bukan berdasarkan kesan wawancara umum, tapi berdasarkan bukti konkret yang diturunkan langsung dari model kompetensi di Tahap 1.',
      'Dua alat utama di Tahap 2: Behavioral Event Interviewing (BEI) — pertanyaan terstruktur yang meminta kandidat menceritakan situasi nyata di masa lalu untuk membuktikan kompetensi spesifik. Bukan "ceritakan tentang diri Anda," tapi "ceritakan situasi spesifik di mana Anda harus [kompetensi X] — apa yang terjadi, apa yang Anda lakukan, apa hasilnya?"',
      'Dan rubrik seleksi — kriteria penilaian yang jelas untuk membandingkan jawaban kandidat secara konsisten. Hasilnya: keputusan rekrutmen yang bisa dijelaskan dan dipertanggungjawabkan, bukan bergantung pada gut feel pewawancara.',
    ],
  },
  {
    id: 'c2-card-7',
    type: 'info',
    icon: Link2,
    eyebrow: 'Koneksi Dua Tahap',
    title: 'Tanpa Tahap 1, Tahap 2 Tidak Punya Apa-apa yang Solid untuk Diuji',
    body: [
      'Ini poin paling penting di bab ini: dua tahap itu tidak bisa berdiri sendiri-sendiri. Tahap 2 hanya bisa efektif kalau Tahap 1 sudah dikerjakan. Tanpa model kompetensi yang jelas, pertanyaan BEI tidak tahu apa yang ingin dibuktikan — dan rubrik seleksi tidak punya kriteria yang bisa diisi.',
      'Yang terjadi di kebanyakan bisnis SME: mereka punya proses wawancara (Tahap 2 versi sederhana), tapi tidak punya model kompetensi (Tahap 1). Wawancaranya berjalan — mungkin bahkan terlihat terstruktur, banyak pertanyaan, ada checklist penilaian — tapi ujung-ujungnya tetap bergantung pada gut feel, karena tidak ada kriteria yang jelas dari awal.',
      'Banyak pertanyaan wawancara + checklist rapi = kelihatannya serius. Tapi kalau tidak ada model kompetensi di belakangnya, itu administrasi yang terorganisir, bukan seleksi berbasis kompetensi.',
    ],
  },
  {
    id: 'c2-card-8',
    type: 'info',
    icon: Clock,
    eyebrow: 'Kenapa Tahap 1 Selalu Dilewati',
    title: 'Posisi Kosong Kerasa Mendesak — Bangun Model Kompetensi Kerasa Kayak Proyek yang Bisa Ditunda',
    body: [
      'Ada alasan konkret kenapa kebanyakan bisnis SME lompat langsung ke rekrutmen tanpa pernah selesaikan model kompetensi: tekanan urgensinya tidak seimbang. Posisi yang kosong terasa mendesak sekarang — ada pekerjaan yang tidak dikerjakan, ada pelanggan yang tidak dilayani, ada deadline yang terancam.',
      'Bangun model kompetensi, sebaliknya, terasa kayak proyek HR besar tanpa deadline yang jelas. Bisa dikerjakan nanti, setelah posisi terisi, setelah situasi tidak se-mendesak ini. Dan "nanti" itu tidak pernah datang.',
      'Hasilnya: rekrutmen berjalan tanpa fondasi. Posisi terisi — dan tiga bulan kemudian baru ketahuan bahwa yang diuji di seleksi bukan yang seharusnya diuji.',
    ],
  },
  {
    id: 'c2-card-9',
    type: 'yes-no',
    question:
      'Pernah ada situasi di bisnis Anda di mana posisi kosong atau kebutuhan rekrutmen terasa sangat mendesak — sampai Anda rekrut tanpa sempat memikirkan standar kompetensi yang spesifik terlebih dahulu?',
    yesLabel: 'Pernah — tekanan isi posisi selalu lebih terasa daripada bangun modelnya dulu',
    noLabel: 'Belum — kami selalu punya waktu definisikan standar sebelum rekrut',
    feedbackYes:
      'Hampir semua bisnis SME pernah di sini. Bukan karena tidak serius, tapi karena model kompetensinya memang belum ada — jadi tidak ada cara cepat untuk tahu standar yang dibutuhkan. Di sinilah model kompetensi yang sudah dibangun di depan menghemat banyak waktu di setiap rekrutmen berikutnya.',
    feedbackNo:
      'Bagus kalau memang begitu. Di bab-bab berikutnya kita akan periksa apakah standar yang Anda definisikan itu sudah cukup spesifik untuk bisa diuji secara terstruktur — atau masih ada celah yang bisa membiarkan jebakan kelihatannya cocok masuk.',
  },
  {
    id: 'c2-card-10',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Peta Sisa Modul',
    title: 'Bab 3–7 Mengikuti Dua Tahap Ini — Ini yang Akan Dibangun',
    body: [
      'Bab 3 dan 4 fokus di Tahap 1: Bab 3 membangun model kompetensi — tiga lapis (Inti, Fungsional, Kepemimpinan) untuk peran yang Anda bawa dari Bab 1. Bab 4 menetapkan tingkat kemahiran yang konkret dan bisa diukur untuk tiap kompetensi itu.',
      'Bab 5 dan 6 fokus di Tahap 2: Bab 5 mendiagnosis kenapa rekrutmen ad-hoc selalu bermasalah bahkan ketika dilakukan dengan serius. Bab 6 merancang alat seleksi berbasis kompetensi — Behavioral Event Interviewing dan rubrik seleksi yang diturunkan langsung dari model kompetensi Anda.',
      'Bab 7 menyatukan keduanya: lokakarya merancang profil kompetensi dan alat seleksi untuk satu peran nyata — peran yang Anda bawa dari Bab 1. Itu yang akan jadi paket arsitektur jabatan lengkap yang bisa langsung Anda pakai.',
    ],
  },
  {
    id: 'c2-card-11',
    type: 'yes-no',
    question:
      'Di bisnis Anda sekarang, apakah ada model kompetensi yang eksplisit untuk peran-peran yang ada — kompetensi konkret dengan tingkat kemahiran yang bisa diukur, bukan hanya daftar tugas?',
    yesLabel: 'Ada — dan dipakai sebagai acuan di rekrutmen dan promosi',
    noLabel: 'Belum ada — atau ada tapi masih berupa daftar tugas tanpa standar kemahiran yang jelas',
    feedbackYes:
      'Kalau memang ada, Anda sudah punya fondasi yang tidak dimiliki kebanyakan bisnis SME. Di Bab 3 dan 4, kita akan verifikasi apakah model kompetensi itu sudah mencakup tiga dimensi yang dibutuhkan dan apakah tingkat kemahirannya cukup spesifik untuk bisa diuji secara terstruktur.',
    feedbackNo:
      'Itu jawaban yang jujur — dan itu jawaban mayoritas bisnis SME. Daftar tugas menjawab "kerjanya apa" tapi tidak pernah menjawab "seberapa bagus harus bisa kerjanya." Bab 3 dan 4 akan membangun itu dari awal untuk peran yang Anda bawa.',
  },
  {
    id: 'c2-card-12',
    type: 'yes-no',
    question:
      'Di proses rekrutmen atau promosi Anda sekarang, apakah ada alat seleksi terstruktur — pertanyaan behavioral yang spesifik atau rubrik penilaian berbasis kompetensi — atau masih mengandalkan wawancara bebas dan kesan pewawancara?',
    yesLabel: 'Ada alat seleksi terstruktur yang kami pakai konsisten',
    noLabel: 'Belum ada — masih wawancara bebas atau bergantung pada kesan pewawancara',
    feedbackYes:
      'Bagus. Di Bab 6 kita akan periksa apakah alat seleksi itu diturunkan langsung dari model kompetensi — atau hanya terstruktur secara administratif tapi tidak benar-benar menguji kompetensi yang dibutuhkan perannya.',
    feedbackNo:
      'Jujur dan umum. Wawancara bebas bisa kelihatan produktif karena ada percakapan yang terjadi — tapi tanpa alat seleksi berbasis kompetensi, yang dikonfirmasi hanya kemampuan kandidat untuk tampil baik di wawancara, bukan kemampuannya untuk perform di perannya.',
  },
  {
    id: 'c2-card-13',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis merekrut staff admin-keuangan. Prosesnya serius: tiga putaran wawancara dengan banyak pertanyaan. Deskripsi jabatannya hanya bilang "bertanggung jawab atas laporan keuangan dan arus kas" — tidak ada definisi tentang tingkat kemahiran yang dibutuhkan. Kandidat terpilih komunikatif, menjawab dengan percaya diri, semua pewawancara setuju "orangnya cocok." Tiga bulan kemudian ketahuan tidak bisa buat laporan arus kas dari nol. Masalah utamanya ada di tahap mana?',
    options: [
      'Masalah Tahap 2 — alat seleksinya tidak terstruktur, pertanyaan wawancaranya tidak menguji skill yang dibutuhkan',
      'Masalah Tahap 1 — tidak ada model kompetensi dengan standar yang jelas, jadi tidak ada yang bisa diuji secara konkret',
      'Masalah di kedua tahap, tapi yang paling mendasar ada di Tahap 1',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Masalah akarnya ada di Tahap 1: tidak ada definisi konkret tentang apa artinya "bagus" untuk peran itu — kompetensi spesifik apa yang dibutuhkan, di tingkat kemahiran berapa. Karena Tahap 1 kosong, Tahap 2 pun tidak punya apa-apa yang solid untuk diuji — wawancaranya berlangsung tapi tidak bisa menguji hal yang benar.',
    errorFeedback:
      'Belum tepat. Coba perhatikan lebih dalam: masalah paling mendasar bukan cara wawancaranya, tapi tidak adanya definisi tentang "seberapa bagus harus bisa mengerjakan laporan keuangan." Tanpa standar itu di Tahap 1, tidak ada alat wawancara apa pun yang bisa menyelamatkan rekrutmennya — karena tidak ada yang tahu apa yang seharusnya diuji.',
  },
  {
    id: 'c2-card-14',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis mempromosikan staff ke posisi supervisor. Mereka punya deskripsi jabatan supervisor yang rinci: kompetensi apa yang dibutuhkan — termasuk kemampuan memberikan feedback, mengelola konflik tim, dan membuat keputusan di situasi tekanan. Tapi proses seleksi promosinya hanya satu percakapan singkat dengan atasan: "Gimana menurut kamu kalau kamu jadi supervisor?" Kandidat yang dipilih ternyata struggling setelah promosi. Masalah utamanya ada di tahap mana?',
    options: [
      'Masalah Tahap 1 — model kompetensinya tidak cukup spesifik untuk bisa diuji',
      'Masalah Tahap 2 — model kompetensi ada tapi tidak ada alat seleksi yang benar-benar mengujinya',
      'Bukan masalah proses — orangnya memang tidak cocok untuk peran supervisor',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Tahap 1-nya sudah ada — kompetensi yang dibutuhkan supervisor sudah didefinisikan dengan rinci. Yang tidak ada adalah Tahap 2: proses seleksi yang benar-benar menguji apakah kompetensi itu ada pada kandidatnya sebelum promosi diputuskan. Satu pertanyaan hipotetikal tidak membuktikan apa-apa — itu hanya menguji kemampuan menjawab pertanyaan, bukan kemampuan memimpin.',
    errorFeedback:
      'Belum tepat. Perhatikan bahwa deskripsi jabatannya sudah rinci dan mencakup kompetensi yang tepat — Tahap 1 sudah ada. Yang tidak ada: proses seleksi yang benar-benar menguji kompetensi itu sebelum promosi diputuskan. Satu pertanyaan hipotetikal bukan alat seleksi berbasis kompetensi — itulah masalah Tahap 2-nya.',
  },
  {
    id: 'c2-card-15',
    type: 'reflection',
    eyebrow: 'Entri Kedua · Buku Kerja Job Architecture',
    prompt:
      'Dari dua tahap arsitektur jabatan — model kompetensi dan rekrutmen berbasis bukti — nilai di mana bisnis Anda sekarang berdiri.',
    fields: [
      {
        id: 'weakest-stage',
        label:
          'Dari dua tahap — model kompetensi (Tahap 1) dan rekrutmen berbasis bukti (Tahap 2) — mana yang paling nggak jalan di bisnis Anda sekarang, dan kenapa?',
        placeholder:
          'Misalnya: Tahap 1 — kami tidak punya model kompetensi yang eksplisit, deskripsi jabatan kami masih daftar tugas. Atau: Tahap 2 — kami punya standar tapi wawancaranya tidak terstruktur dan tidak konsisten...',
      },
      {
        id: 'most-urgent',
        label: 'Kalau Anda bisa benerin satu tahap dulu, mana yang paling mendesak untuk diperbaiki sekarang?',
        placeholder:
          'Misalnya: Tahap 1, karena tanpa model kompetensi yang jelas rekrutmen berikutnya pasti akan kembali ke gut feel. Atau: Tahap 2, karena modelnya sudah ada tapi wawancaranya tidak pernah benar-benar mengujinya...',
      },
    ],
  },
  {
    id: 'c2-card-16',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 3',
    title: 'Sekarang Anda Tahu Tahap Mana yang Paling Bolong — Bab 3 Mulai dari Tahap 1',
    body: [
      'Anda baru saja petakan di mana bisnis Anda berdiri di dua tahap arsitektur jabatan. Itu lebih bermakna dari sekadar setuju bahwa rekrutmen berbasis kompetensi itu penting.',
      'Sekarang Anda tahu tahap mana yang paling bolong. Bab 3 mulai dari Tahap 1 — cara membangun model kompetensi yang beneran menangkap apa yang dibutuhkan peran Anda untuk berhasil.',
    ],
  },
]
