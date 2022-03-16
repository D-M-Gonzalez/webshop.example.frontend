import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './Category1.module.css'

function SubList() {

    return (
        <div className={styles.subCatContainer}>
            <div><Link to="/products/category1/subcategory1" className={styles.link}>Cat 1 Sub Cat 1</Link></div>
            <div><Link to="/products/category1/subcategory2" className={styles.link}>Cat 1 Sub Cat 2</Link></div>
            <div><Link to="/products/category1/subcategory3" className={styles.link}>Cat 1 Sub Cat 3</Link></div>
            <div><Link to="/products/category1/subcategory4" className={styles.link}>Cat 1 Sub Cat 4</Link></div>
            <div><Link to="/products/category1/subcategory5" className={styles.link}>Cat 1 Sub Cat 5</Link></div>
        </div>
      )

}

export default function Category1() {
    const [isVisible, setVisible] = useState(false);
    const [symbol, setSymbol] = useState("+");

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        isVisible ? setSymbol("+") : setSymbol("-")
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <b className={styles.category}><Link to="/products/category1" className={styles.link} >Category1</Link></b>
                    <b className={styles.plus} onClick={handleClick}><div className={styles.plusText}>{symbol}</div></b>
                </div>
                { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}
