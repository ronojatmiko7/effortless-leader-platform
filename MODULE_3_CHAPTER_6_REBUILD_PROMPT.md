# Build Brief: Module 3 — Chapter 6 ("Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 3/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/` and `Module 2/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–5 already exist (`Module 3/src/content/chapter1.ts` through `chapter5.ts`) — read all five before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

By the end of Chapter 5, the reader can find a real root cause using 5 Whys or Fishbone. That's wasted effort if the review meeting stops at "oh, ternyata gara-gara X" and never turns into a decision. This chapter is what a meeting leader actually does with a finding once RCA surfaces it.

**This prompt covers Chapter 6 only.** Chapters 7–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_3_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 6 is bolded)

1. Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme — done
2. Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan — done
3. Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu — done
4. Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis — done
5. Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan — done
6. **Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi** ← this chapter
7. Mengelola Eskalasi dan Akuntabilitas Lintas Level
8. Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap

## 3. Chapter 6 objective

This chapter does not re-teach RCA — it assumes the reader can already find a root cause (Chapter 5) and focuses purely on what happens in the room after that: turning a finding into one committed decision with an owner, instead of a good conversation that goes nowhere.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 5 — reader bisa nemuin akar masalah. Tapi banyak rapat review berhenti tepat di situ: "oh ternyata gara-gara X" — lalu rapat bubar tanpa keputusan apa pun. Itu buang RCA yang udah capek-capek digali.
- **New core teaching point: "rapat tentang rapat."** Ciri-cirinya: diskusi yang muter-muter ke masalah yang sama tiap tinjauan tanpa pernah ada keputusan baru, atau keputusan diambil tapi nggak pernah dicatat/diikuti, sampai masalah yang sama muncul lagi bulan depan seolah baru pertama kali dibahas.
- **The decision-forcing question.** Setelah RCA menemukan akar, pemimpin rapat wajib menutup dengan satu pertanyaan: "Berdasarkan akar ini, apa SATU keputusan yang kita ambil sekarang?" — bukan brainstorming panjang, bukan "nanti dipikirin lagi."
- **Log Keputusan** — new device, distinct from a KPI action plan even for readers who took Module 2: setiap keputusan dari sebuah tinjauan dicatat (masalah, keputusan, siapa, kapan) dalam satu log yang dibawa lagi ke tinjauan berikutnya, sebagai item pertama yang dicek ("keputusan minggu/bulan lalu ini, statusnya gimana?"). Ini soal disiplin ritme rapat itu sendiri, bukan cuma soal item KPI.
- **Dua kesalahan memimpin diskusi yang berlawanan**: pemimpin yang terlalu cepat kasih solusi sendiri sebelum tim selesai menggali (mematikan partisipasi, tim jadi pasif menunggu diarahkan) vs pemimpin yang membiarkan diskusi mengambang tanpa pernah menutup ke satu keputusan (terlalu demokratis sampai nggak produktif). Perkenalkan pola fasilitasi yang sehat: gali dulu dengan pertanyaan terbuka, lalu tutup tegas dengan pertanyaan penutup di atas.
- Scenario/contrast exercise: dua transkrip pendek tinjauan — satu berhenti di "oh gitu ya penyebabnya" tanpa keputusan, satu berhenti dengan keputusan + pemilik + tenggat yang jelas — reader mengidentifikasi mana yang benar dan elemen apa yang membedakannya.
- Practice: reader mengambil satu masalah nyata (boleh yang sama dari Chapter 5) dan menuliskan satu keputusan konkret, siapa penanggung jawabnya, dan kapan tenggatnya, sebelum masuk workbook entry.
- Close dengan transisi jelas ke Bab 7: "Sekarang Anda tahu cara menutup diskusi jadi keputusan. Tapi keputusan bagus di satu tinjauan bisa aja nyangkut, nggak pernah dikawal sampai selesai, atau nggak pernah naik ke level yang tepat kalau ternyata masalahnya lebih besar dari kelihatannya. Bab depan: cara mengelola eskalasi dan akuntabilitas lintas level."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Ketujuh."** The reader writes one real Log Keputusan entry: 3–4 short text inputs, e.g. "Masalah apa?", "Keputusan apa yang diambil?", "Siapa penanggung jawabnya?", "Kapan tenggatnya?".

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts` through `chapter5.ts`'s register exactly — read all five before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The "rapat tentang rapat" point and the two facilitation failure modes should each land through a scenario-based exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 3/src/content/chapter6.ts` exporting `chapter6Cards: Card[]`. Register it in `Module 3/src/content/chapters.ts` (append after chapter 5, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 7–8 content
- Root cause analysis method itself (Chapter 5's job — this chapter assumes it's already done)
- Escalation criteria between tiers (Chapter 7's job)
- The final PDF/report export/compilation (Chapter 8's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` and `Module 2/` — do not touch either

## 7. Definition of done

- [ ] `Module 3/src/content/chapter6.ts` has 10–20 cards covering "rapat tentang rapat," the decision-forcing question, the Log Keputusan device, and the two facilitation failure modes, including exactly one `reflection` card labeled Entri Ketujuh
- [ ] At least one scenario-based exercise contrasting a review that ends in a decision vs one that doesn't
- [ ] Opens with a callback to Chapter 5
- [ ] `Module 3/src/content/chapters.ts` registers Chapter 6 after Chapter 5
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter5.ts` — read all five for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter5.ts` / current app behavior untouched
- [ ] `Module 1/` and `Module 2/` left completely untouched
