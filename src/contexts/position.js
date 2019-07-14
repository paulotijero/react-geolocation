import { createContext } from "react";

const PositionContext = createContext();

export const Provider = PositionContext.Provider;
export const Consumer = PositionContext.Consumer;
export default PositionContext;
