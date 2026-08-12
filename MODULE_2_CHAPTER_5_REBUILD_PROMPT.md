# Build Brief: Module 2 — Chapter 5 ("Merancang Cascading KPI per Divisi, Tim, dan Individu")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 2/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–4 already exist (`Module 2/src/content/chapter1.ts` through `chapter4.ts`) — read all four before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

By the end of Chapter 4, the reader has one complete, working KPI set: a target (Chapter 2), a Lag Metric that's proof not proxy (Chapter 3), and a Lead Metric that's predictive and controllable, with a daily number reverse-engineered from it (Chapter 4). This chapter's job is to show them that was only **one of three areas** a business needs covered, apply the same method they already know to the other two, and then actually assign owners — turning "I have some KPIs" into "I have a cascade with a name attached to every number."

**This prompt covers Chapter 5 only.** Chapters 6–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_2_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 5 is bolded)

1. Kenapa KPI Anda Selama Ini Menipu — Jebakan Metrik Basa-basi (Vanity Metrics) — done
2. Peta KPI: Dari Visi Bisnis ke Aksi Harian (Cascading Framework) — done
3. Lag Metric: Membaca Kaca Spion Bisnis Anda dengan Benar — done
4. Lead Metric: Menemukan Setir yang Bisa Anda Kendalikan Hari Ini — done
5. **Merancang Cascading KPI per Divisi, Tim, dan Individu** ← this chapter
6. Membangun Dashboard & Ritme Pemantauan yang Objektif
7. Mendiagnosis KPI yang Merah — Evaluasi Tanpa Cari Kambing Hitam
8. Menyusun Rencana Aksi KPI & Ritme Berkelanjutan

## 3. Chapter 5 objective

This is the busiest chapter in the module — it introduces a new framework, applies the reader's existing Lag/Lead skill twice more, and runs the actual cascading/ownership design exercise. Pace matters here more than in any other chapter: **do not re-teach Lag/Lead from scratch.** The reader already has the method from Chapters 3–4; this chapter applies it, quickly, twice.

Content to cover (expand each into multiple cards — don't compress into one card per bullet, but keep the Lag/Lead re-application sections tight, not a full step-by-step recompute like Chapter 4's):

- **Open by calling back to the end of Chapter 4** — the reader has one complete KPI set (target → Lag → Lead). Name explicitly that it only covers one area of the business.
- **Introduce the three areas every business needs KPI coverage in: Output, Proses, Input.** This must be self-contained — Module 2 is sold standalone, so don't assume the reader took Module 1. Structure it as a conditional callback, same pattern as Chapter 1 card 6: one line acknowledging Module 1 graduates will recognize this ("Kalau Anda sudah ikut Modul 1..."), then a complete, standalone explanation for everyone else. Definitions to use (adapted for KPI purposes, not audit purposes):
  - **Output** — angka hasil akhir bisnis: penjualan, kualitas yang sampai ke pelanggan, profit. This is the area the reader already built a KPI for in Chapters 2–4.
  - **Proses** — seberapa lancar dan konsisten alur kerja yang menghasilkan Output itu: SOP, alur kerja, handoff antar orang/tim.
  - **Input** — kesiapan sumber daya yang jadi bahan bakar Proses: orang, alat kerja, material, modal.
- **Why all three matter, not just Output** — new core teaching point, and it should connect back to concepts already taught rather than feel like a new rule: watching only Output is the same single-metric trap from Chapter 3, just scaled up to a whole domain instead of one number. Sharper version of the same idea: Proses and Input KPIs often function as **early warning signs** for an Output problem that hasn't shown up in the numbers yet — by the time a bad Input (understaffed, undertrained, bahan baku turun kualitas) or a broken Proses (SOP dilewati, handoff putus) finally shows up in Output, it's already too late to prevent, same as picking a Lag Metric with too long a lag time.
- **Industry-flavored examples across at least three different business types** so this doesn't read as sales/services-only — cover at minimum F&B, trading/distribusi, and ecommerce (the reader base spans these), showing one Output/Proses/Input example each:
  - F&B: Output — food cost % atau rata-rata nilai transaksi; Proses — waktu dari order ke meja, kepatuhan resep standar; Input — kesegaran bahan baku, kehadiran staf dapur.
  - Trading/Distribusi: Output — sell-through rate, margin per kategori; Proses — OTIF (on-time-in-full delivery), lead time gudang ke toko; Input — ketersediaan stok dari supplier, kondisi armada.
  - Ecommerce: Output — conversion rate, retensi pelanggan; Proses — waktu proses pesanan sampai dikirim, tingkat retur; Input — kualitas foto/listing produk, kecepatan website/platform.
- **Fast re-application, part 1 — Proses.** One condensed worked example (not a full multi-step recompute like Chapter 4) showing a Lag Metric and Lead Metric pair for a Proses-area KPI, in a business type not yet used as an example this chapter (e.g. distribusi/gudang).
- **Fast re-application, part 2 — Input.** Same treatment for an Input-area KPI, different business type again if possible (e.g. F&B atau ecommerce).
- **Cascading assignment, handled realistically for small businesses.** This is where "per Divisi, Tim, dan Individu" actually happens: each of the reader's now six KPIs (3 domains × Lag+Lead) needs exactly one name attached to who owns it. Explicitly address the reality that most EL readers don't have a formal org chart — one person can hold more than one role/domain. The rule isn't "punya struktur rapi," it's "setiap KPI, ada satu nama yang jelas tanggung jawabnya." Give a short example of how this looks in a genuinely small business (e.g. owner + 2–3 staff) alongside a slightly bigger one with real divisions, so both audience sizes see themselves in it.
- Close with a clear turn toward Chapter 6: "Sekarang Anda punya cascading KPI lengkap — 3 area, dengan pemilik jelas di tiap level. Tapi KPI yang cuma nangkring di buku kerja nggak ada gunanya kalau nggak pernah dipantau. Bab depan: cara bikin ritme pemantauan yang beneran jalan."

## 4. Workbook capture for this chapter

This chapter needs more workbook capture than previous chapters, given its scope — use **three** `reflection` cards (reusing the existing type), not one:

1. **Proses KPI reader's own business**: 2 short text inputs — Lag Metric candidate for a Proses-area problem in their business, and the Lead Metric that would drive it.
2. **Input KPI reader's own business**: same shape, 2 short text inputs, for an Input-area KPI.
3. **Ownership map**: for all three domains (Output — already named in earlier chapters, Proses, Input), the reader writes down who owns each one in their business — can be the same name for more than one, that's fine and expected for small businesses. 3 short text inputs, one per domain.

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts` through `chapter4.ts`'s register exactly — read all four before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely.
- Given the scope of this chapter (new framework + two fast re-applications + assignment exercise + three reflection cards), it's fine to run toward 20–25 cards rather than staying under 20 — prioritize clarity and pacing over hitting a card-count target, but keep the Proses/Input re-application sections genuinely fast, not full Chapter-4-style step-by-steps.
- Create `Module 2/src/content/chapter5.ts` exporting `chapter5Cards: Card[]`. Register it in `Module 2/src/content/chapters.ts` (append after chapter 4, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 6–8 content
- Building the actual dashboard/monitoring rhythm (Chapter 6's job)
- The final PDF/report export/compilation (Chapter 8's job)
- Scoring or diagnosing red KPIs (Chapter 7's job)
- Re-teaching Lag/Lead from first principles — reference and apply the Chapter 3/4 method, don't re-explain proof-vs-proxy or predictive-vs-controllable from scratch
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` — do not touch it

## 7. Definition of done

- [ ] `Module 2/src/content/chapter5.ts` introduces Output/Proses/Input as a self-contained framework (works without Module 1) with a conditional callback for readers who took it
- [ ] Includes Output/Proses/Input KPI examples spanning at least F&B, trading/distribusi, and ecommerce
- [ ] Includes one fast worked Lag+Lead example for Proses and one for Input, each in a different business type
- [ ] Includes an explicit, realistic treatment of small-business ownership (one person can hold multiple KPI domains)
- [ ] Exactly three `reflection` cards: Proses KPI, Input KPI, ownership map across all three domains
- [ ] Opens with a callback to the end of Chapter 4
- [ ] `Module 2/src/content/chapters.ts` registers Chapter 5 after Chapter 4
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter4.ts` — read all four for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter4.ts` / current app behavior untouched
- [ ] `Module 1/` left completely untouched
