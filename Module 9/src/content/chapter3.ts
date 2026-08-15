import {
  Quote,
  AlertTriangle,
  ShieldAlert,
  Filter,
  Repeat,
  Clock,
  CheckCircle2,
  ClipboardList,
  AlertCircle,
  PenLine,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter3Cards: Card[] = [
  {
    id: 'c3-card-1',
    type: 'info',
    icon: Quote,
    eyebrow: 'Bab 3 · Menyambung dari Bab 2',
    title: 'Kasus Pakai yang "Benar-Benar Layak" — Itu yang Kita Bahas Sekarang',
    body: [
      'Di akhir Bab 2, Anda sudah tahu level pemakaian AI bisnis Anda hari ini — dan bab itu ditutup dengan janji: bab berikutnya bantu Anda memilih kasus pakai yang benar-benar layak jadi langkah pertama naik level, bukan sekadar yang paling menarik perhatian. Ini bab itu.',
      'Masalahnya, begitu tim atau CEO kepincut sama demo AI yang keren, ada dua godaan yang datang hampir bersamaan — dan keduanya sama-sama gagal sebelum sempat mulai. Dua kartu berikutnya membongkar keduanya satu per satu.',
    ],
  },
  {
    id: 'c3-card-2',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Jebakan Pertama',
    title: '"Pasang AI ke Semua Proses Sekaligus" — Godaan Paling Wajar, Paling Sering Gagal',
    body: [
      'Begini biasanya polanya: tim atau CEO baru saja lihat demo AI yang keren, langsung kepincut, dan reaksi pertamanya adalah "kalau begini, kenapa nggak pasang AI ke semua proses sekaligus?" Kedengarannya masuk akal — kalau AI bisa bantu satu hal, kenapa nggak bantu semuanya?',
      'Hasilnya di lapangan hampir selalu sama: semua alur kerja dapat sedikit AI, setengah-setengah, nggak ada satupun yang benar-benar matang. Tim sibuk coba di sana-sini, tapi nggak ada satu pun kasus pakai yang beneran selesai disiapkan sampai jadi kebiasaan yang jelas.',
      'Ujungnya, beberapa bulan kemudian, susah menunjukkan hasil konkret ke siapapun — bukan karena AI-nya nggak berguna, tapi karena energinya kepencar ke terlalu banyak arah sekaligus. Persis seperti Bab 1: nggak ada kasus pakai yang dipilih sengaja, cuma versi yang lebih ambisius.',
    ],
  },
  {
    id: 'c3-card-3',
    type: 'yes-no',
    question:
      'Pernah ada momen di bisnis Anda — atau bisnis yang Anda tahu — di mana reaksi pertama setelah lihat AI yang keren adalah "pasang ke semua proses sekaligus"?',
    yesLabel: 'Pernah, itu persis reaksi yang muncul',
    noLabel: 'Belum pernah, sejauh ini masih hati-hati',
    feedbackYes:
      'Reaksi itu wajar banget — semangat awal yang salah arah, bukan niat buruk. Tapi itu jebakan pertama yang harus dihindari mulai bab ini, biar semangatnya nggak habis di terlalu banyak tempat sekaligus.',
    feedbackNo:
      'Bagus kalau begitu — tapi jebakan kedua yang dibahas di kartu berikutnya justru sering muncul dari kehati-hatian yang salah arah juga. Baca terus.',
  },
  {
    id: 'c3-card-4',
    type: 'info',
    icon: ShieldAlert,
    eyebrow: 'Jebakan Kedua',
    title: 'Mulai dari Keputusan Paling Berisiko — Sama Bahayanya, Cuma Kelihatan Lebih "Serius"',
    body: [
      'Jebakan kedua kelihatannya kebalikan dari yang pertama, tapi ujungnya sama gagalnya: memilih kasus pakai yang paling high-stakes duluan. Misalnya keputusan finansial besar, atau komunikasi ke pelanggan penting yang taruhannya tinggi.',
      'Alasannya kedengaran masuk akal juga — "kalau mau buktikan AI beneran berguna, coba di hal yang paling penting sekalian." Padahal justru kasus pakai kayak gini yang paling susah diverifikasi hasilnya, dan paling mahal kalau AI-nya salah.',
      'Kasus pakai pertama Anda harus yang murah untuk dicoba dan murah untuk salah — bukan yang paling dramatis atau paling kelihatan penting kalau diceritakan di rapat direksi.',
    ],
  },
  {
    id: 'c3-card-5',
    type: 'multiple-choice',
    question:
      'Seorang CEO SME memutuskan kasus pakai AI pertama di bisnisnya adalah membantu menyusun rekomendasi investasi besar untuk ekspansi cabang baru — alasannya, "kalau ini berhasil, baru semua orang percaya AI beneran berguna." Apa masalah utama dari pilihan ini?',
    options: [
      'AI belum cukup canggih buat urusan finansial sebesar itu',
      'Kasus pakai ini high-stakes dan susah diverifikasi cepat — kalau AI-nya salah, biayanya mahal, dan itu jebakan yang sama bahayanya dengan "AI untuk semua hal"',
      'CEO seharusnya melibatkan tim finance dulu sebelum mencoba AI sama sekali',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Bukan soal AI-nya kurang canggih atau siapa yang dilibatkan — masalahnya ada di jenis kasus pakainya sendiri. Keputusan finansial besar itu high-stakes dan susah dicek benar-salahnya dengan cepat, jadi kalau AI-nya salah, biayanya mahal. Kasus pakai pertama harus murah untuk dicoba dan murah untuk salah.',
    errorFeedback:
      'Belum tepat. Masalahnya bukan di kecanggihan AI atau siapa yang dilibatkan — tapi di jenis kasus pakainya. Keputusan finansial besar itu high-stakes dan susah diverifikasi cepat, jadi kalau salah, biayanya mahal. Itu jebakan kedua yang sama bahayanya dengan "AI untuk semua hal."',
  },
  {
    id: 'c3-card-6',
    type: 'info',
    icon: Filter,
    eyebrow: 'Cara Menghindari Dua Jebakan Itu',
    title: 'Filter Tiga Pertanyaan — Cara Menilai Kasus Pakai Sebelum Dicoba',
    body: [
      'Dua jebakan tadi punya satu penawar yang sama: filter sederhana buat menilai kasus pakai apapun sebelum diputuskan jadi yang pertama dicoba. Bukan filter yang rumit — cuma tiga pertanyaan.',
      'Tiga pertanyaan ini nggak butuh data canggih atau riset panjang. Anda bisa jawab dari pengalaman langsung menjalankan bisnis Anda sendiri. Tiga kartu berikutnya membedah tiap pertanyaan satu per satu.',
    ],
  },
  {
    id: 'c3-card-7',
    type: 'info',
    icon: Repeat,
    eyebrow: 'Pertanyaan Pertama',
    title: 'Seberapa Sering Berulang?',
    body: [
      'Pertanyaan pertama: seberapa sering pekerjaan ini terjadi? Kalau cuma sekali setahun, nggak sepadan disiapkan alur kerja AI-nya — biaya menyiapkan dan melatih orang buat sesuatu yang jarang terjadi lebih besar dari manfaatnya.',
      'Tapi kalau pekerjaan itu terjadi harian atau mingguan, sangat sepadan. Setiap kali alur kerja AI-nya dipakai, itu langsung jadi penghematan waktu yang berulang, bukan sekali pakai lalu selesai.',
      'Semakin sering sesuatu dikerjakan, semakin besar juga alasan buat menyiapkan itu dengan benar sejak awal — dan semakin cepat juga Anda bisa lihat apakah kasus pakainya beneran jalan.',
    ],
  },
  {
    id: 'c3-card-8',
    type: 'info',
    icon: Clock,
    eyebrow: 'Pertanyaan Kedua',
    title: 'Seberapa Mahal atau Lama Kalau Dikerjakan Manual?',
    body: [
      'Pertanyaan kedua: kalau pekerjaan ini terus dikerjakan manual, berapa banyak waktu, tenaga, atau biaya yang terbuang tiap kali itu dilakukan? Bukan cuma soal berapa jam — tapi juga soal siapa yang mengerjakan, dan apa yang nggak sempat dikerjakan orang itu karena sibuk dengan ini.',
      'Kasus pakai yang bagus adalah yang manualnya beneran mahal — makan waktu berjam-jam, atau butuh orang dengan keahlian yang mahal buat dibayar melakukan pekerjaan yang sebenarnya rutin.',
      'Kalau pekerjaan manualnya cuma makan lima menit dan siapa saja bisa kerjakan tanpa beban, AI di situ nggak banyak membantu — bahkan kalau hasilnya bagus, penghematannya kecil dibanding usaha menyiapkannya.',
    ],
  },
  {
    id: 'c3-card-9',
    type: 'info',
    icon: CheckCircle2,
    eyebrow: 'Pertanyaan Ketiga — yang Paling Sering Dilewatkan',
    title: 'Seberapa Mudah Hasilnya Dicek Benar-Salah oleh Manusia?',
    body: [
      'Pertanyaan ketiga ini yang paling sering dilewatkan, padahal paling penting: kalau AI mengerjakan ini, seberapa mudah seseorang bisa lihat hasilnya dan langsung tahu itu benar, salah, atau perlu diperbaiki?',
      'Kasus pakai bagus punya cara jelas buat mengecek itu — misalnya dibandingkan dengan data asli, atau dibaca sekilas oleh orang yang paham konteksnya dan langsung kelihatan kalau ada yang aneh.',
      'Kasus pakai yang berbahaya adalah yang hasilnya butuh riset ulang penuh buat diverifikasi — di titik itu, Anda nggak beneran menghemat waktu, cuma memindahkan pekerjaannya dari "mengerjakan" ke "mengecek dari nol," yang kadang sama beratnya.',
    ],
  },
  {
    id: 'c3-card-10',
    type: 'fill-in-the-blank',
    sentence:
      'Pertanyaan filter yang paling sering dilewatkan orang, padahal paling menentukan apakah AI aman dipakai di kasus itu, adalah seberapa mudah hasilnya "________" oleh manusia.',
    options: ['dicek benar-salah', 'dibuat lebih cepat', 'disukai pelanggan', 'diotomasi penuh'],
    correctAnswer: 'dicek benar-salah',
    successFeedback:
      'Tepat. Seberapa mudah hasilnya dicek benar-salah oleh manusia — ini yang paling sering dilewatkan karena orang cenderung fokus ke "seberapa cepat" dan "seberapa mahal manual," lupa bahwa hasil yang susah diverifikasi sama bahayanya walau AI-nya cepat dan murah.',
    errorFeedback:
      'Belum tepat. Jawabannya "dicek benar-salah" — pertanyaan ketiga soal seberapa mudah seseorang bisa melihat hasil AI dan langsung tahu itu benar, salah, atau perlu diperbaiki.',
  },
  {
    id: 'c3-card-11',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Contoh Nyata',
    title: 'Empat Kasus Pakai yang Lolos Filter — Kenapa Skornya Bagus',
    body: [
      'Draft balasan customer service: sering (harian), lumayan mahal kalau manual (tim CS habiskan banyak jam nulis balasan serupa berulang-ulang), dan gampang dicek — siapapun yang paham produk bisa baca draft-nya sekilas dan langsung tahu itu pantas dikirim atau perlu diedit.',
      'Ringkasan laporan mingguan: sering (mingguan), memakan waktu kalau dikerjakan manual dari data mentah, dan gampang dicek — tinggal dibandingkan dengan data asli, kalau angkanya cocok berarti ringkasannya benar.',
      'Draft dokumentasi atau SOP awal: jarang terjadi, tapi mahal kalau dikerjakan manual dari nol — biasanya makan waktu berjam-jam dari orang yang paling paham proses. Tetap gampang dicek, karena orang yang paham prosesnya bisa langsung lihat mana yang salah atau kurang.',
      'Draft konten marketing: sering (rutin buat kebutuhan promosi), lumayan mahal manual, dan gampang dicek oleh siapapun yang paham suara brand-nya — cepat kelihatan kalau nadanya nggak pas.',
    ],
  },
  {
    id: 'c3-card-12',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Dua Contoh yang Butuh Kehati-Hatian Ekstra',
    title: 'Riset Kompetitor dan Keputusan Finansial Besar — Bukan Kasus Pakai Pertama yang Aman',
    body: [
      'Riset kompetitor awal: frekuensinya sedang, mahal kalau dikerjakan manual (butuh waktu lama menelusuri banyak sumber), tapi hasilnya perlu verifikasi tambahan — AI bisa salah kutip atau ketinggalan info terbaru, dan itu nggak selalu langsung kelihatan dari sekadar baca sekilas. Bukan berarti nggak boleh dicoba, tapi butuh kehati-hatian ekstra dan pengecekan silang — bukan kasus pakai pertama yang paling mudah.',
      'Keputusan finansial besar: jarang terjadi, tapi kalau salah, biayanya sangat mahal — dan hasilnya susah diverifikasi cepat, karena butuh keahlian finansial mendalam buat tahu benar-salahnya, bukan sekadar dibaca sekilas. Ini BUKAN kandidat bagus untuk kasus pakai pertama — persis jebakan kedua yang baru saja dibahas.',
      'Bedanya dua contoh ini dari empat sebelumnya bukan soal AI-nya nggak bisa dipakai di situ sama sekali — tapi soal urutan. Ini bukan tempat yang aman buat mulai, karena kalau salah di percobaan pertama, kepercayaan tim ke AI langsung anjlok, dan biayanya beneran mahal.',
    ],
  },
  {
    id: 'c3-card-13',
    type: 'sort-list',
    question:
      'Urutkan lima kasus pakai berikut dari yang paling kuat sampai paling lemah sebagai kandidat kasus pakai AI pertama:',
    items: [
      'Draft balasan customer service',
      'Ringkasan laporan mingguan',
      'Draft konten marketing',
      'Riset kompetitor awal',
      'Keputusan finansial besar',
    ],
    correctAnswer: [
      'Ringkasan laporan mingguan',
      'Draft balasan customer service',
      'Draft konten marketing',
      'Riset kompetitor awal',
      'Keputusan finansial besar',
    ],
    successFeedback:
      'Tepat. Ringkasan laporan mingguan paling kuat karena verifikasinya paling objektif — tinggal dicocokkan ke data asli. Draft balasan CS dan konten marketing masih kuat tapi verifikasinya sedikit lebih bergantung pada penilaian orang yang paham konteksnya. Riset kompetitor butuh verifikasi ekstra, dan keputusan finansial besar paling lemah — high-stakes dan susah dicek cepat.',
    errorFeedback:
      'Belum tepat. Urutan paling kuat ke paling lemah: ringkasan laporan mingguan (verifikasi paling objektif, tinggal dicocokkan ke data asli), draft balasan CS, draft konten marketing, riset kompetitor awal (butuh verifikasi ekstra), lalu keputusan finansial besar (high-stakes, paling susah diverifikasi cepat).',
  },
  {
    id: 'c3-card-14',
    type: 'multiple-choice',
    question:
      'Kenapa "keputusan finansial besar" bukan kandidat bagus untuk kasus pakai AI pertama, padahal itu kelihatan seperti hal paling penting di bisnis?',
    options: [
      'Karena keputusan finansial besar jarang terjadi, sehingga tidak sepadan diberi perhatian sama sekali',
      'Karena high-stakes dan susah diverifikasi cepat — kalau AI-nya salah, biayanya mahal, dan itu bukan tempat aman untuk membangun kepercayaan tim pertama kali terhadap AI',
      'Karena AI secara teknis tidak mampu membantu urusan finansial',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Bukan soal jarang terjadi atau AI-nya nggak mampu — masalahnya di kombinasi high-stakes dan susah diverifikasi cepat. Kasus pakai pertama harus murah untuk dicoba dan murah untuk salah, biar kepercayaan tim ke AI dibangun dari kemenangan kecil dulu, bukan dipertaruhkan di keputusan paling berisiko.',
    errorFeedback:
      'Belum tepat. Alasannya karena keputusan finansial besar itu high-stakes dan susah diverifikasi cepat — kalau salah, biayanya mahal, dan itu bukan tempat aman buat mulai membangun kepercayaan tim terhadap AI.',
  },
  {
    id: 'c3-card-15',
    type: 'info',
    icon: PenLine,
    eyebrow: 'Giliran Anda',
    title: 'Sekarang Kasus Pakai Nyata dari Bisnis Anda Sendiri',
    body: [
      'Enam contoh tadi cuma buat menunjukkan cara kerja filternya. Yang beneran berguna adalah kasus pakai nyata dari operasi bisnis Anda sendiri — bukan contoh hipotetis.',
      'Pikirkan 2-3 pekerjaan berulang yang benar-benar terjadi di bisnis Anda hari ini. Bisa dari tim manapun — customer service, admin, marketing, operasional. Lalu nilai masing-masing terhadap tiga pertanyaan filter tadi: seberapa sering, seberapa mahal manual, seberapa mudah dicek.',
      'Di kartu berikutnya, tuliskan itu. Ini yang jadi bahan Bab 4 dan seterusnya — bukan latihan abstrak, tapi kandidat nyata yang akan Anda bawa sampai ke Bab 7.',
    ],
  },
  {
    id: 'c3-card-16',
    type: 'reflection',
    eyebrow: 'Entri Ketiga · Buku Kerja AI Adoption',
    prompt:
      'Tuliskan 2-3 kasus pakai nyata dari bisnis Anda sendiri, nilai masing-masing terhadap tiga pertanyaan filter, dan tentukan mana yang paling kuat.',
    fields: [
      {
        id: 'candidate-use-cases',
        label: '2-3 kasus pakai nyata apa yang ada di bisnis Anda?',
        placeholder:
          'Misalnya: draft balasan email pelanggan, ringkasan laporan penjualan mingguan, draft SOP onboarding karyawan baru...',
      },
      {
        id: 'filter-scores',
        label:
          'Bagaimana masing-masing menilai terhadap tiga pertanyaan: seberapa sering, seberapa mahal manual, seberapa mudah dicek?',
        placeholder:
          'Misalnya: draft balasan email — harian, lumayan makan waktu, gampang dicek oleh siapa saja yang paham produk...',
      },
      {
        id: 'strongest-candidate',
        label: 'Dari semua itu, mana yang paling kuat jadi kasus pakai pertama Anda?',
        placeholder:
          'Misalnya: ringkasan laporan penjualan mingguan, karena paling sering dan paling gampang dicek terhadap data asli',
      },
    ],
  },
  {
    id: 'c3-card-17',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 4',
    title: 'Kandidat Kasus Pakai Pertama Anda Sudah Ada',
    body: [
      'Anda baru saja menuliskan 2-3 kasus pakai nyata dan menilainya lewat filter tiga pertanyaan — dan menandai mana yang paling kuat. Itu bukan latihan abstrak lagi. Itu kandidat nyata yang akan jadi jangkar buat Bab 5-7.',
      'Sekarang Anda sudah punya kandidat kasus pakai pertama. Sebelum kita rancang alur kerjanya, ada satu hal yang harus beres dulu: data apa yang boleh masuk ke AI, dan bagaimana caranya tim Anda nggak takut sama alat ini.',
    ],
  },
]
