import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { useCurrentShip } from "../store/useCurrentShip";

const Board = () => {
  const { ship } = useCurrentShip();
  const [board, setBoard] = useState(() =>
    Array.from({ length: 10 }, () => Array(10).fill(0))
  );

  const { setNodeRef } = useDroppable({
    id: "board",
  });
  const getNewBoard = (i, j, board, ship) => {
    let newBoard = board;
    if (ship.horizontal) {
      const startX = j - (ship.left - 1);
      const endX = startX + parseInt(ship.id[0]) - 1;
      console.log(startX);
      console.log(endX);

      if (startX < 0 || endX > 9) {
        return false;
      }
      for (let k = startX; k <= endX; k++) {
        newBoard[i][k] = parseInt(ship.id[0]);
      }
      console.log(newBoard);
    } else {
    }
  };
  const handleMouseUp = (i, j) => {
    const newBoard = getNewBoard(i, j, board, ship);
  };
  return (
    <table className="w-[300px] h-[300px] z-10" ref={setNodeRef}>
      <tbody>
        {board.map((column, i) => (
          <tr key={i} className="h-[30px]">
            {column.map((row, j) => (
              <td
                key={`${i}-${j}`}
                className="w-[30px] h-[30px] border border-gray-400"
                onMouseUp={() => handleMouseUp(i, j)}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
