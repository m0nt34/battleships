import React from "react";
import Randomize from "../assets/Icons/Randomize";
import Reset from "../assets/Icons/Reset";
import { handleReset } from "../utils/handleReset";
import { randomize } from "../utils/RandomShipPlacement";
const Buttons = () => {
  return (
    <div className="flex w-full justify-center gap-5 mt-5">
      <button
        onClick={randomize}
        className="flex items-center justify-center text-xl gap-1"
      >
        <Randomize />
        Randomize
      </button>
      <button
        onClick={handleReset}
        className="flex items-center justify-center text-xl gap-1"
      >
        <Reset />
        Reset
      </button>
    </div>
  );
};

export default Buttons;
