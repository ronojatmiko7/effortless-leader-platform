import {
  MapPin,
  Timer,
  Ban,
  Bookmark,
  AlertTriangle,
  AlertCircle,
  Scale,
  CalendarCheck,
  ClipboardList,
  Users,
  NotebookPen,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter3Cards: Card[] = [
  {
    id: 'c3-card-1',
    type: 'info',
    icon: MapPin,
    eyebrow: 'Bab 3 · Merancang Dua Tier Operasional',
    title: 'Peta Sudah Ada. Sekarang Kita Bangun Dua Level Paling Bawah.',
    body: [
      'Di Bab 2 Anda sudah punya peta 4 level ritme EBR — dan di Entri Kedua buku kerja Anda, sudah jelas mana tier yang sudah ada dan mana yang paling kosong di bisnis Anda.',
      'Bab ini khusus dua level paling bawah: huddle harian dan tinjauan mingguan.',
      'Kenapa dua level ini duluan? Karena keduanya yang paling sering gagal jadi cuma basa-basi kalau nggak dirancang dengan sengaja — berdiri tapi nggak ada masalah yang keluar, atau duduk tapi semua orang cuma ngangguk-ngangguk sambil lirik-lirik jam.',
    ],
  },
  {
    id: 'c3-card-2',
    type: 'info',
    icon: Timer,
    eyebrow: 'Level 1 · Format Huddle Harian',
    title: 'Huddle Harian: 10–15 Menit, Berdiri, Tiga Pertanyaan Doang',
    body: [
      'Format dasarnya sederhana: setiap hari, sebelum kerja penuh dimulai, seluruh tim yang kerja bareng tiap hari berkumpul — berdiri.',
      'Kenapa berdiri? Bukan gaya-gayaan. Badan yang capek berdiri itu natural enforcer durasi — nggak perlu ada yang ingatkan "ayo kita ringkas", karena kaki sudah mulai protes sendiri setelah 15 menit. Coba duduk, dan tiba-tiba orang betah ngobrol 45 menit.',
      'Isinya cuma tiga pertanyaan, satu per satu per orang: (1) Apa target hari ini? (2) Hambatan apa yang bisa bikin macet? (3) Siapa yang butuh bantuan dari siapa hari ini? Itu saja. Nggak ada yang lain.',
    ],
  },
  {
    id: 'c3-card-3',
    type: 'multiple-choice',
    question: 'Dari pilihan-pilihan ini, mana yang termasuk pertanyaan WAJIB di huddle harian?',
    options: [
      'Kenapa target minggu lalu nggak tercapai?',
      'Hambatan apa yang bisa bikin kamu macet hari ini?',
      'Apa rencana pemasaran kita bulan depan?',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. "Hambatan hari ini" — itulah yang perlu diketahui sekarang, bukan dibahas dua minggu lagi. Evaluasi minggu lalu itu tempatnya tinjauan mingguan; rencana bulan depan itu tinjauan bulanan.',
    errorFeedback:
      'Bukan itu. Huddle harian punya tiga pertanyaan sangat spesifik: target hari ini, hambatan hari ini, dan siapa yang butuh bantuan dari siapa. Evaluasi minggu lalu atau rencana bulan depan itu levelnya beda.',
  },
  {
    id: 'c3-card-4',
    type: 'info',
    icon: Ban,
    eyebrow: 'Yang Nggak Boleh Masuk Huddle',
    title: 'Tiga Hal yang Dilarang Keras di Huddle Harian',
    body: [
      'Pertama: diskusi strategi atau arah bisnis. Itu altitude-nya tinjauan triwulanan — bukan pagi-pagi berdiri sambil ngantuk.',
      'Kedua: evaluasi mendalam soal kinerja seseorang. Kalau performa si A bermasalah, itu bukan topik yang dibahas di depan semua orang yang sedang berdiri mau mulai kerja.',
      'Ketiga — dan ini yang paling sering dilanggar: menyelesaikan masalah di tempat, sampai tuntas, saat itu juga. Kalau ada masalah yang butuh diskusi panjang, ada mekanismenya sendiri. Namanya parkir masalah.',
    ],
  },
  {
    id: 'c3-card-5',
    type: 'info',
    icon: Bookmark,
    eyebrow: 'Konsep Baru · Parkir Masalah',
    title: 'Kenalan sama "Parkir Masalah" — Yang Bikin Huddle Tetap Singkat',
    body: [
      'Aturan praktisnya: kalau ada satu topik yang butuh diskusi lebih dari sekitar 2 menit, itu tidak diselesaikan di sana. Itu dicatat — "diparkir" — dan diselesaikan setelah huddle, oleh orang-orang yang paling relevan saja.',
      'Bukan diabaikan. Dicatat dan ditindaklanjuti — tapi hanya oleh yang perlu, bukan semua orang yang tadi berdiri bersama.',
      'Ini yang bikin huddle tetap 10–15 menit: bukan karena masalahnya tidak ada, tapi karena masalah yang perlu diskusi panjang tidak menyita waktu semua orang yang sebenarnya tidak perlu ikut menyelesaikannya.',
    ],
  },
  {
    id: 'c3-card-6',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau satu topik di huddle butuh diskusi lebih dari 2 menit, itu seharusnya bukan diselesaikan di tempat — melainkan ________ dan ditangani setelah huddle oleh orang yang relevan.',
    options: ['diparkir', 'diabaikan', 'ditunda ke bulan depan', 'diputuskan sendiri oleh bos'],
    correctAnswer: 'diparkir',
    successFeedback:
      '"Diparkir" berarti dicatat dan ditangani — bukan dilupakan. Bedanya besar: masalah tetap diselesaikan, tapi nggak menyita waktu semua orang yang berdiri.',
    errorFeedback:
      'Bukan itu. Masalah yang butuh diskusi panjang di huddle seharusnya "diparkir" — dicatat, lalu diselesaikan oleh orang yang relevan setelah huddle. Bukan diabaikan, bukan ditunda ke bulan depan.',
  },
  {
    id: 'c3-card-7',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Jebakan Huddle #1',
    title: 'Round Robin Panjang: Semua Laporan, Nggak Ada yang Keluar Masalah',
    body: [
      'Jebakan pertama dan paling umum: huddle berubah jadi sesi laporan bergiliran satu per satu, di mana setiap orang cerita panjang lebar soal kerjaannya masing-masing.',
      'Hasilnya bisa ditebak: yang sudah lapor langsung buka HP nunggu giliran habis. Yang belum lapor memikirkan apa yang mau disampaikan. Yang paling terakhir sudah ngantuk duluan.',
      'Contoh nyata: bengkel motor dengan 8 mekanik — huddle pagi jadi "laporan kemarin" satu-satu, butuh 40 menit hanya untuk tahu masing-masing ngerjain apa. Atau toko sembako dengan 5 staf — pemiliknya minta semua "laporan kondisi toko" duluan, hasilnya ngobrol panjang yang nggak pernah menyentuh hambatan hari ini.',
    ],
  },
  {
    id: 'c3-card-8',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Jebakan Huddle #2',
    title: 'Masalah Dibahas Sampai Tuntas di Tempat — Sampai 45 Menit Habis',
    body: [
      'Jebakan kedua: ada satu masalah yang muncul, semua langsung fokus ke sana, dan tiba-tiba 45 menit sudah habis untuk satu topik itu saja.',
      'Ini bukan salah tim yang terlalu antusias. Ini salah format — karena tidak ada mekanisme yang jelas untuk memindahkan diskusi panjang ke forum yang tepat.',
      'Contoh nyata: usaha laundry dengan 4 staf — setiap ada komplain pelanggan langsung dibahas sampai tuntas di huddle pagi, akibatnya huddle jarang selesai di bawah 30 menit. Atau konveksi kecil — setiap ada masalah bahan baku, semua orang ikut diskusi padahal keputusannya cukup melibatkan dua orang saja.',
    ],
  },
  {
    id: 'c3-card-9',
    type: 'info',
    icon: Scale,
    eyebrow: 'Latihan Skenario',
    title: 'Dua Versi Huddle yang Topiknya Sama, Hasilnya Beda',
    body: [
      'Tim distribusi makanan kemasan, 7 orang. Pagi ini ada kabar: satu pengemudi telat, dan dua rute pengiriman masih kosong belum ada yang pegang.',
      'Huddle A — supervisor langsung buka dengan tiga pertanyaan standar. Saat muncul soal rute kosong, dia catat di papan: "Rute B dan C — selesai setelah huddle, Rudi dan Dian stay sebentar." 12 menit, semua langsung ke kerjaan.',
      'Huddle B — supervisor buka topik yang sama. Begitu muncul soal rute kosong, semua langsung berpendapat: siapa yang bisa handle? Rute mana prioritas? Kenapa si pengemudi telat? Tujuh orang berdiri 45 menit, dua rute masih kosong karena tidak ada yang mau ambil tanggung jawab.',
    ],
  },
  {
    id: 'c3-card-10',
    type: 'multiple-choice',
    question:
      'Apa yang salah secara struktural di Huddle B — bukan sekadar "orangnya kebanyakan ngobrol"?',
    options: [
      'Supervisornya kurang tegas sama timnya',
      'Tidak ada mekanisme parkir masalah — diskusi panjang dibiarkan jalan di huddle tanpa dipindah ke forum yang tepat',
      'Terlalu banyak orang yang diajak ke huddle itu',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Bukan soal karakter supervisornya — mungkin dia sudah berusaha keras. Yang hilang adalah mekanisme: tidak ada cara yang jelas untuk "memarkirkan" topik panjang dan menyelesaikannya di luar huddle. Tanpa itu, semua orang terseret masuk.',
    errorFeedback:
      'Coba lagi. Masalahnya bukan di orangnya atau jumlahnya. Yang hilang adalah mekanisme struktural: tidak ada cara yang jelas untuk memindahkan diskusi panjang ke forum yang tepat, jadi semua terseret ke dalam diskusi yang sebenarnya hanya perlu dua-tiga orang.',
  },
  {
    id: 'c3-card-11',
    type: 'info',
    icon: CalendarCheck,
    eyebrow: 'Level 2 · Format Tinjauan Mingguan',
    title: 'Tinjauan Mingguan: Duduk, 30–45 Menit, Per Tim',
    body: [
      'Beda dari huddle dalam tiga hal: lebih panjang (30–45 menit), duduk, dan tidak semua orang — cukup penanggung jawab tiap tim atau departemen.',
      'Bukan satu rapat besar gabungan seluruh staf. Kalau ada tim operasional, tim penjualan, dan tim produksi — bisa jadi tiga tinjauan mingguan terpisah, masing-masing dengan penanggung jawabnya.',
      'Ini juga forum di mana masalah-masalah yang "diparkir" saat huddle harian akhirnya diselesaikan. Plus, hal yang butuh koordinasi lintas tim — bukan satu divisi saja — dibahas di sini, bukan di huddle.',
    ],
  },
  {
    id: 'c3-card-12',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Agenda Tinjauan Mingguan',
    title: 'Empat Tahap yang Sama Setiap Minggu — Konsistensinya yang Bikin Efisien',
    body: [
      'Satu: review angka minggu lalu — apa yang tercapai, apa yang meleset. Bukan sekadar dibacakan, tapi ditandai mana yang perlu perhatian.',
      'Dua: apa yang berjalan baik dan apa yang tidak — ini tempat masalah "parkiran" dari huddle harian naik dan dibahas bersama.',
      'Tiga: keputusan atau aksi konkret untuk minggu ini — siapa melakukan apa, kapan selesainya.',
      'Empat: preview singkat minggu depan — ada tantangan atau potensi hambatan yang sudah kelihatan dari sekarang?',
    ],
  },
  {
    id: 'c3-card-13',
    type: 'sort-list',
    question:
      'Urutkan keempat tahap agenda tinjauan mingguan ini dari yang paling awal sampai paling akhir.',
    items: [
      'Keputusan atau aksi konkret untuk minggu ini',
      'Preview singkat minggu depan',
      'Review angka minggu lalu',
      'Apa yang berjalan baik dan apa yang tidak',
    ],
    correctAnswer: [
      'Review angka minggu lalu',
      'Apa yang berjalan baik dan apa yang tidak',
      'Keputusan atau aksi konkret untuk minggu ini',
      'Preview singkat minggu depan',
    ],
    successFeedback:
      'Tepat. Urutan ini penting: Anda perlu tahu dulu angkanya, baru bisa bedah apa yang jalan dan apa yang tidak, baru bisa ambil keputusan yang berdasar, baru preview minggu depan jadi bermakna.',
    errorFeedback:
      'Belum pas. Urutannya: review angka dulu, baru bahas apa yang jalan dan tidak jalan, baru ambil keputusan dan aksi, baru preview minggu depan.',
  },
  {
    id: 'c3-card-14',
    type: 'info',
    icon: Users,
    eyebrow: 'Siapa yang Hadir di Mana',
    title: 'Staf Lini Depan di Huddle, Penanggung Jawab di Tinjauan Mingguan',
    body: [
      'Huddle harian: tim yang kerja bareng setiap hari — termasuk staf lini depan. Driver, kasir, teknisi, petugas gudang — semua yang keputusan hariannya saling memengaruhi. Bukan cuma manajer.',
      'Tinjauan mingguan: penanggung jawab tiap tim atau departemen — bukan seluruh staf operasional. Yang hadir adalah orang yang bisa bicara soal progres timnya dan punya wewenang koordinasi lintas tim.',
      'Prinsipnya sederhana: hadirkan orang yang keputusannya saling memengaruhi — bukan semua orang yang "perlu tahu".',
    ],
  },
  {
    id: 'c3-card-15',
    type: 'multiple-choice',
    question:
      'Anda punya toko retail dengan 1 manajer toko, 2 supervisor shift, dan 8 kasir. Siapa yang paling tepat hadir di tinjauan mingguan?',
    options: [
      'Semua 11 orang, supaya semua tahu kondisi toko',
      'Manajer toko dan 2 supervisor shift, karena merekalah yang bisa mewakili tim dan ambil keputusan koordinasi',
      'Manajer toko saja, karena dia yang paling tahu segalanya',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Tinjauan mingguan bukan rapat semua orang. Supervisor shift mewakili timnya (kasir) dan berkoordinasi dengan manajer untuk isu yang butuh lintas tim.',
    errorFeedback:
      'Coba lagi. Tinjauan mingguan bukan tempat semua orang berkumpul — dan bukan cuma pimpinan sendirian. Penanggung jawab per tim yang hadir: di kasus ini, manajer toko dan dua supervisor shift.',
  },
  {
    id: 'c3-card-16',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Sebelum Masuk Buku Kerja: Konkretkan Dulu',
    body: [
      'Semua yang barusan Anda pelajari sekarang perlu jadi sesuatu yang nyata — bukan cuma teori yang masuk satu telinga keluar telinga lain.',
      'Coba pikirkan: huddle harian di bisnis Anda, kalau mau dirancang mulai minggu depan — kapan waktunya, berapa lama, pertanyaan apa yang dipakai, dan siapa yang wajib ada?',
      'Jangan mikir yang terlalu ideal dulu. Mulai dari yang bisa jalan dengan kondisi dan staf yang sudah ada sekarang.',
    ],
  },
  {
    id: 'c3-card-17',
    type: 'reflection',
    eyebrow: 'Entri Ketiga · Buku Kerja EBR Anda',
    prompt: 'Rancang huddle harian versi Anda sendiri. Mulai dari yang paling konkret.',
    fields: [
      {
        id: 'huddle-schedule',
        label: 'Jam berapa dan berapa lama huddle harian Anda?',
        placeholder: 'Contoh: Setiap Senin–Jumat jam 08.15, maksimal 15 menit',
      },
      {
        id: 'huddle-questions',
        label: 'Apa 3 pertanyaan wajib versi Anda?',
        placeholder:
          'Contoh: Target hari ini apa? Ada hambatan yang perlu diketahui orang lain? Siapa yang butuh bantuan dari siapa?',
      },
      {
        id: 'huddle-attendees',
        label: 'Siapa saja yang wajib hadir?',
        placeholder: 'Contoh: Semua mekanik shift pagi dan 1 supervisor lantai',
      },
    ],
  },
  {
    id: 'c3-card-18',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 3',
    title: 'Dua Level Operasional Sudah Rapi. Sekarang Kita Naik.',
    body: [
      'Anda sekarang tahu cara merancang dua level paling bawah ritme EBR — dan sudah punya draft huddle harian versi Anda sendiri di buku kerja.',
      'Tapi peta 4 level itu punya dua level lagi di atasnya. Bab berikutnya kita naik ke level yang isinya beda total: tinjauan bulanan dan triwulanan — tempat keputusan yang lebih besar diambil, dan tempat arah bisnis dipertanyakan.',
      'Dua level itu bukan sekadar rapat yang lebih panjang. Isinya, pertanyaannya, dan siapa yang ada di ruangan itu berbeda fundamental dari yang baru saja kita rancang.',
    ],
  },
]
