import React from "react";
import { useBoard } from "../../store/useBoard";
import { useOpponentBoard } from "../../store/useOpponentShipPosition";
import { useMyGuessBoard } from "../../store/useMyGueses";
import { useOpGuessBoard } from "../../store/useOpGuessBoard";
import Xmark from "../../assets/Icons/Xmark";
import Dot from "../../assets/Icons/Dot";
const RenderBoard = ({ myBoard }) => {
  const { myGuessBoard } = useMyGuessBoard();
  const { opGuessBoard } = useOpGuessBoard();
  return (
    <table>
      <tbody>
        {(myBoard ? opGuessBoard : myGuessBoard).map((column, i) => (
          <tr key={i}>
            {column.map((row, j) => (
              <td
                key={`${i}-${j}`}
                className={`h-[35px] w-[35px] border border-[#7c7c7c] ${
                  !myBoard && row === 0
                    ? "hover:border-[3px]"
                    : "pointer-events-none"
                }`}
              >
                <div className="flex relative h-full w-full items-center justify-center">
                  {!myBoard ?
                    (row >= 1 ? <Xmark /> : row < 0 ? <Dot /> : null)
                  :(row >= 1 ? <Xmark /> : row < 0 ? <Dot /> : null)}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RenderBoard;
