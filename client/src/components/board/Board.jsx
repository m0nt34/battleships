import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { mainMouseUpFunction } from "../../utils/handleMouseUp";
import { useBoard } from "../../store/useBoard";
import Ships from "./Ships";
import RenderBoard from "./RenderBoard";
const Board = ({ dragging }) => {
  const { board } = useBoard();
  const { setNodeRef } = useDroppable({
    id: "board",
  });
  return (
    <div className="relative select-none">
      <div
        ref={setNodeRef}
        className="relative w-full h-[351px]"
        onMouseUp={(e) => mainMouseUpFunction(e, dragging)}
      >
        <RenderBoard />
        <Ships />
      </div>
      <table className="mt-10">
        <tbody>
          {board.map((column, i) => (
            <tr key={i}>
              {column.map((row, j) => (
                <td
                  key={`${i}-${j}`}
                  className={`h-[35px] w-[35px] border border-[#7c7c7c] ${
                    row > 0 ? "bg-blue-500" : row < 0 ? "bg-red-500" : ""
                  }`}
                >
                  {row}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
