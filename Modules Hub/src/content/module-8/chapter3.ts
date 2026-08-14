import {
  Search,
  AlertTriangle,
  ShieldAlert,
  HelpCircle,
  History,
  GraduationCap,
  Stethoscope,
  Layers,
  FileSearch,
  ListChecks,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter3Cards: Card[] = [
  {
    id: 'c3-card-1',
    type: 'info',
    icon: Search,
    eyebrow: 'Bab 3 · Dari Peta ke Diagnosis',
    title: 'Anda Sudah Tahu Ini Kemungkinan Besar Masalah Tahap 1 — Sekarang Bongkar Persisnya Kenapa',
    body: [
      'Di Bab 1 Anda sudah punya satu perubahan konkret. Di Bab 2 Anda dapat peta dua tahap, dan kemungkinan besar sudah menandai bahwa Tahap 1 — Kesiapan & Buy-In — yang paling bolong di bisnis Anda.',
      'Tapi "Tahap 1 bolong" masih terlalu umum buat ditindaklanjuti. Kalau tim resisten terhadap perubahan yang Anda bawa dari Bab 1, pertanyaannya sekarang bukan lagi "tahap mana yang bolong," tapi "kenapa persisnya mereka resisten." Dua tim yang sama-sama kelihatan menolak bisa punya alasan yang sama sekali berbeda di baliknya.',
      'Bab ini kasih Anda empat lensa buat membongkar alasan itu satu per satu — biar Bab 4 nanti bisa membangun kasus perubahan yang menjawab akar masalah yang sebenarnya, bukan sekadar pengumuman yang lebih heboh.',
    ],
  },
  {
    id: 'c3-card-2',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Kesalahan yang Paling Gampang Dijatuhi',
    title: 'Begitu Perubahan Nggak Jalan, Kesimpulannya Selalu Sama: "Tim Saya Emang Susah Berubah"',
    body: [
      'Ini pola yang hampir universal: begitu perubahan macet, pemilik bisnis nggak pernah benar-benar mendiagnosis kenapa. Kesimpulannya langsung lompat ke karakter — "tim saya emang males," "orang sini susah diajak maju," "ya namanya juga karyawan, maunya di zona nyaman."',
      'Kesimpulan ini menarik karena dua alasan: nggak butuh introspeksi apapun dari sisi cara perubahan itu dijalankan, dan terasa "masuk akal" karena hampir semua bisnis lain juga cerita hal yang mirip. Tapi itu berhenti tepat di titik yang seharusnya baru jadi titik mulai investigasi.',
      'Kenyataannya, "resistensi" bukan satu hal. Di balik penolakan yang kelihatan sama dari luar, biasanya ada penyebab spesifik yang bisa dikenali — dan begitu Anda tahu penyebabnya, cara menanganinya jadi jauh lebih tepat sasaran daripada sekadar "coba diyakinkan lagi" atau "diomelin biar nurut."',
    ],
  },
  {
    id: 'c3-card-3',
    type: 'info',
    icon: ShieldAlert,
    eyebrow: 'Lensa 1',
    title: 'Takut Nggak Kompeten di Cara Baru',
    body: [
      'Karyawan, terutama yang sudah lama kerja dan nyaman dengan cara lama, punya satu ketakutan yang jarang mereka ucapkan terus terang: kelihatan lambat, bingung, atau bodoh saat belajar sistem atau tool baru — di depan rekan kerja yang sama-sama mereka temui tiap hari.',
      'Ini bukan soal nggak mau berubah. Ini soal harga diri di tempat kerja. Orang yang sudah bertahun-tahun jadi "yang paling jago" di cara lama, tiba-tiba harus jadi pemula lagi, salah pencet, tanya hal yang menurutnya "harusnya udah tau" — di depan orang yang sama yang selama ini melihat dia kompeten.',
      'Daripada ambil risiko itu, lebih aman diam-diam terus pakai cara lama. Bukan karena keras kepala. Karena cara lama itu satu-satunya tempat mereka masih merasa kompeten.',
    ],
  },
  {
    id: 'c3-card-4',
    type: 'info',
    icon: HelpCircle,
    eyebrow: 'Lensa 2',
    title: 'Nggak Jelas Untungnya Buat Mereka',
    body: [
      'Perubahan hampir selalu dijelaskan dari sudut pandang bisnis atau owner: "biar lebih efisien," "biar datanya rapi buat laporan," "biar prosesnya lebih rapi." Semua benar, dari sudut pandang orang yang lihat angka besar.',
      'Tapi karyawan yang harus mengubah kebiasaan hariannya nggak hidup di sudut pandang itu. Yang mereka tanyakan, sering cuma di kepala sendiri, bukan diucapkan ke atasan: "emangnya kenapa saya harus repot-repot ganti cara kerja saya yang sudah lancar?" Kalau nggak ada jawaban jelas buat pertanyaan itu, dari sudut pandang mereka — bukan sudut pandang bisnis — perubahan ini cuma kerjaan tambahan tanpa alasan yang kerasa relevan.',
      'Efisiensi buat perusahaan bisa saja berarti kerjaan yang sama, cuma dengan langkah tambahan yang belum mereka kuasai. Kalau itu satu-satunya yang mereka lihat, resistensi bukan hal yang aneh — itu respons yang cukup masuk akal buat sesuatu yang kelihatan cuma nambah beban.',
    ],
  },
  {
    id: 'c3-card-5',
    type: 'info',
    icon: History,
    eyebrow: 'Lensa 3',
    title: 'Trauma dari Perubahan Sebelumnya yang Cuma Proyek Sesaat',
    body: [
      'Banyak tim punya sejarah — mungkin bukan dengan Anda sekarang, mungkin dari owner sebelumnya atau manajer yang lain — di mana ada inisiatif yang diumumkan heboh, dirayakan sebentar, lalu diam-diam ditinggalkan dalam beberapa minggu tanpa penjelasan.',
      'Begitu itu terjadi sekali atau dua kali, tim belajar sebuah pola: perubahan-perubahan seperti ini biasanya nggak bertahan, jadi ngapain repot-repot mengubah kebiasaan kalau ujungnya bakal balik lagi ke cara lama begitu semangat awalnya reda.',
      'Ini bukan penolakan terhadap perubahan yang sekarang secara spesifik. Ini kehati-hatian yang dipelajari dari pengalaman — dan dari sudut pandang mereka, cukup rasional. Kalau tiga perubahan terakhir semuanya mati sendiri, kenapa yang keempat harus diperlakukan beda?',
    ],
  },
  {
    id: 'c3-card-6',
    type: 'info',
    icon: GraduationCap,
    eyebrow: 'Lensa 4',
    title: 'Belum Pernah Benar-Benar Dilatih',
    body: [
      'Tim dikasih tool atau SOP baru, tapi cuma diberi tahu sekali secara lisan di tengah kesibukan, atau dokumennya ditempel begitu saja di dinding — tanpa pelatihan hands-on yang cukup buat benar-benar bisa pakai dengan lancar.',
      'Yang kelihatan dari luar sebagai "resistensi" — orang yang salah pakai, lambat, atau balik ke cara lama — sebenarnya bukan soal sikap sama sekali. Itu kesulitan praktis murni. Mereka mau, tapi belum benar-benar bisa, dan nggak ada tempat aman buat mengaku "saya belum paham" tanpa kelihatan seperti Lensa 1.',
      'Ini lensa yang paling gampang disalahartikan sebagai penolakan, padahal solusinya paling sederhana dari keempatnya: bukan meyakinkan lagi, bukan menjelaskan alasan lagi — tapi melatih sampai benar-benar lancar.',
    ],
  },
  {
    id: 'c3-card-7',
    type: 'info',
    icon: Stethoscope,
    eyebrow: 'Cara Mendiagnosis, Bukan Menduga',
    title: 'Tanya Langsung, atau Amati Pola Penolakannya',
    body: [
      'Empat lensa ini nggak berguna kalau cuma jadi teori di kepala Anda. Cara paling praktis mendiagnosis kasus resistensi yang sebenarnya: tanya langsung ke orangnya kalau situasinya memungkinkan, atau amati pola kapan dan bagaimana penolakan itu muncul.',
      'Empat pola yang bisa dikenali: penolakan muncul paling jelas saat diminta praktik langsung di depan orang lain — indikasi Lensa 1. Penolakan selalu dibarengi pertanyaan "emang kenapa harus ganti" atau versi lainnya — indikasi Lensa 2.',
      'Penolakan dibarengi komentar seperti "kayak proyek yang dulu-dulu" atau "paling juga berhenti sendiri" — indikasi Lensa 3. Dan yang terakhir: orangnya sebenarnya kelihatan mau, tapi keliatan bingung, sering salah pakai, atau minta ditunjukin ulang — itu bukan penolakan sikap, itu indikasi Lensa 4.',
    ],
  },
  {
    id: 'c3-card-8',
    type: 'fill-in-the-blank',
    sentence:
      'Kalau penolakan seorang karyawan selalu dibarengi pertanyaan "emang kenapa saya harus ganti cara kerja saya," itu indikasi paling kuat mengarah ke ________.',
    options: [
      'Lensa 2 — Nggak Jelas Untungnya Buat Mereka',
      'Lensa 1 — Takut Nggak Kompeten',
      'Lensa 3 — Trauma Proyek Sesaat',
      'Lensa 4 — Belum Pernah Dilatih',
    ],
    correctAnswer: 'Lensa 2 — Nggak Jelas Untungnya Buat Mereka',
    successFeedback:
      'Tepat. Pertanyaan "emang kenapa harus ganti" adalah sinyal paling jelas dari Lensa 2 — orangnya belum pernah dapat jawaban yang kerasa relevan buat dirinya sendiri, bukan cuma buat bisnis.',
    errorFeedback:
      'Belum tepat. Sinyal ini mengarah ke Lensa 2 — Nggak Jelas Untungnya Buat Mereka. Pertanyaan "emang kenapa harus ganti" yang berulang adalah tanda paling khas bahwa orangnya belum pernah dapat jawaban yang relevan dari sudut pandangnya sendiri.',
  },
  {
    id: 'c3-card-9',
    type: 'info',
    icon: Layers,
    eyebrow: 'Catatan Penting',
    title: 'Bisa Lebih dari Satu Lensa Berlaku Sekaligus',
    body: [
      'Jangan dipaksa cari satu jawaban tunggal. Kasus resistensi yang sama, pada orang yang sama, bisa punya kombinasi dua lensa atau lebih sekaligus — misalnya karyawan yang trauma dari proyek sebelumnya (Lensa 3) sekaligus belum pernah dilatih dengan benar di percobaan sekarang (Lensa 4).',
      'Yang penting bukan mereduksi setiap kasus jadi satu label rapi. Yang penting adalah mengenali kombinasi yang sebenarnya berlaku, biar kasus perubahan dan pendekatan rollout yang dirancang di Bab 4 sampai 6 tepat sasaran — bukan menjawab satu lensa sementara tiga lainnya masih aktif diam-diam.',
    ],
  },
  {
    id: 'c3-card-10',
    type: 'info',
    icon: FileSearch,
    eyebrow: 'Contoh Kasus',
    title: 'Tiga Admin Toko Diam-Diam Balik Pakai Catatan Manual — Mari Diagnosis Bareng',
    body: [
      'Sebuah toko retail kecil ganti sistem pencatatan stok dari buku manual ke aplikasi di tablet. Tiga dari lima admin toko kelihatan pakai aplikasinya di minggu pertama. Masuk minggu ketiga, owner cek — tiga orang itu diam-diam sudah balik nyatet di buku, baru dipindah ke aplikasi belakangan kalau sempat, atau kadang nggak dipindah sama sekali.',
      'Sebelum baca lanjut, coba tebak sendiri dulu — kalau Anda cuma lihat gejala ini dari luar, gampang banget jatuh ke kesimpulan "mereka emang nggak niat pakai aplikasi." Tapi mari bongkar dulu apa yang sebenarnya terjadi di baliknya, lensa demi lensa.',
    ],
  },
  {
    id: 'c3-card-11',
    type: 'info',
    icon: ListChecks,
    eyebrow: 'Contoh Kasus · Lanjutan',
    title: 'Jalan Lensa Satu per Satu, Cek Mana yang Cocok',
    body: [
      'Owner akhirnya duduk bareng salah satu admin dan tanya langsung. Yang muncul: aplikasinya sempat error waktu dipakai di depan pelanggan yang lagi ngantre, dan admin itu sampai keringetan dicariin sama rekan kerja lain karena kelamaan. Itu indikasi Lensa 1 — takut kelihatan nggak kompeten di depan orang lain, sekarang dia lebih milih catat manual dulu baru pindahin nanti biar nggak keliatan lelet lagi.',
      'Owner juga inget, penjelasan waktu launching cuma: "biar stoknya kecatat rapi di sistem, gampang buat laporan bulanan." Nggak ada yang pernah jelasin ke admin apa untungnya buat mereka sehari-hari — jadi ini juga kena Lensa 2.',
      'Lensa 3 dicek dan nggak cocok — ini perubahan pertama sejak toko buka, nggak ada riwayat proyek serupa yang mati sebelumnya. Lensa 4 juga dicek: pelatihannya sebenarnya cukup, satu sesi hands-on 30 menit dan semua admin bisa mempraktikkan sampai lancar waktu itu — jadi bukan soal belum bisa.',
      'Kesimpulan: kasus ini kombinasi Lensa 1 dan Lensa 2 yang dominan — takut kelihatan lelet di depan pelanggan dan rekan kerja, digabung dengan nggak pernah dapat jawaban jelas soal untungnya buat mereka pribadi. Bukan soal "nggak niat," dan bukan juga soal "belum bisa."',
    ],
  },
  {
    id: 'c3-card-12',
    type: 'multiple-choice',
    question:
      'Dari kasus tiga admin toko di atas, kenapa Lensa 4 dicoret dari diagnosis meski gejalanya kelihatan mirip "nggak becus pakai aplikasi"?',
    options: [
      'Karena pelatihan hands-on-nya sudah cukup dan semua admin sempat lancar mempraktikkannya — masalahnya bukan soal belum bisa',
      'Karena Lensa 4 cuma berlaku buat tool yang sangat rumit, bukan aplikasi sederhana',
      'Karena owner nggak sempat mengecek pelatihan sama sekali',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Lensa 4 dicoret bukan karena "nggak mungkin," tapi karena buktinya nggak mendukung — pelatihannya memang sudah cukup dan admin sempat lancar. Kesulitan yang muncul kemudian datang dari rasa takut kelihatan lelet (Lensa 1) dan nggak jelas untungnya (Lensa 2), bukan dari belum bisa pakai aplikasinya.',
    errorFeedback:
      'Belum tepat. Lensa 4 dicoret karena pelatihannya sebenarnya sudah cukup — satu sesi hands-on dan semua admin sempat lancar mempraktikkan. Diagnosis harus berdasarkan bukti yang ada, bukan asumsi bahwa satu lensa "pasti berlaku" karena gejalanya kelihatan mirip.',
  },
  {
    id: 'c3-card-13',
    type: 'multiple-choice',
    question:
      'Skenario: Seorang staf produksi selalu ada saja alasan buat nggak jadi orang pertama yang coba mesin baru di depan tim — "biar yang lain dulu aja." Begitu akhirnya dipaksa coba, tangannya kelihatan gemetar dan dia buru-buru bilang "nanti juga saya bisa sendiri, nggak usah dilihatin." Ini paling mengarah ke lensa mana?',
    options: [
      'Lensa 1 — Takut Nggak Kompeten di Cara Baru',
      'Lensa 2 — Nggak Jelas Untungnya Buat Mereka',
      'Lensa 3 — Trauma Proyek Sesaat',
      'Lensa 4 — Belum Pernah Dilatih',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Pola "hindari jadi yang pertama dicoba di depan orang lain" plus reaksi nggak mau dilihatin adalah sinyal klasik Lensa 1 — takut kelihatan nggak kompeten, bukan soal nggak mau atau nggak tahu caranya.',
    errorFeedback:
      'Belum tepat. Ini Lensa 1 — Takut Nggak Kompeten di Cara Baru. Menghindari jadi yang pertama dicoba di depan tim, lalu nggak mau dilihatin waktu akhirnya coba, adalah pola khas soal menjaga harga diri di depan rekan kerja.',
  },
  {
    id: 'c3-card-14',
    type: 'multiple-choice',
    question:
      'Skenario: Tim sales diminta pindah dari catatan manual ke CRM baru. Salah satu sales bilang ke rekannya, "gue udah jago closing pake cara lama, ini CRM cuma nambahin kerjaan input data doang, buat apa coba." Ini paling mengarah ke lensa mana?',
    options: [
      'Lensa 2 — Nggak Jelas Untungnya Buat Mereka',
      'Lensa 1 — Takut Nggak Kompeten',
      'Lensa 3 — Trauma Proyek Sesaat',
      'Lensa 4 — Belum Pernah Dilatih',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Komentar "buat apa coba" — nggak melihat manfaat apapun buat dirinya, cuma kerjaan tambahan — adalah sinyal khas Lensa 2. Dia nggak takut nggak bisa, dan nggak menyinggung pengalaman buruk sebelumnya. Dia cuma belum dapat jawaban yang relevan buat dirinya.',
    errorFeedback:
      'Belum tepat. Ini Lensa 2 — Nggak Jelas Untungnya Buat Mereka. Komentarnya murni soal nggak melihat manfaat pribadi dari perubahan ini, bukan soal takut nggak bisa atau trauma masa lalu.',
  },
  {
    id: 'c3-card-15',
    type: 'multiple-choice',
    question:
      'Skenario: Perusahaan mengumumkan SOP baru buat tim gudang. Salah satu kepala regu langsung nyeletuk ke anak buahnya, "udah, santai aja, kayak yang kemarin-kemarin, tiga bulan juga ilang sendiri programnya." Ini paling mengarah ke lensa mana?',
    options: [
      'Lensa 3 — Trauma Proyek Sesaat',
      'Lensa 1 — Takut Nggak Kompeten',
      'Lensa 2 — Nggak Jelas Untungnya',
      'Lensa 4 — Belum Pernah Dilatih',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Komentar "kayak yang kemarin-kemarin" adalah sinyal paling jelas dari Lensa 3 — dia sudah belajar dari pengalaman sebelumnya bahwa perubahan semacam ini biasanya nggak bertahan, jadi nggak perlu diseriusin.',
    errorFeedback:
      'Belum tepat. Ini Lensa 3 — Trauma Proyek Sesaat. Komentar yang membandingkan dengan inisiatif-inisiatif sebelumnya yang mati sendiri adalah tanda paling khas dari pola ini.',
  },
  {
    id: 'c3-card-16',
    type: 'multiple-choice',
    question:
      'Skenario: Seorang admin kelihatan semangat waktu sistem baru diluncurkan, sering nanya-nanya di awal. Tapi dua minggu kemudian dia masih sering salah input data dan harus tanya rekan kerja hal yang sama berulang kali. Dia sendiri bilang, "gue mau kok pake ini, cuma masih suka bingung langkahnya di mana." Ini paling mengarah ke lensa mana?',
    options: [
      'Lensa 4 — Belum Pernah Dilatih',
      'Lensa 1 — Takut Nggak Kompeten',
      'Lensa 2 — Nggak Jelas Untungnya',
      'Lensa 3 — Trauma Proyek Sesaat',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Dia sendiri bilang mau, dan kesulitannya soal langkah teknis yang berulang — itu Lensa 4. Ini bukan resistensi sikap sama sekali, ini kesulitan praktis karena pelatihannya belum cukup buat benar-benar lancar.',
    errorFeedback:
      'Belum tepat. Ini Lensa 4 — Belum Pernah Dilatih. Dia secara eksplisit bilang mau pakai, dan masalahnya murni soal belum lancar dengan langkah-langkahnya — bukan soal sikap menolak.',
  },
  {
    id: 'c3-card-17',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Sebelum Entri Ketiga',
    title: 'Sekarang Giliran Perubahan Anda Sendiri yang Didiagnosis',
    body: [
      'Anda baru saja melatih empat lensa ini lewat contoh kasus dan skenario orang lain. Sekarang giliran perubahan yang Anda tuliskan di Bab 1 — atau perubahan lain yang lebih relevan sekarang.',
      'Ingat: nggak harus satu lensa tunggal. Kalau menurut Anda kombinasi dua lensa yang berlaku, tuliskan kombinasinya. Yang penting jawabannya sespesifik mungkin — bukan "tim saya susah berubah," tapi lensa mana persisnya, dan tanda-tanda konkret apa yang jadi dasarnya.',
    ],
  },
  {
    id: 'c3-card-18',
    type: 'reflection',
    eyebrow: 'Entri Ketiga · Buku Kerja Change Management',
    prompt:
      'Untuk perubahan yang Anda pikirkan (dari Bab 1, atau yang lain kalau lebih relevan), diagnosis lensa resistensi yang paling dominan.',
    fields: [
      {
        id: 'dominant-lens',
        label:
          'Untuk perubahan yang Anda pikirkan, lensa mana yang paling dominan — takut nggak kompeten, nggak jelas untungnya, trauma perubahan sebelumnya, atau belum pernah dilatih?',
        placeholder:
          'Misalnya: kombinasi Lensa 2 dan Lensa 4 — tim nggak pernah dapat jawaban jelas soal untungnya, dan pelatihannya cuma sekali di awal...',
      },
      {
        id: 'concrete-signs',
        label: 'Apa tanda-tanda konkret yang Anda lihat/dengar dari tim yang menunjukkan itu?',
        placeholder:
          'Misalnya: selalu nanya "emang kenapa harus ganti" waktu dibahas, atau sering salah pakai dan minta ditunjukin ulang...',
      },
    ],
  },
  {
    id: 'c3-card-19',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 4',
    title: 'Sekarang Anda Tahu Persis Akar Resistensinya',
    body: [
      'Anda nggak lagi berhenti di "tim saya emang susah berubah." Anda sekarang punya diagnosis yang spesifik — lensa mana, atau kombinasi lensa mana, yang sebenarnya bikin tim Anda diam-diam menolak.',
      'Bab 4 masuk ke cara membangun kasus perubahan dan peta stakeholder yang langsung menjawab akar itu — bukan sekadar pengumuman umum lagi.',
    ],
  },
]
