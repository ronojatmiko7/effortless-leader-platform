# Build Brief: Module 8 — Chapter 5 ("Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 8/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 7/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1-4 already exist (`Module 8/src/content/chapter1.ts`-`chapter4.ts`) — read all four before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This chapter opens Module 8's second act (Hari 2). Chapters 1-4 built Tahap 1 of change management (diagnosis, case for change, stakeholder map). This chapter and the next two turn to Tahap 2 (eksekusi & penguatan) — starting with a concrete rollout plan for ONE real change.

**Chapter 5 is where the reader locks in the single real change that Chapters 5-7 stay anchored to** — it may be the same change they named in Chapter 1/3/4, or a different one if that's more relevant now, but from this point on every exercise through Chapter 7 refers back to this one specific case. Don't let it drift into a generic or hypothetical example.

**This prompt covers Chapter 5 only.** Chapters 6-8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_8_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 5 is bolded)

1. Kenapa Perubahan yang Bagus di Kertas Mati di Lapangan — Jebakan "Sudah Dibeli/Dibuat = Sudah Selesai" — done
2. Peta Change Management: Dari Kesiapan Perubahan ke Perubahan yang Bertahan — done
3. Mendiagnosis Resistensi — Kenapa Tim Anda Diam-Diam Menolak Perubahan — done
4. Membangun Kasus Perubahan & Peta Stakeholder — Siapa yang Perlu Diyakinkan, dan Dengan Cara Apa — done
5. **Merancang Rencana Rollout: Komunikasi, Pelatihan, dan Quick Win** ← this chapter
6. Menjalankan Rollout dan Mengatasi Resistensi di Lapangan
7. Lokakarya Change Rollout: Merancang Paket Change Management Lengkap untuk Satu Perubahan Nyata
8. Menginstal Kebiasaan Change Management — Ritme Penguatan, Kepemilikan, dan Laporan Lengkap

## 3. Chapter 5 objective

Even with a clear diagnosis, case for change, and stakeholder map (Chapters 3-4), a change still needs a concrete rollout plan or it stays theoretical. This chapter has the reader lock in one real change and design its rollout plan across three parts: communication, training, and an early quick win.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapters 3-4 — reader sudah punya diagnosis resistensi, kasus perubahan, dan peta stakeholder. Sekarang: kunci SATU perubahan nyata dan ubah semua itu jadi rencana rollout yang bisa langsung dijalankan.
- Kalau reader belum sempat menyelesaikan Bab 3-4 secara lengkap, bab ini tetap jalan untuk perubahan apa pun yang sedang atau akan dijalankan reader sekarang — cukup pikirkan sekilas siapa yang mungkin resisten dan kenapa sebelum lanjut ke rencana.
- **Elemen 1 — Rencana Komunikasi.** Pesan apa yang disampaikan (kasus perubahan dari Bab 4, disesuaikan ke audiens spesifik), siapa yang menyampaikan (idealnya bukan cuma owner — champion dari peta stakeholder bisa ikut menyampaikan ke rekan-rekannya), lewat channel apa (rapat langsung, grup WhatsApp kerja, one-on-one untuk stakeholder kunci), dan kapan (satu kali pengumuman besar biasanya nggak cukup — perlu diulang dengan cara berbeda di beberapa titik waktu).
- **Elemen 2 — Rencana Pelatihan.** Bentuk pelatihan yang sesuai kompleksitas perubahannya — demo langsung hands-on, sesi tanya-jawab, sistem buddy/mentor antar karyawan — bukan cuma pengumuman lisan sekali atau dokumen yang ditempel (balik ke Lensa 4 dari Bab 3: banyak "resistensi" sebenarnya cuma karena belum pernah benar-benar dilatih).
- **Elemen 3 — Quick Win di Awal.** Kemenangan kecil dan cepat yang bisa dirasakan tim dalam minggu-minggu pertama — bukan langsung berharap transformasi besar dalam sehari. Quick win yang baik: kelihatan jelas hasilnya, terkait langsung ke untung yang dijanjikan di kasus perubahan (Bab 4), dan bisa dicapai tanpa harus menunggu adopsi penuh dari seluruh tim.
- A worked example: full rollout plan illustration for a sample change, showing all three elements working together and how they answer a specific resistance lens.
- An exercise: reader drafts their own 3-part rollout plan (komunikasi, pelatihan, quick win) for the one real change they've locked in.
- Close with a clear turn toward Chapter 6: "Rencana rollout Anda sudah ada di atas kertas. Bab 6 masuk ke bagian yang beda sama sekali — menjalankannya beneran di lapangan, dan apa yang harus dilakukan begitu resistensi (atau sinyal rollout mulai balik ke cara lama) muncul di tengah jalan."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kelima."** The reader names the one real change they're locking in for Chapters 5-7 and drafts their rollout plan. E.g. 3 short text inputs: "Sebutkan satu perubahan nyata yang akan Anda fokuskan dari sini sampai Bab 7 (bisa yang sama dari bab-bab sebelumnya, atau yang lain)," "Rencana komunikasi & pelatihan singkat Anda," dan "Quick win apa yang ingin Anda capai di minggu-minggu pertama?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`-`chapter4.ts`'s register exactly — read all four before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely.
- Target 10-20 cards total for this chapter.
- Create `Module 8/src/content/chapter5.ts` exporting `chapter5Cards: Card[]`. Register it in `Module 8/src/content/chapters.ts` (append after chapter 4, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 6-8 content
- Actually executing the rollout or handling in-field resistance (Chapter 6's job — this chapter is planning only)
- Combining everything into one workshop package (Chapter 7)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the locked-in change and rollout plan are persisted so Chapters 6-7 can recap them)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 7/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 8/src/content/chapter5.ts` has 10-20 cards covering the three rollout plan elements (komunikasi, pelatihan, quick win) and a worked example, including exactly one `reflection` card labeled Entri Kelima naming a real locked-in change and a draft rollout plan
- [ ] Opens with a callback to Chapters 3-4
- [ ] `Module 8/src/content/chapters.ts` registers Chapter 5 after Chapter 4
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`-`chapter4.ts` — read all four for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`-`chapter4.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 7/` left completely untouched
