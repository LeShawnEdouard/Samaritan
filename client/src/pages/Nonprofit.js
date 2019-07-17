import React, { Component } from 'react';
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import '../App.css';

class Nonprofit extends Component {
  state = {
    events: [],
    nonprofits: [],
    event_name: "",
    event_host: "",
    event_time: "",
    event_location: "",
    event_about: ""
  };

  componentDidMount() {
    this.loadEvents();
  };

  loadEvents = () => {
    fetch("/api/events")
      .then(resp => resp.json())
      .then((data) => {
        this.setState({ events: data.comingUp });
        console.log("This is where we are!", data)
      })
    
    //API.getEvents()
    // .then(res =>
    //   console.log(res)
    // )
    // .catch( err => console.log(err))
  };

  createEvent = () => {
    return fetch("/api/event", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        event_name: this.state.event_name,
        event_host: this.state.event_host,
        event_time: this.state.event_time,
        event_location: this.state.event_location,
        event_about: this.state.event_about
      }),
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log("What does the data show!", data);
        this.loadEvents();
      })



  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  // function Nonprofit() {
  render() {
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
              <div>

                <h1>Create Event</h1>
                <Form>
                  <Form.Group controlId="formBasicEmail"
                    onChange={this.handleInputChange}>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter event" name="event_name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail"
                    onChange={this.handleInputChange}>
                    <Form.Label>Host/Company</Form.Label>
                    <Form.Control type="email" placeholder="Enter host" name="event_host" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail"
                    onChange={this.handleInputChange}>
                    <Form.Label>Time of Event</Form.Label>
                    <Form.Control type="email" placeholder="Enter time" name="event_time" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail"

                    onChange={this.handleInputChange}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="email" placeholder="Enter location" name="event_location" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1"

                    onChange={this.handleInputChange}>
                    <Form.Label>Tell us more about your event!</Form.Label>
                    <Form.Control as="textarea" rows="3" name="event_about" />
                  </Form.Group>
                  <Button variant="primary" onClick={() => this.createEvent()}>
                    Submit
              </Button>
                </Form>
              </div>
            </Col>
            <Col size="sm-3">
            <Table striped bordered hover variant="dark" className="scroll-table">
<thead>
  <tr>
    <th>Event</th>
    <th>Host</th>
    <th>Time</th>
    <th>Location</th>
    <th>About</th>
  </tr>
</thead>
<tbody>
{
  this.state.events.map(item => {
    return (
        <tr>
          <td key={item.event_name}>{item.event_name}</td>
          <td key={item.event_host}>{item.event_host}</td>
          <td key={item.event_time}>{item.event_time}</td>
          <td key={item.event_location}>{item.event_location}</td>
          <td data-width="250px" key={item.event_about}>{item.event_about}</td>
        </tr>
      )
    }
  )
}
      </tbody>
    </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Nonprofit;