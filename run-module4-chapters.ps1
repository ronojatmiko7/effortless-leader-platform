<#
Module 4 - Chained Chapter Runner (v1 - idempotent version)

Runs MODULE_4_CHAPTER_<N>_REBUILD_PROMPT.md through the Claude Code CLI in
sequence, one chapter at a time, mirroring run-module3-chapters.ps1 -
with two safety changes that matter specifically for Module 4:

  1. SKIP GUARD. Module 4/ was already fully built once (scaffold +
     Chapters 1-8, via Claude in Cowork) and delivered straight onto this
     disk - NOT through git. Chapter 1's brief says "there is no Module 4/
     app yet", which is no longer true. If this script blindly re-ran every
     chapter, Claude Code would be told a false precondition and could
     rebuild/overwrite already-working content unpredictably. So before
     invoking Claude Code for chapter N, the script checks whether
     Module 4/src/content/chapterN.ts already exists - if it does, that
     chapter is skipped with a message, no API call, no git touch. This
     makes the whole script idempotent: running it right now (chapters
     already present) should skip all 8 and do nothing. It only actually
     builds a chapter if that chapter's file is genuinely missing (e.g.
     you delete one to force a regen, or you run this against a fresh
     clone that never had Module 4/ delivered).

  2. BASELINE COMMIT. Because the existing Module 4/ files were written to
     disk directly (not via git), your working tree almost certainly has
     uncommitted changes before this script ever runs. The per-chapter
     "did Claude Code actually do something" check relies on comparing
     git status/HEAD before and after each chapter - if the tree is
     already dirty going in, that check can't tell "this chapter changed
     something" apart from "unrelated pre-existing changes are just
     sitting there". So, if there are uncommitted changes when the script
     starts, it commits them ONCE up front as a clearly-labeled baseline
     checkpoint, then proceeds with a clean tree. If you'd rather review
     and commit that yourself first, just run `git add -A; git commit`
     before launching this script - the baseline step is a no-op on a
     clean tree.

CAUTION - regenerating a middle chapter after Chapter 8 exists: Chapter 8's
report card reads specific cardId/fieldId values out of Chapters 1-7's real
source files (see MODULE_4_CHAPTER_8_REBUILD_PROMPT.md section 5). If you
delete and regenerate, say, chapter4.ts on its own, a fresh Claude Code run
may pick different card ids/field names than the ones already wired into
chapter8.ts's report - silently breaking that row of the report (it will
just render "(belum diisi)" instead of erroring). If you force a regen of
any chapter 1-7, re-run chapter 8 afterward too, or manually diff its
report field map against the regenerated file.

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-module4-chapters.ps1                # runs 1-8, skips what already exists
    .\run-module4-chapters.ps1 -Start 4 -End 4 # force just one chapter (delete its file first to force a real regen)

REQUIREMENTS:
  - Claude Code CLI ('claude') on PATH and already logged in.
  - Run from your own terminal with network access.
  - `npm` and `git` on PATH.
  - Module 4/'s node_modules isn't included in what was delivered to this
    disk (it's never committed/copied - only package.json/package-lock.json
    are) - this script runs `npm install` once up front if node_modules is
    missing, before touching any chapter.
#>

param(
    [int]$Start = 1,
    [int]$End = 8
)

$repoRoot = $PSScriptRoot
Set-Location $repoRoot
$moduleDir = Join-Path $repoRoot "Module 4"

Write-Host "Module 4 chained runner: Chapters $Start-$End" -ForegroundColor Yellow
Write-Host "Repo root: $repoRoot`n"

if (-not (Test-Path $moduleDir)) {
    Write-Host "'Module 4' folder doesn't exist yet - that's fine, Chapter 1's brief scaffolds it from scratch." -ForegroundColor DarkYellow
} elseif (-not (Test-Path (Join-Path $moduleDir "node_modules"))) {
    Write-Host "=== Module 4/node_modules missing - running npm install once ===" -ForegroundColor Cyan
    Push-Location $moduleDir
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "npm install failed (exit $LASTEXITCODE) - stopping before touching any chapter." -ForegroundColor Red
        Pop-Location
        exit 1
    }
    Pop-Location
}

# --- Baseline commit: only if the tree is already dirty before we start ---
$preExistingChanges = git status --porcelain
if ($preExistingChanges) {
    Write-Host "=== Working tree has uncommitted changes before this run starts - committing as a baseline checkpoint ===" -ForegroundColor Cyan
    Write-Host "(This is expected the first time you run this script, since Module 4/ was delivered to disk directly, not via git.)"
    git add -A
    git commit -m "Module 4: baseline snapshot before chained runner (pre-existing files)" | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Baseline commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
        exit 1
    }
    Write-Host "Baseline committed. Continuing with a clean tree.`n" -ForegroundColor Green
}

for ($n = $Start; $n -le $End; $n++) {

    $chapterFile = Join-Path $moduleDir "src\content\chapter$n.ts"
    if (Test-Path $chapterFile) {
        Write-Host "=== Chapter $n : Module 4/src/content/chapter$n.ts already exists - skipping (no API call, no git touch) ===" -ForegroundColor DarkGray
        continue
    }

    $promptFile = Join-Path $repoRoot "MODULE_4_CHAPTER_${n}_REBUILD_PROMPT.md"
    if (-not (Test-Path $promptFile)) {
        Write-Host "No prompt file for Chapter $n at `"$promptFile`" - stopping." -ForegroundColor Red
        break
    }

    Write-Host "=== Chapter $n : running Claude Code ===" -ForegroundColor Cyan
    $logFile = Join-Path $repoRoot "module4-chapter$n-run.log"
    $headBefore = git rev-parse HEAD

    $instruction = "Read the build brief at $promptFile in full using your Read tool, then execute it exactly as written from top to bottom. Do not summarize, skip, or abbreviate any section of it. Do not run 'git add' or 'git commit' yourself - leave the changes uncommitted, a separate process handles committing after verifying the build."

    & claude -p $instruction --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
    $claudeExit = $LASTEXITCODE

    if ($claudeExit -ne 0) {
        Write-Host "Chapter $n : Claude Code exited with code $claudeExit - stopping. See $logFile." -ForegroundColor Red
        break
    }

    Write-Host "=== Chapter $n : checking what happened ===" -ForegroundColor Cyan
    $headAfter = git rev-parse HEAD
    $selfCommitted = ($headAfter -ne $headBefore)
    $changes = git status --porcelain

    if (-not $selfCommitted -and -not $changes) {
        Write-Host "Chapter $n : no file changes and no new commit - Claude Code likely didn't complete the brief." -ForegroundColor Red
        Write-Host "Check $logFile for what it actually said, then retry with: .\run-module4-chapters.ps1 -Start $n -End $n" -ForegroundColor Red
        break
    }

    if ($selfCommitted) {
        Write-Host "Chapter $n : Claude Code committed on its own despite the instruction not to (HEAD moved to $($headAfter.Substring(0,7))) - continuing, but noting it." -ForegroundColor DarkYellow
    }

    Write-Host "=== Chapter $n : verifying build ===" -ForegroundColor Cyan
    Push-Location $moduleDir
    npm run build
    $buildExit = $LASTEXITCODE
    Pop-Location

    if ($buildExit -ne 0) {
        Write-Host "Chapter $n : 'npm run build' failed - stopping before Chapter $($n+1)." -ForegroundColor Red
        if ($selfCommitted) {
            Write-Host "Note: Chapter $n was already self-committed by Claude Code BEFORE this build failure was caught - the broken state is in git history at $($headAfter.Substring(0,7)). Fix it forward (edit the file and let this script commit the fix) rather than assuming nothing was saved." -ForegroundColor Red
        } else {
            Write-Host "Fix Module 4/ manually, or re-run just this chapter with: .\run-module4-chapters.ps1 -Start $n -End $n" -ForegroundColor Red
        }
        break
    }

    if ($selfCommitted) {
        Write-Host "=== Chapter $n : already committed by Claude Code, skipping this script's own commit ===" -ForegroundColor Cyan
        git log -1 --oneline
    } else {
        Write-Host "=== Chapter $n : committing checkpoint ===" -ForegroundColor Cyan
        git add -A
        git commit -m "Module 4 Chapter $n (auto-built via chained script)" | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Chapter $n : git commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
            break
        }
    }

    Write-Host "=== Chapter $n : done ===`n" -ForegroundColor Green
}

Write-Host "Chained run finished. Review with: git log --oneline -n 10" -ForegroundColor Yellow
Write-Host "If every chapter was skipped, Module 4/ was already complete - nothing to do." -ForegroundColor Yellow
