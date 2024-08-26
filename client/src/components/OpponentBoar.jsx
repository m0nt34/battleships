import React, { useEffect, useState } from "react";
import Ranks from "./tiles/Ranks";
import Files from "./tiles/Files";
import Board from "./board/Board";
import { usePort } from "../store/useShowPort";
import { useGame } from "../store/useGame";
import useSocketStore from "../store/useSocketStore";
import ThreeDotsLoadingIcon from "../assets/Icons/ThreeDotsLoadingIcon";
import { useBoard } from "../store/useBoard";
import { useOpponentBoard } from "../store/useOpponentShipPosition";
import { useCurrentRoom } from "../store/useCurrentGameRoom";
import { useMyTurn } from "../store/useMyTurn";
import { useOpGuessBoard } from "../store/useOpGuessBoard";
import { useMyGuessBoard } from "../store/useMyGueses";

const OpponentBoar = () => {
  const { show } = usePort();
  const { gameStarted, setGameToTrue, setGameToFalse } = useGame();
  const { setOpBoard } = useOpponentBoard();
  const [loading, setLoading] = useState(false);
  const { emitEvent, listenToEvent, removeListener } = useSocketStore();
  const { board } = useBoard();
  const { setCurrentRoom } = useCurrentRoom();
  const { setMyTurn } = useMyTurn();
  const { setOpGuessBoardToDefault } = useOpGuessBoard();
  const { setMyGuessBoardToDefault } = useMyGuessBoard();
  const handleStartSearching = () => {
    setLoading(true);
    emitEvent("start-searching", board);
  };
  useEffect(() => {
    listenToEvent("room-assigned", (data) => {
      setGameToTrue();
      setOpBoard(data.opponentShips);
      setCurrentRoom(data.room);
      setMyTurn(data.yourTurn);
    });
    listenToEvent("opponent-disconnected", (res) => {
      setGameToFalse();
      setLoading(false);
      setCurrentRoom("");
      setMyTurn(false);
      setOpGuessBoardToDefault();
      setMyGuessBoardToDefault();
      window.alert(res.message);
    });
    return () => {
      removeListener("opponent-disconnected");
      removeListener("room-assigned");
    };
  }, []);
  return (
    !show &&
    (gameStarted ? (
      <div className="flex">
        <Ranks />
        <div className="flex flex-col">
          <Files />
          <Board myBoard={false} />
        </div>
      </div>
    ) : (
      <div className="flex h-full w-[380px] items-center justify-center">
        {loading ? (
          <div className="flex flex-col relative">
            <span className="absolute top-[-12px]  text-[19px]">

            Searching...
            </span>
            <ThreeDotsLoadingIcon />
          </div>
        ) : (
          <button
            onClick={handleStartSearching}
            className="text-2xl h-fit px-6 py-1 rounded-md bg-green-500 font-semibold text-white hover:bg-green-400 transition"
          >
            Play
          </button>
        )}
      </div>
    ))
  );
};

export default OpponentBoar;
