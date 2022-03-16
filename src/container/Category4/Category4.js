import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './Category4.module.css'

function SubList() {

    return (
        <div className={styles.subCatContainer}>
            <div><Link to="/products/category4/subcategory1" className={styles.link}>Cat 4 Sub Cat 1</Link></div>
            <div><Link to="/products/category4/subcategory2" className={styles.link}>Cat 4 Sub Cat 2</Link></div>
        </div>
      )

}

export default function Category4() {
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
                    <b className={styles.category}><Link to="/products/category4" className={styles.link}>Category4</Link></b>
                    <b className={styles.plus} onClick={handleClick}><div className={styles.plusText}>{symbol}</div></b>
                </div>
                { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}