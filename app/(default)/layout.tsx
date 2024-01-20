'use client'

import AOSInitializer from '@/components/aos-initializer'

export default function DefaultLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6'>
      {/* <PageIllustration /> */}
      <AOSInitializer />

      {children}
    </div>
  )
}
