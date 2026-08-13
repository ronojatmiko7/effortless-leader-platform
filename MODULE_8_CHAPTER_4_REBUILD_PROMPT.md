# Build Brief: Module 8 — Chapter 4 ("Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 8/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 7/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-3 already exist (`Module 8/src/content/chapter1.ts`-`chapter3.ts`) — read all three before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This chapter closes Hari 1 (Tahap 1 — Kesiapan & Buy-In). Chapter 3 diagnosed why the reader's team resists a specific change; this chapter turns that diagnosis into two concrete artifacts — a case for change that actually answers the resistance, and a stakeholder map — that Hari 2's rollout plan (Chapter 5 onward) will build directly on top of.

**This prompt covers Chapter 4 only.** Chapters 5-8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_8_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 4 is bolded)

1. Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai" — done
2. Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan — done
3. Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan — done
4. **Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa** ← this chapter
5. Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win
6. Menjalankan Rollout dan Mengatasi Resistensi di Lapangan
7. Lokakarya Change Rollout: Merancang Paket Change Management Lengkap untuk Satu Perubahan Nyata
8. Menginstal Kebiasaan Change Management — Ritme Penguatan, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 4 objective

The reader now knows *why* their team resists (Chapter 3). This chapter has them build a case for change that answers that specific reason — not a generic announcement — and map who needs convincing before the rollout begins.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 3 — reader sudah tahu lensa resistensi paling dominan untuk perubahannya. Sekarang: ubah diagnosis itu jadi kasus perubahan dan peta stakeholder yang konkret.
- **Kasus perubahan yang kerasa nyata vs pernyataan visi-misi kosong.** Bedanya "kita perlu efisiensi lebih baik" (abstrak, nggak nyambung ke siapa pun secara personal) dengan kasus yang menjawab langsung lensa resistensi yang terdiagnosis — misalnya kalau Lensa 2 (nggak jelas untungnya) dominan, kasus perubahan harus eksplisit menjawab "ini bikin kerjaan Anda apa yang lebih mudah/cepat/nggak ribet," bukan cuma alasan dari sudut pandang bisnis.
- **Teknik menyusun kasus perubahan dalam satu-dua kalimat**: apa yang berubah, kenapa sekarang (bukan nanti-nanti), dan apa untungnya buat orang yang menjalankannya sehari-hari — bukan cuma buat owner/bisnis.
- **Peta stakeholder.** Tiga kategori sederhana: champion (kemungkinan besar mendukung dan bisa mempengaruhi rekan-rekannya), resistor (kemungkinan besar menolak), dan yang belum jelas arahnya tapi berpengaruh ke mayoritas tim (sering kali informal leader, bukan posisi struktural tertinggi).
- **Teknik pemetaan sederhana**: untuk tiap orang kunci yang terlibat dalam perubahan, nilai dua hal — seberapa besar pengaruhnya ke orang lain, dan seberapa besar dukungannya terhadap perubahan ini sejauh yang terlihat — lalu prioritaskan siapa yang perlu diyakinkan duluan (pengaruh besar + dukungan belum jelas/rendah adalah prioritas tertinggi, bukan orang yang sudah pasti mendukung atau yang pengaruhnya kecil).
- Kaitkan kembali ke Bab 3: kasus perubahan dan peta stakeholder yang dibangun di bab ini harus secara eksplisit menjawab lensa resistensi dominan yang terdiagnosis — bukan kasus perubahan generik yang bisa dipakai buat perubahan apa pun.
- A worked example: one case-for-change draft plus a short stakeholder map (3-4 people) for a sample scenario, showing how the case answers the diagnosed lens.
- An exercise: reader drafts their own case for change and lists at least 3 stakeholders with a rough champion/resistor/undecided classification.
- Close with a clear turn toward Chapter 5: "Kasus perubahan dan peta stakeholder Anda sudah ada. Bab 5 mulai Hari 2 — waktunya mengunci satu perubahan nyata dan merancang rencana rollout konkretnya: komunikasi, pelatihan, dan kemenangan cepat di awal."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Keempat."** E.g. 2-3 short text inputs: "Tulis kasus perubahan singkat Anda — apa yang berubah, kenapa sekarang, dan apa untungnya buat tim yang menjalankannya sehari-hari" and "Sebutkan minimal 3 orang kunci dan klasifikasinya (champion / resistor / belum jelas)."

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`-`chapter3.ts`'s register exactly — read all three before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely.
- Target 10-20 cards total for this chapter.
- Create `Module 8/src/content/chapter4.ts` exporting `chapter4Cards: Card[]`. Register it in `Module 8/src/content/chapters.ts` (append after chapter 3, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 5-8 content
- Designing the actual rollout plan — communication schedule, training format, quick wins (Chapter 5's job — this chapter only builds the case and the stakeholder map)
- Field execution / handling resistance as it surfaces (Chapter 6)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 7/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 8/src/content/chapter4.ts` has 10-20 cards covering how to build a case for change that answers a diagnosed resistance lens, and stakeholder mapping technique, including exactly one `reflection` card labeled Entri Keempat capturing a real case-for-change draft and at least 3 classified stakeholders
- [ ] Opens with a callback to Chapter 3; explicitly ties the case for change back to the diagnosed resistance lens
- [ ] `Module 8/src/content/chapters.ts` registers Chapter 4 after Chapter 3
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`-`chapter3.ts` — read all three for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`-`chapter3.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 7/` left completely untouched
