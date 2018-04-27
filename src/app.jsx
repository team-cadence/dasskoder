import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';

import Navbar from './navbar.jsx';
import Home from './home.jsx';
import AddDasskode from './add-dasskode.jsx';
import UpdateDasskode from './update-dasskode.jsx';

import './app.css';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const app = firebase.initializeApp(config);
const database = app.database();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" render={() => <Home database={database} />}  />
              <Route path="/new" render={(props) => <AddDasskode {...props} database={database} />} />
              <Route path="/update/:id" render={(props) =>
                <UpdateDasskode {...props} id={props.match.params.id} database={database}/>
              } />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
