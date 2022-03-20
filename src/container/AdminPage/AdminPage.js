import React, { useEffect } from 'react';
import styles from './AdminPage.module.css';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import AdminMenu from '../AdminMenu/AdminMenu';
import AdminContainer from '../AdminContainer/AdminContainer';

export default function AdminPage(props) {
  const [member, setMember] = useOutletContext();
  const location = useLocation();
  const nav = useNavigate();

  useEffect(()=>{
    nav("/admin/readproducts")
  },[])


  return (
    <div>
      <div className={styles.products}>
        {member==="admin" ? <AdminMenu/> : <></>}
        {member==="admin" ? <AdminContainer url={location.pathname}/> : <></>}
      </div>
    </div>
  )
}