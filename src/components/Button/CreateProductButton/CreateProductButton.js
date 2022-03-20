import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateProductButton.module.css";

//Create product button for Admin Panel sidebar
export default function CreateProductButton() {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/admin/createproduct");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <b className={styles.category} onClick={handleClick}>
            Create Product
          </b>
        </div>
      </div>
    </div>
  );
}
