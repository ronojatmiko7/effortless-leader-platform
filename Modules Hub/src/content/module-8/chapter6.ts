import {
  Rocket,
  Trophy,
  AlertTriangle,
  Ear,
  MessageCircle,
  Scale,
  Users2,
  ListChecks,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter6Cards: Card[] = [
  {
    id: 'c6-card-1',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Bab 6 · Dari Rencana ke Lapangan',
    title: 'Rencana Rollout Sudah Ada di Atas Kertas — Sekarang Saatnya Diuji Sama Orang Sungguhan',
    body: [
      'Di Bab 5 Anda sudah mengunci satu perubahan nyata dan merancang rencana rollout tiga bagian: komunikasi yang menjawab audiens spesifik, pelatihan yang sesuai kompleksitas perubahan, dan satu quick win yang bisa dirasakan tim di minggu-minggu pertama.',
      'Rencana yang bagus di atas kertas bukan jaminan apa-apa begitu ketemu orang sungguhan dengan reaksi sungguhan. Ada yang diam-diam nggak nyaman meski nggak bilang apa-apa. Ada yang awalnya semangat lalu pelan-pelan balik ke kebiasaan lama tanpa Anda sadari kapan persisnya itu mulai. Ada juga yang langsung terang-terangan keberatan di tengah kerja.',
      'Bab ini nggak menambah elemen baru ke rencana Anda. Bab ini kasih Anda teknik buat menjalankan rencana yang sudah ada itu di lapangan yang beneran messy — menjaga momentum, mengenali tanda bahaya sebelum terlambat, dan menangani resistensi yang muncul langsung di depan Anda.',
    ],
  },
  {
    id: 'c6-card-2',
    type: 'info',
    icon: Trophy,
    eyebrow: 'Merayakan Quick Win',
    title: 'Begitu Quick Win Tercapai, Jangan Biarkan Lewat Diam-Diam',
    body: [
      'Anda sudah menentukan satu quick win di Bab 5 — kemenangan kecil yang bisa dirasakan tim di minggu-minggu pertama. Begitu itu beneran tercapai, godaan paling umum adalah nganggep itu "ya emang harusnya gitu" dan lanjut kerja seperti biasa tanpa bilang apa-apa ke siapa pun.',
      'Itu kesalahan. Quick win yang lewat diam-diam kehilangan hampir semua fungsinya. Sebutkan secara eksplisit di depan tim — siapa yang mencapainya, apa hasilnya — dan kaitkan balik ke kasus perubahan dari Bab 4. Bukan buat pamer, tapi buat kasih bukti nyata ke orang-orang yang masih ragu bahwa perubahan ini beneran memberi hasil, bukan cuma janji di rapat awal.',
      'Ini juga langsung menjawab Lensa 3 dari Bab 3 — trauma dari perubahan-perubahan sebelumnya yang diumumkan heboh lalu mati sendiri. Merayakan hasil nyata secara terbuka adalah bukti konkret bahwa yang ini beda.',
    ],
  },
  {
    id: 'c6-card-3',
    type: 'yes-no',
    question:
      'Coba pikirkan kebiasaan Anda selama ini kalau ada hasil kecil yang tercapai dari sebuah perubahan — apakah biasanya Anda cuma senang sendiri di kepala, tanpa benar-benar menyebutkannya secara terbuka ke tim?',
    yesLabel: 'Ya, biasanya saya nggak menyebutkannya secara terbuka',
    noLabel: 'Nggak, saya biasanya langsung menyebutkannya ke tim',
    feedbackYes:
      'Ini kebiasaan yang gampang dimengerti — rasanya kayak "ya emang harusnya gitu, ngapain diributkan." Tapi buat tim yang masih ragu, exposure ke hasil nyata itu justru salah satu alat paling kuat yang Anda punya. Jangan biarkan lewat begitu saja lagi mulai quick win dari Bab 5 ini.',
    feedbackNo:
      'Bagus, itu kebiasaan yang tepat arah. Pastikan waktu quick win dari Bab 5 tercapai, Anda tetap eksplisit menyebut siapa mencapainya dan apa hasilnya — bukan cuma pujian umum yang nggak spesifik.',
  },
  {
    id: 'c6-card-4',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Sinyal Bahaya',
    title: 'Tiga Tanda Rollout Mulai Balik ke Cara Lama — yang Sering Diabaikan',
    body: [
      'Rollout yang gagal jarang gagal dengan dramatis. Nggak ada satu momen jelas di mana tim "resmi" berhenti pakai cara baru. Yang terjadi biasanya pelan-pelan, dan justru karena pelan itu gampang banget diabaikan sampai udah kelewat jauh.',
      'Tiga sinyal awal yang paling sering diabaikan: orang mulai "sesekali" pakai cara lama "biar cepat" — biasanya dibingkai sebagai pengecualian sesaat, bukan pola. Pertanyaan soal cara baru makin jarang muncul — ini kelihatannya seperti pertanda bagus (udah lancar!), padahal sering justru karena udah nggak dipedulikan lagi. Dan champion yang tadinya aktif cerita atau bantu rekan-rekannya mulai diam — nggak protes, nggak komplain, cuma diam.',
      'Kenali sinyal-sinyal ini secepat mungkin. Begitu dibiarkan lebih dari beberapa minggu, jauh lebih sulit dibalik lagi — bukan karena orangnya tambah keras kepala, tapi karena kebiasaan lama yang sempat "diizinkan" balik itu makin lama makin terasa normal buat semua orang.',
    ],
  },
  {
    id: 'c6-card-5',
    type: 'multiple-choice',
    question:
      'Dua minggu setelah training, pertanyaan soal cara baru dari tim makin jarang muncul di grup kerja. Mana interpretasi yang paling tepat buat owner sebelum menyimpulkan apa pun?',
    options: [
      'Ini pasti pertanda bagus — berarti semua orang sudah lancar dan nggak butuh bantuan lagi',
      'Cek dulu langsung ke lapangan apakah ini karena beneran sudah lancar, atau karena tim udah berhenti peduli dan diam-diam balik ke cara lama — jangan diasumsikan begitu saja',
      'Ini pasti tanda buruk — segera adakan training ulang buat semua orang',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Pertanyaan yang makin jarang bisa berarti dua hal yang berlawanan — beneran lancar, atau udah nggak dipedulikan. Bedanya cuma bisa dipastikan dengan cek langsung ke lapangan, bukan diasumsikan dari satu sinyal doang.',
    errorFeedback:
      'Belum tepat. Pertanyaan yang makin jarang itu ambigu — bisa tanda bagus (udah lancar), bisa juga tanda bahaya (udah nggak dipedulikan dan diam-diam balik ke cara lama). Jangan simpulkan sepihak tanpa cek langsung ke lapangan.',
  },
  {
    id: 'c6-card-6',
    type: 'info',
    icon: Ear,
    eyebrow: 'Menangani Resistensi di Lapangan',
    title: 'Bukan Menghindar, Bukan Juga Memaksa — Dengar Dulu',
    body: [
      'Begitu resistensi muncul langsung di depan Anda — komplain terang-terangan, atau sikap yang jelas menolak — ada dua reaksi keliru yang paling umum. Pertama, menghindar: pura-pura nggak lihat, berharap itu reda sendiri kalau didiamkan. Kedua, memaksa: langsung menegur keras atau ngotot orangnya harus ikut, tanpa mendengarkan dulu apa sebenarnya yang jadi keberatannya.',
      'Keduanya gagal karena alasan yang sama: nggak ada satu pun yang benar-benar membongkar apa yang sebenarnya terjadi. Menghindar membiarkan akar masalahnya tetap ada dan cuma menunda sampai jadi lebih besar. Memaksa cuma menekan gejalanya ke permukaan, sementara akar masalahnya sama sekali nggak tersentuh — dan sering malah menambah resistensi baru.',
      'Teknik yang lebih tepat, tiga langkah: dengar keluhan spesifiknya dulu, sampai tuntas, tanpa buru-buru membela diri atau langsung kasih solusi. Kaitkan balik ke empat lensa resistensi dari Bab 3 — apakah ini soal takut nggak kompeten, nggak jelas untungnya, trauma proyek sebelumnya, atau belum cukup dilatih. Baru respons sesuai lensanya.',
    ],
  },
  {
    id: 'c6-card-7',
    type: 'info',
    icon: MessageCircle,
    eyebrow: 'Respons Sesuai Lensanya, Bukan Respons Generik',
    title: 'Empat Lensa, Empat Respons yang Berbeda',
    body: [
      'Ini bagian yang paling sering dilewati: setelah tahu lensanya, responsnya harus ikut berbeda. Respons generik yang sama buat semua keluhan — "ayo dicoba dulu" atau "nanti juga terbiasa" — nggak menjawab akar masalah spesifik yang barusan Anda dengar.',
      'Lensa 1 (takut nggak kompeten): pindahkan latihannya ke ruang yang lebih privat, jauh dari mata rekan kerja atau pelanggan, sampai orangnya cukup percaya diri buat praktik di depan umum. Lensa 2 (nggak jelas untungnya): ulangi kasus perubahan dari Bab 4, tapi versi yang lebih personal — bukan penjelasan umum lagi, cari untung spesifik yang relevan buat posisi dia.',
      'Lensa 3 (trauma proyek sebelumnya): tunjukkan bukti konkret bedanya kali ini — quick win yang sudah tercapai, komitmen Anda yang konsisten, apa pun yang bisa dipegang selain janji lisan. Lensa 4 (belum cukup dilatih): jangan diyakinkan lagi, jangan dijelaskan lagi alasannya — langsung sediakan sesi latihan tambahan atau pasangkan dengan buddy.',
    ],
  },
  {
    id: 'c6-card-8',
    type: 'fill-in-the-blank',
    sentence:
      'Menangani resistensi di lapangan berarti mendengar keluhan spesifiknya dulu, mengaitkannya ke lensa yang paling cocok dari Bab 3, lalu memberi respons yang sesuai lensanya — bukan respons ________ yang sama untuk semua keluhan.',
    options: ['generik', 'tegas', 'cepat', 'formal'],
    correctAnswer: 'generik',
    successFeedback:
      'Tepat. Respons generik yang sama buat semua keluhan gagal karena akar masalah di balik tiap keluhan bisa sama sekali berbeda — padahal gejalanya kelihatan mirip dari luar.',
    errorFeedback:
      'Belum tepat. Kata kuncinya "generik" — respons yang sama persis buat semua keluhan nggak menjawab akar masalah spesifik yang berbeda-beda di balik tiap lensa resistensi.',
  },
  {
    id: 'c6-card-9',
    type: 'info',
    icon: Scale,
    eyebrow: 'Fleksibel vs Tegas',
    title: 'Fleksibel di Detail Teknis, Tegas di Standar Barunya',
    body: [
      'Ada satu pertanyaan yang selalu muncul begitu resistensi ditangani: sejauh mana Anda boleh mengalah? Jawabannya bukan "selalu fleksibel" atau "selalu tegas" — tapi tahu persis di bagian mana masing-masing berlaku.',
      'Fleksibel di detail teknis: cara pelatihan bisa disesuaikan buat orang yang lebih lambat belajar — sesi tambahan, buddy yang lebih sabar, langkah yang dipecah lebih kecil. Ini bukan mengalah ke resistensi, ini menyesuaikan metode ke kebutuhan nyata orangnya, dan itu sah-sah saja.',
      'Tegas di standar barunya sendiri: jangan biarkan orang diam-diam balik ke cara lama "buat sementara," karena "sementara" itu dalam praktiknya sering nggak pernah benar-benar berakhir. Begitu satu orang diizinkan permanen di "sementara," orang lain yang lihat itu akan mikir standarnya sebenarnya nggak serius — dan itu yang bikin rollout runtuh dari dalam.',
    ],
  },
  {
    id: 'c6-card-10',
    type: 'multiple-choice',
    question:
      'Seorang admin yang lebih tua dan lebih lambat belajar tool digital minta waktu latihan tambahan khusus buat dirinya, di luar jadwal training bersama. Di saat yang sama, admin lain minta "boleh nggak sementara ini saya tetap nyatet manual dulu, nanti dipindahin kalau sempat" — dan ini sudah berjalan tiga minggu. Bagaimana owner sebaiknya merespons keduanya?',
    options: [
      'Tolak permintaan pertama karena nggak adil buat yang lain, dan izinkan permintaan kedua karena kasihan kalau dipaksa',
      'Kabulkan permintaan pertama karena itu soal metode/detail teknis yang bisa disesuaikan, dan tolak permintaan kedua karena "sementara" tiga minggu itu sebenarnya sudah jadi standar baru yang harus ditegakkan',
      'Tolak keduanya supaya semua orang diperlakukan persis sama tanpa kecuali',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Permintaan pertama soal detail teknis pelatihan — sah buat disesuaikan. Permintaan kedua soal standar barunya sendiri dibiarkan longgar berminggu-minggu dengan label "sementara" — ini yang harus ditegakkan sebelum jadi kebiasaan permanen buat orang itu, dan preseden buat yang lain.',
    errorFeedback:
      'Belum tepat. Bedakan dua jenis fleksibilitas: cara latihan disesuaikan itu soal detail teknis, sah buat dikabulkan. Tapi "sementara" pakai cara lama yang sudah berjalan tiga minggu itu soal standar barunya sendiri, yang justru harus ditegakkan, bukan terus dibiarkan.',
  },
  {
    id: 'c6-card-11',
    type: 'info',
    icon: Users2,
    eyebrow: 'Contoh Kasus · Kembali ke Toko dengan Tiga Admin',
    title: 'Rollout Toko Sudah Jalan Dua Minggu — Sekarang Ketemu Resistensi Beneran',
    body: [
      'Ingat toko retail dari Bab 3-5: pindah dari catatan manual ke aplikasi tablet, tiga admin sempat diam-diam balik ke cara lama, terdiagnosis Lensa 1 (takut kelihatan lelet di depan pelanggan) dan Lensa 2 (nggak jelas untungnya). Owner sudah menjalankan rencana rollout dari Bab 5: komunikasi lewat rapat dan one-on-one, pelatihan hands-on dengan champion jadi buddy, dan quick win pulang 15 menit lebih cepat di akhir minggu pertama.',
      'Minggu kedua, owner cek lagi ke lapangan. Quick win-nya sudah disebutkan terbuka waktu tercapai — owner bilang langsung di depan semua admin, "gara-gara sistem baru, kalian bertiga pulang lebih cepat minggu ini, itu beneran kerasa kan." Tapi ada satu hal baru: admin senior, yang jadi stakeholder prioritas sejak Bab 4, mulai lagi sering "kelupaan" pindahin catatan dari buku ke tablet di akhir shift.',
    ],
  },
  {
    id: 'c6-card-12',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Contoh Kasus · Deteksi Sampai Respons',
    title: 'Owner Nggak Diam, Nggak Juga Menegur — Dia Tanya Langsung',
    body: [
      'Owner nggak mendiamkan ini walau cuma "kelupaan" kecil. Dia ngobrol langsung, empat mata, sore itu juga — bukan nunggu jadi pola lebih lama dulu. Bukan juga langsung menegur "kok belum berubah juga sih."',
      'Dia tanya spesifik: "saya perhatiin beberapa hari ini suka telat pindahin ke tablet, ada yang bikin susah?" Admin senior akhirnya cerita: kemarin sempat salah pencet waktu ada pelanggan ngantre, dan dia buru-buru balik ke catatan manual biar nggak makin lama, terus "keterusan" lagi beberapa hari ini.',
      'Owner kaitkan balik ke lensa: ini persis Lensa 1 yang sudah terdiagnosis sejak Bab 3 — bukan mundur ke Lensa 4 (pelatihannya sendiri sudah cukup, admin ini yang paling cepat lancar waktu sesi hands-on). Responsnya disesuaikan ke lensa itu: owner nawarin latihan ulang khusus buat skenario "ada pelanggan ngantre," dilakukan pas toko lagi sepi, biar admin senior punya kesempatan latihan tanpa tekanan mata orang lain — dan tegas bilang ini bukan alasan buat balik manual "sementara," cukup latihan sekali lagi dan lanjut pakai tablet.',
    ],
  },
  {
    id: 'c6-card-13',
    type: 'multiple-choice',
    question:
      'Skenario: saat rollout jalan minggu ketiga, seorang staf gudang bilang ke Anda langsung, "saya udah coba tapi tetep aja lebih ribet dari cara lama, saya nggak ngerti manfaatnya buat saya apaan." Lensa mana yang paling cocok, dan respons apa yang paling tepat?',
    options: [
      'Lensa 1 — pindahkan latihannya ke tempat yang lebih privat',
      'Lensa 2 — jelaskan ulang secara personal untung spesifik buat posisi dia, bukan penjelasan umum buat bisnis',
      'Lensa 3 — tunjukkan bukti bahwa kali ini beda dari proyek-proyek sebelumnya',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. "Nggak ngerti manfaatnya buat saya" adalah sinyal Lensa 2 yang jelas. Responsnya bukan meyakinkan ulang secara umum, tapi mencari untung yang spesifik relevan buat posisi dan kerjaan hariannya.',
    errorFeedback:
      'Belum tepat. Ini Lensa 2 — dia secara eksplisit bilang nggak lihat manfaat buat dirinya. Respons yang tepat adalah penjelasan untung yang personal dan spesifik, bukan latihan ulang atau bukti soal proyek sebelumnya.',
  },
  {
    id: 'c6-card-14',
    type: 'multiple-choice',
    question:
      'Skenario: champion yang sejak Bab 4-5 aktif bantu rekan-rekan dan cerita pengalamannya sendiri, dua minggu terakhir kelihatan diam aja, nggak lagi ikut nawarin bantuan ke admin lain kayak biasanya. Apa langkah paling tepat?',
    options: [
      'Biarkan saja, mungkin cuma lagi sibuk',
      'Tegur di depan tim supaya dia kembali aktif seperti sebelumnya',
      'Anggap ini sinyal bahaya, dan tanya langsung ke champion-nya apa yang terjadi sebelum ini jadi pola berminggu-minggu',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Champion yang tadinya aktif lalu mulai diam adalah salah satu dari tiga sinyal bahaya yang paling sering diabaikan. Tanya langsung secepat mungkin, jangan tunggu jadi pola berminggu-minggu dulu baru bertindak.',
    errorFeedback:
      'Belum tepat. Champion yang mulai diam adalah sinyal bahaya yang harus dicek secepat mungkin — dibiarkan berisiko jadi pola permanen, dan ditegur di depan tim malah bisa mempermalukan orang yang sebenarnya sudah banyak membantu.',
  },
  {
    id: 'c6-card-15',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Sebelum Entri Keenam',
    title: 'Sekarang Giliran Rollout Anda Sendiri',
    body: [
      'Anda baru saja melatih teknik-teknik ini lewat contoh toko dan beberapa skenario lapangan. Sekarang giliran rollout yang Anda rancang sendiri di Bab 5 — perubahan yang sama yang sudah Anda kunci sejak itu.',
      'Kalau rencana rollout Anda sudah beneran berjalan, catat sejujurnya apa yang sudah terjadi — termasuk kalau ada resistensi atau sinyal bahaya yang muncul, dan bagaimana Anda menanganinya. Kalau belum sempat dijalankan, tulis rencana konkret Anda kalau resistensi atau sinyal bahaya itu nanti muncul.',
    ],
  },
  {
    id: 'c6-card-16',
    type: 'reflection',
    eyebrow: 'Entri Keenam · Buku Kerja Change Management',
    prompt: 'Catat sejauh mana rollout Anda sudah berjalan, dan bagaimana Anda menangani (atau berencana menangani) resistensi atau sinyal bahaya yang muncul.',
    fields: [
      {
        id: 'rollout-progress',
        label:
          'Sejauh ini, apa yang sudah berjalan dari rencana rollout Anda, dan resistensi/sinyal bahaya apa (kalau ada) yang sudah muncul?',
        placeholder:
          'Misalnya: komunikasi dan sesi pelatihan sudah jalan, quick win minggu pertama sudah kerasa, tapi ada satu orang yang mulai jarang tanya dan sesekali balik ke cara lama...',
      },
      {
        id: 'resistance-response',
        label:
          'Kalau ada resistensi, bagaimana Anda menanganinya — atau bagaimana rencananya kalau belum terjadi?',
        placeholder:
          'Misalnya: saya akan ngobrol empat mata dulu, dengar keluhan spesifiknya, kaitkan ke lensa dari Bab 3, baru tentukan responsnya...',
      },
    ],
  },
  {
    id: 'c6-card-17',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 7',
    title: 'Anda Sekarang Tahu Cara Menjaga Rollout Tetap Hidup di Lapangan',
    body: [
      'Anda nggak lagi cuma punya rencana di atas kertas. Anda sekarang tahu cara merayakan hasil nyata secara terbuka, mengenali sinyal bahaya sebelum terlambat, dan menangani resistensi langsung di lapangan dengan respons yang sesuai akar masalahnya — bukan menghindar, bukan juga memaksa.',
      'Anda sekarang sudah tahu cara menjalankan dan menjaga rollout di lapangan. Bab 7 waktunya menyatukan semuanya — diagnosis, kasus perubahan, peta stakeholder, rencana rollout, dan teknik lapangan ini — jadi satu paket change management yang lengkap untuk perubahan Anda.',
    ],
  },
]
