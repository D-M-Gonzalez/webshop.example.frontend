import React from 'react'
import styles from './ProductsDetail.module.css'

export default function ProductsDetail(props) {
  return (
    <div className={styles.main}>
        <img className={styles.image} src={props.array.image_url} alt="carimage"></img>
        <div className={styles.detail}><b>{props.array.name}</b><b>{props.array.price}</b></div>
        <div className={styles.description}>{props.array.description}</div>
    </div>
  )
}
