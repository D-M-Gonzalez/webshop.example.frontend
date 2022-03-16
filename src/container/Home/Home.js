import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import HomeContact from "./HomeContact/HomeContact";
import HomeIntro from "./HomeIntro/HomeIntro";
import HomeProducts from "./HomeProducts/HomeProducts";
import styles from "./Home.module.css"

export default function Home() {
    const location = useLocation();
    const [actionScroll,setScroll] = useState(false);
    const [urlUpdate, setUrlUpdate] = useState("manual");
    let navigate = useNavigate();
    let counterScroll = 0;
    let finishScroll = 0;
    const myRef = [];
    myRef.push({id:useRef(),lnk:"/home/intro"});
    myRef.push({id:useRef(),lnk:"/home/products"});
    myRef.push({id:useRef(),lnk:"/home/contact"});
    const mainRef = useRef()

    const scrollHandler = ()=>{
        counterScroll = actionScroll + 1;
        setScroll(counterScroll);
        finishScroll = actionScroll;
    }

    const navigationHandler = (el)=>{
        setUrlUpdate("auto");
        navigate(el);
    }

    useEffect(()=>{
        myRef.forEach((el)=>{
            if (location.pathname === el.lnk && urlUpdate === "manual"){
                el.id.current.scrollIntoView({block:'start', behavior: 'smooth'})
            }                
        })    
        setUrlUpdate("manual");   
    },[location]);

    useEffect(()=>{
        async function checkScroll(){
            let promise = new Promise(function(resolve,reject){
                setTimeout(()=>{
                    resolve();
                },100)                
            })
            await promise;
            if (finishScroll===0){    
                myRef.forEach((el,pos)=>{
                    if(mainRef.current.scrollTop >(pos*900)-400 && mainRef.current.scrollTop <((pos+1)*900)-400 && el.lnk !== location.pathname){
                        navigationHandler(el.lnk);
                    }            
                }) 
                setScroll(0);      
            }
        }
        checkScroll();
    },[actionScroll])

    return (
        <div style={{height:"400px"}}>
            <nav>
            <div onScroll={scrollHandler} className={styles.inicioStyle}>
                <HomeIntro reference={myRef[0].id}/>
                <HomeProducts reference={myRef[1].id}/>
                <HomeContact reference={myRef[2].id}/>
            </div>
            </nav>     
        </div>
    );
}