'use client'

import { useEffect } from 'react'
import Image from 'next/image'

import clientFacbook from '@/public/images/clients/fb.svg'
import clientAirbnb from '@/public/images/clients/airbnb.svg'
import clientAmazon from '@/public/images/clients/amazon.svg'
import clientQuora from '@/public/images/clients/quora.svg'
import clientTinder from '@/public/images/clients/tinder.svg'
import clientHubspot from '@/public/images/clients/hubspot.svg'
import clientSpark from '@/public/images/clients/spark.svg'
import clientCanon from '@/public/images/clients/canon.svg'
import clientCadbury from '@/public/images/clients/cadbury.svg'

// Import Swiper
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Clients() {
  useEffect(() => {
    const carousel = new Swiper('.swiper', {
      modules: [Autoplay],
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 64,
      centeredSlides: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 100,
        disableOnInteraction: true
      }
    })
  }, [])

  return (
    <section title='clients'>
      <div className='overflow-hidden py-8'>
        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className='swiper swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-base-100 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-base-100'>
          <div className='swiper-wrapper !ease-linear select-none items-center'>
            {/* Carousel items */}
            <div className='swiper-slide !w-auto'>
              <Image src={clientFacbook} alt='Client 01' />
            </div>
            <div className='swiper-slide !w-auto'>
              <Image src={clientAirbnb} alt='Client 02' width={70} height={25} />
            </div>
            <div className='swiper-slide !w-auto'>
              <Image className='mt-1' src={clientAmazon} alt='Client 03' width={107} height={33} />
            </div>
            <div className='swiper-slide !w-auto'>
              <Image src={clientQuora} alt='Client 04' width={85} height={36} />
            </div>
            <div className='swiper-slide !w-auto'>
              <Image src={clientTinder} alt='Client 05' width={86} height={18} />
            </div>
            <div className='swiper-slide !w-auto'>
              <Image src={clientHubspot} alt='Client 06' width={78} height={34} />
            </div>
            <div className='swiper-slide !w-auto'>
              <Image src={clientSpark} alt='Client 07' width={83} height={23} />
            </div>
            <div className='swiper-slide !w-auto'>
              <Image src={clientCanon} alt='Client 08' width={98} height={26} />
            </div>
            <div className='swiper-slide !w-auto'>
              <Image className='mt-2' src={clientCadbury} alt='Client 09' width={92} height={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
