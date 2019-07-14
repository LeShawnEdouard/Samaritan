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
  render() {
    return (

      <div>
        {/* <Navbar></Navbar> */}
        <React.Fragment>
          <BrowserRouter>
          <Navbar></Navbar>
            <Switch>
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
