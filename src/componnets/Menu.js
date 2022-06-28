import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

function Menu() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">URL Shortner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>        
    </div>
  )
}

export default Menu