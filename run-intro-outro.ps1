<#
Modules Hub - per-module Intro/Outro (pretest/posttest) content generator (v3).

Runs MODULE_INTRO_OUTRO_PROMPT.md through the Claude Code CLI once per
module, for every module that doesn't have intro/outro content yet. Module 2
already has this (built as the reference pilot on Aug 18, directly in the
Cowork session, not via this script) - it's skipped automatically.

UPDATED Aug 18 (v3): each module now has 10 chapters, not 8 - an intro
chapter, Chapters 1-8 unchanged, and an outro chapter - as three separate
entries in that module's own content/module-N/chapters.ts array (intro
first, outro last). This replaces v2's approach (same day), which spliced
intro/outro cards into Chapter 1's and Chapter 8's own card arrays instead
of giving them their own chapter entries - that was wrong, this is the
corrected version. If you ran v1 or v2 of this script before today, that
content used a different architecture that has since been reverted -
re-run this v3 script against a clean module to get the current pattern.

Module 9 is deliberately EXCLUDED from this run: it hasn't been ported into
Modules Hub yet (Modules Hub/src/data/modules.ts only registers Modules 1-8
as of this writing) - that porting is a separate prerequisite task. Add "9"
back into $targetModules below once that's done.

CAVEMAN MODE: same token-efficiency reasoning as every other runner in this
repo - plain-English directive only, deliberately NOT a literal `/caveman`
slash-command line (headless `claude -p` errors on a literal leading
`/word` - confirmed by an earlier failed run).

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-intro-outro.ps1
    .\run-intro-outro.ps1 -Model claude-sonnet-4-5   # pin a specific model
    .\run-intro-outro.ps1 -Modules 3,5               # only run specific modules

REQUIREMENTS:
  - Claude Code CLI ('claude') on PATH and already logged in.
  - Run from your own terminal with network access.
  - `npm` and `git` on PATH.
  - MODULE_INTRO_OUTRO_PROMPT.md present in this same folder (it already is).
  - The shared assessment-card infrastructure already exists in
    Modules Hub/src/ (types/card.ts's assessment-question/assessment-result
    types and its ChapterMeta `kind?` field, components/cards/
    AssessmentQuestionCard.tsx + AssessmentResultCard.tsx, DeckViewer.tsx's
    handling of them, ModuleHome.tsx's intro/outro-aware rendering,
    intro-outro/buildAssessmentCards.ts, and Module 2's own
    intro.ts/outro.ts/assessmentQuestions.ts/chapters.ts as the pattern to
    copy) - built directly in the Aug 18 Cowork session, already committed.

WHAT THIS SCRIPT DOES, per module N in the list:
  1. Skip guard - if 'Modules Hub/src/content/module-N/intro.ts' already
     exists, that module is done - skip it, no API call.
  2. Baseline commit - if the tree is dirty before this module's run starts,
     commits that once as a checkpoint (keeps each module's diff isolated).
  3. Runs Claude Code against MODULE_INTRO_OUTRO_PROMPT.md, telling it which
     module number this run targets.
  4. Verifies with `npm run build` inside Modules Hub/ before committing.
  5. Commits this module's intro/outro as its own checkpoint, then moves to
     the next module in the list - one failure doesn't lose progress on the
     modules already done.
#>

param(
    [string]$Model = "",
    [int[]]$Modules = @(1, 3, 4, 5, 6, 7, 8)
)

$repoRoot = $PSScriptRoot
Set-Location $repoRoot
$hubDir = Join-Path $repoRoot "Modules Hub"
$promptFile = Join-Path $repoRoot "MODULE_INTRO_OUTRO_PROMPT.md"

Write-Host "Modules Hub: Intro/Outro (pretest/posttest) generator v3 - modules: $($Modules -join ', ')" -ForegroundColor Yellow
Write-Host "Repo root: $repoRoot`n"

if (-not (Test-Path $promptFile)) {
    Write-Host "Brief not found at $promptFile - stopping." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path (Join-Path $hubDir "src\data\modules.ts"))) {
    Write-Host "'Modules Hub/src/data/modules.ts' not found - Modules Hub hasn't been built yet." -ForegroundColor Red
    exit 1
}

$cavemanDirective = "If the 'caveman' Claude Code plugin (https://github.com/JuliusBrussee/caveman) is installed on this machine, stay in caveman-compressed output mode for this entire run - terse, fragment-style commentary between tool calls, no filler explanations or restating what you're about to do. This only affects your own narration; write all code, comments, and the Bahasa Indonesia learner-facing copy in full, normal quality - nothing about the deliverable itself should be compressed or abbreviated. If the plugin isn't installed, ignore this paragraph and proceed normally."

foreach ($moduleNum in $Modules) {
    Write-Host "`n=========================================================" -ForegroundColor Magenta
    Write-Host "=== Module $moduleNum ===" -ForegroundColor Magenta
    Write-Host "=========================================================" -ForegroundColor Magenta

    $contentDir = Join-Path $hubDir "src\content\module-$moduleNum"
    $checkFile = Join-Path $contentDir "intro.ts"

    if (-not (Test-Path $contentDir)) {
        Write-Host "'$contentDir' doesn't exist - Module $moduleNum isn't in Modules Hub yet, skipping." -ForegroundColor Red
        continue
    }

    if (Test-Path $checkFile) {
        Write-Host "'$checkFile' already exists - Module $moduleNum already done, skipping (no API call, no git touch)." -ForegroundColor DarkGray
        continue
    }

    # --- Baseline commit: only if the tree is already dirty before this module starts ---
    $preExistingChanges = git status --porcelain
    if ($preExistingChanges) {
        Write-Host "=== Working tree dirty before Module $moduleNum starts - committing as a baseline checkpoint ===" -ForegroundColor Cyan
        git add -A
        git commit -m "Modules Hub: baseline snapshot before Module $moduleNum intro/outro run" | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Baseline commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
            exit 1
        }
    }

    $instruction = "$cavemanDirective`n`nTARGET MODULE: Module $moduleNum`n`nRead the build brief at $promptFile in full using your Read tool, then execute it exactly as written from top to bottom for Module $moduleNum specifically. Do not summarize, skip, or abbreviate any section of it. Stay scoped to 'Modules Hub/src/content/module-$moduleNum/' (including that module's own chapters.ts, which the brief tells you to edit by adding a chapter-intro entry and a chapter-outro entry) and do not touch any other module's content, Module 2's own files, 'Modules Hub/src/data/modules.ts', or any shared infrastructure file (App.tsx, ProgressContext.tsx, ModuleHome.tsx, DeckViewer.tsx, buildAssessmentCards.ts, types/card.ts). Do not run 'git add' or 'git commit' yourself - leave the changes uncommitted, this script handles committing after verifying the build."

    Write-Host "=== Running Claude Code for Module $moduleNum ===" -ForegroundColor Cyan
    $logFile = Join-Path $repoRoot "intro-outro-module$moduleNum-run.log"
    $headBefore = git rev-parse HEAD

    if ($Model -ne "") {
        & claude -p $instruction --model $Model --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
    } else {
        & claude -p $instruction --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
    }
    $claudeExit = $LASTEXITCODE

    if ($claudeExit -ne 0) {
        Write-Host "Claude Code exited with code $claudeExit for Module $moduleNum - stopping the whole run. See $logFile." -ForegroundColor Red
        Write-Host "Modules already completed before this one are safely committed. Re-run this script to resume from Module $moduleNum." -ForegroundColor Yellow
        exit 1
    }

    $headAfter = git rev-parse HEAD
    $selfCommitted = ($headAfter -ne $headBefore)
    $changes = git status --porcelain

    if (-not $selfCommitted -and -not $changes) {
        Write-Host "No file changes and no new commit for Module $moduleNum - Claude Code likely didn't complete the brief." -ForegroundColor Red
        Write-Host "Check $logFile, then re-run this script to resume from Module $moduleNum." -ForegroundColor Red
        exit 1
    }

    if ($selfCommitted) {
        Write-Host "Claude Code committed on its own despite the instruction not to (HEAD moved to $($headAfter.Substring(0,7))) - continuing, but noting it." -ForegroundColor DarkYellow
    }

    Write-Host "=== Verifying build for Module $moduleNum ===" -ForegroundColor Cyan
    Push-Location $hubDir
    npm run build
    $buildExit = $LASTEXITCODE
    Pop-Location

    if ($buildExit -ne 0) {
        Write-Host "'npm run build' failed after Module $moduleNum's changes." -ForegroundColor Red
        if ($selfCommitted) {
            Write-Host "Note: already self-committed by Claude Code BEFORE this build failure was caught (at $($headAfter.Substring(0,7))) - fix it forward rather than assuming nothing was saved." -ForegroundColor Red
        } else {
            Write-Host "Fix 'Modules Hub/src/content/module-$moduleNum/' manually, or re-run this script to retry." -ForegroundColor Red
        }
        exit 1
    }

    if ($selfCommitted) {
        Write-Host "=== Already committed by Claude Code for Module $moduleNum, skipping this script's own commit ===" -ForegroundColor Cyan
    } else {
        Write-Host "=== Committing Module $moduleNum checkpoint ===" -ForegroundColor Cyan
        git add -A
        git commit -m "Modules Hub: add intro/outro chapters + pretest/posttest for Module $moduleNum (auto-built via run-intro-outro.ps1, v3 architecture)" | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "git commit failed (exit $LASTEXITCODE) for Module $moduleNum - stopping so you can check git status by hand." -ForegroundColor Red
            exit 1
        }
    }

    Write-Host "=== Module $moduleNum done and building clean ===" -ForegroundColor Green
}

Write-Host "`n=== All requested modules processed ===" -ForegroundColor Green
Write-Host "Next: cd 'Modules Hub'; npm run dev  -  open a module from the Hub and confirm it now lists 10 chapters (intro, Bab 1-8, outro) before it's considered final." -ForegroundColor Yellow
