import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface AuthUser {
  name: string
  email: string
}

interface AuthContextValue {
  user: AuthUser | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)
const STORAGE_KEY = 'it-ops-auth-user'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setUser(JSON.parse(stored))
  }, [])

  async function login(email: string, password: string) {
    // Mock authentication — frontend-only demo flow, no real backend.
    await new Promise((resolve) => setTimeout(resolve, 500))
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailValid) return { success: false, error: 'Enter a valid email address.' }
    if (password.length < 6) return { success: false, error: 'Password must be at least 6 characters.' }

    const mockUser: AuthUser = { name: email.split('@')[0], email }
    setUser(mockUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser))
    return { success: true }
  }

  function logout() {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}