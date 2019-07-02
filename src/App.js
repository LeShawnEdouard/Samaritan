import React, {Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { Account } from './components/Account';
import { Login } from './components/Login';
import { NoMatch } from './components/NoMatch';
import Navbar from './components/NavTab';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <React.Fragment>
          <BrowserRouter>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/account" component={Account} />
              <Route path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </React.Fragment>
      </div>
    ); 
  }  
}


export default App;
