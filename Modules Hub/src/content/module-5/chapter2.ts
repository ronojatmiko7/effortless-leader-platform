import {
  Archive,
  BookOpen,
  Eye,
  CheckCircle,
  BarChart2,
  AlertCircle,
  NotebookPen,
  Compass,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter2Cards: Card[] = [
  {
    id: 'c2-card-1',
    type: 'info',
    icon: BarChart2,
    eyebrow: 'Bab 2 · Skala Kematangan Kepatuhan',
    title: 'Dari Satu SOP yang Diabaikan ke Gambaran Utuh Bisnis Anda',
    body: [
      'Di Bab 1, Anda sudah menyebutkan satu SOP yang paling sering didiamkan di bisnis Anda. Itu langkah awal yang penting — tapi satu contoh saja belum cukup untuk mengukur separah apa masalahnya secara keseluruhan.',
      'Bab ini kasih Anda alat ukurnya: skala 4 level kematangan kepatuhan SOP — dari "dokumen berdebu yang nyaris tidak ada" sampai "kepatuhan yang diverifikasi aktif." Dengan skala ini, Anda bisa melihat posisi bisnis Anda sekarang secara objektif, dan ke mana harus menuju.',
      'Keempat level ini bukan teori — ini deskripsi kondisi nyata yang bisa langsung Anda kenali dari cara kerja sehari-hari di bisnis Anda.',
    ],
  },
  {
    id: 'c2-card-2',
    type: 'info',
    icon: Archive,
    eyebrow: 'Level 1 dari 4',
    title: 'Dokumen Berdebu: SOP Formal Nyaris Tidak Ada',
    body: [
      'Di Level 1, SOP formal hampir tidak ada — atau ada, tapi sudah jadi arsip usang yang tidak pernah dibuka. Cara kerja sehari-hari dijalankan lewat kebiasaan tidak tertulis: "tanya aja ke Pak Budi," "dari dulu emang gitu," "liat dulu caranya senior sebelum mulai kerja."',
      'Pengetahuan tentang cara kerja yang benar tersimpan di kepala orang-orang tertentu, bukan di dokumen yang bisa diakses semua orang. Kalau Pak Budi sakit atau resign, kepatuhan itu bisa ikut hilang bersamanya.',
      'Bisnis di Level 1 bukan selalu karena tidak mau bikin SOP — sering kali karena cara kerja informal selama ini terasa cukup, atau belum ada momen yang memaksa untuk mendokumentasikannya. Tapi ketika bisnis tumbuh, ketergantungan pada orang tertentu jadi titik rapuh yang besar.',
    ],
  },
  {
    id: 'c2-card-3',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Level 2 dari 4',
    title: 'Ada Tapi Susah Dipakai: SOP Ada, Adopsinya Rendah',
    body: [
      'Di Level 2, SOP tertulis sudah ada. Dokumennya dibuat dengan cukup serius — mungkin cukup panjang, cukup detail. Tapi di lapangan, adopsinya rendah: orang jarang buka dokumen itu saat kerja sehari-hari.',
      'Kenapa? Bukan karena tidak mau. Tapi karena formatnya terlalu rumit untuk dibaca cepat, terlalu panjang untuk jadi panduan kerja di tengah-tengah tugas, atau tersimpan di tempat yang susah ditemukan pas paling dibutuhkan. Akhirnya, cara kerja informal tetap mendominasi — meski SOPnya secara teknis sudah ada.',
      'Mayoritas bisnis yang "sudah punya SOP" sebenarnya ada di Level 2. Dokumennya nyata dan eksis, tapi belum benar-benar memengaruhi cara kerja nyata di lapangan. Gap antara "SOP ada di Drive" dan "SOP jadi rujukan kerja sehari-hari" itu yang belum tertutup.',
    ],
  },
  {
    id: 'c2-card-4',
    type: 'info',
    icon: Eye,
    eyebrow: 'Level 3 dari 4',
    title: 'Diikuti Sebagian, Diawasi Sesekali: Kepatuhan Bergantung pada Supervisor',
    body: [
      'Di Level 3, SOP diikuti sebagian besar waktu — tapi kepatuhannya bergantung pada kehadiran supervisor atau atasan yang mengecek. Selama ada yang mengawasi, tim ikut prosedur. Begitu tidak diawasi, mereka pelan-pelan balik ke cara lama yang lebih familiar dan terasa lebih cepat.',
      'Kondisi ini sering kelihatan bagus dari luar: kalau Anda cek di hari yang tepat saat Anda hadir, semuanya terlihat sesuai SOP. Tapi itu bukan gambaran lengkap. Yang tidak kelihatan adalah apa yang terjadi saat Anda tidak ada — atau berapa banyak deviasi kecil yang terakumulasi tanpa pernah terdeteksi.',
      'Level 3 lebih baik dari Level 1 dan 2 — tapi masih rapuh. Kepatuhan di sini bukan kebiasaan yang tertanam; itu respons terhadap pengawasan. Dan pengawasan tidak bisa hadir 24 jam setiap hari.',
    ],
  },
  {
    id: 'c2-card-5',
    type: 'info',
    icon: CheckCircle,
    eyebrow: 'Level 4 dari 4',
    title: 'Diverifikasi Aktif: Kepatuhan yang Dipantau, Bukan Diasumsikan',
    body: [
      'Di Level 4, kepatuhan terhadap SOP tidak cuma "diharapkan" — tapi secara aktif dicek secara rutin dan sistematis. Ada mekanisme verifikasi yang berjalan: checklist yang diisi, inspeksi terjadwal, atau laporan berkala yang memastikan SOP benar-benar diikuti — bukan cuma diasumsikan.',
      'Tim tidak perlu diingatkan terus karena prosedur pengecekan sudah jadi bagian dari ritme kerja normal. Kalau ada deviasi, terdeteksi lebih cepat — dan ada mekanisme yang jelas untuk mengkoreksinya sebelum jadi masalah yang lebih besar.',
      'Ini bukan soal kontrol berlebihan atau tidak percaya tim. Ini soal membuat kepatuhan jadi sesuatu yang bisa diverifikasi secara objektif — bukan sesuatu yang bergantung pada asumsi atau kehadiran atasan tertentu.',
    ],
  },
  {
    id: 'c2-card-6',
    type: 'multiple-choice',
    question:
      'Di sebuah warung makan, tidak ada SOP tertulis untuk proses persiapan dapur. Staf baru belajar caranya dari senior paling berpengalaman — dan tiap senior ngajari dengan urutan yang sedikit berbeda. Konsistensinya bergantung penuh pada siapa yang mengajari. Level berapa ini?',
    options: [
      'Level 1 — tidak ada SOP yang berfungsi, cara kerja bergantung pada kebiasaan dan orang tertentu',
      'Level 2 — SOP ada tapi adopsinya rendah karena susah dipakai',
      'Level 3 — SOP diikuti tapi hanya kalau ada yang mengawasi',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Tidak ada SOP yang berfungsi, cara kerja diturunkan dari orang ke orang secara tidak konsisten — itu ciri khas Level 1. Ketika orang-orang kunci pergi atau berubah, "standar" yang selama ini ada bisa ikut hilang.',
    errorFeedback:
      'Belum tepat. Perhatikan: tidak ada SOP tertulis, cara kerja diajarkan dari mulut ke mulut oleh orang-orang tertentu secara tidak konsisten. Itu Level 1 — bergantung pada keberadaan orang tertentu, bukan pada sistem yang terdokumentasi.',
  },
  {
    id: 'c2-card-7',
    type: 'multiple-choice',
    question:
      'Toko retail punya SOP tertulis untuk proses penerimaan barang dari supplier — tersimpan di Google Drive, ditulis lengkap. Tapi staf jarang membukanya karena formatnya panjang, susah dibaca cepat, dan linknya susah ditemukan di antara ratusan file lain. Di lapangan, cara kerja tiap staf berbeda-beda. Level berapa ini?',
    options: [
      'Level 1 — tidak ada SOP yang berfungsi',
      'Level 2 — SOP ada tapi adopsinya rendah karena format dan aksesnya tidak mendukung',
      'Level 3 — SOP diikuti tapi bergantung pada pengawasan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. SOPnya ada dan dibuat dengan serius — tapi adopsinya rendah karena format dan aksesnya tidak mendukung pemakaian nyata saat kerja. Itu Level 2: dokumen eksis, tapi belum mengubah cara kerja di lapangan.',
    errorFeedback:
      'Coba lagi. SOPnya ada — jadi bukan Level 1. Dan kepatuhannya rendah bukan karena tidak ada yang mengawasi, tapi karena dokumennya sendiri susah diakses dan dipakai. Itu tanda khas Level 2.',
  },
  {
    id: 'c2-card-8',
    type: 'multiple-choice',
    question:
      'Di sebuah klinik, SOP pelayanan pasien cukup diikuti — tapi hanya kalau manajer klinik sedang ada. Kalau manajernya rapat atau tidak masuk, staf mulai memotong beberapa langkah yang terasa berlebihan. Manajernya merasa "sudah lumayan" tapi tidak yakin apa yang terjadi saat dia tidak hadir. Level berapa ini?',
    options: [
      'Level 2 — SOP ada tapi adopsinya rendah',
      'Level 3 — SOP diikuti sebagian, kepatuhan bergantung pada pengawasan',
      'Level 4 — SOP diverifikasi aktif',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. SOP diikuti kalau ada yang mengawasi — tapi begitu pengawasan hilang, prosedur mulai dilangkahi. Itu sinyal khas Level 3: kepatuhan bersifat reaktif terhadap pengawasan, bukan tertanam sebagai kebiasaan.',
    errorFeedback:
      'Perhatikan polanya: SOP diikuti saat ada manajer, tapi dilangkahi saat tidak ada yang mengawasi. Bukan Level 2 (masalahnya bukan format) dan bukan Level 4 (tidak ada verifikasi sistematis). Itu Level 3: kepatuhan bergantung pada kehadiran supervisor.',
  },
  {
    id: 'c2-card-9',
    type: 'sort-list',
    question:
      'Urutkan keempat situasi berikut dari kematangan kepatuhan paling rendah (Level 1) ke paling tinggi (Level 4):',
    items: [
      'SOP diikuti penuh dan kepatuhannya dicek rutin dengan checklist mingguan',
      'SOP ada di folder Drive tapi staf jarang buka karena formatnya kepanjangan dan susah ditemukan',
      'Tidak ada SOP tertulis — cara kerja diturunkan secara lisan dari senior ke staf baru',
      'SOP diikuti dengan baik kalau supervisor hadir, tapi dilangkahi kalau tidak ada yang mengawasi',
    ],
    correctAnswer: [
      'Tidak ada SOP tertulis — cara kerja diturunkan secara lisan dari senior ke staf baru',
      'SOP ada di folder Drive tapi staf jarang buka karena formatnya kepanjangan dan susah ditemukan',
      'SOP diikuti dengan baik kalau supervisor hadir, tapi dilangkahi kalau tidak ada yang mengawasi',
      'SOP diikuti penuh dan kepatuhannya dicek rutin dengan checklist mingguan',
    ],
    successFeedback:
      'Tepat. Dari tidak ada SOP yang berfungsi (Level 1) → ada tapi susah dipakai (Level 2) → diikuti kalau diawasi (Level 3) → diverifikasi aktif secara rutin (Level 4). Itu perjalanan yang sisa modul ini akan bantu Anda tempuh.',
    errorFeedback:
      'Belum tepat. Level 1 adalah tidak ada SOP yang berfungsi — hanya kebiasaan lisan. Level 2 ada SOP tapi susah diakses atau dipakai. Level 3 SOP diikuti tapi tergantung pengawasan. Level 4 ada verifikasi aktif yang rutin.',
  },
  {
    id: 'c2-card-10',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Kenapa Mayoritas Bisnis Nyangkut di Sini',
    title: 'Level 2–3: Titik Tengah yang Terasa Aman Tapi Sebenarnya Rapuh',
    body: [
      'Kebanyakan bisnis SME tidak turun ke Level 1 — karena sudah cukup repot bikin SOP sekali, dan hasilnya terasa seperti kemajuan nyata. Tapi juga jarang naik ke Level 4 — karena itu butuh effort tambahan yang hasilnya tidak langsung kelihatan dari luar.',
      'Level 2 terasa "aman" karena dokumennya ada. Level 3 terasa "lumayan" karena kalau Anda hadir dan mengecek, semuanya kelihatan berjalan. Yang tidak kelihatan adalah apa yang terjadi saat Anda tidak ada — atau berapa banyak deviasi kecil yang terakumulasi tanpa pernah terdeteksi.',
      'Nyangkut di Level 2 atau 3 bukan kegagalan. Itu titik di mana kebanyakan bisnis berhenti karena energi habis di tahap pembuatan dokumen — padahal bagian yang benar-benar mengubah operasi nyata baru dimulai setelah itu.',
    ],
  },
  {
    id: 'c2-card-11',
    type: 'yes-no',
    question:
      'Setelah melihat keempat level tadi — jujur, mayoritas SOP di bisnis Anda paling dekat dengan Level 2 atau 3, bukan Level 1 atau Level 4?',
    yesLabel: 'Ya, Level 2 atau 3 paling akurat',
    noLabel: 'Kami masih di Level 1, atau sudah di Level 4',
    feedbackYes:
      'Itu posisi paling umum untuk bisnis yang sudah tumbuh tapi belum sempat menginstal sistem verifikasi yang sistematis. Bab-bab berikutnya akan urai cara naik dari sana — satu aspek sekaligus, mulai dari mendiagnosis kenapa SOP spesifik Anda nyangkut.',
    feedbackNo:
      'Kalau masih di Level 1 — modul ini akan kasih Anda fondasi untuk mulai dari format dan akses yang tepat. Kalau sudah di Level 4 — baca terus untuk memastikan sistem verifikasinya sudah solid dan tidak ada celah yang belum kelihatan.',
  },
  {
    id: 'c2-card-12',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Saatnya Nilai Sendiri',
    title: 'Pilih 3–4 SOP di Bisnis Anda — Masukkan ke Level yang Tepat',
    body: [
      'Sebelum lanjut ke Entri Kedua, ambil waktu sebentar dan pikirkan 3–4 SOP yang paling sering dipakai — atau harusnya dipakai — di bisnis Anda. Bisa SOP formal, prosedur tidak tertulis, atau kebiasaan kerja yang selama ini jalan karena inisiatif orang tertentu.',
      'Untuk masing-masing, tanyakan: ada di level berapa? Level 1 (tidak ada SOP yang berfungsi)? Level 2 (ada tapi jarang dipakai karena format atau aksesnya)? Level 3 (diikuti kalau diawasi)? Level 4 (verifikasi rutin sudah ada)?',
      'Perhatikan polanya: apakah sebagian besar SOP ada di level yang sama, atau tersebar? Dan SOP mana yang paling kritis tapi paling rendah levelnya? Biasanya itu yang paling mendesak untuk dibenahi duluan.',
    ],
  },
  {
    id: 'c2-card-13',
    type: 'info',
    icon: Compass,
    eyebrow: 'Peta Sisa Modul Ini',
    title: 'Bab 3–6 Dibangun Mengikuti Skala Ini — Satu Langkah Sekaligus',
    body: [
      'Skala 4 level ini bukan cuma alat diagnostik — ini peta perjalanan sisa modul ini. Setiap bab berikutnya menangani satu aspek spesifik dari proses naik level.',
      'Bab 3 membantu Anda mendiagnosis kenapa persisnya SOP spesifik Anda nyangkut — apakah masalahnya ada di format, akses, atau relevansi isinya. Bab 4 dan 5 membenahi format dan akses supaya SOPnya bisa naik dari Level 1–2 ke Level 3. Bab 6 menginstal mekanisme verifikasi yang membawa Anda ke Level 4.',
      'Kalau Anda mengikuti modul ini sampai selesai, Anda tidak cuma tahu di level mana posisi bisnis Anda — Anda punya sistem konkret untuk naik ke level berikutnya, bukan cuma niat yang belum punya bentuk.',
    ],
  },
  {
    id: 'c2-card-14',
    type: 'reflection',
    eyebrow: 'Entri Kedua · Buku Kerja SOP Anda',
    prompt:
      'Sekarang Anda sudah melihat keempat level dan sudah menilai beberapa SOP di bisnis Anda. Catat posisi Anda secara jujur.',
    fields: [
      {
        id: 'overall-maturity-level',
        label: 'Secara keseluruhan, SOP di bisnis Anda ada di level berapa (1–4) — dan kenapa?',
        placeholder:
          'Contoh: Level 2 — kami punya SOP tertulis tapi staf jarang buka karena formatnya terlalu panjang dan susah ditemukan di folder yang berantakan...',
      },
      {
        id: 'most-urgent-sop',
        label: 'SOP mana yang paling mendesak untuk dibenahi duluan?',
        placeholder:
          'Contoh: SOP onboarding karyawan baru — setiap batch masuk belajarnya beda-beda karena tidak ada panduan yang konsisten dan mudah diakses...',
      },
    ],
  },
  {
    id: 'c2-card-15',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 2',
    title: 'Sekarang Anda Sudah Tahu Ada di Level Berapa',
    body: [
      'Anda baru saja menempatkan bisnis Anda di skala kematangan kepatuhan SOP — dan mengidentifikasi SOP mana yang paling mendesak untuk dibenahi. Itu sudah jauh lebih konkret dari sekadar "SOP kami masih perlu diperbaiki."',
      'Sekarang Anda sudah tahu ada di level berapa. Bab 3 kasih Anda cara mendiagnosis kenapa persisnya SOP Anda nyangkut di situ — apakah akar masalahnya ada di format, akses, atau relevansi isinya — biar bab-bab berikutnya benerin akar masalahnya, bukan asal ganti format.',
    ],
  },
]
