import {
  Layers,
  ArrowUpCircle,
  AlertTriangle,
  Scale,
  RefreshCw,
  Flag,
  Briefcase,
  NotebookPen,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter7Cards: Card[] = [
  {
    id: 'c7-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 7 · Eskalasi dan Akuntabilitas Lintas Level',
    title: 'Log Keputusan Sudah Ada. Tapi Dua Masalah Baru Menunggu.',
    body: [
      'Di Bab 6, Anda keluar dari rapat dengan sesuatu yang konkret: Log Keputusan. Masalah dibahas, akar ketemu, keputusan dicatat dengan penanggung jawab dan tenggat. Itu langkah besar.',
      'Tapi ada dua skenario yang belum tersentuh. Pertama: sebagian masalah ternyata terlalu besar untuk diputuskan di level tempat masalah itu pertama kali muncul — butuh sumber daya, wewenang, atau keputusan yang levelnya nggak punya. Kapan masalah itu harus naik?',
      'Kedua: bahkan keputusan yang sudah dicatat rapi di log sering nggak beneran dikerjakan. Tenggat lewat, nggak ada yang tagih, dan masalah yang sama muncul lagi di rapat berikutnya seolah baru pertama kali dibahas. Siapa yang mastiin itu nggak terjadi?',
    ],
  },
  {
    id: 'c7-card-2',
    type: 'yes-no',
    question:
      'Pernah nggak ada masalah yang berulang kali dibahas di level operasional — huddle atau tinjauan mingguan — tapi nggak pernah selesai karena ternyata butuh keputusan atau sumber daya yang cuma ada di level atasnya?',
    yesLabel: 'Pernah, dan makan waktu lama',
    noLabel: 'Belum pernah mengalami',
    feedbackYes:
      'Itu momen yang harusnya ada eskalasi — tapi karena kriterianya nggak jelas, masalah terus diputar di level yang nggak punya wewenang untuk benar-benar menyelesaikannya. Itu yang kita perbaiki di bab ini.',
    feedbackNo:
      'Bagus — tapi bisnis yang makin besar dan tim yang makin banyak biasanya mulai merasakan ini. Bab ini kasih Anda protokol yang siap dipakai sebelum skenario itu muncul.',
  },
  {
    id: 'c7-card-3',
    type: 'info',
    icon: ArrowUpCircle,
    eyebrow: 'Tiga Kriteria Eskalasi',
    title: 'Kapan Sebuah Masalah Harus Naik Level?',
    body: [
      'Ada tiga sinyal yang bilang masalah sudah waktunya naik ke level di atasnya.',
      'Satu: masalahnya butuh sumber daya yang di luar wewenang level tempat masalah itu muncul — budget besar, penambahan orang, atau keputusan alokasi yang hanya bisa dibuat di atas sana.',
      'Dua: masalah yang sama muncul berulang di level bawah tanpa pernah tuntas selesai. Ingat contoh keluhan kualitas dari Bab 2? Satu kejadian karena staf lupa label — selesai di huddle hari itu juga. Tapi kalau pola yang sama muncul lagi minggu depan dengan penyebab berbeda, dan lagi bulan depan, itu sinyal akarnya jauh lebih dalam. Harus naik.',
      'Tiga: dampaknya lintas tim atau departemen — bukan masalah yang bisa diselesaikan satu tim sendiri tanpa wewenang koordinasi yang ada di atasnya.',
    ],
  },
  {
    id: 'c7-card-4',
    type: 'info',
    icon: Scale,
    eyebrow: 'Batas yang Penting',
    title: 'Nggak Semua Masalah Perlu Dieskalasi — dan Ini Serius',
    body: [
      'Sebelum lanjut: nggak semua masalah perlu naik ke level atas. Kalau semua dieskalasi, pemilik jadi micromanage semua level, capek sendiri, dan tim bawah kehilangan kemampuan memutuskan sendiri hal-hal yang seharusnya bisa mereka selesaikan.',
      'Yang selesai di levelnya: satu staf packing salah pasang label hari ini — langsung diperbaiki, kejadian pertama kali. Satu komplain klien yang penyebabnya jelas dan bisa diatasi hari itu juga oleh tim yang menerimanya.',
      'Yang harus naik: komplain kualitas yang muncul empat minggu berturut-turut dari tim yang berbeda-beda — itu pola, bukan insiden tunggal. Keputusan untuk rekrut posisi baru karena tim kewalahan — butuh sumber daya yang nggak ada di wewenang penanggung jawab tim. Masalah yang melibatkan proses penjualan, produksi, dan logistik sekaligus — lintas tim, butuh keputusan di level yang punya otoritas lintas departemen.',
      'Tiga kriteria tadi adalah filter, bukan alarm yang berbunyi setiap ada masalah.',
    ],
  },
  {
    id: 'c7-card-5',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Cara Naik yang Benar',
    title: 'Eskalasi Bukan "Lempar dan Lupa"',
    body: [
      'Ada kesalahan umum yang bikin eskalasi nggak efektif: level bawah cuma bilang "ada masalah besar, tolong diselesaikan" — dan level atas harus mulai analisis dari nol.',
      'Ingat dua alat dari Bab 5 — 5 Whys dan Fishbone? Sebelum masalah naik, level yang membawa masalah itu ke atas harus sudah punya hasil diagnosis awalnya. Bukan kesimpulan final — tapi minimal: "kami sudah tahu ini bukan kejadian sekali. Ini polanya. Ini faktor-faktor yang sudah kami identifikasi. Dan ini kenapa butuh keputusan di luar wewenang kami."',
      'Kalau eskalasi datang lengkap dengan temuan RCA awal, level atas bisa memutuskan jauh lebih cepat dan lebih tepat — daripada harus mulai gali dari nol lagi. Ini yang menyatukan Bab 5 dan cara eskalasi yang sebenarnya efektif.',
    ],
  },
  {
    id: 'c7-card-6',
    type: 'multiple-choice',
    question:
      'Tim operasional sudah tiga minggu mengalami masalah yang sama: pengiriman selalu terlambat di hari Jumat karena kekurangan kurir. Mereka sudah coba atur ulang jadwal sendiri, tapi nggak mempan. Solusinya butuh keputusan rekrut satu kurir baru — sesuatu yang di luar wewenang supervisor tim. Apakah ini harus dieskalasi?',
    options: [
      'Tidak — tim operasional harus terus coba cari solusi sendiri dulu',
      'Ya — masalah berulang tanpa solusi di level itu, dan solusinya butuh sumber daya yang di luar wewenang level tersebut',
      'Ya — tapi hanya kalau masalahnya sudah berulang lebih dari satu bulan penuh',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Dua dari tiga kriteria langsung terpenuhi: polanya berulang tanpa tuntas, dan solusinya butuh rekrut orang — wewenang yang ada di level atas. Nggak perlu nunggu satu bulan. Kalau kriterianya sudah terpenuhi, eskalasi lebih awal jauh lebih baik dari terlambat.',
    errorFeedback:
      'Coba lagi. Cek tiga kriteria: masalahnya berulang tiga minggu tanpa selesai (kriteria dua), dan solusinya butuh rekrut orang — sumber daya di luar wewenang supervisor (kriteria satu). Dua kriteria terpenuhi. Nggak ada aturan harus tunggu satu bulan dulu.',
  },
  {
    id: 'c7-card-7',
    type: 'sort-list',
    question:
      'Urutkan situasi-situasi berikut dari yang paling jelas SELESAI di levelnya sendiri, sampai yang paling jelas WAJIB NAIK ke level atas.',
    items: [
      'Keluhan kualitas produk yang sama muncul dari tiga tim berbeda selama lima minggu berturut-turut — penyebabnya berbeda tiap minggunya',
      'Satu staf packing lupa label hari ini — langsung diperbaiki, kejadian pertama kali',
      'Keputusan untuk ekspansi ke kota baru membutuhkan investasi besar dan persetujuan semua pemilik',
      'Pengiriman sering terlambat karena ada gap koordinasi antara tim produksi, gudang, dan kurir',
    ],
    correctAnswer: [
      'Satu staf packing lupa label hari ini — langsung diperbaiki, kejadian pertama kali',
      'Pengiriman sering terlambat karena ada gap koordinasi antara tim produksi, gudang, dan kurir',
      'Keluhan kualitas produk yang sama muncul dari tiga tim berbeda selama lima minggu berturut-turut — penyebabnya berbeda tiap minggunya',
      'Keputusan untuk ekspansi ke kota baru membutuhkan investasi besar dan persetujuan semua pemilik',
    ],
    successFeedback:
      'Tepat. Label salah hari ini adalah insiden lokal — selesai di huddle. Gap koordinasi lintas tim perlu naik satu level, bisa diselesaikan di tinjauan mingguan atau bulanan dengan orang yang tepat di ruangan. Keluhan berulang lima minggu dari tiga tim berbeda itu pola sistemik yang serius — sinyal kuat buat naik. Dan keputusan investasi ke kota baru itu jelas levelnya paling atas: butuh sumber daya besar dan wewenang tertinggi.',
    errorFeedback:
      'Belum pas. Pakai tiga kriteria sebagai filter: insiden lokal yang sekali terjadi → selesai di levelnya sendiri. Lintas tim tapi solusinya masih bisa dikoordinasikan → naik satu level. Pola berulang dari banyak tim tanpa akar yang ketemu → sinyal kuat untuk naik. Butuh sumber daya sangat besar dan wewenang tertinggi → naik ke paling atas.',
  },
  {
    id: 'c7-card-8',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Masalah Kedua · Akuntabilitas',
    title: 'Keputusan di Log Itu Belum Selesai Hanya Karena Sudah Dicatat',
    body: [
      'Kembali ke Log Keputusan dari Bab 6. Masalah dibahas, akar ketemu, keputusan dicatat — ada penanggung jawab, ada tenggat. Bagus.',
      'Tapi ada satu hal yang membuat log itu mati pelan-pelan: kalau keputusan itu nggak pernah dicek lagi di tinjauan berikutnya. Dua minggu kemudian, rapat baru dimulai, semua langsung masuk ke masalah minggu ini — dan log minggu lalu nggak pernah dibuka. Keputusan yang dicatat rapi itu tergeletak begitu saja.',
      'Hasilnya persis seperti masalah di Bab 1 yang rapatnya tanpa ritme — masalah yang sama muncul lagi, seolah nggak pernah ada yang memutuskan apa pun soal itu. Ini bukan masalah baru: ini versi baru dari pola lama. Log Keputusan yang nggak pernah ditagih itu sama persis seperti dashboard yang nggak pernah dibuka — ada, bagus-bagus di atas kertas, tapi nggak menghasilkan apa-apa.',
      'Solusinya: setiap keputusan di log harus menjadi item pertama yang dicek di tinjauan berikutnya. Bukan tengah-tengah. Bukan kalau sempat. Item pertama.',
    ],
  },
  {
    id: 'c7-card-9',
    type: 'multiple-choice',
    question:
      'Tinjauan mingguan baru dimulai. Ada dua pilihan: (A) langsung buka masalah baru minggu ini, atau (B) buka Log Keputusan dari minggu lalu dan cek statusnya satu per satu dulu. Mana yang benar?',
    options: [
      'A — masalah minggu ini lebih mendesak, cek log bisa nanti di akhir kalau waktunya ada',
      'B — log dicek duluan, karena keputusan yang nggak pernah ditagih sama saja nggak pernah ada keputusan',
      'Bebas, selama keduanya sempat dibahas dalam satu rapat',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kalau log cuma dibuka "kalau sempat di akhir", itu nggak akan pernah sempat — agenda selalu penuh. Dan setiap keputusan yang nggak ditagih pelan-pelan jadi dokumen mati, persis seperti dashboard yang nggak pernah dibuka di Bab 1.',
    errorFeedback:
      'Bukan itu. Log harus jadi item pertama — bukan karena formalitas, tapi karena tanpa itu keputusan nggak punya nilai nyata. "Dibahas kalau sempat" itu bahasa halus untuk "nggak pernah ditagih", dan ujungnya sama: masalah yang sama muncul lagi di rapat berikutnya.',
  },
  {
    id: 'c7-card-10',
    type: 'info',
    icon: Flag,
    eyebrow: 'Alat Baru · Konvensi Status',
    title: 'Empat Status yang Bikin Cek Log Jadi Cepat',
    body: [
      'Kalau tiap kali cek log harus bercerita panjang soal progress, itu sama saja dengan membuka diskusi dari nol lagi setiap rapat. Log jadi berat dipakai, dan orang mulai malas memakainya.',
      'Solusinya: konvensi status yang sederhana dan seragam. Tiap keputusan di log punya satu dari empat status: Belum Mulai, Jalan, Macet-Butuh-Bantuan, atau Selesai.',
      'Cara pakainya saat tinjauan: penanggung jawab cukup sebut statusnya. Kalau Jalan atau Selesai — dikonfirmasi, lanjut. Kalau Belum Mulai — ada pertanyaan singkat kenapa belum mulai. Kalau Macet-Butuh-Bantuan — itu yang baru benar-benar didiskusikan, dan kemungkinan besar ini kandidat eskalasi.',
      'Empat status ini memisahkan apa yang perlu didiskusikan dan apa yang cukup dikonfirmasi. Rapat nggak perlu habis waktunya untuk membahas keputusan yang sudah berjalan lancar.',
    ],
  },
  {
    id: 'c7-card-11',
    type: 'fill-in-the-blank',
    sentence:
      'Di tinjauan berikutnya, keputusan yang statusnya ________ adalah satu-satunya yang perlu benar-benar didiskusikan lebih dalam — dan menjadi kandidat eskalasi kalau hambatannya di luar wewenang level itu.',
    options: ['Macet-Butuh-Bantuan', 'Jalan', 'Selesai', 'Belum Mulai'],
    correctAnswer: 'Macet-Butuh-Bantuan',
    successFeedback:
      '"Macet-Butuh-Bantuan" — bukan Jalan, bukan Selesai, bahkan bukan sekadar Belum Mulai. Status ini sinyal ganda: keputusan nggak bisa jalan sendiri, dan kalau hambatannya di luar wewenang level itu, ini kandidat eskalasi yang wajib naik ke atas.',
    errorFeedback:
      'Bukan itu. Jalan dan Selesai cukup dikonfirmasi — nggak perlu diskusi. Belum Mulai perlu ditanya kenapa, tapi mungkin masih bisa selesai di level itu. Macet-Butuh-Bantuan yang butuh waktu diskusi sungguhan, karena ada sesuatu yang menghalangi dan kemungkinan perlu naik level.',
  },
  {
    id: 'c7-card-12',
    type: 'info',
    icon: Briefcase,
    eyebrow: 'Catatan untuk Bisnis Kecil',
    title: 'Kalau Bisnisnya Kecil: Satu Orang, Dua Topi',
    body: [
      'Di bisnis yang masih kecil, "naik level" mungkin terdengar aneh — karena cuma ada Anda, atau Anda ditambah dua-tiga orang. Siapa yang naik ke mana?',
      'Tapi konsepnya tetap berlaku. Di bisnis kecil, eskalasi mungkin artinya hanya ini: dari "saya sebagai orang yang mengerjakan operasional hari ini" ke "saya sebagai pemilik yang sedang berpikir strategis." Satu orang, dua topi.',
      'Yang penting: keputusan besar itu sadar diangkat ke mode berpikir yang berbeda — bukan diputuskan buru-buru di sela kerjaan harian. Caranya bisa sesederhana: tunda keputusan itu ke hari atau sesi tertentu yang memang disisihkan untuk berpikir strategis, bukan diputuskan sambil lalu di tengah operasional yang padat.',
      'Ini tetap eskalasi yang valid — bukan karena naik ke orang lain, tapi karena sadar naik ke mode berpikir yang lebih strategis sebelum memutuskan.',
    ],
  },
  {
    id: 'c7-card-13',
    type: 'multiple-choice',
    question:
      'Tim operasional Anda sudah mengidentifikasi masalah pola berulang yang perlu dieskalasi ke Anda sebagai pemilik. Cara mana yang paling tepat untuk membawa masalah itu ke atas?',
    options: [
      'Kirimi pesan: "Ada masalah besar soal kualitas produk, perlu keputusan dari Bapak/Ibu" — biar pemilik yang investigasi sendiri',
      'Bawa ke tinjauan bulanan dengan: pola yang sudah teridentifikasi, temuan RCA awal (faktor-faktor yang sudah diketahui), dan kenapa butuh keputusan di luar wewenang tim',
      'Tunggu pemilik bertanya sendiri — lebih sopan kalau nggak langsung meng-eskalasi',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Eskalasi yang efektif itu bukan cuma "ada masalah" — tapi datang dengan diagnosis awal. Pemilik yang menerima eskalasi nggak punya waktu untuk mulai gali dari nol. Temuan RCA awal yang dibawa ke atas itu yang membuat keputusan di level atas bisa lebih cepat dan lebih tepat.',
    errorFeedback:
      'Bukan itu. Opsi pertama itu "lempar dan lupa" — pemilik harus mulai dari awal. Opsi ketiga itu bukan kesopanan, itu menghindari tanggung jawab. Eskalasi yang benar datang dengan konteks: pola yang sudah diidentifikasi, temuan RCA awal yang sudah dikerjakan, dan alasan jelas kenapa butuh naik.',
  },
  {
    id: 'c7-card-14',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Sebelum Masuk Buku Kerja: Dua Hal yang Perlu Dikongkretkan',
    body: [
      'Ada dua hal yang perlu Anda bawa ke bisnis Anda sendiri sebelum masuk buku kerja.',
      'Pertama: protokol eskalasi versi Anda. Dari tiga kriteria yang baru dipelajari, mana yang paling relevan dengan kondisi bisnis Anda sekarang? Dan kalau ada masalah yang memenuhi kriteria itu — naik ke mana, ke siapa, dan seberapa cepat harusnya naik?',
      'Kedua: cek keputusan yang Anda tulis di Bab 6 tadi. Statusnya sekarang apa — Belum Mulai, Jalan, Macet-Butuh-Bantuan, atau Selesai? Kalau Macet, apakah itu kandidat eskalasi berdasarkan tiga kriteria yang baru saja Anda pelajari?',
    ],
  },
  {
    id: 'c7-card-15',
    type: 'reflection',
    eyebrow: 'Entri Kedelapan · Buku Kerja EBR Anda',
    prompt: 'Tulis protokol eskalasi versi Anda sendiri dan cek status keputusan dari Bab 6.',
    fields: [
      {
        id: 'escalation-criteria',
        label: 'Kriteria naik level yang paling relevan di bisnis Anda — kapan Anda tahu sesuatu harus naik?',
        placeholder:
          'Contoh: Kalau masalah yang sama muncul lebih dari 2 kali di huddle tanpa selesai, atau kalau butuh keputusan anggaran di atas Rp 10 juta',
      },
      {
        id: 'escalation-target',
        label: 'Kalau ada masalah yang perlu naik, naik ke siapa di bisnis Anda?',
        placeholder:
          'Contoh: Ke saya sebagai pemilik (kalau yang menjalankan adalah tim), atau ke forum tinjauan bulanan bersama semua kepala departemen',
      },
      {
        id: 'decision-status',
        label: 'Keputusan dari Bab 6 Anda — statusnya sekarang apa? (Belum Mulai / Jalan / Macet / Selesai)',
        placeholder:
          'Contoh: Jalan — Pak Hendra sudah mulai tunjuk satu orang Quality Champion per shift mulai Senin kemarin',
      },
    ],
  },
  {
    id: 'c7-card-16',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 7',
    title: 'Sistem EBR Anda Sekarang Lengkap — Tinggal Satu Langkah',
    body: [
      'Sekarang semua komponen yang membuat EBR bekerja bukan cuma di atas kertas sudah ada di tangan Anda: 4 level ritme tinjauan, cara menggali akar masalah, cara menutup diskusi jadi keputusan — dan sekarang, cara memastikan keputusan itu dikawal sampai selesai atau naik ke level yang bisa menyelesaikannya.',
      'Bab depan adalah yang terakhir. Tugasnya: menyatukan semua yang sudah Anda bangun dari Bab 1 sampai Bab 7 jadi satu playbook yang bisa berjalan sendiri, nggak tergantung pada ingatan atau niat baik semata. Dan di sana Anda juga akan bisa mengunduh laporan lengkap perjalanan EBR Anda — dari Entri Pertama sampai Entri Kedelapan.',
    ],
  },
]
