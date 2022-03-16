import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Category2.module.css'

function SubList() {

    return (
        <div>
            <p><Link to="/products/category2/subcategory1" >Products Cat 2 Sub Cat 1</Link></p>
            <p><Link to="/products/category2/subcategory2" >Products Cat 2 Sub Cat 2</Link></p>
        </div>
      )

}

export default function Category2() {
    const [isVisible, setVisible] = useState(false);
    const [symbol, setSymbol] = useState("+");
    const nav = useNavigate();

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        isVisible ? setSymbol("+") : setSymbol("-")
        !isVisible && nav("/products/category2")
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <b className={styles.category}><Link to="/products/category2" >Category2</Link></b>
                    <div className={styles.plus} onClick={handleClick}><b>{symbol}</b></div>
                </div>
                { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}