import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
        <div className="container container--px">
       <nav>
            <Image src='/logo.png' height={70} width={180} />

            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About Us</Link></li>
                <li><Link href='/products'>Products</Link></li>
                <li><Link href='/contact-us'>Contact Us</Link></li>
            </ul>
       </nav>
        </div>
    </header>
  )
}

export default Header