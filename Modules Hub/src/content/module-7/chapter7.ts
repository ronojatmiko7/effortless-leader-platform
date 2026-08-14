import {
  Layers,
  Link2,
  Eye,
  RefreshCw,
  Users,
  BookOpen,
  Target,
  Star,
  Briefcase,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter7Cards: Card[] = [
  {
    id: 'c7-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 7 · Lokakarya Arsitektur Jabatan',
    title: 'Anda Sudah Punya Semua Bagiannya — Sekarang Waktunya Merakitnya Jadi Satu Profil',
    body: [
      'Di Bab 3, Anda membangun model kompetensi tiga lapis — Inti, Fungsional, dan Kepemimpinan — yang diturunkan dari hasil kerja nyata yang diharapkan peran itu, bukan dari template generik. Di Bab 4, Anda menambahkan skala kemahiran dengan anchor perilaku yang bisa diamati: bukan "komunikasi yang baik," tapi deskripsi konkret tentang apa yang terlihat di tiap level.',
      'Di Bab 5, Anda mendiagnosis proses rekrutmen Anda sendiri — lensa mana yang paling rusak, di mana tepatnya prosesnya tidak menguji apa yang seharusnya diuji. Di Bab 6, Anda merancang alat seleksinya: pertanyaan BEI yang diturunkan langsung dari model kompetensi, dan rubrik skor 1–4 yang membuat penilaian bisa dibandingkan apple-to-apple.',
      'Empat bab itu menghasilkan empat bagian terpisah. Sekarang waktunya menyatukannya jadi satu profil arsitektur jabatan yang utuh — satu paket yang bisa langsung dipakai tiap kali ada rekrutmen untuk peran yang sama.',
    ],
  },
  {
    id: 'c7-card-2',
    type: 'info',
    icon: Link2,
    eyebrow: 'Satu Profil, Tiga Komponen',
    title: 'Profil Arsitektur Jabatan yang Utuh Bukan Dokumen Tambahan — Ini yang Menggantikan Proses Lama',
    body: [
      'Profil arsitektur jabatan yang lengkap menjawab tiga pertanyaan sekaligus: Kompetensi apa yang dibutuhkan peran ini, dan di tingkat kemahiran berapa masing-masingnya? Pertanyaan apa yang harus ditanyakan di wawancara untuk membuktikan kompetensi itu ada — bukan sekadar klaim kandidat? Dan jawaban seperti apa yang akan dapat skor 3 atau 4, versus yang tidak lolos standar minimum?',
      'Tiga pertanyaan itu dijawab oleh tiga bagian: model kompetensi + tingkat kemahiran dari Bab 3 dan 4, bank pertanyaan BEI dari Bab 6, dan rubrik skor dari Bab 6. Kalau ketiganya ada dan saling terhubung — kompetensinya yang sama, tingkat kemahiran yang sama, pertanyaan BEI-nya menguji kompetensi itu, rubriknya dipetakan ke tingkat kemahiran itu — itulah profil arsitektur jabatan yang beneran bisa dipakai.',
      'Kalau ketiganya berdiri sendiri-sendiri, Anda punya tiga dokumen yang tidak saling menyambung. Yang terjadi di lapangan: model kompetensinya ada di kertas, pertanyaan wawancaranya ditentukan sendiri tiap pewawancara, dan penilaiannya tetap bergantung pada intuisi. Tidak ada yang berubah dari proses lama. Itulah kenapa penyatuan ini bukan formalitas — itu yang beneran mengubah rekrutmennya.',
    ],
  },
  {
    id: 'c7-card-3',
    type: 'info',
    icon: Eye,
    eyebrow: 'Sebelum Merakit',
    title: 'Satu Hal yang Tidak Boleh Dilompati: Konfirmasi Bahwa Diagnosis dari Bab 5 Masih Akurat',
    body: [
      'Sebelum menyatukan semua bagian jadi satu profil, ada satu langkah yang penting: konfirmasi bahwa diagnosis rekrutmen dari Bab 5 masih akurat — dan bahwa alat seleksi yang dirancang di Bab 6 beneran cocok untuk menguji peran yang didiagnosis itu.',
      'Profil arsitektur jabatan yang lengkap tidak bersifat generik. Alat seleksi yang diturunkan dari diagnosis yang meleset tidak akan menguji hal yang benar — dan rekrutmen berikutnya akan tetap jatuh ke masalah yang sama meski prosesnya kelihatan lebih terstruktur dari luar.',
      'Kartu berikutnya menampilkan kembali apa yang Anda tulis di Bab 5 tentang posisi yang Anda diagnosis dan lensa masalah yang dominan. Nilai seberapa yakin Anda bahwa alat seleksi dari Bab 6 beneran cocok untuk menguji peran itu — sebelum profil itu dirakit jadi satu paket.',
    ],
  },
  {
    id: 'c7-card-4',
    type: 'finding-review',
    eyebrow: 'Entri Ketujuh · Buku Kerja Job Architecture',
    title: 'Seberapa Yakin Alat Seleksi dari Bab 6 Beneran Cocok untuk Peran yang Anda Diagnosis?',
    recap: [
      {
        label: 'Posisi yang Anda diagnosis dan gambaran prosesnya (Bab 5)',
        cardId: 'c5-card-14',
        fieldId: 'posisi-dan-proses',
      },
      {
        label: 'Lensa dominan yang paling berlaku di kasus Anda (Bab 5)',
        cardId: 'c5-card-14',
        fieldId: 'lensa-dominan',
      },
    ],
    scorePrompt:
      'Setelah merancang pertanyaan BEI dan rubrik seleksi di Bab 6 berdasarkan diagnosis ini — seberapa yakin bahwa alat seleksi itu beneran cocok untuk menguji kompetensi yang dibutuhkan peran ini?',
    justificationLabel: 'Kenapa Anda (belum) yakin — dan apa yang masih perlu disesuaikan?',
    justificationPlaceholder:
      'Contoh: Cukup yakin — pertanyaan BEI yang dirancang di Bab 6 langsung menyentuh kompetensi yang selama ini tidak pernah diuji. Yang sedikit mengganjal: rubriknya belum diuji ke lebih dari satu pewawancara, jadi belum tahu apakah penilaiannya akan konsisten antar penilai...',
    storageKey: 'chapter7-selection-tool-review',
  },
  {
    id: 'c7-card-5',
    type: 'info',
    icon: Layers,
    eyebrow: 'Cara Menyatukannya',
    title: 'Tiga Bagian, Satu Profil, untuk Satu Peran yang Sama — Ini Cara Koneksikannya',
    body: [
      'Menyatukan bukan berarti menulis ulang semuanya dari nol. Artinya mengambil tiga bagian yang sudah ada — model kompetensi dari Bab 3, tingkat kemahiran dari Bab 4, dan alat seleksi dari Bab 6 — dan memastikan ketiganya berbicara tentang peran yang sama.',
      'Yang perlu dikonfirmasi: kompetensi yang ada di profil adalah kompetensi yang sama yang jadi dasar pertanyaan BEI. Tingkat kemahiran minimum yang ditetapkan di Bab 4 adalah standar yang dipetakan ke rubrik skor 3 di Bab 6. Skor 3 di rubrik adalah "lulus" — bukan skor 4, yang hanya bonus. Kalau ketiganya sudah terhubung, profil itu siap dipakai.',
      'Kalau peran yang Anda kerjakan di Bab 3–6 berbeda-beda — misalnya Bab 3 menggunakan contoh A tapi Bab 5 mendiagnosis kasus B — pilih satu peran yang paling relevan untuk disatukan sekarang. Profil arsitektur jabatan paling berguna kalau spesifik ke satu peran: satu set kompetensi, satu bank pertanyaan BEI, satu rubrik. Bukan semua-untuk-semua.',
    ],
  },
  {
    id: 'c7-card-6',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Proses Lama vs Proses Baru',
    title: 'Sebelum dan Sesudah: Seperti Apa Rekrutmen yang Sama Dijalankan dengan Cara yang Berbeda',
    body: [
      'PROSES LAMA — yang sangat familiar: Lowongan dibuka, kandidat masuk, ada beberapa putaran wawancara. Pertanyaan ditentukan sendiri tiap pewawancara — siapa yang terasa relevan untuk ditanya, itulah yang ditanyakan. Deskripsi jabatannya isinya daftar tugas tanpa standar kemahiran. Diskusi akhirnya tentang siapa yang paling cocok secara chemistry. Keputusan diambil — dan tiga bulan kemudian baru ketahuan ada skill yang tidak pernah diuji sama sekali.',
      'PROSES BARU — yang sekarang ada di tangan Anda: Sebelum ada satu kandidat pun diwawancarai, profil arsitektur jabatannya sudah ada: kompetensi apa yang dibutuhkan peran ini, di tingkat kemahiran berapa. Tiap pewawancara pegang pertanyaan BEI yang sama — yang langsung menguji kompetensi itu, bukan sekadar mengumpulkan kesan umum. Tiap pewawancara mengisi rubrik skor 1–4 sendiri-sendiri sebelum diskusi. Diskusi akhirnya tentang bukti — bukan kesan.',
      'Bedanya bukan di berapa banyak putaran wawancaranya, atau seberapa serius prosesnya terasa dari luar. Bedanya ada di satu hal: apakah ada standar yang konkret sebelum wawancara dimulai, dan apakah standar itu yang benar-benar diuji — bukan kesan umum yang dibawa masing-masing pewawancara ke meja diskusi.',
    ],
  },
  {
    id: 'c7-card-7',
    type: 'multiple-choice',
    question:
      'Dua bisnis merekrut untuk posisi yang sama — kepala operasional. Bisnis A: tiga putaran wawancara, tiap pewawancara menilai berdasarkan kesan masing-masing, keputusan akhir lewat diskusi panel yang berakhir dengan konsensus "orangnya cocok." Bisnis B: satu putaran wawancara, semua pewawancara pakai bank pertanyaan BEI yang sama yang diturunkan dari model kompetensi, tiap pewawancara isi rubrik skor sendiri-sendiri sebelum diskusi, keputusan akhir berdasarkan skor yang dikompilasi. Mana yang lebih mungkin menghasilkan rekrutmen berbasis kompetensi?',
    options: [
      'Bisnis A — lebih banyak putaran wawancara berarti lebih banyak data yang dikumpulkan tentang kandidat',
      'Bisnis B — satu putaran dengan standar yang jelas dan konsisten lebih kuat dari tiga putaran tanpa standar bersama',
      'Keduanya setara — yang penting pewawancaranya pengalaman dan bisa menilai kandidat dengan baik',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Jumlah putaran wawancara bukan ukuran kualitas rekrutmen. Bisnis A mengumpulkan lebih banyak kesan dari lebih banyak putaran — tapi tetap bergantung pada standar internal masing-masing penilai yang tidak disepakati dari awal. Bisnis B hanya satu putaran, tapi pertanyaannya sama untuk semua kandidat, skor-nya bisa dibandingkan apple-to-apple, dan tidak bergantung pada siapa yang paling vokal di panel. Itu yang membedakan rekrutmen berbasis kompetensi dari rekrutmen berbasis kesan.',
    errorFeedback:
      'Belum tepat. Perhatikan perbedaan prinsipnya: Bisnis A mengumpulkan lebih banyak kesan dari lebih banyak putaran — tapi tanpa standar bersama, semua kesan itu tidak bisa dibandingkan secara konsisten antar kandidat. Bisnis B satu putaran, tapi standar penilaiannya eksplisit dan sama untuk semua orang yang terlibat. Satu putaran berbasis standar lebih kuat dari tiga putaran berbasis kesan — itu intinya.',
  },
  {
    id: 'c7-card-8',
    type: 'info',
    icon: Users,
    eyebrow: 'Memperkenalkan ke Tim',
    title: 'Cara Perkenalkan Profil Ini ke Co-interviewer atau Atasan Tanpa Terasa Kayak Proyek HR Besar',
    body: [
      'Begitu profil arsitektur jabatan selesai, ada satu tantangan yang sering dilewatkan: memperkenalkan ini ke orang lain yang ikut proses rekrutmen — co-interviewer, atasan langsung, atau siapa pun yang ikut memutuskan — tanpa bikin mereka merasa dimintai tambahan pekerjaan admin yang tidak jelas manfaatnya.',
      'Framing yang salah: "Mulai sekarang kita punya sistem rekrutmen baru dengan model kompetensi dan rubrik penilaian yang harus diisi oleh semua pewawancara." Itu kedengarannya seperti proyek HR besar yang memperlambat proses. Reaksi yang muncul: "Bukannya selama ini rekrutmen kita sudah berjalan?"',
      'Framing yang benar: "Saya sudah siapkan beberapa pertanyaan yang lebih tajam untuk wawancara ini dan satu form penilaian singkat — supaya kita bisa bandingkan kandidat dengan standar yang sama dan keputusannya bisa converge lebih cepat." Bukan sistem baru, bukan proyek besar. Alat konkret yang langsung berguna untuk rekrutmen yang sedang berjalan — dan adil untuk semua kandidat karena semua dinilai dengan standar yang sama, bukan dengan intuisi masing-masing pewawancara.',
    ],
  },
  {
    id: 'c7-card-9',
    type: 'yes-no',
    question:
      'Bayangkan Anda memperkenalkan profil arsitektur jabatan ini ke rekan kerja atau atasan yang akan ikut mewawancarai kandidat. Tanpa konteks tentang kenapa ini membantu dan apa yang akan berubah, apa yang paling mungkin jadi reaksi pertama mereka?',
    yesLabel: 'Langsung antusias — kalau sistemnya jelas dan bagus, orang akan merespons positif dengan sendirinya',
    noLabel: 'Kebanyakan akan bertanya "kita perlu sampai segitu?" atau merasa ini berlebihan untuk rekrutmen biasa',
    feedbackYes:
      'Bisa terjadi kalau orang yang Anda ajak sudah pernah merasakan dampak langsung rekrutmen yang gagal dan sadar prosesnya perlu diperbaiki. Tapi untuk yang belum punya pengalaman itu, rubrik dan bank pertanyaan terstruktur sering terasa seperti overhead yang tidak perlu — terutama kalau rekrutmen sebelumnya "berjalan lancar" menurut mereka. Framing yang tepat bukan "ini sistem baru kita" tapi "ini bikin wawancara kita lebih terarah dan keputusannya lebih cepat converge."',
    feedbackNo:
      'Reaksi itu wajar dan sangat umum. Orang yang belum pernah mengalami dampak langsung dari rekrutmen tanpa standar akan selalu melihat rubrik dan bank pertanyaan sebagai beban admin tambahan. Kuncinya bukan memaksakan sistemnya — tapi menunjukkan manfaat langsungnya: keputusan lebih cepat converge, kandidat dinilai adil dengan standar yang sama, tidak ada perdebatan "siapa yang lebih cocok" yang berputar-putar di akhir panel.',
  },
  {
    id: 'c7-card-10',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Kerja',
    title: 'Profil Arsitektur Jabatan Lengkap: Supervisor Penjualan di Bisnis Distribusi B2B',
    body: [
      'Kita ambil peran yang sudah muncul di Bab 3 dan 6: Supervisor Penjualan di bisnis distribusi B2B. Peran ini mengelola tim 5 sales representative, bertanggung jawab atas pencapaian target penjualan area, dan melapor ke Kepala Komersial.',
      'Di Bab 3, kita sudah bangun model kompetensi tiga lapisnya dari hasil kerja nyata yang diharapkan peran itu. Di Bab 6, kita sudah rancang bank pertanyaan BEI dan satu contoh rubrik. Sekarang kita rakit keduanya jadi satu profil lengkap yang bisa langsung dipakai di rekrutmen berikutnya — tanpa harus buka tiga dokumen terpisah.',
      'Tiga kartu berikutnya menunjukkan profil itu secara utuh: kompetensi kunci dengan tingkat kemahiran minimum yang dibutuhkan, pertanyaan BEI yang terhubung langsung ke kompetensi itu, dan rubrik skor yang dipetakan ke anchor perilaku dari Bab 4. Setelah kartu-kartu itu, giliran Anda merakitnya untuk peran yang Anda bawa.',
    ],
  },
  {
    id: 'c7-card-11',
    type: 'info',
    icon: Target,
    eyebrow: 'Contoh Kerja — Kompetensi dan Tingkat Kemahiran',
    title: 'Supervisor Penjualan: Tiga Kompetensi Kunci dengan Tingkat Kemahiran Minimum',
    body: [
      'Kompetensi 1 — Coaching teknik penjualan (Fungsional). Tingkat kemahiran minimum: Mahir. Artinya: mampu mengidentifikasi skill gap spesifik dari data kinerja sales rep — bukan hanya "dia kurang semangat," tapi "dia gagal di tahap negosiasi setelah demo" — dan merancang intervensi coaching yang konkret berdasarkan gap itu. Jadi rujukan tim untuk kasus yang tidak ada di playbook standar, bukan hanya eskalasi ke atasan.',
      'Kompetensi 2 — Feedback berbasis data kinerja (Kepemimpinan). Tingkat kemahiran minimum: Mahir. Artinya: memberikan feedback yang spesifik berdasarkan data aktual — misalnya "pipeline kamu kosong di segment B sejak tiga minggu, ini yang perlu dibenahi" — bukan berdasarkan kesan atau perasaan umum. Mampu melakukan ini bahkan ketika anggota tim defensif atau mencoba meredefinisi masalahnya.',
      'Kompetensi 3 — Integritas dalam pelaporan (Inti). Tingkat kemahiran minimum: Berkembang. Artinya: angka pipeline dan penjualan yang dilaporkan akurat dan tidak dimanipulasi bahkan di periode akhir bulan ketika ada tekanan target. Proaktif melaporkan angka yang tidak bagus daripada menyembunyikannya sampai ketahuan — karena tahu bahwa angka yang akurat lebih berguna bagi bisnis daripada angka yang bagus-di-kertas.',
    ],
  },
  {
    id: 'c7-card-12',
    type: 'info',
    icon: Star,
    eyebrow: 'Contoh Kerja — Alat Seleksi',
    title: 'Bank Pertanyaan BEI dan Rubrik Skor untuk Dua Kompetensi Krusial',
    body: [
      'Kompetensi 1 — Coaching teknik penjualan. Pertanyaan BEI: "Ceritakan satu situasi di mana ada anggota tim sales Anda yang angka penjualannya konsisten di bawah target lebih dari satu bulan — apa yang Anda lakukan, dan apa yang akhirnya terjadi?" Probe: "Anda sendiri — secara spesifik — melakukan apa?" Rubrik: Skor 1 — tidak ada contoh nyata, atau hanya "saya kasih motivasi tambahan." Skor 2 — ada contoh, tapi intervensinya sebatas tambah pengawasan atau laporan harian, belum ada coaching spesifik. Skor 3 — identifikasi skill gap yang spesifik, intervensi coaching konkret, ada perubahan kinerja yang bisa dilaporkan. Skor 4 — semua skor 3 plus pembelajaran dijadikan sistem untuk seluruh tim.',
      'Kompetensi 2 — Feedback berbasis data kinerja. Pertanyaan BEI: "Ceritakan situasi di mana Anda harus memberikan feedback ke anggota tim yang tidak perform — dan feedback yang sebelumnya diberikan tidak pernah efektif. Apa yang Anda lakukan berbeda?" Probe: "Apa data atau informasi spesifik yang Anda gunakan waktu memberikan feedback itu?" Rubrik: Skor 1 — tidak ada contoh nyata, atau feedbacknya masih berbasis kesan ("kamu kurang semangat"). Skor 2 — ada contoh nyata, tapi feedback-nya masih umum tanpa data spesifik. Skor 3 — feedback berbasis data kinerja konkret, ada respons yang bisa dilaporkan. Skor 4 — mengubah pendekatan feedback secara sistematis berdasarkan apa yang dipelajari dari kasus itu.',
      'Dua pertanyaan ini tidak perlu ditanyakan oleh semua pewawancara di semua putaran. Satu pewawancara bisa fokus di kompetensi coaching, satu lagi di feedback. Yang penting: tiap pertanyaan ada rubriknya, tiap pewawancara isi skor sendiri sebelum diskusi dimulai, dan skor dibandingkan berdasarkan bukti jawaban — bukan kesan umum.',
    ],
  },
  {
    id: 'c7-card-13',
    type: 'multiple-choice',
    question:
      'Di rubrik Supervisor Penjualan, seorang kandidat menjawab pertanyaan coaching dengan: "Ada satu sales rep yang selalu di bawah target. Saya minta dia buat laporan kunjungan harian supaya saya bisa pantau lebih dekat. Setelah sebulan ada sedikit perbaikan." Berdasarkan rubrik yang sudah dijelaskan, kandidat ini ada di skor berapa?',
    options: [
      'Skor 1 — tidak ada intervensi yang relevan, hanya meminta laporan',
      'Skor 2 — ada contoh nyata, tapi intervensinya terbatas pada pengawasan tambahan tanpa coaching yang menggali skill gap',
      'Skor 3 — ada contoh nyata dengan intervensi yang menghasilkan perubahan kinerja yang bisa dilaporkan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini skor 2. Ada contoh nyata — itu sudah lebih baik dari skor 1. Tapi intervensinya sebatas pengawasan tambahan (laporan harian) tanpa ada investigasi skill gap yang spesifik dan tanpa coaching teknik yang konkret. Skor 3 baru berlaku kalau ada identifikasi skill gap yang spesifik — misalnya "kamu lemah di teknik negosiasi" — dan ada intervensi coaching yang langsung menyentuh akar itu, bukan hanya memperketat pemantauan.',
    errorFeedback:
      'Belum tepat. Ada contoh nyata — itu sudah di atas skor 1. Tapi perhatikan: intervensinya hanya meminta laporan harian (pengawasan tambahan) dan ada "sedikit perbaikan" tanpa bukti coaching yang spesifik ke skill gap yang diidentifikasi. Skor 3 membutuhkan identifikasi skill gap yang konkret plus intervensi coaching yang langsung menyentuh akar itu. "Minta laporan harian" adalah tindakan pengawasan, bukan coaching — itulah anchor skor 2.',
  },
  {
    id: 'c7-card-14',
    type: 'info',
    icon: Briefcase,
    eyebrow: 'Giliran Anda',
    title: 'Sekarang Rakit Profil Lengkap untuk Peran yang Anda Bawa — Bisa yang Sama dari Bab-bab Sebelumnya',
    body: [
      'Anda sudah lihat profil lengkap Supervisor Penjualan dari awal sampai akhir. Sekarang giliran Anda: pilih satu peran yang jadi fokus profil arsitektur jabatan ini. Bisa peran yang sama yang Anda kerjakan dari Bab 1 — paling berguna karena sudah ada model kompetensinya dari Bab 3 dan alat seleksinya dari Bab 6. Atau bisa digeneralisasi ke peran serupa lain yang lebih relevan sekarang.',
      'Tiga bagian yang perlu disatukan sudah ada: kompetensi dan tingkat kemahiran dari Bab 3–4, pertanyaan BEI dari Bab 6, dan rubrik skor dari Bab 6. Yang perlu dilakukan sekarang adalah memastikan ketiganya bicara tentang peran yang sama — bukan tiga catatan dari tiga bab yang masing-masing berdiri sendiri.',
      'Profil yang Anda rakit di kartu berikutnya bukan sekadar latihan. Ini yang akan jadi dasar untuk Bab 8 — cara menginstal profil ini jadi standar yang beneran dipakai tiap kali ada rekrutmen, bukan dokumen bagus yang dibuka sekali lalu berakhir dilupakan.',
    ],
  },
  {
    id: 'c7-card-15',
    type: 'reflection',
    eyebrow: 'Entri Kedelapan · Buku Kerja Job Architecture',
    prompt:
      'Tuliskan profil arsitektur jabatan yang terintegrasi untuk satu peran yang Anda pilih — satukan kompetensi, tingkat kemahiran, dan gambaran alat seleksinya jadi satu gambaran yang konkret.',
    fields: [
      {
        id: 'focus-role',
        label: 'Peran mana yang jadi fokus profil ini?',
        placeholder:
          'Misalnya: kepala operasional, staff keuangan, supervisor produksi, sales regional — dan kenapa peran ini yang dipilih sekarang...',
      },
      {
        id: 'kompetensi-dan-kemahiran',
        label: 'Apa kompetensi kunci dan tingkat kemahiran minimumnya?',
        placeholder:
          'Misalnya: Kompetensi 1 (Fungsional) — analisis laporan di level Mahir: bisa baca data dan identifikasi area berisiko tanpa panduan. Kompetensi 2 (Kepemimpinan) — coaching teknik di level Mahir: identifikasi skill gap spesifik dan rancang intervensi yang konkret. Kompetensi 3 (Inti) — integritas pelaporan di level Berkembang...',
      },
      {
        id: 'gambaran-alat-seleksi',
        label: 'Seperti apa gambaran alat seleksi (pertanyaan BEI + rubrik) yang akan dipakai?',
        placeholder:
          'Misalnya: Pertanyaan BEI untuk kompetensi utama — "Ceritakan situasi di mana Anda harus [deskripsi situasi yang membutuhkan kompetensi itu]..." Skor 3 artinya: ada contoh nyata dengan tindakan konkret dan perubahan yang bisa dilaporkan. Skor 1 artinya: tidak ada contoh nyata atau hanya jawaban hipotetis tanpa detail spesifik...',
      },
    ],
  },
  {
    id: 'c7-card-16',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 7',
    title: 'Profil Arsitektur Jabatannya Sekarang Utuh di Atas Kertas — Bab Terakhir: Cara Menginstalnya',
    body: [
      'Anda baru saja menyelesaikan lokakarya penuh: profil arsitektur jabatan yang utuh untuk satu peran nyata di bisnis Anda — kompetensi kunci yang jelas, tingkat kemahiran minimum yang konkret, pertanyaan BEI yang menguji langsung ke situ, dan rubrik yang membuat penilaian bisa dibandingkan apple-to-apple oleh siapa pun yang terlibat.',
      'Profil arsitektur jabatannya sekarang utuh di atas kertas. Bab terakhir: cara menginstalnya biar beneran dipakai tiap kali ada rekrutmen — bukan cuma dokumen bagus yang berakhir dilupakan — dan laporan lengkap dari semua yang sudah Anda kerjakan sejak Bab 1.',
    ],
  },
]
