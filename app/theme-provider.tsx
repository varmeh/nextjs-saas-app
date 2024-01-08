'use client'

import { ThemeProvider } from 'next-themes'

/* disableTransitionOnChange explained here - https://www.npmjs.com/package/next-themes?activeTab=readme#disable-transitions-on-theme-change */
export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='data-theme'
      storageKey='theme'
      themes={['light', 'dark']}
      defaultTheme='dark'
      disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
