import {
  CalendarClock,
  ClipboardSignature,
  NotebookPen,
  RefreshCw,
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
    eyebrow: 'Bab 8 · Rencana Aksi & Ritme Audit Berkelanjutan',
    title: 'Anda Sudah Tahu Prioritasnya. Sekarang Apa?',
    body: [
      'Di Bab 7, Anda sudah menandai satu temuan sebagai prioritas utama, lengkap dengan skornya. Tapi tahu prioritas saja belum menyelesaikan apa-apa.',
      "Ingat Bab 1? Niat baik tanpa jadwal yang jelas itu jebakan yang sama dengan mengelola pakai insting — cuma dibungkus lebih rapi. 'Nanti saya benahi' itu bukan rencana, itu harapan.",
    ],
  },
  {
    id: 'c8-card-2',
    type: 'info',
    icon: ClipboardSignature,
    eyebrow: 'Struktur Rencana Aksi',
    title: 'Apa, Siapa, Kapan — Bukan Kalimat yang Kedengaran Niat Baik',
    body: [
      'Rencana aksi yang beneran jalan cuma butuh 3 hal: Apa (tindakan konkret dan spesifik), Siapa (siapa yang bertanggung jawab), dan Kapan (tenggat waktu yang jelas).',
      "'Perbaiki proses onboarding' itu kedengaran niat baik, tapi tidak bisa dieksekusi — tidak ada yang tahu harus mulai dari mana, siapa yang pegang, atau kapan harus selesai.",
      "Bandingkan: 'Buat SOP onboarding 1 halaman, ditulis HR, selesai akhir bulan ini.' Ini bisa langsung dikerjakan, dan bisa dicek apakah sudah selesai atau belum.",
    ],
  },
  {
    id: 'c8-card-3',
    type: 'multiple-choice',
    question: 'Mana dari dua rencana aksi ini yang lebih layak dieksekusi?',
    options: [
      'Tingkatkan kualitas layanan customer service',
      'Buat 5 template jawaban WA untuk keluhan tersering, ditulis supervisor CS, selesai Jumat ini',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Opsi ini punya ketiganya: tindakan konkret, penanggung jawab, dan tenggat. Opsi satunya cuma niat baik tanpa arah.',
    errorFeedback:
      'Coba lagi. Opsi yang benar punya tindakan spesifik, penanggung jawab yang jelas, dan tenggat waktu — bukan sekadar kalimat niat baik.',
  },
  {
    id: 'c8-card-4',
    type: 'multiple-choice',
    question:
      'Sekarang giliran Anda menilai rencana aksi soal titik bocor di gudang. Mana yang lebih layak dieksekusi?',
    options: [
      'Benahi sistem gudang supaya lebih rapi',
      'Pasang label rak dan buat checklist stok harian, dikerjakan kepala gudang, mulai Senin depan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ada tindakan konkret, penanggung jawab, dan kapan mulainya. Yang satunya cuma arah, bukan langkah.',
    errorFeedback:
      'Coba lagi. Cari yang punya tindakan spesifik, penanggung jawab, dan waktu yang jelas — bukan kalimat umum yang kedengaran benar tapi tidak bisa langsung dikerjakan.',
  },
  {
    id: 'c8-card-5',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Rencana Anda Sendiri',
    title: 'Giliran Anda: Bikin Rencana untuk Prioritas Anda',
    body: [
      'Ingat temuan yang Anda tandai sebagai prioritas utama di Bab 7? Sekarang buatkan rencana aksinya — Apa, Siapa, Kapan.',
      'Jangan tulis versi niat baik. Tulis versi yang bisa langsung dicek: sudah dikerjakan atau belum.',
    ],
  },
  {
    id: 'c8-card-6',
    type: 'reflection',
    eyebrow: 'Entri Ketujuh · Buku Kerja Audit Anda',
    prompt: 'Buat rencana aksi untuk temuan prioritas yang Anda tandai di Bab 7.',
    fields: [
      {
        id: 'apa',
        label: 'Apa — tindakan konkret apa yang akan dilakukan?',
        placeholder: 'Contoh: Buat SOP onboarding 1 halaman',
      },
      {
        id: 'siapa',
        label: 'Siapa — siapa yang bertanggung jawab?',
        placeholder: 'Contoh: HR, atau saya sendiri',
      },
      {
        id: 'kapan',
        label: 'Kapan — tenggat waktunya kapan?',
        placeholder: 'Contoh: Selesai akhir bulan ini',
      },
    ],
  },
  {
    id: 'c8-card-7',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Poin Paling Penting di Bab Ini',
    title: 'Audit Itu Bukan Acara Sekali Jalan',
    body: [
      'Anggap saja hari ini Anda benar-benar membenahi red flag yang tadi ditemukan. Bagus. Tapi bisnis Anda terus berubah — karyawan baru masuk, karyawan lama resign, pelanggan berubah kebiasaan, supplier ganti kebijakan.',
      'Artinya, kondisi yang sehat hari ini bisa saja jadi red flag lagi tiga bulan ke depan, tanpa Anda sadari — kecuali Anda cek lagi secara rutin.',
      "Garis finish dari pelatihan ini bukan 'Anda sudah selesai audit'. Garis finish-nya: Anda sekarang punya kebiasaan mengaudit.",
    ],
  },
  {
    id: 'c8-card-8',
    type: 'info',
    icon: Repeat,
    eyebrow: 'Bangun Ritmenya',
    title: 'Bulanan untuk yang Cepat Berubah, Kuartalan untuk yang Menyeluruh',
    body: [
      'Tidak semua bagian bisnis perlu dicek dengan frekuensi yang sama. Area yang cepat berubah — angka penjualan, komplain, stok — cocok dicek bulanan.',
      'Audit menyeluruh ke semua lapisan — Output, Proses, Input sekaligus, seperti yang baru Anda lakukan di Bab 3-5 — cukup kuartalan. Yang penting bukan seberapa sering, tapi seberapa rutin.',
    ],
  },
  {
    id: 'c8-card-9',
    type: 'yes-no',
    question: 'Untuk bisnis Anda sekarang, ritme mana yang paling masuk akal untuk dimulai?',
    yesLabel: 'Audit Bulanan',
    noLabel: 'Audit Kuartalan',
    feedbackYes:
      'Bagus. Cocok kalau bisnis Anda sedang banyak berubah dan Anda butuh sinyal lebih cepat.',
    feedbackNo:
      'Bagus juga. Cocok kalau Anda mau mulai dari ritme yang lebih ringan dulu, asal benar-benar konsisten dijalankan.',
  },
  {
    id: 'c8-card-10',
    type: 'reflection',
    eyebrow: 'Entri Kedelapan · Buku Kerja Audit Anda',
    prompt:
      "Tentukan tanggal audit berikutnya. Bukan 'nanti', tapi tanggal yang benar-benar bisa Anda tandai di kalender.",
    fields: [
      {
        id: 'nextDate',
        label: 'Kapan tanggal audit berikutnya, dan apa yang akan Anda cek?',
        placeholder: 'Contoh: 1 September, cek lagi angka komplain dan progres SOP onboarding',
      },
    ],
  },
  {
    id: 'c8-card-11',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Waktunya Rangkum Semuanya',
    title: 'Semua yang Sudah Anda Kerjakan, Kita Kumpulkan Jadi Satu',
    body: [
      'Dari Bab 1 sampai sekarang, Anda sudah menulis gejala, titik bocor, sumber daya yang dicurigai, rencana verifikasi, dua penilaian temuan, rencana aksi, dan jadwal audit berikutnya.',
      'Semua itu kita kumpulkan jadi satu laporan yang bisa Anda unduh dan pakai — bukan cuma tersimpan di aplikasi ini.',
    ],
  },
  {
    id: 'c8-card-12',
    type: 'report',
    eyebrow: 'Laporan Audit Anda',
    title: 'Laporan Audit Operasional Anda',
    intro: [
      'Ini rangkuman perjalanan audit Anda sejak Bab 1. Simpan atau cetak untuk jadi acuan waktu Anda benar-benar menjalankan rencana aksi ini.',
    ],
    sections: [
      {
        heading: 'Titik Awal',
        items: [{ label: 'Gejala yang ditemukan (Bab 2)', cardId: 'c2-card-16', fieldId: 'symptom' }],
      },
      {
        heading: 'Proses & Titik Bocor',
        items: [
          { label: 'Titik bocor yang diduga (Bab 4)', cardId: 'c4-card-14', fieldId: 'bottleneck' },
        ],
      },
      {
        heading: 'Akar Masalah',
        items: [
          { label: 'Sumber daya yang dicurigai (Bab 5)', cardId: 'c5-card-15', fieldId: 'resource' },
        ],
      },
      {
        heading: 'Rencana Verifikasi',
        items: [
          { label: 'Dokumen yang akan dicek (Bab 6)', cardId: 'c6-card-14', fieldId: 'document' },
          {
            label: 'Pertanyaan netral yang akan diajukan (Bab 6)',
            cardId: 'c6-card-14',
            fieldId: 'question',
          },
        ],
      },
      {
        heading: 'Temuan Terprioritas & Skor',
        items: [
          { label: 'Skor rantai temuan (Bab 7)', cardId: 'chapter7-chain-score', fieldId: 'score' },
          {
            label: 'Alasan skor tersebut',
            cardId: 'chapter7-chain-score',
            fieldId: 'justification',
          },
          {
            label: 'Skor urgensi prioritas utama (Bab 7)',
            cardId: 'chapter7-priority-pick',
            fieldId: 'score',
          },
          {
            label: 'Temuan yang diprioritaskan',
            cardId: 'chapter7-priority-pick',
            fieldId: 'justification',
          },
        ],
      },
      {
        heading: 'Rencana Aksi',
        items: [
          { label: 'Apa', cardId: 'c8-card-6', fieldId: 'apa' },
          { label: 'Siapa', cardId: 'c8-card-6', fieldId: 'siapa' },
          { label: 'Kapan', cardId: 'c8-card-6', fieldId: 'kapan' },
        ],
      },
      {
        heading: 'Jadwal Audit Berikutnya',
        items: [
          { label: 'Ritme audit yang dipilih', cardId: 'c8-card-9', fieldId: 'selectionLabel' },
          { label: 'Audit berikutnya', cardId: 'c8-card-10', fieldId: 'nextDate' },
        ],
      },
    ],
    downloadButtonText: 'Cetak / Simpan Laporan Ini',
  },
  {
    id: 'c8-card-13',
    type: 'review-request',
    eyebrow: 'Sebelum Anda Pergi',
    title: 'Boleh Minta Waktu Sebentar?',
    sentimentPrompt: 'Gimana rasanya baru saja menyelesaikan modul ini?',
    positiveLabel: 'Senang, worth it!',
    negativeLabel: 'Kurang greget',
    testimonialPromptLabel: 'Mau cerita sedikit soal pengalaman Anda?',
    testimonialPlaceholder:
      'Contoh: Bagian yang paling kena buat saya adalah waktu bahas 5 Whys di Bab 7...',
    privateFeedbackPrompt: 'Boleh cerita apa yang bikin kurang greget?',
    privateFeedbackPlaceholder:
      'Jujur aja — bagian mana yang terasa membosankan, membingungkan, atau kurang berguna?',
    thanksMessagePositive: 'Makasih banyak sudah luangin waktu cerita. Ini bantu kami banget.',
    thanksMessageNegative: 'Makasih sudah jujur. Ini yang bikin modul berikutnya lebih baik lagi.',
  },
  {
    id: 'c8-card-14',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Selesai Modul 1',
    title: 'Anda Baru Saja Membangun Sesuatu yang Nyata',
    body: [
      'Ini bukan cuma 8 bab yang Anda baca. Anda baru saja membangun rantai audit lengkap dari bisnis Anda sendiri — dari gejala sampai rencana aksi yang bisa langsung dikerjakan.',
      "Kebanyakan orang berhenti di 'saya tahu masalahnya'. Anda sudah selangkah lebih jauh: Anda tahu masalahnya, tahu akarnya, dan tahu apa yang harus dilakukan besok.",
      'Sekarang tinggal satu hal: benar-benar jalankan rencananya, dan temui lagi di tanggal audit yang baru Anda tandai.',
    ],
    cta: { label: 'Kembali ke Ringkasan Modul', href: '#home' },
  },
]
