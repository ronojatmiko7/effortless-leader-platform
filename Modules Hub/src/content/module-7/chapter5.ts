import {
  Eye,
  AlertCircle,
  Layers,
  Target,
  Search,
  BarChart2,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter5Cards: Card[] = [
  {
    id: 'c5-card-1',
    type: 'info',
    icon: Eye,
    eyebrow: 'Bab 5 · Diagnosis Rekrutmen Ad-Hoc',
    title: 'Model Kompetensinya Sudah Ada — tapi Prosesnya Sendiri Belum Tentu Menguji Itu',
    body: [
      'Di Bab 1, kita sebut "jebakan kelihatannya cocok" — keputusan rekrutmen yang berasa benar karena berdasarkan kesan, tapi tidak pernah diverifikasi dengan pengujian kompetensi yang konkret. Di Bab 3 dan 4, Anda sudah membangun model kompetensi tiga lapis dan menetapkan tingkat kemahiran dengan anchor perilaku yang bisa diamati. Itu Tahap 1 — dan itu bukan hal kecil.',
      'Tapi Tahap 1 yang solid tidak otomatis memperbaiki Tahap 2. Bahkan ketika model kompetensinya jelas, proses rekrutmennya sendiri bisa tetap berjalan dengan cara lama — pertanyaan interview yang generik, penilaian yang bergantung pada gut feel pewawancara, dan keputusan akhir yang tetap berbasis "siapa yang kelihatannya paling cocok."',
      'Kalau Anda belum sempat membangun model kompetensi lengkap dari Bab 3–4, bab ini tetap jalan untuk posisi apa pun yang sedang atau akan Anda rekrut. Yang akan kita lakukan di sini bukan langsung merancang alat screening — tapi mendiagnosis dulu apa yang sebenarnya rusak di proses rekrutmen yang ada. Karena kalau salah diagnosa, alat screening di Bab 6 akan memperbaiki hal yang salah.',
    ],
  },
  {
    id: 'c5-card-2',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Refleks yang Berbahaya',
    title: 'Hire Ternyata Salah — dan Reaksi Pertamanya Langsung Menyalahkan Orangnya',
    body: [
      '"Orangnya memang kurang bagus." "Waktu wawancara bohong." "Chemistry-nya ternyata nggak cocok sama tim." Tiga kalimat itu adalah reaksi paling umum waktu sebuah hire ternyata tidak perform seperti yang diharapkan.',
      'Wajar. Tapi hampir selalu salah arah. Bukan karena kandidatnya pasti tidak bisa disalahkan — tapi karena begitu diagnosis berhenti di sana, tidak ada yang berubah untuk rekrutmen berikutnya. Prosesnya jalan lagi dengan cara yang sama. Pertanyaan wawancaranya sama. Standar penilaiannya sama. Dan hasilnya berpotensi sama.',
      'Ada tiga cara proses rekrutmen bisa rusak — tiga akar masalah yang berbeda, tiga lensa yang berbeda untuk melihatnya. Sampai Anda tahu mana yang berlaku di kasus Anda, memperbaiki prosesnya hanya tebak-tebakan.',
    ],
  },
  {
    id: 'c5-card-3',
    type: 'yes-no',
    question:
      'Waktu satu hire ternyata tidak perform seperti yang diharapkan, apa yang lebih sering jadi reaksi pertama di bisnis Anda — menyalahkan kandidatnya, atau mempertanyakan apa yang tidak berhasil diuji di proses seleksinya?',
    yesLabel: 'Lebih sering menyalahkan kandidatnya — prosesnya sudah cukup serius',
    noLabel: 'Lebih sering mempertanyakan prosesnya — kandidat hanya cermin dari apa yang diuji',
    feedbackYes:
      'Wajar — itu reaksi yang alami. Tapi selama diagnosis berhenti di "orangnya memang kurang bagus," proses rekrutmen berikutnya tidak berubah. Tiga lensa yang akan kita bahas di bab ini membantu Anda tahu persis apa yang rusak di prosesnya — bukan di kandidatnya.',
    feedbackNo:
      'Itu perspektif yang jauh lebih berguna. Kandidat yang dipilih selalu mencerminkan apa yang diuji di proses seleksi. Kalau yang diuji bukan yang seharusnya, hasilnya pun tidak mencerminkan apa yang dibutuhkan perannya. Bab ini kasih Anda alat untuk mendiagnosis persis bagian mana yang rusak.',
  },
  {
    id: 'c5-card-4',
    type: 'info',
    icon: Layers,
    eyebrow: 'Tiga Lensa Diagnosis',
    title: 'Rekrutmen Ad-Hoc Bisa Rusak di Tiga Titik yang Berbeda — dan Masing-masing Butuh Penanganan yang Berbeda',
    body: [
      'Tidak semua kegagalan rekrutmen punya akar masalah yang sama. Ada yang gagal karena dari awal tidak ada kriteria yang jelas — jadi pewawancara tidak tahu apa yang seharusnya diuji. Ada yang gagal karena kriterianya ada di kertas, tapi pertanyaan interview-nya tidak benar-benar menggali bukti bahwa kandidat memilikinya. Dan ada yang gagal meski pertanyaannya sudah relevan — karena tiap pewawancara punya standar penilaian sendiri-sendiri yang tidak bisa dibandingkan apple-to-apple.',
      'Tiga titik kegagalan itu adalah tiga lensa yang berbeda. Mendiagnosis mana yang berlaku bukan soal mencari siapa yang salah — tapi soal tahu persis apa yang harus diperbaiki sebelum Bab 6 merancang alat screeningnya.',
      'Kalau salah diagnosa dan langsung merancang alat screening, Anda mungkin membuat rubrik penilaian yang indah untuk proses yang dari awal tidak punya kriteria yang jelas — atau memperketat pertanyaan interview-nya padahal masalah utamanya ada di inkonsistensi penilaian. Diagnosis dulu, alat screening setelahnya.',
    ],
  },
  {
    id: 'c5-card-5',
    type: 'info',
    icon: Target,
    eyebrow: 'Lensa 1',
    title: 'Kriteria Tidak Pernah Didefinisikan — Tidak Ada Standar yang Disepakati Sebelum Interview Dimulai',
    body: [
      'Ini akar masalah yang paling mendasar. Interview dimulai tanpa ada kompetensi atau kriteria spesifik yang disepakati lebih dulu — tiap pewawancara menilai berdasarkan definisi "bagus" yang ada di kepala masing-masing. Hasilnya: diskusi pasca-interview yang berputar di seputar kesan, bukan di seputar bukti.',
      'Ciri khas Lensa 1: pertanyaan interview-nya tidak pernah disiapkan dari standar yang disepakati bersama, debriefing setelah interview lebih banyak soal "orangnya gimana menurutmu?" daripada "apa bukti konkret yang kamu lihat untuk kompetensi X?", dan kalau kandidat tidak perform setelah mulai bekerja, tidak ada cara untuk menjelaskan apa yang seharusnya diuji tapi tidak pernah diuji.',
      'Kalau Lensa 1 adalah akar masalahnya, jalan keluar pertamanya bukan membuat lebih banyak pertanyaan interview — tapi kembali ke Bab 3 dan 4: definisikan kompetensi dan tingkat kemahiran yang dibutuhkan perannya. Baru setelah itu ada sesuatu yang konkret untuk dirancang di Bab 6.',
    ],
  },
  {
    id: 'c5-card-6',
    type: 'info',
    icon: Search,
    eyebrow: 'Lensa 2',
    title: 'Kriteria Ada di Kertas — tapi Pertanyaan Interview-nya Tidak Benar-benar Mengujinya',
    body: [
      'Lensa 2 adalah jebakan yang lebih tersembunyi. Kriterianya sudah ada — mungkin sudah ada di deskripsi jabatan, mungkin sudah pernah dibahas di rapat tim sebelum rekrutmen dimulai. Tapi waktu interview-nya berjalan, pertanyaannya generik: "ceritakan tentang diri Anda," "kenapa mau kerja di sini," "apa kelebihan dan kekurangan Anda?"',
      'Pertanyaan-pertanyaan itu tidak salah secara prinsip — tapi tidak pernah menggali bukti konkret bahwa kandidat punya kompetensi yang dibutuhkan perannya. Seorang kandidat yang pandai berkomunikasi bisa menjawab semua pertanyaan itu dengan sangat baik, dan tidak ada satu pun yang membuktikan atau membantah kompetensi spesifik yang dibutuhkan.',
      'Ciri khas Lensa 2: setelah interview selesai, Anda bisa ingat kesan kandidatnya tapi tidak bisa menyebut satu contoh nyata dari hidup kandidat yang membuktikan dia punya kompetensi X. Kalau tidak ada contoh nyata yang bisa Anda sebut, berarti pertanyaan interview-nya tidak benar-benar menggali bukti — dan itu masalah Lensa 2.',
    ],
  },
  {
    id: 'c5-card-7',
    type: 'info',
    icon: BarChart2,
    eyebrow: 'Lensa 3',
    title: 'Pertanyaannya Sudah Relevan — tapi Tiap Pewawancara Punya Standar Penilaiannya Sendiri',
    body: [
      'Lensa 3 adalah yang paling licik, karena prosesnya sudah kelihatan terstruktur. Ada pertanyaan yang relevan, ada diskusi setelah interview, bahkan mungkin ada form penilaian. Tapi waktu keputusan akhirnya dibuat, tiap pewawancara punya tafsiran "baik" dan "kurang" yang berbeda — dan tidak ada rubrik atau skor yang bisa dibandingkan secara konsisten antar kandidat.',
      'Hasilnya: kandidat A mungkin dinilai "sangat baik" oleh pewawancara X karena cara bicaranya percaya diri, tapi dinilai "biasa saja" oleh pewawancara Y karena jawabannya kurang spesifik. Keputusan akhirnya bergantung pada siapa yang paling vokal di diskusi — bukan pada data yang paling kuat.',
      'Ciri khas Lensa 3: ada situasi di mana dua pewawancara menilai kandidat yang sama dengan kesimpulan yang berlawanan, dan tidak ada cara yang disepakati untuk memutuskan siapa yang benar karena tidak ada rubrik bersama yang jadi acuan. Kalau di Bab 4 Anda sudah menetapkan anchor perilaku untuk tiap kompetensi, Lensa 3 sudah sebagian terjawab — yang masih kurang adalah cara menggunakannya secara konsisten di seluruh tim pewawancara.',
    ],
  },
  {
    id: 'c5-card-8',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Teknik Diagnosis',
    title: 'Tiga Pertanyaan untuk Mendiagnosis Kasus Rekrutmen Mana pun — dan Hasilnya Menunjuk Lensa yang Dominan',
    body: [
      'Pertanyaan 1: "Sebelum interview dimulai, apakah ada kompetensi atau kriteria spesifik yang disepakati bersama — bukan hanya deskripsi jabatan, tapi standar yang jelas tentang apa artinya bagus untuk tiap kriteria itu?" Kalau jawabannya tidak — atau tidak yakin — masalahnya ada di Lensa 1. Selesaikan ini lebih dulu sebelum lanjut.',
      'Pertanyaan 2: "Kalau kriterianya ada, apakah pertanyaan interview-nya benar-benar dirancang untuk menggali bukti perilaku nyata dari kandidat terkait kriteria itu — atau pertanyaannya generik yang tidak spesifik ke kompetensi yang dibutuhkan?" Kalau jawabannya generik — masalahnya ada di Lensa 2.',
      'Pertanyaan 3: "Kalau pertanyaannya sudah relevan, apakah ada rubrik atau skor yang dipakai konsisten oleh semua pewawancara untuk membandingkan kandidat — atau keputusan akhirnya bergantung pada diskusi bebas dan siapa yang paling vokal?" Kalau jawabannya diskusi bebas — masalahnya ada di Lensa 3.',
    ],
  },
  {
    id: 'c5-card-9',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Catatan Penting',
    title: 'Bisa Lebih dari Satu Lensa Berlaku Sekaligus — Kenali Kombinasinya Sebelum Lanjut',
    body: [
      'Tiga pertanyaan itu tidak selalu berakhir di satu lensa. Kadang jawaban "tidak" muncul di dua atau bahkan tiga pertanyaan sekaligus — dan itu artinya lebih dari satu lensa berlaku untuk kasus yang sama.',
      'Kombinasi yang paling umum: Lensa 1 + Lensa 2. Ini sering terjadi bersamaan karena kalau tidak ada kriteria yang jelas, pertanyaan interview-nya juga tidak bisa dirancang dari standar yang solid — hasilnya pasti generik. Kombinasi lain yang umum: Lensa 2 + Lensa 3. Pertanyaannya ada tapi generik, dan penilaiannya tidak konsisten. Dua lensa ini bisa berlaku sekaligus bahkan ketika kriterianya sudah ada di kertas.',
      'Yang penting dikenali: Lensa 1 selalu jadi prioritas pertama. Kalau kriterianya tidak ada, Lensa 2 dan 3 tidak bisa diselesaikan — tidak ada yang bisa dijadikan dasar pertanyaan interview atau rubrik penilaian. Baru setelah Lensa 1 diselesaikan, Lensa 2 dan 3 bisa ditangani secara berurutan.',
    ],
  },
  {
    id: 'c5-card-10',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Kerja — Setup',
    title: 'Satu Kasus Nyata: Rekrutmen Sales Manager untuk Bisnis Distribusi B2B',
    body: [
      'Sebuah bisnis distribusi B2B merekrut Sales Manager. Ada deskripsi jabatan yang sudah dibuat — isinya daftar tanggung jawab: "memimpin tim sales, mencapai target penjualan area, memantau pipeline, dan membina relasi dengan key account." Tidak ada definisi tentang kompetensi atau tingkat kemahiran yang dibutuhkan.',
      'Proses rekrutmen berjalan tiga putaran. Putaran pertama HR — screening awal, menilai komunikasi dan motivasi secara umum. Putaran kedua Direktur Komersial — wawancara bebas, banyak diskusi tentang pengalaman industri dan visi kandidat. Putaran ketiga panel tim — semua sepakat "orangnya kelihatan bagus dan berpengalaman." Tidak ada uji kasus atau simulasi kerja.',
      'Kandidat yang dipilih mulai bekerja. Tiga bulan kemudian: target penjualan area tidak tercapai, tim sales mengeluhkan tidak ada arahan yang jelas, dan dua key account mulai komplain karena tidak ada tindak lanjut yang konsisten. Sebelum menyalahkan kandidatnya — kita diagnosa dulu.',
    ],
  },
  {
    id: 'c5-card-11',
    type: 'info',
    icon: Search,
    eyebrow: 'Contoh Kerja — Diagnosis',
    title: 'Jalankan Tiga Pertanyaan: Di Mana Titik Rusaknya?',
    body: [
      'Pertanyaan 1: Ada kriteria spesifik yang disepakati sebelum interview dimulai? Deskripsi jabatannya ada, tapi isinya daftar tanggung jawab — bukan kompetensi yang didefinisikan dengan tingkat kemahiran yang jelas. Tidak ada yang namanya "untuk lead tim sales, Sales Manager ini harus bisa melakukan X di level Y." Jawaban: tidak ada. Lensa 1 sudah berlaku.',
      'Pertanyaan 2: Pertanyaan interview-nya menggali bukti perilaku nyata? Putaran HR menilai komunikasi dan motivasi secara umum. Putaran Direktur mendiskusikan visi dan pengalaman industri. Tidak ada satu pun pertanyaan yang meminta kandidat menceritakan situasi nyata — misalnya waktu dia harus coach sales rep yang underperform, atau handle key account yang mau churn. Jawaban: generik. Lensa 2 juga berlaku.',
      'Pertanyaan 3: Ada rubrik atau skor yang dipakai konsisten? Tidak — keputusan akhirnya berdasarkan konsensus panel bahwa "orangnya kelihatan bagus." Lensa 3 juga berlaku. Diagnosis: ketiga lensa berlaku sekaligus. Akar masalah utamanya ada di Lensa 1 — tidak ada model kompetensi yang jelas — yang membuat Lensa 2 dan 3 tidak bisa diselesaikan dari awal.',
    ],
  },
  {
    id: 'c5-card-12',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis retail merekrut kepala toko. Standar kompetensinya sudah didefinisikan sebelum rekrutmen dimulai: kemampuan mengelola stok, coaching staf, dan handle komplain pelanggan — semuanya di level Mahir. Tapi waktu interview, dua pertanyaan yang diajukan adalah: "Ceritakan pengalaman kerja Anda sebelumnya" dan "Kenapa Anda tertarik dengan posisi ini?" Tidak ada pertanyaan yang meminta kandidat menceritakan situasi nyata terkait stok, coaching, atau komplain. Ini masalah Lensa berapa?',
    options: [
      'Lensa 1 — tidak ada kriteria spesifik yang didefinisikan sebelum interview dimulai',
      'Lensa 2 — kriteria sudah ada, tapi pertanyaan interview-nya tidak menggali bukti kompetensi yang dibutuhkan',
      'Lensa 3 — pertanyaannya ada tapi penilaiannya tidak konsisten antar pewawancara',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini Lensa 2. Kriterianya sudah ada — kompetensi dan tingkat kemahirannya sudah didefinisikan sebelum interview. Tapi pertanyaan interview-nya tidak pernah menggali bukti konkret bahwa kandidat punya kompetensi itu. "Ceritakan pengalaman kerja" tidak membuktikan atau membantah kemampuan coaching staf. "Kenapa tertarik posisi ini" tidak menyentuh kemampuan handle komplain. Lensa 1 tidak berlaku karena kriterianya sudah ada sejak awal.',
    errorFeedback:
      'Belum tepat. Perhatikan bahwa kriteria sudah ada di kasus ini — kompetensi dan tingkat kemahirannya sudah didefinisikan sebelum interview. Jadi Lensa 1 tidak berlaku. Dan tidak ada informasi soal inkonsistensi penilaian antar pewawancara, jadi Lensa 3 juga bukan yang dominan. Yang bermasalah: pertanyaan interview-nya tidak dirancang untuk menggali bukti bahwa kandidat punya kompetensi-kompetensi itu. "Ceritakan pengalaman kerja" dan "kenapa tertarik posisi ini" tidak membuktikan apa-apa soal kompetensi spesifik yang dibutuhkan. Itu Lensa 2.',
  },
  {
    id: 'c5-card-13',
    type: 'multiple-choice',
    question:
      'Sebuah agensi kreatif merekrut project manager. Ada pertanyaan behavioral yang sudah disiapkan dan ditanyakan ke semua kandidat: "Ceritakan situasi spesifik di mana Anda harus mengelola proyek dengan deadline mepet dan pelanggan yang demanding — apa yang Anda lakukan dan apa hasilnya?" Tapi setelah semua kandidat diwawancarai, satu pewawancara menilai kandidat A "sangat baik" karena cara berpikirnya terstruktur, sementara pewawancara lain menilai kandidat yang sama "biasa saja" karena tidak menyebut tool project management yang spesifik. Tidak ada rubrik atau skor yang disepakati sebelumnya untuk menyelesaikan perbedaan itu. Ini masalah Lensa berapa?',
    options: [
      'Lensa 1 — tidak ada kriteria yang jelas, pertanyaannya dirancang tanpa standar kompetensi',
      'Lensa 2 — pertanyaannya generik, tidak cukup menggali bukti kompetensi yang dibutuhkan',
      'Lensa 3 — pertanyaannya sudah relevan tapi penilaiannya tidak konsisten antar pewawancara',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Ini Lensa 3. Pertanyaannya sudah behavioral dan relevan — meminta contoh nyata dari situasi yang spesifik terkait peran. Bukan pertanyaan generik. Tapi penilaiannya tidak konsisten: dua pewawancara menilai kandidat yang sama dengan standar yang berbeda — satu fokus ke cara berpikir, satu fokus ke tool spesifik — dan tidak ada rubrik yang bisa menyelesaikan perbedaan itu. Keputusan akhirnya bergantung pada siapa yang paling vokal, bukan pada data yang paling kuat.',
    errorFeedback:
      'Belum tepat. Perhatikan bahwa pertanyaannya sudah behavioral — meminta contoh nyata dari situasi spesifik. Itu bukan pertanyaan generik, jadi Lensa 2 tidak berlaku. Dan pertanyaannya jelas terhubung ke kompetensi yang dibutuhkan peran project manager. Jadi Lensa 1 juga tidak berlaku di sini. Yang bermasalah: dua pewawancara menggunakan standar yang berbeda untuk menilai jawaban yang sama, dan tidak ada rubrik yang bisa menyamakan standar itu. Itu Lensa 3.',
  },
  {
    id: 'c5-card-14',
    type: 'reflection',
    eyebrow: 'Entri Kelima · Buku Kerja Job Architecture',
    prompt:
      'Bawa satu kasus rekrutmen nyata dari bisnis Anda — yang sedang berjalan atau yang baru selesai — dan diagnosa di mana masalah utamanya. Entri ini akan jadi titik referensi untuk Bab 6 dan 7.',
    fields: [
      {
        id: 'posisi-dan-proses',
        label:
          'Sebutkan satu posisi yang sedang atau baru saja direkrut, dan gambarkan singkat prosesnya — atau masalahnya kalau ada.',
        placeholder:
          'Misalnya: kami sedang rekrut supervisor gudang, proses wawancaranya sudah tiga putaran tapi kandidat yang dipilih ternyata tidak bisa kelola jadwal shift secara mandiri. Atau: kami mau rekrut staff keuangan, belum mulai — tapi belum yakin standar apa yang harus diuji...',
      },
      {
        id: 'lensa-dominan',
        label:
          'Lensa mana yang paling dominan di kasus Anda — kriteria tidak ada (Lensa 1), pertanyaan interview tidak menguji kriteria (Lensa 2), atau penilaian tidak konsisten (Lensa 3) — dan kenapa?',
        placeholder:
          'Misalnya: Lensa 1 — kami tidak pernah mendefinisikan kompetensi spesifik sebelum interview, jadi pewawancara menilai berdasarkan kesan masing-masing. Atau: Lensa 2 — kriterianya ada di deskripsi jabatan tapi pertanyaan interview-nya selalu generik dan tidak pernah minta contoh nyata. Atau: Lensa 1 dan 2 sekaligus — tidak ada standar dari awal dan pertanyaannya juga tidak terstruktur...',
      },
    ],
  },
  {
    id: 'c5-card-15',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 6',
    title: 'Sekarang Anda Tahu Persis Akar Masalahnya — Bab 6 Masuk ke Alat Seleksinya',
    body: [
      'Anda baru saja mendiagnosis rekrutmen dari sudut yang jarang dipakai: bukan "siapa kandidat yang salah dipilih," tapi "di titik mana prosesnya yang rusak." Itu perspektif yang berbeda — dan yang membuat perubahan nyata jadi mungkin.',
      'Diagnosis yang Anda rekam di Entri Kelima menjadi titik referensi untuk dua bab berikutnya. Alat screening yang dirancang di Bab 6 akan diarahkan ke lensa yang dominan di kasus Anda — bukan sekadar menambah lebih banyak pertanyaan di atas proses yang sama.',
      'Bab 6 masuk ke cara merancang alat penyaringan berbasis kompetensi yang beneran menguji apa yang dibutuhkan — bukan checklist pertanyaan lagi.',
    ],
  },
]
