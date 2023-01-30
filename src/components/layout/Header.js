import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
       <nav>
        <div className="container container--px">
            <Image src='/logo.png' height={70} width={180} />

            <ul>
                <li><Link href='/' />Home</li>
                <li><Link href='/about' />About Us</li>
                <li><Link href='/products' />Products</li>
                <li><Link href='/contact-us' />Contact Us</li>
            </ul>
        </div>
       </nav>
    </header>
  )
}

export default Header