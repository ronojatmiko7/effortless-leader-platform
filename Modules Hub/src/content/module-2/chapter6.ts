import {
  EyeOff,
  Flame,
  Clock,
  Repeat,
  LayoutDashboard,
  Wrench,
  LayoutGrid,
  PenLine,
  ArrowLeftRight,
  ClipboardCheck,
  CalendarCheck,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter6Cards: Card[] = [
  {
    id: 'c6-card-1',
    type: 'info',
    icon: EyeOff,
    eyebrow: 'Bab 6 · Ritme Pemantauan',
    title: '6 KPI, 6 Pemilik, Tapi Belum Ada yang Nengok',
    body: [
      'Di akhir Bab 5, Anda udah punya 6 KPI — Lag dan Lead di tiga area — masing-masing dengan nama pemilik yang jelas.',
      'Tapi selama itu cuma duduk di entri buku kerja, KPI itu sama percumanya dengan KPI basa-basi di Bab 1. Angka yang nggak pernah dilihat itu nggak beda jauh dari angka yang nggak berarti.',
      'Bab ini yang mengubah rancangan itu jadi kebiasaan: kapan dilihat, di mana dilihat, dan siapa yang mengisi angkanya.',
    ],
  },
  {
    id: 'c6-card-2',
    type: 'info',
    icon: Flame,
    eyebrow: 'Kapan Anda Lihat Angkanya?',
    title: 'Jangan Jadi Pemadam Kebakaran',
    body: [
      'Anda udah punya angkanya. Pertanyaannya sekarang: kapan Anda benar-benar melihatnya?',
      'Kalau Anda cuma mengecek data saat ada masalah besar atau pelanggan udah marah-marah, Anda bukan sedang mengelola bisnis — Anda sedang jadi pemadam kebakaran, sama seperti gaya yang bikin Anda capek sebelum kenal KPI yang benar.',
    ],
  },
  {
    id: 'c6-card-3',
    type: 'yes-no',
    question: 'Gimana gaya Anda cek angka bisnis sekarang?',
    yesLabel: 'Rutin, ada jadwal tetap',
    noLabel: 'Cuma kalau ada yang kerasa aneh atau ada masalah',
    feedbackYes: 'Bagus, itu fondasi yang tepat buat bab ini.',
    feedbackNo:
      'Wajar, dan justru itu yang kita bereskan di bab ini — ritme yang bikin Anda nggak nunggu sampai ada yang kebakaran dulu.',
  },
  {
    id: 'c6-card-4',
    type: 'info',
    icon: Clock,
    eyebrow: 'Poin Baru · Ritme Beda buat Lead dan Lag',
    title: 'Lead Dicek Cepat, Lag Dicek Sesuai Jedanya',
    body: [
      'Lead Metric butuh cek cepat — harian, atau beberapa kali seminggu. Itu emang tujuannya dia bisa dikendalikan hari ini; kalau Anda cek sebulan sekali, gunanya sebagai "setir" udah hilang.',
      'Lag Metric ritmenya harus ikut jeda waktunya sendiri, yang udah Anda pelajari di Bab 3. Kalau angkanya cuma update bulanan, ngeceknya harian itu cuma bikin bising — belum ada perubahan berarti. Tapi kalau angkanya update mingguan, ngeceknya bulanan itu udah kelewat lambat.',
    ],
  },
  {
    id: 'c6-card-5',
    type: 'info',
    icon: Repeat,
    eyebrow: 'Contoh Konkret',
    title: 'Pesanan Di-pack H-1 Harian, OTIF Bulanan',
    body: [
      'Ambil contoh dari Bab 5: Lead Metric-nya "persentase pesanan di-pack H-1", Lag Metric-nya OTIF.',
      'Lead-nya dicek tiap hari — begitu ada pesanan yang nggak sempat di-pack H-1, staf gudang bisa langsung tahu dan benerin besok. Lag-nya (OTIF) baru masuk akal dicek per bulan, karena itu angka yang emang terkumpul dari sebulan penuh kiriman.',
      'Dua-duanya angka yang sama-sama valid — bedanya cuma ritme, bukan pentingnya.',
    ],
  },
  {
    id: 'c6-card-6',
    type: 'multiple-choice',
    question: 'Kalau Lag Metric Anda cuma benar-benar berubah tiap bulan, ngecek angka itu tiap hari itu ngapain?',
    options: [
      'Bikin Anda lebih siap',
      'Cuma bikin bising, karena belum ada perubahan berarti buat dilihat',
      'Wajib dilakukan supaya kelihatan disiplin',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ngecek Lag Metric lebih sering dari jeda waktunya sendiri itu cuma bikin bising — nggak ada informasi baru yang benar-benar didapat.',
    errorFeedback:
      'Coba lagi. Kalau angkanya belum berubah, ngecek lebih sering dari jeda waktunya cuma bikin bising, bukan bikin Anda lebih siap atau disiplin.',
  },
  {
    id: 'c6-card-7',
    type: 'info',
    icon: LayoutDashboard,
    eyebrow: 'Dashboard Nggak Harus Software',
    title: 'Tiga Pilihan yang Nggak Butuh Beli Apa-apa',
    body: [
      '"Dashboard" kedengarannya canggih, tapi buat bisnis Anda, itu bisa berupa apa aja yang bisa dilihat semua orang dan gampang diupdate. Nggak perlu software mahal, apalagi tim IT.',
      'Papan tulis fisik (di kantor, dapur, atau gudang): kelihatan sama semua orang, gampang diupdate langsung. Kelemahannya, nggak nyimpen histori — begitu dihapus, datanya hilang.',
      'Spreadsheet sederhana (Google Sheets atau Excel) dengan kolom Target vs Actual per periode: punya histori, bisa dibuka dari HP. Kelemahannya, butuh satu orang yang disiplin ngisi.',
      'Grup WhatsApp khusus buat angka harian: paling gampang buat tim yang udah biasa pakai WA. Kelemahannya, gampang tenggelam di antara chat lain kalau nggak disiplin di-post tiap hari.',
    ],
  },
  {
    id: 'c6-card-8',
    type: 'info',
    icon: Wrench,
    eyebrow: 'Yang Penting Bukan Canggihnya',
    title: 'Pilih yang BENERAN Dipakai, Bukan yang Paling Kelihatan Profesional',
    body: [
      'Dari tiga pilihan itu, nggak ada yang "paling benar". Yang benar adalah yang paling mungkin dipakai konsisten oleh tim Anda.',
      'Inget Bab 1: sibuk mengukur itu nggak sama dengan terukur dengan baik. Dashboard canggih yang nggak pernah diupdate itu vanity metric versi alat — kelihatan profesional, tapi nggak ngasih tahu apa-apa.',
    ],
  },
  {
    id: 'c6-card-9',
    type: 'multiple-choice',
    question:
      'Anda bisa pilih spreadsheet canggih dengan grafik warna-warni yang nggak akan sempat diisi tim Anda tiap hari, atau papan tulis sederhana yang timnya udah biasa update tiap pagi. Mana yang lebih baik dipilih?',
    options: [
      'Spreadsheet canggih, karena kelihatan lebih profesional',
      'Papan tulis sederhana, karena lebih mungkin beneran dipakai konsisten',
      'Keduanya sama saja',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Alat yang paling canggih tapi nggak pernah diisi itu nggak ada gunanya sama sekali — yang menang adalah yang beneran dipakai.',
    errorFeedback:
      'Coba lagi. Yang penting bukan kelihatan profesional, tapi kemungkinan beneran dipakai konsisten oleh tim Anda.',
  },
  {
    id: 'c6-card-10',
    type: 'info',
    icon: LayoutGrid,
    eyebrow: 'Susun Berdasarkan 3 Area',
    title: 'Kelompokkan per Output, Proses, Input — Jangan Daftar Rata',
    body: [
      'Apa pun alat yang Anda pilih, susun angkanya berdasarkan 3 area dari Bab 5 — Output, Proses, Input — bukan cuma daftar 6 angka berurutan tanpa pengelompokan.',
      'Kenapa? Supaya begitu Anda atau tim lihat dashboard-nya, langsung kelihatan area mana yang lagi bermasalah, tanpa harus mikir dulu angka mana masuk kategori apa.',
    ],
  },
  {
    id: 'c6-card-11',
    type: 'info',
    icon: PenLine,
    eyebrow: 'Baru · Siapa yang Nyatet, Bukan Cuma Siapa yang Tanggung Jawab',
    title: 'Pemilik Hasil dan Pemilik Update Itu Dua Peran Beda',
    body: [
      'Di Bab 5, Anda sudah menempelkan nama pemilik ke tiap KPI — siapa yang bertanggung jawab atas HASILNYA. Sekarang tambahkan satu lagi: siapa yang bertanggung jawab MENCATAT angkanya, dan kapan.',
      'Bisa orang yang sama, bisa juga beda — misalnya pemilik hasilnya manajer gudang, tapi yang nyatet tiap hari itu admin gudang. Dua-duanya sah.',
      'Yang nggak sah: nggak ada satu nama pun yang jelas tanggung jawab update-nya. Kalau begitu, dashboard-nya bakal basi dalam dua minggu — ini bukan kemungkinan, ini yang beneran terjadi kalau nggak ada yang pegang.',
    ],
  },
  {
    id: 'c6-card-12',
    type: 'info',
    icon: ArrowLeftRight,
    eyebrow: 'Bandingkan Dua Cerita',
    title: 'Dua Bisnis, Dua Gaya Pantau',
    body: [
      'Bisnis A cuma buka angka KPI-nya kalau udah kerasa ada yang aneh — omzet kelihatan turun, atau ada komplain numpuk. Bisnis B buka angka KPI-nya di jadwal tetap, tiap Senin pagi, apa pun kondisinya.',
      'Minggu pertama, kelihatannya sama aja — dua-duanya jalan normal. Bedanya baru kelihatan minggu ketiga, saat salah satu Lead Metric mulai melenceng pelan-pelan.',
    ],
  },
  {
    id: 'c6-card-13',
    type: 'multiple-choice',
    question: 'Di minggu ketiga itu, apa yang paling mungkin terjadi ke Bisnis A dibanding Bisnis B?',
    options: [
      'Bisnis A baru sadar ada masalah setelah efeknya numpuk dan mulai kelihatan di Output, sementara Bisnis B udah nangkep dari Lead Metric-nya duluan',
      'Tidak ada bedanya, karena keduanya punya KPI yang sama',
      'Bisnis A malah lebih untung karena nggak buang waktu cek angka tiap minggu',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Bisnis B yang jadwalnya tetap bisa nangkep pergeseran di Lead Metric SEBELUM itu numpuk jadi masalah di Output. Bisnis A baru tahu setelah semuanya udah kelihatan — dan biasanya udah lebih mahal buat dibenerin.',
    errorFeedback:
      'Coba lagi. Punya KPI yang sama nggak ada gunanya kalau nggak pernah dilihat di jadwal tetap — itu bedanya, dan Bisnis A yang bakal lebih dulu kena efeknya, bukan Bisnis B.',
  },
  {
    id: 'c6-card-14',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Giliran Anda',
    title: 'Sekarang Rancang Ritme Anda Sendiri',
    body: [
      'Sebelum menulis di buku kerja, coba putuskan dulu: alat apa yang paling mungkin beneran dipakai tim Anda, kapan Anda akan cek Lead Metric, kapan Anda akan cek Lag Metric, dan siapa yang bertanggung jawab mencatat angkanya.',
      "Nggak perlu sempurna dari awal — yang penting ada jadwal konkret, bukan 'nanti kalau ada waktu'.",
    ],
  },
  {
    id: 'c6-card-15',
    type: 'reflection',
    eyebrow: 'Entri Kedelapan · Buku Kerja KPI Anda',
    prompt: 'Rancang ritme pemantauan KPI Anda.',
    fields: [
      {
        id: 'tool',
        label: 'Tool apa yang akan Anda pakai (papan tulis / spreadsheet / grup WhatsApp / lainnya)?',
        placeholder: 'Contoh: Papan tulis di kantor',
      },
      {
        id: 'lead-schedule',
        label: 'Kapan Anda akan cek Lead Metric Anda?',
        placeholder: 'Contoh: Tiap pagi jam 9',
      },
      {
        id: 'lag-schedule',
        label: 'Kapan Anda akan cek Lag Metric Anda, dan siapa yang bertanggung jawab update angkanya?',
        placeholder: 'Contoh: Tiap awal bulan, diupdate oleh admin',
      },
    ],
  },
  {
    id: 'c6-card-16',
    type: 'info',
    icon: CalendarCheck,
    eyebrow: 'Selesai Bab 6',
    title: 'Sekarang Anda Sudah Punya Ritme Pemantauannya',
    body: [
      'Anda sekarang sudah punya ritme pemantauan — kapan cek Lead, kapan cek Lag, di alat apa, dan siapa yang mencatat.',
      'Tapi cepat atau lambat, salah satu angka Anda bakal merah.',
      'Bab depan: cara mendiagnosis KPI yang merah tanpa jadi ajang cari kambing hitam.',
    ],
  },
]
