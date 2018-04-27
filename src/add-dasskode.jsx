import * as React from 'react';
import {Field, Form} from 'react-final-form';
import * as uuid from 'uuid';

const AddDasskode = ({database, history}) => (
  <div>
    <h1>Add dasskode</h1>
    <Form onSubmit={values => database.ref(`/locations/${uuid.v4()}`).set(values).then(() => history.push("/"))}>
      {({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              component="input"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="code">Code</label>
            <Field
              id="code"
              name="code"
              component="input"
              className="form-control"
              required
            />
          </div>
          <div
            style={{
              display: 'flex'
            }}
          >
            <div
              className="form-group"
              style={{width: '100%', marginRight: 16}}
            >
              <label htmlFor="lat">Latitude</label>
              <Field
                id="lat"
                name="location.lat"
                component="input"
                type="number"
                min={0}
                className="form-control"
                required
              />
            </div>
            <div
              className="form-group"
              style={{width: '100%', marginLeft: 16}}
            >
              <label htmlFor="lng">Longitude</label>
              <Field
                id="lng"
                name="location.lng"
                component="input"
                type="number"
                min={0}
                className="form-control"
                required
              />
            </div>
          </div>
          <button className="btn btn-primary">Create new dasskode</button>
        </form>
      )}
    </Form>
  </div>
);

export default AddDasskode;
