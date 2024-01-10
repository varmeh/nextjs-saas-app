'use client'

import React from 'react'
import Link from 'next/link'

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className='text-base-content hover:text-primary transition duration-150 ease-in-out'>
    {children}
  </Link>
)

export default function Footer() {
  return (
    <div>
      <footer className='max-w-6xl mx-auto px-4 sm:px-6 my-8 sm:my-12 text-base-content'>
        {/* Main content of the footer */}
        <div className='footer'>
          <aside>
            <Link href='/' className='block' aria-label='Cruip'>
              <svg className='w-8 h-8 fill-current text-primary' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                <path d='M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z' />
              </svg>
            </Link>
          </aside>
          <nav>
            <header className='footer-title opacity-100'>Company</header>
            <FooterLink href='/about'>About Us</FooterLink>
            <FooterLink href='/contact'>Contact</FooterLink>
          </nav>
          <nav>
            <header className='footer-title opacity-100'>Legal</header>
            <FooterLink href='/terms'>Terms of Use</FooterLink>
            <FooterLink href='/privacy'>Privacy Policy</FooterLink>
            <FooterLink href='/refund'>Refund Policy</FooterLink>
          </nav>
        </div>

        {/* New row for copyright and social buttons */}
        <div className='footer pt-8 sm:pt-12 justify-between'>
          <aside className='flex items-center'>
            <p>Copyright © 2024 - All right reserved</p>
          </aside>
          <nav className='flex gap-4'>
            {/* Social media icons */}
            {/* Replace # with actual links */}
            <a href='https://twitter.com/' className='hover:text-primary transition duration-150 ease-in-out'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'>
                <path d='M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z'></path>
              </svg>
            </a>
            <a href='https://www.youtube.com/' className='hover:text-primary transition duration-150 ease-in-out'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'>
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
              </svg>
            </a>
            <a href='https://www.linkedin.com/' className='hover:text-primary transition duration-150 ease-in-out'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'>
                <path d='M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z' />
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
