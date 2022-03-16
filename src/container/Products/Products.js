import React from 'react'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import styles from './Products.module.css'
import { useNavigate, useLocation} from "react-router-dom";

export default function Products() {
  const location = useLocation();


  return (
    <div>
    <div className={styles.locationBar}>Aca va la barra</div>
    <div className={styles.products}>
      <ProductsMenu/>
      <ProductsContainer url={location.pathname}/>
    </div>
    </div>
  )
}
