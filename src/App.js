import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div id="something-importanr">
      <h1>Adopt Me1</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
