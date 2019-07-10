import React from 'react';
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Nonprofit() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
        <h1>Welcome Back!</h1>
        <h2>Post an event or send an alert to your local volunteers!</h2>
        <br></br>
        <br></br>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Join Us Today!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="sm-6">
            <p>
              <h1>Bulliten Board Here</h1>
            </p>
            </Col>
            <Col size="sm-6">
            <p>
              <h1>Texting App Here</h1>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
    
    export default Nonprofit;