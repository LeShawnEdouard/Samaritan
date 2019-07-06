import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


    function Home() {
      return (
      <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Samaritan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Container>
        <Row>
          <Col xl={6} style={{height:"100%", width:"100%", background:"red"}}>left</Col>
          <Col xl={6} style={{height:"100%", width:"100%", background:"blue"}}>right</Col> */}
        </Row>
        </Container>
      </div>
      )
    }
    
    export default Home;