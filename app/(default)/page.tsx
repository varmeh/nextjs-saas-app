export const metadata = {
  title: 'Care Forever',
  description: 'Take care of your loved ones, forever'
}

import Hero from '@/components/hero'
import Clients from '@/components/clients'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
    </>
  )
}
