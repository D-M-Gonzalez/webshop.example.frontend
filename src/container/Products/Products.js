import React from 'react'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import LocationBar from '../LocationBar/LocationBar'
import styles from './Products.module.css'
import {useLocation} from "react-router-dom";

export default function Products() {
  const location = useLocation();


  return (
    <div>
      <LocationBar/>
      <div className={styles.products}>
        <ProductsMenu/>
        <ProductsContainer url={location.pathname}/>
      </div>
    </div>
  )
}
