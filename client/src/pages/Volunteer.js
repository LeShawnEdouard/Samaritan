import React from 'react';
// import Calendar from 'react-calendar';
import axios from 'axios';
// import { Container, Row, Col } from 'reactstrap';
// import { URLSearchParams } from 'url';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import '../App.css';


class Volunteer extends React.Component {
  state = {
    users: [],
    events: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    this.loadEvents();
    this.getUsers();
  };

  loadEvents = () => {
    fetch("/api/events")
      .then(resp => resp.json())
      .then((data) => {
        console.log(data)
        this.setState({ events: data.comingUp });
        console.log("This is where we are!", data)
      })
    //API.getEvents()
    // .then(res =>
    //   console.log(res)
    // )
    // .catch( err => console.log(err))
  };


  getUsers = () => {
    console.log("sanity check");
    axios
    .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=c9d3a7e3&app_key=a1eab8e3f23bac67609bf0168595f301")
  
        .then(res => {
          console.log(res, "resultss");
        this.setState({
          users: res.data
        });
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (

<div>
          <Container>
          <Row>
          <Col className="col-md-8">

        <h4>Non-Profit List</h4>
        <br></br>
        <div className="scroll-table">
        <Table striped bordered hover variant="dark" className="scroll-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Location</th>
              <th>Learn More</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.users.map(user => {
              return (
                  <tr>
                    <td key={user.charityName}>{user.charityName}</td>
                    <td key={user.mailingAddress.city}>{user.mailingAddress.city}, {user.mailingAddress.stateOrProvince}</td>
                    <td key={user.charityName}><a href={user.charityNavigatorURL} onClick={this.handleClick}>Learn More Here!</a></td>
                  </tr>
                )
              }
            )
          }
                </tbody>
              </Table>

        </div>

        </Col>
        <Col className="col-md-4">
          <Row>
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
          <Row>
          <div class="fb-page" data-href="https://www.facebook.com/volunteer365/" data-tabs="timeline" data-width="" data-height="400px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/volunteer365/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/volunteer365/">Volunteering</a></blockquote></div>
          </Row>
          </Col>
        </Row>
        </Container>
        </div>



    );
  }
}

  export default Volunteer;


