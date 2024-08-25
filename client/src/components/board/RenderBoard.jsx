import React from "react";
import { useBoard } from "../../store/useBoard";
import { useOpponentBoard } from "../../store/useOpponentShipPosition";

const RenderBoard = ({ myBoard }) => {
  const { OpBoard } = useOpponentBoard();
  const { board } = useBoard();
  console.log(myBoard);
  
  return (
    <table>
      <tbody>
        {(myBoard ? board : OpBoard).map((column, i) => (
          <tr key={i}>
            {column.map((row, j) => (
              <td
                key={`${i}-${j}`}
                className="h-[35px] w-[35px] border border-[#7c7c7c]"
              >
                {!myBoard ? row:""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RenderBoard;
