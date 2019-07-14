/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import LatitudeContext from "../contexts/latitude";
import LongitudeContext from "../contexts/longitude";

const container = {
  height: "90vh",
  width: "100vw",
  margin: "0 auto"
};

function LeafledMap() {
  const latitude = React.useContext(LatitudeContext);
  const longitude = React.useContext(LongitudeContext);

  return (
    <Map css={container} center={[latitude, longitude]} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Made for Codeable'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          You are here!
          <span role="img" aria-label="emoji dot position">
            🕵 ️
          </span>
        </Popup>
      </Marker>
    </Map>
  );
}

export default LeafledMap;
