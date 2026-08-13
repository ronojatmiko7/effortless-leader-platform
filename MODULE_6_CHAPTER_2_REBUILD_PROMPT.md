# Build Brief: Module 6 — Chapter 2 ("Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 6/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 5/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapter 1 already exists (`Module 6/src/content/chapter1.ts`) — read it before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse it; don't recreate it.

**This prompt covers Chapter 2 only.** Chapters 3–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_6_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 2 is bolded)

1. Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah — done
2. **Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif** ← this chapter
3. Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas
4. Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin
5. Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas?
6. Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal
7. Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran
8. Menginstal Siklus PMS — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 2 objective

The reader ended Chapter 1 having named one team member with unclear goals or missing feedback, but without a map of the full system or a sense of where it typically breaks. This chapter gives the 3-stage PMS cycle so the reader can place their business precisely and see the destination the rest of the module builds toward.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 1 — reader sudah punya satu nama konkret. Sekarang: peta lengkap buat melihat sistemnya bolong di mana.
- **Tahap 1 — Penetapan Tujuan.** Tujuan individu/tim ditetapkan secara kolaboratif dan diturunkan jelas dari tujuan yang lebih besar di awal setiap siklus — bukan didikte sepihak, bukan dibiarkan nggak jelas sama sekali.
- **Tahap 2 — Coaching Rutin.** Sesi umpan balik 1-on-1 yang terstruktur dan rutin berjalan sepanjang periode — bukan cuma menunggu review tahunan buat ngobrolin kinerja.
- **Tahap 3 — Tindakan Korektif.** Underperformance ditangani secara formal lewat coaching, pelatihan, atau Performance Improvement Plan (PIP) sebelum penilaian formal atau keputusan besar diambil.
- Kenapa kebanyakan bisnis SME cuma pernah bangun satu dari tiga tahap ini secara konsisten (biasanya review tahunan, yang diam-diam mencoba merangkap ketiganya sekaligus dan gagal di semuanya) — bukan turun jadi nggak punya sistem sama sekali, tapi juga jarang naik jadi tiga tahap yang jalan penuh.
- Ketiga tahap ini saling menyambung, bukan berdiri sendiri: kalau Tahap 1 (tujuan) nggak jelas dari awal, Tahap 2 (coaching) jadi nggak ada arah buat dibahas, dan Tahap 3 (tindakan korektif) jadi nggak adil karena orangnya nggak pernah benar-benar tahu standar yang diharapkan.
- Preview struktur sisa modul mengikuti tiga tahap ini: Bab 3 fokus Tahap 1 (penetapan tujuan), Bab 4 fokus Tahap 2 (ritme coaching), Bab 5-6 fokus Tahap 3 (diagnosis lalu tindakan korektif), Bab 7 menyatukan ketiganya jadi satu siklus utuh untuk satu tim/peran nyata.
- A self-assessment exercise: reader menilai bisnisnya di tiap tiga tahap — ada dan jalan konsisten, ada tapi nggak konsisten, atau nggak ada sama sekali.
- A short scenario-matching exercise: given several short workplace scenarios, reader classifies each as masalah Tahap 1, 2, atau 3.
- Close with a clear turn toward Chapter 3: "Sekarang Anda tahu tahap mana yang paling bolong. Bab 3 mulai dari Tahap 1 — cara menetapkan tujuan kinerja yang beneran kolaboratif dan jelas dari awal."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kedua"**. The reader records their overall self-assessment across the 3-stage cycle and which stage feels most urgent to fix. E.g. 2 short text inputs: "Dari tiga tahap — penetapan tujuan, coaching rutin, tindakan korektif — mana yang paling nggak jalan di bisnis Anda sekarang, dan kenapa?" and "Kalau Anda bisa benerin satu tahap dulu, mana yang paling mendesak?"

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1's scaffold.

## 5. Voice & format

- Match `Module 6/src/content/chapter1.ts`'s register exactly — read it before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the scenario-matching exercise should land through a `multiple-choice` or `sort-list` exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 6/src/content/chapter2.ts` exporting `chapter2Cards: Card[]`. Register it in `Module 6/src/content/chapters.ts` (append after chapter 1, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 3–8 content
- Actually teaching how to set goals well (Chapter 3's job — this chapter only introduces the 3-stage map and has the reader do a light self-assessment)
- Designing the coaching cadence (Chapter 4) or the corrective-action ladder (Chapters 5-6)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 5/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 6/src/content/chapter2.ts` has 10–20 cards covering the 3-stage PMS cycle, why most SMEs only run one stage consistently, and a scenario-matching exercise, including exactly one `reflection` card labeled Entri Kedua
- [ ] At least one classification/scenario exercise mapping situations to one of the 3 stages
- [ ] Opens with a callback to Chapter 1
- [ ] `Module 6/src/content/chapters.ts` registers Chapter 2 after Chapter 1
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` — read it for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 5/` left completely untouched
