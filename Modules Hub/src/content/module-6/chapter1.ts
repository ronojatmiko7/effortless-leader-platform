import {
  AlertCircle,
  CalendarX2,
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
    icon: CalendarX2,
    eyebrow: 'Bab 1 · Jebakan Kosong di Tengah',
    title: 'Karyawan Kaget Pas Review — Padahal Masalahnya Sudah Ada Sejak Bulan Maret',
    body: [
      'Di akhir tahun, seorang manajer duduk dengan salah satu stafnya untuk review tahunan. Stafnya kaget — nilainya jauh di bawah ekspektasi, padahal selama ini dia merasa bekerja normal.',
      'Yang nggak pernah dikomunikasikan: di bulan Maret, manajernya sudah melihat ada yang bermasalah. Tapi nggak pernah dibahas. Di bulan Juli, masalahnya makin jelas. Tetap nggak dibahas. Baru di bulan Desember, semuanya dikeluarkan sekaligus.',
      'Feedback itu bukan insight — itu kejutan. Karyawannya nggak bisa memperbaiki sesuatu yang nggak pernah dia tahu jadi masalah.',
    ],
  },
  {
    id: 'c1-card-2',
    type: 'info',
    icon: Clock,
    eyebrow: 'Pola Kedua',
    title: 'Tujuan Kerjanya Apa? "Ya Kerja Aja" — Sampai Akhir Tahun',
    body: [
      'Seorang staf marketing bergabung tujuh bulan lalu. Waktu onboarding, dia dikasih tahu job desc-nya. Tapi tidak ada yang pernah duduk bersamanya dan bilang: "Ini tujuan kinerja kamu periode ini. Ini cara kita ukurnya."',
      'Jadi dia kerja berdasarkan asumsi. Yang penting kelihatan sibuk, yang penting tidak ada yang komplain. Di akhir tahun, manajernya kecewa — "hasilnya nggak sesuai harapan." Tapi harapan itu tidak pernah dikomunikasikan di awal.',
      'Bukan stafnya yang gagal. Sistemnya yang gagal menetapkan tujuan.',
    ],
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: TrendingDown,
    eyebrow: 'Pola Ketiga',
    title: 'Underperform Dua Tahun, Dipecat Mendadak — Sisa Tim Malah Takut',
    body: [
      'Ada karyawan yang sudah tidak perform selama dua tahun. Semua orang di tim tahu. Manajernya tahu. Tapi tidak ada yang pernah dibicarakan secara formal — tidak ada coaching, tidak ada target perbaikan, tidak ada peringatan tertulis.',
      'Sampai suatu hari manajernya sampai di titik "nggak tahan lagi" dan memutuskan untuk memecat. Tanpa proses formal, tanpa dokumentasi.',
      'Sisa tim bukannya lega — mereka malah ketakutan. Kalau bisa dipecat secepat itu tanpa proses yang jelas, siapa berikutnya? Efeknya ke motivasi tim lebih buruk dari sebelumnya.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'yes-no',
    question:
      'Dari tiga pola tadi — karyawan yang kaget pas review, tujuan kerja yang nggak pernah jelas, atau underperformer yang dibiarkan sampai dipecat mendadak — ada yang terasa familiar di bisnis Anda?',
    yesLabel: 'Ada, salah satu atau lebih terasa sangat familiar',
    noLabel: 'Nggak ada, tim saya punya siklus kinerja yang jelas',
    feedbackYes:
      'Wajar. Ini pola yang sangat umum — bukan karena pemilik bisnisnya malas atau nggak peduli, tapi karena tidak ada sistem yang memaksa siklus itu berjalan. Itulah yang modul ini akan bangun.',
    feedbackNo:
      'Bagus. Tapi baca terus — bab ini akan kasih Anda cara memverifikasi apakah siklus yang Anda percaya sudah berjalan itu benar-benar berjalan, bukan cuma terasa seperti berjalan.',
  },
  {
    id: 'c1-card-5',
    type: 'info',
    icon: Layers,
    eyebrow: 'Ide Utama',
    title: 'Manajemen Kinerja Itu Tiga Tahap — Bukan Satu Titik di Akhir Tahun',
    body: [
      'Kebanyakan bisnis SME punya satu titik: review tahunan. Kadang bahkan itu pun tidak konsisten dijalankan.',
      'Tapi manajemen kinerja yang beneran jalan itu tiga tahap yang harus berputar terus: (1) Tujuan yang jelas di awal periode — dikomunikasikan, disepakati, tertulis. (2) Feedback yang rutin di tengah — coaching, check-in, umpan balik yang tidak menunggu akhir tahun. (3) Tindakan korektif yang formal kalau ada yang meleset — bukan langsung pecat, tapi ada proses yang adil dan terdokumentasi.',
      'Hilangkan satu tahap, dan seluruh sistemnya bengkok. Kebanyakan bisnis SME hilang dua dari tiga tahap itu.',
    ],
  },
  {
    id: 'c1-card-6',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis rutin melakukan review kinerja tahunan. Tapi sepanjang tahun tidak ada coaching rutin, tidak ada tujuan tertulis di awal, dan tidak ada proses formal sebelum keputusan besar diambil. Apa yang sebenarnya sudah dimiliki bisnis ini?',
    options: [
      'Sistem manajemen kinerja yang cukup — review tahunan sudah lebih dari yang kebanyakan bisnis punya',
      'Baru satu titik dari tiga tahap yang diperlukan — bukan sistem, tapi sebuah momen penilaian saja',
      'Sistem yang sudah lengkap — yang penting ada mekanisme evaluasi di akhir tahun',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Review tahunan adalah satu titik evaluasi, bukan sistem kinerja utuh. Tanpa tujuan di awal dan feedback rutin di tengah, momen itu menjadi tidak bermakna — bahkan berbahaya karena basisnya cuma asumsi dan ingatan yang kabur.',
    errorFeedback:
      'Belum tepat. Review tahunan tanpa tujuan yang dikomunikasikan di awal dan feedback rutin di tengah bukan sistem — itu cuma satu momen penilaian yang terisolasi. Hasilnya sering terasa tidak adil dari sisi karyawan karena mereka tidak tahu ekspektasinya sepanjang jalan.',
  },
  {
    id: 'c1-card-7',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Istilahnya',
    title: '"Jebakan Kosong di Tengah": Ada Awal, Ada Akhir — Tapi Nggak Ada Apa-apa di Antara',
    body: [
      '"Jebakan kosong di tengah" adalah kondisi bisnis yang punya titik awal (orang direkrut, dikasih tahu jabatannya, mulai kerja) dan titik akhir (dipecat kalau sudah terlalu parah atau resign karena bosan) — tapi tidak ada yang sistematis di antara keduanya.',
      'Tidak ada tujuan kinerja yang jelas per periode. Tidak ada feedback rutin yang terstruktur. Tidak ada proses formal sebelum keputusan besar diambil. Yang ada hanya harapan tersirat — dan rasa kecewa yang menumpuk diam-diam di kedua belah pihak.',
      'Di kondisi ini, karyawan terbaik pun sulit untuk tumbuh dan berkontribusi maksimal — karena mereka tidak tahu ukuran suksesnya apa.',
    ],
  },
  {
    id: 'c1-card-8',
    type: 'fill-in-the-blank',
    sentence:
      'Bisnis yang punya titik awal (direkrut) dan titik akhir (dipecat) tapi tidak ada tujuan jelas, feedback rutin, atau proses formal di antaranya — itu yang disebut jebakan "________" di tengah.',
    options: ['kosong', 'penuh', 'formal', 'manual'],
    correctAnswer: 'kosong',
    successFeedback:
      'Tepat. "Jebakan kosong di tengah" — ada dua titik ekstrem, tapi nggak ada sistem yang mengisi ruang di antaranya. Karyawan jalan di kegelapan, manajer frustrasi tanpa tahu kenapa.',
    errorFeedback:
      'Belum tepat. Istilahnya "kosong" — jebakan kosong di tengah. Ada titik awal dan titik akhir, tapi tidak ada apa pun yang sistematis di antara keduanya: tidak ada tujuan jelas, tidak ada feedback rutin, tidak ada proses korektif.',
  },
  {
    id: 'c1-card-9',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Kalau Anda Sudah Ikut Modul-modul Sebelumnya',
    title: 'KPI, Ritme Review, dan SOP Sudah Ada — Tapi Itu Level Bisnis, Bukan Level Orang',
    body: [
      'Kalau Anda sudah ikut modul-modul sebelumnya: sekarang Anda mungkin punya KPI yang jelas (Modul 2), ritme review bisnis yang rutin (Modul 3), proses yang lebih efisien (Modul 4), dan SOP yang dipatuhi (Modul 5). Itu fondasi yang bagus.',
      'Tapi semua itu bekerja di level sistem dan bisnis — bukan di level orang per orang. Anda bisa punya dashboard KPI yang sempurna dan tetap tidak tahu apakah tiga karyawan di tim Anda punya tujuan kinerja yang jelas, dapat feedback rutin, dan tahu ada proses yang adil kalau mereka struggling.',
      'Kalau belum ikut modul-modul itu, tidak masalah — bab ini jalan dengan sistem apa pun yang sudah ada di bisnis Anda sekarang. Yang penting: manajemen kinerja di level orang adalah lapisan yang belum tentu ada meski sistem bisnisnya sudah bagus.',
    ],
  },
  {
    id: 'c1-card-10',
    type: 'yes-no',
    question:
      'Coba bayangkan tiga karyawan di bisnis Anda sekarang. Kalau ditanya "apa tujuan kinerja Anda periode ini, dan siapa yang terakhir kasih Anda feedback soal itu, dan kapan?" — apakah mereka bisa jawab dengan jelas dan cepat?',
    yesLabel: 'Ya, mereka bisa jawab dengan jelas',
    noLabel: 'Belum tentu — mungkin ada yang bingung atau jawabannya kabur',
    feedbackYes:
      'Kalau benar-benar iya, posisi Anda sudah lebih baik dari kebanyakan. Baca terus — modul ini akan membantu Anda membuat itu lebih konsisten dan terdokumentasi, bukan bergantung hanya pada ingatan dan hubungan personal.',
    feedbackNo:
      'Itu jawaban yang jujur. Kalau tiga orang terdekat di tim Anda tidak bisa jawab pertanyaan itu dengan cepat, itu sinyal jelas bahwa jebakan kosong di tengah sedang aktif berjalan — dan ini yang akan kita benahi.',
  },
  {
    id: 'c1-card-11',
    type: 'info',
    icon: Users,
    eyebrow: 'Dua Jenis Tim',
    title: 'Tim yang Tahu Ukurannya — vs Tim yang Cuma "Kerja Aja"',
    body: [
      'Ada dua jenis tim yang berbeda hasilnya, dan perbedaannya bukan soal siapa yang lebih rajin.',
      'Tim yang jalan baik: setiap orang tahu persis apa yang diharapkan dari mereka periode ini. Mereka dapat feedback rutin — bukan cuma "bagus" atau "buruk" tapi feedback spesifik yang bisa dipakai untuk berkembang. Dan mereka tahu kalau mereka struggling, ada proses yang adil — bukan langsung dipecat atau diabaikan.',
      'Tim yang struggling: orang-orangnya kerja berdasarkan asumsi. Feedback datang terlambat atau tidak datang sama sekali. Kalau ada yang underperform, entah dibiarkan bertahun-tahun sampai semua orang kelelahan, atau langsung diputus tanpa proses yang bisa dipahami sisa tim. Tidak ada kejelasan — dan ketidakjelasan itu mahal.',
    ],
  },
  {
    id: 'c1-card-12',
    type: 'multiple-choice',
    question:
      'Seorang karyawan berprestasi baik selama setahun tapi tidak pernah dapat feedback spesifik. Di akhir tahun dia resign karena "nggak tahu arah." Apa yang sebenarnya terjadi?',
    options: [
      'Karyawannya terlalu demanding — harusnya bisa kerja mandiri tanpa perlu terus-terusan difeedback',
      'Sistem kinerja gagal mempertahankan orang yang justru bisa berkembang dengan panduan yang jelas',
      'Ini soal kecocokan kultur — ada orang yang memang nggak cocok dengan gaya kerja bisnis ini',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Feedback rutin bukan cuma untuk karyawan yang bermasalah — itu yang membuat karyawan yang baik tetap mau berkembang dan tetap bertahan. Tanpa itu, bahkan orang terbaik pun akhirnya pergi mencari kejelasan di tempat lain.',
    errorFeedback:
      'Coba lagi. Karyawan yang berkinerja baik tapi tidak dapat arah yang jelas akan pergi — bukan karena terlalu demanding atau tidak cocok, tapi karena tidak ada sistem yang memberi mereka sinyal bahwa mereka dihargai dan punya masa depan yang jelas di sini.',
  },
  {
    id: 'c1-card-13',
    type: 'sort-list',
    question: 'Urutkan tiga tahap siklus manajemen kinerja yang lengkap dari yang pertama dijalankan:',
    items: [
      'Tindakan korektif formal kalau ada yang meleset',
      'Tujuan kinerja yang jelas dan disepakati di awal periode',
      'Feedback dan coaching rutin sepanjang periode',
    ],
    correctAnswer: [
      'Tujuan kinerja yang jelas dan disepakati di awal periode',
      'Feedback dan coaching rutin sepanjang periode',
      'Tindakan korektif formal kalau ada yang meleset',
    ],
    successFeedback:
      'Tepat. Tujuan dulu — baru bisa ada feedback yang bermakna. Feedback rutin dulu — baru tindakan korektif bisa terasa adil, bukan mendadak. Urutan ini bukan pilihan, ini prasyarat.',
    errorFeedback:
      'Belum tepat. Urutannya: tujuan di awal → feedback rutin di tengah → tindakan korektif kalau ada yang meleset. Anda tidak bisa memberikan feedback yang bermakna kalau tujuannya belum pernah ditetapkan. Dan tindakan korektif tidak terasa adil kalau feedbacknya tidak pernah ada.',
  },
  {
    id: 'c1-card-14',
    type: 'info',
    icon: Target,
    eyebrow: 'Peta Modul Ini',
    title: 'Tiga Tahap, Delapan Bab — Ini Peta yang Akan Kita Gunakan',
    body: [
      'Modul ini membangun siklus kinerja utuh di bisnis Anda, dari nol atau dari kondisi yang ada sekarang. Tiga tahap besar yang akan dibangun:',
      'Tahap 1 — Tujuan: Bab 2 kasih Anda peta penuh siklus PMS. Bab 3 ajarkan cara menetapkan tujuan kinerja yang diturunkan dari target bisnis dan disepakati bersama — bukan cuma dikomunikasikan satu arah.',
      'Tahap 2 — Coaching: Bab 4 rancang ritme coaching 1-on-1 yang realistis buat bisnis SME. Bab 5 ajarkan cara mendiagnosis underperformance — apakah ini soal skill, motivasi, atau ekspektasi yang tidak pernah jelas.',
      'Tahap 3 — Tindakan Korektif: Bab 6 bangun jalur korektif yang formal dan berjenjang sebelum keputusan besar. Bab 7 adalah lokakarya perancangan siklus utuh. Bab 8 instal semua ini jadi rutinitas bisnis yang berjalan sendiri.',
    ],
  },
  {
    id: 'c1-card-15',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Jujur ke Diri Sendiri',
    title: 'Sebutkan Satu Orang yang Tujuan Kinerjanya Masih Kabur — atau yang Lama Nggak Dapat Feedback',
    body: [
      'Hampir semua bisnis punya minimal satu orang seperti ini: karyawan yang Anda tahu kinerjanya bermasalah atau tidak berkembang, tapi belum pernah ada percakapan yang jujur dan terstruktur soal itu.',
      'Atau sebaliknya: karyawan yang sebetulnya bisa berkembang jauh lebih baik, tapi karena tidak ada tujuan yang jelas dan tidak ada feedback rutin, mereka jalan di tempat.',
      'Di kartu berikutnya, tuliskan satu nama. Bukan untuk menghakimi — tapi sebagai titik konkret yang akan Anda bawa sepanjang modul ini.',
    ],
  },
  {
    id: 'c1-card-16',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja PMS Anda',
    prompt:
      'Sebutkan satu anggota tim Anda yang tujuan kinerjanya nggak jelas, atau yang sudah lama nggak dapat feedback kinerja yang jelas dari Anda.',
    fields: [
      {
        id: 'team-member-name',
        label: 'Siapa orang yang ada di pikiran Anda sekarang?',
        placeholder: 'Nama atau peran — misalnya: admin operasional, sales senior, supervisor produksi...',
      },
      {
        id: 'gap-evidence',
        label: 'Bagaimana Anda tahu tujuan atau feedbacknya belum jelas?',
        placeholder:
          'Misalnya: saya tidak pernah duduk dengannya untuk menetapkan target periode ini, atau terakhir kali kita bahas kinerja sudah lebih dari 3 bulan lalu...',
      },
    ],
  },
  {
    id: 'c1-card-17',
    type: 'info',
    icon: Eye,
    eyebrow: 'Selesai Bab 1',
    title: 'Sekarang Anda Punya Satu Nama Konkret di Kepala',
    body: [
      'Anda baru saja mengidentifikasi satu orang di tim Anda yang jebakan kosong di tengah sedang berjalan. Itu lebih bermakna dari sekadar setuju bahwa sistemnya bermasalah.',
      'Bab berikutnya kasih Anda peta lengkap siklus manajemen kinerja — biar Anda tahu persis bagian mana yang bolong di bisnis Anda, dan mulai dari mana.',
    ],
  },
  {
    id: 'c1-card-18',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 2',
    title: 'Peta Siklus PMS: Dari Tujuan ke Coaching ke Tindakan Korektif',
    body: [
      'Sekarang Anda punya satu nama konkret di kepala. Bab berikutnya kasih Anda peta lengkap siklus manajemen kinerja, biar Anda tahu persis bagian mana yang bolong.',
      'Kita akan lihat di mana titik lemah paling umum di bisnis SME — dan mana yang jadi prioritas pertama untuk dibenahi berdasarkan kondisi spesifik bisnis Anda.',
    ],
  },
]
