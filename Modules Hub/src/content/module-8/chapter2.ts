import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  Handshake,
  Link2,
  Map,
  Megaphone,
  Repeat,
  ScanSearch,
  Users,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter2Cards: Card[] = [
  {
    id: 'c2-card-1',
    type: 'info',
    icon: Compass,
    eyebrow: 'Bab 2 · Dari Satu Kasus ke Peta Lengkap',
    title: 'Anda Sudah Punya Satu Perubahan Konkret — Sekarang Waktunya Peta',
    body: [
      'Di akhir Bab 1, Anda sudah menuliskan satu perubahan nyata — yang sedang berjalan, atau yang pernah diam-diam mati. Itu titik uji Anda sepanjang modul ini.',
      'Tapi satu kasus belum cukup buat tahu di mana persisnya bolongnya. Anda perlu peta lengkap arsitektur change management, biar bisa lihat persis di titik mana perubahan Anda — atau perubahan berikutnya — biasanya rontok.',
      'Bab ini kasih peta itu. Dua tahap, dan kenapa kebanyakan bisnis SME cuma pernah menyentuh satu dari keduanya.',
    ],
  },
  {
    id: 'c2-card-2',
    type: 'info',
    icon: Handshake,
    eyebrow: 'Tahap 1',
    title: 'Kesiapan & Buy-In — Menyiapkan Tim Sebelum Perubahan Dijalankan',
    body: [
      'Tahap 1 adalah semua kerjaan yang terjadi sebelum perubahan resmi dijalankan. Intinya: menyiapkan tim secara mental dan praktis, bukan cuma memberitahu mereka bahwa sesuatu akan berubah.',
      'Di dalam tahap ini ada tiga pekerjaan konkret. Pertama, mendiagnosis kenapa tim Anda kemungkinan akan resisten — apa yang bikin mereka diam-diam menolak, bukan cuma menduga-duga (ini isi Bab 3).',
      'Kedua, membangun kasus perubahan yang kerasa nyata buat tim — bukan cuma alasan yang masuk akal buat pemilik bisnis, tapi alasan yang kerasa relevan buat orang yang harus menjalankannya sehari-hari. Ketiga, memetakan siapa yang perlu diyakinkan lebih dulu sebelum sisa tim ikut (keduanya isi Bab 4).',
    ],
  },
  {
    id: 'c2-card-3',
    type: 'info',
    icon: Megaphone,
    eyebrow: 'Tahap 2',
    title: 'Eksekusi & Penguatan — Menjalankan Perubahan dan Menjaganya Bertahan',
    body: [
      'Tahap 2 adalah kerjaan menjalankan perubahannya — lalu, bagian yang paling sering dilupakan, menjaganya tetap dipakai setelah semangat awal launching reda.',
      'Di dalamnya ada rencana rollout yang konkret: komunikasi yang jelas soal apa yang berubah dan kapan, pelatihan yang cukup sampai orang lancar (bukan cuma sekali di hari H), dan quick win yang kelihatan cepat biar tim percaya ini beneran worth it (isi Bab 5).',
      'Setelah rollout jalan, kerjaannya belum selesai — Bab 6 masuk ke cara menjaga momentum dan mengatasi resistensi begitu perubahan benar-benar diuji di lapangan, sampai akhirnya jadi kebiasaan yang bertahan, bukan proyek yang pelan-pelan dilupakan.',
    ],
  },
  {
    id: 'c2-card-4',
    type: 'yes-no',
    question:
      'Pikirkan lagi perubahan yang Anda tuliskan di Bab 1. Sebelum perubahan itu dijalankan atau diumumkan, apakah ada usaha nyata untuk menyiapkan tim — menjelaskan kenapa, membangun alasan yang kerasa relevan buat mereka, atau meyakinkan orang-orang kunci lebih dulu?',
    yesLabel: 'Ada, ada usaha nyata di tahap sebelum dijalankan',
    noLabel: 'Nggak ada, langsung dijalankan atau diumumkan',
    feedbackYes:
      'Bagus — berarti Tahap 1 Anda nggak kosong. Nanti di Bab 3 dan 4 kita cek lebih dalam apakah usaha itu cukup dalam, atau baru di permukaan.',
    feedbackNo:
      'Ini jawaban paling umum di kalangan pemilik SME — dan justru itu kenapa bab ini ada. Perubahan yang langsung lompat ke eksekusi tanpa Tahap 1 kehilangan fondasi dari awal, apapun sebagus apa rencana eksekusinya nanti.',
  },
  {
    id: 'c2-card-5',
    type: 'info',
    icon: ScanSearch,
    eyebrow: 'Kenapa Ini Kejadian Terus',
    title: 'Kenapa Kebanyakan Bisnis SME Melompat Langsung ke Tahap 2',
    body: [
      'Ini bukan soal pemilik bisnis nggak niat atau nggak peduli tim-nya. Polanya lebih spesifik dari itu.',
      'Posisi bisnis biasanya sudah mendesak duluan — ada masalah yang harus diselesaikan sekarang, ada biaya yang terus jalan selama belum berubah, ada tekanan dari luar. Rasanya setiap hari yang lewat tanpa perubahan itu jalan adalah kerugian. Jadi dorongannya wajar: langsung eksekusi, langsung umumkan, langsung jalankan.',
      'Sementara itu, membangun kesiapan tim kerasa seperti langkah tambahan yang bisa dilewati — "toh nanti juga ngerti sendiri," "kan sudah jelas kenapa ini perlu," "nggak usah ribet-ribet jelasin, jalanin aja dulu." Padahal justru langkah yang kerasa "bisa dilewati" ini yang menentukan apakah perubahannya bertahan atau ditinggalkan diam-diam tiga bulan kemudian.',
    ],
  },
  {
    id: 'c2-card-6',
    type: 'multiple-choice',
    question:
      'Seorang pemilik bisnis bilang: "Saya nggak punya waktu buat sesi-sesi persiapan segala. Kondisinya sudah mendesak, saya butuh tim langsung pakai sistem baru minggu ini." Apa yang paling tepat menjelaskan risiko dari pendekatan ini?',
    options: [
      'Nggak ada risiko — kalau kondisinya mendesak, langsung eksekusi memang langkah paling efisien',
      'Risikonya cuma soal kecepatan, sistemnya tetap akan berhasil kalau memang bagus',
      'Tanpa Tahap 1, Tahap 2 kehilangan fondasi — rollout bisa kelihatan berjalan sesaat, tapi besar kemungkinan diam-diam ditinggalkan begitu tekanan dari pemilik mengendur',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Mendesak bukan alasan untuk melewati Tahap 1 — justru situasi mendesak paling butuh Tahap 1 dikerjakan cepat, bukan dilewati sama sekali. Tanpa itu, Tahap 2 cuma bangunan tanpa pondasi.',
    errorFeedback:
      'Belum tepat. Kecepatan eksekusi nggak menyelesaikan masalah kalau tim nggak pernah diyakinkan atau disiapkan. Tanpa Tahap 1, Tahap 2 kehilangan fondasi — kelihatan jalan sesaat, lalu ditinggalkan diam-diam begitu tekanan mengendur.',
  },
  {
    id: 'c2-card-7',
    type: 'info',
    icon: Link2,
    eyebrow: 'Kenapa Dua Tahap Ini Nggak Bisa Berdiri Sendiri',
    title: 'Rollout yang Rapi di Atas Kertas, Tapi Nggak Punya Fondasi',
    body: [
      'Kedua tahap ini saling menyambung, bukan dua proyek terpisah yang kebetulan berurutan. Kalau Tahap 1 nggak ada, Tahap 2 nggak punya apa-apa buat dijalankan di atasnya.',
      'Ini yang bikin polanya menipu: rollout bisa kelihatan rapi dari luar. Ada jadwal peluncuran. Ada pengumuman resmi di grup atau rapat. Ada pelatihan yang tercatat sudah dilaksanakan. Semua kotak administratif tercentang.',
      'Tapi kalau tim nggak pernah benar-benar diyakinkan kenapa ini penting buat mereka, dan nggak pernah dilatih sampai benar-benar lancar — bukan cuma "pernah ditunjukin" — rollout serapi apapun ujungnya sama: ditinggalkan diam-diam begitu tekanan launching reda dan rutinitas lama menarik semua orang kembali.',
    ],
  },
  {
    id: 'c2-card-8',
    type: 'info',
    icon: Map,
    eyebrow: 'Peta Sisa Modul',
    title: 'Ke Mana Peta Ini Membawa Kita',
    body: [
      'Bab 3 masuk ke Tahap 1 bagian pertama: mendiagnosis resistensi — kenapa tim Anda diam-diam menolak perubahan, bukan cuma menduga-duga alasannya.',
      'Bab 4 menyelesaikan Tahap 1: membangun kasus perubahan yang kerasa nyata buat tim, dan memetakan siapa yang perlu diyakinkan lebih dulu sebelum sisanya ikut.',
      'Bab 5 dan 6 masuk Tahap 2: Bab 5 merancang rencana rollout — komunikasi, pelatihan, quick win. Bab 6 menjalankan rollout itu dan mengatasi resistensi begitu benar-benar diuji di lapangan.',
      'Bab 7 menyatukan semuanya jadi satu paket change management lengkap untuk satu perubahan nyata. Bab 8 menutup dengan cara menginstal ini jadi kebiasaan permanen, bukan proyek sesaat.',
    ],
  },
  {
    id: 'c2-card-9',
    type: 'sort-list',
    question:
      'Sebuah bisnis meluncurkan software baru: mereka umumkan sekali di grup WhatsApp, kasih pelatihan satu sesi di hari peluncuran, lalu berharap semua ikut. Urutkan dua tahap ini dari yang paling jelas dilewati ke yang paling jelas dikerjakan dalam kasus itu:',
    items: [
      'Eksekusi & Penguatan — ada pengumuman dan pelatihan, meski minim',
      'Kesiapan & Buy-In — nggak ada usaha menjelaskan alasan atau meyakinkan tim lebih dulu',
    ],
    correctAnswer: [
      'Kesiapan & Buy-In — nggak ada usaha menjelaskan alasan atau meyakinkan tim lebih dulu',
      'Eksekusi & Penguatan — ada pengumuman dan pelatihan, meski minim',
    ],
    successFeedback:
      'Tepat. Kasus ini langsung ke Tahap 2 — ada pengumuman, ada pelatihan sekali — tapi Tahap 1-nya kosong sama sekali. Nggak ada yang menjelaskan kenapa, nggak ada yang meyakinkan tim lebih dulu. Itu kenapa pola ini biasa berakhir dengan tim diam-diam balik ke cara lama.',
    errorFeedback:
      'Belum tepat. Yang paling dilewati di sini adalah Kesiapan & Buy-In — nggak ada penjelasan kenapa atau usaha meyakinkan tim sebelum diluncurkan. Pengumuman dan pelatihan satu sesi itu sudah masuk Tahap 2, meski minim.',
  },
  {
    id: 'c2-card-10',
    type: 'multiple-choice',
    question:
      'Skenario: tool baru dibeli dan diinstal, tapi nggak pernah ada yang menjelaskan ke tim kenapa tool lama diganti atau apa untungnya buat mereka. Ini masalah di tahap mana?',
    options: ['Tahap 1 — Kesiapan & Buy-In', 'Tahap 2 — Eksekusi & Penguatan'],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Nggak ada penjelasan kenapa dan nggak ada usaha bikin tim ngerasa perubahan ini masuk akal buat mereka — itu persis kerjaan Tahap 1 yang belum dikerjakan.',
    errorFeedback:
      'Belum tepat. Ini Tahap 1 — Kesiapan & Buy-In. Membangun alasan yang kerasa nyata buat tim adalah kerjaan sebelum perubahan dijalankan, bukan sesudahnya.',
  },
  {
    id: 'c2-card-11',
    type: 'multiple-choice',
    question:
      'Skenario: tim sudah paham dan setuju kenapa perlu ganti sistem baru, tapi pelatihannya cuma sekali di hari peluncuran, lalu nggak ada yang mendampingi ketika mereka mulai kebingungan minggu berikutnya. Ini masalah di tahap mana?',
    options: ['Tahap 1 — Kesiapan & Buy-In', 'Tahap 2 — Eksekusi & Penguatan'],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Buy-in-nya sudah ada — mereka paham dan setuju. Yang bolong adalah pelaksanaan dan penguatannya: pelatihan yang nggak cukup dan nggak ada pendampingan begitu masalah kecil muncul di lapangan. Itu Tahap 2.',
    errorFeedback:
      'Belum tepat. Ini Tahap 2 — Eksekusi & Penguatan. Tim-nya sudah setuju di awal (Tahap 1 sudah selesai), tapi pelatihan yang cuma sekali dan nggak ada pendampingan lanjutan adalah kegagalan di sisi eksekusi.',
  },
  {
    id: 'c2-card-12',
    type: 'multiple-choice',
    question:
      'Skenario: SOP baru sudah dirapatkan bareng tim, semua orang setuju di rapat, pelatihannya juga rutin diulang tiap bulan pertama — tapi tiga bulan kemudian owner cek langsung, ternyata SOP itu diam-diam nggak dipakai lagi dan nggak ada yang pernah cek atau tanya kenapa. Ini masalah di tahap mana?',
    options: ['Tahap 1 — Kesiapan & Buy-In', 'Tahap 2 — Eksekusi & Penguatan'],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kesiapan dan pelatihan awalnya sudah beres. Yang hilang adalah penguatan jangka panjang — nggak ada yang mengecek atau menjaga momentum setelah bulan-bulan awal reda. Itu bagian dari Tahap 2 yang paling sering diabaikan.',
    errorFeedback:
      'Belum tepat. Ini Tahap 2 — Eksekusi & Penguatan. Kesiapan di awal (rapat, setuju bareng, pelatihan rutin) sudah selesai dengan baik. Yang bolong adalah penguatan setelah itu — nggak ada yang menjaga kebiasaan itu bertahan.',
  },
  {
    id: 'c2-card-13',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Waktunya Menilai Diri Sendiri',
    title: 'Di Mana Posisi Bisnis Anda di Dua Tahap Ini?',
    body: [
      'Sebelum masuk ke kartu penilaian, coba jujur ke diri sendiri dulu. Untuk perubahan yang Anda tuliskan di Bab 1 — atau pola umum di bisnis Anda kalau dilihat dari beberapa perubahan terakhir — di mana posisinya?',
      'Ada tiga kemungkinan buat tiap tahap: ada dan dipakai konsisten, ada tapi nggak konsisten (kadang dikerjakan, kadang dilewati tergantung mood atau waktu), atau nggak ada sama sekali.',
      'Nggak ada jawaban yang "benar" di sini yang bikin Anda kelihatan bagus. Tujuannya cuma satu: tahu persis di mana bolongnya, biar bab-bab berikutnya bisa Anda fokuskan ke bagian yang paling butuh diperbaiki.',
    ],
  },
  {
    id: 'c2-card-14',
    type: 'multiple-choice',
    question:
      'Untuk Tahap 1 — Kesiapan & Buy-In — di bisnis Anda secara umum (bukan cuma satu kasus), yang paling menggambarkan kondisinya:',
    options: [
      'Ada dan dipakai konsisten tiap kali ada perubahan',
      'Ada, tapi nggak konsisten — kadang dikerjakan, kadang dilewati',
      'Nggak ada sama sekali — langsung eksekusi atau umumkan',
    ],
    correctAnswer: 0,
    successFeedback:
      'Dicatat. Kalau ini jawaban jujur Anda, berarti fondasi Tahap 1 sudah cukup kuat — fokus Anda di bab-bab berikutnya bisa lebih ke mempertajam Tahap 2. Nggak ada jawaban "salah" di kartu ini, ini murni pemetaan posisi Anda sendiri.',
    errorFeedback:
      'Dicatat. Ini murni pemetaan posisi Anda sendiri, jadi nggak ada jawaban yang salah — pilihan Anda menunjukkan di mana Tahap 1 paling butuh perhatian, dan itu yang akan dibongkar di Bab 3 dan 4.',
  },
  {
    id: 'c2-card-15',
    type: 'multiple-choice',
    question:
      'Untuk Tahap 2 — Eksekusi & Penguatan — di bisnis Anda secara umum, yang paling menggambarkan kondisinya:',
    options: [
      'Ada dan dipakai konsisten tiap kali ada perubahan',
      'Ada, tapi nggak konsisten — rollout kadang rapi kadang asal jalan, penguatan sering hilang setelah bulan pertama',
      'Nggak ada sama sekali — perubahan diumumkan lalu dibiarkan begitu saja',
    ],
    correctAnswer: 0,
    successFeedback:
      'Dicatat. Sama seperti kartu sebelumnya, ini murni pemetaan diri — nggak ada jawaban salah. Kalau Tahap 2 Anda memang konsisten, itu modal bagus buat bab-bab eksekusi nanti.',
    errorFeedback:
      'Dicatat. Ini murni pemetaan posisi Anda sendiri, jadi nggak ada jawaban yang salah — pilihan Anda menunjukkan di mana Tahap 2 paling butuh perhatian, dan itu yang akan dibongkar di Bab 5 dan 6.',
  },
  {
    id: 'c2-card-16',
    type: 'info',
    icon: Users,
    eyebrow: 'Sebelum Entri Kedua',
    title: 'Gabungkan Dua Jawaban Tadi Jadi Satu Kesimpulan',
    body: [
      'Anda baru saja menilai dua tahap secara terpisah. Sekarang gabungkan: dari keduanya, mana yang secara keseluruhan paling nggak jalan di bisnis Anda?',
      'Ini bukan soal mana yang lebih "penting" secara teori — keduanya sama-sama perlu. Ini soal mana yang, kalau dibenerin duluan, akan kasih dampak paling besar buat perubahan berikutnya yang Anda jalankan.',
      'Tuliskan kesimpulan itu di kartu berikutnya — ini yang akan jadi arah fokus Anda sepanjang sisa modul ini.',
    ],
  },
  {
    id: 'c2-card-17',
    type: 'reflection',
    eyebrow: 'Entri Kedua · Buku Kerja Change Management',
    prompt:
      'Dari dua tahap — kesiapan & buy-in dan eksekusi & penguatan — lihat balik penilaian Anda barusan, lalu simpulkan mana yang paling mendesak buat dibenahi.',
    fields: [
      {
        id: 'weakest-stage',
        label:
          'Dari dua tahap — kesiapan & buy-in dan eksekusi & penguatan — mana yang paling nggak jalan di bisnis Anda sekarang, dan kenapa?',
        placeholder:
          'Misalnya: Tahap 1, karena kami selalu langsung eksekusi tanpa pernah jelasin alasan ke tim dulu...',
      },
      {
        id: 'priority-stage',
        label: 'Kalau Anda bisa benerin satu tahap dulu, mana yang paling mendesak?',
        placeholder:
          'Misalnya: Tahap 1 dulu, karena kalau itu nggak beres, rollout serapi apapun di Tahap 2 nggak akan bertahan...',
      },
    ],
  },
  {
    id: 'c2-card-18',
    type: 'info',
    icon: Repeat,
    eyebrow: 'Sebelum Lanjut',
    title: 'Anda Sekarang Sudah Punya Peta — Bukan Cuma Satu Kasus',
    body: [
      'Di Bab 1 Anda punya satu perubahan konkret. Sekarang Anda sudah punya peta dua tahap yang menjelaskan kenapa perubahan itu — atau perubahan manapun — bisa rontok, dan di titik mana biasanya itu terjadi.',
      'Anda juga sudah menandai tahap mana yang paling bolong di bisnis Anda sendiri. Itu bukan cuma latihan reflektif — itu jadi arah baca Anda buat bab-bab berikutnya.',
    ],
  },
  {
    id: 'c2-card-19',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 3',
    title: 'Sekarang Anda Tahu Tahap Mana yang Paling Bolong',
    body: [
      'Bab 3 mulai dari Tahap 1 — cara mendiagnosis kenapa tim Anda diam-diam menolak perubahan, biar bab-bab berikutnya menjawab akar masalahnya, bukan cuma gejalanya.',
    ],
  },
]
