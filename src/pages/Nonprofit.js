import React from 'react';
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
<<<<<<< Updated upstream
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Nonprofit() {
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
            <h1>Join Us Today!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="sm-6">
            <p>

              <h1>Bulletin Board Here</h1>
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