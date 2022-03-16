import { Link } from "react-router-dom";
import React from "react";
import styles from "./HomeIntro.module.css"

export default function HomeIntro(props) {
    return (
        <>
            <div ref={props.reference} className={styles.scrolldown}>
                <div>
                    <p>A beautiful presentation of our business, check our products presentation and our personal presentation:</p>
                </div>
                <p><Link to="/home/products" className={styles.link}>Our products</Link></p>                
                <p><Link to="/home/contact" className={styles.link}>Our social media</Link></p>
            </div>
        </>      
    );
}