import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
// import ErrorMessage from "../../components/ErrorMessage";

const LoginScreen = ({ history }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const dispatch = useDispatch();
   const userLogin = useSelector((state) => state.userLogin);
   const { loading, error, userInfo } = userLogin;

   useEffect(() => {
      if (userInfo) {
         history.push("/mynotes");
      }
   }, [history, userInfo]);

   const submitHandler = async (e) => {
      e.preventDefault();
      dispatch(login(email, password));
   };

   return (
      <MainScreen title="Login">
         {/* <div>test</div> */}
         {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}

         {error && (
            <Alert variant="danger">
               <strong>{error}</strong>
            </Alert>
         )}
         <Form onSubmit={submitHandler}>
            <Form.Group className="my-4" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
               {loading ? (
                  <div style={{ minWidth: "50px", maxHeight: "26px" }}>
                     <Spinner animation="border" role="status"></Spinner>
                  </div>
               ) : (
                  "Submit"
               )}
            </Button>
         </Form>
         <Row className="my-4">
            <Col>
               Don't have an account? &nbsp;
               <Link to="/register">Sign up here</Link>
            </Col>
         </Row>
      </MainScreen>
   );
};

export default LoginScreen;
