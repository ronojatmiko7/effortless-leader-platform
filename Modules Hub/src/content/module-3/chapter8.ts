import {
  AlarmClock,
  ClipboardList,
  Layers,
  Footprints,
  TrendingUp,
  RefreshCw,
  CalendarCheck,
  NotebookPen,
  FileCheck2,
  Rocket,
  BookOpen,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter8Cards: Card[] = [
  {
    id: 'c8-card-1',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Bab 8 · Playbook & Laporan Lengkap',
    title: 'Sistemnya Sudah Lengkap. Sekarang Gimana Biar Beneran Jalan Minggu Depan?',
    body: [
      'Di Bab 7, Anda keluar dengan gambaran yang nyaris utuh: 4 level ritme tinjauan, cara menggali akar masalah sampai ke sistemnya, cara menutup diskusi jadi keputusan dengan Log Keputusan, dan cara memastikan keputusan itu dikawal — atau naik ke level yang punya wewenang untuk menyelesaikannya.',
      'Di atas kertas, sistem EBR Anda sudah lengkap. Tapi ada satu pertanyaan yang belum dijawab. Ini yang memisahkan sistem yang beneran berjalan dari sistem yang kelihatan bagus di catatan tapi mati pelan-pelan di minggu pertama.',
      'Pertanyaannya: siapa yang mimpin tiap tier? Kapan jadwalnya, dan sudah diblokir di kalender atau belum? Gimana caranya ini tetap jalan waktu Anda sibuk, tim sedang padat, atau ada "minggu yang nggak sempat-sempat"?',
    ],
  },
  {
    id: 'c8-card-2',
    type: 'info',
    icon: AlarmClock,
    eyebrow: 'Satu Level di Atas Bab 1',
    title: 'Ritme Tanpa Jadwal Eksplisit Itu Cuma Niat — Bahkan Kalau Sistemnya Sudah Rapi',
    body: [
      'Di Bab 1, Anda ngerasain sendiri mahalnya jalan tanpa ritme: masalah baru ketahuan setelah membesar, dan siklus kebakaran yang berulang tanpa pernah ketemu akarnya.',
      'Bab ini ada satu level di atasnya. Bukan soal apakah ritme itu penting — itu sudah jelas. Bukan soal apa yang harus ada di tiap tier — itu sudah dirancang di Bab 3 dan 4. Pertanyaannya sekarang: apakah siapa yang mimpin tiap tier sudah ditetapkan? Apakah jadwalnya sudah diblokir — bukan "nanti kapan ada waktu"?',
      'Bahkan sistem yang sudah dirancang paling lengkap pun bisa mati kalau nggak ada yang pegang komitmen menjalankannya secara eksplisit. "Nanti kita jalanin" itu bukan jadwal. Itu harapan yang dibungkus niat baik.',
    ],
  },
  {
    id: 'c8-card-3',
    type: 'yes-no',
    question:
      'Jujur ke diri sendiri: dari 4 tier yang sudah Anda rancang — huddle harian, tinjauan mingguan, bulanan, triwulanan — sudahkah ada yang punya jadwal tetap dan orang yang jelas bertanggung jawab memimpinnya?',
    yesLabel: 'Sudah, ada yang jelas jadwal dan pemimpinnya',
    noLabel: 'Belum, masih di "nanti kita atur"',
    feedbackYes:
      'Bagus — itu modal yang nyata. Bab ini akan bantu Anda memformalisasi sisanya dan pastikan yang sudah ada punya struktur yang cukup eksplisit untuk tetap jalan waktu Anda nggak ada.',
    feedbackNo:
      '"Nanti kita atur" itu bukan jadwal — dan sistem yang nggak punya jadwal eksplisit biasanya mati di minggu kedua. Itulah yang kita beres-bereskan sekarang.',
  },
  {
    id: 'c8-card-4',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Solusinya',
    title: 'Satu Lembar Playbook per Tier — Bukan Dokumen Tebal yang Nggak Pernah Dibuka',
    body: [
      'Yang Anda butuh bukan buku panduan 50 halaman. Yang Anda butuh adalah satu ringkasan per tier yang menjawab empat pertanyaan: siapa yang mimpin, siapa yang wajib hadir, kapan jadwalnya, dan apa agenda intinya.',
      'Tambahkan dua hal yang sudah Anda bangun di Bab 6 dan 7: referensi ke Log Keputusan (yang selalu jadi item pertama dicek di setiap tinjauan) dan protokol eskalasi (kapan masalah yang muncul di tier ini harus naik ke tier atasnya).',
      'Format ini nggak perlu platform atau software khusus. Bisa selembar kertas, bisa dokumen yang dishare, bisa papan di ruang kerja. Yang penting: cukup jelas, cukup ringkas, dan bisa dibaca dalam 30 detik sebelum rapat dimulai.',
    ],
  },
  {
    id: 'c8-card-5',
    type: 'info',
    icon: Layers,
    eyebrow: 'Empat Tier, Empat Ringkasan',
    title: 'Tiap Tier Punya Playbook-nya Sendiri — Isi Minimalnya Ini',
    body: [
      'Huddle Harian: jadwal (hari apa, jam berapa, berapa lama, berdiri), pemimpin (supervisor atau Anda), peserta wajib (tim operasional yang kerja bareng setiap hari), tiga pertanyaan wajib dari Bab 3, dan mekanisme parkir masalah.',
      'Tinjauan Mingguan: jadwal (hari apa tiap minggu, 30–45 menit), pemimpin, peserta (penanggung jawab tiap tim), empat tahap agenda dari Bab 3, dan status Log Keputusan dari minggu sebelumnya.',
      'Tinjauan Bulanan: jadwal (tanggal berapa tiap bulan), pemimpin, peserta (pemilik dan kepala departemen), empat tahap agenda dari Bab 4, dan Log Keputusan bulan ini.',
      'Tinjauan Triwulanan: jadwal (bulan apa tiap kuartal), pemimpin, peserta (pemilik dan orang kepercayaan, bisa ada suara dari luar), empat pertanyaan besar dari Bab 4 — plus satu agenda khusus yang akan kita bahas sebentar lagi.',
    ],
  },
  {
    id: 'c8-card-6',
    type: 'info',
    icon: Footprints,
    eyebrow: 'Poin Paling Penting di Bab Ini',
    title: 'Mulai Semua Tier Serentak Itu Resep untuk Kolaps di Minggu Kedua',
    body: [
      'Setelah 8 bab membangun sistem 4 tier yang lengkap, wajar banget kalau ada dorongan untuk langsung menjalankan semuanya mulai Senin depan. Huddle harian, tinjauan mingguan, bulanan, dan triwulanan — semua serentak, semua komplit dari hari pertama.',
      'Jangan.',
      'Bukan karena sistemnya terlalu besar. Tapi karena ritme baru yang dijalankan serentak selalu punya satu titik lemah yang sama: waktu ada minggu yang luar biasa sibuk, semua langsung kacau sekaligus. Susah balik lagi. Sistem yang baru jalan seminggu langsung berhenti, dan nggak pernah mulai lagi.',
      'Cara yang beneran bertahan: mulai dari satu tier dulu. Tier yang paling murah dijalankan, paling cepat kelihatan hasilnya, dan paling sedikit tergantung pada tier lain.',
    ],
  },
  {
    id: 'c8-card-7',
    type: 'info',
    icon: TrendingUp,
    eyebrow: 'Ini Bukan Kompromi',
    title: 'Huddle Harian Duluan — Baru Naik ke Tier di Atasnya',
    body: [
      'Tier pertama yang paling masuk akal untuk dimulai: huddle harian. Kenapa? Paling operasional, paling langsung terasa bedanya, dan nggak tergantung data laporan bulanan yang butuh waktu untuk dikompilasi.',
      'Kalau huddle harian sudah jalan konsisten dua sampai tiga minggu, masalah kecil mulai ketahuan hari itu juga. Itu baru tambah tinjauan mingguan — karena sekarang ada parkiran masalah yang menunggu untuk diselesaikan, dan ada bahan nyata yang perlu dikoordinasikan lintas tim.',
      'Setelah mingguan stabil, baru bulanan. Setelah bulanan punya ritme, triwulanan masuk dengan sendirinya. Ini bukan usaha yang lebih rendah — ini cara sistemnya beneran bertahan, bukan kolaps di minggu kedua karena terlalu banyak hal baru dijalankan sekaligus.',
    ],
  },
  {
    id: 'c8-card-8',
    type: 'multiple-choice',
    question:
      'Anda baru saja selesai merancang sistem EBR 4 tier lengkap dan mau mulai menjalankannya. Dari mana Anda mulai?',
    options: [
      'Langsung semua 4 tier serentak — kalau mau serius, harus komplit dari awal',
      'Huddle harian dulu, konsistenkan dua sampai tiga minggu, baru naik ke tier berikutnya',
      'Tinjauan triwulanan dulu — paling strategis dan paling berdampak jangka panjang',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Huddle harian dulu: paling cepat terasa bedanya, paling kecil biayanya kalau satu minggu nggak sempat, dan memberi bahan nyata untuk tier-tier di atasnya. Tier di atas nggak akan punya isi yang berarti kalau tier bawahnya belum ada.',
    errorFeedback:
      'Coba lagi. Mulai semua serentak itu resep kolaps di minggu kedua. Mulai dari triwulanan itu mundur — format strategis nggak berguna kalau belum ada data harian dan mingguan yang mengalir ke atasnya. Urutan yang bertahan: operasional dulu, baru strategis.',
  },
  {
    id: 'c8-card-9',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Satu Hal yang Beda dari Bab 6 & 7',
    title: 'Review Sistem EBR Itu Sendiri — Bukan Review Keputusan Individual',
    body: [
      'Ada satu jenis review yang beda dari semua yang sudah dibahas di Bab 6 dan 7. Di Bab 6, Anda mengecek status keputusan yang sudah diambil — apakah sudah jalan, macet, atau selesai. Di Bab 7, Anda memastikan keputusan yang macet punya jalur eskalasi.',
      'Ini beda. Ini review terhadap sistem EBR itu sendiri — bukan isinya, tapi strukturnya. Apakah format keempat tier masih pas? Apakah orang yang hadir di tiap tier masih yang paling tepat? Apakah kriteria eskalasi dari Bab 7 masih relevan setelah bisnis Anda berubah?',
      'Ini bukan sesuatu yang perlu dicek tiap bulan atau tiap minggu. Mengubah-ubah struktur ritme yang baru jalan sebentar-sebentar justru bikin sistem nggak pernah sempat stabil. Cukup sekali per kuartal — dan khususnya sebagai satu agenda tambahan di Tinjauan Triwulanan.',
    ],
  },
  {
    id: 'c8-card-10',
    type: 'info',
    icon: CalendarCheck,
    eyebrow: 'Apa yang Dicek di Review Sistem',
    title: 'Tiga Pertanyaan yang Harus Dijawab di Setiap Review Sistem Triwulanan',
    body: [
      'Satu: apakah format tiap tier masih tepat? Huddle yang tadinya 15 menit mungkin perlu diperpanjang karena tim membesar. Tinjauan mingguan yang tadinya satu forum mungkin perlu dipecah jadi dua karena agendanya terlalu padat. Izinkan perubahan — tapi hanya saat review sistem, bukan di tengah-tengah siklus.',
      'Dua: apakah orang yang hadir di tiap tier masih yang paling tepat? Bisnis yang tumbuh sering mewarisi siapa-yang-diundang-ke-rapat dari kebiasaan lama, padahal peran dan wewenang orang-orang itu sudah berubah.',
      'Tiga: apakah kriteria eskalasi dari Bab 7 masih relevan? Threshold yang masuk akal waktu bisnis Anda kecil mungkin terlalu rendah setelah Anda punya tim yang lebih besar — dan malah bikin semua hal naik ke pemilik terus, padahal seharusnya sudah bisa diselesaikan di bawah.',
    ],
  },
  {
    id: 'c8-card-11',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Sebelum Masuk Buku Kerja: Konkretkan Dua Hal Ini Sekarang',
    body: [
      'Dari semua yang baru dipelajari, ada dua hal yang paling berguna untuk dikongkretkan sekarang — bukan "nanti setelah lebih siap".',
      'Pertama: playbook singkat tier pertama Anda. Bukan dokumen lengkap semua tier — cukup tier pertama yang akan mulai minggu depan. Siapa yang pimpin, siapa yang hadir, kapan, dan berapa lama.',
      'Kedua: tanggal review sistem berikutnya. Bukan "sekitar kuartal depan" yang tanggalnya masih kosong — tapi tanggal yang bisa langsung Anda tandai di kalender, beserta satu-dua hal yang akan Anda cek saat itu.',
    ],
  },
  {
    id: 'c8-card-12',
    type: 'reflection',
    eyebrow: 'Entri Kesembilan · Buku Kerja EBR Anda',
    prompt:
      'Rancang playbook tier pertama Anda — yang akan mulai jalan minggu depan, bukan "nanti kalau sudah siap".',
    fields: [
      {
        id: 'starting-tier',
        label: 'Tier mana yang paling realistis untuk dimulai duluan?',
        placeholder: 'Contoh: Huddle harian — mulai Senin depan dengan tim operasional pagi',
      },
      {
        id: 'tier-leader',
        label: 'Siapa yang akan memimpin tier itu?',
        placeholder: 'Contoh: Saya sendiri, atau supervisor operasional Pak Rudi',
      },
      {
        id: 'tier-schedule',
        label: 'Jadwalnya — hari apa, jam berapa, berapa lama?',
        placeholder: 'Contoh: Senin–Jumat jam 08.15, maksimal 15 menit, berdiri di area kerja',
      },
    ],
  },
  {
    id: 'c8-card-13',
    type: 'yes-no',
    question:
      'Setelah semua yang baru Anda pelajari di bab ini — apa pendekatan rollout sistem EBR Anda?',
    yesLabel: 'Mulai dari Huddle Harian Dulu',
    noLabel: 'Saya Siap Jalankan Semua Tier Sekaligus',
    feedbackYes:
      'Pilihan yang tepat. Mulai dari huddle harian, konsistenkan dua sampai tiga minggu, lalu naik ke tier berikutnya satu per satu. Sistem yang dibangun bertahap jauh lebih tahan dibanding yang langsung penuh sekaligus — dan hasilnya sama saja, cuma waktunya mungkin dua minggu lebih lama.',
    feedbackNo:
      'Keberanian itu bagus — tapi berani bukan berarti langsung semua sekaligus adalah pilihan terbaik. Kalau Anda tetap ingin mulai serentak, pastikan paling tidak ada satu "penanggung jawab ritme" per tier yang tugasnya khusus menjaga konsistensi saat minggu sibuk datang.',
  },
  {
    id: 'c8-card-14',
    type: 'reflection',
    eyebrow: 'Entri Kesepuluh · Buku Kerja EBR Anda',
    prompt:
      'Tentukan tanggal review sistem EBR Anda yang pertama — bukan "nanti di kuartal depan" yang tanggalnya masih kosong.',
    fields: [
      {
        id: 'system-review-date',
        label:
          'Kapan tanggal review sistem EBR Anda yang pertama, dan apa yang akan Anda cek saat itu?',
        placeholder:
          'Contoh: 15 Oktober — cek apakah format huddle harian masih pas, apakah peserta tinjauan mingguan sudah tepat, dan apakah kriteria eskalasi perlu diperbarui setelah kami menambah dua tim baru',
      },
    ],
  },
  {
    id: 'c8-card-15',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Satu Langkah Lagi',
    title: 'Semua yang Sudah Anda Kerjakan dari Bab 1 sampai Sekarang, Kita Kumpulkan Jadi Satu',
    body: [
      'Dari Entri Pertama sampai Entri Kesepuluh, Anda sudah membangun sesuatu yang konkret: kejadian nyata yang bikin kaget, audit ritme 4 tier, rancangan huddle harian, tinjauan bulanan dan triwulanan, dua pass RCA, log keputusan dengan penanggung jawab dan tenggat, protokol eskalasi, playbook tier pertama, dan jadwal review sistem.',
      'Semua itu sekarang kita kumpulkan jadi satu laporan lengkap yang bisa Anda cetak, simpan, dan pakai sebagai acuan saat memulai ritme EBR Anda minggu depan.',
    ],
  },
  {
    id: 'c8-card-16',
    type: 'report',
    eyebrow: 'Laporan EBR Anda',
    title: 'Laporan Ritme EBR Lengkap Anda',
    intro: [
      'Ini rangkuman perjalanan EBR Anda dari Bab 1 sampai Bab 8. Simpan atau cetak untuk jadi acuan waktu Anda memulai ritme dan menjalankan review sistem pertama.',
    ],
    sections: [
      {
        heading: 'Masalah yang Membutakan Anda',
        items: [
          {
            label: 'Masalah yang bikin kaget (Bab 1)',
            cardId: 'c1-card-15',
            fieldId: 'incident',
          },
          {
            label: 'Tanda-tanda yang sebenarnya sudah ada sebelumnya (Bab 1)',
            cardId: 'c1-card-15',
            fieldId: 'warningSign',
          },
        ],
      },
      {
        heading: 'Audit Ritme Anda',
        items: [
          {
            label: 'Tier yang sudah ada di bisnis Anda (Bab 2)',
            cardId: 'c2-card-18',
            fieldId: 'existing-tier',
          },
          {
            label: 'Tier yang paling kosong / perlu dibangun duluan (Bab 2)',
            cardId: 'c2-card-18',
            fieldId: 'empty-tier',
          },
        ],
      },
      {
        heading: 'Huddle Harian Anda',
        items: [
          {
            label: 'Jadwal huddle (Bab 3)',
            cardId: 'c3-card-17',
            fieldId: 'huddle-schedule',
          },
          {
            label: '3 pertanyaan wajib (Bab 3)',
            cardId: 'c3-card-17',
            fieldId: 'huddle-questions',
          },
          {
            label: 'Siapa yang wajib hadir (Bab 3)',
            cardId: 'c3-card-17',
            fieldId: 'huddle-attendees',
          },
        ],
      },
      {
        heading: 'Tinjauan Bulanan & Triwulanan Anda',
        items: [
          {
            label: 'Siapa hadir & pertanyaan inti tinjauan bulanan (Bab 4)',
            cardId: 'c4-card-16',
            fieldId: 'monthly-design',
          },
          {
            label: 'Siapa hadir & pertanyaan inti tinjauan triwulanan (Bab 4)',
            cardId: 'c4-card-16',
            fieldId: 'quarterly-design',
          },
        ],
      },
      {
        heading: 'Diagnosis Akar Masalah',
        items: [
          {
            label: 'Skor kepercayaan 5 Whys (Bab 5)',
            cardId: 'chapter5-five-whys-practice',
            fieldId: 'score',
          },
          {
            label: 'Temuan akar masalah & alasan skor (Bab 5)',
            cardId: 'chapter5-five-whys-practice',
            fieldId: 'justification',
          },
          {
            label: 'Masalah yang dipetakan Fishbone (Bab 5)',
            cardId: 'c5-card-16',
            fieldId: 'fishbone-problem',
          },
          {
            label: 'Faktor-faktor Fishbone (Bab 5)',
            cardId: 'c5-card-16',
            fieldId: 'fishbone-categories',
          },
        ],
      },
      {
        heading: 'Log Keputusan Anda',
        items: [
          {
            label: 'Masalah yang dibahas (Bab 6)',
            cardId: 'c6-card-15',
            fieldId: 'decision-problem',
          },
          {
            label: 'Keputusan yang diambil (Bab 6)',
            cardId: 'c6-card-15',
            fieldId: 'decision-taken',
          },
          {
            label: 'Penanggung jawab (Bab 6)',
            cardId: 'c6-card-15',
            fieldId: 'decision-owner',
          },
          {
            label: 'Tenggat (Bab 6)',
            cardId: 'c6-card-15',
            fieldId: 'decision-deadline',
          },
        ],
      },
      {
        heading: 'Protokol Eskalasi & Status',
        items: [
          {
            label: 'Kriteria naik level di bisnis Anda (Bab 7)',
            cardId: 'c7-card-15',
            fieldId: 'escalation-criteria',
          },
          {
            label: 'Kalau ada yang perlu naik, naik ke siapa (Bab 7)',
            cardId: 'c7-card-15',
            fieldId: 'escalation-target',
          },
          {
            label: 'Status keputusan dari Bab 6 (Bab 7)',
            cardId: 'c7-card-15',
            fieldId: 'decision-status',
          },
        ],
      },
      {
        heading: 'Playbook Ritme EBR Anda',
        items: [
          {
            label: 'Tier yang dimulai duluan (Bab 8)',
            cardId: 'c8-card-12',
            fieldId: 'starting-tier',
          },
          {
            label: 'Siapa pemimpinnya (Bab 8)',
            cardId: 'c8-card-12',
            fieldId: 'tier-leader',
          },
          {
            label: 'Jadwal tier pertama (Bab 8)',
            cardId: 'c8-card-12',
            fieldId: 'tier-schedule',
          },
          {
            label: 'Pendekatan rollout (Bab 8)',
            cardId: 'c8-card-13',
            fieldId: 'selectionLabel',
          },
        ],
      },
      {
        heading: 'Review Sistem Berikutnya',
        items: [
          {
            label: 'Tanggal & yang akan dicek (Bab 8)',
            cardId: 'c8-card-14',
            fieldId: 'system-review-date',
          },
        ],
      },
    ],
    downloadButtonText: 'Cetak / Simpan Laporan Ini',
  },
  {
    id: 'c8-card-17',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Selesai Modul 3',
    title: 'Anda Baru Saja Membangun Sesuatu yang Nyata',
    body: [
      'Ini bukan cuma 8 bab yang Anda baca. Dari kebakaran yang selalu ada di Bab 1, sampai sistem EBR lengkap yang Anda pegang sekarang — Anda sudah membangun sesuatu yang kebanyakan pemilik bisnis nggak pernah sempat bikin: ritme tinjauan yang dirancang untuk jalan sendiri, tanpa nunggu ada yang meledak dulu.',
      'Playbook ada. Log Keputusan ada. Protokol eskalasi ada. Jadwal review sistem ada. Yang tinggal sekarang: mulai minggu depan, dari satu tier dulu, dan pegang ritmenya sampai jadi kebiasaan yang nggak perlu dipaksa.',
      'Bisnis yang tenang itu bukan kebetulan. Sekarang Anda tahu persis cara membangunnya.',
    ],
  },
]
