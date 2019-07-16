import React from 'react';
// import Calendar from 'react-calendar';
import axios from 'axios';
// import { Container, Row, Col } from 'reactstrap';
// import { URLSearchParams } from 'url';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Hero from '../components/Hero';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import './smsform.css';
import Container from 'react-bootstrap/Container';




class Volunteer extends React.Component {
  state = {
    message: {
      to: '',
      body: ''
    },
    submitting: false,
    error: false,
    users: [],
    isLoading: true,
    errors: null

  };

  componentDidMount() {
    this.getUsers();
  }

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

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitting: true });
    axios.post('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }

  onHandleChange = (event) => {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }
  render() {
    return (

<div>
<Hero backgroundImage="https://images.unsplash.com/photo-1487687944474-d9cf58dda287?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=732&q=80">

      </Hero>
          <Row>
          <Col className="col-md-6">
            <br></br>

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
        <Col className="col-md-3">
          <Row>
            <div>
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
          <button type="button" class="btn btn-primary btn-lg">Event Text Opt-In!</button>
          </div>
          </Row>
          <Col className="col-md-3">

          <Row>
          <div class="fb-page" data-href="https://www.facebook.com/volunteer365/" data-tabs="timeline" data-width="" data-height="250px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/volunteer365/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/volunteer365/">Volunteering</a></blockquote></div>
          </Row>
          </Col>
          </Col>
        </Row>
        </div>



    );
  }
}

  export default Volunteer;