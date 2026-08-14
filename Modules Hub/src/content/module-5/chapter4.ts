import {
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Eye,
  Layers,
  BookOpen,
  FileText,
  Compass,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter4Cards: Card[] = [
  {
    id: 'c4-card-1',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Bab 4 · Memperbaiki Format',
    title: 'Bab 3 Bilang Masalah Anda Ada di Format — Sekarang Cara Benerinnya',
    body: [
      'Di Bab 3, Anda mendiagnosis kenapa SOP spesifik Anda tidak dipakai. Kalau lensa yang paling dominan adalah format — isinya mungkin sudah benar, tapi cara penulisannya yang jadi penghalang — bab ini yang menyelesaikan itu.',
      'Bab ini tidak minta Anda menulis ulang SOP dari nol. Ini soal mengubah cara Anda mempresentasikan langkah-langkah yang sudah ada supaya bisa benar-benar dipakai di lapangan — bukan cuma dibaca sekali saat training dan dilupakan.',
      'Ada empat prinsip. Satu teknik konversi. Dan satu contoh sebelum–sesudah yang langsung memperlihatkan bedanya.',
    ],
  },
  {
    id: 'c4-card-2',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Kenapa Format Itu Penting',
    title: 'Konten yang Benar, Format yang Salah — Hasilnya Sama Saja: Tidak Dipakai',
    body: [
      'SOP dengan masalah format bukan SOP yang isinya salah. Langkah-langkahnya bisa tepat, urutannya masuk akal, informasinya lengkap. Tapi kalau formatnya tidak memungkinkan orang menggunakannya di tengah-tengah kerja, isi yang benar itu tidak ada gunanya.',
      'Bayangkan staf sedang di tengah proses kerja, butuh konfirmasi langkah selanjutnya, lalu buka dokumen SOP — dan yang mereka hadapi adalah tiga halaman paragraf padat. Berapa detik sebelum mereka menutup dokumen itu dan kerja dari ingatan?',
      'Format yang baik bukan soal estetika. Ini soal fungsionalitas: apakah dokumen ini bisa berfungsi sebagai panduan kerja nyata di momen yang paling dibutuhkan?',
    ],
  },
  {
    id: 'c4-card-3',
    type: 'info',
    icon: CheckCircle,
    eyebrow: 'Prinsip #1 dari 4',
    title: 'Actionable, Bukan Deskriptif: Tiap Baris Harus Jadi Instruksi yang Bisa Langsung Dikerjakan',
    body: [
      'Lihat dua kalimat ini: "Pastikan aliran diatur dengan benar" versus "Putar kran A ke kanan sampai mentok." Dua-duanya bermaksud hal yang sama — tapi hanya satu yang bisa dikerjakan tanpa interpretasi tambahan.',
      'Kalimat deskriptif seperti "pastikan prosedur dijalankan dengan baik," "perhatikan standar kualitas," atau "pastikan alat berfungsi optimal" terdengar profesional di dokumen — tapi bagi staf di lapangan, itu bukan instruksi. Itu pernyataan yang masih harus diterjemahkan jadi tindakan.',
      'Setiap baris SOP Anda seharusnya bisa dijawab dengan "sudah" atau "belum" — tanpa perlu interpretasi lebih lanjut. Kalau masih perlu ditafsirkan dulu, itu paragraf — bukan instruksi.',
    ],
  },
  {
    id: 'c4-card-4',
    type: 'multiple-choice',
    question:
      'Sebuah SOP restoran untuk proses pembersihan dapur mencantumkan langkah ini: "Pastikan area dapur terjaga kebersihannya sesuai standar." Apa masalahnya?',
    options: [
      'Tidak ada masalah — langkahnya sudah cukup jelas',
      'Ini deskriptif, bukan actionable — staf tidak tahu persis apa yang harus dikerjakan',
      'Terlalu teknis — harusnya pakai bahasa yang lebih sederhana',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. "Pastikan area dapur terjaga kebersihannya" adalah pernyataan, bukan instruksi. Staf masih harus menebak: siapa yang membersihkan apa, dengan alat apa, sampai standar seperti apa? Versi actionable-nya: "☐ Lap permukaan kompor dengan kain basah → ☐ Sikat lantai dengan sapu → ☐ Pel dengan cairan disinfektan." Konkret, bisa dikerjakan, bisa diverifikasi.',
    errorFeedback:
      '"Pastikan area terjaga kebersihannya" tidak memberi tahu staf apa yang harus mereka kerjakan. Itu pernyataan tentang kondisi yang diinginkan — bukan instruksi tentang tindakan. Staf masih harus menebak sendiri apa yang dimaksud "standar."',
  },
  {
    id: 'c4-card-5',
    type: 'info',
    icon: Eye,
    eyebrow: 'Prinsip #2 dari 4',
    title: 'Visual, Bukan Cuma Teks: Orang Butuh Lihat, Bukan Cuma Baca',
    body: [
      'Terutama untuk SOP yang dipakai di lapangan atau lantai produksi: foto atau diagram di langkah-langkah kritis menghapus ruang interpretasi yang selama ini jadi sumber kesalahan. SOP berbasis teks saja masih menyisakan celah — "tekan sampai bunyi klik," bunyinya seperti apa? "Isi sampai garis batas," garis yang mana?',
      'Foto kondisi "sudah benar" di tiap langkah kritis menutup celah itu dengan cara yang tidak bisa dilakukan oleh kata-kata paling presisi sekalipun. Kalau posisi kran harus diputar ke sudut tertentu — foto tangan yang sudah memutarnya ke posisi benar lebih jelas dari penjelasan sepanjang apapun.',
      'Catatan praktis: tidak perlu desain profesional. Foto yang diambil dengan HP, diberi tanda panah atau lingkaran merah, sudah jauh lebih efektif dari penjelasan panjang. Mulai dari satu langkah paling kritis — yang kalau salah, dampaknya paling besar.',
    ],
  },
  {
    id: 'c4-card-6',
    type: 'yes-no',
    question:
      'Di SOP yang Anda diagnosis di Bab 3 — ada foto, diagram, atau penanda visual di langkah-langkah yang paling kritis dan paling sering dilakukan salah?',
    yesLabel: 'Ada, beberapa langkah kritis sudah punya visual',
    noLabel: 'Belum ada — semuanya masih teks saja',
    feedbackYes:
      'Bagus — visual sudah ada. Langkah berikutnya: pastikan visual itu ada di langkah yang benar-benar paling kritis dan paling sering jadi sumber kesalahan — bukan cuma di langkah yang mudah. Kadang visual justru terpasang di tempat yang tidak paling membutuhkan.',
    feedbackNo:
      'Ini peluang perbaikan yang konkret dan relatif cepat. Tidak perlu langsung semua langkah — mulai dari satu atau dua yang paling sering jadi sumber kesalahan atau pertanyaan. Ambil foto kondisi "benar" dengan HP, beri tanda, pasang di samping langkah itu.',
  },
  {
    id: 'c4-card-7',
    type: 'info',
    icon: Layers,
    eyebrow: 'Prinsip #3 dari 4',
    title: 'Satu Halaman Kalau Bisa: Yang Bisa Dilihat Sekali Pandang Lebih Mungkin Dipakai',
    body: [
      'SOP yang bisa dilihat seluruhnya dalam satu tampilan — satu halaman cetak atau satu layar — secara psikologis jauh lebih mudah dipakai. Orang tidak harus kehilangan konteks tiap kali pindah halaman atau scroll jauh.',
      'Kalau SOP Anda saat ini butuh lima halaman, pertanyaan pertamanya bukan "gimana kita persingkat ini" — tapi "berapa banyak dari ini yang benar-benar perlu ada di format kerja harian?" Banyak detail penting untuk referensi tapi tidak perlu ada di checklist yang dipakai sehari-hari. Pisahkan keduanya.',
      'Format kerja harian: checklist ringkas satu halaman yang bisa diikuti sambil kerja. Dokumen referensi lengkap: tetap ada untuk konteks lebih dalam, orientasi, atau auditor. Tidak harus pilih salah satu — tapi yang ditempel di titik kerja harusnya yang ringkas.',
    ],
  },
  {
    id: 'c4-card-8',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Prinsip #4 dari 4',
    title: 'Bahasa Orang Lapangan, Bukan Bahasa Kantor: Pakai Kata yang Staf Benar-benar Pakai',
    body: [
      'SOP yang ditulis oleh manajer di kantor dan SOP yang bisa dibaca cepat oleh staf di lapangan sering punya satu perbedaan mencolok: pilihan kata. "Lakukan verifikasi terhadap integritas komponen sebelum aktivasi sistem" terdengar formal di rapat — tapi di lantai kerja, staf tidak bicara seperti itu.',
      'Versi yang dipakai di lapangan: "Cek kondisi part sebelum nyalain mesin." Tidak ada yang hilang dari maknanya — justru sebaliknya, ini yang lebih cepat dibaca dan lebih mudah diikuti di momen kerja nyata.',
      'Cara paling mudah menguji ini: tunjukkan satu langkah SOP ke staf yang paling sering kerja di area itu. Kalau mereka membacanya pelan-pelan atau ada kata yang perlu dijelaskan — itu sinyal bahasanya perlu disesuaikan ke bahasa mereka, bukan sebaliknya.',
    ],
  },
  {
    id: 'c4-card-9',
    type: 'multiple-choice',
    question:
      'SOP checklist harian untuk lantai produksi saat ini mencantumkan: "Lakukan pengecekan terhadap kondisi mesin guna memastikan kelayakan operasional." Mana versi yang paling tepat untuk checklist lapangan?',
    options: [
      '"Verifikasi status operasional unit mesin sesuai standar prosedural yang berlaku"',
      '"Cek kondisi mesin — ada yang tidak normal? Lapor ke supervisor sebelum nyalain"',
      '"Mesin harus dalam kondisi baik sebelum dioperasikan"',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Singkat, konkret, dalam bahasa yang staf lapangan benar-benar pakai, dan sudah mengandung instruksi tindak lanjut yang jelas. Itu format yang bisa diikuti tanpa interpretasi tambahan.',
    errorFeedback:
      'Bandingkan ketiga pilihan. Opsi pertama pakai bahasa formal yang tidak natural di lantai kerja. Opsi ketiga deskriptif — itu pernyataan kondisi, bukan instruksi. Yang paling actionable dan natural untuk staf lapangan adalah opsi kedua.',
  },
  {
    id: 'c4-card-10',
    type: 'info',
    icon: Compass,
    eyebrow: 'Teknik Konversi',
    title: 'Empat Langkah Mengubah SOP Naratif Jadi Checklist yang Bisa Dipakai di Lapangan',
    body: [
      'Langkah 1: Pecah narasi jadi langkah bernomor pendek — satu kalimat per langkah, satu tindakan per kalimat. Potong semua penjelasan dan latar belakang yang tidak perlu ada di checklist; pindahkan ke dokumen referensi terpisah kalau masih relevan. Langkah 2: Ubah semua kalimat deskriptif jadi instruksi actionable — setiap baris harus bisa dijawab "sudah" atau "belum" tanpa perlu interpretasi tambahan.',
      'Langkah 3: Tandai langkah-langkah kritis — yang kalau salah, dampaknya paling besar atau paling susah diperbaiki. Di langkah-langkah ini, tambahkan visual: foto kondisi benar, diagram urutan, atau ikon peringatan. Langkah 4: Susun dalam format satu halaman dengan checkbox di tiap langkah — pastikan bisa dicetak dan dilihat seluruhnya tanpa scroll atau flip.',
      'Setelah draft pertama selesai, ujikan ke satu staf yang paling sering kerja di area itu. Tanya mereka baca dan ikuti tanpa penjelasan tambahan dari Anda. Setiap langkah yang bikin mereka berhenti dan bertanya — itu langkah yang perlu diperbaiki.',
    ],
  },
  {
    id: 'c4-card-11',
    type: 'sort-list',
    question:
      'Urutkan empat langkah konversi SOP naratif ke checklist lapangan dari yang pertama dikerjakan ke yang terakhir:',
    items: [
      'Ubah kalimat deskriptif jadi instruksi actionable — tiap baris bisa dijawab "sudah" atau "belum"',
      'Tambahkan visual di langkah-langkah kritis — foto kondisi benar atau diagram urutan',
      'Pecah teks naratif jadi langkah bernomor pendek — satu tindakan per baris',
      'Susun dalam format satu halaman dengan checkbox, lalu ujikan ke satu staf tanpa penjelasan',
    ],
    correctAnswer: [
      'Pecah teks naratif jadi langkah bernomor pendek — satu tindakan per baris',
      'Ubah kalimat deskriptif jadi instruksi actionable — tiap baris bisa dijawab "sudah" atau "belum"',
      'Tambahkan visual di langkah-langkah kritis — foto kondisi benar atau diagram urutan',
      'Susun dalam format satu halaman dengan checkbox, lalu ujikan ke satu staf tanpa penjelasan',
    ],
    successFeedback:
      'Tepat. Urutannya ada logikanya: tidak bisa membuat langkah actionable sebelum memisahkannya dari narasi; tidak bisa menambahkan visual sebelum tahu langkah mana yang kritis; tidak bisa menyusun format final sebelum kontennya beres. Terakhir, ujikan — karena yang jelas bagi Anda mungkin tidak jelas bagi orang yang baru pertama kali baca.',
    errorFeedback:
      'Urutannya ada logikanya: pertama pisahkan narasi jadi langkah-langkah terpisah, baru bisa diubah jadi instruksi actionable, baru bisa ditandai mana yang kritis untuk visual, baru disusun ke format final dan diujikan ke staf.',
  },
  {
    id: 'c4-card-12',
    type: 'info',
    icon: FileText,
    eyebrow: 'Contoh Sebelum–Sesudah',
    title: 'SOP Penanganan Retur: Dari Empat Paragraf ke Checklist Lapangan',
    body: [
      'SOP Penanganan Retur Barang — ditulis dalam empat paragraf, tersimpan di Word, hampir tidak pernah dibuka kasir yang justru butuhnya di tengah transaksi.',
      'VERSI LAMA: "Ketika ada pelanggan yang ingin mengembalikan barang yang telah dibeli, staf toko harus memastikan bahwa barang tersebut masih dalam kondisi yang memungkinkan untuk diretur sesuai dengan kebijakan toko. Staf perlu memeriksa kelengkapan dokumen pendukung termasuk bukti pembelian asli. Setelah verifikasi selesai, staf dapat memproses pengembalian dana atau penukaran barang sesuai dengan preferensi pelanggan. Catatan transaksi retur perlu dicatat pada sistem yang tersedia."',
      'VERSI BARU: ☐ 1. Tanya pelanggan alasan retur — catat di form  ☐ 2. Cek struk/bukti beli asli — tidak ada struk, retur tidak bisa diproses  ☐ 3. Cek kondisi barang: kemasan asli masih ada? [pasang foto standar kondisi layak retur di sini]  ☐ 4. Kalau layak: tanya pelanggan mau tukar atau refund?  ☐ 5. Proses di sistem kasir → pilih menu "Retur"  ☐ 6. Cetak bukti retur → tanda tangani bersama pelanggan',
      'Yang hilang dari versi lama ke versi baru: penjelasan kebijakan yang tidak perlu ada di checklist. Yang tetap ada: setiap langkah yang harus dikerjakan. Yang ditambahkan: urutan yang jelas, checkpoint eksplisit, dan penanda di mana foto harus dipasang.',
    ],
  },
  {
    id: 'c4-card-13',
    type: 'multiple-choice',
    question:
      'Dari contoh retur barang tadi — apa perbedaan paling signifikan antara versi naratif dan versi checklist yang berdampak langsung pada pemakaian di lapangan?',
    options: [
      'Versi checklist lebih pendek — staf lebih suka yang singkat',
      'Versi checklist memisahkan instruksi kerja dari latar belakang kebijakan, dan setiap langkah sudah actionable serta bisa diverifikasi langsung',
      'Versi checklist lebih formal dan terlihat lebih profesional',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Panjangnya memang berkurang — tapi itu bukan tujuannya. Yang penting: versi checklist hanya menyimpan apa yang perlu dikerjakan, dalam urutan yang bisa diikuti langkah demi langkah, tanpa perlu memilah sendiri dari narasi panjang. Pemilahan itu sudah dilakukan untuk staf.',
    errorFeedback:
      'Bukan soal panjang-pendeknya, dan bukan soal formalitas. Yang paling signifikan: versi checklist memisahkan instruksi kerja dari penjelasan kebijakan, dan setiap baris sudah actionable — bisa dikerjakan dan bisa dicentang. Narasi panjang memaksa staf memilah sendiri mana yang perlu dikerjakan; checklist sudah melakukan pemilahan itu.',
  },
  {
    id: 'c4-card-14',
    type: 'reflection',
    eyebrow: 'Entri Keempat · Buku Kerja SOP Anda',
    prompt:
      'Sekarang giliran Anda. Ambil satu bagian SOP yang Anda diagnosis di bab sebelumnya — yang paling bertele-tele atau paling sering dilewati. Tulis ulang dalam format checklist menggunakan empat prinsip yang baru Anda pelajari.',
    fields: [
      {
        id: 'sop-old-snippet',
        label: 'Salin satu bagian dari SOP lama Anda yang bermasalah di format (cukup satu paragraf atau dua–tiga langkah):',
        placeholder:
          'Contoh: "Pastikan kondisi ruang produksi sudah sesuai standar kebersihan sebelum aktivitas dimulai. Operator bertanggung jawab memastikan semua peralatan dalam kondisi layak pakai..."',
      },
      {
        id: 'sop-new-checklist',
        label: 'Tulis ulang versi checklistnya di sini (bernomor, instruksi actionable, bahasa lapangan):',
        placeholder:
          'Contoh:\n☐ 1. Lap meja kerja dengan kain bersih\n☐ 2. Cek kondisi mesin — ada suara abnormal? Lapor ke supervisor\n☐ 3. Pastikan bahan baku sudah di tempat sebelum mulai',
      },
    ],
  },
  {
    id: 'c4-card-15',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 4',
    title: 'Formatnya Sekarang Jauh Lebih Gampang Dipakai — Tapi Masih Ada Satu Masalah Lagi',
    body: [
      'Anda baru saja menerapkan empat prinsip format dan satu teknik konversi yang mengubah SOP dari "dokumen yang perlu dibaca" jadi "checklist yang bisa diikuti sambil kerja." Itu perubahan besar.',
      'Tapi ada satu masalah yang format tidak bisa selesaikan sendirian: kalau SOP yang bagus itu tersimpan di tempat yang susah dicari — entah di folder yang berantakan, di laptop satu orang, atau di gedung yang berbeda — tetap saja nggak kepake.',
      'Bab 5 benerin itu: membangun akses SOP di titik kerja, bukan terkubur di folder.',
    ],
  },
]
