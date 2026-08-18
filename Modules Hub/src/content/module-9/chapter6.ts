import {
  Rocket,
  MessageSquareText,
  ArrowLeftRight,
  Sparkles,
  Eye,
  AlertTriangle,
  ShieldCheck,
  Wrench,
  Radar,
  Megaphone,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter6Cards: Card[] = [
  {
    id: 'c6-card-1',
    type: 'info',
    icon: Rocket,
    eyebrow: 'Bab 6 · Dari Kertas ke Lapangan',
    title: 'Rancangan dari Bab 5 Sekarang Benar-Benar Dijalankan',
    body: [
      'Di akhir Bab 5, Anda menuliskan rancangan lengkap: kasus pakai yang dikunci, mode pemakaian, siapa yang pakai, langkah cek manusia, dan target keberhasilan dalam 2-4 minggu. Itu masih di atas kertas. Sekarang saatnya benar-benar dijalankan.',
      'Bab ini nggak menambah kasus pakai baru atau mode baru. Bab ini soal empat hal yang menentukan apakah 2-4 minggu ke depan berjalan baik atau diam-diam gagal: cara memberi instruksi yang jelas ke AI, cara memverifikasi hasilnya, cara merespons waktu AI-nya salah, dan cara mengenali tanda-tanda tim mulai diam-diam balik ke cara manual.',
      'Semua yang dibahas di sini menempel langsung ke kasus pakai yang Anda kunci di Bab 5 — bukan teori umum soal AI. Kalau rancangan Anda soal draft balasan customer service, bayangkan itu terus sepanjang bab ini.',
    ],
  },
  {
    id: 'c6-card-2',
    type: 'info',
    icon: MessageSquareText,
    eyebrow: 'Instruksi Jelas vs. Ambigu',
    title: '"Bikinin Balasan Buat Pelanggan Ini" — Kenapa Instruksi Kayak Gini Hampir Selalu Meleset',
    body: [
      'Ini instruksi yang paling sering dipakai orang waktu baru mulai: "bikinin balasan buat pelanggan yang komplain ini." Singkat, kedengarannya jelas buat orangnya sendiri karena dia sudah tahu konteksnya di kepala — tapi AI-nya nggak tahu apa-apa selain kalimat itu.',
      'Hasilnya nyaris selalu perlu ditulis ulang banyak: nadanya bisa terlalu formal atau terlalu santai, nggak ada solusi konkret yang ditawarkan, panjangnya bisa jadi lima paragraf padahal cukup tiga. Bukan karena AI-nya nggak mampu — karena instruksinya nggak pernah bilang apa yang dimaksud "bagus" itu seperti apa.',
      'Instruksi ambigu memindahkan pekerjaan menebak dari Anda ke AI. Dan AI menebak dengan percaya diri penuh, bukan dengan ragu-ragu kelihatan — itu yang bikin hasilnya kelihatan meyakinkan padahal melenceng jauh dari yang dibutuhkan.',
    ],
  },
  {
    id: 'c6-card-3',
    type: 'info',
    icon: ArrowLeftRight,
    eyebrow: 'Sebelum vs. Sesudah',
    title: 'Tiga Contoh — Instruksi Ambigu di Sebelah Instruksi yang Jelas',
    body: [
      'Contoh 1 — draft balasan CS. Ambigu: "bikinin balasan buat pelanggan ini." Jelas: "bikinin draft balasan buat pelanggan yang komplain soal keterlambatan pengiriman, nada minta maaf tapi tetap profesional, sertakan solusi konkret (kompensasi ongkir atau jadwal ulang), panjang maksimal 3 paragraf."',
      'Contoh 2 — ringkasan laporan mingguan. Ambigu: "ringkas laporan penjualan minggu ini." Jelas: "ringkas laporan penjualan minggu ini jadi 5 poin: total penjualan, produk terlaris, produk paling lambat, perbandingan dengan minggu lalu, dan satu catatan kalau ada angka yang aneh — buat dibaca CEO dalam 2 menit."',
      'Contoh 3 — draft konten marketing. Ambigu: "bikin caption promosi buat produk baru." Jelas: "bikin 3 draft caption Instagram buat produk [nama produk], target audiens ibu rumah tangga usia 25-40, nada santai dan akrab bukan formal, sertakan satu call-to-action jelas, maksimal 100 kata tiap draft."',
      'Pola yang sama di ketiganya: konteks (situasi persisnya apa), nada (gimana rasanya harus terdengar), dan definisi "bagus" (bentuk, panjang, elemen wajib). Tiga hal ini yang paling sering hilang dari instruksi ambigu.',
    ],
  },
  {
    id: 'c6-card-4',
    type: 'multiple-choice',
    question:
      'Seorang staf CS mengetik "bikinin balasan buat pelanggan ini" ke AI, dapat hasil yang kelihatan generik, lalu menyimpulkan "AI-nya kurang bagus buat kerjaan ini." Apa yang lebih mungkin jadi akar masalahnya?',
    options: [
      'AI memang belum cukup canggih buat menangani komplain pelanggan',
      'Instruksinya nggak menyertakan konteks, nada, dan definisi "bagus" — jadi AI menebak semuanya sendiri, dan hasilnya generik karena instruksinya sendiri generik',
      'Staf itu perlu pelatihan customer service dulu sebelum pakai AI',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Instruksi yang cuma bilang "bikinin balasan" nggak kasih AI apa-apa buat kerja selain menebak. Ganti dengan instruksi yang menyertakan konteks komplainnya, nada yang diinginkan, dan bentuk hasil yang dianggap "bagus" — hampir selalu langsung lebih dekat ke yang dibutuhkan di percobaan pertama.',
    errorFeedback:
      'Belum tepat. Bukan soal kecanggihan AI atau keahlian staf-nya — instruksi yang generik menghasilkan output yang generik. AI cuma bisa kerja dari apa yang dikasih ke dia; kalau konteks, nada, dan definisi "bagus"-nya nggak disebut, dia menebak sendiri.',
  },
  {
    id: 'c6-card-5',
    type: 'yes-no',
    question:
      'Coba pikirkan instruksi yang biasanya Anda (atau tim) ketik ke AI buat kasus pakai yang Anda kunci di Bab 5. Apakah biasanya sudah menyertakan konteks, nada, dan definisi "bagus" — atau masih sesingkat "bikinin X buat Y"?',
    yesLabel: 'Sudah cukup detail — ada konteks, nada, dan definisi hasil yang bagus',
    noLabel: 'Masih sesingkat itu, belum pernah dipikirkan sedetail ini',
    feedbackYes:
      'Bagus — berarti bagian ini sudah jadi kebiasaan. Yang tersisa adalah memastikan itu konsisten dipakai semua orang yang menjalankan alur kerja ini, bukan cuma Anda sendiri.',
    feedbackNo:
      'Ini yang paling umum terjadi waktu baru mulai — dan kabar baiknya, ini yang paling gampang diperbaiki. Coba tulis ulang satu instruksi yang biasa Anda pakai, tambahkan konteks, nada, dan definisi "bagus" persis seperti tiga contoh tadi, lalu bandingkan hasilnya.',
  },
  {
    id: 'c6-card-6',
    type: 'info',
    icon: Sparkles,
    eyebrow: 'Kenapa Ini Bukan Sekali Jadi',
    title: 'Instruksi Jelas Bukan Ditulis Sekali Lalu Selesai — Terus Disempurnakan',
    body: [
      'Instruksi jelas di percobaan pertama nggak berarti langsung sempurna selamanya. Setelah beberapa kali pakai, Anda akan mulai lihat pola: bagian mana dari instruksi yang sering bikin hasilnya meleset, elemen apa yang ternyata perlu ditambahkan.',
      'Ini normal, dan justru itu tandanya alur kerja ini sedang benar-benar dipakai, bukan cuma dicoba sekali lalu ditinggalkan. Setiap kali instruksinya disempurnakan berdasarkan pengalaman nyata, hasilnya makin dekat ke yang dibutuhkan di percobaan pertama.',
      'Ini juga yang membedakan alur kerja yang dijaga dari eksperimen AI acak di Bab 1 — ada yang terus memperhatikan dan memperbaiki, bukan dipakai apa adanya sampai akhirnya ditinggalkan karena hasilnya nggak pernah cukup bagus.',
    ],
  },
  {
    id: 'c6-card-7',
    type: 'info',
    icon: Eye,
    eyebrow: 'Verifikasi, Bukan Telan Mentah-Mentah',
    title: 'Cek Manusia dari Bab 5 — Sekarang Persis Apa yang Harus Dicek',
    body: [
      'Bab 5 sudah menetapkan siapa yang membaca dan menyetujui hasil AI sebelum dipakai — itu wajib, nggak bisa dilewati. Sekarang lebih konkret: apa persisnya yang dicek waktu membaca draft itu?',
      'Tiga hal: fakta yang disebut benar (nama, tanggal, angka, kebijakan yang dikutip — bukan dikarang atau salah ingat), nada yang sesuai dengan situasi dan brand Anda, dan nggak ada informasi yang terdengar meyakinkan tapi sebenarnya nggak pernah Anda konfirmasi kebenarannya.',
      'Verifikasi bukan berarti menulis ulang semuanya dari nol setiap kali — itu namanya nggak menghemat waktu sama sekali. Verifikasi yang sehat itu membaca sekilas dengan fokus ke tiga hal tadi, lalu mengedit bagian yang perlu saja.',
    ],
  },
  {
    id: 'c6-card-8',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Jebakan yang Perlu Diwaspadai',
    title: 'Percaya Diri AI Bukan Jaminan Benar — Ini yang Bikin Verifikasi Gampang Terlewat',
    body: [
      'Ini bagian yang paling perlu diwaspadai: AI bisa terlihat sangat percaya diri sekalipun salah. Nggak ada nada ragu-ragu, nggak ada tanda "saya kurang yakin soal ini" — kalimatnya rapi dan meyakinkan, persis seperti waktu hasilnya memang benar.',
      'Ini beda dari kesalahan manusia, yang biasanya kelihatan dari raut wajah ragu atau kalimat "kayaknya sih..." AI nggak punya itu. Jadi kepercayaan diri dari hasilnya bukan jaminan kebenarannya — dua hal itu harus dipisahkan waktu membaca draft apapun.',
      'Ini kenapa langkah cek manusia nggak boleh cuma jadi formalitas cepat. Bukan soal nggak percaya AI, tapi soal tahu persis bahwa "kelihatan meyakinkan" dan "benar" itu dua hal yang berbeda, dan AI cuma bisa kasih yang pertama.',
    ],
  },
  {
    id: 'c6-card-9',
    type: 'multiple-choice',
    question:
      'Seorang admin membaca draft ringkasan laporan dari AI, kalimatnya rapi dan terdengar sangat yakin, jadi dia langsung pakai tanpa mencocokkan ke data asli. Ternyata salah satu angkanya salah. Apa yang seharusnya jadi pegangan admin itu?',
    options: [
      'Kalau kalimatnya terdengar yakin dan rapi, biasanya memang sudah benar',
      'Percaya diri dari cara AI menulis nggak ada hubungannya dengan benar-salahnya isi — verifikasi tetap harus jalan (di kasus ini, mencocokkan angka ke data asli) berapapun meyakinkannya kalimat itu terdengar',
      'Kesalahan ini murni salah AI-nya, bukan sesuatu yang bisa dicegah dari sisi admin',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. AI bisa terlihat sangat percaya diri sekalipun salah — itu sebabnya verifikasi nggak boleh diskip cuma karena hasilnya kedengaran meyakinkan. Buat kasus pakai kayak ringkasan laporan, verifikasinya konkret: cocokkan ke data asli, bukan sekadar dibaca sekilas.',
    errorFeedback:
      'Belum tepat. Kalimat yang meyakinkan bukan jaminan benar — itu justru jebakan paling umum. Verifikasi (di sini: mencocokkan angka ke data asli) tetap wajib jalan, dan itu ada di tangan orang yang membaca draft-nya, bukan cuma tanggung jawab AI.',
  },
  {
    id: 'c6-card-10',
    type: 'info',
    icon: ShieldCheck,
    eyebrow: 'Menangani Momen "AI-nya Salah"',
    title: 'Ini Pasti Akan Terjadi — Cara CEO Merespons yang Menentukan Nasib Alur Kerjanya',
    body: [
      'Cepat atau lambat, seseorang di tim akan menemukan hasil AI yang salah — fakta yang keliru, nada yang nggak pas, atau sesuatu yang terlewat. Ini bukan tanda alur kerjanya gagal. Ini hal yang pasti terjadi di alur kerja manapun yang benar-benar dipakai.',
      'Yang menentukan apakah tim terus pakai AI atau diam-diam berhenti karena takut disalahkan, bukan apakah kesalahan itu terjadi — tapi bagaimana CEO atau atasan meresponsnya waktu itu dilaporkan.',
      'Momen ini adalah ujian nyata dari jawaban jujur yang Anda janjikan ke tim di Bab 4: bahwa hasil AI tetap harus dicek manusia, dan tim tetap punya kendali terakhir. Kalau responsnya waktu kesalahan dilaporkan malah menyalahkan orangnya, janji itu langsung kelihatan kosong.',
    ],
  },
  {
    id: 'c6-card-11',
    type: 'yes-no',
    question:
      'Bayangkan skenario ini: Rina (atau siapapun yang menjalankan alur kerja Anda) datang bilang "AI-nya salah tadi, untung saya cek dulu sebelum dikirim." Reaksi pertama Anda lebih dekat ke yang mana?',
    yesLabel: '"Bagus, makasih udah dicek" — dan pengen tahu apa yang bikin salah',
    noLabel: 'Jujur, kemungkinan reaksi pertama saya lebih ke kesal atau kecewa dulu',
    feedbackYes:
      'Ini persis respons yang menjaga alur kerja tetap hidup. Laporan kesalahan itu bukti langkah verifikasi berjalan sesuai rencana — bukan bukti alur kerjanya gagal. Simpan pola pikir ini, karena momen kayak gini pasti akan datang lagi.',
    feedbackNo:
      'Jujur ke diri sendiri di sini penting, dan reaksi kesal itu manusiawi. Tapi kalau itu yang keluar duluan ke orangnya, pesan yang mereka tangkap adalah "lebih aman diam daripada lapor" — dan itu awal dari tim diam-diam berhenti pakai AI. Kartu berikutnya kasih cara meresponsnya lebih konstruktif.',
  },
  {
    id: 'c6-card-12',
    type: 'info',
    icon: Wrench,
    eyebrow: 'Cara Meresponsnya',
    title: 'Jangan Menghukum yang Melapor — Pakai Kesalahannya Buat Memperbaiki Instruksi',
    body: [
      'Dua aturan sederhana buat merespons momen "AI-nya salah." Pertama: jangan menghukum atau menyalahkan orang yang melaporkan kesalahan AI. Laporan itu justru sinyal bagus bahwa langkah verifikasi dari Bab 5 benar-benar berjalan, bukan cuma formalitas di atas kertas.',
      'Kedua: gunakan tiap kesalahan sebagai bahan memperbaiki instruksi atau konteks yang diberikan ke AI, bukan alasan berhenti pakai sama sekali. Tanyakan: instruksinya kurang jelas di bagian mana? Konteks apa yang harusnya disertakan dari awal supaya kesalahan ini nggak terulang?',
      'Ini menyambung langsung ke kartu soal instruksi tadi — kebanyakan kesalahan AI, waktu ditelusuri, akarnya balik ke instruksi yang kurang jelas, bukan AI-nya rusak. Satu kesalahan yang ditangani begini justru bikin instruksi berikutnya lebih kuat, bukan bikin alur kerjanya mundur.',
    ],
  },
  {
    id: 'c6-card-13',
    type: 'multiple-choice',
    question:
      'Seorang staf melaporkan AI salah menyebut kebijakan retur ke pelanggan, untung dia baca dulu sebelum dikirim. CEO-nya menjawab, "makanya hati-hati, jangan sampai kejadian lagi ya." Apa yang kurang pas dari respons ini?',
    options: [
      'Nggak ada yang kurang, itu respons yang wajar dan sudah cukup mengingatkan',
      'Respons ini terdengar seperti teguran ke orangnya, padahal dia baru saja membuktikan langkah verifikasi berjalan — dan nggak ada tindak lanjut soal instruksi apa yang perlu diperbaiki supaya kesalahan serupa nggak terulang',
      'CEO seharusnya langsung menghentikan pemakaian AI buat kasus pakai ini',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Kalimat itu kedengaran seperti teguran ke staf-nya, padahal dia justru melakukan hal yang benar dengan mengecek dan melaporkan. Yang seharusnya terjadi: apresiasi karena verifikasinya jalan, lalu tindak lanjut konkret memperbaiki instruksi atau konteks supaya kesalahan serupa nggak terulang.',
    errorFeedback:
      'Belum tepat. Masalahnya bukan soal harus berhenti pakai AI — kesalahan sesekali itu wajar. Masalahnya di nada responsnya yang terasa seperti teguran ke orang yang justru berhasil menangkap kesalahannya, dan nggak ada tindak lanjut memperbaiki instruksinya.',
  },
  {
    id: 'c6-card-14',
    type: 'info',
    icon: Radar,
    eyebrow: 'Sinyal Bahaya Balik ke Cara Manual',
    title: 'Tiga Tanda Momentum Mulai Hilang — Sebelum Alurnya Benar-Benar Berhenti Dipakai',
    body: [
      'Kalau Anda sudah menyelesaikan Modul 8, ini gaung dari bab field-execution di sana — tapi versi khusus AI. Ada tiga sinyal bahaya yang perlu dikenali lebih awal, bukan didiamkan sampai alurnya benar-benar mati.',
      'Pertama: orang mulai "lupa" pakai alur AI-nya — balik ke cara manual tanpa pernah bilang berhenti secara eksplisit, cuma pelan-pelan nggak dipakai lagi.',
      'Kedua, dan ini kebalikan dari verifikasi yang sehat: hasil AI dipakai tapi nggak pernah benar-benar dicek lagi. Bukan berhenti pakai AI-nya, tapi berhenti mengecek — persis pola staf CS di Bab 5 yang mulai langsung kirim tanpa baca ulang.',
      'Ketiga: alur kerja itu cuma dipakai kalau ditanya langsung oleh atasan — begitu Anda nggak nanya minggu itu, nggak dipakai. Ini tandanya alur kerjanya belum jadi kebiasaan, masih jadi sesuatu yang dikerjakan cuma buat "kelihatan patuh" di depan atasan.',
    ],
  },
  {
    id: 'c6-card-15',
    type: 'yes-no',
    question:
      'Setelah baca tiga sinyal tadi — orang "lupa" pakai, hasil dipakai tanpa dicek lagi, atau cuma dipakai kalau ditanya atasan — apakah ada satu (atau lebih) yang mulai kelihatan di alur kerja Anda sejauh ini?',
    yesLabel: 'Ada, salah satu (atau lebih) mulai kelihatan',
    noLabel: 'Belum ada, sejauh ini masih berjalan konsisten',
    feedbackYes:
      'Bagus Anda menangkapnya sekarang, bukan nanti setelah alurnya benar-benar berhenti dipakai. Sinyal ini butuh direspons segera — biasanya cukup dengan menanyakan langsung ke orangnya kenapa, bukan menegur, mirip cara merespons momen "AI-nya salah" tadi.',
    feedbackNo:
      'Bagus — tapi sinyal-sinyal ini biasanya muncul pelan-pelan, bukan mendadak. Tetap perhatikan terus sepanjang 2-4 minggu ke depan, terutama kalau rasa penasaran awal tim mulai reda.',
  },
  {
    id: 'c6-card-16',
    type: 'info',
    icon: Megaphone,
    eyebrow: 'Merayakan Kemenangan Kecil',
    title: 'Begitu Target dari Bab 5 Mulai Tercapai, Sebutkan Itu Terbuka — Jangan Disimpan Sendiri',
    body: [
      'Ingat target keberhasilan sederhana yang Anda tulis di Bab 5 — waktu lebih cepat, hasil lebih konsisten. Begitu itu mulai kelihatan tercapai, sekecil apapun, sebutkan itu secara terbuka ke tim. Bukan cuma disimpan CEO sendiri sebagai catatan pribadi.',
      'Ini nggak perlu jadi acara besar. Bisa sesederhana bilang di grup tim: "draft balasan CS sekarang rata-rata 5 menit, dari yang tadinya 15 menit — makasih semua yang udah konsisten pakai dan ngecek." Singkat, konkret, dan menyebut nama orang yang menjalankannya.',
      'Ini yang bikin momentum awal bertahan, bukan cuma hilang begitu rasa penasaran awal reda. Tanpa diakui terbuka, orang yang menjalankan alur kerja ini nggak pernah tahu usahanya kelihatan — dan itu salah satu jalan pelan-pelan menuju sinyal bahaya yang baru saja dibahas.',
    ],
  },
  {
    id: 'c6-card-17',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Waktunya Menuliskan Progres Nyata',
    title: 'Sekarang Giliran Anda — Apa yang Sudah Benar-Benar Terjadi',
    body: [
      'Bab ini sudah membahas empat hal: instruksi jelas, verifikasi yang sehat, cara menangani momen "AI-nya salah," dan sinyal bahaya balik ke cara manual. Sekarang giliran Anda menuliskan apa yang benar-benar terjadi di alur kerja Anda sejauh ini — bukan hipotetis lagi.',
      'Tiga hal yang perlu dituliskan: progres nyata sejauh ini (apa yang sudah berjalan baik), kesalahan AI yang sudah ditemukan dan bagaimana Anda menanganinya, dan sinyal bahaya kalau ada yang mulai terlihat.',
      'Kalau alur kerjanya belum sempat dijalankan sama sekali sejak Bab 5, itu pun jawaban yang sah — tulis itu apa adanya, dan jadikan momen ini titik mulai benar-benar menjalankannya minggu ini.',
    ],
  },
  {
    id: 'c6-card-18',
    type: 'reflection',
    eyebrow: 'Entri Keenam · Buku Kerja AI Adoption',
    prompt:
      'Tuliskan progres nyata alur kerja Anda sejauh ini: apa yang sudah berjalan baik, kesalahan AI apa yang sudah ditemukan dan bagaimana ditangani, dan sinyal bahaya (kalau ada) yang mulai terlihat.',
    fields: [
      {
        id: 'real-progress',
        label: 'Apa yang sudah berjalan baik dari alur kerja Anda sejauh ini?',
        placeholder:
          'Misalnya: draft balasan CS sudah dipakai konsisten 2 minggu, waktu bikinnya turun lumayan jauh dari sebelumnya...',
      },
      {
        id: 'mistakes-found',
        label: 'Kesalahan AI apa (kalau ada) yang sudah ditemukan, dan bagaimana Anda menanganinya?',
        placeholder:
          'Misalnya: AI sempat salah sebut kebijakan retur, langsung diperbaiki instruksinya dengan menambahkan kebijakan yang benar sebagai konteks tetap...',
      },
      {
        id: 'warning-signs',
        label: 'Sinyal bahaya apa (kalau ada) yang mulai Anda lihat — orang "lupa" pakai, hasil nggak dicek lagi, atau cuma dipakai kalau ditanya?',
        placeholder:
          'Misalnya: belum ada tanda-tanda itu, atau: mulai kelihatan draft dikirim tanpa dibaca ulang lagi minggu ini...',
      },
    ],
  },
  {
    id: 'c6-card-19',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 7',
    title: 'Sekarang Anda Sudah Punya Pengalaman Nyata Menjalankan Ini di Lapangan',
    body: [
      'Anda baru saja menuliskan progres nyata, kesalahan yang ditemukan, dan sinyal bahaya dari alur kerja yang benar-benar berjalan — bukan lagi rancangan di atas kertas dari Bab 5, tapi pengalaman lapangan yang sesungguhnya.',
      'Sekarang Anda sudah punya pengalaman nyata menjalankan alur kerja ini di lapangan. Bab berikutnya kita satukan semuanya jadi satu paket adopsi AI yang lengkap dan siap dipakai terus.',
    ],
  },
]
