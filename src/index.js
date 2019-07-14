import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Global } from "@emotion/core";

import LeafleMap from "./views/leaflet-map";
import GoogleMap from "./views/google-map";
import Header from "./componets/header";
import { Provider as LongitudeProvider } from "./contexts/longitude";
import { Provider as LatitudeProvider } from "./contexts/latitude";

const global = {
  body: {
    margin: "0",
    fontFamily: "'Nunito',sans-serif"
  }
};

function App() {
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);

  React.useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(({ coords }) => {
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    });
    return () => navigator.geolocation.clearWatch(watchId);
  }, [setLatitude, setLongitude]);

  return (
    <LatitudeProvider value={latitude}>
      <LongitudeProvider value={longitude}>
        <Global styles={global} />
        <Header />
        <Router>
          <LeafleMap path="/" />
          <GoogleMap path="/google-map" />
        </Router>
      </LongitudeProvider>
    </LatitudeProvider>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
