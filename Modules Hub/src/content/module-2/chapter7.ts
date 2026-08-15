import {
  Siren,
  Target,
  Compass,
  HeartHandshake,
  ArrowLeftRight,
  HelpCircle,
  ClipboardList,
  Sprout,
  Truck,
  FileCheck2,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter7Cards: Card[] = [
  {
    id: 'c7-card-1',
    type: 'info',
    icon: Siren,
    eyebrow: 'Bab 7 · KPI yang Merah',
    title: 'Cepat atau Lambat, Satu Angka Bakal Merah',
    body: [
      'Anda udah punya ritme pemantauan dari Bab 6. Tapi ritme itu nggak bikin semua angka Anda selalu hijau — cepat atau lambat, satu KPI bakal jatuh di bawah target.',
      'Tanpa proses yang jelas, angka merah itu berakhir jadi dua hal: Anda panik, atau Anda mulai cari siapa yang salah. Dua-duanya nggak nyelesain apa-apa.',
      'Bab ini kasih Anda proses itu.',
    ],
  },
  {
    id: 'c7-card-2',
    type: 'info',
    icon: Target,
    eyebrow: 'Definisi Simpel',
    title: 'Merah Itu Cuma Berarti Satu Hal',
    body: [
      "Biar jelas dari awal: 'merah' itu cuma berarti angka ACTUAL-nya di bawah target yang Anda tetapkan. Nggak lebih rumit dari itu.",
      'Yang rumit — dan yang jadi fokus bab ini — bukan cara mendeteksinya, tapi cara mendiagnosisnya setelah ketahuan.',
    ],
  },
  {
    id: 'c7-card-3',
    type: 'info',
    icon: Compass,
    eyebrow: 'Poin Paling Penting di Bab Ini',
    title: 'Yang Merah Duluan Nunjukin Ke Mana Harus Lihat',
    body: [
      'Kalau Lead Metric Anda yang merah duluan, itu sebenarnya kabar baik — itu justru fungsi Lead Metric yang lagi jalan. Anda ketahuan lebih awal, sebelum Lag-nya ikut jelek. Perbaikannya biasanya langsung: lakukan aksinya lebih banyak, atau cari tahu apa yang menghalangi.',
      'Tapi kalau Lag Metric Anda merah PADAHAL Lead Metric-nya sudah kena target, itu sinyal yang lebih dalam. Artinya hubungan yang Anda asumsikan di Bab 3-4 udah bergeser — rasio yang dulu 1 dari 5 presentasi jadi closing, sekarang mungkin jadi 1 dari 8. Atau ada sesuatu di luar sistem KPI Anda yang berubah.',
      "Ini butuh investigasi sungguhan, bukan solusi cepat. Anda nggak bisa 'lakukan lebih banyak aksi yang sama' kalau aksinya udah nggak lagi memprediksi hasil seperti dulu.",
    ],
  },
  {
    id: 'c7-card-4',
    type: 'multiple-choice',
    question:
      'Lead Metric Anda kena target terus, tapi Lag Metric-nya tetap merah tiga bulan berturut-turut. Apa artinya?',
    options: [
      'Hubungan yang dulu Anda asumsikan antara Lead dan Lag-nya kemungkinan udah bergeser, atau ada faktor luar yang berubah — butuh investigasi',
      'Berarti Lead Metric-nya salah dan harus diganti secepatnya',
      'Berarti angka Lag-nya nggak penting, cukup pantau Lead-nya saja',
    ],
    correctAnswer: 0,
    successFeedback:
      "Tepat. Ini justru sinyal paling penting di bab ini — kalau aksi harian Anda udah bener tapi hasilnya tetap nggak nyusul, ada sesuatu di 'jembatan' antara Lead dan Lag yang berubah, dan itu perlu digali, bukan ditambal cepat.",
    errorFeedback:
      'Coba lagi. Kalau Lead-nya udah kena target tapi Lag-nya tetap merah, itu tanda hubungan/rasio yang dulu Anda asumsikan sudah bergeser — bukan berarti Lead-nya salah atau Lag-nya nggak penting.',
  },
  {
    id: 'c7-card-5',
    type: 'info',
    icon: HeartHandshake,
    eyebrow: 'Evaluasi Tanpa Kambing Hitam',
    title: 'Tujuannya Cari yang Rusak di Sistem, Bukan Siapa yang Salah',
    body: [
      'Begitu ketahuan ada yang merah, godaan pertama biasanya: cari siapa yang harus tanggung jawab. Godaan itu wajar, tapi salah arah.',
      'Tujuan rapat evaluasi KPI yang sehat itu bukan mencari siapa yang pantas disalahkan — tapi melihat KPI dan mencari letak kerusakan di sistemnya.',
      'Kalau Anda menyerang orangnya, masalah berikutnya bakal disembunyikan, bukan diperbaiki lebih cepat. Tim yang takut disalahkan akan belajar menutupi angka, bukan melaporkannya jujur.',
    ],
  },
  {
    id: 'c7-card-6',
    type: 'info',
    icon: ArrowLeftRight,
    eyebrow: 'Bandingkan Dua Pertanyaan',
    title: 'Satu Pertanyaan Nyerang Sistem, Satu Nyerang Orang',
    body: [
      'Bayangkan Lead Metric checklist QC Anda merah minggu ini — kepatuhannya cuma 60%, padahal targetnya 100%.',
      'Ada dua cara membuka rapat evaluasi soal ini. Salah satu nyerang sistemnya, satu nyerang orangnya — kelihatannya mirip, tapi efeknya beda total.',
    ],
  },
  {
    id: 'c7-card-7',
    type: 'multiple-choice',
    question:
      'Mana dari dua pertanyaan ini yang lebih tepat dipakai buat membuka evaluasi checklist QC yang merah tadi?',
    options: [
      "'Siapa yang nggak jalanin checklist-nya minggu ini?'",
      "'Apa yang bikin checklist ini susah dijalanin penuh minggu ini — waktu, formulir, atau ada yang nggak jelas caranya?'",
      'Keduanya sama saja, yang penting angka checklist-nya naik lagi',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Pertanyaan kedua nyerang sistemnya — apa yang menghalangi — bukan langsung nyerang orangnya. Ini yang bikin tim mau jujur cerita apa yang sebenarnya terjadi, bukan defensif duluan.',
    errorFeedback:
      'Coba lagi. Pertanyaan pertama langsung nyari siapa yang salah — itu bikin orang defensif. Yang lebih tepat adalah pertanyaan yang nyerang sistemnya: apa yang menghalangi checklist-nya dijalankan penuh.',
  },
  {
    id: 'c7-card-8',
    type: 'info',
    icon: HelpCircle,
    eyebrow: 'Teknik · 5 Whys',
    title: "Cara Gali Sampai ke Akarnya: Tanya 'Kenapa' Berulang",
    body: [
      "Salah satu cara paling simpel buat gali akar masalah di sistem (bukan di orang): tanya 'kenapa' berulang-ulang, biasanya sampai 5 kali, sampai ketemu akar yang benar-benar bisa dibenahi.",
      "Nggak harus persis 5 kali — kadang ketemu di 'kenapa' ketiga, kadang butuh sampai keenam. Yang penting jangan berhenti di jawaban pertama, karena jawaban pertama itu biasanya masih gejala, bukan akar.",
    ],
  },
  {
    id: 'c7-card-9',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Contoh Lengkap · 5 Whys',
    title: "Kenapa Checklist QC-nya Merah?",
    body: [
      "Skenario: Lead Metric 'kepatuhan checklist QC' merah, cuma 60% padahal target 100%.",
      'Kenapa 1: Kenapa checklist-nya nggak dijalankan penuh? → Karena beberapa staf shift malam sering melewati beberapa poin di checklist-nya.',
      'Kenapa 2: Kenapa staf shift malam sering melewati poinnya? → Karena mereka buru-buru, formulirnya dianggap makan waktu.',
    ],
  },
  {
    id: 'c7-card-10',
    type: 'info',
    icon: Sprout,
    eyebrow: 'Contoh Lengkap · 5 Whys (Lanjutan)',
    title: 'Terus Digali, Sampai Ketemu Akarnya',
    body: [
      'Kenapa 3: Kenapa mereka merasa checklist-nya makan waktu? → Karena mereka nggak yakin poin mana yang penting dan mana yang bisa dilewat kalau lagi buru-buru.',
      'Kenapa 4: Kenapa mereka nggak yakin poin mana yang penting? → Karena waktu training awal, mereka cuma dikasih contoh formulir kosong, nggak pernah dijelaskan alasan di balik tiap poinnya.',
      "Akar: staf baru nggak pernah benar-benar dilatih cara isi checklist dengan benar — cuma dikasih formulir kosong tanpa penjelasan. Solusinya bukan 'tegur staf yang lewat checklist', tapi perbaiki training-nya.",
    ],
  },
  {
    id: 'c7-card-11',
    type: 'multiple-choice',
    question: "Di contoh checklist QC tadi, kenapa akar masalahnya bukan 'staf shift malam yang malas'?",
    options: [
      'Karena setelah digali lebih dalam, akarnya ternyata soal training yang nggak pernah menjelaskan alasan di balik checklist-nya — bukan soal sikap orangnya',
      'Karena staf shift malam memang selalu benar',
      'Karena checklist itu sebenarnya nggak penting',
    ],
    correctAnswer: 0,
    successFeedback:
      "Tepat. Kalau berhenti di 'kenapa 1', kelihatannya emang soal sikap staf. Tapi digali sampai 'kenapa 4', ketemu akarnya di training yang nggak pernah dijelaskan — itu yang bisa dibenahi secara sistemik.",
    errorFeedback:
      "Coba lagi. 5 Whys justru nunjukin bahwa gejala pertama (staf sering lewat checklist) bukan akarnya — akarnya ada di training yang nggak pernah menjelaskan alasan tiap poin checklist.",
  },
  {
    id: 'c7-card-12',
    type: 'info',
    icon: Truck,
    eyebrow: "Giliran Anda · Lanjutkan Whys-nya",
    title: "Sekarang Anda yang Gali 'Kenapa' Berikutnya",
    body: [
      "Skenario baru: Lag Metric 'OTIF pengiriman' merah, cuma 75% padahal target 95% — padahal Lead Metric 'pesanan di-pack H-1' Anda udah 98%.",
      'Kenapa 1: Kenapa OTIF-nya tetap merah padahal packing H-1 udah hampir 100%? → Karena banyak pesanan yang udah di-pack H-1 rapi, tapi truk pengirimannya sering berangkat telat dari jadwal.',
      "Sekarang giliran Anda: kira-kira, 'kenapa' kedua yang paling masuk akal buat digali selanjutnya itu apa?",
    ],
  },
  {
    id: 'c7-card-13',
    type: 'multiple-choice',
    question:
      "Lanjutan dari skenario tadi — kenapa truk pengirimannya sering berangkat telat, padahal pesanan udah siap di-pack H-1? Kira-kira 'kenapa' kedua yang paling produktif buat digali itu yang mana?",
    options: [
      'Kenapa sopirnya nggak lebih rajin datang tepat waktu?',
      'Kenapa jadwal keberangkatan truk nggak disusun berdasarkan kapan pesanan selesai di-pack, tapi berdasarkan jam tetap yang sama tiap hari?',
      'Kenapa pelanggan nggak lebih sabar menunggu?',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini yang nyerang sistemnya — jadwal truk yang nggak nyambung ke jadwal packing — bukan nyerang orangnya (sopir) atau nyalahin pihak luar (pelanggan). Kemungkinan besar akarnya ada di sinkronisasi jadwal, bukan di kedisiplinan satu orang.',
    errorFeedback:
      "Coba lagi. Yang produktif itu 'kenapa' yang nyerang sistemnya — misalnya soal jadwal truk yang nggak nyambung ke jadwal packing — bukan yang langsung nyerang orangnya atau nyalahin pihak luar.",
  },
  {
    id: 'c7-card-14',
    type: 'finding-review',
    eyebrow: 'Penilaian Pertama · Kesiapan Diagnosis Anda',
    title: 'Kalau KPI Output Anda Ini Merah Minggu Depan...',
    recap: [
      { label: 'Target Anda (Bab 2)', cardId: 'c2-card-16', fieldId: 'target-number' },
      { label: 'Lag Metric Anda (Bab 3)', cardId: 'c3-card-13', fieldId: 'lag-metric' },
      { label: 'Lead Metric Anda (Bab 4)', cardId: 'c4-card-18', fieldId: 'lead-metric' },
    ],
    scorePrompt:
      'Kalau Lead Metric Anda ini merah minggu depan, seberapa siap Anda SEKARANG buat langsung mendiagnosis akarnya — bukan cuma panik atau langsung cari siapa yang salah?',
    justificationLabel:
      "Coba tulis: kalau merah, apa dugaan akar masalah yang paling mungkin, dan 'kenapa' apa yang perlu Anda tanya duluan buat mengonfirmasinya?",
    justificationPlaceholder:
      'Contoh: Dugaan akarnya kemungkinan di pelatihan staf baru. Kenapa pertama yang perlu ditanya: kenapa aksi hariannya nggak dilakukan sesuai target minggu ini?',
    storageKey: 'chapter7-diagnosis-readiness',
  },
  {
    id: 'c7-card-15',
    type: 'finding-review',
    eyebrow: 'Penilaian Kedua · Prioritas Risiko Anda',
    title: 'Dari 6 KPI Anda, Mana yang Paling Berisiko Merah Duluan?',
    recap: [
      { label: 'Lag Output (Bab 3)', cardId: 'c3-card-13', fieldId: 'lag-metric' },
      { label: 'Lead Output (Bab 4)', cardId: 'c4-card-18', fieldId: 'lead-metric' },
      { label: 'Lag Proses (Bab 5)', cardId: 'c5-card-10', fieldId: 'proses-lag' },
      { label: 'Lead Proses (Bab 5)', cardId: 'c5-card-10', fieldId: 'proses-lead' },
      { label: 'Lag Input (Bab 5)', cardId: 'c5-card-13', fieldId: 'input-lag' },
      { label: 'Lead Input (Bab 5)', cardId: 'c5-card-13', fieldId: 'input-lead' },
    ],
    scorePrompt: 'Seberapa yakin Anda dengan pilihan KPI yang paling berisiko merah duluan ini?',
    justificationLabel:
      'Dari keenam KPI di atas, yang mana yang paling mungkin merah duluan, dan kenapa?',
    justificationPlaceholder:
      'Contoh: Lead Metric Proses saya, karena checklist-nya baru mulai jalan minggu ini dan belum jadi kebiasaan tim',
    storageKey: 'chapter7-priority-kpi',
  },
  {
    id: 'c7-card-16',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Selesai Bab 7',
    title: 'Sekarang Anda Sudah Punya Cara Mendiagnosis Tanpa Kambing Hitam',
    body: [
      'Anda sekarang tahu cara mendiagnosis KPI merah tanpa jadi ajang cari kambing hitam.',
      'Bab terakhir: ubah semua ini jadi rencana aksi konkret, dan unduh laporan KPI lengkap Anda.',
    ],
  },
]
