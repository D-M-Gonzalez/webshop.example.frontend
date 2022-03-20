import React from "react";
import styles from "./MediaContainer.module.css";
import { SocialIcon } from "react-social-icons";

//Media container in Contact View, does nothing, just decorative
export default function MediaContainer() {
  return (
    <div className={styles.main}>
      <div className={styles.textbox}>
        <div>
          <p className={styles.titles}>Contact information:</p>
          <p className={styles.text}>Line phone: +998 65 484531</p>
          <p className={styles.text}>
            <SocialIcon url="https://www.whatsapp.com/" /> +998 65 587535
          </p>
          <p className={styles.text}>
            <SocialIcon url="https://www.facebook.com/" /> Follow us on
            facebook!
          </p>
          <p className={styles.text}>
            <SocialIcon url="https://www.twitter.com/" /> Follow us on twitter!
          </p>
          <p className={styles.text}>
            Location: Random Location, dept of Random Location, Av. Random 4503.
          </p>
          <iframe
            className={styles.image}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13162.267270271504!2d-58.93750285300449!3d-34.43775683306279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc832db5b1fcaf%3A0xfee4992d5e2f00eb!2sR%C3%ADo%20Luj%C3%A1n%20y%20El%20Petrel%20-%20Pilar-%20Bs.As.!5e0!3m2!1ses-419!2sar!4v1647710418078!5m2!1ses-419!2sar"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
