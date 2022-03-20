import React, { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import AdminMenu from "../AdminMenu/AdminMenu";
import AdminContainer from "../AdminContainer/AdminContainer";
import { validateUser } from "../../controllers/validateUser";

//Entire admin view container
export default function AdminPage(props) {
  const [member, setMember] = useOutletContext(); //Uses context to pass the user validation to it's parent
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => { //Validates user on first load, to check if any other than the admin tried to enter the page by typing the URL
    validate();
  }, []);

  const validate = async () => {
    const response = await validateUser();
	console.log("Status: " + response.status) //Logs the status code
    if (response.status === 200) {
      setMember("admin");
      console.log("Token validated successfully");
      nav("/admin/readproducts"); //If user is validated, it rerenders the page
    } else {
      console.log("wrong token");
      nav("/home/intro"); //If user is not validated, it redirects to intro page
    }
  };

  return (
    <div>
      <div className={styles.products}>
        {member === "admin" ? <AdminMenu /> : <></>}
        {member === "admin" ? (
          <AdminContainer url={location.pathname} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
