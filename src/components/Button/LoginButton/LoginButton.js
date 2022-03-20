import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginButton.module.css";

//Login button for main navigation bar
export default function LoginButton(props) { //Get logged member from it's parent
  const nav = useNavigate();

  const handleClick = () => {
    nav("/login");
  };

  return (
    <div className={styles.main} onClick={handleClick}>
      <div>Login ({props.member})</div>
    </div>
  );
}
