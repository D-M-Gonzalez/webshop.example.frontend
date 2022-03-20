import React, { useState, useEffect } from "react";
import { createProduct } from "../../../controllers/createProduct";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./CreateProductForm.module.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

//Form to add products to database, used in admin view
export default function CreateProductForm() {
  const [inputs, setInputs] = useState({});
  const [brand, setBrand] = useState("ford"); //setups initial select values
  const [category, setCategory] = useState("sedan"); //setups initial select values

  const handleChange = (event) => { //handles value changes
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

  const handleSubmit = async (event) => { //calls the controller to add data to database
    event.preventDefault();
    setInputs((inputs.brand = brand));
    setInputs((inputs.category = category));
    const response = await createProduct(inputs);
    console.log("Status: " + response.status); //logs any status received
    await MySwal.fire({ //fires an alert to give user feedback
      title: <strong>{response.message}!</strong>,
      showConfirmButton: true,
      confirmButtonText: "Okay",
      confirmButtonColor: "lightslategray",
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
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={inputs.price || ""}
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
                value={inputs.description || ""}
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
                value={inputs.image_url || ""}
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
