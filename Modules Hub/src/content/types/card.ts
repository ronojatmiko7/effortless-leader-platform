// Path shim — src/content/module-N/*.ts files import '../types/card', which
// was correct when content lived directly under src/ (as it did in each
// standalone module app). The hub scaffold nested content one level deeper
// (src/content/module-N/), so this file re-exports the real card types from
// their actual location without touching any content file's import paths.
export type * from '../../types/card'
