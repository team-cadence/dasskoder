import * as React from "react";

import Dasskode from './dasskode.jsx';

export default class Home extends React.PureComponent {

  state = {
    dasskoder: []
  };

  componentDidMount() {
    this.props.database.ref("/locations").on("value", (snap) => {
      this.setState({dasskoder: snap.val()})
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Dasskoder</h1>
        <section id="koder">
          <ul className="list-group">
            {Object.entries(this.state.dasskoder).map(([id, dasskode]) => (
              <li key={dasskode.name} className="list-group-item">
                <Dasskode {...dasskode} />
              </li>
            ))}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

