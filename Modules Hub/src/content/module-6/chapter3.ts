import {
  Users,
  Link,
  Target,
  Clock,
  MessageSquare,
  BookOpen,
  ArrowRight,
  Layers,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter3Cards: Card[] = [
  {
    id: 'c3-card-1',
    type: 'info',
    icon: Layers,
    eyebrow: 'Bab 3 · Penetapan Tujuan',
    title: 'Peta Sudah Ada — Sekarang Kita Isi Tahap 1 dengan Benar',
    body: [
      'Di Bab 2, Anda sudah punya peta lengkapnya: tiga tahap yang harus berputar terus — penetapan tujuan, coaching rutin, tindakan korektif. Anda juga sudah nilai di mana tahap yang paling bolong di bisnis Anda.',
      'Bab ini fokus ke Tahap 1: penetapan tujuan. Bukan soal apakah Anda perlu menetapkan tujuan — itu sudah jelas. Tapi soal bagaimana cara menetapkannya supaya tujuan itu benar-benar dimiliki karyawan, bukan cuma diketok dari atas dan ditempel di kertas.',
      'Ada empat prinsip yang membedakan tujuan yang beneran jalan dari tujuan yang cuma ada di dokumen — dan satu teknik percakapan yang bisa Anda pakai berulang setiap siklus.',
    ],
  },
  {
    id: 'c3-card-2',
    type: 'info',
    icon: Users,
    eyebrow: 'Prinsip #1',
    title: 'Kolaboratif — Bukan Didikte dari Atas Lalu Ditandatangani',
    body: [
      'Tujuan yang cuma diketok manajer lalu disodorkan ke karyawan punya satu masalah besar: karyawannya ngangguk di ruangan, tapi begitu keluar pintu, tujuan itu bukan milik dia.',
      'Kalau karyawan tidak merasa ikut membangun tujuannya, mereka tidak punya alasan untuk berjuang mencapainya. Mereka akan mencoba — tapi bukan dengan rasa kepemilikan. Dan pas ada hambatan, yang pertama meragukan tujuannya adalah mereka sendiri: "Ini kan target yang CEO mau, bukan yang saya sepakati."',
      'Kolaboratif bukan berarti tujuannya terserah karyawan. Artinya: manajer bawa konteks dan arah, karyawan ikut terlibat menentukan bagaimana kontribusi spesifiknya — dan hasilnya disepakati bersama, bukan ditetapkan sepihak.',
    ],
  },
  {
    id: 'c3-card-3',
    type: 'yes-no',
    question:
      'Terakhir kali Anda menetapkan tujuan kinerja untuk salah satu anggota tim — apakah tujuan itu disepakati bersama, atau Anda yang menentukan lalu memberitahukannya?',
    yesLabel: 'Disepakati bersama — ada diskusi, bukan cuma pemberitahuan',
    noLabel: 'Saya yang menentukan dan memberitahukannya — tanpa diskusi yang bermakna',
    feedbackYes:
      'Bagus. Tapi perhatikan: "ada diskusi" tidak otomatis berarti kolaboratif — kalau diskusinya hanya formalitas dan tujuannya sudah final sebelum percakapan dimulai, karyawan akan merasakannya. Kartu-kartu berikutnya kasih Anda teknik yang membuat keterlibatan itu nyata.',
    feedbackNo:
      'Jujur. Dan ini sangat umum — terutama kalau baru punya tim atau baru sadar bahwa "memberitahukan" dan "menetapkan bersama" itu dua hal yang berbeda. Ini yang akan dibenahi di bab ini.',
  },
  {
    id: 'c3-card-4',
    type: 'info',
    icon: Link,
    eyebrow: 'Prinsip #2',
    title: 'Diturunkan Jelas dari Tujuan yang Lebih Besar — Bukan Tujuan yang Berdiri Sendiri',
    body: [
      'Tujuan individu yang tidak terlihat nyambung ke tujuan tim atau bisnis menghasilkan pertanyaan yang tidak pernah dijawab: "Kenapa ini penting?" — dan kalau karyawan tidak tahu jawaban itu, tujuan itu terasa seperti pekerjaan tambahan, bukan kontribusi yang berarti.',
      'Diturunkan (cascading) artinya: tujuan bisnis → tujuan tim/departemen → tujuan individu. Setiap orang tahu targetnya sendiri, dan tahu bagaimana target itu menyambung ke gambaran yang lebih besar. Kalau Anda sudah ikut Modul 2, ini nyambung langsung ke KPI yang sudah dibangun — tujuan individu adalah cara KPI itu tercapai di level orang per orang.',
      'Tanpa cascading yang jelas, karyawan bisa kerja keras tapi tidak selalu ke arah yang sama. Bisnis tidak maju meski semua orang kelihatan sibuk.',
    ],
  },
  {
    id: 'c3-card-5',
    type: 'info',
    icon: Target,
    eyebrow: 'Prinsip #3',
    title: '"Tingkatkan Kualitas Layanan" Itu Bukan Tujuan — Itu Harapan',
    body: [
      'Tujuan yang tidak spesifik dan tidak terukur tidak bisa dicek objektif tercapai atau belum. Itu bukan tujuan — itu aspirasi. Dan aspirasi tidak bisa jadi dasar penilaian kinerja yang adil.',
      'Tujuan yang benar punya setidaknya salah satu dari tiga elemen ini: angka yang bisa diukur ("rata-rata rating kepuasan pelanggan minimal 4.2 dari 5"), standar yang bisa dikonfirmasi ("semua keluhan diselesaikan dalam 24 jam"), atau tenggat yang jelas ("selesai sebelum akhir kuartal").',
      'Kalau tujuannya masih bisa dijawab dengan "ya sudah, saya sudah coba" tanpa ada cara mengecek apakah itu cukup atau tidak — itu tanda tujuannya perlu dipertajam.',
    ],
  },
  {
    id: 'c3-card-6',
    type: 'multiple-choice',
    question:
      'Mana dari pernyataan berikut yang merupakan tujuan kinerja yang spesifik dan terukur — bukan sekadar aspirasi kosong?',
    options: [
      '"Lebih proaktif dalam melayani pelanggan dan tingkatkan kepuasan tim secara keseluruhan"',
      '"Selesaikan semua tiket keluhan pelanggan dalam waktu maksimal 24 jam kerja, dengan rating kepuasan rata-rata minimal 4.0 dari 5, diukur setiap akhir bulan"',
      '"Berkontribusi lebih baik ke pertumbuhan bisnis melalui pelayanan pelanggan yang konsisten"',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Opsi kedua punya tenggat yang jelas (24 jam), standar yang bisa dicek (rating 4.0 dari 5), dan frekuensi pengukuran yang konkret (akhir bulan). Dua opsi lainnya terdengar bagus tapi tidak bisa dievaluasi secara objektif — tidak ada angka, tidak ada standar, tidak ada cara memverifikasinya.',
    errorFeedback:
      'Belum tepat. Cari yang punya angka, standar, atau tenggat yang bisa dicek secara objektif. "Proaktif" dan "berkontribusi lebih baik" terdengar positif tapi tidak bisa dievaluasi — tidak ada cara membuktikan tujuan itu tercapai atau tidak. Yang benar adalah opsi kedua.',
  },
  {
    id: 'c3-card-7',
    type: 'sort-list',
    question:
      'Urutkan pernyataan berikut: taruh TUJUAN SPESIFIK yang bisa diukur di atas, dan ASPIRASI KOSONG yang tidak bisa dievaluasi di bawah.',
    items: [
      'Jadi karyawan yang lebih efisien dan responsif dalam bekerja',
      'Selesaikan minimal 90% task mingguan sebelum deadline, dilaporkan setiap Jumat',
      'Tunjukkan inisiatif lebih banyak dalam pekerjaan',
      'Kurangi waktu tunggu pelanggan di counter dari rata-rata 12 menit jadi di bawah 7 menit sebelum akhir kuartal',
    ],
    correctAnswer: [
      'Selesaikan minimal 90% task mingguan sebelum deadline, dilaporkan setiap Jumat',
      'Kurangi waktu tunggu pelanggan di counter dari rata-rata 12 menit jadi di bawah 7 menit sebelum akhir kuartal',
      'Jadi karyawan yang lebih efisien dan responsif dalam bekerja',
      'Tunjukkan inisiatif lebih banyak dalam pekerjaan',
    ],
    successFeedback:
      'Tepat. Dua yang spesifik punya angka dan tenggat yang bisa dicek: "90% sebelum deadline" dan "di bawah 7 menit sebelum akhir kuartal." Dua yang aspirasi tidak punya tolak ukur — "efisien dan responsif" serta "inisiatif lebih banyak" bisa diartikan apa saja dan tidak bisa dievaluasi secara objektif.',
    errorFeedback:
      'Belum tepat. Tujuan yang spesifik punya angka atau tenggat yang bisa dicek objektif: "90% sebelum deadline" dan "di bawah 7 menit sebelum akhir kuartal." Dua lainnya masih aspirasi — tidak ada tolak ukur yang jelas, jadi tidak bisa dievaluasi.',
  },
  {
    id: 'c3-card-8',
    type: 'info',
    icon: Clock,
    eyebrow: 'Prinsip #4',
    title: 'Ditetapkan di Awal Siklus — Bukan Menyusul di Tengah atau Baru Dibahas Pas Review',
    body: [
      'Kalau tujuan kinerja baru dibahas di tengah periode — atau yang lebih parah, baru diketahui karyawan pas sesi review tahunan — itu bukan penetapan tujuan. Itu penilaian retroaktif, dan itu tidak adil.',
      'Karyawan tidak bisa bergerak ke arah yang benar kalau mereka tidak tahu arahnya dari awal. Mereka tidak bisa minta dukungan yang tepat. Dan ketika hasilnya tidak sesuai harapan, tidak ada dasar yang sah untuk membahasnya — karena standarnya tidak pernah dikomunikasikan di awal.',
      '"Di awal" bukan berarti hari pertama kerja. Artinya: sebelum periode dimulai, atau paling lambat di minggu pertama periode — bukan bulan keempat, bukan setelah ada masalah, bukan baru dibahas pas review.',
    ],
  },
  {
    id: 'c3-card-9',
    type: 'info',
    icon: MessageSquare,
    eyebrow: 'Teknik Praktis',
    title: 'Percakapan Cascading Tiga Langkah — Cara Turunkan Tujuan Tim Jadi Tujuan Individu Bareng-Bareng',
    body: [
      'Menetapkan tujuan yang kolaboratif dan diturunkan jelas bukan sihir — ada teknik percakapannya yang bisa diulang setiap siklus dengan peran apa pun.',
      'Langkah 1: Jelaskan tujuan tim dan kenapa itu penting. Bukan cuma "targetnya ini," tapi juga konteksnya — kenapa target ini jadi prioritas periode ini, apa yang dipertaruhkan kalau tidak tercapai. Karyawan perlu tahu gambaran besarnya sebelum bisa berkontribusi ke dalamnya.',
      'Langkah 2: Tanya bagaimana peran spesifik orang itu bisa berkontribusi ke tujuan tim. Pertanyaan terbuka, bukan sugestif — "Menurut kamu, dari posisi kamu sebagai [nama peran], bagian mana yang paling bisa kamu gerakkan?" Ini yang mengaktifkan rasa kepemilikan.',
      'Langkah 3: Sepakati bareng target yang terukur dan masuk akal untuk peran itu. Bukan karyawan yang menentukan sendiri, bukan manajer yang memutuskan sendiri — ini negosiasi yang menghasilkan kesepakatan yang bisa dijadikan acuan sepanjang periode.',
    ],
  },
  {
    id: 'c3-card-10',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Nyata',
    title: 'Dari "Tingkatkan Kepuasan Pelanggan" ke Tujuan Individu yang Bisa Dipegang',
    body: [
      'Tujuan tim: "Tingkatkan kepuasan pelanggan" — terdengar jelas, tapi ini vague. Tidak bisa langsung dipakai sebagai tujuan individu.',
      'Peran A — Customer Service Officer: Setelah percakapan cascading tiga langkah, tujuannya jadi: "Pertahankan rata-rata rating kepuasan pelanggan di WhatsApp minimal 4.2 dari 5, diukur dari survei otomatis setiap akhir bulan." Ada standar, ada cara ukur, ada tenggat.',
      'Peran B — Koordinator Keluhan: Tujuannya jadi: "Selesaikan 95% keluhan yang masuk dalam 24 jam kerja pertama, diverifikasi dari sistem tiket setiap dua minggu. Keluhan yang butuh eskalasi wajib terdokumentasi alasannya." Spesifik untuk perannya, terukur, ada cara verifikasinya.',
      'Dua peran berbeda, satu tujuan tim — tapi tujuan individunya berbeda karena kontribusinya memang berbeda. Inilah cascading yang benar: satu arah, banyak cara berkontribusi.',
    ],
  },
  {
    id: 'c3-card-11',
    type: 'sort-list',
    question: 'Urutkan tiga langkah percakapan cascading dari yang pertama dilakukan:',
    items: [
      'Sepakati bareng target yang terukur dan masuk akal untuk peran itu',
      'Tanya bagaimana peran spesifik orang itu bisa berkontribusi ke tujuan tim',
      'Jelaskan tujuan tim dan kenapa itu penting',
    ],
    correctAnswer: [
      'Jelaskan tujuan tim dan kenapa itu penting',
      'Tanya bagaimana peran spesifik orang itu bisa berkontribusi ke tujuan tim',
      'Sepakati bareng target yang terukur dan masuk akal untuk peran itu',
    ],
    successFeedback:
      'Tepat. Konteks dulu — baru karyawan bisa terlibat secara bermakna. Pertanyaan terbuka dulu — baru ada bahan untuk negosiasi. Kesepakatan di akhir — bukan di awal. Urutan ini yang membuat percakapannya beneran kolaboratif, bukan formalitas.',
    errorFeedback:
      'Belum tepat. Urutannya: jelaskan tujuan tim dulu (konteks), baru tanya kontribusi spesifik peran itu (keterlibatan), baru sepakati target bareng (kesepakatan). Kalau dimulai dari target langsung tanpa konteks, karyawan menerima — tapi tidak memiliki.',
  },
  {
    id: 'c3-card-12',
    type: 'reflection',
    eyebrow: 'Entri Ketiga · Buku Kerja PMS Anda',
    prompt:
      'Sekarang giliran Anda. Draft satu tujuan kinerja yang kolaboratif dan diturunkan jelas untuk satu anggota tim yang spesifik.',
    fields: [
      {
        id: 'cascading-context',
        label: 'Siapa orangnya, dan tujuan tim atau bisnis apa yang mau diturunkan ke perannya?',
        placeholder:
          'Misalnya: supervisor customer service — tujuan tim: tingkatkan retention pelanggan kuartal ini dari 68% jadi 75%...',
      },
      {
        id: 'specific-goal',
        label: 'Tujuan spesifik dan terukur apa yang Anda sepakati bareng buat orang itu?',
        placeholder:
          'Misalnya: follow up semua pelanggan yang tidak beli ulang dalam 30 hari — target 20 percakapan per bulan dengan minimal 3 konversi, diukur dari data CRM setiap akhir bulan...',
      },
    ],
  },
  {
    id: 'c3-card-13',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 3',
    title: 'Tujuannya Sekarang Jelas — Tapi Tujuan yang Jelas Doang Nggak Cukup',
    body: [
      'Anda sekarang punya empat prinsip dan satu teknik percakapan untuk menetapkan tujuan yang benar-benar kolaboratif, diturunkan jelas, spesifik dan terukur, dan ditetapkan di awal siklus.',
      'Tapi tujuan yang jelas doang nggak cukup kalau nggak pernah dibahas lagi sampai setahun kemudian. Setelah tujuan ditetapkan, tugas berikutnya adalah memastikan orang tetap bergerak ke arah yang benar — dan itu butuh ritme yang rutin, bukan hanya satu percakapan di awal.',
      'Bab 4 masuk ke cara bangun ritme coaching yang beneran rutin — bukan jadwal yang ada di kalender tapi selalu ditunda, tapi sesi yang ringan, konsisten, dan berdampak.',
    ],
  },
]
