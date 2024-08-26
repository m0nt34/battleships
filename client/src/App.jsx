import React, { useEffect } from "react";
import Game from "./pages/Game";
import { randomize } from "./utils/RandomShipPlacement";
function App() {
  useEffect(() => {
    randomize();
  }, []);
  return (
    <>
      <Game />
    </>
  );
}

export default App;
