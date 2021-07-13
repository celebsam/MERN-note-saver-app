import React from "react";
import {
   Navbar,
   Nav,
   NavDropdown,
   Form,
   FormControl,
   Container,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const Header = () => {
   const dispatch = useDispatch();
   const data = JSON.stringify(localStorage.getItem("userInfo"));
   console.log(data.name);
   const history = useHistory();
   return (
      <Navbar bg="primary" expand="lg" variant="dark">
         <Container>
            <Navbar.Brand>
               <Link to="/">Note Saver</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="m-auto">
                  <Form inline>
                     <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                     />
                  </Form>
               </Nav>
               <Nav>
                  <Nav.Link>
                     <Link to="/mynotes">My Notes</Link>
                  </Nav.Link>
                  <NavDropdown title={data?.name} id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">
                        My Profile
                     </NavDropdown.Item>
                     <NavDropdown.Item
                        onClick={() => {
                           dispatch(logout());
                           history.push("/");
                        }}
                        href="#action/3.2"
                     >
                        Logout
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Header;
