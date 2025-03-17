import Link from 'next/link'
import React from 'react'

import styles from '../styles/Header.module.css'
import CustomLink from './CustomLink'

export  function Header() {
  return (
    <nav className={`${styles.container} flex justify-between`}>
      <Link href='/'>
        Chela.js
      </Link>

      <ul className='flex gap-6'>
        <li>
          <CustomLink href='?'>
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink href='/login'>
            Login
          </CustomLink>
        </li>
      </ul>
    </nav>
  )
}
