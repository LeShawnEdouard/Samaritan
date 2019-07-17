import React, {Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Volunteer  from './pages/Volunteer';
import { Login } from './pages/Login';
import { NoMatch } from './pages/NoMatch';
import Nonprofit from './pages/Nonprofit';

import Navbar from './components/NavTab';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange.bind(this)
    this.state = {
      events: [],
      nonprofits: [],
      event_name: "",
      event_host: "",
      event_time: "",
      event_location: "",
      event_about: ""
    }
  }

 

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (

      <div>
        {/* <Navbar></Navbar> */}
        <React.Fragment>
          <BrowserRouter>
          <Navbar></Navbar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/Volunteer" component={Volunteer} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/Nonprofit" component={Nonprofit} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </React.Fragment>
      </div>

    ); 
  }  
}


export default App;

