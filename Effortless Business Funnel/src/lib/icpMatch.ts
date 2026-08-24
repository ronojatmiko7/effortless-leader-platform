// Firmographic ICP locked in brand strategy: 19-99 karyawan, omzet tahunan
// >= Rp5 miliar (same numbers used in LandingScreen.tsx's "Ini Bukan Buat
// Semua Orang" section). Used only to decide which message the report's
// "Bicara Gratis dengan Konsultan Kami" card shows — it never blocks the
// report itself or the self-serve Modules Hub path, both of which stay
// open to every lead regardless of fit. Soft self-selection, not a gate.
export interface RevenueOption {
  value: string
  label: string
}

export const REVENUE_OPTIONS: RevenueOption[] = [
  { value: 'under-1', label: 'Di bawah Rp1 miliar' },
  { value: '1-5', label: 'Rp1 - Rp5 miliar' },
  { value: '5-10', label: 'Rp5 - Rp10 miliar' },
  { value: '10-25', label: 'Rp10 - Rp25 miliar' },
  { value: 'above-25', label: 'Di atas Rp25 miliar' },
]

// Only these buckets clear the >= Rp5 miliar/tahun bar.
const FITTING_REVENUE_VALUES = new Set(['5-10', '10-25', 'above-25'])

export function matchesIcp(lead: { employeeCount: string; annualRevenue: string }): boolean {
  const employees = Number.parseInt(lead.employeeCount, 10)
  const hasEmployeeFit = Number.isFinite(employees) && employees >= 19 && employees <= 99
  const hasRevenueFit = FITTING_REVENUE_VALUES.has(lead.annualRevenue)
  return hasEmployeeFit && hasRevenueFit
}
