import * as React from "react";
import { Link } from 'react-router-dom';

const Dasskode = ({ id, name, code, location: { lat, lng } }) => (
  <article id={name}>
    <h1>{name}</h1>
    <p>Code: {code}</p>
    <div style={{display: 'flex', justifyContent: 'space-between' }}>
      @ ({lat}, {lng})
      <Link to={`/update/${id}`}>Update</Link>
    </div>
  </article>
);

export default Dasskode;
