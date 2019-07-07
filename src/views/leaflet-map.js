/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Map, TileLayer, Marker } from "react-leaflet";

const container = {
  height: "90vh",
  width: "100vw",
  margin: "0 auto"
};

function LeafledMap() {
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
    <Map css={container} center={[latitude, longitude]} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Made for Codeable'
      />
      <Marker position={[latitude, longitude]} />
    </Map>
  );
}

export default LeafledMap;
