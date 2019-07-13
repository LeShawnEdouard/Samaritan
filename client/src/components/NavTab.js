import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';

export const NavTab = () => (
  <div>
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Samaritan</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
        <li className="nav-item">
        </li>

      </Nav>
      {/* <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
    </Navbar>
  </div>
)

  export default NavTab;