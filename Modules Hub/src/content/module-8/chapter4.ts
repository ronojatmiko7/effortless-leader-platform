import {
  ArrowRight,
  Target,
  MessageSquareQuote,
  PenLine,
  Users,
  Compass,
  Crosshair,
  FileSearch,
  ListChecks,
  NotebookPen,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter4Cards: Card[] = [
  {
    id: 'c4-card-1',
    type: 'info',
    icon: Target,
    eyebrow: 'Bab 4 · Dari Diagnosis ke Aksi',
    title: 'Anda Sudah Tahu Lensa Resistensinya — Sekarang Ubah Jadi Sesuatu yang Bisa Dipakai',
    body: [
      'Di Bab 3 Anda sudah mendiagnosis lensa resistensi paling dominan buat perubahan Anda — entah itu takut nggak kompeten, nggak jelas untungnya, trauma proyek sesaat, belum pernah dilatih, atau kombinasi dari beberapa lensa itu.',
      'Diagnosis itu nggak ada gunanya kalau berhenti di buku kerja. Bab ini mengubahnya jadi dua artefak konkret: kasus perubahan yang secara eksplisit menjawab lensa yang terdiagnosis, dan peta stakeholder yang bilang siapa perlu diyakinkan duluan.',
      'Dua artefak ini bukan latihan tambahan. Bab 5 dan seterusnya — rencana rollout, komunikasi, pelatihan — semuanya dibangun di atas apa yang Anda hasilkan di sini. Kalau kasus perubahan dan peta stakeholdernya lemah, rollout sebagus apapun bakal goyah dari fondasinya.',
    ],
  },
  {
    id: 'c4-card-2',
    type: 'info',
    icon: MessageSquareQuote,
    eyebrow: 'Kesalahan yang Paling Umum',
    title: '"Kita Perlu Efisiensi Lebih Baik" Bukan Kasus Perubahan — Itu Slogan',
    body: [
      'Coba dengar lagi kalimat-kalimat yang biasa dipakai buat mengumumkan perubahan: "biar lebih efisien," "biar prosesnya lebih rapi," "ini demi kemajuan bisnis kita bersama." Semuanya benar. Semuanya juga nggak nyambung ke siapa pun secara personal.',
      'Kalimat seperti itu abstrak karena ditulis dari sudut pandang bisnis, buat didengar oleh siapa saja, jadi ujung-ujungnya nggak benar-benar bicara ke siapa-siapa. Orang yang mendengarnya nggak tahu ini artinya apa buat kerjaan hariannya besok pagi.',
      'Kasus perubahan yang kerasa nyata itu kebalikannya: spesifik, dan menjawab langsung lensa resistensi yang sudah Anda diagnosis di Bab 3. Kalau Lensa 2 dominan — nggak jelas untungnya — kasus perubahan Anda harus eksplisit bilang ini bikin kerjaan mereka apa yang lebih mudah, lebih cepat, atau nggak seribet sekarang. Bukan cuma alasan dari sudut pandang owner.',
    ],
  },
  {
    id: 'c4-card-3',
    type: 'yes-no',
    question:
      'Coba ingat lagi cara Anda (atau bisnis Anda) biasanya mengumumkan perubahan selama ini. Apakah penjelasannya lebih sering berbentuk seperti "biar lebih efisien / lebih rapi / demi kemajuan bersama" — dibanding menjawab langsung apa untungnya buat orang yang menjalankan kerjaan hariannya?',
    yesLabel: 'Ya, biasanya memang seumum itu',
    noLabel: 'Nggak, biasanya sudah cukup spesifik ke tim',
    feedbackYes:
      'Ini pola paling umum, dan sekarang Anda tahu kenapa itu nggak cukup — bukan karena salah, tapi karena nggak menjawab pertanyaan yang sebenarnya ada di kepala tim. Sisa bab ini kasih Anda cara menyusun versi yang lebih tajam.',
    feedbackNo:
      'Bagus, berarti Anda sudah punya kebiasaan yang tepat arah. Tapi cek lagi setelah bab ini selesai — kasus perubahan yang spesifik ke lensa resistensi yang terdiagnosis biasanya masih lebih tajam dari yang biasa dipakai, meskipun sudah nggak generik.',
  },
  {
    id: 'c4-card-4',
    type: 'info',
    icon: PenLine,
    eyebrow: 'Formula',
    title: 'Tiga Hal yang Wajib Ada dalam Satu-Dua Kalimat',
    body: [
      'Kasus perubahan yang kerasa nyata nggak perlu panjang. Justru semakin panjang, semakin gampang balik lagi jadi abstrak. Yang dibutuhkan cuma tiga hal, dan idealnya muat dalam satu sampai dua kalimat: apa yang berubah, kenapa sekarang — bukan nanti-nanti — dan apa untungnya buat orang yang menjalankannya sehari-hari.',
      '"Apa yang berubah" harus konkret, bukan konsep. "Kenapa sekarang" penting karena tanpa itu, perubahan kerasa sewenang-wenang — kayak keputusan yang bisa ditunda-tunda selamanya, jadi buat apa buru-buru ikut sekarang.',
      'Dan bagian yang paling sering hilang: "apa untungnya buat orang yang menjalankannya" — bukan buat owner, bukan buat laporan bulanan, tapi buat orang yang tangannya beneran akan mengetik, mencatat, atau mengoperasikan perubahan itu tiap hari.',
    ],
  },
  {
    id: 'c4-card-5',
    type: 'info',
    icon: Compass,
    eyebrow: 'Kunci yang Sering Terlewat',
    title: 'Kasus Perubahan yang Baik Menjawab Lensa Resistensi Spesifik Anda — Bukan Lensa Siapa Pun',
    body: [
      'Ini bagian yang paling menentukan apakah kasus perubahan Anda bakal kerasa nyata atau cuma pengumuman yang lebih heboh: kasusnya harus menjawab langsung lensa yang Anda diagnosis di Bab 3, bukan generik yang bisa ditempel di perubahan apa saja.',
      'Kalau Lensa 1 dominan — takut nggak kompeten — kasus perubahan Anda perlu menyinggung bahwa akan ada ruang buat belajar tanpa dipermalukan, bukan cuma "ini mudah kok." Kalau Lensa 3 dominan — trauma proyek sesaat — kasusnya perlu bilang kenapa perubahan ini beda dari yang sebelumnya, dan apa yang membuktikan Anda serius kali ini.',
      'Kalau kasus perubahan Anda bisa dipakai persis sama buat perubahan lain yang sama sekali beda, itu tanda dia masih terlalu generik. Kasus yang tepat sasaran cuma masuk akal buat perubahan spesifik ini, buat tim spesifik ini, dengan alasan resistensi spesifik yang sudah Anda diagnosis.',
    ],
  },
  {
    id: 'c4-card-6',
    type: 'fill-in-the-blank',
    sentence:
      'Kasus perubahan yang cuma bilang "biar lebih efisien" gagal kerasa nyata bukan karena salah, tapi karena ditulis dari sudut pandang bisnis dan nggak menjawab pertanyaan yang sebenarnya ada di kepala tim: apa ________ buat saya yang menjalankannya sehari-hari.',
    options: ['untungnya', 'targetnya', 'risikonya', 'jadwalnya'],
    correctAnswer: 'untungnya',
    successFeedback:
      'Tepat. Pertanyaan yang sebenarnya ada di kepala tim adalah soal untungnya buat mereka pribadi — bukan buat laporan bulanan atau efisiensi bisnis secara umum.',
    errorFeedback:
      'Belum tepat. Kata kuncinya "untungnya" — kasus perubahan yang cuma bicara efisiensi bisnis nggak menjawab pertanyaan yang sebenarnya ada di kepala tim: apa untungnya buat mereka yang menjalankan kerjaan hariannya.',
  },
  {
    id: 'c4-card-7',
    type: 'multiple-choice',
    question:
      'Sebuah toko mendiagnosis Lensa 2 (nggak jelas untungnya) sebagai lensa dominan buat resistensi terhadap aplikasi pencatatan stok baru. Mana dari berikut ini kasus perubahan yang paling tepat sasaran menjawab lensa itu?',
    options: [
      '"Mulai bulan depan semua toko wajib pakai aplikasi stok baru demi keseragaman sistem perusahaan"',
      '"Kita ganti ke aplikasi stok mulai sekarang karena stok yang sering selisih bikin Anda kena tanya berkali-kali dari saya — dengan aplikasi ini, hitungannya otomatis cocok jadi Anda nggak perlu direcokin lagi soal itu"',
      '"Aplikasi stok ini penting banget buat efisiensi dan kemajuan bisnis kita ke depan"',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Opsi ini menjawab langsung Lensa 2 — bukan cuma bicara soal sistem perusahaan atau efisiensi abstrak, tapi eksplisit bilang apa untungnya buat admin yang menjalankannya: nggak direcokin lagi soal selisih stok.',
    errorFeedback:
      'Belum tepat. Yang menjawab Lensa 2 adalah opsi yang eksplisit bilang apa untungnya buat orang yang menjalankan kerjaan hariannya — bukan yang cuma bicara soal keseragaman sistem atau efisiensi bisnis secara umum.',
  },
  {
    id: 'c4-card-8',
    type: 'info',
    icon: Users,
    eyebrow: 'Artefak Kedua',
    title: 'Peta Stakeholder: Tiga Kategori Sederhana',
    body: [
      'Kasus perubahan yang bagus aja nggak cukup kalau Anda nggak tahu siapa yang perlu mendengarnya duluan, dan siapa yang kemungkinan besar akan menentukan apakah orang lain ikut atau nggak. Di sinilah peta stakeholder masuk.',
      'Tiga kategori sederhana buat setiap orang kunci yang terlibat: champion — kemungkinan besar mendukung, dan punya pengaruh buat menggerakkan rekan-rekannya ikut. Resistor — kemungkinan besar menolak, berdasarkan tanda-tanda yang sudah kelihatan. Dan yang belum jelas arahnya, tapi berpengaruh ke mayoritas tim.',
      'Kategori ketiga ini yang paling sering diabaikan pemilik bisnis. Orang ini sering kali informal leader — bukan posisi struktural tertinggi, tapi orang yang omongannya didengar di lantai produksi atau di grup WhatsApp tim, terlepas dari jabatannya di atas kertas.',
    ],
  },
  {
    id: 'c4-card-9',
    type: 'info',
    icon: Crosshair,
    eyebrow: 'Teknik Prioritas',
    title: 'Dua Sumbu: Pengaruh dan Dukungan — Prioritaskan yang Belum Jelas, Bukan yang Sudah Pasti',
    body: [
      'Buat tiap orang kunci yang terlibat, nilai dua hal: seberapa besar pengaruhnya ke orang lain di tim, dan seberapa besar dukungannya terhadap perubahan ini sejauh yang terlihat sekarang.',
      'Godaan paling umum adalah menghabiskan energi meyakinkan orang yang sudah jelas mendukung — rasanya menyenangkan karena responsnya positif, tapi nggak mengubah apa-apa karena mereka memang sudah di pihak Anda. Godaan kedua: mengabaikan orang yang pengaruhnya kecil, meski dukungannya rendah — nggak masalah, karena dampaknya ke tim secara keseluruhan minimal.',
      'Prioritas tertinggi adalah orang dengan pengaruh besar tapi dukungannya belum jelas atau masih rendah. Merekalah yang bisa mengubah arah keseluruhan tim ke satu sisi atau sisi lain — dan justru karena arahnya belum pasti, di sanalah usaha meyakinkan Anda paling berdampak.',
    ],
  },
  {
    id: 'c4-card-10',
    type: 'multiple-choice',
    question:
      'Ada empat orang di tim yang terlibat dalam sebuah perubahan: (A) pengaruh besar, dukungan sudah jelas positif; (B) pengaruh besar, dukungan belum jelas; (C) pengaruh kecil, kemungkinan besar menolak; (D) pengaruh kecil, dukungan sudah jelas positif. Siapa yang paling prioritas untuk diyakinkan duluan?',
    options: ['Orang A', 'Orang B', 'Orang C', 'Orang D'],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Orang B — pengaruh besar, dukungan belum jelas — adalah prioritas tertinggi. Dia yang paling bisa menggeser arah mayoritas tim, dan arahnya masih bisa dipengaruhi ke kedua sisi.',
    errorFeedback:
      'Belum tepat. Prioritas tertinggi adalah Orang B — pengaruh besar dengan dukungan yang belum jelas. Orang A sudah di pihak Anda, jadi meyakinkannya lagi nggak menggerakkan apa-apa. Orang C dan D pengaruhnya kecil, jadi dampaknya ke tim secara keseluruhan terbatas.',
  },
  {
    id: 'c4-card-11',
    type: 'info',
    icon: FileSearch,
    eyebrow: 'Contoh Kasus',
    title: 'Balik ke Toko dengan Tiga Admin yang Diam-Diam Balik Catat Manual',
    body: [
      'Ingat contoh dari Bab 3: toko retail ganti pencatatan stok dari buku manual ke aplikasi tablet, dan tiga admin diam-diam balik pakai catatan manual. Diagnosisnya waktu itu: kombinasi Lensa 1 (takut kelihatan lelet di depan pelanggan) dan Lensa 2 (nggak jelas untungnya buat mereka pribadi).',
      'Kasus perubahan lama yang gagal: "biar stoknya kecatat rapi di sistem, gampang buat laporan bulanan." Itu 100% sudut pandang owner, dan nggak menyinggung sama sekali ketakutan soal kelihatan lelet di depan pelanggan.',
      'Kasus perubahan baru yang menjawab kedua lensa itu: "Kita pakai aplikasi ini biar Anda nggak perlu mindahin catatan dua kali dari buku ke sistem tiap malam — dan minggu ini kita latihan bareng dulu di jam tutup toko, bukan pas lagi ramai pelanggan, biar nggak keburu-buru pas belum lancar."',
      'Perhatikan: kalimat itu langsung bicara soal beban kerja ganda yang hilang (Lensa 2) dan eksplisit menyediakan ruang latihan tanpa tekanan di depan pelanggan (Lensa 1). Itu yang membedakan kasus yang menjawab diagnosis, bukan kasus generik.',
    ],
  },
  {
    id: 'c4-card-12',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Contoh Kasus · Peta Stakeholder',
    title: 'Peta Stakeholder Toko Itu — Empat Orang, Tiga Kategori',
    body: [
      'Owner memetakan empat orang kunci di toko itu. Admin senior yang sudah delapan tahun kerja, pengaruhnya besar karena admin lain sering ikut caranya, tapi dukungannya belum jelas — dia salah satu dari tiga yang balik ke catatan manual. Ini prioritas tertinggi: pengaruh besar, dukungan belum jelas.',
      'Admin yang paling junior justru paling semangat pakai aplikasi sejak awal dan sering bantu rekan lain yang bingung — pengaruhnya sedang, dukungannya jelas positif. Ini champion, bukan prioritas utama buat diyakinkan lagi, tapi berguna dilibatkan buat bantu admin lain.',
      'Satu admin lain jelas-jelas bilang ke owner "saya nggak nyaman pegang tablet, tangan saya kotor kerja di gudang" — pengaruhnya kecil karena jarang berinteraksi dengan admin lain, dukungannya rendah. Ini resistor, tapi dengan pengaruh kecil, jadi bukan yang paling mendesak.',
      'Kesimpulan owner: fokus energi minggu ini ke admin senior itu — ajak ngobrol empat mata, dengar keberatannya, dan tunjukkan kasus perubahan yang sudah disesuaikan ke Lensa 1 dan 2. Kalau dia berubah arah, admin-admin lain yang masih ragu kemungkinan besar ikut.',
    ],
  },
  {
    id: 'c4-card-13',
    type: 'sort-list',
    question:
      'Berdasarkan contoh toko di atas, urutkan keempat admin dari yang paling prioritas diyakinkan duluan sampai yang paling nggak mendesak:',
    items: [
      'Admin junior — pengaruh sedang, dukungan sudah jelas positif (champion)',
      'Admin yang jelas menolak pegang tablet — pengaruh kecil, dukungan rendah (resistor)',
      'Admin senior delapan tahun — pengaruh besar, dukungan belum jelas',
    ],
    correctAnswer: [
      'Admin senior delapan tahun — pengaruh besar, dukungan belum jelas',
      'Admin yang jelas menolak pegang tablet — pengaruh kecil, dukungan rendah (resistor)',
      'Admin junior — pengaruh sedang, dukungan sudah jelas positif (champion)',
    ],
    successFeedback:
      'Tepat. Admin senior dengan pengaruh besar dan dukungan belum jelas adalah prioritas tertinggi — dialah yang paling bisa menggeser arah tim. Champion yang sudah jelas mendukung jadi prioritas paling rendah untuk "diyakinkan lagi," meski tetap berguna dilibatkan sebagai pendukung.',
    errorFeedback:
      'Belum tepat. Urutan prioritasnya: pengaruh besar + dukungan belum jelas dulu (admin senior), baru resistor dengan pengaruh kecil, dan champion yang sudah jelas mendukung jadi paling akhir karena dia sudah di pihak Anda.',
  },
  {
    id: 'c4-card-14',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Sebelum Entri Keempat',
    title: 'Sekarang Giliran Perubahan Anda — Bangun Kasus dan Peta Stakeholdernya',
    body: [
      'Anda sudah lihat formulanya, sudah lihat contoh yang menjawab lensa resistensi spesifik, dan sudah latihan memprioritaskan stakeholder lewat contoh toko. Sekarang giliran perubahan yang sudah Anda diagnosis di Bab 3.',
      'Buat kasus perubahan Anda: ingat lagi lensa dominan dari Entri Ketiga, lalu susun satu-dua kalimat yang menjawab langsung lensa itu — apa yang berubah, kenapa sekarang, dan apa untungnya buat tim yang menjalankannya sehari-hari.',
      'Buat peta stakeholder Anda: sebutkan minimal tiga orang kunci yang terlibat dalam perubahan ini, dan klasifikasikan masing-masing sebagai champion, resistor, atau belum jelas arahnya. Kalau ada yang pengaruhnya besar dengan dukungan belum jelas, itu nama yang paling penting buat ditulis.',
    ],
  },
  {
    id: 'c4-card-15',
    type: 'reflection',
    eyebrow: 'Entri Keempat · Buku Kerja Change Management',
    prompt:
      'Tulis kasus perubahan Anda yang menjawab lensa resistensi dari Bab 3, dan peta stakeholder untuk perubahan yang sama.',
    fields: [
      {
        id: 'case-for-change',
        label:
          'Tulis kasus perubahan singkat Anda — apa yang berubah, kenapa sekarang, dan apa untungnya buat tim yang menjalankannya sehari-hari (usahakan menjawab langsung lensa resistensi dari Entri Ketiga)',
        placeholder:
          'Misalnya: kita pindah ke sistem X mulai minggu ini karena Y, dan buat Anda artinya nggak perlu lagi Z...',
      },
      {
        id: 'stakeholder-map',
        label:
          'Sebutkan minimal 3 orang kunci dan klasifikasinya (champion / resistor / belum jelas) — siapa yang pengaruhnya besar tapi dukungannya belum jelas?',
        placeholder:
          'Misalnya: Budi (supervisor gudang) — pengaruh besar, belum jelas; Sari — champion, sudah semangat dari awal; Joko — resistor, pengaruh kecil...',
      },
    ],
  },
  {
    id: 'c4-card-16',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 5',
    title: 'Kasus Perubahan dan Peta Stakeholder Anda Sudah Ada',
    body: [
      'Anda nggak lagi cuma punya diagnosis di kepala. Sekarang ada kasus perubahan yang menjawab langsung akar resistensi tim Anda, dan peta yang bilang persis siapa perlu diyakinkan duluan dan kenapa.',
      'Bab 5 mulai Hari 2 — waktunya mengunci satu perubahan nyata dan merancang rencana rollout konkretnya: komunikasi, pelatihan, dan kemenangan cepat di awal.',
    ],
  },
]
