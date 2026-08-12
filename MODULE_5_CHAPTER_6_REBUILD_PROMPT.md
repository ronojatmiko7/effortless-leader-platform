# Build Brief: Module 5 — Chapter 6 ("Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif'")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 5/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 4/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–5 already exist (`Module 5/src/content/chapter1.ts`–`chapter5.ts`) — read all five before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

**This prompt covers Chapter 6 only.** Chapters 7–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_5_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 6 is bolded)

1. Kenapa SOP yang Sudah Ditulis Masih Didiamkan — Jebakan Dokumen Berdebu — done
2. Skala Kematangan Kepatuhan SOP: Dari Berdebu Sampai Terverifikasi Aktif — done
3. Audit Kegunaan: Kenapa SOP Anda Nggak Dipakai — Format, Akses, atau Relevansi? — done
4. Merancang Ulang Format SOP: Dari Dokumen Panjang ke Checklist yang Dipakai di Lapangan — done
5. Membangun Akses SOP di Titik Kerja — Bukan Terkubur di Folder — done
6. **Merancang Pengecekan Kepatuhan Rutin — Dari 'Diikuti Sebagian' ke 'Diverifikasi Aktif'** ← this chapter
7. Lokakarya Kegunaan SOP: Merombak Satu SOP Bermasalah Jadi SOP yang Benar-benar Dipakai
8. Menginstal Kebiasaan Kepatuhan SOP — Kepemilikan, Ritme Verifikasi, dan Laporan Lengkap

## 3. Chapter 6 objective

The reader now has a well-formatted, well-placed SOP (Chapters 4–5) — but Chapter 2's maturity scale drew a hard line between Level 3 ("diikuti sebagian, diawasi sesekali") and Level 4 ("diverifikasi aktif"). This chapter installs the mechanism that actually closes that gap: routine, systematic compliance checking, not hope.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 2's scale — reader tahu beda Level 3 dan Level 4. Bab ini instal mekanisme yang bikin naik ke Level 4.
- Kenapa "orangnya udah tahu SOP-nya" nggak cukup: tahu dan beneran ngikutin adalah dua hal yang beda, apalagi pas lagi buru-buru atau nggak ada yang mengawasi.
- **Teknik #1 — Spot check terjadwal.** Pengecekan singkat rutin — bukan dadakan tanpa pola sama sekali, tapi juga bukan diumumkan jauh-jauh hari sampai orang sempat "bersiap" — buat lihat apa kerja beneran sesuai SOP di lapangan.
- **Teknik #2 — Self-audit checklist.** Staf sendiri yang mencentang kepatuhan mereka secara berkala; ini dikombinasikan dengan, bukan menggantikan, spot check supervisor — biar nggak cuma mengandalkan self-report yang gampang dimanipulasi.
- **Teknik #3 — Sinyal tidak langsung.** Metrik hasil (defect rate, komplain pelanggan, rework) yang jadi indikator halus SOP nggak diikuti, walau nggak ada satu pun orang yang mengaku melanggarnya.
- **Menghubungkan ke ritme yang sudah ada**: kalau reader sudah ikut Modul 3 (EBR) atau Modul 4 (QMS), sambungkan pengecekan kepatuhan ini ke salah satu tier review yang relevan (huddle harian/tinjauan mingguan) atau titik pencegahan QMS yang sudah ada; kalau reader belum ikut modul-modul itu, framing tetap self-contained — cukup sarankan ada forum/jadwal rutin apa pun bentuknya yang secara eksplisit mengecek kepatuhan ini, bukan mengasumsikan Modul 3/4 sudah diikuti.
- **Apa yang dilakukan kalau ketemu ketidakpatuhan**: bukan langsung menghukum — tanya dulu apa itu karena orang males ikutin, atau karena SOP-nya sendiri yang nggak realistis (balik ke diagnosis Bab 3). Pengecekan yang sehat memperbaiki sistem, bukan cuma mencari siapa yang salah.
- A worked example designing a spot-check/self-audit cadence for one SOP, end to end.
- A hands-on exercise: reader designs their own compliance-check mechanism (apa yang dicek, seberapa sering, siapa yang mengecek) for the SOP they've been working on since Chapter 3.
- Close with a clear turn toward Chapter 7: "Semua bagiannya sudah ada — diagnosis, format baru, akses baru, dan cara ceknya. Bab 7 lokakarya: satukan semuanya jadi satu SOP yang benar-benar dirombak habis, dari ujung ke ujung."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keenam"**. E.g. 2 short text inputs: "Mekanisme cek kepatuhan apa yang Anda rancang (spot check, self-audit, atau kombinasi)?" and "Seberapa sering, dan siapa yang melakukannya?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter5.ts`'s register exactly — read all five before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely.
- Target 10–20 cards total for this chapter.
- Create `Module 5/src/content/chapter6.ts` exporting `chapter6Cards: Card[]`. Register it in `Module 5/src/content/chapters.ts` (append after chapter 5, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 7–8 content
- Combining the diagnosis/format/access/compliance work into one unified redesign (Chapter 7's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the compliance-check design is persisted so Chapter 7 can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 4/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 5/src/content/chapter6.ts` has 10–20 cards covering the three compliance-check techniques, how to link the check to existing review rhythms (self-contained if reader hasn't done Module 3/4), and how to respond to found non-compliance, including exactly one `reflection` card labeled Entri Keenam
- [ ] At least one worked example of designing a compliance-check cadence
- [ ] Opens with a callback to Chapter 2's maturity scale
- [ ] `Module 5/src/content/chapters.ts` registers Chapter 6 after Chapter 5
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter5.ts` — read all five for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter5.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 4/` left completely untouched
