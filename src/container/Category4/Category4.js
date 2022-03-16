import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Category4.module.css'

function SubList() {

    return (
        <div>
            <p><Link to="/products/category4/subcategory1" >Products Cat 4 Sub Cat 1</Link></p>
            <p><Link to="/products/category4/subcategory2" >Products Cat 4 Sub Cat 2</Link></p>
        </div>
      )

}

export default function Category4() {
    const [isVisible, setVisible] = useState(false);
    const [symbol, setSymbol] = useState("+");
    const nav = useNavigate();

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        isVisible ? setSymbol("+") : setSymbol("-")
        !isVisible && nav("/products/category4")
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <b className={styles.category}><Link to="/products/category4" >Category4</Link></b>
                    <div className={styles.plus} onClick={handleClick}><b>{symbol}</b></div>
                </div>
                { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}