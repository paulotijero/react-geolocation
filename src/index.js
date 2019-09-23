import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Global } from "@emotion/core";

import LeafleMap from "./views/leaflet-map";
import GoogleMap from "./views/google-map";
import Header from "./componets/header";
import SEO from "./componets/seo";
import { PositionProvider } from "./contexts/position";

const global = {
  body: {
    margin: "0",
    fontFamily: "'Nunito',sans-serif"
  }
};

function App() {
  return (
    <PositionProvider>
      <Global styles={global} />
      <SEO />
      <Header />
      <Router>
        <LeafleMap path="/" />
        <GoogleMap path="/google-map" />
      </Router>
    </PositionProvider>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
