import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Eye,
  Layers,
  Link,
  MessageSquare,
  ShieldCheck,
  Target,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter6Cards: Card[] = [
  {
    id: 'c6-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 6 · Jalur Tindakan Korektif',
    title: 'Diagnosis Sudah Ada — Sekarang Kita Bangun Prosesnya',
    body: [
      'Di Bab 5, Anda sudah mendiagnosis akar underperformance kasus konkret Anda: apakah itu skill gap, will gap, atau ekspektasi yang tidak pernah jelas. Anda tahu persis kenapa — dan itu langkah yang banyak manajer tidak pernah ambil.',
      'Tapi diagnosis tanpa tindak lanjut yang terstruktur tidak menghasilkan perubahan. Bab 6 membangun bagian yang sering hilang di bisnis SME: jalur tindakan korektif yang formal, berjenjang, dan terdokumentasi — sebelum ada keputusan besar seperti pemutusan hubungan kerja.',
      'Tiga ruas jalur ini — coaching tertarget, pelatihan, dan Performance Improvement Plan — bukan pilihan menu yang bebas dipilih. Ini tangga yang naik secara berurutan, dimulai dari ruas yang paling sesuai dengan diagnosis di Bab 5.',
    ],
  },
  {
    id: 'c6-card-2',
    type: 'info',
    icon: ShieldCheck,
    eyebrow: 'Kenapa "Tangga," Bukan Langsung Lompat',
    title: 'Proses yang Berjenjang Bukan Soal Kelembutan — Ini Soal Keadilan dan Perlindungan Bisnis',
    body: [
      'Reaksi paling umum manajer ketika ada yang underperform: masalahnya didiamkan terlalu lama karena tidak tahu harus mulai dari mana, sampai frustrasi memuncak — lalu tiba-tiba keputusan besar diambil tanpa proses yang bisa dipertanggungjawabkan. Dua ekstrem itu sama-sama bermasalah.',
      'Proses berjenjang itu adil buat karyawan — mereka dapat kesempatan nyata untuk memperbaiki diri dengan ekspektasi yang jelas dan dukungan yang konkret, bukan hanya sinyal negatif yang menumpuk diam-diam di kepala manajer.',
      'Dan untuk bisnis: setiap langkah dalam proses ini adalah dokumentasi. Kalau akhirnya keputusan besar harus diambil, ada jejak yang bisa dipertanggungjawabkan — bukan keputusan mendadak yang merusak kepercayaan sisa tim. Tangga yang jelas juga membuat manajer lebih berani mengambil tindakan lebih awal, bukan menghindari percakapan yang sulit karena tidak tahu apa yang harus dilakukan.',
    ],
  },
  {
    id: 'c6-card-3',
    type: 'yes-no',
    question:
      'Pernah nggak Anda — atau bisnis Anda — punya karyawan yang underperform dalam waktu panjang, tidak ada proses formal yang dijalankan, lalu tiba-tiba keputusan besar diambil karena sudah tidak tahan?',
    yesLabel: 'Pernah — dan rasanya tidak nyaman buat semua pihak yang terlibat',
    noLabel: 'Belum — atau bisnis saya sudah punya proses korektif yang cukup jelas',
    feedbackYes:
      'Itu tanda bahwa tangga korektif — atau bahkan seluruh jalur formal — belum ada. Bukan berarti Anda manajer yang buruk. Tapi tanpa proses yang jelas, satu-satunya pilihan yang tersisa memang keputusan mendadak yang terasa tidak adil di kedua pihak. Bab ini membangun alternatif itu.',
    feedbackNo:
      'Bagus. Tapi baca terus — bab ini akan bantu Anda memverifikasi apakah proses yang ada sudah benar-benar berjenjang dan terdokumentasi, atau cuma terasa ada karena belum pernah benar-benar perlu dipakai.',
  },
  {
    id: 'c6-card-4',
    type: 'info',
    icon: MessageSquare,
    eyebrow: 'Tangga #1 dari 3',
    title: 'Coaching Tertarget: Percakapan yang Menamai Masalah Secara Eksplisit',
    body: [
      'Coaching tertarget bukan coaching rutin dari Bab 4 — ini percakapan yang dirancang khusus untuk satu masalah spesifik: menamai masalahnya secara eksplisit, menyebutkan standar yang diharapkan, dan menyepakati rencana perbaikan konkret jangka pendek.',
      '"Kamu belakangan sering terlambat submit laporan" bukan coaching tertarget — itu komentar. Coaching tertarget terdengar seperti ini: "Dalam empat minggu terakhir, laporan harian yang seharusnya masuk sebelum jam 08.00 terlambat sembilan kali. Standar yang kita sepakati adalah tepat waktu minimal 90% dalam sebulan. Apa yang sedang terjadi, dan seperti apa rencana konkret untuk empat minggu ke depan?"',
      'Ruas pertama ini paling cocok untuk will gap atau masalah ekspektasi yang masih bisa diselesaikan dengan klarifikasi dan komitmen. Hasilnya harus tertulis — bukan cuma diucapkan di ruangan — dan punya timeline check-in yang konkret.',
    ],
  },
  {
    id: 'c6-card-5',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Tangga #2 dari 3',
    title: 'Pelatihan: Tutup Gap dengan Dukungan Konkret, Bukan Tekanan',
    body: [
      'Kalau diagnosis di Bab 5 menunjuk ke skill gap, tindakan yang tepat adalah pelatihan — bukan motivasi, bukan ancaman, bukan harapan bahwa mereka akan "lebih usaha." Anda tidak bisa mengharapkan orang mencapai standar yang butuh kemampuan yang belum mereka miliki.',
      '"Pelatihan" di sini bukan harus kursus formal. Ini bisa berupa: sesi coaching teknis yang terjadwal bersama seseorang yang sudah mahir, akses ke panduan atau SOP yang lebih detail, pendampingan on-the-job yang terstruktur, atau kombinasi ketiganya — tergantung apa yang paling efisien menutup gap tersebut.',
      'Yang penting: pelatihannya harus spesifik ke gap yang teridentifikasi, punya timeline yang jelas, dan ada cara mengukur apakah gap-nya sudah tertutup. Pelatihan tanpa ketiga elemen itu bukan investasi — itu pengeluaran tanpa arah.',
    ],
  },
  {
    id: 'c6-card-6',
    type: 'info',
    icon: Target,
    eyebrow: 'Tangga #3 dari 3',
    title: 'PIP: Proses Formal Tertulis dengan Target, Deadline, dan Konsekuensi yang Jelas',
    body: [
      'Performance Improvement Plan (PIP) adalah ruas ketiga — dan yang paling formal. PIP diaktifkan ketika coaching tertarget dan/atau pelatihan sudah dijalankan tapi belum menghasilkan perbaikan yang cukup, atau ketika masalahnya sudah cukup serius untuk membutuhkan dokumentasi formal dari awal.',
      'PIP yang benar bukan dokumen intimidasi. Ini kontrak perbaikan tertulis dengan empat elemen yang tidak boleh absen: (1) target yang spesifik dan terukur — bukan "harap lebih baik" tapi angka dan standar yang bisa dicek; (2) tenggat waktu yang jelas per target; (3) jadwal check-in rutin selama periode PIP berjalan; (4) konsekuensi yang eksplisit — apa yang terjadi kalau target tercapai, dan apa yang terjadi kalau tidak.',
      'Dokumen ini ditandatangani oleh kedua pihak, disimpan, dan dirujuk di setiap check-in. Tanpa itu, PIP hanya percakapan yang bisa diabaikan — dan kehilangan semua nilainya sebagai jalur korektif yang sah dan bisa dipertanggungjawabkan.',
    ],
  },
  {
    id: 'c6-card-7',
    type: 'multiple-choice',
    question:
      'Seorang staf administrasi sering salah dalam entry data keuangan — dan setelah ditelusuri, ternyata dia tidak pernah mendapat pelatihan formal tentang sistem yang dipakai. Selama ini dia bekerja berdasarkan tebakan dan meniru cara kerja rekan yang lebih senior. Tangga mana yang paling tepat sebagai langkah pertama?',
    options: [
      'Tangga #1 (Coaching Tertarget) — duduk dan bahas masalahnya secara eksplisit, minta komitmen perbaikan konkret',
      'Tangga #2 (Pelatihan) — sediakan pelatihan spesifik tentang sistem yang dipakai sebelum menuntut standar yang belum pernah diajarkan',
      'Tangga #3 (PIP) — masalah ini sudah cukup serius untuk langsung masuk proses formal tertulis dengan target dan konsekuensi',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini skill gap — orang yang tidak pernah diajarkan cara yang benar tidak bisa dikoreksi hanya dengan percakapan atau dokumen formal. Yang dibutuhkan adalah pelatihan yang menutup gap kemampuan tersebut. Baru setelah kemampuannya ada, ruas lain relevan kalau kinerjanya tetap bermasalah.',
    errorFeedback:
      'Belum tepat. Akar masalahnya adalah skill gap — dan skill gap tidak diselesaikan oleh coaching tertarget atau PIP. Tindakan yang tepat adalah pelatihan yang spesifik pada kemampuan yang belum pernah diajarkan. Menghukum atau mendokumentasikan pelanggaran dari seseorang yang memang belum tahu cara yang benar adalah tindakan yang tidak tepat sasaran.',
  },
  {
    id: 'c6-card-8',
    type: 'info',
    icon: Link,
    eyebrow: 'Peta Diagnosis ke Tangga',
    title: 'Lensa Bab 5 Menentukan Tangga Mana yang Paling Relevan — Bukan Urutan yang Selalu Kaku dari Bawah',
    body: [
      'Tangga korektif tidak selalu harus dimulai dari ruas pertama. Titik masuk yang tepat tergantung pada lensa yang dominan dari diagnosis Bab 5.',
      'Skill gap → mulai dari Tangga #2 (Pelatihan). Orang yang belum punya kemampuannya butuh pelatihan konkret dulu — bukan coaching motivasi atau dokumen formal. Setelah kemampuannya terbentuk, barulah ruas lain relevan kalau kinerjanya masih bermasalah.',
      'Will gap → mulai dari Tangga #1 (Coaching Tertarget). Orangnya punya kemampuan, tapi ada sesuatu yang menghambat motivasinya. Percakapan yang menamai masalah secara eksplisit, menggali hambatan nyatanya, dan menyepakati komitmen konkret adalah langkah pertama yang paling tepat.',
      'Ekspektasi yang nggak jelas → selesaikan dulu dengan klarifikasi ulang tujuan (balik ke Bab 3), lalu Tangga #1 untuk memastikan ada komitmen dan check-in yang terstruktur. Kalau setelah ekspektasi diperjelas kinerjanya tetap bermasalah, eskalasi ke ruas berikutnya baru relevan.',
    ],
  },
  {
    id: 'c6-card-9',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau lensa yang dominan di Bab 5 adalah skill gap, tangga tindakan korektif yang paling relevan untuk dimulai adalah Tangga #2 yaitu ________.',
    options: ['pelatihan', 'coaching tertarget', 'PIP', 'surat peringatan'],
    correctAnswer: 'pelatihan',
    successFeedback:
      'Tepat. Skill gap butuh pelatihan — bukan coaching motivasi atau dokumen formal. Tidak ada gunanya menyepakati komitmen perbaikan kalau kemampuan dasarnya belum ada. Bangun kemampuannya dulu, baru evaluasi apakah lensa lain masih relevan.',
    errorFeedback:
      'Belum tepat. Jawabannya: pelatihan. Skill gap adalah masalah kemampuan yang belum terbentuk — satu-satunya tindakan yang benar-benar menyentuh akarnya adalah pelatihan yang konkret dan spesifik pada gap yang teridentifikasi. Coaching tertarget atau PIP tanpa membangun kemampuannya dulu hanya menghukum orang atas sesuatu yang memang belum pernah mereka bisa.',
  },
  {
    id: 'c6-card-10',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Kapan Naik Tangga, Kapan Berhenti Dulu',
    title: 'Eskalasi Bukan Otomatis — Ada Sinyal yang Menentukan Kapan Harus Naik ke Ruas Berikutnya',
    body: [
      'Tangga korektif bukan konveyor belt yang otomatis berjalan ke atas. Naik ruas berikutnya hanya relevan ketika ada dua kondisi: ruas sebelumnya sudah dijalankan dengan serius — bukan cuma formalitas — dan belum menghasilkan perbaikan yang cukup dalam waktu yang wajar.',
      'Kapan sebaiknya berhenti dulu dan kasih lebih banyak waktu di satu ruas: ketika ada perubahan yang nyata meski belum sampai standar penuh. Memotong proses di tengah perbaikan yang sedang berjalan tidak produktif dan tidak adil. Tandanya: orang itu terlibat aktif di check-in, mengakui masalah, dan ada gerakan ke arah yang benar.',
      'Kapan eskalasi relevan: tidak ada perubahan setelah waktu yang wajar (biasanya 2–4 minggu untuk coaching tertarget, 4–8 minggu untuk pelatihan), atau ada resistensi aktif — orang itu menghindari check-in, menolak mengakui ada masalah, atau tidak menjalankan komitmen yang sudah disepakati. Di kondisi itu, ruas berikutnya memberikan struktur yang lebih formal dan konsekuensi yang lebih eksplisit.',
    ],
  },
  {
    id: 'c6-card-11',
    type: 'multiple-choice',
    question:
      'Seorang staf sudah tiga minggu menjalani proses coaching tertarget. Ada perubahan positif — laporan sudah lebih sering tepat waktu, dan di dua sesi check-in terakhir dia terlibat aktif dan mengakui masalahnya. Tapi belum sampai standar penuh: target 90% ketepatan, sekarang baru di 75%. Apa keputusan yang paling tepat?',
    options: [
      'Langsung eskalasi ke PIP — tiga minggu sudah cukup lama dan standar penuh belum tercapai',
      'Berhenti dulu, kasih waktu lebih di ruas coaching — ada progres nyata yang sedang berjalan dan eskalasi di tengah momentum positif tidak produktif',
      'Hentikan seluruh proses korektif — kalau sudah ada perbaikan berarti masalahnya sudah cukup selesai',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ada progres nyata dan keterlibatan aktif — itu sinyal bahwa ruas coaching sedang bekerja. Eskalasi ke PIP di tengah momentum positif tidak produktif dan bisa merusak kepercayaan yang sedang dibangun. Beri waktu lebih dan pantau terus — eskalasi hanya relevan kalau progesnya stagnan atau ada resistensi aktif.',
    errorFeedback:
      'Belum tepat. Informasi kunci: ada perubahan positif yang nyata dan keterlibatan aktif di check-in. Itu sinyal bahwa proses coaching sedang berjalan — memotong proses yang sedang bekerja tidak produktif. Eskalasi ke ruas berikutnya hanya tepat kalau tidak ada progres setelah waktu yang wajar, atau ada resistensi aktif dari orang yang bersangkutan.',
  },
  {
    id: 'c6-card-12',
    type: 'info',
    icon: Eye,
    eyebrow: 'Contoh Nyata',
    title: 'Merancang Tangga Lengkap: Supervisor Produksi dengan Will Gap',
    body: [
      'Rina, supervisor produksi, punya track record solid selama dua tahun. Tapi empat bulan terakhir, output timnya konsisten di bawah target. Diagnosis Bab 5 menghasilkan: kemampuannya masih ada (dia bisa mengarahkan tim dengan baik kalau diminta), dan standar outputnya dia tahu. Lensa dominan: will gap — ada konflik yang belum pernah dibahas dengan satu anggota tim, dan Rina merasa tidak ada yang peduli dengan kondisi kerjanya.',
      'Tangga yang dirancang — Ruas 1 (Coaching Tertarget, 4 minggu): Percakapan eksplisit yang menamai masalah, menggali hambatan sesungguhnya, dan menyepakati dua komitmen konkret: Rina membuka percakapan langsung dengan anggota tim yang bermasalah sebelum Jumat ini, dan laporan output dikirim setiap Senin sebelum jam 09.00. Check-in mingguan, hasilnya tertulis dan disimpan.',
      'Evaluasi setelah 4 minggu: kalau ada progres signifikan, teruskan coaching dan tutup ruas ini. Kalau tidak ada perubahan — eskalasi ke Ruas 3 (PIP) dengan target output yang spesifik (produktivitas tim kembali ke 95% dalam 30 hari), jadwal check-in dua mingguan, dan konsekuensi yang eksplisit kalau target tidak tercapai. Semua ini tertulis dan ditandatangani.',
    ],
  },
  {
    id: 'c6-card-13',
    type: 'multiple-choice',
    question:
      'Di contoh Rina, manajernya memilih memulai dari Tangga #1 (Coaching Tertarget) meski masalahnya sudah berlangsung empat bulan. Kenapa Tangga #2 (Pelatihan) tidak dipilih sebagai langkah pertama?',
    options: [
      'Karena pelatihan membutuhkan biaya yang belum tentu tersedia untuk situasi seperti ini',
      'Karena diagnosisnya adalah will gap — Rina punya kemampuan tapi ada hambatan motivasi. Pelatihan tidak menyentuh akar masalah itu',
      'Karena empat bulan masih terlalu pendek untuk membutuhkan intervensi sebesar pelatihan formal',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Pilihan ruas pertama ditentukan oleh diagnosis, bukan oleh lamanya masalah atau biaya. Rina sudah terbukti punya kemampuan — masalahnya ada di motivasi dan hambatan yang belum pernah dibahas. Pelatihan tidak akan menyentuh akar itu. Coaching tertarget yang membuka percakapan soal hambatan adalah tindakan pertama yang tepat.',
    errorFeedback:
      'Belum tepat. Alasan pemilihan ruas bukan soal durasi atau biaya — tapi soal diagnosis. Rina punya kemampuan yang sudah terbukti selama dua tahun; masalahnya adalah will gap. Pelatihan adalah tindakan untuk skill gap — melatih seseorang yang sudah bisa tidak akan menyelesaikan hambatan motivasinya. Yang dibutuhkan adalah percakapan yang menggali dan mengatasi hambatan tersebut.',
  },
  {
    id: 'c6-card-14',
    type: 'reflection',
    eyebrow: 'Entri Keenam · Buku Kerja PMS Anda',
    prompt:
      'Sekarang giliran Anda. Rancang jalur tindakan korektif untuk anggota tim yang sudah Anda diagnosis di Bab 5.',
    fields: [
      {
        id: 'corrective-rung',
        label:
          'Tangga mana yang relevan buat kasus ini — coaching tertarget, pelatihan, PIP, atau kombinasi — dan kenapa?',
        placeholder:
          'Misalnya: mulai dari Tangga #2 (pelatihan) karena diagnosisnya adalah skill gap — dia belum pernah dilatih penggunaan sistem yang dipakai. Setelah 4 minggu pelatihan, evaluasi apakah perlu lanjut ke coaching tertarget jika ada masalah lain yang muncul...',
      },
      {
        id: 'corrective-plan',
        label: 'Seperti apa rencananya, dan kapan check-in pertama dilakukan?',
        placeholder:
          'Misalnya: sesi coaching teknis 3x seminggu bersama supervisor senior selama 3 minggu, panduan tertulis disiapkan minggu ini, check-in pertama Jumat depan untuk lihat progres awal — target: bisa kerja mandiri sesuai standar dalam 4 minggu...',
      },
    ],
  },
  {
    id: 'c6-card-15',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 6',
    title: 'Semua Bagiannya Sudah Ada — Bab 7 Lokakarya: Satukan Semuanya',
    body: [
      'Anda sekarang punya semua komponen siklus manajemen kinerja yang lengkap: tujuan kinerja yang jelas dan disepakati dari Bab 3, ritme coaching 1-on-1 yang rutin dari Bab 4, kerangka diagnosis underperformance dari Bab 5, dan jalur tindakan korektif yang formal dan berjenjang dari bab ini.',
      'Bab 7 lokakarya: satukan semuanya jadi satu siklus manajemen kinerja utuh buat satu tim atau peran nyata di bisnis Anda.',
    ],
  },
]
