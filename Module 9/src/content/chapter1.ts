import {
  MessageSquareText,
  Send,
  FlaskConical,
  Layers,
  AlertCircle,
  Building2,
  BookOpen,
  Eye,
  Target,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter1Cards: Card[] = [
  {
    id: 'c1-card-1',
    type: 'info',
    icon: MessageSquareText,
    eyebrow: 'Bab 1 · Pola yang Sudah Anda Kenal',
    title: 'Satu Admin Diam-Diam Pakai AI Buat Draft Email — Berhenti Begitu Dia Resign',
    body: [
      'Seorang admin di sebuah bisnis mulai pakai AI gratisan buat bikin draft email balasan ke klien. Lebih cepat, hasilnya lumayan rapi, dan dia jadi bisa selesaikan kerjaan lain lebih banyak dalam sehari. Bagus buat dia.',
      'Masalahnya, itu cuma kebiasaan dia sendiri. Nggak pernah dia tunjukkan ke rekan kerja, nggak pernah dilaporkan ke atasan sebagai cara kerja baru yang layak ditiru, nggak pernah jadi bagian resmi dari cara tim menulis email.',
      'Begitu admin itu resign atau cuti panjang, kebiasaan itu ikut hilang bersama orangnya. Nggak ada yang tahu dia pakai AI buat itu, apalagi meneruskannya. Bisnisnya nggak pernah beneran punya kemampuan itu — yang ada cuma satu orang yang kebetulan tahu caranya, lalu pergi.',
    ],
  },
  {
    id: 'c1-card-2',
    type: 'info',
    icon: Send,
    eyebrow: 'Pola Kedua',
    title: 'Link AI Dikirim ke Grup WhatsApp Tim — "Coba-Coba Pakai Ya" — Lalu Nggak Pernah Ditanya Lagi',
    body: [
      'CEO baca artikel soal AI, kelihatan menjanjikan, langsung kirim link tool-nya ke grup WhatsApp tim dengan pesan singkat: "coba-coba pakai ya, biar kerjaan lebih cepat."',
      'Beberapa orang buka linknya sekali, coba iseng-iseng, lalu lupa. Yang lain nggak sempat buka sama sekali karena sedang sibuk kerjaan harian. Nggak ada yang dikasih tahu buat apa persisnya harus dipakai, siapa yang bertanggung jawab memastikan itu jalan, atau kapan hasilnya akan dicek.',
      'Tiga bulan kemudian, nggak ada satu pun follow-up. CEO nggak pernah tanya lagi siapa yang beneran pakai dan buat apa. Yang tersisa cuma satu pesan lama di grup WhatsApp yang sudah tenggelam di antara chat-chat lain.',
    ],
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: FlaskConical,
    eyebrow: 'Pola Ketiga',
    title: 'Satu Proyek Dicoba Pakai AI, Hasilnya Lumayan — Terus Nggak Pernah Diulang Lagi',
    body: [
      'Satu tim pernah pakai AI buat satu proyek tertentu — mungkin bikin materi presentasi, mungkin riset kompetitor, mungkin nyusun draft proposal. Hasilnya lumayan bagus, lebih cepat dari cara manual biasanya, dan waktu itu semua orang di tim sempat bilang "wah ini enak, harus dipakai terus."',
      'Tapi proyek itu selesai, tim pindah ke kerjaan berikutnya, dan AI-nya nggak pernah dipakai lagi buat jenis kerjaan yang sama. Bukan karena hasilnya jelek. Karena nggak ada yang ditugaskan menjaga itu jadi kebiasaan tetap — nggak ada yang bertanggung jawab bilang "mulai sekarang, kerjaan kayak gini kita kerjain pakai cara ini."',
      'Tanpa pemilik yang menjaganya, pemakaian AI yang bagus sekalipun cuma jadi kejadian sekali lewat. Bukan kebiasaan.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'yes-no',
    question:
      'Dari tiga contoh tadi — admin yang berhenti pakai AI begitu resign, link WhatsApp yang nggak pernah ditanya lagi, atau proyek yang hasilnya lumayan tapi nggak pernah diulang — ada yang mirip dengan sesuatu yang pernah terjadi di bisnis Anda?',
    yesLabel: 'Ada, salah satu atau lebih pernah terjadi di bisnis saya',
    noLabel: 'Nggak ada, pemakaian AI di bisnis kami sejauh ini sudah tertata rapi',
    feedbackYes:
      'Anda bukan satu-satunya — ini pola paling umum di bisnis SME manapun yang mulai coba-coba AI. Bukan karena AI-nya nggak berguna, tapi karena pemakaiannya nggak pernah dijadikan keputusan sengaja: nggak ada kasus pakai yang dipilih, nggak ada pemilik, nggak ada cara mengecek hasilnya. Itu yang bab ini akan bongkar.',
    feedbackNo:
      'Kalau memang begitu, Anda sudah di posisi yang jarang. Tapi baca terus — bab ini akan kasih Anda cara mengecek apakah pemakaian AI Anda benar-benar sudah jadi kebiasaan yang dijaga, atau baru terlihat rapi karena belum cukup lama sejak dicoba.',
  },
  {
    id: 'c1-card-5',
    type: 'info',
    icon: Layers,
    eyebrow: 'Ide Utama',
    title: 'Adopsi AI Itu Dua Tahap — Kebanyakan Bisnis Melompat Sebelum Tahap Pertama Selesai',
    body: [
      'Tahap 1: memilih & menyiapkan kasus pakai. Ini kerjaan sebelum AI beneran dipakai sehari-hari — menentukan alur kerja mana di bisnis Anda yang paling cocok dipasangi AI, dan menyiapkan batasan data serta keamanan dasar sebelum mulai. Bukan sembarang "coba di mana aja," tapi memilih dengan sengaja.',
      'Tahap 2: menjalankan & menginstal kebiasaan. Ini kerjaan benar-benar menjalankan alur kerja itu dengan AI, melatih tim sampai lancar, dan menjaga itu bertahan — bukan cuma diluncurkan sekali lalu dibiarkan.',
      'Kebanyakan bisnis SME melompat langsung ke pemakaian acak — satu orang coba ini, tim lain coba itu — tanpa pernah menyelesaikan Tahap 1. Makanya hasilnya nggak pernah lebih dari eksperimen orang per orang, persis tiga contoh yang baru saja Anda baca.',
    ],
  },
  {
    id: 'c1-card-6',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Istilahnya',
    title: '"Eksperimen AI Acak" — Nama Buat Pola yang Sudah Anda Kenali',
    body: [
      'Eksperimen AI acak: pemakaian AI yang muncul dari inisiatif satu-dua orang penasaran, tanpa kasus pakai yang dipilih sengaja, tanpa pemilik yang bertanggung jawab, dan tanpa cara mengecek apakah hasilnya beneran membantu bisnis.',
      'Perhatikan polanya — ini persis sama dengan tool dan SOP yang "sudah dibeli/dibuat" tapi nggak pernah benar-benar diinstal jadi kebiasaan. AI bukan pengecualian dari pola itu. AI cuma versi terbaru dari barang yang gampang dicoba, dan sama gampangnya buat diam-diam ditinggalkan.',
      'Bedanya, AI kelihatan lebih "modern" dan lebih gampang mulainya — tinggal buka chat, ketik, dapat hasil. Justru karena semudah itu mulainya, eksperimen AI acak lebih gampang terjadi dibanding tool lain yang butuh instalasi atau training formal dulu.',
    ],
  },
  {
    id: 'c1-card-7',
    type: 'multiple-choice',
    question:
      'Tim marketing sebuah toko retail SME coba pakai AI buat bikin caption promosi Instagram. Satu orang yang pakai, hasilnya bagus, tapi nggak pernah didokumentasikan prompt atau caranya, dan nggak ada rekan lain yang tahu persis apa yang dia lakukan. Tiga bulan kemudian orang itu resign, dan caption balik ditulis manual seadanya. Apa akar masalah utamanya?',
    options: [
      'AI-nya kurang bagus buat bikin caption, harus ganti tool lain',
      'Nggak ada kasus pakai yang dipilih sengaja dengan pemilik dan cara menjaga hasilnya bertahan — begitu satu orang itu pergi, kemampuannya ikut hilang',
      'Orang marketing-nya kurang niat mendokumentasikan pekerjaan sendiri',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. AI-nya belum tentu masalah, dan menyalahkan niat orangnya juga nggak menyelesaikan apa-apa. Yang bolong adalah Tahap 1 — nggak ada kasus pakai yang dipilih dengan pemilik jelas, jadi kemampuan itu cuma nempel di satu orang, bukan jadi milik bisnis.',
    errorFeedback:
      'Belum tepat. AI-nya belum tentu bermasalah, dan niat orangnya juga bukan akar masalahnya. Yang bolong adalah Tahap 1 — kasus pakainya nggak pernah dipilih dan diberi pemilik, jadi kemampuan itu hilang begitu satu orang yang pegang itu pergi.',
  },
  {
    id: 'c1-card-8',
    type: 'info',
    icon: Building2,
    eyebrow: 'Alat yang Akan Kita Pakai',
    title: 'Claude for Business: Akun AI Tingkat Bisnis, Bukan Akun Pribadi Tiap Karyawan',
    body: [
      'Modul ini akan pakai Claude for Business sebagai contoh konkret — akun AI tingkat bisnis, bukan tiap karyawan pakai akun gratisan masing-masing secara terpisah tanpa ada yang tahu siapa pakai apa.',
      'Bedanya di level kemampuan: CEO dapat kontrol siapa boleh akses apa, ada ruang kerja bersama buat pekerjaan yang berulang biar nggak nempel di satu orang saja, dan ada kemampuan mengotomasi pekerjaan lintas file dan tugas — bukan cuma chat satu-satu yang hasilnya nggak pernah tersimpan buat orang lain.',
      'Detail lebih dalam soal bedanya dengan pemakaian AI gratisan yang acak-acakan akan dibahas di Bab 2. Buat sekarang, cukup tahu: alat yang tepat baru berguna kalau dipasangkan sama kasus pakai yang dipilih sengaja — bukan sebaliknya.',
    ],
  },
  {
    id: 'c1-card-9',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Kalau Anda Sudah Menyelesaikan Modul 8',
    title: 'Anda Sudah Punya Kerangka Change Management — Ini Penerapannya Buat AI',
    body: [
      'Kalau Anda sudah menyelesaikan Modul 8, Anda sudah punya kerangka change management yang lengkap: kesiapan & buy-in, lalu eksekusi & penguatan. Modul ini adalah salah satu penerapan paling konkret dari kerangka itu, khusus buat adopsi AI.',
      'Kalau belum menyelesaikan modul manapun, tidak masalah — bab ini tetap jalan sendiri. Disiplin dasarnya — kasus pakai yang dipilih sengaja, pemilik yang jelas, cara mengecek hasil — akan diajarkan ulang secukupnya di sepanjang modul ini, khusus buat konteks AI.',
    ],
  },
  {
    id: 'c1-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Pemakaian AI yang muncul dari inisiatif satu-dua orang penasaran, tanpa kasus pakai yang dipilih sengaja, tanpa pemilik, dan tanpa cara mengecek hasilnya, disebut "________."',
    options: ['eksperimen AI acak', 'transformasi digital', 'inovasi tim', 'otomasi bisnis'],
    correctAnswer: 'eksperimen AI acak',
    successFeedback:
      'Tepat. "Eksperimen AI acak" — pola yang sama persis dengan tool dan SOP yang "sudah dibeli/dibuat" tapi nggak pernah benar-benar diinstal jadi kebiasaan, cuma sekarang bentuknya AI.',
    errorFeedback:
      'Belum tepat. Istilahnya "eksperimen AI acak" — pemakaian AI dari inisiatif satu-dua orang, tanpa kasus pakai yang dipilih sengaja, tanpa pemilik, dan tanpa cara mengecek hasilnya.',
  },
  {
    id: 'c1-card-11',
    type: 'yes-no',
    question:
      'Coba pikirkan pemakaian AI apa pun yang sudah pernah dicoba di bisnis Anda — oleh Anda sendiri atau tim. Apakah itu masih dipakai sekarang secara konsisten?',
    yesLabel: 'Masih dipakai konsisten sampai sekarang',
    noLabel: 'Sudah diam-diam berhenti setelah rasa penasaran awal reda',
    feedbackYes:
      'Bagus — itu berarti minimal satu pemakaian AI Anda sudah lolos dari jebakan eksperimen acak. Sepanjang modul kita akan bedah kenapa itu bisa bertahan, biar polanya bisa Anda ulang di alur kerja berikutnya.',
    feedbackNo:
      'Ini jawaban paling jujur dan paling umum di kalangan pemilik SME. Bagusnya, itu berarti Anda sudah punya contoh nyata buat dibongkar sepanjang modul ini — bukan cuma teori abstrak soal AI.',
  },
  {
    id: 'c1-card-12',
    type: 'sort-list',
    question: 'Urutkan dua tahap adopsi AI dari yang harus diselesaikan lebih dulu:',
    items: [
      'Menjalankan & menginstal kebiasaan — benar-benar menjalankan alur kerja itu, melatih tim, dan menjaga itu bertahan',
      'Memilih & menyiapkan kasus pakai — menentukan alur kerja mana yang cocok dipasangi AI, dan menyiapkan batasan data/keamanan dasar sebelum mulai',
    ],
    correctAnswer: [
      'Memilih & menyiapkan kasus pakai — menentukan alur kerja mana yang cocok dipasangi AI, dan menyiapkan batasan data/keamanan dasar sebelum mulai',
      'Menjalankan & menginstal kebiasaan — benar-benar menjalankan alur kerja itu, melatih tim, dan menjaga itu bertahan',
    ],
    successFeedback:
      'Tepat. Memilih & menyiapkan kasus pakai dulu — baru menjalankan & menginstal kebiasaan bisa punya fondasi buat berdiri. Tanpa Tahap 1 selesai, Tahap 2 cuma jadi eksperimen acak yang nunggu waktu buat ditinggalkan.',
    errorFeedback:
      'Belum tepat. Tahap 1 adalah memilih & menyiapkan kasus pakai — tanpa ini, menjalankan AI cuma jadi coba-coba tanpa arah. Kebanyakan bisnis membalikkan urutannya, langsung pakai AI ke mana-mana tanpa memilih kasus pakai dulu — dan itu kenapa pemakaiannya cepat mati.',
  },
  {
    id: 'c1-card-13',
    type: 'info',
    icon: Eye,
    eyebrow: 'Perbedaan yang Tajam',
    title: 'Alur Kerja AI yang Benar-Benar Terpakai vs Eksperimen AI yang Cuma Didiamkan',
    body: [
      'Alur kerja AI yang benar-benar terpakai: dipilih sengaja buat satu kebutuhan bisnis yang jelas, ada pemiliknya, hasilnya dicek manusia secara berkala, dan terus dipakai sampai jadi kebiasaan — nggak perlu diingatkan lagi tiap minggu buat pakai itu.',
      'Eksperimen AI yang cuma didiamkan: dicoba sekali oleh satu orang, kelihatan keren sebentar, lalu perlahan-lahan ditinggalkan tanpa ada yang benar-benar menyadari kapan persisnya itu berhenti dipakai. Nggak ada momen jelas "resmi berhenti" — orangnya cuma pelan-pelan balik ke cara lama.',
      'Bedanya bukan soal seberapa canggih AI yang dipakai. Bedanya ada di apa yang terjadi setelah rasa penasaran awal reda — apakah ada pemilik dan kebiasaan yang menjaganya, atau semuanya diserahkan ke inisiatif orang per orang.',
    ],
  },
  {
    id: 'c1-card-14',
    type: 'info',
    icon: Target,
    eyebrow: 'Peta Modul Ini',
    title: 'Dua Tahap yang Akan Jadi Peta Kita Sepanjang Modul',
    body: [
      'Modul ini membangun kemampuan mengadopsi AI secara sengaja di bisnis Anda, dari dua tahap yang sudah kita kenalkan.',
      'Tahap 1 — Memilih & Menyiapkan Kasus Pakai: bab-bab berikutnya akan memetakan tiga level pemakaian AI di bisnis, membantu Anda memilih kasus pakai yang tepat dan menghindari jebakan "AI untuk semua hal," lalu menyiapkan batasan data, keamanan, dan kepercayaan tim.',
      'Tahap 2 — Menjalankan & Menginstal Kebiasaan: setelah itu kita rancang alur kerja AI pertama Anda dengan Claude for Business, jalankan dan latih tim memakainya di lapangan, sampai akhirnya menginstal ritme evaluasi dan kepemilikan yang bikin pemakaian AI bertahan jadi kebiasaan permanen — bukan eksperimen yang pelan-pelan dilupakan.',
    ],
  },
  {
    id: 'c1-card-15',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Konkret',
    title: 'Sebutkan Satu Pemakaian AI — yang Masih Jalan, atau yang Pernah Diam-Diam Mati',
    body: [
      'Modul ini paling berguna kalau ada satu contoh konkret yang Anda bawa sepanjang perjalanan — satu kasus nyata yang jadi titik uji dari semua yang akan dibangun di sini.',
      'Bisa pemakaian AI yang sedang berjalan sekarang — entah oleh Anda sendiri atau tim. Bisa juga yang pernah dicoba tapi diam-diam berhenti, di mana Anda tahu ada yang nggak beres tapi belum pernah membongkarnya sampai tuntas. Bisa juga kalau bisnis Anda belum pernah coba AI sama sekali — itu pun jadi titik awal yang sah.',
      'Di kartu berikutnya, tuliskan satu contoh konkret. Itu yang akan menjadi titik referensi Anda sepanjang modul ini.',
    ],
  },
  {
    id: 'c1-card-16',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja AI Adoption',
    prompt:
      'Sebutkan satu pemakaian AI yang pernah dicoba di bisnis Anda — oleh Anda sendiri atau tim — dan apa yang akhirnya terjadi: masih dipakai, atau diam-diam ditinggalkan?',
    fields: [
      {
        id: 'ai-experiment',
        label: 'Pemakaian AI apa yang ada di pikiran Anda?',
        placeholder:
          'Misalnya: draft email pakai AI gratisan, coba bikin caption promosi, riset kompetitor pakai chatbot... (kalau belum pernah coba sama sekali, tulis itu saja)',
      },
      {
        id: 'what-happened',
        label: 'Apa yang akhirnya terjadi — masih dipakai konsisten, atau diam-diam ditinggalkan?',
        placeholder:
          'Misalnya: berhenti setelah orang yang pakai resign, atau nggak pernah ditanyakan lagi setelah dikirim ke grup tim...',
      },
    ],
  },
  {
    id: 'c1-card-17',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 2',
    title: 'Sekarang Anda Sudah Punya Satu Contoh Nyata di Kepala',
    body: [
      'Anda baru saja mengidentifikasi satu pemakaian AI yang akan jadi titik uji sepanjang modul ini. Itu lebih bermakna dari sekadar setuju bahwa "suruh tim coba AI" bukan strategi.',
      'Sekarang Anda sudah punya satu contoh nyata di kepala. Bab berikutnya kasih Anda peta lengkap tiga level pemakaian AI di bisnis, biar Anda tahu persis Anda sekarang ada di level mana.',
    ],
  },
]
