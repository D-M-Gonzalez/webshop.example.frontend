import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./HomeProducts.module.css";

//Products container in Home View
export default function HomeProducts(props) {
  const [image, setImage] = useState([
    "https://img.autocosmos.com/noticias/fotos/preview/NAZ_ca4bb7034aaa4aa29f2366b3757e1aac.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Chevrolet_Corvette_C8_Stingray_blue.jpg",
    "https://www.elcarrocolombiano.com/wp-content/uploads/2021/11/20211124-FORD-RANGER-2023-PORTADA.jpg",
    "https://img.remediosdigitales.com/d7c67a/fiat-124-spider-2019-/1366_2000.jpg",
    "https://i.pinimg.com/originals/e2/ef/26/e2ef2692db60be06dee17d3854e3ad94.jpg",
    "https://i.pinimg.com/originals/a0/e9/e4/a0e9e406c27fc6bb6d8af9cb20b1ca2a.jpg",
  ]); //loads the photos, they could be added to the DB but right now they are just placeholders
  const [counter, setCounter] = useState(0);
  const [selectImg, setSelectImg] = useState(image[0]);
  const [timer, setTimer] = useState(false);

  useEffect(() => { //carrousel effect for the photos, loads a new one every 10 seconds, totally independent from the arrows
    setTimeout(() => {
      counter !== 5 ? setCounter(counter + 1) : setCounter(0);
      setSelectImg(image[counter]);
      timer === false ? setTimer(true) : setTimer(false);
    }, 10000);
  }, [timer]);

  const handleMinus = () => { //handles clicking on minus arrow, doesn't reset carrousel timer
    counter !== 0 ? setCounter(counter - 1) : setCounter(5);
    setSelectImg(image[counter]);
  };

  const handlePlus = () => { //handles clicking on plus arrow, doesn't reset carrousel timer
    counter !== 5 ? setCounter(counter + 1) : setCounter(0);
    setSelectImg(image[counter]);
  };

  return (
    <div className={styles.main}>
      <div ref={props.reference} className={styles.textbox}>
        <div>
          <p className={styles.titles}>Only the best new cars available!</p>
          <p className={styles.text}>
            All our models are selected among the top performers of our
            providers.
          </p>
          <p className={styles.text}>
            Our cars had passed the highest security test's available, to
            provide you with the safest options in the market
          </p>
          <p className={styles.text}>
            <Link to="/products" className={styles.link}>
              You can find our products here
            </Link>
          </p>
          <p className={styles.text}>
            We have an international web of aftersales providers with every part
            available on demand, because we know that your time is valuable, to
            provide the fastest services in the region.
          </p>
          <p className={styles.text}>
            Our technicians are among the best in the nation, making us the top
            car dealer in every aspect.
          </p>
        </div>
      </div>
      <div className={styles.images}>
        <h1 onClick={handleMinus}>&lt;</h1>
        <img className={styles.image} src={selectImg} alt="randomimage"></img>
        <h1 onClick={handlePlus}>&gt;</h1>
      </div>
    </div>
  );
}
