import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactDropdown.module.css'

export default function ContactDropdown() {

  return (
    <div className={styles.dropdown}>
    <div>Inicio</div>
    <div className={styles.dropdowncontent}>
        <div className={styles.dropdownhighlight}><Link to="/inicio/intro" className={styles.link}>¿Quienes somos?</Link></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/inicio/equipos" className={styles.link}>Nuestro equipamiento</Link></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/inicio/design" className={styles.link}>Nuestros diseños</Link></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/inicio/contacto" className={styles.link}>Síguenos</Link></div>
    </div>
</div>
  )
}
