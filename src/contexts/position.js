import React from "react";

const PositionContext = React.createContext();

function PositionProvider(props) {
  const [position, setPosition] = React.useState([0, 0]);

  React.useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(({ coords }) => {
      setPosition([coords.latitude, coords.longitude]);
    });
    return () => navigator.geolocation.clearWatch(watchId);
  }, [setPosition]);

  const value = {
    latitude: position[0],
    longitude: position[1]
  };

  return <PositionContext.Provider value={value} {...props} />;
}

export { PositionProvider, PositionContext };
