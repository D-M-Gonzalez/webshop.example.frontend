import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomeDropdown.module.css'

export default function HomeDropdown() {

  return (
    <div className={styles.dropdown}>
    <p>Home</p>
    <div className={styles.dropdowncontent}>
        <div className={styles.dropdownhighlight}><Link to="/home/intro" className={styles.link}>Introduction</Link></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/home/products" className={styles.link}>Our Products</Link></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/home/contact" className={styles.link}>Contact Us</Link></div>
    </div>
</div>
  )
}
