import { Outlet } from "react-router-dom";
import React, {useState} from "react";
import HomeDropdown from "../../components/Dropdown/HomeDropdown/HomeDropdown";
import ProductsDropdown from "../../components/Dropdown/ProductsDropdown/ProductsDropdown";
import ContactDropdown from "../../components/Dropdown/ContactDropdown/ContactDropdown";
import Header from "../Header/Header";
import styles from "./Layout.module.css"
import AdminButton from "../../components/Button/AdminButton/AdminButton";
import LoginButton from "../../components/Button/LoginButton/LoginButton";

const Layout = () => {
    const [member, setMember] = useState("Guest");
    
    return (
        <div className={styles.main}>
        <div className={styles.header}><Header/></div>
        <div className={styles.menuBar}>
            <div className={styles.menuItem}>
                <div className={styles.logos}>
                <HomeDropdown/>
                <ProductsDropdown/>
                <ContactDropdown/>
                </div>
            </div>
            <div>
            <div className={styles.login}><LoginButton member={member}/></div>
            {member === "admin" ? <div className={styles.login}><AdminButton/></div> : <></>}
            </div>
        </div>
        <div className={styles.outlet}>
            <Outlet context={[member,setMember]}/>
        </div>
        </div>
    )
}

export default Layout;