import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactDropdown.module.css";

//Contact dropdown for main navigation bar
export default function ContactDropdown() {
  return (
    <div className={styles.dropdown}>
      <p>Contact Us</p>
      <div className={styles.dropdowncontent}>
        <div className={styles.dropdownhighlight}>
          <Link to="/contact" className={styles.link}>
            Help Desk
          </Link>
        </div>
        <hr className={styles.raya1}></hr>
        <div className={styles.dropdownhighlight}>
          <Link to="/media" className={styles.link}>
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
