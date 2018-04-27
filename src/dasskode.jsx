import * as React from "react";

const Dasskode = ({ name, code, location: { lat, lon } }) => (
  <article id={name}>
    <h1>{name}</h1>
    <p>Code: {code}</p>
    @ ({lat}, {lon})
  </article>
);

export default Dasskode;
