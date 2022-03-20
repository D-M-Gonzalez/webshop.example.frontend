import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../controllers/deleteProduct";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./ReadProductsContainer.module.css";
import Button from "react-bootstrap/Button";

const MySwal = withReactContent(Swal);

//Products container inside Admin View
export default function ReadProductsContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [detail, setDetail] = useState(false);
  const URL = useLocation();
  const nav = useNavigate();

  useEffect(() => { //Loads all the products from the DB
    const fetchData = async () => {
      const response = await fetch(
        "https://webshop-example-backend.herokuapp.com/api/products?size=999" //Pagination is implemented server side, but not client side
      );
      const cars = await response.json();
      setItems(cars);
      setIsLoaded(true);
    };
    fetchData().catch(console.error);
  }, []);

  const handleDelete = (id) => async () => { //Handles the clicking 
    await MySwal.fire({ //Fires a warning before doing the deletion
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
        const response = await deleteProduct(id);
        console.log("Status: " + response.status); //Logs the status code
        Swal.fire({
          title: response.message, //Feedbacks the user with the response message
          showConfirmButton: true,
          confirmButtonColor: "lightslategray",
        }).then(() => {
          nav(0); //Reloads the page to apply the changes
        });
      } else if (result.isDenied) { //Does nothing if the user clicks cancel
        Swal.fire({
          title: "Nothing was deleted!",
          showConfirmButton: true,
          confirmButtonColor: "lightslategray",
        });
      }
    });
  };

  const handleModify = (item) => async () => { //Calls a navigation change that fires the modify product form, parsing parameters by Query to preload then into the form
    nav(
      `/admin/modifyproduct?name=${item.name}&category=${item.category}&description=${item.description}&price=${item.price}&brand=${item.brand.brand_name}&imgurl=${item.image_url}&logourl=${item.brand.logo_url}&id=${item.id}&brandid=${item.brand.id}`
    );
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
              <div className={styles.gridItem} key={item.data._id}>
                <b>
                  <img
                    className={styles.brandimage}
                    src={item.data.brand.logo_url}
                    alt="brandimg"
                  ></img>
                </b>
                <b className={styles.name}>{item.data.name}</b>
                <div className={styles.imgDiv}>
                  <img
                    className={styles.image}
                    src={item.data.image_url}
                    alt="carimage"
                  ></img>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleDelete(item.data.id)}
                  >
                    Delete
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleModify(item.data)}
                  >
                    Modify
                  </Button>{" "}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
