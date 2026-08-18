import type { AssessmentQuestionBase } from '../../intro-outro/buildAssessmentCards'

export const assessmentQuestions: AssessmentQuestionBase[] = [
  {
    question:
      'KPI Anda sudah jelas dan rapat tinjauan sudah rutin, tapi bulan ini muncul lagi komplain yang MIRIP dengan bulan lalu. Di mana biasanya akar masalah seperti ini benar-benar bersembunyi?',
    options: [
      'Di angka KPI-nya — berarti perlu KPI yang lebih rumit',
      'Di titik serah terima antar tim yang belum pernah dirancang dengan sengaja',
      'Di frekuensi rapat tinjauan — berarti perlu rapat lebih sering',
      'Di software yang dipakai untuk memantau KPI',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Dalam arsitektur proses 4 tingkat, apa beda mendasar antara Level 1 (peta bisnis end-to-end) dan Level 4 (instruksi kerja/SOP)?',
    options: [
      'L1 peta besar lintas departemen, L4 detail teknis langkah demi langkah untuk satu tugas',
      'L1 khusus untuk tim produksi, L4 khusus untuk tim sales',
      'L1 dan L4 sebenarnya isinya sama, cuma beda penamaan',
      'L1 dibuat konsultan luar, L4 dibuat staf internal',
    ],
    correctAnswer: 0,
  },
  {
    question:
      'Sebuah PO yang seharusnya cukup satu tanda tangan malah harus disetujui tiga orang, dan tak ada yang jelas kenapa perlu tiga-tiganya. Ini gejala penyakit proses yang mana?',
    options: [
      'Bottleneck kapasitas kerja',
      'Approval berlapis (approval bloat)',
      'Silo fungsional antar departemen',
      'QA yang terlalu ketat',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Apa beda paling mendasar antara QC (quality control) dan QA (quality assurance)?',
    options: [
      'QC menangkap cacat setelah kejadian, QA mencegah sebelum kejadian',
      'QC untuk bisnis produk, QA untuk bisnis jasa',
      'QC dan QA istilah berbeda untuk hal yang sama persis',
      'QC dilakukan oleh supplier, QA dilakukan oleh pelanggan',
    ],
    correctAnswer: 0,
  },
  {
    question:
      'Anda baru selesai merombak satu proses lewat metodologi lengkap, dan tergoda langsung merombak lima proses lain sekaligus minggu depan. Pendekatan rollout mana yang paling tahan lama?',
    options: [
      'Langsung terapkan ke semua proses sekaligus mumpung metodologinya masih segar',
      'Instal dulu satu proses, biarkan stabil beberapa minggu, baru lanjut ke proses berikutnya',
      'Tunggu sampai proses-proses lain juga bermasalah, baru dibenahi satu-satu',
      'Serahkan sepenuhnya ke tim tanpa ada satu pemilik yang eksplisit',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Kalau proses di bisnis Anda cuma "ada di kepala" satu-dua orang kunci ("tanya aja ke Mbak Dinda, dia paling ngerti"), apa risiko terbesarnya?',
    options: [
      'Tidak ada risiko — itu justru tanda tim yang solid',
      'Prosesnya rapuh, langsung goyah kalau orang itu cuti, resign, atau lupa detail',
      'Risikonya cuma soal estetika dokumentasi, bukan soal operasional',
      'Risiko itu hanya muncul kalau perusahaan sudah sangat besar',
    ],
    correctAnswer: 1,
  },
]
