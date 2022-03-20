import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from './LocationBar.module.css'

function FractionURL(props){

  return(
    <p className={styles.fractionURL}>
      <b className={styles.arrow}>&gt;</b><b className={styles.url}>{props.url}</b>
    </p>
  )
}

function ComposedUrl(props){

  return (
    <div className={styles.locationBar}>
      {props.url[1] && <Link to={""} className={styles.link}><FractionURL url={props.url[1]}/></Link> }
      {props.url[2] && <Link to={(props.url[2])} className={styles.link}><FractionURL url={props.url[2]}/></Link> }
      {props.url[3] && <Link to={(props.url[2]) + "/" + (props.url[3])} className={styles.link}><FractionURL url={props.url[3]}/></Link> }     
    </div>
  )
}

export default function LocationBar() {

  const URL = useLocation();
  const [asd, setAsd] = useState();

  useEffect(()=>{
    const arr = URL.pathname.split("/");
    setAsd(arr)
  },[URL])

  return (
    <div>
      {asd ? <ComposedUrl url={asd}/> : <></>}
    </div>
  )
}
