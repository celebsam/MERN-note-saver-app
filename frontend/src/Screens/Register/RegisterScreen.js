import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/userActions";

const RegisterScreen = () => {
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [pic, setPic] = useState(
      "http://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
   );
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [message, setMessage] = useState(null);
   const [picMessage, setPicMessage] = useState(null);

   const dispatch = useDispatch();
   const history = useHistory();

   const userRegister = useSelector((state) => state.userRegister);

   const { loading, error, userInfo } = userRegister;
   useEffect(() => {
      if (userInfo) {
         history.push("/mynotes");
      }
   }, [history, userInfo]);

   const submitHandler = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         setMessage("Passwords do not match");
      } else {
         dispatch(register(name, email, password, pic));
      }
   };
   const postDetails = (pics) => {
      console.log(pics);
      if (!pics) {
         return setPicMessage("Please select an image");
      }
      setPicMessage(null);
      if (pics.type === "image/jpeg" || pics.type === "image/png") {
         const data = new FormData();
         data.append("file", pics);
         data.append("upload_preset", "notesaverapp");
         data.append("cloud_name", "samgreen");
         fetch("https://api.cloudinary.com/v1_1/samgreen/image/upload", {
            method: "post",
            body: data,
         })
            .then((response) => response.json())
            .then((data) => {
               console.log(data);
               setPic(data?.url?.toString());
            })
            .catch((err) => console.log(err));
      } else {
         setPicMessage("File format not supported");
      }
   };

   return (
      <MainScreen title="Register">
         {message && (
            <Alert variant="danger">
               <strong>{message}</strong>
            </Alert>
         )}
         {error && (
            <Alert variant="danger">
               <strong>{error}</strong>
            </Alert>
         )}
         {picMessage && (
            <Alert variant="danger">
               <strong>{picMessage}</strong>
            </Alert>
         )}
         <Form onSubmit={submitHandler}>
            <Form.Group className="my-4" controlId="name">
               <Form.Label>Full Name</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </Form.Group>

            <Form.Group className="my-4" controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </Form.Group>

            <Form.Group className="my-4" controlId="confirmPassword">
               <Form.Label>Confirm Password</Form.Label>
               <Form.Control
                  type="password"
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
               />
            </Form.Group>

            <Form.Group className="my-4">
               <Form.Label>Profile Picture</Form.Label>
               <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label=""
                  custom
               />
            </Form.Group>

            <Button variant="primary" type="submit">
               {loading ? (
                  <div
                     style={{
                        minWidth: "50px",
                        height: "25px",
                        maxHeight: "31px",
                        paddingBottom: "6px",
                     }}
                  >
                     <Spinner animation="grow" role="status"></Spinner>
                  </div>
               ) : (
                  "Submit"
               )}
            </Button>
         </Form>
         <Row className="my-4">
            <Col>
               Already have an account? &nbsp;
               <Link to="/login">Login here</Link>
            </Col>
         </Row>
      </MainScreen>
   );
};

export default RegisterScreen;
