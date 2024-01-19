'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

// import PageIllustration from '@/components/page-illustration'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    /* AOS needs the DOM elements to be fully rendered.
    setTimeout used as a workaround to fix AOS animation issues on loading  */
    setTimeout(() => {
      AOS.init({
        once: true,
        disable: 'phone',
        duration: 600,
        easing: 'ease-out-sine'
      })
    }, 5)
  })

  return (
    <>
      {/* <PageIllustration /> */}

      {children}
    </>
  )
}
