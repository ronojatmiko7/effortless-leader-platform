import {
  Layers,
  Shield,
  AlertCircle,
  Target,
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
    icon: Layers,
    eyebrow: 'Bab 8 · Instalasi Arsitektur Jabatan',
    title: 'Profilnya Sekarang Utuh di Atas Kertas — Satu Pertanyaan yang Belum Terjawab',
    body: [
      'Di Bab 7, Anda baru saja menyelesaikan lokakarya penuh: satu profil arsitektur jabatan yang terintegrasi — model kompetensi tiga lapis, tingkat kemahiran minimum dengan anchor perilaku, bank pertanyaan BEI yang menguji langsung ke sana, dan rubrik skor yang membuat penilaian bisa dibandingkan apple-to-apple oleh siapa pun yang terlibat.',
      'Delapan bab, satu profil yang lengkap. Itu pekerjaan yang tidak dimiliki kebanyakan bisnis SME.',
      'Tapi ada satu pertanyaan yang belum terjawab — yang memisahkan profil yang beneran dipakai dari profil yang bagus di kertas tapi berakhir dilupakan begitu rekrutmen berikutnya datang dengan tekanan yang mendesak: gimana caranya arsitektur jabatan ini beneran dipakai di rekrutmen berikutnya, bukan cuma dokumen yang dibuka sekali lalu ditutup lagi?',
    ],
  },
  {
    id: 'c8-card-2',
    type: 'info',
    icon: Shield,
    eyebrow: 'Risiko yang Paling Sering Dilewatkan',
    title: '"Arsitektur Jabatan Tanpa Pemilik Kepatuhan yang Eksplisit Itu Cuma Dokumen HR yang Didiamkan"',
    body: [
      'Ini bukan soal niat. Pemilik bisnis yang serius pun bisa membangun profil arsitektur jabatan yang rapi — dan tetap tidak memakainya di rekrutmen berikutnya. Bukan karena tidak mau, tapi karena waktu rekrutmen baru datang, tekanannya mendesak, posisinya harus diisi, dan tidak ada satu orang yang tugasnya memastikan profil itu yang dipakai — bukan gut feel pewawancara masing-masing.',
      'Kalau tidak ada pemilik yang eksplisit — satu orang, dengan nama yang bisa disebut, yang tugasnya memastikan profil ini dipakai tiap kali ada rekrutmen atau evaluasi untuk peran ini — profil itu akan diam-diam ditinggalkan. Bukan dengan keputusan sadar, tapi karena tidak ada yang ingat untuk memakainya di tengah tekanan.',
      'Pemilik kepatuhan bukan fungsi yang besar. Satu nama, satu tugas yang jelas: pastikan profil arsitektur jabatan ini yang dipakai tiap kali peran ini direkrut atau dievaluasi ulang. Tanpa itu, delapan bab ini berakhir jadi niat yang baik tapi tidak pernah jadi standar.',
    ],
  },
  {
    id: 'c8-card-3',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Satu Level di Atas Bab 1',
    title: 'Jebakan Baru: Profil yang Ada tapi Tidak Pernah Benar-benar Dipakai',
    body: [
      'Di Bab 1, kita bicara tentang "jebakan kelihatannya cocok" — keputusan rekrutmen yang berasa benar karena berdasarkan kesan yang nyaman, tapi tidak pernah diverifikasi dengan pengujian kompetensi yang konkret. Kebanyakan bisnis jatuh ke sana bukan karena tidak serius, tapi karena tidak ada standar yang konkret dari awal.',
      'Anda sekarang sudah punya standarnya. Tapi ada jebakan yang satu level lebih tinggi — yang bisa menjebak justru orang yang sudah membangun profil yang rapi: bahkan profil paling lengkap sekalipun bisa diam-diam tidak pernah dipakai lagi kalau tidak ada satu orang yang eksplisit ditugaskan menjaga profil itu tetap dipakai tiap kali ada rekrutmen atau evaluasi peran.',
      'Punya profil tapi tidak ada pemiliknya sama artinya dengan tidak punya profil — karena begitu rekrutmen baru datang, tekanan mengisi posisi akan selalu menang kalau tidak ada yang menjaga profil itu tetap di meja pertimbangan.',
    ],
  },
  {
    id: 'c8-card-4',
    type: 'info',
    icon: Target,
    eyebrow: 'Izin Eksplisit — Poin Terpenting di Bab Ini',
    title: 'Mulai dari Satu Peran Dulu — Bukan Langsung Tulis Ulang Semua Deskripsi Jabatan Sekaligus',
    body: [
      'Setelah delapan bab membangun metodologi lengkap — model kompetensi, tingkat kemahiran, diagnosis rekrutmen, alat seleksi BEI, rubrik skor, profil terintegrasi — wajar banget kalau ada dorongan untuk langsung menulis ulang deskripsi jabatan seluruh perusahaan sekaligus. Semua peran, metodologi yang sama, dimulai minggu depan.',
      'Jangan.',
      'Bukan karena metodologinya tidak bisa diterapkan ke semua peran — justru sangat bisa, dan itulah tujuannya. Tapi mengubah proses rekrutmen di seluruh organisasi sekaligus punya titik lemah yang sama: terlalu banyak profil baru yang harus diinternalisasi, terlalu banyak pewawancara yang harus diajak konsisten pakai rubrik, terlalu banyak perubahan sekaligus di tengah tekanan rekrutmen yang selalu mendesak. Saat ada satu rekrutmen yang sangat mendesak, semuanya gampang kembali ke cara lama.',
      'Instal dulu profil ini untuk SATU peran yang sudah Anda rancang di Bab 3–7. Pakai di rekrutmen berikutnya untuk peran itu. Biarkan terbukti jalan. Baru pakai metodologi yang sama untuk peran berikutnya. Ini bukan usaha yang lebih rendah — ini cara supaya arsitektur ini beneran melekat, bukan kolaps karena terlalu banyak peran diubah sekaligus.',
    ],
  },
  {
    id: 'c8-card-5',
    type: 'info',
    icon: Link2,
    eyebrow: 'Sambungkan ke Sistem yang Sudah Ada',
    title: 'Profil Ini Lebih Tajam Kalau Disambungkan ke Evaluasi Kinerja yang Sudah Berjalan',
    body: [
      'Profil arsitektur jabatan yang baru dirancang punya kegunaan yang lebih luas dari rekrutmen saja. Kalau disambungkan ke siklus manajemen kinerja yang sudah ada, kompetensi dan tingkat kemahirannya bisa jadi bahasa yang lebih presisi untuk penetapan tujuan dan penanganan underperformance — bukan lagi "kinerja kurang baik" yang kabur, tapi "belum mencapai tingkat Mahir di kompetensi X yang dibutuhkan peran ini."',
      'Kalau Anda sudah ikut Modul 6: profil kompetensi ini langsung bisa jadi fondasi yang lebih konkret untuk siklus PMS Anda — penetapan tujuan bisa diturunkan dari tingkat kemahiran yang ditarget, coaching bisa difokuskan ke gap kompetensi yang spesifik, dan jalur korektif bisa dirujuk ke standar kompetensi yang sudah didefinisikan.',
      'Kalau belum ikut Modul 6, framing-nya tetap berlaku: pemilik arsitektur jabatan yang Anda tetapkan seharusnya juga jadi orang yang menjaga hubungannya dengan sistem evaluasi kinerja apa pun yang sudah ada — bukan mengoperasikan profil rekrutmen dan sistem kinerja sebagai dua hal yang berdiri sendiri-sendiri.',
    ],
  },
  {
    id: 'c8-card-6',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Playbook Ringkas',
    title: 'Satu Ringkasan yang Bisa Dipegang — Bukan Dokumen Tebal, tapi Empat Pertanyaan yang Terjawab',
    body: [
      'Playbook instalasi bukan buku panduan tebal. Yang Anda butuhkan adalah satu ringkasan singkat yang bisa dipegang dan dirujuk kapan pun ada rekrutmen baru untuk peran yang sudah diprofilkan — yang menjawab empat pertanyaan konkret: peran mana yang jadi fokus arsitektur ini, siapa pemilik kepatuhan yang menjaga profil ini tetap dipakai, kapan mulai dipakai di rekrutmen berikutnya, dan kapan profilnya akan direview ulang.',
      'Format bisa apa saja: catatan di folder tim, agenda tetap di review periodik, atau satu file yang diacu tiap kali ada rekrutmen untuk peran itu. Yang penting cukup jelas untuk dibaca dalam dua menit saat ada rekrutmen baru, dan mudah dibagikan ke siapa pun yang ikut mewawancarai.',
      'Kartu berikutnya minta Anda menuliskan tiga informasi kuncinya: siapa pemilik arsitekturnya, kapan mulai dipakai, dan kapan direview. Itu yang mengubah profil dari dokumen yang dibuka sekali menjadi standar yang aktif dipakai.',
    ],
  },
  {
    id: 'c8-card-7',
    type: 'reflection',
    eyebrow: 'Entri Kesembilan · Buku Kerja Job Architecture',
    prompt: 'Susun playbook instalasi singkat untuk profil arsitektur jabatan yang sudah Anda rancang di Bab 3–7.',
    fields: [
      {
        id: 'pemilik-arsitektur',
        label: 'Siapa yang akan jadi pemilik dan menjaga profil arsitektur jabatan ini tetap dipakai tiap kali ada rekrutmen atau evaluasi untuk peran ini?',
        placeholder:
          'Contoh: Pemilik bisnis langsung — dengan tanggung jawab eksplisit memastikan profil ini yang jadi acuan tiap rekrutmen. Atau: Kepala HR, dengan nama spesifik. Bukan "semua orang" — satu nama atau jabatan yang jelas...',
      },
      {
        id: 'mulai-dipakai',
        label: 'Kapan profil arsitektur jabatan ini mulai dipakai di rekrutmen berikutnya untuk peran ini?',
        placeholder:
          'Contoh: Rekrutmen berikutnya untuk peran ini — sudah ada di pipeline bulan depan. Atau: Segera setelah ada kebutuhan rekrutmen baru untuk peran ini, tanpa menunggu "saat sempat merevisi deskripsi jabatan dulu"...',
      },
      {
        id: 'jadwal-review',
        label: 'Kapan profil arsitektur jabatan ini akan direview ulang — dan apa yang akan memicu review itu?',
        placeholder:
          'Contoh: Setelah dua atau tiga siklus hiring untuk peran ini — cek apakah kompetensi dan tingkat kemahiran yang ditetapkan masih akurat. Atau: Saat perannya berubah signifikan, misalnya ada perluasan tanggung jawab atau perubahan struktur tim...',
      },
    ],
  },
  {
    id: 'c8-card-8',
    type: 'yes-no',
    question:
      'Setelah semua yang baru Anda kerjakan di delapan bab ini — apa pendekatan rollout yang Anda pilih untuk arsitektur jabatan yang sudah dirancang?',
    yesLabel: 'Mulai dari Satu Peran Dulu',
    noLabel: 'Saya Siap Rombak Semua Deskripsi Jabatan Sekaligus',
    feedbackYes:
      'Pilihan yang tepat. Instal profil ini untuk satu peran yang sudah dirancang, pakai di rekrutmen berikutnya, biarkan terbukti jalan — baru pakai metodologi yang sama untuk peran berikutnya. Hasilnya sama dengan rollout serentak, tapi jauh lebih tahan lama karena tidak kolaps saat ada tekanan rekrutmen yang mendesak.',
    feedbackNo:
      'Semangat itu bagus — tapi rollout serentak ke semua peran sekaligus punya titik lemah yang sudah kita bahas. Kalau tetap ingin mulai serentak, pastikan paling tidak ada pemilik kepatuhan yang eksplisit per peran — satu orang yang tugasnya jelas memastikan profil itu yang dipakai di rekrutmen, bukan template baru yang ditulis ulang karena "rekrutmennya mendesak." Dan pertimbangkan serius untuk menyelesaikan satu peran dulu sampai terbukti jalan sebelum lanjut ke yang lain.',
  },
  {
    id: 'c8-card-9',
    type: 'info',
    icon: Clock,
    eyebrow: 'Satu Hal Lagi',
    title: 'Profil yang Sudah Diinstal Tetap Perlu Dicek Apakah Beneran Dipakai',
    body: [
      'Profil arsitektur jabatan yang sudah diinstal tidak perlu diaudit setiap minggu — tapi perlu dicek setelah beberapa siklus hiring. Apakah profil ini yang beneran dipakai waktu ada rekrutmen berikutnya, atau pewawancara kembali ke cara lama karena "situasinya mendesak"? Apakah kompetensi dan tingkat kemahiran yang ditetapkan masih relevan dengan kebutuhan perannya sekarang?',
      'Yang paling sering dilupakan: menetapkan kapan dan apa yang akan dicek — sebelum keluar dari bab ini. Bukan "nanti kalau ada masalah" — karena kalau masalahnya sudah terasa, biasanya sudah terlambat untuk koreksi kecil. Satu catatan konkret: kapan Anda akan cek, dan apa yang akan Anda cek saat itu.',
    ],
  },
  {
    id: 'c8-card-10',
    type: 'reflection',
    eyebrow: 'Entri Kesepuluh · Buku Kerja Job Architecture',
    prompt:
      'Tetapkan kapan dan apa yang akan Anda cek pada tinjauan pertama arsitektur jabatan yang sudah diinstal.',
    fields: [
      {
        id: 'next-check',
        label:
          'Kapan Anda akan mengecek apakah arsitektur jabatan yang sudah diinstal beneran dipakai di rekrutmen berikutnya — dan apa yang akan Anda cek saat itu?',
        placeholder:
          'Contoh: Setelah rekrutmen pertama untuk peran ini selesai — cek apakah profil arsitektur jabatannya yang dipakai sebagai acuan, apakah pertanyaan BEI-nya diajukan dan rubriknya diisi, dan apakah keputusan akhirnya bisa dijelaskan berdasarkan skor rubrik bukan hanya kesan panel. Atau: tiga bulan dari sekarang — cek apakah pemilik yang ditetapkan masih aktif menjaga profil ini tetap dipakai...',
      },
    ],
  },
  {
    id: 'c8-card-11',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Satu Langkah Terakhir',
    title: 'Semua yang Sudah Anda Kerjakan dari Bab 1 sampai Sekarang, Kita Kumpulkan Jadi Satu',
    body: [
      'Dari Entri Pertama sampai Entri Kesepuluh, Anda sudah membangun sesuatu yang konkret: satu peran yang diidentifikasi di Bab 1, peta diri di dua tahap arsitektur jabatan di Bab 2, model kompetensi tiga lapis di Bab 3, tingkat kemahiran dengan anchor perilaku di Bab 4, diagnosis rekrutmen di Bab 5, alat seleksi BEI dan rubrik di Bab 6, profil terintegrasi yang dirakit di Bab 7, dan playbook instalasi lengkap dengan jadwal cek pertama dari bab ini.',
      'Semua itu sekarang kita kumpulkan jadi satu laporan lengkap yang bisa Anda cetak, simpan, dan pakai sebagai acuan saat menjalankan rekrutmen berikutnya untuk peran yang sudah diprofilkan.',
    ],
  },
  {
    id: 'c8-card-12',
    type: 'report',
    eyebrow: 'Laporan Arsitektur Jabatan Anda',
    title: 'Laporan Lengkap Perjalanan Anda dari Bab 1 sampai Bab 8',
    intro: [
      'Ini rangkuman perjalanan Anda dari identifikasi jebakan kelihatannya cocok di Bab 1 sampai profil arsitektur jabatan yang utuh dan playbook instalasinya. Simpan atau cetak sebagai acuan untuk rekrutmen berikutnya dan tinjauan pertama profil ini.',
    ],
    sections: [
      {
        heading: 'Peran yang Diperhatikan',
        items: [
          {
            label: 'Nama peran yang diidentifikasi (Bab 1)',
            cardId: 'c1-card-15',
            fieldId: 'role-name',
          },
          {
            label: 'Tanda masalah atau kenapa peran ini jadi titik uji (Bab 1)',
            cardId: 'c1-card-15',
            fieldId: 'mismatch-signal',
          },
        ],
      },
      {
        heading: 'Peta Diri di Arsitektur Jabatan',
        items: [
          {
            label: 'Tahap yang paling bolong — model kompetensi atau rekrutmen berbasis bukti (Bab 2)',
            cardId: 'c2-card-15',
            fieldId: 'weakest-stage',
          },
          {
            label: 'Tahap paling mendesak untuk dibenahi (Bab 2)',
            cardId: 'c2-card-15',
            fieldId: 'most-urgent',
          },
        ],
      },
      {
        heading: 'Model Kompetensi Anda',
        items: [
          {
            label: 'Kompetensi Inti untuk peran ini (Bab 3)',
            cardId: 'c3-card-14',
            fieldId: 'kompetensi-inti',
          },
          {
            label: 'Kompetensi Fungsional paling krusial (Bab 3)',
            cardId: 'c3-card-14',
            fieldId: 'kompetensi-fungsional',
          },
          {
            label: 'Kompetensi Kepemimpinan — kalau relevan untuk peran ini (Bab 3)',
            cardId: 'c3-card-14',
            fieldId: 'kompetensi-kepemimpinan',
          },
        ],
      },
      {
        heading: 'Tingkat Kemahiran Anda',
        items: [
          {
            label: 'Level minimum kompetensi paling krusial dan bentuk konkretnya (Bab 4)',
            cardId: 'c4-card-13',
            fieldId: 'level-krusial',
          },
          {
            label: 'Kompetensi yang boleh cukup di level Dasar atau Berkembang (Bab 4)',
            cardId: 'c4-card-13',
            fieldId: 'level-cukup-dasar',
          },
        ],
      },
      {
        heading: 'Diagnosis Rekrutmen',
        items: [
          {
            label: 'Posisi yang didiagnosis dan gambaran prosesnya (Bab 5)',
            cardId: 'c5-card-14',
            fieldId: 'posisi-dan-proses',
          },
          {
            label: 'Lensa dominan yang paling berlaku dan alasannya (Bab 5)',
            cardId: 'c5-card-14',
            fieldId: 'lensa-dominan',
          },
        ],
      },
      {
        heading: 'Alat Seleksi Anda',
        items: [
          {
            label: 'Pertanyaan BEI untuk kompetensi paling krusial (Bab 6)',
            cardId: 'c6-card-14',
            fieldId: 'bei-question',
          },
          {
            label: 'Kriteria skor 4 vs skor 1 untuk kompetensi itu (Bab 6)',
            cardId: 'c6-card-14',
            fieldId: 'rubrik-skor',
          },
        ],
      },
      {
        heading: 'Profil Arsitektur Jabatan Anda',
        items: [
          {
            label: 'Skor kepercayaan alat seleksi (Bab 7)',
            cardId: 'chapter7-selection-tool-review',
            fieldId: 'score',
          },
          {
            label: 'Alasan skor dan yang masih perlu disesuaikan (Bab 7)',
            cardId: 'chapter7-selection-tool-review',
            fieldId: 'justification',
          },
          {
            label: 'Peran fokus profil terintegrasi (Bab 7)',
            cardId: 'c7-card-15',
            fieldId: 'focus-role',
          },
          {
            label: 'Kompetensi kunci dan tingkat kemahiran minimum (Bab 7)',
            cardId: 'c7-card-15',
            fieldId: 'kompetensi-dan-kemahiran',
          },
          {
            label: 'Gambaran alat seleksi BEI dan rubrik (Bab 7)',
            cardId: 'c7-card-15',
            fieldId: 'gambaran-alat-seleksi',
          },
        ],
      },
      {
        heading: 'Playbook Instalasi Anda',
        items: [
          {
            label: 'Pemilik arsitektur jabatan (Bab 8)',
            cardId: 'c8-card-7',
            fieldId: 'pemilik-arsitektur',
          },
          {
            label: 'Kapan mulai dipakai di rekrutmen berikutnya (Bab 8)',
            cardId: 'c8-card-7',
            fieldId: 'mulai-dipakai',
          },
          {
            label: 'Jadwal review profil arsitektur jabatan (Bab 8)',
            cardId: 'c8-card-7',
            fieldId: 'jadwal-review',
          },
          {
            label: 'Pendekatan rollout (Bab 8)',
            cardId: 'c8-card-8',
            fieldId: 'selectionLabel',
          },
        ],
      },
      {
        heading: 'Cek Berikutnya',
        items: [
          {
            label: 'Kapan dan apa yang akan dicek (Bab 8)',
            cardId: 'c8-card-10',
            fieldId: 'next-check',
          },
        ],
      },
    ],
    downloadButtonText: 'Cetak / Simpan Laporan Ini',
  },
  {
    id: 'c8-card-13',
    type: 'info',
    icon: CheckCircle,
    eyebrow: 'Selesai Modul 7',
    title: 'Anda Baru Saja Membangun Sesuatu yang Kebanyakan Bisnis SME Belum Pernah Punya',
    body: [
      'Ini bukan cuma delapan bab yang Anda baca. Dari "jebakan kelihatannya cocok" yang diidentifikasi di Bab 1, sampai satu profil arsitektur jabatan yang utuh — model kompetensi yang jelas, tingkat kemahiran yang bisa diukur, alat seleksi yang menguji kompetensi secara nyata, dan pemilik yang bertanggung jawab memastikan profil itu beneran dipakai — Anda sudah membangun sesuatu yang sangat jarang ada di bisnis SME: proses rekrutmen yang dirancang dengan sengaja untuk beneran berbasis kompetensi, bukan berbasis kesan.',
      'Profil pertama ada di tangan Anda. Pemiliknya ada. Tanggal mulai ada. Jadwal cek pertama ada. Yang tinggal sekarang: pakai profil itu di rekrutmen berikutnya untuk peran yang sudah dirancang, biarkan terbukti jalan, lalu pakai metodologi yang sama untuk peran berikutnya.',
      '"Jebakan kelihatannya cocok" yang kita mulai bicarakan di Bab 1 bukan kebetulan — dan sekarang Anda tahu persis cara mencegah rekrutmen apa pun berakhir jatuh ke jebakan itu lagi.',
    ],
  },
]
