import React, { useState } from "react";
import Port from "../components/Port";
import Board from "../components/board/Board";
import { DndContext } from "@dnd-kit/core";
import { checkShipsOnBoard } from "../utils/CheckShipsOnBoard";
import Ranks from "../components/tiles/Ranks";
import Files from "../components/tiles/Files";
import Buttons from "../components/Buttons";
import OpponentBoar from "../components/OpponentBoar";
const Game = () => {
  const [dragging, setDragging] = useState(false);
  const handleDragEnd = () => {
    setTimeout(() => {
      setDragging(false);
    });
    setTimeout(() => {
      checkShipsOnBoard();
    }, 200);
  };
  const handleDrag = () => {
    setDragging(true);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full select-none">
      <DndContext onDragEnd={handleDragEnd} onDragMove={handleDrag}>
        <div className="flex gap-5">
          <Port />
          <div className="flex">
            <Ranks />
            <div className="flex gap-10">
              <div className="flex flex-col">
                <Files />
                <Board dragging={dragging} myBoard={true} />
                <Buttons />
              </div>
              <OpponentBoar />
            </div>
          </div>
        </div>
      </DndContext>
    </div>
  );
};

export default Game;
