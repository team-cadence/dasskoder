import * as React from "react";

import Dasskode from './dasskode.jsx';

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

const Home = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export default Home;
