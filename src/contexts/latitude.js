import { createContext } from "react";

const LatitudeContext = createContext();

export const Provider = LatitudeContext.Provider;
export const Consumer = LatitudeContext.Consumer;
export default LatitudeContext;
