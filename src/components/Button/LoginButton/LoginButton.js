import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginButton.module.css';

export default function LoginButton(props) {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/login")
  }

  return (
    <div className={styles.main} onClick={handleClick}><div>Login ({props.member})</div></div>
  )
}
