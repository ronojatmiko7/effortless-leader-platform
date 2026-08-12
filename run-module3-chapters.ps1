<#
Module 3 - Chained Chapter Runner (v3 - fixes the Chapter 6 false-failure)

Runs MODULE_3_CHAPTER_<N>_REBUILD_PROMPT.md through the Claude Code CLI in sequence,
one chapter at a time, since each chapter's brief assumes the previous chapter's file
already exists in the repo.

CHANGES FROM v2:
  - The instruction now explicitly tells Claude Code NOT to run git commit itself -
    that's this script's job, so the checkpoint history stays predictable.
  - As a safety net in case it commits anyway (it has unrestricted Bash access, so
    nothing truly stops it): the script now compares git HEAD before/after the claude
    call. If HEAD moved, Claude Code already committed - the script logs that, skips
    its own commit step, but still independently re-runs npm run build as a check.
    Previously it only checked `git status --porcelain` for uncommitted changes, which
    read "already committed" as "nothing happened" and stopped the whole run for no
    real reason - that's what happened on Chapter 6.
  - True failure (no HEAD change AND no uncommitted changes) still stops the run.

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-module3-chapters.ps1 -Start 7 -End 8     # e.g. resume from chapter 7

REQUIREMENTS:
  - Claude Code CLI ('claude') on PATH and already logged in.
  - Run from your own terminal with network access.
  - `npm` and `git` on PATH, and Module 3/ already scaffolded.
#>

param(
    [int]$Start = 3,
    [int]$End = 8
)

$repoRoot = $PSScriptRoot
Set-Location $repoRoot

Write-Host "Module 3 chained runner: Chapters $Start-$End" -ForegroundColor Yellow
Write-Host "Repo root: $repoRoot`n"

for ($n = $Start; $n -le $End; $n++) {

    $promptFile = Join-Path $repoRoot "MODULE_3_CHAPTER_${n}_REBUILD_PROMPT.md"
    if (-not (Test-Path $promptFile)) {
        Write-Host "No prompt file for Chapter $n at `"$promptFile`" - stopping." -ForegroundColor Red
        break
    }

    Write-Host "=== Chapter $n : running Claude Code ===" -ForegroundColor Cyan
    $logFile = Join-Path $repoRoot "module3-chapter$n-run.log"
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
        Write-Host "Check $logFile for what it actually said, then retry with: .\run-module3-chapters.ps1 -Start $n -End $n" -ForegroundColor Red
        break
    }

    if ($selfCommitted) {
        Write-Host "Chapter $n : Claude Code committed on its own despite the instruction not to (HEAD moved to $($headAfter.Substring(0,7))) - continuing, but noting it." -ForegroundColor DarkYellow
    }

    Write-Host "=== Chapter $n : verifying build ===" -ForegroundColor Cyan
    Push-Location (Join-Path $repoRoot "Module 3")
    npm run build
    $buildExit = $LASTEXITCODE
    Pop-Location

    if ($buildExit -ne 0) {
        Write-Host "Chapter $n : 'npm run build' failed - stopping before Chapter $($n+1)." -ForegroundColor Red
        if ($selfCommitted) {
            Write-Host "Note: Chapter $n was already self-committed by Claude Code BEFORE this build failure was caught - the broken state is in git history at $($headAfter.Substring(0,7)). Fix it forward (edit the file and let this script commit the fix) rather than assuming nothing was saved." -ForegroundColor Red
        } else {
            Write-Host "Fix Module 3/ manually, or re-run just this chapter with: .\run-module3-chapters.ps1 -Start $n -End $n" -ForegroundColor Red
        }
        break
    }

    if ($selfCommitted) {
        Write-Host "=== Chapter $n : already committed by Claude Code, skipping this script's own commit ===" -ForegroundColor Cyan
        git log -1 --oneline
    } else {
        Write-Host "=== Chapter $n : committing checkpoint ===" -ForegroundColor Cyan
        git add -A
        git commit -m "Module 3 Chapter $n (auto-built via chained script)" | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Chapter $n : git commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
            break
        }
    }

    Write-Host "=== Chapter $n : done ===`n" -ForegroundColor Green
}

Write-Host "Chained run finished. Review with: git log --oneline -n 8" -ForegroundColor Yellow
