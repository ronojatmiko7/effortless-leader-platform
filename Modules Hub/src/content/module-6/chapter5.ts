import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Eye,
  Layers,
  MessageSquare,
  Target,
  TrendingDown,
  Users,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter5Cards: Card[] = [
  {
    id: 'c5-card-1',
    type: 'info',
    icon: Users,
    eyebrow: 'Bab 5 · Diagnosis Underperformance',
    title: 'Tujuannya Sudah Jelas, Coaching Sudah Rutin — Tapi Ada yang Tetap Saja Underperform',
    body: [
      'Bab 1 modul ini dibuka dengan satu situasi yang sangat umum: karyawan yang underperform bertahun-tahun tanpa pernah ada percakapan yang jujur dan terstruktur soal itu. Bab 3 dan 4 sudah membangun dua pilar pencegah situasi itu — tujuan kinerja yang jelas dan disepakati, plus ritme coaching 1-on-1 yang rutin.',
      'Kalau Anda sudah menjalankan ritme coaching dari Bab 4, bab ini jadi langkah selanjutnya ketika coaching reguler tidak cukup. Kalau belum, tidak masalah — bab ini tetap jalan untuk siapa pun di tim Anda yang sedang underperform sekarang.',
      'Yang paling penting: bahkan dengan tujuan yang jelas dan coaching yang rutin, ada situasi di mana seseorang tetap tidak perform sesuai standar. Pertanyaan yang harus dijawab sebelum mengambil tindakan apa pun adalah: kenapa? Dan ternyata, "kenapa"-nya bisa sangat berbeda dari apa yang sering diasumsikan.',
    ],
  },
  {
    id: 'c5-card-2',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Kesalahan yang Paling Umum',
    title: 'Langsung Asumsi "Males" atau "Nggak Niat" — Lalu Lompat ke Tindakan Disipliner',
    body: [
      'Reaksi paling umum manajer ketika ada yang underperform: "dia malas," "sudah tidak mau usaha," atau "nggak cocok di sini" — dan dari asumsi itu, langsung melompat ke tindakan: peringatan formal, ancaman, atau bahkan pemecatan.',
      'Masalahnya: asumsi itu sering salah. Underperformance bisa punya tiga akar yang sangat berbeda — dan tindakan yang tepat tergantung sepenuhnya pada akarnya. Menghukum orang yang sebetulnya butuh pelatihan teknis tidak akan menghasilkan perbaikan. Begitu juga mengirim ke training orang yang sebenarnya kehilangan motivasi karena kondisi kerja yang tidak pernah dibahas.',
      'Aksi sebelum diagnosis bukan cuma tidak efektif — kadang memperburuk situasi. Bab ini kasih Anda kerangka diagnosis sebelum tindakan apa pun diambil.',
    ],
  },
  {
    id: 'c5-card-3',
    type: 'yes-no',
    question:
      'Pernah nggak Anda langsung mengasumsikan bahwa seorang anggota tim yang underperform itu "tidak mau" atau "kurang niat" — tanpa benar-benar menyelidiki akar masalahnya lebih dulu?',
    yesLabel: 'Pernah — dan saya tidak selalu yakin apakah asumsi itu tepat',
    noLabel: 'Saya selalu cari tahu akar masalahnya sebelum menarik kesimpulan',
    feedbackYes:
      'Reaksi itu sangat manusiawi — dan sangat umum. Tapi asumsi yang meleset menghasilkan tindakan yang meleset juga: training untuk orang yang sebenarnya butuh percakapan motivasi, atau sebaliknya. Tiga lensa di bab ini kasih Anda cara yang lebih sistematis untuk memverifikasi diagnosis sebelum bertindak.',
    feedbackNo:
      'Bagus. Tapi bahkan manajer yang berhati-hati pun bisa terjebak dalam asumsi tersembunyi — terutama kalau ada tekanan untuk segera menyelesaikan masalah. Kerangka di bab ini membuat prosesnya lebih eksplisit dan bisa dikomunikasikan ke karyawan yang bersangkutan.',
  },
  {
    id: 'c5-card-4',
    type: 'info',
    icon: Layers,
    eyebrow: 'Kerangka Diagnosis',
    title: 'Sebelum Bertindak, Diagnosis Dulu — Underperformance Punya Tiga Akar yang Berbeda',
    body: [
      'Hampir setiap kasus underperformance jatuh ke salah satu — atau kombinasi — dari tiga kategori: Skill Gap (kemampuan yang belum ada), Will Gap (motivasi yang bermasalah), atau Ekspektasi yang Nggak Jelas (standar yang tidak pernah dikomunikasikan dengan tepat).',
      'Ketiga kategori ini punya solusi yang berbeda sama sekali. Skill gap butuh pelatihan dan coaching teknis. Will gap butuh percakapan soal hambatan dan motivasi. Ekspektasi yang nggak jelas butuh perbaikan komunikasi dan penetapan standar yang lebih konkret.',
      'Salah mengidentifikasi lensa berarti salah merancang tindakannya. Dan tindakan yang salah sasaran tidak cuma tidak efektif — itu juga menguras energi Anda dan energi karyawan yang bersangkutan untuk sesuatu yang tidak menyelesaikan masalah sebenarnya.',
    ],
  },
  {
    id: 'c5-card-5',
    type: 'info',
    icon: Target,
    eyebrow: 'Lensa 1 dari 3',
    title: 'Skill Gap: Orangnya Niat, Tapi Belum Punya Kemampuan atau Pengetahuan yang Dibutuhkan',
    body: [
      'Skill gap bukan soal karakter atau motivasi — ini situasi di mana orang ingin bekerja dengan baik, tapi belum punya kemampuan teknis, pengetahuan, atau pengalaman yang dibutuhkan untuk memenuhi standar yang diharapkan.',
      'Tanda-tandanya: orang itu mencoba, ada usaha yang terlihat, tapi hasilnya tidak sampai standar — bukan karena tidak mau, tapi karena belum bisa. Kalau diberi contoh atau template, dia bisa mengikuti dengan lebih baik — tapi tanpa panduan, jatuhnya selalu di bawah ekspektasi.',
      'Solusinya bukan hukuman atau tekanan. Yang dibutuhkan adalah pelatihan yang konkret, coaching teknis yang terstruktur, atau pendampingan dari orang yang sudah mahir. Menghukum skill gap sama seperti menghukum seseorang karena tidak bisa berenang padahal tidak pernah diajarkan.',
    ],
  },
  {
    id: 'c5-card-6',
    type: 'info',
    icon: TrendingDown,
    eyebrow: 'Lensa 2 dari 3',
    title: 'Will Gap: Orangnya Punya Kemampuan — Tapi Motivasinya Rendah atau Ada Hambatan Sikap',
    body: [
      'Will gap adalah kebalikan dari skill gap: kemampuannya ada dan sudah terbukti, tapi orang itu tidak mengerahkannya secara konsisten. Kalau diminta, dia bisa. Kalau dipantau, hasilnya membaik. Tapi tanpa tekanan eksternal, kinerjanya kembali turun.',
      'Penyebabnya bisa bermacam-macam: sudah tidak engaged dengan pekerjaannya, frustrasi dengan kondisi kerja yang tidak pernah dibahas, ada hambatan personal yang mengganggu, atau harapan dan tujuan pribadinya sudah bergeser ke arah lain.',
      'Solusinya bukan pelatihan teknis — itu tidak akan menyentuh akar masalahnya. Yang dibutuhkan adalah percakapan yang berbeda: bukan "kamu harus lebih giat," tapi "apa yang sedang terjadi, dan apa yang membuatmu tidak all-out belakangan ini?" Percakapan itu yang membuka jalan ke tindakan yang relevan — apakah itu penyesuaian kondisi kerja, klarifikasi ekspektasi karier, atau keputusan yang lebih besar.',
    ],
  },
  {
    id: 'c5-card-7',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Lensa 3 dari 3',
    title: 'Ekspektasi yang Nggak Jelas: Orangnya Nggak Pernah Tahu Persis Standar yang Diharapkan',
    body: [
      'Ini lensa yang paling sering terlewatkan — dan yang paling tidak nyaman untuk diakui sebagai manajer. Situasinya: orang itu underperform bukan karena tidak punya kemampuan dan bukan karena tidak mau, tapi karena tidak pernah tahu persis standar yang sesungguhnya diharapkan dari dia.',
      'Balik ke Bab 3 — kemungkinan besar tujuannya tidak pernah benar-benar ditetapkan secara kolaboratif dan spesifik dari awal. "Layani pelanggan dengan baik" bukan tujuan kinerja — itu harapan yang mengambang. Kalau standar yang konkret tidak pernah dikomunikasikan, orang itu tidak bisa gagal memenuhi standar yang tidak pernah dia ketahui.',
      '"Underperformance" semacam ini sebenarnya bukan kegagalan orang — itu kegagalan sistem. Tindakan yang benar bukan mengkoreksi orangnya, tapi memperbaiki kejelasan ekspektasinya terlebih dahulu. Kalau setelah ekspektasi diperjelas kinerjanya tetap bermasalah, baru lensa lain yang relevan.',
    ],
  },
  {
    id: 'c5-card-8',
    type: 'multiple-choice',
    question:
      'Seorang staf administrasi sering salah input data — tiga sampai empat kali per minggu. Setelah ditelusuri, ternyata dia tidak pernah mendapat pelatihan formal tentang sistem yang dipakai. Selama ini dia bekerja berdasarkan tebakan dan meniru cara kerja kolega yang lebih senior. Apa lensa yang paling tepat untuk kasus ini?',
    options: [
      'Will Gap — dia tidak serius dan tidak teliti dalam pekerjaannya',
      'Skill Gap — dia belum punya pengetahuan dan kemampuan teknis yang dibutuhkan karena memang tidak pernah diajarkan',
      'Ekspektasi yang Nggak Jelas — standar input data yang benar tidak pernah dikomunikasikan kepadanya',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini skill gap yang klasik. Orang yang tidak pernah mendapat pelatihan formal tidak bisa diharapkan bekerja sesuai standar yang butuh keahlian teknis spesifik. Menghukum atau memberi tekanan motivasi tidak akan menyelesaikan masalahnya — yang dibutuhkan adalah pelatihan yang nyata.',
    errorFeedback:
      'Belum tepat. Informasi kuncinya ada di sini: dia tidak pernah mendapat pelatihan formal dan bekerja berdasarkan tebakan. Ini skill gap — masalahnya bukan soal niat atau ekspektasi yang tidak jelas, tapi kemampuan teknis yang memang belum ada karena tidak pernah diajarkan. Akan Nggak adil menghukum orang atas sesuatu yang tidak pernah dia tahu cara melakukannya.',
  },
  {
    id: 'c5-card-9',
    type: 'info',
    icon: MessageSquare,
    eyebrow: 'Teknik Diagnosis',
    title: 'Tiga Pertanyaan yang Selalu Bisa Membedakan Skill Gap, Will Gap, dan Ekspektasi yang Nggak Jelas',
    body: [
      'Pertanyaan 1: Kalau dikasih contoh konkret dan waktu yang cukup, bisa nggak orang ini mengerjakan sesuai standar yang diharapkan? Kalau jawabannya TIDAK BISA — ini menunjuk ke skill gap. Kemampuannya belum ada, training adalah langkah pertama.',
      'Pertanyaan 2: Kalau bisa, apakah dia benar-benar tahu persis standar yang diharapkan dari awal — bukan asumsi, tapi pernah dikomunikasikan dan disepakati secara eksplisit? Kalau jawabannya TIDAK TAHU — ini menunjuk ke masalah ekspektasi yang nggak jelas. Perbaiki standarnya dulu.',
      'Pertanyaan 3: Kalau bisa dan tahu standarnya, kenapa masih tidak dilakukan secara konsisten? — Kalau dua pertanyaan sebelumnya sudah dijawab "ya," tapi kinerjanya tetap tidak konsisten, kemungkinan besar ini will gap. Yang dibutuhkan bukan training baru, tapi percakapan yang menggali hambatan dan motivasinya.',
    ],
  },
  {
    id: 'c5-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau pertanyaan pertama — apakah orang ini bisa mengerjakan sesuai standar kalau diberi contoh konkret dan waktu yang cukup — dijawab "tidak bisa," itu menunjuk ke ________.',
    options: ['skill gap', 'will gap', 'ekspektasi yang nggak jelas', 'masalah pribadi'],
    correctAnswer: 'skill gap',
    successFeedback:
      'Tepat. Pertanyaan pertama mengidentifikasi apakah kemampuannya ada atau tidak. Kalau jawabannya tidak bisa — meski sudah diberi contoh dan waktu yang cukup — itu sinyal skill gap. Tidak ada gunanya membahas motivasi atau ekspektasi kalau kemampuan dasarnya memang belum terbentuk.',
    errorFeedback:
      'Belum tepat. Jawabannya: skill gap. Pertanyaan pertama memeriksa apakah kemampuannya ada. Kalau tidak bisa melakukan sesuai standar meski diberi contoh dan waktu yang cukup — itu masalah kemampuan, bukan motivasi atau kejelasan ekspektasi. Tindakan pertama adalah pelatihan, bukan hukuman.',
  },
  {
    id: 'c5-card-11',
    type: 'info',
    icon: Eye,
    eyebrow: 'Contoh Nyata',
    title: 'Diagnosis Satu Kasus Lengkap: Koordinator yang Laporan Hariannya Selalu Terlambat',
    body: [
      'Dimas, koordinator logistik, sudah dua bulan sering terlambat mengirim laporan harian — padahal ini bagian penting dari tanggung jawabnya. Reaksi pertama manajernya: "dia males, tidak disiplin." Tapi sebelum bertindak, manajernya menjalankan tiga pertanyaan.',
      'Pertanyaan 1 — bisa nggak? Di simulasi singkat, Dimas menyelesaikan laporan dalam 15 menit tanpa masalah. Kemampuannya ada. Bukan skill gap.',
      'Pertanyaan 2 — tahu standarnya? Di sini yang menarik. Dimas tahu laporannya harus dikirim "setiap pagi" — tapi tidak pernah tahu deadline-nya jam berapa. Manajernya selalu bilang "sebelum mulai kerja," tanpa pernah menyebut angka jam yang spesifik. Dimas mengira "pagi" artinya sebelum jam 10, manajernya mengharapkan sebelum jam 8.',
      'Diagnosis: Ekspektasi yang Nggak Jelas — bukan masalah kemampuan, bukan masalah motivasi. Setelah manajernya menetapkan "laporan dikirim sebelum jam 08.00" secara eksplisit, masalahnya selesai dalam minggu pertama. Tidak ada peringatan, tidak ada training — cukup klarifikasi standar yang harusnya sudah jelas dari awal.',
    ],
  },
  {
    id: 'c5-card-12',
    type: 'multiple-choice',
    question:
      'Seorang staf marketing yang sudah dua tahun bekerja kinerjanya tiba-tiba turun drastis dalam tiga bulan terakhir — padahal sebelumnya dia salah satu performer terbaik di tim. Di sesi coaching, dia mengakui masih mengerti semua target yang disepakati dan tahu cara mencapainya. Tapi belakangan dia bilang tidak merasa hasil kerjanya dihargai, dan ada konflik komunikasi yang belum pernah dibahas dengan tim. Lensa mana yang paling tepat?',
    options: [
      'Skill Gap — kemampuannya mungkin sudah tidak relevan dengan tuntutan pekerjaan yang berkembang',
      'Ekspektasi yang Nggak Jelas — standar kinerja yang baru mungkin belum dikomunikasikan sejak tiga bulan lalu',
      'Will Gap — orangnya punya kemampuan dan tahu standarnya, tapi ada hambatan motivasi yang perlu digali dan dibahas',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Semua tanda mengarah ke will gap: dia pernah perform bagus (kemampuan ada), dia mengakui tahu targetnya (ekspektasi jelas). Yang berubah adalah motivasi dan kondisi kerja yang menggerusnya. Percakapan yang dibutuhkan bukan soal skill baru atau target baru — tapi mendengar apa yang sedang mengganggunya dan apa yang perlu diubah.',
    errorFeedback:
      'Belum tepat. Clu utamanya: dia pernah perform bagus sebelumnya (kemampuan ada dan terbukti), dan dia sendiri mengakui tahu target dan cara mencapainya (ekspektasi sudah jelas). Yang berubah adalah motivasinya — itu adalah will gap. Training baru atau klarifikasi target tidak akan menyentuh akar masalah ini.',
  },
  {
    id: 'c5-card-13',
    type: 'multiple-choice',
    question:
      'Seorang supervisor produksi baru dipromosikan empat bulan lalu dari posisi operator mesin senior — kinerjanya sebagai operator dulu sangat baik. Tapi sebagai supervisor, dia kesulitan mengarahkan tim: anggota timnya sering merasa arahannya tidak jelas, dan produktivitas di bawahnya stagnan. Ketika ditanya, dia bilang "sudah coba semua cara" — tapi tidak bisa menyebutkan cara konkret yang dimaksud, dan tidak bisa menjelaskan konsep delegasi yang efektif. Lensa mana yang paling tepat?',
    options: [
      'Will Gap — dia sudah tidak termotivasi dalam peran barunya sebagai supervisor',
      'Skill Gap — kemampuan teknis sebagai operator ada, tapi skill kepemimpinan dan delegasi belum pernah dibangun',
      'Ekspektasi yang Nggak Jelas — standar kinerja supervisor tidak pernah dikomunikasikan sejak awal promosi',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini skill gap yang klasik dalam konteks promosi: kemampuan teknis tidak otomatis berarti kemampuan kepemimpinan. Dia punya niat — tapi belum punya skill yang dibutuhkan sebagai supervisor, dan ini terbukti dari ketidakmampuannya menjelaskan konsep yang seharusnya jadi bagian dari pekerjaannya. Yang dibutuhkan adalah pelatihan kepemimpinan konkret dan pendampingan — bukan percakapan motivasi.',
    errorFeedback:
      'Belum tepat. Informasi kunci: dia tidak bisa menjelaskan konsep kepemimpinan yang dibutuhkan dan tidak bisa menyebutkan tindakan konkret yang sudah dicoba. Itu bukan tanda kurang motivasi — itu tanda kemampuan yang memang belum ada. Skill gap dari manajer baru yang tidak diberi pelatihan kepemimpinan setelah dipromosikan adalah salah satu kasus paling umum yang sering dikira will gap.',
  },
  {
    id: 'c5-card-14',
    type: 'info',
    icon: Layers,
    eyebrow: 'Catatan Penting',
    title: 'Satu Kasus Bisa Punya Lebih dari Satu Lensa — Kenali Mana yang Paling Dominan',
    body: [
      'Dalam praktik, underperformance tidak selalu jatuh bersih ke satu lensa. Seseorang bisa punya skill gap sekaligus will gap — misalnya, tidak punya kemampuan teknis yang dibutuhkan (skill gap) dan juga sudah kehilangan kepercayaan diri sehingga tidak mau mencoba lagi (will gap). Atau ada ekspektasi yang tidak jelas yang memperparah kondisi akan yang memang sudah lemah.',
      'Tugas Anda bukan memilih satu lensa secara mutlak dan mengabaikan yang lain. Tugas Anda adalah mengenali lensa yang paling dominan — karena lensa itulah yang menentukan tindakan korektif pertama dan paling penting yang harus diambil di Bab 6.',
      'Mulailah dari yang paling dominan. Tangani itu dulu. Lalu evaluasi apakah lensa lain masih relevan setelah lensa pertama diatasi. Pendekatan bertahap ini jauh lebih efektif daripada mencoba mengatasi semua lensa sekaligus di satu waktu.',
    ],
  },
  {
    id: 'c5-card-15',
    type: 'sort-list',
    question: 'Urutkan tiga pertanyaan diagnosis dari yang pertama ditanyakan:',
    items: [
      'Kenapa orang ini tidak melakukannya secara konsisten, meski bisa dan tahu standarnya?',
      'Apakah orang ini benar-benar tahu persis standar yang diharapkan dari awal?',
      'Kalau diberi contoh konkret dan waktu yang cukup, bisa nggak orang ini mengerjakan sesuai standar?',
    ],
    correctAnswer: [
      'Kalau diberi contoh konkret dan waktu yang cukup, bisa nggak orang ini mengerjakan sesuai standar?',
      'Apakah orang ini benar-benar tahu persis standar yang diharapkan dari awal?',
      'Kenapa orang ini tidak melakukannya secara konsisten, meski bisa dan tahu standarnya?',
    ],
    successFeedback:
      'Tepat. Pertanyaan pertama mengecek kemampuan. Kalau ada, pertanyaan kedua mengecek kejelasan ekspektasi. Kalau keduanya sudah terkonfirmasi, pertanyaan ketiga mengidentifikasi will gap. Urutan ini penting — kalau skill-nya memang belum ada, tidak perlu lanjut. Setiap pertanyaan hanya relevan kalau pertanyaan sebelumnya sudah dijawab "ya."',
    errorFeedback:
      'Belum tepat. Urutannya selalu: cek kemampuan dulu → cek kejelasan ekspektasi → cek motivasi dan konsistensi. Anda tidak bisa sampai ke will gap kalau belum memastikan orang itu punya kemampuannya dan tahu standarnya. Melompat ke pertanyaan motivasi tanpa memverifikasi dua hal itu terlebih dahulu bisa menghasilkan diagnosis yang salah.',
  },
  {
    id: 'c5-card-16',
    type: 'reflection',
    eyebrow: 'Entri Kelima · Buku Kerja PMS Anda',
    prompt:
      'Sekarang gunakan tiga lensa ini untuk mendiagnosis satu anggota tim yang sedang underperform. Entri ini jadi anchor kasus konkret yang akan dibawa ke Bab 6 dan 7.',
    fields: [
      {
        id: 'underperformer-case',
        label: 'Siapa anggota tim yang sedang underperform, dan gambarkan singkat masalahnya?',
        placeholder:
          'Misalnya: supervisor produksi yang sudah 3 bulan output timnya di bawah target, atau sales yang angka konversinya jauh di bawah rata-rata tim meski sudah lebih dari 6 bulan di posisi itu...',
      },
      {
        id: 'dominant-lens',
        label: 'Lensa mana yang paling dominan — skill gap, will gap, atau ekspektasi yang nggak jelas — dan kenapa?',
        placeholder:
          'Misalnya: skill gap — dia baru dipromosikan dan belum pernah mendapat pelatihan kepemimpinan yang konkret, jadi meski niatnya ada kemampuannya belum terbentuk. Atau: ekspektasi nggak jelas — setelah ditelusuri, ternyata standar output yang konkret tidak pernah dikomunikasikan sejak awal...',
      },
    ],
  },
  {
    id: 'c5-card-17',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 5',
    title: 'Sekarang Anda Tahu Persis Akar Masalahnya — Bab 6 Masuk ke Jalur Tindakan yang Tepat',
    body: [
      'Anda sekarang punya kerangka diagnosis yang konkret: tiga lensa (skill gap, will gap, ekspektasi nggak jelas), tiga pertanyaan untuk membedakannya secara sistematis, dan pemahaman bahwa satu kasus bisa punya lebih dari satu lensa dengan salah satunya yang dominan.',
      'Yang paling penting: Anda tidak perlu lagi langsung lompat ke tindakan. Diagnosis dulu — dan tindakannya jadi jauh lebih tepat sasaran, lebih efisien, dan lebih bisa dipertanggungjawabkan ke karyawan yang bersangkutan.',
      'Sekarang Anda tahu persis akar masalahnya. Bab 6 masuk ke cara merancang jalur tindakan korektif yang cocok — bukan solusi satu ukuran untuk semua kasus, tapi respons yang dirancang berdasarkan lensa yang dominan di kasus Anda.',
    ],
  },
]
