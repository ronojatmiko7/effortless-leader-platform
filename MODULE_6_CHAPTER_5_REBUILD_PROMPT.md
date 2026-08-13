# Build Brief: Module 6 — Chapter 5 ("Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas?")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 6/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 5/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–4 already exist (`Module 6/src/content/chapter1.ts`–`chapter4.ts`) — read all four before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern.

This chapter opens Module 6's second act. Chapters 1-4 built Stages 1-2 of the PMS cycle (goal-setting, coaching rhythm). This chapter and the next two turn to Stage 3 (corrective action) — starting with diagnosis, since acting before diagnosing is exactly the mistake this chapter exists to prevent.

**This prompt covers Chapter 5 only.** Chapters 6–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_6_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 5 is bolded)

1. Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah — done
2. Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif — done
3. Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas — done
4. Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin — done
5. **Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas?** ← this chapter
6. Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal
7. Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran
8. Menginstal Siklus PMS — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 5 objective

Even with clear goals (Chapter 3) and a coaching rhythm (Chapter 4), someone can still underperform. This chapter gives a real diagnostic method — three distinct lenses — so Chapter 6 designs the right corrective action for the right root cause instead of jumping straight to a punitive response.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 1 (and Chapter 4 conditionally) — reader mungkin masih punya anggota tim yang underperform meski tujuannya udah jelas dan coaching-nya udah jalan; kalau reader belum sempat menjalankan ritme coaching penuh dari Bab 4, bab ini tetap jalan untuk siapa pun anggota tim yang dirasa underperform sekarang.
- Kesalahan umum: langsung asumsi orangnya "males" atau "nggak niat" dan langsung menuju tindakan disipliner atau bahkan pemecatan tanpa diagnosis dulu — reaksi cepat yang sering salah sasaran.
- **Lensa 1 — Skill Gap.** Orangnya niat, tapi belum punya kemampuan atau pengetahuan buat ngerjain sesuai standar yang diharapkan — solusinya pelatihan atau coaching teknis, bukan hukuman.
- **Lensa 2 — Will Gap.** Orangnya sebenarnya punya kemampuan, tapi motivasinya rendah atau ada hambatan sikap/personal yang bikin nggak all-out — solusinya beda: butuh percakapan soal motivasi dan hambatan, bukan cuma pelatihan teknis.
- **Lensa 3 — Ekspektasi yang Nggak Jelas.** Orangnya sebenarnya nggak pernah tahu persis standar yang diharapkan (balik ke Bab 3 — kemungkinan tujuannya nggak beneran ditetapkan kolaboratif dan jelas dari awal) — kalau ini akar masalahnya, "underperformance"-nya sebenarnya kegagalan sistem, bukan kegagalan orang.
- **Teknik diagnosis tiga pertanyaan** untuk tiap kasus underperformance: (1) kalau dikasih contoh konkret dan waktu yang cukup, bisa nggak orang ini ngerjain sesuai standar? (menunjuk skill gap kalau jawabannya nggak bisa), (2) kalau dia bisa, apa dia sebenarnya ngerti persis standar yang diharapkan dari awal? (menunjuk masalah ekspektasi kalau nggak tahu), (3) kalau dia bisa dan tahu standarnya, kenapa masih nggak dilakukan konsisten? (menunjuk will gap).
- Catat: bisa lebih dari satu lensa berlaku sekaligus untuk kasus yang sama — kenali kombinasinya biar tindakan korektif di Bab 6 tepat sasaran.
- A worked example diagnosing one underperformance case step by step through the three questions, landing on which lens (or combination) is dominant.
- A classification/scenario exercise: given several short underperformance cases, reader classifies each as masalah skill, will, atau ekspektasi.
- Close with a clear turn toward Chapter 6: "Sekarang Anda tahu persis akar masalahnya. Bab 6 masuk ke cara merancang jalur tindakan korektif yang cocok — bukan solusi satu ukuran buat semua kasus."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Kelima"**. The reader names one specific underperforming team member and diagnoses the root cause — this becomes the anchor case for Chapters 6-7. E.g. 2 short text inputs: "Sebutkan satu anggota tim yang sedang underperform, dan gambarkan singkat masalahnya" and "Lensa mana yang paling dominan — skill gap, will gap, atau ekspektasi yang nggak jelas — dan kenapa?"

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter4.ts`'s register exactly — read all four before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely — the three-lens classification should land through a `multiple-choice` scenario exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 6/src/content/chapter5.ts` exporting `chapter5Cards: Card[]`. Register it in `Module 6/src/content/chapters.ts` (append after chapter 4, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 6–8 content
- Designing the actual corrective-action steps (Chapter 6's job — this chapter is diagnosis only)
- Combining diagnosis with goal-setting/coaching into one unified cycle (Chapter 7's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the diagnosis is persisted so Chapters 6-7 can recap it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 5/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 6/src/content/chapter5.ts` has 10–20 cards covering the three diagnostic lenses (skill, will, ekspektasi), the three-question diagnostic technique, and a worked example, including exactly one `reflection` card labeled Entri Kelima naming a real underperforming team member
- [ ] At least one classification/scenario exercise distinguishing the three lenses
- [ ] Opens with a callback to Chapter 1 (and conditionally Chapter 4)
- [ ] `Module 6/src/content/chapters.ts` registers Chapter 5 after Chapter 4
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter4.ts` — read all four for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter4.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 5/` left completely untouched
