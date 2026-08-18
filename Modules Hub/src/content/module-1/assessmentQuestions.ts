import type { AssessmentQuestionBase } from '../../intro-outro/buildAssessmentCards'

// Shared pretest/posttest question bank for Module 1 (Audit Operasional 3 Level).
// Same questions asked before (intro/pretest) and after (outro/posttest) the
// module — that repetition is what makes the before/after comparison
// meaningful, not a mistake. No feedback text per question: correctness is
// revealed together on the assessment-result card after every question here
// is answered, not one at a time.
export const assessmentQuestions: AssessmentQuestionBase[] = [
  {
    question:
      'Dua bisnis sama-sama melaporkan omzet naik bulan ini. Ternyata satu bisnis naik karena diskon besar-besaran yang bikin marginnya nyaris habis. Ini contoh kenapa penting membedakan apa?',
    options: [
      'KPI yang kelihatan bagus di permukaan dengan KPI yang benar-benar mencerminkan kesehatan bisnis',
      'Insting CEO dengan insting karyawan',
      'Level Proses dengan Level Input',
      'Audit bulanan dengan audit kuartalan',
    ],
    correctAnswer: 0,
  },
  {
    question:
      'Saat memetakan alur kerja untuk mencari titik bocor di Level Proses, yang paling penting dicari adalah...',
    options: [
      'Siapa karyawan yang paling sering absen',
      'Langkah mana dalam alur kerja yang paling banyak buang waktu, biaya, atau bikin kesalahan berulang',
      'Berapa besar omzet bulan ini dibanding bulan lalu',
      'Insting siapa di tim yang paling sering benar',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Setelah dicek ternyata alur kerjanya sudah benar, tapi masalah yang sama tetap muncul terus. Kemungkinan besar akar masalahnya justru ada di Level mana?',
    options: [
      'Output, karena hasil akhirnya yang salah',
      'Proses, sudah pasti ada langkah kerja yang masih salah',
      'Input — misalnya karyawan belum terlatih, alat sudah usang, atau bahan baku kurang bagus',
      'Tidak ada Level yang relevan lagi, berarti itu nasib',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Supaya data audit yang Anda kumpulkan di lapangan objektif dan bukan cuma insting versi baru, apa yang sebaiknya Anda hindari?',
    options: [
      'Mengecek dokumen dan bukti nyata di lapangan',
      'Mengajukan pertanyaan yang sudah menggiring jawaban sesuai dugaan Anda sejak awal',
      'Mengajukan pertanyaan netral ke lebih dari satu orang',
      'Membandingkan cerita di lapangan dengan data yang tercatat',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Setelah audit menghasilkan banyak temuan, langkah paling penting sebelum membuat rencana aksi adalah...',
    options: [
      'Langsung kerjakan semua temuan sekaligus supaya cepat selesai',
      'Menilai dan memprioritaskan temuan mana yang paling mendesak dan paling besar dampaknya',
      'Menunggu insting memberi tahu mana yang penting',
      'Mengabaikan temuan kecil selamanya',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Kenapa audit operasional sebaiknya dilakukan dengan ritme yang rutin (bulanan atau kuartalan), bukan cuma sekali saja waktu ada masalah besar?',
    options: [
      'Karena kondisi bisnis terus berubah — yang sehat hari ini bisa jadi red flag lagi beberapa bulan ke depan kalau tidak dicek ulang',
      'Karena audit sekali sudah cukup untuk seumur hidup bisnis',
      'Karena semakin sering audit, omzet otomatis naik dengan sendirinya',
      'Karena audit rutin cuma perlu dilakukan kalau ada komplain pelanggan',
    ],
    correctAnswer: 0,
  },
]
