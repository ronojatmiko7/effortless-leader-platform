<#
scaffold-module.ps1 - Script-based module scaffolder (v1)

Replaces the old pattern where a new module's Chapter 1 build brief made
Claude Code manually Read+Write-port ~15 shared primitive files (card types,
every card renderer, DeckViewer, ModuleHome, both localStorage contexts)
into the new module folder. That porting is pure mechanical copying plus a
couple of string swaps - it never needed an LLM, and paying agent tokens to
read and retype ~15 files verbatim was the single biggest cost inside each
module's Chapter-1 build run.

This script does the same porting with robocopy + literal string
replacement instead. Run it BEFORE Chapter 1's Claude Code run (the chained
runner script does this automatically). Chapter 1's brief then only needs
to cover what actually requires judgment: writing chapter1.ts content and
creating chapters.ts to register it.

WHAT IT COPIES from "Module <SourceModule>/" to "Module <TargetModule>/":
  - Everything except node_modules/, dist/, and src/content/chapter*.ts +
    src/content/chapters.ts (those are per-module content, not shared
    primitives - the new module has none of its own yet).

WHAT IT REPLACES (literal string swaps, applied across every copied text
file - .ts/.tsx/.json/.md/.html/.css/.svg):
  - "Module <SourceModule>"  -> "Module <TargetModule>"   (English mentions,
                                                            e.g. in README.md)
  - "Modul <SourceModule>"   -> "Modul <TargetModule>"    (Indonesian
                                                            ModuleHome eyebrow)
  - "module-<SourceModule>"  -> "module-<TargetModule>"   (package.json
                                                            "name", both
                                                            localStorage keys)
  - <SourceTitle>            -> <TargetTitle>              (service name in
                                                            index.html's
                                                            <title> and
                                                            ModuleHome's
                                                            eyebrow line)

WHAT IT DELIBERATELY DOES NOT DO:
  - npm install - the chained runner script (run-module<N>-chapters.ps1)
    already does this once, right before Chapter 1, if node_modules is
    missing. Don't duplicate that here.
  - Anything content-related - chapter1.ts and chapters.ts are still
    Claude Code's job in Chapter 1's build (that's the part that actually
    needs judgment, not mechanical copying).

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\scaffold-module.ps1 -SourceModule 6 -TargetModule 7 `
        -SourceTitle "Performance Management System Overhaul" `
        -TargetTitle "Job Architecture & Competency Modeling"

Idempotent: if "Module <TargetModule>/package.json" already exists, the
script skips everything and exits 0 (safe to call unconditionally from
run-module<N>-chapters.ps1). Pass -Force to wipe the target and redo it.
#>

param(
    [Parameter(Mandatory = $true)][int]$SourceModule,
    [Parameter(Mandatory = $true)][int]$TargetModule,
    [Parameter(Mandatory = $true)][string]$SourceTitle,
    [Parameter(Mandatory = $true)][string]$TargetTitle,
    [switch]$Force
)

$repoRoot = $PSScriptRoot
$sourceDir = Join-Path $repoRoot "Module $SourceModule"
$targetDir = Join-Path $repoRoot "Module $TargetModule"

Write-Host "Scaffold: Module $SourceModule -> Module $TargetModule" -ForegroundColor Yellow
Write-Host "Source dir: $sourceDir"
Write-Host "Target dir: $targetDir`n"

if (-not (Test-Path (Join-Path $sourceDir "package.json"))) {
    Write-Host "Source 'Module $SourceModule' has no package.json at $sourceDir - stopping." -ForegroundColor Red
    exit 1
}

$targetPkg = Join-Path $targetDir "package.json"
if ((Test-Path $targetPkg) -and -not $Force) {
    Write-Host "'Module $TargetModule/package.json' already exists - already scaffolded, skipping (pass -Force to redo)." -ForegroundColor DarkGray
    exit 0
}

if ($Force -and (Test-Path $targetDir)) {
    Write-Host "-Force passed and '$targetDir' exists - removing it first." -ForegroundColor DarkYellow
    Remove-Item -Recurse -Force $targetDir
}

Write-Host "=== Copying (robocopy), excluding node_modules/, dist/, and per-module content ===" -ForegroundColor Cyan

robocopy $sourceDir $targetDir /E /XD node_modules dist `
    /XF chapter1.ts chapter2.ts chapter3.ts chapter4.ts chapter5.ts chapter6.ts chapter7.ts chapter8.ts chapters.ts `
    /NFL /NDL /NJH /NJS | Out-Null

if ($LASTEXITCODE -ge 8) {
    Write-Host "robocopy failed (exit $LASTEXITCODE) - stopping." -ForegroundColor Red
    exit 1
}

# robocopy doesn't create a subdirectory whose entire contents were excluded -
# make sure src/content still exists so Chapter 1's Claude Code run has
# somewhere to write chapter1.ts and chapters.ts.
$contentDir = Join-Path $targetDir "src\content"
if (-not (Test-Path $contentDir)) {
    New-Item -ItemType Directory -Force -Path $contentDir | Out-Null
}

Write-Host "=== Applying text replacements ===" -ForegroundColor Cyan

$replacements = @(
    @{ From = "Module $SourceModule"; To = "Module $TargetModule" }
    @{ From = "Modul $SourceModule"; To = "Modul $TargetModule" }
    @{ From = "module-$SourceModule"; To = "module-$TargetModule" }
    @{ From = $SourceTitle; To = $TargetTitle }
)

$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$textExtensions = @('.ts', '.tsx', '.json', '.md', '.html', '.css', '.svg')
$files = Get-ChildItem -Path $targetDir -Recurse -File | Where-Object { $textExtensions -contains $_.Extension }

$touchedCount = 0
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $original = $content
    foreach ($pair in $replacements) {
        $content = $content.Replace($pair.From, $pair.To)
    }
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, $utf8NoBom)
        $touchedCount++
    }
}

Write-Host "Replaced text in $touchedCount file(s)." -ForegroundColor Green
Write-Host "`n=== Scaffold done ===" -ForegroundColor Green
Write-Host "'Module $TargetModule/' exists, no node_modules yet, src/content is empty and ready for Chapter 1." -ForegroundColor Green
Write-Host "Next: run .\run-module$TargetModule-chapters.ps1 (it installs node_modules once, then runs Chapter 1's Claude Code build)." -ForegroundColor Yellow

# IMPORTANT: robocopy (a native exe, not a cmdlet) sets $LASTEXITCODE to 1-7
# on a SUCCESSFUL copy (its own convention - only 8+ means real failure; see
# the check right after the robocopy call above). Nothing after that call
# resets $LASTEXITCODE, so without an explicit exit here, the caller
# (run-module<N>-chapters.ps1) would read robocopy's stale "1" as this
# script having failed even though everything above completed fine. Always
# exit explicitly on every path out of this script - don't just fall off
# the end.
exit 0
