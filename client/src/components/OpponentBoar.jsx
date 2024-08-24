import React, { useState } from "react";
import Ranks from "./tiles/Ranks";
import Files from "./tiles/Files";
import Board from "./board/Board";
import { usePort } from "../store/useShowPort";
import { useGame } from "../store/useGame";

const OpponentBoar = () => {
  const { show } = usePort();
  const { game } = useGame();
  const [loading, setLoading] = useState(false);

  return (
    !show &&
    (game ? (
      <div className="flex">
        <Ranks />
        <div className="flex flex-col">
          <Files />
          <Board myBoard={false} />
        </div>
      </div>
    ) : (
      <div className="flex h-full w-[380px] items-center justify-center">
        <button className="text-2xl h-fit px-6 py-1 rounded-md bg-green-500 font-semibold text-white hover:bg-green-400 transition">
          Play
        </button>
      </div>
    ))
  );
};

export default OpponentBoar;
