import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeContact from "../HomeContact/HomeContact";
import HomeIntro from "../HomeIntro/HomeIntro";
import HomeProducts from "../HomeProducts/HomeProducts";
import styles from "./Home.module.css";

//Home view container, does scroll to the component if you click on a link or if the URL changes
export default function Home() {
  const location = useLocation();
  const myRef = [];
  myRef.push({ id: useRef(), lnk: "/home/intro" }); //saves the reference of the location
  myRef.push({ id: useRef(), lnk: "/home/products" });
  myRef.push({ id: useRef(), lnk: "/home/contact" });

  useEffect(() => { //scrolls when the location changes
    myRef.forEach((el) => {
      if (location.pathname === el.lnk) {
        el.id.current.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }, [location]);

  return (
    <div className={styles.main}>
      <nav>
        <div className={styles.inicioStyle}>
          <HomeIntro reference={myRef[0].id} />
          <HomeProducts reference={myRef[1].id} />
          <HomeContact reference={myRef[2].id} />
        </div>
      </nav>
    </div>
  );
}
