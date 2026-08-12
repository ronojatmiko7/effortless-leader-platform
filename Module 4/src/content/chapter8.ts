import {
  Rocket,
  UserCheck,
  Footprints,
  TrendingUp,
  RefreshCw,
  ClipboardList,
  NotebookPen,
  FileCheck2,
  PartyPopper,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter8Cards: Card[] = [
  {
    id: 'c8-card-1',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Bab 8 · Instalasi & Laporan Lengkap',
    title: 'Rancangannya Sudah Rapi. Sekarang Gimana Biar Beneran Jalan Minggu Depan?',
    body: [
      'Di Bab 7, Anda keluar dengan rancangan ulang yang konkret: approval yang dipangkas, pemilik yang jelas, SLA yang jelas, plus instruksi kerja dan titik pencegahan kualitas dari Bab 5-6.',
      'Di atas kertas, semuanya sudah rapi. Tapi ada satu pertanyaan yang belum dijawab — yang memisahkan rancangan yang beneran berjalan dari rancangan bagus yang cuma didiamkan di folder.',
      'Pertanyaannya: siapa yang benar-benar pegang tanggung jawab menjaga proses baru ini tetap berjalan sesuai rancangan? Forum atau jadwal apa yang mengecek kalau ada yang mulai melenceng lagi ke kebiasaan lama?',
    ],
  },
  {
    id: 'c8-card-2',
    type: 'info',
    icon: UserCheck,
    eyebrow: 'Satu Level di Atas Bab 1',
    title: 'Proses Baru Tanpa Pemilik yang Eksplisit Itu Cuma Niat',
    body: [
      'Di Bab 1, Anda ngerasain sendiri mahalnya silo yang nggak ada pemiliknya. Bab ini ada satu level di atasnya: bukan soal apakah rancangan barunya bagus — itu sudah jelas dari Bab 7. Pertanyaannya sekarang: apakah ada satu orang yang eksplisit ditugaskan menjaga rancangan itu tetap berjalan, minggu demi minggu?',
      'Bahkan rancangan ulang yang paling rapi pun bisa perlahan-lahan luntur balik ke kebiasaan lama kalau nggak ada yang secara eksplisit ditugaskan menjaganya. Tim akan otomatis kembali ke cara lama yang lebih familiar begitu tekanan kerja datang, kecuali ada yang aktif menahannya.',
    ],
  },
  {
    id: 'c8-card-3',
    type: 'yes-no',
    question:
      'Jujur ke diri sendiri: rancangan ulang dari Bab 7 — sudahkah ada satu orang yang eksplisit ditugaskan memantau apakah proses barunya beneran dijalankan, bukan cuma "ya nanti pasti jalan sendiri"?',
    yesLabel: 'Sudah, ada yang jelas pemantaunya',
    noLabel: 'Belum — masih di "nanti kita lihat jalan atau tidak"',
    feedbackYes:
      'Bagus — itu modal yang nyata. Bab ini akan bantu Anda memformalisasi itu jadi playbook singkat yang bisa dipegang.',
    feedbackNo:
      '"Nanti kita lihat" itu bukan rencana pemantauan — dan rancangan tanpa pemantauan eksplisit biasanya luntur balik ke kebiasaan lama dalam beberapa minggu. Itu yang kita bereskan sekarang.',
  },
  {
    id: 'c8-card-4',
    type: 'info',
    icon: Footprints,
    eyebrow: 'Poin Paling Penting di Bab Ini',
    title: 'Merombak Semua Proses Sekaligus Itu Resep Kolaps',
    body: [
      'Setelah 8 bab membangun metodologi lengkap — peta 4 level, diagnosis, instruksi kerja, QMS, rancangan ulang — wajar banget kalau ada dorongan buat langsung menerapkan ini ke SEMUA proses di bisnis Anda sekaligus, mulai minggu depan.',
      'Jangan.',
      'Bukan karena metodologinya nggak berguna untuk proses lain — justru sangat berguna. Tapi karena mengubah banyak proses sekaligus selalu punya titik lemah yang sama: tim kewalahan menyesuaikan diri ke banyak perubahan sekaligus, dan begitu ada satu minggu sibuk, semuanya kembali ke cara lama karena nggak sempat dijaga semua.',
      'Cara yang beneran bertahan: instal dulu SATU proses yang sudah dirombak di Bab 7. Biarkan jalan dan stabil beberapa minggu, baru pakai metodologi yang sama untuk proses berikutnya.',
    ],
  },
  {
    id: 'c8-card-5',
    type: 'multiple-choice',
    question:
      'Anda baru saja selesai merombak satu proses lewat metodologi Bab 1-7, dan tergoda langsung merombak lima proses lain sekaligus minggu depan. Apa yang sebaiknya Anda lakukan?',
    options: [
      'Langsung rombak semua proses sekaligus — mumpung metodologinya masih segar di kepala',
      'Instal dulu satu proses yang sudah dirombak, biarkan stabil beberapa minggu, baru lanjut ke proses berikutnya',
      'Tunggu sampai semua proses lain juga bermasalah baru dirombak satu-satu',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Satu proses dulu, biarkan stabil, baru lanjut. Ini bukan lambat — ini cara supaya rombakan yang sudah susah payah dirancang beneran melekat, bukan luntur karena kewalahan mengelola banyak perubahan sekaligus.',
    errorFeedback:
      'Coba lagi. Merombak semua sekaligus bikin tim kewalahan dan gampang luntur balik ke kebiasaan lama. Menunggu sampai bermasalah baru bertindak itu balik lagi ke pola reaktif dari Modul 3 Bab 1. Yang benar: satu proses dulu, stabilkan, baru lanjut.',
  },
  {
    id: 'c8-card-6',
    type: 'info',
    icon: TrendingUp,
    eyebrow: 'Menyambung ke Ritme yang Sudah Ada',
    title: 'Hubungkan Proses Baru Ini ke Forum Tinjauan Rutin',
    body: [
      'Proses yang baru dirombak butuh dipantau — bukan diinstal lalu dilupakan. Kalau Anda sudah ikut Modul 3, sambungkan pemantauan SLA dan kesehatan titik serah terima baru ini ke salah satu tier EBR yang relevan: biasanya tinjauan mingguan untuk cek SLA, atau huddle harian kalau proses itu berjalan tiap hari.',
      'Kalau Anda belum ikut Modul 3, itu tidak masalah — yang penting ada forum rutin apa pun bentuknya (bisa serapi rapat mingguan, bisa sesederhana cek 5 menit tiap Jumat) yang secara eksplisit mengecek proses baru ini. Tanpa forum yang mengecek, bahkan proses yang paling rapi pun lama-lama nggak ada yang pantau lagi.',
    ],
  },
  {
    id: 'c8-card-7',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Solusinya',
    title: 'Satu Lembar Playbook — Bukan Dokumen Tebal',
    body: [
      'Yang Anda butuh bukan buku panduan 50 halaman. Yang Anda butuh satu ringkasan singkat yang menjawab: proses/titik apa yang dirombak, siapa pemiliknya, berapa SLA-nya, apa titik pencegahan QA-nya, dan forum/jadwal mana yang memantaunya.',
      'Format ini nggak perlu software khusus. Bisa selembar kertas, bisa dokumen yang dishare, bisa papan di ruang kerja. Yang penting: cukup jelas, cukup ringkas, dan gampang dicek ulang kapan saja.',
    ],
  },
  {
    id: 'c8-card-8',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Susun Playbook Instalasi untuk Proses Pertama Anda',
    body: [
      'Waktunya menuliskan playbook singkat untuk proses yang sudah Anda rombak di Bab 7 — yang akan mulai berjalan resmi, bukan "nanti kalau sudah siap".',
    ],
  },
  {
    id: 'c8-card-9',
    type: 'reflection',
    eyebrow: 'Entri Kesembilan · Buku Kerja Proses Anda',
    prompt: 'Susun playbook instalasi singkat untuk proses yang Anda rombak di Bab 7.',
    fields: [
      {
        id: 'monitoring-forum',
        label: 'Forum/jadwal apa yang akan memantau proses baru ini?',
        placeholder: 'Contoh: Tinjauan mingguan setiap Jumat, mengecek pelanggaran SLA minggu itu',
      },
      {
        id: 'monitoring-leader',
        label: 'Siapa yang memimpin pemantauan itu?',
        placeholder: 'Contoh: Manajer Pembelian, sekaligus pemilik proses dari Bab 7',
      },
      {
        id: 'rollout-date',
        label: 'Kapan proses barunya mulai berjalan resmi?',
        placeholder: 'Contoh: Senin depan, untuk semua PO baru yang masuk',
      },
    ],
  },
  {
    id: 'c8-card-10',
    type: 'yes-no',
    question: 'Setelah semua yang baru Anda pelajari di bab ini — apa pendekatan rollout Anda?',
    yesLabel: 'Mulai dari Satu Proses Dulu',
    noLabel: 'Saya Siap Rombak Semua Proses Sekaligus',
    feedbackYes:
      'Pilihan yang tepat. Instal satu proses dulu, biarkan stabil beberapa minggu, baru pakai metodologi yang sama untuk proses berikutnya. Hasilnya sama, cuma lebih tahan lama dan nggak gampang luntur balik ke kebiasaan lama.',
    feedbackNo:
      'Keberanian itu bagus — tapi berani bukan berarti langsung semua sekaligus adalah pilihan terbaik. Kalau Anda tetap ingin mulai serentak, pastikan paling tidak ada satu penanggung jawab per proses yang tugasnya khusus menjaga proses itu tetap dijalankan saat minggu sibuk datang.',
  },
  {
    id: 'c8-card-11',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Satu Hal Terakhir',
    title: 'Jadwalkan Kapan Anda Akan Mengecek Lagi',
    body: [
      'Rancangan yang bagus tetap perlu dicek ulang setelah berjalan beberapa waktu — apakah SLA-nya realistis, apakah pemiliknya masih orang yang tepat, apakah titik pencegahan QA-nya masih relevan setelah bisnis Anda berubah.',
      'Ini bukan sesuatu yang perlu dicek tiap hari. Cukup satu tanggal konkret di masa depan — bukan "nanti kalau sempat" yang tanggalnya masih kosong.',
    ],
  },
  {
    id: 'c8-card-12',
    type: 'reflection',
    eyebrow: 'Entri Kesepuluh · Buku Kerja Proses Anda',
    prompt: 'Tentukan tanggal cek ulang proses baru Anda yang pertama.',
    fields: [
      {
        id: 'next-check',
        label: 'Kapan Anda akan mengecek lagi apakah proses baru ini beneran bertahan, dan apa yang akan Anda cek?',
        placeholder:
          'Contoh: 3 minggu dari sekarang — cek apakah SLA 1x24 jam realistis, apakah pemiliknya masih relevan, apakah ada yang mulai balik ke kebiasaan lama',
      },
    ],
  },
  {
    id: 'c8-card-13',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Satu Langkah Lagi',
    title: 'Semua yang Sudah Anda Kerjakan dari Bab 1 sampai Sekarang, Kita Kumpulkan Jadi Satu',
    body: [
      'Dari Entri Pertama sampai Entri Kesepuluh, Anda sudah membangun sesuatu yang konkret: momen silo yang bikin Anda sadar, audit arsitektur proses, peta rantai nilai, diagnosis titik yang paling parah, instruksi kerja baru, titik pencegahan kualitas, rancangan ulang lengkap, dan playbook instalasinya.',
      'Semua itu sekarang kita kumpulkan jadi satu laporan lengkap yang bisa Anda cetak, simpan, dan pakai sebagai acuan saat menjalankan proses baru Anda minggu depan.',
    ],
  },
  {
    id: 'c8-card-14',
    type: 'report',
    eyebrow: 'Laporan Rekayasa Ulang Proses Anda',
    title: 'Laporan Business Process Re-engineering Lengkap Anda',
    intro: [
      'Ini rangkuman perjalanan rekayasa ulang proses Anda dari Bab 1 sampai Bab 8. Simpan atau cetak untuk jadi acuan waktu Anda menjalankan proses baru dan melakukan cek ulang pertama.',
    ],
    sections: [
      {
        heading: 'Titik Silo yang Anda Temukan',
        items: [
          { label: 'Momen serah terima yang berantakan (Bab 1)', cardId: 'c1-card-14', fieldId: 'handoff-incident' },
          { label: 'Akibatnya, dan siapa yang menanggung (Bab 1)', cardId: 'c1-card-14', fieldId: 'handoff-impact' },
        ],
      },
      {
        heading: 'Audit Arsitektur Proses Anda',
        items: [
          { label: 'Level yang sudah ada di bisnis Anda (Bab 2)', cardId: 'c2-card-14', fieldId: 'existing-tier' },
          { label: 'Level yang paling kosong (Bab 2)', cardId: 'c2-card-14', fieldId: 'empty-tier' },
        ],
      },
      {
        heading: 'Peta Rantai Nilai Anda',
        items: [
          { label: 'Proses utama & tim yang terlibat (Bab 3)', cardId: 'c3-card-12', fieldId: 'main-process' },
          { label: 'Titik serah terima lintas departemen (Bab 3)', cardId: 'c3-card-12', fieldId: 'handoff-points' },
        ],
      },
      {
        heading: 'Diagnosis Titik Silo',
        items: [
          { label: 'Titik paling parah (Bab 4)', cardId: 'c4-card-14', fieldId: 'worst-handoff' },
          { label: 'Diagnosisnya — silo, approval berlapis, atau bottleneck (Bab 4)', cardId: 'c4-card-14', fieldId: 'diagnosis' },
        ],
      },
      {
        heading: 'Instruksi Kerja Baru Anda',
        items: [
          { label: 'Prosedur L3 (Bab 5)', cardId: 'c5-card-13', fieldId: 'procedure-steps' },
          { label: 'Instruksi kerja L4 (Bab 5)', cardId: 'c5-card-13', fieldId: 'work-instruction' },
        ],
      },
      {
        heading: 'Sistem Pencegahan Kualitas',
        items: [
          { label: 'Titik risiko paling mahal (Bab 6)', cardId: 'c6-card-13', fieldId: 'risk-point' },
          { label: 'Titik cek pencegahan yang dirancang (Bab 6)', cardId: 'c6-card-13', fieldId: 'prevention-checkpoint' },
        ],
      },
      {
        heading: 'Rancangan Ulang Proses Anda',
        items: [
          { label: 'Skor kepercayaan rancangan ulang (Bab 7)', cardId: 'chapter7-redesign-review', fieldId: 'score' },
          { label: 'Alasan skor tersebut (Bab 7)', cardId: 'chapter7-redesign-review', fieldId: 'justification' },
          { label: 'Alur lama vs alur baru (Bab 7)', cardId: 'c7-card-12', fieldId: 'old-vs-new' },
          { label: 'Pemilik baru (Bab 7)', cardId: 'c7-card-12', fieldId: 'new-owner' },
          { label: 'SLA baru (Bab 7)', cardId: 'c7-card-12', fieldId: 'new-sla' },
        ],
      },
      {
        heading: 'Playbook Instalasi Anda',
        items: [
          { label: 'Forum pemantau (Bab 8)', cardId: 'c8-card-9', fieldId: 'monitoring-forum' },
          { label: 'Pemimpin pemantauan (Bab 8)', cardId: 'c8-card-9', fieldId: 'monitoring-leader' },
          { label: 'Tanggal mulai resmi (Bab 8)', cardId: 'c8-card-9', fieldId: 'rollout-date' },
          { label: 'Pendekatan rollout (Bab 8)', cardId: 'c8-card-10', fieldId: 'selectionLabel' },
        ],
      },
      {
        heading: 'Cek Berikutnya',
        items: [
          { label: 'Tanggal & yang akan dicek (Bab 8)', cardId: 'c8-card-12', fieldId: 'next-check' },
        ],
      },
    ],
    downloadButtonText: 'Cetak / Simpan Laporan Ini',
  },
  {
    id: 'c8-card-15',
    type: 'info',
    icon: PartyPopper,
    eyebrow: 'Selesai Modul 4',
    title: 'Anda Baru Saja Membangun Sesuatu yang Nyata',
    body: [
      'Ini bukan cuma 8 bab yang Anda baca. Dari serah terima yang berantakan di Bab 1, sampai proses yang benar-benar dirombak dan punya pemilik, SLA, dan titik pencegahan kualitas — Anda sudah membangun sesuatu yang kebanyakan pemilik bisnis nggak pernah sempat bikin: proses yang dirancang dengan sengaja, bukan cuma "jalan aja dulu."',
      'Peta proses ada. Diagnosis ada. Instruksi kerja ada. Titik pencegahan ada. Rancangan ulang dengan pemilik dan SLA ada. Yang tinggal sekarang: mulai minggu depan, dari satu proses dulu, dan jaga sampai jadi kebiasaan baru yang nggak perlu dipaksa lagi.',
      'Silo yang bikin bisnis Anda bocor itu bukan kebetulan — dan sekarang Anda tahu persis cara membongkarnya.',
    ],
  },
]
