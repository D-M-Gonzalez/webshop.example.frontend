import { Link } from "react-router-dom";
import styles from "./HomeContact.module.css";

//Contact container in Home view
export default function HomeContact(props) {
  return (
    <div className={styles.main}>
      <div className={styles.images}>
        <iframe
          className={styles.image}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13162.267270271504!2d-58.93750285300449!3d-34.43775683306279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc832db5b1fcaf%3A0xfee4992d5e2f00eb!2sR%C3%ADo%20Luj%C3%A1n%20y%20El%20Petrel%20-%20Pilar-%20Bs.As.!5e0!3m2!1ses-419!2sar!4v1647710418078!5m2!1ses-419!2sar"
        ></iframe>
      </div>
      <div ref={props.reference} className={styles.textbox}>
        <div>
          <p className={styles.titles}>We are pleased to meet you!</p>
          <p className={styles.text}>
            You can find us in Random Location, dept of Random Location, Av.
            Random 4503.
          </p>
          <p className={styles.text}>
            Visit us in all our social media, follow us for news and
            information.
          </p>
          <p className={styles.text}>
            If you need help, or want to talk with us, you can contact our
            salesmen throught our official form, or by whatsapp. Check the next
            link for all the information!
          </p>
          <p className={styles.text}>
            <Link to="/home/contact" className={styles.link}>
              Follow Us!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
