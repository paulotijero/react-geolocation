import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import LeafleMap from "./views/leaflet-map";
import GoogleMap from "./views/google-map";
import "./main.css";

function App() {
  return (
    <main>
      <Router>
        <LeafleMap path="/" />
        <GoogleMap path="/google-map" />
      </Router>
    </main>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
