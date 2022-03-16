import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactDropdown.module.css'

export default function ContactDropdown() {

  return (
    <div className={styles.dropdown}>
    <div>Contact Us</div>
    <div className={styles.dropdowncontent}>
        <div className={styles.dropdownhighlight}><Link to="/contact" className={styles.link}>Social Media</Link></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/contact" className={styles.link}>About Us</Link></div>
    </div>
</div>
  )
}
