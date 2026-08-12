# Build Brief: Module 2 — Chapter 2 ("Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework)")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), scaffolded as a sibling to `Module 1/` and built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapter 1 (`Module 2/src/content/chapter1.ts`) already exists — read it before writing anything, both for voice and to confirm how it uses the shared `reflection` card type and `useWorkbookStore` (`Module 2/src/workbook/WorkbookContext.tsx`), both ported from Module 1 and already wired up. Reuse both; don't recreate them.

Module 2 covers Service 2: KPI Architecture & Strategic Cascading. Chapter 1 tore down vanity metrics and had the reader name one number they've wrongly been proud of. **This prompt covers Chapter 2 only.** Chapters 3–8 are separate, later prompts — do not build them now.

Full 8-chapter syllabus reference: `MODULE_2_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 2 is bolded)

1. Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics) — done
2. **Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework)** ← this chapter
3. Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar
4. Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini
5. Merancang Cascading KPI per Divisi, Tim, dan Individu
6. Membangun Dashboard & Ritme Pemantauan yang Objektif
7. Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam
8. Menyusun Rencana Aksi KPI & Ritme Berkelanjutan

## 3. Chapter 2 objective

Chapter 1 made the reader distrust their own vanity numbers. Chapter 2 gives them the actual map they'll build against for the rest of the module — and, critically, teaches that a company target doesn't reach a frontline staff member in one jump. It has to be translated, level by level, and at each level someone has to decide what result they're watching for (a **Lag** number) and what daily action actually drives it (a **Lead** number). This translation mechanism is the one piece missing from the old `module2.ts` (its cards 3–4 jumped straight from "target besar perusahaan" to "target staf Telesales" in a single step, with no visible mechanism in between) — this chapter makes the mechanism explicit.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Recap Chapter 1 in one line, then pose the chapter's question: kalau bukan angka kebanggaan, KPI seperti apa yang benar, dan gimana caranya dari target tahunan perusahaan bisa sampai ke kerjaan harian staf paling bawah?
- Introduce the cascade chain with a concrete SME example, showing the number change *shape*, not just size, at each level: **Target Tahunan Perusahaan** (e.g. omzet Rp 10M/tahun) → **Target Divisi/Tim** (tiap divisi punya potongan target itu, dalam bentuk yang relevan ke kerjaan mereka) → **Aksi Harian Individu** (satu tindakan konkret yang staf itu benar-benar kendalikan hari ini).
- Core teaching point: **melompati satu level di rantai ini itu sama bahayanya dengan metrik basa-basi.** Kalau target perusahaan langsung disodorkan ke staf tanpa diterjemahkan, staf itu punya angka — tapi angka yang nggak bisa mereka apa-apakan, sama percumanya dengan followers yang nggak nyambung ke closing. Loop back eksplisit ke Chapter 1 card `c1-card-9` (staf yang cuma disuruh "kerja keras" tanpa angka spesifik).
- Preview (jangan dibedah tuntas — itu tugas Bab 3 & 4): di tiap level cascade, ada dua jenis angka yang harus dipisahkan — **Lag** (hasil yang mau dicapai di level itu) dan **Lead** (aksi harian yang mendorong hasil itu). Cukup tanam istilahnya dan beri satu contoh sekilas per istilah; jangan ajarkan cara membedakannya secara mendalam di sini.
- Satu worked example lengkap yang menembus ketiga level untuk satu fungsi bisnis (misalnya sales): Target Tahunan (omzet Rp 10M) → Target Divisi Sales (closing Rp X/bulan) → Aksi Harian staf Telesales (telepon 50 prospek/hari). Tunjukkan eksplisit bagaimana angka berubah bentuk, bukan cuma mengecil, di tiap level.
- Sebuah latihan: kasih reader satu target level perusahaan, minta mereka menebak dulu seperti apa bentuknya di level divisi dan level individu — baru reveal jawabannya. Ini menahan pola dari Bab 1 (jangan menebak, tapi di sini dipakai untuk melatih intuisi cascading, bukan buat menjatuhkan mental).
- Tutup dengan transisi jelas ke Bab 3: "Sekarang Anda punya peta cascading-nya. Bab berikutnya kita bedah elemen pertama dari peta ini: Lag Metric — angka hasil yang jadi kaca spion bisnis Anda."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type: have the reader write down one real target tahunan/bulanan terbesar mereka di bisnis mereka sekarang (angka apa, dan satuannya apa — omzet, jumlah unit, jumlah klien baru, dll). Keep it to 1–2 short text inputs, same pattern as Chapter 1's reflection card. This becomes their running example for Chapters 3–5 (they'll cascade this exact target down through Lag, Lead, and per-division/individual design), and later feeds Chapter 8's compiled report.

Do not build any new card types or persistence logic in this prompt — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `Module 2/src/content/chapter1.ts`'s register exactly — read it before writing anything. Casual, blunt, direct Bahasa Indonesia, talks to the owner like a peer who's seen the pattern before. You can also skim `Module 1/src/content/chapter2.ts` purely for structural reference (how it builds a "map" chapter and loops an exercise back to Chapter 1) — but don't borrow its Output/Process/Input content, that's a different module's framework.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — mix them, don't just chain `info` cards back to back. The "skipping a level = vanity metric" teaching point in particular should land through a scenario + quiz pairing, not a lecture card.
- Target 10–20 cards total for this chapter.
- Create `Module 2/src/content/chapter2.ts` exporting `chapter2Cards: Card[]`. Register it in `Module 2/src/content/chapters.ts` (append a new entry after chapter 1, same shape: `{ id: 'chapter-2', number: 2, title, description, cards: chapter2Cards }`).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter (this was a bug fixed in Chapter 1: a closing card's own inline `cta` button duplicates and can bypass the footer button that actually marks the chapter complete). Just end the last card with a strong closing paragraph and no `cta`.

## 6. Out of scope for this prompt

- Chapters 3–8 content
- The final PDF/report export/compilation (Chapter 8's job)
- Any new card types or changes to `useWorkbookStore` (Chapter 1 already built what's needed)
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` — do not touch it

## 7. Definition of done

- [ ] `Module 2/src/content/chapter2.ts` has 10–20 cards covering section 3's content, including exactly one `reflection` card
- [ ] `Module 2/src/content/chapters.ts` registers Chapter 2 after Chapter 1
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` — read it for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / current app behavior untouched
- [ ] `Module 1/` left completely untouched
