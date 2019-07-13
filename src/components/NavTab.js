import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';

function NavTab(props) {

  const getClassName = (pathname) => {

    if (props.location.pathname === pathname) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  }

  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand> <Link to="/home" className={getClassName("/home")}>Samaritan</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
      <Nav.Link>
        <Link to="/home" className={getClassName("/home")}>Home</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/login" className={getClassName("/login")}>Login</Link>
      </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

  export default withRouter(NavTab);