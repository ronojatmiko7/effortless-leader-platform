<#
Module 3 - Chained Chapter Runner

Runs MODULE_3_CHAPTER_<N>_REBUILD_PROMPT.md through the Claude Code CLI in sequence,
one chapter at a time, since each chapter's brief assumes the previous chapter's file
already exists in the repo (for voice-matching, and Chapter 8's report card literally
reads real card IDs out of Chapters 1-7).

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine (needs network +
your logged-in Claude Code CLI - this will NOT work from a sandboxed/offline shell):

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-module3-chapters.ps1                    # runs chapters 3-8
    .\run-module3-chapters.ps1 -Start 5 -End 6     # runs just chapters 5-6

WHAT IT DOES PER CHAPTER:
  1. Reads MODULE_3_CHAPTER_<N>_REBUILD_PROMPT.md
  2. Runs it through `claude -p` non-interactively, pre-approving exactly the tools
     each brief actually needs (Bash, Read, Edit, Write) via --allowedTools - so it
     can write chapterN.ts, run npm install/build/dev, etc. without a human clicking
     "allow" each time.
  3. Runs `npm run build` inside Module 3/ as an independent check - if that fails,
     the script stops immediately instead of letting a broken chapter cascade into
     the next one's brief (which assumes the prior chapter is good).
  4. Commits the chapter's changes to git with its own commit message, so you get a
     per-chapter checkpoint to review/diff/revert afterward even though nothing
     paused live for you to approve.

WHY --allowedTools AND NOT --dangerously-skip-permissions / bypassPermissions:
  Per Claude Code's own docs, bypassPermissions ("--dangerously-skip-permissions") is
  meant for isolated containers/VMs "where Claude Code cannot damage your host system"
  - not your actual project folder on your actual machine. --allowedTools scopes the
  auto-approval to just the tools these briefs need, which is what Claude Code's own
  docs recommend for exactly this "run a scripted coding task unattended" case.

  This still means Claude Code will run arbitrary Bash commands (npm install, npm run
  build/dev, reading files, etc.) in Module 3/ without asking first. That's what makes
  it unattended. Review the git log afterward - each chapter is its own commit.

REQUIREMENTS:
  - Claude Code CLI ('claude') on PATH and already logged in (this script does not
    set ANTHROPIC_API_KEY or use --bare, so it uses your normal subscription login,
    same as interactive use).
  - Run from your own terminal with network access - not through any sandboxed shell.
  - `npm` on PATH, and Module 3/ already scaffolded (Chapter 1 already built).
#>

param(
    [int]$Start = 3,
    [int]$End = 8
)

$repoRoot = $PSScriptRoot   # this script should live at the repo root, next to "Module 3"
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
    $promptText = Get-Content $promptFile -Raw
    $logFile = Join-Path $repoRoot "module3-chapter$n-run.log"

    & claude -p $promptText --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
    $claudeExit = $LASTEXITCODE

    if ($claudeExit -ne 0) {
        Write-Host "Chapter $n : Claude Code exited with code $claudeExit - stopping. See $logFile." -ForegroundColor Red
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
    try {
        git add -A
        git commit -m "Module 3 Chapter $n (auto-built via chained script)" | Out-Null
    } catch {
        Write-Host "Chapter $n : git commit failed or nothing to commit - continuing anyway ($_)" -ForegroundColor DarkYellow
    }

    Write-Host "=== Chapter $n : done ===`n" -ForegroundColor Green
}

Write-Host "Chained run finished. Review with: git log --oneline -n 8" -ForegroundColor Yellow
