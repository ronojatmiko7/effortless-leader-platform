import {
  ArrowUpCircle,
  TrendingUp,
  ClipboardList,
  Telescope,
  Scale,
  Users,
  AlertTriangle,
  AlertCircle,
  NotebookPen,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter4Cards: Card[] = [
  {
    id: 'c4-card-1',
    type: 'info',
    icon: ArrowUpCircle,
    eyebrow: 'Bab 4 · Merancang Dua Tier Strategis',
    title: 'Dua Level Operasional Sudah Rapi. Sekarang Isinya Beda Total.',
    body: [
      'Di Bab 3, Anda sudah merancang huddle harian dan tinjauan mingguan — dua level yang menjaga bisnis tetap bergerak tanpa hambatan hari demi hari. Itu pencapaian nyata.',
      'Tapi peta EBR punya dua level lagi di atasnya. Dan ini bukan sekadar versi lebih panjang dari yang sudah ada.',
      'Huddle dan tinjauan mingguan tanya: "apa yang terjadi hari ini atau minggu ini, dan apa yang perlu diselesaikan segera?" Dua level berikutnya tanya sesuatu yang sama sekali berbeda: "apakah kita bergerak ke arah yang benar?" Itu pertanyaan yang tidak bisa dijawab dari data satu hari atau satu minggu.',
    ],
  },
  {
    id: 'c4-card-2',
    type: 'yes-no',
    question:
      'Coba ingat rapat terakhir yang membahas kondisi bisnis secara bulanan atau triwulanan di bisnis Anda. Apakah isinya betul-betul berbeda dari rapat mingguan — bukan sekadar versi yang lebih panjang?',
    yesLabel: 'Iya, jelas beda isinya',
    noLabel: 'Jujur, kurang lebih sama saja',
    feedbackYes:
      'Bagus — itu tanda ada kesadaran soal altitude yang berbeda. Bab ini akan membantu Anda mempertegas apa tepatnya yang membuatnya beda, supaya tidak balik lagi ke pola lama.',
    feedbackNo:
      'Ini yang paling sering terjadi — tinjauan bulanan dan triwulanan berubah jadi versi lebih panjang dari rapat mingguan, sama isinya, cuma lebih lama. Kita akan bongkar kenapa itu terjadi dan gimana mencegahnya.',
  },
  {
    id: 'c4-card-3',
    type: 'info',
    icon: TrendingUp,
    eyebrow: 'Level 3 · Tinjauan Bulanan',
    title: 'Tren Sebulan, Bukan Snapshot Harian',
    body: [
      'Tinjauan bulanan bukan forum untuk membahas apa yang terjadi kemarin atau update status terbaru dari masing-masing departemen. Itu tugasnya tinjauan mingguan.',
      'Ini forum untuk melihat tren — pergerakan angka selama sebulan penuh. Omzet yang turun tiga minggu berturut-turut itu pola, bukan kejadian. Tingkat komplain yang naik dibandingkan bulan lalu itu tren, bukan insiden.',
      'Pertanyaan intinya: apakah kita on-track menuju target bulanan — dan kalau tidak, apa yang menjelaskan tren itu? Ini juga level pertama di mana indikasi awal akar masalah mulai dicari, meski belum deep-dive penuh. Deep-dive itu tugas Bab 5.',
    ],
  },
  {
    id: 'c4-card-4',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Agenda Standar · Tinjauan Bulanan',
    title: 'Empat Tahap yang Harus Ada di Setiap Tinjauan Bulanan',
    body: [
      'Satu: tren KPI dan hasil sebulan — bukan angka hari terakhir, tapi pola selama empat minggu. Mana yang on-track, mana yang meleset, dan seberapa jauh melesetnya?',
      'Dua: indikasi awal akar masalah untuk yang meleset — belum deep-dive, tapi cukup untuk tahu apakah ini masalah eksekusi, masalah sumber daya, atau sinyal sesuatu yang lebih dalam.',
      'Tiga: keputusan sumber daya — perlu nambah budget, rekrut posisi baru, atau ubah alokasi orang? Keputusan yang levelnya di atas wewenang tinjauan mingguan.',
      'Empat: preview bulan depan — tantangan apa yang sudah kelihatan dari sekarang, dan apa yang perlu disiapkan sebelum bulan berganti?',
    ],
  },
  {
    id: 'c4-card-5',
    type: 'multiple-choice',
    question:
      'Kepala tim penjualan baru saja cerita panjang soal kenapa satu pelanggan komplain Rabu lalu — lengkap dengan kronologi jam per jam. Anda sedang di tinjauan bulanan. Apa yang paling tepat dilakukan?',
    options: [
      'Biarkan saja, bisa jadi relevan untuk analisis tren',
      'Tanyakan: apakah komplain ini bagian dari pola yang kelihatan di angka sebulan — kalau iya, lanjut bahas trennya; kalau tidak, ini bukan materi tinjauan bulanan',
      'Pindahkan seluruh pembahasan ke tinjauan mingguan berikutnya',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Satu insiden spesifik dengan kronologi detail itu altitude-nya terlalu rendah untuk tinjauan bulanan. Yang relevan adalah apakah itu bagian dari pola tren — kalau iya, angkanya yang dibahas, bukan kronologinya.',
    errorFeedback:
      'Bukan itu. Insiden spesifik dengan detail lengkap bukan materi tinjauan bulanan — kecuali kalau itu cerminan dari tren yang kelihatan di data sebulan. Pertanyaan yang tepat: apakah ini pola atau cuma satu kejadian?',
  },
  {
    id: 'c4-card-6',
    type: 'info',
    icon: Telescope,
    eyebrow: 'Level 4 · Tinjauan Triwulanan',
    title: 'Bukan Cuma Angka — Tapi Apakah Arahnya Masih Benar',
    body: [
      'Tinjauan triwulanan bukan tinjauan bulanan yang lebih panjang. Bukan juga tempat review tiga bulan terakhir satu per satu. Pertanyaannya naik satu kelas penuh.',
      'Di tinjauan bulanan, Anda tanya "apakah kita on-track?" Di tinjauan triwulanan, Anda tanya sesuatu yang lebih mendasar: apakah target yang kita kejar itu masih target yang benar? Apakah ada perubahan pasar, kompetitor, atau kondisi bisnis yang membuat strategi sekarang perlu direvisi?',
      'Kalau tinjauan bulanan itu cek posisi GPS, tinjauan triwulanan itu tanya: apakah kita sedang menuju kota yang benar?',
    ],
  },
  {
    id: 'c4-card-7',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Agenda Standar · Tinjauan Triwulanan',
    title: 'Empat Pertanyaan Besar di Tinjauan Triwulanan',
    body: [
      'Satu: apakah target dan prioritas yang ditetapkan tiga bulan lalu masih relevan — atau ada yang perlu direvisi karena kondisinya berubah?',
      'Dua: perubahan eksternal apa yang perlu direspons — kompetitor baru, pergeseran kebutuhan pasar, regulasi, tren industri, atau perubahan ekonomi yang berdampak ke bisnis Anda?',
      'Tiga: keputusan strategis besar — masuk pasar baru, hentikan produk yang tidak performa, ubah model bisnis, atau pertanyaan sumber daya jangka panjang yang levelnya di atas keputusan bulanan.',
      'Empat: set ulang prioritas kalau perlu — apa yang harus dikerjakan keras di kuartal berikutnya, dan apa yang boleh dikurangi atau dihentikan?',
    ],
  },
  {
    id: 'c4-card-8',
    type: 'info',
    icon: Scale,
    eyebrow: 'Poin Inti Bab Ini',
    title: '"Eksekusi Dengan Baik" vs "Eksekusi Hal yang Benar"',
    body: [
      'Ini bedanya yang paling fundamental — dan yang paling sering kabur di bisnis nyata.',
      'Tinjauan bulanan tanya: "apakah kita eksekusi dengan baik?" Apakah tim bekerja efektif, target bulanan dikejar dengan cara yang benar, dan masalah eksekusi diselesaikan tepat waktu?',
      'Tinjauan triwulanan tanya: "apakah kita eksekusi hal yang benar?" Apakah target yang kita kejar memang target yang tepat? Apakah strategi yang kita jalankan masih relevan dengan kondisi hari ini?',
      'Bisnis yang cuma punya tinjauan bulanan tapi tidak pernah triwulanan bisa sangat efisien — mengeksekusi hal yang salah.',
    ],
  },
  {
    id: 'c4-card-9',
    type: 'fill-in-the-blank',
    sentence:
      'Tinjauan bulanan menanyakan apakah kita eksekusi dengan baik. Tinjauan triwulanan menanyakan apakah kita mengeksekusi ________ yang benar.',
    options: ['hal', 'cara', 'target', 'angka'],
    correctAnswer: 'hal',
    successFeedback:
      '"Mengeksekusi hal yang benar" — itulah pertanyaan triwulanan. Bukan seberapa baik eksekusinya, tapi apakah yang dieksekusi memang hal yang tepat. Keduanya sama pentingnya, tapi sering tercampur.',
    errorFeedback:
      'Bukan itu. Pertanyaan triwulanan adalah "apakah kita mengeksekusi hal yang benar" — artinya: apakah target dan strategi yang kita jalankan memang tepat, bukan cuma apakah kita menjalankannya dengan baik.',
  },
  {
    id: 'c4-card-10',
    type: 'info',
    icon: Users,
    eyebrow: 'Siapa di Ruangan',
    title: 'Beda Level, Beda Siapa yang Duduk',
    body: [
      'Tinjauan bulanan: pemilik dan kepala tim atau departemen. Orang yang punya data tren timnya dan punya wewenang untuk ambil keputusan sumber daya di levelnya.',
      'Tinjauan triwulanan: lebih selektif dari sisi tim inti, tapi bisa lebih lebar ke luar. Pemilik dan orang kepercayaan utama — ditambah suara dari luar jika perlu: mentor bisnis, penasihat eksternal, atau bahkan pelanggan besar tertentu kalau keputusannya menyangkut arah yang relevan buat mereka.',
      'Kenapa ada orang luar di triwulanan? Karena keputusannya lebih besar dari operasional harian — dan kadang perspektif yang tidak terlalu dekat dengan rutinitas bisnis sehari-hari justru yang paling dibutuhkan untuk melihat sesuatu yang sudah jadi buta titik bagi semua orang di dalam.',
    ],
  },
  {
    id: 'c4-card-11',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Kesalahan Paling Umum #1',
    title: 'Bawa Detail Operasional ke Rapat Triwulanan',
    body: [
      'Skenario yang sering terjadi: rapat triwulanan sudah dijadwalkan, semua orang hadir. Tapi 45 menit pertama habis untuk membahas kenapa staf gudang terlambat submit laporan harian, siapa yang salah input di sistem bulan lalu, dan kronologi komplain pelanggan yang sudah diselesaikan dua minggu lalu.',
      'Itu topik-topik yang levelnya huddle atau tinjauan mingguan. Bukan triwulanan.',
      'Hasilnya: waktu yang seharusnya untuk keputusan strategis besar habis untuk detail yang seharusnya sudah selesai jauh di level bawah. Dan karena waktunya habis, pertanyaan soal arah bisnis tidak pernah benar-benar dibahas — triwulanan selesai tanpa satu pun keputusan strategis yang diambil.',
    ],
  },
  {
    id: 'c4-card-12',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Kesalahan Paling Umum #2',
    title: 'Tinjauan Bulanan yang Isinya Cuma "Semua Aman, Lanjut"',
    body: [
      'Kebalikannya sama berbahayanya: tinjauan bulanan yang hadir, ada agenda, tapi isinya tiap departemen laporan "lancar, Pak/Bu" satu-satu — tanpa data tren yang konkret, tanpa ada yang menggali kenapa angkanya begini, dan 30 menit kemudian semua bubar.',
      'Itu rubber-stamp. Bukan tinjauan.',
      'Ciri-cirinya mudah dikenali: tidak ada angka yang benar-benar dibuka dan dibandingkan sebulan, tidak ada yang mengajukan pertanyaan "kenapa" waktu ada yang meleset, dan keputusan yang diambil tidak berdasarkan data — cuma berdasarkan laporan verbal yang belum tentu akurat. Rapat ini memberikan ilusi kontrol tanpa kontrol yang sesungguhnya.',
    ],
  },
  {
    id: 'c4-card-13',
    type: 'multiple-choice',
    question:
      'Pemilik bisnis jasa catering mengadakan tinjauan triwulanan. Satu jam pertama dipakai untuk mereview karyawan mana yang sering telat, kenapa pesanan minggu kemarin kurang bahan, dan kronologi insiden salah menu di event tiga minggu lalu. Kesalahan apa yang sedang terjadi?',
    options: [
      'Rubber-stamp — tidak ada data yang dibahas secara konkret',
      'Bawa detail operasional ke forum strategis — topik-topik itu levelnya huddle atau tinjauan mingguan, bukan triwulanan',
      'Tidak ada masalah — itu justru cara memulai triwulanan yang baik sebelum masuk ke topik strategis',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Semua topik itu seharusnya sudah selesai di level operasional jauh sebelum rapat triwulanan. Triwulanan seharusnya membuka pertanyaan besar: apakah target kuartal depan masih relevan, ada perubahan pasar apa yang perlu direspons?',
    errorFeedback:
      'Coba lagi. Karyawan yang sering telat, bahan pesanan kurang, insiden salah menu — itu semua level huddle atau mingguan. Membawa topik itu ke triwulanan berarti memakai waktu strategis untuk hal yang seharusnya sudah selesai jauh sebelumnya.',
  },
  {
    id: 'c4-card-14',
    type: 'sort-list',
    question:
      'Urutkan topik-topik diskusi ini dari yang paling operasional (levelnya huddle/mingguan) sampai yang paling strategis (levelnya triwulanan).',
    items: [
      'Kompetitor baru masuk ke pasar inti kita dengan model harga berbeda — apakah strategi kita masih relevan?',
      'Tiga staf pengiriman minta izin hari ini dan belum ada yang bisa gantikan rute mereka',
      'Omzet tiga bulan terakhir konsisten 15% di bawah target — tren ini perlu direspons sebelum akhir bulan',
      'Tingkat komplain naik tiga minggu berturut-turut dan butuh koordinasi lintas tim produksi dan pengiriman',
    ],
    correctAnswer: [
      'Tiga staf pengiriman minta izin hari ini dan belum ada yang bisa gantikan rute mereka',
      'Tingkat komplain naik tiga minggu berturut-turut dan butuh koordinasi lintas tim produksi dan pengiriman',
      'Omzet tiga bulan terakhir konsisten 15% di bawah target — tren ini perlu direspons sebelum akhir bulan',
      'Kompetitor baru masuk ke pasar inti kita dengan model harga berbeda — apakah strategi kita masih relevan?',
    ],
    successFeedback:
      'Tepat. Makin ke bawah urutan ini, pertanyaannya makin jauh dari "apa yang terjadi sekarang" dan makin dekat ke "apakah arah kita masih benar." Isu staf hari ini itu huddle; koordinasi lintas tim itu mingguan; tren omzet 3 bulan itu bulanan; pertanyaan strategis kompetitor itu triwulanan.',
    errorFeedback:
      'Belum pas. Urutannya dari paling operasional: isu staf hari ini (huddle harian) → koordinasi lintas tim (tinjauan mingguan) → tren omzet tiga bulan (tinjauan bulanan) → pertanyaan strategis kompetitor (tinjauan triwulanan).',
  },
  {
    id: 'c4-card-15',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Sebelum Isi Buku Kerja: Konkretkan Dulu untuk Bisnis Anda',
    body: [
      'Sekarang Anda tahu format, agenda, dan siapa yang hadir di dua level strategis ini. Saatnya terapkan ke bisnis Anda sendiri — bukan teori abstrak.',
      'Untuk tinjauan bulanan: siapa yang perlu ada di ruangan, dan apa dua pertanyaan yang paling penting untuk dijawab tiap bulannya di bisnis Anda?',
      'Untuk triwulanan: siapa yang perlu Anda hadirkan — termasuk apakah ada perspektif luar yang berguna? Dan apa dua pertanyaan besar yang selama ini tidak pernah sempat benar-benar dibahas karena selalu tenggelam oleh hal-hal operasional?',
    ],
  },
  {
    id: 'c4-card-16',
    type: 'reflection',
    eyebrow: 'Entri Keempat · Buku Kerja EBR Anda',
    prompt: 'Rancang rangka tinjauan bulanan dan triwulanan versi Anda sendiri.',
    fields: [
      {
        id: 'monthly-design',
        label: 'Siapa yang hadir di tinjauan bulanan Anda, dan apa 1–2 pertanyaan intinya?',
        placeholder:
          'Contoh: Saya + 3 kepala departemen. Pertanyaan: (1) Tren KPI bulan ini vs target — apa yang menjelaskan selisihnya? (2) Sumber daya apa yang perlu disesuaikan bulan depan?',
      },
      {
        id: 'quarterly-design',
        label: 'Siapa yang hadir di tinjauan triwulanan Anda (termasuk orang luar jika ada), dan apa 1–2 pertanyaan intinya?',
        placeholder:
          'Contoh: Saya + 2 mitra + mentor bisnis. Pertanyaan: (1) Apakah target kuartal depan masih relevan? (2) Ada perubahan strategi apa yang perlu diputuskan sebelum kuartal berikutnya?',
      },
    ],
  },
  {
    id: 'c4-card-17',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 4',
    title: 'Empat Level Ritme Sudah Lengkap. Tapi Ini Baru Setengah Perjalanan.',
    body: [
      'Sekarang Anda sudah punya 4 level ritme tinjauan yang lengkap — huddle harian, tinjauan mingguan, tinjauan bulanan, dan tinjauan triwulanan. Masing-masing dengan pertanyaan, orang, dan altitude yang berbeda.',
      'Tapi ritme yang rapi saja tidak cukup. Setiap tinjauan — di level mana pun — akan ketemu kondisi yang sama: ada angka yang meleset, ada masalah yang muncul. Dan kalau jawabannya cuma tebak-tebakan, ritme yang paling rapi pun tidak akan menghasilkan keputusan yang benar.',
      'Bab berikutnya: cara membedah masalah sampai ke akarnya — bukan asumsi, bukan tebak-tebakan. Itu yang akan membuat semua forum tinjauan ini bukan sekadar jadwal, tapi benar-benar menghasilkan sesuatu.',
    ],
  },
]
