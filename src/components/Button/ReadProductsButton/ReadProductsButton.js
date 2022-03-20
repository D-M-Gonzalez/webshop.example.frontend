import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReadProductsButton.module.css";

//Read products button for admin panel sidebar
export default function ReadProductsButton() {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/admin/readproducts");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <b className={styles.category} onClick={handleClick}>
            Read Products
          </b>
        </div>
      </div>
    </div>
  );
}
