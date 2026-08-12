# Build Brief: Module 3 — Chapter 2 ("Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 3/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), scaffolded as a sibling to `Module 1/` and `Module 2/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapter 1 (`Module 3/src/content/chapter1.ts`) already exists — read it before writing anything, both for voice and to confirm how it uses the shared `reflection` card type and `useWorkbookStore` (`Module 3/src/workbook/WorkbookContext.tsx`), both ported from Module 2 and already wired up. Reuse both; don't recreate them.

Module 3 covers Service 3: Executive Business Review (EBR) Governance. Chapter 1 tore down the reader's firefighting pattern and had them name a problem that blindsided them. **This prompt covers Chapter 2 only.** Chapters 3–8 are separate, later prompts — do not build them now.

Full 8-chapter syllabus reference: `MODULE_3_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 2 is bolded)

1. Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme — done
2. **Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan** ← this chapter
3. Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu
4. Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis
5. Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan
6. Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi
7. Mengelola Eskalasi dan Akuntabilitas Lintas Level
8. Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap

## 3. Chapter 2 objective

Chapter 1 made the reader feel the cost of having no review rhythm. Chapter 2 gives them the actual map they'll build against for the rest of the module: which review happens at which cadence, roughly who's in the room, and — critically — that going up a level means the *kind* of problem discussed changes, not just the frequency. This chapter is architecture only; it does not teach how to run any single tier well (that's Chapters 3–4's job) or how findings move between tiers (Chapters 5–7's job) — just the map and vocabulary.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Recap Chapter 1 in one line, then pose the chapter's question: kalau bukan rapat dadakan pas ada api, ritme tinjauan macam apa yang benar — dan siapa yang perlu terlibat di tiap levelnya?
- Introduce the 4-tier cadence with a concrete SME framing for each: **Huddle Harian** (tim operasional, cek status dan hambatan hari ini, singkat) → **Tinjauan Mingguan** (penanggung jawab tim/departemen, cek progres minggu ini dan isu yang butuh koordinasi lintas orang) → **Tinjauan Bulanan** (pemilik/manajemen, cek tren sebulan dan keputusan yang butuh sumber daya) → **Tinjauan Triwulanan** (level paling strategis, cek apakah arah bisnis masih benar, bukan cuma angka bulan ini).
- Core teaching point: **melompati satu level dalam ritme ini sama bahayanya dengan melompati satu level di rantai KPI (kalau reader kenal istilah itu) — hasilnya rapat yang nggak nyambung.** Kalau cuma ada tinjauan bulanan tanpa huddle harian, masalah kecil numpuk sebulan penuh sebelum ketahuan — itu bukan EBR, itu firefighting yang dikasih jadwal.
- New concept: **altitude.** Makin naik level, resolusi masalah yang dibahas makin general dan strategis, bukan makin detail. Huddle harian bahas "kenapa si A belum kelar telepon prospek hari ini"; tinjauan triwulanan bahas "apakah kita masih menyasar pasar yang benar." Beri contoh nyata pemilik SME yang salah kaprah — datang ke rapat bulanan tapi malah ributin siapa yang telat submit laporan harian, padahal itu levelnya huddle.
- Siapa yang hadir di tiap level, garis besarnya saja (detail partisipasi per tier itu tugas Bab 3–4): makin naik level, makin sedikit orang tapi makin besar wewenang keputusan mereka.
- Tanam istilah **eskalasi** — sekilas saja: sebagian masalah selesai di levelnya sendiri, sebagian perlu naik ke level di atasnya kalau nggak terselesaikan atau butuh keputusan yang levelnya nggak punya wewenang. Jangan bedah kriterianya di sini — itu tugas Bab 7. Cukup pastikan reader tahu istilah dan konsepnya ada.
- Satu worked example yang menembus (atau tidak menembus) keempat level untuk satu masalah nyata — misalnya keluhan kualitas produk yang berulang. Tunjukkan dua skenario: (a) masalah selesai tuntas di huddle harian karena penyebabnya sepele dan lokal — itu bagus, nggak semua masalah perlu naik; (b) masalah yang sama muncul lagi minggu depan, lalu bulan depan — pola berulang inilah yang jadi sinyal untuk naik level.
- Sebuah latihan klasifikasi: kasih reader beberapa skenario masalah bisnis, minta mereka menandai masuk tier mana masalah itu paling pas dibahas pertama kali.
- Personal reflection: reader mengaudit ritme rapat yang sudah ada di bisnis mereka sekarang terhadap peta 4 tier ini (lihat section 4).
- Close dengan transisi jelas ke Bab 3: "Sekarang Anda punya peta lengkapnya. Bab berikutnya kita bedah dua level paling bawah — huddle harian dan tinjauan mingguan — supaya keduanya nggak buang waktu tim Anda."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kedua"** (Chapter 1's reflection card is "Entri Pertama"). The reader audits which of the 4 tiers already exist in their business, even informally, and which is the emptiest gap. Keep it to 2 short text inputs, e.g. "Tier mana yang sudah ada di bisnis Anda sekarang (meski masih informal)?" and "Tier mana yang paling kosong / paling perlu dibangun duluan?". This becomes their running self-assessment for Chapters 3–4.

Do not build any new card types or persistence logic in this prompt — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `Module 3/src/content/chapter1.ts`'s register exactly — read it before writing anything. Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before. You can also skim `Module 2/src/content/chapter2.ts` purely for structural reference (how it builds a "map" chapter and loops an exercise back to Chapter 1) — but don't borrow its KPI-cascading content, that's a different module's framework.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — mix them, don't just chain `info` cards back to back. The "altitude" teaching point in particular should land through a scenario + quiz pairing, not a lecture card.
- Target 10–20 cards total for this chapter.
- Create `Module 3/src/content/chapter2.ts` exporting `chapter2Cards: Card[]`. Register it in `Module 3/src/content/chapters.ts` (append a new entry after chapter 1, same shape: `{ id: 'chapter-2', number: 2, title, description, cards: chapter2Cards }`).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 3–8 content
- How to actually run any single tier well (Chapters 3–4's job)
- Escalation criteria between tiers (Chapter 7's job) — mention the term only, don't teach it
- Root cause analysis method (Chapter 5's job)
- The final PDF/report export/compilation (Chapter 8's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` and `Module 2/` — do not touch either

## 7. Definition of done

- [ ] `Module 3/src/content/chapter2.ts` has 10–20 cards covering the 4-tier cadence map, the altitude concept, and the escalation preview, including exactly one `reflection` card labeled as Entri Kedua
- [ ] `Module 3/src/content/chapters.ts` registers Chapter 2 after Chapter 1
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` — read it for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / current app behavior untouched
- [ ] `Module 1/` and `Module 2/` left completely untouched
