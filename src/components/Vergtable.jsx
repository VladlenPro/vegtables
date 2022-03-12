/** @format */

import React from "react";

function Vergtable(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img width="100" height="100" src={props.image} alt={props.name}></img>
      <p> vitamins C per 100gr: {props.vitamins}</p>
    </div>
  );
}

export default Vergtable;
