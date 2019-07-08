import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Global } from "@emotion/core";

import LeafleMap from "./views/leaflet-map";
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
      <Header />
      <Router>
        <LeafleMap path="/" />
      </Router>
    </>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
