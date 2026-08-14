<#
Modules Hub - build runner (v1)

Consolidates Modules 1-8 (currently 8 separate standalone apps) into one
unified app, "Modules Hub/", with a top-level module list gated by a
purchase-access stub. Two-part pattern, same as every other module build in
this repo: mechanical porting via scaffold-modules-hub.ps1 (no LLM tokens
spent on pure file copying), then a single Claude Code run for the parts
that need actual judgment (new module registry, access stub, hub home
screen, parameterizing the four files that were still single-module-shaped
after the scaffold step). See MODULES_HUB_BUILD_PROMPT.md for the full brief
and prediagnosis-funnel-workflow.md in project memory for the investigation
that grounded this design.

SEQUENCING NOTE: if you want Module 2's KPI Usaha/KPI Hasil terminology
update included, run run-module2-terminology-update.ps1 BEFORE this script -
the scaffold step ports Module 2's content as-is, whatever state it's in at
that moment. Not required; can also be done later directly inside
Modules Hub/src/content/module-2/ if you'd rather sequence it that way.

CAVEMAN MODE: same plain-English-only directive as every other runner in
this repo (see prediagnosis-funnel-workflow.md - a literal `/caveman full`
slash line breaks headless `-p` mode, confirmed by an earlier failed run).

ONE-TIME SETUP NEEDED ON THIS MACHINE (not done by this script - a
third-party install script, review it before running):

    irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-modules-hub.ps1
    .\run-modules-hub.ps1 -Model claude-sonnet-4-5   # pin a specific model

REQUIREMENTS:
  - Claude Code CLI ('claude') on PATH and already logged in.
  - Run from your own terminal with network access.
  - `npm` and `git` on PATH.
  - robocopy on PATH (standard on Windows) - used by scaffold-modules-hub.ps1.
  - scaffold-modules-hub.ps1 and MODULES_HUB_BUILD_PROMPT.md present in this
    same folder (they already are).

WHAT THIS SCRIPT DOES, mirroring every other runner's safety pattern:
  1. Runs scaffold-modules-hub.ps1 if 'Modules Hub/' isn't scaffolded yet
     (it's idempotent, safe to call unconditionally).
  2. npm install once if node_modules is missing.
  3. Baseline commit if the tree is already dirty when this starts.
  4. Runs Claude Code against MODULES_HUB_BUILD_PROMPT.md, un-abbreviated.
  5. Verifies with `npm run build` inside Modules Hub/ before committing.

This is a BIG change (new app, 4 rewritten files, 64 ported chapter files) -
after this finishes, actually click through it (`cd 'Modules Hub'; npm run
dev`) before trusting it: open a couple of different modules, complete a
chapter in one, confirm progress doesn't leak into another module, confirm
the Hub Home's locked/unlocked states look right.
#>

param(
    [string]$Model = ""
)

$repoRoot = $PSScriptRoot
Set-Location $repoRoot
$hubDir = Join-Path $repoRoot "Modules Hub"
$promptFile = Join-Path $repoRoot "MODULES_HUB_BUILD_PROMPT.md"

Write-Host "Modules Hub: build runner" -ForegroundColor Yellow
Write-Host "Repo root: $repoRoot`n"

if (-not (Test-Path $promptFile)) {
    Write-Host "Brief not found at $promptFile - stopping." -ForegroundColor Red
    exit 1
}

# --- Step 0: mechanical scaffold (idempotent, safe to call unconditionally) ---
if (-not (Test-Path (Join-Path $hubDir "src\data\modules.ts"))) {
    Write-Host "=== Running scaffold-modules-hub.ps1 ===" -ForegroundColor Cyan
    $scaffoldScript = Join-Path $repoRoot "scaffold-modules-hub.ps1"
    if (-not (Test-Path $scaffoldScript)) {
        Write-Host "scaffold-modules-hub.ps1 not found at $scaffoldScript - stopping." -ForegroundColor Red
        exit 1
    }
    & $scaffoldScript
    if ($LASTEXITCODE -ne 0) {
        Write-Host "scaffold-modules-hub.ps1 failed (exit $LASTEXITCODE) - stopping before running Claude Code." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "'Modules Hub/src/data/modules.ts' already exists - hub build already applied, skipping (no API call, no git touch)." -ForegroundColor DarkGray
    exit 0
}

if (-not (Test-Path (Join-Path $hubDir "node_modules"))) {
    Write-Host "=== Modules Hub/node_modules missing - running npm install once ===" -ForegroundColor Cyan
    Push-Location $hubDir
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "npm install failed (exit $LASTEXITCODE) - stopping before the Claude Code run." -ForegroundColor Red
        Pop-Location
        exit 1
    }
    Pop-Location
}

# --- Baseline commit: only if the tree is already dirty before we start ---
$preExistingChanges = git status --porcelain
if ($preExistingChanges) {
    Write-Host "=== Working tree has uncommitted changes before this run starts - committing as a baseline checkpoint ===" -ForegroundColor Cyan
    Write-Host "(Expected: the scaffold step above, plus this brief/script, weren't added via git yet.)"
    git add -A
    git commit -m "Modules Hub: baseline snapshot before build runner (scaffold + brief)" | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Baseline commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
        exit 1
    }
    Write-Host "Baseline committed. Continuing with a clean tree.`n" -ForegroundColor Green
}

$cavemanDirective = "If the 'caveman' Claude Code plugin (https://github.com/JuliusBrussee/caveman) is installed on this machine, stay in caveman-compressed output mode for this entire run - terse, fragment-style commentary between tool calls, no filler explanations or restating what you're about to do. This only affects your own narration; write all code, comments, and the Bahasa Indonesia learner-facing copy in full, normal quality - nothing about the deliverable itself should be compressed or abbreviated. If the plugin isn't installed, ignore this paragraph and proceed normally."

$instruction = "$cavemanDirective`n`nRead the build brief at $promptFile in full using your Read tool, then execute it exactly as written from top to bottom. This is a substantial multi-file change (new module registry, new access stub, new hub home screen, four rewritten files) - take the time to get the guardrails in section 3 right, especially not touching any content file or card/field id. Do not summarize, skip, or abbreviate any section of the brief. Do not run 'git add' or 'git commit' yourself - leave the changes uncommitted, this script handles committing after verifying the build."

Write-Host "=== Running Claude Code (this is a big brief, expect it to take a while) ===" -ForegroundColor Cyan
$logFile = Join-Path $repoRoot "modules-hub-run.log"
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
    Write-Host "Check $logFile for what it actually said, then retry: .\run-modules-hub.ps1" -ForegroundColor Red
    exit 1
}

if ($selfCommitted) {
    Write-Host "Claude Code committed on its own despite the instruction not to (HEAD moved to $($headAfter.Substring(0,7))) - continuing, but noting it." -ForegroundColor DarkYellow
}

if (-not (Test-Path (Join-Path $hubDir "src\data\modules.ts"))) {
    Write-Host "'Modules Hub/src/data/modules.ts' still doesn't exist after the run - the brief likely wasn't completed. Check $logFile." -ForegroundColor Red
    exit 1
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
        Write-Host "Fix 'Modules Hub/' manually, or re-run: .\run-modules-hub.ps1" -ForegroundColor Red
    }
    exit 1
}

if ($selfCommitted) {
    Write-Host "=== Already committed by Claude Code, skipping this script's own commit ===" -ForegroundColor Cyan
    git log -1 --oneline
} else {
    Write-Host "=== Committing checkpoint ===" -ForegroundColor Cyan
    git add -A
    git commit -m "Modules Hub: consolidate Modules 1-8 into one app with access gating (auto-built via run-modules-hub.ps1)" | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "git commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
        exit 1
    }
}

Write-Host "`n=== Done - Modules Hub built and building clean ===" -ForegroundColor Green
Write-Host "Next: cd 'Modules Hub'; npm run dev  -  click through it before trusting it. Open a couple" -ForegroundColor Yellow
Write-Host "of different modules, complete a chapter in one, confirm progress doesn't leak into another." -ForegroundColor Yellow
