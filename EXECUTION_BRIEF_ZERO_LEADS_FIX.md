# EXECUTION BRIEF — Effortless Business Funnel: Zero-Leads Root Cause & Fix Plan

**Prepared:** 28 August 2026
**Prepared by:** Claude (Opus) diagnostic session, from live Meta Ads API + Supabase + source-code inspection
**For:** a fresh Claude (Sonnet) session, executing on Bro Rono's connected device
**Repo root:** `D:\App Coding\Prediagnosis Funnel` (mounted at `$HOME/mnt/Prediagnosis Funnel` in `device_bash`)

---

## 0. How to use this brief

You are picking up a diagnosis that is already complete. **Do not re-derive it.** Every number in Section 2 was pulled live from the Meta Ads API, the Supabase project, and the actual source files on 28 Aug 2026. Your job is execution, not investigation.

Rules for the executing session:

1. **Re-check freshness first.** These numbers are from 28 Aug. If you are running this more than ~3 days later, re-pull Section 2's campaign table and the Supabase counts before acting. If they materially differ, say so and stop.
2. **Never change a live ad setting without Bro Rono's explicit go-ahead in that chat.** Propose the exact change, show the current value, wait for "yes."
3. **Phase A is reversible and urgent. Phase B is code. Phase C needs a human decision.** Do them in that order.
4. **Do not touch anything outside the scope listed.** This project has a documented history of scope creep on landing-page edits.
5. Work directly on the device with `device_bash`. Do not stage files into the container to read or edit them.
6. Ask before you assume. If a schema, an RLS policy, or an Edge Function contract is unclear, read it — don't guess.

---

## 1. Situation in one paragraph

Two Meta campaigns have run for three days against the Effortless Business funnel and produced **zero real leads and zero registrations** from ~1,240 paid clicks and 650 confirmed landing-page views. This happened *after* the quiz was simplified (commit `78addfb`), a lead-loss race condition was fixed (`4a02392`), and the landing page was redesigned (`7f71594`) — so the instinct is that those fixes failed. **They did not fail. They were never tested.** The campaigns target 100% broad Indonesia with zero interest targeting, while the offer gates on an ICP that is roughly 0.05% of that population. Only about 13 qualified humans were reached in total. Underneath that primary cause sit two independent conversion killers that will still bite after targeting is fixed: a 45% pre-page click loss, and a six-field lead form — including annual revenue — that gates the result.

---

## 2. Verified facts (evidence base — do not re-derive)

### 2.1 Campaign performance (Meta Ads API, `ads_get_ad_entities`, last_14d, pulled 28 Aug 2026)

Ad account: **Performa Consulting**, id `1822778268151759`, currency IDR (zero-decimal — raw Rupiah, no ×100).

| Metric | Asesmen 13 kebocoran | Direct App Launch |
|---|---|---|
| Campaign ID | `120255994925960583` | `120256005229720583` |
| Ad Set ID | `120255994925950583` | `120256005233850583` |
| Spend | Rp 134,939 | Rp 94,265 |
| Impressions | 14,610 | 15,480 |
| Reach | 12,321 | 14,641 |
| Clicks (all) | 1,022 | 217 |
| Outbound clicks | 944 | 188 |
| **Landing page views** | **521** | **129** |
| CTR | 7.0% | 1.4% |
| Click → LPV arrival | 55% | 69% |
| Cost per LPV | Rp 259 | Rp 731 |
| Conversions | **0** | **0** |

A third campaign is also live and spending: **Ebook 13 Titik Kebocoran — Conversion Campaign**, id `120256027895920583`, objective `OUTCOME_SALES` optimizing `fb_pixel_add_to_cart`, currently serving ads literally named `[DEPRECATED - use v2]`.

### 2.2 Supabase state (project `edodmmedehuuemnnmdri`, pulled 28 Aug 2026)

| Table | Rows | Note |
|---|---|---|
| `leads` | 4 | All Bro Rono's own tests (`testing3@testing3.com`, `testing4@testing4.com`), both pairs correct, `diagnostic_result` populated |
| `hub_members` | **0** | Never had a row |
| `magic_links` | **0** | Never had a row — the Modules Hub register path has never been completed by anyone, including in testing |
| `purchases` | 0 | Expected; Scalev not live |

Both apps confirmed pointing at the same Supabase project (`edodmmedehuuemnnmdri` appears 6× across both `src` trees; no second project exists).

### 2.3 Ad set targeting (read from the live `targeting` object)

**Asesmen Ad Set** — the problem child:
- `geo_locations`: `ID` only. **No `flexible_spec`, no `interests`, no `behaviors`, no custom/lookalike audiences.** Pure broad Indonesia.
- `age_min: 18, age_max: 65` with `age_range: [28, 60]` as a suggestion only
- `targeting_automation.advantage_audience: 1` → **Advantage+ is ON, so the 28-60 lock does not bind**
- `effective_publisher_platforms`: facebook, instagram, **audience_network** (classic + `rewarded_video`), **messenger**, **threads**
- `optimization_goal`: **`OFFSITE_CONVERSIONS`** — changed away from the `LANDING_PAGE_VIEWS` that was set on 27 Aug
- `daily_budget`: Rp 50,000

**Direct App Launch Ad Set** — built correctly:
- `geo_locations`: `ID`, hard `age_min: 28, age_max: 60`
- `targeting_automation.advantage_audience: 0` (OFF — correct)
- Facebook + Instagram only, no Audience Network
- `optimization_goal`: `LANDING_PAGE_VIEWS` (correct)
- Also: **no interest targeting either.** Same broad-audience problem.

### 2.4 Delivery collapse — a dated, causal event

The Asesmen ad set is optimizing for `OFFSITE_CONVERSIONS` while **zero pixel conversion events exist in the account's entire history**. Meta is bidding for an event it has never observed. The consequence is measurable:

| Date | Impressions | Spend | CPM |
|---|---|---|---|
| 27 Aug | 8,015 | ~Rp 63,505 | ~Rp 7,900 |
| 28 Aug | **630** | ~Rp 34,243 | **~Rp 54,400** |

**A 6.9× CPM increase overnight.** Delivery collapsed. This is live financial bleeding and is the single most urgent item in this brief.

### 2.5 The ICP arithmetic — the primary root cause

The offer gates on *"pemilik bisnis 19-99 karyawan, omzet di atas Rp5 miliar per tahun"* — stated in the ad copy AND repeated twice on the landing page.

- Indonesian *usaha menengah* (20-99 workers): roughly **65,000 businesses** nationally (BPS order of magnitude)
- Meta-reachable Indonesian adults: roughly **125 million**
- ICP density: **≈ 0.05%**
- Combined reach across both campaigns: 26,962 people
- **Expected ICP-fit humans reached: ≈ 13**

At 13 qualified people reached, zero leads is the arithmetically predicted outcome regardless of how good the quiz or landing page is. *This is the finding the whole brief rests on.*

### 2.6 Statistical honesty — the two campaigns are NOT equally condemned

- **Asesmen**: 521 LPVs, 0 leads → 95% upper bound on true conversion rate ≈ **0.58%**. A real, statistically meaningful failure.
- **Direct App Launch**: 129 LPVs, 0 registrations → 95% upper bound ≈ **2.3%**. **Under-tested, not disproven.** Do not kill this campaign on current data.

### 2.7 What is already confirmed working — do NOT "fix" these

- The submit-lead race condition (`4a02392`, `leadSubmitRef`) — verified live, both test rows landed correctly with `diagnostic_result`
- The quiz simplification to 2 plain-language options (`78addfb`) — live
- The LandingScreen editorial redesign (`7f71594`) — live, verified via Vercel API and browser
- Lead notification email via Resend — confirmed working end to end
- Base Meta Pixel PageView (`1377499773961301`) — confirmed firing
- Git: everything pushed, `origin/main...main` = `0 0`, push credentials configured on the device

---

## 3. Root cause — MECE decomposition

Leads = **Reach × ICP-density × CTR × Arrival × On-page conversion × Capture**. Every possible cause sits in exactly one multiplier.

| # | Bucket | Verdict | Evidence |
|---|---|---|---|
| 1 | **ICP density** | ❌ **PRIMARY CAUSE** | 0.05% density, ~13 qualified humans reached total. Zero interest targeting on both ad sets. |
| 2 | **CTR (ad → click)** | ⚠️ Mixed | Asesmen 7.0% (excellent, not the bottleneck). Direct App 1.4% (weak creative, 2.8× worse cost/LPV). |
| 3 | **Arrival (click → page render)** | ⚠️ Real leak | 944 outbound → 521 LPV. **45% lost before the page rendered** — worth ~Rp 60k of spend. |
| 4 | **On-page conversion** | 🚫 Undiagnosable | 0/650. Sample poisoned by #1; the page's own ICP gate correctly repels the unqualified 99.95%. |
| 5 | **Capture / technical** | ✅ Cleared | Race fix works, notifications fire, single Supabase project, no runtime errors. Not the cause. |
| 6 | **Delivery / optimization signal** | ❌ Actively bleeding | `OFFSITE_CONVERSIONS` with zero pixel events → CPM 6.9×. Advantage+ overriding the age lock. Audience Network `rewarded_video` inventory. |

**One-line verdict:** the funnel was fixed; the audience was never right; and two friction points underneath will still bite once it is.

---

## 4. The audience walkthrough (qualitative layer)

This is what a real clicker experiences. It matters because it identifies the friction that survives a targeting fix.

**Stage 0 — The scroll (78% Facebook Reels).**
I'm watching Reels at 9pm, not shopping for an assessment. I absorb the first line and the image: *"Karyawan banyak tapi..."* or *"Kehilangan masa kecil anak."* I do NOT read the qualifier in paragraph two. **The hook and the qualifier recruit two different people** — the hook says "you're exhausted and missing your kids" (80% of adult Indonesia), the qualifier demands the top 0.05%. The hook wins because it's first and emotional. The 7% CTR is not a win; it's the receipt showing the wrong crowd came in.

**Stage 1 — The tap (1,022 clicks).**
"Gratis. 5 menit. 13 titik kebocoran." A quiz. Curiosity, not purchase intent. This is a half-conscious Reels thumb-tap. Nobody taps a Reels ad believing they are entering a sales funnel.

**Stage 2 — The white screen (944 → 521; 423 people lost).**
React boots, Fraunces + Sora pull from Google Fonts, 2-4 seconds of blank on 4G in an in-app browser. My thumb is already going back to the video. **These 423 people never saw a single word of the redesign.** The loss happened *before* the page, not on it.

**Stage 3 — The page rejects me (521 arrive).**
The hero lands: *"Bisnis Anda Jalan Terus, Tapi Cuma Kalau Anda Ada?"* — yes, actually. Then sentence two: *"gratis untuk pemilik bisnis 19–99 karyawan."* **First rejection.** I have 4 staff. Or I'm an employee. *"Oh, bukan buat saya."* Close. If I scroll, section 03 hits harder: *"Timnya belum sampai 19 orang."* / *"Omzetnya belum tembus Rp5 miliar setahun."*
The page is **not broken — it is working perfectly.** It is a precision instrument for rejecting unqualified people, aimed at an audience that is 99.95% unqualified.

**Stage 4 — The 13 confessions.**
Two options instead of four is genuinely better. But the options are absolutes: *"Iya, semua tim punya KPI yang jelas"* vs *"Tidak ada KPI yang jelas."* Neither is true — most of my teams have *something*. I pick the honest one and have just told a stranger I'm failing. By Q5 I've confessed four times to a brand I met 90 seconds ago. Accurate diagnosis, zero trust deposited first. And "Pertanyaan 3 dari 13" tells me how many more confessions remain.

**Stage 5 — The wall (highest-confidence non-targeting loss).**
After all 13 questions, **before seeing anything at all**, six required fields appear: Nama, **WhatsApp**, Email, Nama Bisnis, Jumlah Karyawan, **Omzet Tahunan**.
- *"Lah… katanya gratis."*
- **WhatsApp** = someone will call and pitch me. That's a commitment, not a form field.
- **Omzet tahunan** = the single most guarded number an Indonesian SME owner has (pajak, pesaing, keluarga). Into a website I've known four minutes? No.
- The sunk cost **backfires**: *"I answered 13 questions and you still won't show me anything until I hand over my revenue?"* That reads as bait.
- Note the internal contradiction: the page's own trust section promises *"Kami cuma pakai nama, WhatsApp, dan email"* — the form asks for six.

**The Direct App campaign, in my head.**
*"Sampai 31 Agustus semua modul masih gratis. Mulai 1 September, itu jadi berbayar."* → **"Berbayar berapa?"** You don't say. A deadline without a price is a threat, not an offer. Then a register screen → *"cek email Anda, mungkin di folder Spam"* → two-step email verification for an unknown brand at an unnamed price. 1.4% CTR says most didn't even find it interesting enough to tap.

**Offer collision.** Three live campaigns to the same broad audience off the same pixel: a **free** assessment, **free** modules until 31 Aug at an unnamed price, and an ebook for **Rp49,000** with "6 bonus worth Rp4,9jt." A person seeing two of these cannot tell what you are or what anything costs — and the Rp49rb ebook is a far easier yes competing against your own free offers.

---

## 5. EXECUTION PLAN

### PHASE A — Stop the bleeding (ads only, today, ~30 minutes, fully reversible)

> **Every item requires Bro Rono's explicit confirmation before you execute it.** Show him the current value and the proposed value, one at a time or as a single approved batch.

Tools available: Windsor.ai `execute_action` (`update_adset`, `pause_ad`, etc. — write actions confirmed working) or the Meta Ads Manager MCP.

| A# | Action | Target | From → To | Why |
|---|---|---|---|---|
| A1 | **Revert optimization goal** | Ad set `120255994925950583` | `OFFSITE_CONVERSIONS` → `LANDING_PAGE_VIEWS` | Zero pixel conversion events exist. Meta is bidding blind. Caused a 6.9× CPM spike. **Highest urgency.** |
| A2 | **Disable Advantage+ Audience** | Ad set `120255994925950583` | `advantage_audience: 1` → `0` | The stated 28-60 range currently does not bind; effective range is 18-65. |
| A3 | **Hard-lock age** | Ad set `120255994925950583` | `age_min: 18, age_max: 65` → `28 / 60` | Match the Direct App ad set, which is configured correctly. |
| A4 | **Strip junk placements** | Ad set `120255994925950583` | Remove `audience_network` (esp. `rewarded_video`), `messenger`, `threads` | Accidental-click inventory. Direct App is already FB+IG only. |
| A5 | **Pause starved ads** | Ads "Direct 13 titik", "Liburan masih kerja" | ACTIVE → PAUSED | Negligible spend and data; they dilute the learning phase. Concentrate budget on "Karyawan banyak tapi..." (7.4-8.0% CTR, lowest CPC). |
| A6 | **Pause deprecated ads** | Ebook campaign `120256027895920583` | Ads named `[DEPRECATED - use v2]` → PAUSED | Currently spending real money. |
| A7 | **Review Ebook optimization** | Ebook ad set | `fb_pixel_add_to_cart` w/ zero events | Same zero-signal trap as A1. Flag to Bro Rono; likely switch to `LANDING_PAGE_VIEWS` until the pixel has data. |

**Acceptance:** re-read each ad set after the change and confirm the new value reads back. (Note: Ads Manager UI edits have silently reverted before when "Publish" wasn't pressed — always verify via API.)

---

### PHASE B — Remove the friction that survives a targeting fix (code)

> These are the two things that would still suppress conversion even with perfect targeting. **B1 is the highest-confidence code change in this brief.**

#### B1 — Cut the lead form from 6 required fields to 2

**File:** `Effortless Business Funnel/src/components/LeadCaptureForm.tsx`

Current required fields: `lead-name`, `lead-whatsapp`, `lead-email`, `lead-business`, `lead-employee-count`, `lead-annual-revenue`.

Target: **Nama + one contact channel** (WhatsApp *or* email — pick one, do not require both).

**Before you edit, verify:**
1. The `leads` table schema — are `business_name`, `employee_count`, `annual_revenue` nullable? Query it. If `NOT NULL`, you need a migration first.
2. The `submit-lead` Edge Function — does it require those fields? Read the function before changing the client.
3. `src/types/diagnostic.ts` / the `Lead` type — update it, then run `npx tsc -b` (must exit 0).

**Do not simply delete the two qualifying fields.** They carry the ICP signal Bro Rono needs. Move them (see B2).

#### B2 — Relocate the qualifying questions into the quiz

Move **Jumlah Karyawan** and **Omzet Tahunan** from the form to the *front* of the quiz as screening questions (`data/diagnosticQuestions.ts` + `QuizScreen.tsx`), rendered as ordinary multiple-choice **bands**, not free-text numbers.

Why this works psychologically: in the form they read as *extractive* ("give me your revenue before I give you anything"). At the front of a diagnostic they read as *diagnostic* ("we need to calibrate your result"). Same data, opposite emotional register.

Use bands, never exact figures — e.g. `< Rp1M` / `Rp1-5M` / `Rp5-20M` / `> Rp20M`. An exact omzet number is the single hardest ask in this funnel.

**Watch out:** `scoring.ts` iterates the question list. Screening questions must be excluded from scoring, or scoring will break. Read `scoring.ts` before adding questions.

#### B3 — Show the result before asking for contact

**File:** `Effortless Business Funnel/src/App.tsx` (screen flow: `'landing' | 'quiz' | 'report' | 'program'`), plus `QuizScreen.tsx` (which currently renders `LeadCaptureForm` as step 14, gating the report).

Target flow: **quiz → partial report visible → "kirim laporan lengkap ke WhatsApp/email saya" → contact captured.**

Reciprocity before extraction. Give the score, then ask.

**This is the largest architectural change in the brief.** It touches `handleLeadCaptured` / `handleQuizComplete` and therefore the `leadSubmitRef` race fix from `4a02392`. **Read that fix and understand it before you refactor** — reintroducing that race would silently drop `diagnostic_result` again.

If time is short, **B1 + B2 alone are worth shipping without B3.**

#### B4 — Close the 45% pre-page loss

**Files:** `Effortless Business Funnel/index.html`, `src/index.css`

- Self-host or `preload` Fraunces + Sora instead of a render-blocking Google Fonts request; set `font-display: swap`
- Add an above-the-fold skeleton or inline critical CSS so something paints in <1s
- Consider inlining the hero so first paint doesn't wait on the full React bundle
- Test on a throttled 4G mobile profile, not desktop

**Acceptance:** something visible and readable within ~1.5s on simulated 4G. Then watch whether click→LPV moves above 55%.

---

### PHASE C — Resolve the targeting/offer contradiction (needs Bro Rono's decision)

**You cannot execute this without him choosing.** Present the three options plainly and wait.

The contradiction: a 0.05%-density ICP gate on a 100%-broad audience. One side has to move.

**Option 1 — Narrow the targeting, keep the premium ICP.**
Layer interest/behavior targeting: business-owner behaviors, Direktur/Owner/CEO job titles, interests in ERP/HRIS/accounting software, pajak, BPJS Ketenagakerjaan, business associations. Expect much higher CPM and much lower volume — that is correct and expected. Budget must rise per lead; the lead is worth more.

**Option 2 — Widen the offer, keep broad targeting.**
Drop the gate to something like 5-50 employees / omzet > Rp1 miliar. This multiplies the addressable universe roughly 50×. Requires rewriting the ICP gate in ad copy, `LandingScreen.tsx` (`FOR_YOU` / `NOT_FOR_YOU` arrays), and the standalone sales page. Note the module content was written for the larger-SME problem set — check it still fits.

**Option 3 — Two-tier.** Broad top-of-funnel (the Rp49rb ebook, which is already a much easier yes), qualify inside the product, retarget the qualified into the assessment. Slowest, most durable.

**Also needs deciding:** the three-way offer collision (free assessment / free-until-31-Aug modules / Rp49rb ebook) running simultaneously to the same audience off the same pixel. Recommend pausing at least one.

---

### PHASE D — Instrumentation (so this is never diagnosed blind again)

Right now 650 people had an experience and there is **zero telemetry between "landing page view" and "lead row."** No way to distinguish "bounced on the hero" from "abandoned at question 9" from "refused the form."

**File:** `Effortless Business Funnel/src/lib/pixel.ts` + `App.tsx` / `QuizScreen.tsx`

1. **First verify whether commit `376fd82`'s custom events are actually live** — `QuizStarted`, `QuizCompleted`, `Lead` have never appeared in Meta's actions data. Use Events Manager's Test Events tool. Do not assume they work.
2. Add: `QuizStarted`, `QuizProgress` (with question index), `LeadFormViewed`, `Lead`.
3. `LeadFormViewed` is the critical one — it is the only way to prove or disprove the Stage 5 hypothesis.
4. Only once `Lead` events are genuinely firing should the optimization goal move to `OFFSITE_CONVERSIONS` (reverse of A1).

**Also:** live-test the Modules Hub register → magic-link path once, end to end. `magic_links` has literally never had a row, so that path is *unverified*, not proven broken. The container and device shells cannot reach `supabase.co` (egress allowlist blocks it), so this needs a real human click-through.

---

### PHASE E — Re-test protocol

Do not declare anything fixed on small numbers. Statistical discipline:

| Gate | Threshold | Meaning |
|---|---|---|
| Minimum test size | **500 LPVs per variant** | Below this, 0 conversions proves nothing (see 2.6) |
| Kill signal | 500+ LPVs, 0 leads | Genuine failure, change the approach |
| Weak-but-alive | 1-2% LPV→lead | Working; optimize |
| Healthy | >3% LPV→lead | Scale budget |
| Arrival health | click→LPV > 70% | B4 succeeded |

**Change one thing at a time.** If you fix targeting, the form, and the flow simultaneously and it works, you learn nothing about which one mattered.

**Give Direct App Launch its 500 LPVs before judging it** — it has 129 and is not yet disproven. Fix its 1.4% CTR creative first.

---

## 6. Decisions only Bro Rono can make

1. **Phase C**: narrow the targeting, widen the offer, or go two-tier?
2. Which of the three competing offers stays live?
3. What is the price after 31 August? (The Direct App ad promises "berbayar" without a number — this is actively costing conversions.)
4. Budget per campaign after the Phase A changes.
5. Is B3 (show result before asking) acceptable, given it means some people take the score and leave?

---

## 7. Guardrails — do NOT do these

- ❌ Do not re-fix the race condition, the quiz simplification, or the landing page redesign. All confirmed live and working (2.7).
- ❌ Do not change ad settings without explicit confirmation in-chat.
- ❌ Do not conclude the Direct App campaign failed. 129 LPVs is not a verdict.
- ❌ Do not add fields to the lead form. The direction is strictly fewer.
- ❌ Do not switch any ad set to a conversion optimization goal until real pixel conversion events exist.
- ❌ Do not fabricate social proof. Zero approved testimonials exist. A previous reference file contained placeholder fake testimonials — never replicate them.
- ❌ Do not widen scope on landing-page edits. This project has a history of it.

---

## 8. Operational reference for the executing session

**Environment**
- Work on the device: `device_bash`, repo at `$HOME/mnt/Prediagnosis Funnel`
- Two separate apps: `Effortless Business Funnel/` (the quiz app → `effortless-business.vercel.app`) and `Modules Hub/` (→ `effortless-leader-platform.vercel.app`)
- `sales-page-asesmen-13-kebocoran-bisnis.html` at repo root is a **standalone file, not deployed** — do not confuse it with the live app's `LandingScreen.tsx`

**Known gotchas (these will bite you)**
- **`.git/index.lock` / `.git/HEAD.lock` recur constantly.** Fix: `mv .git/index.lock .git/index.lock.staleN` — `rm` fails with "Operation not permitted" on the mounted folder. `mv` works.
- Git push credentials **are** configured (classic PAT, `repo` scope, `~/.git-credentials`). You can `git push origin main` directly. No manual handoff needed.
- **Always pass `verify_jwt: false` explicitly** on any `deploy_edge_function` call. The tool defaults it to `true`, which breaks every function in this project (they all use custom auth or are intentionally public).
- Neither the container shell nor `device_bash` can reach `supabase.co` — egress allowlist blocks it (`403 blocked-by-allowlist`). Live backend verification requires a real human click-through.
- `npx vite build` fails locally on this device with a `rolldown` native-binding error. Pre-existing, machine-specific, unrelated to your changes. **Use `npx tsc -b` to verify instead.** Vercel's build environment is unaffected.
- Meta creative `link_url` reads back as null/empty via every method for `object_story_spec`/`link_data` creatives. This is a real Graph API limitation, not a bug. Confirmed destination for the Asesmen ads is `https://effortless-business.vercel.app/`.

**Key IDs**
- Meta ad account: `1822778268151759` (IDR, zero-decimal)
- Meta pixel: `1377499773961301`
- Supabase project: `edodmmedehuuemnnmdri`
- Vercel project (quiz app): `prj_ggW3YrlXjQV3dNqCUxDICl5lq6Nu` ("effortless-leader-platform-tu3o")

**Project memory** — read these first via `project_memory_read`:
- `meta-ads-zero-leads-diagnosis.md` (the source of Sections 2-3 of this brief)
- `funnel-launch-checklist.md` (full build state, open items)
- `meta-ads-asesmen-campaign.md`, `meta-ads-direct-app-campaign.md`

---

## 9. If you only have one hour

1. **A1** — revert the optimization goal. Stops a 6.9× CPM bleed. (5 min, needs confirmation)
2. **A2 + A3 + A4** — Advantage+ off, hard age lock, strip Audience Network. (10 min, needs confirmation)
3. **B1** — cut the form from 6 fields to 2. (30 min, verify schema first, `npx tsc -b` must pass)
4. Put **Phase C** in front of Bro Rono as a question and stop.

Everything else can wait.
