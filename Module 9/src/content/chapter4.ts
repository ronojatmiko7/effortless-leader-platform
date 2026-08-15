import {
  Link2,
  ClipboardCopy,
  ShieldOff,
  Lock,
  FileText,
  HelpCircle,
  Building2,
  Users,
  ListChecks,
  VolumeX,
  Handshake,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter4Cards: Card[] = [
  {
    id: 'c4-card-1',
    type: 'info',
    icon: Link2,
    eyebrow: 'Bab 4 · Menyambung dari Bab 3',
    title: 'Kandidat Kasus Pakai Sudah Ada — Dua Hal Ini Harus Beres Dulu',
    body: [
      'Bab 3 ditutup dengan janji: sebelum kita rancang alur kerjanya di Bab 5, ada satu hal yang harus beres dulu — data apa yang boleh masuk ke AI, dan bagaimana caranya tim Anda nggak takut sama alat ini. Ini bab itu.',
      'Dua hal itu kedengarannya beda topik, tapi sebenarnya satu masalah yang sama: nggak ada batasan yang pernah dijelaskan dengan jelas. Tanpa batasan, sebagian orang jadi kelewat longgar, sebagian lagi jadi kelewat takut — dan keduanya sama-sama berbahaya buat rollout yang akan Anda jalankan mulai Bab 5.',
      'Ini juga bab penutup Hari 1. Setelah ini, fondasinya lengkap — dan Hari 2 dimulai dari benar-benar merancang dan menjalankan alur kerjanya.',
    ],
  },
  {
    id: 'c4-card-2',
    type: 'info',
    icon: ClipboardCopy,
    eyebrow: 'Skenario Pertama — Kelewat Longgar',
    title: 'Seorang Staf Copy-Paste Data Pelanggan Lengkap ke Akun AI Gratisan — "Biar Cepat"',
    body: [
      'Seorang staf sedang mengerjakan sesuatu yang butuh data pelanggan — mungkin bikin ringkasan, mungkin draft komunikasi. Biar cepat, dia copy-paste data pelanggan lengkap ke akun AI pribadi gratisan: nomor telepon, alamat, riwayat transaksi, semuanya mentah-mentah.',
      'Dia nggak bermaksud jahat. Dia cuma mau kerjaannya selesai lebih cepat, dan nggak ada yang pernah bilang ke dia itu boleh atau nggak boleh. Nggak ada aturan yang pernah dijelaskan, jadi dia pakai penilaian sendiri — dan penilaian sendiri itu, tanpa batasan, gampang salah arah.',
      'Begitu data itu masuk ke akun pribadi gratisan, Anda nggak tahu lagi ke mana perginya, siapa yang bisa lihat, atau berapa lama itu tersimpan di sana. Bukan karena stafnya nakal — karena nggak pernah ada yang menggambar garisnya.',
    ],
  },
  {
    id: 'c4-card-3',
    type: 'yes-no',
    question:
      'Pernah ada kejadian mirip ini di bisnis Anda — atau Anda cukup yakin itu bisa terjadi kapan saja karena memang belum pernah ada aturan yang dijelaskan?',
    yesLabel: 'Pernah, atau saya cukup yakin itu bisa terjadi',
    noLabel: 'Nggak, saya cukup yakin tim saya nggak akan begitu',
    feedbackYes:
      'Jawaban paling jujur — dan bukan berarti tim Anda ceroboh. Ini terjadi persis karena batasannya belum pernah digambar, bukan karena niat siapapun buruk. Kartu-kartu berikutnya akan kasih Anda batasan sederhana buat mulai menggambarnya.',
    feedbackNo:
      'Bagus kalau memang begitu — tapi coba jujur ke diri sendiri: apakah itu karena batasannya sudah pernah dijelaskan eksplisit, atau cuma karena kebetulan belum ada yang butuh copy-paste data sebesar itu? Kalau yang kedua, ini tetap risiko yang belum digambar batasnya.',
  },
  {
    id: 'c4-card-4',
    type: 'info',
    icon: ShieldOff,
    eyebrow: 'Skenario Kedua — Kebalikannya, Kelewat Takut',
    title: 'Tim Terlalu Takut Sampai Nggak Berani Pakai AI Sama Sekali — Padahal Sebenarnya Aman',
    body: [
      'Kebalikan dari skenario tadi sama seringnya terjadi. Tim jadi terlalu takut sampai nggak berani pakai AI buat apapun — termasuk hal-hal yang sebenarnya aman banget, seperti bikin draft ringkasan laporan atau ide konten yang nggak menyentuh data pelanggan sama sekali.',
      'Alasannya sama persis dengan skenario pertama: nggak ada batasan jelas yang pernah dijelaskan. Bedanya cuma arah reaksinya. Yang satu jadi kelewat longgar karena nggak tahu ada batas, yang ini jadi kelewat hati-hati karena nggak tahu di mana batas amannya — jadi dianggap semuanya berisiko sampai terbukti sebaliknya.',
      'Dua-duanya sama mahalnya buat bisnis Anda. Yang satu bikin data bocor tanpa disadari. Yang satu lagi bikin kasus pakai yang sudah Anda pilih susah payah di Bab 3 nggak pernah beneran dipakai, karena timnya keburu ragu duluan.',
    ],
  },
  {
    id: 'c4-card-5',
    type: 'yes-no',
    question:
      'Sebaliknya — pernah lihat tim Anda ragu atau menolak pakai AI buat hal yang sebenarnya aman, cuma karena nggak ada yang pernah bilang itu boleh?',
    yesLabel: 'Pernah, ada keraguan semacam itu',
    noLabel: 'Belum pernah lihat itu terjadi',
    feedbackYes:
      'Ini juga pola yang sangat umum, dan sering luput dari perhatian CEO karena kelihatannya "aman-aman saja" — padahal itu berarti kasus pakai yang sudah dipilih dengan susah payah nggak pernah beneran jalan. Batasan yang jelas menyelesaikan dua sisi ini sekaligus.',
    feedbackNo:
      'Kalau memang belum pernah, tetap baik untuk menggambar batasannya lebih awal — sebelum kasus pakai dari Bab 3 mulai dijalankan di Bab 5, biar keraguan semacam ini nggak muncul di tengah jalan nanti.',
  },
  {
    id: 'c4-card-6',
    type: 'info',
    icon: Lock,
    eyebrow: 'Aturan Dasar Pertama',
    title: 'Data Sensitif Nggak Masuk Mentah-Mentah ke AI, Kecuali Lewat Akun Bisnis yang Kontrolnya Jelas',
    body: [
      'Ini bukan materi legal atau compliance mendalam — cuma titik mulai praktis yang bisa langsung dipakai. Data pelanggan yang sensitif — identitas lengkap, data keuangan pribadi, data kesehatan — sebaiknya nggak dimasukkan mentah-mentah ke alat AI, kecuali lewat akun bisnis yang kontrol aksesnya jelas.',
      '"Mentah-mentah" itu kata kuncinya. Kalau data itu memang perlu diolah AI, cara amannya lewat akun tingkat bisnis yang bisa dipantau dan dipertanggungjawabkan — bukan ditempel langsung ke akun pribadi gratisan siapapun yang kebetulan sedang buru-buru.',
      'Ini bukan soal AI-nya nggak boleh menyentuh data sensitif sama sekali. Ini soal jalurnya harus jelas dan bisa dipantau, bukan jalur yang nggak ada yang tahu ke mana perginya.',
    ],
  },
  {
    id: 'c4-card-7',
    type: 'info',
    icon: FileText,
    eyebrow: 'Aturan Dasar Kedua',
    title: 'Data Internal Umum Biasanya Lebih Aman Dipakai',
    body: [
      'Sebaliknya, data internal umum — draft dokumen, ringkasan laporan, ide konten — umumnya lebih aman dipakai di AI, termasuk yang belum tentu lewat akun bisnis sekalipun, karena risikonya kalau bocor jauh lebih kecil.',
      'Ini yang bikin batasan ini kerasa adil, bukan cuma larangan sepihak. Bukan "jangan pakai AI buat apapun yang menyentuh data" — tapi "data sensitif lewat jalur yang jelas, data umum boleh lebih longgar." Itu jauh lebih gampang diingat dan dijalankan tim sehari-hari.',
      'Kebanyakan kasus pakai yang lolos filter di Bab 3 — draft balasan, ringkasan laporan, draft konten — justru ada di kategori ini. Jadi batasan ini biasanya nggak menghalangi kasus pakai pertama Anda, cuma menandai di mana harus lebih hati-hati.',
    ],
  },
  {
    id: 'c4-card-8',
    type: 'multiple-choice',
    question:
      'Seorang admin mau bikin ringkasan penjualan mingguan pakai AI, dan datanya mencakup daftar pelanggan lengkap dengan nomor telepon dan riwayat transaksi tiap orang. Dia berniat pakai akun AI pribadi gratisan karena "cuma buat ringkasan doang." Apa yang paling tepat?',
    options: [
      'Boleh saja, karena tujuannya cuma bikin ringkasan, bukan menyebarkan datanya',
      'Datanya tetap termasuk data pelanggan sensitif (identitas dan riwayat transaksi) — sebaiknya diolah lewat akun bisnis yang kontrolnya jelas, bukan akun pribadi gratisan, apapun tujuan akhirnya',
      'Nggak masalah asal admin itu orang yang bisa dipercaya',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Yang menentukan bukan tujuan akhirnya atau seberapa bisa dipercaya orangnya — tapi jenis datanya. Begitu ada identitas lengkap dan riwayat transaksi pelanggan, itu data sensitif, dan jalurnya harus lewat akun bisnis yang kontrolnya jelas, bukan akun pribadi siapapun.',
    errorFeedback:
      'Belum tepat. Tujuan akhirnya (cuma ringkasan) atau seberapa bisa dipercaya orangnya bukan penentu di sini. Begitu datanya mencakup identitas dan riwayat transaksi pelanggan, itu data sensitif — harus lewat akun bisnis yang kontrolnya jelas, bukan akun pribadi gratisan.',
  },
  {
    id: 'c4-card-9',
    type: 'info',
    icon: HelpCircle,
    eyebrow: 'Penanda Cepat Kalau Masih Ragu',
    title: 'Satu Pertanyaan Buat Menguji Data Apapun yang Anda Ragukan',
    body: [
      'Dua aturan dasar tadi nggak akan menutup semua kemungkinan kasus. Pasti ada data yang Anda ragukan, nggak jelas masuk kategori sensitif atau umum. Buat itu, ada satu pertanyaan penanda cepat.',
      'Tanyakan: "kalau data ini bocor atau disalahgunakan, seberapa besar masalahnya buat pelanggan atau bisnis saya?" Kalau jawabannya "besar sekali" — anggap sensitif, lewat jalur yang terkontrol. Kalau jawabannya "nggak seberapa" — biasanya aman dipakai lebih longgar.',
      'Pertanyaan ini nggak butuh ahli hukum buat dijawab. Anda yang paling tahu bisnis Anda sendiri, dan itu cukup buat jadi penanda cepat sehari-hari — bukan pengganti kebijakan formal, tapi titik mulai yang bisa langsung dipakai tim Anda besok pagi.',
    ],
  },
  {
    id: 'c4-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau ragu apakah suatu data aman dimasukkan ke AI, penanda cepatnya adalah bertanya: seberapa besar masalahnya buat pelanggan atau bisnis kalau data itu "________" atau disalahgunakan?',
    options: ['bocor', 'diringkas', 'diarsipkan', 'dianalisis'],
    correctAnswer: 'bocor',
    successFeedback:
      'Tepat. "Kalau data ini bocor atau disalahgunakan, seberapa besar masalahnya buat pelanggan/bisnis?" — pertanyaan sederhana ini cukup buat jadi penanda cepat, bahkan tanpa ahli hukum di sebelah Anda.',
    errorFeedback:
      'Belum tepat. Pertanyaannya soal data itu "bocor" atau disalahgunakan — bukan soal diringkas, diarsipkan, atau dianalisis. Fokusnya di skenario terburuk, bukan di proses normalnya.',
  },
  {
    id: 'c4-card-11',
    type: 'info',
    icon: Building2,
    eyebrow: 'Kenapa Bukan Tiap Orang Pakai Akun Sendiri',
    title: 'Akun Tingkat Bisnis Bikin Kontrol Ada di Satu Tempat, Bukan Tersebar di Puluhan Akun Pribadi',
    body: [
      'Ini yang membedakan akun organisasi (seperti Claude for Business, tingkat Team atau Enterprise) dari puluhan karyawan yang masing-masing pakai akun pribadi gratisan sendiri-sendiri: kontrol siapa boleh akses apa ada di satu tempat, bukan tersebar dan nggak bisa dipantau.',
      'Kalau semua orang pakai akun pribadi masing-masing, batasan data yang baru saja Anda baca cuma jadi imbauan — nggak ada cara benar-benar memastikan itu diikuti, dan nggak ada catatan kalau ada yang salah pakai. Anda cuma bisa berharap.',
      'Dengan akun tingkat bisnis, ada tanggung jawab yang jelas kalau ada yang salah pakai — bukan cuma "semoga nggak ada yang bocor," tapi ada jalur yang bisa dipantau dan dipertanggungjawabkan. Ini bukan soal fitur teknis tertentu; ini soal siapa yang bisa Anda mintai pertanggungjawaban kalau sesuatu terjadi.',
    ],
  },
  {
    id: 'c4-card-12',
    type: 'yes-no',
    question:
      'Hari ini, apakah pemakaian AI di bisnis Anda sudah lewat satu akun tingkat bisnis yang terpantau, atau masih tersebar di akun pribadi masing-masing orang?',
    yesLabel: 'Sudah ada akun tingkat bisnis',
    noLabel: 'Masih tersebar di akun pribadi masing-masing',
    feedbackYes:
      'Bagus — berarti fondasi kontrolnya sudah ada. Yang masih perlu dibereskan tinggal batasan datanya dan kepercayaan tim, yang jadi fokus sisa bab ini.',
    feedbackNo:
      'Ini kondisi paling umum di bisnis SME manapun, dan bukan hal yang harus langsung dibereskan hari ini juga. Yang penting sekarang Anda tahu kenapa itu berisiko, dan itu jadi bahan pertimbangan sebelum kasus pakai dari Bab 3 dijalankan penuh di Bab 5.',
  },
  {
    id: 'c4-card-13',
    type: 'info',
    icon: Users,
    eyebrow: 'Bagian yang Paling Sering Dilewatkan',
    title: 'Banyak CEO Langsung ke Rollout Tanpa Pernah Bertanya ke Tim "Apa yang Bikin Kalian Ragu?"',
    body: [
      'Ini bagian yang paling sering dilewatkan dari semua yang dibahas modul ini. CEO sudah punya kasus pakai, sudah punya batasan data, langsung lompat ke rollout — tanpa pernah sekalipun bertanya langsung ke tim: "apa yang bikin kalian ragu soal AI ini?"',
      'Padahal pertanyaan itu sederhana banget buat ditanyakan. Bukan pertanyaan yang butuh riset atau konsultan. Cuma butuh keberanian bertanya langsung, dan kesiapan mendengar jawaban yang mungkin nggak enak didengar.',
      'Ketakutan tim itu nggak hilang cuma karena nggak pernah dibahas terbuka. Ketakutan yang didiamkan justru yang paling berbahaya — karena itu yang bikin tim diam-diam menghindari atau bahkan mensabotase alat barunya nanti, tanpa Anda pernah tahu kenapa.',
    ],
  },
  {
    id: 'c4-card-14',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Empat Ketakutan yang Paling Umum',
    title: 'Kalau Anda Belum Yakin Apa yang Ditakutkan Tim, Ini Titik Mulainya',
    body: [
      'Takut digantikan, atau dianggap nggak perlu lagi kalau AI bisa kerjakan sebagian tugasnya. Takut dianggap "malas" kalau ketahuan pakai AI — seolah pakai AI berarti nggak niat kerja sungguhan.',
      'Takut hasilnya salah dan merekalah yang disalahkan, bukan AI-nya. Atau sekadar nggak pede sama teknologi baru — bukan takut spesifik apa-apa, cuma nggak terbiasa dan nggak nyaman.',
      'Empat ini bukan daftar lengkap, tapi cukup buat titik mulai. Kalau Anda belum pernah tanya langsung ke tim, kemungkinan besar satu atau lebih dari empat ini ada di kepala mereka sekarang — cuma belum pernah diucapkan.',
    ],
  },
  {
    id: 'c4-card-15',
    type: 'yes-no',
    question: 'Sejauh ini, pernahkah Anda bertanya langsung ke tim — bukan menebak sendiri — apa yang bikin mereka ragu soal AI?',
    yesLabel: 'Pernah, saya sudah tanya langsung',
    noLabel: 'Belum pernah, saya cuma menebak-nebak',
    feedbackYes:
      'Kalau memang sudah, Anda ada di posisi lebih maju dari kebanyakan CEO SME. Tetap pastikan jawaban jujur yang Anda siapkan di kartu berikutnya benar-benar menjawab ketakutan yang mereka sebutkan, bukan yang Anda kira mereka rasakan.',
    feedbackNo:
      'Ini jawaban paling umum, dan bukan hal yang perlu membuat Anda merasa gagal sebagai CEO. Justru karena itu, kartu refleksi di akhir bab ini akan memaksa Anda menuliskan tebakan terbaik Anda dulu — sebagai langkah pertama sebelum benar-benar menanyakannya ke tim.',
  },
  {
    id: 'c4-card-16',
    type: 'info',
    icon: VolumeX,
    eyebrow: 'Kenapa Diam Bukan Pilihan Aman',
    title: 'Ketakutan yang Nggak Pernah Dibahas Itu yang Diam-Diam Membunuh Adopsi di Bab 6-7',
    body: [
      'Godaannya adalah menganggap kalau nggak ada yang komplain terbuka, berarti nggak ada masalah. Padahal ketakutan yang didiamkan nggak hilang — cuma pindah bentuk jadi penghindaran diam-diam: alasan sibuk terus setiap kali diminta pakai AI, hasil yang "kebetulan" nggak pernah cukup bagus buat dipakai, atau kembali ke cara lama pelan-pelan tanpa penjelasan.',
      'Ini persis pola dari eksperimen AI acak yang dibahas Bab 1, tapi dari arah berbeda — bukan karena nggak ada pemilik atau kasus pakai yang dipilih, tapi karena tim yang seharusnya menjalankan itu diam-diam menghindar karena ketakutannya nggak pernah dibongkar.',
      'Membongkarnya sekarang, sebelum Bab 6-7 mulai menjalankan alur kerja betulan, jauh lebih murah daripada baru menyadarinya setelah rollout jalan tiga bulan dan hasilnya nggak pernah sesuai harapan.',
    ],
  },
  {
    id: 'c4-card-17',
    type: 'info',
    icon: Handshake,
    eyebrow: 'Jawaban Jujur yang Bisa Anda Sampaikan',
    title: 'AI Ini Bukan Pengganti Orang — Hasilnya Tetap Harus Dicek Manusia Sebelum Dipakai',
    body: [
      'Apapun ketakutan spesifik yang muncul dari tim Anda, ada satu jawaban jujur yang bisa jadi dasar untuk semuanya, lalu Anda sesuaikan ke ketakutan spesifiknya: AI ini bukan pengganti orang. Ini alat buat mempercepat bagian pekerjaan yang paling repetitif, supaya orangnya bisa fokus ke bagian yang butuh penilaian manusia.',
      'Dan bagian yang sama pentingnya: hasil AI tetap harus dicek manusia sebelum dipakai, bukan dipercaya buta. Ini bukan basa-basi buat menenangkan — ini juga langsung menjawab ketakutan "hasilnya salah dan saya yang disalahkan," karena artinya tim tetap punya kendali terakhir, bukan cuma menerima apa kata AI.',
      'Kalimat ini paling kuat kalau disampaikan langsung, bukan lewat memo atau pesan WhatsApp sekilas seperti pola di Bab 1. Sekarang giliran Anda menuliskan versi Anda sendiri — ketakutan yang menurut Anda paling mungkin muncul, dan jawaban jujur yang akan Anda sampaikan langsung ke tim.',
    ],
  },
  {
    id: 'c4-card-18',
    type: 'reflection',
    eyebrow: 'Entri Keempat · Buku Kerja AI Adoption',
    prompt:
      'Tuliskan ketakutan terbesar yang menurut Anda akan (atau sudah) muncul dari tim Anda soal AI, jawaban jujur yang akan Anda sampaikan langsung ke mereka, dan 1-2 batasan data sederhana untuk kasus pakai yang sudah Anda pilih di Bab 3.',
    fields: [
      {
        id: 'anticipated-fear',
        label: 'Ketakutan terbesar apa yang menurut Anda ada (atau akan muncul) di kepala tim Anda soal AI?',
        placeholder:
          'Misalnya: takut dianggap malas kalau ketahuan pakai AI, atau takut disalahkan kalau hasilnya salah...',
      },
      {
        id: 'honest-answer',
        label: 'Satu kalimat jawaban jujur apa yang akan Anda sampaikan langsung ke tim soal itu?',
        placeholder:
          'Misalnya: "AI ini buat mempercepat draft-draft berulang, bukan gantiin kalian — dan hasilnya tetap kalian yang cek sebelum dipakai."',
      },
      {
        id: 'data-boundaries',
        label:
          'Untuk kasus pakai yang sudah Anda pilih di Bab 3, apa 1-2 batasan data sederhana yang mau Anda tetapkan?',
        placeholder:
          'Misalnya: "boleh masukkan draft teks umum dan ide konten, jangan masukkan data pelanggan lengkap seperti nomor telepon atau riwayat transaksi."',
      },
    ],
  },
  {
    id: 'c4-card-19',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 5',
    title: 'Fondasi Hari 1 Sudah Lengkap — Empat Bab, Satu Kesatuan',
    body: [
      'Coba lihat kembali empat bab yang baru saja Anda lewati. Bab 1 kasih Anda kesadaran soal kuburan eksperimen AI acak. Bab 2 memetakan level pemakaian AI bisnis Anda hari ini. Bab 3 membantu Anda memilih kasus pakai pertama yang benar-benar layak. Bab 4 ini menetapkan batasan data dan jawaban jujur buat tim Anda. Empat-empatnya bukan bab lepas-lepas — itu satu fondasi yang sama, dibangun berurutan.',
      'Sekarang Anda sudah punya kasus pakai, batasan data, dan jawaban jujur buat tim Anda. Hari kedua kita mulai benar-benar merancang dan menjalankan alur kerjanya.',
    ],
  },
]
