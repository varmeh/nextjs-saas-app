'use client'

import AOSInitializer from '@/components/aos-initializer'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <PageIllustration /> */}
      <AOSInitializer />

      {children}
    </div>
  )
}
