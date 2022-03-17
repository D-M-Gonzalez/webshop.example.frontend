import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Peugeot.module.css'

function SubList() {

    return (
        <div className={styles.subCatContainer}>
            <div><Link to="/products/peugeot/sedan" className={styles.link}>Sedan</Link></div>
            <div><Link to="/products/peugeot/suv" className={styles.link}>Suv</Link></div>
        </div>
      )

}

export default function Peugeot() {
    const [isVisible, setVisible] = useState(false);
    const [symbol, setSymbol] = useState("+");
    const nav = useNavigate();

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        isVisible ? setSymbol("+") : setSymbol("-")
    }
    const handleLink = () => {
        nav("/products/peugeot")
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                <b className={styles.category} onClick={handleLink}>Peugeot</b>
                    <b className={styles.plus} onClick={handleClick}><div className={styles.plusText}>{symbol}</div></b>
                </div>
                { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}