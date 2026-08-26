import {
  Rocket,
  UserCheck,
  Footprints,
  TrendingUp,
  ClipboardList,
  NotebookPen,
  Clock,
  FileCheck2,
  PartyPopper,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter8Cards: Card[] = [
  {
    id: 'c8-card-1',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Bab 8 · Instalasi & Laporan Lengkap',
    title: 'Rancangannya Sudah Ada di Atas Kertas — Sekarang: Gimana Biar Ini Beneran Jalan?',
    body: [
      'Di Bab 7, Anda keluar dengan rancangan ulang yang lengkap: format baru yang bisa diikuti di lapangan, lokasi akses baru di titik kerja, dan mekanisme kepatuhan yang aktif mengecek. Tiga komponen itu sudah ada — bukan sekadar rencana di kepala, tapi konkret di atas kertas.',
      'Tapi ada pertanyaan yang belum terjawab — yang memisahkan rancangan bagus yang benar-benar dijalankan dari rancangan bagus yang akhirnya berdebu di folder yang sama seperti SOP lama.',
      'Pertanyaannya: gimana biar ini beneran jalan minggu depan — dan masih berjalan dua bulan dari sekarang? Bab ini yang menjawab itu.',
    ],
  },
  {
    id: 'c8-card-2',
    type: 'info',
    icon: UserCheck,
    eyebrow: 'Satu Level di Atas Bab 1',
    title: 'SOP Baru Tanpa Pemilik Kepatuhan yang Eksplisit Itu Cuma Niat Baik',
    body: [
      'Di Bab 1, kita bicara soal "dokumen berdebu" — SOP yang ditulis sekali, disimpan, lalu dilupakan. Rancangan ulang yang sudah Anda susun di Bab 4–7 dirancang supaya tidak jadi dokumen berdebu berikutnya.',
      'Tapi ada risiko yang lebih halus: bahkan rancangan ulang yang paling rapi sekalipun bisa diam-diam kembali jadi dokumen berdebu — kalau tidak ada satu orang yang secara eksplisit ditugaskan menjaga kepatuhannya tetap dicek. Bukan "semua orang tanggung jawab" — karena itu artinya tidak ada yang tanggung jawab.',
      'Satu orang, dengan nama yang bisa disebut, yang tugasnya memastikan SOP yang sudah dirombak ini benar-benar diikuti dan tetap dicek secara rutin. Tanpa itu, rancangan yang paling rapi pun akan perlahan luntur balik ke kebiasaan lama begitu tekanan kerja datang.',
    ],
  },
  {
    id: 'c8-card-3',
    type: 'yes-no',
    question:
      'Untuk SOP yang sudah Anda rombak di Bab 7 — sudah ada satu orang yang secara eksplisit ditugaskan menjaga kepatuhannya tetap dicek secara rutin?',
    yesLabel: 'Sudah — ada nama yang jelas dan tugasnya eksplisit',
    noLabel: 'Belum — atau masih di "semua orang tanggung jawab"',
    feedbackYes:
      'Bagus. Itu fondasi yang solid. Bab ini bantu Anda mengunci itu jadi playbook singkat yang bisa dipegang dan dirujuk kapan pun.',
    feedbackNo:
      '"Semua orang tanggung jawab" biasanya berarti tidak ada yang benar-benar tanggung jawab — terutama saat minggu sibuk datang dan semua orang sudah penuh. Kartu-kartu berikutnya bantu Anda menetapkan itu secara eksplisit.',
  },
  {
    id: 'c8-card-4',
    type: 'info',
    icon: Footprints,
    eyebrow: 'Poin Paling Penting di Bab Ini',
    title: 'Izin Eksplisit untuk Mulai dari Satu SOP Dulu',
    body: [
      'Setelah delapan bab membangun metodologi lengkap — skala kematangan, diagnosis tiga lensa, format checklist, akses di titik kerja, mekanisme verifikasi aktif — wajar banget kalau ada dorongan untuk langsung merombak semua SOP di bisnis Anda sekaligus, mulai minggu depan.',
      'Jangan.',
      'Bukan karena metodologinya tidak bisa diterapkan ke SOP lain — justru sangat bisa. Tapi mengubah banyak SOP sekaligus punya titik lemah yang sama: tim kewalahan menyesuaikan diri ke terlalu banyak perubahan sekaligus, dan begitu ada satu minggu sibuk, semuanya kembali ke cara lama karena tidak ada yang sempat menjaga semuanya. Instal dulu SATU SOP yang sudah dirombak di Bab 7. Biarkan berjalan dan stabil beberapa minggu, baru pakai metodologi yang sama untuk SOP berikutnya. Ini bukan usaha yang lebih rendah — ini cara supaya rombakan ini beneran melekat, bukan kolaps karena terlalu banyak perubahan sekaligus.',
    ],
  },
  {
    id: 'c8-card-5',
    type: 'multiple-choice',
    question:
      'Anda baru saja selesai merombak satu SOP lewat metodologi Bab 1–7, dan tergoda langsung merombak empat SOP lain sekaligus minggu depan. Apa yang sebaiknya Anda lakukan?',
    options: [
      'Langsung rombak semua sekaligus — mumpung metodologinya masih segar dan semangatnya masih tinggi',
      'Instal dulu satu SOP yang sudah dirombak, biarkan stabil beberapa minggu, baru lanjut ke SOP berikutnya',
      'Tunggu sampai ada krisis di SOP lain sebelum merombaknya satu-satu',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Satu dulu, biarkan stabil, baru lanjut. Bukan karena yang lain tidak penting — tapi karena terlalu banyak perubahan sekaligus gampang kolaps saat minggu sibuk datang. Rombakan yang bertahan satu-satu lebih berharga dari rombakan sepuluh yang luntur bersamaan.',
    errorFeedback:
      'Rombak semua sekaligus bikin tim kewalahan dan mudah balik ke kebiasaan lama. Menunggu krisis adalah pola reaktif dari Bab 1 yang sudah kita tinggalkan. Yang benar: satu SOP dulu, stabilkan, baru lanjut ke berikutnya.',
  },
  {
    id: 'c8-card-6',
    type: 'info',
    icon: TrendingUp,
    eyebrow: 'Menyambungkan ke Ritme yang Sudah Ada',
    title: 'Pengecekan Kepatuhan Ini Perlu Rumah — Bukan Forum Baru, Tapi Forum yang Sudah Ada',
    body: [
      'Mekanisme kepatuhan yang sudah Anda rancang di Bab 6 tidak bisa berdiri sendiri tanpa forum yang rutin meninjaunya. Kalau tidak ada yang membahas hasilnya, spot check dan self-audit akan perlahan jadi ritual tanpa makna — dilakukan tapi tidak ditindaklanjuti.',
      'Cara paling mudah: sambungkan ke ritme yang sudah berjalan di bisnis Anda. Kalau sudah ikut Modul 3, sambungkan ke salah satu tier EBR yang relevan — biasanya tinjauan mingguan untuk cek kepatuhan rutin, atau huddle harian kalau SOP ini berjalan setiap hari. Kalau sudah ikut Modul 4, titik pencegahan QMS yang sudah ada adalah tempat alami untuk memantau kepatuhan SOP yang baru dirombak ini.',
      'Kalau belum ikut Modul 3 atau 4 — tidak masalah. Yang penting ada forum rutin apa pun bentuknya: bisa rapat mingguan, bisa briefing pagi, bisa 10 menit setiap Senin. Satu agenda tetap yang mengecek kepatuhan SOP ini dengan satu orang yang memimpinnya. Tanpa itu, rancangan yang bagus tidak punya mekanisme koreksi saat mulai melenceng.',
    ],
  },
  {
    id: 'c8-card-7',
    type: 'info',
    icon: ClipboardList,
    eyebrow: 'Playbook Singkat',
    title: 'Satu Lembar yang Menjawab Lima Pertanyaan — Itu Semua yang Anda Butuhkan',
    body: [
      'Playbook instalasi bukan buku panduan tebal. Yang Anda butuhkan adalah satu ringkasan singkat yang bisa dipegang dan dirujuk — yang menjawab lima pertanyaan: SOP mana yang sudah dirombak, format barunya seperti apa, di mana aksesnya sekarang, mekanisme cek kepatuhannya apa, dan forum atau jadwal mana yang memantaunya.',
      'Format bisa apa saja: selembar kertas, dokumen bersama, catatan di papan tim. Yang penting: cukup jelas dan cukup ringkas untuk dibaca ulang dalam dua menit saat ada pertanyaan — dan mudah dibagi ke siapa pun yang perlu tahu.',
      'Kartu berikutnya minta Anda menuliskan tiga bagian inti dari playbook itu: forum pemantau, siapa yang memimpin, dan kapan SOP baru ini mulai berlaku resmi.',
    ],
  },
  {
    id: 'c8-card-8',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Giliran Anda',
    title: 'Susun Playbook Instalasi untuk SOP Pertama Anda',
    body: [
      'Semua bahannya sudah ada dari Bab 3–7. Yang sekarang dibutuhkan: kompilasikan ke dalam tiga informasi kunci — forum mana yang akan memantau, siapa yang memimpinnya, dan kapan SOP baru ini mulai berlaku resmi.',
      'Bukan "nanti kalau sudah siap" — tapi tanggal konkret. Tanpa tanggal, ini masih di level niat, bukan instalasi.',
    ],
  },
  {
    id: 'c8-card-9',
    type: 'reflection',
    eyebrow: 'Entri Kesembilan · Buku Kerja SOP Anda',
    prompt: 'Susun playbook instalasi singkat untuk SOP yang sudah Anda rombak di Bab 7.',
    fields: [
      {
        id: 'monitoring-forum',
        label: 'Forum atau jadwal apa yang akan memantau kepatuhan SOP baru ini?',
        placeholder:
          'Contoh: Briefing Senin pagi — agenda tetap 10 menit untuk review hasil self-audit minggu lalu dan cek apakah ada yang tidak dicentang...',
      },
      {
        id: 'monitoring-leader',
        label: 'Siapa yang memimpin pemantauan itu?',
        placeholder:
          'Contoh: Supervisor shift, HRD, atau manajer operasional — nama atau jabatan yang spesifik, bukan "semua orang"...',
      },
      {
        id: 'rollout-date',
        label: 'Kapan SOP baru ini mulai berlaku resmi?',
        placeholder:
          'Contoh: Senin depan — berlaku untuk semua staf yang terlibat dengan SOP ini, setelah sesi perkenalan singkat...',
      },
    ],
  },
  {
    id: 'c8-card-10',
    type: 'yes-no',
    question: 'Setelah semua yang baru Anda pelajari di bab ini — apa pendekatan rollout Anda?',
    yesLabel: 'Mulai dari Satu SOP Dulu',
    noLabel: 'Saya Siap Rombak Semua SOP Sekaligus',
    feedbackYes:
      'Pilihan yang tepat. Instal satu SOP dulu, biarkan stabil beberapa minggu, baru gunakan metodologi yang sama untuk SOP berikutnya. Hasilnya sama — cuma jauh lebih tahan lama dan tidak gampang luntur saat ada tekanan kerja.',
    feedbackNo:
      'Keberanian itu bagus — tapi rombak semua sekaligus punya titik lemah yang sudah kita bahas. Kalau Anda tetap ingin mulai serentak, pastikan paling tidak ada satu pemilik kepatuhan yang eksplisit per SOP — orang yang tugasnya jelas menjaga SOP itu diikuti saat minggu sibuk datang.',
  },
  {
    id: 'c8-card-11',
    type: 'info',
    icon: Clock,
    eyebrow: 'Satu Hal Lagi',
    title: 'Rancangan yang Bagus Tetap Perlu Dicek Ulang Setelah Berjalan Beberapa Waktu',
    body: [
      'SOP yang sudah diinstal dengan benar tidak perlu dicek setiap hari — tapi perlu dicek ulang setelah berjalan beberapa waktu. Apakah format checklistnya masih sesuai kondisi kerja nyata? Apakah pemilik yang ditetapkan masih orang yang tepat? Apakah mekanisme cek kepatuhannya masih berjalan atau sudah diam-diam ditinggalkan?',
      'Yang paling sering dilupakan: menetapkan tanggal konkret untuk cek ulang ini. Bukan "nanti kalau sempat" — yang tanggalnya selalu bergeser dan akhirnya tidak pernah terjadi. Satu tanggal konkret, di kalender, dengan satu hal spesifik yang akan dicek.',
      'Kartu berikutnya minta Anda menetapkan itu sekarang, sebelum keluar dari bab ini.',
    ],
  },
  {
    id: 'c8-card-12',
    type: 'reflection',
    eyebrow: 'Entri Kesepuluh · Buku Kerja SOP Anda',
    prompt:
      'Tentukan kapan dan apa yang akan Anda cek pada tinjauan pertama SOP yang sudah diinstal.',
    fields: [
      {
        id: 'next-check',
        label: 'Kapan Anda akan mengecek apakah SOP yang sudah dirombak benar-benar bertahan — dan apa yang akan Anda cek saat itu?',
        placeholder:
          'Contoh: Tiga minggu dari sekarang — cek apakah checklist masih digunakan setiap hari, apakah self-audit diisi, apakah ada langkah yang mulai konsisten dilewati, dan apakah pemilik masih aktif menjalankan tugasnya...',
      },
    ],
  },
  {
    id: 'c8-card-13',
    type: 'info',
    icon: FileCheck2,
    eyebrow: 'Satu Langkah Terakhir',
    title: 'Semua yang Sudah Anda Kerjakan dari Bab 1 sampai Sekarang, Kita Kumpulkan Jadi Satu',
    body: [
      'Dari Entri Pertama sampai Entri Kesepuluh, Anda sudah membangun sesuatu yang konkret: SOP yang dipilih, diagnosis akar masalahnya, format baru yang bisa diikuti di lapangan, akses baru di titik kerja dengan pemilik yang jelas, mekanisme verifikasi aktif, rancangan ulang yang utuh, playbook instalasinya, dan jadwal cek pertama.',
      'Semua itu sekarang kita kumpulkan jadi satu laporan lengkap yang bisa Anda cetak, simpan, dan pakai sebagai acuan saat menjalankan SOP baru dan melakukan cek ulang pertama.',
    ],
  },
  {
    id: 'c8-card-14',
    type: 'report',
    eyebrow: 'Laporan Kepatuhan SOP Anda',
    title: 'Laporan Lengkap Perjalanan Anda dari Bab 1 sampai Bab 8',
    intro: [
      'Ini rangkuman perjalanan Anda dari diagnosis SOP yang diabaikan sampai rancangan ulang yang lengkap dan playbook instalasinya. Simpan atau cetak sebagai acuan saat menjalankan SOP baru dan melakukan cek ulang pertama.',
    ],
    sections: [
      {
        heading: 'SOP yang Anda Diabaikan',
        items: [
          { label: 'SOP yang sering diabaikan (Bab 1)', cardId: 'c1-card-16', fieldId: 'sop-name' },
          { label: 'Bukti bahwa SOP itu diabaikan (Bab 1)', cardId: 'c1-card-16', fieldId: 'sop-ignored-evidence' },
        ],
      },
      {
        heading: 'Level Kematangan Anda',
        items: [
          { label: 'Level kematangan & alasannya (Bab 2)', cardId: 'c2-card-14', fieldId: 'overall-maturity-level' },
          { label: 'SOP yang paling mendesak untuk dibenahi (Bab 2)', cardId: 'c2-card-14', fieldId: 'most-urgent-sop' },
        ],
      },
      {
        heading: 'Diagnosis Akar Masalah',
        items: [
          { label: 'SOP yang didiagnosis (Bab 3)', cardId: 'c3-card-14', fieldId: 'sop-diagnosed' },
          { label: 'Lensa dominan — format, akses, atau relevansi (Bab 3)', cardId: 'c3-card-14', fieldId: 'dominant-lens' },
        ],
      },
      {
        heading: 'Format Baru Anda',
        items: [
          { label: 'Penggalan SOP lama yang bermasalah (Bab 4)', cardId: 'c4-card-14', fieldId: 'sop-old-snippet' },
          { label: 'Versi checklist baru (Bab 4)', cardId: 'c4-card-14', fieldId: 'sop-new-checklist' },
        ],
      },
      {
        heading: 'Rencana Akses Baru',
        items: [
          { label: 'Lokasi akses baru (Bab 5)', cardId: 'c5-card-14', fieldId: 'sop-access-location' },
          { label: 'Pemilik & trigger update (Bab 5)', cardId: 'c5-card-14', fieldId: 'sop-update-owner' },
        ],
      },
      {
        heading: 'Mekanisme Kepatuhan',
        items: [
          { label: 'Cara cek kepatuhan (Bab 6)', cardId: 'c6-card-15', fieldId: 'compliance-check-mechanism' },
          { label: 'Jadwal & pelaksana cek (Bab 6)', cardId: 'c6-card-15', fieldId: 'compliance-check-cadence' },
        ],
      },
      {
        heading: 'Rancangan Ulang SOP Anda',
        items: [
          { label: 'Skor kepercayaan redesain (Bab 7)', cardId: 'chapter7-sop-redesign-review', fieldId: 'score' },
          { label: 'Alasan skor tersebut (Bab 7)', cardId: 'chapter7-sop-redesign-review', fieldId: 'justification' },
          { label: 'Perubahan format (Bab 7)', cardId: 'c7-card-13', fieldId: 'format-change' },
          { label: 'Lokasi akses baru & pemilik (Bab 7)', cardId: 'c7-card-13', fieldId: 'access-location' },
          { label: 'Mekanisme kepatuhan baru (Bab 7)', cardId: 'c7-card-13', fieldId: 'compliance-mechanism' },
        ],
      },
      {
        heading: 'Playbook Instalasi Anda',
        items: [
          { label: 'Forum pemantau (Bab 8)', cardId: 'c8-card-9', fieldId: 'monitoring-forum' },
          { label: 'Pemimpin pemantauan (Bab 8)', cardId: 'c8-card-9', fieldId: 'monitoring-leader' },
          { label: 'Tanggal mulai resmi (Bab 8)', cardId: 'c8-card-9', fieldId: 'rollout-date' },
          { label: 'Pendekatan rollout (Bab 8)', cardId: 'c8-card-10', fieldId: 'selectionLabel' },
        ],
      },
      {
        heading: 'Cek Berikutnya',
        items: [
          { label: 'Kapan & apa yang akan dicek (Bab 8)', cardId: 'c8-card-12', fieldId: 'next-check' },
        ],
      },
    ],
    downloadButtonText: 'Cetak / Simpan Laporan Ini',
  },
  {
    id: 'review-request-module-5',
    type: 'review-request',
    eyebrow: 'Sebelum Anda Pergi',
    title: 'Boleh Minta Waktu Sebentar?',
    sentimentPrompt: 'Gimana rasanya baru saja menyelesaikan modul ini?',
    positiveLabel: 'Senang, worth it!',
    negativeLabel: 'Kurang greget',
    testimonialPromptLabel: 'Mau cerita sedikit soal pengalaman Anda?',
    testimonialPlaceholder:
      'Contoh: Bagian yang paling kena buat saya adalah waktu bahas...',
    privateFeedbackPrompt: 'Boleh cerita apa yang bikin kurang greget?',
    privateFeedbackPlaceholder:
      'Jujur aja — bagian mana yang terasa membosankan, membingungkan, atau kurang berguna?',
    thanksMessagePositive: 'Makasih banyak sudah luangin waktu cerita. Ini bantu kami banget.',
    thanksMessageNegative: 'Makasih sudah jujur. Ini yang bikin modul berikutnya lebih baik lagi.',
  },
  {
    id: 'c8-card-15',
    type: 'info',
    icon: PartyPopper,
    eyebrow: 'Selesai Modul 5',
    title: 'Anda Baru Saja Membangun Sistem yang Kebanyakan Bisnis Belum Pernah Punya',
    body: [
      'Ini bukan cuma delapan bab yang Anda baca. Dari SOP yang diabaikan di Bab 1, sampai rancangan ulang yang utuh dengan pemilik, mekanisme verifikasi, dan jadwal cek yang konkret — Anda sudah membangun sesuatu yang sangat jarang ada di bisnis: SOP yang dirancang dengan sengaja untuk benar-benar dipakai, bukan cuma eksis di dokumen.',
      'SOP pertama yang sudah dirombak ada di tangan Anda. Pemiliknya ada. Mekanismenya ada. Tanggal mulai ada. Yang tinggal sekarang: mulai dari situ, biarkan stabil, lalu pakai metodologi yang sama untuk SOP berikutnya.',
      '"Dokumen berdebu" yang kita mulai bicarakan di Bab 1 bukan kebetulan — dan sekarang Anda tahu persis cara mencegah SOP apa pun berakhir jadi satu.',
    ],
  },
]
