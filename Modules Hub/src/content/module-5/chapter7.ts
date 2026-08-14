import {
  Wrench,
  Package,
  ArrowRightLeft,
  ClipboardCheck,
  MessageSquare,
  BookOpen,
  NotebookPen,
  ArrowRight,
  AlertCircle,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter7Cards: Card[] = [
  {
    id: 'c7-card-1',
    type: 'info',
    icon: Wrench,
    eyebrow: 'Bab 7 · Lokakarya Kegunaan SOP',
    title: 'Anda Sudah Punya Semua Bagiannya — Sekarang Saatnya Menyatukan',
    body: [
      'Empat bab terakhir bukan latihan yang berdiri sendiri. Di Bab 3, Anda mendiagnosis kenapa persisnya SOP Anda tidak dipakai — format, akses, atau relevansinya yang bermasalah. Di Bab 4, Anda merancang ulang formatnya jadi checklist yang bisa diikuti di lapangan. Di Bab 5, Anda menentukan di mana SOP itu harus benar-benar ada — dan siapa yang menjaganya tetap terkini. Di Bab 6, Anda merancang mekanisme untuk mengecek apakah SOP itu benar-benar diikuti.',
      'Semuanya sudah ada — tapi selama ini masih tersebar jadi latihan-latihan terpisah. Bab ini adalah lokakaryanya: menyatukan semuanya jadi satu rancangan ulang yang utuh, konkret, dan siap dijalankan untuk SOP yang sama yang Anda diagnosis dari awal.',
      'Bukan teori baru. Bukan framework tambahan. Cukup ambil apa yang sudah Anda kerjakan — dan rakitnya jadi satu.',
    ],
  },
  {
    id: 'c7-card-2',
    type: 'info',
    icon: Package,
    eyebrow: 'Satu Paket Utuh',
    title: 'Rancangan Ulang yang Lengkap Itu Tiga Hal Sekaligus — Bukan Satu',
    body: [
      'Banyak yang merombak SOP setengah jalan: formatnya diperbaiki, tapi lokasi aksesnya masih di tempat yang sama — susah dijangkau. Atau lokasi aksesnya dipindahkan, tapi tidak ada yang mengecek apakah SOP itu diikuti. Setiap perbaikan parsial masih menyisakan celah yang bisa dilewati.',
      'Rancangan ulang yang lengkap itu berarti tiga hal sekaligus, untuk SOP yang sama: format baru yang bisa diikuti di lapangan (dari Bab 4), lokasi akses baru di titik kerja (dari Bab 5), dan mekanisme kepatuhan yang aktif mengecek (dari Bab 6). Tiga-tiganya untuk satu SOP — bukan masing-masing untuk SOP yang berbeda.',
      'Kalau salah satu hilang, celahnya masih terbuka. Format bagus tapi susah diakses — tetap tidak dipakai. Akses mudah tapi tidak dicek — tetap bisa diam-diam diabaikan. Mekanisme cek ada tapi SOPnya tidak bisa diikuti — tim frustrasi karena ditagih standar yang tidak jelas. Ketiganya harus ada bersamaan.',
    ],
  },
  {
    id: 'c7-card-3',
    type: 'info',
    icon: ArrowRightLeft,
    eyebrow: 'Sebelum vs Sesudah',
    title: 'Konkret: Seperti Apa SOP Versi Lama vs Versi Baru',
    body: [
      'VERSI LAMA — ciri-ciri yang sudah familiar: Format: dokumen panjang di Word atau PDF, penuh paragraf, tersimpan di folder yang tidak ada yang ingat lokasinya. Akses: harus dibuka dari laptop tertentu, atau nanya orang tertentu yang mungkin sedang tidak ada. Kepatuhan: diasumsikan — tidak ada yang mengecek, tidak ada yang tahu apakah SOP itu benar-benar diikuti hari ini.',
      'VERSI BARU — yang sudah Anda rancang: Format: checklist ringkas satu halaman, bahasa lapangan, instruksi yang bisa langsung dikerjakan dan dicentang. Akses: tersedia langsung di titik kerja — ditempel, dilaminating, atau via QR code — ada pemilik yang jelas yang menjaganya tetap terkini. Kepatuhan: ada mekanisme aktif — spot check, self-audit, atau sinyal tidak langsung — yang memverifikasi secara rutin, bukan cuma diasumsikan.',
      'Bedanya bukan di niat. Bedanya di desain. SOP versi lama tidak dirancang untuk dipakai di lapangan — versi baru Anda sudah.',
    ],
  },
  {
    id: 'c7-card-4',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis sudah memperbaiki format SOPnya jadi checklist yang ringkas — tapi SOP itu masih tersimpan di Google Drive yang sama, di folder yang susah ditemukan, dan tidak ada yang mengecek apakah diikuti atau tidak. Apa yang sudah berhasil dan apa yang masih kurang?',
    options: [
      'Semua sudah beres — format yang bagus sudah cukup untuk membuat SOP diikuti',
      'Format sudah diperbaiki, tapi akses dan mekanisme kepatuhan belum — dua dari tiga komponen masih terbuka',
      'Tidak ada yang berhasil — kalau aksesnya belum diperbaiki, format baru tidak ada gunanya sama sekali',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Format yang diperbaiki itu kemajuan nyata — tapi satu dari tiga komponen bukan rancangan ulang yang lengkap. Akses dan mekanisme kepatuhan yang masih bermasalah bisa membuat format baru itu tetap tidak terpakai. Ketiganya harus ditutup sekaligus.',
    errorFeedback:
      'Perhatikan: ada yang sudah berhasil (format baru) dan ada yang belum (akses dan mekanisme kepatuhan). Format yang bagus itu perlu — tapi SOP yang bagus tersimpan di tempat yang susah dicari, tanpa ada yang mengecek kepatuhannya, masih bisa diam-diam diabaikan. Persis seperti SOP lama.',
  },
  {
    id: 'c7-card-5',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Langkah Pertama Lokakarya',
    title: 'Cek Ulang Dulu Diagnosis Awal dari Bab 3',
    body: [
      'Sebelum merakit rancangan ulang yang utuh, ada satu langkah penting: cek ulang diagnosis yang Anda buat di Bab 3. Rancangan yang Anda susun di Bab 4–6 dirancang berdasarkan diagnosis itu — apakah masih akurat setelah Anda melalui prosesnya lebih dalam?',
      'Kadang setelah mengerjakan Bab 4–6 secara konkret, Anda bisa melihat gambar yang lebih jelas dari sebelumnya. Mungkin akar masalahnya lebih kompleks dari yang awalnya kelihatan — atau justru lebih sederhana dari yang diasumsikan. Bagaimanapun, rancangan ulang yang baik harus menjawab masalah yang tepat.',
      'Kartu berikutnya akan menampilkan kembali diagnosis Anda dari Bab 3, dan meminta Anda menilai seberapa yakin bahwa rancangan yang sudah Anda susun benar-benar memperbaiki masalah itu.',
    ],
  },
  {
    id: 'c7-card-6',
    type: 'finding-review',
    eyebrow: 'Entri Ketujuh · Buku Kerja SOP Anda',
    title: 'Seberapa Yakin Rancangan Ulang Ini Memperbaiki Masalah yang Anda Diagnosis?',
    recap: [
      { label: 'SOP yang Anda diagnosis (Bab 3)', cardId: 'c3-card-14', fieldId: 'sop-diagnosed' },
      { label: 'Akar masalah utama — lensa yang dominan (Bab 3)', cardId: 'c3-card-14', fieldId: 'dominant-lens' },
    ],
    scorePrompt:
      'Setelah merancang format baru (Bab 4), lokasi akses baru (Bab 5), dan mekanisme kepatuhan (Bab 6) — seberapa yakin Anda bahwa rancangan ulang itu benar-benar menjawab masalah yang Anda diagnosis di atas?',
    justificationLabel: 'Kenapa Anda (belum) yakin — dan apa yang masih mengganjal?',
    justificationPlaceholder:
      'Contoh: Cukup yakin — format lama memang jadi penghalang utama, dan checklist baru sudah jauh lebih ringkas. Yang masih sedikit mengganjal: belum tahu apakah pemilik SOP yang ditetapkan akan konsisten menjalankan tugasnya...',
    storageKey: 'chapter7-sop-redesign-review',
  },
  {
    id: 'c7-card-7',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Langkah yang Sering Dilompati',
    title: 'Rancangan Ulang yang Bagus Masih Bisa Gagal Kalau Cara Memperkenalkannya Salah',
    body: [
      'Ada satu jebakan yang sering terjadi setelah rancangan ulang selesai: dokumen baru ditaruh di tempatnya yang baru, checklist dicetak dan ditempel, sistem pengecekan dirancang — dan tim langsung diharapkan mulai mengikuti versi baru. Tanpa penjelasan. Tanpa konteks. Tanpa kesempatan untuk kasih masukan.',
      'Apa yang terjadi? Orang lapangan yang sudah terbiasa dengan cara lama — meski mereka tahu cara lama itu bermasalah — sering kali tidak langsung berpindah ke cara baru. Bukan karena tidak setuju. Tapi karena tidak ada yang menjelaskan kenapa perubahan ini dilakukan, apa yang berubah secara konkret, dan apakah mereka punya suara sebelum semuanya ditetapkan.',
      'SOP yang dipaksakan tanpa penjelasan biasanya bernasib sama seperti SOP lama: diam-diam diabaikan, atau diikuti hanya kalau ada yang mengawasi. Perubahan formatnya nyata — tapi resistensi diam-diam juga nyata.',
    ],
  },
  {
    id: 'c7-card-8',
    type: 'info',
    icon: MessageSquare,
    eyebrow: 'Cara yang Benar',
    title: 'Tiga Momen yang Membuat SOP Baru Benar-benar Diadopsi — Bukan Sekadar Diganti',
    body: [
      'Momen 1: Perkenalkan dulu sebelum diberlakukan. Jangan langsung tempel checklist baru dan pergi. Ambil waktu — bisa 15 menit di briefing atau di akhir shift — untuk menunjukkan versi baru dan menjelaskan apa yang berubah. "SOP lama kita sudah diganti karena [alasan konkret dari diagnosis Bab 3]. Ini versi barunya — jauh lebih ringkas dan sudah disesuaikan sama cara kerja kita sekarang."',
      'Momen 2: Jelaskan kenapa — bukan cuma apa. Orang lebih mudah menerima perubahan kalau mereka mengerti alasannya. Bukan "karena manajemen minta" — tapi alasan yang konkret dan relevan dengan pengalaman mereka sendiri: "Kita tahu SOP lama jarang dipakai karena kepanjangan dan susah dicari. Versi baru ini sudah dipangkas jadi yang paling penting saja, dan ditempel langsung di sini."',
      'Momen 3: Beri kesempatan masukan sebelum final. Sebelum SOP baru ditetapkan sebagai standar resmi, kasih satu atau dua hari buat tim lapangan mencoba dan kasih feedback — ada langkah yang masih membingungkan? Ada yang terasa tidak praktis di kondisi kerja nyata? Kalau mereka ikut membentuk SOP barunya, mereka jauh lebih mungkin mengikutinya.',
    ],
  },
  {
    id: 'c7-card-9',
    type: 'yes-no',
    question:
      'Kalau Anda langsung menempel SOP versi baru besok tanpa ada penjelasan atau sesi perkenalan sebelumnya — apa yang paling mungkin terjadi dalam dua minggu pertama?',
    yesLabel: 'Tim langsung pakai — kalau formatnya sudah lebih baik, orang akan ikut sendiri',
    noLabel: 'Banyak yang masih kerja dengan cara lama — perubahan tanpa konteks jarang langsung diikuti',
    feedbackYes:
      'Ini yang sering diasumsikan — dan sering salah. Format yang lebih baik memang membantu, tapi tidak otomatis mengubah kebiasaan yang sudah tertanam. Tanpa momen perkenalan, penjelasan kenapa, dan kesempatan kasih masukan, orang yang tidak tahu perubahan ini terjadi akan terus kerja seperti biasa — bahkan kalau SOPnya sudah jauh lebih baik.',
    feedbackNo:
      'Tepat. Kebiasaan kerja tidak berubah hanya karena dokumennya berubah. Ada effort ekstra yang perlu dilakukan: kenalkan perubahan, jelaskan kenapa, dan beri ruang untuk masukan sebelum ditetapkan final. Ini bukan soal minta izin — tapi soal membuat adopsi terjadi lebih mulus dan lebih tahan lama.',
  },
  {
    id: 'c7-card-10',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Lengkap Sebelum–Sesudah',
    title: 'SOP Penanganan Komplain: Rombakan dari Ujung ke Ujung',
    body: [
      'SOP LAMA — "SOP Penanganan Komplain Pelanggan": empat halaman dokumen Word, tersimpan di folder WhatsApp grup yang terbenam di ratusan pesan lain. Setiap ada komplain, kasir langsung WhatsApp pemilik — bukan buka SOP. Tidak ada yang pernah mengecek apakah SOP itu diikuti atau tidak. Diagnosis dari Bab 3: masalah format (empat halaman tidak bisa dibaca di tengah interaksi pelanggan) dan masalah akses (tersimpan di tempat yang susah ditemukan saat paling dibutuhkan).',
      'PERUBAHAN FORMAT (Bab 4): Dari empat halaman naratif jadi checklist enam langkah — satu baris per langkah, bahasa kasir sehari-hari, checkbox yang bisa dicentang saat kerja: ☐ Dengarkan dan catat keluhan ☐ Minta maaf tanpa menghakimi ☐ Cek apakah bisa diselesaikan langsung atau butuh eskalasi ☐ Kalau perlu eskalasi: hubungi supervisor, bukan WhatsApp pemilik ☐ Catat di buku komplain ☐ Informasikan solusi ke pelanggan dalam [X] jam. PERUBAHAN AKSES (Bab 5): Dicetak dan dilaminating, ditempel di samping mesin kasir. Versi digital di Google Drive folder "SOP Operasional → Kasir → Komplain", shortcut di HP supervisor. Pemilik: supervisor toko — review setiap ada perubahan kebijakan atau setiap enam bulan.',
      'MEKANISME KEPATUHAN (Bab 6): Self-audit — kasir mengisi form singkat di akhir shift kalau ada komplain hari itu: langkah mana yang diikuti, mana yang tidak, kenapa. Spot check supervisor 2× seminggu: cek buku komplain — ada yang tidak dicatat? Sinyal tidak langsung: kalau pemilik masih sering di-WhatsApp soal komplain pelanggan, itu sinyal kasir masih skip langkah eskalasi internal. MEMPERKENALKAN KE TIM: Sesi 15 menit di briefing Senin — tunjukkan checklist baru, jelaskan kenapa SOP lama jarang dipakai, kasih dua hari untuk coba dan kasih masukan sebelum resmi diberlakukan.',
    ],
  },
  {
    id: 'c7-card-11',
    type: 'multiple-choice',
    question:
      'Dari contoh rombakan SOP Penanganan Komplain di atas — kenapa sesi perkenalan 15 menit ke tim itu perlu, padahal format dan aksesnya sudah diperbaiki?',
    options: [
      'Supaya pemilik tidak dianggap berubah-ubah kebijakan tanpa alasan',
      'Karena format dan akses yang lebih baik tidak otomatis mengubah kebiasaan — tim perlu tahu kenapa berubah dan punya kesempatan kasih masukan sebelum ditetapkan final',
      'Karena tanpa sesi itu, kasir tidak akan tahu bahwa SOP baru sudah ditempel di samping kasir',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini bukan soal informasi teknis — kasir yang jeli pasti akan melihat checklist baru di samping kasir. Ini soal adopsi: orang yang paham kenapa perubahan dilakukan dan punya suara dalam prosesnya jauh lebih mungkin mengikuti standar baru dibanding orang yang sekadar menemukan dokumen baru ditempel tanpa konteks.',
    errorFeedback:
      'Bukan itu alasan utamanya. Sesi perkenalan bukan soal reputasi pemilik atau soal memberitahu lokasi SOP baru. Ini soal adopsi: kebiasaan kerja tidak berubah hanya karena dokumennya berubah. Orang yang tahu kenapa perubahan ini dilakukan — dan yang merasa punya suara dalam prosesnya — jauh lebih mungkin mengikuti standar baru secara konsisten.',
  },
  {
    id: 'c7-card-12',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Sekarang Rakit Rancangan Ulang Anda Sendiri Jadi Satu Gambaran Utuh',
    body: [
      'Anda sudah lihat contoh lengkapnya. Sekarang giliran Anda: rakit rancangan ulang yang utuh untuk SOP yang Anda kerjakan sejak Bab 3.',
      'Bukan tentang merancang dari nol — semua bahannya sudah ada. Format baru sudah ada di Entri Keempat. Lokasi akses baru sudah ada di Entri Kelima. Mekanisme kepatuhan sudah ada di Entri Keenam. Kartu berikutnya meminta Anda merangkumnya menjadi satu gambaran: apa yang berubah, ke mana, dan bagaimana kepatuhannya dicek.',
      'Ini bukan latihan lagi — ini rancangan yang benar-benar bisa Anda jalankan mulai minggu depan.',
    ],
  },
  {
    id: 'c7-card-13',
    type: 'reflection',
    eyebrow: 'Entri Kedelapan · Buku Kerja SOP Anda',
    prompt:
      'Tuliskan rancangan ulang lengkap untuk SOP yang sudah Anda kerjakan sejak Bab 3 — satukan format baru, lokasi akses baru, dan mekanisme kepatuhan menjadi satu gambaran yang utuh.',
    fields: [
      {
        id: 'format-change',
        label: 'Apa yang berubah dari format lama ke format baru?',
        placeholder:
          'Contoh: Dari dokumen Word 4 halaman jadi checklist 1 halaman — 8 langkah bernomor, bahasa lapangan, checkbox di setiap langkah. Penjelasan kebijakan dipindah ke dokumen referensi terpisah yang tidak perlu dibaca saat kerja...',
      },
      {
        id: 'access-location',
        label: 'Di mana lokasi akses barunya — dan siapa pemiliknya?',
        placeholder:
          'Contoh: Dicetak dan dilaminating, ditempel di samping mesin kasir. Versi digital di folder Drive "SOP Operasional → Kasir", shortcut di desktop. Pemilik: supervisor shift — review tiap ada perubahan atau setiap 3 bulan...',
      },
      {
        id: 'compliance-mechanism',
        label: 'Apa mekanisme kepatuhannya, dan siapa yang mengecek?',
        placeholder:
          'Contoh: Self-audit harian — staf isi checklist di akhir shift. Spot check 2× seminggu oleh supervisor, waktu ditentukan hari itu. Review di briefing Senin — ada yang tidak dicentang? Kenapa?...',
      },
    ],
  },
  {
    id: 'c7-card-14',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 7',
    title: 'Rancangan Ulang Ini Sudah Utuh di Atas Kertas — Bab Terakhir: Cara Menginstalnya',
    body: [
      'Anda baru saja menyelesaikan lokakarya penuh: diagnosis yang dikonfirmasi, format baru yang bisa diikuti di lapangan, lokasi akses yang benar-benar di titik kerja, mekanisme kepatuhan yang aktif mengecek, dan rencana memperkenalkan semuanya ke tim tanpa resistensi.',
      'Rancangan ulang SOP ini sudah utuh di atas kertas. Bab terakhir: cara menginstalnya biar beneran jalan minggu depan — bukan cuma rancangan bagus yang berakhir jadi dokumen berdebu berikutnya — dan laporan lengkap dari semua yang sudah Anda kerjakan sejak Bab 1.',
    ],
  },
]
