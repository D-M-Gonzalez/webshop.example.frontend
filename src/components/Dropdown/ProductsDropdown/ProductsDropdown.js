import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './ProductsDropdown.module.css'

export default function ProductsDropdown() {
  const nav = useNavigate();

  const handleClick = () =>{
    nav('/products');
  }

  return (
    <div className={styles.dropdown}>
    <p onClick={handleClick}>Products</p>
    <div className={styles.dropdowncontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/ford" className={styles.link}>Ford</Link><h5 className={styles.arrow}>&gt;
        <span className={styles.sidecontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/ford/sedan" className={styles.link}>Sedan</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/ford/suv" className={styles.link}>Suv</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/ford/pickup" className={styles.link}>Pickup</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/ford/truck" className={styles.link}>Truck</Link></div>
          </span>
        </h5></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/products/peugeot" className={styles.link}>Peugeot</Link><h5 className={styles.arrow}>&gt;
        <span className={styles.sidecontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/peugeot/sedan" className={styles.link}>Sedan</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/peugeot/suv" className={styles.link}>Suv</Link></div>
          </span>
          </h5></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/products/fiat" className={styles.link}>Fiat</Link><h5 className={styles.arrow}>&gt;
        <span className={styles.sidecontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/fiat/sedan" className={styles.link}>Sedan</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/fiat/suv" className={styles.link}>Suv</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/fiat/pickup" className={styles.link}>Pickup</Link></div>
          </span>
          </h5></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/products/chevrolet" className={styles.link}>Chevrolet</Link><h5 className={styles.arrow}>&gt;
        <span className={styles.sidecontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/chevrolet/sedan" className={styles.link}>Sedan</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/chevrolet/suv" className={styles.link}>Suv</Link></div>
          </span>
          </h5></div>
    </div>
</div>
  )
}
