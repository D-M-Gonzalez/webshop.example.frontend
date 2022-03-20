import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./ManageUsersContainer.module.css";
import Button from "react-bootstrap/Button";
import { deleteUser } from "../../controllers/deleteUser";

const MySwal = withReactContent(Swal);

//Users container in Admin View
export default function ManageUsersContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const nav = useNavigate();

  useEffect(() => { //Gets all the users from the DB
    const fetchData = async () => {
      const response = await fetch("https://webshop-example-backend.herokuapp.com/api/users?size=999"); //Server can handle pagination, but it is not implemented in client side yet
      const users = await response.json();
      setItems(users);
      setIsLoaded(true);
    };
    fetchData().catch(console.error);
  }, []);

  const handleDelete = (id) => async () => { //Handles delete button
    await MySwal.fire({ //Fires a warning before deleting the user
      title: <strong>Are you sure?</strong>,
      html: <i>Changes can't be reverted!</i>,
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: "Delete it!",
      confirmButtonColor: "darkred",
      denyButtonText: "Cancel",
      denyButtonColor: "lightslategray",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteUser(id);
		console.log("Status: " + response.status) //Logs the status code
        Swal.fire({
          title: response.message, //gives a feedback message to the user
          showConfirmButton: true,
          confirmButtonColor: "lightslategray",
        }).then(() => {
          nav("/admin/readproducts"); //goes back to products in admin view
        });
      } else if (result.isDenied) { //if No is clicked, nothing happens
        Swal.fire({
          title: "Nothing was deleted!",
          showConfirmButton: true,
          confirmButtonColor: "lightslategray",
        });
      }
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className={styles.gridContainer}>
          {items &&
            items.map((item) => (
              <div className={styles.gridItem} key={item.data.id}>
                <b className={styles.name}>{item.data.user_name}</b>{" "}
                {item.data.user_name !== "admin" && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleDelete(item.data.id)}
                  >
                    Delete
                  </Button>
                )}{" "}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
