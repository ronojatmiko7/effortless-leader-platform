import type { AssessmentQuestionBase } from '../../intro-outro/buildAssessmentCards'

export const assessmentQuestions: AssessmentQuestionBase[] = [
  {
    question:
      'SOP sudah dicetak, dilaminating, dan ditempel di dinding — tapi operator tetap kerja pakai urutan "yang udah biasa". Apa sebenarnya yang terjadi?',
    options: [
      'SOPnya sudah selesai, tinggal menunggu operator terbiasa membacanya',
      'Ada gap antara "SOP ada" dan "SOP dipakai" — dokumennya eksis, tapi belum membentuk cara kerja nyata',
      'Operatornya kurang disiplin dan perlu ditegur',
      'Formatnya sudah benar, masalahnya cuma soal penempatan dinding yang kurang strategis',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Urutan skala kematangan kepatuhan SOP di modul ini, dari yang paling rendah ke yang paling tinggi, adalah:',
    options: [
      'Diikuti Kalau Diawasi → Diabaikan → Sebagian Diikuti → Terverifikasi Aktif',
      'Sebagian Diikuti → Diabaikan → Terverifikasi Aktif → Diikuti Kalau Diawasi',
      'Diabaikan → Sebagian Diikuti → Diikuti Kalau Diawasi → Terverifikasi Aktif',
      'Diabaikan → Diikuti Kalau Diawasi → Terverifikasi Aktif → Sebagian Diikuti',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Sebuah SOP ternyata jarang dipakai bukan karena isinya salah, tapi karena filenya terkubur di folder yang staf baru tidak pernah tahu ada. Lensa diagnostik mana yang paling relevan untuk masalah ini?',
    options: [
      'Lensa format — SOPnya perlu ditulis ulang jadi checklist',
      'Lensa akses — masalahnya ada di titik temu antara SOP dan orang yang butuh SOP itu',
      'Lensa relevansi — isinya sudah tidak sesuai cara kerja sekarang',
      'Ketiga lensa itu tidak berlaku untuk kasus seperti ini',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Apa inti dari teknik mengubah SOP naratif panjang menjadi checklist yang bisa diikuti di titik kerja?',
    options: [
      'Memperpendek kalimat tanpa mengubah urutan atau strukturnya',
      'Menghapus langkah-langkah yang dianggap kurang penting agar lebih ringkas',
      'Mengubah instruksi jadi langkah-langkah konkret dan bisa dicentang, sesuai urutan nyata di lapangan',
      'Menerjemahkan istilah teknis jadi bahasa yang lebih formal',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Kenapa pengecekan kepatuhan SOP sebaiknya disambungkan ke ritme yang sudah berjalan (misalnya briefing mingguan), bukan dibuat jadi forum baru yang berdiri sendiri?',
    options: [
      'Karena forum baru butuh izin manajemen puncak yang sulit didapat',
      'Kalau tidak ada forum rutin yang membahas hasilnya, pengecekan kepatuhan akan jadi ritual tanpa tindak lanjut',
      'Karena karyawan tidak suka diajak rapat tambahan',
      'Supaya SOP-nya bisa langsung diaudit oleh pihak eksternal',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Setelah merombak satu SOP lewat metodologi lengkap modul ini, langkah paling tepat sebelum merombak SOP-SOP lain adalah:',
    options: [
      'Langsung rombak semua SOP lain sekaligus mumpung semangat masih tinggi',
      'Instal dulu satu SOP itu, biarkan stabil beberapa minggu dengan pemilik kepatuhan yang jelas, baru lanjut ke SOP berikutnya',
      'Tunggu sampai ada masalah besar di SOP lain sebelum ikut dirombak',
      'Serahkan ke tim tanpa menunjuk pemilik kepatuhan, supaya semua orang merasa bertanggung jawab',
    ],
    correctAnswer: 1,
  },
]
