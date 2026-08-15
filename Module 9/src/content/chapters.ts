import { chapter1Cards } from './chapter1'
import { chapter2Cards } from './chapter2'
import { chapter3Cards } from './chapter3'
import { chapter4Cards } from './chapter4'
import type { Card } from '../types/card'

export interface ChapterMeta {
  id: string
  number: number
  title: string
  description: string
  cards: Card[]
}

export const chapters: ChapterMeta[] = [
  {
    id: 'chapter-1',
    number: 1,
    title:
      '"Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain',
    description:
      'Kenapa pemakaian AI yang muncul dari inisiatif satu-dua orang, tanpa kasus pakai yang dipilih sengaja, tanpa pemilik, dan tanpa cara mengecek hasilnya, berakhir persis seperti tool dan SOP yang dibeli/dibuat tapi nggak pernah benar-benar diinstal jadi kebiasaan.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi',
    description:
      'Peta tiga level pemakaian AI di bisnis — Chat Individu, Alur Kerja Tim, Organisasi — dan cara menilai jujur bisnis Anda sekarang ada di level mana, bukan level yang diharapkan.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    title:
      'Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan',
    description:
      'Dua jebakan yang bikin kasus pakai AI pertama gagal sebelum mulai — "AI untuk semua hal" dan mulai dari yang paling high-stakes — lalu filter tiga pertanyaan untuk menilai kasus pakai nyata dari bisnis Anda sendiri.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'Data, Keamanan, dan Kepercayaan Tim',
    description:
      'Batasan data sederhana untuk menentukan apa yang aman dimasukkan ke AI, kenapa akun tingkat bisnis penting dibanding akun pribadi tersebar, dan menamai langsung ketakutan tim soal AI sebelum itu diam-diam menyabotase rollout di Bab 6-7.',
    cards: chapter4Cards,
  },
]
