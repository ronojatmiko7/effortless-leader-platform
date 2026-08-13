# Build Brief: Module 6 — Chapter 7 ("Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 6/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/`–`Module 5/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1–6 already exist (`Module 6/src/content/chapter1.ts`–`chapter6.ts`) — read all six before writing anything, for voice, for the `reflection` card type / `useWorkbookStore` persistence pattern, and specifically for the **exact `cardId`/`fieldId` values** Chapter 5's diagnosis entry used — don't guess them.

**No new card type is needed for this chapter.** `finding-review` (type `'finding-review'`) already exists in `Module 6/src/types/card.ts` and its renderer at `Module 6/src/components/cards/FindingReviewCard.tsx`, both ported during the Chapter 1 scaffold and already wired into `DeckViewer.tsx`. It reads back a prior `useWorkbookStore` entry as a recap, then captures a 1–4 score plus a short justification, persisted under a `storageKey`. Use it, don't rebuild it — see `Module 5/src/content/chapter7.ts` for a reference of the pattern.

**This prompt covers Chapter 7 only.** Chapter 8 is a separate, later prompt. Do not build it now.

Full 8-chapter syllabus reference: `MODULE_6_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 7 is bolded)

1. Kenapa Review Tahunan Saja Selalu Gagal — Jebakan Manajemen Kinerja yang Kosong di Tengah — done
2. Peta Siklus Manajemen Kinerja: Dari Tujuan ke Coaching ke Tindakan Korektif — done
3. Menetapkan Tujuan Kinerja yang Kolaboratif dan Diturunkan dengan Jelas — done
4. Merancang Ritme Coaching 1-on-1 — Dari Review Tahunan ke Umpan Balik Rutin — done
5. Mendiagnosis Underperformance — Skill Gap, Will Gap, atau Ekspektasi yang Nggak Jelas? — done
6. Merancang Jalur Tindakan Korektif: Coaching, Pelatihan, dan PIP Sebelum Penilaian Formal — done
7. **Lokakarya PMS: Merancang Siklus Kinerja Utuh untuk Satu Tim atau Peran** ← this chapter
8. Menginstal Siklus PMS — Kepemilikan, Ritme, dan Laporan Lengkap

## 3. Chapter 7 objective

This is the hands-on workshop chapter. Across Chapters 3–6, the reader has built a goal-setting approach, a coaching cadence, an underperformance diagnosis, and a corrective-action pathway — but scattered across separate exercises. This chapter has them pull it all together into one concrete, ready-to-run performance management cycle for one real team or role.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapters 3–6 — reader sudah punya pendekatan penetapan tujuan, ritme coaching, diagnosis, dan jalur tindakan korektif. Sekarang: menyatukan semuanya jadi satu siklus manajemen kinerja yang utuh.
- **Recap step**: pull back the reader's Chapter 5 diagnosis as a `finding-review` card — reader mengonfirmasi/meninjau ulang apa diagnosisnya masih akurat, lalu menilai skor kepercayaan (1–4) bahwa jalur tindakan korektif yang sudah dirancang (Bab 6) beneran cocok buat kasus itu, dengan alasan singkat.
- **Menyatukan jadi satu siklus**: mekanisme penetapan tujuan (Bab 3), ritme coaching (Bab 4), dan — kalau relevan — jalur tindakan korektif (Bab 5-6), untuk satu tim atau peran yang sama (bisa yang sama dari bab-bab sebelumnya, atau digeneralisasi ke seluruh tim kalau reader mau).
- **Sandingkan versi "sebelum" vs "sesudah"**: siklus lama (nggak ada apa-apa, atau cuma review tahunan yang mencoba merangkap semuanya) vs siklus baru (tiga tahap yang jelas dan saling menyambung).
- **Cara memperkenalkan siklus baru ke tim tanpa bikin orang defensif atau takut** — terutama bagian tindakan korektifnya bisa kerasa mengancam kalau nggak dijelaskan dengan benar. Framing yang tepat: ini sistem yang adil buat semua orang (semua orang dapat tujuan yang jelas dan kesempatan yang sama), bukan alat buat cari-cari kesalahan diam-diam.
- A worked example: full walkthrough for one team/role showing the complete cycle end-to-end — goal, coaching cadence, dan (kalau relevan) jalur tindakan korektifnya.
- Close with a clear turn toward Chapter 8: "Siklus PMS-nya sekarang utuh di atas kertas. Bab terakhir: cara menginstalnya biar beneran jalan terus — bukan cuma rancangan bagus yang berakhir dilupakan kayak review tahunan lama — dan laporan lengkap dari semua yang sudah Anda kerjakan sejak Bab 1."

## 4. Workbook capture for this chapter

Use **two** cards this chapter:

1. **finding-review** — recap the reader's Chapter 5 entry (the underperformance diagnosis, "Entri Kelima"), pulled via its known `useWorkbookStore` field ids. Have the reader score their confidence (1–4) that the corrective-action pathway (informed by Chapter 6) actually fits the diagnosis, with a short justification. Storage key e.g. `chapter7-corrective-action-review`. This is workbook entry **"Entri Ketujuh."**
2. **reflection** — the reader writes out the final integrated cycle summary for their chosen team or role: mekanisme penetapan tujuan, ritme coaching, dan jalur tindakan korektif (kalau relevan). This is workbook entry **"Entri Kedelapan."** 3 short text inputs, e.g. "Tim/peran mana yang jadi fokus siklus ini?", "Gimana tujuan ditetapkan dan ritme coaching-nya?", "Kalau ada tindakan korektif yang relevan, seperti apa jalurnya?"

If the Chapter 5 entry is empty (reader skipped it), degrade gracefully — this should already be how `finding-review` behaves from its existing implementation; don't change that behavior.

Do not build any new card types or persistence logic — everything needed already exists.

## 5. Voice & format

- Match `chapter1.ts`–`chapter6.ts`'s register exactly — read all six before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`) for the teaching/practice portions. Use `finding-review` and `reflection` only for the two moments in section 4.
- Target 10–20 cards total for this chapter.
- Create `Module 6/src/content/chapter7.ts` exporting `chapter7Cards: Card[]`. Register it in `Module 6/src/content/chapters.ts` (append after chapter 6, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapter 8 content
- Rollout/gradual-start permission and the rhythm link to Modules 2/3 (Chapter 8's job)
- The final PDF/report export/compilation (Chapter 8's job — this chapter only needs to make sure the integrated cycle summary is persisted so Chapter 8 can read it)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/`–`Module 5/` — do not touch any of them

## 7. Definition of done

- [ ] `Module 6/src/content/chapter7.ts` has 10–20 cards covering assembling the goal-setting, coaching, and corrective-action pieces into one cycle, introducing it to the team without triggering defensiveness, and a worked example, including exactly one `finding-review` card (Entri Ketujuh, recapping Chapter 5's entry) and one `reflection` card (Entri Kedelapan)
- [ ] The `finding-review` card's recap items use the real `cardId`/`fieldId` from Chapter 5's actual source file, verified by reading it — not guessed
- [ ] Opens with a callback to Chapters 3–6; closes previewing Chapter 8
- [ ] `Module 6/src/content/chapters.ts` registers Chapter 7 after Chapter 6
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts`–`chapter6.ts` — read all six for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts`–`chapter6.ts` / current app behavior untouched
- [ ] `Module 1/`–`Module 5/` left completely untouched
