import React from "react";
import styles from "./AdminButton.module.css";
import { useNavigate } from "react-router-dom";

//Admin button for main navigation bar

export default function AdminButton() {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/admin/readproducts");
  };

  return (
    <div className={styles.main} onClick={handleClick}>
      <div>Admin Panel</div>
    </div>
  );
}
