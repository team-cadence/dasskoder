import React, { Component } from "react";

import Dasskode from './dasskode.jsx';
import "./app.css";

const dasskoder = [
  {
    name: "Dasslokket",
    code: "0604",
    location: { lat: 59.9102138, lon: 10.7524852 }
  },
  {
    name: "Test",
    code: "ananas",
    location: { lat: 59.92, lon: 10.77 }
  }
];

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Dasskoder</h1>
        <section id="koder">
          <ul className="list-group">
            {dasskoder.map(dasskode => (
              <li key={dasskode.name} className="list-group-item">
                <Dasskode {...dasskode} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
