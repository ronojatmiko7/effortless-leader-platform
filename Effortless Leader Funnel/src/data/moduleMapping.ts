import type { ServiceModuleMapping } from '../types/diagnostic'

// Authoritative Question → Service → Module table from
// EFFORTLESS_LEADER_FUNNEL_PROMPT.md §2. Services 9 and 10 are deliberately
// absent — they're not micro-learning modules and must never be recommended.
export const module1 = {
  service: 1,
  module: 1,
  moduleName: 'Enterprise Operational Audit',
}

export const serviceModuleMappings: ServiceModuleMapping[] = [
  { service: 2, module: 2, moduleName: 'KPI Architecture & Strategic Cascading', questionIds: [1, 2] },
  { service: 3, module: 3, moduleName: 'Executive Business Review (EBR) Governance', questionIds: [3] },
  {
    service: 4,
    module: 4,
    moduleName: 'Business Process Re-engineering (Silo-Breaking)',
    questionIds: [4, 6, 10],
  },
  { service: 5, module: 5, moduleName: 'SOP Optimization & Usability Redesign', questionIds: [5] },
  { service: 6, module: 6, moduleName: 'Performance Management System Overhaul', questionIds: [7, 8, 9] },
  { service: 7, module: 7, moduleName: 'Job Architecture & Competency Modeling', questionIds: [11, 12] },
  { service: 8, module: 8, moduleName: 'Enterprise Change Management Rollout', questionIds: [13] },
]

export const allModules = [
  { module: module1.module, moduleName: module1.moduleName },
  ...serviceModuleMappings.map(({ module, moduleName }) => ({ module, moduleName })),
].sort((a, b) => a.module - b.module)
