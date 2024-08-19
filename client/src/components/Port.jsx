import React, { useState } from "react";
import Draggable from "./Draggable";
import { useCurrentShip } from "../store/useCurrentShip";

const Port = () => {
  const { setShip } = useCurrentShip();

  const [allShips, setAllShips] = useState([
    {
      shipLength: 4,
      ships: [{ id: "4u", horizontal: true }],
    },
    {
      shipLength: 3,
      ships: [
        { id: "3u-1", horizontal: true },
        { id: "3u-2", horizontal: true },
      ],
    },
    {
      shipLength: 2,
      ships: [
        { id: "2u-1", horizontal: true },
        { id: "2u-2", horizontal: true },
        { id: "2u-3", horizontal: true },
      ],
    },
    {
      shipLength: 1,
      ships: [
        { id: "1u-1", horizontal: true },
        { id: "1u-2", horizontal: true },
        { id: "1u-3", horizontal: true },
        { id: "1u-4", horizontal: true },
      ],
    },
  ]);

  const onDragStart = (e) => {
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    const currShipObj = {
      id: e.target.id,
      horizontal: e.target.getAttribute("data-position") === "true",
      left: Math.ceil(offsetX / 30),
      top: Math.ceil(offsetY / 30),
    };

    setShip(currShipObj);
  };
  return (
    <div className="flex gap-10">
      <div className="flex flex-col h-[300px] w-[300px] justify-evenly">
        {allShips.map((shipSection, sectionIndex) => (
          <section key={`section-${sectionIndex}`} className="flex gap-2">
            {shipSection.ships.map((ship) => (
              <Draggable key={ship.id} id={ship.id}>
                <div
                  draggable
                  onDragStart={onDragStart}
                  onDragEnd={() => {
                    console.log(2);
                  }}
                  id={ship.id}
                  data-position={ship.horizontal}
                  className={`h-[30px] border-[2px] border-indigo-600 bg-indigo-100`}
                  style={{
                    width: shipSection.shipLength * 30,
                    position: "relative",
                  }}
                ></div>
              </Draggable>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Port;
