import {
  ArrowRight,
  MapPin,
  Layers,
  Smartphone,
  FolderOpen,
  RefreshCw,
  BookOpen,
  UserCheck,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter5Cards: Card[] = [
  {
    id: 'c5-card-1',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Bab 5 · Akses di Titik Kerja',
    title: 'Formatnya Sudah Beres — Sekarang: Apakah SOP Itu Bisa Dijangkau Saat Orang Butuhnya?',
    body: [
      'Di Bab 4, Anda mengubah SOP naratif yang tidak ada yang buka jadi checklist yang bisa diikuti sambil kerja. Formatnya sekarang jauh lebih baik.',
      'Tapi bayangkan skenario ini: checklist yang bagus itu tersimpan di mana? Di folder Drive yang harus dibuka dulu? Di laptop admin yang hari itu tidak masuk? Di binder kantor — sementara staf yang butuh lagi di gudang atau lantai produksi?',
      'Format yang sempurna tidak akan banyak membantu kalau akses ke SOP itu sendiri masih jadi hambatan. Bab ini benerin itu — bukan soal memindahkan file ke folder baru, tapi soal memastikan SOP ada di tempat yang benar: di titik kerja itu sendiri, pas orang butuhnya, bukan terkubur jauh dari sana.',
    ],
  },
  {
    id: 'c5-card-2',
    type: 'info',
    icon: MapPin,
    eyebrow: 'Prinsip Utama',
    title: 'SOP Harus Ada di Mana Orang Butuhnya — Bukan di Mana Anda Menyimpannya',
    body: [
      'Ini prinsip paling penting di bab ini — dan paling sering dilanggar: SOP seharusnya ada di titik kerja itu sendiri, bukan cuma tersimpan rapi di suatu tempat yang perlu sengaja dibuka dulu.',
      'Di kantor admin ada, di folder Drive ada, di laptop ada. Tapi kalau operator di lantai produksi butuh SOP saat lagi di mesin — dan SOP itu ada di laptop admin di ruangan berbeda — SOP itu sebenarnya tidak tersedia. Secara teknis ada, tapi praktis tidak terjangkau di momen yang paling penting.',
      'Pertanyaan yang tepat bukan "di mana SOP ini disimpan?" tapi "di mana orang paling sering membutuhkan SOP ini — dan apakah di sana sudah ada?"',
    ],
  },
  {
    id: 'c5-card-3',
    type: 'info',
    icon: Layers,
    eyebrow: 'Tiga Cara Konkret',
    title: 'Ditempel, Dilaminating, atau QR Code — Pilih yang Paling Pas untuk Titik Kerjanya',
    body: [
      'Ada beberapa format yang terbukti efektif menempatkan SOP benar-benar di titik kerja, bukan sekadar tersimpan.',
      'Pertama: ditempel di dinding dekat mesin atau area kerja yang relevan. Ukuran huruf yang cukup, tidak terlalu padat — bisa dibaca dari jarak wajar tanpa harus mendekat. Kedua: kartu laminating di meja kerja atau digantung di dekat alat. Lebih tahan lama dari kertas biasa, tidak rusak kena cipratan air atau debu, mudah dilap. Ketiga: QR code yang ditempel di alat atau area kerja — dipindai dengan HP, langsung buka SOP digital versi terbaru. Cocok untuk SOP yang sering diupdate karena tidak perlu cetak ulang setiap kali ada perubahan.',
      'Tidak ada satu format yang selalu paling benar. Yang paling benar adalah yang paling mudah diakses oleh orang yang membutuhkan, di momen yang paling kritis.',
    ],
  },
  {
    id: 'c5-card-4',
    type: 'yes-no',
    question:
      'Bayangkan SOP yang paling kritis di bisnis Anda — yang paling sering dibutuhkan dan paling berdampak kalau dilangkahi. Apakah SOP itu tersedia langsung di titik kerja, atau orang harus cari dulu sebelum bisa mengaksesnya?',
    yesLabel: 'Tersedia langsung di titik kerja — bisa dijangkau tanpa cari ke tempat lain',
    noLabel: 'Harus dibuka dari folder, laptop, atau tanya orang dulu',
    feedbackYes:
      'Bagus — ini yang harusnya jadi standar untuk semua SOP kritis. Baca terus, karena masih ada soal penamaan, struktur folder digital, dan siapa yang bertanggung jawab menjaga SOP itu tetap terkini.',
    feedbackNo:
      'Ini pola yang sangat umum. SOP ada — tapi aksesnya tidak di tempat yang tepat. Bab ini kasih Anda cara konkret untuk mengubah itu, mulai dari yang paling mudah diterapkan dulu.',
  },
  {
    id: 'c5-card-5',
    type: 'info',
    icon: Smartphone,
    eyebrow: 'Digital vs Fisik',
    title: 'Bukan Soal Preferensi — Pilih Media yang Sesuai Konteks Titik Kerja',
    body: [
      'Pertanyaan "digital atau fisik?" sering dijawab berdasarkan kebiasaan — "kami sudah pakai Drive" atau "kami selalu cetak." Padahal jawaban yang tepat bergantung sepenuhnya pada konteks titik kerja.',
      'Media fisik (cetak, laminating, kartu kerja) cocok untuk: area kerja tanpa akses gawai atau internet stabil — lantai produksi, gudang, dapur restoran, area outdoor. Pekerjaan yang butuh kedua tangan dan tidak bisa berhenti untuk buka HP. SOP yang jarang berubah sehingga tidak perlu cetak ulang sering-sering.',
      'Media digital (shared folder terstruktur, shortcut di desktop, link pinned di grup kerja, QR code ke dokumen cloud) cocok untuk: pekerjaan yang sudah dekat komputer atau HP sepanjang waktu. SOP yang sering diupdate — perubahan langsung tersedia tanpa cetak ulang. Tim yang tersebar di banyak lokasi yang harus mengakses dokumen yang sama.',
    ],
  },
  {
    id: 'c5-card-6',
    type: 'multiple-choice',
    question:
      'Sebuah pabrik pengolahan makanan punya SOP checklist kebersihan untuk operator lantai produksi. Ada aturan no gadget di area produksi untuk alasan higienitas — tidak ada HP yang boleh masuk. SOP ini paling sering dibutuhkan saat awal dan akhir shift. Format mana yang paling tepat?',
    options: [
      'Digital — simpan di Google Drive supaya selalu versi terbaru dan mudah diakses',
      'Fisik — cetak, laminating, tempel di area kerja atau simpan di clipboard shift',
      'QR code di dinding area produksi — dipindai HP saat dibutuhkan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Area produksi tanpa HP = media digital tidak bisa diakses di momen yang dibutuhkan. QR code tidak berguna tanpa HP. Satu-satunya pilihan yang benar-benar bisa diakses di sana: fisik, dicetak dan dilaminating, tersedia langsung di area kerja.',
    errorFeedback:
      'Ingat konteksnya: tidak ada HP yang boleh masuk area produksi. Drive tidak bisa dibuka, QR code tidak bisa dipindai. Apapun yang butuh gawai tidak akan berhasil di sana. Pilihan yang benar-benar bisa diakses di momen yang paling kritis hanya satu: media fisik.',
  },
  {
    id: 'c5-card-7',
    type: 'multiple-choice',
    question:
      'Tim customer service sebuah toko online bekerja sepanjang hari di depan komputer. SOP penanganan komplain mereka sering diupdate — rata-rata dua kali sebulan — karena ada kebijakan retur yang terus berkembang. Format mana yang paling masuk akal?',
    options: [
      'Cetak dan tempel di meja kerja — supaya selalu kelihatan saat kerja',
      'Dokumen digital di folder bersama atau shortcut di desktop — mudah diakses dan otomatis terbaru setiap diupdate',
      'Keduanya, cetak untuk referensi cepat dan digital sebagai cadangan',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kerja di depan komputer + SOP yang sering diupdate = digital adalah pilihan yang jauh lebih efisien. Mencetak SOP yang berubah dua kali sebulan hanya akan menciptakan versi lama yang beredar di meja kerja. Shortcut atau link yang langsung ke dokumen terbaru adalah yang paling masuk akal.',
    errorFeedback:
      'Pertimbangkan frekuensi perubahannya: dua kali sebulan. Cetak fisik akan terus ketinggalan dan menciptakan versi lama yang beredar. Kalau tim sudah di depan komputer sepanjang hari, akses digital via shortcut atau folder bersama adalah pilihan yang paling efisien dan selalu terkini.',
  },
  {
    id: 'c5-card-8',
    type: 'info',
    icon: FolderOpen,
    eyebrow: 'Struktur Folder & Penamaan File',
    title: 'Ketemu dalam Satu Menit atau Tidak Ketemu Sama Sekali',
    body: [
      'Pindahkan SOP ke lokasi digital — tapi kalau folder dan nama filenya tidak terstruktur, hasilnya sama saja: tidak ada yang bisa menemukan apa yang mereka cari di momen yang tepat.',
      'Tes sederhananya: minta satu staf yang belum pernah masuk ke folder itu — beri tahu nama SOP yang mereka butuhkan, lalu minta temukan filenya. Kalau lebih dari satu menit, strukturnya bermasalah. Bukan karena stafnya tidak kompeten, tapi karena struktur foldernya tidak intuitif untuk orang yang bukan pembuatnya.',
      'Prinsip yang bikin SOP bisa ditemukan cepat: nama folder pakai kategori yang jelas dan natural (bukan "Dokumen 2023 Final Fix v2" yang cuma masuk akal bagi yang bikin). Nama file pakai nama proses yang orang benar-benar pakai saat bicara ("SOP Pembukaan Toko — Checklist Harian", bukan "Prosedur Operasional Unit Ritel Revisi 3"). Dan pisahkan dengan jelas antara SOP aktif dan arsip versi lama — jangan campurkan di folder yang sama.',
    ],
  },
  {
    id: 'c5-card-9',
    type: 'multiple-choice',
    question:
      'Seorang kasir baru butuh SOP untuk proses retur barang. Dia masuk ke Google Drive bisnis dan menemukan dua pilihan folder. Mana yang kemungkinan besar bisa dia temukan SOP-nya dalam satu menit?',
    options: [
      'Folder: "Dokumen Operasional Rev 2024 Final" → subfolder: "Prosedur Kasir & Pelayanan v3 (1)" → file: "SOP Retur Barang Update OK Final.docx"',
      'Folder: "SOP Operasional" → subfolder: "Kasir" → file: "Retur Barang — Checklist Kasir.pdf"',
      'Folder: "File Tim" → subfolder: "Penting" → file: "retur baru.docx"',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Struktur kedua logis, langsung, dan namanya sesuai cara orang bicara. Tidak perlu menebak subfolder mana yang tepat, tidak ada kata "Final" atau "v3" yang membingungkan, dan nama file langsung menjelaskan isinya. Kasir baru bisa navigasi ke sana tanpa perlu penjelasan tambahan.',
    errorFeedback:
      'Bandingkan ketiganya. Pilihan pertama punya nama yang hanya masuk akal bagi yang bikin ("Rev 2024 Final", "v3 (1)", "Update OK Final"). Pilihan ketiga terlalu generik — "Penting" tidak membantu siapapun. Pilihan kedua adalah yang paling mudah dinavigasi oleh orang yang belum pernah masuk ke folder itu sebelumnya.',
  },
  {
    id: 'c5-card-10',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Menjaga SOP Tetap Terkini',
    title: 'SOP yang Tidak Diupdate Perlahan Jadi "Dokumen Berdebu" Lagi — Meski Aksesnya Sudah Gampang',
    body: [
      'Anda sudah memindahkan SOP ke lokasi yang mudah dijangkau, formatnya sudah beres. Tapi ada satu jebakan yang sering tidak diantisipasi: proses bisnis berubah, tapi SOP tidak ikut berubah. Dalam beberapa bulan, SOP yang mudah diakses itu perlahan jadi tidak relevan — dan orang mulai mengabaikannya persis seperti sebelumnya. Ini yang di Bab 3 disebut masalah relevansi.',
      'Ini masalah kepemilikan. Harus ada satu orang yang secara eksplisit bertanggung jawab untuk update SOP kalau ada perubahan — bukan "semua orang tanggung jawab," karena itu artinya tidak ada yang tanggung jawab. Satu orang, peran spesifik, nama yang bisa disebut.',
      'Dan harus ada trigger yang jelas kapan review dilakukan — jangan nunggu ada masalah baru sadar SOPnya sudah usang. Dua jenis trigger yang paling efektif: (1) event-based — tiap kali ada perubahan alat, sistem, atau proses, SOP yang terkait ditinjau dalam X hari kerja; (2) periodic — review rutin tiap X bulan, terlepas ada perubahan atau tidak.',
    ],
  },
  {
    id: 'c5-card-11',
    type: 'yes-no',
    question:
      'Di bisnis Anda sekarang — untuk SOP yang paling kritis sekalipun — apakah ada satu orang yang secara eksplisit ditugaskan untuk menjaga SOP itu tetap terkini, dengan pemicu yang jelas kapan review dilakukan?',
    yesLabel: 'Ada — ada orangnya dan ada trigger review yang jelas',
    noLabel: 'Belum ada, atau "semua orang tanggung jawab" yang artinya tidak ada yang tanggung jawab',
    feedbackYes:
      'Bagus. Kepemilikan yang jelas adalah fondasi agar SOP tidak balik jadi "dokumen berdebu." Pastikan trigger review Anda sudah mencakup dua jenis: perubahan proses dan review berkala — bukan hanya salah satunya.',
    feedbackNo:
      'Ini gap yang sangat umum — dan berbahaya. Tanpa pemilik yang jelas, SOP yang sudah bagus formatnya dan mudah diakses pun akan perlahan ketinggalan realita. Di Entri Kelima nanti, Anda akan menetapkan pemilik ini secara eksplisit.',
  },
  {
    id: 'c5-card-12',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Nyata',
    title: 'SOP Onboarding Karyawan Baru: Dari Terkubur di Laptop Admin ke Akses yang Benar-benar Berhasil',
    body: [
      'Sebuah toko retail punya SOP onboarding karyawan baru — ditulis dua tahun lalu, tersimpan di laptop HRD. Karyawan baru belajarnya dari senior yang paling dikenal sabar, dan tiap angkatan belajar hal yang sedikit berbeda.',
      'Diagnosis akar masalahnya: bukan format (SOPnya sudah cukup jelas), bukan relevansi (prosesnya belum banyak berubah). Murni masalah akses — tersimpan di laptop satu orang yang tidak selalu masuk, dan tidak ada yang tahu filenya ada di mana.',
      'Yang dilakukan: (1) SOP dikonversi ke Google Doc, disimpan di folder "SOP Operasional → HR & Onboarding" yang semua manajer bisa akses. (2) Link langsung disimpan sebagai shortcut di desktop komputer area HRD dan di-pin di WhatsApp grup manajer. (3) HRD ditetapkan sebagai pemilik — wajib review tiap ada perubahan alur onboarding atau tiap enam bulan sekali. Hasilnya: karyawan baru berikutnya langsung dikasih link SOPnya hari pertama — bukan diarahkan ke senior yang paling sabar.',
    ],
  },
  {
    id: 'c5-card-13',
    type: 'multiple-choice',
    question:
      'Dari contoh toko retail tadi — kenapa perubahan lokasi penyimpanan bisa membuat perbedaan sebesar itu, meski isi SOPnya tidak berubah sama sekali?',
    options: [
      'Karena Google Docs lebih modern dan staf lebih familiar dengan platform itu',
      'Karena lokasi baru bisa diakses semua orang yang relevan kapanpun dibutuhkan — tidak lagi bergantung pada satu orang yang harus hadir dan tahu di mana filenya',
      'Karena dengan dikasih ke karyawan baru hari pertama, mereka jadi lebih termotivasi untuk membacanya',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Isi SOPnya tidak berubah — yang berubah adalah siapa yang bisa mengaksesnya, kapan, dan tanpa hambatan apa. SOP yang sama menjadi jauh lebih berguna hanya karena tidak lagi tersimpan di satu titik yang bergantung pada kehadiran satu orang tertentu.',
    errorFeedback:
      'Bukan soal platform atau motivasi. Isi SOPnya tidak berubah sama sekali — yang berubah adalah aksesnya. Versi lama bergantung pada satu orang yang harus hadir dan tahu di mana filenya. Versi baru bisa diakses siapapun yang relevan, kapanpun dibutuhkan, tanpa bergantung pada satu orang.',
  },
  {
    id: 'c5-card-14',
    type: 'reflection',
    eyebrow: 'Entri Kelima · Buku Kerja SOP Anda',
    prompt:
      'Sekarang rancang akses baru untuk SOP yang sudah Anda kerjakan sejak Bab 3 — di mana SOP ini harus ditempatkan supaya benar-benar bisa dijangkau di titik kerja, dan siapa yang bertanggung jawab menjaganya tetap terkini.',
    fields: [
      {
        id: 'sop-access-location',
        label: 'Di mana lokasi akses baru untuk SOP ini — fisik, digital, atau kombinasi? Sebutkan spesifik.',
        placeholder:
          'Contoh: Dicetak dan dilaminating, ditempel di samping mesin packing. Plus versi digital di folder "SOP Operasional → Produksi → Packing", shortcut di desktop komputer supervisor...',
      },
      {
        id: 'sop-update-owner',
        label: 'Siapa yang bertanggung jawab menjaganya tetap up to date — dan kapan atau apa pemicu review-nya?',
        placeholder:
          'Contoh: Supervisor shift bertanggung jawab. Trigger: (1) tiap ada perubahan alat atau proses terkait → review dalam 3 hari kerja; (2) review berkala tiap 3 bulan...',
      },
    ],
  },
  {
    id: 'c5-card-15',
    type: 'info',
    icon: UserCheck,
    eyebrow: 'Selesai Bab 5',
    title: 'SOP-nya Sekarang Mudah Ditemukan dan Ada yang Jaga Tetap Update — Tapi Itu Belum Selesai',
    body: [
      'Anda baru saja merancang dua hal yang sering dilewatkan setelah susah payah bikin SOP: di mana SOP harus benar-benar ada — bukan cuma tersimpan di suatu tempat — dan siapa yang bertanggung jawab memastikannya tidak diam-diam ketinggalan realita.',
      'Tapi ketemu tidak sama dengan dipatuhi. SOP yang mudah diakses dan terkini masih bisa diabaikan — kalau tidak ada mekanisme yang memverifikasi apakah orang benar-benar mengikutinya.',
      'Bab 6 masuk ke sana: cara membangun pengecekan kepatuhan rutin — dari "diikuti sebagian" ke "diverifikasi aktif."',
    ],
  },
]
