import React from "react";
import {
   Navbar,
   Nav,
   NavDropdown,
   Form,
   FormControl,
   Container,
} from "react-bootstrap";

const Header = () => {
   return (
      <Navbar bg="primary" expand="lg" variant="dark">
         <Container>
            <Navbar.Brand href="/">Note Saver</Navbar.Brand>
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
                  <Nav.Link href="#link">My Notes</Nav.Link>
                  <NavDropdown title="James Smith" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">
                        My Profile
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">
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
