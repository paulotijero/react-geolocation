import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Global } from "@emotion/core";

import LeafleMap from "./views/leaflet-map";
import GoogleMap from "./views/google-map";
import Header from "./componets/header";
import { Provider as PositionProvider } from "./contexts/position";

const global = {
  body: {
    margin: "0",
    fontFamily: "'Nunito',sans-serif"
  }
};

function App() {
  const [position, setPosition] = React.useState([0, 0]);

  React.useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(({ coords }) => {
      setPosition([coords.latitude, coords.longitude]);
    });
    return () => navigator.geolocation.clearWatch(watchId);
  }, [setPosition]);

  return (
    <PositionProvider value={position}>
      <Global styles={global} />
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
