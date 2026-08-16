import {
  BarChart2,
  AlertCircle,
  Eye,
  CheckCircle,
  Search,
  Layers,
  RefreshCw,
  HelpCircle,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter6Cards: Card[] = [
  {
    id: 'c6-card-1',
    type: 'info',
    icon: BarChart2,
    eyebrow: 'Bab 6 · Verifikasi Aktif',
    title: 'Anda Sudah di Level 3 — Saatnya Naik ke Level 4',
    body: [
      'Di Bab 2, kita bicara soal skala 4 level. Level 3 itu kondisi yang terasa lumayan: SOP diikuti sebagian besar waktu, terutama kalau ada yang mengawasi. Banyak bisnis merasa ini sudah cukup.',
      'Tapi ada garis tegas antara Level 3 dan Level 4. Level 3 = kepatuhan bergantung pada kehadiran pengawas. Level 4 = kepatuhan diverifikasi aktif secara rutin, terlepas ada yang mengawasi atau tidak.',
      'Bab ini instalasi mekanismenya. Bukan soal disiplin yang lebih ketat — tapi soal sistem yang membuat kepatuhan bisa dicek secara objektif, bukan cuma diasumsikan.',
    ],
  },
  {
    id: 'c6-card-2',
    type: 'info',
    icon: AlertCircle,
    eyebrow: 'Kesalahan Asumsi yang Mahal',
    title: '"Mereka Sudah Tahu SOPnya" — Itu Bukan Jaminan Mereka Mengikutinya',
    body: [
      'Ada asumsi yang sangat umum di bisnis yang sudah punya SOP: "tim sudah tahu prosedurnya, jadi mereka pasti ngikutin." Ini asumsi yang terasa masuk akal — dan hampir selalu keliru.',
      'Tahu dan benar-benar ngikutin itu dua hal yang berbeda jauh. Terutama di situasi buru-buru, di hari-hari sibuk, atau di momen yang tidak ada yang mengawasi. Di sinilah SOP yang "sudah diketahui semua orang" mulai dilangkahi satu langkah demi satu langkah — bukan karena niat buruk, tapi karena tekanan momen.',
      'Dan kalau tidak ada yang secara aktif mengecek, tidak ada yang akan tahu. Deviasinya kecil-kecil, tidak kelihatan dari atas, tidak ada yang komplain — sampai akhirnya ada masalah yang lebih besar yang muncul dari akumulasi langkah-langkah yang perlahan dihilangkan.',
    ],
  },
  {
    id: 'c6-card-3',
    type: 'yes-no',
    question:
      'Jujur: di bisnis Anda sekarang, apakah ada mekanisme aktif yang secara rutin mengecek apakah SOP yang kritis benar-benar diikuti di lapangan — bukan cuma percaya bahwa orang sudah tahu dan akan ngikutin?',
    yesLabel: 'Ada — ada sistem pengecekan yang berjalan rutin',
    noLabel: 'Belum ada — kami lebih banyak percaya dan mengasumsikan',
    feedbackYes:
      'Bagus. Baca terus — bab ini kasih Anda tiga teknik konkret yang bisa memperkuat sistem yang sudah ada, dan cara mengidentifikasi celah yang mungkin belum kelihatan dari pengecekan yang sekarang berjalan.',
    feedbackNo:
      'Itu jawaban yang jujur. Dan sangat umum. Tanpa mekanisme aktif, Anda tidak sedang memverifikasi kepatuhan — Anda sedang menebak. Bab ini kasih Anda tiga teknik yang bisa langsung diterapkan.',
  },
  {
    id: 'c6-card-4',
    type: 'info',
    icon: Eye,
    eyebrow: 'Teknik #1 dari 3',
    title: 'Spot Check Terjadwal — Bukan Dadakan Acak, Bukan Diumumkan Jauh-jauh Hari',
    body: [
      'Spot check adalah pengecekan singkat di lapangan untuk melihat apakah pekerjaan nyata sesuai dengan SOP yang ada. Kuncinya ada di kata "terjadwal" — bukan sepenuhnya acak tanpa pola (karena itu tidak sistematis), tapi juga bukan diumumkan jauh-jauh hari (karena kalau tim tahu kapan persisnya Anda akan mengecek, mereka bisa bersiap dan Anda tidak melihat gambaran yang sebenarnya).',
      'Cara kerjanya: Anda punya jadwal internal — misalnya spot check dilakukan dua kali seminggu, tapi hari dan jamnya Anda yang tentukan di hari itu sendiri. Tim tahu bahwa pengecekan ada dan rutin, tapi tidak tahu kapan persisnya. Ini membangun ekspektasi bahwa standar kerja harus dijaga setiap hari, bukan hanya saat Anda kelihatan.',
      'Yang dicek dalam spot check bukan performa umum — tapi apakah langkah-langkah spesifik di SOP benar-benar dilakukan. Punya checklist kecil yang bisa selesai dalam 5–10 menit: apakah langkah X dilakukan? Apakah urutan Y diikuti? Apakah form Z diisi? Konkret, bisa diverifikasi, tidak perlu interpretasi.',
    ],
  },
  {
    id: 'c6-card-5',
    type: 'multiple-choice',
    question:
      'Manajer sebuah toko mau mulai spot check kepatuhan SOP kasir. Mana pendekatan yang paling efektif?',
    options: [
      'Mengumumkan jadwal spot check dua minggu sebelumnya — supaya kasir bisa mempersiapkan diri dengan baik',
      'Melakukan spot check kapan saja tanpa pola sama sekali — penuh kejutan, tidak pernah ada ekspektasi',
      'Menetapkan frekuensi internal (misal dua kali seminggu) tapi waktu persisnya ditentukan hari itu sendiri, sehingga tim tahu pengecekan ada tapi tidak tahu kapan',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Ini menciptakan keseimbangan: tim tahu bahwa standar kerja akan dicek secara rutin, jadi mereka tidak bisa asumsikan "hari ini aman." Tapi tidak sepenuhnya acak tanpa pola, jadi sistematis dan bisa dipertanggungjawabkan.',
    errorFeedback:
      'Kalau diumumkan jauh-jauh hari, tim akan bersiap khusus untuk hari itu — dan Anda hanya melihat performa saat "ada ujian." Kalau penuh kejutan tanpa pola, itu tidak sistematis dan sulit dijadikan data. Yang paling efektif: frekuensi konsisten, waktu yang fleksibel dalam periode itu.',
  },
  {
    id: 'c6-card-6',
    type: 'info',
    icon: CheckCircle,
    eyebrow: 'Teknik #2 dari 3',
    title: 'Self-Audit Checklist — Staf Mengecek Kepatuhan Mereka Sendiri, Secara Berkala',
    body: [
      'Self-audit adalah proses di mana staf sendiri yang mencentang apakah mereka sudah mengikuti SOP — bukan supervisor yang mengecek, tapi orang yang mengerjakan tugas itu yang melaporkan kepatuhannya sendiri.',
      'Ini terdengar mudah dimanipulasi — dan memang bisa, kalau dijadikan satu-satunya mekanisme. Self-audit bukan pengganti spot check supervisor; keduanya dikombinasikan. Self-audit kasih Anda data baseline — seberapa sering staf sendiri menilai kepatuhannya tinggi atau rendah. Kalau self-audit konsisten bilang "semua oke" tapi spot check supervisor menemukan banyak deviasi, itu sinyal yang sangat penting: ada gap antara persepsi staf dan realita lapangan.',
      'Format yang bekerja: checklist harian atau mingguan yang singkat (5–7 item paling kritis), diisi di akhir shift atau akhir periode kerja. Bisa kertas, bisa form digital. Yang terpenting: hasilnya dikumpulkan dan ada yang melihat — bukan cuma ritual yang dilakukan tapi tidak pernah ditindaklanjuti.',
    ],
  },
  {
    id: 'c6-card-7',
    type: 'info',
    icon: Search,
    eyebrow: 'Teknik #3 dari 3',
    title: 'Sinyal Tidak Langsung — KPI Hasil yang Jadi Indikator SOP Tidak Diikuti',
    body: [
      'Ada situasi di mana tidak ada yang mengaku melanggar SOP — tapi ada sesuatu yang tidak beres. Di sinilah sinyal tidak langsung jadi penting: KPI hasil yang menjadi indikator halus bahwa ada prosedur yang diam-diam tidak diikuti.',
      'Contohnya: defect rate yang naik tanpa alasan yang jelas. Komplain pelanggan yang datang berulang soal hal yang sama — padahal SOP untuk menangani itu sudah ada. Rework yang meningkat di area tertentu. Return rate yang melebihi baseline normal. Satu orang atau satu shift yang hasilnya konsisten berbeda dari yang lain.',
      'Sinyal-sinyal ini tidak langsung menunjuk pada pelanggaran SOP spesifik — tapi mereka jadi alasan untuk menginvestigasi lebih dalam. Kalau defect rate di shift malam lebih tinggi dari shift pagi, itu pertanyaan: apakah prosedur di shift malam diikuti dengan cara yang sama? Sinyal tidak langsung adalah sistem peringatan dini sebelum masalah jadi lebih besar.',
    ],
  },
  {
    id: 'c6-card-8',
    type: 'multiple-choice',
    question:
      'Sebuah klinik kecantikan punya SOP sterilisasi alat yang ketat. Tidak ada staf yang melaporkan ada masalah, dan saat supervisor sesekali hadir semuanya terlihat beres. Tapi dalam dua bulan terakhir ada kenaikan komplain iritasi kulit dari pelanggan yang menggunakan layanan di hari-hari tertentu. Apa yang seharusnya menjadi langkah selanjutnya?',
    options: [
      'Tidak perlu tindakan khusus — komplain seperti itu bisa disebabkan banyak faktor di luar kendali klinik',
      'Gunakan pola komplain ini sebagai sinyal tidak langsung untuk menginvestigasi apakah SOP sterilisasi benar-benar diikuti di hari-hari atau oleh staf yang relevan',
      'Minta semua staf menandatangani kembali komitmen kepatuhan SOP — supaya mereka ingat kembali pentingnya prosedur',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Pola yang berulang di hari-hari tertentu adalah sinyal yang perlu diinvestigasi, bukan diabaikan. Self-report staf dan pengamatan sesekali tidak cukup untuk mendeteksi deviasi yang terjadi di momen tidak diawasi — ini tepatnya kegunaan sinyal tidak langsung.',
    errorFeedback:
      'Pola komplain yang terulang dan terkait dengan hari-hari tertentu adalah data, bukan kebetulan. Menandatangani komitmen ulang tidak menyelesaikan masalah — itu hanya ritual tanpa investigasi. Sinyal tidak langsung seperti ini adalah undangan untuk mengecek lebih dalam apakah SOP benar-benar diikuti.',
  },
  {
    id: 'c6-card-9',
    type: 'info',
    icon: Layers,
    eyebrow: 'Tiga Teknik, Satu Sistem',
    title: 'Ketiga Teknik Ini Bekerja Bersama — Bukan Pilih Satu, Abaikan Dua',
    body: [
      'Spot check, self-audit, dan sinyal tidak langsung bukan tiga opsi yang harus dipilih salah satunya. Ketiganya menutupi celah yang berbeda.',
      'Spot check supervisor menangkap deviasi yang terjadi di lapangan secara real-time. Self-audit staf membangun budaya akuntabilitas pribadi dan kasih Anda data baseline untuk dibandingkan dengan temuan spot check. Sinyal tidak langsung dari KPI hasil kasih Anda peringatan dini ketika ada yang tidak beres di level sistem, bukan hanya di level individu.',
      'Bisnis yang punya ketiga lapisan ini tidak bergantung pada satu titik pengamatan saja. Deviasi lebih sulit sembunyi karena ada lebih dari satu cara untuk terdeteksi. Dan kalau ada ketidaksesuaian antara self-audit, hasil spot check, dan KPI hasil — itu sinyal yang sangat berharga untuk ditelusuri.',
    ],
  },
  {
    id: 'c6-card-10',
    type: 'info',
    icon: RefreshCw,
    eyebrow: 'Sambungkan ke Ritme yang Ada',
    title: 'Jangan Buat Forum Baru Kalau Bisa Ditumpangkan ke yang Sudah Ada',
    body: [
      'Pengecekan kepatuhan tidak harus punya forum sendiri yang berdiri terpisah. Cara yang paling mudah diterapkan dan paling tahan lama: tumpangkan ke ritme yang sudah berjalan di bisnis Anda.',
      'Kalau sudah ada daily huddle atau briefing pagi — itu tempat yang tepat untuk review self-audit kemarin: ada yang tidak dicentang? Kenapa? Kalau sudah ada tinjauan mingguan — itu tempat untuk melihat tren spot check minggu ini dan KPI hasil yang relevan. Kalau sudah ada rapat bulanan — itu forum untuk melihat pola jangka panjang dan memutuskan apakah ada SOP yang perlu direvisi.',
      'Kalau belum ada forum apapun — tidak masalah. Buat satu sesi singkat yang secara eksplisit membahas kepatuhan SOP: bisa 15 menit mingguan, bisa di akhir setiap shift. Yang penting ada jadwal, ada yang memimpin, dan hasilnya tidak hanya dibahas tapi juga dicatat. Pengecekan yang tidak punya ritme yang jelas akan perlahan ditinggalkan.',
    ],
  },
  {
    id: 'c6-card-11',
    type: 'yes-no',
    question:
      'Di bisnis Anda sekarang — sudah ada forum atau jadwal rutin apa pun (huddle, rapat, briefing) yang bisa dijadikan tempat untuk secara eksplisit mengecek kepatuhan SOP?',
    yesLabel: 'Ada — ada forum yang sudah berjalan dan bisa digunakan',
    noLabel: 'Belum ada, atau ada tapi tidak pernah membahas kepatuhan SOP',
    feedbackYes:
      'Bagus. Itu titik masuk yang paling mudah. Mulai dengan menambahkan satu agenda tetap di forum itu — review checklist self-audit atau hasil spot check terbaru. Tidak perlu mengubah struktur forum, cukup tambahkan satu item.',
    feedbackNo:
      'Kalau belum ada forum yang cocok, ini bukan halangan untuk memulai. Pilih satu bentuk yang paling realistis untuk bisnis Anda — bisa 10 menit di awal atau akhir shift setiap minggu — dan mulai dari situ. Konsistensi lebih penting dari kesempurnaannya.',
  },
  {
    id: 'c6-card-12',
    type: 'info',
    icon: HelpCircle,
    eyebrow: 'Kalau Menemukan Ketidakpatuhan',
    title: 'Tanya Dulu Sebelum Menghukum — Sistemnya yang Salah atau Orangnya?',
    body: [
      'Ini bagian yang paling sering salah ditangani: ketika spot check menemukan ketidakpatuhan, reaksi pertama sering langsung mengarah ke siapa yang salah dan hukuman apa yang harus diberikan.',
      'Tapi ada pertanyaan penting yang harus dijawab dulu: apakah ketidakpatuhan ini karena orangnya malas atau tidak peduli — atau karena SOPnya sendiri yang tidak realistis untuk diikuti di kondisi kerja nyata? Kalau SOP minta langkah X dilakukan dalam 2 menit tapi di lapangan kondisi selalu tidak memungkinkan, orang akan terus melangkahi langkah itu bukan karena malas tapi karena mustahil.',
      'Pengecekan yang sehat membedakan dua hal ini. Kalau ketidakpatuhan karena alasan yang bisa dikontrol staf (tidak tahu, tidak peduli, atau sengaja skip yang terasa tidak penting) — itu perlu coaching dan klarifikasi standar. Kalau ketidakpatuhan karena SOPnya sendiri yang tidak praktis — itu undangan untuk balik ke diagnosis Bab 3 dan revisi SOPnya. Mekanisme verifikasi yang baik memperbaiki sistem, bukan cuma mencari siapa yang salah.',
    ],
  },
  {
    id: 'c6-card-13',
    type: 'multiple-choice',
    question:
      'Spot check di dapur sebuah restoran menemukan bahwa SOP suhu penyimpanan bahan — yang mengharuskan pengecekan termometer setiap 2 jam — konsisten tidak dilakukan oleh semua staf shift malam. Saat ditanya, staf bilang: "Termometernya rusak dari dua bulan lalu dan belum diganti. Kami cek pakai tangan saja." Apa langkah yang paling tepat?',
    options: [
      'Beri teguran ke semua staf shift malam karena tidak mengikuti SOP',
      'Selesaikan akar masalahnya: ganti termometer, update SOP kalau perlu, baru tegakkan standar — ini adalah kegagalan sistem, bukan kegagalan staf',
      'Ubah SOP supaya tidak mensyaratkan termometer, menyesuaikan dengan kondisi yang ada',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ketika alat yang dibutuhkan untuk mengikuti SOP tidak tersedia, itu kegagalan sistem — bukan kegagalan staf. Menegur staf tanpa menyelesaikan akar masalahnya hanya akan menciptakan ketidakpatuhan yang tersembunyi, bukan kepatuhan yang nyata. Perbaiki sistemnya, baru tegakkan standarnya.',
    errorFeedback:
      'Perhatikan konteksnya: staf tidak bisa mengikuti SOP karena alat yang dibutuhkan rusak dan tidak diganti. Menegur mereka tanpa menyelesaikan itu adalah hukuman atas kegagalan sistem, bukan kegagalan individu. Dan mengubah SOP untuk menyesuaikan kondisi yang rusak bukan solusi — itu menurunkan standar. Solusinya: perbaiki sistemnya.',
  },
  {
    id: 'c6-card-14',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Nyata End-to-End',
    title: 'Merancang Sistem Verifikasi Kepatuhan untuk SOP Pembukaan Toko',
    body: [
      'Sebuah toko retail punya SOP Pembukaan Toko — 9 langkah, sudah dikonversi ke checklist ringkas (Bab 4), sudah ditempel di area kasir (Bab 5). Tapi pemiliknya tidak tahu apakah checklist itu benar-benar digunakan setiap hari atau hanya jadi hiasan.',
      'Sistem verifikasi yang dirancang: (1) Self-audit: staf yang bertugas buka mengisi checklist tiap pagi dan menaruh form di kotak khusus di meja kasir. (2) Spot check: pemilik atau supervisor melakukan spot check 2–3 kali seminggu — datang di saat pembukaan, lihat checklist diisi atau tidak, dan tanya satu atau dua langkah spesifik. Tidak diumumkan kapan datangnya. (3) Sinyal tidak langsung: pemilik memantau laporan kas harian — opening discrepancy yang terus berulang jadi sinyal ada langkah reconciliation yang dilangkahi.',
      'Forum review: setiap Senin briefing singkat 10 menit — review self-audit minggu lalu: ada yang tidak dicentang? Kenapa? Apa yang perlu diklarifikasi? Dalam satu bulan pertama, ditemukan bahwa dua langkah konsisten tidak dicentang. Investigasi: bukan stafnya yang malas — langkah-langkahnya butuh alat yang tersimpan di gudang, jauh dari area kasir. Solusi: pindahkan alat ke lokasi yang lebih dekat. Ketidakpatuhan turun drastis tanpa perlu satu pun teguran.',
    ],
  },
  {
    id: 'c6-card-15',
    type: 'reflection',
    eyebrow: 'Entri Keenam · Buku Kerja SOP Anda',
    prompt:
      'Sekarang rancang mekanisme pengecekan kepatuhan untuk SOP yang sudah Anda kerjakan sejak Bab 3 — tentukan apa yang akan dicek, seberapa sering, dan siapa yang melakukannya.',
    fields: [
      {
        id: 'compliance-check-mechanism',
        label: 'Mekanisme cek kepatuhan apa yang Anda rancang — spot check, self-audit, sinyal tidak langsung, atau kombinasi?',
        placeholder:
          'Contoh: Kombinasi self-audit harian (staf isi checklist di akhir shift) dan spot check supervisor 2x seminggu. Pantau juga jumlah komplain berulang sebagai sinyal tidak langsung...',
      },
      {
        id: 'compliance-check-cadence',
        label: 'Seberapa sering, dan siapa yang melakukannya?',
        placeholder:
          'Contoh: Self-audit: setiap hari oleh staf yang bertugas. Spot check: 2x seminggu oleh supervisor shift, waktu ditentukan hari itu sendiri. Review mingguan: 10 menit di briefing Senin pagi, dipimpin supervisor...',
      },
    ],
  },
  {
    id: 'c6-card-16',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 6',
    title: 'Semua Bagiannya Sudah Ada — Bab 7 Satukan Semuanya',
    body: [
      'Anda baru saja merancang sistem yang menutup gap antara Level 3 dan Level 4: bukan lagi bergantung pada asumsi atau kehadiran pengawas, tapi ada mekanisme aktif yang memverifikasi kepatuhan secara rutin.',
      'Sejauh ini Anda sudah punya semua bagiannya: diagnosis akar masalah (Bab 3), format baru yang bisa diikuti di lapangan (Bab 4), akses di titik kerja dengan pemilik yang jelas (Bab 5), dan cara mengecek kepatuhannya secara sistematis (Bab 6).',
      'Bab 7 lokakarya: satukan semuanya jadi satu SOP yang benar-benar dirombak habis, dari ujung ke ujung.',
    ],
  },
]
