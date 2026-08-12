# Build Brief: Module 4 — Chapter 3 ("Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 4/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 3/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–2 already exist (`Module 4/src/content/chapter1.ts`, `chapter2.ts`) — read both before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This is the first of two back-to-back chapters (3, 4) that put the L1-L2 half of Chapter 2's map into practice — drawing the map itself (this chapter), then diagnosing where it breaks (Chapter 4).

**This prompt covers Chapter 3 only.** Chapters 4–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_4_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 3 is bolded)

1. Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo — done
2. Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja — done
3. **Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End** ← this chapter
4. Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis
5. Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi
6. Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan
7. Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo
8. Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 3 objective

The reader understood the 4-tier architecture in the abstract (Chapter 2). This chapter makes them actually draw their own L1-L2 map — a practical, low-tech exercise, not a diagramming-software tutorial — and mark every handoff point along it, so Chapter 4 has something concrete to diagnose.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 2 — reader ngerti 4 levelnya. Sekarang: praktik nyata menggambar L1-L2 bisnis mereka sendiri.
- **Starting point and ending point.** L1 map selalu dimulai dari pelanggan (permintaan masuk) dan berakhir di pelanggan (kebutuhan terpenuhi) — bukan dari sudut pandang internal departemen. Ini penting supaya map-nya nggak keburu terpotong di batas satu departemen.
- **Cara sederhana menggambar L1**: jalani proses selangkah demi selangkah secara verbal/fisik ("jalan proses") — tanya di tiap titik: siapa yang kasih pekerjaan/informasi ini ke saya, dan ke siapa saya kasih setelah selesai? Nggak butuh software mahal — cukup kertas, sticky notes, atau papan tulis.
- **Contoh L1 map lengkap** untuk satu proses SME yang umum (mis. dari order pelanggan masuk sampai barang terkirim dan dibayar — lintas sales, gudang/produksi, pengiriman, keuangan), digambar sebagai urutan kotak dengan panah.
- **Menandai titik serah terima (handoff)** di setiap panah yang menyeberangi batas departemen — ini yang akan jadi bahan diagnosis di Bab 4. Bedakan handoff di dalam satu departemen (biasanya lancar) vs handoff lintas departemen (biasanya di sinilah silo hidup).
- **Turun ke L2 untuk satu kotak L1** sebagai contoh — pilih satu kotak besar dari map L1 (mis. "Proses Produksi") dan pecah jadi sub-langkah L2 di dalamnya.
- Practice/scenario exercise: given a partial process description (langkah-langkah dalam urutan acak, lintas beberapa fungsi), reader sorts them into the correct end-to-end order and identifies which arrows are cross-department handoffs.
- Close with a clear turn toward Chapter 4: "Sekarang Anda punya peta rantai nilai Anda sendiri, lengkap dengan titik-titik serah terimanya. Bab depan: cara membedah titik-titik itu satu per satu, buat menemukan mana yang beneran silo, mana yang cuma approval berlebih, dan mana yang cuma bottleneck biasa."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Ketiga"**. The reader lists their own main end-to-end process (the departments/steps involved) and 2–3 cross-department handoff points along it. E.g. 2–3 short text inputs: "Proses utama apa yang mau Anda petakan, dan departemen/tim apa saja yang terlibat, dari awal sampai akhir?" and "Sebutkan 2-3 titik serah terima lintas departemen di sepanjang proses itu."

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter2.ts`'s register exactly — read both before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the ordering/handoff-identification exercise should land through a `sort-list` card, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 4/src/content/chapter3.ts` exporting `chapter3Cards: Card[]`. Register it in `Module 4/src/content/chapters.ts` (append after chapter 2, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 4–8 content
- Diagnosing *why* a handoff is broken — silo vs redundant approval vs bottleneck (Chapter 4's job — this chapter only identifies where handoffs exist)
- L3-L4 procedures/work instructions (Chapter 5's job)
- The final PDF/report export/compilation (Chapter 8's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 3/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 4/src/content/chapter3.ts` has 10–20 cards covering how to draw an L1 map, a worked L1 example, breaking one L1 box into L2, and marking cross-department handoffs, including exactly one `reflection` card labeled Entri Ketiga
- [ ] At least one ordering/sorting exercise on process steps and identifying cross-department handoffs
- [ ] Opens with a callback to Chapter 2
- [ ] `Module 4/src/content/chapters.ts` registers Chapter 3 after Chapter 2
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter2.ts` — read both for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter2.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 3/` left completely untouched
