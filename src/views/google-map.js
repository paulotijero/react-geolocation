/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import GoogleMapsApiLoader from "google-maps-api-loader";

import PositionContext from "../contexts/position";

const container = {
  height: "90vh",
  width: "100vw"
};

function GoogleMap() {
  const position = React.useContext(PositionContext);
  const latitude = position[0];
  const longitude = position[1];
  const [googleMap, setGoogleMap] = React.useState(null);
  const apiKey = "AIzaSyAv78f8NYP2cdwJmoZLrw7FFsSX5gGD8CE";
  const mapContainerRef = React.useRef(null);

  React.useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google);
    });
  }, []);

  React.useEffect(() => {
    if (!googleMap || !mapContainerRef.current) return;

    const initialConfig = {
      zoom: 15,
      center: { lat: latitude, lng: longitude }
    };
    const map = new googleMap.maps.Map(mapContainerRef.current, initialConfig);
    const marker = new googleMap.maps.Marker({
      position: initialConfig.center,
      map: map
    });
    const InfoWindow = new googleMap.maps.InfoWindow({
      content: `<div id="content"> You are Here! 🕵️</div>`
    });
    marker.addListener("click", () => {
      InfoWindow.open(map, marker);
    });
  }, [googleMap, mapContainerRef]);

  return <div css={container} ref={mapContainerRef} />;
}

export default GoogleMap;
