# Build Brief: Module 8 — Chapter 6 ("Menjalankan Rollout dan Mengatasi Resistensi di Lapangan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 8/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 7/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-5 already exist (`Module 8/src/content/chapter1.ts`-`chapter5.ts`) — read all five before writing anything, for voice, for the `reflection` card type / `useWorkbookStore` persistence pattern, and specifically for the real change and rollout plan the reader locked in at Chapter 5.

This chapter stays anchored to the same one real change from Chapter 5. It moves from planning to execution: what actually happens once the rollout plan is running, how to keep momentum, and how to handle resistance and early warning signs directly instead of avoiding them.

**This prompt covers Chapter 6 only.** Chapters 7-8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_8_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 6 is bolded)

1. Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai" — done
2. Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan — done
3. Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan — done
4. Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa — done
5. Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win — done
6. **Menjalankan Rollout dan Mengatasi Resistensi di Lapangan** ← this chapter
7. Lokakarya Change Rollout: Merancang Paket Change Management Lengkap untuk Satu Perubahan Nyata
8. Menginstal Kebiasaan Change Management — Ritme Penguatan, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 6 objective

A rollout plan on paper (Chapter 5) is not the same as a rollout that survives contact with real people having a real reaction to it. This chapter gives the reader technique for the messy middle: keeping momentum, celebrating the quick win, catching early signs of backsliding, and handling resistance as it actually shows up — without avoiding it or forcing it.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 5 — reader sudah punya rencana rollout (komunikasi, pelatihan, quick win) untuk satu perubahan nyata. Sekarang: bedanya rencana di atas kertas dengan rollout yang beneran berjalan di lapangan.
- **Merayakan quick win secara terbuka.** Begitu quick win dari Bab 5 tercapai, jangan biarkan lewat diam-diam — sebutkan secara eksplisit di depan tim (siapa yang mencapainya, apa hasilnya), karena ini memperkuat exposure ke orang-orang yang masih ragu dan menunjukkan perubahannya beneran memberi hasil, bukan cuma janji.
- **Sinyal bahaya rollout mulai balik ke cara lama.** Tanda-tanda awal yang sering diabaikan: orang mulai "sesekali" pakai cara lama "biar cepat," pertanyaan soal cara baru makin jarang (bukan karena sudah lancar, tapi karena sudah nggak dipedulikan), dan champion yang tadinya aktif mulai diam. Kenali ini secepat mungkin — begitu dibiarkan lebih dari beberapa minggu, jauh lebih sulit dibalik lagi.
- **Menangani resistensi yang muncul langsung di lapangan** — bukan menghindar (pura-pura nggak lihat) atau memaksa (langsung menegur keras tanpa mendengarkan dulu). Teknik: dengar keluhan spesifiknya dulu, kaitkan balik ke lensa resistensi dari Bab 3 (apakah ini soal kompetensi, soal untung yang nggak jelas, soal trauma proyek sebelumnya, atau soal belum cukup dilatih), lalu respons sesuai lensanya — bukan respons generik yang sama untuk semua keluhan.
- **Kapan harus fleksibel vs kapan harus tetap tegas.** Fleksibel di detail teknis (misalnya cara pelatihan disesuaikan buat orang yang lebih lambat belajar) tapi tegas di standar barunya sendiri (nggak membiarkan orang diam-diam balik ke cara lama "buat sementara" karena "sementara" itu sering nggak pernah berakhir).
- A worked example: walking through one field resistance moment from detection to response, showing which lens it mapped to and how it was handled.
- A scenario-matching exercise: given several field resistance/backsliding scenarios during rollout, reader chooses the most appropriate response technique for each.
- Close with a clear turn toward Chapter 7: "Anda sekarang sudah tahu cara menjalankan dan menjaga rollout di lapangan. Bab 7 waktunya menyatukan semuanya — diagnosis, kasus perubahan, peta stakeholder, rencana rollout, dan teknik lapangan ini — jadi satu paket change management yang lengkap untuk perubahan Anda."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keenam."** The reader logs how the rollout has actually gone so far. E.g. 2 short text inputs: "Sejauh ini, apa yang sudah berjalan dari rencana rollout Anda, dan resistensi/sinyal bahaya apa (kalau ada) yang sudah muncul?" and "Kalau ada resistensi, bagaimana Anda menanganinya — atau bagaimana rencananya kalau belum terjadi?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`-`chapter5.ts`'s register exactly — read all five before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the scenario exercise should land through a `multiple-choice` or `sort-list` exercise, not just an explanation.
- Target 10-20 cards total for this chapter.
- Create `Module 8/src/content/chapter6.ts` exporting `chapter6Cards: Card[]`. Register it in `Module 8/src/content/chapters.ts` (append after chapter 5, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 7-8 content
- Combining everything into one unified workshop package (Chapter 7's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the execution log is persisted so Chapter 7 can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 7/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 8/src/content/chapter6.ts` has 10-20 cards covering celebrating quick wins, early backsliding signals, handling field resistance mapped back to the Chapter 3 lenses, and when to flex vs stay firm, including exactly one `reflection` card labeled Entri Keenam logging real rollout progress
- [ ] At least one scenario exercise on handling field resistance/backsliding
- [ ] Opens with a callback to Chapter 5 and stays anchored to the same real change
- [ ] `Module 8/src/content/chapters.ts` registers Chapter 6 after Chapter 5
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`-`chapter5.ts` — read all five for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`-`chapter5.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 7/` left completely untouched
