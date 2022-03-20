import React, {useState, useEffect} from 'react'
import { createProduct } from '../../../controllers/createProduct';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './CreateProductForm.module.css'

export default function CreateProductForm() {
    const [inputs, setInputs] = useState({});
    const [brand, setBrand] = useState("ford");
    const [category, setCategory] = useState("sedan");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleBrandSelect = (event) => {
        setBrand(event.target.value)
    }

    const handleCatSelect = (event) => {
        setCategory(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputs(inputs.brand = brand);
        setInputs(inputs.category = category);
        createProduct(inputs);
    }

  return (


    <div className={styles.main}>
        <div className={styles.container}>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Car name:</Form.Label>
                        <Form.Control type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="number" name="price" value={inputs.price || ""} onChange={handleChange}/>   
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Brand:</Form.Label>
                        <Form.Select type="text" name="brand" value={brand} onChange={handleBrandSelect}>
                            <option value="ford">Ford</option>
                            <option value="peugeot">Peugeot</option>
                            <option value="fiat">Fiat</option>
                            <option value="chevrolet">Chevrolet</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Category:</Form.Label>
                        <Form.Select type="text" name="category" value={category} onChange={handleCatSelect}>
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
                        <Form.Control as="textarea" rows={3} type="text" name="description" value={inputs.description || ""} onChange={handleChange}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Image URL:</Form.Label>
                        <Form.Control type="text" name="image_url" value={inputs.image_url || ""} onChange={handleChange}/>
                    </Form.Group>
                </Row>
                <Button variant="secondary" type="submit">Submit</Button>
            </Form>
        </div>
    </div>
  )
}
