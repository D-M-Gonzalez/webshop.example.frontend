import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ManageUsersButton.module.css";

//Manage Users button for admin panel sidebar
export default function ManageUsersButton() {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/admin/manageusers");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <b className={styles.category} onClick={handleClick}>
            Manage Users:
          </b>
        </div>
      </div>
    </div>
  );
}
