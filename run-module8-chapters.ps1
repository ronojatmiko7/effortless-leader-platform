<#
Module 8 - Chained Chapter Runner (v3 - script-based scaffolding + caveman mode)

Runs MODULE_8_CHAPTER_<N>_REBUILD_PROMPT.md through the Claude Code CLI in
sequence, one chapter at a time, mirroring run-module7-chapters.ps1 with one
new addition: each chapter's headless run opens with a directive to use the
"caveman" Claude Code plugin (https://github.com/JuliusBrussee/caveman) if
it's installed, so Claude Code's own narration/commentary while executing
the brief stays compressed instead of verbose - it does NOT touch the
quality of the code or the Bahasa Indonesia learner-facing content it
writes, only how much it says about what it's doing along the way.

WHY THIS WAS ADDED: token usage on Cowork (which writes these briefs) and
the terminal's `claude -p` calls (which execute them) draws on the same
quota, and Module 7's runner already cut the single biggest cost
(mechanical file-porting in Chapter 1) via scaffold-module.ps1. Caveman
mode targets the next biggest lever: how verbose Claude Code's own
tool-call narration is during each headless run.

ONE-TIME SETUP NEEDED ON THIS MACHINE (not done by this script - a
third-party install script, review it before running):

    irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex

Once installed, caveman activates automatically for every Claude Code
session on this machine (interactive and headless `claude -p` alike) - no
per-call flag needed. The `/caveman full` line prepended to each chapter's
instruction below is a belt-and-suspenders nudge in case the plugin's
session-start hook doesn't fire reliably in `-p` mode; if the plugin isn't
installed at all, that line is harmless - Claude Code just reads it as a
style preference in the prompt and proceeds normally, no functional risk to
the build.

Everything else below is unchanged from Module 7's runner - same skip
guard, same baseline commit, same per-chapter build verification.

Each chapter's brief still assumes the previous chapter's file already
exists in the repo. Chapter 1's brief only covers chapter1.ts content +
registering it in chapters.ts (the scaffold is a precondition it verifies,
not a task it performs).

WHY THE SKIP GUARD AND BASELINE COMMIT EXIST (same rationale as Modules 6-7's
runners):

  1. SKIP GUARD. Before invoking Claude Code for chapter N, the script checks
     whether Module 8/src/content/chapterN.ts already exists - if it does,
     that chapter is skipped with a message, no API call, no git touch. This
     makes the whole script idempotent and resumable: if a run stops partway
     (build failure, network hiccup, you Ctrl+C it), re-running the script
     from the top just skips everything already built and picks up where it
     left off. It also means running this script after Module 8/ is fully
     built is a safe no-op.

  2. BASELINE COMMIT. The Module 8 syllabus, all eight
     MODULE_8_CHAPTER_N_REBUILD_PROMPT.md briefs, and this script itself
     were written directly to this repo (not via a git commit) before this
     script's first run, so your working tree almost certainly has
     uncommitted changes the first time you run this. The per-chapter "did
     Claude Code actually do something" check relies on comparing git
     status/HEAD before and after each chapter - if the tree is already
     dirty going in, that check can't tell "this chapter changed something"
     apart from "unrelated pre-existing changes are just sitting there". So,
     if there are uncommitted changes when the script starts (including the
     scaffold step's own changes, see below), it commits them ONCE up front
     as a clearly-labeled baseline checkpoint, then proceeds with a clean
     tree. If you'd rather review and commit that yourself first, just run
     `git add -A; git commit` before launching this script - the baseline
     step is a no-op on a clean tree.

CAUTION - regenerating a middle chapter after Chapter 8 exists: Chapter 8's
report card reads specific cardId/fieldId values out of Chapters 1-7's real
source files (see MODULE_8_CHAPTER_8_REBUILD_PROMPT.md section 5). If you
delete and regenerate, say, chapter5.ts on its own, a fresh Claude Code run
may pick different card ids/field names than the ones already wired into
chapter8.ts's report - silently breaking that row of the report (it will
just render "(belum diisi)" instead of erroring). If you force a regen of
any chapter 1-7, re-run chapter 8 afterward too, or manually diff its
report field map against the regenerated file. The same caution applies to
Chapter 7, whose finding-review recap depends on Chapter 5's exact field ids.

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-module8-chapters.ps1                # scaffolds if needed, runs 1-8, skips what already exists
    .\run-module8-chapters.ps1 -Start 4 -End 4 # force just one chapter (delete its file first to force a real regen)
    .\run-module8-chapters.ps1 -Model claude-sonnet-4-5   # pin a specific model instead of the CLI default

REQUIREMENTS:
  - Claude Code CLI ('claude') on PATH and already logged in.
  - Run from your own terminal with network access.
  - `npm` and `git` on PATH.
  - robocopy on PATH (standard on Windows) - used by scaffold-module.ps1.
  - scaffold-module.ps1 present in this same folder.
  - Module 8/'s node_modules isn't included in what scaffold-module.ps1
    copies (it's never committed/copied - only package.json/package-lock.json
    are) - this script runs `npm install` once up front if node_modules is
    missing, right after scaffolding, before touching any chapter.
  - Optional but recommended for token savings: the caveman plugin
    installed once (see the setup note near the top of this file).
#>

param(
    [int]$Start = 1,
    [int]$End = 8,
    [string]$Model = ""
)

$repoRoot = $PSScriptRoot
Set-Location $repoRoot
$moduleDir = Join-Path $repoRoot "Module 8"

Write-Host "Module 8 chained runner: Chapters $Start-$End" -ForegroundColor Yellow
Write-Host "Repo root: $repoRoot`n"

# --- Step 0: script-based scaffolding (replaces Chapter 1's old manual port) ---
if (-not (Test-Path (Join-Path $moduleDir "package.json"))) {
    Write-Host "=== 'Module 8/' isn't scaffolded yet - running scaffold-module.ps1 ===" -ForegroundColor Cyan
    $scaffoldScript = Join-Path $repoRoot "scaffold-module.ps1"
    if (-not (Test-Path $scaffoldScript)) {
        Write-Host "scaffold-module.ps1 not found at $scaffoldScript - stopping." -ForegroundColor Red
        exit 1
    }
    & $scaffoldScript -SourceModule 7 -TargetModule 8 `
        -SourceTitle "Job Architecture & Competency Modeling" `
        -TargetTitle "Enterprise Change Management Rollout"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "scaffold-module.ps1 failed (exit $LASTEXITCODE) - stopping before touching any chapter." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "'Module 8/package.json' already exists - scaffold already done, skipping scaffold-module.ps1." -ForegroundColor DarkGray
}

if (-not (Test-Path (Join-Path $moduleDir "node_modules"))) {
    Write-Host "=== Module 8/node_modules missing - running npm install once ===" -ForegroundColor Cyan
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
    Write-Host "(Expected the first time you run this script: the syllabus, chapter briefs, this script, and the fresh scaffold were all added directly, not via git.)"
    git add -A
    git commit -m "Module 8: baseline snapshot before chained runner (scaffold + syllabus + chapter briefs)" | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Baseline commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
        exit 1
    }
    Write-Host "Baseline committed. Continuing with a clean tree.`n" -ForegroundColor Green
}

# Prepended to every chapter's instruction - see the header comment for why.
$cavemanDirective = "If the 'caveman' Claude Code plugin (https://github.com/JuliusBrussee/caveman) is installed on this machine, stay in caveman-compressed output mode for this entire run - terse, fragment-style commentary between tool calls, no filler explanations or restating what you're about to do. This only affects your own narration; write all code, comments, and the Bahasa Indonesia learner-facing card content in full, normal quality - nothing about the deliverable itself should be compressed or abbreviated. If the plugin isn't installed, ignore this paragraph and proceed normally."

for ($n = $Start; $n -le $End; $n++) {

    $chapterFile = Join-Path $moduleDir "src\content\chapter$n.ts"
    if (Test-Path $chapterFile) {
        Write-Host "=== Chapter $n : Module 8/src/content/chapter$n.ts already exists - skipping (no API call, no git touch) ===" -ForegroundColor DarkGray
        continue
    }

    $promptFile = Join-Path $repoRoot "MODULE_8_CHAPTER_${n}_REBUILD_PROMPT.md"
    if (-not (Test-Path $promptFile)) {
        Write-Host "No prompt file for Chapter $n at `"$promptFile`" - stopping." -ForegroundColor Red
        break
    }

    Write-Host "=== Chapter $n : running Claude Code ===" -ForegroundColor Cyan
    $logFile = Join-Path $repoRoot "module8-chapter$n-run.log"
    $headBefore = git rev-parse HEAD

    $instruction = "$cavemanDirective`n`nRead the build brief at $promptFile in full using your Read tool, then execute it exactly as written from top to bottom. Do not summarize, skip, or abbreviate any section of it. Do not run 'git add' or 'git commit' yourself - leave the changes uncommitted, a separate process handles committing after verifying the build."

    if ($Model -ne "") {
        & claude -p $instruction --model $Model --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
    } else {
        & claude -p $instruction --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
    }
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
        Write-Host "Check $logFile for what it actually said, then retry with: .\run-module8-chapters.ps1 -Start $n -End $n" -ForegroundColor Red
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
            Write-Host "Fix Module 8/ manually, or re-run just this chapter with: .\run-module8-chapters.ps1 -Start $n -End $n" -ForegroundColor Red
        }
        break
    }

    if ($selfCommitted) {
        Write-Host "=== Chapter $n : already committed by Claude Code, skipping this script's own commit ===" -ForegroundColor Cyan
        git log -1 --oneline
    } else {
        Write-Host "=== Chapter $n : committing checkpoint ===" -ForegroundColor Cyan
        git add -A
        git commit -m "Module 8 Chapter $n (auto-built via chained script)" | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Chapter $n : git commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
            break
        }
    }

    Write-Host "=== Chapter $n : done ===`n" -ForegroundColor Green
}

Write-Host "Chained run finished. Review with: git log --oneline -n 10" -ForegroundColor Yellow
Write-Host "If every chapter was skipped, Module 8/ was already complete - nothing to do." -ForegroundColor Yellow
