import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Global } from "@emotion/core";

import LeafleMap from "./views/leaflet-map";
import GoogleMap from "./views/google-map";
import Header from "./componets/header";

const global = {
  body: {
    margin: "0",
    fontFamily: "'Nunito',sans-serif"
  }
};

function App() {
  return (
    <>
      <Global styles={global} />
      <Router>
        <LeafleMap path="/" />
        <GoogleMap path="/google-map" />
      </Router>
      <Header />
    </>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
