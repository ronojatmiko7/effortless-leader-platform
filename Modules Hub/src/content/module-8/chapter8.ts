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
    title: 'Paketnya Sudah Utuh di Atas Kertas, Sebagian Sudah Terbukti di Lapangan — Sekarang Pertanyaan yang Belum Terjawab',
    body: [
      'Di Bab 7, Anda merakit paket change management yang lengkap: diagnosis resistensi, kasus perubahan, peta stakeholder, rencana rollout, dan catatan eksekusi lapangan — semuanya nyambung jadi satu alat utuh untuk satu perubahan nyata. Sebagian dari itu sudah dibuktikan langsung di lapangan, bukan cuma rencana di kepala.',
      'Itu pekerjaan yang jarang banget diselesaikan pemilik bisnis SME. Tapi ada satu pertanyaan yang belum terjawab, dan justru pertanyaan inilah yang menentukan apakah tujuh bab terakhir ini berguna cuma sekali, atau berguna terus tiap kali ada perubahan baru: gimana caranya paket ini nggak cuma dipakai sekali buat perubahan yang sekarang, tapi jadi kebiasaan yang otomatis Anda pakai lagi?',
      'Bab terakhir ini nggak menambah elemen baru ke metodologinya. Ini tentang instalasi — bikin semua yang sudah Anda bangun bertahan lewat waktu, bukan cuma bertahan sampai perubahan yang sekarang selesai.',
    ],
  },
  {
    id: 'c8-card-2',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Satu Level di Atas Bab 1',
    title: '"Perubahan Tanpa Pemilik Reinforcement yang Eksplisit Itu Cuma Kemenangan Sesaat"',
    body: [
      'Balik ke Bab 1: jebakan "sudah dibeli/dibuat = sudah selesai" — anggapan bahwa begitu sesuatu sudah dibeli atau dibuat, pekerjaan perubahan otomatis kelar. Anda sudah lolos dari jebakan itu sejauh ini — Anda sudah menyiapkan tim, menjalankan rollout, dan menangani resistensi di lapangan.',
      'Tapi ada jebakan yang satu level lebih tinggi, yang justru bisa menjebak orang yang sudah sejauh ini: bahkan rollout yang paling sukses di minggu-minggu pertama bisa diam-diam kembali ke cara lama kalau nggak ada satu orang yang eksplisit ditugaskan menjaga kebiasaan barunya bertahan setelah momentum awal reda.',
      'Quick win yang tercapai, resistensi yang berhasil ditangani, tim yang kelihatan sudah lancar — semua itu kemenangan yang nyata. Tapi kalau nggak ada yang menjaga, kemenangan itu cuma sesaat. Enam bulan kemudian, tanpa ada satu momen dramatis di mana itu "resmi berhenti," tim bisa pelan-pelan balik ke cara lama — persis pola yang Anda diagnosis dari orang lain di Bab 1, sekarang bisa kejadian sama persis di perubahan Anda sendiri.',
    ],
  },
  {
    id: 'c8-card-3',
    type: 'multiple-choice',
    question:
      'Sebuah toko berhasil menjalankan rollout aplikasi stok baru — quick win tercapai, resistensi admin senior berhasil ditangani, semua admin kelihatan lancar pakai aplikasinya di akhir Bab 6. Enam bulan kemudian, tanpa ada satu orang yang eksplisit ditugaskan mengecek, separuh admin diam-diam sudah balik ke catatan manual. Apa yang paling tepat menjelaskan ini?',
    options: [
      'Rollout-nya sebenarnya gagal sejak awal — quick win dan penanganan resistensi di Bab 6 itu cuma kelihatan berhasil',
      'Rollout awalnya beneran berhasil, tapi tanpa pemilik reinforcement yang eksplisit, keberhasilan itu cuma bertahan selama momentum awal — begitu itu reda, nggak ada yang menjaga kebiasaannya tetap dipakai',
      'Ini nggak bisa dicegah — semua perubahan pasti perlahan-lahan luntur seiring waktu, apapun yang dilakukan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Rollout yang berhasil di Bab 5-6 itu nyata, bukan ilusi. Yang hilang bukan keberhasilan awalnya, tapi penjagaan setelahnya — tanpa satu orang yang eksplisit ditugaskan mengecek dan menguatkan, kemenangan awal itu cuma bertahan selama momentum masih ada.',
    errorFeedback:
      'Belum tepat. Rollout-nya beneran berhasil di awal — quick win dan penanganan resistensi di Bab 6 itu nyata. Yang bolong adalah nggak ada pemilik reinforcement eksplisit yang menjaga kebiasaan itu bertahan setelah momentum awal reda. Ini juga bukan sesuatu yang "pasti terjadi" — itu bisa dicegah dengan ritme penguatan yang eksplisit, yang jadi topik bab ini.',
  },
  {
    id: 'c8-card-4',
    type: 'info',
    icon: Shield,
    eyebrow: 'Izin Eksplisit — Poin Terpenting di Bab Ini',
    title: 'Mulai dari Satu Perubahan Dulu — Bukan Langsung Jalankan Semua Perubahan yang Sedang Berjalan Sekaligus',
    body: [
      'Setelah tujuh bab merancang metodologi change management yang lengkap — diagnosis resistensi, kasus perubahan, peta stakeholder, rencana rollout, teknik lapangan — wajar banget kalau ada dorongan untuk langsung menerapkan proses lengkap ini ke semua perubahan yang sedang berjalan di bisnis Anda sekaligus. Semua inisiatif, metodologi yang sama, dimulai minggu depan.',
      'Jangan.',
      'Bukan karena metodologinya nggak bisa dipakai di perubahan lain — justru sangat bisa, dan itu memang tujuannya. Tapi menjalankan proses lengkap ini di banyak perubahan sekaligus punya titik lemah yang sama seperti masalah yang kita bahas dari Bab 1: terlalu banyak hal baru yang harus diinternalisasi sekaligus, terlalu banyak ritme penguatan yang harus dijaga bersamaan, terlalu banyak perubahan yang minta perhatian penuh di saat yang sama. Begitu ada satu yang paling mendesak, yang lain gampang banget ditinggalkan diam-diam — dan itu persis pola yang mau Anda hindari.',
    ],
  },
  {
    id: 'c8-card-5',
    type: 'info',
    icon: Footprints,
    eyebrow: 'Kenapa Ini Bukan Usaha yang Lebih Rendah',
    title: 'Instal Dulu untuk Satu Perubahan, Buktikan Bertahan, Baru Lanjut ke yang Berikutnya',
    body: [
      'Instal dulu kebiasaan ini untuk SATU perubahan — yang sudah Anda rancang dan jalankan sejak Bab 3 sampai 7. Buktikan itu bertahan lewat ritme penguatan yang akan Anda susun di kartu-kartu berikutnya. Baru setelah itu, pakai metodologi yang sama persis untuk perubahan berikutnya yang sedang atau akan Anda jalankan.',
      'Ini bukan usaha yang lebih rendah dibanding langsung menerapkan ke semua perubahan sekaligus. Ini cara supaya kebiasaannya beneran melekat, bukan kolaps karena terlalu banyak perubahan dikelola bersamaan. Satu perubahan yang beneran terinstal jadi kebiasaan permanen jauh lebih berharga daripada lima perubahan yang semuanya setengah jalan lalu diam-diam ditinggalkan bareng-bareng.',
      'Begitu perubahan pertama ini terbukti bertahan — bukan cuma bertahan sebulan, tapi bertahan sampai Anda yakin itu sudah jadi kebiasaan otomatis tim — barulah metodologi yang sama layak dipakai lagi, kali ini dengan lebih cepat karena Anda sudah tahu persis caranya.',
    ],
  },
  {
    id: 'c8-card-6',
    type: 'yes-no',
    question:
      'Setelah semua yang baru Anda kerjakan di tujuh bab ini — apa pendekatan yang Anda pilih untuk menginstal kebiasaan change management ini di bisnis Anda?',
    yesLabel: 'Mulai dari Satu Perubahan Dulu',
    noLabel: 'Saya Siap Jalankan Beberapa Perubahan Sekaligus',
    feedbackYes:
      'Pilihan yang tepat. Instal dulu untuk satu perubahan yang sudah Anda rancang sejak Bab 3-7, buktikan itu bertahan lewat ritme penguatan yang akan Anda susun sebentar lagi — baru pakai metodologi yang sama untuk perubahan berikutnya. Hasilnya sama luasnya dengan menjalankan semua sekaligus, cuma jauh lebih tahan lama.',
    feedbackNo:
      'Semangat itu bagus — tapi menjalankan proses lengkap ini di banyak perubahan sekaligus punya titik lemah yang sudah kita bahas: terlalu banyak ritme penguatan yang harus dijaga bersamaan, dan begitu ada satu yang paling mendesak, yang lain gampang ditinggalkan diam-diam. Kalau Anda tetap ingin jalan di beberapa perubahan sekaligus, pastikan paling tidak tiap perubahan punya pemilik reinforcement yang eksplisit sendiri-sendiri — bukan satu orang yang dibagi terlalu tipis ke semuanya. Dan pertimbangkan serius untuk menyelesaikan instalasi satu perubahan dulu sampai benar-benar terbukti sebelum menambah yang lain.',
  },
  {
    id: 'c8-card-7',
    type: 'info',
    icon: Repeat,
    eyebrow: 'Ritme Penguatan',
    title: 'Jadwal Cek Berkala Setelah Rollout — Bukan Cuma Dianggap Selesai Begitu Quick Win Tercapai',
    body: [
      'Ritme penguatan adalah jadwal cek berkala yang dilakukan setelah rollout awal, bukan sekali di akhir lalu dianggap kelar. Ini yang paling sering hilang dari perubahan-perubahan yang mati pelan-pelan — quick win tercapai, semua kelihatan lancar, lalu semua orang, termasuk Anda sendiri, berhenti memperhatikan.',
      'Ini kesalahan yang sama seperti jebakan "sudah dibeli/dibuat = sudah selesai" dari Bab 1, cuma pindah ke titik waktu yang berbeda. Bab 1 tentang berhenti setelah beli/buat. Ini tentang berhenti setelah rollout awal berhasil — sama-sama berhenti di titik yang seharusnya belum jadi garis finish.',
      'Ritme penguatan yang eksplisit menjawab itu dengan jadwal konkret: kapan Anda (atau pemilik yang ditugaskan) akan cek lagi, bukan "nanti kalau sempat" atau "kalau ada masalah baru dicek." Kalau masalahnya sudah kelihatan, biasanya sudah agak terlambat untuk koreksi yang murah dan cepat.',
    ],
  },
  {
    id: 'c8-card-8',
    type: 'info',
    icon: Calendar,
    eyebrow: 'Apa yang Dicek di Tiap Ritme',
    title: 'Tiga Hal yang Dicek Tiap Kali Ritme Penguatan Jalan',
    body: [
      'Tiga hal yang perlu dicek tiap kali ritme penguatan ini jalan. Pertama, apakah perubahannya masih dipakai persis seperti yang dimaksudkan — bukan cuma "masih ada," tapi masih dijalankan sesuai standar yang ditetapkan waktu rollout, bukan sudah bergeser diam-diam jadi versi yang lebih longgar.',
      'Kedua, tangkap sinyal balik ke cara lama sedini mungkin — balik ke tiga tanda bahaya dari Bab 6: orang mulai "sesekali" pakai cara lama, pertanyaan soal cara baru makin jarang muncul, champion yang tadinya aktif mulai diam. Ritme penguatan adalah momen di mana Anda sengaja mencari tiga tanda ini, bukan menunggu sampai kelihatan jelas dengan sendirinya.',
      'Ketiga, rayakan lagi kemajuan yang sudah bertahan. Ini bukan basa-basi — merayakan hasil yang masih konsisten setelah sekian bulan adalah bukti konkret ke tim bahwa ini beneran jadi standar baru, bukan sekadar rollout yang terlupakan begitu Anda berhenti membicarakannya.',
    ],
  },
  {
    id: 'c8-card-9',
    type: 'fill-in-the-blank',
    sentence:
      'Ritme penguatan yang eksplisit — jadwal cek berkala setelah rollout, bukan cuma dianggap selesai begitu quick win tercapai — adalah cara mencegah kesalahan yang sama seperti jebakan "sudah dibeli/dibuat = sudah selesai" dari Bab 1, cuma pindah ke titik waktu setelah ________ berhasil.',
    options: ['rollout awal', 'pelatihan pertama', 'diagnosis resistensi', 'peta stakeholder'],
    correctAnswer: 'rollout awal',
    successFeedback:
      'Tepat. Bab 1 tentang berhenti setelah beli/buat. Ritme penguatan mencegah kesalahan yang sama terjadi lagi setelah rollout awal berhasil — titik di mana kebanyakan orang berhenti memperhatikan, padahal justru di situlah kebiasaan baru paling rentan luntur.',
    errorFeedback:
      'Belum tepat. Jawabannya "rollout awal" — ritme penguatan mencegah pola yang sama dari Bab 1 (berhenti begitu sesuatu kelihatan "selesai"), cuma kali ini titiknya adalah setelah rollout awal berhasil, bukan setelah beli/buat.',
  },
  {
    id: 'c8-card-10',
    type: 'info',
    icon: Link2,
    eyebrow: 'Kalau Perubahan Ini dari Modul Lain',
    title: 'Kalau Perubahan yang Baru Anda Rollout Adalah Hasil Modul 2-7',
    body: [
      'Kalau perubahan yang baru saja Anda jalankan sepanjang modul ini adalah hasil dari salah satu Modul 2 sampai 7 — arsitektur KPI, governance EBR, SOP baru, sistem manajemen kinerja, arsitektur jabatan, atau apa pun outputnya — ritme penguatan yang baru saja Anda susun adalah langkah terakhir yang bikin modul itu beneran terpakai, bukan cuma dokumen bagus yang tersimpan rapi.',
      'Modul-modul itu menghasilkan rancangan yang solid. Tapi rancangan yang solid, tanpa kebiasaan change management yang menjaganya bertahan, punya nasib yang sama seperti contoh-contoh dari Bab 1: dibeli atau dibuat dengan niat baik, lalu mati pelan-pelan begitu momentum awal reda. Pemilik reinforcement yang Anda tetapkan sebentar lagi bisa jadi orang yang sama yang menjaga output modul itu tetap dipakai.',
      'Kalau Anda belum menyelesaikan modul mana pun, ini tetap berlaku penuh — cukup jadikan pemilik reinforcement ini juga orang yang menjaga perubahan-perubahan berikutnya di bisnis Anda, dari sumber mana pun perubahan itu datang.',
    ],
  },
  {
    id: 'c8-card-11',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Playbook Ringkas',
    title: 'Satu Playbook Singkat — Bukan Dokumen Baru, Cuma Empat Hal yang Perlu Jelas',
    body: [
      'Playbook instalasi untuk perubahan pertama Anda nggak perlu jadi dokumen tebal baru. Yang dibutuhkan cuma satu ringkasan singkat yang bisa Anda pegang dan rujuk kapan pun: perubahan mana yang jadi fokus, siapa pemilik reinforcement-nya, ritme cek berkala seperti apa, dan kapan perubahan berikutnya boleh mulai dikelola dengan metodologi yang sama.',
      'Kartu berikutnya minta Anda menuliskan tiga informasi kunci itu. Ini yang mengubah semua yang sudah Anda bangun dari Bab 1 sampai 7 dari sekadar latihan reflektif jadi standar yang aktif dipakai — bukan lagi bergantung ke ingatan atau niat baik di kepala Anda sendiri.',
    ],
  },
  {
    id: 'c8-card-12',
    type: 'reflection',
    eyebrow: 'Entri Kesembilan · Buku Kerja Change Management',
    prompt:
      'Susun playbook instalasi singkat untuk perubahan pertama yang sudah Anda rancang dan jalankan sejak Bab 3-7.',
    fields: [
      {
        id: 'reinforcement-owner',
        label: 'Siapa yang akan jadi pemilik dan menjaga ritme penguatan perubahan ini?',
        placeholder:
          'Misalnya: saya sendiri sebagai owner, dengan tanggung jawab eksplisit cek tiap bulan. Atau: supervisor gudang, karena dia yang paling sering di lapangan tiap hari...',
      },
      {
        id: 'check-frequency',
        label: 'Seberapa sering cek berkala akan dilakukan?',
        placeholder:
          'Misalnya: tiap dua minggu di bulan pertama, lalu bulanan setelah itu. Atau: tiap kali ada rapat mingguan tim, jadi satu agenda tetap...',
      },
      {
        id: 'next-change-timing',
        label: 'Kapan perubahan berikutnya boleh mulai dikelola dengan metodologi yang sama?',
        placeholder:
          'Misalnya: setelah tiga bulan perubahan ini terbukti dipakai konsisten tanpa saya harus terus mengingatkan. Atau: setelah ritme penguatan ini berjalan minimal dua siklus cek tanpa tanda balik ke cara lama...',
      },
    ],
  },
  {
    id: 'c8-card-13',
    type: 'info',
    icon: Clock,
    eyebrow: 'Satu Hal Lagi Sebelum Laporan',
    title: 'Tetapkan Cek Pertama Anda — Jangan Biarkan Ini Jadi Niat yang Nggak Pernah Terjadwal',
    body: [
      'Ritme penguatan yang baru saja Anda susun masih berupa niat sampai ada satu tanggal atau pemicu konkret buat cek yang pertama. "Saya akan cek berkala" tanpa jadwal yang jelas gampang banget bernasib sama seperti "saya akan jelasin ke tim nanti" dari Bab 1 — niat baik yang nggak pernah beneran terjadi karena nggak ada titik konkret yang memaksanya terjadi.',
      'Kartu berikutnya minta satu hal spesifik: kapan cek pertama Anda akan terjadi, dan apa persisnya yang akan Anda cek waktu itu — apakah perubahannya masih dipakai persis seperti dimaksudkan, apakah ada sinyal balik ke cara lama dari Bab 6, atau apa pun yang paling relevan buat perubahan Anda.',
    ],
  },
  {
    id: 'c8-card-14',
    type: 'reflection',
    eyebrow: 'Entri Kesepuluh · Buku Kerja Change Management',
    prompt: 'Tetapkan kapan cek reinforcement pertama Anda akan terjadi, dan apa yang akan Anda cek saat itu.',
    fields: [
      {
        id: 'next-reinforcement-check',
        label:
          'Kapan Anda akan mengecek apakah perubahan ini masih beneran dipakai seperti yang dimaksudkan — dan apa yang akan Anda cek saat itu?',
        placeholder:
          'Misalnya: dua minggu dari sekarang — cek apakah ketiga admin masih pakai aplikasi tanpa balik ke catatan manual, dan tanya langsung ke admin senior apakah masih ada kendala. Atau: akhir bulan ini — cek apakah champion masih aktif bantu rekan-rekannya atau mulai diam kayak sinyal bahaya di Bab 6...',
      },
    ],
  },
  {
    id: 'c8-card-15',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Satu Langkah Terakhir',
    title: 'Semua yang Sudah Anda Kerjakan dari Bab 1 sampai Sekarang, Kita Kumpulkan Jadi Satu',
    body: [
      'Dari Entri Pertama sampai Entri Kesepuluh, Anda sudah membangun sesuatu yang konkret: satu perubahan yang diidentifikasi di Bab 1, peta diri di dua tahap change management di Bab 2, diagnosis lensa resistensi di Bab 3, kasus perubahan dan peta stakeholder di Bab 4, rencana rollout tiga bagian di Bab 5, catatan eksekusi lapangan di Bab 6, paket change management terintegrasi di Bab 7, dan playbook instalasi lengkap dengan jadwal cek pertama dari bab ini.',
      'Semua yang sudah Anda kerjakan dari Bab 1 sampai sekarang, kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai.',
    ],
  },
  {
    id: 'c8-card-16',
    type: 'report',
    eyebrow: 'Laporan Change Management Anda',
    title: 'Laporan Lengkap Perjalanan Anda dari Bab 1 sampai Bab 8',
    intro: [
      'Ini rangkuman perjalanan Anda dari satu perubahan yang diidentifikasi di Bab 1 sampai paket change management yang utuh dan playbook instalasinya. Simpan atau cetak sebagai acuan untuk menjaga perubahan ini bertahan, dan sebagai contoh cara kerja untuk perubahan berikutnya.',
    ],
    sections: [
      {
        heading: 'Perubahan yang Diperhatikan',
        items: [
          {
            label: 'Nama perubahan (Bab 1)',
            cardId: 'c1-card-15',
            fieldId: 'change-name',
          },
          {
            label: 'Tanda-tanda nggak beneran terpakai (Bab 1)',
            cardId: 'c1-card-15',
            fieldId: 'usage-signal',
          },
        ],
      },
      {
        heading: 'Peta Diri di Change Management',
        items: [
          {
            label: 'Tahap yang paling nggak jalan (Bab 2)',
            cardId: 'c2-card-17',
            fieldId: 'weakest-stage',
          },
          {
            label: 'Tahap paling mendesak untuk dibenahi (Bab 2)',
            cardId: 'c2-card-17',
            fieldId: 'priority-stage',
          },
        ],
      },
      {
        heading: 'Diagnosis Resistensi Anda',
        items: [
          {
            label: 'Lensa resistensi dominan (Bab 3)',
            cardId: 'c3-card-18',
            fieldId: 'dominant-lens',
          },
          {
            label: 'Tanda-tanda konkret yang terlihat (Bab 3)',
            cardId: 'c3-card-18',
            fieldId: 'concrete-signs',
          },
        ],
      },
      {
        heading: 'Kasus Perubahan & Stakeholder',
        items: [
          {
            label: 'Kasus perubahan Anda (Bab 4)',
            cardId: 'c4-card-15',
            fieldId: 'case-for-change',
          },
          {
            label: 'Peta stakeholder kunci (Bab 4)',
            cardId: 'c4-card-15',
            fieldId: 'stakeholder-map',
          },
        ],
      },
      {
        heading: 'Rencana Rollout Anda',
        items: [
          {
            label: 'Perubahan yang dikunci (Bab 5)',
            cardId: 'c5-card-17',
            fieldId: 'locked-change',
          },
          {
            label: 'Rencana komunikasi & pelatihan (Bab 5)',
            cardId: 'c5-card-17',
            fieldId: 'comms-training-plan',
          },
          {
            label: 'Quick win yang ditargetkan (Bab 5)',
            cardId: 'c5-card-17',
            fieldId: 'quick-win',
          },
        ],
      },
      {
        heading: 'Catatan Eksekusi Lapangan',
        items: [
          {
            label: 'Progres rollout & resistensi yang muncul (Bab 6)',
            cardId: 'c6-card-16',
            fieldId: 'rollout-progress',
          },
          {
            label: 'Cara menangani resistensinya (Bab 6)',
            cardId: 'c6-card-16',
            fieldId: 'resistance-response',
          },
        ],
      },
      {
        heading: 'Paket Change Management Anda',
        items: [
          {
            label: 'Skor kepercayaan paket rollout (Bab 7)',
            cardId: 'chapter7-rollout-package-review',
            fieldId: 'score',
          },
          {
            label: 'Alasan skor dan bagian yang masih rapuh (Bab 7)',
            cardId: 'chapter7-rollout-package-review',
            fieldId: 'justification',
          },
          {
            label: 'Perubahan fokus paket terintegrasi (Bab 7)',
            cardId: 'c7-card-16',
            fieldId: 'focus-change',
          },
          {
            label: 'Kasus perubahan & stakeholder kunci (Bab 7)',
            cardId: 'c7-card-16',
            fieldId: 'case-and-stakeholders',
          },
          {
            label: 'Elemen rollout paling menentukan (Bab 7)',
            cardId: 'c7-card-16',
            fieldId: 'decisive-rollout-element',
          },
        ],
      },
      {
        heading: 'Playbook Instalasi Anda',
        items: [
          {
            label: 'Pemilik ritme penguatan (Bab 8)',
            cardId: 'c8-card-12',
            fieldId: 'reinforcement-owner',
          },
          {
            label: 'Frekuensi cek berkala (Bab 8)',
            cardId: 'c8-card-12',
            fieldId: 'check-frequency',
          },
          {
            label: 'Kapan perubahan berikutnya boleh mulai (Bab 8)',
            cardId: 'c8-card-12',
            fieldId: 'next-change-timing',
          },
          {
            label: 'Pendekatan rollout (Bab 8)',
            cardId: 'c8-card-6',
            fieldId: 'selectionLabel',
          },
        ],
      },
      {
        heading: 'Cek Berikutnya',
        items: [
          {
            label: 'Kapan & apa yang akan dicek (Bab 8)',
            cardId: 'c8-card-14',
            fieldId: 'next-reinforcement-check',
          },
        ],
      },
    ],
    downloadButtonText: 'Cetak / Simpan Laporan Ini',
  },
  {
    id: 'review-request-module-8',
    type: 'review-request',
    eyebrow: 'Sebelum Anda Pergi',
    title: 'Boleh Minta Waktu Sebentar?',
    sentimentPrompt: 'Gimana rasanya baru saja menyelesaikan modul ini?',
    positiveLabel: 'Senang, worth it!',
    negativeLabel: 'Kurang greget',
    testimonialPromptLabel: 'Mau cerita sedikit soal pengalaman Anda?',
    testimonialPlaceholder:
      'Contoh: Bagian yang paling kena buat saya adalah waktu bahas...',
    privateFeedbackPrompt: 'Boleh cerita apa yang bikin kurang greget?',
    privateFeedbackPlaceholder:
      'Jujur aja — bagian mana yang terasa membosankan, membingungkan, atau kurang berguna?',
    thanksMessagePositive: 'Makasih banyak sudah luangin waktu cerita. Ini bantu kami banget.',
    thanksMessageNegative: 'Makasih sudah jujur. Ini yang bikin modul berikutnya lebih baik lagi.',
  },
  {
    id: 'c8-card-17',
    type: 'info',
    icon: CheckCircle,
    eyebrow: 'Selesai Modul 8',
    title: 'Anda Baru Saja Membangun Sesuatu yang Kebanyakan Bisnis SME Belum Pernah Punya',
    body: [
      'Ini bukan cuma delapan bab yang Anda baca. Dari satu perubahan yang diam-diam ditinggalkan atau baru mau dijalankan di Bab 1, sampai paket change management yang utuh — diagnosis yang spesifik, kasus perubahan yang menjawab akar resistensi, peta stakeholder yang tahu siapa diyakinkan duluan, rencana rollout yang teruji di lapangan, dan sekarang ritme penguatan dengan pemilik yang jelas — Anda sudah membangun sesuatu yang sangat jarang ada di bisnis SME: cara menjalankan perubahan yang dirancang supaya bertahan, bukan cuma dirancang supaya kelihatan bagus di hari peluncuran.',
      'Perubahan pertama ada di tangan Anda. Pemilik reinforcement-nya ada. Jadwal cek pertamanya ada. Yang tinggal sekarang: jalani ritme itu sampai perubahan ini beneran jadi kebiasaan otomatis tim, baru pakai metodologi yang sama untuk perubahan berikutnya.',
      'Software yang ditinggalkan, SOP yang ditempel tapi nggak diikuti, mesin yang nganggur di pojokan — tiga contoh yang kita mulai bicarakan di Bab 1 bukan nasib yang harus terjadi lagi. Sekarang Anda tahu persis cara mencegahnya.',
    ],
  },
]
