import {
  Flame,
  AlarmClock,
  Eye,
  LayoutDashboard,
  MessagesSquare,
  Radar,
  NotebookPen,
  BookMarked,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter1Cards: Card[] = [
  {
    id: 'c1-card-1',
    type: 'info',
    icon: Flame,
    eyebrow: "Bab 1 · Jebakan Rapat Tanpa Ritme",
    title: 'Bisnis Anda Cuma Rapat Kalau Sudah Kebakaran',
    body: [
      "Coba jujur: kapan terakhir kali Anda ngumpulin tim buat rapat serius? Kalau jawabannya 'pas ada masalah gede kemarin', Anda nggak sendirian — dan itu justru pola yang bikin bisnis Anda capek sendiri.",
      'Jam 9 malam, HP Anda bunyi. Klien besar komplain, ancam putus kontrak. Anda buru-buru bikin grup WA darurat, manggil semua orang yang relevan, rapat dadakan sampai larut.',
      'Itu bukan kepemimpinan gesit. Itu tanda bisnis Anda cuma punya satu mode: bereaksi setelah api sudah membesar.',
    ],
  },
  {
    id: 'c1-card-2',
    type: 'yes-no',
    question:
      'Coba tanya diri sendiri: rapat serius terakhir di bisnis Anda, itu dijadwalkan dari jauh-jauh hari, atau dadakan gara-gara ada yang meledak?',
    yesLabel: 'Dijadwalkan dari jauh hari',
    noLabel: 'Dadakan, gara-gara ada masalah',
    feedbackYes:
      'Bagus — itu tanda sudah ada ritme. Tapi baca terus, karena ritme yang benar itu lebih dari sekadar ada jadwalnya.',
    feedbackNo:
      'Nah, ini yang mau kita bongkar. Rapat dadakan terus-terusan itu bukan kebetulan — itu gejala nggak adanya sistem tinjauan.',
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: AlarmClock,
    eyebrow: 'Pola yang Sering Kejadian',
    title: 'Tiga Wajah Bisnis yang Kebakaran Terus',
    body: [
      'Bukan cuma soal komplain pelanggan. Coba cek, ada nggak yang kerasa familiar: Anda ngumpulin seluruh tim mendadak begitu omzet bulan ini anjlok tajam — padahal minggu-minggu sebelumnya nggak ada yang mantau tren itu.',
      'Atau: karyawan kunci resign mendadak, dan baru saat itu Anda sadar nggak ada yang tahu detail kerjaannya karena nggak pernah ada forum buat serah terima rutin.',
      'Atau yang paling sering: Anda baru benar-benar buka laporan keuangan pas tutup tahun — dan kaget lihat angka yang sebenarnya sudah memburuk sejak bulan ketiga.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'multiple-choice',
    question:
      'Ketiga contoh tadi — komplain pelanggan mendadak, karyawan kunci resign, kaget pas tutup buku — apa benang merahnya?',
    options: [
      'Timnya kurang kompeten',
      'Masalahnya baru ketahuan setelah membesar, bukan waktu masih kecil',
      'Bisnisnya memang sedang sial',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Masalah-masalah itu sebenarnya nggak muncul tiba-tiba — mereka cuma baru ketahuan belakangan, karena nggak ada forum yang mantau tanda-tandanya dari awal.',
    errorFeedback:
      'Coba lagi. Bukan soal kompetensi atau nasib — masalahnya baru ketahuan setelah besar karena nggak ada yang mantau dari awal.',
  },
  {
    id: 'c1-card-5',
    type: 'info',
    icon: Eye,
    eyebrow: 'Bandingannya',
    title: 'Bisnis yang Tenang Itu Bukan Kebetulan',
    body: [
      'Sekarang bayangkan bisnis lain. Ownernya jarang kelihatan panik. Bukan karena bisnisnya nggak pernah ada masalah — semua bisnis ada masalahnya — tapi karena masalah itu ketahuan waktu masih kecil, sebelum sempat membesar jadi kebakaran.',
      'Rahasianya bukan tim yang lebih hebat atau keberuntungan. Rahasianya sesederhana: ada jadwal tetap buat mengecek kondisi bisnis, sebelum kondisi itu mengecek dirinya sendiri lewat cara yang menyakitkan.',
      'Kelola reaktif itu bukan cuma bikin capek. Itu mahal — karena kesalahan yang sama biasanya kejadian berkali-kali, sebab nggak pernah ada yang benar-benar melacak akar masalahnya sampai tuntas.',
    ],
  },
  {
    id: 'c1-card-6',
    type: 'sort-list',
    question:
      "Urutkan bagaimana biasanya siklus 'kebakaran' ini berulang di bisnis tanpa ritme tinjauan, dari awal sampai akhir.",
    items: [
      'Rapat darurat, semua panik, cari solusi cepat',
      'Masalah kecil muncul tapi nggak ada yang mantau',
      'Masalah reda sebentar, tapi akar penyebabnya nggak pernah dibongkar',
      'Masalah membesar sampai nggak bisa diabaikan',
    ],
    correctAnswer: [
      'Masalah kecil muncul tapi nggak ada yang mantau',
      'Masalah membesar sampai nggak bisa diabaikan',
      'Rapat darurat, semua panik, cari solusi cepat',
      'Masalah reda sebentar, tapi akar penyebabnya nggak pernah dibongkar',
    ],
    successFeedback:
      'Persis. Dan karena akar penyebabnya nggak pernah benar-benar dibongkar, siklus ini akan berulang lagi — dengan masalah yang mirip, di lain waktu.',
    errorFeedback:
      'Belum pas. Urutannya: masalah kecil muncul tanpa dipantau, membesar sampai nggak bisa diabaikan, baru rapat darurat, dan karena akarnya nggak pernah dibongkar tuntas, siklusnya berulang lagi.',
  },
  {
    id: 'c1-card-7',
    type: 'fill-in-the-blank',
    sentence:
      'Mahalnya kelola bisnis secara reaktif bukan cuma soal capek — tapi karena kesalahan yang sama sering terulang, sebab nggak pernah ada yang melacak ________ masalahnya sampai tuntas.',
    options: ['akar', 'biaya', 'nasib', 'jadwal'],
    correctAnswer: 'akar',
    successFeedback:
      'Tepat. Tanpa melacak akar masalah, Anda cuma memadamkan api yang sama berkali-kali — bukan mencegahnya menyala lagi.',
    errorFeedback:
      'Bukan itu. Yang hilang dari kelola reaktif adalah pelacakan akar masalah — makanya kesalahan yang sama terus berulang.',
  },
  {
    id: 'c1-card-8',
    type: 'info',
    icon: LayoutDashboard,
    eyebrow: 'Kalau Anda Sudah Ikut Modul 2',
    title: 'Dashboard Bagus, Tapi Nggak Ada yang Buka',
    body: [
      'Kalau Anda sudah ikut Modul 2: inget soal cara merancang KPI yang benar-benar berarti, bukan sekadar KPI basa-basi? Itu langkah penting. Tapi ada satu jebakan lagi setelahnya.',
      'Anda bisa saja punya KPI yang paling tepat sedunia, sudah di-cascade sampai ke staf paling bawah — tapi kalau nggak ada yang benar-benar membuka dan membahasnya secara terjadwal, KPI itu cuma jadi pajangan digital.',
      'Dashboard yang nggak pernah dibuka itu sama sekali nggak lebih berguna dari laporan yang nggak pernah ditulis.',
    ],
  },
  {
    id: 'c1-card-9',
    type: 'yes-no',
    question:
      'Kalau bisnis Anda punya laporan, dashboard, atau catatan angka — ada nggak jadwal tetap kapan itu benar-benar dibuka dan dibahas bareng tim?',
    yesLabel: 'Ada, jadwalnya jelas',
    noLabel: 'Nggak ada, dilihat kalau inget aja',
    feedbackYes:
      'Itu modal bagus. Tapi lanjut baca — jadwal doang belum tentu cukup kalau isinya cuma basa-basi juga.',
    feedbackNo:
      'Ini yang bikin data secanggih apa pun jadi percuma. Angka yang nggak pernah dibahas terjadwal, sama saja nggak pernah ada.',
  },
  {
    id: 'c1-card-10',
    type: 'info',
    icon: MessagesSquare,
    eyebrow: 'Beda yang Sering Kelewat',
    title: 'Sering Rapat ≠ Punya Ritme Tinjauan',
    body: [
      "Ini yang sering keliru: CEO mikir 'saya udah sering rapat kok, tiap Senin ada meeting mingguan.' Tapi coba dengar lagi isi rapatnya — kalau semua orang cuma bilang 'aman-aman aja, Pak/Bu' tanpa ada yang benar-benar dibedah, itu bukan tinjauan. Itu teater status.",
      'Rapat rutin yang isinya cuma laporan basa-basi, tanpa ada yang menggali kenapa suatu angka merah, sama saja nggak ada rapat.',
      'Yang bisnis Anda butuh itu Executive Business Review (EBR) — forum terstruktur yang benar-benar membedah data, mencari akar masalah, dan menghasilkan aksi. Bukan sekadar kumpul dan lapor.',
    ],
  },
  {
    id: 'c1-card-11',
    type: 'multiple-choice',
    question:
      "Tim Anda rapat tiap Senin pagi, semua orang laporan 'lancar semua, Pak/Bu', tidak ada yang digali lebih dalam. Apakah ini sudah termasuk ritme tinjauan (EBR) yang benar?",
    options: [
      'Ya, karena sudah rutin dan terjadwal',
      'Belum, karena isinya cuma laporan basa-basi tanpa pembedahan akar masalah',
      'Ya, selama semua orang hadir',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Rutin dan terjadwal itu syarat perlu, tapi belum cukup. EBR yang sesungguhnya membedah data sampai ke akar masalah, bukan cuma seremoni laporan.',
    errorFeedback:
      "Coba lagi. Terjadwal dan dihadiri semua orang itu bagus, tapi kalau isinya cuma 'aman-aman aja' tanpa pembedahan, itu belum EBR.",
  },
  {
    id: 'c1-card-12',
    type: 'info',
    icon: Radar,
    eyebrow: 'Tes Sederhana',
    title: 'Siapa yang Kasih Tahu Anda Duluan?',
    body: [
      'Ada satu pertanyaan simpel buat mengecek separah apa gap di bisnis Anda: kalau ada masalah, siapa yang kasih tahu Anda duluan — sistem tinjauan internal Anda, atau komplain pelanggan, karyawan yang resign, dan saldo rekening yang tiba-tiba tipis?',
      'Kalau jawabannya selalu yang kedua, itu artinya bisnis Anda selalu telat tahu. Anda bukan yang memegang kendali — Anda cuma menunggu dikabari oleh kejadian buruk.',
    ],
  },
  {
    id: 'c1-card-13',
    type: 'yes-no',
    question:
      'Jujur ke diri sendiri: selama ini, bisnis Anda biasanya tahu duluan ada masalah, atau selalu telat — dikabari oleh pelanggan, karyawan, atau saldo rekening?',
    yesLabel: 'Biasanya kami tahu duluan',
    noLabel: 'Jujur, kami selalu telat tahu',
    feedbackYes:
      'Kalau memang begitu, bagus — tapi bab-bab berikutnya masih akan bantu Anda membuat itu jadi sistem, bukan cuma kebetulan.',
    feedbackNo:
      'Terima kasih sudah jujur. Itu justru celah yang modul ini akan tutup — biar Anda nggak terus-terusan jadi orang terakhir yang tahu.',
  },
  {
    id: 'c1-card-14',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Jujur ke Diri Sendiri',
    title: 'Giliran Anda: Bongkar Satu Kejadian yang Bikin Kaget',
    body: [
      'Sebelum lanjut, coba mundur sebentar dan inget-inget.',
      'Pikirkan satu masalah besar yang belakangan ini bikin Anda beneran kaget — komplain pelanggan, karyawan resign mendadak, atau angka keuangan yang tiba-tiba nggak masuk akal.',
      'Sekarang coba jujur: kalau dipikir-pikir lagi, apakah tanda-tandanya sebenarnya sudah ada, cuma nggak ada yang mantau?',
    ],
  },
  {
    id: 'c1-card-15',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja EBR Anda',
    prompt:
      'Tulis satu masalah besar yang belakangan bikin Anda kaget — padahal kalau dipikir-pikir lagi, tanda-tandanya sebenarnya sudah ada sebelum meledak.',
    fields: [
      {
        id: 'incident',
        label: 'Masalah apa yang bikin Anda kaget?',
        placeholder: 'Contoh: Klien besar tiba-tiba minta putus kontrak',
      },
      {
        id: 'warningSign',
        label: 'Kalau dipikir lagi, tanda-tanda apa yang sebenarnya sudah ada sebelum itu?',
        placeholder: 'Contoh: Responsnya makin lambat dan ada komplain kecil beberapa minggu sebelumnya',
      },
    ],
  },
  {
    id: 'c1-card-16',
    type: 'info',
    icon: BookMarked,
    eyebrow: 'Catatan Tersimpan',
    title: 'Anda Nggak Sendirian — dan Ini Bisa Diperbaiki',
    body: [
      'Ini bukan sesi menyalahkan diri sendiri. Hampir semua CEO pernah kaget kena masalah yang sebenarnya sudah kasih tanda-tanda dari awal — termasuk yang bisnisnya sekarang sudah rapi dan tenang.',
      'Bedanya, mereka berhenti mengandalkan rapat dadakan sebagai satu-satunya cara tahu ada masalah, dan mulai memasang ritme tinjauan yang jalan sendiri, terjadwal, tanpa nunggu kebakaran.',
      'Jawaban Anda tadi baru saja jadi entri pertama di buku kerja EBR Anda sendiri. Nanti kita isi terus sampai jadi ritme tinjauan yang lengkap.',
    ],
  },
  {
    id: 'c1-card-17',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 1',
    title: 'Sekarang Anda Merasakan Mahalnya Jalan Tanpa Ritme',
    body: [
      'Anda sekarang tahu: rapat yang sering pun bisa kosong kalau nggak ada pembedahan sungguhan, dan bisnis yang tenang itu bukan kebetulan — itu hasil dari sistem tinjauan yang jalan terjadwal.',
      'Sekarang Anda merasakan mahalnya jalan tanpa ritme. Bab berikutnya kasih Anda peta lengkap ritme tinjauan — dari huddle harian sampai tinjauan triwulanan — biar Anda tahu persis rapat apa yang perlu ada, dan kapan.',
    ],
  },
]
