/** @format */

import React, { useState } from "react";

function Vergtable(props) {
  function sumcheckedVitamims(vitamins) {
    if (checked) {
      props.setVitaminsSum(props.vitaminsSum - vitamins);
    } else {
      props.setVitaminsSum(props.vitaminsSum + vitamins);
    }
  }
  let [checked, setChecked] = useState(false);
  return (
    <div>
      <h2>{props.name}</h2>
      <img width="100" height="100" src={props.image} alt={props.name}></img>
      <p> vitamins C per 100gr: {props.vitamins} mg</p>
      <input
        type="checkbox"
        onChange={(x) => {
          sumcheckedVitamims(props.vitamins);
          setChecked(!checked);
        }}
      ></input>
    </div>
  );
}

export default Vergtable;
