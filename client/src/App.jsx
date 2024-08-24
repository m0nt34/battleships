import React from "react";
import Game from "./pages/Game";
import { SocketProvider } from "./context/SocketContext";
function App() {
  return (
    <>
      <SocketProvider>
        <Game />
      </SocketProvider>
    </>
  );
}

export default App;
