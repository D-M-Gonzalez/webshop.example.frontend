import React, {useState} from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styles from './LoginForm.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { logInUser } from '../../../controllers/logInUser';
import { registerUser } from '../../../controllers/registerUser';

export default function LoginForm(props) {
  const [inputs, setInputs] = useState({});
  const [member, setMember] = useOutletContext();
  const nav = useNavigate();

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(document.activeElement.getAttribute("name")==="login"){
      const response = await logInUser(inputs);
      setMember(await response);
      nav("/home/intro");
    } else {
      const response = await registerUser(inputs);
      setMember(await response);
      nav("/home/intro");
    }
}

  return (
    <div className={styles.main}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={inputs.password || ""} onChange={handleChange}/>
      </Form.Group>
      <Button variant="secondary" type="submit" name="login">
        Log in
      </Button>{' '}
      <Button variant="secondary" type="submit" name="register">
        Register
      </Button>
      </Form>
    </div>
  )
}
