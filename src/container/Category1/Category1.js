import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Category1.module.css'

function SubList() {

    return (
        <div>
            <p><Link to="/products/category1/subcategory1" >Products Cat 1 Sub Cat 1</Link></p>
            <p><Link to="/products/category1/subcategory2" >Products Cat 1 Sub Cat 2</Link></p>
            <p><Link to="/products/category1/subcategory3" >Products Cat 1 Sub Cat 3</Link></p>
            <p><Link to="/products/category1/subcategory4" >Products Cat 1 Sub Cat 4</Link></p>
            <p><Link to="/products/category1/subcategory5" >Products Cat 1 Sub Cat 5</Link></p>
        </div>
      )

}

export default function Category1() {
    const [isVisible, setVisible] = useState(false);
    const [symbol, setSymbol] = useState("+");
    const nav = useNavigate();

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        isVisible ? setSymbol("+") : setSymbol("-")
        !isVisible && nav("/products/category1")
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <b className={styles.category}><Link to="/products/category1" >Category1</Link></b>
                    <div className={styles.plus} onClick={handleClick}><b>{symbol}</b></div>
                </div>
                { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}
