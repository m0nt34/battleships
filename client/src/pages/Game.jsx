import React, { useEffect, useRef, useState } from "react";
import Port from "../components/Port";
import Board from "../components/Board";
import { DndContext } from "@dnd-kit/core";

const Game = () => {
  const [dragging, setDragging] = useState(false);
  const handleDragEnd = () => {
    setTimeout(() => {
      setDragging(false);
    });
  };
  const handleDrag = ()=>{
    setDragging(true);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full ">
      <DndContext onDragEnd={handleDragEnd} onDragMove={handleDrag}>
        <div>
          <header className="w-full text-[14px]">
            Drag the ships to the grid, and then click to rotate:
          </header>
          <div className="flex gap-5">
            <Port />
            <Board dragging={dragging} />
          </div>
        </div>
      </DndContext>
    </div>
  );
};

export default Game;
