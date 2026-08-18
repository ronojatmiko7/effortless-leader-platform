import type { AssessmentQuestionBase } from '../../intro-outro/buildAssessmentCards'

// Shared pretest/posttest question bank for Module 3 (EBR Governance). Same
// questions asked before (intro/pretest) and after (outro/posttest) the
// module — that repetition is what makes the before/after comparison
// meaningful, not a mistake. No feedback text per question (v2, Aug 18):
// correctness is revealed together on the assessment-result card after
// every question here is answered, not one at a time.
export const assessmentQuestions: AssessmentQuestionBase[] = [
  {
    question:
      'Kenapa bisnis tanpa ritme tinjauan cenderung baru sadar ada masalah setelah masalahnya membesar?',
    options: [
      'Karena timnya kurang kompeten membaca data',
      'Karena tidak ada forum terjadwal yang memantau tanda-tanda kecil sebelum jadi besar',
      'Karena masalah bisnis memang selalu datang tiba-tiba tanpa tanda',
      'Karena laporan keuangan selalu terlambat dibuat',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Tim rapat rutin tiap Senin pagi, tapi isinya cuma "aman-aman aja, Pak/Bu" tanpa ada yang dibedah lebih dalam. Apakah ini sudah termasuk ritme tinjauan (EBR) yang benar?',
    options: [
      'Ya, karena sudah rutin dan terjadwal setiap minggu',
      'Belum, karena isinya cuma laporan basa-basi tanpa pembedahan akar masalah',
      'Ya, selama semua orang wajib hadir',
      'Tidak relevan, yang penting rapatnya singkat',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Dalam arsitektur ritme EBR 4 tier, apa yang membedakan tinjauan bulanan/triwulanan dari huddle harian/tinjauan mingguan — selain frekuensinya?',
    options: [
      'Tidak ada bedanya selain siapa yang hadir',
      'Tier bawah untuk eksekusi harian, tier atas mempertanyakan apakah eksekusinya sendiri sudah mengarah ke hal yang benar',
      'Tier atas hanya untuk melaporkan angka ke investor',
      'Tier bawah wajib pakai data, tier atas cukup diskusi bebas',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Kapan sebaiknya Anda memilih Fishbone Diagram dibanding 5 Whys untuk root cause analysis?',
    options: [
      'Fishbone dipakai kalau masalahnya sederhana dan hanya satu rantai sebab-akibat',
      '5 Whys dan Fishbone selalu memberi hasil yang sama, jadi bebas pilih mana saja',
      'Fishbone dipakai kalau faktor penyebabnya kemungkinan datang dari banyak arah sekaligus, bukan satu rantai linear',
      'Keduanya hanya cocok dipakai di tinjauan triwulanan, bukan di tier lain',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Apa yang membuat sesi root cause analysis benar-benar "berujung aksi", bukan sekadar obrolan bagus yang dilupakan?',
    options: [
      'Sesi RCA harus selalu diakhiri lebih dari satu jam supaya terasa serius',
      'Semua peserta harus sepakat 100% sebelum sesi ditutup',
      'Ditutup dengan keputusan konkret yang dicatat di Log Keputusan, lengkap dengan penanggung jawab dan tenggat',
      'Notulen rapat dikirim ke semua orang lewat email setelah selesai',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Kapan sebuah masalah sebaiknya dieskalasi ke level ritme di atasnya, bukan terus dibahas ulang di tier yang sama?',
    options: [
      'Begitu ada satu orang yang tidak setuju dengan keputusan yang diambil',
      'Ketika masalahnya sudah memenuhi kriteria eskalasi yang jelas — misalnya keputusan macet, di luar wewenang tier itu, atau berulang tanpa penyelesaian — dan eskalasi itu membawa temuan RCA, bukan cuma "ada masalah"',
      'Setiap masalah wajib otomatis naik ke tier tertinggi supaya cepat selesai',
      'Tidak pernah — semua masalah harus diselesaikan tuntas di tier tempat ia pertama kali muncul',
    ],
    correctAnswer: 1,
  },
]
