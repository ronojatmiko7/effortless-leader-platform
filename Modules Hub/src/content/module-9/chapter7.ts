import {
  Layers,
  Link2,
  Target,
  Lock,
  ClipboardList,
  Radar,
  Eye,
  ShieldCheck,
  HelpCircle,
  Handshake,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter7Cards: Card[] = [
  {
    id: 'c7-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 7 · Lokakarya Adopsi AI',
    title: 'Semua Bagiannya Sudah Ada — Tersebar di Empat Bab Berbeda',
    body: [
      'Di Bab 3, Anda memilih satu kasus pakai AI dari bisnis Anda sendiri, dinilai lewat filter tiga pertanyaan — bukan yang paling menarik perhatian, tapi yang paling kuat. Di Bab 4, Anda menetapkan batasan data untuk kasus pakai itu, plus jawaban jujur buat menjawab ketakutan tim.',
      'Di Bab 5, Anda merancang alur kerjanya di atas kertas — mode pemakaian Claude for Business yang cocok, siapa yang pakai, konteks dasar, langkah cek manusia yang wajib, dan target keberhasilan yang terukur. Di Bab 6, Anda benar-benar menjalankan rancangan itu di lapangan — instruksi yang disempurnakan, kesalahan yang ditemukan dan ditangani, sinyal bahaya yang dikenali lebih awal.',
      'Empat bab itu menghasilkan empat latihan terpisah, masing-masing dikerjakan sendiri-sendiri di momennya. Bab ini bukan tempat untuk belajar hal baru. Bab ini tempat merakit keempatnya jadi satu paket adopsi AI yang utuh, untuk satu alur kerja nyata yang sama — bukan empat catatan yang berdiri sendiri di empat bab berbeda.',
    ],
  },
  {
    id: 'c7-card-2',
    type: 'yes-no',
    question:
      'Jujur — sejauh ini, empat bab tadi terasa seperti empat latihan terpisah yang kebetulan berurutan, atau sudah terasa seperti satu alur kerja yang nyambung dari awal sampai akhir?',
    yesLabel: 'Sudah terasa nyambung, satu alur kerja yang sama terus',
    noLabel: 'Jujur, masih terasa seperti empat latihan terpisah',
    feedbackYes:
      'Bagus — berarti Anda sudah konsisten membawa kasus pakai yang sama dari Bab 3 sampai Bab 6. Bab ini akan membuat koneksi itu eksplisit di atas kertas, bukan cuma terasa nyambung di kepala Anda.',
    feedbackNo:
      'Ini wajar, dan justru itu kenapa bab ini ada. Empat latihan yang bagus sekalipun, kalau nggak pernah dirakit jadi satu, tetap terasa seperti empat tugas terpisah. Bab ini yang menyatukannya jadi satu paket yang bisa dilihat sekaligus.',
  },
  {
    id: 'c7-card-3',
    type: 'info',
    icon: Link2,
    eyebrow: 'Kenapa Merakit Itu Penting',
    title: 'Empat Latihan yang Bagus Sekalipun Tetap Cuma Empat Latihan Kalau Nggak Pernah Disatukan',
    body: [
      'Kasus pakai yang kuat dari Bab 3, batasan data yang jelas dari Bab 4, rancangan yang rapi dari Bab 5, dan pengalaman lapangan yang jujur dari Bab 6 — kalau keempatnya cuma tersimpan di empat entri buku kerja yang terpisah, orang lain di bisnis Anda (atau Anda sendiri tiga bulan lagi) harus buka empat tempat berbeda cuma buat tahu "alur kerja AI ini sebenarnya jalannya gimana."',
      'Paket yang dirakit jadi satu berbeda. Siapapun yang butuh tahu — Anda sendiri waktu mengevaluasi ulang, orang yang akan meneruskan alur kerja ini, atau tim baru yang baru bergabung — bisa lihat satu gambaran utuh: kenapa kasus pakai ini yang dipilih, data apa yang boleh dan nggak boleh masuk, bagaimana persisnya alur kerjanya berjalan, dan apa yang sudah terbukti di lapangan.',
      'Ini juga persis yang membedakan alur kerja AI yang benar-benar terinstal dari eksperimen AI acak yang dibahas di Bab 1. Eksperimen acak nggak pernah punya momen "sekarang kita satukan semuanya jadi satu paket yang bisa diteruskan siapa saja." Momen itu yang sedang Anda jalankan sekarang.',
    ],
  },
  {
    id: 'c7-card-4',
    type: 'info',
    icon: Target,
    eyebrow: 'Merakit Bagian 1',
    title: 'Kasus Pakai Terpilih dan Alasannya (Bab 3)',
    body: [
      'Bagian pertama dari paket: kasus pakai apa yang Anda pilih, dan kenapa itu yang dipilih — bukan sekadar "kelihatan menarik," tapi lolos filter tiga pertanyaan: seberapa sering pekerjaan itu berulang, seberapa mahal atau lama kalau dikerjakan manual, dan seberapa mudah hasilnya dicek benar-salah oleh manusia.',
      'Alasan ini penting disatukan ke paket, bukan cuma keputusannya. Kalau nanti ada yang bertanya "kenapa AI dipakai buat ini dan bukan buat hal lain," jawabannya sudah ada — bukan ditebak ulang dari nol setiap kali ada yang penasaran.',
      'Kalau Anda sempat menuliskan beberapa kandidat di Bab 3, yang jadi bagian paket ini adalah satu yang akhirnya benar-benar dikunci dan dijalankan sampai Bab 6 — bukan semua kandidat yang sempat dipertimbangkan.',
    ],
  },
  {
    id: 'c7-card-5',
    type: 'info',
    icon: Lock,
    eyebrow: 'Merakit Bagian 2',
    title: 'Batasan Data yang Berlaku (Bab 4)',
    body: [
      'Bagian kedua: data apa yang boleh masuk ke alur kerja ini, dan jalur apa yang wajib dipakai kalau datanya sensitif — akun bisnis yang kontrolnya jelas, bukan akun pribadi siapapun yang kebetulan sedang buru-buru.',
      'Batasan ini yang membuat paketnya aman diteruskan ke orang lain tanpa Anda harus berdiri di sebelah mereka tiap kali dipakai. Tanpa batasan yang ditulis jelas, orang berikutnya yang menjalankan alur kerja ini akan menebak sendiri — persis skenario "kelewat longgar" atau "kelewat takut" yang dibahas Bab 4.',
      'Sertakan juga jawaban jujur yang Anda janjikan ke tim soal AI bukan pengganti orang. Itu bukan basa-basi buat sekali pakai — itu bagian dari paket yang perlu terus dipegang setiap kali alur kerja ini dijalankan siapapun.',
    ],
  },
  {
    id: 'c7-card-6',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Merakit Bagian 3',
    title: 'Rancangan Alur Kerja — Mode, Siapa Pakai, Instruksi Dasar, Cek Manusia, Target (Bab 5)',
    body: [
      'Bagian ketiga, dan paling teknis: mode pemakaian Claude for Business yang dipakai (chat biasa, ruang kerja bersama, atau automasi lintas file), siapa yang menjalankannya, instruksi atau konteks dasar yang disiapkan supaya hasilnya konsisten, langkah cek manusia yang wajib sebelum hasil AI benar-benar dipakai, dan target keberhasilan yang bisa diukur.',
      'Ini bagian yang paling langsung berguna kalau paketnya nanti diserahkan ke orang lain. Orang itu nggak perlu menebak "harus mulai dari mana" — semuanya sudah ada: mode mana yang dipakai, siapa yang biasanya menjalankan, instruksi dasar seperti apa yang sudah terbukti jalan, dan siapa yang harus membaca hasilnya sebelum dipakai beneran.',
      'Kalau instruksi dasarnya sudah disempurnakan sejak Bab 5 — ingat kartu soal instruksi jelas vs. ambigu di Bab 6 — versi yang masuk ke paket ini adalah versi terbaru yang sudah terbukti, bukan draf pertama yang belum diuji sama sekali di lapangan.',
    ],
  },
  {
    id: 'c7-card-7',
    type: 'info',
    icon: Radar,
    eyebrow: 'Merakit Bagian 4',
    title: 'Progres Nyata di Lapangan — Apa yang Jalan, Kesalahan yang Ditangani, Sinyal Bahaya (Bab 6)',
    body: [
      'Bagian keempat, dan yang membedakan paket ini dari sekadar rencana bagus di atas kertas: apa yang benar-benar terjadi begitu alur kerjanya ketemu pekerjaan sungguhan. Apa yang sudah berjalan baik, kesalahan AI apa yang pernah ditemukan dan bagaimana itu ditangani, dan sinyal bahaya apa (kalau ada) yang sempat atau masih terlihat.',
      'Bagian ini bukan buat bikin paketnya kelihatan sempurna. Justru sebaliknya — kesalahan yang pernah ditemukan dan cara menanganinya adalah bukti paling kuat bahwa langkah cek manusia beneran berjalan, bukan cuma formalitas di atas kertas. Itu yang bikin orang lain percaya paket ini, bukan cuma percaya klaim "AI-nya bagus."',
      'Kalau sinyal bahaya sempat muncul — orang mulai "lupa" pakai, hasil nggak dicek lagi, atau alur kerjanya cuma dipakai kalau ditanya — itu juga bagian dari paket. Bukan aib yang disembunyikan, tapi peringatan konkret buat siapapun yang meneruskan alur kerja ini, supaya mereka tahu persis apa yang perlu terus dijaga.',
    ],
  },
  {
    id: 'c7-card-8',
    type: 'multiple-choice',
    question:
      'Seorang CEO SME punya empat catatan rapi dari Bab 3-6: kasus pakai, batasan data, rancangan alur kerja, dan progres lapangan — tapi keempatnya tersimpan terpisah di empat entri buku kerja yang nggak pernah dibaca berurutan sebagai satu gambaran. Kenapa ini belum jadi "paket adopsi AI yang lengkap"?',
    options: [
      'Karena keempat catatan itu sendiri-sendiri kurang detail, perlu ditulis ulang lebih panjang',
      'Karena paket yang lengkap bukan soal seberapa detail tiap bagian, tapi soal apakah keempatnya bisa dilihat sebagai satu gambaran utuh oleh siapapun yang butuh tahu — termasuk orang yang akan meneruskan alur kerja ini',
      'Karena catatan buku kerja nggak pernah bisa jadi paket yang beneran dipakai, harus dipindah ke dokumen formal dulu',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Detail tiap bagian bukan masalahnya — masalahnya keempatnya belum pernah disatukan jadi satu gambaran yang bisa dilihat sekaligus. Itu yang membedakan empat latihan bagus dari satu paket yang beneran siap diteruskan ke siapapun yang butuh menjalankan atau mengevaluasi alur kerja ini.',
    errorFeedback:
      'Belum tepat. Bukan soal detail tiap bagian, dan bukan soal formatnya harus jadi dokumen formal. Yang bikin ini belum jadi paket lengkap adalah keempat bagian itu belum pernah disatukan jadi satu gambaran utuh — siapapun yang butuh tahu masih harus buka empat tempat terpisah.',
  },
  {
    id: 'c7-card-9',
    type: 'info',
    icon: Eye,
    eyebrow: 'Sebelum Menilai',
    title: 'Empat Bagian Tadi Sudah Ada di Depan Anda — Sekarang Waktunya Menilai Jujur',
    body: [
      'Anda baru saja melihat kembali empat bagian yang membentuk paket ini: kasus pakai dan alasannya, batasan data, rancangan alur kerja, dan progres nyata di lapangan. Sebelum lanjut ke ringkasan akhir, ada satu langkah yang nggak boleh dilewati: menilai jujur seberapa yakin paket ini benar-benar sudah cukup matang.',
      'Bukan matang dalam arti sempurna — nggak ada alur kerja AI yang sempurna di minggu-minggu pertama. Matang dalam arti: bisa terus berjalan tanpa Anda harus mengawasi ketat setiap kali dipakai, karena batasannya jelas, langkah cek manusianya konsisten dijalankan, dan orang yang menjalankannya tahu persis apa yang harus dilakukan.',
      'Kartu berikutnya menampilkan kembali potongan-potongan yang sudah Anda tulis sejak Bab 3, lalu meminta Anda menilai — bukan menebak, tapi menilai berdasarkan apa yang benar-benar sudah terjadi.',
    ],
  },
  {
    id: 'c7-card-10',
    type: 'finding-review',
    eyebrow: 'Entri Ketujuh · Buku Kerja AI Adoption',
    title: 'Seberapa Yakin Paket Adopsi AI Ini Sudah Cukup Matang untuk Terus Dijalankan?',
    recap: [
      {
        label: 'Kasus pakai yang dipilih dan alasannya (Bab 3)',
        cardId: 'c3-card-16',
        fieldId: 'strongest-candidate',
      },
      {
        label: 'Batasan data yang berlaku (Bab 4)',
        cardId: 'c4-card-18',
        fieldId: 'data-boundaries',
      },
      {
        label: 'Mode pemakaian dan kasus pakai yang dikunci (Bab 5)',
        cardId: 'c5-card-18',
        fieldId: 'locked-use-case-and-mode',
      },
      {
        label: 'Siapa yang menjalankan alur kerja ini (Bab 5)',
        cardId: 'c5-card-18',
        fieldId: 'who-uses-it',
      },
      {
        label: 'Langkah cek manusia yang wajib (Bab 5)',
        cardId: 'c5-card-18',
        fieldId: 'human-check-step',
      },
      {
        label: 'Target keberhasilan yang terukur (Bab 5)',
        cardId: 'c5-card-18',
        fieldId: 'success-target',
      },
      {
        label: 'Apa yang sudah berjalan baik di lapangan (Bab 6)',
        cardId: 'c6-card-18',
        fieldId: 'real-progress',
      },
      {
        label: 'Kesalahan AI yang ditemukan dan ditangani (Bab 6)',
        cardId: 'c6-card-18',
        fieldId: 'mistakes-found',
      },
      {
        label: 'Sinyal bahaya kalau ada (Bab 6)',
        cardId: 'c6-card-18',
        fieldId: 'warning-signs',
      },
    ],
    scorePrompt:
      'Melihat semua potongan ini disatukan — seberapa yakin Anda bahwa paket adopsi AI ini sudah cukup matang untuk terus dijalankan tanpa pengawasan ketat dari Anda sendiri?',
    justificationLabel: 'Kenapa Anda (belum) yakin — apa yang jadi dasar penilaian ini?',
    justificationPlaceholder:
      'Contoh: Cukup yakin — langkah cek manusianya sudah konsisten dijalankan dua minggu terakhir dan targetnya mulai kelihatan tercapai. Yang masih bikin ragu: baru saya sendiri yang pernah menjalankan ini, belum pernah dicoba orang lain di tim...',
    storageKey: 'chapter7-adoption-package-review',
  },
  {
    id: 'c7-card-11',
    type: 'info',
    icon: ShieldCheck,
    eyebrow: 'Kalau Skornya Rendah',
    title: 'Skor Rendah di Sini Bukan Kegagalan — Itu Justru Paket yang Jujur',
    body: [
      'Kalau skor yang Anda pilih tadi 1 atau 2, itu bukan berarti empat bab sebelumnya sia-sia. Itu berarti Anda menilai jujur, bukan menilai supaya kelihatan bagus di atas kertas — dan itu justru sikap yang sama yang dibahas Bab 6 soal merespons momen "AI-nya salah": jangan menghukum kejujuran, pakai itu buat memperbaiki.',
      'Paket yang matang nggak harus lahir sempurna di percobaan pertama. Banyak alur kerja AI yang akhirnya beneran terinstal jadi kebiasaan justru mulai dari skor rendah di titik ini — karena baru dua minggu berjalan, baru satu orang yang coba, atau targetnya belum benar-benar diukur. Itu bukan tanda berhenti. Itu peta soal apa yang masih perlu dikerjakan sebelum paketnya diserahkan ke orang lain atau dilepas tanpa pengawasan ketat.',
      'Skor tinggi pun bukan alasan berhenti memperhatikan. Paket yang matang hari ini tetap bisa melemah kalau nggak ada yang menjaga langkah cek manusianya tetap jalan — persis sinyal bahaya yang dibahas Bab 6.',
    ],
  },
  {
    id: 'c7-card-12',
    type: 'info',
    icon: HelpCircle,
    eyebrow: 'Gap-Check',
    title: 'Satu Hal yang Masih Paling Lemah — Jawab Jujur, Bukan Basa-Basi',
    body: [
      'Sebelum menyatukan semuanya jadi ringkasan akhir, ada satu pertanyaan lagi yang perlu dijawab jujur: dari seluruh paket ini, apa satu hal yang masih paling lemah atau belum jelas?',
      'Beberapa contoh yang paling sering muncul: langkah cek manusia belum konsisten dijalankan setiap kali, target keberhasilan sudah ditulis tapi belum benar-benar diukur angkanya, alur kerjanya baru pernah dijalankan satu orang jadi belum tahu apakah orang lain bisa mengikuti instruksi yang sama, atau batasan datanya jelas di atas kertas tapi belum pernah benar-benar diuji dengan data yang agak ambigu.',
      'Jawaban yang bagus di sini bukan yang bikin paketnya kelihatan makin rapi. Jawaban yang bagus adalah yang paling jujur — karena itu yang akan jadi hal pertama yang perlu dijaga begitu paket ini benar-benar dijalankan terus atau diserahkan ke orang lain.',
    ],
  },
  {
    id: 'c7-card-13',
    type: 'yes-no',
    question:
      'Tanpa mikir terlalu lama — begitu baca tiga contoh tadi, apakah salah satunya langsung terasa "iya, ini persis yang masih bolong di paket saya"?',
    yesLabel: 'Ya, langsung kerasa mana yang masih bolong',
    noLabel: 'Belum, harus mikir lebih dulu buat cari titik lemahnya',
    feedbackYes:
      'Bagus — reaksi cepat kayak gini biasanya lebih jujur dibanding jawaban yang dipikir lama-lama sampai kedengaran rapi. Simpan itu, karena itu yang akan Anda tulis di refleksi terakhir bab ini.',
    feedbackNo:
      'Nggak apa — coba baca ulang empat bagian paket dari kartu-kartu tadi sambil bertanya "bagian mana yang kalau ditanya orang lain, saya agak ragu menjawabnya dengan yakin?" Titik ragu itu biasanya yang paling jujur jadi titik lemah.',
  },
  {
    id: 'c7-card-14',
    type: 'info',
    icon: Handshake,
    eyebrow: 'Setelah Paket Ini Selesai',
    title: 'Siap Terus Dijalankan Apa Adanya, atau Diserahkan ke Orang Lain untuk Dijaga',
    body: [
      'Paket yang baru saja Anda rakit punya dua kemungkinan jalan ke depan, dan keduanya sah. Pertama, terus dijalankan apa adanya oleh Anda atau tim yang sudah menjalankannya sejak Bab 5-6 — paketnya jadi rujukan tiap kali ada yang lupa detail atau ada orang baru yang perlu tahu cara kerjanya.',
      'Kedua, diserahkan ke orang lain di bisnis Anda untuk dijaga sepenuhnya — mungkin manajer tim yang relevan, mungkin orang yang paling sering menjalankan alur kerja ini. Paket yang lengkap seperti ini yang membuat serah terima itu mungkin dilakukan tanpa kehilangan apa-apa: orang itu nggak perlu menebak kenapa kasus pakai ini dipilih, batasan datanya apa, atau langkah cek manusianya seperti apa — semuanya sudah ada.',
      'Ini persis yang membedakan alur kerja ini dari pola Bab 1: admin yang berhenti pakai AI begitu resign, dan kemampuannya ikut hilang bersama orangnya. Paket yang tertulis lengkap begini nggak menempel di satu kepala saja — itu bisa dipindahkan, bukan cuma diwariskan lewat ingatan.',
    ],
  },
  {
    id: 'c7-card-15',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Menyatukan',
    title: 'Sekarang Satukan Semuanya Jadi Kata-Kata Anda Sendiri',
    body: [
      'Anda sudah melihat kembali empat bagian paket, menilai seberapa matang paket ini, dan menamai satu hal yang masih paling lemah. Langkah terakhir bab ini: satukan semuanya jadi satu ringkasan singkat, dalam kata-kata Anda sendiri — bukan menyalin ulang isi empat entri sebelumnya.',
      'Bayangkan Anda harus menjelaskan paket ini ke seseorang yang sama sekali belum tahu apa-apa, dalam waktu kurang dari dua menit: nama kasus pakainya apa, cara kerja alur AI-nya hari ini seperti apa, dan satu hal yang paling perlu dijaga ke depan supaya ini nggak berakhir seperti eksperimen AI acak di Bab 1.',
    ],
  },
  {
    id: 'c7-card-16',
    type: 'reflection',
    eyebrow: 'Entri Kedelapan · Buku Kerja AI Adoption',
    prompt:
      'Satukan paket adopsi AI Anda jadi satu ringkasan: nama kasus pakainya, cara kerja alur AI-nya hari ini, dan satu hal yang paling perlu dijaga ke depan — termasuk titik terlemah dari gap-check tadi.',
    fields: [
      {
        id: 'use-case-name',
        label: 'Nama kasus pakai ini, dalam satu-dua kalimat singkat',
        placeholder: 'Misalnya: draft balasan customer service untuk komplain keterlambatan pengiriman...',
      },
      {
        id: 'how-it-works-today',
        label: 'Cara kerja alur AI-nya hari ini — mode pemakaian, siapa yang jalankan, langkah cek manusianya',
        placeholder:
          'Misalnya: pakai chat biasa, saya sendiri yang bikin draf lalu dibaca ulang sebelum dikirim, target waktu turun dari 15 ke 5 menit...',
      },
      {
        id: 'what-to-protect',
        label:
          'Satu hal yang paling perlu dijaga ke depan — termasuk titik terlemah yang Anda temukan di gap-check tadi',
        placeholder:
          'Misalnya: langkah cek manusianya masih rawan dilewatkan kalau lagi buru-buru — itu yang harus terus dipantau supaya nggak diam-diam berhenti dicek...',
      },
    ],
  },
  {
    id: 'c7-card-17',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 8',
    title: 'Paket Adopsi AI-nya Sekarang Lengkap untuk Satu Alur Kerja Nyata',
    body: [
      'Anda nggak lagi punya empat latihan terpisah dari empat bab berbeda. Anda sekarang punya satu paket adopsi AI yang utuh — kasus pakai, batasan data, rancangan alur kerja, dan progres nyata di lapangan — yang semuanya saling terhubung, untuk satu alur kerja nyata yang benar-benar sudah dijalankan.',
      'Sekarang Anda sudah punya paket adopsi AI yang lengkap untuk satu alur kerja nyata. Bab terakhir soal menjaga ini bertahan jadi kebiasaan — dan kapan Anda boleh mulai memperluas ke alur kerja lain.',
    ],
  },
]
