import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

export const NavBar = () => {
  return(
      <>

          <Navbar bg="dark" variant="dark"  className="fixed-top ">
              <Container>
                  <Navbar.Brand><Link to="/" className="nav-link" > <h1>Barber<b>Gentleman</b></h1> </Link></Navbar.Brand>
                  <Nav className="me-auto">
                      <Link to="clientes" className="nav-link">
                          Clientes
                      </Link>
                      <Link to="citas" className="nav-link">
                          Citas
                      </Link>
                      <Link to="productos" className="nav-link">
                          Productos
                      </Link>
                  </Nav>
              </Container>
          </Navbar>
      </>
  );
}
