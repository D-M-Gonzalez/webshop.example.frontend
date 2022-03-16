import React from "react";
import Category1 from "../Category1/Category1";
import Category2 from "../Category2/Category2";
import Category3 from "../Category3/Category3";
import Category4 from "../Category4/Category4";
import styles from "./ProductsMenu.module.css";

export default function ProductsMenu() {
  return (
    <div>
        <div className={styles.Main}>
            <Category1/>
            <Category2/>
            <Category3/>
            <Category4/>
        </div>
    </div>
  )
}
