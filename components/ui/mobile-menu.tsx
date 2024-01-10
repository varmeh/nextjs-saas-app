'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node))
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className='md:hidden flex items-center '>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'} ml-3`}
        aria-controls='mobile-nav'
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}>
        <span className='sr-only'>Menu</span>
        <svg
          className='w-6 h-6 fill-current text-primary transition duration-150 ease-in-out'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <rect y='4' width='24' height='2' rx='1' />
          <rect y='11' width='24' height='2' rx='1' />
          <rect y='18' width='24' height='2' rx='1' />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id='mobile-nav'
        ref={mobileNav}
        className='absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out'
        style={
          mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }
        }>
        <ul className='bg-base-200 px-4 py-2'>
          <li>
            <Link
              href='/features'
              className='flex text-base-content hover:text-primary py-2'
              onClick={() => setMobileNavOpen(false)}>
              Features
            </Link>
          </li>
          <li>
            <Link
              href='/pricing'
              className='flex text-base-content hover:text-primary py-2'
              onClick={() => setMobileNavOpen(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href='/blog'
              className='flex text-base-content hover:text-primary py-2'
              onClick={() => setMobileNavOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='flex text-base-content hover:text-primary py-2'
              onClick={() => setMobileNavOpen(false)}>
              About us
            </Link>
          </li>
          <li>
            <Link href='/signin' className='btn btn-neutral flex mt-4' onClick={() => setMobileNavOpen(false)}>
              Sign in
            </Link>
          </li>
          <li>
            <Link href='/signup' className='btn btn-primary flex my-4' onClick={() => setMobileNavOpen(false)}>
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
