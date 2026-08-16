import {
  BarChart2,
  Search,
  FileText,
  FolderOpen,
  Clock,
  HelpCircle,
  Layers,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter3Cards: Card[] = [
  {
    id: 'c3-card-1',
    type: 'info',
    icon: BarChart2,
    eyebrow: 'Bab 3 · Audit Kegunaan',
    title: 'Anda Sudah Tahu Ada di Level Berapa — Sekarang: Kenapa Persis SOP Itu Nyangkut di Sana?',
    body: [
      'Di Bab 2, Anda sudah menempatkan bisnis Anda di salah satu dari empat level. Mungkin Level 2 — SOP ada tapi jarang dipakai. Atau Level 3 — diikuti kalau ada yang mengawasi. Anda tahu posisinya.',
      'Tapi tahu level-nya belum cukup untuk benerin masalahnya. Kalau SOP Anda di Level 2, alasannya bisa sangat berbeda antar satu SOP dan SOP lain: formatnya susah dibaca, susah diakses pas dibutuhkan, atau isinya sendiri sudah tidak relevan lagi.',
      'Bab ini kasih Anda cara mendiagnosis akar masalah yang spesifik — biar perbaikannya tepat sasaran, bukan asal ganti format semua SOP karena itu yang paling kelihatan.',
    ],
  },
  {
    id: 'c3-card-2',
    type: 'info',
    icon: Search,
    eyebrow: 'Tiga Penyebab Umum',
    title: 'SOP Nggak Dipakai: Tiga Jenis Masalah yang Berbeda, Tiga Perbaikan yang Berbeda',
    body: [
      'Dari semua kasus SOP yang tidak dipakai, hampir selalu bisa diklasifikasikan ke dalam salah satu dari tiga jenis masalah — atau kombinasinya.',
      'Lensa 1: Masalah Format. SOPnya ditulis, tapi formatnya tidak membantu orang memakainya saat kerja. Lensa 2: Masalah Akses. SOPnya cukup jelas, tapi orang tidak bisa menemukan atau mengaksesnya di momen yang tepat. Lensa 3: Masalah Relevansi. SOPnya jelas dan mudah diakses, tapi isinya sudah tidak sesuai dengan cara kerja nyata sekarang.',
      'Kenapa penting untuk membedakan ketiganya? Karena perbaikannya berbeda total. Membenahi format tidak akan menyelesaikan masalah akses. Membenahi akses tidak akan menyelesaikan masalah relevansi. Anda harus tahu mana yang sedang terjadi.',
    ],
  },
  {
    id: 'c3-card-3',
    type: 'info',
    icon: FileText,
    eyebrow: 'Lensa 1 dari 3',
    title: 'Masalah Format: SOP yang Ditulis Seperti Dokumen Hukum',
    body: [
      'SOP dengan masalah format ditulis lengkap — bahkan sering sangat lengkap. Paragraf panjang, bahasa formal, penjelasan mendetail. Di atas kertas terlihat profesional.',
      'Tapi di lapangan: orang di tengah-tengah kerja tidak punya waktu untuk membaca tiga halaman paragraf buat tahu langkah selanjutnya. Tidak ada checklist yang bisa diikuti sambil kerja. Tidak ada visual yang membantu memindai urutan dengan cepat. Hasilnya: dokumen itu ditutup, dan orang kerja dari ingatan.',
      'Tandanya: staf bilang SOPnya "kepanjangan" atau "susah dibaca." Atau mereka tidak membuka dokumen itu sama sekali saat kerja — tapi kalau ditanya, mereka bisa menyebutkan isinya karena pernah baca waktu training. Format-nya yang jadi penghalang, bukan isinya.',
    ],
  },
  {
    id: 'c3-card-4',
    type: 'info',
    icon: FolderOpen,
    eyebrow: 'Lensa 2 dari 3',
    title: 'Masalah Akses: SOP yang Jelas Tapi Tidak Ada yang Tahu Di Mana',
    body: [
      'SOP dengan masalah akses sebenarnya bagus — isinya jelas, formatnya mungkin sudah cukup ringkas. Masalahnya adalah saat orang butuh SOPnya pas lagi kerja, mereka tidak tahu persis di mana carinya.',
      'Tersimpan di laptop satu orang yang sedang tidak masuk. Di folder Google Drive dengan nama yang tidak jelas di antara ratusan file lain. Di binder di laci kantor — sementara staf yang butuh lagi di lapangan atau cabang lain. Atau lebih parah: di kepala satu orang yang sudah resign.',
      'Tandanya: saat ada situasi yang butuh SOP, orang-orang nanya ke sesama rekan atau senior — bukan buka dokumen. Mereka tahu SOPnya ada, tapi tidak bisa menemukan atau mengaksesnya di momen yang tepat. Gap-nya bukan di isi, tapi di distribusi.',
    ],
  },
  {
    id: 'c3-card-5',
    type: 'info',
    icon: Clock,
    eyebrow: 'Lensa 3 dari 3',
    title: 'Masalah Relevansi: SOP yang Jelas dan Mudah Diakses — Tapi Sudah Tidak Sesuai Realita',
    body: [
      'Ini yang paling berbahaya — karena dari luar kelihatan semuanya beres. SOPnya ada, bisa diakses, formatnya cukup bisa dibaca. Tapi isinya sudah tidak sesuai dengan cara kerja yang sekarang berjalan di lapangan.',
      'Sistemnya berganti tapi SOP-nya masih pakai nama aplikasi lama. Prosesnya sudah berubah tapi urutannya di SOP masih versi dua tahun lalu. Alat yang disebutkan di SOP sudah tidak dipakai. Hasilnya: orang sengaja tidak mengikuti SOP bukan karena malas, tapi karena kalau diikuti persis, hasilnya malah salah.',
      'Kalau Anda sudah ikut Modul 4: relevansi yang bermasalah karena prosesnya sendiri sudah berubah total mungkin butuh peninjauan ulang proses — bukan sekadar revisi SOP. Kenali bedanya sebelum memutuskan langkah selanjutnya.',
    ],
  },
  {
    id: 'c3-card-6',
    type: 'info',
    icon: HelpCircle,
    eyebrow: 'Cara Mendiagnosis',
    title: 'Tiga Pertanyaan untuk Setiap SOP yang Perlu Didiagnosis',
    body: [
      'Untuk setiap SOP yang ingin Anda diagnosis, tanyakan tiga pertanyaan ini — satu pertanyaan per lensa.',
      'Pertanyaan 1 (menunjuk ke Lensa Format): Kalau orang buka SOP ini sekarang saat lagi kerja, apa mereka langsung ngerti langkah-langkahnya tanpa harus baca ulang berkali-kali atau nanya orang lain? Kalau jawabannya tidak — ada masalah format.',
      'Pertanyaan 2 (menunjuk ke Lensa Akses): Kalau staf lagi butuh SOP ini di tengah-tengah kerja, apa mereka tahu persis di mana carinya, dan bisa ketemu dalam kurang dari satu menit? Kalau jawabannya tidak — ada masalah akses.',
      'Pertanyaan 3 (menunjuk ke Lensa Relevansi): Kapan terakhir SOP ini dicek atau diupdate — dan apakah isinya masih benar-benar sesuai dengan cara kerja yang sekarang berjalan? Kalau ada yang sudah berubah tapi SOP-nya belum diupdate — ada masalah relevansi.',
    ],
  },
  {
    id: 'c3-card-7',
    type: 'info',
    icon: Layers,
    eyebrow: 'Perhatian',
    title: 'Satu SOP Bisa Punya Lebih dari Satu Masalah Sekaligus',
    body: [
      'Ketiga lensa ini tidak saling eksklusif — satu SOP bisa punya masalah format dan akses sekaligus. Atau akses dan relevansi. Atau ketiganya.',
      'Yang penting: kenali lensa mana yang paling dominan, dan apakah ada kombinasi yang perlu dibenahi sekaligus. Format dan akses dibenahi di Bab 4 dan 5. Kalau keduanya bermasalah, dua bab itu akan membantu Anda mengatasinya masing-masing.',
      'Satu catatan khusus untuk masalah relevansi: kalau isinya sudah tidak sesuai realita, ini perlu dibenahi duluan sebelum format atau aksesnya. Tidak ada gunanya memudahkan orang mengakses SOP yang isinya sudah salah.',
    ],
  },
  {
    id: 'c3-card-8',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Nyata',
    title: 'Mari Diagnosis Satu SOP Bersama: SOP Penanganan Komplain Pelanggan',
    body: [
      'Sebuah usaha laundry kiloan punya SOP Penanganan Komplain Pelanggan — ditulis dua tahun lalu, cukup panjang (empat halaman paragraf), tersimpan di folder WhatsApp grup toko.',
      'Di lapangan: setiap kali ada pelanggan komplain, kasir langsung WhatsApp pemilik. Bukan buka SOP. Pemiliknya frustrasi — merasa sudah bikin panduan yang cukup jelas, tapi tidak ada yang pakai.',
      'Mari terapkan tiga pertanyaan diagnostik ke SOP ini dan lihat lensa mana yang paling dominan.',
    ],
  },
  {
    id: 'c3-card-9',
    type: 'multiple-choice',
    question:
      'Pertanyaan 1 untuk SOP tadi: kasir lagi menghadapi pelanggan komplain dan buka SOP empat halaman itu saat itu juga. Apa yang kemungkinan terjadi?',
    options: [
      'Kasir bisa langsung ikuti langkah-langkahnya dengan cepat karena formatnya ringkas',
      'Kasir mungkin tidak sempat membaca empat halaman saat melayani pelanggan langsung — format jadi penghalang',
      'Kasir pasti ngerti karena pernah baca waktu training pertama kali',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Empat halaman dokumen paragraf bukan format yang bisa diikuti di tengah interaksi langsung dengan pelanggan. Ini sinyal masalah format — bukan karena isinya salah, tapi karena cara presentasinya tidak memungkinkan dipakai saat kerja nyata.',
    errorFeedback:
      'Pikirkan konteksnya: kasir sedang berhadapan langsung dengan pelanggan yang komplain. Membaca empat halaman di momen itu tidak realistis. Format yang tidak bisa diikuti di momen kerja nyata — itu masalah format, bukan masalah kemauan atau ingatan.',
  },
  {
    id: 'c3-card-10',
    type: 'info',
    icon: Search,
    eyebrow: 'Contoh Nyata · Pertanyaan 2 dan 3',
    title: 'Melengkapi Diagnosis: Akses dan Relevansi',
    body: [
      'Pertanyaan 2 (Akses): Apa kasir tahu persis di mana SOPnya dan bisa akses dalam satu menit? Jawabannya: SOP ada di folder WhatsApp grup, tapi terbenam di ratusan pesan lain. Tidak mudah ditemukan saat sedang berhadapan dengan pelanggan. Ada masalah akses juga — tapi lebih kecil dibanding masalah format.',
      'Pertanyaan 3 (Relevansi): Kapan terakhir SOP ini diupdate? Dua tahun lalu. Tapi langkah-langkah penanganan komplain masih relevan — proses bisnisnya tidak berubah signifikan. Relevansi tidak bermasalah.',
      'Diagnosis akhir: masalah utamanya adalah format (empat halaman tidak bisa diikuti saat kerja), dengan masalah akses sekunder. Relevansinya oke. Perbaikan yang tepat: konversi ke checklist ringkas (Bab 4) dan pindahkan ke lokasi yang mudah diakses di titik kerja (Bab 5) — bukan direvisi ulang isinya.',
    ],
  },
  {
    id: 'c3-card-11',
    type: 'multiple-choice',
    question:
      'Sebuah minimarket punya SOP pembukaan toko — ditulis dalam lima halaman dokumen Word dengan paragraf panjang. Staf yang bertugas pagi jarang buka dokumennya; mereka hafal urutannya dari kata-kata supervisor waktu training. Lensa mana yang paling dominan?',
    options: [
      'Masalah Format — SOPnya ada tapi tidak bisa dipindai atau diikuti cepat saat kerja',
      'Masalah Akses — SOPnya sulit ditemukan atau tidak tersedia di lokasi yang tepat',
      'Masalah Relevansi — isinya sudah tidak sesuai dengan cara kerja toko sekarang',
    ],
    correctAnswer: 0,
    successFeedback:
      'Tepat. Staf hafal SOPnya dari training — jadi aksesnya tidak bermasalah dan relevansinya diasumsikan oke. Yang jadi penghalang adalah format: lima halaman paragraf tidak bisa diikuti sebagai panduan kerja nyata saat jam sibuk pembukaan toko.',
    errorFeedback:
      'Perhatikan: staf tahu isinya dari training dan bisa mencari dokumennya kalau mau — jadi bukan masalah akses atau relevansi. Yang menghalangi mereka adalah format dokumen lima halaman yang tidak praktis diikuti di tengah-tengah tugas. Itu masalah format.',
  },
  {
    id: 'c3-card-12',
    type: 'multiple-choice',
    question:
      'Sebuah kafe punya SOP persiapan opening — ditulis ringkas dalam satu halaman checklist, jelas dan mudah diikuti. Tapi dokumennya disimpan di laptop kasir. Kalau kasir libur dan staf lain yang harus buka, mereka tidak tahu di mana cari SOPnya dan akhirnya kerja dari ingatan. Lensa mana yang paling dominan?',
    options: [
      'Masalah Format — formatnya tidak cukup jelas untuk dipahami tanpa penjelasan lebih lanjut',
      'Masalah Akses — SOPnya bagus tapi tidak tersedia di titik kerja saat dibutuhkan',
      'Masalah Relevansi — isinya sudah tidak sesuai dengan menu atau proses kafe yang sekarang',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Formatnya sudah bagus (checklist satu halaman), isinya relevan. Masalahnya murni akses — SOPnya ada di satu tempat yang tidak bisa dijangkau staf lain saat dibutuhkan. Perbaikannya bukan ubah formatnya, tapi pindahkan ke lokasi yang bisa diakses semua orang di titik kerja.',
    errorFeedback:
      'Coba lagi. Format sudah bagus (checklist ringkas), dan tidak ada indikasi relevansinya bermasalah. Yang jadi penghalang adalah akses: dokumen tersimpan di satu tempat yang hanya bisa dijangkau kasir tertentu. Staf lain tidak tahu di mana carinya saat paling dibutuhkan.',
  },
  {
    id: 'c3-card-13',
    type: 'multiple-choice',
    question:
      'Sebuah toko online punya SOP pemrosesan pesanan — ditulis dua tahun lalu, dicetak dan ditempel di area packing, mudah dibaca dan diakses. Setahun lalu mereka ganti sistem dari spreadsheet manual ke aplikasi, jadi langkah-langkah di SOP sudah tidak cocok dengan cara kerja baru. Staf tidak ikutin SOPnya karena kalau diikutin persis, hasilnya malah salah. Lensa mana yang paling dominan?',
    options: [
      'Masalah Format — cara penulisannya membingungkan dan susah diikuti',
      'Masalah Akses — SOPnya susah ditemukan pas lagi kerja',
      'Masalah Relevansi — isinya sudah tidak sesuai dengan sistem dan cara kerja yang berlaku sekarang',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Formatnya oke (mudah dibaca), aksesnya oke (tertempel di area kerja). Masalahnya adalah isi yang sudah tidak relevan — sistemnya berubah tapi SOP tidak pernah diupdate. Staf tidak ikutin bukan karena malas, tapi karena SOPnya sendiri yang sudah salah. Ini yang perlu dibenahi duluan sebelum berpikir soal format atau aksesnya.',
    errorFeedback:
      'Perhatikan: SOPnya mudah dibaca dan mudah diakses — jadi bukan masalah format atau akses. Yang bermasalah adalah isinya. Sistemnya sudah berubah, tapi SOP masih pakai prosedur lama. Staf sengaja tidak mengikutinya karena SOPnya sendiri yang sudah tidak sesuai realita lapangan.',
  },
  {
    id: 'c3-card-14',
    type: 'reflection',
    eyebrow: 'Entri Ketiga · Buku Kerja SOP Anda',
    prompt:
      'Sekarang terapkan tiga pertanyaan diagnostik ke SOP yang Anda identifikasi di Bab 1 dan 2. Gunakan tiga lensa — format, akses, relevansi — untuk menemukan akar masalah yang spesifik.',
    fields: [
      {
        id: 'sop-diagnosed',
        label: 'SOP mana yang Anda diagnosis di bab ini?',
        placeholder:
          'Boleh SOP yang sama dari Bab 1–2, atau SOP lain yang paling mendesak untuk dibenahi...',
      },
      {
        id: 'dominant-lens',
        label: 'Lensa mana yang paling dominan — format, akses, atau relevansi — dan kenapa?',
        placeholder:
          'Contoh: Masalah akses paling dominan — SOPnya jelas tapi hanya ada di satu folder yang tidak semua staf bisa temukan saat di lapangan...',
      },
    ],
  },
  {
    id: 'c3-card-15',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Selesai Bab 3',
    title: 'Sekarang Anda Sudah Tahu Persis Kenapa SOP Itu Diabaikan',
    body: [
      'Anda baru saja mendiagnosis akar masalah di balik SOP yang tidak berjalan — bukan sekadar "SOP-nya perlu diperbaiki," tapi secara spesifik: masalahnya ada di format, akses, atau relevansinya.',
      'Sekarang Anda sudah tahu persis kenapa SOP itu diabaikan. Bab 4 masuk ke cara benerin masalah formatnya — dari dokumen panjang jadi checklist yang beneran dipakai di lapangan.',
    ],
  },
]
