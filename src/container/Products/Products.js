import React from "react";
import ProductsMenu from "../ProductsMenu/ProductsMenu";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import LocationBar from "../../components/LocationBar/LocationBar";
import styles from "./Products.module.css";
import { useLocation } from "react-router-dom";

//Products View container
export default function Products() {
  const location = useLocation(); //handles the filter calls from outside

  return (
    <div>
      <LocationBar />
      <div className={styles.products}>
        <ProductsMenu />
        <ProductsContainer url={location.pathname} />
      </div>
    </div>
  );
}
