import {
  Microscope,
  HelpCircle,
  Layers,
  TrendingDown,
  Search,
  AlertCircle,
  GitBranch,
  Package,
  Scale,
  Ban,
  NotebookPen,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter5Cards: Card[] = [
  {
    id: 'c5-card-1',
    type: 'info',
    icon: Microscope,
    eyebrow: 'Bab 5 · Root Cause Analysis',
    title: 'Ritme Sudah Rapi. Tapi Diagnosisnya Masih Tebak-tebakan?',
    body: [
      'Di Bab 4, Anda selesaikan sesuatu yang sebagian besar pemilik bisnis nggak punya: 4 level ritme tinjauan yang lengkap, dari huddle harian sampai tinjauan triwulanan. Itu pencapaian nyata.',
      'Tapi ada satu lubang yang ritme serapi apa pun nggak otomatis menutupinya. Tiap kali ada angka yang meleset atau masalah yang muncul di rapat, jawabannya sering tetap sama: "kayaknya karena si A", atau "mungkin lagi musim sepi", atau "memang lagi apes". Tebak-tebakan yang diucapkan dengan yakin itu bukan diagnosis.',
      'Kalau akarnya nggak beneran dibongkar, masalah yang sama akan balik lagi — di rapat berikutnya, di kuartal berikutnya. Bab ini kasih Anda dua alat untuk menghentikan siklus itu.',
    ],
  },
  {
    id: 'c5-card-2',
    type: 'info',
    icon: HelpCircle,
    eyebrow: 'Alat Pertama · 5 Whys',
    title: 'Kenalan sama 5 Whys — Bukan Tanya Doang, Tapi Bor sampai Dalam',
    body: [
      'Kalau Anda sudah ikut Modul 2: Anda sudah kenal 5 Whys dari konteks mendiagnosis KPI merah — cara ngebor ke bawah angka yang meleset sampai ketemu akar sistemiknya. Di bab ini, kita pakai alat yang sama, tapi untuk masalah yang lebih berantakan: masalah bisnis dan rapat yang penyebabnya nggak selalu kelihatan di satu angka.',
      'Untuk yang belum pernah pakai: 5 Whys itu cara menemukan akar masalah dengan satu gerakan sederhana — tanya "kenapa?" secara berantai sampai 5 kali. Tiap jawaban jadi pertanyaan berikutnya. Bukan 5 pertanyaan yang berbeda-beda, tapi satu rantai yang makin dalam tiap iterasinya.',
      'Prinsipnya: gejala itu selalu punya penyebab. Dan penyebab itu sering punya penyebab lagi di baliknya. 5 Whys memaksa Anda nggak berhenti di lapisan pertama — yang biasanya cuma permukaan.',
    ],
  },
  {
    id: 'c5-card-3',
    type: 'info',
    icon: Layers,
    eyebrow: 'Cara Kerjanya',
    title: 'Tiga Hal yang Bikin 5 Whys Jalan — dan Sering Dilewati',
    body: [
      'Pertama: mulai dari masalah yang konkret dan spesifik. Bukan "penjualan jelek" — tapi "target closing sales meleset 3 bulan berturut-turut". Makin kabur masalahnya, makin kabur pula jawabannya.',
      'Kedua: tanya "kenapa?" dan tulis jawabannya. Lalu tanya "kenapa?" lagi untuk jawaban itu. Ulangi. Nggak harus persis 5 — kadang butuh 3, kadang 6. Yang penting: jangan berhenti sebelum Anda tiba di sesuatu yang bisa benar-benar diperbaiki, bukan sekadar dijelaskan.',
      'Ketiga — dan ini yang paling sering dilanggar: tanda Anda sudah sampai di akar adalah kalau jawaban terakhir itu sesuatu yang bisa diputuskan untuk diperbaiki sekarang, bukan "nasib" atau "pasar lagi susah". Kalau jawabannya masih bisa ditanya "kenapa?" lagi dengan cara yang bermakna, Anda belum sampai.',
    ],
  },
  {
    id: 'c5-card-4',
    type: 'info',
    icon: TrendingDown,
    eyebrow: 'Contoh Nyata · 5 Whys (Bagian 1)',
    title: 'Target Closing Sales Meleset 3 Bulan — Mari Kita Bor',
    body: [
      'Masalah: Target closing sales tim Anda meleset 3 bulan berturut-turut. Lead masuk cukup, pipeline kelihatan penuh — tapi deal-nya nggak jadi-jadi.',
      'Why 1 — Kenapa target closing meleset? Jawab: Lead masuk ada, tapi banyak yang nggak pernah sampai ke tahap negosiasi serius. Banyak yang "saya tertarik" dan hilang.',
      'Why 2 — Kenapa lead nggak sampai ke negosiasi? Jawab: Sales-nya nggak tahu cara membawa percakapan dari "saya tertarik" ke "oke, kita deal" — gap ini kelihatan konsisten di hampir semua anggota tim, bukan satu-dua orang saja.',
    ],
  },
  {
    id: 'c5-card-5',
    type: 'info',
    icon: Search,
    eyebrow: 'Contoh Nyata · 5 Whys (Bagian 2)',
    title: 'Terus Bor — Sampai Ketemu yang Bisa Diperbaiki',
    body: [
      'Why 3 — Kenapa sales nggak tahu cara closing? Jawab: Onboarding sales baru cuma mengajarkan product knowledge. Nggak pernah ada satu pun sesi praktek simulasi closing — staf baru langsung dilepas ke lapangan.',
      'Why 4 — Kenapa onboarding-nya nggak ada simulasi closing? Jawab: Nggak pernah ada yang merancangnya. Asumsinya: "sales yang bagus pasti tahu sendiri cara closing." Asumsi ini nggak pernah dipertanyakan.',
      'Why 5 — Kenapa nggak pernah ada yang merancangnya? Akar: Nggak ada yang ditunjuk bertanggung jawab atas kurikulum onboarding sales. Tiap manajer bikin versinya sendiri — atau nggak bikin sama sekali. Itu yang bisa diperbaiki sekarang.',
    ],
  },
  {
    id: 'c5-card-6',
    type: 'multiple-choice',
    question:
      'Dari contoh 5 Whys tadi, apa yang sebenarnya jadi akar masalah closing sales yang meleset itu?',
    options: [
      'Sales-nya memang kurang berbakat dalam closing',
      'Tidak ada yang ditunjuk bertanggung jawab merancang onboarding yang mengajarkan cara closing',
      'Lead yang masuk kualitasnya jelek, jadi susah diclosing',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Bukan soal bakat sales-nya — itu diagnosis di lapisan pertama yang terlalu cepat. Akarnya ada di tidak adanya sistem onboarding yang terstruktur dan tidak ada yang bertanggung jawab atasnya. Itu yang bisa diputuskan dan diperbaiki hari ini.',
    errorFeedback:
      'Coba lagi. 5 Whys memaksa kita nggak berhenti di lapisan pertama. Bakat sales atau kualitas lead itu gejala — bukan akar. Akarnya: tidak ada yang pernah ditugaskan merancang onboarding yang mengajarkan cara closing, dan asumsi "sales bagus tahu sendiri" dibiarkan hidup tanpa pernah dipertanyakan.',
  },
  {
    id: 'c5-card-7',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Batasnya 5 Whys',
    title: 'Kalau Masalahnya Lebih dari Satu Rantai — 5 Whys Mulai Kewalahan',
    body: [
      '5 Whys itu kuat untuk masalah yang punya satu rantai sebab-akibat yang lurus. Satu masalah, satu akar, satu arah penyelidikan.',
      'Tapi sebagian masalah penyebabnya bukan satu rantai — mereka hasil dari beberapa faktor yang semuanya berkontribusi sekaligus. Coba pakai 5 Whys di sana, dan tim Anda akan berdebat soal "kenapa yang mana yang harus ditanya duluan" — karena jawabannya memang bisa banyak arah yang semuanya benar.',
      'Contoh: kualitas produk tiba-tiba turun. Kenapa? Bisa jadi staf baru belum terlatih. Tapi juga bisa SOP QC-nya nggak dijalankan waktu sedang kejar target. Dan juga mesin sudah lama nggak diservis. Dan juga supplier ganti bahan baku tanpa kasih tahu. Satu rantai "kenapa?" nggak cukup untuk menangkap semua ini sekaligus — dan salah kalau Anda pilih cuma satu.',
    ],
  },
  {
    id: 'c5-card-8',
    type: 'info',
    icon: GitBranch,
    eyebrow: 'Alat Kedua · Fishbone',
    title: 'Fishbone / Diagram Tulang Ikan: Ketika Masalahnya Banyak Faktor',
    body: [
      'Fishbone — atau Diagram Tulang Ikan — adalah cara memetakan semua kemungkinan penyebab masalah ke dalam kategori, bukan dalam satu rantai lurus. Hasilnya bukan satu jawaban, tapi peta lengkap faktor-faktor yang patut diselidiki.',
      'Empat kategori praktis yang langsung bisa dipakai: Manusia (skill, kelelahan, turnover, pengambilan keputusan), Proses (alur kerja, SOP, prosedur), Alat/Sistem (mesin, software, infrastruktur, tools), dan Eksternal (supplier, regulasi, kondisi pasar, kompetitor).',
      'Cara pakainya: tulis masalah di ujung kanan (kepala ikan). Tiap kategori jadi satu cabang — di tiap cabang, Anda cantumkan semua faktor yang mungkin berkontribusi dari kategori itu. Setelah semua terpetakan, baru pilih yang mana yang perlu diselidiki lebih dalam. Fishbone itu alat pemetaan, bukan kesimpulan.',
    ],
  },
  {
    id: 'c5-card-9',
    type: 'info',
    icon: Package,
    eyebrow: 'Contoh Nyata · Fishbone',
    title: 'Kualitas Produk Turun — Empat Arah Sekaligus',
    body: [
      'Masalah: kualitas produk turun dalam dua bulan terakhir — komplain naik, return rate meningkat. Tiap orang di tim nunjuk ke penyebab yang beda. Inilah yang tampak di tiap kategori:\n\nManusia — Dua staf produksi senior resign bulan lalu dan belum tergantikan. Staf baru yang menggantikan mereka belum melewati training penuh tapi sudah dilepas kerja mandiri.\n\nProses — SOP quality control sebetulnya ada, tapi sering dilewati kalau sedang kejar target produksi. Tidak ada yang ditugaskan meng-enforce-nya.',
      'Alat/Sistem — Mesin utama sudah enam bulan tidak diservis rutin karena anggaran maintenance dipotong awal tahun. Toleransi produksinya mulai bergeser — hasilnya produk yang lolos QC visual tapi gagal di penggunaan nyata.',
      'Eksternal — Supplier bahan baku utama mengganti formula tanpa pemberitahuan resmi. Tim baru tahu dari komplain klien, bukan dari supplier. Perubahan ini berkontribusi ke variasi kualitas yang nggak konsisten tiap batch.',
    ],
  },
  {
    id: 'c5-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Dalam Fishbone untuk masalah kualitas produk tadi, faktor "supplier ganti formula bahan baku tanpa pemberitahuan" masuk ke kategori ________.',
    options: ['Eksternal', 'Proses', 'Manusia', 'Alat/Sistem'],
    correctAnswer: 'Eksternal',
    successFeedback:
      'Tepat. Supplier itu pihak di luar kendali langsung bisnis Anda — masuknya Eksternal. Ini penting karena cara responnya beda: Anda nggak bisa "memperbaiki" supplier, tapi bisa memasang proses verifikasi bahan baku yang lebih ketat sebelum masuk produksi — dan itu masuk Proses.',
    errorFeedback:
      'Coba lagi. Supplier adalah pihak luar yang tidak bisa langsung Anda kendalikan — itu definisinya Eksternal. Kalau yang kurang adalah SOP untuk memverifikasi bahan baku dari supplier, itu baru masuk Proses. Penting untuk memisahkan keduanya, karena solusinya pun berbeda.',
  },
  {
    id: 'c5-card-11',
    type: 'info',
    icon: Scale,
    eyebrow: 'Memilih Alat yang Tepat',
    title: '5 Whys atau Fishbone? Aturan Praktisnya Simpel',
    body: [
      'Pakai 5 Whys kalau: masalahnya kelihatan punya satu rantai sebab-akibat yang lurus, atau tim sudah punya satu hipotesis akar yang kuat dan perlu diverifikasi. Cepat, nggak butuh banyak orang, bisa dipakai langsung di tengah rapat tanpa persiapan khusus.',
      'Pakai Fishbone kalau: masalahnya terlihat berasal dari banyak faktor sekaligus, atau tim sudah terjebak debat tentang "penyebabnya apa" karena tiap orang lihat dari sudut yang beda. Fishbone justru memanfaatkan sudut pandang yang berbeda-beda itu — bukan menghindarinya.',
      'Sinyal paling kuat buat pindah ke Fishbone: tim Anda sudah nemu satu penyebab lewat 5 Whys, tapi secara intuitif semua orang merasa itu belum cukup menjelaskan seluruh masalahnya. Itu tanda ada faktor lain yang belum dipetakan — dan Fishbone yang akan membantu menemukannya.',
    ],
  },
  {
    id: 'c5-card-12',
    type: 'info',
    icon: Ban,
    eyebrow: 'Jebakan yang Sering Terjadi',
    title: 'Dua Jebakan yang Bikin RCA Nggak Pernah Sampai ke Akar',
    body: [
      'Jebakan pertama: berhenti terlalu dini. "Why 1" dijawab, semua langsung angguk-angguk, dan rapat lanjut ke solusi. Padahal jawaban itu masih gejala — bukan akar. Aturan sederhananya: kalau jawaban Anda masih bisa ditanya "kenapa?" lagi dengan cara yang bermakna, Anda belum sampai.',
      'Jebakan kedua: berhenti di "siapa", bukan di sistemnya. "Kenapa kualitas turun? Karena si Budi ceroboh." Pertanyaan RCA yang benar bukan siapa yang salah — tapi sistem apa yang memungkinkan kecerobohan itu terjadi dan tidak tertangkap. Orang berganti, sistem yang dibiarkan rusak akan tetap rusak.',
      'Catatan: cara memimpin diskusi biar tim nggak terjebak saling tunjuk jari itu topik Bab 6. Tugas bab ini hanya sampai ke metodologinya — tahu alat yang benar, dan tahu kapan berhenti.',
    ],
  },
  {
    id: 'c5-card-13',
    type: 'multiple-choice',
    question:
      'Tiga bulan terakhir, karyawan di beberapa divisi mengeluhkan hal yang sama: mereka nggak tahu harus menghubungi siapa kalau butuh keputusan cepat — manajer, HR, atau owner langsung. Akibatnya ada keputusan yang terlambat, ada yang diputuskan oleh orang yang salah wewenangnya. Anda mau mulai analisis akarnya. Tool mana yang lebih tepat dipakai pertama?',
    options: [
      '5 Whys — ini kelihatan satu rantai lurus, cukup tanya kenapa beberapa kali',
      'Fishbone — kemungkinan besar ada beberapa faktor dari arah yang berbeda (Manusia, Proses, Alat/Sistem) yang terlibat sekaligus',
      'Nggak perlu tool, langsung interview manajer satu per satu',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Masalah ini lintas divisi dan kelihatan berasal dari beberapa arah: mungkin struktur wewenang yang nggak jelas (Proses), mungkin manajer yang belum pernah dibriefing soal scope keputusannya (Manusia), mungkin nggak ada sistem dokumentasi siapa punya wewenang apa (Alat/Sistem). Fishbone akan memetakan semua ini sebelum Anda terjebak satu jawaban yang terlalu sempit.',
    errorFeedback:
      'Coba lagi. Masalah ini lintas divisi, lintas orang, dengan beberapa kemungkinan penyebab dari arah yang berbeda — itu tanda klasik yang cocok untuk Fishbone. 5 Whys cocok kalau Anda sudah punya satu hipotesis akar yang kuat dan mau memverifikasinya. Di sini, hipotesisnya saja belum jelas.',
  },
  {
    id: 'c5-card-14',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Bawa Alat Ini ke Masalah yang Sudah Anda Ceritakan di Bab 1',
    body: [
      'Di Entri Pertama buku kerja Anda, Anda cerita satu masalah besar yang bikin kaget — padahal kalau dipikir-pikir, tanda-tandanya sebenarnya sudah ada sebelum meledak.',
      'Sekarang waktunya bawa alat ini ke masalah itu. Coba lakukan satu pass 5 Whys: mulai dari masalah itu sendiri, tanya "kenapa?" secara berantai, dan lihat seberapa dalam Anda bisa sampai. Tuliskan di kertas dulu sebelum isi kartu berikutnya.',
      'Ini bukan ujian — nggak ada jawaban yang salah. Tapi sangat berguna untuk mengecek: setelah semua yang Anda pelajari hari ini, seberapa yakin Anda sudah benar-benar tahu akar masalah yang sesungguhnya dari kejadian itu?',
    ],
  },
  {
    id: 'c5-card-15',
    type: 'finding-review',
    eyebrow: 'Entri Kelima · Buku Kerja EBR Anda',
    title: '5 Whys Pass: Seberapa Dalam Anda Sudah Menggali?',
    recap: [
      {
        label: 'Masalah yang bikin kaget (Entri Pertama)',
        cardId: 'c1-card-15',
        fieldId: 'incident',
      },
      {
        label: 'Tanda-tanda yang sebenarnya sudah ada',
        cardId: 'c1-card-15',
        fieldId: 'warningSign',
      },
    ],
    scorePrompt:
      'Setelah melakukan pass 5 Whys untuk masalah di atas — seberapa yakin Anda sudah sampai ke akar masalah yang sesungguhnya, bukan sekadar gejala?',
    justificationLabel:
      'Apa yang Anda temukan di ujung rantai "kenapa?" itu — dan kenapa Anda memberi skor itu?',
    justificationPlaceholder:
      'Contoh: Di Why 3 saya nemu bahwa nggak pernah ada SOP yang jelas untuk situasi ini. Skor 3 karena saya yakin sudah cukup dalam, tapi mungkin masih ada lapisan sistem yang belum tergali.',
    storageKey: 'chapter5-five-whys-practice',
  },
  {
    id: 'c5-card-16',
    type: 'reflection',
    eyebrow: 'Entri Keenam · Buku Kerja EBR Anda',
    prompt:
      'Pilih masalah berbeda yang Anda rasa punya "banyak faktor" — dan petakan ke dalam kategori Fishbone.',
    fields: [
      {
        id: 'fishbone-problem',
        label: 'Masalah apa yang Anda petakan?',
        placeholder: 'Contoh: Perputaran staf di divisi operasional sangat tinggi dalam 6 bulan terakhir',
      },
      {
        id: 'fishbone-categories',
        label:
          'Faktor apa yang mungkin berkontribusi dari tiap kategori? Isi minimal 2 dari 4: Manusia / Proses / Alat-Sistem / Eksternal',
        placeholder:
          'Contoh:\nManusia: gaji di bawah rata-rata pasar, beban kerja tidak seimbang antar shift\nProses: tidak ada jalur karier yang jelas, feedback dari atasan hanya muncul waktu ada masalah\nEksternal: kompetitor baru buka cabang di kota yang sama dan aktif merekrut staf kami',
      },
    ],
  },
  {
    id: 'c5-card-17',
    type: 'info',
    icon: Map,
    eyebrow: 'Selesai Bab 5',
    title: 'Alat Sudah di Tangan. Tapi Nemu Akar Aja Belum Cukup.',
    body: [
      'Sekarang Anda punya dua alat untuk membedah masalah sampai ke akarnya: 5 Whys untuk masalah dengan satu rantai sebab-akibat yang lurus, dan Fishbone untuk masalah yang faktornya datang dari banyak arah sekaligus.',
      'Tapi ada satu langkah yang sering gagal setelah analisis selesai — dan ini yang memisahkan tinjauan yang menghasilkan perubahan dari tinjauan yang cuma jadi obrolan panjang.',
      'Bab berikutnya: cara memimpin diskusi biar temuan RCA beneran jadi aksi — bukan didengarkan, angguk-angguk, lalu dilupakan begitu rapat selesai.',
    ],
  },
]
