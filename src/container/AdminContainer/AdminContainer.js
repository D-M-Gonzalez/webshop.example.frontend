import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AdminContainer.module.css";

//Admin view list container
export default function AdminContainer() {
  return (
    <div className={styles.main}>
      <Outlet />
    </div>
  );
}
