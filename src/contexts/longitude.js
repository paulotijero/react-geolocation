import { createContext } from "react";

const LongitudeContext = createContext();

export const Provider = LongitudeContext.Provider;
export const Consumer = LongitudeContext.Consumer;
export default LongitudeContext;
