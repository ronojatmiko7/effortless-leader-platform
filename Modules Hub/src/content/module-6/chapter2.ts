import {
  Users,
  Layers,
  Target,
  MessageSquare,
  ShieldCheck,
  AlertCircle,
  Link,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter2Cards: Card[] = [
  {
    id: 'c2-card-1',
    type: 'info',
    icon: Users,
    eyebrow: 'Bab 2 · Peta Siklus PMS',
    title: 'Anda Sudah Punya Satu Nama — Sekarang Kita Lihat di Mana Sistemnya Bolong',
    body: [
      'Di akhir Bab 1, Anda menuliskan satu nama: anggota tim yang tujuan kinerjanya belum jelas, atau yang sudah lama tidak mendapat feedback yang terstruktur. Nama itu bukan kebetulan — itu gejala dari sistem yang belum terbentuk, bukan soal kualitas orangnya.',
      'Pertanyaan sekarang: di mana tepatnya sistem itu bolong? Apakah dari awal — tujuannya tidak pernah ditetapkan dengan jelas? Di tengah — tidak ada coaching rutin yang membantu orang itu tumbuh? Atau belakangan — ketika ada masalah, tidak ada proses formal yang bisa dijalankan?',
      'Bab ini kasih Anda peta tiga tahap siklus manajemen kinerja yang lengkap. Peta ini yang menentukan bagian mana dari bisnis Anda yang perlu dibangun lebih dulu.',
    ],
  },
  {
    id: 'c2-card-2',
    type: 'info',
    icon: Layers,
    eyebrow: 'Gambaran Besar',
    title: 'Tiga Tahap yang Harus Berputar Terus — Bukan Satu Titik di Akhir',
    body: [
      'Siklus manajemen kinerja yang lengkap punya tiga tahap yang harus berjalan dalam urutan ini: (1) Penetapan Tujuan — tujuan individu atau tim ditetapkan secara kolaboratif di awal periode, diturunkan dari tujuan bisnis yang lebih besar. (2) Coaching Rutin — sesi umpan balik terstruktur berjalan sepanjang periode, bukan menunggu review tahunan. (3) Tindakan Korektif — ketika ada yang underperform, ada proses formal yang berjenjang sebelum keputusan besar diambil.',
      'Tiga tahap ini tidak berdiri sendiri-sendiri. Mereka adalah satu siklus yang saling menyambung — dan ketiganya harus jalan untuk sistemnya bisa disebut berjalan.',
      'Di beberapa kartu berikutnya, kita buka setiap tahap satu per satu: apa yang dimaksud, seperti apa bentuknya di bisnis SME, dan kenapa tiap tahap ini sering jadi titik yang bolong.',
    ],
  },
  {
    id: 'c2-card-3',
    type: 'info',
    icon: Target,
    eyebrow: 'Tahap 1 dari 3',
    title: 'Penetapan Tujuan: Disepakati di Awal, Diturunkan dari Atas — Bukan Didikte Sepihak',
    body: [
      'Tahap 1 terjadi di awal setiap siklus kinerja — per semester, per kuartal, atau per tahun, tergantung bisnis. Yang penting, tujuan kinerja setiap orang atau tim ditetapkan sebelum periode itu berjalan, bukan sambil jalan atau baru dibahas di akhir.',
      'Yang membuat tahap ini berbeda dari sekadar "kasih tahu jobdesc": tujuannya kolaboratif (karyawan terlibat dalam prosesnya, bukan cuma menerima daftar), diturunkan jelas dari tujuan bisnis yang lebih besar (jadi orang tahu kontribusinya ke mana), dan tertulis (ada yang bisa dirujuk di tengah atau akhir periode).',
      'Tanpa Tahap 1 ini yang berjalan dengan benar, dua tahap berikutnya tidak punya fondasi. Anda tidak bisa memberikan feedback yang bermakna kalau tidak ada kesepakatan tujuan di awal yang bisa dijadikan tolak ukur.',
    ],
  },
  {
    id: 'c2-card-4',
    type: 'info',
    icon: MessageSquare,
    eyebrow: 'Tahap 2 dari 3',
    title: 'Coaching Rutin: Umpan Balik yang Nggak Nunggu Desember',
    body: [
      'Tahap 2 adalah yang paling jarang jalan di bisnis SME — dan paling mahal kalau tidak jalan. Ini adalah sesi 1-on-1 terstruktur yang berjalan rutin sepanjang periode: bukan rapat harian biasa, bukan sekadar laporan pekerjaan, tapi sesi khusus yang membahas perkembangan kinerja terhadap tujuan yang sudah ditetapkan di Tahap 1.',
      '"Rutin" artinya ada jadwal yang konsisten — bisa bulanan atau dua bulanan. Dan "terstruktur" artinya ada agenda yang jelas: apa yang sudah dicapai, apa yang sedang stuck, apa yang perlu diubah atau didukung.',
      'Tanpa Tahap 2 ini, feedback hanya datang dua kali: di awal kalau Tahap 1 dijalankan, dan di akhir tahun saat review. Semuanya yang terjadi di tengah — perbaikan yang bisa dilakukan, masalah yang bisa dicegah — hilang begitu saja. Itu yang membuat karyawan kaget pas review.',
    ],
  },
  {
    id: 'c2-card-5',
    type: 'info',
    icon: ShieldCheck,
    eyebrow: 'Tahap 3 dari 3',
    title: 'Tindakan Korektif: Proses Formal Sebelum Keputusan Besar — Bukan Langsung Pecat',
    body: [
      'Tahap 3 aktif ketika ada yang tidak berjalan sesuai ekspektasi meski Tahap 1 dan 2 sudah dijalankan. Ini bukan berarti langsung ke keputusan besar seperti pemecatan — justru sebaliknya. Tindakan korektif adalah proses berjenjang: mulai dari coaching yang lebih intens, lalu pelatihan kalau ada skill gap, lalu Performance Improvement Plan (PIP) yang tertulis dengan target yang jelas, dan baru kemudian penilaian formal atau keputusan akhir.',
      'Tujuan Tahap 3 bukan menghukum — tapi memberi orang kesempatan nyata untuk memperbaiki kinerjanya, dengan ekspektasi yang jelas dan dukungan yang konkret. Kalau prosesnya sudah dijalankan dengan benar dan hasilnya tetap tidak memenuhi standar, maka keputusan besar pun bisa diambil dengan dasar yang adil.',
      'Tanpa Tahap 3 ini, bisnis Anda terjebak di antara dua pilihan yang sama-sama buruk: membiarkan underperformer berlama-lama sampai semua orang kelelahan, atau mengambil keputusan mendadak yang merusak kepercayaan sisa tim.',
    ],
  },
  {
    id: 'c2-card-6',
    type: 'multiple-choice',
    question:
      'Seorang karyawan sudah underperform selama empat bulan. Manajernya sudah beberapa kali membahasnya di 1-on-1, tapi tidak ada perbaikan signifikan. Apa langkah Tahap 3 yang tepat selanjutnya?',
    options: [
      'Langsung buat surat peringatan atau keputusan terminasi — empat bulan sudah cukup lama',
      'Mulai proses tindakan korektif formal: tentukan target perbaikan yang spesifik, timeline yang jelas, dan dukungan apa yang akan diberikan',
      'Teruskan coaching biasa di 1-on-1 sambil berharap ada perubahan dengan sendirinya',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Tindakan korektif formal bukan langsung ke keputusan akhir — itu jalur berjenjang yang dimulai dari target perbaikan yang tertulis dan konkret. Proses ini yang membuat keputusan akhir, kalau perlu diambil, bisa terasa adil di kedua pihak.',
    errorFeedback:
      'Belum tepat. Tindakan korektif formal bukan berarti langsung pecat, dan juga bukan terus coaching biasa tanpa perubahan pendekatan. Jalannya adalah menetapkan proses yang lebih formal: target perbaikan yang spesifik, timeline yang jelas, dukungan apa yang tersedia — dan konsekuensi yang jelas kalau target itu tidak tercapai.',
  },
  {
    id: 'c2-card-7',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Kenapa Ini Sulit',
    title: 'Bisnis SME Hampir Selalu Hanya Punya Satu Tahap — dan Satu Tahap Itu Mencoba Merangkap Semuanya',
    body: [
      'Sebagian besar bisnis SME yang sudah punya "sistem" kinerja, sistemnya itu adalah review tahunan — satu titik evaluasi di akhir periode. Bukan karena tidak peduli, tapi karena review tahunan adalah versi paling terlihat dari manajemen kinerja, yang paling mudah dijadwalkan, dan yang paling mirip dengan apa yang mereka sendiri pernah alami sebelumnya.',
      'Masalahnya: review tahunan secara tidak sadar mencoba merangkap ketiga tahap sekaligus. Di satu sesi yang sama, manajer mencoba memberi tahu tujuan yang harusnya sudah ditetapkan dari awal (Tahap 1), menyampaikan feedback yang harusnya sudah diberikan sepanjang tahun (Tahap 2), dan mengambil keputusan korektif yang harusnya punya proses sebelumnya (Tahap 3). Satu sesi menanggung terlalu banyak — dan hasilnya tidak ada yang berjalan dengan baik.',
      'Ini bukan artinya bisnis Anda tidak punya sistem sama sekali. Tapi satu titik evaluasi bukan siklus. Dan itulah yang membuat hasilnya terasa tidak adil di kedua sisi.',
    ],
  },
  {
    id: 'c2-card-8',
    type: 'yes-no',
    question:
      'Dari ketiga tahap — penetapan tujuan di awal periode, coaching rutin di tengah, tindakan korektif formal sebelum keputusan besar — adakah yang sudah berjalan konsisten di bisnis Anda sekarang?',
    yesLabel: 'Ada, minimal satu tahap sudah berjalan cukup konsisten',
    noLabel: 'Belum ada yang berjalan konsisten — atau hanya review tahunan yang rutin',
    feedbackYes:
      'Bagus. Satu tahap yang berjalan konsisten itu fondasi yang bisa dibangun. Tapi ingat: tiga tahap ini saling menyambung — satu tahap yang kuat tidak bisa menutup dua tahap yang bolong. Di kartu berikutnya, kita lihat kenapa.',
    feedbackNo:
      'Jujur. Itu lebih berguna daripada mengira sistem sudah ada padahal belum. Yang penting sekarang: tahu di mana titik mulainya. Kartu berikutnya kasih Anda gambaran kenapa ketiga tahap ini harus ada sekaligus.',
  },
  {
    id: 'c2-card-9',
    type: 'info',
    icon: Link,
    eyebrow: 'Kenapa Ketiganya Harus Ada',
    title: 'Kalau Tahap 1 Bolong, Tahap 2 Kehilangan Arah — dan Tahap 3 Jadi Terasa Tidak Adil',
    body: [
      'Tiga tahap ini bukan pilihan menu — Anda tidak bisa pilih dua dan skip satu. Mereka saling mensyaratkan.',
      'Kalau Tahap 1 tidak jalan (tujuan tidak pernah ditetapkan dengan jelas), maka Tahap 2 (coaching rutin) tidak punya arah: feedback soal apa? Terhadap standar yang mana? Karyawan dan manajernya sama-sama tidak punya tolak ukur yang bisa dibahas bersama.',
      'Kalau Tahap 2 tidak jalan (tidak ada feedback rutin sepanjang periode), maka Tahap 3 (tindakan korektif) terasa muncul tiba-tiba dan tidak adil. Karyawan belum pernah diberi tahu ada masalah secara langsung dan terstruktur — lalu tiba-tiba ada proses formal? Itu yang membuat proses korektif di banyak bisnis berakhir dengan sengketa atau hilangnya kepercayaan tim.',
    ],
  },
  {
    id: 'c2-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau Tahap 1 (penetapan tujuan) tidak pernah berjalan dengan jelas, maka Tahap 2 (coaching rutin) kehilangan ________ untuk dibahas bersama karyawan.',
    options: ['arah', 'jadwal', 'anggaran', 'dokumentasi'],
    correctAnswer: 'arah',
    successFeedback:
      'Tepat. Coaching yang bermakna harus punya acuan — dan acuan itu adalah tujuan kinerja yang ditetapkan di Tahap 1. Tanpa itu, percakapan coaching hanya jadi obrolan umum tanpa tolak ukur yang disepakati.',
    errorFeedback:
      'Belum tepat. Jawabannya: arah. Coaching tidak bisa efektif kalau tidak ada tujuan yang jelas sebagai acuannya. Manajer dan karyawan perlu punya tolak ukur yang sama untuk bisa membahas perkembangan secara bermakna.',
  },
  {
    id: 'c2-card-11',
    type: 'multiple-choice',
    question:
      'Skenario A: Seorang staf customer service sudah bekerja delapan bulan. Dia rajin dan tidak pernah komplain. Tapi di akhir tahun, manajernya kecewa — "hasilnya nggak sesuai yang saya harapkan." Saat dikonfirmasi, stafnya tidak pernah tahu ada ekspektasi tertentu selain "layani pelanggan dengan baik." Ini masalah di tahap mana?',
    options: [
      'Tahap 1 (Penetapan Tujuan) — ekspektasi kinerja yang spesifik tidak pernah ditetapkan dan dikomunikasikan di awal',
      'Tahap 2 (Coaching Rutin) — feedback rutin sepanjang delapan bulan tidak pernah diberikan',
      'Tahap 3 (Tindakan Korektif) — tidak ada proses formal ketika kinerjanya tidak sesuai ekspektasi',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Ini masalah Tahap 1 yang klasik. Karyawannya tidak underperform karena malas — dia bekerja tanpa tahu standar yang sesungguhnya diharapkan. Tujuan yang tidak pernah ditetapkan tidak bisa dijadikan dasar penilaian yang adil.',
    errorFeedback:
      'Belum tepat. Meski ada elemen Tahap 2 dan 3 yang juga absen, akar masalahnya ada di Tahap 1: ekspektasi kinerja yang spesifik tidak pernah ditetapkan dari awal. Karyawan tidak bisa memenuhi standar yang tidak pernah mereka ketahui.',
  },
  {
    id: 'c2-card-12',
    type: 'multiple-choice',
    question:
      'Skenario B: Seorang sales sudah tahu target penjualannya untuk kuartal ini — jelas dan dia menyetujuinya. Di bulan ketiga, manajernya baru sadar kalau progress-nya jauh di bawah target. Padahal di bulan pertama dan kedua sudah ada tanda-tanda yang bisa dibahas lebih awal. Ini masalah di tahap mana?',
    options: [
      'Tahap 1 (Penetapan Tujuan) — targetnya terlalu tinggi dan tidak realistis',
      'Tahap 2 (Coaching Rutin) — tidak ada check-in terstruktur yang bisa mendeteksi masalah lebih awal',
      'Tahap 3 (Tindakan Korektif) — tidak ada proses formal ketika target tidak tercapai',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Tahap 1-nya sudah berjalan — ada target yang jelas dan disepakati. Masalahnya ada di Tahap 2: tanpa sesi coaching rutin di tengah periode, sinyal-sinyal awal tidak tertangkap. Coaching yang rutin bisa mencegah kejutan di bulan ketiga.',
    errorFeedback:
      'Belum tepat. Tahap 1-nya sudah berjalan dengan baik — target jelas dan disepakati. Masalahnya adalah Tahap 2: tidak ada mekanisme check-in rutin yang bisa mendeteksi dan mengatasi masalah sebelum bulan ketiga. Coaching rutin bukan untuk menghakimi — tapi untuk mencegah kejutan seperti ini.',
  },
  {
    id: 'c2-card-13',
    type: 'multiple-choice',
    question:
      'Skenario C: Seorang supervisor produksi punya target yang jelas di awal tahun dan rutin mendapat feedback dari manajernya setiap bulan. Di bulan kedelapan kinerjanya turun signifikan dan tidak membaik meski sudah dibahas di tiga sesi 1-on-1 berturut-turut. Manajernya tidak tahu langkah apa yang harus diambil selanjutnya — tidak mau langsung pecat, tapi tidak tahu ada jalur proses lain. Ini masalah di tahap mana?',
    options: [
      'Tahap 1 (Penetapan Tujuan) — targetnya terlalu ambisius sehingga sulit dicapai',
      'Tahap 2 (Coaching Rutin) — frekuensi 1-on-1-nya perlu ditingkatkan lagi',
      'Tahap 3 (Tindakan Korektif) — tidak ada jalur formal yang diketahui atau bisa dijalankan setelah coaching rutin tidak cukup',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Tahap 1 dan 2 sudah berjalan di skenario ini — ada target jelas, ada coaching rutin. Yang belum ada adalah Tahap 3: jalur tindakan korektif formal yang berjenjang dan terdokumentasi. Tanpa Tahap 3, manajer terjebak di antara dua pilihan ekstrem yang sama-sama tidak ideal.',
    errorFeedback:
      'Belum tepat. Tahap 1 (target jelas) dan Tahap 2 (feedback rutin bulanan) sudah berjalan di skenario ini. Masalahnya ada di Tahap 3: tidak ada jalur tindakan korektif formal yang bisa digunakan setelah coaching biasa tidak cukup. Manajernya tidak tahu proses selanjutnya — itu adalah gap di Tahap 3.',
  },
  {
    id: 'c2-card-14',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Peta Sisa Modul',
    title: 'Bab 3 sampai 7 Mengikuti Tiga Tahap Ini — Satu per Satu',
    body: [
      'Sekarang Anda punya peta besarnya. Sisa modul ini membangun tiga tahap itu secara urut dan praktis:',
      'Tahap 1 — Penetapan Tujuan: Bab 3 mengajarkan cara menetapkan tujuan kinerja yang benar-benar kolaboratif dan diturunkan jelas dari target bisnis — bukan target yang didiktekan dari atas atau dibiarkan mengambang.',
      'Tahap 2 — Coaching Rutin: Bab 4 merancang ritme 1-on-1 yang realistis untuk bisnis SME. Bab 5 mengajarkan cara mendiagnosis underperformance sebelum masalahnya membesar — apakah ini soal skill, motivasi, atau ekspektasi yang tidak pernah jelas.',
      'Tahap 3 — Tindakan Korektif: Bab 6 membangun jalur korektif yang berjenjang sebelum keputusan besar. Bab 7 menyatukan semua ini jadi satu siklus kinerja utuh untuk satu tim atau peran nyata di bisnis Anda.',
    ],
  },
  {
    id: 'c2-card-15',
    type: 'reflection',
    eyebrow: 'Entri Kedua · Buku Kerja PMS Anda',
    prompt:
      'Nilai bisnis Anda di ketiga tahap siklus PMS — mana yang paling bolong, dan mana yang paling mendesak untuk dibenahi.',
    fields: [
      {
        id: 'stage-assessment',
        label:
          'Dari tiga tahap — penetapan tujuan, coaching rutin, tindakan korektif — mana yang paling nggak jalan di bisnis Anda sekarang, dan kenapa?',
        placeholder:
          'Misalnya: coaching rutin hampir tidak pernah ada — check-in yang ada hanya laporan pekerjaan, bukan diskusi perkembangan kinerja...',
      },
      {
        id: 'urgent-fix',
        label: 'Kalau Anda bisa benerin satu tahap dulu, mana yang paling mendesak?',
        placeholder:
          'Misalnya: Tahap 1 — karena tanpa tujuan yang jelas, dua tahap lainnya tidak bisa berjalan bermakna...',
      },
    ],
  },
  {
    id: 'c2-card-16',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 2',
    title: 'Sekarang Anda Tahu Tahap Mana yang Paling Bolong',
    body: [
      'Sekarang Anda punya peta lengkap siklus manajemen kinerja — tiga tahap yang saling menyambung, dan gambaran di mana bisnis Anda saat ini berdiri di antara ketiganya.',
      'Sekarang Anda tahu tahap mana yang paling bolong. Bab 3 mulai dari Tahap 1 — cara menetapkan tujuan kinerja yang beneran kolaboratif dan jelas dari awal.',
    ],
  },
]
