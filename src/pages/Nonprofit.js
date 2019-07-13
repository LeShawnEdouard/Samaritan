import React, { Component } from 'react';
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import API from '../utils/API';

class Nonprofit extends Component {
  state ={
    nonprofits: [],
    eventName: "",
    eventHost: "",
    eventTime: "",
    eventLocation: "",
    eventAbout: ""
  };

  componentDidMount(){
    this.loadEvents();
  };

  loadEvents = () => {
    API.getEvents()
    // .then(res =>
    //   console.log(res)
    // )
    // .catch( err => console.log(err))
  };

  createEvent = () => {
    console.log("create event working" );
    // app.post('/', function(req, res){
    //   connection.query(
    //     "INSERT INTO ComingUp SET ?",
    //     {
    //       event_name: this.state.eventName,
    //       event_time: this.state.eventTime,
    //       event_location: this.state.eventLocation,
    //       event_about: this.state.eventAbout
    //     },
    //     function(err) {
    //       if (err) throw err;
    //       console.log("Your event was created successfully!");
    //     }
    //   );
  
    // })

  };

  handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
	});
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
              <Form.Group controlId="formBasicEmail" 
              onChange={this.handleInputChange}>
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="email" placeholder="Enter event" name= "eventName"/>
              <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail"
              onChange={this.handleInputChange}>
              <Form.Label>Host/Company</Form.Label>
              <Form.Control type="email" placeholder="Enter host" name= "eventHost"/>
              <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail"
              onChange={this.handleInputChange}>
              <Form.Label>Time of Event</Form.Label>
              <Form.Control type="email" placeholder="Enter time" name= "eventTime"/>
              <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail"
              
              onChange={this.handleInputChange}>
              <Form.Label>Location</Form.Label>
              <Form.Control type="email" placeholder="Enter location" name= "eventLocation"/>
              <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1"
              
              onChange={this.handleInputChange}>
              <Form.Label>Tell us more about your event!</Form.Label>
              <Form.Control as="textarea" rows="3" name= "eventAbout"/>
              </Form.Group>
              <Button variant="primary" onClick={() => this.createEvent()}>
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