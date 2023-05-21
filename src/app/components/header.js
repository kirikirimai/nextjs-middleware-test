import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1 className={styles.header__ttl}>MiddlewarePagesTest</h1>
        <ul className={styles.header__nav}>
            <li><Link href='/'>Top</Link></li>
            <li><Link href='/limitedpage'>LimitedPage</Link></li>
        </ul>
    </div>
  )
}

export default Header