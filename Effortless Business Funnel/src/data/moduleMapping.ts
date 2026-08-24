import type { ServiceModuleMapping } from '../types/diagnostic'

// Authoritative Question → Service → Module table from
// EFFORTLESS_LEADER_FUNNEL_PROMPT.md §2. Services 9 and 10 are deliberately
// absent from serviceModuleMappings — they're not micro-learning modules and
// must never be recommended based on a diagnostic answer. Module names below
// mirror the current Indonesian titles used in the Modules Hub app
// (Modules Hub/src/data/modules.ts) so this app's report/program screens
// never drift out of sync with what a lead actually sees after unlocking.
export const module1 = {
  service: 1,
  module: 1,
  moduleName: 'Bagaimana Mengaudit Bisnis Anda Sendiri',
}

export const serviceModuleMappings: ServiceModuleMapping[] = [
  { service: 2, module: 2, moduleName: 'Bagaimana menyusun KPI untuk bisnis Anda', questionIds: [1, 2] },
  { service: 3, module: 3, moduleName: 'Bagaimana memonitor kesehatan bisnis Anda', questionIds: [3] },
  {
    service: 4,
    module: 4,
    moduleName: 'Bagaimana merancang proses bisnis Anda',
    questionIds: [4, 6, 10],
  },
  { service: 5, module: 5, moduleName: 'Bagaimana membuat SOP yang ditaati tim Anda', questionIds: [5] },
  { service: 6, module: 6, moduleName: 'Bagaimana membangun manajemen kinerja tim Anda', questionIds: [7, 8, 9] },
  { service: 7, module: 7, moduleName: 'Bagaimana menyusun standar kompetensi karyawan Anda', questionIds: [11, 12] },
  { service: 8, module: 8, moduleName: 'Bagaimana mengelola perubahan di bisnis Anda', questionIds: [13] },
]

// Module 9 (AI efficiency) has no diagnostic question behind it — it's not
// tied to a "kebocoran" service, so it never appears in a per-lead
// recommendedModules list. It's still part of the full 9-module catalog
// shown on the program/pitch screen.
export const module9 = {
  module: 9,
  moduleName: 'Bagaimana menggunakan AI untuk efisiensi bisnis Anda',
}

export const allModules = [
  { module: module1.module, moduleName: module1.moduleName },
  ...serviceModuleMappings.map(({ module, moduleName }) => ({ module, moduleName })),
  { module: module9.module, moduleName: module9.moduleName },
].sort((a, b) => a.module - b.module)
