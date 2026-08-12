import {
  FileText,
  BrainCircuit,
  ListOrdered,
  Wrench,
  AlertOctagon,
  Sparkles,
  NotebookPen,
  ShieldCheck,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter5Cards: Card[] = [
  {
    id: 'c5-card-1',
    type: 'info',
    icon: FileText,
    eyebrow: 'Bab 5 · Instruksi Kerja yang Bisa Dieksekusi',
    title: 'Tahu Diagnosisnya Aja Belum Cukup',
    body: [
      'Di Bab 4, Anda sudah tahu persis titik mana yang rusak dan kenapa. Tapi tahu diagnosisnya aja nggak menyelesaikan apa-apa kalau nggak ditulis jadi sesuatu yang bisa diikuti orang lain.',
      'Bab ini kasih Anda skill menulis dua level paling teknis dari arsitektur proses: L3 (prosedur) dan L4 (instruksi kerja) — sampai titik yang tadinya rusak berhenti bergantung ke ingatan atau improvisasi satu orang.',
    ],
  },
  {
    id: 'c5-card-2',
    type: 'info',
    icon: BrainCircuit,
    eyebrow: 'Jebakannya',
    title: 'Kenapa "Semua Orang Sudah Tahu Caranya" Itu Rapuh',
    body: [
      'Pengetahuan yang cuma ada di kepala satu-dua orang itu kelihatan baik-baik saja — sampai orangnya cuti, resign, atau sekadar lupa detail kecil yang ternyata penting. Begitu itu terjadi, prosesnya langsung goyah.',
      'Menulis instruksi kerja itu bukan formalitas birokrasi yang bikin lambat. Itu cara membuat proses Anda nggak bergantung ke satu orang — supaya bisnis Anda tetap jalan dengan benar walau orang kunci sedang tidak ada.',
    ],
  },
  {
    id: 'c5-card-3',
    type: 'info',
    icon: ListOrdered,
    eyebrow: 'L3',
    title: 'Menulis Prosedur: Urutan Langkah dan Siapa Mengerjakan',
    body: [
      'Prosedur (L3) itu urutan langkah pada level "apa yang terjadi dan siapa yang mengerjakan" — cukup detail untuk dipahami alurnya, tapi belum sampai ke teknis paling rinci.',
      'Contoh prosedur untuk "Serah Terima Order dari Sales ke Produksi": Langkah 1 — Sales mengisi form spesifikasi order lengkap (jenis, jumlah, tanggal butuh) sebelum diteruskan. Langkah 2 — Staf Produksi mengonfirmasi kesanggupan dalam maksimal 1x24 jam. Langkah 3 — Kalau ada perbedaan (stok, waktu), Staf Produksi menghubungi Sales langsung, bukan mendiamkan order.',
    ],
  },
  {
    id: 'c5-card-4',
    type: 'info',
    icon: Wrench,
    eyebrow: 'L4',
    title: 'Menulis Instruksi Kerja: Detail Teknis Paling Granular',
    body: [
      'Instruksi kerja (L4) adalah detail teknis paling rinci per langkah — cukup jelas sampai staf baru bisa mengikuti tanpa nanya-nanya ke senior.',
      'Ciri instruksi kerja yang baik ada tiga: (1) jelas siapa yang mengerjakan, (2) langkah spesifik — bukan "cek dengan teliti" tapi "cek 3 hal ini: X, Y, Z", dan (3) kriteria "selesai dengan benar" yang jelas — bukan cuma "selesai".',
    ],
  },
  {
    id: 'c5-card-5',
    type: 'info',
    icon: AlertOctagon,
    eyebrow: 'Kesalahan Umum #1',
    title: 'Instruksi yang Terlalu Umum — Sama Saja dengan Tidak Ada',
    body: [
      'Instruksi seperti "pastikan kualitas barang baik sebelum dikirim" kedengarannya masuk akal, tapi sebenarnya nggak ada bedanya dengan tidak ada instruksi sama sekali — karena "baik" itu nggak punya kriteria yang bisa dicek orang lain dengan cara yang sama.',
      'Bandingkan dengan: "cek 3 hal sebelum kirim — (1) jahitan tidak ada yang lepas, (2) warna sesuai sampel yang disetujui, (3) kemasan tidak penyok. Kalau salah satu tidak lolos, tahan dan laporkan ke supervisor." Ini bisa diikuti siapa pun dengan hasil yang sama.',
    ],
  },
  {
    id: 'c5-card-6',
    type: 'multiple-choice',
    question:
      'Mana dari dua instruksi berikut yang lebih baik sebagai instruksi kerja (L4)?',
    options: [
      '"Cek barang dengan teliti sebelum dikirim ke pelanggan"',
      '"Cek 3 hal ini sebelum kirim: jahitan tidak lepas, warna sesuai sampel, kemasan tidak penyok — kalau ada yang gagal, tahan dan lapor ke supervisor"',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Instruksi kedua punya kriteria konkret yang bisa dicek siapa saja dengan hasil yang sama — itu ciri instruksi kerja yang bisa dieksekusi.',
    errorFeedback:
      'Coba lagi. "Dengan teliti" itu nggak punya kriteria konkret — tiap orang bisa menafsirkan "teliti" beda-beda. Instruksi yang baik menyebutkan hal spesifik apa yang dicek.',
  },
  {
    id: 'c5-card-7',
    type: 'info',
    icon: AlertOctagon,
    eyebrow: 'Kesalahan Umum #2',
    title: 'Instruksi yang Terlalu Panjang — Nggak Pernah Dibaca',
    body: [
      'Kebalikan dari terlalu umum: instruksi yang ditulis sepanjang 5 halaman dengan istilah teknis rumit, sehingga nggak pernah benar-benar dibaca staf di lapangan — ujung-ujungnya balik lagi mengandalkan diajarin lisan.',
      'Instruksi kerja yang baik itu cukup ringkas untuk benar-benar dibaca dan diikuti saat sedang bekerja — bukan dokumen kepatuhan yang cuma dibuka sekali pas ditanya auditor.',
    ],
  },
  {
    id: 'c5-card-8',
    type: 'fill-in-the-blank',
    sentence:
      'Instruksi kerja yang baik punya kriteria "selesai dengan benar" yang ________ — bukan cuma kata "selesai" tanpa penjelasan.',
    options: ['konkret', 'panjang', 'formal', 'rahasia'],
    correctAnswer: 'konkret',
    successFeedback:
      'Tepat. Kriteria yang konkret bisa dicek siapa saja dengan hasil yang sama — itu yang membedakan instruksi kerja sungguhan dari sekadar slogan.',
    errorFeedback:
      'Bukan itu. Yang penting adalah kriteria yang konkret — bukan soal panjang, formal, atau rahasia.',
  },
  {
    id: 'c5-card-9',
    type: 'info',
    icon: Sparkles,
    eyebrow: 'Contoh Transformasi',
    title: 'Dari Titik yang Rusak (Bab 4) ke Instruksi yang Jelas',
    body: [
      'Ingat contoh "PO Nyangkut 3 Hari" dari Bab 4 — didiagnosis sebagai approval berlapis. Setelah dipangkas jadi satu approver (detail pemangkasannya di Bab 7), prosedurnya (L3) jadi: Langkah 1 — Staf Pembelian mengisi form PO lengkap dengan justifikasi. Langkah 2 — Manajer terkait menyetujui/menolak dalam maksimal 1x24 jam lewat sistem, bukan tanda tangan fisik yang harus dicari-cari.',
      'Instruksi kerjanya (L4) untuk langkah 2: "Buka PO di sistem, cek 2 hal — apakah nominal sesuai anggaran bulan ini, apakah barang/jasa memang dibutuhkan sesuai justifikasi. Kalau kedua hal itu terpenuhi, setujui. Kalau salah satu meragukan, tolak dengan catatan alasan — jangan didiamkan."',
      'Perhatikan bedanya dari sebelumnya: dulu tiga orang approve tanpa jelas alasannya, sekarang satu orang dengan kriteria konkret yang bisa dicek dalam waktu singkat.',
    ],
  },
  {
    id: 'c5-card-10',
    type: 'multiple-choice',
    question:
      'Kenapa contoh instruksi kerja di atas ("cek 2 hal — nominal sesuai anggaran, barang memang dibutuhkan") lebih baik dari sekadar "setujui kalau memang perlu"?',
    options: [
      'Karena lebih pendek jumlah katanya',
      'Karena kriterianya konkret dan bisa dicek dengan cara yang sama oleh siapa pun yang menggantikan',
      'Karena menggunakan istilah yang lebih formal',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kriteria konkret itu yang membuat instruksi bisa dijalankan orang lain dengan hasil yang konsisten — bukan soal panjang-pendek atau formal-tidaknya kata-kata.',
    errorFeedback:
      'Coba lagi. Ini bukan soal jumlah kata atau formalitas — yang penting kriterianya konkret, sehingga siapa pun yang menjalankan mendapat hasil yang konsisten.',
  },
  {
    id: 'c5-card-11',
    type: 'yes-no',
    question:
      'Kalau Anda (pemilik bisnis) sakit dan nggak bisa dihubungi seminggu, apakah titik yang Anda diagnosis di Bab 4 tetap bisa berjalan dengan benar tanpa Anda?',
    yesLabel: 'Ya, sudah ada yang jelas caranya',
    noLabel: 'Belum — masih bergantung ke saya/orang tertentu',
    feedbackYes:
      'Bagus — itu tanda titik itu sudah cukup terdokumentasi. Tapi tetap tuliskan instruksinya secara eksplisit di entri Anda, biar nggak cuma ada di kepala.',
    feedbackNo:
      'Itu justru yang bab ini benahi. Menulis L3/L4 untuk titik itu adalah langkah konkret pertama membuatnya nggak bergantung ke satu orang.',
  },
  {
    id: 'c5-card-12',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Tulis Prosedur dan Instruksi Kerja untuk Titik Anda',
    body: [
      'Ambil titik serah terima yang Anda diagnosis di Bab 4 (Entri Keempat). Tulis 3-4 langkah prosedur (L3) untuk titik itu — siapa mengerjakan apa, dalam urutan apa — lalu ambil salah satu langkahnya dan tulis instruksi kerjanya (L4) sampai detail teknis, seperti contoh di atas.',
      'Nggak perlu sempurna. Yang penting: konkret, dan bisa diikuti orang yang belum pernah mengerjakannya.',
    ],
  },
  {
    id: 'c5-card-13',
    type: 'reflection',
    eyebrow: 'Entri Kelima · Buku Kerja Proses Anda',
    prompt:
      'Tulis prosedur (L3) dan satu instruksi kerja (L4) untuk titik serah terima yang Anda diagnosis di Bab 4.',
    fields: [
      {
        id: 'procedure-steps',
        label: 'Tulis 3-4 langkah prosedur (L3) untuk titik itu — siapa mengerjakan apa.',
        placeholder: 'Contoh: 1) Staf Pembelian isi form PO, 2) Manajer setujui dalam 1x24 jam via sistem, 3) ...',
      },
      {
        id: 'work-instruction',
        label:
          'Pilih satu langkah itu, tulis instruksi kerjanya (L4) sampai detail teknisnya — jelas sampai staf baru bisa ikuti tanpa nanya.',
        placeholder: 'Contoh: Cek 2 hal — nominal sesuai anggaran bulan ini, barang memang dibutuhkan sesuai justifikasi...',
      },
    ],
  },
  {
    id: 'c5-card-14',
    type: 'info',
    icon: ShieldCheck,
    eyebrow: 'Selesai Bab 5',
    title: 'Sekarang Anda Punya Instruksi Kerja yang Jelas',
    body: [
      'Titik yang tadinya rusak dan bergantung ke ingatan orang, sekarang punya prosedur dan instruksi kerja yang konkret dan bisa dijalankan orang lain.',
      'Tapi instruksi yang jelas aja nggak cukup kalau nggak ada yang mencegah kesalahan sebelum kejadian. Bab depan: merancang sistem yang mencegah, bukan cuma menangkap kesalahan setelah terjadi.',
    ],
  },
]
