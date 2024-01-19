// components/AOSInitializer.tsx

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine'
    })

    // Optionally, refresh AOS on route changes if using Next.js router
    // This might be necessary if your app uses dynamic content or route transitions
    return () => {
      AOS.refresh()
    }
  }, [])

  return null // This component does not render anything
}

export default AOSInitializer
