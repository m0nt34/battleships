import React from "react";
import { useBoard } from "../../store/useBoard";

const RenderBoard = () => {
  const { board } = useBoard();
  return (
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
  );
};

export default RenderBoard;
