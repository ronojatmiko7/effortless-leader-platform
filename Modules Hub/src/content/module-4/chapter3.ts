import {
  PenLine,
  Footprints,
  ArrowRightLeft,
  Boxes,
  ClipboardList,
  NotebookPen,
  Route,
  FileDown,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter3Cards: Card[] = [
  {
    id: 'c3-card-1',
    type: 'info',
    icon: PenLine,
    eyebrow: 'Bab 3 · Memetakan L1-L2',
    title: 'Sekarang Giliran Anda Menggambar Peta Sendiri',
    body: [
      'Di Bab 2, Anda paham konsep 4 levelnya. Sekarang saatnya praktik: menggambar peta L1 (rantai nilai end-to-end) proses bisnis Anda sendiri, dan menandai titik-titik serah terimanya.',
      'Ini nggak butuh software mahal atau pelatihan diagram formal. Cukup kertas, sticky notes, atau papan tulis — dan kejujuran soal bagaimana proses itu SEBENARNYA berjalan, bukan bagaimana seharusnya di atas kertas.',
    ],
  },
  {
    id: 'c3-card-2',
    type: 'info',
    icon: Route,
    eyebrow: 'Titik Mulai & Titik Selesai',
    title: 'Peta L1 Selalu Dimulai dan Berakhir di Pelanggan',
    body: [
      'Aturan penting: peta L1 selalu dimulai dari pelanggan (permintaan masuk) dan berakhir di pelanggan lagi (kebutuhan terpenuhi) — bukan dari sudut pandang satu departemen.',
      'Kenapa ini penting? Kalau Anda mulai menggambar dari sudut pandang internal (misalnya "mulai dari Produksi menerima order"), peta Anda gampang keburu terpotong di batas departemen, dan justru melewatkan titik-titik silo paling awal — di mana permintaan pelanggan pertama kali masuk dan diteruskan.',
    ],
  },
  {
    id: 'c3-card-3',
    type: 'info',
    icon: Footprints,
    eyebrow: 'Caranya',
    title: '"Jalan Proses" — Cara Paling Sederhana Menggambar L1',
    body: [
      'Teknik paling ampuh dan paling murah: "jalan proses" (walk the process). Ikuti satu pekerjaan nyata — bukan yang ideal, yang benar-benar terjadi — dari awal masuk sampai selesai, lintas semua tim yang menyentuhnya.',
      'Di tiap titik perpindahan, tanya dua pertanyaan sederhana: siapa yang kasih pekerjaan/informasi ini ke saya, dan ke siapa saya kasih setelah selesai? Tulis jawabannya sebagai kotak dan panah.',
      'Lakukan ini bareng orang-orang yang benar-benar mengerjakan tiap langkah — bukan cuma Anda menebak dari kursi kantor. Sering kali proses yang sebenarnya berjalan beda dari yang dibayangkan pemilik bisnis.',
    ],
  },
  {
    id: 'c3-card-4',
    type: 'info',
    icon: Boxes,
    eyebrow: 'Contoh L1 Lengkap',
    title: 'Contoh: Dari Order Masuk sampai Barang Terkirim & Dibayar',
    body: [
      'Berikut contoh peta L1 sederhana untuk proses umum SME: Pelanggan Order (masuk lewat sales/WA/toko) → Konfirmasi Stok & Harga (sales cek ke gudang/produksi) → Produksi/Siapkan Barang → Quality Check → Kirim/Serahkan ke Pelanggan → Tagih & Terima Pembayaran → Tutup Order & Arsip.',
      'Perhatikan: tiap panah di sini melintasi batas antara dua tim yang berbeda — sales ke gudang, gudang ke produksi, produksi ke pengiriman, pengiriman ke keuangan. Tiap panah itu adalah kandidat titik serah terima yang perlu ditandai.',
    ],
  },
  {
    id: 'c3-card-5',
    type: 'info',
    icon: ArrowRightLeft,
    eyebrow: 'Menandai Titik Kritis',
    title: 'Tandai Panah yang Menyeberangi Batas Departemen',
    body: [
      'Nggak semua panah di peta L1 sama pentingnya untuk didiagnosis. Panah DI DALAM satu departemen (misalnya dari satu meja produksi ke meja produksi lain) biasanya relatif lancar, karena masih dalam satu tim dengan satu atasan.',
      'Panah yang menyeberangi batas departemen — sales ke produksi, produksi ke pengiriman, pengiriman ke keuangan — itu yang perlu ditandai khusus. Di situlah biasanya silo hidup, karena melibatkan dua tim dengan target dan cara kerja berbeda.',
      'Tandai tiap panah lintas departemen di peta Anda dengan jelas — ini yang akan jadi bahan diagnosis di Bab 4.',
    ],
  },
  {
    id: 'c3-card-6',
    type: 'multiple-choice',
    question:
      'Dari contoh peta L1 di atas, panah mana yang PALING layak ditandai sebagai titik serah terima yang perlu didiagnosis lebih dalam?',
    options: [
      'Panah dari "meja potong bahan" ke "meja jahit" — keduanya di dalam tim produksi',
      'Panah dari "Produksi/Siapkan Barang" ke "Kirim/Serahkan ke Pelanggan" — lintas dua tim berbeda',
      'Kedua panah itu sama pentingnya untuk didiagnosis',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Panah yang menyeberangi batas dua tim berbeda (produksi ke pengiriman) itu titik paling rawan silo — bukan panah di dalam satu tim yang sama.',
    errorFeedback:
      'Coba lagi. Panah di dalam satu tim (meja potong ke meja jahit, keduanya produksi) biasanya relatif lancar. Yang paling rawan adalah panah yang menyeberangi batas dua tim yang berbeda.',
  },
  {
    id: 'c3-card-7',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Turun ke L2',
    title: 'Contoh: Memecah Satu Kotak L1 Jadi L2',
    body: [
      'Sekarang ambil satu kotak dari peta L1 tadi — misalnya "Produksi/Siapkan Barang" — dan pecah jadi sub-langkah L2 di dalamnya: Terima Spesifikasi dari Sales → Cek Ketersediaan Bahan Baku → Proses Produksi → Quality Check Internal → Serahkan ke Tim Pengiriman.',
      'Perhatikan: sub-langkah pertama dan terakhir di L2 ini justru adalah titik serah terima yang sama dengan yang sudah ditandai di L1 — "Terima Spesifikasi dari Sales" dan "Serahkan ke Tim Pengiriman." Ini normal — L2 memberi detail lebih rinci tentang bagaimana persisnya titik serah terima itu terjadi di dalam satu departemen.',
    ],
  },
  {
    id: 'c3-card-8',
    type: 'sort-list',
    question:
      'Sebuah SME bisnis kuliner katering punya langkah-langkah berikut dalam urutan acak. Urutkan jadi alur L1 end-to-end yang benar, dari pelanggan sampai pelanggan.',
    items: [
      'Tim dapur memasak sesuai pesanan',
      'Pelanggan memesan lewat WhatsApp/telepon',
      'Tim pengiriman mengantar pesanan ke lokasi pelanggan',
      'Admin mengonfirmasi menu, jumlah, dan tanggal ke tim dapur',
    ],
    correctAnswer: [
      'Pelanggan memesan lewat WhatsApp/telepon',
      'Admin mengonfirmasi menu, jumlah, dan tanggal ke tim dapur',
      'Tim dapur memasak sesuai pesanan',
      'Tim pengiriman mengantar pesanan ke lokasi pelanggan',
    ],
    successFeedback:
      'Tepat. Dan perhatikan: ada tiga titik serah terima lintas tim di sini — pelanggan ke admin, admin ke dapur, dapur ke tim pengiriman. Tiga-tiganya kandidat kuat untuk didiagnosis di Bab 4.',
    errorFeedback:
      'Belum pas. Urutannya: pelanggan memesan, admin mengonfirmasi ke dapur, dapur memasak, tim pengiriman mengantar. Perhatikan alurnya selalu dari pelanggan, lewat tim internal, balik lagi ke pelanggan.',
  },
  {
    id: 'c3-card-9',
    type: 'yes-no',
    question:
      'Dari peta yang baru Anda pikirkan tadi: apakah ada titik serah terima di mana Anda sendiri nggak yakin persis siapa yang harus mengerjakan apa?',
    yesLabel: 'Ada, minimal satu titik yang nggak jelas',
    noLabel: 'Tidak, semuanya jelas siapa mengerjakan apa',
    feedbackYes:
      'Itu wajar, dan justru itulah gunanya menggambar peta — begitu dituliskan, titik yang nggak jelas jadi kelihatan, bukan cuma kerasa samar-samar.',
    feedbackNo:
      'Bagus — tapi tetap lanjut ke Bab 4, karena "jelas siapa mengerjakan apa" belum tentu berarti serah terimanya juga CEPAT dan EFISIEN. Itu dua hal yang beda.',
  },
  {
    id: 'c3-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Peta L1 yang baik selalu dimulai dan diakhiri dari sudut pandang ________ — bukan dari sudut pandang satu departemen internal.',
    options: ['pelanggan', 'pemilik', 'investor', 'supplier'],
    correctAnswer: 'pelanggan',
    successFeedback:
      'Tepat. Mulai dan berakhir dari pelanggan memastikan peta Anda mencakup seluruh perjalanan, bukan cuma potongan yang kelihatan dari satu departemen.',
    errorFeedback:
      'Bukan itu. Peta L1 yang baik dimulai dan diakhiri dari sudut pandang pelanggan — permintaan masuk sampai kebutuhan terpenuhi.',
  },
  {
    id: 'c3-card-11',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Sekarang Petakan Proses Utama Bisnis Anda Sendiri',
    body: [
      'Waktunya praktik langsung. Pikirkan satu proses utama di bisnis Anda — biasanya yang paling sering terjadi atau paling penting buat pendapatan (order sampai kirim, permintaan layanan sampai selesai, dan sejenisnya).',
      'Sebutkan tim/departemen apa saja yang terlibat dari awal sampai akhir, dan tandai 2-3 titik serah terima lintas departemen yang paling menonjol — nggak perlu sempurna, cukup jujur sesuai apa yang benar-benar terjadi.',
    ],
  },
  {
    id: 'c3-card-12',
    type: 'reflection',
    eyebrow: 'Entri Ketiga · Buku Kerja Proses Anda',
    prompt:
      'Petakan proses utama bisnis Anda dan tandai titik-titik serah terima lintas departemennya.',
    fields: [
      {
        id: 'main-process',
        label: 'Proses utama apa yang mau Anda petakan, dan tim/departemen apa saja yang terlibat?',
        placeholder: 'Contoh: Dari order pelanggan sampai barang terkirim — melibatkan Sales, Gudang, Produksi, Pengiriman, Keuangan',
      },
      {
        id: 'handoff-points',
        label: 'Sebutkan 2-3 titik serah terima lintas departemen di sepanjang proses itu.',
        placeholder: 'Contoh: Sales ke Gudang (konfirmasi stok), Produksi ke Pengiriman (barang siap kirim)',
      },
    ],
  },
  {
    id: 'c3-card-worksheet',
    type: 'worksheet',
    icon: FileDown,
    eyebrow: 'Alat bantu praktis',
    title: 'Kanvas Peta Proses 4 Tingkat',
    body: [
      'Anda baru saja memetakan proses utama bisnis Anda di kepala. Unduh kanvas cetak ini untuk menggambarnya beneran — kotak dan panah, per departemen, sampai ke L2, L3, dan L4.',
      'Cukup kertas dan pena. Ini alat bantu visual yang nggak bisa digantikan kolom teks biasa.',
    ],
    downloadUrl: '/downloads/kanvas-peta-proses-4-tingkat.pdf',
    buttonText: 'Unduh PDF - Kanvas Peta Proses',
  },
  {
    id: 'c3-card-13',
    type: 'info',
    icon: PenLine,
    eyebrow: 'Selesai Bab 3',
    title: 'Sekarang Anda Sudah Punya Peta Rantai Nilai Anda Sendiri',
    body: [
      'Anda sekarang sudah punya peta L1 (dan contoh pemecahan ke L2) proses utama bisnis Anda, lengkap dengan titik-titik serah terimanya yang sudah ditandai.',
      'Bab depan: cara membedah titik-titik itu satu per satu, buat menemukan mana yang beneran silo fungsional, mana yang cuma approval berlebih, dan mana yang cuma bottleneck biasa.',
    ],
  },
]
