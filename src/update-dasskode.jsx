import * as React from 'react';

import {Field, Form} from 'react-final-form';

export default class UpdateDasskode extends React.PureComponent {

  state = {
    dasskode: null
  };

  componentWillMount() {
    this.props.database.ref(`/locations/${this.props.name}`).on("value", (snap) => {
      this.setState({dasskode: snap.val()});
    });
  }

  render() {
    let { dasskode } = this.state;
    let { database } = this.props;

    if (!dasskode) return null;

    return (
      <Form onSubmit={values => database.ref(`/locations/${this.props.name}`).update(values)} initialValues={{code: dasskode.code}}>
        {({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" className="form-control" disabled value={dasskode.name}/>
            </div>
            <div className="form-group">
              <label htmlFor="Code">Code</label>
              <Field
                id="code"
                name="code"
                component="input"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lat"/>
              <input id="lat" className="form-control" disabled value={dasskode.location.lat}/>
            </div>
            <div className="form-group">
              <label htmlFor="lng"/>
              <input id="lng" className="form-control" disabled value={dasskode.location.lng}/>
            </div>
            <button className="btn btn-primary">Update</button>
          </form>
        )}
      </Form>
    );
  }
}

