import * as React from 'react';

import { Form, Field } from 'react-final-form';

const UpdateDasskode = ({ id, name, code }) => (
  <Form onSubmit={values => alert(JSON.stringify(values))}>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" disabled value={name} />
      </div>
      <div className="form-group">
        <label htmlFor="Code">Code</label>
        <Field
          id="code"
          name="code"
          className="form-control"
          initialValue={code}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lat" />
        <input id="lat" className="form-control" value={lat} />
      </div>
      <div className="form-group">
        <label htmlFor="lng" />
        <input id="lng" className="form-control" value={lng} />
      </div>
    </form>
  </Form>
);
