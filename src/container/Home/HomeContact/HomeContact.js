import { Link } from "react-router-dom";
import React from "react";
import styles from "./HomeContact.module.css"

export default function HomeContact(props) {
    return (
        <>
            <div ref={props.reference} className={styles.scrolldown}>
                <div>
                    <p>All the information about ourselves, and everything related to our social media</p>
                </div>
                <p><Link to="/contact" className={styles.link}>Contact Us!</Link></p>
                <p><Link to="/home/intro" className={styles.link}>Go back to top</Link></p>
            </div>
        </>      
    );
}