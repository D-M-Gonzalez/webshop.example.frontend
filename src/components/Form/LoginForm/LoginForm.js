import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { logInUser } from "../../../controllers/logInUser";
import { registerUser } from "../../../controllers/registerUser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

//Form used to log in into the server, has no functionality other than when logging with admin credentials or registering a new user
export default function LoginForm(props) { 
  const [inputs, setInputs] = useState({});
  const [member, setMember] = useOutletContext(); //uses context to pass data to it's parent, who manages the verification for admin view
  const nav = useNavigate();

  const handleChange = (event) => { //handles form data changes
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (document.activeElement.getAttribute("name") === "login") { // checks which button has been pressed to manage login or register
      const response = await logInUser(inputs);
	  console.log("Status: " + response.status) //Logs the status code
      if (response.status === 200) { //correct credentials received
        setMember(await response.data.user_name);
        await MySwal.fire({
          title: <strong>{response.message}!</strong>,
          showConfirmButton: true,
          confirmButtonText: "Okay",
          confirmButtonColor: "lightslategray",
        }).then(() => {
          nav("/home/intro");
        });
      } else {
        setMember("Guest"); //something happened, returns feedback to the user
        await MySwal.fire({
          title: <strong>{response.message}!</strong>,
          showConfirmButton: true,
          confirmButtonText: "Okay",
          confirmButtonColor: "lightslategray",
        }).then(() => {
          nav("/home/intro");
        });
      }
    } else {
      const response = await registerUser(inputs);
      if (response.status === 200) {
        setMember(await response.data.user_name); //Register was successful, automatically show user logged in
        await MySwal.fire({
          title: <strong>{response.message}!</strong>,
          showConfirmButton: true,
          confirmButtonText: "Okay",
          confirmButtonColor: "lightslategray",
        }).then(() => {
          nav("/home/intro");
        });
      } else {
        setMember("Guest"); //Register failed, returns feedback to the user
        await MySwal.fire({
          title: <strong>{response.message}!</strong>,
          showConfirmButton: true,
          confirmButtonText: "Okay",
          confirmButtonColor: "lightslategray",
        }).then(() => {
          nav("/home/intro");
        });
      }
    }
  };

  return (
    <div className={styles.main}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="secondary" type="submit" name="login">
          Log in
        </Button>{" "}
        <Button variant="secondary" type="submit" name="register">
          Register
        </Button>
      </Form>
    </div>
  );
}
