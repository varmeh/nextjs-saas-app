import Image from 'next/image'
import HeroImage from '@/public/images/404.jpg'

export default function Hero() {
  return (
    /* Hero Section */
    <section title='hero' className='relative py-36 md:py-44'>
      <div className='hero'>
        <div className='flex flex-col md:flex-row' aria-hidden='true' data-aos='fade-up'>
          <div className='md:w-3/5 self-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4' data-aos='fade-up'>
              Your Product TagLine
            </h1>
            <p className='text-lg mb-6' data-aos='fade-up' data-aos-delay='200'>
              This is your product description. Use this space to describe this product in more detail.
            </p>
            <button className='btn btn-primary' data-aos='fade-up' data-aos-delay='400'>
              Get Started
            </button>
          </div>
          <div className='md:w-2/5 flex justify-center py-6' data-aos='fade-up' data-aos-delay='400'>
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
