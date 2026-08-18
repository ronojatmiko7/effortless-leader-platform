import type { AssessmentQuestionBase } from '../../intro-outro/buildAssessmentCards'

export const assessmentQuestions: AssessmentQuestionBase[] = [
  {
    question:
      'Sebuah bisnis rutin melakukan review kinerja tahunan, tapi sepanjang tahun tidak ada tujuan tertulis di awal dan tidak ada coaching rutin di tengah. Menurut modul ini, apa yang sebenarnya sudah dimiliki bisnis ini?',
    options: [
      'Sistem manajemen kinerja yang cukup, karena sudah ada review tahunan',
      'Baru satu titik dari tiga tahap siklus kinerja — bukan sistem, cuma momen penilaian yang terisolasi',
      'Sistem yang sudah lengkap selama reviewnya dilakukan tiap tahun tanpa gagal',
      'Masalah administrasi kecil yang bisa dibenahi dengan mempercepat jadwal reviewnya',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Apa urutan tiga tahap siklus manajemen kinerja yang lengkap, dari yang pertama dijalankan?',
    options: [
      'Tindakan korektif → tujuan kinerja → coaching rutin',
      'Coaching rutin → tindakan korektif → tujuan kinerja',
      'Tujuan kinerja yang disepakati → coaching dan feedback rutin → tindakan korektif kalau ada yang meleset',
      'Ketiganya berjalan sekaligus di titik yang sama, tidak ada urutan yang penting',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Seorang karyawan terus-menerus tidak mencapai target meski sudah dilatih dan tahu persis apa yang diharapkan. Setiap kali ditegur, dia beralasan dan terkesan menghindar dari tanggung jawab. Lensa diagnosis mana yang paling mungkin menjelaskan ini?',
    options: [
      'Skill gap — dia belum punya kemampuan yang cukup untuk tugas ini',
      'Ekspektasi yang tidak jelas — dia tidak pernah diberi tahu targetnya',
      'Will gap — masalahnya bukan kemampuan atau kejelasan, tapi motivasi atau kemauan',
      'Bukan masalah kinerja sama sekali, ini murni masalah kepribadian yang tidak bisa didiagnosis',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Dalam tangga tindakan korektif yang berjenjang, di mana posisi PIP (Performance Improvement Plan) dibandingkan coaching tertarget dan pelatihan?',
    options: [
      'PIP adalah langkah pertama yang harus selalu dicoba sebelum coaching atau pelatihan',
      'PIP adalah ruas paling formal, digunakan setelah coaching tertarget dan pelatihan belum cukup memperbaiki situasi',
      'PIP menggantikan coaching dan pelatihan sepenuhnya karena lebih efisien',
      'Urutannya tidak penting, ketiganya bisa dipakai kapan saja tanpa mempertimbangkan tingkat keparahan',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Apa yang membedakan ritme coaching 1-on-1 yang efektif dari sekadar "ngobrol basa-basi" atau feedback kosong?',
    options: [
      'Frekuensinya harus setiap hari agar terasa serius',
      'Sesinya punya agenda yang bisa diulang dan feedbacknya spesifik serta bisa ditindaklanjuti, bukan cuma "bagus" atau "kurang bagus"',
      'Sesinya cukup dilakukan sekali di akhir tahun asal durasinya panjang',
      'Yang penting suasananya santai, isi percakapannya tidak terlalu penting',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Saat menginstal siklus PMS yang baru dirancang ke bisnis, pendekatan mana yang lebih tepat menurut modul ini?',
    options: [
      'Langsung rollout ke semua tim sekaligus supaya seluruh organisasi berubah bersamaan',
      'Tunggu sampai ada masalah kinerja nyata baru diterapkan ke tim yang bermasalah itu',
      'Instal dulu untuk satu tim atau peran, biarkan stabil beberapa bulan, baru pakai metodologi yang sama untuk tim berikutnya',
      'Serahkan ke masing-masing manajer untuk menjalankan versinya sendiri tanpa satu pemilik kepatuhan yang eksplisit',
    ],
    correctAnswer: 2,
  },
]
