/** @format */

import "./App.css";
import VergtableList from "./components/VergtableList";
import * as React from "react";
// import Switch from "@mui/material/Switch";

function App() {
  // const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="App">
      <h1>Vegtables market</h1>
      <VergtableList></VergtableList>
    </div>
  );
}

export default App;
