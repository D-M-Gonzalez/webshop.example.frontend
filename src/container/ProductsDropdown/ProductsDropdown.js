import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductsDropdown.module.css'

export default function ProductsDropdown() {

  return (
    <div className={styles.dropdown}>
    <div>Products</div>
    <div className={styles.dropdowncontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/category1" className={styles.link}>Products Cat 1</Link><h5 className={styles.arrow}>&gt;
        <span className={styles.sidecontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/category1/subcategory1" className={styles.link}>Products Cat 1 Sub Cat 1</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/category1/subcategory2" className={styles.link}>Products Cat 1 Sub Cat 2</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/category1/subcategory3" className={styles.link}>Products Cat 1 Sub Cat 3</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/category1/subcategory4" className={styles.link}>Products Cat 1 Sub Cat 4</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/category1/subcategory5" className={styles.link}>Products Cat 1 Sub Cat 5</Link></div>
          </span>
          </h5></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/products/category2" className={styles.link}>Products Cat 2</Link><h5 className={styles.arrow}>&gt;
        <span className={styles.sidecontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/category2/subcategory1" className={styles.link}>Products Cat 2 Sub Cat 1</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/category2/subcategory2" className={styles.link}>Products Cat 2 Sub Cat 2</Link></div>
          </span>
          </h5></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/products/category3" className={styles.link}>Products Cat 3</Link><h5 className={styles.arrow}>&gt;
        <span className={styles.sidecontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/category3/subcategory1" className={styles.link}>Products Cat 3 Sub Cat 1</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/category3/subcategory2" className={styles.link}>Products Cat 3 Sub Cat 2</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/category3/subcategory3" className={styles.link}>Products Cat 3 Sub Cat 3</Link></div>
          </span>
          </h5></div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}><Link to="/products/category4" className={styles.link}>Products Cat 4</Link><h5 className={styles.arrow}>&gt;
        <span className={styles.sidecontent}>
        <div className={styles.dropdownhighlight}><Link to="/products/category4/subcategory1" className={styles.link}>Products Cat 4 Sub Cat 1</Link></div>
          <hr className={styles.raya1}></hr>
          <div className={styles.dropdownhighlight}><Link to="/products/category4/subcategory2" className={styles.link}>Products Cat 4 Sub Cat 2</Link></div>
          </span>
          </h5></div>
    </div>
</div>
  )
}
