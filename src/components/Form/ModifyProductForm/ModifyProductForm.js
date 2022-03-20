import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { modifyProduct } from "../../../controllers/modifyProduct";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ModifyProductForm.module.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

//Form fired when clicking modify on a product, in admin view
export default function ModifyProductForm() { //states manage the initial parameter setup
  const [inputs, setInputs] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const nav = useNavigate();

  useEffect(() => {
    setBrand(searchParams.get("brand"));
    setCategory(searchParams.get("category"));
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleBrandSelect = (event) => {
    setBrand(event.target.value);
  };

  const handleCatSelect = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => { //Manages the submit
    event.preventDefault();
    setInputs((inputs._id = searchParams.get("id"))); //Sets the id, saved on a parameter, but hidden to the user, used by the DB to search for the product
    setInputs((inputs.brand = brand)); //Sets the brand if it wasn't changed
    setInputs((inputs.category = category)); //Sets the category if it wasn't changed
    const response = await modifyProduct(inputs);
    console.log("Status: " + response.status); //Logs the status code received
    await MySwal.fire({ //Fires an alert with the message received from the server
      title: <strong>{response.message}!</strong>,
      showConfirmButton: true,
      confirmButtonText: "Okay",
      confirmButtonColor: "lightslategray",
    }).then(() => {
      nav("/admin/readproducts");
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Car name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={inputs.name || searchParams.get("name")}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={inputs.price || searchParams.get("price")}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Brand:</Form.Label>
              <Form.Select
                type="text"
                name="brand"
                value={brand}
                onChange={handleBrandSelect}
              >
                <option value="ford">Ford</option>
                <option value="peugeot">Peugeot</option>
                <option value="fiat">Fiat</option>
                <option value="chevrolet">Chevrolet</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Category:</Form.Label>
              <Form.Select
                type="text"
                name="category"
                value={category}
                onChange={handleCatSelect}
              >
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="pickup">Pickup</option>
                <option value="truck">Truck</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="description"
                value={inputs.description || searchParams.get("description")}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label>Image URL:</Form.Label>
              <Form.Control
                type="text"
                name="image_url"
                value={inputs.image_url || searchParams.get("imgurl")}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
