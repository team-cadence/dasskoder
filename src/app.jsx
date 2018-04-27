import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './navbar.jsx';
import Home from './home.jsx';
import Signup from './signup.jsx';

import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
