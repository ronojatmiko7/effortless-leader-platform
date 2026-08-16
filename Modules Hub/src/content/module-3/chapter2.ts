import {
  Compass,
  Layers,
  Users,
  CalendarCheck,
  TrendingUp,
  Telescope,
  AlertTriangle,
  Mountain,
  ArrowUpCircle,
  RefreshCw,
  NotebookPen,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter2Cards: Card[] = [
  {
    id: 'c2-card-1',
    type: 'info',
    icon: Compass,
    eyebrow: 'Bab 2 · Arsitektur Ritme Tinjauan',
    title: 'Sekarang Anda Butuh Peta, Bukan Cuma Alarm',
    body: [
      'Di Bab 1 Anda ngerasain sendiri mahalnya kelola bisnis cuma pakai mode reaktif — rapat baru ada kalau udah kebakaran.',
      'Sekarang pertanyaannya: kalau bukan rapat dadakan pas ada api, ritme tinjauan macam apa yang benar? Rapat apa aja yang perlu ada, seberapa sering, dan siapa yang perlu duduk di tiap rapatnya?',
      'Itu yang kita bongkar di bab ini — peta lengkap ritme EBR, dari yang paling sering sampai yang paling jarang tapi paling strategis.',
    ],
  },
  {
    id: 'c2-card-2',
    type: 'info',
    icon: Layers,
    eyebrow: 'Peta Besarnya',
    title: 'Empat Level, Bukan Satu Rapat Serba Guna',
    body: [
      'Ritme EBR yang sehat itu bukan satu jenis rapat yang diulang-ulang. Ada 4 level, dan tiap level punya orang, ritme, dan jenis masalah yang beda.',
      'Huddle Harian — tim operasional, tiap hari, singkat, cek status dan hambatan hari ini.',
      'Tinjauan Mingguan — penanggung jawab tim/departemen, cek progres minggu ini dan isu yang butuh koordinasi lintas orang.',
      'Tinjauan Bulanan — pemilik dan manajemen, cek tren sebulan dan keputusan yang butuh sumber daya.',
      'Tinjauan Triwulanan — level paling strategis, cek apakah arah bisnis masih benar, bukan cuma angka bulan ini.',
    ],
  },
  {
    id: 'c2-card-3',
    type: 'sort-list',
    question:
      'Urutkan keempat ritme tinjauan ini dari yang paling sering & paling operasional, sampai yang paling jarang & paling strategis.',
    items: ['Tinjauan Bulanan', 'Huddle Harian', 'Tinjauan Triwulanan', 'Tinjauan Mingguan'],
    correctAnswer: ['Huddle Harian', 'Tinjauan Mingguan', 'Tinjauan Bulanan', 'Tinjauan Triwulanan'],
    successFeedback:
      'Tepat. Makin ke bawah urutan ini, rapatnya makin jarang — tapi keputusan yang diambil di dalamnya makin besar dampaknya.',
    errorFeedback:
      'Belum pas. Urutan dari paling sering ke paling jarang: Huddle Harian, Tinjauan Mingguan, Tinjauan Bulanan, baru Tinjauan Triwulanan.',
  },
  {
    id: 'c2-card-4',
    type: 'info',
    icon: Users,
    eyebrow: 'Level 1 · Huddle Harian',
    title: 'Singkat, Operasional, Tiap Hari',
    body: [
      'Huddle Harian itu forum paling sering dan paling singkat — idealnya 10-15 menit, isinya tim operasional yang kerja bareng tiap hari.',
      'Isinya cuma tiga hal: apa yang dikerjakan hari ini, hambatan apa yang bikin macet, dan siapa yang butuh bantuan segera. Bukan tempat curhat panjang atau evaluasi kinerja bulanan.',
      'Kalau huddle ini jalan konsisten, masalah kecil ketahuan hari itu juga — bukan minggu depan, apalagi pas tutup buku.',
    ],
  },
  {
    id: 'c2-card-5',
    type: 'info',
    icon: CalendarCheck,
    eyebrow: 'Level 2 · Tinjauan Mingguan',
    title: 'Koordinasi Lintas Orang, Bukan Cuma Laporan',
    body: [
      'Tinjauan Mingguan dihadiri penanggung jawab tim atau departemen — bukan seluruh staf operasional seperti di huddle.',
      'Fokusnya: progres minggu ini dibanding target, dan isu yang butuh koordinasi antar orang atau antar tim — hal yang nggak bisa diselesaikan sendirian di huddle harian.',
      'Kalau di huddle masalahnya "kenapa pengiriman hari ini telat", di tinjauan mingguan masalahnya lebih ke "kenapa pengiriman telat tiga hari berturut-turut minggu ini, dan siapa yang perlu terlibat buat membenahi alurnya".',
    ],
  },
  {
    id: 'c2-card-6',
    type: 'yes-no',
    question:
      'Coba cek bisnis Anda sekarang: ada nggak sesuatu yang mirip huddle harian atau tinjauan mingguan — meski belum resmi atau belum rutin?',
    yesLabel: 'Ada, meski masih informal',
    noLabel: 'Belum ada sama sekali',
    feedbackYes:
      'Bagus, itu modal yang bisa dirapikan. Nanti di Bab 3 kita bahas cara merancangnya biar nggak buang waktu.',
    feedbackNo:
      'Wajar — ini justru salah satu gap paling sering di bisnis SME. Catat ini, kita akan pakai lagi di penutup bab.',
  },
  {
    id: 'c2-card-7',
    type: 'info',
    icon: TrendingUp,
    eyebrow: 'Level 3 · Tinjauan Bulanan',
    title: 'Tren Sebulan, Keputusan yang Butuh Sumber Daya',
    body: [
      'Tinjauan Bulanan itu forumnya pemilik dan manajemen inti. Bukan lagi ngomongin satu hari atau satu minggu, tapi tren sebulan penuh — angka naik-turunnya kenapa, bukan cuma berapa.',
      'Ini juga level di mana keputusan yang butuh sumber daya diambil: nambah budget marketing, rekrut posisi baru, ubah harga. Keputusan yang levelnya di atas wewenang penanggung jawab tim di tinjauan mingguan.',
    ],
  },
  {
    id: 'c2-card-8',
    type: 'info',
    icon: Telescope,
    eyebrow: 'Level 4 · Tinjauan Triwulanan',
    title: 'Bukan Angka Bulan Ini, Tapi Arah Bisnisnya',
    body: [
      'Tinjauan Triwulanan itu level paling strategis dan paling jarang — biasanya cuma pemilik dan segelintir orang kepercayaan.',
      'Pertanyaannya bukan lagi "kenapa omzet bulan ini turun", tapi "apakah kita masih menyasar pasar yang benar, produk yang benar, dengan model bisnis yang benar". Kalau jawabannya sudah nggak yakin, itu justru forum yang tepat buat membahasnya — bukan di huddle harian.',
    ],
  },
  {
    id: 'c2-card-9',
    type: 'multiple-choice',
    question:
      'Staf gudang Anda kehabisan stok kemasan pagi ini, dan butuh keputusan cepat siapa yang beli hari ini juga. Ini paling pas dibahas di level mana dulu?',
    options: ['Huddle Harian', 'Tinjauan Bulanan', 'Tinjauan Triwulanan'],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Masalah operasional harian yang butuh keputusan cepat itu levelnya huddle — jangan ditahan sampai rapat bulanan.',
    errorFeedback:
      'Coba lagi. Masalah kecil yang butuh keputusan cepat hari itu juga levelnya Huddle Harian, bukan tinjauan bulanan atau triwulanan.',
  },
  {
    id: 'c2-card-10',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Poin Paling Penting di Bab Ini',
    title: 'Melompati Satu Level Itu Bahaya — Persis Kayak Skip Cascading KPI',
    body: [
      'Kalau Anda kenal istilah cascading KPI dari Modul 2: melompati satu level di ritme tinjauan ini persis sama bahayanya dengan melompati satu level cascading KPI — hasilnya rapat yang nggak nyambung ke kerjaan nyata.',
      'Bisnis yang cuma punya tinjauan bulanan tanpa huddle harian itu kelihatan rapi di atas kertas — ada jadwal, ada agenda. Tapi masalah kecil numpuk sebulan penuh sebelum akhirnya kebahas.',
      'Itu bukan EBR. Itu cuma firefighting yang dikasih jadwal tetap.',
    ],
  },
  {
    id: 'c2-card-11',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau cuma ada tinjauan bulanan tanpa huddle harian, masalah kecil akan ________ dulu selama sebulan penuh sebelum akhirnya ketahuan dan dibahas.',
    options: ['numpuk', 'berkurang', 'hilang sendiri', 'membaik'],
    correctAnswer: 'numpuk',
    successFeedback:
      'Tepat. Tanpa huddle harian, masalah kecil nggak hilang — dia cuma nunggu jadwal bulanan buat ketahuan, sambil terus numpuk.',
    errorFeedback:
      'Bukan itu. Tanpa huddle harian, masalah kecil justru numpuk selama sebulan penuh sebelum sempat kebahas.',
  },
  {
    id: 'c2-card-12',
    type: 'info',
    icon: Mountain,
    eyebrow: 'Konsep Baru · Altitude',
    title: 'Makin Naik Level, Makin Umum — Bukan Makin Detail',
    body: [
      'Ada satu prinsip yang sering dilanggar tanpa sadar: altitude. Makin naik level ritme tinjauan, masalah yang dibahas seharusnya makin general dan strategis — bukan makin detail.',
      'Huddle harian pas ngomongin "kenapa si A belum kelar telepon prospek hari ini". Tinjauan triwulanan pas ngomongin "apakah kita masih menyasar pasar yang benar". Ini dua altitude yang beda total.',
      'Yang sering kejadian: pemilik bisnis datang ke tinjauan bulanan, tapi malah ributin siapa yang telat submit laporan harian minggu lalu. Itu topik huddle yang salah tempat — dan bikin waktu tinjauan bulanan habis buat hal yang seharusnya sudah kelar di level bawah.',
    ],
  },
  {
    id: 'c2-card-13',
    type: 'multiple-choice',
    question:
      'Pertanyaan "apakah kita masih menyasar pasar yang benar dengan model bisnis sekarang" itu altitude-nya paling pas dibahas di level mana?',
    options: ['Huddle Harian', 'Tinjauan Mingguan', 'Tinjauan Triwulanan'],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Itu pertanyaan strategis soal arah bisnis — altitude-nya Tinjauan Triwulanan, bukan level operasional harian.',
    errorFeedback:
      'Coba lagi. Pertanyaan soal arah bisnis secara keseluruhan itu altitude-nya paling tinggi — levelnya Tinjauan Triwulanan.',
  },
  {
    id: 'c2-card-14',
    type: 'info',
    icon: ArrowUpCircle,
    eyebrow: 'Istilah Baru · Eskalasi',
    title: 'Nggak Semua Masalah Harus Naik Level',
    body: [
      'Sebelum masuk contoh, kenalan dulu sama satu istilah yang akan sering muncul: eskalasi. Sebagian masalah selesai tuntas di levelnya sendiri. Sebagian lagi perlu naik ke level di atasnya — kalau nggak terselesaikan, atau butuh keputusan yang levelnya sekarang nggak punya wewenang buat mengambilnya.',
      'Kriteria detail kapan sesuatu wajib naik level itu tugas Bab 7. Di sini cukup kenal dulu konsepnya, karena bakal muncul lagi lewat contoh berikut ini.',
      'Bayangkan ada keluhan kualitas produk dari pelanggan. Skenario pertama: keluhan itu muncul sekali, penyebabnya sepele — staf packing salah pasang label. Dibahas di huddle harian pagi itu juga, langsung diperbaiki. Selesai di levelnya sendiri. Ini bagus — nggak semua masalah perlu naik level.',
    ],
  },
  {
    id: 'c2-card-15',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Skenario Kedua',
    title: 'Tapi Kalau Masalahnya Muncul Lagi...',
    body: [
      'Sekarang bayangkan keluhan kualitas yang sama muncul lagi minggu depan — bukan dari staf packing yang sama, bukan karena label. Lalu muncul lagi bulan depan, dengan penyebab yang beda lagi tiap kali.',
      'Satu kejadian itu masalah lokal. Tapi pola yang berulang, dengan penyebab berbeda-beda tiap kali, itu sinyal ada sesuatu yang lebih dalam — mungkin di proses quality control-nya sendiri, bukan di satu staf yang ceroboh.',
      'Pola berulang kayak gini yang jadi sinyal buat naik level — dari huddle harian, ke tinjauan mingguan atau bulanan, tempat penyebab sistemiknya bisa dibedah lebih dalam.',
    ],
  },
  {
    id: 'c2-card-16',
    type: 'multiple-choice',
    question:
      'Komplain "pengiriman telat" muncul di huddle harian minggu ini, lalu muncul lagi minggu depan, dan minggu depannya lagi — tiap kali penyebabnya beda kurir. Apa yang paling tepat dilakukan?',
    options: [
      'Terus dibahas di huddle harian setiap kali muncul, tanpa pernah dinaikkan',
      'Naikkan ke Tinjauan Mingguan atau Bulanan, karena polanya berulang dan mungkin ada masalah sistemik di proses pengirimannya',
      'Diamkan saja karena tiap kali penyebabnya beda-beda, jadi dianggap bukan pola',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Penyebab yang beda-beda tiap kali justru petunjuk kuat ada masalah di sistemnya, bukan di satu kejadian. Itu sinyal eskalasi.',
    errorFeedback:
      'Coba lagi. Pola berulang dengan penyebab berbeda-beda itu justru tanda ada masalah sistemik — saatnya naik level, bukan terus dibahas di huddle atau diabaikan.',
  },
  {
    id: 'c2-card-17',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Audit Ritme Anda Sendiri',
    title: 'Sekarang Cek Peta Ini ke Bisnis Anda',
    body: [
      'Anda sekarang punya peta lengkap 4 levelnya. Sebelum lanjut, coba tempelkan peta ini ke bisnis Anda sendiri.',
      'Dari 4 level tadi — Huddle Harian, Tinjauan Mingguan, Tinjauan Bulanan, Tinjauan Triwulanan — mana yang sudah ada di bisnis Anda sekarang, meski masih informal? Dan mana yang paling kosong?',
    ],
  },
  {
    id: 'c2-card-18',
    type: 'reflection',
    eyebrow: 'Entri Kedua · Buku Kerja EBR Anda',
    prompt:
      'Audit ritme tinjauan yang sudah ada (atau belum ada) di bisnis Anda sekarang, dibandingkan peta 4 level ini.',
    fields: [
      {
        id: 'existing-tier',
        label: 'Tier mana yang sudah ada di bisnis Anda sekarang (meski masih informal)?',
        placeholder: 'Contoh: Ada semacam huddle pagi, tapi cuma ngobrol santai, nggak terstruktur',
      },
      {
        id: 'empty-tier',
        label: 'Tier mana yang paling kosong / paling perlu dibangun duluan?',
        placeholder: 'Contoh: Nggak pernah ada tinjauan triwulanan sama sekali',
      },
    ],
  },
  {
    id: 'c2-card-19',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 2',
    title: 'Sekarang Anda Sudah Punya Peta Lengkapnya',
    body: [
      'Anda sekarang tahu: ritme EBR yang sehat itu 4 level, tiap level punya altitude dan orang yang beda, dan melompati satu level itu bahaya — hasilnya rapat yang nggak nyambung ke kerjaan nyata.',
      'Sekarang Anda sudah punya peta lengkapnya. Bab berikutnya kita bedah dua level paling bawah — huddle harian dan tinjauan mingguan — supaya keduanya nggak buang waktu tim Anda.',
    ],
  },
]
