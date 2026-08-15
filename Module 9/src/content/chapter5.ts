import {
  Target,
  Map,
  MessageSquareText,
  Users,
  ClipboardList,
  Filter,
  User,
  FileText,
  Eye,
  ClipboardCheck,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter5Cards: Card[] = [
  {
    id: 'c5-card-1',
    type: 'info',
    icon: Target,
    eyebrow: 'Bab 5 · Hari 2 Dimulai',
    title: 'Sekarang Waktunya Kunci Satu Kasus Pakai — Bukan Daftar Lagi',
    body: [
      'Bab 4 menutup Hari 1 dengan tiga hal beres: kasus pakai kandidat dari Bab 3, batasan data dari Bab 4, dan jawaban jujur buat tim Anda. Hari 2 mulai dari benar-benar merancang alur kerjanya.',
      'Di Bab 3, Anda menuliskan 2-3 kasus pakai dan menandai mana yang paling kuat lewat filter tiga pertanyaan. Sekarang berhenti nimbang-nimbang. Ambil SATU dari situ — yang paling kuat menurut filter itu — dan itu yang akan Anda bawa sampai Bab 7. Bukan "nanti semua kita coba juga," karena itu persis jebakan pertama yang sudah dibongkar di Bab 3.',
      'Ingat juga batasan data dari Bab 4: kalau kasus pakai pilihan Anda menyentuh data pelanggan sensitif, jalurnya harus lewat akun bisnis yang kontrolnya jelas — bukan chat pribadi siapa pun. Simpan itu, karena akan dipakai lagi sebentar lagi waktu kita bahas cara pemakaiannya.',
    ],
  },
  {
    id: 'c5-card-2',
    type: 'yes-no',
    question:
      'Dari 2-3 kasus pakai yang Anda tulis di Bab 3, sudah pilih SATU yang akan Anda bawa mulai bab ini?',
    yesLabel: 'Sudah, saya sudah pilih satu',
    noLabel: 'Belum, saya masih mikir-mikir',
    feedbackYes:
      'Bagus. Simpan itu di kepala sepanjang bab ini. Kalau belakangan Anda sadar itu bukan pilihan terbaik, tetap lanjut dulu dengan itu — rancangan alur kerja yang Anda susun di sini tetap berguna buat kasus pakai manapun yang akhirnya benar-benar Anda jalankan.',
    feedbackNo:
      'Nggak apa, tapi jangan ditunda lagi. Buka lagi Entri Ketiga buku kerja Anda dari Bab 3, lihat mana yang skornya paling kuat lewat filter tiga pertanyaan, dan pilih itu sekarang sebelum lanjut. Bab ini nggak akan berguna kalau masih dikerjakan buat "beberapa kandidat sekaligus."',
  },
  {
    id: 'c5-card-3',
    type: 'info',
    icon: Map,
    eyebrow: 'Cara Pakai Claude for Business',
    title: 'Bukan Satu Cara Pakai — Ada Tiga Mode dari Akun yang Sama',
    body: [
      'Sekarang soal alatnya. Claude for Business bukan cuma "chat AI versi kantor" — ada tiga mode pemakaian dari satu akun bisnis yang sama, dan tiap mode cocok buat kebutuhan yang beda.',
      'Ini bukan soal fitur atau tombol tertentu yang harus Anda hafalkan sekarang. Ini soal level kemampuan: seberapa banyak konteks yang dipakai bersama, dan seberapa banyak langkah yang ditangani sekaligus.',
      'Tiga kartu berikutnya membedah tiap mode satu per satu. Sambil baca, mulai bayangkan kasus pakai yang baru saja Anda kunci — mode mana yang kedengarannya paling cocok?',
    ],
  },
  {
    id: 'c5-card-4',
    type: 'info',
    icon: MessageSquareText,
    eyebrow: 'Mode 1',
    title: 'Chat Biasa — Titik Masuk Paling Sederhana',
    body: [
      'Chat biasa cocok buat tugas satu-kali atau yang nggak terlalu sering diulang. Anda buka chat, jelaskan konteksnya dari awal, minta hasilnya, selesai.',
      'Konteksnya dijelaskan ulang tiap kali dipakai — nggak ada yang "nempel" dari sesi sebelumnya. Kalau minggu depan Anda butuh hal serupa lagi, Anda jelaskan lagi dari nol.',
      'Ini titik masuk paling gampang, dan buat sebagian besar kasus pakai pertama SME, ini sudah cukup. Nggak perlu langsung loncat ke yang lebih rumit kalau kebutuhannya belum sampai situ.',
    ],
  },
  {
    id: 'c5-card-5',
    type: 'yes-no',
    question:
      'Kasus pakai yang Anda kunci tadi — apakah itu jenis pekerjaan yang cuma sesekali muncul, atau yang berulang tiap hari/minggu dan idealnya dipakai lebih dari satu orang?',
    yesLabel: 'Sesekali muncul, biasanya cuma saya sendiri yang pakai',
    noLabel: 'Berulang, dan idealnya dipakai lebih dari satu orang dengan cara yang sama',
    feedbackYes:
      'Kalau begitu, chat biasa kemungkinan besar sudah cukup buat mulai. Nggak usah dipaksa ke mode yang lebih rumit kalau kebutuhannya belum sampai situ.',
    feedbackNo:
      'Kalau begitu, chat biasa kemungkinan kurang pas — tiap orang bakal jelaskan ulang konteks yang sama dari nol tiap kali, dan hasilnya gampang beda-beda antar orang. Baca mode berikutnya, kedengarannya itu yang Anda butuh.',
  },
  {
    id: 'c5-card-6',
    type: 'info',
    icon: Users,
    eyebrow: 'Mode 2',
    title: 'Ruang Kerja Bersama untuk Pekerjaan Berulang — Gaya Projects',
    body: [
      'Mode ini cocok kalau kasus pakainya sering diulang oleh lebih dari satu orang, dan butuh konteks yang sama tiap kali dipakai — template, panduan gaya bahasa, data referensi — supaya hasilnya konsisten.',
      'Bedanya dari chat biasa: konteksnya disiapkan sekali, lalu dipakai bersama setiap kali alur kerja itu dijalankan. Bukan tiap orang menjelaskan ulang dari nol — semua orang mulai dari titik yang sama.',
      'Ini yang membereskan masalah dari Bab 2: alur kerja tim yang konsisten, bukan sepuluh orang jalan sendiri-sendiri dengan cara masing-masing meski sama-sama pakai AI tiap hari.',
    ],
  },
  {
    id: 'c5-card-7',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Mode 3',
    title: 'Automasi Lintas File dan Tugas — Gaya Cowork',
    body: [
      'Mode ini cocok kalau kasus pakainya melibatkan banyak langkah atau banyak file sekaligus — misalnya mengumpulkan beberapa laporan jadi satu ringkasan, atau menyusun beberapa dokumen sekaligus — yang kalau dikerjakan manual makan waktu berjam-jam.',
      'Ini yang paling "otomatis" dari ketiga mode, karena menangani banyak potongan pekerjaan sekaligus, bukan satu percakapan satu tugas.',
      'Tapi justru karena itu, ini bukan tempat paling aman buat mulai. Butuh kasus pakai yang alurnya sudah jelas dan sudah pernah dicek hasilnya lewat mode yang lebih sederhana dulu.',
    ],
  },
  {
    id: 'c5-card-8',
    type: 'sort-list',
    question:
      'Urutkan tiga mode pemakaian Claude for Business dari yang paling cocok jadi titik mulai, ke yang paling cocok jadi langkah kedua:',
    items: [
      'Automasi lintas file/tugas (gaya Cowork) — banyak langkah, banyak file sekaligus',
      'Chat biasa — tugas satu-kali, konteks dijelaskan ulang tiap kali',
      'Ruang kerja bersama untuk pekerjaan berulang (gaya Projects) — konteks sama dipakai bersama',
    ],
    correctAnswer: [
      'Chat biasa — tugas satu-kali, konteks dijelaskan ulang tiap kali',
      'Ruang kerja bersama untuk pekerjaan berulang (gaya Projects) — konteks sama dipakai bersama',
      'Automasi lintas file/tugas (gaya Cowork) — banyak langkah, banyak file sekaligus',
    ],
    successFeedback:
      'Tepat. Chat biasa dulu buat kebanyakan kasus pakai pertama, lalu ruang kerja bersama begitu kebutuhannya berulang dan dipakai bersama, baru automasi lintas file kalau kasus pakainya sudah lebih kompleks. Automasi boleh jadi langkah kedua — bukan wajib dari awal.',
    errorFeedback:
      'Belum tepat. Urutannya chat biasa (titik masuk paling sederhana), lalu ruang kerja bersama (begitu kebutuhannya berulang dan dipakai bersama), baru automasi lintas file (buat kasus pakai yang lebih kompleks, boleh jadi langkah kedua nanti).',
  },
  {
    id: 'c5-card-9',
    type: 'info',
    icon: Filter,
    eyebrow: 'Cara Memilih Mode yang Tepat',
    title: 'Kebanyakan Kasus Pakai Pertama SME Cocok di Dua Mode Pertama Saja',
    body: [
      'Ingat contoh dari Bab 3: draft balasan customer service, ringkasan laporan mingguan. Kasus pakai kayak gini biasanya cocok di chat biasa (kalau baru Anda sendiri yang coba) atau ruang kerja bersama (begitu lebih dari satu orang di tim yang sama ikut pakai dengan cara yang sama).',
      'Automasi lintas file cocok buat kasus pakai yang lebih kompleks — dan itu sah-sah saja jadi langkah kedua, setelah kasus pakai pertama Anda terbukti jalan di mode yang lebih sederhana. Bukan wajib dari awal.',
      'Jangan kepincut lompat ke automasi duluan karena kedengarannya paling canggih. Itu persis jebakan "mulai dari yang paling ambisius" yang sudah dibongkar Bab 3 — cuma sekarang bentuknya milih mode, bukan milih kasus pakai.',
    ],
  },
  {
    id: 'c5-card-10',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis SME mau mulai pakai AI buat draft balasan customer service — satu orang admin CS yang akan pakai dulu, belum ada rencana melibatkan orang lain dalam waktu dekat. Mode mana yang paling cocok buat mulai?',
    options: [
      'Chat biasa — cukup buat satu orang mulai coba dulu, konteksnya belum perlu dipakai bersama siapa-siapa',
      'Ruang kerja bersama (gaya Projects) — supaya langsung siap kalau nanti ada orang lain ikut',
      'Automasi lintas file (gaya Cowork) — biar langsung otomatis dari awal',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Kalau baru satu orang yang pakai dan belum ada rencana konkret melibatkan orang lain, chat biasa sudah cukup. Nggak perlu menyiapkan ruang kerja bersama atau automasi buat kebutuhan yang belum benar-benar ada.',
    errorFeedback:
      'Belum tepat. Kalau baru satu orang yang pakai dan belum ada rencana melibatkan orang lain, chat biasa sudah cukup — nggak perlu menyiapkan ruang kerja bersama atau automasi buat kebutuhan yang belum benar-benar ada.',
  },
  {
    id: 'c5-card-11',
    type: 'info',
    icon: User,
    eyebrow: 'Merancang Alur Kerja, Bagian 1',
    title: 'Siapa yang Akan Pakai — Satu Orang Dulu, atau Langsung Tim?',
    body: [
      'Pertanyaan pertama saat merancang alur kerja: siapa yang akan benar-benar pakai ini? Satu orang dulu, atau langsung beberapa orang di tim yang sama?',
      'Nggak ada jawaban yang lebih "benar" di sini. Kalau kasus pakai Anda masih baru dicoba, mulai dari satu orang dulu — biasanya orang yang paling sering mengerjakan tugas itu — jauh lebih aman daripada langsung melibatkan seluruh tim sebelum tahu alur kerjanya beneran jalan.',
      'Kalau kasus pakai Anda sudah jelas cocok buat ruang kerja bersama, tetap boleh mulai dari satu-dua orang dulu buat uji coba, baru diperluas ke tim setelah alurnya terbukti. Jangan langsung lempar ke semua orang sebelum Anda sendiri tahu itu jalan.',
    ],
  },
  {
    id: 'c5-card-12',
    type: 'info',
    icon: FileText,
    eyebrow: 'Merancang Alur Kerja, Bagian 2',
    title: 'Konteks Dasar yang Perlu Disiapkan Supaya Hasilnya Konsisten',
    body: [
      'Pertanyaan kedua: instruksi atau konteks dasar apa yang perlu disiapkan, supaya hasilnya konsisten setiap kali dipakai — bukan beda-beda tergantung siapa yang pegang atau lagi mood apa hari itu?',
      'Ini bisa berupa template hasil yang bagus (contoh balasan CS yang sudah pernah dianggap bagus), panduan gaya bahasa singkat, atau data referensi yang relevan. Nggak perlu rumit atau formal — cukup jelas dan bisa dipakai ulang.',
      'Ingat juga batasan data dari Bab 4: kalau konteks yang Anda siapkan menyentuh data pelanggan sensitif, itu yang menentukan apakah Anda perlu akun bisnis dengan kontrol jelas, bukan cuma chat pribadi.',
    ],
  },
  {
    id: 'c5-card-13',
    type: 'yes-no',
    question:
      'Sejauh ini — siapa yang pakai, dan konteks dasar apa yang perlu disiapkan — sudah cukup jelas di kepala Anda buat kasus pakai yang Anda kunci?',
    yesLabel: 'Sudah lumayan jelas',
    noLabel: 'Masih agak ngambang',
    feedbackYes:
      'Bagus, dua dari lima bagian rancangan alur kerja sudah beres. Tapi jangan buru-buru lompat ke langkah berikutnya — ini yang paling sering dilewatkan orang, dan paling wajib ada.',
    feedbackNo:
      'Nggak masalah — dua kartu tadi cukup buat jadi titik mulai, dan Anda akan dipaksa menuliskannya konkret di kartu refleksi nanti. Yang penting sekarang lanjut dulu ke bagian yang paling penting dari semuanya.',
  },
  {
    id: 'c5-card-14',
    type: 'info',
    icon: Eye,
    eyebrow: 'Bagian yang Wajib Ada — Nggak Bisa Dilewati',
    title: 'Langkah Cek Manusia — Siapa yang Membaca dan Menyetujui Sebelum Dipakai Beneran',
    body: [
      'Pertanyaan ketiga, dan ini yang WAJIB ada di setiap alur kerja AI pertama: siapa yang membaca dan menyetujui hasil AI sebelum itu benar-benar dipakai — dikirim ke pelanggan, dimasukkan ke laporan, atau apapun bentuk pemakaian akhirnya.',
      'Ingat jawaban jujur yang Anda tulis di Bab 4: AI ini bukan pengganti orang, dan hasilnya tetap harus dicek manusia sebelum dipakai. Ini bukan basa-basi buat menenangkan tim — ini aturan yang harus benar-benar Anda jalankan mulai alur kerja pertama ini.',
      'Nggak boleh langsung dipakai tanpa dicek. Nggak peduli seberapa bagus hasilnya kelihatan, atau seberapa Anda percaya sama AI-nya. Ini bukan soal nggak percaya AI — ini soal siapapun yang mengerjakan sesuatu penting tetap punya kendali terakhir, sama seperti Anda nggak akan biarkan staf baru kirim email ke klien besar tanpa dicek dulu di minggu pertamanya.',
    ],
  },
  {
    id: 'c5-card-15',
    type: 'multiple-choice',
    question:
      'Seorang staf CS mulai pakai AI buat draft balasan pelanggan, hasilnya bagus terus beberapa minggu, jadi dia mulai langsung kirim balasan AI tanpa dibaca ulang lagi — biar lebih cepat. Apa yang salah dari kebiasaan barunya ini?',
    options: [
      'Nggak ada yang salah, kalau hasilnya sudah terbukti bagus berkali-kali, nggak perlu dicek lagi',
      'Langkah cek manusia itu wajib ada di setiap kali dipakai, bukan cuma di awal-awal — begitu berhenti dicek, satu kesalahan yang lolos bisa langsung sampai ke pelanggan tanpa ada yang tahu',
      'Masalahnya di AI-nya, bukan di kebiasaan stafnya',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Rekam jejak bagus bukan alasan buat berhenti mengecek. Langkah cek manusia itu bagian permanen dari alur kerja, bukan pelatihan sementara di awal yang boleh ditinggalkan begitu orangnya sudah percaya diri.',
    errorFeedback:
      'Belum tepat. Masalahnya bukan di AI-nya — masalahnya di kebiasaan berhenti mengecek. Langkah cek manusia itu wajib ada terus-menerus, bukan cuma di awal-awal sebelum orangnya merasa percaya diri.',
  },
  {
    id: 'c5-card-16',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Merancang Alur Kerja, Bagian 4',
    title: 'Target Keberhasilan Sederhana — yang Bisa Diukur dalam 2-4 Minggu',
    body: [
      'Bagian terakhir dari rancangan: target keberhasilan sederhana yang bisa diukur dalam 2-4 minggu. Bukan target besar setahun, bukan juga sekadar "lebih cepat" tanpa angka.',
      'Contoh konkret: "waktu bikin draft balasan customer service turun dari 15 menit jadi 5 menit, dan minimal 80% draft dipakai tanpa perlu diedit besar-besaran." Dua angka, dua-duanya bisa dicek beneran terjadi atau nggak setelah 2-4 minggu.',
      'Target sekecil apapun itu penting, karena inilah yang membedakan alur kerja Bab 5-7 dari eksperimen AI acak di Bab 1 — ada cara mengecek apakah ini beneran membantu, bukan cuma "kelihatannya membantu."',
    ],
  },
  {
    id: 'c5-card-17',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Ditulis',
    title: 'Lima Bagian Tadi — Sekarang Satukan Jadi Satu Rancangan',
    body: [
      'Anda baru saja melewati lima bagian: kasus pakai yang dikunci, mode pemakaian yang cocok, siapa yang pakai, konteks dasar yang disiapkan, dan langkah cek manusia yang wajib — ditutup dengan target keberhasilan yang terukur.',
      'Sekarang satukan semuanya jadi satu rancangan konkret di buku kerja Anda. Ini bukan latihan berpikir lagi — ini dokumen yang akan langsung Anda pakai di Bab 6 waktu benar-benar menjalankan alur kerja ini di lapangan.',
    ],
  },
  {
    id: 'c5-card-18',
    type: 'reflection',
    eyebrow: 'Entri Kelima · Buku Kerja AI Adoption',
    prompt:
      'Satukan rancangan alur kerja AI pertama Anda: kasus pakai yang dikunci, mode pemakaian, siapa yang pakai, langkah cek manusia, dan target keberhasilan.',
    fields: [
      {
        id: 'locked-use-case-and-mode',
        label:
          'Kasus pakai apa yang Anda kunci, dan mode pemakaian mana yang paling cocok — chat biasa, ruang kerja bersama, atau automasi lintas file?',
        placeholder:
          'Misalnya: draft balasan customer service, pakai chat biasa dulu karena baru saya sendiri yang coba...',
      },
      {
        id: 'who-uses-it',
        label: 'Siapa yang akan pakai — satu orang dulu, atau langsung tim? Sebutkan nama atau perannya.',
        placeholder: 'Misalnya: saya sendiri dulu selama 2 minggu, baru diperluas ke Rina di CS...',
      },
      {
        id: 'human-check-step',
        label: 'Langkah cek manusia: siapa yang akan membaca dan menyetujui hasil AI sebelum benar-benar dipakai?',
        placeholder:
          'Misalnya: setiap draft dibaca ulang oleh saya sendiri sebelum dikirim ke pelanggan, minimal sampai bulan depan...',
      },
      {
        id: 'success-target',
        label: 'Target keberhasilan sederhana apa yang bisa Anda ukur dalam 2-4 minggu?',
        placeholder:
          'Misalnya: waktu bikin draft turun dari 15 menit jadi 5 menit, minimal 80% draft dipakai tanpa edit besar-besaran...',
      },
    ],
  },
  {
    id: 'c5-card-19',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 6',
    title: 'Sekarang Anda Punya Rancangan Alur Kerja Lengkap di Atas Kertas',
    body: [
      'Anda baru saja mengunci satu kasus pakai, memilih mode pemakaian yang cocok, dan menuliskan siapa yang pakai, langkah cek manusia, dan target keberhasilannya — bukan lagi rencana abstrak, tapi rancangan konkret dengan nama dan angka.',
      'Sekarang Anda punya rancangan alur kerja lengkap di atas kertas. Bab berikutnya soal menjalankannya beneran di lapangan — dan melatih tim Anda supaya nggak asal telan hasil AI mentah-mentah.',
    ],
  },
]
