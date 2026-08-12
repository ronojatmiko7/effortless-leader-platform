<#
Module 3 - Chained Chapter Runner (v2 - fixes the Chapter 4 truncation issue)

Runs MODULE_3_CHAPTER_<N>_REBUILD_PROMPT.md through the Claude Code CLI in sequence,
one chapter at a time, since each chapter's brief assumes the previous chapter's file
already exists in the repo (for voice-matching, and Chapter 8's report card literally
reads real card IDs out of Chapters 1-7).

CHANGES FROM v1:
  - No longer passes the whole brief as a giant command-line argument. Windows'
    PowerShell-to-native-exe argument marshaling can silently truncate long strings
    that contain embedded quote characters - this is what ate Chapter 4's brief.
    Now the -p instruction is a short, quote-free sentence telling Claude Code to
    read the brief file itself (it already has Read access), so nothing user-authored
    ever goes through the fragile argument path.
  - After each chapter, checks `git status --porcelain` before deciding it succeeded.
    A clean build with ZERO file changes now counts as a failure and stops the run,
    instead of silently moving on to the next chapter (which is what let Chapter 5
    start building against a missing Chapter 4 last time).
  - Checks $LASTEXITCODE after `git commit` directly instead of relying on try/catch,
    since a failed native command doesn't throw a catchable PowerShell exception.

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine (needs network +
your logged-in Claude Code CLI - this will NOT work from a sandboxed/offline shell):

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-module3-chapters.ps1                    # runs chapters 3-8
    .\run-module3-chapters.ps1 -Start 4 -End 8     # resume from chapter 4

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

    # Short, quote-free instruction - Claude Code reads the actual brief itself via
    # its Read tool, so the fragile long-argument path is never used.
    $instruction = "Read the build brief at $promptFile in full using your Read tool, then execute it exactly as written from top to bottom. Do not summarize, skip, or abbreviate any section of it."

    & claude -p $instruction --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
    $claudeExit = $LASTEXITCODE

    if ($claudeExit -ne 0) {
        Write-Host "Chapter $n : Claude Code exited with code $claudeExit - stopping. See $logFile." -ForegroundColor Red
        break
    }

    Write-Host "=== Chapter $n : checking for actual file changes ===" -ForegroundColor Cyan
    $changes = git status --porcelain
    if (-not $changes) {
        Write-Host "Chapter $n : no file changes were made - Claude Code likely didn't complete the brief." -ForegroundColor Red
        Write-Host "Check $logFile for what it actually said, then retry with: .\run-module3-chapters.ps1 -Start $n -End $n" -ForegroundColor Red
        break
    }

    Write-Host "=== Chapter $n : verifying build ===" -ForegroundColor Cyan
    Push-Location (Join-Path $repoRoot "Module 3")
    npm run build
    $buildExit = $LASTEXITCODE
    Pop-Location

    if ($buildExit -ne 0) {
        Write-Host "Chapter $n : 'npm run build' failed - stopping before Chapter $($n+1)." -ForegroundColor Red
        Write-Host "Fix Module 3/ manually, or re-run just this chapter with: .\run-module3-chapters.ps1 -Start $n -End $n" -ForegroundColor Red
        break
    }

    Write-Host "=== Chapter $n : committing checkpoint ===" -ForegroundColor Cyan
    git add -A
    git commit -m "Module 3 Chapter $n (auto-built via chained script)" | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Chapter $n : git commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
        break
    }

    Write-Host "=== Chapter $n : done ===`n" -ForegroundColor Green
}

Write-Host "Chained run finished. Review with: git log --oneline -n 8" -ForegroundColor Yellow
