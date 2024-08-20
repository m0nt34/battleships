import React, { useRef, useState } from "react";
import { useCurrentShip } from "../store/useCurrentShip";
import { useShips } from "../store/useShips";
import Draggable from "./Draggable";
import {
  placeShip,
  calculateCooridnates,
  pickupShip,
} from "../utils/newBoardManipulations";
import { inGameShipPosition } from "../utils/calculatestylization";
import { getShipByID } from "../utils/getShipById";
const Board = () => {
  const { ship, setShip } = useCurrentShip();
  const { ships, updateNestedShipById } = useShips();
  const [board, setBoard] = useState(() =>
    Array.from({ length: 10 }, () => Array(10).fill(0))
  );
  const boardRef = useRef(null);
  
  const handleMouseUp = (i, j) => {
    var newBoard = placeShip(i, j, board, ship, true);
    const currShip = getShipByID(ship.id);

    if (newBoard) {
      setBoard(newBoard);
    } else if (currShip && currShip.top !== -1) {
      newBoard = placeShip(currShip.top, currShip.left, board, ship, false);

      if (newBoard) {
        setBoard(newBoard);
      }
    }
  };
  const onDragStart = (e) => {
    console.log(e.target);
    
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    const currShipObj = {
      id: e.target.id,
      horizontal: e.target.getAttribute("data-position") === "true",
      left: Math.ceil(offsetX / 34),
      top: Math.ceil(offsetY / 34),
    };
    const currShip = getShipByID(currShipObj.id);

    setBoard(
      pickupShip(
        board,
        currShip.left,
        currShip.top,
        currShip.shipLength,
        currShip.horizontal
      )
    );

    setShip(currShipObj);
  };
  return (
    <div className="relative">
      <table className="relative w-[340px] h-[340px] z-10">
        <tbody className="z-20">
          {board.map((column, i) => (
            <tr key={i} className="h-[34px] z-20">
              {column.map((row, j) => (
                <td
                  key={`${i}-${j}`}
                  className={`z-20 w-[34px] h-[34px] border border-gray-400`}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="absolute top-0 w-[340px] h-[340px] z-50"
        onMouseUp={(e) => {
          const { top, left } = boardRef.current.getBoundingClientRect();
          const { relativeX, relativeY } = calculateCooridnates(e, top, left);

          handleMouseUp(relativeY, relativeX);
        }}
        ref={boardRef}
      >
        <div className="relative w-[340px] h-[340px]">
          {ships.map((shipSection, sectionIndex) =>
            shipSection.ships.map((ship) => {
              return (
                ship.inGame && (
                  <Draggable key={ship.id} id={ship.id}>
                    <div
                      draggable
                      onDragStart={onDragStart}
                      id={ship.id}
                      data-position={ship.horizontal}
                      className={`absolute p-[2px] bg-indigo-600 z-[10]`}
                      style={inGameShipPosition(
                        ship.shipLength,
                        ship.left,
                        ship.top
                      )}
                    >
                      <div className="bg-indigo-100 h-[30px]"></div>
                    </div>
                  </Draggable>
                )
              );
            })
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Board;
