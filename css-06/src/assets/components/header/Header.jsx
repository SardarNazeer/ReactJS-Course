import React from 'react'
import styles from './Header.css'

const Header = () => {
  return (
    <div className={styles.head}>
      <h2>Sardar Nazeer</h2>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
