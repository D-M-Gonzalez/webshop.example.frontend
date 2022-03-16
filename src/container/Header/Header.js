import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logoContainer}>
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" className={styles.logo}/>
        </div>
    </div>)
  };
