import React from 'react';
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Scrape from "../components/scrape";


function Home() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
        <h1>Good Samaritans</h1>
        <h2>We Are In This Together</h2>
        <br></br>
        <br></br>
        <Container>
          <Row>
          <Col size="md-6">
        <div>
        {/* <h2>Sign-In To Volunteer!</h2> */}
          <Button variant="light" div className="fb-login-button" 
        // onClick={this.loginFB()} 
        data-width="" data-size="" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true">Volunteer</Button></div>
        </Col>
        <Col size="md-6">
        <div>
          <Button variant="light">Non-Profit</Button></div>
        </Col>
        </Row>
        </Container>
      </Hero>

      <Scrape>
      </Scrape>
    </div>
  );
}
    
    export default Home;