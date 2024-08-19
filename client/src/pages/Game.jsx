import React from "react";
import Port from "../components/Port";

import { DndContext } from "@dnd-kit/core";
import Board from "../components/Board";
import { useCurrentShip } from "../store/useCurrentShip";
const Game = () => {
  const { setShip } = useCurrentShip();
  const onDragEnd = (e) => {
    const currShipObj = {
      id: "",
      horizontal: true,
      left: "",
      top: "",
    };
    setTimeout(() => {
      setShip(currShipObj);
    }, 0);
  };
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen w-full ">
      <div>
        <header className="w-full text-[14px]">
          Drag the ships to the grid, and then click to rotate:
        </header>
        <DndContext onDragEnd={onDragEnd}>
          <div className="flex gap-5">
            <Port />
            <Board />
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default Game;
