<#
Effortless Leader Funnel - one-shot build runner (v1)

Runs EFFORTLESS_LEADER_FUNNEL_PROMPT.md through the Claude Code CLI to build
the self-serve "Quiz -> Instant Report -> Offer" funnel app. This is the one
piece every other checklist item (backend, payments, Calendly, ads) is
blocked on - the brief was written back on Aug 11 but never executed, so
'Effortless Leader Funnel/' doesn't exist in this repo yet.

Unlike the Module 2-8 chapter runners, this is a SINGLE build (one brief, one
run, not eight chained chapters), so there's no scaffold-module.ps1 step -
the brief already tells Claude Code to create a brand-new top-level folder
from scratch (mirroring Module 1's stack/conventions, not literally porting
its files), and a one-time `npm create vite` + `npm install` inside a single
Claude Code run isn't worth hoisting out the way per-chapter porting was.

CAVEMAN MODE: same token-efficiency reasoning as Module 8's runner (see
prediagnosis-funnel-workflow.md in project memory) - Cowork and this
terminal's `claude -p` calls share the same usage quota, so keeping Claude
Code's own narration compressed during this run matters. Two belts, one
suspender:
  1. A literal `/caveman full` line at the very top of the instruction, in
     case you ever run this brief interactively instead (paste into a normal
     `claude` session) - the plugin's slash command works directly there.
  2. A plain-English fallback directive right after it, for headless `-p`
     mode where the plugin's session-start hook may not reliably fire.
Neither line touches the quality of the code or the Bahasa Indonesia
learner-facing copy Claude Code writes - only how much it narrates while
writing it. If the caveman plugin (https://github.com/JuliusBrussee/caveman)
isn't installed on this machine, both lines are inert - Claude Code just
reads them as style preferences and proceeds normally.

ONE-TIME SETUP NEEDED ON THIS MACHINE (not done by this script - a
third-party install script, review it before running):

    irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-funnel-app.ps1                               # builds it if not already built
    .\run-funnel-app.ps1 -Model claude-sonnet-4-5       # pin a specific model

REQUIREMENTS:
  - Claude Code CLI ('claude') on PATH and already logged in.
  - Run from your own terminal with network access.
  - `npm` and `git` on PATH.
  - EFFORTLESS_LEADER_FUNNEL_PROMPT.md present in this same folder (it already is).
  - Optional but recommended for token savings: the caveman plugin installed
    once (see the setup note above).

WHAT THIS SCRIPT DOES, mirroring the module runners' safety pattern:
  1. Skip guard - if 'Effortless Leader Funnel/package.json' already exists,
     this is a safe no-op (already built).
  2. Baseline commit - if the working tree is already dirty when this starts,
     commits that once as a labeled checkpoint so the "did Claude Code
     actually do something" check below is meaningful.
  3. Runs Claude Code against the existing brief, un-abbreviated.
  4. Verifies with `npm run build` inside the new folder before committing.
#>

param(
    [string]$Model = ""
)

$repoRoot = $PSScriptRoot
Set-Location $repoRoot
$appDir = Join-Path $repoRoot "Effortless Leader Funnel"
$promptFile = Join-Path $repoRoot "EFFORTLESS_LEADER_FUNNEL_PROMPT.md"

Write-Host "Effortless Leader Funnel: one-shot build runner" -ForegroundColor Yellow
Write-Host "Repo root: $repoRoot`n"

if (Test-Path (Join-Path $appDir "package.json")) {
    Write-Host "'Effortless Leader Funnel/package.json' already exists - already built, skipping (no API call, no git touch)." -ForegroundColor DarkGray
    exit 0
}

if (-not (Test-Path $promptFile)) {
    Write-Host "Brief not found at $promptFile - stopping." -ForegroundColor Red
    exit 1
}

# --- Baseline commit: only if the tree is already dirty before we start ---
$preExistingChanges = git status --porcelain
if ($preExistingChanges) {
    Write-Host "=== Working tree has uncommitted changes before this run starts - committing as a baseline checkpoint ===" -ForegroundColor Cyan
    git add -A
    git commit -m "Effortless Leader Funnel: baseline snapshot before build runner" | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Baseline commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
        exit 1
    }
    Write-Host "Baseline committed. Continuing with a clean tree.`n" -ForegroundColor Green
}

$cavemanDirective = "/caveman full`n`nIf the 'caveman' Claude Code plugin (https://github.com/JuliusBrussee/caveman) is installed on this machine, stay in caveman-compressed output mode for this entire run - terse, fragment-style commentary between tool calls, no filler explanations or restating what you're about to do. This only affects your own narration; write all code, comments, and the Bahasa Indonesia learner-facing copy in full, normal quality - nothing about the deliverable itself should be compressed or abbreviated. If the plugin isn't installed, ignore the /caveman line and this paragraph and proceed normally."

$instruction = "$cavemanDirective`n`nRead the build brief at $promptFile in full using your Read tool, then execute it exactly as written from top to bottom, creating the new 'Effortless Leader Funnel/' folder as instructed. Do not summarize, skip, or abbreviate any section of it. Do not run 'git add' or 'git commit' yourself - leave the changes uncommitted, this script handles committing after verifying the build."

Write-Host "=== Running Claude Code ===" -ForegroundColor Cyan
$logFile = Join-Path $repoRoot "funnel-app-run.log"
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
    Write-Host "Check $logFile for what it actually said, then retry: .\run-funnel-app.ps1" -ForegroundColor Red
    exit 1
}

if ($selfCommitted) {
    Write-Host "Claude Code committed on its own despite the instruction not to (HEAD moved to $($headAfter.Substring(0,7))) - continuing, but noting it." -ForegroundColor DarkYellow
}

if (-not (Test-Path (Join-Path $appDir "package.json"))) {
    Write-Host "'Effortless Leader Funnel/package.json' still doesn't exist after the run - Claude Code likely built something else or in the wrong place. Check $logFile." -ForegroundColor Red
    exit 1
}

Write-Host "=== Verifying build ===" -ForegroundColor Cyan
Push-Location $appDir
if (-not (Test-Path "node_modules")) {
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "npm install failed - stopping before build verification." -ForegroundColor Red
        Pop-Location
        exit 1
    }
}
npm run build
$buildExit = $LASTEXITCODE
Pop-Location

if ($buildExit -ne 0) {
    Write-Host "'npm run build' failed." -ForegroundColor Red
    if ($selfCommitted) {
        Write-Host "Note: already self-committed by Claude Code BEFORE this build failure was caught - the broken state is in git history at $($headAfter.Substring(0,7)). Fix it forward rather than assuming nothing was saved." -ForegroundColor Red
    } else {
        Write-Host "Fix 'Effortless Leader Funnel/' manually, or re-run: .\run-funnel-app.ps1" -ForegroundColor Red
    }
    exit 1
}

if ($selfCommitted) {
    Write-Host "=== Already committed by Claude Code, skipping this script's own commit ===" -ForegroundColor Cyan
    git log -1 --oneline
} else {
    Write-Host "=== Committing checkpoint ===" -ForegroundColor Cyan
    git add -A
    git commit -m "Effortless Leader Funnel: initial build (auto-built via run-funnel-app.ps1)" | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "git commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
        exit 1
    }
}

Write-Host "`n=== Done - 'Effortless Leader Funnel/' built and building clean ===" -ForegroundColor Green
Write-Host "Next: cd 'Effortless Leader Funnel'; npm run dev  -  to eyeball it before wiring backend/payments/Calendly." -ForegroundColor Yellow
