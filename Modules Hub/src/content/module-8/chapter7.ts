import {
  Layers,
  FileSearch,
  Link2,
  ListChecks,
  RefreshCw,
  Users2,
  MessageCircle,
  Package,
  BookOpen,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter7Cards: Card[] = [
  {
    id: 'c7-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 7 · Lokakarya Change Rollout',
    title: 'Anda Sudah Punya Semua Bagiannya — Sekarang Saatnya Menyatukannya Jadi Satu Paket',
    body: [
      'Di Bab 3, Anda mendiagnosis lensa resistensi yang paling berlaku buat perubahan Anda — bukan tebakan umum, tapi akar masalah spesifik: takut nggak kompeten, nggak jelas untungnya, trauma proyek sebelumnya, atau belum pernah dilatih. Di Bab 4, Anda mengubah diagnosis itu jadi kasus perubahan yang menjawabnya langsung, plus peta stakeholder yang bilang siapa perlu diyakinkan duluan.',
      'Di Bab 5, Anda mengunci satu perubahan nyata dan merancang rencana rollout tiga bagian: komunikasi, pelatihan, quick win. Di Bab 6, Anda menjalankan rencana itu di lapangan sungguhan — merayakan hasil nyata, mengenali sinyal bahaya, dan menangani resistensi yang muncul langsung di depan Anda.',
      'Empat bab itu menghasilkan empat latihan terpisah, masing-masing dikerjakan sendiri-sendiri di momennya. Bab ini merakit semuanya jadi satu paket change management yang utuh, untuk satu perubahan nyata yang sama — bukan empat catatan yang berdiri sendiri di empat bab berbeda.',
    ],
  },
  {
    id: 'c7-card-2',
    type: 'info',
    icon: FileSearch,
    eyebrow: 'Sebelum Merakit',
    title: 'Satu Hal yang Nggak Boleh Dilewati: Cek Dulu Apakah Rencana Bab 5 Masih Relevan',
    body: [
      'Sebelum menyatukan semua bagian jadi satu paket, ada satu langkah yang penting: konfirmasi ulang apakah perubahan dan rencana rollout yang Anda kunci di Bab 5 masih relevan dengan apa yang beneran terjadi di lapangan waktu Bab 6.',
      'Bisa saja rencananya berjalan persis seperti dirancang. Bisa juga ada yang meleset — quick win-nya ternyata butuh waktu lebih lama dari perkiraan, atau resistensi yang muncul ternyata dari lensa yang beda dari dugaan awal. Keduanya sah. Yang nggak sah adalah merakit paket lengkap tanpa cek dulu apakah fondasinya masih berdiri.',
      'Kartu berikutnya menampilkan kembali perubahan dan rencana rollout yang Anda tulis di Bab 5. Nilai seberapa yakin Anda sekarang, setelah tahu apa yang beneran terjadi di Bab 6, bahwa paket change management ini beneran siap dipakai penuh — bukan cuma rapi di atas kertas.',
    ],
  },
  {
    id: 'c7-card-3',
    type: 'finding-review',
    eyebrow: 'Entri Ketujuh · Buku Kerja Change Management',
    title: 'Seberapa Yakin Paket Ini Beneran Siap Dipakai Penuh?',
    recap: [
      {
        label: 'Perubahan yang Anda kunci (Bab 5)',
        cardId: 'c5-card-17',
        fieldId: 'locked-change',
      },
      {
        label: 'Rencana komunikasi & pelatihan (Bab 5)',
        cardId: 'c5-card-17',
        fieldId: 'comms-training-plan',
      },
      {
        label: 'Quick win yang ditargetkan (Bab 5)',
        cardId: 'c5-card-17',
        fieldId: 'quick-win',
      },
    ],
    scorePrompt:
      'Setelah tahu apa yang beneran terjadi di lapangan di Bab 6 — seberapa yakin Anda bahwa paket change management ini (diagnosis, kasus perubahan, peta stakeholder, rencana rollout, dan cara menangani resistensinya) beneran siap dipakai penuh untuk perubahan ini?',
    justificationLabel: 'Kenapa Anda (belum) yakin — dan bagian mana yang masih paling rapuh?',
    justificationPlaceholder:
      'Contoh: Cukup yakin — komunikasi dan pelatihannya sudah terbukti jalan di Bab 6, quick win-nya kerasa. Yang masih rapuh: saya belum benar-benar menguji respons saya waktu resistensi datang dari lensa yang nggak saya duga sebelumnya...',
    storageKey: 'chapter7-rollout-package-review',
  },
  {
    id: 'c7-card-4',
    type: 'info',
    icon: Link2,
    eyebrow: 'Empat Bagian, Satu Paket',
    title: 'Paket Change Management yang Utuh Punya Empat Komponen yang Saling Terhubung',
    body: [
      'Paket change management yang lengkap menjawab empat pertanyaan sekaligus: kenapa orang mungkin menolak perubahan ini (diagnosis dari Bab 3), kenapa perubahan ini layak dijalankan dan siapa yang perlu diyakinkan duluan (kasus perubahan dan peta stakeholder dari Bab 4), bagaimana persisnya perubahan ini akan digulirkan (rencana rollout dari Bab 5), dan apa yang beneran terjadi begitu itu ketemu orang sungguhan (catatan eksekusi lapangan dari Bab 6).',
      'Empat bagian itu bukan empat dokumen yang kebetulan ditulis di waktu berbeda. Diagnosis dari Bab 3 seharusnya kelihatan jejaknya di kasus perubahan Bab 4 — kasus yang bagus menjawab lensa yang terdiagnosis, bukan menjawab lensa generik. Peta stakeholder dari Bab 4 seharusnya kelihatan di rencana komunikasi Bab 5 — siapa dapat one-on-one, siapa cukup lewat pengumuman bersama. Dan catatan lapangan Bab 6 adalah bukti, bukan cuma laporan — bukti bahwa tiga bagian sebelumnya beneran nyambung ke kenyataan, atau petunjuk bagian mana yang perlu direvisi.',
      'Kalau keempatnya berdiri sendiri-sendiri, Anda punya empat latihan bagus yang nggak saling menguatkan. Itulah kenapa penyatuan ini bukan formalitas administratif — ini yang bikin paketnya beneran satu alat utuh, bukan empat potongan kertas.',
    ],
  },
  {
    id: 'c7-card-5',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Cara Mengeceknya',
    title: 'Cara Cek Apakah Empat Bagian Anda Beneran Nyambung, Bukan Cuma Berdampingan',
    body: [
      'Cara paling gampang mengecek koneksinya: baca ulang kasus perubahan dari Bab 4, lalu tanya — apakah ini secara eksplisit menjawab lensa resistensi yang terdiagnosis di Bab 3, atau ini kasus perubahan generik yang bisa dipakai buat perubahan apa saja? Kalau generik, itu tanda bagiannya belum benar-benar nyambung.',
      'Lakukan hal yang sama ke rencana rollout dari Bab 5: apakah channel komunikasinya disesuaikan ke stakeholder spesifik dari peta Bab 4 — misalnya one-on-one khusus buat yang pengaruhnya besar tapi dukungannya belum jelas — atau semua orang dapat perlakuan yang sama persis? Dan ke catatan lapangan Bab 6: begitu resistensi muncul, apakah responsnya dikaitkan balik ke salah satu dari empat lensa Bab 3, atau responsnya generik buat semua keluhan?',
      'Kalau jawabannya "ya, nyambung" di ketiga cek itu, paket Anda sudah satu alat utuh. Kalau ada yang masih generik, itu bukan alasan buat mulai dari nol — cukup revisi bagian yang lepas itu supaya balik menjawab diagnosis awalnya.',
    ],
  },
  {
    id: 'c7-card-6',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis ganti software akuntansi. Diagnosis Bab 3: Lensa 3 (trauma) — tim pernah kena sistem baru dua tahun lalu yang diumumkan heboh lalu ditinggalkan diam-diam setelah tiga bulan. Kasus perubahan Bab 4 yang mereka tulis berbunyi: "Software baru ini lebih efisien dan modern dibanding cara lama." Apakah kasus perubahan ini sudah nyambung ke diagnosisnya?',
    options: [
      'Sudah nyambung — "lebih efisien dan modern" adalah alasan yang kuat buat ganti software',
      'Belum nyambung — kasus ini nggak menjawab Lensa 3 sama sekali; nggak ada apa pun di situ yang membuktikan kali ini beda dari sistem sebelumnya yang ditinggalkan',
      'Nggak masalah — kasus perubahan memang seharusnya singkat dan umum, detail teknis biar dijelaskan nanti pas rollout',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. "Lebih efisien dan modern" adalah kasus perubahan generik yang bisa ditempel di perubahan apa pun. Kasus perubahan yang nyambung ke Lensa 3 harus secara eksplisit menjawab trauma itu — misalnya menyebutkan komitmen konkret, jadwal pendampingan, atau bukti bahwa kali ini ada rencana rollout yang nggak ditinggalkan begitu saja. Tanpa itu, tim yang sudah trauma nggak punya alasan buat percaya ini bakal beda.',
    errorFeedback:
      'Belum tepat. Kasus perubahan ini generik — bisa dipakai buat perubahan apa saja, dan sama sekali nggak menyentuh Lensa 3 (trauma dari proyek sebelumnya yang ditinggalkan). Kasus yang nyambung ke diagnosisnya harus eksplisit menjawab kenapa kali ini beda, bukan cuma bilang "lebih baik."',
  },
  {
    id: 'c7-card-7',
    type: 'info',
    icon: Users2,
    eyebrow: 'Sebelum vs Sesudah',
    title: 'Dua Cara Menjalankan Perubahan yang Sama — dan Bedanya Bukan Cuma "Lebih Rapi"',
    body: [
      'CARA LAMA — yang paling umum di kebanyakan bisnis SME: perubahan diputuskan, diumumkan sekali di rapat atau grup kerja, lalu dianggap selesai. Nggak ada diagnosis kenapa orang mungkin menolak. Nggak ada peta siapa perlu diyakinkan duluan dengan cara apa. Nggak ada rencana rollout eksplisit — cuma harapan bahwa orang akan otomatis ikut. Begitu ada yang diam-diam balik ke cara lama, itu nggak kelihatan sampai berbulan-bulan kemudian, kalau ketahuan sama sekali.',
      'CARA BARU — yang sekarang ada di tangan Anda: sebelum satu kata pun diumumkan, sudah ada diagnosis lensa resistensi yang paling berlaku. Kasus perubahan disusun buat menjawab lensa itu secara spesifik, bukan generik. Peta stakeholder bilang siapa dapat perhatian personal duluan. Rencana rollout eksplisit dengan tiga elemen — komunikasi, pelatihan, quick win — yang semuanya balik menjawab diagnosis awal. Dan begitu masuk lapangan, sinyal bahaya dikenali cepat, resistensi ditangani sesuai lensanya, bukan didiamkan atau dipaksa.',
      'Bedanya bukan soal seberapa formal atau seberapa banyak dokumennya. Bedanya ada di satu hal: apakah ada alasan konkret buat percaya perubahan ini bakal beda dari yang sebelumnya — atau cuma harapan yang diumumkan dengan nada percaya diri.',
    ],
  },
  {
    id: 'c7-card-8',
    type: 'yes-no',
    question:
      'Coba pikirkan cara Anda (atau bisnis Anda) biasanya menjalankan perubahan sebelum Anda mulai modul ini. Apakah biasanya perubahan langsung diumumkan begitu diputuskan, tanpa diagnosis resistensi atau peta stakeholder eksplisit di depan?',
    yesLabel: 'Ya, biasanya langsung diumumkan tanpa diagnosis atau peta dulu',
    noLabel: 'Nggak, biasanya sudah ada semacam diagnosis atau peta sebelum diumumkan',
    feedbackYes:
      'Ini pola paling umum, dan sekarang Anda tahu persis kenapa itu sering mati di lapangan — bukan karena perubahannya buruk, tapi karena nggak ada apa pun yang secara sadar menjawab kenapa orang mungkin menolak sebelum penolakan itu muncul. Paket yang barusan Anda rakit di bab ini adalah jawabannya buat perubahan berikutnya, bukan cuma yang ini.',
    feedbackNo:
      'Bagus, berarti sebagian insting Anda sudah ke arah yang tepat sebelum modul ini. Paket yang Anda rakit di bab ini bikin insting itu eksplisit dan bisa diulang — bukan lagi bergantung ke feeling di momen itu, tapi jadi alat konkret yang bisa dipakai lagi di perubahan lain.',
  },
  {
    id: 'c7-card-9',
    type: 'info',
    icon: MessageCircle,
    eyebrow: 'Memperkenalkan Paket Ini ke Orang Lain',
    title: 'Cara Perkenalkan Paket Ini ke Co-founder atau Manajer Tanpa Berasa Proses Birokrasi',
    body: [
      'Begitu paketnya utuh, ada satu tantangan yang sering dilewatkan: memperkenalkannya ke orang lain yang ikut memimpin rollout — co-founder, manajer, atau siapa pun yang juga punya peran di perubahan ini — tanpa bikin mereka merasa Anda barusan menambah lapisan admin baru yang memperlambat semuanya.',
      'Framing yang salah: "Mulai sekarang tiap perubahan harus lewat proses diagnosis resistensi, kasus perubahan, peta stakeholder, dan rencana rollout tertulis sebelum jalan." Itu kedengarannya seperti prosedur birokrasi baru. Reaksi yang muncul: "Kita kan selama ini juga bisa jalan tanpa itu semua."',
      'Framing yang benar: "Saya sudah petakan siapa yang kemungkinan bakal keberatan sama perubahan ini dan kenapa, dan saya punya rencana konkret buat komunikasi, pelatihan, sama satu kemenangan cepat di minggu pertama — biar kali ini nggak berakhir seperti perubahan-perubahan sebelumnya yang pelan-pelan ditinggalkan." Bukan sistem baru. Alat konkret yang langsung menjawab pertanyaan yang selama ini nggak pernah dijawab: kenapa perubahan sebelumnya sering mati sendiri di lapangan.',
    ],
  },
  {
    id: 'c7-card-10',
    type: 'multiple-choice',
    question:
      'Anda mau melibatkan manajer toko Anda buat ikut menjalankan rollout aplikasi stok baru. Mana cara memperkenalkan paket change management ini yang paling mungkin bikin dia ikut tanpa merasa dibebani proses tambahan?',
    options: [
      'Kirim dokumen lengkap berisi diagnosis empat lensa, kasus perubahan, peta stakeholder, dan rencana rollout, minta dia baca semuanya sebelum rollout mulai',
      'Bilang langsung: "mulai sekarang tiap ada perubahan kita wajib isi dokumen change management dulu"',
      'Ceritakan singkat siapa yang kemungkinan bakal keberatan dan kenapa, tunjukkan rencana konkret buat komunikasi dan quick win minggu pertama, dan minta dia bantu di bagian yang paling relevan buat perannya',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Framing yang efektif nggak dimulai dari "ini sistemnya" tapi dari manfaat konkret dan langkah nyata yang langsung relevan ke peran orang itu. Dokumen lengkap dan aturan wajib keduanya kedengaran seperti beban admin — cerita singkat plus rencana konkret yang bisa langsung dibantu justru bikin orangnya merasa dilibatkan, bukan dibebani.',
    errorFeedback:
      'Belum tepat. Dokumen lengkap yang harus dibaca semua dan aturan "wajib" keduanya kedengaran seperti proses birokrasi baru. Cara yang lebih efektif adalah cerita singkat dan konkret tentang siapa mungkin keberatan dan rencana nyata buat menanganinya — lalu minta bantuan di bagian yang relevan buat peran orang itu, bukan minta dia menelan seluruh dokumen.',
  },
  {
    id: 'c7-card-11',
    type: 'info',
    icon: Package,
    eyebrow: 'Contoh Kerja',
    title: 'Balik ke Toko dengan Tiga Admin — Sekarang Rakit Paket Lengkapnya dari Awal sampai Akhir',
    body: [
      'Kita balik ke contoh yang sudah berjalan sejak Bab 3: toko retail yang ganti pencatatan stok manual ke aplikasi tablet, tiga admin sempat diam-diam balik ke catatan manual. Sekarang kita lihat paket lengkapnya, dari diagnosis sampai catatan lapangan — semua dalam satu gambaran utuh.',
      'Dua kartu berikutnya menunjukkan paket itu secara ringkas. Setelah itu, giliran Anda merakit paket yang sama untuk perubahan nyata yang Anda kunci sendiri sejak Bab 5.',
    ],
  },
  {
    id: 'c7-card-12',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Kerja · Diagnosis, Kasus, dan Peta',
    title: 'Bagian 1 dan 2: Kenapa Mereka Resisten, dan Apa yang Menjawabnya',
    body: [
      'Diagnosis (Bab 3): kombinasi Lensa 1 (takut kelihatan lelet di depan pelanggan waktu masih belajar aplikasi baru) dan Lensa 2 (nggak jelas untungnya buat mereka pribadi, bukan cuma buat toko). Admin senior delapan tahun adalah kasus paling jelas — pengaruh besar di antara admin lain, resistensinya paling kuat.',
      'Kasus perubahan dan peta stakeholder (Bab 4): kasus perubahannya "kita pakai aplikasi ini biar Anda nggak perlu mindahin catatan dua kali dari buku ke sistem tiap malam" — langsung menjawab Lensa 2 dengan untung personal, bukan untung toko secara umum. Peta stakeholder menandai admin senior sebagai prioritas (pengaruh besar, dukungan belum jelas) dan admin junior sebagai champion potensial (pengaruh sedang, dukungan sudah positif sejak awal).',
      'Perhatikan: kasus perubahannya secara eksplisit dirancang buat menjawab lensa yang terdiagnosis, bukan kalimat generik soal "efisiensi." Dan peta stakeholder-nya bukan cuma daftar nama — itu yang nanti menentukan siapa dapat one-on-one di rencana komunikasi.',
    ],
  },
  {
    id: 'c7-card-13',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Contoh Kerja · Rollout dan Eksekusi Lapangan',
    title: 'Bagian 3 dan 4: Rencana Rollout, dan Apa yang Beneran Terjadi',
    body: [
      'Rencana rollout (Bab 5): komunikasi lewat rapat singkat sebelum toko buka dengan champion ikut cerita, plus one-on-one khusus dengan admin senior. Pelatihan hands-on di jam tutup toko (jauh dari mata pelanggan — langsung menjawab Lensa 1), dengan champion jadi buddy. Quick win: admin pulang 15 menit lebih cepat di akhir minggu pertama karena nggak perlu mindahin catatan dua kali.',
      'Catatan eksekusi lapangan (Bab 6): quick win-nya tercapai dan disebutkan terbuka di depan semua admin — bukan dibiarkan lewat diam-diam. Di minggu kedua, admin senior mulai lagi "kelupaan" pindahin catatan — owner nggak diamkan, langsung ngobrol empat mata, ketemu akar masalahnya: salah pencet waktu ada pelanggan ngantre, balik ke Lensa 1, bukan lensa baru. Respons: latihan ulang khusus skenario itu di jam sepi, dan tegas bilang ini bukan alasan buat balik manual "sementara."',
      'Empat bagian ini, dibaca berurutan, adalah satu cerita yang nyambung — bukan empat latihan terpisah. Lensa yang terdiagnosis di awal adalah lensa yang sama yang muncul lagi di lapangan, dan responsnya konsisten karena diagnosisnya jadi rujukan dari awal sampai akhir. Itulah paket change management yang lengkap.',
    ],
  },
  {
    id: 'c7-card-14',
    type: 'fill-in-the-blank',
    sentence:
      'Yang membuat contoh toko di atas jadi paket change management yang utuh bukan karena setiap bagiannya rapi sendiri-sendiri, tapi karena lensa resistensi yang terdiagnosis di awal tetap jadi ________ dari kasus perubahan, rencana rollout, sampai respons di lapangan.',
    options: ['rujukan', 'lampiran', 'catatan kaki', 'formalitas'],
    correctAnswer: 'rujukan',
    successFeedback:
      'Tepat. Paket yang utuh bukan soal kelengkapan dokumen, tapi soal konsistensi — diagnosis awal tetap jadi rujukan di setiap bagian berikutnya, sampai ke respons waktu resistensi beneran muncul di lapangan.',
    errorFeedback:
      'Belum tepat. Kata kuncinya "rujukan" — yang bikin paket ini utuh adalah diagnosis awal yang terus dipakai sebagai rujukan di kasus perubahan, rencana rollout, dan respons lapangan, bukan sekadar dokumen yang lengkap tapi berdiri sendiri-sendiri.',
  },
  {
    id: 'c7-card-15',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Sebelum Entri Kedelapan',
    title: 'Sekarang Rakit Paket Anda Sendiri, untuk Perubahan yang Anda Kunci Sejak Bab 5',
    body: [
      'Anda baru saja melihat gambaran lengkap lewat contoh toko. Sekarang giliran Anda merakit ringkasan paket yang sama, untuk perubahan nyata yang Anda kunci sejak Bab 5 dan jalankan (atau rencanakan) di Bab 6.',
      'Nggak perlu menulis ulang semua detail dari tiap bab. Yang penting: perubahan mana yang jadi fokus, apa kasus perubahan dan stakeholder kuncinya, dan elemen rollout mana yang paling menentukan keberhasilannya berdasarkan apa yang sudah Anda alami sejauh ini. Ini yang nanti jadi dasar buat Bab 8 — cara menginstal kebiasaan ini biar beneran terpakai lagi, bukan cuma sekali buat perubahan ini saja.',
    ],
  },
  {
    id: 'c7-card-16',
    type: 'reflection',
    eyebrow: 'Entri Kedelapan · Buku Kerja Change Management',
    prompt:
      'Tuliskan ringkasan paket change management yang terintegrasi untuk perubahan yang Anda fokuskan — kasus perubahan, stakeholder kunci, dan elemen rollout yang paling menentukan.',
    fields: [
      {
        id: 'focus-change',
        label: 'Perubahan mana yang jadi fokus paket ini?',
        placeholder: 'Misalnya: pindah dari catatan stok manual ke aplikasi tablet di toko...',
      },
      {
        id: 'case-and-stakeholders',
        label: 'Apa kasus perubahan dan stakeholder kuncinya?',
        placeholder:
          'Misalnya: kasus perubahannya "nggak perlu mindahin catatan dua kali tiap malam" — menjawab Lensa 2. Stakeholder kunci: admin senior (pengaruh besar, dukungan belum jelas), admin junior jadi champion...',
      },
      {
        id: 'decisive-rollout-element',
        label:
          'Apa elemen rollout (komunikasi/pelatihan/quick win) yang paling menentukan keberhasilannya?',
        placeholder:
          'Misalnya: pelatihan hands-on di jam sepi paling menentukan — itu yang langsung menjawab rasa takut kelihatan lelet di depan pelanggan, elemen lain nggak akan cukup tanpa itu...',
      },
    ],
  },
  {
    id: 'c7-card-17',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 8',
    title: 'Paket Change Management-nya Sekarang Utuh di Atas Kertas — dan Sudah Terbukti Sebagian di Lapangan',
    body: [
      'Anda nggak lagi punya empat latihan terpisah dari empat bab berbeda. Anda sekarang punya satu paket change management yang utuh — diagnosis, kasus perubahan, peta stakeholder, rencana rollout, dan catatan eksekusi lapangan — yang semuanya saling menjawab, untuk satu perubahan nyata.',
      'Bab terakhir: cara menginstal kebiasaan ini biar beneran dipakai tiap kali ada perubahan baru — bukan cuma sekali pakai untuk perubahan ini saja — dan laporan lengkap dari semua yang sudah Anda kerjakan sejak Bab 1.',
    ],
  },
]
