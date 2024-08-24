import React, { memo } from "react";
import Randomize from "../assets/Icons/Randomize";
import Reset from "../assets/Icons/Reset";
import { handleReset } from "../utils/handleReset";
import { randomize } from "../utils/RandomShipPlacement";
import { useGame } from "../store/useGame";
const Buttons = () => {
  const { gameStarted } = useGame();

  return (
    <div className="h-6">
      {!gameStarted && (
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
      )}
    </div>
  );
};

export default memo(Buttons);
