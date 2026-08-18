import { Hand, AlertTriangle, Target } from 'lucide-react'
import type { Card } from '../../types/card'
import { assessmentQuestions } from './assessmentQuestions'
import { buildAssessmentCards } from '../../intro-outro/buildAssessmentCards'

export const introCards: Card[] = [
  {
    id: 'intro-greeting',
    type: 'info',
    icon: Hand,
    eyebrow: 'Halo, Sebelum Kita Mulai',
    title: 'Selamat Datang di Modul AI Anda',
    body: [
      'Modul ini sedikit berbeda dari modul-modul lain: ini bukan modul yang membetulkan satu masalah spesifik di bisnis Anda, tapi modul bonus yang membuat modul-modul lain — dan bisnis Anda secara umum — lebih cepat dijalankan. Fokusnya satu: mengadopsi AI, khususnya Claude for Business, dengan cara yang disiplin, bukan sekadar coba-coba.',
      'Tapi sebelum masuk ke caranya, coba jujur dulu soal satu hal yang mungkin sudah terjadi — atau baru mau Anda coba — di bisnis Anda sendiri.',
    ],
  },
  {
    id: 'intro-problem',
    type: 'info',
    icon: AlertTriangle,
    eyebrow: 'Pola yang Sering Terjadi',
    title: '"Suruh Tim Coba AI" Bukan Strategi',
    body: [
      'Seorang admin diam-diam mulai pakai AI buat draft email, lalu berhenti begitu dia resign — karena kebiasaan itu nggak pernah jadi milik bisnis, cuma milik dia. Atau: CEO kirim link AI ke grup WhatsApp tim dengan pesan "coba-coba pakai ya", lalu tiga bulan kemudian tidak pernah ditanya lagi siapa yang beneran pakai dan buat apa.',
      'Ini pola yang sama persis dengan tool dan SOP lain yang pernah dibeli atau dibuat, lalu diam-diam ditinggalkan begitu kesibukan sehari-hari kembali normal — cuma sekarang bentuknya AI. Bukan karena alatnya jelek. Karena nggak pernah ada yang benar-benar memutuskan alur kerja mana yang cocok dipasangi AI, siapa yang bertanggung jawab mengecek hasilnya, dan bagaimana caranya itu jadi kebiasaan tim, bukan mainan satu-dua orang penasaran.',
      'Itu sebabnya Anda perlu modul ini — supaya AI di bisnis Anda berhenti jadi eksperimen acak yang berakhir di kuburan yang sama dengan tool-tool lain, dan mulai jadi kemampuan nyata yang bertahan.',
    ],
  },
  {
    id: 'intro-what',
    type: 'info',
    icon: Target,
    eyebrow: 'Apa yang Akan Anda Pelajari',
    title: 'Satu Kasus Pakai AI, Dipilih Sengaja dan Dipasang Sampai Jadi Kebiasaan',
    body: [
      'Di modul ini, Anda akan memetakan tiga level pemakaian AI di bisnis Anda dan tahu ada di level mana sekarang, memilih satu kasus pakai pertama yang tepat (bukan "AI untuk semua hal"), menetapkan batasan data dan kepercayaan tim sebelum mulai, merancang alur kerja AI pertama Anda dengan Claude for Business lengkap dengan langkah cek manusia, menjalankan dan melatih tim di lapangan sungguhan, lalu menginstal ritme evaluasi dan kepemilikan supaya kebiasaannya bertahan — bukan cuma bagus di minggu pertama.',
      'Supaya nanti di akhir modul Anda bisa lihat sendiri seberapa jauh sudah bergerak, jawab dulu beberapa pertanyaan berikut. Ini bukan ujian — jawaban Anda baru ditampilkan setelah semua pertanyaan ini selesai, jadi jawab saja sesuai yang Anda tahu sekarang.',
    ],
  },
  ...buildAssessmentCards(
    assessmentQuestions,
    'pretest',
    'Ini Titik Awal Anda',
    'Skor ini bukan buat dinilai — ini cuma potret titik awal Anda sebelum masuk modul. Sekarang mari masuk ke Bab 1, supaya Anda tahu persis kenapa eksperimen AI acak biasanya berakhir ditinggalkan — dan apa yang membedakannya dari adopsi yang benar-benar bertahan.',
  ),
]
