import React, { memo } from "react";
import { useShips } from "../store/useShips";
import Draggable from "./Draggable";

import {
  handleSetCurrentShip,
  handleUnsetCurrentShip,
} from "../utils/handleSetCurrentShip";
import { usePort } from "../store/useShowPort";
const Port = () => {
  const { ships } = useShips();
  const { show } = usePort();
  return (
    show && (
      <div className="flex relative flex-col justify-evenly items-start h-[350px] w-[350px] select-none">
        <header className="w-full text-[14px]">
          Drag the ships to the grid, and then click to rotate:
        </header>
        {ships.map((shipsSection, i) => (
          <section key={i} className="flex gap-2">
            {shipsSection.ships.map(
              (ship, j) =>
                !ship.inGame && (
                  <Draggable
                    key={`${i}-${j}`}
                    id={ship.id}
                    left={ship.shipLength * (35 + i * 5) * j}
                  >
                    <div
                      id={ship.id}
                      onMouseDown={handleSetCurrentShip}
                      onMouseUp={handleUnsetCurrentShip}
                      className="h-[35px] bg-indigo-600 p-[2px] cursor-move"
                      style={{
                        width: 35 * ship.shipLength,
                      }}
                    >
                      <div className="w-full h-full bg-indigo-100"></div>
                    </div>
                  </Draggable>
                )
            )}
          </section>
        ))}
      </div>
    )
  );
};

export default memo(Port);
