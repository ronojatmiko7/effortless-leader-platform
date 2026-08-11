import {
  Boxes,
  Layers3,
  Trash2,
  UserCheck,
  GraduationCap,
  Wrench,
  Wallet,
  ShieldCheck,
  NotebookPen,
  Compass,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter5Cards: Card[] = [
  {
    id: 'c5-card-1',
    type: 'info',
    icon: Boxes,
    eyebrow: 'Bab 5 · Mengaudit Lapisan Input',
    title: 'Proses Sudah Dipetakan, Sekarang Lacak Bahan Bakunya',
    body: [
      'Di Bab 4, Anda memetakan satu alur kerja nyata dan menduga satu langkah yang paling sering jadi titik bocor.',
      'Sekarang kita telusuri satu langkah lebih dalam: kenapa langkah itu sering bocor? Sering kali jawabannya bukan di prosesnya sendiri, tapi di apa yang MASUK ke proses itu — orangnya, alatnya, atau bahan dan modalnya.',
    ],
  },
  {
    id: 'c5-card-2',
    type: 'info',
    icon: Layers3,
    eyebrow: 'Tiga Sub-area Input',
    title: 'Input Bukan Cuma Soal Rekrutmen',
    body: [
      'Waktu dengar kata "Input", kebanyakan orang langsung mikir soal karyawan. Padahal Input itu ada 3 sub-area: manusia (kompetensi tim), alat (mesin, software, perkakas kerja), dan material/modal (bahan baku serta kecukupan modal kerja).',
      'Ketiganya sama-sama bisa jadi akar masalah. Tapi karena manusia paling gampang disalahkan, dua sub-area lainnya sering luput dari audit.',
    ],
  },
  {
    id: 'c5-card-3',
    type: 'multiple-choice',
    question: "Manakah dari berikut ini yang termasuk kategori 'alat' waktu Anda mengaudit Input?",
    options: [
      'Software kasir dan mesin produksi yang dipakai tim sehari-hari',
      'Seberapa terampil staf mengoperasikan pekerjaannya',
      'Uang kas yang tersedia untuk membeli bahan baku',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Alat itu semua perkakas kerja — mesin, software, kendaraan operasional. Beda dari keterampilan orangnya (manusia), atau bahan dan uang kas yang dipakai (material/modal).',
    errorFeedback:
      'Bukan itu. Alat itu perkakas kerja — mesin, software, kendaraan. Keterampilan orangnya masuk kategori manusia, dan bahan/uang kas masuk kategori material/modal.',
  },
  {
    id: 'c5-card-4',
    type: 'info',
    icon: Trash2,
    eyebrow: 'Prinsip Penting',
    title: 'Sampah Masuk, Sampah Keluar',
    body: [
      'Prinsipnya sederhana: sebagus apa pun Proses Anda dirancang, kalau yang masuk ke dalamnya sudah bermasalah, hasil akhirnya tetap akan ikut bermasalah.',
      'Itu sebabnya audit Input ini penting — bukan buat mencari siapa yang salah, tapi buat memastikan Proses yang sudah Anda benahi di Bab 4 tidak dipaksa bekerja dengan bahan yang memang sudah rusak sejak awal.',
    ],
  },
  {
    id: 'c5-card-5',
    type: 'fill-in-the-blank',
    sentence:
      "Prinsip 'garbage in, garbage out' artinya: sebagus apa pun Proses Anda, kalau yang masuk ke dalamnya sudah _________, hasil akhirnya tetap akan ikut buruk.",
    options: ['bermasalah', 'murah', 'banyak', 'baru'],
    correctAnswer: 'bermasalah',
    successFeedback:
      'Tepat. Proses sebaik apa pun tidak bisa menyelamatkan Input yang sudah bermasalah sejak awal.',
    errorFeedback:
      'Bukan itu. Intinya: Proses sebaik apa pun tidak akan bisa menyelamatkan Input yang sudah bermasalah sejak awal.',
  },
  {
    id: 'c5-card-6',
    type: 'info',
    icon: UserCheck,
    eyebrow: 'Audit Manusia',
    title: 'Jangan Nilai Sikap, Nilai Kesenjangan Skill',
    body: [
      'Teknik paling sederhana: tulis dulu skill apa saja yang SEBENARNYA dibutuhkan untuk satu peran. Baru bandingkan dengan skill yang benar-benar dimiliki orang yang sekarang memegang peran itu.',
      'Selisihnya itu yang disebut competency gap — dan itu jauh lebih berguna dibahas daripada menuduh orangnya "kurang niat" atau "kurang serius".',
    ],
  },
  {
    id: 'c5-card-7',
    type: 'info',
    icon: GraduationCap,
    eyebrow: 'Biar Kebayang',
    title: 'Kelihatannya Malas, Ternyata Belum Pernah Diajari',
    body: [
      'Contoh: seorang admin dianggap "lambat dan ceroboh" karena sering salah input data pesanan. Setelah dicek, ternyata dia memang belum pernah dilatih memakai sistem barunya sama sekali — selama ini cuma belajar sendiri sambil jalan.',
      'Dari luar kelihatan seperti masalah sikap. Padahal akarnya kompetensi: dia memang belum punya skill yang dibutuhkan, dan itu bukan salahnya kalau tidak pernah diajari.',
    ],
  },
  {
    id: 'c5-card-8',
    type: 'multiple-choice',
    question:
      "Seorang staf sales baru sering gagal closing, dan tim lain menganggapnya 'kurang effort'. Sebelum menyimpulkan begitu, apa yang paling penting dicek dulu?",
    options: [
      'Langsung beri surat peringatan supaya lebih semangat',
      'Bandingkan skill closing yang dia punya sekarang dengan skill yang dibutuhkan perannya, termasuk apakah dia pernah dilatih',
      'Pindahkan dia ke posisi lain tanpa evaluasi lebih lanjut',
    ],
    correctAnswer: 1,
    successFeedback:
      "Tepat. 'Kurang effort' itu kesimpulan yang enak diucapkan tapi jarang benar. Cek dulu kesenjangan skillnya sebelum menuduh sikapnya.",
    errorFeedback:
      'Coba lagi. Sebelum menyimpulkan soal sikap, cek dulu apakah dia memang punya skill yang dibutuhkan perannya, dan apakah pernah dilatih untuk itu.',
  },
  {
    id: 'c5-card-9',
    type: 'info',
    icon: Wrench,
    eyebrow: 'Audit Alat',
    title: 'Beli Alatnya Gampang, Makainya yang Susah',
    body: [
      'Ingat software mahal yang stafnya tidak tahu cara pakai, jadi kerjaan malah lebih lambat? Itu soal adoption — apakah tim BENERAN memakainya sehari-hari, atau cuma dibuka kalau ada yang nanya.',
      'Ada juga soal fit — apakah alat itu memang menyelesaikan titik bocor yang Anda temukan di Bab 4, atau cuma jadi satu sistem baru lagi yang harus dikelola tanpa benar-benar membantu.',
    ],
  },
  {
    id: 'c5-card-10',
    type: 'multiple-choice',
    question:
      "Anda berlangganan software manajemen stok seharga jutaan rupiah per bulan, tapi tim gudang masih mencatat stok manual di buku karena 'lebih cepat'. Apa masalah sebenarnya di sini?",
    options: [
      'Software-nya jelek, harus ganti yang lebih mahal',
      'Tim gudang memang malas belajar hal baru',
      'Adoption rendah — alatnya ada tapi tidak benar-benar dipakai, entah karena tidak dilatih atau memang tidak cocok dengan cara kerja mereka',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Alat semahal apa pun tidak berguna kalau adoption-nya rendah. Sebelum menyalahkan orangnya atau ganti software, cari tahu dulu kenapa mereka memilih cara manual.',
    errorFeedback:
      'Coba lagi. Ini soal adoption — alatnya ada, tapi tidak benar-benar dipakai. Cari tahu dulu kenapa, sebelum menyalahkan orangnya atau alatnya.',
  },
  {
    id: 'c5-card-11',
    type: 'info',
    icon: Wallet,
    eyebrow: 'Audit Material dan Modal',
    title: 'Bukan Cuma Soal Ada atau Tidak Ada',
    body: [
      'Material itu soal konsistensi: apakah bahan baku dari supplier Anda kualitasnya sama setiap kali datang, atau naik-turun tanpa Anda sadari?',
      'Modal kerja itu soal ketepatan, bukan cuma jumlah: bukan sekadar "apa kita punya uang", tapi "apa kita punya cukup bahan atau uang di waktu yang tepat, saat proses benar-benar membutuhkannya".',
      'Contoh: toko kehabisan stok barang paling laris justru pas ramai pembeli, karena pembelian ulang tidak direncanakan mengikuti pola penjualan. Uangnya ada, tapi tidak dialokasikan di waktu yang tepat.',
    ],
  },
  {
    id: 'c5-card-12',
    type: 'info',
    icon: ShieldCheck,
    eyebrow: 'Mencegah, Bukan Cuma Membenahi',
    title: 'Cara Termurah Membenahi Input: Jangan Biarkan yang Salah Masuk',
    body: [
      'Semua soal kompetensi tadi bisa dicegah sejak awal, bukan cuma dibenahi belakangan. Caranya: punya daftar syarat keahlian yang jelas dan tidak bisa ditawar, sebelum merekrut siapa pun.',
      'Ini jauh lebih murah daripada mengaudit dan melatih ulang orang yang sudah telanjur salah tempat.',
    ],
  },
  {
    id: 'c5-card-13',
    type: 'yes-no',
    question:
      "Saat merekrut untuk posisi penting, apakah Anda punya daftar syarat keahlian yang jelas dan tertulis, atau lebih sering mengandalkan feeling 'orangnya kelihatan oke'?",
    yesLabel: 'Punya daftar yang jelas dan tertulis',
    noLabel: 'Lebih sering pakai feeling',
    feedbackYes: 'Bagus. Itu artinya Anda sudah mencegah banyak masalah Input sebelum sempat terjadi.',
    feedbackNo:
      'Wajar, kebanyakan bisnis kecil begitu. Tapi ingat: setiap kali Anda rekrut cuma modal feeling, Anda sedang berjudi dengan salah satu sub-area Input yang paling mahal dibenahi belakangan.',
  },
  {
    id: 'c5-card-14',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Lacak Sendiri',
    title: 'Giliran Anda: Lacak Bahan Bakarnya',
    body: [
      'Ingat titik bocor yang Anda duga di Bab 4? Sekarang telusuri satu langkah lebih dalam.',
      'Dari 3 sub-area tadi — manusia, alat, material/modal — mana yang paling Anda curigai jadi akar sebenarnya di balik bottleneck itu?',
    ],
  },
  {
    id: 'c5-card-15',
    type: 'reflection',
    eyebrow: 'Entri Kelima · Buku Kerja Audit Anda',
    prompt:
      'Audit 1 sumber daya yang Anda curigai jadi akar sebenarnya di balik bottleneck yang Anda tulis di Bab 4.',
    fields: [
      {
        id: 'resource',
        label:
          'Sumber daya spesifik apa yang Anda curigai (skill seseorang, alat tertentu, atau bahan/modal tertentu)?',
        placeholder: 'Contoh: Admin gudang belum pernah dilatih pakai sistem stok baru',
      },
      {
        id: 'reason',
        label: 'Kenapa Anda curiga ini akarnya, bukan yang lain?',
        placeholder: 'Contoh: Setiap kali dia yang pegang, selalu ada selisih stok — polanya sama tiap bulan',
      },
    ],
  },
  {
    id: 'c5-card-16',
    type: 'info',
    icon: Compass,
    eyebrow: 'Selesai Bab 5 · Tiga Lapisan Terpetakan',
    title: 'Ketiga Lapisan Sudah Terpetakan',
    body: [
      'Anda sudah memetakan ketiga lapisan — Output di Bab 3, Proses di Bab 4, dan Input barusan. Dari gejala, ke titik bocor, sampai ke sumber daya yang dicurigai jadi akarnya.',
      'Tapi peta ini cuma berguna kalau datanya benar — bukan sekadar dugaan dan feeling seperti yang kita kritik sejak Bab 1.',
      'Bab depan: cara mengumpulkan data audit yang objektif, supaya dugaan Anda tadi bisa benar-benar dibuktikan, bukan cuma insting yang dibungkus istilah audit.',
    ],
    cta: { label: 'Lanjut ke Bab 6', href: '#chapter-6' },
  },
]
