import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FiatSideBar.module.css";

//Sidebar used in Product View to filter fiat cars
function SubList() {
  return (
    <div className={styles.subCatContainer}>
      <div>
        <Link to="/products/fiat/sedan" className={styles.link}>
          Sedan
        </Link>
      </div>
      <div>
        <Link to="/products/fiat/suv" className={styles.link}>
          Suv
        </Link>
      </div>
      <div>
        <Link to="/products/fiat/pickup" className={styles.link}>
          Pickup
        </Link>
      </div>
    </div>
  );
}

export default function FiatSideBar() {
  const [isVisible, setVisible] = useState(false);
  const [symbol, setSymbol] = useState("+");
  const nav = useNavigate();

  const handleClick = () => { //handles visibility of the categories
    isVisible ? setVisible(false) : setVisible(true);
    isVisible ? setSymbol("+") : setSymbol("-");
  };
  const handleLink = () => { //redirects to avoid using Links, as it had conflicts when coding CSS
    nav("/products/fiat");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <b className={styles.category} onClick={handleLink}>
            Fiat
          </b>
          <b className={styles.plus} onClick={handleClick}>
            <div className={styles.plusText}>{symbol}</div>
          </b>
        </div>
        {isVisible ? <SubList /> : <></>}
      </div>
    </div>
  );
}
