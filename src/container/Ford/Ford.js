import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Ford.module.css'

function SubList() {

    return (
        <div className={styles.subCatContainer}>
            <div><Link to="/products/ford/sedan" className={styles.link}>Sedan</Link></div>
            <div><Link to="/products/ford/suv" className={styles.link}>Suv</Link></div>
            <div><Link to="/products/ford/pickup" className={styles.link}>Pickup</Link></div>
            <div><Link to="/products/ford/truck" className={styles.link}>Truck</Link></div>
        </div>
      )

}

export default function Ford() {
    const [isVisible, setVisible] = useState(false);
    const [symbol, setSymbol] = useState("+");
    const nav = useNavigate();

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        isVisible ? setSymbol("+") : setSymbol("-")
    }
    const handleLink = () => {
        nav("/products/ford")
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <b className={styles.category} onClick={handleLink}>Ford</b>
                    <b className={styles.plus} onClick={handleClick}><div className={styles.plusText}>{symbol}</div></b>
                </div>
                { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}
