# Build Brief: Module 8 — Chapter 2 ("Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 8/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 7/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapter 1 already exists (`Module 8/src/content/chapter1.ts`) — read it before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse it; don't recreate it.

**This prompt covers Chapter 2 only.** Chapters 3-8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_8_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 2 is bolded)

1. Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai" — done
2. **Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan** ← this chapter
3. Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan
4. Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa
5. Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win
6. Menjalankan Rollout dan Mengatasi Resistensi di Lapangan
7. Lokakarya Change Rollout: Merancang Paket Change Management Lengkap untuk Satu Perubahan Nyata
8. Menginstal Kebiasaan Change Management — Ritme Penguatan, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 2 objective

The reader ended Chapter 1 having named one change that either died quietly or is coming up, but without a map of the full architecture or a sense of where it typically breaks. This chapter gives the 2-stage change management architecture so the reader can place their business precisely and see the destination the rest of the module builds toward.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 1 — reader sudah punya satu perubahan konkret. Sekarang: peta lengkap buat melihat arsitekturnya bolong di mana.
- **Tahap 1 — Kesiapan & Buy-In.** Menyiapkan tim secara mental dan praktis sebelum perubahan dijalankan: mendiagnosis kenapa mereka akan resisten (Bab 3), membangun kasus perubahan yang kerasa nyata, dan memetakan siapa yang perlu diyakinkan lebih dulu (Bab 4).
- **Tahap 2 — Eksekusi & Penguatan.** Menjalankan perubahannya lewat rencana rollout yang konkret (komunikasi, pelatihan, quick win — Bab 5), lalu menjaga momentum dan mengatasi resistensi begitu benar-benar berjalan di lapangan (Bab 6), sampai jadi kebiasaan yang bertahan, bukan proyek sesaat.
- Kenapa kebanyakan bisnis SME melompat langsung ke Tahap 2 — atau bahkan langsung mengumumkan perubahan tanpa persiapan apa pun — tanpa pernah menyelesaikan Tahap 1: posisi/kebutuhan yang mendesak bikin owner pengen langsung eksekusi, sementara membangun kesiapan tim kerasa seperti langkah tambahan yang gampang dilewati "toh nanti juga ngerti sendiri."
- Kedua tahap saling menyambung, bukan berdiri sendiri: kalau Tahap 1 (kesiapan & buy-in) nggak ada, Tahap 2 nggak punya fondasi apa pun buat dijalankan — rollout-nya bisa kelihatan rapi (ada jadwal, ada pengumuman resmi) tapi ujung-ujungnya tetap ditinggalkan diam-diam karena tim nggak pernah benar-benar diyakinkan atau dilatih dari awal.
- Preview struktur sisa modul mengikuti dua tahap ini: Bab 3 fokus Tahap 1 bagian diagnosis resistensi, Bab 4 fokus Tahap 1 bagian kasus perubahan & peta stakeholder, Bab 5-6 fokus Tahap 2 (rencana rollout lalu eksekusi di lapangan), Bab 7 menyatukan keduanya jadi satu paket change management untuk satu perubahan nyata.
- A self-assessment exercise: reader menilai bisnisnya di tiap dua tahap — ada dan dipakai konsisten, ada tapi nggak konsisten, atau nggak ada sama sekali.
- A short scenario-matching exercise: given several short rollout scenarios (tool dibeli tanpa pernah dijelaskan kenapa, pelatihan cuma sekali lalu ditinggal, dst.), reader classifies each as masalah Tahap 1 atau Tahap 2.
- Close with a clear turn toward Chapter 3: "Sekarang Anda tahu tahap mana yang paling bolong. Bab 3 mulai dari Tahap 1 — cara mendiagnosis kenapa tim Anda diam-diam menolak perubahan, biar Bab-bab berikutnya menjawab akar masalahnya, bukan cuma gejalanya."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kedua."** The reader records their overall self-assessment across the 2-stage architecture and which stage feels most urgent to fix. E.g. 2 short text inputs: "Dari dua tahap — kesiapan & buy-in dan eksekusi & penguatan — mana yang paling nggak jalan di bisnis Anda sekarang, dan kenapa?" and "Kalau Anda bisa benerin satu tahap dulu, mana yang paling mendesak?"

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1's scaffold.

## 5. Voice & format

- Match `Module 8/src/content/chapter1.ts`'s register exactly — read it before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the scenario-matching exercise should land through a `multiple-choice` or `sort-list` exercise, not just an explanation.
- Target 10-20 cards total for this chapter.
- Create `Module 8/src/content/chapter2.ts` exporting `chapter2Cards: Card[]`. Register it in `Module 8/src/content/chapters.ts` (append after chapter 1, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 3-8 content
- Actually diagnosing resistance in depth (Chapter 3's job — this chapter only introduces the 2-stage map and has the reader do a light self-assessment)
- Building the case for change or stakeholder map (Chapter 4), designing the rollout plan (Chapter 5), or field execution technique (Chapter 6)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 7/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 8/src/content/chapter2.ts` has 10-20 cards covering the 2-stage change management architecture, why most SMEs skip Tahap 1, and a scenario-matching exercise, including exactly one `reflection` card labeled Entri Kedua
- [ ] At least one classification/scenario exercise mapping situations to one of the 2 stages
- [ ] Opens with a callback to Chapter 1
- [ ] `Module 8/src/content/chapters.ts` registers Chapter 2 after Chapter 1
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` — read it for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 7/` left completely untouched
