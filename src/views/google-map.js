/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import GoogleMapsApiLoader from "google-maps-api-loader";

const container = {
  height: "90vh",
  width: "100vw"
};

function GoogleMap() {
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [googleMap, setGoogleMap] = React.useState(null);
  const API_KEY = "put to API_KEY";
  const mapContainerRef = React.useRef(null);

  React.useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(({ coords }) => {
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    });
    return () => navigator.geolocation.clearWatch(watchId);
  }, [setLatitude, setLongitude]);

  React.useEffect(() => {
    GoogleMapsApiLoader({ API_KEY }).then(google => {
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
