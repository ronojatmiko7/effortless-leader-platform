<#
Module 2 (inside Modules Hub) - Lead/Lag Metric terminology update runner (v2)

Runs MODULE_2_TERMINOLOGY_UPDATE_PROMPT.md through the Claude Code CLI. This
is a content EDIT to already-shipped Module 2 chapters (renaming "Lead
Metric"/"Lag Metric" to the friendlier "KPI Usaha"/"KPI Hasil" throughout
Chapters 3-8), not a fresh build.

UPDATED Aug 14 - retargeted to 'Modules Hub/src/content/module-2/' (v1 of
this script targeted the old standalone 'Module 2/' app, before the
Modules 1-8 consolidation into Modules Hub happened). Modules Hub is now
the live app, so that's what needs the terminology fix. The skip-guard,
build-verification, and commit-message target directories below all changed
accordingly. If you already ran v1 of this script against the standalone
'Module 2/' before the Modules Hub consolidation, that update did NOT carry
over automatically - the Hub's scaffold step ported Module 2's content
fresh from the (unfixed) standalone copy. This v2 run is what actually
fixes the live app.

CAVEMAN MODE: same token-efficiency reasoning as the other runners in this
repo (see prediagnosis-funnel-workflow.md in project memory) - a
plain-English directive only, deliberately NOT a literal `/caveman full`
slash-command line. An earlier runner (run-funnel-app.ps1) tried a literal
slash line and headless `claude -p` errored with "Unknown command: /caveman"
before reading anything else - confirmed by an actual failed run. Slash
commands only work that way in an interactive `claude` session, never
through `-p`.

ONE-TIME SETUP NEEDED ON THIS MACHINE (not done by this script - a
third-party install script, review it before running):

    irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-module2-terminology-update.ps1
    .\run-module2-terminology-update.ps1 -Model claude-sonnet-4-5   # pin a specific model

REQUIREMENTS:
  - Claude Code CLI ('claude') on PATH and already logged in.
  - Run from your own terminal with network access.
  - `npm` and `git` on PATH.
  - MODULE_2_TERMINOLOGY_UPDATE_PROMPT.md present in this same folder (it already is).
  - 'Modules Hub/' already built (run-modules-hub.ps1 already run) - it is,
    as of Aug 14.

WHAT THIS SCRIPT DOES:
  1. Skip guard - if 'Modules Hub/src/content/module-2/chapter3.ts' already
     contains the string "KPI Hasil", the update was already applied - safe
     no-op.
  2. Baseline commit - if the working tree is already dirty when this starts,
     commits that once as a labeled checkpoint.
  3. Runs Claude Code against the brief, un-abbreviated.
  4. Verifies with `npm run build` inside Modules Hub/ before committing
     (this builds the whole hub app, not just Module 2's slice - that's
     correct, since Modules Hub is one single app now).

NOTE ON `npm run build` failing through Cowork's device_bash but working
here: that's expected and not a bug in this script - Cowork's device bridge
runs in a different Linux VM than this Windows terminal, so its node_modules
native bundler bindings don't match. This script's `npm run build` runs
natively in your own environment and is the real check.
#>

param(
    [string]$Model = ""
)

$repoRoot = $PSScriptRoot
Set-Location $repoRoot
$hubDir = Join-Path $repoRoot "Modules Hub"
$promptFile = Join-Path $repoRoot "MODULE_2_TERMINOLOGY_UPDATE_PROMPT.md"
$checkFile = Join-Path $hubDir "src\content\module-2\chapter3.ts"

Write-Host "Modules Hub / Module 2: Lead/Lag -> KPI Usaha/KPI Hasil terminology update runner (v2)" -ForegroundColor Yellow
Write-Host "Repo root: $repoRoot`n"

if (-not (Test-Path $promptFile)) {
    Write-Host "Brief not found at $promptFile - stopping." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path (Join-Path $hubDir "src\data\modules.ts"))) {
    Write-Host "'Modules Hub/src/data/modules.ts' not found - Modules Hub hasn't been built yet." -ForegroundColor Red
    Write-Host "Run .\run-modules-hub.ps1 first, then retry this script." -ForegroundColor Red
    exit 1
}

if (Test-Path $checkFile) {
    $alreadyApplied = Select-String -Path $checkFile -Pattern "KPI Hasil" -Quiet
    if ($alreadyApplied) {
        Write-Host "'Modules Hub/src/content/module-2/chapter3.ts' already mentions 'KPI Hasil' - update already applied, skipping (no API call, no git touch)." -ForegroundColor DarkGray
        exit 0
    }
} else {
    Write-Host "'Modules Hub/src/content/module-2/chapter3.ts' not found - stopping." -ForegroundColor Red
    exit 1
}

# --- Baseline commit: only if the tree is already dirty before we start ---
$preExistingChanges = git status --porcelain
if ($preExistingChanges) {
    Write-Host "=== Working tree has uncommitted changes before this run starts - committing as a baseline checkpoint ===" -ForegroundColor Cyan
    git add -A
    git commit -m "Modules Hub / Module 2: baseline snapshot before terminology-update runner" | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Baseline commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
        exit 1
    }
    Write-Host "Baseline committed. Continuing with a clean tree.`n" -ForegroundColor Green
}

$cavemanDirective = "If the 'caveman' Claude Code plugin (https://github.com/JuliusBrussee/caveman) is installed on this machine, stay in caveman-compressed output mode for this entire run - terse, fragment-style commentary between tool calls, no filler explanations or restating what you're about to do. This only affects your own narration; write all code, comments, and the Bahasa Indonesia learner-facing copy in full, normal quality - nothing about the deliverable itself should be compressed or abbreviated. If the plugin isn't installed, ignore this paragraph and proceed normally."

$instruction = "$cavemanDirective`n`nRead the build brief at $promptFile in full using your Read tool, then execute it exactly as written from top to bottom. Do not summarize, skip, or abbreviate any section of it. Stay scoped to Modules Hub/src/content/module-2/ exactly as the brief says - do not touch the old standalone 'Module 2/' folder or any other module's content. Do not run 'git add' or 'git commit' yourself - leave the changes uncommitted, this script handles committing after verifying the build."

Write-Host "=== Running Claude Code ===" -ForegroundColor Cyan
$logFile = Join-Path $repoRoot "module2-terminology-update-run.log"
$headBefore = git rev-parse HEAD

if ($Model -ne "") {
    & claude -p $instruction --model $Model --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
} else {
    & claude -p $instruction --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
}
$claudeExit = $LASTEXITCODE

if ($claudeExit -ne 0) {
    Write-Host "Claude Code exited with code $claudeExit - stopping. See $logFile." -ForegroundColor Red
    exit 1
}

Write-Host "=== Checking what happened ===" -ForegroundColor Cyan
$headAfter = git rev-parse HEAD
$selfCommitted = ($headAfter -ne $headBefore)
$changes = git status --porcelain

if (-not $selfCommitted -and -not $changes) {
    Write-Host "No file changes and no new commit - Claude Code likely didn't complete the brief." -ForegroundColor Red
    Write-Host "Check $logFile for what it actually said, then retry: .\run-module2-terminology-update.ps1" -ForegroundColor Red
    exit 1
}

if ($selfCommitted) {
    Write-Host "Claude Code committed on its own despite the instruction not to (HEAD moved to $($headAfter.Substring(0,7))) - continuing, but noting it." -ForegroundColor DarkYellow
}

Write-Host "=== Verifying build ===" -ForegroundColor Cyan
Push-Location $hubDir
npm run build
$buildExit = $LASTEXITCODE
Pop-Location

if ($buildExit -ne 0) {
    Write-Host "'npm run build' failed." -ForegroundColor Red
    if ($selfCommitted) {
        Write-Host "Note: already self-committed by Claude Code BEFORE this build failure was caught - the broken state is in git history at $($headAfter.Substring(0,7)). Fix it forward rather than assuming nothing was saved." -ForegroundColor Red
    } else {
        Write-Host "Fix 'Modules Hub/src/content/module-2/' manually, or re-run: .\run-module2-terminology-update.ps1" -ForegroundColor Red
    }
    exit 1
}

if ($selfCommitted) {
    Write-Host "=== Already committed by Claude Code, skipping this script's own commit ===" -ForegroundColor Cyan
    git log -1 --oneline
} else {
    Write-Host "=== Committing checkpoint ===" -ForegroundColor Cyan
    git add -A
    git commit -m "Modules Hub / Module 2: rename Lead/Lag Metric to KPI Usaha/KPI Hasil (auto-built via run-module2-terminology-update.ps1)" | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "git commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
        exit 1
    }
}

Write-Host "`n=== Done - Module 2 terminology updated inside Modules Hub and building clean ===" -ForegroundColor Green
Write-Host "Next: cd 'Modules Hub'; npm run dev  -  open Module 2, eyeball the new KPI Usaha / KPI Hasil framing before it's considered final." -ForegroundColor Yellow
