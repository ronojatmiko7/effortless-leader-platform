import type { AssessmentQuestionBase } from '../../intro-outro/buildAssessmentCards'

// Shared pretest/posttest question bank for Module 9 (AI Adoption & Claude
// for Business). Same questions asked before (intro/pretest) and after
// (outro/posttest) the module — that repetition is what makes the
// before/after comparison meaningful. No feedback text per question:
// correctness is revealed together on the assessment-result card after
// every question here is answered, not one at a time.
export const assessmentQuestions: AssessmentQuestionBase[] = [
  {
    question:
      'Ada tiga level pemakaian AI di bisnis — individu, tim, organisasi. Apa yang membedakan level organisasi dari sekadar "banyak orang pakai chat AI sendiri-sendiri"?',
    options: [
      'Level organisasi cuma soal jumlah orang yang pakai, makin banyak makin tinggi levelnya',
      'Level organisasi punya kontrol akses, akun bisnis terpusat, dan alur kerja yang disengaja — bukan sekadar chat pribadi yang kebetulan banyak yang pakai',
      'Level organisasi berarti seluruh perusahaan wajib pakai AI setiap hari',
      'Tidak ada bedanya, ketiga level itu cuma istilah pemasaran',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Kenapa mencoba pasang AI ke "semua hal sekaligus" di awal biasanya gagal duluan?',
    options: [
      'Karena AI tidak bisa dipakai untuk lebih dari satu tugas',
      'Karena tanpa fokus ke satu kasus pakai yang jelas, tidak ada yang benar-benar dilatih, dicek, atau jadi kebiasaan — semuanya jadi coba-coba dangkal',
      'Karena biayanya pasti lebih mahal',
      'Karena tim akan langsung menolak dari awal',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Kenapa akun AI tingkat bisnis (organisasi) lebih penting dibanding tiap orang pakai akun AI pribadi masing-masing?',
    options: [
      'Karena akun pribadi selalu lebih mahal',
      'Karena tanpa akun tingkat bisnis, tidak ada kontrol akses terpusat atas data apa yang masuk dan siapa yang bisa lihat — bisnis kehilangan kendali dan jejak pemakaiannya',
      'Karena akun pribadi tidak bisa dipakai untuk chat',
      'Tidak ada bedanya sama sekali',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Hasil kerja AI sudah keluar dan kelihatan meyakinkan. Langkah yang benar sebelum benar-benar dipakai adalah...',
    options: [
      'Langsung dipakai, AI biasanya sudah benar',
      'Tetap diverifikasi oleh manusia dulu — hasil yang meyakinkan tidak sama dengan hasil yang benar',
      'Diabaikan sepenuhnya, AI tidak bisa dipercaya sama sekali',
      'Ditanyakan ulang ke AI yang sama sampai jawabannya sama',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Tim diam-diam menghindari alat AI yang baru diperkenalkan, meski tidak ada yang secara terbuka menolak. Kemungkinan besar akar masalahnya adalah...',
    options: [
      'Tim malas belajar hal baru',
      'Ketakutan tidak terucap bahwa AI akan menggantikan pekerjaan mereka, yang tidak pernah dijawab langsung sejak awal',
      'AI yang dipilih terlalu murah',
      'Tim tidak diberi cukup banyak alat AI sekaligus',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Alur kerja AI pertama sudah berjalan lancar selama sebulan. Apa yang paling penting dilakukan setelah itu supaya tidak diam-diam luntur?',
    options: [
      'Langsung memperluas ke lima alur kerja lain sekaligus',
      'Menetapkan pemilik evaluasi yang eksplisit dan ritme cek berkala — bukan menganggap sukses awal berarti selesai',
      'Berhenti mengecek karena sudah terbukti berhasil',
      'Menyerahkan sepenuhnya ke satu orang tanpa pemilik resmi',
    ],
    correctAnswer: 1,
  },
]
