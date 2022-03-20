import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./LocationBar.module.css";

//Location bar function to handle some filters in Product Container
function FractionURL(props) {   //returns the arrows


  return (
    <p className={styles.fractionURL}>
      <b className={styles.arrow}>&gt;</b>
      <b className={styles.url}>{props.url}</b>
    </p>
  );
}

function ComposedUrl(props) {   //returns the links and adds arrows


  return (
    <div className={styles.locationBar}>
      {props.url[1] && (
        <Link to={""} className={styles.link}>
          <FractionURL url={props.url[1]} />
        </Link>
      )}
      {props.url[2] && (
        <Link to={props.url[2]} className={styles.link}>
          <FractionURL url={props.url[2]} />
        </Link>
      )}
      {props.url[3] && (
        <Link to={props.url[2] + "/" + props.url[3]} className={styles.link}>
          <FractionURL url={props.url[3]} />
        </Link>
      )}
    </div>
  );
}

export default function LocationBar() {
  const URL = useLocation();
  const [urlArr, setUrlArr] = useState();

  useEffect(() => {     //used to split the URL into parts, to get it's destinations, and parses it to a state to be used by the composing component
    const arr = URL.pathname.split("/");
    setUrlArr(arr);
  }, [URL]);

  return <div>{urlArr ? <ComposedUrl url={urlArr} /> : <></>}</div>;
}
