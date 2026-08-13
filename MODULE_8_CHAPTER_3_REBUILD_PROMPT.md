# Build Brief: Module 8 — Chapter 3 ("Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 8/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 7/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-2 already exist (`Module 8/src/content/chapter1.ts`-`chapter2.ts`) — read both before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

Chapters 1-2 gave the reader a concrete change to work with and the 2-stage change management map. This chapter is the first deep dive into Tahap 1 (kesiapan & buy-in): diagnosing *why* teams quietly resist a change, so Chapter 4's case-for-change and stakeholder map actually target the real reasons instead of generic "orang emang susah berubah."

**This prompt covers Chapter 3 only.** Chapters 4-8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_8_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 3 is bolded)

1. Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai" — done
2. Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan — done
3. **Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan** ← this chapter
4. Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa
5. Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win
6. Menjalankan Rollout dan Mengatasi Resistensi di Lapangan
7. Lokakarya Change Rollout: Merancang Paket Change Management Lengkap untuk Satu Perubahan Nyata
8. Menginstal Kebiasaan Change Management — Ritme Penguatan, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 3 objective

Most SME owners read resistance as a character flaw ("tim saya emang susah diajak maju") instead of diagnosing it. This chapter gives four distinct lenses for why people quietly resist a specific change, so the reader can name the real cause for their own case instead of guessing.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 1-2 — reader sudah punya satu perubahan konkret dan tahu ini kemungkinan besar masalah Tahap 1. Sekarang: bongkar persisnya kenapa tim resisten.
- Kesalahan umum: begitu perubahan nggak jalan, langsung menyimpulkan "tim saya emang males/susah berubah" tanpa pernah mendiagnosis akar penyebabnya secara spesifik.
- **Lensa 1 — Takut Nggak Kompeten di Cara Baru.** Karyawan, terutama yang sudah lama dan nyaman dengan cara lama, diam-diam takut kelihatan lambat atau bodoh saat belajar sistem/tool baru di depan rekan kerja — jadi lebih aman terus pakai cara lama daripada risiko kelihatan nggak becus.
- **Lensa 2 — Nggak Jelas Untungnya Buat Mereka.** Perubahan dijelaskan dari sudut pandang bisnis/owner saja ("biar lebih efisien," "biar datanya rapi buat laporan") tanpa pernah menjawab dari sudut pandang karyawan yang harus mengubah kebiasaan hariannya — nggak ada jawaban jelas atas "emangnya kenapa saya harus repot-repot ganti cara kerja saya."
- **Lensa 3 — Trauma dari Perubahan Sebelumnya yang Cuma Proyek Sesaat.** Pernah ada inisiatif serupa yang diumumkan heboh lalu ditinggalkan diam-diam dalam beberapa minggu — jadi tim menganggap "ini juga bakal begitu, ngapain repot-repot ganti kebiasaan kalau ujungnya bakal balik lagi ke cara lama."
- **Lensa 4 — Belum Pernah Benar-Benar Dilatih.** Tim dikasih tool/SOP baru tapi cuma diberi tahu sekali secara lisan atau dokumennya ditempel begitu saja, tanpa pelatihan hands-on yang cukup untuk benar-benar bisa pakai dengan lancar — jadi "resistensi"nya sebenarnya kesulitan praktis, bukan penolakan sikap.
- **Teknik diagnosis** untuk tiap kasus resistensi: tanya langsung atau amati pola penolakannya — apakah muncul saat diminta praktik langsung (indikasi Lensa 1), apakah selalu dibarengi pertanyaan "emang kenapa harus ganti" (indikasi Lensa 2), apakah dibarengi komentar "kayak proyek yang dulu-dulu" (indikasi Lensa 3), atau apakah orangnya sebenarnya mau tapi keliatan bingung/salah pakai (indikasi Lensa 4).
- Catat: bisa lebih dari satu lensa berlaku sekaligus untuk kasus yang sama — kenali kombinasinya biar kasus perubahan dan pendekatan rollout yang dirancang di Bab 4-6 tepat sasaran.
- A worked example diagnosing one resistance case step by step through the four lenses, landing on which lens (or combination) is dominant.
- A classification/scenario exercise: given several short resistance scenarios, reader classifies each as masalah Lensa 1, 2, 3, atau 4.
- Close with a clear turn toward Chapter 4: "Sekarang Anda tahu persis akar resistensinya. Bab 4 masuk ke cara membangun kasus perubahan dan peta stakeholder yang langsung menjawab akar itu — bukan sekadar pengumuman umum lagi."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Ketiga."** The reader diagnoses the dominant resistance lens for their Chapter 1 change (or a different one if more relevant). E.g. 2 short text inputs: "Untuk perubahan yang Anda pikirkan, lensa mana yang paling dominan — takut nggak kompeten, nggak jelas untungnya, trauma perubahan sebelumnya, atau belum pernah dilatih?" and "Apa tanda-tanda konkret yang Anda lihat/dengar dari tim yang menunjukkan itu?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`-`chapter2.ts`'s register exactly — read both before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the four-lens classification should land through a `multiple-choice` scenario exercise, not just an explanation.
- Target 10-20 cards total for this chapter.
- Create `Module 8/src/content/chapter3.ts` exporting `chapter3Cards: Card[]`. Register it in `Module 8/src/content/chapters.ts` (append after chapter 2, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 4-8 content
- Building the case for change or stakeholder map (Chapter 4's job — this chapter is diagnosis only)
- Designing the rollout plan (Chapter 5) or field execution technique (Chapter 6)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 7/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 8/src/content/chapter3.ts` has 10-20 cards covering the four resistance lenses, the diagnostic technique, and a worked example, including exactly one `reflection` card labeled Entri Ketiga
- [ ] At least one classification/scenario exercise distinguishing the four lenses
- [ ] Opens with a callback to Chapters 1-2
- [ ] `Module 8/src/content/chapters.ts` registers Chapter 3 after Chapter 2
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`-`chapter2.ts` — read both for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`-`chapter2.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 7/` left completely untouched
