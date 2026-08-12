# Build Brief: Module 4 — Chapter 5 ("Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 4/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 3/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–4 already exist (`Module 4/src/content/chapter1.ts`–`chapter4.ts`) — read all four before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

Note: Module 4's scope stops at *designing* the process architecture (L1-L4) and diagnosing/redesigning silos. SOP *compliance and usability* — making sure the L3/L4 documents this chapter teaches how to write actually get followed day-to-day — is Module 5's job, mapped from a separate diagnostic question (Q5). Keep this chapter scoped to how to write a good, executable work instruction; don't drift into compliance/enforcement territory.

**This prompt covers Chapter 5 only.** Chapters 6–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_4_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 5 is bolded)

1. Kenapa KPI Bagus dan Rapat Rutin Saja Tidak Cukup — Jebakan Proses Bersilo — done
2. Peta Arsitektur Proses 4 Tingkat: Dari Peta Besar ke Instruksi Kerja — done
3. Memetakan Level 1-2: Menggambar Rantai Nilai End-to-End — done
4. Membedah Titik Silo: Menemukan Serah Terima yang Rusak & Approval Berlapis — done
5. **Menyusun Level 3-4: Dari Alur Proses ke Instruksi Kerja yang Bisa Dieksekusi** ← this chapter
6. Merancang Sistem Manajemen Mutu (QMS) yang Mencegah, Bukan Cuma Menangkap Kesalahan
7. Lokakarya Rekayasa Ulang: Merombak Satu Proses untuk Membongkar Silo
8. Menginstal Proses Baru — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 5 objective

The reader has diagnosed exactly which handoff is broken and why (Chapter 4). This chapter gives them the skill to write it down properly — a procedure (L3) and work instruction (L4) detailed enough that the handoff stops depending on one person's memory or improvisation.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 4 — reader tahu titik mana yang rusak dan kenapa. Tapi tahu diagnosisnya aja nggak cukup kalau nggak ditulis jadi sesuatu yang bisa diikuti orang lain.
- **Kenapa "semua orang sudah tahu caranya" itu jebakan** — pengetahuan yang cuma ada di kepala satu-dua orang itu rapuh: orangnya cuti, resign, atau lupa detail, dan prosesnya langsung goyah. Menulis itu bukan formalitas birokrasi — itu cara membuat proses nggak bergantung ke satu orang.
- **L3 — Prosedur**: urutan langkah pada level "apa yang terjadi dan siapa yang mengerjakan", cukup detail untuk dipahami alurnya tapi belum sampai ke teknis paling rinci. Beri contoh prosedur untuk satu handoff (mis. "Serah Terima Order dari Sales ke Produksi": langkah 1-2-3, siapa pemilik tiap langkah).
- **L4 — Instruksi Kerja (SOP)**: detail teknis paling granular per langkah — cukup rinci sampai staf baru bisa mengikuti tanpa nanya-nanya. Ciri instruksi kerja yang baik: siapa yang mengerjakan, langkah spesifik (bukan "cek dengan teliti" tapi "cek 3 hal ini: X, Y, Z"), dan kriteria "selesai dengan benar" yang jelas — bukan cuma "selesai".
- **Kesalahan umum**: instruksi kerja yang ditulis terlalu umum/abstrak sehingga nggak beda dari tidak ada instruksi sama sekali (mis. "pastikan kualitas baik" tanpa kriteria konkret), dan instruksi yang terlalu panjang/rumit sehingga nggak pernah dibaca. Beri 1-2 contoh before/after: instruksi yang samar vs instruksi yang konkret dan bisa langsung dijalankan.
- A worked example: take the handoff diagnosed in a Chapter 4-style scenario and write out a concrete L3 procedure plus one L4 work instruction step for it, showing the reader the transformation from "proses yang rusak" to "instruksi yang jelas."
- A practice exercise: given a vague instruction, reader rewrites/selects the more concrete, executable version (fill-in-the-blank or multiple-choice comparing vague vs concrete phrasing).
- Close with a clear turn toward Chapter 6: "Sekarang Anda punya instruksi kerja yang jelas. Tapi instruksi yang jelas aja nggak cukup kalau nggak ada yang mencegah kesalahan sebelum kejadian. Bab depan: merancang sistem yang mencegah, bukan cuma menangkap kesalahan setelah terjadi."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kelima"**. The reader drafts an L3 procedure and one L4 instruction step for the handoff they diagnosed in Chapter 4. E.g. 2 short text inputs: "Tulis 3-4 langkah prosedur (L3) untuk titik serah terima yang Anda diagnosis di Bab 4 — siapa mengerjakan apa" and "Pilih satu langkah itu, tulis instruksi kerja (L4)-nya sampai detail teknisnya — jelas sampai staf baru bisa ikuti tanpa nanya."

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter4.ts`'s register exactly — read all four before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the vague-vs-concrete distinction should land through a comparison exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 4/src/content/chapter5.ts` exporting `chapter5Cards: Card[]`. Register it in `Module 4/src/content/chapters.ts` (append after chapter 4, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 6–8 content
- SOP compliance/usability at scale — how to make sure people actually follow it day-to-day (Module 5's job, not this chapter's — keep this chapter to *writing* a good instruction, not enforcing it)
- QMS/prevention checkpoints (Chapter 6's job)
- The full redesign workshop (Chapter 7's job — this chapter only builds the L3/L4 writing skill, not the full redesign)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the draft is persisted so Chapter 7/8 can build on it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 3/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 4/src/content/chapter5.ts` has 10–20 cards covering why undocumented process knowledge is fragile, L3 procedures, L4 work instructions, common mistakes (too vague / too long), and a worked example, including exactly one `reflection` card labeled Entri Kelima
- [ ] At least one vague-vs-concrete comparison exercise
- [ ] Opens with a callback to Chapter 4
- [ ] `Module 4/src/content/chapters.ts` registers Chapter 5 after Chapter 4
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter4.ts` — read all four for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter4.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 3/` left completely untouched
