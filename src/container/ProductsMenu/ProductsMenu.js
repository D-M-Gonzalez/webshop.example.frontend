import React from "react";
import styles from "./ProductsMenu.module.css";
import ChevroletSideBar from "../../components/SideBar/ChevroletSideBar/ChevroletSideBar";
import FiatSideBar from "../../components/SideBar/FiatSideBar/FiatSideBar";
import FordSideBar from "../../components/SideBar/FordSideBar/FordSideBar";
import PeugeotSideBar from "../../components/SideBar/PeugeotSideBar/PeugeotSideBar";

export default function ProductsMenu() {
  return (
    <div>
        <div className={styles.Main}>
            <FordSideBar/>
            <PeugeotSideBar/>
            <FiatSideBar/>
            <ChevroletSideBar/>
        </div>
    </div>
  )
}
