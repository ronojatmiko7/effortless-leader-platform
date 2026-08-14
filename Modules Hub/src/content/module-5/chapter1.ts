import {
  FileText,
  AlertCircle,
  Clock,
  Layers,
  BookOpen,
  Eye,
  UserCheck,
  BarChart2,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter1Cards: Card[] = [
  {
    id: 'c1-card-1',
    type: 'info',
    icon: FileText,
    eyebrow: 'Bab 1 · Jebakan Dokumen Berdebu',
    title: 'SOP Sudah Dicetak, Sudah Ditempel — Tapi Operatornya Tetap Kerja Pakai Cara Sendiri',
    body: [
      'Di lantai produksi, SOP-nya sudah dicetak rapi, sudah dilaminating, sudah ditempel di dinding tepat di samping mesin. Siapapun yang lewat bisa baca.',
      'Tapi kalau Anda perhatikan cara kerja operatornya, mereka pakai urutan yang "udah biasa" — bukan urutan yang ada di kertas. Kalau ditanya kenapa, jawabannya hampir selalu sama: "Nggak tau, dari dulu emang gitu. Yang di kertas itu kayaknya versi lama."',
      'SOP-nya ada. Bahkan ditempel di tempat yang paling strategis. Tapi nggak ada yang pakai.',
    ],
  },
  {
    id: 'c1-card-2',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Pola yang Sama, Tempat Berbeda',
    title: 'SOP Onboarding Ada di Google Drive — Staf Baru Belajarnya dari Nanya Senior',
    body: [
      'SOP onboarding karyawan baru ada di folder Google Drive yang rapi, nama filenya jelas. Tapi karyawan baru nggak pernah dikasih tahu folder itu ada — atau dikasih tahu, tapi linknya mati atau nggak bisa dibuka.',
      'Cara belajar yang paling efektif akhirnya adalah nanya langsung ke senior yang paling sabar dan paling dikenal ramah. Ilmunya turun dari mulut ke mulut, bukan dari dokumen.',
      'Akibatnya: tiap senior ngajari dengan cara yang sedikit beda. "Standar" perusahaan yang tertulis jadi standar versi masing-masing orang — dan tiap angkatan karyawan baru belajar sesuatu yang sedikit berbeda dari yang sebelumnya.',
    ],
  },
  {
    id: 'c1-card-3',
    type: 'info',
    icon: Clock,
    eyebrow: 'Pola Ketiga',
    title: 'SOP Dibuat Rame-rame Waktu Training — Sebulan Kemudian Nggak Ada yang Inget',
    body: [
      'Proses pembuatan SOPnya sempurna: dikerjakan bareng-bareng, semua tim ikut, semua orang ngangguk setuju. Waktu sesi training, semuanya terasa jelas, konkret, dan masuk akal.',
      'Sebulan kemudian: nggak ada yang inget detailnya. Dokumennya ada di folder entah mana, nggak pernah dibuka lagi. Cara kerja sehari-hari sudah balik ke cara lama — minus ingatan soal kenapa SOP itu pernah dibuat.',
      'Yang tersisa dari seluruh proses yang makan waktu berminggu-minggu itu: satu file di Google Drive yang tanggal terakhir dibukanya sudah enam bulan lalu.',
    ],
  },
  {
    id: 'c1-card-4',
    type: 'yes-no',
    question:
      'Jujur: dari ketiga pola tadi — SOP ditempel tapi diabaikan, SOP di Drive tapi nggak pernah dibuka, atau SOP dibuat bareng tapi sebulan kemudian terlupakan — ada yang terasa familiar di bisnis Anda?',
    yesLabel: 'Ada, salah satu atau lebih terasa sangat familiar',
    noLabel: 'Nggak ada, SOP di bisnis saya benar-benar aktif dipakai',
    feedbackYes:
      'Wajar banget. Ini pola yang sangat umum, terutama di bisnis yang tumbuh cepat — bukan soal kurang disiplin, tapi soal SOPnya belum dirancang untuk benar-benar dipakai. Itulah yang modul ini akan urai.',
    feedbackNo:
      'Bagus — kalau SOP Anda benar-benar aktif dipakai, itu modal penting. Baca terus, karena bagian berikutnya akan kasih Anda cara memverifikasi itu secara lebih sistematis, bukan cuma dari keyakinan.',
  },
  {
    id: 'c1-card-5',
    type: 'info',
    icon: Layers,
    eyebrow: 'Perbedaan yang Sering Kelewat',
    title: '"SOP Ada" dan "SOP Dipakai" Itu Dua Hal yang Beda Total',
    body: [
      'Kebanyakan bisnis pernah menyelesaikan yang pertama: SOP-nya ada. Ditulis, disimpan, mungkin sudah disosialisasikan satu kali waktu launching atau training.',
      'Tapi kebanyakan bisnis belum pernah benar-benar menyelesaikan yang kedua: SOP-nya benar-benar dipakai sebagai rujukan nyata saat kerja — setiap hari, oleh semua orang yang harusnya mengikutinya.',
      'Gap antara "ada" dan "dipakai" itu bukan cuma soal kepatuhan. Gap itu artinya semua investasi waktu dan energi yang dihabiskan buat menulis SOP — sebagian besar tidak mengubah apa pun di lantai operasional.',
    ],
  },
  {
    id: 'c1-card-6',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis sudah punya SOP yang tertulis lengkap dan tersimpan rapi — tapi di lapangan, tim masih kerja dengan cara masing-masing. Apa yang sebenarnya sudah dicapai?',
    options: [
      'Sudah selesai — SOP-nya ada, tinggal soal pelaksanaan saja yang perlu diperbaiki',
      'Baru selesai setengah jalan — dokumennya ada, tapi belum tentu cara kerja berubah',
      'Sudah beres penuh — yang penting tersimpan untuk keperluan audit atau sertifikasi',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. SOP yang ada di dokumen tapi tidak diikuti artinya baru setengah selesai. Setengahnya lagi — yang lebih susah — adalah memastikan SOP itu benar-benar menjadi cara kerja sehari-hari.',
    errorFeedback:
      'Bukan. SOP yang ada tapi tidak diikuti artinya pekerjaannya belum selesai. "Ada di dokumen" tidak sama dengan "sudah mengubah cara kerja." Yang relevan adalah apakah SOP itu benar-benar jadi rujukan nyata saat kerja.',
  },
  {
    id: 'c1-card-7',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Istilahnya',
    title: '"Dokumen Berdebu": SOP yang Ditulis Sekali, Disimpan, Lalu Dilupakan',
    body: [
      '"Dokumen berdebu" adalah SOP yang lahir dari niat baik — ditulis sekali, mungkin disosialisasikan sekali — tapi setelah itu tidak pernah disentuh lagi.',
      'Isinya perlahan nggak lagi sesuai dengan cara kerja nyata di lapangan. Tapi tidak ada yang repot-repot memperbarui, karena tidak ada yang membuka dan membaca dokumen itu lagi.',
      'Yang tersisa adalah satu dokumen formal yang eksis di sistem — tapi sebenarnya tidak membentuk cara kerja siapa pun. Bisnis jalan dengan kebiasaan yang berkembang sendiri, bukan dengan standar yang pernah ditulis.',
    ],
  },
  {
    id: 'c1-card-8',
    type: 'fill-in-the-blank',
    sentence:
      'SOP yang ditulis sekali, disimpan, lalu tidak pernah disentuh lagi sampai isinya tidak sesuai dengan cara kerja nyata di lapangan — itu yang disebut "dokumen ________".',
    options: ['berdebu', 'lengkap', 'valid', 'resmi'],
    correctAnswer: 'berdebu',
    successFeedback:
      'Tepat. "Dokumen berdebu" itu SOP yang eksis di atas kertas tapi sudah tidak relevan dengan realita lapangan — dan tidak ada yang tahu karena tidak ada yang membukanya.',
    errorFeedback:
      'Bukan itu. Istilahnya adalah "dokumen berdebu" — SOP yang ditulis sekali, terus dilupakan, sampai isinya nggak lagi sesuai sama cara kerja yang sebenarnya terjadi.',
  },
  {
    id: 'c1-card-9',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Kalau Anda Sudah Ikut Modul 4',
    title: 'Punya L3 dan L4 yang Bagus — Tapi Belum Cukup',
    body: [
      'Kalau Anda sudah ikut Modul 4: Anda sekarang punya prosedur (L3) dan instruksi kerja (L4) yang terstruktur dan jelas. Itu investasi besar dan fondasi yang solid.',
      'Tapi hati-hati dengan asumsi bahwa "dokumen yang bagus otomatis dipakai." Bahkan SOP yang paling rapi sekalipun bisa jadi dokumen berdebu kalau tidak ada sistem yang memastikan orang membacanya, merujuknya, dan mengikutinya secara konsisten.',
      'Kalau belum ikut Modul 4 — tidak masalah. Bab ini jalan dengan SOP apa pun yang sudah ada di bisnis Anda, sekasar apa pun bentuknya: SOP formal, catatan informal, atau bahkan cuma kebiasaan kerja yang belum pernah ditulis sama sekali.',
    ],
  },
  {
    id: 'c1-card-10',
    type: 'info',
    icon: Eye,
    eyebrow: 'Dua Jenis SOP',
    title: 'SOP yang Benar-benar Hidup vs SOP yang Cuma Jadi Bukti Formalitas',
    body: [
      'Ada dua jenis SOP di kebanyakan bisnis. Yang pertama: SOP yang benar-benar hidup — dibaca secara aktif, dijadikan rujukan nyata saat kerja, diperbarui kalau ada yang berubah, dan membentuk cara kerja sehari-hari.',
      'Yang kedua: SOP yang cuma jadi bukti formalitas — dibutuhkan waktu audit atau sertifikasi, disimpan rapi buat ditunjukkan kalau ada yang minta, tapi tidak pernah benar-benar memengaruhi cara kerja di lantai operasional.',
      'Jenis kedua ini aman dari sisi administrasi. Tapi bisnis jalan dengan cara kerja yang tidak terstandarisasi, bergantung ke kebiasaan masing-masing orang — bukan ke SOP yang sudah susah payah ditulis.',
    ],
  },
  {
    id: 'c1-card-11',
    type: 'yes-no',
    question:
      'Kalau ada auditor minta lihat SOP Anda besok, dan setelah itu Anda juga minta tim buktikan mereka benar-benar pakai SOP itu sehari-hari — dua-duanya bisa Anda tunjukkan dengan percaya diri?',
    yesLabel: 'Ya, dua-duanya bisa saya tunjukkan',
    noLabel: 'Yang pertama oke — yang kedua belum tentu',
    feedbackYes:
      'Kalau benar-benar iya di dua-duanya, posisi Anda kuat. Baca terus — bab ini kasih Anda cara memverifikasi itu lebih objektif, bukan cuma berdasarkan keyakinan atau asumsi.',
    feedbackNo:
      'Itu jawaban yang jujur dan berguna. Kebanyakan bisnis ada di posisi ini — SOPnya eksis untuk keperluan formal, tapi belum benar-benar membentuk cara kerja sehari-hari. Itulah tepatnya yang akan kita benahi.',
  },
  {
    id: 'c1-card-12',
    type: 'info',
    icon: UserCheck,
    eyebrow: 'Tes Sederhana',
    title: 'Karyawan Baru Masuk Hari Ini — Bisakah Mereka Kerja Benar Hanya dari SOP Anda?',
    body: [
      'Ada satu pertanyaan yang bisa langsung menunjukkan apakah SOP Anda hidup atau sekadar eksis: kalau karyawan baru masuk hari ini dan disuruh baca SOP yang ada, apakah mereka bisa langsung kerja dengan benar tanpa harus banyak nanya?',
      'Atau SOP itu terlalu abstrak, sudah tidak sesuai realita, sulit ditemukan, atau tidak cukup konkret — sehingga pada akhirnya mereka tetap harus nanya ke rekan senior untuk tahu cara kerja yang "sebenarnya"?',
      'Kalau jawabannya yang kedua, SOP Anda belum berfungsi sebagai panduan kerja nyata — terlepas dari seberapa rapi formatnya di dokumen.',
    ],
  },
  {
    id: 'c1-card-13',
    type: 'multiple-choice',
    question:
      'Karyawan baru masuk dan membaca SOP — tapi mereka tetap harus banyak nanya ke senior sebelum bisa kerja dengan benar. Apa yang sebenarnya terjadi?',
    options: [
      'Karyawan barunya kurang inisiatif — SOP sudah ada, harusnya cukup',
      'SOPnya belum berfungsi sebagai panduan kerja nyata — ada gap antara dokumen dan realita lapangan',
      'Ini normal — semua karyawan baru pasti butuh masa adaptasi berapa pun bagusnya SOP',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kalau SOP ada tapi karyawan baru tetap harus banyak nanya, itu sinyal SOPnya belum berfungsi sebagai panduan kerja nyata. Gap antara dokumen dan realita lapangan itu yang perlu ditutup.',
    errorFeedback:
      'Coba lagi. Kalau karyawan harus banyak nanya meski SOP sudah ada, itu bukan soal karakter karyawan atau soal normal-tidaknya adaptasi. Itu sinyal SOPnya belum konkret atau relevan untuk jadi panduan kerja nyata.',
  },
  {
    id: 'c1-card-14',
    type: 'info',
    icon: BarChart2,
    eyebrow: 'Peta Modul Ini',
    title: 'Skala Kematangan Kepatuhan SOP: Dari "Diabaikan" Sampai "Terverifikasi Aktif"',
    body: [
      'Modul ini pakai satu skala buat mengukur di mana posisi bisnis Anda sekarang — dan ke mana harus menuju.',
      'Level 1: Diabaikan — SOP ada tapi tidak ada yang mengikutinya. Level 2: Sebagian Diikuti — diikuti oleh sebagian orang dalam sebagian kondisi, tapi nggak konsisten. Level 3: Diikuti Kalau Diawasi — SOP diikuti kalau ada yang mengecek, tapi begitu dibiarkan sendiri, kebiasaan lama balik lagi. Level 4: Terverifikasi Aktif — kepatuhan terhadap SOP diverifikasi secara rutin sebagai bagian dari ritme kerja normal.',
      'Bab 2 akan urai skala ini lebih lengkap. Yang penting sekarang: ada jarak nyata antara "SOP ada" dan "kepatuhan terverifikasi aktif" — dan jarak itu bisa diukur dan diperbaiki secara sistematis.',
    ],
  },
  {
    id: 'c1-card-15',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Jujur ke Diri Sendiri',
    title: 'Sebutkan Satu SOP yang Anda Tahu Paling Sering Didiamkan',
    body: [
      'Hampir semua bisnis punya satu — SOP yang semua orang tahu ada, tapi semua orang juga diam-diam tahu jarang diikuti. Bukan karena tidak mau, tapi karena tidak praktis, tidak mudah diakses, sudah ketinggalan zaman, atau formatnya tidak actionable.',
      'Kadang SOP itu sudah jadi semacam "open secret" di tim — semua orang tahu cara kerja nyata berbeda dari yang tertulis, tapi tidak ada yang pernah mengangkat itu secara eksplisit.',
      'Di kartu berikutnya, tuliskan SOP itu.',
    ],
  },
  {
    id: 'c1-card-16',
    type: 'reflection',
    eyebrow: 'Entri Pertama · Buku Kerja SOP Anda',
    prompt:
      'Sebutkan satu SOP (formal atau cuma kebiasaan tak tertulis) di bisnis Anda yang Anda tahu sering diabaikan atau nggak diikuti dengan benar.',
    fields: [
      {
        id: 'sop-name',
        label: 'SOP atau kebiasaan kerja mana yang dimaksud?',
        placeholder:
          'Contoh: SOP penanganan komplain pelanggan, SOP pembukaan toko, checklist sebelum pengiriman...',
      },
      {
        id: 'sop-ignored-evidence',
        label: 'Bagaimana Anda tahu itu sering diabaikan?',
        placeholder:
          'Contoh: Staf sering skip beberapa langkah, pelanggan komplain soal hal yang sama terus, hasilnya nggak konsisten antar karyawan...',
      },
    ],
  },
  {
    id: 'c1-card-17',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 1',
    title: 'Sekarang Anda Tahu SOP Mana yang Paling Sering Didiamkan',
    body: [
      'Anda baru saja mengidentifikasi satu SOP yang tidak berjalan dengan benar di bisnis Anda sendiri. Itu lebih bermakna dari sekadar tahu teorinya.',
      'Bab berikutnya kasih Anda skala lengkap buat mengukur separah apa masalahnya — dari "diabaikan total" sampai "terverifikasi aktif" — dan ke mana harus menuju dari posisi Anda sekarang.',
    ],
  },
]
