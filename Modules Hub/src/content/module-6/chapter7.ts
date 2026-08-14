import {
  Layers,
  Link,
  RefreshCw,
  Eye,
  Target,
  BookOpen,
  ArrowRight,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter7Cards: Card[] = [
  {
    id: 'c7-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 7 · Lokakarya PMS',
    title: 'Empat Bab Terakhir Bukan Latihan Terpisah — Sekarang Kita Satukan Jadi Satu Siklus Utuh',
    body: [
      'Di Bab 3, Anda menetapkan tujuan kinerja yang kolaboratif dan diturunkan jelas dari tujuan bisnis — disepakati bersama, tertulis, punya tolak ukur yang bisa dicek. Di Bab 4, Anda merancang ritme coaching 1-on-1 yang rutin — frekuensi yang cukup pendek untuk berguna, agenda yang cukup terstruktur untuk terarah.',
      'Di Bab 5, Anda mendiagnosis underperformance kasus konkret Anda: skill gap, will gap, atau ekspektasi yang tidak pernah jelas. Di Bab 6, Anda merancang jalur tindakan korektif yang formal dan berjenjang sebelum keputusan besar diambil.',
      'Sekarang keempat bagian itu masih berdiri sendiri-sendiri — hasil empat latihan yang terpisah. Bab ini menyatukannya jadi satu siklus manajemen kinerja yang utuh, konkret, dan siap dijalankan untuk satu tim atau peran nyata di bisnis Anda.',
    ],
  },
  {
    id: 'c7-card-2',
    type: 'info',
    icon: Link,
    eyebrow: 'Satu Siklus, Bukan Tiga Alat',
    title: 'Beda antara Punya Tiga Alat Terpisah vs Punya Satu Siklus yang Beneran Menyambung',
    body: [
      'Banyak bisnis yang sudah punya ketiga bagian — ada penetapan target, ada 1-on-1, ada proses kalau ada yang bermasalah. Tapi kalau ketiganya berjalan sendiri-sendiri, hasilnya tetap patah-patah: penetapan target dilakukan tapi tidak pernah dirujuk lagi di 1-on-1. Coaching rutin berjalan tapi tidak terkoneksi ke tujuan yang sudah disepakati. Tindakan korektif muncul tiba-tiba karena tidak ada jembatan dari coaching ke jalur formal.',
      'Satu siklus yang utuh berarti ketiganya menyambung: tujuan yang ditetapkan di awal menjadi materi 1-on-1 di tengah. Coaching rutin menjadi dasar diagnosis kalau ada yang underperform. Dan jalur korektif menjadi langkah berikutnya yang alami — bukan kejutan — kalau coaching tidak cukup.',
      'Ini yang membuat siklus terasa adil: semua orang tahu apa yang diharapkan dari awal, dapat feedback sepanjang jalan, dan tahu ada proses yang jelas kalau ada yang tidak berjalan. Tidak ada yang bisa bilang "saya tidak tahu" — dan tidak ada yang bisa dihukum atas standar yang tidak pernah dikomunikasikan.',
    ],
  },
  {
    id: 'c7-card-3',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Sebelum vs Sesudah',
    title: 'Siklus Lama vs Siklus Baru: Seperti Apa Perbedaannya di Lapangan',
    body: [
      'SIKLUS LAMA — yang sangat familiar: Satu titik evaluasi di akhir tahun mencoba merangkap semuanya. Di satu sesi yang sama, manajer mencoba menyampaikan tujuan yang harusnya ada dari awal, memberikan feedback sepanjang tahun yang tidak pernah diberikan, dan mengambil keputusan korektif yang tidak ada proses formalnya. Hasilnya: karyawan kaget, manajer frustrasi, keputusan terasa tidak adil di kedua sisi.',
      'SIKLUS BARU — yang sudah Anda rancang: Tiga tahap yang jelas dan saling menyambung. Tujuan ditetapkan secara kolaboratif sebelum periode dimulai, diturunkan dari tujuan bisnis, spesifik dan terukur. Coaching rutin berjalan sepanjang periode, membahas progres terhadap tujuan itu, hambatan, dan feedback dua arah. Kalau ada yang underperform meski dua tahap pertama sudah berjalan, ada jalur korektif yang formal, berjenjang, dan terdokumentasi.',
      'Bedanya bukan di niat — bisnis yang cuma punya review tahunan pun niatnya bagus. Bedanya di desain. Siklus yang dirancang untuk berputar terus vs satu momen yang mencoba merangkap semuanya dan tidak pernah cukup untuk merangkap apapun.',
    ],
  },
  {
    id: 'c7-card-4',
    type: 'multiple-choice',
    question:
      'Tim sales sebuah bisnis punya target kuartal yang jelas dan disetujui setiap awal kuartal. Manajernya juga aktif coaching kalau ada yang kinerjanya drop. Tapi ketika seorang staf tidak memenuhi target dua kuartal berturut-turut, manajernya bingung — tidak ada proses formal, dan keputusan akhir terasa mendadak buat semua orang. Tahap mana yang masih bolong?',
    options: [
      'Tahap 1 (Penetapan Tujuan) — targetnya belum cukup spesifik atau belum benar-benar disepakati bersama',
      'Tahap 2 (Coaching Rutin) — tidak ada check-in terstruktur yang bisa mendeteksi masalah lebih awal',
      'Tahap 3 (Tindakan Korektif) — penetapan tujuan dan coaching sudah ada, tapi tidak ada jalur korektif yang formal dan berjenjang',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Tahap 1 dan 2 sudah berjalan di skenario ini — target jelas, coaching aktif. Yang bolong adalah Tahap 3: tidak ada jalur tindakan korektif yang formal dan berjenjang setelah coaching biasa tidak cukup. Tanpa Tahap 3, manajer terjebak di antara terus coaching yang tidak menghasilkan perubahan, atau langsung keputusan besar yang terasa tidak punya dasar.',
    errorFeedback:
      'Belum tepat. Baca skenarionya lagi: target sudah jelas dan disetujui di awal kuartal (Tahap 1 ada), coaching aktif berjalan kalau ada masalah (Tahap 2 ada). Yang hilang adalah Tahap 3 — jalur formal setelah coaching biasa tidak cukup. Tanpa Tahap 3, siklus PMS-nya tidak lengkap dan keputusan akhir selalu akan terasa mendadak.',
  },
  {
    id: 'c7-card-5',
    type: 'info',
    icon: Eye,
    eyebrow: 'Langkah Pertama Lokakarya',
    title: 'Sebelum Menyatukan Semua Bagian, Konfirmasi Satu Hal dari Bab 5',
    body: [
      'Sebelum merakit siklus yang utuh, ada satu langkah yang tidak boleh dilompati: konfirmasi bahwa diagnosis underperformance dari Bab 5 masih akurat — dan bahwa jalur tindakan korektif yang sudah dirancang di Bab 6 beneran cocok untuk kasus itu.',
      'Ini penting karena siklus PMS yang lengkap tidak bersifat generik. Kalau diagnosisnya meleset, jalur korektifnya pun ikut meleset. Dan jalur korektif yang salah sasaran tidak menghasilkan perbaikan — itu hanya membuang waktu dan energi di kedua pihak. Mengirim ke pelatihan orang yang sebetulnya butuh percakapan motivasi. Atau sebaliknya.',
      'Kartu berikutnya menampilkan kembali apa yang Anda tulis di Bab 5 — dan meminta Anda menilai seberapa yakin bahwa jalur yang dirancang di Bab 6 beneran cocok untuk kasus itu.',
    ],
  },
  {
    id: 'c7-card-6',
    type: 'finding-review',
    eyebrow: 'Entri Ketujuh · Buku Kerja PMS Anda',
    title: 'Seberapa Yakin Jalur Korektif di Bab 6 Beneran Cocok untuk Kasus yang Anda Diagnosis?',
    recap: [
      {
        label: 'Kasus underperformance yang Anda diagnosis (Bab 5)',
        cardId: 'c5-card-16',
        fieldId: 'underperformer-case',
      },
      {
        label: 'Lensa yang paling dominan — skill gap, will gap, atau ekspektasi nggak jelas (Bab 5)',
        cardId: 'c5-card-16',
        fieldId: 'dominant-lens',
      },
    ],
    scorePrompt:
      'Setelah merancang jalur tindakan korektif di Bab 6 berdasarkan diagnosis ini — seberapa yakin bahwa jalur itu benar-benar cocok untuk kasusnya dan bisa menghasilkan perbaikan nyata?',
    justificationLabel: 'Kenapa Anda (belum) yakin — dan apa yang masih mengganjal?',
    justificationPlaceholder:
      'Contoh: Cukup yakin — diagnosisnya skill gap dan pelatihan teknis yang dirancang di Bab 6 langsung menyentuh akarnya. Yang sedikit mengganjal: belum tahu apakah ada anggaran untuk pelatihan eksternal yang dibutuhkan...',
    storageKey: 'chapter7-corrective-action-review',
  },
  {
    id: 'c7-card-7',
    type: 'info',
    icon: Target,
    eyebrow: 'Cara Menyatukan',
    title: 'Satu Tim, Satu Siklus — Cara Mengkoneksikan Tiga Bagiannya Secara Konkret',
    body: [
      'Menyatukan tiga bagian bukan berarti menulis ulang semuanya dari nol. Artinya menentukan: untuk satu tim atau peran tertentu — bisa tim yang sama dari bab-bab sebelumnya, atau satu tim secara keseluruhan — apa mekanisme penetapan tujuannya, seperti apa ritme coaching-nya, dan kalau relevan, seperti apa jalur korektifnya.',
      'Konkretnya: mekanisme penetapan tujuan (kapan, bagaimana, siapa yang terlibat, terukur seperti apa — langsung dari Bab 3). Ritme coaching (frekuensi, durasi, agenda tetapnya apa — dari Bab 4). Jalur korektif (mulai dari ruas mana berdasarkan lensa dominan, kapan eskalasi relevan — dari Bab 5–6).',
      'Tiga bagian ini harus saling referensi: check-in coaching merujuk ke tujuan yang sudah ditetapkan. Kalau ada yang underperform, coaching tertarget menjadi langkah pertama yang natural — bukan keputusan mendadak. Dan kalau jalur korektif diaktifkan, ada dasar yang bisa dipertanggungjawabkan karena tujuan sudah jelas sejak awal dan coaching sudah berjalan.',
    ],
  },
  {
    id: 'c7-card-8',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Satu Hal yang Sering Dilompati',
    title: 'Cara Memperkenalkan Siklus Baru ke Tim Tanpa Bikin Orang Defensif atau Takut',
    body: [
      'Begitu siklus PMS selesai dirancang, godaan terbesar adalah langsung mengimplementasikan: kirim email "mulai bulan depan kita punya sistem manajemen kinerja baru," tempel agenda 1-on-1 di kalender, dan menunggu semua orang ikut dengan sendirinya.',
      'Yang sering terjadi: terutama bagian tindakan korektifnya bisa kerasa mengancam kalau tidak dijelaskan dengan benar. Karyawan yang belum pernah ada sistem formal langsung mengisi kekosongan itu sendiri: "Ini cara manajemen cari-cari alasan untuk pecat orang." Dan siklus yang seharusnya membantu semua orang malah dimulai dengan ketidakpercayaan.',
      'Framing yang benar: ini sistem yang adil untuk semua orang — bukan alat untuk diam-diam memantau. Semua orang dapat tujuan yang jelas di awal. Semua orang dapat feedback rutin di tengah. Dan kalau ada yang tidak berjalan, ada proses yang jelas dan terdokumentasi — bukan keputusan yang tiba-tiba jatuh dari langit. Sistem yang adil itu justru melindungi karyawan yang perform baik, bukan mengincar yang bermasalah.',
    ],
  },
  {
    id: 'c7-card-9',
    type: 'yes-no',
    question:
      'Bayangkan Anda mengumumkan siklus PMS baru ke tim besok — lengkap dengan penetapan tujuan, coaching rutin, dan jalur korektif — tanpa penjelasan kenapa Anda memperkenalkan ini sekarang dan apa yang akan berubah bagi mereka. Apa yang paling mungkin terjadi dalam dua minggu pertama?',
    yesLabel: 'Tim langsung antusias — kalau sistemnya bagus, orang akan merespons positif sendiri',
    noLabel: 'Banyak yang skeptis atau diam-diam defensif — perubahan tanpa konteks jarang langsung diterima',
    feedbackYes:
      'Ini yang sering diasumsikan — dan jarang terjadi di praktik. Karyawan yang tidak tahu kenapa sistem ini diperkenalkan sekarang akan mengisi kekosongan itu sendiri dengan asumsinya masing-masing. Niat yang baik tidak otomatis dibaca sebagai niat yang baik. Perlu penjelasan eksplisit: kenapa sekarang, apa yang berubah, dan bagaimana ini adil untuk semua orang.',
    feedbackNo:
      'Tepat. Perubahan tanpa konteks hampir selalu ditanggapi dengan kecurigaan — terutama kalau bagian tindakan korektifnya disebutkan. Investasikan waktu untuk menjelaskan kenapa siklus ini diperkenalkan, apa yang berubah bagi setiap orang, dan bahwa ini sistem yang adil untuk semua orang — bukan alat pengawasan diam-diam.',
  },
  {
    id: 'c7-card-10',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Lengkap',
    title: 'Satu Tim, Satu Siklus Utuh: Tim Customer Service di Bisnis E-commerce',
    body: [
      'TIM: 4 orang customer service di bisnis e-commerce, dikelola satu manajer operasional. Sebelumnya: tidak ada tujuan kinerja yang jelas per orang, feedback hanya datang kalau ada komplain dari pelanggan atau pemilik, dan ketika ada yang underperform tidak ada proses yang bisa dijalankan selain "tolong diperbaiki."',
      'PENETAPAN TUJUAN (Bab 3): Setiap awal kuartal, sesi cascading 30 menit per orang. Tujuan tim: tingkatkan rata-rata rating kepuasan pelanggan dari 3.8 ke 4.3 dalam satu tahun. Tujuan individu CS Officer: pertahankan rating chat rata-rata 4.2, respons dalam 2 jam kerja pertama untuk minimal 90% tiket. Tujuan CS Koordinator: selesaikan eskalasi dalam 24 jam, dokumentasi tiket komplain 100%. Disepakati dan tertulis di form bersama. RITME COACHING (Bab 4): 1-on-1 dua mingguan 20 menit setiap Senin. Agenda tetap: progres vs target, hambatan, feedback dua arah, satu action item penutup.',
      'JALUR KOREKTIF (Bab 5–6): Satu CS Officer kinerjanya drop tiga bulan berturut-turut — diagnosis Bab 5: will gap. Kemampuannya ada, target sudah jelas, tapi motivasinya bermasalah sejak ada konflik internal yang tidak pernah dibahas langsung. Tangga #1 (Coaching Tertarget) diaktifkan: percakapan eksplisit yang menamai masalah, dua komitmen konkret yang disepakati, check-in mingguan, hasilnya tertulis. Setelah empat minggu ada progres nyata — proses coaching berlanjut tanpa perlu eskalasi. MEMPERKENALKAN KE TIM: Sesi 15 menit di briefing bulanan — tunjukkan sistem baru, jelaskan kenapa ini adil untuk semua orang, beri ruang satu minggu untuk pertanyaan sebelum resmi diberlakukan.',
    ],
  },
  {
    id: 'c7-card-11',
    type: 'multiple-choice',
    question:
      'Di contoh tim customer service, kenapa jalur korektif yang dipilih dimulai dari Coaching Tertarget (Tangga #1), bukan Pelatihan (Tangga #2)?',
    options: [
      'Karena Coaching Tertarget selalu harus menjadi langkah pertama sebelum ruas lain bisa diaktifkan',
      'Karena diagnosisnya will gap — kemampuan ada dan target sudah jelas, tapi ada hambatan motivasi yang perlu digali dan dibahas langsung',
      'Karena Pelatihan membutuhkan waktu dan biaya lebih besar, sementara Coaching Tertarget lebih efisien untuk kasus apapun',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Pilihan ruas korektif selalu dimulai dari diagnosis — bukan urutan tangga secara kaku. Diagnosisnya will gap: orangnya bisa dan tahu standarnya. Yang dibutuhkan adalah percakapan yang menamai hambatan motivasinya secara eksplisit, bukan pelatihan yang tidak akan menyentuh akarnya sama sekali.',
    errorFeedback:
      'Belum tepat. Tangga korektif tidak harus selalu dimulai dari Tangga #1 — titik masuknya ditentukan oleh diagnosis. Di skenario ini diagnosisnya will gap: kemampuan ada, standar jelas, tapi ada hambatan motivasi yang belum pernah dibahas. Pelatihan adalah respons untuk skill gap — tidak relevan di sini. Dan pertimbangan biaya bukan faktor penentu; diagnosisnya yang menentukan ruas mana yang paling tepat.',
  },
  {
    id: 'c7-card-12',
    type: 'info',
    icon: ShieldCheck,
    eyebrow: 'Giliran Anda',
    title: 'Sekarang Rakit Siklus Lengkap Anda Sendiri — untuk Satu Tim atau Peran Nyata',
    body: [
      'Anda sudah lihat contoh lengkapnya. Sekarang giliran Anda: tentukan satu tim atau peran yang jadi fokus siklus PMS ini — bisa tim yang sama yang sudah Anda kerjakan dari bab-bab sebelumnya, atau digeneralisasi ke seluruh tim kalau itu lebih relevan.',
      'Tiga bagian yang perlu disatukan sudah ada: mekanisme penetapan tujuannya dari Bab 3, ritme coaching-nya dari Bab 4, dan jalur korektifnya dari Bab 5–6. Yang perlu dilakukan sekarang adalah mengambil ketiga bagian itu dan merakitnya jadi satu gambaran yang utuh untuk satu tim — bukan tiga catatan terpisah dari tiga bab terpisah.',
      'Siklus yang tersusun di kartu berikutnya bukan sekadar latihan. Itu yang akan menjadi dasar instalasi di Bab 8 — bab yang mengubah rancangan ini jadi rutinitas bisnis yang berjalan sendiri.',
    ],
  },
  {
    id: 'c7-card-13',
    type: 'reflection',
    eyebrow: 'Entri Kedelapan · Buku Kerja PMS Anda',
    prompt:
      'Tuliskan siklus manajemen kinerja yang utuh untuk satu tim atau peran yang Anda pilih — satukan penetapan tujuan, ritme coaching, dan jalur korektif menjadi satu gambaran yang konkret.',
    fields: [
      {
        id: 'focus-team-role',
        label: 'Tim/peran mana yang jadi fokus siklus ini?',
        placeholder:
          'Misalnya: tim customer service 4 orang, atau sales executive, atau supervisor produksi — dan kenapa tim atau peran ini yang dipilih...',
      },
      {
        id: 'goal-and-coaching',
        label: 'Gimana tujuan ditetapkan dan ritme coaching-nya?',
        placeholder:
          'Misalnya: tujuan ditetapkan per kuartal lewat cascading 30 menit, tertulis dan disepakati bersama — ritme coaching 1-on-1 dua mingguan 20 menit, agenda tetap: progres vs target, hambatan, feedback dua arah, satu action item...',
      },
      {
        id: 'corrective-pathway',
        label: 'Kalau ada tindakan korektif yang relevan, seperti apa jalurnya?',
        placeholder:
          'Misalnya: kalau ada yang underperform meski tujuan sudah jelas dan coaching sudah rutin, mulai dari coaching tertarget 4 minggu dengan check-in mingguan — kalau tidak ada progres, eskalasi ke PIP dengan target spesifik dan konsekuensi yang eksplisit. Kalau tidak ada kasus yang relevan saat ini, tuliskan kapan jalur ini akan diaktifkan...',
      },
    ],
  },
  {
    id: 'c7-card-14',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 7',
    title: 'Siklus PMS-nya Sekarang Utuh di Atas Kertas — Bab Terakhir: Cara Menginstalnya',
    body: [
      'Anda baru saja menyelesaikan lokakarya penuh: siklus PMS yang utuh untuk satu tim nyata di bisnis Anda — tujuan yang jelas di awal, coaching yang rutin di tengah, dan jalur korektif yang formal kalau ada yang tidak berjalan. Tiga tahap yang dirancang untuk saling menyambung, bukan tiga alat yang berdiri sendiri-sendiri.',
      'Siklus PMS-nya sekarang utuh di atas kertas. Bab terakhir: cara menginstalnya biar beneran jalan terus — bukan cuma rancangan bagus yang berakhir dilupakan kayak review tahunan lama — dan laporan lengkap dari semua yang sudah Anda kerjakan sejak Bab 1.',
    ],
  },
]
