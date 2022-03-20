import React from "react";
import CreateProductButton from "../../components/Button/CreateProductButton/CreateProductButton";
import ManageUsersButton from "../../components/Button/ManageUsersButton/ManageUsersButton";
import ReadProductsButton from "../../components/Button/ReadProductsButton/ReadProductsButton";
import styles from "./AdminMenu.module.css";

//Admin side menu
export default function ProductsMenu() {
  return (
    <div>
      <div className={styles.Main}>
        <CreateProductButton />
        <ReadProductsButton />
        <ManageUsersButton />
      </div>
    </div>
  );
}
