import {
  Rocket,
  MessageCircle,
  Users2,
  Repeat,
  GraduationCap,
  HeartHandshake,
  Trophy,
  FileSearch,
  ListChecks,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter5Cards: Card[] = [
  {
    id: 'c5-card-1',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Bab 5 · Dari Kasus & Peta ke Rencana',
    title: 'Kasus Perubahan dan Peta Stakeholder Anda Sudah Ada — Sekarang Ubah Jadi Rencana yang Bisa Langsung Dijalankan',
    body: [
      'Di Bab 3 Anda sudah mendiagnosis lensa resistensi. Di Bab 4 Anda sudah menyusun kasus perubahan yang menjawab lensa itu, dan peta stakeholder yang bilang siapa perlu diyakinkan duluan. Itu semua masih di atas kertas — belum jadi sesuatu yang bisa Anda jalankan besok pagi.',
      'Bab ini mengunci satu perubahan nyata — bisa yang sama dari Bab 1, 3, atau 4, atau perubahan lain kalau itu lebih relevan sekarang — dan merancang rencana rollout konkretnya dalam tiga bagian: rencana komunikasi, rencana pelatihan, dan quick win di awal.',
      'Ini bukan sekadar latihan tambahan. Mulai bab ini sampai Bab 7, semua latihan mengacu ke perubahan yang sama persis yang Anda kunci di sini. Jangan biarkan jawabannya melebar jadi contoh umum — pikirkan perubahan yang benar-benar sedang atau akan Anda jalankan.',
    ],
  },
  {
    id: 'c5-card-2',
    type: 'info',
    icon: FileSearch,
    eyebrow: 'Kalau Bab 3-4 Belum Selesai',
    title: 'Belum Sempat Menyelesaikan Diagnosis Lengkap? Bab Ini Tetap Jalan',
    body: [
      'Kalau Anda sudah menyelesaikan Bab 3 dan 4 secara lengkap, Anda tinggal pakai kasus perubahan dan peta stakeholder yang sudah ada. Tapi kalau belum sempat, bab ini tetap bisa Anda jalankan buat perubahan apa pun yang sedang atau akan Anda jalankan sekarang.',
      'Caranya: sebelum masuk ke rencana rollout, luangkan sebentar buat memikirkan sekilas siapa yang mungkin resisten terhadap perubahan ini, dan kenapa — nggak perlu diagnosis penuh empat lensa, cukup dugaan awal yang cukup jelas buat jadi pegangan waktu menyusun komunikasi dan pelatihan nanti.',
      'Rencana rollout yang dibangun tanpa dugaan awal soal resistensi biasanya berakhir jadi pengumuman generik lagi — persis masalah yang sudah Anda lihat dari Bab 1. Jadi langkah kecil ini tetap wajib, seringkas apa pun bentuknya.',
    ],
  },
  {
    id: 'c5-card-3',
    type: 'info',
    icon: MessageCircle,
    eyebrow: 'Elemen 1 — Komunikasi',
    title: 'Rencana Komunikasi Punya Empat Bagian: Pesan, Penyampai, Channel, dan Waktu',
    body: [
      'Rencana komunikasi bukan cuma "saya akan mengumumkan perubahan ini." Ada empat hal yang perlu diputuskan secara sadar: pesan apa yang disampaikan, siapa yang menyampaikan, lewat channel apa, dan kapan.',
      'Pesan: ini kasus perubahan dari Bab 4, tapi disesuaikan ke audiens spesifik yang sedang Anda ajak bicara. Kasus perubahan yang sama bisa perlu ditekankan berbeda buat admin gudang dibanding buat supervisor — bukan isinya yang berubah, tapi bagian mana yang paling relevan buat mereka yang ditonjolkan duluan.',
      'Penyampai: idealnya bukan cuma Anda sebagai owner. Champion dari peta stakeholder Bab 4 — orang yang pengaruhnya besar dan dukungannya sudah jelas positif — bisa ikut menyampaikan ke rekan-rekannya sendiri. Pesan yang sama kerasa lebih meyakinkan kalau datang juga dari rekan sejawat, bukan cuma dari atasan.',
    ],
  },
  {
    id: 'c5-card-4',
    type: 'info',
    icon: Repeat,
    eyebrow: 'Elemen 1 — Komunikasi, Lanjutan',
    title: 'Channel dan Waktu: Satu Kali Pengumuman Besar Biasanya Nggak Cukup',
    body: [
      'Channel: pilih sesuai konteksnya, bukan cuma satu jenis buat semua orang. Rapat langsung cocok buat pengumuman awal yang perlu tanya-jawab. Grup WhatsApp kerja cocok buat pengingat singkat dan update berkala. One-on-one cocok khusus buat stakeholder kunci dari peta Bab 4 — terutama yang pengaruhnya besar tapi dukungannya belum jelas.',
      'Waktu: ini bagian yang paling sering diabaikan. Godaan paling umum adalah bikin satu pengumuman besar di awal, lalu anggap urusan komunikasi selesai. Kenyataannya, satu pengumuman besar gampang terlupakan dalam beberapa hari, apalagi di tengah kesibukan kerja harian.',
      'Yang lebih efektif: pesan yang sama diulang dengan cara berbeda di beberapa titik waktu — pengumuman awal di rapat, pengingat singkat di grup kerja seminggu kemudian, obrolan personal dengan stakeholder kunci di sela-sela itu. Bukan karena tim nggak dengar pertama kali, tapi karena pengulangan dengan variasi cara itu yang bikin pesan benar-benar menempel.',
    ],
  },
  {
    id: 'c5-card-5',
    type: 'yes-no',
    question:
      'Coba ingat cara Anda (atau bisnis Anda) biasanya mengumumkan perubahan selama ini. Apakah biasanya cuma satu kali pengumuman besar di awal, tanpa pengulangan lagi setelahnya lewat cara atau waktu yang berbeda?',
    yesLabel: 'Ya, biasanya cuma sekali di awal',
    noLabel: 'Nggak, biasanya memang diulang beberapa kali',
    feedbackYes:
      'Ini pola paling umum, dan sekarang Anda tahu kenapa itu sering nggak nempel — pesan yang cuma disampaikan sekali gampang tenggelam di tengah kesibukan harian. Rencana komunikasi yang Anda susun di bab ini perlu eksplisit menjadwalkan pengulangan di beberapa titik waktu.',
    feedbackNo:
      'Bagus, berarti Anda sudah punya kebiasaan yang tepat arah. Pastikan pengulangan itu tetap eksplisit direncanakan di bab ini — bukan cuma kebetulan terjadi karena Anda sering ketemu tim, tapi benar-benar dijadwalkan dengan channel dan waktu yang jelas.',
  },
  {
    id: 'c5-card-6',
    type: 'multiple-choice',
    question:
      'Sebuah toko punya admin senior yang pengaruhnya besar tapi dukungannya belum jelas terhadap aplikasi stok baru (dari peta stakeholder Bab 4). Channel komunikasi mana yang paling tepat khusus buat menjangkau admin senior ini?',
    options: [
      'Diumumkan lewat grup WhatsApp toko yang isinya semua admin, sama seperti yang lain',
      'Ditempel pengumuman tertulis di ruang istirahat',
      'One-on-one — ngobrol empat mata, dengar keberatannya langsung, baru sampaikan kasus perubahan yang sudah disesuaikan',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Stakeholder dengan pengaruh besar dan dukungan belum jelas butuh perhatian personal, bukan cuma pesan massal yang sama dengan semua orang. One-on-one memberi ruang buat dia menyampaikan keberatan dan buat Anda menjawabnya secara spesifik.',
    errorFeedback:
      'Belum tepat. Stakeholder kunci dengan pengaruh besar dan dukungan belum jelas — seperti admin senior ini — butuh channel personal, one-on-one, bukan pesan massal lewat grup atau pengumuman tertulis yang sama dengan semua orang.',
  },
  {
    id: 'c5-card-7',
    type: 'info',
    icon: GraduationCap,
    eyebrow: 'Elemen 2 — Pelatihan',
    title: 'Bentuk Pelatihan Harus Sesuai Kompleksitas Perubahannya — Bukan Pengumuman Lisan Sekali',
    body: [
      'Balik ke Lensa 4 dari Bab 3: banyak "resistensi" yang kelihatan dari luar sebenarnya cuma karena orang belum pernah benar-benar dilatih. Yang kelihatan seperti sikap menolak, sering kali cuma kesulitan praktis yang nggak ada tempat aman buat diakui.',
      'Rencana pelatihan yang gagal biasanya berbentuk salah satu dari dua ini: pengumuman lisan sekali di tengah kesibukan, atau dokumen SOP yang ditempel begitu saja tanpa pendampingan. Keduanya terasa "sudah dilakukan" dari sisi Anda, tapi nggak benar-benar membekali tim buat lancar memakainya.',
      'Bentuk pelatihan yang lebih efektif disesuaikan ke kompleksitas perubahannya: demo langsung hands-on buat tool atau proses baru yang perlu dipraktikkan tangan sendiri, sesi tanya-jawab buat perubahan yang lebih soal pemahaman konsep atau SOP, dan sistem buddy/mentor antar karyawan buat pendampingan berkelanjutan setelah sesi awal selesai.',
    ],
  },
  {
    id: 'c5-card-8',
    type: 'info',
    icon: HeartHandshake,
    eyebrow: 'Elemen 2 — Pelatihan, Kenapa Buddy System Penting',
    title: 'Satu Sesi di Awal Nggak Cukup — Pertanyaan Baru Muncul Setelah Dicoba Sendiri',
    body: [
      'Pola yang sering terjadi: tim ikut satu sesi pelatihan, kelihatan paham waktu itu, lalu dua minggu kemudian masih sering salah langkah atau tanya hal yang sama berulang kali ke rekan kerja. Ini bukan tanda pelatihannya gagal total — ini tanda pertanyaan baru memang baru muncul setelah dicoba di situasi nyata, bukan waktu demo.',
      'Sistem buddy atau mentor menjawab celah ini: pasangkan orang yang sudah lancar dengan yang masih belajar, biar ada tempat bertanya yang nggak bikin merasa dipermalukan (ingat Lensa 1) dan nggak harus menunggu sesi pelatihan resmi berikutnya buat mendapat jawaban.',
      'Champion dari peta stakeholder Bab 4 sering jadi kandidat buddy paling pas — mereka sudah menunjukkan dukungan sejak awal, dan biasanya justru senang dilibatkan buat membantu rekan-rekannya.',
    ],
  },
  {
    id: 'c5-card-9',
    type: 'fill-in-the-blank',
    sentence:
      'Rencana pelatihan yang cuma berupa pengumuman lisan sekali atau dokumen yang ditempel gagal efektif karena banyak "resistensi" yang kelihatan dari luar sebenarnya cuma karena orangnya belum pernah benar-benar ________.',
    options: ['dilatih', 'diperingatkan', 'diawasi', 'dinilai'],
    correctAnswer: 'dilatih',
    successFeedback:
      'Tepat. Ini balik ke Lensa 4 dari Bab 3 — yang kelihatan seperti penolakan sikap sering kali cuma kesulitan praktis karena belum pernah benar-benar dilatih sampai lancar.',
    errorFeedback:
      'Belum tepat. Kata kuncinya "dilatih" — ini balik ke Lensa 4 dari Bab 3, di mana resistensi yang kelihatan dari luar sebenarnya cuma soal belum pernah benar-benar dilatih sampai lancar, bukan soal sikap.',
  },
  {
    id: 'c5-card-11',
    type: 'info',
    icon: Trophy,
    eyebrow: 'Elemen 3 — Quick Win',
    title: 'Kemenangan Kecil di Minggu-Minggu Pertama — Bukan Transformasi Besar dalam Sehari',
    body: [
      'Komunikasi dan pelatihan yang bagus masih bisa goyah kalau tim nggak merasakan apa pun yang berubah dalam beberapa minggu pertama. Di sinilah quick win masuk: kemenangan kecil dan cepat yang bisa dirasakan tim di awal, bukan janji transformasi besar yang baru kelihatan hasilnya bulan depan.',
      'Quick win yang baik punya tiga ciri: hasilnya kelihatan jelas — bukan sesuatu yang cuma bisa dilihat lewat laporan angka yang Anda baca sendiri, tapi sesuatu yang tim sendiri bisa rasakan langsung. Terkait langsung ke untung yang dijanjikan di kasus perubahan Bab 4 — bukan kemenangan acak yang nggak nyambung ke alasan perubahan ini dilakukan.',
      'Dan yang ketiga: bisa dicapai tanpa harus menunggu adopsi penuh dari seluruh tim. Kalau quick win Anda baru bisa terjadi setelah semua orang 100% lancar pakai sistem baru, itu bukan quick win — itu tujuan akhir yang dikasih nama lain.',
    ],
  },
  {
    id: 'c5-card-12',
    type: 'multiple-choice',
    question:
      'Sebuah toko ganti aplikasi pencatatan stok, dengan kasus perubahan: "biar Anda nggak perlu mindahin catatan dua kali dari buku ke sistem tiap malam." Mana dari berikut ini quick win yang paling tepat buat minggu pertama?',
    options: [
      'Menunggu sampai laporan stok bulanan pertama keluar sempurna tanpa selisih sama sekali',
      'Menunjukkan ke admin di akhir minggu pertama bahwa waktu tutup toko mereka pulang lebih cepat karena nggak perlu lagi mindahin catatan dua kali malam itu',
      'Mengadakan acara syukuran peluncuran aplikasi di kantor',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini quick win yang pas — hasilnya kelihatan jelas (pulang lebih cepat), langsung terkait ke untung yang dijanjikan di kasus perubahan (nggak perlu mindahin catatan dua kali), dan nggak perlu menunggu semua admin lancar penuh dulu.',
    errorFeedback:
      'Belum tepat. Quick win yang tepat adalah yang hasilnya kelihatan jelas, langsung terkait ke untung yang dijanjikan di kasus perubahan, dan bisa dicapai cepat tanpa menunggu adopsi penuh. Laporan bulanan sempurna butuh waktu lama, dan acara syukuran nggak terkait ke untung konkret yang dijanjikan.',
  },
  {
    id: 'c5-card-13',
    type: 'info',
    icon: Users2,
    eyebrow: 'Contoh Kasus',
    title: 'Balik ke Toko dengan Tiga Admin — Sekarang Rancang Rollout Lengkapnya',
    body: [
      'Ingat contoh dari Bab 3-4: toko retail ganti pencatatan stok manual ke aplikasi tablet, tiga admin diam-diam balik ke catatan manual. Diagnosisnya: kombinasi Lensa 1 (takut kelihatan lelet di depan pelanggan) dan Lensa 2 (nggak jelas untungnya buat mereka pribadi). Admin senior delapan tahun jadi stakeholder prioritas — pengaruh besar, dukungan belum jelas.',
      'Owner sudah punya kasus perubahan dari Bab 4: "Kita pakai aplikasi ini biar Anda nggak perlu mindahin catatan dua kali dari buku ke sistem tiap malam — dan minggu ini kita latihan bareng dulu di jam tutup toko, bukan pas lagi ramai pelanggan." Sekarang owner mengubah itu jadi rencana rollout tiga bagian.',
    ],
  },
  {
    id: 'c5-card-14',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Contoh Kasus · Rollout Lengkap',
    title: 'Komunikasi, Pelatihan, dan Quick Win — Semua Menjawab Lensa 1 dan 2',
    body: [
      'Komunikasi: pesan disampaikan pertama kali di rapat singkat sebelum toko buka, memakai kasus perubahan dari Bab 4. Admin junior yang sudah jadi champion diminta ikut cerita pengalamannya sendiri ke rekan-rekan di rapat itu — bukan cuma owner yang bicara. Seminggu kemudian, diingatkan lagi lewat grup WhatsApp toko. Dan khusus buat admin senior, owner ngobrol one-on-one di hari sebelumnya, dengar keberatannya soal keliatan lelet di depan pelanggan.',
      'Pelatihan: bukan cuma pengumuman lisan sekali. Owner mengadakan sesi hands-on di jam tutup toko, saat nggak ada pelanggan yang menyaksikan — langsung menjawab Lensa 1. Admin junior yang champion dipasangkan jadi buddy buat admin lain yang masih ragu, jadi ada tempat bertanya tanpa harus ke owner tiap kali.',
      'Quick win: di akhir minggu pertama, owner menunjukkan ke ketiga admin yang tadinya balik ke catatan manual bahwa mereka pulang rata-rata 15 menit lebih cepat karena nggak perlu lagi mindahin catatan dua kali di malam hari. Ini kelihatan jelas, langsung terkait ke untung yang dijanjikan di kasus perubahan, dan nggak perlu menunggu semua toko lancar 100%.',
      'Perhatikan: ketiga elemen ini saling menguatkan, dan semuanya balik menjawab Lensa 1 dan 2 yang sudah terdiagnosis — bukan rencana rollout generik yang bisa ditempel di perubahan lain mana saja.',
    ],
  },
  {
    id: 'c5-card-15',
    type: 'sort-list',
    question:
      'Berdasarkan contoh toko di atas, urutkan ketiga elemen rollout dari yang pertama kali dilakukan sampai yang terakhir dalam garis waktu minggu pertama:',
    items: [
      'Quick win — menunjukkan admin pulang lebih cepat karena nggak perlu mindahin catatan dua kali',
      'Komunikasi — rapat singkat sebelum toko buka, dengan champion ikut cerita, ditambah one-on-one dengan admin senior',
      'Pelatihan — sesi hands-on di jam tutup toko, dengan champion jadi buddy admin lain',
    ],
    correctAnswer: [
      'Komunikasi — rapat singkat sebelum toko buka, dengan champion ikut cerita, ditambah one-on-one dengan admin senior',
      'Pelatihan — sesi hands-on di jam tutup toko, dengan champion jadi buddy admin lain',
      'Quick win — menunjukkan admin pulang lebih cepat karena nggak perlu mindahin catatan dua kali',
    ],
    successFeedback:
      'Tepat. Urutan logisnya: komunikasi dulu biar tim tahu apa dan kenapa, pelatihan biar mereka benar-benar bisa menjalankannya, baru quick win di akhir minggu pertama sebagai bukti nyata bahwa untungnya beneran ada.',
    errorFeedback:
      'Belum tepat. Urutannya: komunikasi dulu (tim perlu tahu apa dan kenapa sebelum apa pun), pelatihan berikutnya (biar benar-benar bisa menjalankannya), dan quick win di akhir sebagai bukti nyata dari untung yang sudah dijanjikan sejak awal.',
  },
  {
    id: 'c5-card-16',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Sebelum Entri Kelima',
    title: 'Sekarang Kunci Perubahan Anda, dan Rancang Rollout-nya',
    body: [
      'Sebelum lanjut, kunci dulu satu perubahan nyata yang akan jadi fokus Anda dari sini sampai Bab 7. Bisa perubahan yang sama dari Bab 1, 3, atau 4 — atau perubahan lain kalau itu lebih relevan buat Anda sekarang. Yang penting: satu perubahan konkret, bukan gabungan beberapa hal sekaligus.',
      'Setelah itu, rancang rencana komunikasinya: pesan apa (dari kasus perubahan Anda), siapa yang menyampaikan, lewat channel apa, dan kapan diulang. Rancang rencana pelatihannya: bentuk apa yang sesuai kompleksitas perubahan Anda — demo hands-on, tanya-jawab, atau buddy system. Dan tentukan satu quick win yang bisa dirasakan tim dalam minggu-minggu pertama.',
      'Nggak perlu sempurna atau sepanjang contoh toko di atas. Yang penting tiga elemen ini eksplisit tertulis, bukan cuma niat di kepala.',
    ],
  },
  {
    id: 'c5-card-17',
    type: 'reflection',
    eyebrow: 'Entri Kelima · Buku Kerja Change Management',
    prompt:
      'Kunci satu perubahan nyata yang akan Anda fokuskan dari Bab 5 sampai Bab 7, dan rancang rencana rollout tiga bagiannya.',
    fields: [
      {
        id: 'locked-change',
        label:
          'Sebutkan satu perubahan nyata yang akan Anda fokuskan dari sini sampai Bab 7 (bisa yang sama dari bab-bab sebelumnya, atau yang lain)',
        placeholder: 'Misalnya: pindah dari catatan stok manual ke aplikasi tablet di toko...',
      },
      {
        id: 'comms-training-plan',
        label: 'Rencana komunikasi & pelatihan singkat Anda',
        placeholder:
          'Misalnya: rapat singkat sebelum jam kerja + one-on-one dengan supervisor gudang, diulang lewat grup WhatsApp seminggu kemudian; pelatihan hands-on 30 menit dengan admin senior jadi buddy...',
      },
      {
        id: 'quick-win',
        label: 'Quick win apa yang ingin Anda capai di minggu-minggu pertama?',
        placeholder:
          'Misalnya: tim pulang lebih cepat di minggu pertama karena nggak perlu lagi mengerjakan langkah ganda...',
      },
    ],
  },
  {
    id: 'c5-card-18',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 6',
    title: 'Rencana Rollout Anda Sudah Ada di Atas Kertas',
    body: [
      'Anda sekarang punya rencana rollout konkret untuk satu perubahan nyata — komunikasi yang menjawab audiens spesifik, pelatihan yang sesuai kompleksitasnya, dan quick win yang bisa dirasakan tim di awal.',
      'Bab 6 masuk ke bagian yang beda sama sekali — menjalankannya beneran di lapangan, dan apa yang harus dilakukan begitu resistensi (atau sinyal rollout mulai balik ke cara lama) muncul di tengah jalan.',
    ],
  },
]
