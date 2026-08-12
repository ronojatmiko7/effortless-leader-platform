import {
  CalendarClock,
  Hourglass,
  ClipboardSignature,
  NotebookPen,
  RefreshCw,
  Footprints,
  Repeat,
  FileCheck2,
  Rocket,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter8Cards: Card[] = [
  {
    id: 'c8-card-1',
    type: 'info',
    icon: CalendarClock,
    eyebrow: 'Bab 8 · Rencana Aksi & Ritme Berkelanjutan',
    title: 'Anda Sudah Tandai Prioritasnya. Sekarang Apa?',
    body: [
      'Di Bab 7, Anda sudah menandai satu KPI sebagai yang paling berisiko merah duluan, lengkap dengan skor keyakinan Anda. Tapi tahu risikonya doang belum menyelesaikan apa-apa.',
      'Bab ini yang mengubah itu jadi rencana aksi konkret, ritme review buat seluruh sistem KPI Anda, dan laporan lengkap yang bisa Anda bawa pulang.',
    ],
  },
  {
    id: 'c8-card-2',
    type: 'info',
    icon: Hourglass,
    eyebrow: 'Rencana Tanpa Jadwal Itu Cuma Harapan',
    title: 'Ingat Bab 6? Sama Persis, Cuma Naik Level',
    body: [
      'Ingat Bab 6: KPI yang nggak pernah dipantau itu sama percumanya dengan metrik basa-basi dari Bab 1. Rencana aksi yang nggak punya jadwal itu jebakan yang sama, cuma naik satu level.',
      "'Nanti saya benahi' itu bukan rencana. Itu harapan yang dibungkus kalimat rapi.",
    ],
  },
  {
    id: 'c8-card-3',
    type: 'info',
    icon: ClipboardSignature,
    eyebrow: 'Struktur Rencana Aksi',
    title: 'Apa, Siapa, Kapan — Bukan Kalimat Niat Baik',
    body: [
      'Rencana aksi yang beneran jalan cuma butuh 3 hal: Apa (tindakan konkret dan spesifik), Siapa (siapa yang bertanggung jawab), Kapan (tenggat waktu yang jelas).',
      "'Perbaiki checklist QC biar lebih dipatuhi' itu kedengaran niat baik, tapi nggak bisa dieksekusi — nggak ada yang tahu harus mulai dari mana, siapa yang pegang, atau kapan harus selesai.",
      "Bandingkan: 'Bikin ulang formulir checklist QC yang menjelaskan alasan tiap poin, ditulis supervisor produksi, selesai Jumat ini.' Ini bisa langsung dikerjakan, dan bisa dicek udah selesai atau belum.",
    ],
  },
  {
    id: 'c8-card-4',
    type: 'multiple-choice',
    question:
      'Mana dari dua rencana aksi ini yang lebih layak dieksekusi, buat KPI Lead Metric checklist kedatangan barang yang merah?',
    options: [
      'Tingkatkan kesadaran staf soal pentingnya checklist kedatangan barang',
      'Tempel poster alasan tiap poin checklist di area terima barang, ditulis kepala gudang, selesai besok pagi',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Opsi ini punya ketiganya: tindakan konkret, penanggung jawab, dan tenggat. Opsi satunya cuma niat baik tanpa arah.',
    errorFeedback:
      'Coba lagi. Opsi yang benar punya tindakan spesifik, penanggung jawab yang jelas, dan tenggat waktu — bukan sekadar kalimat niat baik.',
  },
  {
    id: 'c8-card-5',
    type: 'multiple-choice',
    question:
      "Sekarang giliran Anda menilai rencana aksi soal Lead Metric 'pesanan di-pack H-1' yang belum kena target. Mana yang lebih layak dieksekusi?",
    options: [
      'Susun ulang jadwal shift packing supaya semua pesanan besok selesai di-pack sore ini, dikerjakan supervisor gudang, mulai Senin depan',
      'Dorong tim gudang supaya lebih gercep packing',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Ada tindakan konkret, penanggung jawab, dan kapan mulainya. Yang satunya cuma arah, bukan langkah.',
    errorFeedback:
      'Coba lagi. Cari yang punya tindakan spesifik, penanggung jawab, dan waktu yang jelas — bukan kalimat umum yang kedengaran benar tapi nggak bisa langsung dikerjakan.',
  },
  {
    id: 'c8-card-6',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Rencana Anda Sendiri',
    title: 'Giliran Anda: Bikin Rencana untuk KPI Prioritas Anda',
    body: [
      'Ingat KPI yang Anda tandai paling berisiko merah duluan di Bab 7? Sekarang buatkan rencana aksinya — Apa, Siapa, Kapan.',
      'Jangan tulis versi niat baik. Tulis versi yang bisa langsung dicek: sudah dikerjakan atau belum.',
    ],
  },
  {
    id: 'c8-card-7',
    type: 'reflection',
    eyebrow: 'Entri Kesembilan · Buku Kerja KPI Anda',
    prompt: 'Buat rencana aksi untuk KPI prioritas yang Anda tandai di Bab 7.',
    fields: [
      {
        id: 'apa',
        label: 'Apa — tindakan konkret apa yang akan dilakukan?',
        placeholder: 'Contoh: Bikin ulang formulir checklist QC yang menjelaskan alasan tiap poin',
      },
      {
        id: 'siapa',
        label: 'Siapa — siapa yang bertanggung jawab?',
        placeholder: 'Contoh: Supervisor produksi, atau saya sendiri',
      },
      {
        id: 'kapan',
        label: 'Kapan — tenggat waktunya kapan?',
        placeholder: 'Contoh: Selesai Jumat ini',
      },
    ],
  },
  {
    id: 'c8-card-8',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Poin Baru · Bukan Cuma Diagnosis Saat Merah',
    title: 'Sistem KPI-nya Sendiri Perlu Ditinjau Ulang, Bukan Cuma Angkanya',
    body: [
      'Bab 7 itu soal mendiagnosis SATU angka yang lagi merah. Ini beda: ini soal mundur sebentar, dan nanya apakah keenam KPI yang Anda rancang di Bab 2-5 itu masih yang paling relevan.',
      'Target yang dulu ambisius bisa jadi kegapai terus dan perlu dinaikkan. KPI yang dulu relevan bisa berhenti berguna dan perlu diganti. Titik buta baru bisa muncul begitu bisnis Anda berubah — staf baru, produk baru, cara jualan baru.',
      'Kalau Anda cuma diagnosis waktu merah dan nggak pernah mundur buat lihat gambar besarnya, sistem KPI Anda bisa diam-diam jadi usang, sekalipun tiap angkanya kelihatan hijau.',
    ],
  },
  {
    id: 'c8-card-9',
    type: 'info',
    icon: Footprints,
    eyebrow: 'Baru · Boleh Bertahap',
    title: 'Nggak Perlu Jalankan Ketiga Area Sekaligus Mulai Senin',
    body: [
      'Setelah 8 bab membangun sistem KPI 3 area, gampang ngerasa harus langsung instrumentasi Output, Proses, dan Input sekaligus mulai Senin depan. Jangan.',
      'Mulai dari area yang paling udah Anda kuasai — biasanya Output, karena itu yang paling dalam dibahas di Bab 2-4. Bikin ritmenya jalan dulu di situ, baru tambah Proses dan Input di siklus review berikutnya kalau belum jalan.',
      'Ini bukan usaha yang lebih kecil. Ini justru cara supaya kebiasaannya beneran selamat waktu ketemu minggu yang sibuk.',
    ],
  },
  {
    id: 'c8-card-10',
    type: 'info',
    icon: Repeat,
    eyebrow: 'Bangun Ritmenya',
    title: 'Bulanan untuk yang Cepat Berubah, Kuartalan untuk yang Menyeluruh',
    body: [
      'Nggak semua bagian sistem KPI perlu ditinjau dengan frekuensi yang sama. Area yang cepat berubah cocok ditinjau bulanan — apakah target masih relevan, apakah Lead Metric-nya masih menggerakkan hasil yang sama.',
      'Tinjauan menyeluruh ke ketiga area sekaligus — Output, Proses, Input, seperti yang Anda rancang di Bab 2-5 — cukup kuartalan. Yang penting bukan seberapa sering, tapi seberapa rutin.',
    ],
  },
  {
    id: 'c8-card-11',
    type: 'yes-no',
    question: 'Untuk sistem KPI Anda sekarang, ritme review mana yang paling masuk akal untuk dimulai?',
    yesLabel: 'Review Bulanan',
    noLabel: 'Review Kuartalan',
    feedbackYes:
      'Bagus. Cocok kalau bisnis Anda sedang banyak berubah dan Anda butuh sinyal lebih cepat soal relevansi KPI-nya.',
    feedbackNo:
      'Bagus juga. Cocok kalau Anda mau mulai dari ritme yang lebih ringan dulu, asal benar-benar konsisten dijalankan.',
  },
  {
    id: 'c8-card-12',
    type: 'reflection',
    eyebrow: 'Entri Kesepuluh · Buku Kerja KPI Anda',
    prompt:
      "Tentukan tanggal review berikutnya. Bukan 'nanti', tapi tanggal yang benar-benar bisa Anda tandai di kalender.",
    fields: [
      {
        id: 'next-review',
        label: 'Kapan tanggal review berikutnya, dan apa yang akan Anda cek?',
        placeholder: 'Contoh: 1 September, cek lagi apakah target closing masih relevan dan progres checklist QC',
      },
    ],
  },
  {
    id: 'c8-card-13',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Waktunya Rangkum Semuanya',
    title: 'Semua yang Sudah Anda Kerjakan, Kita Kumpulkan Jadi Satu',
    body: [
      'Dari Bab 1 sampai sekarang, Anda sudah menulis angka yang dulu dibanggakan, target, KPI Output/Proses/Input lengkap dengan Lag dan Lead-nya, pemilik tiap KPI, ritme pemantauan, dua penilaian diagnosis, rencana aksi, dan jadwal review berikutnya.',
      'Semua itu kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai — bukan cuma tersimpan di aplikasi ini.',
    ],
  },
  {
    id: 'c8-card-14',
    type: 'report',
    eyebrow: 'Laporan KPI Anda',
    title: 'Laporan Cascading KPI Anda',
    intro: [
      'Ini rangkuman perjalanan KPI Anda sejak Bab 1. Simpan atau cetak untuk jadi acuan waktu Anda benar-benar menjalankan rencana dan ritme review ini.',
    ],
    sections: [
      {
        heading: 'Angka yang Dulu Anda Banggakan',
        items: [
          { label: 'Angka yang dulu dibanggakan (Bab 1)', cardId: 'c1-card-13', fieldId: 'metric' },
          { label: 'Kenapa diragukan (Bab 1)', cardId: 'c1-card-13', fieldId: 'doubt' },
        ],
      },
      {
        heading: 'Target Anda',
        items: [
          { label: 'Target tahunan/bulanan (Bab 2)', cardId: 'c2-card-16', fieldId: 'target-number' },
          { label: 'Kenapa target ini (Bab 2)', cardId: 'c2-card-16', fieldId: 'target-why' },
        ],
      },
      {
        heading: 'KPI Output Anda',
        items: [
          { label: 'Lag Metric (Bab 3)', cardId: 'c3-card-13', fieldId: 'lag-metric' },
          { label: 'Jeda waktu Lag (Bab 3)', cardId: 'c3-card-13', fieldId: 'lag-time' },
          { label: 'Lead Metric (Bab 4)', cardId: 'c4-card-18', fieldId: 'lead-metric' },
          { label: 'Target harian Lead (Bab 4)', cardId: 'c4-card-18', fieldId: 'lead-target' },
        ],
      },
      {
        heading: 'KPI Proses Anda',
        items: [
          { label: 'Lag Metric Proses (Bab 5)', cardId: 'c5-card-10', fieldId: 'proses-lag' },
          { label: 'Lead Metric Proses (Bab 5)', cardId: 'c5-card-10', fieldId: 'proses-lead' },
        ],
      },
      {
        heading: 'KPI Input Anda',
        items: [
          { label: 'Lag Metric Input (Bab 5)', cardId: 'c5-card-13', fieldId: 'input-lag' },
          { label: 'Lead Metric Input (Bab 5)', cardId: 'c5-card-13', fieldId: 'input-lead' },
        ],
      },
      {
        heading: 'Pemilik Tiap KPI',
        items: [
          { label: 'Pemilik Output (Bab 5)', cardId: 'c5-card-16', fieldId: 'owner-output' },
          { label: 'Pemilik Proses (Bab 5)', cardId: 'c5-card-16', fieldId: 'owner-proses' },
          { label: 'Pemilik Input (Bab 5)', cardId: 'c5-card-16', fieldId: 'owner-input' },
        ],
      },
      {
        heading: 'Ritme Pemantauan',
        items: [
          { label: 'Tool yang dipakai (Bab 6)', cardId: 'c6-card-15', fieldId: 'tool' },
          { label: 'Jadwal cek Lead (Bab 6)', cardId: 'c6-card-15', fieldId: 'lead-schedule' },
          { label: 'Jadwal cek Lag (Bab 6)', cardId: 'c6-card-15', fieldId: 'lag-schedule' },
        ],
      },
      {
        heading: 'Kesiapan Diagnosis',
        items: [
          { label: 'Skor kesiapan (Bab 7)', cardId: 'chapter7-diagnosis-readiness', fieldId: 'score' },
          {
            label: 'Dugaan akar & pertanyaan (Bab 7)',
            cardId: 'chapter7-diagnosis-readiness',
            fieldId: 'justification',
          },
        ],
      },
      {
        heading: 'Prioritas Risiko',
        items: [
          { label: 'Skor keyakinan (Bab 7)', cardId: 'chapter7-priority-kpi', fieldId: 'score' },
          { label: 'KPI paling berisiko (Bab 7)', cardId: 'chapter7-priority-kpi', fieldId: 'justification' },
        ],
      },
      {
        heading: 'Rencana Aksi',
        items: [
          { label: 'Apa', cardId: 'c8-card-7', fieldId: 'apa' },
          { label: 'Siapa', cardId: 'c8-card-7', fieldId: 'siapa' },
          { label: 'Kapan', cardId: 'c8-card-7', fieldId: 'kapan' },
        ],
      },
      {
        heading: 'Jadwal Review Berikutnya',
        items: [
          { label: 'Ritme yang dipilih', cardId: 'c8-card-11', fieldId: 'selectionLabel' },
          { label: 'Review berikutnya', cardId: 'c8-card-12', fieldId: 'next-review' },
        ],
      },
    ],
    downloadButtonText: 'Cetak / Simpan Laporan Ini',
  },
  {
    id: 'c8-card-15',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Selesai Modul 2',
    title: 'Anda Baru Saja Membangun Sesuatu yang Nyata',
    body: [
      'Ini bukan cuma 8 bab yang Anda baca. Anda baru saja membangun sistem KPI lengkap untuk bisnis Anda sendiri — dari angka yang dulu Anda banggakan tanpa alasan jelas, sampai rencana aksi yang bisa langsung dikerjakan besok.',
      "Kebanyakan bos berhenti di 'saya tahu KPI itu penting'. Anda sudah selangkah lebih jauh: Anda tahu KPI mana yang benar, siapa yang pegang, kapan dicek, dan apa yang harus dilakukan kalau merah.",
      'Sekarang tinggal satu hal: benar-benar jalankan ritmenya, dan temui lagi di tanggal review yang baru Anda tandai.',
    ],
  },
]
