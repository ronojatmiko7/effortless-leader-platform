import {
  Flame,
  TrendingDown,
  Siren,
  ClipboardCheck,
  Scale,
  AlertTriangle,
  NotebookPen,
  BookMarked,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter1Cards: Card[] = [
  {
    id: 'c1-card-1',
    type: 'info',
    icon: Flame,
    eyebrow: 'Bab 1 · Kenapa Bisnis Butuh Audit Rutin',
    title: 'Selamat Datang di Pos Pemadam Kebakaran Anda',
    body: [
      "Coba jujur: berapa kali minggu ini Anda 'turun tangan langsung' menyelesaikan masalah mendadak — klien komplain, barang telat, karyawan salah kirim invoice?",
      'Anda pulang capek dan merasa produktif. Tapi coba cek dulu: masalah itu, apakah baru pertama kali terjadi? Atau ini yang ketiga kalinya bulan ini?',
      'Kalau Anda cuma memadamkan api yang sama berulang-ulang, Anda bukan sedang memimpin. Anda petugas pemadam kebakaran — cuma gajinya jauh lebih mahal.',
    ],
  },
  {
    id: 'c1-card-2',
    type: 'yes-no',
    question:
      'Coba ingat-ingat sebulan terakhir: apakah ada masalah operasional yang muncul lagi untuk kedua atau ketiga kalinya?',
    yesLabel: 'Ya, ada yang berulang',
    noLabel: 'Tidak ada, semuanya kasus baru',
    feedbackYes:
      'Nah, itu tandanya. Masalah yang berulang berarti akar masalahnya belum pernah benar-benar dibenahi — cuma dipadamkan sementara.',
    feedbackNo:
      'Kalau memang begitu, bagus. Tapi coba jujur sekali lagi: itu karena betul tidak ada yang berulang, atau karena Anda memang belum pernah mencatatnya?',
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: TrendingDown,
    eyebrow: 'Biaya yang Jarang Dihitung',
    title: 'Sibuk Itu Mahal, dan Anda yang Bayar',
    body: [
      'Setiap kali Anda memadamkan api, ada tiga biaya yang jarang masuk hitungan: uang yang hilang karena solusi buru-buru, kesalahan yang terus terulang karena akar masalahnya tidak pernah dicek, dan keputusan yang tidak pernah benar-benar selesai karena minggu depan masalahnya muncul lagi.',
      'Bandingkan dengan bisnis yang rutin diaudit: masalah ketemu sebelum jadi krisis, dan solusinya menempel — bukan cuma tambal sulam.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'fill-in-the-blank',
    sentence:
      'Masalah yang terus muncul lagi bukan berarti Anda lagi sial. Itu tandanya akar masalahnya belum pernah benar-benar _________.',
    options: ['diperbaiki', 'dipadamkan', 'dilupakan', 'disalahkan'],
    correctAnswer: 'diperbaiki',
    successFeedback:
      'Tepat. Dipadamkan dan diperbaiki itu dua hal beda — yang satu bikin apinya mati sebentar, yang satu bikin apinya nggak nyala lagi.',
    errorFeedback:
      'Bukan itu. Masalah berulang itu tandanya akar masalahnya belum pernah benar-benar diperbaiki, cuma dipadamkan sementara.',
  },
  {
    id: 'c1-card-5',
    type: 'info',
    icon: Siren,
    eyebrow: 'Dua Gaya Mengelola Bisnis',
    title: 'Minggu Pemadam Kebakaran',
    body: [
      'Senin: klien komplain, Anda turun tangan sendiri. Rabu: karyawan kunci resign mendadak, Anda ambil alih kerjaannya. Jumat: supplier telat kirim, Anda yang telepon cari solusi.',
      'Di akhir minggu Anda kelelahan. Tapi coba cek kalender Anda: berapa jam yang benar-benar terpakai untuk memikirkan arah bisnis — bukan cuma menyelamatkannya?',
    ],
  },
  {
    id: 'c1-card-6',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Dua Gaya Mengelola Bisnis',
    title: 'Minggu yang Diaudit',
    body: [
      'Bandingkan dengan bisnis yang rutin diaudit. Senin pagi, 30 menit cek angka-angka kunci — ketemu potensi masalah kecil di gudang sebelum jadi keterlambatan kiriman.',
      'Rabu, cek proses onboarding karyawan baru supaya operasional tidak bergantung ke satu orang saja kalau tiba-tiba ada yang resign.',
      'Sama-sama sibuk? Tidak juga. Bedanya: yang satu bereaksi, yang satu mencegah. Yang satu makin lelah tiap minggu, yang satu makin ringan.',
    ],
  },
  {
    id: 'c1-card-7',
    type: 'multiple-choice',
    question:
      'Manakah dari berikut ini yang jadi tanda paling jelas bisnis Anda dikelola secara REAKTIF, bukan preventif?',
    options: [
      'Anda tahu ada masalah sebelum klien sempat komplain',
      'Anda baru tahu ada masalah setelah klien marah-marah duluan',
      'Anda punya jadwal rutin buat cek angka operasional',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kalau sumber informasi utama Anda adalah keluhan orang lain, Anda selalu telat satu langkah.',
    errorFeedback:
      'Coba lagi. Tanda paling jelas gaya reaktif itu justru saat Anda BARU tahu ada masalah setelah ada yang komplain duluan.',
  },
  {
    id: 'c1-card-8',
    type: 'sort-list',
    question: 'Urutkan bagaimana satu masalah kecil biasanya naik kelas jadi krisis kalau tidak pernah diaudit.',
    items: [
      'Klien mulai komplain',
      'Jadi krisis yang harus Anda tangani sendiri',
      'Masalah kecil muncul tapi tidak tercatat',
      'Muncul lagi, dianggap kebetulan',
    ],
    correctAnswer: [
      'Masalah kecil muncul tapi tidak tercatat',
      'Muncul lagi, dianggap kebetulan',
      'Klien mulai komplain',
      'Jadi krisis yang harus Anda tangani sendiri',
    ],
    successFeedback:
      'Persis begini caranya masalah kecil naik kelas jadi kebakaran. Audit rutin memutus rantai ini sejak langkah pertama atau kedua.',
    errorFeedback:
      "Belum pas. Masalah kecil yang dibiarkan biasanya melewati tahap 'dianggap kebetulan' dulu, sebelum akhirnya sampai ke telinga klien.",
  },
  {
    id: 'c1-card-9',
    type: 'info',
    icon: Scale,
    eyebrow: 'Supaya Adil ke Insting',
    title: 'Insting Bukan Selalu Musuh',
    body: [
      'Biar adil: insting itu bukan selalu jahat. Kalau Anda sudah bertahun-tahun di industri ini, insting Anda sebenarnya pola yang terekam dari ratusan pengalaman — itu berguna banget untuk keputusan cepat yang risikonya kecil.',
      'Insting cocok dipakai untuk hal-hal kecil dan gampang dibalik: pilih vendor mana yang lebih enak diajak kerja sama, atau desain mana yang kelihatannya lebih menarik pelanggan.',
    ],
  },
  {
    id: 'c1-card-10',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Supaya Adil ke Insting',
    title: 'Tapi Bukan untuk Keputusan yang Mahal',
    body: [
      "Masalahnya, insting jadi berbahaya begitu dipakai untuk keputusan besar, mahal, dan susah dibalik: memecat orang karena 'kayaknya kurang niat', ganti seluruh sistem kerja karena 'kayaknya lebih gampang', atau berhenti bikin fitur karena 'insting saya bilang pelanggan nggak butuh'.",
      'Aturan sederhana: makin besar taruhannya dan makin susah dibalik keputusannya, makin Anda butuh data — bukan makin Anda butuh yakin.',
    ],
  },
  {
    id: 'c1-card-11',
    type: 'multiple-choice',
    question:
      'Anda mau memutuskan siapa yang harus dipecat karena dianggap kinerjanya buruk. Ini jenis keputusan yang...',
    options: [
      'Kecil dan gampang dibalik — insting saja cukup',
      'Besar dan susah dibalik — butuh data dulu, bukan cuma perasaan',
      'Tidak penting-penting amat, boleh diabaikan',
    ],
    correctAnswer: 1,
    successFeedback:
      "Tepat. Memecat orang itu mahal dan susah dibalik — jangan modal 'kayaknya' saja.",
    errorFeedback:
      'Coba lagi. Memecat orang itu keputusan besar dan susah dibalik, itu butuh data — bukan cuma insting.',
  },
  {
    id: 'c1-card-12',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Jujur ke Diri Sendiri',
    title: 'Giliran Anda: Bongkar Satu Keputusan',
    body: [
      'Sebelum lanjut, coba jujur sebentar. Bukan buat kami — buat Anda sendiri.',
      'Pikirkan satu keputusan besar yang Anda ambil belakangan ini. Bukan yang kecil kayak pilih vendor katering rapat. Yang besar: soal orang, soal uang, atau soal arah bisnis.',
    ],
  },
  {
    id: 'c1-card-13',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja Audit Anda',
    prompt: 'Tulis 1 keputusan besar yang belakangan ini Anda ambil pakai insting, bukan data.',
    fields: [
      {
        id: 'decision',
        label: 'Keputusan apa yang Anda ambil?',
        placeholder: 'Contoh: Menaikkan target sales tim 30% tanpa lihat data kapasitas mereka',
      },
      {
        id: 'reason',
        label: 'Kenapa waktu itu Anda yakin itu keputusan yang benar?',
        placeholder: 'Contoh: Kelihatannya tim kurang effort aja',
      },
      {
        id: 'result',
        label: 'Apa yang sebenarnya terjadi setelah keputusan itu?',
        placeholder: 'Contoh: Target meleset, tim malah demotivasi',
      },
    ],
  },
  {
    id: 'c1-card-14',
    type: 'info',
    icon: BookMarked,
    eyebrow: 'Catatan Tersimpan',
    title: 'Ini Bukan buat Bikin Anda Merasa Bersalah',
    body: [
      'Tenang, ini bukan sesi menyalahkan diri sendiri. Setiap bos pernah ambil keputusan pakai insting — termasuk yang paling berpengalaman sekalipun.',
      'Bedanya bos yang bisnisnya berkembang: mereka sadar polanya, terus bikin sistem supaya keputusan besar berikutnya nggak lagi cuma modal yakin.',
      'Jawaban Anda tadi baru saja jadi entri pertama di buku kerja audit Anda sendiri. Di bab-bab berikutnya, kita isi terus sampai jadi laporan audit yang lengkap.',
    ],
  },
  {
    id: 'c1-card-15',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 1',
    title: 'Sekarang Anda Sudah Merasakan Biayanya',
    body: [
      'Anda sekarang tahu: sibuk bukan sukses, dan insting cuma aman untuk taruhan kecil.',
      'Pertanyaannya sekarang: kalau bukan insting, dari mana Anda tahu APA yang harus dicek duluan?',
      'Di Bab 2, kita bahas petanya: 3 lapisan yang harus Anda audit di bisnis Anda, supaya Anda tahu persis ke mana harus melihat — bukan menebak lagi.',
    ],
    cta: { label: 'Lanjut ke Bab 2', href: '#chapter-2' },
  },
]
