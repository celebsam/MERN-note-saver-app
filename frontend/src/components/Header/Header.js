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
import { useDispatch, useSelector } from "react-redux";

const Header = ({ setSearch }) => {
  const dispatch = useDispatch();
  // const data = JSON.stringify(localStorage.getItem("userInfo"));
  // console.log(data.name);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const history = useHistory();
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link>Note Saver</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          {userInfo ? (
            <Nav>
              <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    dispatch(logout());
                    history.push("/");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              <img
                src={userInfo?.pic}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                alt={userInfo?.name}
              />
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
