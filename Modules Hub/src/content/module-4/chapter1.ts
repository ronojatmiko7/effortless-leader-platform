import {
  Network,
  ArrowLeftRight,
  Users,
  LayoutDashboard,
  FileQuestion,
  Compass,
  NotebookPen,
  BookMarked,
  Map,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter1Cards: Card[] = [
  {
    id: 'c1-card-1',
    type: 'info',
    icon: Network,
    eyebrow: 'Bab 1 · Jebakan Proses Bersilo',
    title: 'KPI Sudah Jelas, Rapat Sudah Rutin — Kok Masih Berantakan?',
    body: [
      'Tim sales janji promo khusus ke pelanggan besar. Masalahnya, tim produksi nggak pernah dikasih tahu — barangnya nggak siap, pelanggan komplain, dan sales cuma bisa bilang "lho, saya kira udah dikoordinasikan."',
      'PO yang cuma butuh satu tanda tangan malah nyangkut berhari-hari, muter dari meja ke meja, karena harus disetujui tiga orang yang nggak ada yang jelas kenapa perlu tiga-tiganya.',
      'Komplain pelanggan yang ditangani CS berhenti di CS — nggak pernah nyampe ke tim yang sebenarnya bisa benerin akar masalahnya. Bulan depan, komplain yang sama muncul lagi.',
    ],
  },
  {
    id: 'c1-card-2',
    type: 'yes-no',
    question:
      'Coba jujur: kalau ada yang macet di tengah alur kerja bisnis Anda, jelas nggak siapa yang harus turun tangan benerin — atau biasanya malah saling lempar dan bilang "itu bukan bagian saya"?',
    yesLabel: 'Jelas, ada yang tanggung jawab',
    noLabel: 'Sering saling lempar tanggung jawab',
    feedbackYes:
      'Bagus — itu modal penting. Tapi baca terus, karena kejelasan tanggung jawab di satu titik belum tentu ada di semua titik serah terima.',
    feedbackNo:
      'Ini gejala yang mau kita bongkar di bab ini. Saling lempar tanggung jawab itu bukan soal orangnya — itu tanda proses lintas timnya nggak pernah dirancang dengan sengaja.',
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: ArrowLeftRight,
    eyebrow: 'Akar Masalahnya',
    title: 'Masalahnya Bukan di DALAM Tim — Tapi di ANTARA Tim',
    body: [
      'Ketiga contoh tadi punya benang merah yang sama. Bukan tim sales yang buruk, bukan tim produksi yang lambat, bukan CS yang cuek. Masalahnya hidup di celah di ANTARA tim-tim itu — di titik di mana pekerjaan atau informasi berpindah tangan.',
      'Titik serah terima ini biasanya nggak ada di deskripsi kerja siapa pun. Tiap tim sibuk mengurus kerjaannya sendiri, dan nggak ada yang secara eksplisit ditugaskan menjaga sambungan antar tim tetap lancar.',
      'Itulah yang bikin masalah-masalah ini kelihatan random dan berulang — padahal sebenarnya sangat bisa diprediksi begitu Anda tahu di mana harus mencarinya.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'multiple-choice',
    question:
      'Kalau begitu, di mana biasanya masalah proses yang paling mahal itu benar-benar bersembunyi?',
    options: [
      'Di dalam satu departemen, karena orangnya kurang terampil',
      'Di titik serah terima antar departemen, yang nggak ada pemiliknya',
      'Di mana saja secara acak, tergantung nasib',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Titik serah terima antar departemen itu wilayah abu-abu — dan wilayah abu-abu tanpa pemilik selalu jadi tempat masalah numpuk.',
    errorFeedback:
      'Coba lagi. Bukan soal kompetensi tim atau nasib — masalah paling mahal biasanya ada di celah antar departemen, tempat nggak ada yang merasa itu tanggung jawabnya.',
  },
  {
    id: 'c1-card-5',
    type: 'info',
    icon: Users,
    eyebrow: 'Istilahnya',
    title: 'Silo Fungsional: Tiap Tim Optimal Buat Dirinya Sendiri',
    body: [
      'Istilah untuk pola ini: silo fungsional. Tiap departemen punya target sendiri, cara kerja sendiri, dan ukuran suksesnya sendiri — sales dinilai dari closing, produksi dinilai dari output, keuangan dinilai dari akurasi laporan.',
      'Masing-masing bisa saja unggul di ukurannya sendiri. Tapi kalau nggak ada yang secara sengaja merancang bagaimana pekerjaan mengalir DARI satu tim KE tim lain, tiap tim jadi pulau sendiri-sendiri — dan pelanggan yang harus menanggung akibat sambungan antar pulau itu berantakan.',
      'Ini bukan soal orang-orangnya jahat atau males. Ini soal nggak ada yang pernah duduk dan merancang alur lintas timnya secara sengaja.',
    ],
  },
  {
    id: 'c1-card-6',
    type: 'fill-in-the-blank',
    sentence:
      'Silo fungsional muncul bukan karena orangnya buruk, tapi karena nggak ada yang secara sengaja merancang bagaimana pekerjaan mengalir di titik ________ antar tim.',
    options: ['serah terima', 'gaji', 'istirahat', 'rekrutmen'],
    correctAnswer: 'serah terima',
    successFeedback:
      'Tepat. Titik serah terima antar tim itu yang paling sering dilupakan — padahal di situlah biasanya masalah lahir.',
    errorFeedback:
      'Bukan itu. Yang paling sering dilupakan dan jadi sumber masalah adalah titik serah terima antar tim.',
  },
  {
    id: 'c1-card-7',
    type: 'info',
    icon: LayoutDashboard,
    eyebrow: 'Kalau Anda Sudah Ikut Modul 2 dan 3',
    title: 'KPI Bagus + Ritme Tinjauan Disiplin — Tapi Kok Masalahnya Balik Lagi?',
    body: [
      'Kalau Anda sudah ikut Modul 2 dan 3: KPI Anda sudah jelas dan di-cascade sampai ke staf (Modul 2), dan Anda sudah punya ritme tinjauan yang disiplin — huddle harian sampai tinjauan triwulanan (Modul 3). Itu fondasi penting.',
      'Tapi coba perhatikan: kalau di tinjauan bulan ini Anda nemuin masalah yang MIRIP dengan masalah bulan lalu — komplain yang sama, keterlambatan yang sama — itu tanda ritme tinjauannya jalan, tapi akar masalahnya nggak pernah beneran dibenahi.',
      'Kenapa? Karena akarnya bukan di angka KPI-nya. Akarnya di cara kerja lintas tim yang nggak pernah didesain dengan sengaja — dan nggak ada jumlah rapat tinjauan yang bisa memperbaiki proses yang memang belum pernah dirancang.',
    ],
  },
  {
    id: 'c1-card-8',
    type: 'yes-no',
    question:
      'Jujur ke diri sendiri: di rapat tinjauan bisnis Anda (kalau sudah ada), apakah sering muncul masalah yang MIRIP dengan yang sudah pernah dibahas sebelumnya?',
    yesLabel: 'Ya, sering muncul lagi masalah yang mirip',
    noLabel: 'Jarang — begitu dibenahi, biasanya selesai',
    feedbackYes:
      'Ini gejala klasik proses bersilo — ritme tinjauannya jalan, tapi yang ditinjau selalu gejalanya, bukan akar prosesnya. Itu yang bab-bab berikutnya akan bereskan.',
    feedbackNo:
      'Bagus, itu tanda proses Anda relatif sehat. Tapi bab ini tetap berguna untuk memetakan proses secara eksplisit, biar kesehatan itu bukan kebetulan.',
  },
  {
    id: 'c1-card-9',
    type: 'info',
    icon: FileQuestion,
    eyebrow: 'Beda yang Sering Kelewat',
    title: 'Proses yang Terdokumentasi ≠ Proses yang Cuma Ada di Kepala Orang',
    body: [
      'Banyak CEO ngerasa bisnisnya "udah punya SOP" — padahal yang sebenarnya terjadi, caranya cuma diwariskan dari mulut ke mulut: "tanya aja ke Mbak Dinda, dia yang paling ngerti alurnya."',
      'Selama caranya cuma hidup di kepala satu-dua orang, proses itu rapuh. Orang itu cuti, resign, atau lupa detail — dan alurnya langsung goyah, karena nggak ada yang lain benar-benar tahu persis urutannya.',
      'Proses yang sehat itu proses yang digambar dan disepakati lintas fungsi — bisa dilihat, bisa didiskusikan, dan nggak bergantung ke ingatan satu orang.',
    ],
  },
  {
    id: 'c1-card-10',
    type: 'multiple-choice',
    question:
      'Tim Anda bilang "nggak masalah, semua orang udah tahu caranya kok." Apa risiko terbesar dari situasi ini?',
    options: [
      'Tidak ada risiko, justru itu tanda tim yang solid',
      'Prosesnya rapuh — bergantung ke ingatan orang tertentu, goyah kalau orang itu nggak ada',
      'Risikonya cuma soal estetika dokumentasi, bukan soal operasional',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. "Semua orang udah tahu" itu ilusi stabilitas — begitu satu orang kunci nggak ada, seluruh alur bisa berantakan karena nggak pernah benar-benar ditulis.',
    errorFeedback:
      'Coba lagi. Risikonya nyata dan operasional: proses yang cuma hidup di kepala orang itu rapuh, dan goyah begitu orang itu cuti, resign, atau lupa detail.',
  },
  {
    id: 'c1-card-11',
    type: 'info',
    icon: Compass,
    eyebrow: 'Tes Sederhana',
    title: 'Coba Tes Ini: Ikuti Satu Pekerjaan dari Awal sampai Selesai',
    body: [
      'Ada cara gampang mengecek separah apa silo di bisnis Anda: pilih satu pekerjaan (misalnya satu pesanan pelanggan), lalu ikuti perjalanannya dari awal masuk sampai selesai — lintas semua tim yang menyentuhnya.',
      'Di tiap titik perpindahan, tanya: siapa yang kasih pekerjaan ini ke saya, dan ke siapa saya kasih setelah selesai? Kalau jawabannya jelas dan cepat di semua titik, bagus. Kalau ada titik yang jawabannya "hmm, biasanya sih..." — itu titik silo Anda.',
      'Bab-bab berikutnya akan kasih Anda peta dan alat buat menjalankan tes ini secara sistematis, bukan cuma sekali coba-coba.',
    ],
  },
  {
    id: 'c1-card-12',
    type: 'info',
    icon: Map,
    eyebrow: 'Jalan Keluarnya',
    title: 'Arsitektur Proses 4 Tingkat — Peta yang Akan Membenahi Ini',
    body: [
      'Jalan keluarnya bukan rapat lebih banyak atau KPI lebih rumit. Jalan keluarnya adalah memetakan proses bisnis Anda secara eksplisit, dari gambaran besar sampai detail teknis paling kecil — sistem yang dikenal sebagai arsitektur proses 4 tingkat.',
      'Dengan peta ini, titik-titik silo nggak lagi tersembunyi. Anda bisa lihat persis di mana pekerjaan berpindah tangan, siapa yang seharusnya bertanggung jawab, dan di level mana masalahnya perlu dibenahi.',
    ],
  },
  {
    id: 'c1-card-13',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Jujur ke Diri Sendiri',
    title: 'Giliran Anda: Ceritakan Satu Serah Terima yang Berantakan',
    body: [
      'Sebelum lanjut, coba mundur sebentar dan inget-inget.',
      'Pikirkan satu momen belakangan ini di mana barang, informasi, atau tanggung jawab macet atau hilang di tengah jalan — antara dua tim atau dua orang yang seharusnya saling menyambung.',
      'Ini nggak perlu masalah yang paling besar sepanjang sejarah bisnis Anda. Cukup satu yang masih kerasa jelas di ingatan.',
    ],
  },
  {
    id: 'c1-card-14',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja Proses Anda',
    prompt:
      'Ceritakan satu momen serah terima antar tim/departemen yang belakangan berantakan — barang, informasi, atau tanggung jawab yang macet atau hilang di tengah jalan.',
    fields: [
      {
        id: 'handoff-incident',
        label: 'Apa yang terjadi, dan tim/orang mana saja yang terlibat?',
        placeholder: 'Contoh: Promo yang dijanjikan sales ke pelanggan besar, tapi produksi nggak pernah tahu',
      },
      {
        id: 'handoff-impact',
        label: 'Apa akibatnya — dan siapa yang akhirnya menanggung?',
        placeholder: 'Contoh: Pelanggan komplain, sales yang kena marah padahal bukan salahnya sendirian',
      },
    ],
  },
  {
    id: 'c1-card-15',
    type: 'info',
    icon: BookMarked,
    eyebrow: 'Catatan Tersimpan',
    title: 'Ini Bukan Soal Nyari Siapa yang Salah',
    body: [
      'Cerita yang baru Anda tulis itu bukan bahan buat nyalahin siapa pun. Hampir semua bisnis yang tumbuh cepat punya cerita serupa — karena proses lintas timnya nggak pernah sempat dirancang dengan sengaja, dari dulu cuma "jalan aja dulu."',
      'Bedanya bisnis yang akhirnya rapi: mereka berhenti menganggap ini nasib, dan mulai memetakan proses mereka secara eksplisit — biar titik-titik silo kelihatan, bukan cuma kerasa.',
      'Jawaban Anda tadi baru saja jadi entri pertama di buku kerja proses Anda sendiri. Nanti kita isi terus sampai jadi rancangan proses yang lengkap.',
    ],
  },
  {
    id: 'c1-card-16',
    type: 'info',
    icon: Network,
    eyebrow: 'Selesai Bab 1',
    title: 'Sekarang Anda Tahu di Mana Harus Mencari',
    body: [
      'Anda sekarang tahu: masalah proses paling mahal itu jarang ada di dalam satu tim — hampir selalu ada di titik serah terima antar tim yang nggak ada pemiliknya.',
      'Sekarang Anda ngerasain sendiri di mana bocornya. Bab berikutnya kasih Anda peta lengkap arsitektur proses 4 tingkat, biar Anda tahu persis di level mana masalah itu perlu dibenahi.',
    ],
  },
]
