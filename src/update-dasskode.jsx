import * as React from 'react';
import { Field, Form } from 'react-final-form';

export default class UpdateDasskode extends React.PureComponent {
  state = {
    dasskode: null
  };

  componentWillMount() {
    this.props.database
      .ref(`/locations/${this.props.id}`)
      .on('value', snap => {
        this.setState({ dasskode: snap.val() });
      });
  }

  render() {
    let { dasskode } = this.state;
    let { database, id } = this.props;

    if (!dasskode) return null;

    return (
      <Form
        onSubmit={values =>
          database.ref(`/locations/${id}`).update(values)
        }
        initialValues={{ code: dasskode.code }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>Update dasskode for {dasskode.name}</h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="form-control"
                disabled
                value={dasskode.name}
              />
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <div
                className="form-group"
                style={{ width: '100%', paddingRight: 16 }}
              >
                <label htmlFor="lat">Latitude</label>
                <input
                  id="lat"
                  className="form-control"
                  disabled
                  value={dasskode.location.lat}
                />
              </div>
              <div
                className="form-group"
                style={{ width: '100%', paddingLeft: 16 }}
              >
                <label htmlFor="lng">Longitude</label>
                <input
                  id="lng"
                  className="form-control"
                  disabled
                  value={dasskode.location.lng}
                />
              </div>
            </div>
            <button className="btn btn-primary">Update</button>
          </form>
        )}
      </Form>
    );
  }
}
