import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Fiat.module.css'

function SubList() {

    return (
        <div className={styles.subCatContainer}>
            <div><Link to="/products/fiat/sedan" className={styles.link}>Sedan</Link></div>
            <div><Link to="/products/fiat/suv" className={styles.link}>Suv</Link></div>
            <div><Link to="/products/fiat/pickup" className={styles.link}>Pickup</Link></div>
        </div>
      )

}

export default function Fiat() {
    const [isVisible, setVisible] = useState(false);
    const [symbol, setSymbol] = useState("+");
    const nav = useNavigate();

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        isVisible ? setSymbol("+") : setSymbol("-")
    }
    const handleLink = () => {
        nav("/products/fiat")
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                <b className={styles.category} onClick={handleLink}>Fiat</b>
                    <b className={styles.plus} onClick={handleClick}><div className={styles.plusText}>{symbol}</div></b>
                </div>
                { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}