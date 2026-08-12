# Build Brief: Module 3 — Chapter 3 ("Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu")

Paste this whole file as your prompt to Claude Code. Everything it needs is either in this brief or already in the repo.

## 1. Context

`Module 3/` is an existing React micro-learning card-deck app (Vite + TS + Tailwind v4 + framer-motion + lucide-react), sibling to `Module 1/` and `Module 2/`, built in Effortless Leader's voice — direct, a little confrontational, casual Bahasa Indonesia, no corporate jargon. Chapters 1 and 2 already exist (`Module 3/src/content/chapter1.ts`, `chapter2.ts`) — read both before writing anything, for voice and for the `reflection` card type / `useWorkbookStore` persistence pattern. Reuse both; don't recreate them.

This is the first of two back-to-back chapters (3, 4) that each design half of the 4-tier cadence map from Chapter 2 — the two operational tiers (huddle harian, tinjauan mingguan) here, then the two strategic tiers (bulanan, triwulanan) in Chapter 4.

**This prompt covers Chapter 3 only.** Chapters 4–8 are separate, later prompts. Do not build them now.

Full 8-chapter syllabus reference: `MODULE_3_SYLLABUS.md` at the repo root.

## 2. The 8-chapter syllabus (for context — Chapter 3 is bolded)

1. Kenapa Bisnis Anda Selalu 'Kebakaran' — Jebakan Rapat Tanpa Ritme — done
2. Arsitektur Ritme Tinjauan: Dari Huddle Harian ke Tinjauan Triwulanan — done
3. **Merancang Huddle Harian & Tinjauan Mingguan yang Tidak Buang Waktu** ← this chapter
4. Merancang Tinjauan Bulanan & Triwulanan yang Benar-benar Strategis
5. Root Cause Analysis: Membedah Masalah Tanpa Tebak-tebakan
6. Dari Temuan ke Keputusan — Memimpin Diskusi yang Berujung Aksi
7. Mengelola Eskalasi dan Akuntabilitas Lintas Level
8. Menginstal Ritme EBR yang Bertahan Lama — Playbook & Laporan Lengkap

## 3. Chapter 3 objective

The reader has the 4-tier map from Chapter 2. This chapter builds the two bottom tiers in enough operational detail that the reader could run them tomorrow — durations, standing questions, who's in the room, and the specific failure modes that make these meetings feel like a waste of time.

Content to cover (expand each into multiple cards — don't compress into one card per bullet):

- Open by calling back to Chapter 2's map and the reader's own workbook audit (which tiers already exist / are missing). Frame this chapter as: kita bangun dua tier paling bawah dulu, karena keduanya yang paling sering gagal jadi cuma basa-basi kalau nggak dirancang dengan sengaja.
- **Huddle harian — format.** Target durasi pendek (10–15 menit), sebisa mungkin berdiri (alasan fisik: badan capek berdiri jadi disiplin durasi jalan sendiri). Tiga pertanyaan wajib per orang/tim: (1) apa target hari ini, (2) apa yang menghambat, (3) siapa butuh bantuan dari siapa. Tegaskan yang TIDAK boleh masuk huddle: strategi, evaluasi mendalam, atau diskusi panjang menyelesaikan satu masalah di tempat.
- **"Parkir masalah"** — new device: kalau satu masalah butuh diskusi lebih dari ~2 menit di huddle, itu dicatat lalu diselesaikan di luar huddle oleh orang yang relevan, bukan didiskusikan semua orang sambil berdiri. Ini yang bikin huddle tetap singkat tapi masalahnya tetap tertangani, bukan diabaikan.
- **Kesalahan umum huddle harian** — jadi ajang laporan panjang satu-satu berputar (round robin membosankan, orang lain nunggu giliran sambil main HP), atau justru jadi ajang menyelesaikan masalah di tempat sampai molor 45 menit. Beri 2 contoh nyata SME untuk masing-masing kesalahan.
- **Tinjauan mingguan — format.** Durasi lebih panjang (30–45 menit), duduk, per tim/departemen (bukan satu huddle besar gabungan semua orang). Isinya: progres minggu ini vs target, dan — ini bedanya dari huddle — isu yang "diparkir" di huddle harian yang butuh koordinasi lintas orang, diselesaikan di sini.
- **Agenda standar tinjauan mingguan**: review angka minggu lalu → apa yang jalan / apa yang nggak jalan → keputusan atau aksi untuk minggu ini → preview singkat minggu depan.
- **Siapa hadir di masing-masing tier**: huddle harian = tim yang kerja bareng tiap hari, termasuk staf lini depan; tinjauan mingguan = penanggung jawab tim/departemen, bukan wajib semua orang.
- Scenario/contrast exercise: dua versi huddle harian — satu tetap disiplin 10 menit dan langsung ke pertanyaan inti, satu meleber jadi 45 menit isinya curhat dan debat panjang — reader mengidentifikasi apa yang salah secara struktural di versi kedua (bukan cuma "orangnya kebanyakan ngobrol", tapi elemen format yang hilang).
- Practice: reader merancang huddle harian versi mereka sendiri (durasi, jam, 3 pertanyaan versi mereka, siapa wajib hadir) sebelum masuk workbook entry.
- Close dengan transisi jelas ke Bab 4: "Sekarang dua level operasional sudah rapi. Bab depan kita naik ke level yang isinya beda total — tinjauan bulanan dan triwulanan, tempat keputusan yang lebih besar diambil."

## 4. Workbook capture for this chapter

Add **one reflection card** reusing the existing `reflection` card type — this is workbook entry **"Entri Ketiga"**. The reader designs their own huddle harian: 2–3 short text inputs, e.g. "Jam berapa dan berapa lama huddle harian Anda?", "Apa 3 pertanyaan wajib versi Anda?", "Siapa yang wajib hadir?".

Do not build any new card types or persistence logic — everything needed already exists from Chapter 1.

## 5. Voice & format

- Match `chapter1.ts` and `chapter2.ts`'s register exactly — read both before writing.
- Reuse existing card types (`info`, `yes-no`, `multiple-choice`, `fill-in-the-blank`, `sort-list`, `reflection`) freely. The huddle-vs-huddle-gone-wrong contrast should land through a scenario exercise, not just an explanation.
- Target 10–20 cards total for this chapter.
- Create `Module 3/src/content/chapter3.ts` exporting `chapter3Cards: Card[]`. Register it in `Module 3/src/content/chapters.ts` (append after chapter 2, same shape).
- Do **not** add a `cta` field to this chapter's closing card — the deck footer's "Selesai Bab Ini" / "Lanjut" button already handles moving to the next chapter.

## 6. Out of scope for this prompt

- Chapters 4–8 content
- Tinjauan bulanan/triwulanan content (Chapter 4's job — mention only as a forward pointer)
- Root cause analysis method (Chapter 5's job)
- The final PDF/report export/compilation (Chapter 8's job)
- Any new card types or changes to `useWorkbookStore`
- Restructuring `App.tsx` navigation between chapters
- Any backend/save-to-server logic (still frontend-only)
- `Module 1/` and `Module 2/` — do not touch either

## 7. Definition of done

- [ ] `Module 3/src/content/chapter3.ts` has 10–20 cards covering the huddle harian format, "parkir masalah," common huddle failure modes, and the tinjauan mingguan format/agenda, including exactly one `reflection` card labeled Entri Ketiga
- [ ] At least one scenario-based exercise contrasting a disciplined huddle vs one that runs long
- [ ] Opens with a callback to Chapter 2's map and the reader's tier audit
- [ ] `Module 3/src/content/chapters.ts` registers Chapter 3 after Chapter 2
- [ ] The closing card has no `cta` field
- [ ] Voice matches `chapter1.ts` / `chapter2.ts` — read both for reference before writing
- [ ] Runs via `npm run dev` with no console errors
- [ ] Existing `chapter1.ts` / `chapter2.ts` / current app behavior untouched
- [ ] `Module 1/` and `Module 2/` left completely untouched
