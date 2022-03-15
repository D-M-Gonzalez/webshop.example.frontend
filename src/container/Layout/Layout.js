import { Outlet, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import HomeDropdown from "../HomeDropdown/HomeDropdown";
import ProductsDropdown from "../ProductsDropdown/ProductsDropdown";
import ContactDropdown from "../ContactDropdown/ContactDropdown";
import styles from "./Layout.module.css"
import Header from "./Header";

const options = ["Intro", "Equipo", "Diseño", "Redes"];

const Layout = () => {
    
    return (
        <div>
        <Header/>
        <nav>
        <div className={styles.menuBar}>
            <div className={styles.menuItem}>
            <div className={styles.logos}>
            <HomeDropdown/>
            <ProductsDropdown/>
            <ContactDropdown/>
            </div>
            </div>
        </div>
        </nav>
        <Outlet />
        </div>
    )
}

export default Layout;