import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { mainMouseUpFunction } from "../../utils/handleMouseUp";
import { calculateCoordinates } from "../../utils/calculateCoordinates";
import Ships from "./Ships";
import RenderBoard from "./RenderBoard";
import { useGame } from "../../store/useGame";
const Board = ({ dragging = false, myBoard = true }) => {
  const { game } = useGame();
  const { setNodeRef } = useDroppable({
    id: "board",
  });

  return (
    <div className="relative select-none">
      <div
        ref={setNodeRef}
        className="relative w-full h-[351px]"
        onMouseUp={(e) => {
          if (myBoard && !gameStarted) {
            mainMouseUpFunction(e, dragging);
          } else {
            const { relativeX, relativeY } = calculateCoordinates(e);
            console.log(relativeY, relativeX);
          }
        }}
      >
        <RenderBoard />
        {myBoard && <Ships />}
      </div>
    </div>
  );
};

export default Board;
