import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Account } from './components/Account';
import { Login } from './components/Login';
import { NoMatch } from './components/NoMatch';
// import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Router exact path="/" component={Home} />
            <Router path="/login" component={Account} />
            <Router path="/account" component={Login} />
            <Router component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }  
}

export default App;
