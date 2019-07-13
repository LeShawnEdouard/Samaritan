import React, { Component } from 'react';
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Nonprofit extends Component {
  state ={
    nonprofits: []
  };

  componentDidMount(){

  };

// function Nonprofit() {
  render(){
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">
        <h1>Welcome Back!</h1>
        <h2>Post an event or send an alert to your local volunteers!</h2>
        <br></br>
        <br></br>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="sm-3">
            <p>

              <h1>Create Event</h1>
              <Form>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="email" placeholder="Enter event" />
              <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
              <Form.Label>Host/Company</Form.Label>
              <Form.Control type="email" placeholder="Enter host" />
              <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
              <Form.Label>Time of Event</Form.Label>
              <Form.Control type="email" placeholder="Enter time" />
              <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control type="email" placeholder="Enter location" />
              <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Tell us more about your event!</Form.Label>
              <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
              Submit
              </Button>
            </Form>
            </p>
            </Col>
            <Col size="sm-3">
            <h3>Event Display Here</h3>
          <p>
            Event <br></br>
            Location <br></br>
            Time<br></br>
          </p>
          <p>
            Event <br></br>
            Location <br></br>
            Time<br></br>
          </p>
          <p>
            Event <br></br>
            Location <br></br>
            Time<br></br>
          </p>
          <p>
            Event <br></br>
            Location <br></br>
            Time<br></br>
          </p>
            </Col>
            <Col size="sm-3">
            <p>
            <button type="button" class="btn btn-primary btn-lg">Text an Event!</button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}}
    
    export default Nonprofit;