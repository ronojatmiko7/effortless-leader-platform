import { chapter1Cards } from './chapter1'
import { chapter2Cards } from './chapter2'
import { chapter3Cards } from './chapter3'
import { chapter4Cards } from './chapter4'
import { chapter5Cards } from './chapter5'
import { chapter6Cards } from './chapter6'
import { chapter7Cards } from './chapter7'
import { chapter8Cards } from './chapter8'
import { introCards } from './intro'
import { outroCards } from './outro'
import type { Card } from '../types/card'

export interface ChapterMeta {
  id: string
  number: number
  title: string
  description: string
  // Tags a chapter entry as the module's intro or outro block instead of a
  // regular numbered chapter — see content/module-2/chapters.ts for the
  // reference implementation. The module has 10 entries total: intro,
  // Bab 1-8, outro.
  kind?: 'intro' | 'chapter' | 'outro'
  cards: Card[]
}

export const chapters: ChapterMeta[] = [
  {
    id: 'chapter-intro',
    number: 0,
    kind: 'intro',
    title: 'Pendahuluan — Kenalan & Pretest',
    description:
      'Kenali dulu pola adopsi AI yang biasanya berakhir ditinggalkan, apa yang akan Anda pelajari di modul ini, dan jawab pretest singkat sebagai titik awal Anda.',
    cards: introCards,
  },
  {
    id: 'chapter-1',
    number: 1,
    kind: 'chapter',
    title:
      '"Suruh Tim Coba AI" Bukan Strategi — Kenapa Eksperimen AI Acak Berakhir di Kuburan yang Sama dengan Tool Lain',
    description:
      'Kenapa pemakaian AI yang muncul dari inisiatif satu-dua orang, tanpa kasus pakai yang dipilih sengaja, tanpa pemilik, dan tanpa cara mengecek hasilnya, berakhir persis seperti tool dan SOP lain yang dibeli/dibuat tapi nggak pernah benar-benar diinstal jadi kebiasaan.',
    cards: chapter1Cards,
  },
  {
    id: 'chapter-2',
    number: 2,
    kind: 'chapter',
    title: 'Peta AI untuk Bisnis Anda: dari Chat Individu ke Alur Kerja Organisasi',
    description:
      'Peta tiga level pemakaian AI di bisnis — Chat Individu, Alur Kerja Tim, Organisasi — dan cara menilai jujur bisnis Anda sekarang ada di level mana, bukan level yang diharapkan.',
    cards: chapter2Cards,
  },
  {
    id: 'chapter-3',
    number: 3,
    kind: 'chapter',
    title: 'Memilih Kasus Pakai yang Tepat — Kenapa "AI untuk Semua Hal" Gagal Duluan',
    description:
      'Dua jebakan yang bikin kasus pakai AI pertama gagal sebelum mulai — "AI untuk semua hal" dan mulai dari yang paling high-stakes — lalu filter tiga pertanyaan untuk menilai kasus pakai nyata dari bisnis Anda sendiri.',
    cards: chapter3Cards,
  },
  {
    id: 'chapter-4',
    number: 4,
    kind: 'chapter',
    title: 'Data, Keamanan, dan Kepercayaan Tim',
    description:
      'Batasan data sederhana untuk menentukan apa yang aman dimasukkan ke AI, kenapa akun tingkat bisnis penting dibanding akun pribadi tersebar, dan menamai langsung ketakutan tim soal AI sebelum itu diam-diam menyabotase rollout di Bab 6-7.',
    cards: chapter4Cards,
  },
  {
    id: 'chapter-5',
    number: 5,
    kind: 'chapter',
    title: 'Merancang Alur Kerja AI Pertama Anda dengan Claude for Business',
    description:
      'Mengunci satu kasus pakai dari Bab 3, memilih mode pemakaian Claude for Business yang cocok — chat biasa, ruang kerja bersama, atau automasi lintas file — lalu merancang siapa yang pakai, langkah cek manusia yang wajib, dan target keberhasilan yang terukur.',
    cards: chapter5Cards,
  },
  {
    id: 'chapter-6',
    number: 6,
    kind: 'chapter',
    title: 'Menjalankan & Melatih Tim Memakai AI di Lapangan',
    description:
      'Menjalankan rancangan alur kerja dari Bab 5 secara nyata: instruksi jelas vs. ambigu, verifikasi yang sehat, cara menangani momen "AI-nya salah" secara konstruktif, sinyal bahaya balik ke cara manual, dan merayakan kemenangan kecil supaya momentum bertahan.',
    cards: chapter6Cards,
  },
  {
    id: 'chapter-7',
    number: 7,
    kind: 'chapter',
    title: 'Lokakarya AI: Merancang Paket Adopsi AI Lengkap untuk Satu Alur Kerja Nyata',
    description:
      'Merakit kasus pakai (Bab 3), batasan data (Bab 4), rancangan alur kerja (Bab 5), dan progres nyata di lapangan (Bab 6) jadi satu paket adopsi AI yang utuh — dinilai lewat skor kematangan dan gap-check jujur, lalu disatukan jadi satu ringkasan yang siap terus dijalankan atau diserahkan ke orang lain.',
    cards: chapter7Cards,
  },
  {
    id: 'chapter-8',
    number: 8,
    kind: 'chapter',
    title: 'Menginstal Kebiasaan AI di Organisasi — Ritme Evaluasi, Kepemilikan, dan Laporan Lengkap',
    description:
      'Kenapa alur kerja AI yang paling sukses sekalipun bisa diam-diam luntur tanpa pemilik evaluasi yang eksplisit, izin untuk mulai dari satu alur kerja dulu sebelum memperluas, ritme cek berkala yang menjaga kebiasaannya bertahan, dan laporan lengkap perjalanan Anda dari Bab 1 sampai Bab 8.',
    cards: chapter8Cards,
  },
  {
    id: 'chapter-outro',
    number: 9,
    kind: 'outro',
    title: 'Penutup — Rangkuman & Posttest',
    description:
      'Rangkuman paket adopsi AI yang sudah Anda bangun di modul ini, plus posttest untuk melihat seberapa jauh Anda sudah bergerak.',
    cards: outroCards,
  },
]
