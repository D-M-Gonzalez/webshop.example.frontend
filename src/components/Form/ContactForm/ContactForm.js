import React from 'react';
import styles from './ContactForm.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactForm() {
  return (
    <div className={styles.main}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Your question</Form.Label>
        <Form.Control as="textarea" rows={5} type="text" placeholder="Write here what you want to as us"/>
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
      </Form>
    </div>
  )
}