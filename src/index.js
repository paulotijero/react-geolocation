import React from "react";
import ReactGA from "react-ga";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Global } from "@emotion/core";

import LeafleMap from "./views/leaflet-map";
import GoogleMap from "./views/google-map";
import Header from "./componets/header";
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
      <Header />
      <Router>
        <LeafleMap path="/" />
        <GoogleMap path="/google-map" />
      </Router>
    </PositionProvider>
  );
}

render(<App />, document.getElementById("root"));

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);
