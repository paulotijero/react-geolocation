/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { PositionContext } from "../contexts/position";

const container = {
  height: "90vh",
  width: "100vw",
  margin: "0 auto"
};

function LeafledMap() {
  const position = React.useContext(PositionContext);

  return (
    <Map
      css={container}
      center={[position.latitude, position.longitude]}
      zoom={15}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Made for Codeable'
      />
      <Marker position={[position.latitude, position.longitude]}>
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
