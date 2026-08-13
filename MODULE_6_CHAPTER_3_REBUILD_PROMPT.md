# Build Brief: Module 6 — Chapter 3 ("Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 6/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 5/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–2 already exist (`Module 6/src/content/chapter1.ts`–`chapter2.ts`) — read both before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

**This prompt covers Chapter 3 only.** Chapters 4–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_6_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 3 is bolded)

1. Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah — done
2. Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif — done
3. **Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas** ← this chapter
4. Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin
5. Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas?
6. Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal
7. Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran
8. Menginstal Siklus PMS — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 3 objective

The reader knows the 3-stage map (Chapter 2) but not yet how to actually run Stage 1 well. This chapter gives concrete principles and a repeatable technique for setting goals that are both collaborative and clearly cascaded, so they land as something the employee actually owns instead of a target handed down from above.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 2 — reader tahu tiga tahapnya. Sekarang: cara benerin Tahap 1, penetapan tujuan.
- **Prinsip #1 — Kolaboratif, bukan didikte.** Tujuan yang cuma diketok manajer lalu disodorkan ke karyawan biasanya nggak beneran dimiliki — karyawan ngangguk di ruangan tapi nggak commit begitu keluar pintu.
- **Prinsip #2 — Diturunkan jelas dari tujuan yang lebih besar (cascading).** Tujuan individu harus keliatan jelas nyambung ke tujuan tim/departemen/bisnis (callback opsional ke sistem KPI Modul 2 kalau reader sudah ikut) — bukan tujuan yang berdiri sendiri tanpa konteks kenapa itu penting.
- **Prinsip #3 — Spesifik dan terukur, bukan aspirasi kosong.** "Tingkatkan kualitas layanan" itu bukan tujuan, itu harapan. Tujuan yang jelas punya angka, standar, atau tenggat yang bisa dicek objektif tercapai atau nggak.
- **Prinsip #4 — Ditetapkan di awal siklus, bukan menyusul.** Kalau baru dibahas di tengah jalan atau malah pas review, itu bukan lagi "penetapan tujuan" — itu penilaian retroaktif yang nggak adil buat karyawan.
- **Teknik percakapan cascading tiga langkah** yang bisa dipakai manajer buat menurunkan tujuan tim jadi tujuan individu bareng-bareng, bukan dikte: (1) jelaskan tujuan tim dan kenapa itu penting, (2) tanya gimana peran spesifik orang itu bisa berkontribusi ke situ, (3) sepakati bareng target yang terukur dan masuk akal buat peran itu.
- A worked example: satu tujuan tim yang vague ("tingkatkan kepuasan pelanggan") diturunkan jadi tujuan individu yang spesifik dan terukur buat dua peran berbeda di tim itu.
- A classification exercise: given several example goal statements, reader membedakan mana yang sudah spesifik/terukur dan mana yang masih aspirasi kosong.
- A hands-on exercise: reader drafts one collaborative, clearly-cascaded goal for a specific team member (bisa yang sama dari Bab 1, atau orang lain).
- Close with a clear turn toward Chapter 4: "Tujuannya sekarang jelas. Tapi tujuan yang jelas doang nggak cukup kalau nggak pernah dibahas lagi sampai setahun kemudian. Bab 4 masuk ke cara bangun ritme coaching yang beneran rutin."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Ketiga"**. The reader drafts one collaborative, cascaded goal for a specific team member. E.g. 2 short text inputs: "Siapa orangnya, dan tujuan tim/bisnis apa yang mau diturunkan ke perannya?" and "Tujuan spesifik dan terukur apa yang Anda sepakati bareng buat orang itu?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter2.ts`'s register exactly — read both before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the vague-vs-specific classification should land through a `multiple-choice` or `sort-list` exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 6/src/content/chapter3.ts` exporting `chapter3Cards: Card[]`. Register it in `Module 6/src/content/chapters.ts` (append after chapter 2, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 4–8 content
- Designing the ongoing coaching cadence (Chapter 4's job) or the corrective-action ladder (Chapters 5-6's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the drafted goal is persisted so later chapters can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 5/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 6/src/content/chapter3.ts` has 10–20 cards covering the four goal-setting principles, the three-step cascading conversation technique, and a worked example, including exactly one `reflection` card labeled Entri Ketiga
- [ ] At least one exercise distinguishing specific/measurable goals from vague aspirational statements
- [ ] Opens with a callback to Chapter 2
- [ ] `Module 6/src/content/chapters.ts` registers Chapter 3 after Chapter 2
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter2.ts` — read both for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter2.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 5/` left completely untouched
