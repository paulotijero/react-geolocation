import React from "react";
import { render } from "react-dom";

import LeafleMap from "./views/leaflet-map";
import "./main.css";

function App() {
  return (
    <main>
      <LeafleMap />
    </main>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
