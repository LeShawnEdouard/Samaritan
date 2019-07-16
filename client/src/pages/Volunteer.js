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


// import sendMessage from "../send_sms"import Table from 'react-bootstrap/Table';
import '../App.css';


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
      <Container>
        <Row>
          <Col>
            <Hero backgroundImage="https://images.unsplash.com/photo-1487687944474-d9cf58dda287?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=732&q=80" data-width="100%"/>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h4>Non-Profit List</h4>
            <br></br>
            <div className="scroll-table">
            <Table striped bordered hover variant="light" className="scroll-table">
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
          <Col xs={12} sm={12} md={6} lg={3}>
            <br></br>
            <h3>Event Display Here</h3>
            <p>
              Event: 5K <br></br>
              Location: 100 Martin Street Raleigh, NC <br></br>
              Time 8:00 AM<br></br>
            </p>
            <p>
              Event: Clean The Water <br></br>
              Location: Wilmington, NC <br></br>
              Time: All Day August 1-3<br></br>
            </p>
            <p>
              Event: Rebuild  <br></br>
              Location: Historic Oakwood <br></br>
              Time: 9:00 AM<br></br>
            </p>
            <p>
              Event: Clean The Road <br></br>
              Location: Highway 540 <br></br>
              Time: 12 PM<br></br>
            </p>
            <br></br>
            <h5>
              Opt in for text reminders on  <br></br>
              upcoming volunteer oppurtunities.<br></br>
              We can't wait to see you!<br></br>
            </h5>
            <br></br>
            <button type="button" className="btn btn-primary btn-lg" onClick={this.handleShow}>Event Text Opt-In!</button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <form
                    onSubmit={this.onSubmit}
                    className={this.state.error ? 'error sms-form' : 'sms-form'}>
                <div>
                  <label htmlFor="to">To:</label>
                  <input
                      type="tel"
                      name="to"
                      id="to"
                      value={this.state.message.to}
                      onChange={this.onHandleChange}
                  />
                </div>
                <div>
                  <label htmlFor="body">Body:</label>
                  <textarea name="body" id="body"
                  value={this.state.message.body}
                  onChange={this.onHandleChange}/>
                </div>
                <button type="submit">
                  Send message
                </button>
              </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
          <br></br>
            <div className="fb-page" data-href="https://www.facebook.com/volunteer365/" data-tabs="timeline" data-width="" data-height="100%" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/volunteer365/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/volunteer365/">Volunteering</a></blockquote></div> 
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Volunteer;


