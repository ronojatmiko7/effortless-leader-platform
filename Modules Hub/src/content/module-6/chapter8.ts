import {
  Layers,
  UserCheck,
  Target,
  Link,
  ClipboardList,
  NotebookPen,
  Clock,
  FileCheck2,
  PartyPopper,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter8Cards: Card[] = [
  {
    id: 'c8-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 8 · Instalasi & Laporan Lengkap',
    title: 'Rancangannya Sudah Ada di Atas Kertas — Sekarang: Gimana Biar Ini Beneran Jalan?',
    body: [
      'Di Bab 7, Anda keluar dengan satu siklus manajemen kinerja yang utuh untuk satu tim nyata di bisnis Anda: tujuan kinerja yang kolaboratif dan diturunkan jelas dari Bab 3, ritme coaching 1-on-1 yang rutin dari Bab 4, kerangka diagnosis underperformance dari Bab 5, jalur tindakan korektif yang formal dan berjenjang dari Bab 6 — semuanya sudah disatukan jadi satu gambaran yang konkret.',
      'Itu pekerjaan yang nyata. Tapi ada pertanyaan yang belum terjawab — yang memisahkan rancangan bagus yang beneran dijalankan dari rancangan bagus yang berakhir dilupakan seperti review tahunan lama.',
      'Pertanyaannya: gimana biar siklus PMS yang sudah dirancang ini beneran jalan minggu depan — dan masih berjalan enam bulan dari sekarang? Bab ini yang menjawab itu.',
    ],
  },
  {
    id: 'c8-card-2',
    type: 'info',
    icon: UserCheck,
    eyebrow: 'Satu Level di Atas Bab 1',
    title: 'Siklus PMS Tanpa Pemilik Kepatuhan yang Eksplisit Itu Cuma Niat Baik',
    body: [
      'Di Bab 1, kita bicara soal "jebakan kosong di tengah" — ada titik awal, ada titik akhir, tapi tidak ada yang sistematis di antaranya. Rancangan siklus PMS yang sudah Anda susun di Bab 3–7 dirancang supaya tidak jatuh ke jebakan itu.',
      'Tapi ada risiko yang lebih halus: bahkan rancangan yang paling rapi sekalipun bisa diam-diam jadi "kosong di tengah" berikutnya — kalau tidak ada satu orang yang secara eksplisit ditugaskan menjaga ritme siklus ini tetap berjalan. Bukan "semua orang tanggung jawab" — karena itu artinya tidak ada yang tanggung jawab.',
      'Satu orang, dengan nama yang bisa disebut, yang tugasnya memastikan sesi coaching berjalan sesuai jadwal, tujuan dikomunikasikan di awal setiap siklus, dan jalur korektif diaktifkan kalau ada yang meleset — tanpa menunggu sampai situasinya memuncak. Tanpa itu, rancangan yang paling komprehensif pun akan perlahan luntur balik ke kebiasaan lama begitu tekanan kerja datang.',
    ],
  },
  {
    id: 'c8-card-3',
    type: 'yes-no',
    question:
      'Untuk siklus PMS yang sudah Anda rancang di Bab 7 — sudah ada satu orang yang secara eksplisit ditugaskan menjaga ritme coaching berjalan dan memastikan siklus ini tidak dibiarkan berjalan sendiri tanpa yang mengawal?',
    yesLabel: 'Sudah — ada nama yang jelas dan tugasnya eksplisit',
    noLabel: 'Belum — atau masih di level "semua orang tanggung jawab"',
    feedbackYes:
      'Bagus. Itu fondasi yang solid. Bab ini bantu Anda mengunci itu jadi playbook singkat yang bisa dipegang dan dirujuk kapan pun ritme mulai melambat atau ada yang terlupakan.',
    feedbackNo:
      '"Semua orang tanggung jawab" biasanya berarti tidak ada yang benar-benar tanggung jawab — terutama saat minggu sibuk datang dan semua orang sudah penuh. Kartu-kartu berikutnya bantu Anda menetapkan itu secara eksplisit: satu nama, satu tugas yang jelas.',
  },
  {
    id: 'c8-card-4',
    type: 'info',
    icon: Target,
    eyebrow: 'Izin Eksplisit — Poin Terpenting di Bab Ini',
    title: 'Mulai dari Satu Tim atau Peran Dulu — Bukan Langsung Seluruh Perusahaan Sekaligus',
    body: [
      'Setelah delapan bab membangun metodologi lengkap — peta siklus PMS, penetapan tujuan kolaboratif, ritme coaching, diagnosis underperformance, jalur tindakan korektif — wajar banget kalau ada dorongan untuk langsung rollout siklus baru ini ke semua tim di bisnis Anda sekaligus, mulai minggu depan.',
      'Jangan.',
      'Bukan karena metodologinya tidak bisa diterapkan ke semua tim — justru sangat bisa, dan itulah tujuannya. Tapi mengubah pola manajemen di seluruh organisasi sekaligus punya titik lemah yang sama: terlalu banyak hal baru yang harus diinternalisasi oleh terlalu banyak orang dalam waktu yang bersamaan. Saat ada satu minggu yang sangat sibuk, semuanya gampang kembali ke cara lama karena tidak ada yang sempat menjaga semuanya.',
      'Instal dulu siklus ini untuk SATU tim atau peran yang sudah Anda rancang di Bab 3–7. Biarkan berjalan dan stabil beberapa bulan. Setelah pola itu solid, pakai metodologi yang sama untuk tim atau peran berikutnya. Ini bukan usaha yang lebih rendah — ini cara supaya siklus ini beneran melekat, bukan kolaps karena terlalu banyak perubahan sekaligus di seluruh organisasi.',
    ],
  },
  {
    id: 'c8-card-5',
    type: 'multiple-choice',
    question:
      'Anda baru saja selesai merancang siklus PMS untuk tim sales (5 orang) — dan tergoda untuk langsung menjalankan siklus yang sama ke tim operasional (8 orang) dan tim customer service (4 orang) sekaligus bulan depan. Apa yang sebaiknya Anda lakukan?',
    options: [
      'Langsung rollout ke semua tim sekaligus — mumpung metodologinya sudah jelas dan semangatnya masih tinggi',
      'Instal dulu untuk tim sales yang sudah dirancang, biarkan stabil beberapa bulan, baru pakai metodologi yang sama untuk tim berikutnya',
      'Tunggu sampai ada masalah nyata di tim operasional atau customer service sebelum menerapkan siklus ke sana',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Satu tim dulu, biarkan stabil, baru lanjut. Bukan karena yang lain tidak penting — tapi karena terlalu banyak perubahan sekaligus gampang kolaps saat tekanan kerja datang. Satu siklus yang bertahan jauh lebih berharga dari tiga siklus yang luntur bersamaan.',
    errorFeedback:
      'Rollout ke semua tim sekaligus membuat organisasi kewalahan dan berisiko kembali ke kebiasaan lama saat ada tekanan kerja. Menunggu masalah adalah pola reaktif yang sudah kita tinggalkan sejak Bab 1. Yang tepat: satu tim dulu, stabilkan, baru lanjut ke berikutnya — metodologinya sama, penerapannya bertahap.',
  },
  {
    id: 'c8-card-6',
    type: 'info',
    icon: Link,
    eyebrow: 'Menyambungkan ke Sistem yang Sudah Ada',
    title: 'Siklus PMS yang Baru Perlu Rumah — Sambungkan ke Forum yang Sudah Berjalan',
    body: [
      'Siklus PMS yang sudah dirancang tidak bisa berdiri sendiri tanpa forum yang rutin meninjaunya. Kalau tidak ada yang membahas progres dan hambatannya secara berkala, coaching rutin dan tujuan yang disepakati akan perlahan jadi ritual tanpa makna — dilakukan tapi tidak ditindaklanjuti.',
      'Kalau Anda sudah ikut Modul 2, sambungkan penetapan tujuannya ke sistem KPI yang sudah ada — tujuan individu adalah cara KPI bisnis itu tercapai di level orang per orang. Kalau Anda sudah ikut Modul 3, sambungkan ritme coaching-nya ke salah satu tier review yang relevan — biasanya tinjauan bulanan atau kuartalan yang sudah berjalan.',
      'Kalau belum ikut Modul 2 atau 3 — tidak masalah. Yang penting: ada forum atau jadwal rutin apa pun bentuknya yang memantau siklus PMS ini secara eksplisit. Bisa rapat bulanan, bisa briefing kuartalan, bisa check-in singkat tiap awal bulan. Satu agenda tetap yang mengecek apakah siklus ini masih berjalan — dengan satu orang yang memimpinnya. Tanpa itu, rancangan yang bagus tidak punya mekanisme koreksi saat mulai melenceng.',
    ],
  },
  {
    id: 'c8-card-7',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Playbook Ringkas Satu Siklus',
    title: 'Satu Ringkasan yang Bisa Dipegang — Itu yang Membuat Siklus Ini Bertahan',
    body: [
      'Playbook instalasi bukan buku panduan tebal. Yang Anda butuhkan adalah satu ringkasan singkat yang bisa dipegang dan dirujuk — yang menjawab beberapa pertanyaan konkret: tim atau peran mana yang jadi fokus pertama, seperti apa mekanisme penetapan tujuannya, ritme coaching-nya seperti apa, jalur tindakan korektifnya seperti apa kalau nanti relevan, dan forum atau jadwal mana yang memantaunya.',
      'Format bisa apa saja: catatan di dokumen bersama, selembar kertas di papan tim, agenda tetap di kalender. Yang penting: cukup jelas dan cukup ringkas untuk dibaca ulang dalam dua menit saat ada pertanyaan — dan mudah dibagi ke siapa pun yang perlu tahu.',
      'Kartu berikutnya minta Anda menuliskan tiga informasi kunci dari playbook itu: forum atau jadwal mana yang akan memantau siklus ini, siapa yang memimpinnya, dan kapan siklus barunya mulai berlaku resmi.',
    ],
  },
  {
    id: 'c8-card-8',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Susun Tiga Informasi Kunci Playbook Instalasi Siklus PMS Anda',
    body: [
      'Semua bahannya sudah ada dari Bab 3–7. Yang sekarang dibutuhkan: tiga informasi kunci — forum atau jadwal mana yang akan memantau siklus PMS ini, siapa yang memimpinnya, dan kapan siklus ini mulai berlaku resmi untuk tim atau peran yang sudah Anda pilih.',
      'Bukan "nanti kalau sudah siap" — tapi tanggal konkret. Tanpa tanggal, ini masih di level niat. Dan tanpa nama yang memimpin, ritme ini tidak punya siapa pun yang memastikannya tetap berjalan saat minggu sibuk datang.',
    ],
  },
  {
    id: 'c8-card-9',
    type: 'reflection',
    eyebrow: 'Entri Kesembilan · Buku Kerja PMS Anda',
    prompt: 'Susun playbook instalasi singkat untuk siklus PMS yang sudah Anda rancang di Bab 3–7.',
    fields: [
      {
        id: 'monitoring-forum',
        label: 'Forum atau jadwal apa yang akan memantau siklus PMS baru ini?',
        placeholder:
          'Contoh: Rapat bulanan tim — agenda tetap 20 menit untuk review progres vs tujuan yang sudah disepakati, hambatan yang muncul, dan apakah ritme coaching berjalan sesuai jadwal. Atau: briefing kuartalan yang sudah ada, ditambah satu agenda tetap untuk siklus PMS...',
      },
      {
        id: 'monitoring-leader',
        label: 'Siapa yang memimpin pemantauan itu?',
        placeholder:
          'Contoh: Manajer operasional, atau pemilik bisnis langsung — nama atau jabatan yang spesifik, bukan "semua orang". Ini orang yang akan dicek kalau ritme mulai melambat...',
      },
      {
        id: 'start-date',
        label: 'Kapan siklus PMS baru ini mulai berlaku resmi untuk tim atau peran yang sudah dipilih?',
        placeholder:
          'Contoh: Awal bulan depan — setelah sesi perkenalan singkat dengan tim untuk menjelaskan siklus baru dan kenapa ini adil untuk semua orang. Tanggal konkret, bukan "nanti kalau sempat"...',
      },
    ],
  },
  {
    id: 'c8-card-10',
    type: 'yes-no',
    question:
      'Setelah semua yang baru Anda pelajari di bab ini — apa pendekatan rollout yang Anda pilih?',
    yesLabel: 'Mulai dari Satu Tim/Peran Dulu',
    noLabel: 'Saya Siap Rollout ke Semua Tim Sekaligus',
    feedbackYes:
      'Pilihan yang tepat. Instal satu tim atau peran dulu, biarkan stabil beberapa bulan, baru gunakan metodologi yang sama untuk tim berikutnya. Hasilnya sama — cuma jauh lebih tahan lama dan tidak gampang luntur saat ada tekanan kerja yang datang.',
    feedbackNo:
      'Keberanian itu bagus — tapi rollout serentak punya titik lemah yang sudah kita bahas. Kalau Anda tetap ingin mulai serentak, pastikan paling tidak ada satu pemilik kepatuhan yang eksplisit per tim — orang yang tugasnya jelas memastikan ritme itu diikuti saat minggu sibuk datang.',
  },
  {
    id: 'c8-card-11',
    type: 'info',
    icon: Clock,
    eyebrow: 'Satu Hal Lagi',
    title: 'Siklus yang Sudah Diinstal Tetap Perlu Dicek Ulang Setelah Berjalan Beberapa Bulan',
    body: [
      'Siklus PMS yang sudah diinstal dengan baik tidak perlu dicek setiap minggu — tapi perlu ditinjau ulang setelah berjalan beberapa bulan. Apakah ritme coaching-nya masih dijalankan sesuai jadwal? Apakah tujuan yang ditetapkan di awal masih relevan atau sudah perlu diperbarui karena kondisi bisnis berubah? Apakah pemilik yang ditetapkan masih orang yang tepat dan masih aktif menjalankan perannya?',
      'Yang paling sering dilupakan: menetapkan tanggal konkret untuk tinjauan ini. Bukan "nanti kalau ada masalah" — karena saat masalahnya sudah terasa, biasanya sudah terlambat untuk koreksi kecil. Satu tanggal konkret, di kalender, dengan satu hal spesifik yang akan dicek.',
      'Kartu berikutnya minta Anda menetapkan itu sekarang, sebelum keluar dari bab ini.',
    ],
  },
  {
    id: 'c8-card-12',
    type: 'reflection',
    eyebrow: 'Entri Kesepuluh · Buku Kerja PMS Anda',
    prompt:
      'Tentukan kapan dan apa yang akan Anda cek pada tinjauan pertama siklus PMS yang sudah diinstal.',
    fields: [
      {
        id: 'next-check',
        label:
          'Kapan Anda akan mengecek apakah siklus PMS yang sudah diinstal benar-benar bertahan — dan apa yang akan Anda cek saat itu?',
        placeholder:
          'Contoh: Tiga bulan dari sekarang — cek apakah ritme 1-on-1 masih berjalan sesuai jadwal, apakah tujuan yang disepakati di awal masih dibahas di setiap sesi, apakah ada kasus underperformance yang sudah masuk ke jalur korektif dengan benar, dan apakah pemilik pemantauan masih aktif menjalankan perannya...',
      },
    ],
  },
  {
    id: 'c8-card-13',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Satu Langkah Terakhir',
    title: 'Semua yang Sudah Anda Kerjakan dari Bab 1 sampai Sekarang, Kita Kumpulkan Jadi Satu',
    body: [
      'Dari Entri Pertama sampai Entri Kesepuluh, Anda sudah membangun sesuatu yang konkret: satu anggota tim yang diidentifikasi di Bab 1, peta kondisi siklus PMS di bisnis Anda di Bab 2, tujuan kinerja yang kolaboratif di Bab 3, ritme coaching yang dirancang di Bab 4, diagnosis underperformance di Bab 5, jalur tindakan korektif di Bab 6, siklus utuh yang dirakit di Bab 7, dan playbook instalasi lengkap dengan jadwal tinjauan pertama dari bab ini.',
      'Semua itu sekarang kita kumpulkan jadi satu laporan lengkap yang bisa Anda cetak, simpan, dan pakai sebagai acuan saat menjalankan siklus PMS baru dan melakukan tinjauan pertama.',
    ],
  },
  {
    id: 'c8-card-14',
    type: 'report',
    eyebrow: 'Laporan Siklus PMS Anda',
    title: 'Laporan Lengkap Perjalanan Anda dari Bab 1 sampai Bab 8',
    intro: [
      'Ini rangkuman perjalanan Anda dari identifikasi jebakan kosong di tengah sampai rancangan siklus PMS yang lengkap dan playbook instalasinya. Simpan atau cetak sebagai acuan saat menjalankan siklus baru dan melakukan tinjauan pertama.',
    ],
    sections: [
      {
        heading: 'Anggota Tim yang Diperhatikan',
        items: [
          {
            label: 'Nama atau peran yang diidentifikasi (Bab 1)',
            cardId: 'c1-card-16',
            fieldId: 'team-member-name',
          },
          {
            label: 'Bukti bahwa tujuan atau feedback belum jelas (Bab 1)',
            cardId: 'c1-card-16',
            fieldId: 'gap-evidence',
          },
        ],
      },
      {
        heading: 'Peta Diri di Siklus PMS',
        items: [
          {
            label: 'Tahap yang paling bolong di bisnis Anda (Bab 2)',
            cardId: 'c2-card-15',
            fieldId: 'stage-assessment',
          },
          {
            label: 'Tahap yang paling mendesak untuk dibenahi (Bab 2)',
            cardId: 'c2-card-15',
            fieldId: 'urgent-fix',
          },
        ],
      },
      {
        heading: 'Tujuan yang Ditetapkan',
        items: [
          {
            label: 'Konteks tim dan tujuan yang diturunkan (Bab 3)',
            cardId: 'c3-card-12',
            fieldId: 'cascading-context',
          },
          {
            label: 'Tujuan kolaboratif yang spesifik dan terukur (Bab 3)',
            cardId: 'c3-card-12',
            fieldId: 'specific-goal',
          },
        ],
      },
      {
        heading: 'Ritme Coaching Anda',
        items: [
          {
            label: 'Frekuensi dan durasi 1-on-1 (Bab 4)',
            cardId: 'c4-card-15',
            fieldId: 'cadence-frequency',
          },
          {
            label: 'Poin agenda tetap tiap sesi (Bab 4)',
            cardId: 'c4-card-15',
            fieldId: 'agenda-items',
          },
        ],
      },
      {
        heading: 'Diagnosis Underperformance',
        items: [
          {
            label: 'Kasus underperformance yang didiagnosis (Bab 5)',
            cardId: 'c5-card-16',
            fieldId: 'underperformer-case',
          },
          {
            label: 'Lensa dominan dan alasannya (Bab 5)',
            cardId: 'c5-card-16',
            fieldId: 'dominant-lens',
          },
        ],
      },
      {
        heading: 'Jalur Tindakan Korektif',
        items: [
          {
            label: 'Tangga tindakan korektif yang relevan (Bab 6)',
            cardId: 'c6-card-14',
            fieldId: 'corrective-rung',
          },
          {
            label: 'Rencana dan jadwal check-in pertama (Bab 6)',
            cardId: 'c6-card-14',
            fieldId: 'corrective-plan',
          },
        ],
      },
      {
        heading: 'Siklus PMS Anda',
        items: [
          {
            label: 'Skor kepercayaan jalur korektif (Bab 7)',
            cardId: 'chapter7-corrective-action-review',
            fieldId: 'score',
          },
          {
            label: 'Alasan skor dan yang masih mengganjal (Bab 7)',
            cardId: 'chapter7-corrective-action-review',
            fieldId: 'justification',
          },
          {
            label: 'Tim atau peran fokus siklus terintegrasi (Bab 7)',
            cardId: 'c7-card-13',
            fieldId: 'focus-team-role',
          },
          {
            label: 'Mekanisme penetapan tujuan dan ritme coaching (Bab 7)',
            cardId: 'c7-card-13',
            fieldId: 'goal-and-coaching',
          },
          {
            label: 'Jalur tindakan korektif terintegrasi (Bab 7)',
            cardId: 'c7-card-13',
            fieldId: 'corrective-pathway',
          },
        ],
      },
      {
        heading: 'Playbook Instalasi Anda',
        items: [
          {
            label: 'Forum atau jadwal pemantau (Bab 8)',
            cardId: 'c8-card-9',
            fieldId: 'monitoring-forum',
          },
          {
            label: 'Pemimpin pemantauan (Bab 8)',
            cardId: 'c8-card-9',
            fieldId: 'monitoring-leader',
          },
          {
            label: 'Tanggal mulai resmi (Bab 8)',
            cardId: 'c8-card-9',
            fieldId: 'start-date',
          },
          {
            label: 'Pendekatan rollout (Bab 8)',
            cardId: 'c8-card-10',
            fieldId: 'selectionLabel',
          },
        ],
      },
      {
        heading: 'Cek Berikutnya',
        items: [
          {
            label: 'Kapan dan apa yang akan dicek (Bab 8)',
            cardId: 'c8-card-12',
            fieldId: 'next-check',
          },
        ],
      },
    ],
    downloadButtonText: 'Cetak / Simpan Laporan Ini',
  },
  {
    id: 'c8-card-15',
    type: 'info',
    icon: PartyPopper,
    eyebrow: 'Selesai Modul 6',
    title: 'Anda Baru Saja Membangun Sistem yang Kebanyakan Bisnis SME Belum Pernah Punya',
    body: [
      'Ini bukan cuma delapan bab yang Anda baca. Dari jebakan kosong di tengah yang diidentifikasi di Bab 1, sampai satu siklus manajemen kinerja yang utuh — tujuan yang jelas di awal, coaching yang rutin di tengah, jalur korektif yang formal kalau ada yang meleset — Anda sudah membangun sesuatu yang sangat jarang ada di bisnis SME: sistem kinerja yang dirancang dengan sengaja untuk beneran dipakai, bukan cuma ada di dokumen.',
      'Siklus pertama ada di tangan Anda. Pemiliknya ada. Forum pemantaunya ada. Tanggal mulai ada. Tanggal cek pertama ada. Yang tinggal sekarang: mulai dari satu tim yang sudah dirancang, biarkan stabil, lalu pakai metodologi yang sama untuk tim berikutnya.',
      '"Jebakan kosong di tengah" yang kita mulai bicarakan di Bab 1 bukan kebetulan — dan sekarang Anda tahu persis cara mencegah siklus kinerja apa pun berakhir jatuh ke jebakan itu lagi.',
    ],
  },
]
