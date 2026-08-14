import type { DiagnosticQuestion } from '../types/diagnostic'

// Source of truth: `organizational_prediagnostic_tool_id.html` → `diagnosticData`.
// Section groupings, area labels, and all 1–4 BARS anchor text are verbatim
// from that file — do not edit anchors without updating the source tool too.
// Question wording is verbatim except the 3 entries marked with a
// `// TODO: review wording — Bro Rono` comment, lightly simplified for SME
// readability (corporate/HR jargon an SME owner likely won't know). What
// each question measures is unchanged in every case.
//
// One deliberate exception: Q2's "metrik lag"/"metrik lead" language was
// swapped for "KPI Hasil"/"KPI Usaha" (Bro Rono's preferred terminology,
// also applied inside Module 2 — see MODULE_2_TERMINOLOGY_UPDATE_PROMPT.md).
// This is a terminology rename, not a readability reword, so it isn't
// TODO-tagged — what the question measures and its 1–4 scoring are
// unchanged, only the labels.
export const diagnosticQuestions: DiagnosticQuestion[] = [
  // OUTPUT
  {
    id: 1,
    section: 'Output',
    area: 'Ketersediaan KPI',
    // TODO: review wording — Bro Rono
    question:
      'Apakah ada KPI (target angka) yang jelas dan terukur, mulai dari level perusahaan sampai ke level tim dan individu karyawan?',
    anchors: [
      '1 = Sama sekali tidak ada; tujuan sepenuhnya bersifat kualitatif atau reaktif.',
      '2 = Hanya ada di tingkat korporat teratas; departemen memiliki target yang samar.',
      '3 = Terdefinisi secara konsisten di tingkat korporat dan departemen.',
      '4 = Sepenuhnya diturunkan (cascaded), dilacak secara dinamis, dan terkait langsung dengan profil jabatan.',
    ],
  },
  {
    id: 2,
    section: 'Output',
    area: 'Keselarasan & Kualitas KPI',
    question:
      'Apakah KPI operasional selaras langsung dengan tujuan strategis, menyeimbangkan KPI Hasil (metrik lag) dengan KPI Usaha (metrik lead / input proses)?',
    anchors: [
      '1 = KPI justru mendorong perilaku silo/ego sektoral dan hanya mengukur hasil akhir dan bukan proses.',
      '2 = Sebagian besar hanya KPI Usaha, dan hanya sedikit yang merupakan KPIS Hasil.',
      '3 = Kombinasi seimbang antara KPI Usaha dan KPI Hasil yang selaras dengan tujuan bisnis/departemen/unit.',
      '4 = Sudah ada Peta strategi yang sepenuhnya sinkron antara KPI Usaha dengan KPI Hasil.',
    ],
  },
  {
    id: 3,
    section: 'Output',
    area: 'Pemantauan & Tata Kelola',
    question:
      'Apakah terdapat frekuensi terstruktur untuk meninjau KPI, dan apakah deviasi kinerja ditangani dengan analisis akar masalah formal?',
    anchors: [
      '1 = Tinjauan hanya terjadi secara ad-hoc saat krisis muncul; saling menyalahkan sering terjadi.',
      '2 = Tinjauan bulanan atau kuartalan ada, tetapi kurang pemecahan masalah akar penyebab.',
      '3 = Tinjauan mingguan/bulanan rutin dengan log pelacakan tindakan standar.',
      '4 = Ritme tata kelola yang ketat dengan peringatan otomatis dan tindakan korektif loop tertutup.',
    ],
  },
  // PROSES
  {
    id: 4,
    section: 'Proses',
    area: 'Hierarki Proses',
    question:
      'Apakah organisasi memelihara arsitektur dokumentasi proses bisnis 4 tingkat (dari Peta L1 hingga Instruksi Kerja/SOP L4)?',
    anchors: [
      '1 = Tidak ada dokumentasi formal sama sekali; pengetahuan tribal dan kebiasaan pribadi berlaku.',
      '2 = Kebijakan tingkat tinggi ada di atas kertas, tetapi prosedur L3/L4 tidak ada.',
      '3 = SOP terdokumentasi tersedia untuk alur kerja operasional inti.',
      '4 = Arsitektur L1-L4 yang terpetakan sepenuhnya dan terintegrasi dalam repositori digital yang mudah diakses.',
    ],
  },
  {
    id: 5,
    section: 'Proses',
    area: 'Kepatuhan & Kegunaan SOP',
    question:
      'Apakah SOP L3/L4 jelas, terkini, mudah diakses, dan benar-benar diikuti oleh karyawan dalam operasional sehari-hari?',
    anchors: [
      '1 = SOP adalah dokumen usang yang berdebu; solusi informal mendominasi.',
      '2 = SOP ada tetapi terlalu rumit atau sulit ditemukan, sehingga adopsinya rendah.',
      '3 = SOP diikuti sebagian besar waktu dengan pengecekan supervisi sesekali.',
      '4 = Kerja standar diverifikasi secara aktif melalui pengecekan kepatuhan proses secara rutin.',
    ],
  },
  {
    id: 6,
    section: 'Proses',
    area: 'Efisiensi Proses',
    question:
      'Apakah serah terima antar departemen berjalan mulus, atau silo fungsional, persetujuan berulang, dan bottleneck justru menghambat eksekusi?',
    anchors: [
      '1 = Silo fungsional yang parah; serah terima lintas departemen sering gagal atau macet.',
      '2 = Rantai persetujuan yang lambat dan friksi yang nyata antar departemen.',
      '3 = Protokol serah terima yang jelas dengan penundaan birokrasi yang masih dapat dikelola.',
      '4 = Alur kerja yang lean dan optimal dengan kolaborasi lintas fungsi yang mulus.',
    ],
  },
  {
    id: 7,
    section: 'Proses',
    area: 'Penetapan Tujuan (PMS)',
    question:
      'Apakah tujuan kinerja individu dan tim ditetapkan secara kolaboratif dan diturunkan secara jelas di awal setiap siklus?',
    anchors: [
      '1 = Tujuan berupa mandat top-down yang diberikan tanpa konteks atau diskusi.',
      '2 = Penetapan tujuan tahunan terjadi terlambat dalam siklus dengan sedikit penyelarasan.',
      '3 = Proses penetapan tujuan yang jelas dilakukan secara kolaboratif di awal siklus.',
      '4 = Penetapan tujuan yang agile dan terkait secara dinamis dengan prioritas departemen yang terus berkembang.',
    ],
  },
  {
    id: 8,
    section: 'Proses',
    area: 'Pemantauan & Coaching (PMS)',
    question:
      'Apakah manajer melakukan sesi umpan balik kinerja 1-on-1 yang terstruktur dan rutin, alih-alih hanya mengandalkan tinjauan tahunan?',
    anchors: [
      '1 = Tidak ada check-in rutin; kinerja hanya dibahas saat tinjauan tahunan.',
      '2 = Check-in informal terjadi sesekali saat masalah muncul.',
      '3 = Sesi umpan balik 1-on-1 bulanan yang terstruktur menjadi praktik standar.',
      '4 = Budaya coaching berkelanjutan dengan umpan balik proaktif dan dialog pengembangan.',
    ],
  },
  {
    id: 9,
    section: 'Proses',
    area: 'Pengembangan & Tindakan Korektif',
    // TODO: review wording — Bro Rono
    question:
      'Kalau ada karyawan yang kinerjanya di bawah standar, apakah ditangani lewat coaching atau rencana perbaikan dulu — sebelum langsung dinilai jelek di evaluasi tahunan?',
    anchors: [
      '1 = Underperformance diabaikan hingga terjadi pemutusan mendadak atau penilaian tahunan yang mengejutkan.',
      '2 = Ditangani secara reaktif dengan peringatan, bukan dukungan pengembangan.',
      '3 = PIP standar dan protokol coaching diterapkan bagi karyawan yang berkinerja rendah.',
      '4 = Pemicu peringatan dini dengan rencana remediasi terstruktur dan pelacakan keberhasilan.',
    ],
  },
  {
    id: 10,
    section: 'Proses',
    area: 'Sistem Manajemen Mutu',
    question:
      'Apakah terdapat Sistem Manajemen Mutu (QMS/QA/QC) yang formal dengan standar yang jelas untuk pencegahan kesalahan?',
    anchors: [
      '1 = Tidak ada standar mutu; kesalahan baru terungkap secara reaktif oleh pelanggan.',
      '2 = Inspeksi QC dasar ada di akhir lini produksi, tetapi tidak ada QMS yang bersifat preventif.',
      '3 = Pengecekan mutu standar dan log QA dipelihara secara rutin.',
      '4 = QMS yang solid dengan loop audit berkelanjutan dan error-proofing (poka-yoke).',
    ],
  },
  // INPUT
  {
    id: 11,
    section: 'Input',
    area: 'Kompetensi & Profil Jabatan',
    question:
      'Apakah Deskripsi Jabatan didukung oleh Model Kompetensi yang terdefinisi (Inti, Fungsional, Kepemimpinan) yang menetapkan tingkat kemahiran yang diperlukan?',
    anchors: [
      '1 = Deskripsi jabatan berupa daftar tugas usang tanpa kerangka kompetensi.',
      '2 = Deskripsi jabatan generik ada, namun tidak terkait dengan tingkat kemahiran tertentu.',
      '3 = Model kompetensi yang terdefinisi melekat pada peran jabatan inti.',
      '4 = Kamus kompetensi yang terintegrasi penuh dan mendorong keputusan talenta.',
    ],
  },
  {
    id: 12,
    section: 'Input',
    area: 'Rekrutmen & Asesmen',
    // TODO: review wording — Bro Rono
    question:
      'Saat merekrut karyawan baru, apakah Anda pakai wawancara terstruktur berbasis kompetensi, bukan sekadar ngobrol santai lalu memutuskan berdasarkan feeling?',
    anchors: [
      '1 = Perekrutan murni berdasarkan feeling tanpa kriteria wawancara yang terstruktur.',
      '2 = Penyaringan CV dasar dengan wawancara tidak terstruktur oleh hiring manager.',
      '3 = Panduan wawancara terstruktur dan penyaringan kompetensi dasar.',
      '4 = Scorecard asesmen berbasis kompetensi yang ketat beserta proses validasinya.',
    ],
  },
  {
    id: 13,
    section: 'Input',
    area: 'Sumber Daya & Alat Operasional',
    question:
      'Apakah pekerja lini depan dan staf memiliki alat fisik, perangkat lunak, workstation, dan dukungan pengadaan yang berfungsi penuh?',
    anchors: [
      '1 = Kekurangan alat yang kronis, peralatan rusak, dan hambatan pengadaan.',
      '2 = Alat sudah memadai, tetapi sering terjadi keterlambatan pemenuhan perangkat lunak atau material.',
      '3 = Penyediaan sumber daya yang stabil dengan pemeliharaan peralatan yang andal.',
      '4 = Ekosistem sumber daya yang optimal sehingga eksekusi harian berjalan tanpa hambatan.',
    ],
  },
]
