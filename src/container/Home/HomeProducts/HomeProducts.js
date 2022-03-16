import { Link } from "react-router-dom";
import React from "react";
import styles from "./HomeProducts.module.css"

export default function HomeProducts(props) {
    return (
        <>
            <div ref={props.reference} className={styles.scrolldown}>
                <div>
                    <p>Here you can see the presentation of all our products!</p>
                </div>
                <p><Link to="/products" className={styles.link}>Go to our shop</Link></p> 
                <p><Link to="/home/intro" className={styles.link}>Our social media</Link></p> 
                <p><Link to="/home/intro" className={styles.link}>Get back to top</Link></p> 
            </div>
        </>      
    );
}