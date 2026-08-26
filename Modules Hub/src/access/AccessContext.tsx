import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { clearCustomerEmail, loadCustomerEmail, saveCustomerEmail } from './customerIdentity'
import { fetchPurchasedProducts } from './purchasesApi'
import { hasFullModuleAccess as checkFullModuleAccess } from './moduleAccess'
import { FREE_LAUNCH_MODE } from '../config/paymentConfig'

interface AccessContextValue {
  customerEmail: string | null
  purchasedProducts: string[]
  isLoading: boolean
  error: string | null
  hasFullModuleAccess: (moduleNumber: number) => boolean
  setCustomerEmail: (email: string) => Promise<void>
  refresh: () => Promise<void>
  signOut: () => void
}

const AccessContext = createContext<AccessContextValue | null>(null)

// Wraps the whole app (see App.tsx). Owns the one piece of state every
// access check depends on: "who is this browser, and what have they paid
// for." See customerIdentity.ts for why identity is just a saved email for
// now, and check-access/index.ts for the actual entitlement lookup.
export function AccessProvider({ children }: { children: ReactNode }) {
  const [customerEmail, setCustomerEmailState] = useState<string | null>(() => loadCustomerEmail())
  const [purchasedProducts, setPurchasedProducts] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    if (FREE_LAUNCH_MODE) {
      // Free launch: don't even ask the backend who bought what — nobody
      // has to buy anything right now. See paymentConfig.ts.
      setPurchasedProducts([])
      return
    }
    if (!customerEmail) {
      setPurchasedProducts([])
      return
    }
    setIsLoading(true)
    setError(null)
    try {
      const products = await fetchPurchasedProducts(customerEmail)
      setPurchasedProducts(products)
    } catch {
      // Fails safe: backend unreachable (e.g. still-empty env config)
      // means nothing is unlocked, not a crash. Bab 1 previews still work
      // regardless, since those don't depend on this at all.
      setError('Tidak bisa memeriksa status pembelian saat ini.')
      setPurchasedProducts([])
    } finally {
      setIsLoading(false)
    }
  }, [customerEmail])

  useEffect(() => {
    refresh()
  }, [refresh])

  const setCustomerEmail = useCallback(async (email: string) => {
    const trimmed = email.trim()
    if (!trimmed) return
    saveCustomerEmail(trimmed)
    setCustomerEmailState(trimmed)
  }, [])

  const signOut = useCallback(() => {
    clearCustomerEmail()
    setCustomerEmailState(null)
    setPurchasedProducts([])
  }, [])

  const hasFullModuleAccess = useCallback(
    (moduleNumber: number) => (FREE_LAUNCH_MODE ? true : checkFullModuleAccess(moduleNumber, purchasedProducts)),
    [purchasedProducts],
  )

  return (
    <AccessContext.Provider
      value={{
        customerEmail,
        purchasedProducts,
        isLoading,
        error,
        hasFullModuleAccess,
        setCustomerEmail,
        refresh,
        signOut,
      }}
    >
      {children}
    </AccessContext.Provider>
  )
}

export function useAccess() {
  const ctx = useContext(AccessContext)
  if (!ctx) throw new Error('useAccess must be used within an AccessProvider')
  return ctx
}
