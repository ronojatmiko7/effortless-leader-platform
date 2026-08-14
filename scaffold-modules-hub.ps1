<#
scaffold-modules-hub.ps1 - Mechanical scaffolder for the consolidated Modules Hub (v1)

Ports Modules 1-8 (currently 8 separate standalone Vite/React apps) into ONE
new app, "Modules Hub/", as a precondition for MODULES_HUB_BUILD_PROMPT.md's
Claude Code run. Same "mechanical copying shouldn't cost LLM tokens" rationale
as scaffold-module.ps1 (see prediagnosis-funnel-workflow.md in project
memory) - this script does every piece of the consolidation that's pure file
copying, so the Claude Code run only has to do the parts that need judgment.

Confirmed via direct investigation of Module 8 (the most recently built,
most complete module) before writing this script:
  - DeckViewer.tsx and every file under components/cards/ are ALREADY fully
    module-agnostic (they only take `Card[]` + callback props, no module
    identity anywhere) - safe to port verbatim from any one module.
  - types/card.ts, main.tsx, index.css, vite.config.ts, tsconfig*.json,
    .oxlintrc.json are also generic/identical across modules - safe to port
    verbatim from any one module.
  - ModuleHome.tsx, App.tsx, ProgressContext.tsx, and WorkbookContext.tsx are
    NOT module-agnostic (hardcoded module title, hardcoded chapters import,
    hardcoded STORAGE_KEY/CHAPTER_ORDER) - this script still copies them
    (from Module 8) as a STARTING POINT, but they need real rewriting by the
    Claude Code build prompt afterward, not just a find-replace.

WHAT THIS SCRIPT COPIES:
  - Everything from "Module 8/" except node_modules/, dist/, and per-module
    chapter content (chapter1.ts..chapter8.ts, chapters.ts) - used as the
    base for shared primitives AND as starting-point copies of the 4 files
    above that the build prompt will rewrite.
  - Each "Module <N>/src/content/" (chapter1.ts..chapter8.ts + chapters.ts)
    into "Modules Hub/src/content/module-<N>/" - untouched, no LLM tokens
    spent on this, straight file copy for all 8 modules including Module 2
    (if you've already run run-module2-terminology-update.ps1 first, its
    KPI Usaha/KPI Hasil update comes along for free; if not, Module 2 ports
    with its current Lead/Lag Metric wording and you can update it later
    either standalone or inside the hub - see the sequencing note in
    MODULES_HUB_BUILD_PROMPT.md).

WHAT THIS SCRIPT DELIBERATELY DOES NOT DO (left for
MODULES_HUB_BUILD_PROMPT.md's Claude Code run):
  - Parameterizing ModuleHome.tsx (still has Module 8's hardcoded title +
    static chapters import)
  - Rewriting App.tsx for 3-level routing (Hub Home -> Module Home -> DeckViewer)
  - Parameterizing ProgressContext.tsx / WorkbookContext.tsx by moduleId
  - Writing src/data/modules.ts (new top-level module registry)
  - Writing src/access/moduleAccess.ts (purchase-access stub)
  - Writing src/components/HubHome.tsx (new top-level module-list screen)
  - npm install - the runner script (run-modules-hub.ps1) does this once,
    same convention as the other runners.

USAGE - run from a normal PowerShell/VS Code terminal on THIS machine:

    cd "D:\App Coding\Prediagnosis Funnel"
    .\scaffold-modules-hub.ps1

Idempotent: if "Modules Hub/package.json" already exists, skips everything
and exits 0 (safe to call unconditionally from run-modules-hub.ps1). Pass
-Force to wipe the target and redo it.
#>

param(
    [switch]$Force
)

$repoRoot = $PSScriptRoot
$hubDir = Join-Path $repoRoot "Modules Hub"
$baseModuleDir = Join-Path $repoRoot "Module 8"

Write-Host "Scaffold: Modules 1-8 -> Modules Hub" -ForegroundColor Yellow
Write-Host "Hub dir: $hubDir`n"

if (-not (Test-Path (Join-Path $baseModuleDir "package.json"))) {
    Write-Host "Base 'Module 8' has no package.json at $baseModuleDir - stopping." -ForegroundColor Red
    exit 1
}

$hubPkg = Join-Path $hubDir "package.json"
if ((Test-Path $hubPkg) -and -not $Force) {
    Write-Host "'Modules Hub/package.json' already exists - already scaffolded, skipping (pass -Force to redo)." -ForegroundColor DarkGray
    exit 0
}

if ($Force -and (Test-Path $hubDir)) {
    Write-Host "-Force passed and '$hubDir' exists - removing it first." -ForegroundColor DarkYellow
    Remove-Item -Recurse -Force $hubDir
}

Write-Host "=== Copying shared primitives + starting-point files from Module 8 (robocopy) ===" -ForegroundColor Cyan

robocopy $baseModuleDir $hubDir /E /XD node_modules dist `
    /XF chapter1.ts chapter2.ts chapter3.ts chapter4.ts chapter5.ts chapter6.ts chapter7.ts chapter8.ts chapters.ts `
    /NFL /NDL /NJH /NJS | Out-Null

if ($LASTEXITCODE -ge 8) {
    Write-Host "robocopy (base primitives) failed (exit $LASTEXITCODE) - stopping." -ForegroundColor Red
    exit 1
}

$contentDir = Join-Path $hubDir "src\content"
if (Test-Path $contentDir) {
    Get-ChildItem -Path $contentDir -File | Remove-Item -Force
} else {
    New-Item -ItemType Directory -Force -Path $contentDir | Out-Null
}

Write-Host "=== Porting each module's chapters into src/content/module-N/ ===" -ForegroundColor Cyan

for ($n = 1; $n -le 8; $n++) {
    $sourceModuleContent = Join-Path $repoRoot "Module $n\src\content"
    $targetModuleContent = Join-Path $contentDir "module-$n"

    if (-not (Test-Path $sourceModuleContent)) {
        Write-Host "'Module $n/src/content' not found - stopping." -ForegroundColor Red
        exit 1
    }

    robocopy $sourceModuleContent $targetModuleContent /E /NFL /NDL /NJH /NJS | Out-Null
    if ($LASTEXITCODE -ge 8) {
        Write-Host "robocopy (Module $n content) failed (exit $LASTEXITCODE) - stopping." -ForegroundColor Red
        exit 1
    }
    Write-Host "  Module $n content ported." -ForegroundColor DarkGray
}

Write-Host "=== Applying base text replacements (package.json name, index.html title) ===" -ForegroundColor Cyan

$utf8NoBom = New-Object System.Text.UTF8Encoding $false

$pkgPath = Join-Path $hubDir "package.json"
$pkgContent = [System.IO.File]::ReadAllText($pkgPath)
$pkgContent = $pkgContent -replace '"name":\s*"module-8"', '"name": "modules-hub"'
[System.IO.File]::WriteAllText($pkgPath, $pkgContent, $utf8NoBom)

$indexPath = Join-Path $hubDir "index.html"
if (Test-Path $indexPath) {
    $indexContent = [System.IO.File]::ReadAllText($indexPath)
    $indexContent = $indexContent -replace '<title>.*?</title>', '<title>Effortless Leader - Learning Hub</title>'
    [System.IO.File]::WriteAllText($indexPath, $indexContent, $utf8NoBom)
}

Write-Host "`n=== Scaffold done ===" -ForegroundColor Green
Write-Host "'Modules Hub/' exists: all 8 modules' content ported to src/content/module-1..8/," -ForegroundColor Green
Write-Host "shared primitives (DeckViewer, cards/, types/card.ts, etc.) copied from Module 8." -ForegroundColor Green
Write-Host "ModuleHome.tsx, App.tsx, ProgressContext.tsx, WorkbookContext.tsx are still Module 8's" -ForegroundColor Yellow
Write-Host "single-module versions - MODULES_HUB_BUILD_PROMPT.md's Claude Code run rewrites those," -ForegroundColor Yellow
Write-Host "plus writes the new modules.ts registry, moduleAccess.ts stub, and HubHome.tsx." -ForegroundColor Yellow
Write-Host "Next: run .\run-modules-hub.ps1 (does this scaffold + npm install + the Claude Code build + verify)." -ForegroundColor Yellow

exit 0
