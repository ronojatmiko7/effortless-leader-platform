import {
  NotebookPen,
  Map,
  User,
  Users,
  Building2,
  Scale,
  ClipboardCheck,
  Route,
  ArrowRight,
} from 'lucide-react'
import type { Card } from '../types/card'

export const chapter2Cards: Card[] = [
  {
    id: 'c2-card-1',
    type: 'info',
    icon: NotebookPen,
    eyebrow: 'Bab 2 · Menyambung dari Entri Pertama',
    title: 'Contoh yang Baru Saja Anda Tulis — Itu Titik Awal Peta Ini',
    body: [
      'Di akhir Bab 1, Anda menuliskan satu pemakaian AI nyata di bisnis Anda — entah masih jalan sampai sekarang, atau diam-diam sudah ditinggalkan. Simpan itu di kepala, karena bab ini akan langsung memakainya.',
      'Hampir semua contoh yang orang tulis di titik itu punya satu ciri yang sama: satu orang, akun sendiri, dipakai buat kerjaan sendiri, dan nggak ada orang lain yang tahu persis apa yang terjadi. Kemungkinan besar contoh Anda juga begitu.',
      'Itu bukan kebetulan. Itu nama sebuah level — level paling dasar dari tiga level pemakaian AI di bisnis. Bab ini akan memetakan ketiganya, biar Anda tahu persis bisnis Anda sekarang ada di mana.',
    ],
  },
  {
    id: 'c2-card-2',
    type: 'info',
    icon: Map,
    eyebrow: 'Peta Bab Ini',
    title: 'Tiga Level Pemakaian AI di Bisnis — Bukan Soal Canggih-Canggihan',
    body: [
      'Ada tiga level pemakaian AI di bisnis: Chat Individu, Alur Kerja Tim, dan Organisasi. Urutannya bukan soal AI-nya makin canggih di level yang lebih tinggi — modelnya bisa saja sama persis.',
      'Yang berubah antar level adalah tiga hal: seberapa banyak konteks dipakai bersama, siapa yang punya kontrol atas siapa-boleh-akses-apa, dan seberapa konsisten cara pakainya dari satu orang ke orang lain.',
      'Tiga kartu berikutnya membedah tiap level satu per satu — mulai dari yang paling sering jadi tempat bisnis SME nyangkut.',
    ],
  },
  {
    id: 'c2-card-3',
    type: 'info',
    icon: User,
    eyebrow: 'Level 1',
    title: 'Chat Individu — Satu Orang, Akun Sendiri, Nggak Ada yang Tahu',
    body: [
      'Satu orang, pakai akun pribadi (sering yang gratisan), buat tugas kecil miliknya sendiri — draft email, ringkas dokumen, cari ide. Nggak ada yang tahu itu terjadi selain orangnya sendiri.',
      'Berhenti begitu orangnya lupa, sibuk kerjaan lain, atau resign. Nggak ada catatan, nggak ada yang meneruskan, nggak ada yang bahkan sadar itu pernah ada.',
      'Sebagian besar bisnis SME, kalau jujur, ada di level ini — bahkan kalau ternyata ada beberapa orang berbeda di dalamnya yang sama-sama pakai AI, tapi masing-masing sendiri-sendiri tanpa saling tahu.',
    ],
  },
  {
    id: 'c2-card-4',
    type: 'yes-no',
    question:
      'Lihat lagi contoh yang Anda tulis di Entri Pertama tadi. Apakah itu cocok dengan gambaran Level 1 — satu orang, akun sendiri, nggak ada orang lain yang tahu persis apa yang terjadi?',
    yesLabel: 'Ya, persis begitu gambarannya',
    noLabel: 'Nggak — sudah dipakai lebih dari satu orang secara konsisten',
    feedbackYes:
      'Ini jawaban paling umum, dan bukan hal yang perlu dianggap gagal — Level 1 adalah titik awal yang wajar. Yang penting sekarang Anda tahu persis nama level itu, dan tahu apa yang harus berubah buat naik dari sana.',
    feedbackNo:
      'Menarik — berarti contoh Anda mungkin sudah lebih dekat ke Level 2. Simpan detail itu, karena kartu berikutnya akan membedah persis apa yang membedakan Level 2 dari Level 1.',
  },
  {
    id: 'c2-card-5',
    type: 'info',
    icon: Users,
    eyebrow: 'Level 2',
    title: 'Alur Kerja Tim — Dipakai Bersama, dengan Cara yang Sama',
    body: [
      'Satu kasus pakai berulang, dipakai bersama oleh lebih dari satu orang, dengan konteks dan instruksi yang konsisten — bukan tiap orang nebak-nebak caranya sendiri-sendiri.',
      'Contohnya: seluruh tim customer service pakai template prompt yang sama buat draft balasan ke pelanggan. Bukan satu orang punya cara sendiri, orang lain punya cara lain, dan hasilnya beda-beda tergantung siapa yang pegang.',
      'Mulai ada konsistensi di level ini — tapi biasanya masih belum ada kontrol akses formal atau catatan dari sisi manajemen soal siapa pakai apa. Itu yang akan dibereskan di Level 3.',
    ],
  },
  {
    id: 'c2-card-6',
    type: 'multiple-choice',
    question:
      'Tiga orang di tim yang sama sama-sama pakai AI tiap hari buat bikin draft laporan — tapi masing-masing pakai akun sendiri, prompt sendiri, dan gaya sendiri, tanpa pernah saling tahu caranya. Ini contoh level berapa?',
    options: [
      'Level 2, karena sudah lebih dari satu orang yang pakai',
      'Level 1, karena meski jumlah orangnya lebih dari satu, masing-masing masih terpisah tanpa konteks atau cara yang sama',
      'Level 3, karena semua orang di tim sudah terlibat',
    ],
    correctAnswer: 1,
    successFeedback:
      'Tepat. Jumlah orang bukan penentu levelnya. Yang menentukan adalah apakah ada konteks dan cara yang dipakai bersama. Tiga orang yang masing-masing jalan sendiri tetap tiga eksperimen Level 1 yang kebetulan terjadi di tim yang sama — bukan satu Level 2.',
    errorFeedback:
      'Belum tepat. Ini tetap Level 1, meski jumlah orangnya lebih dari satu — karena masing-masing masih terpisah, nggak ada konteks atau cara yang sama-sama dipakai. Level 2 baru mulai kalau ada satu kasus pakai dengan cara yang konsisten dipakai bersama.',
  },
  {
    id: 'c2-card-7',
    type: 'info',
    icon: Building2,
    eyebrow: 'Level 3',
    title: 'Organisasi — Kontrol, Ruang Kerja Bersama, dan Otomasi Lintas Tugas',
    body: [
      'Akun bisnis (seperti Claude Team atau Enterprise) dengan admin yang mengatur siapa boleh akses apa, ruang kerja bersama buat pekerjaan berulang lintas tim, dan kemampuan mengotomasi pekerjaan yang melibatkan banyak file dan tugas sekaligus (seperti Claude Cowork) — bukan cuma chat satu-satu.',
      'Di level ini, kemampuan nggak lagi nempel di satu-dua orang. Kalau satu orang resign, alur kerjanya tetap ada, karena konteks dan aksesnya ada di level organisasi, bukan cuma di riwayat chat pribadi seseorang.',
      'Ini level yang bikin AI beneran jadi bagian dari cara bisnis berjalan sehari-hari — bukan kebiasaan personal segelintir orang yang kebetulan rajin.',
    ],
  },
  {
    id: 'c2-card-8',
    type: 'info',
    icon: Scale,
    eyebrow: 'Titik yang Sering Salah Paham',
    title: 'Naik Level Bukan Soal "Pakai AI Lebih Banyak"',
    body: [
      'Ini titik yang paling sering bikin CEO salah kira: mengira makin banyak orang di bisnisnya yang pakai AI tiap hari, berarti bisnisnya makin tinggi levelnya.',
      'Salah. Bisnis bisa saja punya sepuluh orang yang pakai AI tiap hari, dan tetap ada di Level 1 sepenuhnya — kalau kesepuluh orang itu masing-masing jalan sendiri-sendiri, tanpa koordinasi, tanpa konteks yang sama, tanpa ada yang tahu siapa pakai apa.',
      'Naik level bukan soal volume pemakaian. Itu soal geser dari eksperimen personal ke sesuatu yang punya konteks bersama, kontrol, dan konsistensi. Sepuluh eksperimen acak yang berjalan paralel tetap sepuluh eksperimen acak — bukan satu alur kerja organisasi.',
    ],
  },
  {
    id: 'c2-card-9',
    type: 'multiple-choice',
    question:
      'Sebuah bisnis SME bangga karena "hampir semua karyawan sudah pakai AI." Setelah ditelusuri, ternyata tiap orang pakai akun gratisan masing-masing, buat kebutuhan masing-masing, tanpa ada template atau instruksi bersama. Bisnis ini paling tepat ada di level mana?',
    options: [
      'Level 3, karena partisipasinya sudah menyeluruh',
      'Level 2, karena jumlah pemakainya sudah banyak',
      'Level 1, karena banyaknya orang yang pakai tidak sama dengan adanya konteks, kontrol, atau konsistensi bersama',
    ],
    correctAnswer: 2,
    successFeedback:
      'Tepat. Partisipasi yang luas tapi terpisah-pisah tetap Level 1. Yang membuat naik level bukan berapa banyak orang yang pakai, tapi apakah pemakaian itu punya konteks, kontrol, dan konsistensi yang dipakai bersama.',
    errorFeedback:
      'Belum tepat. Ini tetap Level 1, walau kelihatan ramai partisipasinya — karena tiap orang masih jalan sendiri-sendiri tanpa konteks atau cara yang sama. Jumlah pemakai bukan penentu level.',
  },
  {
    id: 'c2-card-10',
    type: 'sort-list',
    question: 'Urutkan tiga level pemakaian AI dari yang paling dasar ke yang paling matang:',
    items: [
      'Organisasi — akun bisnis dengan admin, ruang kerja bersama, dan otomasi lintas tugas',
      'Chat Individu — satu orang, akun sendiri, nggak ada yang tahu',
      'Alur Kerja Tim — satu kasus pakai dipakai bersama dengan cara yang konsisten',
    ],
    correctAnswer: [
      'Chat Individu — satu orang, akun sendiri, nggak ada yang tahu',
      'Alur Kerja Tim — satu kasus pakai dipakai bersama dengan cara yang konsisten',
      'Organisasi — akun bisnis dengan admin, ruang kerja bersama, dan otomasi lintas tugas',
    ],
    successFeedback:
      'Tepat. Chat Individu ke Alur Kerja Tim ke Organisasi — tiap naik level, yang bertambah bukan "jumlah AI yang dipakai," tapi konteks bersama, kontrol, dan konsistensi.',
    errorFeedback:
      'Belum tepat. Urutannya Chat Individu dulu (satu orang sendiri), lalu Alur Kerja Tim (dipakai bersama dengan cara konsisten), baru Organisasi (kontrol dan ruang kerja di level bisnis).',
  },
  {
    id: 'c2-card-11',
    type: 'info',
    icon: ClipboardCheck,
    eyebrow: 'Waktunya Jujur',
    title: 'Level Mana yang Benar-Benar Terjadi — Bukan Level yang Anda Harap',
    body: [
      'Sekarang giliran bisnis Anda. Bukan level yang Anda harap sudah tercapai, dan bukan level yang kelihatan bagus kalau diceritakan ke orang lain — level yang benar-benar terjadi hari ini, kalau ditelusuri jujur satu per satu.',
      'Cek pelan-pelan: apakah pemakaian AI di bisnis Anda cuma ada di kepala satu-dua orang (Level 1)? Apakah sudah ada satu kasus pakai dengan cara yang sama dipakai lebih dari satu orang (Level 2)? Atau sudah ada kontrol dan ruang kerja di level organisasi (Level 3)?',
      'Kalau jawabannya campuran — misalnya ada satu tim yang sudah Level 2 tapi sisanya masih Level 1 — itu wajar. Levelkan bisnis Anda dari titik yang paling umum terjadi, bukan dari pengecualian terbaiknya.',
    ],
  },
  {
    id: 'c2-card-12',
    type: 'reflection',
    eyebrow: 'Entri Kedua · Buku Kerja AI Adoption',
    prompt:
      'Jujur, bisnis Anda sekarang ada di level berapa — 1, 2, atau 3? Dan kenapa Anda bilang begitu?',
    fields: [
      {
        id: 'current-level',
        label: 'Bisnis Anda sekarang ada di level berapa? (1, 2, atau 3)',
        placeholder: 'Misalnya: Level 1',
      },
      {
        id: 'why-this-level',
        label: 'Kenapa Anda bilang begitu — apa yang benar-benar terjadi hari ini?',
        placeholder:
          'Misalnya: masih cuma dua orang admin yang diam-diam pakai AI sendiri-sendiri, belum ada template atau cara yang sama...',
      },
    ],
  },
  {
    id: 'c2-card-13',
    type: 'info',
    icon: Route,
    eyebrow: 'Preview Bab 3-8',
    title: 'Jalan dari Level 1 ke Level 2 — Bukan Lompat Langsung ke Level 3',
    body: [
      'Sekarang Anda tahu ada di level mana. Bab-bab berikutnya nggak akan langsung menyuruh Anda "naik ke Level 3" — itu jalan pintas yang biasanya gagal karena fondasinya belum ada.',
      'Bab 3-4 menyiapkan fondasi dulu: Bab 3 bantu Anda memilih kasus pakai yang tepat (bukan asal yang paling menarik perhatian), Bab 4 bahas batasan data, keamanan, dan kepercayaan tim sebelum naik level.',
      'Baru setelah itu, Bab 5-8 benar-benar menjalankan satu alur kerja nyata dengan Claude for Business, melatih tim memakainya, dan menginstal itu jadi kebiasaan permanen — jalan paling realistis dari Level 1 ke Level 2, bukan lompatan langsung ke Level 3 tanpa fondasi.',
    ],
  },
  {
    id: 'c2-card-14',
    type: 'info',
    icon: ArrowRight,
    eyebrow: 'Ke Bab 3',
    title: 'Sekarang Anda Sudah Tahu Ada di Level Mana',
    body: [
      'Anda baru saja menulis, jujur, level pemakaian AI bisnis Anda hari ini — bukan level yang diharapkan, tapi level yang benar-benar terjadi.',
      'Bab berikutnya bantu Anda memilih kasus pakai yang benar-benar layak jadi langkah pertama naik level — bukan sekadar yang paling menarik perhatian.',
    ],
  },
]
