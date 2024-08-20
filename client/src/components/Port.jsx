import React, { useState } from "react";
import Draggable from "./Draggable";
import { useCurrentShip } from "../store/useCurrentShip";
import { useShips } from "../store/useShips";

const Port = () => {
  const { setShip } = useCurrentShip();
  const { ships } = useShips();

  const onDragStart = (e) => {
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    const currShipObj = {
      id: e.target.id,
      horizontal: e.target.getAttribute("data-position") === "true",
      left: Math.ceil(offsetX / 34),
      top: Math.ceil(offsetY / 34),
    };
    
    setShip(currShipObj);
  };
  return (
    <div className="flex gap-10">
      <div className="flex flex-col h-[300px] w-[300px] justify-evenly">
        {ships.map((shipSection, sectionIndex) => (
          <section key={`section-${sectionIndex}`} className="flex relative">
            {shipSection.ships.map((ship, i) => {
              return (
                !ship.inGame && (
                  <Draggable
                    key={ship.id}
                    id={ship.id}
                    left={ship.shipLength * (32 + sectionIndex * 6) * i}
                  >
                    <div
                      draggable
                      onDragStart={onDragStart}
                      id={ship.id}
                      data-position={ship.horizontal}
                      className={`border-indigo-600 p-[2px] bg-indigo-600 h-[34px]`}
                      style={{
                        width: ship.shipLength * 34,
                      }}
                    >
                      <div
                        className="bg-indigo-100 h-[30px]"
                      ></div>
                    </div>
                  </Draggable>
                )
              );
            })}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Port;
