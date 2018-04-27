import * as React from "react";

const Dasskode = ({ name, code, location: { lat, lng } }) => (
  <article id={name}>
    <h1>{name}</h1>
    <p>Code: {code}</p>
    @ ({lat}, {lng})
  </article>
);

export default Dasskode;
