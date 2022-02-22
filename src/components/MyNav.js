import React from 'react';
import {
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import { LinkContainer } from 'react-router-bootstrap';

const MyNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Bad Bank
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="hamburger"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="me-auto text-center" variant="pills">
              <LinkContainer className="my-2" to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/AllData">
                <Nav.Link>All Data</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Balance">
                <Nav.Link>Balance</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/CreateAccount">
                <Nav.Link>Create Account</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Deposit">
                <Nav.Link>Deposit</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Withdraw">
                <Nav.Link as={NavLink} to="/Withdraw">
                  Withdraw
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
