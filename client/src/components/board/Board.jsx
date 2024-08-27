import React, { useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";
import { mainMouseUpFunction } from "../../utils/handleMouseUp";
import { calculateCoordinates } from "../../utils/calculateCoordinates";
import Ships from "./Ships";
import RenderBoard from "./RenderBoard";
import { useGame } from "../../store/useGame";
import { useMyTurn } from "../../store/useMyTurn";
import useSocketStore from "../../store/useSocketStore";
import { useCurrentRoom } from "../../store/useCurrentGameRoom";
import { guess } from "../../utils/guess";
import { opponentGuess } from "../../utils/OpponentGuess";
import { useLoading } from "../../store/useLoading";
const Board = ({ dragging = false, myBoard = true }) => {
  const { gameStarted } = useGame();
  const { myTurn, setMyTurn } = useMyTurn();
  const { emitEvent, listenToEvent, removeListener } = useSocketStore();
  const { currentRoom } = useCurrentRoom();
  const { loading } = useLoading();
  const { setNodeRef } = useDroppable({
    id: "board",
  });
  const handleMakeMove = (x, y) => {
    const { sameGuess, hit, win } = guess(x, y);
    if (!sameGuess) {
      emitEvent("make-move", { room: currentRoom, move: { x, y }, hit });
      if (win) {
        window.alert("you won!");
        location.reload();
      }
    }
  };
  useEffect(() => {
    listenToEvent("your-turn", (data) => {
      const { yourTurn } = data;
      setMyTurn(yourTurn);
    });
    listenToEvent("opponent-move", (data) => {
      const { move } = data;
      const lose = opponentGuess(move.x, move.y);
      if (lose) {
        window.alert("you lose!");
        location.reload();
      }
    });
    return () => {
      removeListener("your-turn");
      removeListener("opponent-move");
    };
  }, []);
  return (
    <div
      className={`relative select-none ${
        (!myTurn && !myBoard) || (myBoard && myTurn) ? "opacity-25" : null
      }`}
    >
      <div
        ref={setNodeRef}
        className="relative w-full h-[351px]"
        onMouseUp={(e) => {
          if (myBoard && !gameStarted && !loading) {
            mainMouseUpFunction(e, dragging);
          } else {
            if (myTurn) {
              const { relativeX, relativeY } = calculateCoordinates(e);
              handleMakeMove(relativeY, relativeX);
            }
          }
        }}
      >
        <RenderBoard myBoard={myBoard} />
        {myBoard && <Ships />}
      </div>
    </div>
  );
};

export default Board;
