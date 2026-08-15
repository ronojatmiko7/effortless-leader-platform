import {
  Package,
  AlertCircle,
  Shield,
  Footprints,
  Repeat,
  Calendar,
  Link2,
  ClipboardList,
  Clock,
  FileCheck2,
  CheckCircle,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter8Cards: Card[] = [
  {
    id: 'c8-card-1',
    type: 'info',
    icon: Package,
    eyebrow: 'Bab 8 · Menginstal Kebiasaan',
    title: 'Paket Adopsi AI-nya Sudah Ada — Sekarang Pertanyaan yang Belum Terjawab',
    body: [
      'Di Bab 7, Anda merakit paket adopsi AI yang utuh untuk satu alur kerja nyata: kasus pakai yang dipilih lewat filter tiga pertanyaan, batasan data yang jelas, rancangan alur kerja lengkap, dan progres nyata yang sudah dibuktikan di lapangan — bukan cuma rencana di atas kertas.',
      'Itu saja sudah lebih jauh dari kebanyakan bisnis SME yang baru sekadar coba-coba AI. Tapi ada satu pertanyaan yang belum terjawab, dan justru pertanyaan inilah yang menentukan apakah delapan bab ini berguna cuma sekali buat alur kerja yang sekarang, atau berguna terus tiap kali bisnis Anda mau mengadopsi AI untuk hal baru: gimana caranya paket ini nggak cuma bertahan sampai di sini, tapi jadi kebiasaan yang otomatis Anda pakai lagi?',
      'Bab terakhir ini nggak menambah kasus pakai baru atau mode baru. Ini soal instalasi — bikin semua yang sudah Anda bangun bertahan lewat waktu, bukan cuma bertahan sampai momentum minggu-minggu pertama reda.',
    ],
  },
  {
    id: 'c8-card-2',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Satu Level di Atas Bab 1',
    title: '"Adopsi AI Tanpa Pemilik Evaluasi yang Eksplisit Itu Cuma Eksperimen yang Kebetulan Sukses Sesaat"',
    body: [
      'Balik ke Bab 1: eksperimen AI acak — pemakaian AI dari inisiatif satu-dua orang, tanpa kasus pakai yang dipilih sengaja, tanpa pemilik, tanpa cara mengecek hasilnya. Anda sudah lolos dari jebakan itu sejauh ini. Anda sudah memilih kasus pakai dengan sengaja, menetapkan batasan data, merancang alur kerjanya, dan menjalankannya beneran di lapangan.',
      'Tapi ada jebakan satu level lebih tinggi, yang justru bisa menjebak orang yang sudah sejauh ini: bahkan alur kerja AI yang paling sukses di minggu-minggu pertama bisa diam-diam kembali ke cara manual kalau nggak ada satu orang yang eksplisit ditugaskan mengevaluasi dan menjaga kualitasnya setelah momentum awal reda.',
      'Target Bab 5 tercapai, tim kelihatan lancar pakai AI-nya, semua kelihatan beres di akhir Bab 6 — itu semua kemenangan yang nyata, bukan ilusi. Tapi kalau nggak ada yang menjaga, kemenangan itu cuma sesaat. Beberapa bulan kemudian, tanpa ada satu momen dramatis di mana itu "resmi berhenti," tim bisa pelan-pelan balik ke cara lama — persis pola yang Anda kenali dari orang lain di Bab 1, sekarang bisa kejadian sama persis di alur kerja Anda sendiri.',
    ],
  },
  {
    id: 'c8-card-3',
    type: 'multiple-choice',
    question:
      'Tim CS sebuah toko sukses pakai AI buat draft balasan pelanggan — target Bab 5 tercapai, waktu bikin draft turun jauh, semua kelihatan lancar di akhir Bab 6. Tiga bulan kemudian, tanpa ada satu orang yang eksplisit ditugaskan mengecek, sebagian tim diam-diam sudah balik nulis manual lagi karena "kadang lebih gampang nggak usah buka AI-nya." Apa yang paling tepat menjelaskan ini?',
    options: [
      'Alur kerjanya sebenarnya gagal sejak awal — target Bab 5 yang tercapai itu cuma kelihatan berhasil',
      'Alur kerjanya awalnya beneran berhasil, tapi tanpa pemilik evaluasi yang eksplisit, keberhasilan itu cuma bertahan selama momentum awal — begitu itu reda, nggak ada yang menjaga kebiasaannya tetap dipakai',
      'Ini nggak bisa dicegah — semua alur kerja AI pasti pelan-pelan ditinggalkan seiring waktu, apapun yang dilakukan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Keberhasilan di Bab 5-6 itu nyata, bukan ilusi. Yang hilang bukan keberhasilan awalnya, tapi penjagaan setelahnya — tanpa satu orang yang eksplisit ditugaskan mengevaluasi, kemenangan awal itu cuma bertahan selama momentum masih ada.',
    errorFeedback:
      'Belum tepat. Alur kerjanya beneran berhasil di awal — target Bab 5 dan progres Bab 6 itu nyata. Yang bolong adalah nggak ada pemilik evaluasi eksplisit yang menjaga kebiasaan itu bertahan setelah momentum awal reda. Dan ini bukan sesuatu yang "pasti terjadi" — ini bisa dicegah dengan ritme evaluasi yang eksplisit, yang jadi topik bab ini.',
  },
  {
    id: 'c8-card-4',
    type: 'yes-no',
    question:
      'Alur kerja AI yang sudah Anda jalankan sejak Bab 6 — sekarang ini, apakah sudah ada satu orang yang eksplisit ditugaskan mengevaluasi dan menjaga kualitasnya, atau itu masih "urusan siapa aja yang sempat merhatiin"?',
    yesLabel: 'Ada, sudah eksplisit ditugaskan ke satu orang',
    noLabel: 'Belum, masih ngambang siapa yang jaga',
    feedbackYes:
      'Bagus — berarti fondasi paling penting dari bab ini sudah ada. Kartu-kartu berikutnya akan bantu Anda menuliskan itu jadi ritme yang konkret, bukan cuma niat baik di kepala.',
    feedbackNo:
      'Ini jawaban paling jujur dan paling umum, bahkan buat alur kerja yang sudah berhasil di Bab 6. Justru itu kenapa bab ini ada — supaya kesuksesan yang sudah Anda bangun nggak diam-diam luntur cuma karena nggak ada yang eksplisit ditugaskan menjaganya.',
  },
  {
    id: 'c8-card-5',
    type: 'info',
    icon: Shield,
    eyebrow: 'Izin Eksplisit — Poin Terpenting di Bab Ini',
    title: 'Mulai dari Satu Alur Kerja Dulu — Bukan Langsung Terapkan ke Semua Proses Sekaligus',
    body: [
      'Setelah delapan bab merancang metodologi adopsi AI yang lengkap — memetakan level pemakaian, memilih kasus pakai, menetapkan batasan data, merancang alur kerja, menjalankan dan melatih tim — wajar banget kalau ada dorongan buat langsung menerapkan AI ke semua proses yang sedang berjalan di bisnis Anda sekaligus. Semua proses, metodologi yang sama, dimulai minggu depan.',
      'Jangan.',
      'Bukan karena metodologinya nggak bisa dipakai di alur kerja lain — justru sangat bisa, dan itu memang tujuannya. Tapi menjalankan proses lengkap ini di banyak alur kerja sekaligus punya titik lemah yang sama seperti masalah dari Bab 1: terlalu banyak hal baru yang harus diinternalisasi sekaligus, terlalu banyak ritme evaluasi yang harus dijaga bersamaan, terlalu banyak alur kerja yang minta perhatian penuh di saat yang sama. Begitu ada satu yang paling mendesak, yang lain gampang banget ditinggalkan diam-diam — dan itu persis pola yang mau Anda hindari.',
    ],
  },
  {
    id: 'c8-card-6',
    type: 'info',
    icon: Footprints,
    eyebrow: 'Kenapa Ini Bukan Usaha yang Lebih Rendah',
    title: 'Instal Dulu untuk Satu Alur Kerja, Buktikan Bertahan, Baru Lanjut ke Alur Kerja Berikutnya',
    body: [
      'Instal dulu kebiasaan ini untuk SATU alur kerja — yang sudah Anda rancang dan jalankan sejak Bab 3 sampai 7. Buktikan itu bertahan lewat ritme evaluasi yang akan Anda susun di kartu-kartu berikutnya. Baru setelah itu, pakai metodologi yang sama persis untuk alur kerja AI berikutnya yang mau Anda kembangkan di bisnis.',
      'Ini bukan usaha yang lebih rendah dibanding langsung menerapkan ke semua proses sekaligus. Ini cara supaya kebiasaannya beneran melekat, bukan kolaps karena terlalu banyak alur kerja AI dikelola sekaligus tanpa pengawasan yang cukup. Satu alur kerja yang beneran terinstal jadi kebiasaan permanen jauh lebih berharga daripada lima alur kerja yang semuanya setengah jalan lalu diam-diam ditinggalkan bareng-bareng.',
      'Begitu alur kerja pertama ini terbukti bertahan — bukan cuma bertahan sebulan, tapi bertahan sampai Anda yakin itu sudah jadi kebiasaan otomatis tim — barulah metodologi yang sama layak dipakai lagi, kali ini dengan lebih cepat karena Anda sudah tahu persis caranya.',
    ],
  },
  {
    id: 'c8-card-7',
    type: 'yes-no',
    question:
      'Setelah semua yang baru Anda kerjakan di tujuh bab ini — apa pendekatan yang Anda pilih untuk menginstal kebiasaan adopsi AI ini di bisnis Anda?',
    yesLabel: 'Mulai dari Satu Alur Kerja Dulu',
    noLabel: 'Saya Siap Terapkan AI ke Beberapa Alur Kerja Sekaligus',
    feedbackYes:
      'Pilihan yang tepat. Instal dulu untuk satu alur kerja yang sudah Anda rancang sejak Bab 3-7, buktikan itu bertahan lewat ritme evaluasi yang akan Anda susun sebentar lagi — baru pakai metodologi yang sama untuk alur kerja berikutnya. Hasilnya sama luasnya dengan menerapkan ke semua proses sekaligus, cuma jauh lebih tahan lama.',
    feedbackNo:
      'Semangat itu bagus — tapi menjalankan proses lengkap ini di banyak alur kerja sekaligus punya titik lemah yang sudah kita bahas: terlalu banyak ritme evaluasi yang harus dijaga bersamaan, dan begitu ada satu yang paling mendesak, yang lain gampang ditinggalkan diam-diam. Kalau Anda tetap ingin jalan di beberapa alur kerja sekaligus, pastikan paling tidak tiap alur kerja punya pemilik evaluasi yang eksplisit sendiri-sendiri — bukan satu orang yang dibagi terlalu tipis ke semuanya. Dan pertimbangkan serius untuk menyelesaikan instalasi satu alur kerja dulu sampai benar-benar terbukti sebelum menambah yang lain.',
  },
  {
    id: 'c8-card-8',
    type: 'info',
    icon: Repeat,
    eyebrow: 'Ritme Evaluasi',
    title: 'Jadwal Cek Berkala Setelah Rollout Awal — Bukan Cuma Dianggap Selesai Begitu Target Bab 5 Tercapai Sekali',
    body: [
      'Ritme evaluasi adalah jadwal cek berkala yang dilakukan setelah rollout awal, bukan sekali di akhir lalu dianggap kelar. Ini yang paling sering hilang dari alur kerja AI yang mati pelan-pelan — target Bab 5 tercapai, semua kelihatan lancar, lalu semua orang, termasuk Anda sendiri, berhenti memperhatikan.',
      'Ini kesalahan yang sama seperti eksperimen AI acak dari Bab 1, cuma pindah ke titik waktu yang berbeda. Bab 1 tentang nggak pernah ada kasus pakai yang dipilih dan dijaga sejak awal. Ini tentang berhenti menjaga setelah rollout awal berhasil — sama-sama berhenti di titik yang seharusnya belum jadi garis finish.',
      'Ritme evaluasi yang eksplisit menjawab itu dengan jadwal konkret: kapan Anda (atau pemilik yang ditugaskan) akan cek lagi, bukan "nanti kalau sempat" atau "kalau ada yang komplain baru dicek." Kalau sinyal balik ke cara manual sudah kelihatan jelas, biasanya sudah agak terlambat untuk koreksi yang murah dan cepat.',
    ],
  },
  {
    id: 'c8-card-9',
    type: 'info',
    icon: Calendar,
    eyebrow: 'Apa yang Dicek di Tiap Ritme',
    title: 'Tiga Hal yang Dicek Tiap Kali Ritme Evaluasi Ini Jalan',
    body: [
      'Tiga hal yang perlu dicek tiap kali ritme evaluasi ini jalan. Pertama, apakah langkah cek manusia dari Bab 5 masih benar-benar dijalankan konsisten — bukan cuma di minggu pertama waktu semua orang masih semangat, tapi masih jadi kebiasaan tetap sekarang. Ingat kartu di Bab 6 soal staf CS yang berhenti membaca ulang draft-nya begitu merasa hasilnya "sudah pasti bagus" — itu persis yang harus ditangkap di sini sebelum kesalahan lolos ke pelanggan.',
      'Kedua, tangkap sinyal balik ke cara manual sedini mungkin — balik ke tiga sinyal bahaya dari Bab 6: orang mulai "lupa" pakai alur AI-nya, hasil AI dipakai tapi nggak pernah dicek lagi, atau alur kerjanya cuma dipakai kalau ditanya langsung oleh atasan. Ritme evaluasi adalah momen di mana Anda sengaja mencari tiga tanda ini, bukan menunggu sampai kelihatan jelas dengan sendirinya.',
      'Ketiga, evaluasi apakah alur kerja ini masih menghasilkan nilai yang sepadan — bukan cuma "masih dipakai," tapi target keberhasilan dari Bab 5 itu masih beneran tercapai atau malah pelan-pelan menurun. Kalau nilainya sudah nggak sepadan lagi, itu juga temuan yang sah dari ritme evaluasi, bukan kegagalan yang harus disembunyikan.',
    ],
  },
  {
    id: 'c8-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Ritme evaluasi yang eksplisit — jadwal cek berkala setelah rollout awal, bukan cuma dianggap selesai begitu target Bab 5 tercapai sekali — dibutuhkan supaya sinyal balik ke cara manual bisa ditangkap sedini mungkin, sebelum alur kerjanya diam-diam "________" sepenuhnya.',
    options: ['ditinggalkan', 'disempurnakan', 'didokumentasikan', 'dipromosikan'],
    correctAnswer: 'ditinggalkan',
    successFeedback:
      'Tepat. Tanpa ritme evaluasi, sinyal balik ke cara manual biasanya baru kelihatan setelah alur kerjanya sudah ditinggalkan sepenuhnya — di titik itu, koreksinya jauh lebih mahal dibanding kalau ditangkap lebih awal lewat cek berkala.',
    errorFeedback:
      'Belum tepat. Jawabannya "ditinggalkan" — tanpa ritme evaluasi yang eksplisit, sinyal balik ke cara manual biasanya baru disadari setelah alur kerjanya sudah pelan-pelan ditinggalkan sepenuhnya, bukan waktu masih bisa dikoreksi murah dan cepat.',
  },
  {
    id: 'c8-card-11',
    type: 'info',
    icon: Link2,
    eyebrow: 'Kalau Anda Sudah Menyelesaikan Modul 8',
    title: 'Seluruh Proses Ini Adalah Penerapan Langsung Kerangka Change Management, Khusus untuk AI',
    body: [
      'Kalau Anda sudah menyelesaikan Modul 8, coba lihat kembali seluruh proses adopsi AI di modul ini — dari memilih kasus pakai di Bab 3 sampai menginstal ritme evaluasi ini di Bab 8. Itu semua adalah penerapan langsung dari kerangka change management Modul 8, khusus terhadap satu jenis perubahan spesifik: AI. Kasus pakai yang dipilih sengaja itu kasus perubahan Anda. Batasan data dan jawaban jujur ke tim di Bab 4 itu penanganan resistensi. Ritme evaluasi ini itu ritme penguatan yang sama persis dibahas di sana.',
      'Kalau Anda belum menyelesaikan modul manapun, tidak masalah — framing-nya tetap self-contained. Cukup sarankan satu hal: pemilik evaluasi yang Anda tetapkan sebentar lagi juga jadi orang yang menjaga adopsi AI berikutnya di bisnis Anda, dari alur kerja mana pun itu datang berikutnya.',
    ],
  },
  {
    id: 'c8-card-12',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Playbook Ringkas',
    title: 'Satu Playbook Singkat — Bukan Dokumen Baru, Cuma Tiga Hal yang Perlu Jelas',
    body: [
      'Playbook instalasi untuk alur kerja AI pertama Anda nggak perlu jadi dokumen tebal baru. Yang dibutuhkan cuma satu ringkasan singkat yang bisa Anda pegang dan rujuk kapan pun: siapa pemilik evaluasinya, ritme cek berkala seperti apa, dan kapan alur kerja AI berikutnya boleh mulai dikelola dengan metodologi yang sama.',
      'Kartu berikutnya minta Anda menuliskan tiga informasi kunci itu. Ini yang mengubah semua yang sudah Anda bangun dari Bab 1 sampai 7 dari sekadar latihan reflektif jadi standar yang aktif dipakai — bukan lagi bergantung ke ingatan atau niat baik di kepala Anda sendiri.',
    ],
  },
  {
    id: 'c8-card-13',
    type: 'reflection',
    eyebrow: 'Entri Kesembilan · Buku Kerja AI Adoption',
    prompt:
      'Susun playbook instalasi singkat untuk alur kerja AI pertama yang sudah Anda rancang dan jalankan sejak Bab 3-7.',
    fields: [
      {
        id: 'evaluation-owner',
        label: 'Siapa yang akan jadi pemilik dan menjaga ritme evaluasi alur kerja AI ini?',
        placeholder:
          'Misalnya: saya sendiri sebagai pemilik, dengan tanggung jawab eksplisit cek tiap bulan. Atau: supervisor CS, karena dia yang paling sering pantau hasil draft tiap hari...',
      },
      {
        id: 'check-frequency',
        label: 'Seberapa sering cek berkala akan dilakukan?',
        placeholder:
          'Misalnya: tiap dua minggu di bulan pertama, lalu bulanan setelah itu. Atau: tiap kali ada rapat mingguan tim, jadi satu agenda tetap...',
      },
      {
        id: 'next-workflow-timing',
        label: 'Kapan alur kerja AI berikutnya boleh mulai dikelola dengan metodologi yang sama?',
        placeholder:
          'Misalnya: setelah tiga bulan alur kerja ini terbukti dipakai konsisten tanpa saya harus terus mengingatkan. Atau: setelah ritme evaluasi ini berjalan minimal dua siklus cek tanpa sinyal balik ke cara manual...',
      },
    ],
  },
  {
    id: 'c8-card-14',
    type: 'info',
    icon: Clock,
    eyebrow: 'Satu Hal Lagi Sebelum Laporan',
    title: 'Tetapkan Cek Pertama Anda — Jangan Biarkan Ini Jadi Niat yang Nggak Pernah Terjadwal',
    body: [
      'Ritme evaluasi yang baru saja Anda susun masih berupa niat sampai ada satu tanggal atau pemicu konkret buat cek yang pertama. "Saya akan cek berkala" tanpa jadwal yang jelas gampang banget bernasib sama seperti link WhatsApp yang "coba-coba pakai ya" dari Bab 1 — niat baik yang nggak pernah beneran terjadi karena nggak ada titik konkret yang memaksanya terjadi.',
      'Kartu berikutnya minta satu hal spesifik: kapan cek pertama Anda akan terjadi, dan apa persisnya yang akan Anda cek waktu itu — apakah langkah cek manusia masih konsisten dijalankan, apakah ada sinyal balik ke cara manual dari Bab 6, atau apa pun yang paling relevan buat alur kerja Anda.',
    ],
  },
  {
    id: 'c8-card-15',
    type: 'reflection',
    eyebrow: 'Entri Kesepuluh · Buku Kerja AI Adoption',
    prompt: 'Tetapkan kapan cek evaluasi pertama Anda akan terjadi, dan apa yang akan Anda cek saat itu.',
    fields: [
      {
        id: 'next-check',
        label:
          'Kapan Anda akan mengecek apakah alur kerja AI ini masih dipakai dengan benar dan masih menghasilkan nilai — dan apa yang akan Anda cek saat itu?',
        placeholder:
          'Misalnya: dua minggu dari sekarang — cek apakah Rina masih membaca ulang tiap draft sebelum kirim, dan bandingkan waktu bikin draft dengan target Bab 5. Atau: akhir bulan ini — tanya langsung apakah ada yang mulai jarang buka AI-nya, mirip sinyal bahaya di Bab 6...',
      },
    ],
  },
  {
    id: 'c8-card-16',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Satu Langkah Terakhir',
    title: 'Semua yang Sudah Anda Kerjakan dari Bab 1 sampai Sekarang',
    body: [
      'Dari Entri Pertama sampai Entri Kesepuluh, Anda sudah membangun sesuatu yang konkret: satu pemakaian AI yang diidentifikasi di Bab 1, level pemakaian AI bisnis Anda hari ini di Bab 2, kasus pakai yang dipilih lewat filter tiga pertanyaan di Bab 3, batasan data dan jawaban jujur ke tim di Bab 4, rancangan alur kerja lengkap di Bab 5, progres nyata di lapangan di Bab 6, paket adopsi AI yang terintegrasi di Bab 7, dan sekarang playbook instalasi dengan pemilik evaluasi dan jadwal cek pertama dari bab ini.',
      'Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai.',
    ],
  },
  {
    id: 'c8-card-17',
    type: 'report',
    eyebrow: 'Laporan Adopsi AI Anda',
    title: 'Laporan Lengkap Perjalanan Anda dari Bab 1 sampai Bab 8',
    intro: [
      'Ini rangkuman perjalanan Anda dari satu pemakaian AI yang diidentifikasi di Bab 1 sampai paket adopsi AI yang utuh dan playbook instalasinya. Simpan atau cetak sebagai acuan untuk menjaga alur kerja ini bertahan, dan sebagai contoh cara kerja untuk alur kerja AI berikutnya.',
    ],
    sections: [
      {
        heading: 'Eksperimen AI yang Pernah Dicoba',
        items: [
          {
            label: 'Contoh nyata pemakaian AI (Bab 1)',
            cardId: 'c1-card-16',
            fieldId: 'ai-experiment',
          },
          {
            label: 'Apa yang akhirnya terjadi (Bab 1)',
            cardId: 'c1-card-16',
            fieldId: 'what-happened',
          },
        ],
      },
      {
        heading: 'Peta Diri di Level Pemakaian AI',
        items: [
          {
            label: 'Level pemakaian AI saat itu (Bab 2)',
            cardId: 'c2-card-12',
            fieldId: 'current-level',
          },
          {
            label: 'Alasannya (Bab 2)',
            cardId: 'c2-card-12',
            fieldId: 'why-this-level',
          },
        ],
      },
      {
        heading: 'Kasus Pakai Terpilih',
        items: [
          {
            label: 'Kandidat kasus pakai (Bab 3)',
            cardId: 'c3-card-16',
            fieldId: 'candidate-use-cases',
          },
          {
            label: 'Skor terhadap filter tiga pertanyaan (Bab 3)',
            cardId: 'c3-card-16',
            fieldId: 'filter-scores',
          },
          {
            label: 'Kasus pakai terkuat yang dipilih (Bab 3)',
            cardId: 'c3-card-16',
            fieldId: 'strongest-candidate',
          },
        ],
      },
      {
        heading: 'Batasan Data & Kepercayaan Tim',
        items: [
          {
            label: 'Ketakutan tim yang diantisipasi (Bab 4)',
            cardId: 'c4-card-18',
            fieldId: 'anticipated-fear',
          },
          {
            label: 'Jawaban jujur ke tim (Bab 4)',
            cardId: 'c4-card-18',
            fieldId: 'honest-answer',
          },
          {
            label: 'Batasan data yang ditetapkan (Bab 4)',
            cardId: 'c4-card-18',
            fieldId: 'data-boundaries',
          },
        ],
      },
      {
        heading: 'Rancangan Alur Kerja Anda',
        items: [
          {
            label: 'Kasus pakai & mode pemakaian yang dikunci (Bab 5)',
            cardId: 'c5-card-18',
            fieldId: 'locked-use-case-and-mode',
          },
          {
            label: 'Siapa yang pakai (Bab 5)',
            cardId: 'c5-card-18',
            fieldId: 'who-uses-it',
          },
          {
            label: 'Langkah cek manusia (Bab 5)',
            cardId: 'c5-card-18',
            fieldId: 'human-check-step',
          },
          {
            label: 'Target keberhasilan (Bab 5)',
            cardId: 'c5-card-18',
            fieldId: 'success-target',
          },
        ],
      },
      {
        heading: 'Catatan Eksekusi Lapangan',
        items: [
          {
            label: 'Progres nyata di lapangan (Bab 6)',
            cardId: 'c6-card-18',
            fieldId: 'real-progress',
          },
          {
            label: 'Kesalahan AI & cara ditangani (Bab 6)',
            cardId: 'c6-card-18',
            fieldId: 'mistakes-found',
          },
          {
            label: 'Sinyal bahaya (Bab 6)',
            cardId: 'c6-card-18',
            fieldId: 'warning-signs',
          },
        ],
      },
      {
        heading: 'Paket Adopsi AI Anda',
        items: [
          {
            label: 'Skor kepercayaan paket adopsi (Bab 7)',
            cardId: 'chapter7-adoption-package-review',
            fieldId: 'score',
          },
          {
            label: 'Justifikasi skor (Bab 7)',
            cardId: 'chapter7-adoption-package-review',
            fieldId: 'justification',
          },
          {
            label: 'Nama kasus pakai (Bab 7)',
            cardId: 'c7-card-16',
            fieldId: 'use-case-name',
          },
          {
            label: 'Cara kerja alur AI-nya hari ini (Bab 7)',
            cardId: 'c7-card-16',
            fieldId: 'how-it-works-today',
          },
          {
            label: 'Hal yang paling perlu dijaga (Bab 7)',
            cardId: 'c7-card-16',
            fieldId: 'what-to-protect',
          },
        ],
      },
      {
        heading: 'Playbook Instalasi Anda',
        items: [
          {
            label: 'Pemilik ritme evaluasi (Bab 8)',
            cardId: 'c8-card-13',
            fieldId: 'evaluation-owner',
          },
          {
            label: 'Frekuensi cek berkala (Bab 8)',
            cardId: 'c8-card-13',
            fieldId: 'check-frequency',
          },
          {
            label: 'Kapan alur kerja berikutnya boleh mulai (Bab 8)',
            cardId: 'c8-card-13',
            fieldId: 'next-workflow-timing',
          },
          {
            label: 'Pendekatan rollout (Bab 8)',
            cardId: 'c8-card-7',
            fieldId: 'selectionLabel',
          },
        ],
      },
      {
        heading: 'Cek Berikutnya',
        items: [
          {
            label: 'Kapan & apa yang akan dicek (Bab 8)',
            cardId: 'c8-card-15',
            fieldId: 'next-check',
          },
        ],
      },
    ],
    downloadButtonText: 'Cetak / Simpan Laporan Ini',
  },
  {
    id: 'c8-card-18',
    type: 'info',
    icon: CheckCircle,
    eyebrow: 'Selesai Modul 9',
    title: 'Anda Baru Saja Membangun Sesuatu yang Kebanyakan Bisnis SME Belum Pernah Punya',
    body: [
      'Ini bukan cuma delapan bab yang Anda baca. Dari satu pemakaian AI yang diam-diam ditinggalkan atau baru mau dicoba di Bab 1, sampai paket adopsi AI yang utuh — kasus pakai yang dipilih sengaja, batasan data yang jelas, rancangan alur kerja yang teruji di lapangan, dan sekarang ritme evaluasi dengan pemilik yang jelas — Anda sudah membangun sesuatu yang sangat jarang ada di bisnis SME: cara mengadopsi AI yang dirancang supaya bertahan, bukan cuma dirancang supaya kelihatan keren di minggu pertama.',
      'Alur kerja pertama ada di tangan Anda. Pemilik evaluasinya ada. Jadwal cek pertamanya ada. Yang tinggal sekarang: jalani ritme itu sampai alur kerja ini beneran jadi kebiasaan otomatis tim, baru pakai metodologi yang sama untuk alur kerja AI berikutnya.',
      'Admin yang berhenti pakai AI begitu resign, link WhatsApp yang nggak pernah ditanya lagi, proyek yang hasilnya lumayan tapi nggak pernah diulang — tiga contoh yang kita mulai bicarakan di Bab 1 bukan nasib yang harus terjadi lagi di bisnis Anda. Sekarang Anda tahu persis cara mencegahnya.',
    ],
  },
]
