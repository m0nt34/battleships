import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import Draggable from "./Draggable";
import { useShips } from "../store/useShips";
import { calculateCoordinates } from "../utils/calculateCoordinates";
import {
  handleSetCurrentShip,
  handleUnsetCurrentShip,
} from "../utils/handleSetCurrentShip";
import { setShipStyle } from "../utils/setStyles";
import { handleMouseUp } from "../utils/handleMouseUp";
const Board = ({ dragging }) => {

  const [board, setBoard] = useState(Array(10).fill(Array(10).fill(0)));
  const { ships } = useShips();
  const { setNodeRef } = useDroppable({
    id: "board",
  });
  return (
    <div>
      <div
        ref={setNodeRef}
        className="relative w-full h-[351px]"
        onMouseUp={async (e) => {
          const { relativeY, relativeX } = calculateCoordinates(e);

          const newBoard = await handleMouseUp(
            relativeY,
            relativeX,
            board,
            dragging
          );
          setBoard(newBoard);
        }}
      >
        <table>
          <tbody>
            {board.map((column, i) => (
              <tr key={i}>
                {column.map((row, j) => (
                  <td
                    key={`${i}-${j}`}
                    className="h-[35px] w-[35px] border border-[#7c7c7c]"
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {ships.map((shipsSection, i) => {
          return shipsSection.ships.map((ship, j) => {
            return (
              ship.inGame && (
                <Draggable
                  key={`${i}-${j}`}
                  id={ship.id}
                  left={35 * ship.left}
                  top={35 * ship.top}
                >
                  <div
                    id={ship.id}
                    className=" bg-indigo-600 p-[2px] cursor-move "
                    style={setShipStyle(ship.horizontal, ship.shipLength)}
                    onMouseDown={handleSetCurrentShip}
                    onMouseUp={handleUnsetCurrentShip}
                  >
                    <div className="w-full h-full bg-indigo-100"></div>
                  </div>
                </Draggable>
              )
            );
          });
        })}
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
                >{row}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
