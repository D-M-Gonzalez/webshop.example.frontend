import React from 'react'
import styles from './ProductsDetail.module.css'

export default function ProductsDetail(props) {
  return (
    <div className={styles.main}>
        <div className={styles.imagecard}>
        <img className={styles.image} src={props.array.image_url} alt="carimage"></img>
        </div>
        <div className={styles.productcard}>
          <div className={styles.detail}>
            <b className={styles.title}>{props.array.name}</b>
            <b className={styles.price}>{props.array.price} u$d</b>
            <b><img className={styles.logo} src={props.array.brand.logo_url} alt="logoimage"></img></b>
            </div>
            </div>
        <div className={styles.descriptioncard}><div className={styles.description}>{props.array.description}</div></div>
    </div>
  )
}
