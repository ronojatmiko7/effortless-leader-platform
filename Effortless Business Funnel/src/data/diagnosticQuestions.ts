import type { DiagnosticQuestion } from '../types/diagnostic'

// Aug 2026 rewrite: simplified from the original 4-option BARS scale
// (organizational_prediagnostic_tool_id.html) to 2 plain-language options
// per question, reviewed and finalized word-by-word with Bro Rono.
// What each question measures (section/area) is unchanged from the
// original tool. Option A always maps to score 4 (kuat/beres), Option B
// always maps to score 1 (lemah) — same convention scoring.ts's
// `score <= 2` red-flag threshold already used, so scoring.ts and the
// service/module mapping did not need to change.
export const diagnosticQuestions: DiagnosticQuestion[] = [
  // OUTPUT
  {
    id: 1,
    section: 'Output',
    area: 'Ketersediaan KPI',
    question: 'Apakah karyawan Anda punya KPI yang jelas?',
    options: [
      { label: 'Iya, semua tim punya KPI yang jelas.', score: 4 },
      { label: 'Tidak ada KPI yang jelas.', score: 1 },
    ],
  },
  {
    id: 2,
    section: 'Output',
    area: 'Keselarasan & Kualitas KPI',
    question:
      'Selain KPI hasil akhir (misal omzet), apakah tim juga dipantau dari KPI aktivitas harian yang mendorong hasil itu?',
    options: [
      { label: 'Iya, kami pantau keduanya — KPI hasil dan KPI proses.', score: 4 },
      { label: 'Enggak, kami cuma lihat hasil akhirnya. Atau bahkan tidak dipantau sama sekali.', score: 1 },
    ],
  },
  {
    id: 3,
    section: 'Output',
    area: 'Pemantauan & Tata Kelola',
    question: 'Apakah Anda rutin mengecek performa tim, atau baru dicek pas ada masalah besar?',
    options: [
      { label: 'Rutin, ada jadwalnya.', score: 4 },
      { label: 'Baru dicek kalau lagi ada masalah.', score: 1 },
    ],
  },
  // PROSES
  {
    id: 4,
    section: 'Proses',
    area: 'Hierarki Proses',
    question:
      'Apakah cara kerja penting di bisnis Anda sudah tertulis jadi SOP, atau masih "nyantol di kepala" orang tertentu?',
    options: [
      { label: 'Sudah tertulis rapi.', score: 4 },
      { label: 'Masih di kepala beberapa orang saja, belum tertulis.', score: 1 },
    ],
  },
  {
    id: 5,
    section: 'Proses',
    area: 'Kepatuhan & Kegunaan SOP',
    question:
      'Kalau SOP-nya sudah ada, apakah karyawan beneran pakai itu sehari-hari, atau tidak diikuti sesuai SOP?',
    options: [
      { label: 'Beneran dipakai dan diikuti.', score: 4 },
      { label: 'Cuma dokumen, jarang dibuka.', score: 1 },
    ],
  },
  {
    id: 6,
    section: 'Proses',
    area: 'Efisiensi Proses',
    question: 'Alur kerja antar divisi, apakah jalannya lancar atau sering macet/nunggu approval lama?',
    options: [
      { label: 'Lancar, jarang macet.', score: 4 },
      { label: 'Sering macet atau nunggu lama.', score: 1 },
    ],
  },
  {
    id: 7,
    section: 'Proses',
    area: 'Penetapan Tujuan (PMS)',
    question:
      'Apakah target kerja tim dibicarakan bareng di awal periode, atau cuma dikasih dari atas tanpa diskusi?',
    options: [
      { label: 'Dibicarakan bareng di awal.', score: 4 },
      { label: 'Cuma dikasih dari atas.', score: 1 },
    ],
  },
  {
    id: 8,
    section: 'Proses',
    area: 'Pemantauan & Coaching (PMS)',
    question:
      'Apakah manajer di tim Anda rutin ngobrol 1-on-1 soal kinerja, atau feedback cuma setahun sekali (atau enggak pernah)?',
    options: [
      { label: 'Rutin, ada sesi 1-on-1.', score: 4 },
      { label: 'Jarang atau cuma setahun sekali.', score: 1 },
    ],
  },
  {
    id: 9,
    section: 'Proses',
    area: 'Pengembangan & Tindakan Korektif',
    question:
      'Kalau ada karyawan yang kerjanya kurang oke, apakah dia dibimbing dulu, atau langsung kena tegur/keluar tanpa proses?',
    options: [
      { label: 'Dibimbing/dikasih rencana perbaikan dulu.', score: 4 },
      { label: 'Langsung ditegur keras atau dikeluarkan.', score: 1 },
    ],
  },
  {
    id: 10,
    section: 'Proses',
    area: 'Sistem Manajemen Mutu',
    question:
      'Apakah ada pengecekan kualitas sebelum barang/jasa sampai ke pelanggan, atau kesalahan baru ketahuan setelah pelanggan komplain?',
    options: [
      { label: 'Ada pengecekan QA/QC sebelum sampai ke pelanggan.', score: 4 },
      { label: 'Baru ketahuan pas pelanggan komplain.', score: 1 },
    ],
  },
  // INPUT
  {
    id: 11,
    section: 'Input',
    area: 'Kompetensi & Profil Jabatan',
    question: 'Apakah tiap posisi punya standar kompetensi yang jelas, bukan cuma daftar tugas?',
    options: [
      { label: 'Jelas, ada standar kompetensinya.', score: 4 },
      { label: 'Belum, baru sebatas daftar tugas/jobdes.', score: 1 },
    ],
  },
  {
    id: 12,
    section: 'Input',
    area: 'Rekrutmen & Asesmen',
    question:
      'Saat merekrut karyawan baru, apakah ada tahapan wawancara yang jelas, atau lebih ke feeling aja pas ngobrol?',
    options: [
      { label: 'Ada tahapan wawancara yang jelas.', score: 4 },
      { label: 'Lebih ke feeling aja pas ngobrol.', score: 1 },
    ],
  },
  {
    id: 13,
    section: 'Input',
    area: 'Sumber Daya & Alat Operasional',
    question:
      'Apakah karyawan Anda punya alat kerja (laptop, software, ruang kerja, dll) yang lengkap dan jarang bermasalah?',
    options: [
      { label: 'Lengkap dan jarang bermasalah.', score: 4 },
      { label: 'Sering kurang atau bermasalah.', score: 1 },
    ],
  },
]
