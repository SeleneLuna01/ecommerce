import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

function Menu() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand as={Link} to="/">React Selene Luna</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
                <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
                <Nav.Link as={Link} to="/producto/alta">Alta producto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
  
  export default Menu;