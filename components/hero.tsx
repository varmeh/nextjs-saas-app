import Image from 'next/image'
import HeroImage from '@/public/images/404.jpg'

export default function Hero() {
  return (
    <section className='relative'>
      <div className='hero min-h-screen'>
        <div className='flex flex-col md:flex-row max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='md:w-3/5 self-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Your Product TagLine</h1>
            <p className='text-lg mb-6'>
              This is your product description. Use this space to describe this product in more detail.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
          <div className='md:w-2/5 flex justify-center py-6'>
            <Image
              className='rounded-lg shadow-2xl'
              src={HeroImage}
              alt='Hero Section Image'
              aria-hidden='true'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
