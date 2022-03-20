import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./HomeIntro.module.css"

export default function HomeIntro(props) {
    const [image, setImage] = useState(["https://www.thetruthaboutcars.com/wp-content/uploads/2014/04/used_cars-610x405.jpg",
                                        "https://i.pinimg.com/originals/b2/ca/01/b2ca012067022ee958baf99302306ce1.jpg",
                                        "https://media.istockphoto.com/photos/dealer-new-cars-stock-picture-id480652712?k=20&m=480652712&s=612x612&w=0&h=dbyTkQ3-PJJMAlNAR2hGxPWX1ODvSJspuDsdvQmOKlI="]);
    const [counter, setCounter] = useState(0);
    const [selectImg, setSelectImg] = useState(image[0]);
    const [timer, setTimer] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            counter!==2 ? setCounter(counter+1) : setCounter(0);
            setSelectImg(image[counter]);
            timer===false ? setTimer(true) : setTimer(false)
        },10000)
    },[timer])

    const handleMinus = () => {
        counter!==0 ? setCounter(counter-1) : setCounter(2);
        setSelectImg(image[counter]);       
    }

    const handlePlus = () => {
        counter!==2 ? setCounter(counter+1) : setCounter(0);
        setSelectImg(image[counter]);      
    }


    return (
        <div className={styles.main}>
            <div className={styles.images}>
                <h1 onClick={handleMinus}>&lt;</h1>
            <img className={styles.image} src={selectImg} alt="randomimage"></img>
                <h1 onClick={handlePlus}>&gt;</h1>
            </div>
            <div ref={props.reference} className={styles.textbox}>
                <div>
                    <p className={styles.titles}>The 1st Car Dealer in the region!</p>
                    <p className={styles.text}>    With over 40 years in the market, we offer from the best brands
                    available from both national and imported manufacturers.</p>
                    <p className={styles.text}>     You can check all our products here:</p>
                    <p className={styles.text}><Link to="/home/products" className={styles.link}>Products List</Link></p>
                    <p className={styles.text}>     We offer the best aftersales services with extended warranty periods that are totally
                    unbelievable, and would be impossible for any other dealer to have.</p>
                    <p className={styles.text}>     All our partners work with the best sales employees to provide the customer a pleasant experience
                    and make you feel like in home. Buying a car has never been so easy!</p>
                    <p className={styles.text}><Link to="/home/contact" className={styles.link}>Follow Us!</Link></p>
                </div>
            </div>
        </div>      
    );
}