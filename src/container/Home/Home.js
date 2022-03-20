import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import HomeContact from "../HomeContact/HomeContact";
import HomeIntro from "../HomeIntro/HomeIntro";
import HomeProducts from "../HomeProducts/HomeProducts";
import styles from "./Home.module.css"

export default function Home() {
    const location = useLocation();
    const myRef = [];
    myRef.push({id:useRef(),lnk:"/home/intro"});
    myRef.push({id:useRef(),lnk:"/home/products"});
    myRef.push({id:useRef(),lnk:"/home/contact"});

    useEffect(()=>{
        myRef.forEach((el)=>{
            if (location.pathname === el.lnk ){
                el.id.current.scrollIntoView({block:'start', behavior: 'smooth'})
            }                
        })     
    },[location]);

    return (
        <div className={styles.main}>
            <nav>
            <div className={styles.inicioStyle}>
                <HomeIntro reference={myRef[0].id}/>
                <HomeProducts reference={myRef[1].id}/>
                <HomeContact reference={myRef[2].id}/>
            </div>
            </nav>     
        </div>
    );
}