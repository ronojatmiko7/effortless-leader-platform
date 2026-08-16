import {
  Eye,
  MessageSquare,
  Search,
  Layers,
  BarChart2,
  Users,
  BookOpen,
  Target,
  Star,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter6Cards: Card[] = [
  {
    id: 'c6-card-1',
    type: 'info',
    icon: Eye,
    eyebrow: 'Bab 6 · Alat Seleksi Berbasis Kompetensi',
    title: 'Anda Sudah Tahu Akar Masalahnya — Sekarang Saatnya Bangun Alat yang Benar-benar Menguji',
    body: [
      'Di Bab 5, Anda mendiagnosis rekrutmen dari tiga lensa: tidak ada kriteria yang disepakati (Lensa 1), kriteria ada tapi pertanyaan interview-nya generik dan tidak menggali bukti (Lensa 2), atau pertanyaannya sudah relevan tapi penilaiannya tidak konsisten antar pewawancara (Lensa 3). Anda mencatat lensa mana yang dominan di kasus Anda. Itu bukan latihan analisis — itu diagnosis yang menentukan alat apa yang perlu dibangun.',
      'Bab ini kasih Anda alat konkretnya: Behavioral Event Interviewing (BEI) dan rubrik seleksi berbasis kompetensi. Dua alat ini dirancang untuk membereskan Lensa 2 dan Lensa 3 secara langsung — pertanyaan yang benar-benar menggali bukti perilaku nyata, dan rubrik yang membuat penilaian bisa dibandingkan apple-to-apple di seluruh tim pewawancara.',
      'Tapi dua alat ini hanya bisa bekerja kalau Lensa 1 sudah selesai — ada model kompetensi dan tingkat kemahiran yang jelas dari Bab 3 dan 4. Kalau Lensa 1 masih berlaku, kembali dulu ke sana. Bab ini mengasumsikan fondasi itu sudah ada.',
    ],
  },
  {
    id: 'c6-card-2',
    type: 'info',
    icon: MessageSquare,
    eyebrow: 'Behavioral Event Interviewing',
    title: '"Ceritakan Tentang Diri Anda" Bukan BEI — Ini Bedanya',
    body: [
      'Kebanyakan pertanyaan interview berjalan di dua pola: hipotetis ("apa yang akan Anda lakukan kalau ada anggota tim yang tidak perform?") atau generik ("apa kelebihan dan kekurangan Anda," "ceritakan tentang diri Anda," "kenapa mau kerja di sini?"). Dua pola itu punya satu kelemahan yang sama: kandidat bisa menjawabnya dengan baik tanpa pernah punya pengalaman nyata yang relevan.',
      'Behavioral Event Interviewing berjalan dari premis yang berbeda: perilaku nyata di masa lalu adalah prediktor terbaik perilaku di masa depan. Kandidat bisa mengarang jawaban hipotetis yang terdengar sempurna — tapi tidak bisa mengarang pengalaman yang belum pernah mereka jalani. Kalau Anda minta contoh nyata dari situasi spesifik, yang tidak punya pengalaman itu akan ketahuan — jawabannya tetap umum, tidak ada detail yang bisa diperdalam, atau ceritanya tidak nyambung.',
      'Itu kenapa BEI meminta kandidat menceritakan situasi nyata yang benar-benar terjadi — bukan "kalau saya menghadapi situasi itu, saya akan..." tapi "ceritakan satu situasi di mana Anda benar-benar menghadapi..." Perbedaan satu kata itu yang memisahkan bukti dari klaim.',
    ],
  },
  {
    id: 'c6-card-3',
    type: 'yes-no',
    question:
      'Di proses rekrutmen Anda sekarang, jenis pertanyaan mana yang lebih sering muncul di wawancara — yang meminta kandidat menceritakan situasi nyata yang pernah mereka alami, atau yang meminta mereka menggambarkan apa yang akan mereka lakukan?',
    yesLabel: 'Lebih sering hipotetis atau generik — "apa yang akan Anda lakukan" atau "ceritakan tentang diri Anda"',
    noLabel: 'Lebih sering behavioral — minta contoh nyata dari situasi yang benar-benar terjadi',
    feedbackYes:
      'Itu yang terjadi di kebanyakan proses rekrutmen — dan itu persis Lensa 2 dari Bab 5: pertanyaan yang tidak benar-benar menggali bukti kompetensi. BEI adalah teknik yang mengubah itu. Bukan memperketat pertanyaannya satu per satu, tapi mengubah pola pertanyaan dari hipotetikal ke bukti perilaku nyata.',
    feedbackNo:
      'Kalau memang begitu, Anda sudah setengah jalan. Yang masih perlu dipastikan: apakah pertanyaan behavioral itu diturunkan dari kompetensi spesifik yang dibutuhkan perannya, dan apakah ada rubrik yang membuat jawabannya bisa dinilai secara konsisten oleh semua pewawancara. Itu yang akan dibangun di bab ini.',
  },
  {
    id: 'c6-card-4',
    type: 'info',
    icon: Search,
    eyebrow: 'Struktur Pertanyaan BEI',
    title: 'Satu Pertanyaan Pembuka — dan Gali Terus sampai Dapat Gambaran yang Lengkap',
    body: [
      'Pertanyaan BEI tidak berdiri sendiri. Pola dasarnya: satu pertanyaan pembuka yang meminta kandidat menceritakan satu situasi nyata terkait kompetensi yang ingin Anda uji, diikuti pertanyaan lanjutan yang menggali sampai dapat gambaran lengkap. Gambaran yang lengkap artinya Anda tahu: situasi apa yang dihadapi, apa yang kandidat lakukan secara spesifik — bukan "tim kami melakukan," tapi persis tindakan yang dia ambil secara personal — dan apa hasilnya.',
      'Dua pertanyaan lanjutan yang paling berguna: "Anda sendiri — secara spesifik — melakukan apa?" (berguna ketika kandidat menjawab dengan "kami" dan tidak jelas apa peran personalnya), dan "Apa yang akhirnya terjadi?" (berguna ketika ceritanya berhenti di tindakan tanpa ada hasil konkret yang bisa dinilai).',
      'Satu tanda bahaya yang perlu dikenali: kalau jawabannya masih umum setelah pertanyaan lanjutan pertama — "ya, saya biasanya menangani situasi seperti itu dengan..." atau "kalau ada situasi seperti itu, saya selalu coba untuk..." — gali ulang secara langsung: "Boleh cerita satu contoh nyata yang benar-benar Anda alami?" Jawaban yang masih hipotetis setelah diprobe dua kali adalah data yang berguna juga — artinya pengalaman nyatanya tidak ada atau sangat terbatas.',
    ],
  },
  {
    id: 'c6-card-5',
    type: 'info',
    icon: Layers,
    eyebrow: 'Menurunkan Pertanyaan BEI dari Model Kompetensi',
    title: 'Bukan "Pertanyaan Interview yang Bagus" — tapi Pertanyaan yang Diturunkan dari Kompetensi Spesifik',
    body: [
      'Model kompetensi dari Bab 3 adalah titik mulai untuk menyusun bank pertanyaan BEI. Untuk tiap kompetensi kunci di peran yang Anda rekrut, rancang satu pertanyaan pembuka yang meminta contoh nyata terkait kompetensi itu. Bukan pertanyaan generik yang "kelihatannya relevan" — tapi pertanyaan yang tidak bisa dijawab dengan baik kecuali kandidat pernah benar-benar menghadapi situasi yang membutuhkan kompetensi itu.',
      'Cara praktisnya: ambil deskripsi kompetensi fungsional atau kepemimpinan dari Bab 3, dan tanya diri sendiri — "situasi nyata seperti apa yang akan dihadapi orang dengan kompetensi ini? Situasi apa yang tidak bisa dihadapi dengan baik tanpa kompetensi itu?" Dari sana, rumuskan pertanyaan pembukanya: "Ceritakan satu situasi di mana Anda harus [deskripsi singkat situasi yang membutuhkan kompetensi itu] — apa yang terjadi, apa yang Anda lakukan secara spesifik, dan apa hasilnya?"',
      'Hasilnya adalah bank pertanyaan yang langsung terhubung ke model kompetensi perannya — bukan daftar pertanyaan standar yang bisa dipakai di wawancara jabatan apa pun. Kalau bank pertanyaan BEI Anda bisa dipakai untuk merekrut sales manager sekaligus staff admin tanpa modifikasi apa pun, pertanyaannya belum cukup spesifik.',
    ],
  },
  {
    id: 'c6-card-6',
    type: 'multiple-choice',
    question:
      'Seorang manajer rekrutmen mewawancarai kandidat untuk posisi supervisor produksi. Dia mengajukan pertanyaan ini: "Kalau ada dua anggota tim Anda yang konflik sampai mengganggu produktivitas, bagaimana cara Anda mengatasinya?" Pertanyaan ini masuk kategori apa?',
    options: [
      'Pertanyaan BEI yang baik — menguji kompetensi kepemimpinan yang relevan dengan peran supervisor',
      'Pertanyaan hipotetis — meminta kandidat menggambarkan apa yang akan dilakukan, bukan contoh nyata yang pernah terjadi',
      'Pertanyaan yang sudah cukup spesifik karena menyebut situasi konflik yang konkret',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini pertanyaan hipotetis — "bagaimana cara Anda mengatasinya?" meminta kandidat menggambarkan rencana atau pendekatan idealnya, bukan cerita nyata yang pernah terjadi. Versi BEI-nya: "Ceritakan satu situasi di mana Anda pernah menghadapi konflik antara dua anggota tim yang sampai mengganggu produktivitas — apa yang Anda lakukan, dan apa hasilnya?" Perbedaannya: satu meminta gambaran ideal, satu meminta bukti perilaku nyata.',
    errorFeedback:
      'Belum tepat. Perhatikan frasanya: "bagaimana cara Anda mengatasinya?" — itu meminta kandidat menggambarkan pendekatan idealnya, bukan menceritakan apa yang pernah benar-benar terjadi. Kandidat yang belum pernah handle konflik tim pun bisa menjawab pertanyaan itu dengan sangat meyakinkan — karena tidak ada yang dituntut membuktikan pengalaman nyata. Itulah yang membedakannya dari pertanyaan BEI.',
  },
  {
    id: 'c6-card-7',
    type: 'info',
    icon: BarChart2,
    eyebrow: 'Rubrik Seleksi',
    title: 'Skor 1–4 yang Dipetakan ke Tingkat Kemahiran — Supaya Penilaian Bisa Dibandingkan Apple-to-Apple',
    body: [
      'Pertanyaan BEI menghasilkan jawaban. Tapi tanpa rubrik, dua pewawancara yang mendengar jawaban yang sama bisa tetap sampai di kesimpulan berbeda — persis Lensa 3 dari Bab 5. Rubrik seleksi adalah standar penilaian yang membuat jawaban BEI bisa dibandingkan secara konsisten, baik antar kandidat maupun antar pewawancara.',
      'Skala yang paling mudah dipakai: skor 1–4 yang dipetakan langsung ke tingkat kemahiran dari Bab 4. Skor 1: jawaban menunjukkan kemampuan di bawah level Dasar yang dibutuhkan — tidak ada contoh nyata yang relevan, atau contohnya ada tapi jauh di bawah standar minimum. Skor 2: jawaban menunjukkan level Dasar — ada contoh nyata, tapi tindakannya masih bergantung pada panduan atau pengawasan. Skor 3: jawaban menunjukkan kemampuan di level yang dibutuhkan peran ini — contoh nyata yang solid, tindakannya mandiri, hasilnya sesuai standar. Skor 4: jawaban menunjukkan kemampuan di atas level yang dibutuhkan — contoh nyata yang melampaui situasi standar, dengan judgment yang lebih tinggi dari minimum yang diperlukan.',
      'Skor 3 adalah standar yang dibutuhkan — bukan skor 4. Menetapkan "harus dapat skor 4 di semua kompetensi" akan menyempitkan pool kandidat tanpa alasan yang valid, persis seperti jebakan yang dibahas di Bab 4 tentang tidak semua kompetensi butuh level Ahli.',
    ],
  },
  {
    id: 'c6-card-8',
    type: 'info',
    icon: Users,
    eyebrow: 'Praktik Panel',
    title: 'Nilai Sendiri Dulu — Baru Diskusi. Urutan Itu yang Membuat Panel Berfungsi',
    body: [
      'Kalau rubrik sudah ada, masih ada satu risiko yang sering dilewatkan: sebelum diskusi dimulai, satu suara yang dominan — "menurut saya kandidat ini bagus banget" — bisa menggeser penilaian orang lain sebelum mereka sempat menilai sendiri secara independen. Itu bukan soal niat, tapi efek psikologis yang nyata: ketika seseorang sudah mengumumkan penilaiannya, orang lain cenderung menyesuaikan, bukan mempertahankan. Hasilnya bukan konsensus yang valid — tapi echo dari satu suara.',
      'Cara mencegahnya: tiap pewawancara mengisi skor di rubrik masing-masing sebelum diskusi dimulai. Masing-masing punya catatan tertulis tentang contoh nyata dari jawaban kandidat yang jadi dasar skor mereka — bukan kesan umum. Baru setelah semua skor sudah diisi, pertemuan dimulai dan perbedaan dibahas.',
      'Kalau ada perbedaan skor yang signifikan, diskusinya bukan "siapa yang benar" — tapi "bukti apa yang masing-masing punya?" Seseorang yang memberi skor 2 harus bisa menyebut aspek jawaban kandidat yang jadi dasarnya. Seseorang yang memberi skor 4 juga harus bisa menyebut bukti konkret. Kalau tidak ada bukti konkret yang bisa disebut, skornya belum berdasarkan rubrik — masih berdasarkan kesan.',
    ],
  },
  {
    id: 'c6-card-9',
    type: 'yes-no',
    question:
      'Di proses panel interview Anda sekarang — kalau ada panel — apakah diskusi pasca-wawancara dimulai sebelum tiap pewawancara sempat mencatat penilaian sendiri-sendiri, atau masing-masing mengisi penilaian dulu baru berdiskusi?',
    yesLabel: 'Langsung diskusi bareng — semua berbagi kesan bersama sebelum ada yang mencatat penilaian sendiri',
    noLabel: 'Tiap pewawancara isi penilaian sendiri dulu, baru diskusi bersama setelahnya',
    feedbackYes:
      'Diskusi langsung terasa lebih efisien — tapi itulah kondisi yang paling rentan terhadap suara yang dominan. Kalau seseorang bilang "menurut saya dia bagus" sebelum orang lain sempat mencatat penilaian masing-masing, diskusi yang menyusul bukan lagi perbandingan penilaian independen — tapi validasi dari kesan pertama yang sudah disuarakan. Panel scoring yang efektif butuh urutan yang ketat: nilai dulu sendiri-sendiri, baru diskusi.',
    feedbackNo:
      'Itu urutan yang benar. Yang perlu dipastikan selanjutnya: apakah penilaian itu berdasarkan bukti konkret dari jawaban kandidat — atau masih berdasarkan kesan umum? Rubrik dengan skor 1–4 adalah yang memastikan catatan itu cukup konkret untuk bisa dibandingkan dan diperdebatkan dengan data, bukan intuisi.',
  },
  {
    id: 'c6-card-10',
    type: 'info',
    icon: BookOpen,
    eyebrow: 'Contoh Kerja',
    title: 'Sales Manager di Bisnis Distribusi B2B — Kita Bangun Bank BEI dan Rubriknya',
    body: [
      'Kita ambil kasus yang sama dari Bab 5: Sales Manager di bisnis distribusi B2B — rekrutmen yang gagal karena tidak ada kriteria yang jelas, pertanyaan interview yang generik, dan penilaian yang bergantung pada konsensus panel bahwa "orangnya kelihatan bagus." Ketiga lensa berlaku sekaligus.',
      'Sekarang kita asumsikan Lensa 1 sudah diselesaikan — model kompetensi sudah ada. Dari contoh di Bab 3, kita tahu tiga kompetensi kunci untuk peran ini: (1) Fungsional — analisis pipeline dan coaching teknik penjualan ke tim. (2) Kepemimpinan — memberi feedback berbasis data kinerja, bukan perasaan; mengambil keputusan realokasi target atau akun di situasi tekanan. (3) Inti — integritas dalam pelaporan angka penjualan.',
      'Dari tiga kompetensi itu, kita rancang bank pertanyaan BEI — masing-masing satu pertanyaan pembuka plus follow-up probe — dan satu contoh rubrik untuk kompetensi yang paling krusial.',
    ],
  },
  {
    id: 'c6-card-11',
    type: 'info',
    icon: Target,
    eyebrow: 'Contoh Kerja — Bank Pertanyaan BEI',
    title: 'Tiga Pertanyaan BEI untuk Sales Manager — Masing-masing Terikat ke Satu Kompetensi',
    body: [
      'Kompetensi 1 — Coaching teknik penjualan. Pertanyaan pembuka: "Ceritakan satu situasi di mana ada anggota tim sales Anda yang angka penjualannya konsisten di bawah target lebih dari satu bulan — apa yang Anda lakukan, dan apa yang akhirnya terjadi?" Follow-up probes: "Anda sendiri — secara spesifik — melakukan apa dengan sales rep itu?" dan "Bagaimana Anda tahu intervensi itu yang paling tepat waktu itu?"',
      'Kompetensi 2 — Feedback berbasis data kinerja. Pertanyaan pembuka: "Ceritakan situasi di mana Anda harus memberikan feedback ke anggota tim yang tidak perform — tapi Anda tahu feedback yang sebelumnya pernah diberikan tidak pernah efektif. Apa yang Anda lakukan berbeda?" Follow-up: "Apa data atau informasi spesifik yang Anda gunakan waktu memberikan feedback itu?"',
      'Kompetensi 3 — Keputusan di situasi tekanan. Pertanyaan pembuka: "Ceritakan satu situasi di mana Anda harus mengambil keputusan soal alokasi target atau akun di antara anggota tim, di saat yang sama ada tekanan dari atas untuk hasil yang lebih cepat. Apa yang Anda putuskan, dan apa dasarnya?" Follow-up: "Bagaimana Anda handle anggota tim yang tidak setuju dengan keputusan itu?"',
    ],
  },
  {
    id: 'c6-card-12',
    type: 'info',
    icon: Star,
    eyebrow: 'Contoh Kerja — Rubrik Seleksi',
    title: 'Skor 1–4 untuk "Coaching Teknik Penjualan" — Dipetakan ke Tingkat Kemahiran dari Bab 4',
    body: [
      'Skor 1 — di bawah Dasar: tidak ada contoh nyata yang relevan, atau contohnya ada tapi tindakannya sebatas "saya kasih dia motivasi" atau "saya minta dia lebih berusaha" — tanpa ada intervensi konkret. Tidak ada bukti bahwa dia pernah menginvestigasi akar masalah underperformance anggota timnya. Skor 2 — Dasar: punya contoh nyata, tapi intervensinya terbatas — minta laporan harian, tambah pengawasan, atau langsung eskalasi ke atasannya. Belum ada coaching yang menggali skill gap atau mengajarkan teknik yang spesifik.',
      'Skor 3 — level yang dibutuhkan peran ini: contoh nyata di mana dia mengidentifikasi secara spesifik skill gap atau hambatan yang dihadapi sales rep — misalnya "dia bagus di prospecting tapi gagal di closing, jadi kami drilling teknik closing satu-satu selama dua minggu." Ada tindakan coaching yang konkret, ada tindak lanjut, dan ada perubahan kinerja yang bisa dilaporkan.',
      'Skor 4 — di atas level yang dibutuhkan: semua yang ada di skor 3, plus ada refleksi tentang apa yang dia pelajari dari kasus itu yang dia terapkan ke seluruh tim atau ke sistem coaching yang ada — bukan hanya diselesaikan per individu, tapi dijadikan pembelajaran yang lebih sistematis.',
    ],
  },
  {
    id: 'c6-card-13',
    type: 'multiple-choice',
    question:
      'Seorang kandidat Sales Manager menjawab pertanyaan "Ceritakan situasi di mana ada anggota tim sales Anda yang angka penjualannya terus di bawah target" dengan jawaban ini: "Ada satu sales rep yang selalu di bawah target enam bulan berturut-turut. Saya temui dia satu-satu dan tanya apa yang bikin dia sulit. Ternyata masalahnya ada di tahap negosiasi — dia selalu memberikan diskon terlalu awal sebelum pelanggan benar-benar keberatan soal harga. Kami drilling ulang teknik negosiasi khusus dua kali seminggu selama sebulan. Bulan berikutnya dia mulai konsisten di atas 80% target." Di rubrik skor 1–4 untuk kompetensi "coaching teknik penjualan," jawaban ini ada di skor berapa?',
    options: [
      'Skor 2 — tindakannya masih terbatas pada pengawasan dan pelaporan tambahan',
      'Skor 3 — mengidentifikasi skill gap spesifik, intervensi konkret, ada perubahan kinerja yang terukur',
      'Skor 4 — melampaui level yang dibutuhkan, sudah diterapkan ke seluruh sistem tim',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Ini skor 3. Kandidat mengidentifikasi skill gap yang spesifik (memberikan diskon terlalu awal sebelum pelanggan keberatan), merancang intervensi konkret (drilling teknik negosiasi dua kali seminggu selama sebulan), dan bisa melaporkan perubahan kinerja yang terukur (di atas 80% target bulan berikutnya). Belum skor 4 karena tidak ada bukti bahwa pembelajaran ini dijadikan sistem atau diterapkan ke seluruh tim — ini masih diselesaikan per individu.',
    errorFeedback:
      'Belum tepat. Perhatikan tiga elemen kunci yang ada di jawaban ini: (1) identifikasi skill gap yang spesifik — bukan "dia kurang semangat" tapi "memberikan diskon terlalu awal sebelum pelanggan keberatan soal harga," (2) intervensi coaching yang konkret — bukan "saya motivasi dia" tapi "drilling teknik negosiasi dua kali seminggu selama sebulan," dan (3) ada perubahan kinerja yang bisa dilaporkan. Tiga elemen itu adalah anchor skor 3. Skor 4 baru berlaku kalau ada bukti bahwa ini dijadikan sistem untuk seluruh tim, bukan diselesaikan per individu.',
  },
  {
    id: 'c6-card-14',
    type: 'reflection',
    eyebrow: 'Entri Keenam · Buku Kerja Job Architecture',
    prompt:
      'Sekarang Anda sudah punya kerangka BEI dan rubrik seleksi. Bawa ke peran yang Anda rekrut sekarang — dan buat draf pertama alat seleksinya.',
    fields: [
      {
        id: 'bei-question',
        label: 'Tulis satu pertanyaan BEI (yang meminta contoh nyata) untuk kompetensi paling krusial di peran yang Anda rekrut sekarang.',
        placeholder:
          'Misalnya: "Ceritakan satu situasi di mana Anda harus [deskripsi situasi terkait kompetensi krusial peran Anda] — apa yang terjadi, apa yang Anda lakukan secara spesifik, dan apa hasilnya?"...',
      },
      {
        id: 'rubrik-skor',
        label: 'Seperti apa jawaban yang akan dapat skor 4 (di atas standar) vs skor 1 (jauh di bawah standar) untuk kompetensi itu?',
        placeholder:
          'Skor 4: contoh nyata di mana kandidat [deskripsi tindakan atau hasil yang melampaui standar peran]... Skor 1: tidak ada contoh nyata yang relevan, atau contohnya ada tapi [deskripsi jawaban yang jauh di bawah standar minimum peran]...',
      },
    ],
  },
  {
    id: 'c6-card-15',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 7',
    title: 'Alat Seleksinya Sekarang Ada — Bab Berikutnya Menyatukan Semuanya',
    body: [
      'Anda baru saja membangun dua alat yang selama ini hilang dari proses rekrutmen Anda: bank pertanyaan BEI yang diturunkan dari model kompetensi peran spesifik, dan rubrik seleksi yang membuat jawaban kandidat bisa dinilai secara konsisten oleh seluruh tim pewawancara — bukan bergantung pada siapa yang paling vokal di diskusi.',
      'Dua alat ini langsung membereskan Lensa 2 dan Lensa 3 dari Bab 5. Kalau Lensa 2 yang dominan di kasus Anda — pertanyaan interview-nya generik — bank BEI yang Anda buat di Entri Keenam adalah penggantinya. Kalau Lensa 3 yang dominan — penilaian tidak konsisten — rubrik skor 1–4 adalah standar yang diperlukan.',
      'Alat seleksinya sekarang ada. Bab berikutnya menyatukan semuanya — model kompetensi, tingkat kemahiran, dan alat seleksi ini — jadi satu paket arsitektur jabatan yang lengkap untuk peran Anda.',
    ],
  },
]
