import type { AssessmentQuestionBase } from '../../intro-outro/buildAssessmentCards'

// Shared pretest/posttest question bank for Module 2 (KPI). Same questions
// asked before (intro/pretest) and after (outro/posttest) the module — that
// repetition is what makes the before/after comparison meaningful, not a
// mistake. No feedback text per question (v2, Aug 18): correctness is
// revealed together on the assessment-result card after every question here
// is answered, not one at a time.
export const assessmentQuestions: AssessmentQuestionBase[] = [
  {
    question:
      'Kalau target akhir tahun (misalnya omzet Rp10M) sudah kelihatan bakal meleset, mana yang lebih dulu memberi peringatan — Lag Metric atau Lead Metric?',
    options: [
      'Lag Metric, karena itu angka hasil akhir',
      'Lead Metric, karena itu tindakan harian yang bisa dipantau lebih awal',
      'Sama saja, keduanya baru ketahuan di akhir bulan',
      'Tidak ada yang bisa memberi peringatan lebih awal',
    ],
    correctAnswer: 1,
  },
  {
    question: '"Omzet naik" dan "tim kelihatan sibuk" — kenapa dua hal ini bisa menipu sebagai KPI?',
    options: [
      'Karena keduanya tidak pernah benar',
      'Karena keduanya bisa terlihat bagus padahal bisnis sedang bocor di tempat lain',
      'Karena keduanya terlalu sulit diukur',
      'Karena keduanya cuma berlaku untuk bisnis besar',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Kalau target tiap divisi/individu ditentukan sendiri-sendiri tanpa nyambung ke target besar perusahaan, apa risikonya?',
    options: [
      'Tidak ada risiko, malah lebih fleksibel',
      'Tim bisa "menang" di target masing-masing, tapi perusahaan tetap tidak mencapai visinya',
      'Karyawan jadi otomatis lebih termotivasi',
      'Ini justru cara terbaik menyusun KPI',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Saat sebuah KPI "merah" (di bawah target), langkah evaluasi yang paling tepat adalah...',
    options: [
      'Langsung mencari siapa yang harus disalahkan',
      'Menganalisis akar masalah di sistem kerja dulu, baru cari solusi',
      'Menaikkan target supaya kelihatan lebih realistis',
      'Mengabaikannya sampai bulan depan',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Kenapa tiap KPI butuh satu "pemilik" (owner) yang jelas, bukan cuma ditugaskan ke tim secara umum?',
    options: [
      'Supaya ada satu nama yang bisa disalahkan kalau merah',
      'Supaya saat angkanya merah, ada satu orang yang jelas bertanggung jawab menindaklanjuti — bukan semua orang dan tidak ada orang',
      'Karena aturan perusahaan besar mengharuskan begitu',
      'Owner cuma perlu untuk KPI Output, bukan Proses atau Input',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Lead Metric Anda sudah merah minggu ini, tapi Lag Metric (hasil akhir bulan) masih kelihatan aman. Apa arti situasi ini?',
    options: [
      'Tidak perlu khawatir, tunggu saja sampai Lag Metric ikut merah baru bertindak',
      'Ini sinyal peringatan dini — saatnya bertindak sekarang, sebelum Lag Metric ikut memburuk',
      'Berarti Lead Metric-nya salah dipilih',
      'Lag Metric pasti akan selalu ikut aman kalau sudah kelewat satu bulan',
    ],
    correctAnswer: 1,
  },
]
