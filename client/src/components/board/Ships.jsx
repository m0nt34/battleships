import React from "react";
import { useShips } from "../../store/useShips";
import Draggable from "../Draggable";
import {
  handleSetCurrentShip,
  handleUnsetCurrentShip,
} from "../../utils/handleSetCurrentShip";
import { setShipStyle } from "../../utils/setStyles";
const Ships = () => {
  const { ships } = useShips();
  return (
    <>
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
    </>
  );
};

export default Ships;
