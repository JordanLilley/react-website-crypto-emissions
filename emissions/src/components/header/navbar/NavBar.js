import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <div className="d-flex justify-content-center">
          {" "}
          {/*This allows for the position of objects on the NavBar */}
          <Container className="d-flex justify-content-center">
            <Navbar.Brand className="" href="/">
              Crypto Emissions
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex me-auto">
                <Nav.Link href="/crypto">Crypto</Nav.Link>
                <Nav.Link href="/emissions">Emissions</Nav.Link>
                <Nav.Link href="/calculator">Calculator</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </div>
      </Navbar>
      
    </div>
  );
};

export default NavBar;
