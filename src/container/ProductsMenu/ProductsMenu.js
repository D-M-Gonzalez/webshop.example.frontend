import React from "react";
import Ford from "../Ford/Ford";
import Fiat from "../Fiat/Fiat";
import Peugeot from "../Peugeot/Peugeot";
import Chery from "../Chery/Chery";
import styles from "./ProductsMenu.module.css";

export default function ProductsMenu() {
  return (
    <div>
        <div className={styles.Main}>
            <Ford/>
            <Peugeot/>
            <Fiat/>
            <Chery/>
        </div>
    </div>
  )
}
