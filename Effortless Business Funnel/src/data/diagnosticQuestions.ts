import type { DiagnosticQuestion } from '../types/diagnostic'

// Sep 2026: reverted from the Aug 2026 2-option simplification back to a
// 4-option scale. The 2-option cut was aimed at reducing friction for cold
// Meta ad traffic (see project memory: meta-ads-asesmen-campaign). Now that
// the "13 Titik Kebocoran" ebook is the primary campaign and this quiz is
// the bonus that follows it (warm, already-invested readers, not a
// standalone cold-traffic funnel), the extra granularity is worth it again.
// Options stay in the plain-language voice from the Aug 27 rewrite (domain
// terms like KPI/SOP/QA-QC kept, sentence structure kept simple) rather
// than reverting to the original jargon-heavy BARS anchors
// (organizational_prediagnostic_tool_id.html). What each question measures
// (section/area) is unchanged. Option order is best-to-worst: score 4, 3,
// 2, 1 — same convention scoring.ts's `score <= 2` red-flag threshold
// already used, so scoring.ts and the service/module mapping did not need
// to change.
export const diagnosticQuestions: DiagnosticQuestion[] = [
  // OUTPUT
  {
    id: 1,
    section: 'Output',
    area: 'Ketersediaan KPI',
    question: 'Apakah karyawan Anda punya KPI yang jelas?',
    options: [
      { label: 'Iya, semua tim dan tiap orang punya KPI yang jelas, dan dipantau rutin.', score: 4 },
      { label: 'Sebagian besar tim punya KPI yang jelas, tapi belum semua diturunkan sampai level individu.', score: 3 },
      { label: 'Cuma level atas atau departemen yang punya target, di bawahnya masih samar.', score: 2 },
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
      { label: 'Iya, kami pantau keduanya — KPI hasil dan KPI proses, dan keduanya selaras dengan target bisnis.', score: 4 },
      { label: 'Kami pantau keduanya, tapi masih agak terpisah, belum benar-benar selaras.', score: 3 },
      { label: 'Kami lebih banyak lihat hasil akhirnya, KPI proses jarang dipantau.', score: 2 },
      { label: 'Enggak, kami cuma lihat hasil akhirnya. Atau bahkan tidak dipantau sama sekali.', score: 1 },
    ],
  },
  {
    id: 3,
    section: 'Output',
    area: 'Pemantauan & Tata Kelola',
    question: 'Apakah Anda rutin mengecek performa tim, atau baru dicek pas ada masalah besar?',
    options: [
      { label: 'Rutin, ada jadwalnya, dan kalau ada masalah langsung dicari akar penyebabnya.', score: 4 },
      { label: 'Rutin, ada jadwalnya, tapi kalau ada masalah biasanya tidak sampai dicari akar penyebabnya.', score: 3 },
      { label: 'Ada pengecekan, tapi jadwalnya tidak konsisten.', score: 2 },
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
      { label: 'Sudah tertulis rapi dan gampang diakses semua orang yang butuh.', score: 4 },
      { label: 'Sudah tertulis, tapi baru untuk sebagian proses inti.', score: 3 },
      { label: 'Ada beberapa yang tertulis, tapi kebanyakan masih di kepala orang.', score: 2 },
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
      { label: 'Beneran dipakai dan diikuti, dan sesekali dicek kepatuhannya.', score: 4 },
      { label: 'Dipakai sebagian besar waktu, tapi belum ada pengecekan rutin.', score: 3 },
      { label: 'Ada, tapi susah diakses atau ribet, jadi jarang dipakai.', score: 2 },
      { label: 'Cuma dokumen, jarang dibuka.', score: 1 },
    ],
  },
  {
    id: 6,
    section: 'Proses',
    area: 'Efisiensi Proses',
    question: 'Alur kerja antar divisi, apakah jalannya lancar atau sering macet/nunggu approval lama?',
    options: [
      { label: 'Lancar, jarang macet, kerja sama antar divisi juga mulus.', score: 4 },
      { label: 'Lancar, tapi kadang masih ada penundaan yang bisa ditolerir.', score: 3 },
      { label: 'Sering ada friksi dan approval yang lama antar divisi.', score: 2 },
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
      { label: 'Dibicarakan bareng di awal, dan bisa disesuaikan kalau prioritas berubah.', score: 4 },
      { label: 'Dibicarakan bareng, tapi baru dilakukan di pertengahan atau telat dari jadwal.', score: 3 },
      { label: 'Target ditetapkan tahunan, tapi diskusinya minim.', score: 2 },
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
      { label: 'Rutin, ada sesi 1-on-1 bulanan, dan jadi budaya coaching berkelanjutan.', score: 4 },
      { label: 'Rutin, ada sesi 1-on-1, tapi sifatnya masih formal/administratif.', score: 3 },
      { label: 'Ada obrolan soal kinerja, tapi cuma pas ada masalah muncul.', score: 2 },
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
      { label: 'Dibimbing dan dikasih rencana perbaikan dulu, dengan peringatan dini sebelum masalah membesar.', score: 4 },
      { label: 'Dibimbing dulu, tapi baru dilakukan setelah masalahnya cukup terlihat.', score: 3 },
      { label: 'Ditegur, tapi belum ada pendampingan yang jelas.', score: 2 },
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
      { label: 'Ada pengecekan QA/QC sebelum sampai ke pelanggan, dan terus dievaluasi biar makin jarang salah.', score: 4 },
      { label: 'Ada pengecekan QA/QC, tapi baru di ujung proses aja, bukan di sepanjang alur kerja.', score: 3 },
      { label: 'Ada pengecekan sekadarnya, belum konsisten.', score: 2 },
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
      { label: 'Jelas, ada standar kompetensinya, dan dipakai buat keputusan promosi/pengembangan.', score: 4 },
      { label: 'Ada standar kompetensi, tapi baru untuk sebagian posisi kunci.', score: 3 },
      { label: 'Ada jobdes, tapi belum dikaitkan ke standar kompetensi tertentu.', score: 2 },
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
      { label: 'Ada tahapan wawancara yang jelas, plus scorecard/kriteria penilaian yang konsisten.', score: 4 },
      { label: 'Ada tahapan wawancara yang jelas, tapi penilaiannya masih agak subjektif.', score: 3 },
      { label: 'Ada wawancara, tapi tidak terstruktur, tergantung siapa yang nanya.', score: 2 },
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
      { label: 'Lengkap dan jarang bermasalah, semuanya terawat dengan baik.', score: 4 },
      { label: 'Cukup lengkap, tapi kadang ada keterlambatan pas butuh alat/software baru.', score: 3 },
      { label: 'Alatnya ada, tapi sering ketinggalan zaman atau kurang terawat.', score: 2 },
      { label: 'Sering kurang atau bermasalah.', score: 1 },
    ],
  },
]
