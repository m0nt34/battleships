import React, { createContext, useContext } from "react";
import { socket } from "../services/socket";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocketContext = () => useContext(SocketContext);
