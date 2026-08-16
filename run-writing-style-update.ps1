<#
Modules Hub - EL writing-style update runner

Applies Bro Rono's confirmed writing-style patterns (EL_WRITING_STYLE_UPDATE_PROMPT.md)
to every module's content inside Modules Hub, one module at a time. This is a
content EDIT pass over already-shipped chapters, not a fresh build.

Module 1 Chapters 1-2 were already hand-edited/patched into this voice earlier
and are used as reference examples in the brief - running this script against
Module 1 too is intentional and safe (idempotent: if a chapter already matches
the target voice, Claude Code should make no changes to it, and this script
treats "no changes for this module" as a normal skip, not an error).

Module 9 is intentionally excluded (not yet wired into Modules Hub - see
project memory). The old standalone `Module N/` folders are intentionally
left untouched (no longer live; Modules Hub is the shipped app).

CAVEMAN MODE: same token-efficiency reasoning as every other runner in this
repo - a plain-English directive only, deliberately NOT a literal `/caveman`
slash-command line (headless `claude -p` errors on a literal leading
`/word` - confirmed by an earlier failed run).

ONE-TIME SETUP NEEDED ON THIS MACHINE (not done by this script - a
third-party install script, review it before running):

    irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\run-writing-style-update.ps1
    .\run-writing-style-update.ps1 -Modules 3,4,5          # only these modules
    .\run-writing-style-update.ps1 -Model claude-sonnet-4-5 # pin a specific model

REQUIREMENTS:
  - Claude Code CLI ('claude') on PATH and already logged in.
  - Run from your own terminal with network access.
  - `npm` and `git` on PATH.
  - EL_WRITING_STYLE_UPDATE_PROMPT.md present in this same folder.
  - 'Modules Hub/' already built (run-modules-hub.ps1 already run).

WHAT THIS SCRIPT DOES, PER MODULE (in order 1..8 unless -Modules narrows it):
  1. Baseline commit - if the working tree is dirty before this module starts,
     commits that once as a labeled checkpoint (so each module's diff stays
     readable on its own).
  2. Runs Claude Code against the brief, targeted at that one module's
     content folder only.
  3. If Claude Code made no file changes, logs it as a no-op skip and moves
     on to the next module (this is expected for Module 1 Ch1-2, and for any
     module that already fully matches the target voice on a re-run).
  4. If there were changes, verifies with `npm run build` inside
     Modules Hub/ before committing that module's changes.
  5. Moves to the next module. A failure on one module stops the whole
     script (fix it, then re-run - already-committed modules are skipped
     automatically next time only in the sense that git history keeps them;
     this script does not itself re-detect "already done" per module beyond
     the no-op-diff check in step 3, so re-running a finished module is safe
     but redundant).

NOTE ON `npm run build` failing through Cowork's device_bash but working
here: expected, not a bug - Cowork's device bridge runs in a different Linux
VM than this Windows terminal, so its node_modules native bundler bindings
don't match. This script's `npm run build` runs natively in your own
environment and is the real check.
#>

param(
    [int[]]$Modules = @(1,2,3,4,5,6,7,8),
    [string]$Model = ""
)

$repoRoot = $PSScriptRoot
Set-Location $repoRoot
$hubDir = Join-Path $repoRoot "Modules Hub"
$promptFile = Join-Path $repoRoot "EL_WRITING_STYLE_UPDATE_PROMPT.md"

Write-Host "Modules Hub: EL writing-style update runner" -ForegroundColor Yellow
Write-Host "Repo root: $repoRoot"
Write-Host "Modules queued: $($Modules -join ', ')`n"

if (-not (Test-Path $promptFile)) {
    Write-Host "Brief not found at $promptFile - stopping." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path (Join-Path $hubDir "src\data\modules.ts"))) {
    Write-Host "'Modules Hub/src/data/modules.ts' not found - Modules Hub hasn't been built yet." -ForegroundColor Red
    Write-Host "Run .\run-modules-hub.ps1 first, then retry this script." -ForegroundColor Red
    exit 1
}

$cavemanDirective = "If the 'caveman' Claude Code plugin (https://github.com/JuliusBrussee/caveman) is installed on this machine, stay in caveman-compressed output mode for this entire run - terse, fragment-style commentary between tool calls, no filler explanations or restating what you're about to do. This only affects your own narration; write all code, comments, and the Bahasa Indonesia learner-facing copy in full, normal quality - nothing about the deliverable itself should be compressed or abbreviated. If the plugin isn't installed, ignore this paragraph and proceed normally."

foreach ($n in $Modules) {
    $moduleDir = "Modules Hub\src\content\module-$n"
    $checkPath = Join-Path $repoRoot $moduleDir
    Write-Host "`n========== Module $n ==========" -ForegroundColor Magenta

    if (-not (Test-Path $checkPath)) {
        Write-Host "'$moduleDir' not found - skipping module $n." -ForegroundColor Red
        continue
    }

    # --- Baseline commit: only if the tree is already dirty before this module starts ---
    $preExistingChanges = git status --porcelain
    if ($preExistingChanges) {
        Write-Host "Working tree has uncommitted changes before Module $n starts - committing as a baseline checkpoint." -ForegroundColor Cyan
        git add -A
        git commit -m "Modules Hub: baseline snapshot before writing-style update on Module $n" | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Baseline commit failed (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
            exit 1
        }
    }

    $targetLine = "`n`n---`nTarget for this run: apply this entire brief ONLY to 'Modules Hub/src/content/module-$n/' (chapter1.ts through chapter8.ts, and chapters.ts). Do not touch any other module."
    $instruction = "$cavemanDirective`n`nRead the build brief at $promptFile in full using your Read tool, then execute it exactly as written from top to bottom, using the module scope below. Do not summarize, skip, or abbreviate any section of the brief.$targetLine Do not run 'git add' or 'git commit' yourself - leave the changes uncommitted, this script handles committing after verifying the build."

    Write-Host "=== Running Claude Code on Module $n ===" -ForegroundColor Cyan
    $logFile = Join-Path $repoRoot "writing-style-module$n-run.log"
    $headBefore = git rev-parse HEAD

    if ($Model -ne "") {
        & claude -p $instruction --model $Model --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
    } else {
        & claude -p $instruction --allowedTools "Bash,Read,Edit,Write" 2>&1 | Tee-Object -FilePath $logFile
    }
    $claudeExit = $LASTEXITCODE

    if ($claudeExit -ne 0) {
        Write-Host "Claude Code exited with code $claudeExit on Module $n - stopping. See $logFile." -ForegroundColor Red
        exit 1
    }

    $headAfter = git rev-parse HEAD
    $selfCommitted = ($headAfter -ne $headBefore)
    $changes = git status --porcelain

    if (-not $selfCommitted -and -not $changes) {
        Write-Host "No file changes for Module $n - already matches the target voice, or nothing applied. Skipping build/commit for this module." -ForegroundColor DarkGray
        continue
    }

    if ($selfCommitted) {
        Write-Host "Claude Code committed on its own despite the instruction not to (HEAD moved to $($headAfter.Substring(0,7))) for Module $n - continuing, but noting it." -ForegroundColor DarkYellow
    }

    Write-Host "=== Verifying build after Module $n ===" -ForegroundColor Cyan
    Push-Location $hubDir
    npm run build
    $buildExit = $LASTEXITCODE
    Pop-Location

    if ($buildExit -ne 0) {
        Write-Host "'npm run build' failed after Module $n." -ForegroundColor Red
        if ($selfCommitted) {
            Write-Host "Note: already self-committed by Claude Code BEFORE this build failure was caught - the broken state is in git history at $($headAfter.Substring(0,7)). Fix it forward rather than assuming nothing was saved." -ForegroundColor Red
        } else {
            Write-Host "Fix 'Modules Hub/src/content/module-$n/' manually, or re-run: .\run-writing-style-update.ps1 -Modules $n" -ForegroundColor Red
        }
        exit 1
    }

    if ($selfCommitted) {
        Write-Host "=== Module $n already committed by Claude Code, skipping this script's own commit ===" -ForegroundColor Cyan
        git log -1 --oneline
    } else {
        Write-Host "=== Committing Module $n checkpoint ===" -ForegroundColor Cyan
        git add -A
        git commit -m "Modules Hub: apply EL writing-style patterns to Module $n (auto-built via run-writing-style-update.ps1)" | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "git commit failed for Module $n (exit $LASTEXITCODE) - stopping so you can check git status by hand." -ForegroundColor Red
            exit 1
        }
    }

    Write-Host "Module $n done." -ForegroundColor Green
}

Write-Host "`n=== All queued modules processed ===" -ForegroundColor Green
Write-Host "Next: cd 'Modules Hub'; npm run dev - spot-check a couple of updated chapters per module before considering this final." -ForegroundColor Yellow
